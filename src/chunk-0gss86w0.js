// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { bt, _, Ks, t } from "./chunk-kawq2919.js";

import { dl, nt } from "./chunk-5wbhf1bk.js";

import { Py } from "./chunk-9yajep3y.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, Qr, Ww, ete, fc } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { Ye, l, E } from "./chunk-b0z4bv3v.js";

import { J, kx, We } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { OMe, yjo } from "./chunk-pjp651mq.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { sg } from "./chunk-cqgvwwgb.js";

import { Jl, a } from "./chunk-j016gcgm.js";

import { Aj } from "./chunk-zscnwzv2.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { ws, zp } from "./chunk-nnrb0acr.js";

import { Wn } from "./chunk-4v78v8fd.js";

import { Vbr, D$e, TN, iz, IQt, wR, cu, L$e, QRe, _bs, ZPt, bbs } from "./chunk-r8a304y3.js";

import { up, Es, ZR } from "./chunk-q6wab2jw.js";

import { Gce, p7, lYe, P_, XNe, dYe, c8, Yce, Jy, qms, Pxt, u8, Yms, QNe, Jms, uYe, whr, ZNe, e$e, t$e, Xce, Jce, fRe, Qce, IXt, mRe, gRe, ngs, rgs, Ixt, GDn, VDn, Oxt, ogs, Chr, Ki } from "./chunk-sqb9meyh.js";

import { hn, fe } from "./chunk-dd98x6x7.js";

import { sa, UO } from "./chunk-xywp7esx.js";

import { P8e, f2n, je } from "./chunk-s2t7g8m9.js";

import { gs } from "./chunk-qqd24q2y.js";

import { fh, aZ, dUe } from "./chunk-ewk363e4.js";

import { Uye, yrt, M0e, _rt, Kkt, aar, brt, lar, Zts, ens, ARn, Bye, Xkt, vrt, yYt, wns, vns, PRn, Ert, Ens, GRn, NIn, LQ, Iur, Yot, WIn, Kto, zIn, Yto, pqe } from "./chunk-84yp45y8.js";

import { v1, $Un, UUn, BUn, Mvs, Dvs } from "./chunk-9tdwgnpn.js";

import { hK, KF } from "./chunk-b47tzzqx.js";

import { Tdt, Fue } from "./chunk-77jtkrp2.js";

import { zf, vkr } from "./chunk-xmqqa853.js";

import { qM, J_e, mV } from "./chunk-bkx9v5fh.js";

import { pwe } from "./chunk-gzzx34vb.js";

import { Tke, qze, Yze, rHe } from "./chunk-95z0z7c8.js";

import { Kgn } from "./chunk-fdtwr731.js";

import { Tfn, rBt, oBt, P1o, I1o, qWe, Afn, O1o, c3n } from "./chunk-dycycqrm.js";

import { qUo, h6n, Lv } from "./chunk-ksn5eftd.js";

import { UVt } from "./chunk-kmph7cxf.js";

import { M1o, H1o, FQe } from "./chunk-m8a4pjra.js";

import { D1o, Eyt, L1o, age } from "./chunk-ym6w3bvh.js";

import { Hgn } from "./chunk-0n422amq.js";

import { p2 } from "./chunk-tfmnxgqc.js";

import { Qae, Lge } from "./chunk-wscn5rdp.js";

import { W$ } from "./chunk-t181ftwf.js";

import { md, o2t } from "./chunk-35bwwb5f.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { et } from "./chunk-59na0977.js";

import { o, v, T, _t, U } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { ye } from "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

var qo = /^[0-9a-f]{64}$/;

function wpn(e) {
  let {description: n} = e, r = e.input;
  if (typeof r !== "object" || r === null) return !1;
  let s = Object.keys(r), u = "content_digest" in r ? r.content_digest : void 0;
  return typeof n === "string" && n.length <= hK && KF(n) && s.length === 1 && typeof u === "string" && qo.test(u);
}

function Bo() {
  let e = new Map;
  return {
    known(n) {
      let r = Math.max(e.get(n) ?? 0, 1);
      return e.set(n, r), r;
    },
    next(n) {
      let r = (e.get(n) ?? 0) + 1;
      return e.set(n, r), r;
    }
  };
}

function Vo() {
  return {
    consentPin: yjo(),
    generations: Bo(),
    pointedToCommand: {
      shown: !1
    },
    setAsideSessions: new Set,
    decided: Me()
  };
}

var SQe = new K(Vo);

import { realpath as Zo } from "fs/promises";

var Go = /^[a-z_]{2,}:\[?[^/]*\]?$/;

function ze(e) {
  let r = [ e.launchDirReal, e.launchDir, ...e.sync !== void 0 ? [ e.sync.rootReal, ...e.sync.root !== void 0 ? [ e.sync.root ] : [] ] : [], ...e.extraReach ].filter(u => !Go.test(u)), s = r.find(u => !wR(u));
  if (s !== void 0) return t(`[deviceHooks] reach: a root that is not an absolute path (${JSON.stringify(s)}) \u2014 everything on this machine counts as in the cloud session's reach`, {
    level: "warn"
  }), [ TN ];
  return r.map(u => cu(u.replace(/\/+$/, "")) || "/");
}

function Sn(e, n) {
  return e.length === 1 && e[0] === TN || n.some(r => !wR(r));
}

function zo(e, n) {
  let r = ze(n);
  return Sn(r, e) || e.some(s => r.some(u => QRe(u, cu(s))));
}

function mt(e, n) {
  let r = ze(n);
  return Sn(r, e) || e.some(s => r.some(u => QRe(cu(s), u)));
}

function Ko(e) {
  switch (e.type) {
   case "command":
    return e.args === void 0 ? e.command : [ e.command, ...e.args ].join(" ");

   case "http":
    return e.url;

   case "prompt":
   case "agent":
    return e.prompt;

   case "mcp_tool":
    return `${e.server}/${e.tool}`;

   case "script":
    return e.file ?? Chr(e.script ?? "");
  }
}

function Te(e) {
  return Ks(Ko(e), {
    maxCodeUnits: 200
  });
}

async function bn(e, n, r, s = {}) {
  let u = [ ...s.sourceFile !== void 0 ? [ s.sourceFile ] : [], ...s.pluginRoot !== void 0 ? [ s.pluginRoot ] : [] ];
  for (let A of u) {
    let R = await r.realpath(A).catch(() => null);
    if (R === null || mt([ A, R ], n) || A === s.pluginRoot && zo([ A, R ], n)) return {
      kind: "source_in_reach",
      notice: `"${Te(e)}" is configured in a place the cloud session can write on this machine (${Ks(A, {
        maxCodeUnits: 200
      })}), so it is not run for the cloud session from this machine.`
    };
  }
  if (e.type !== "command") return {
    kind: "not_command",
    hookType: e.type
  };
  let h = D$e(e, {
    home: r.home,
    projectDir: n.projectDir,
    hookCwd: n.projectDirReal,
    defaultShell: r.defaultShell,
    shellPrefix: r.shellPrefix,
    ...s.pluginRoot !== void 0 && {
      pluginRoot: s.pluginRoot
    }
  });
  if (h.kind !== "script") return {
    kind: "opaque",
    reason: h.reason,
    notice: `"${Te(e)}" is not a single script this machine can pin, so it is not run for the cloud session from this machine: it would run whatever it names in the checkout, which the session may have written. Point it at one script outside the checkout (under ~/.claude, say).`
  };
  let w = Ks(h.rawPath, {
    maxCodeUnits: 200
  }), {located: k, digest: y} = await Jo(h.resolvedPath, n, r, s.resolved);
  if (k.realPath === null || y === null || !y.ok) return {
    kind: "unverifiable",
    rawPath: w,
    missing: k.realPath === null && k.missing,
    notice: `${w} could not be read and pinned (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so its hook is not run for the cloud session from this machine.`
  };
  let C = {
    pinnedTarget: {
      path: h.resolvedPath,
      realPath: k.realPath,
      sha256: y.sha256
    },
    bytes: y.bytes,
    rawPath: w,
    interpreter: h.interpreter,
    site: h.site
  };
  if (mt([ h.resolvedPath, k.realPath ], n)) return {
    kind: "script_in_reach",
    ...C,
    notice: `"${Te(e)}" sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not run for the cloud session from this machine. Move the script outside the checkout (under ~/.claude, say).`
  };
  return {
    kind: "script_outside_reach",
    ...C
  };
}

async function Jo(e, n, r, s) {
  let u = s?.get(e);
  if (u) return u;
  let h = (async () => {
    let w = await _bs(e, n, r), k = w.realPath === null ? null : await ZPt(w.realPath, r);
    return {
      located: w,
      digest: k
    };
  })();
  return s?.set(e, h), h;
}

function Rn() {
  return {
    stickyRoots: new Set,
    pinnedScopes: new Set,
    pinnedRoots: new Map,
    syncRoots: new Set,
    reachBaseline: null,
    commonRoots: null
  };
}

function En(e) {
  let n = {
    ...Xo(e.launchDir),
    ...e.deps
  }, {memory: r} = e;
  r.reachBaseline ??= new Map(ws.map(S => [ S, n.scopeWriteEntries(S) ])), r.commonRoots ??= n.commonWriteRoots();
  let {reachBaseline: s, commonRoots: u, syncRoots: h, stickyRoots: w} = r, k = S => {
    h.add(S), n.realpath(S).then(C => h.add(C), () => {});
  }, y = async () => {
    let S = n.addedDirectories().flatMap(C => {
      try {
        return [ ot(C, e.launchDir) ];
      } catch {
        return [];
      }
    });
    return [ ...S, ...await Promise.all(S.map(C => n.realpath(C).catch(() => C))) ];
  };
  return {
    noteSyncRoot: k,
    async current() {
      let S = !1, C = I => n.realpath(I).then(H => wR(H) ? H : I, () => (S = !0, I)), A = await C(e.launchDir), R = await C(e.projectDir), x = null;
      try {
        x = e.syncRoot();
      } catch {
        S = !0;
      }
      if (x !== null) h.add(x), h.add(await C(x));
      let z = x === null ? void 0 : {
        rootReal: await C(x),
        root: x
      }, V = D([ ...e.repoRoot !== null ? [ e.repoRoot, await C(e.repoRoot) ] : [], ...h, ...await y() ]), W = await C(e.configHome);
      if (await XNe({
        stickyRoots: w,
        pinnedScopes: r.pinnedScopes,
        pinnedRoots: r.pinnedRoots,
        baseRoots: [ ...lYe({
          launchDir: e.launchDir,
          launchDirReal: A
        }), ...V ],
        reachBaseline: s,
        scopeSettingsFile: n.scopeSettingsFile,
        realpath: n.realpath,
        commonRoots: () => u,
        scopeRoots: n.scopeWriteRoots
      }).catch(() => {
        S = !0;
      }), S) t("cloud session reach: a base root did not resolve (or sync state could not be read); every hook is treated as in reach for this answer", {
        level: "warn"
      });
      return {
        launchDir: e.launchDir,
        launchDirReal: A,
        configHomeReal: W,
        projectDir: e.projectDir,
        projectDirReal: R,
        ...z !== void 0 && {
          sync: z
        },
        extraReach: S ? [ "/" ] : D([ ...V, ...w ])
      };
    }
  };
}

function Xo(e) {
  return {
    realpath: Ert().realpath,
    commonWriteRoots: () => fRe(e),
    scopeWriteRoots: (n, r) => Qce(e, n, r),
    scopeWriteEntries: n => {
      let r = Jce(n, e), s = hn(n);
      if (n === "policySettings" || !s) return r;
      let u = ZR(s, n === "flagSettings" ? Ww() ?? ete() : void 0);
      if (u.errors.some(h => (h.severity ?? "fatal") === "fatal")) return t(`cloud session reach: the ${n} settings file could not be read or parsed at attach; its write grants are unknown, so every hook counts as in the session's reach`, {
        level: "warn"
      }), [ TN ];
      return D([ ...Jce(n, e, u.settings), ...r ]);
    },
    scopeSettingsFile: n => hn(n) ?? null,
    addedDirectories: () => fc()
  };
}

function vpn(e) {
  let n = {
    realpath: Zo,
    repoRootOf: Py,
    consentPath: OMe,
    configHome: Ee,
    ...e.deps
  }, {launchDir: r, memory: s} = e, u = null, h = () => u ??= (async () => {
    let w = R => n.realpath(R).catch(() => R), k = await w(r), y = D([ r, k ].map(R => n.repoRootOf(R)).filter(R => R !== null)), S = D((await Promise.all(y.map(w))).concat(y)), [C = null] = y;
    return {
      tracker: En({
        launchDir: r,
        projectDir: r,
        repoRoot: C,
        configHome: n.configHome(),
        syncRoot: e.syncRoot,
        memory: s,
        ...n.tracker !== void 0 && {
          deps: n.tracker
        }
      }),
      launchRoots: D([ r, k, ...S ]),
      repoRoots: S
    };
  })();
  return {
    async judge() {
      try {
        let {tracker: w, launchRoots: k, repoRoots: y} = await h(), S = await w.current();
        if (e.syncElsewhere !== !1) return "unknown";
        let C = [ ...ze(S), ...y ];
        if (C.some(z => z === TN || !wR(z))) return "unknown";
        let A = n.consentPath();
        if (!A.startsWith("/")) return "unknown";
        let R = await Ixt(A, C, n.realpath);
        if (R === !1) return "outside";
        if (R === "unresolvable") return "unknown";
        let x = [ A, await n.realpath(A).catch(() => A) ];
        if (P_(x, k)) return "in_launch_dir";
        return P_(x, [ ...s.syncRoots ]) ? "in_sync_root" : "in_other_root";
      } catch {
        return "unknown";
      }
    }
  };
}

function Yo() {
  let e = new Map;
  return {
    reachFor(n) {
      let r = e.get(n);
      if (r !== void 0) return r;
      let s = Rn();
      return e.set(n, s), s;
    }
  };
}

var Epn = new K(Yo);

import { realpath as Be } from "fs/promises";

import { isAbsolute as Wi } from "path";

import { dirname as Qo } from "path";

var Cn = {
  execCommand: Kto,
  execHttp: NIn
}, er = `${_rt}/project-folder-not-given-to-this-hook`, tr = [ [ "safe.bareRepository", "explicit" ], [ "core.hooksPath", "/dev/null" ], [ "core.fsmonitor", "false" ], [ "protocol.ext.allow", "never" ], [ "submodule.recurse", "false" ], [ "diff.ignoreSubmodules", "all" ], [ "status.submoduleSummary", "false" ], [ "fetch.recurseSubmodules", "false" ], [ "push.recurseSubmodules", "no" ] ];

function Mt(e) {
  if (e.omit.includes("CLAUDE_CODE_SHELL_PREFIX")) return;
  let n = e.base.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
  return n !== void 0 && n.startsWith("/") ? n : void 0;
}

async function An({hook: e, event: n, input: r, timeoutMs: s, env: u, startDirectory: h}, w, k, y) {
  if (y.aborted) return e.type === "http" ? {
    kind: "http",
    ok: !1,
    body: "",
    aborted: !0
  } : {
    kind: "command",
    stdout: "",
    stderr: "",
    status: 1,
    aborted: !0
  };
  let S = _(r);
  if (e.type === "http") try {
    return {
      kind: "http",
      ...await k.execHttp({
        ...e,
        timeout: void 0
      }, n, S, y, s, Kkt(u))
    };
  } catch (R) {
    return {
      kind: "http",
      ok: !1,
      body: "",
      error: R instanceof Error ? R.message : String(R)
    };
  }
  let {signal: C, cleanup: A} = Ys(y, {
    timeoutMs: s
  });
  try {
    return {
      kind: "command",
      ...await k.execCommand({
        hook: {
          ...e,
          timeout: Math.ceil(s / 1e3) + 30
        },
        hookEvent: n,
        jsonInput: S,
        envContext: c8(r),
        project: h === void 0 ? {
          originalCwd: w.launchDir,
          projectRoot: w.projectRoot
        } : {
          originalCwd: h,
          projectRoot: er
        },
        cwd: h ?? r.cwd,
        startsOutsideProject: h !== void 0,
        signal: C,
        envBase: u.base,
        envOmit: u.omit,
        shellPrefix: Mt(u),
        envExtra: {
          ...u.extra,
          CLAUDE_CODE_CLOUD_SESSION_ID: w.cloudSessionId,
          ...Aj(void 0, tr),
          ...h !== void 0 && {
            GIT_CEILING_DIRECTORIES: Qo(h)
          }
        }
      })
    };
  } catch (R) {
    return {
      kind: "command",
      stdout: "",
      stderr: R instanceof Error ? R.message : String(R),
      status: 1,
      spawnFailed: !0
    };
  } finally {
    A();
  }
}

function Ie(e, n) {
  return Ks(e, {
    maxCodeUnits: 400
  }) || n;
}

function Fe(e, n, r = {}) {
  let s = "async" in r ? {} : r;
  if (e !== "PreToolUse") return {
    ...s,
    decision: "block",
    reason: n
  };
  let u = "hookSpecificOutput" in s ? s.hookSpecificOutput : void 0, h = u?.hookEventName === "PreToolUse" ? u.additionalContext : void 0;
  return {
    ...s,
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: n,
      ...h !== void 0 && {
        additionalContext: h
      }
    }
  };
}

function Tn(e, n) {
  let r = nr(e, n);
  if (r.answer === null) return r;
  let {answer: s} = Yce(r.answer, n.event);
  if (r.exitClass === "2" && r.blocked && !Pxt(s) && e.kind === "command") {
    let u = Fe(n.event, `[${n.label}]: ${e.stderr || "No stderr output"}`, s);
    return {
      ...r,
      answer: Yce(u, n.event).answer,
      exitClass: "2",
      blocked: !0
    };
  }
  return {
    ...r,
    answer: s,
    blocked: Jy(s)
  };
}

function nr(e, {event: n, label: r, timedOut: s, timeoutMs: u, timeoutFailsClosed: h = !1}) {
  if (e.aborted && !s) return {
    answer: null,
    exitClass: "cancelled",
    blocked: !1
  };
  if (e.aborted) {
    let x = Math.round(u / 1e3), z = `[${r}]: timed out after ${x}s on the attached machine`;
    if (h && (n === "PreToolUse" || n === "UserPromptSubmit" || n === "UserPromptExpansion")) return {
      answer: Fe(n, z, vrt(n, z) ?? {}),
      exitClass: "timeout",
      blocked: !0
    };
    return {
      answer: {},
      exitClass: "timeout",
      localWarning: `[${r}]: timed out after ${x}s \u2014 output discarded; raise the hook's "timeout" to allow more time`,
      blocked: !1
    };
  }
  if (e.kind === "http") {
    if (e.error !== void 0 || !e.ok) {
      let V = Ie(e.error ?? `HTTP ${e.statusCode ?? "request failed"}`, "request failed"), W = e.error !== void 0 ? "the request to it could not be made from this machine" : `it answered HTTP ${e.statusCode ?? "with an error"}`, I = xn(n, `[${r}]: not run \u2014 ${W}; retry`);
      return {
        answer: I,
        exitClass: "other",
        localWarning: `[${r}]: ${V}`,
        blocked: Jy(I)
      };
    }
    let {json: x, validationError: z} = WIn(e.body);
    if (z !== void 0 || x === void 0) return {
      answer: {},
      exitClass: "other",
      localWarning: `[${r}]: ${Ie(z ?? "", "no JSON in the response")}`,
      blocked: !1
    };
    return {
      answer: x,
      exitClass: "0",
      blocked: Jy(x)
    };
  }
  if (e.spawnFailed) {
    let x = xn(n, `[${r}]: not run \u2014 it could not be started on this machine; retry`);
    return {
      answer: x,
      exitClass: "spawn_failed",
      localWarning: `[${r}]: ${Ie(e.stderr, "failed to start")}`,
      blocked: Jy(x)
    };
  }
  let w = e.status === 2 && zIn({
    hookEvent: n,
    stdout: e.stdout,
    stderr: e.stderr,
    stdioIncomplete: e.stdioIncomplete,
    stdioClosedWithoutEnd: e.stdioClosedWithoutEnd
  });
  if (e.status === 2 && (e.stdioIncomplete === !0 || e.stdioClosedWithoutEnd === !0)) {
    let x = vrt(n, `[${r}]: ${e.stderr || "No stderr output"}`);
    if (x !== void 0) return {
      answer: x,
      exitClass: "2",
      blocked: !0
    };
  }
  let k = n !== "Stop" && n !== "SubagentStop" && n !== "StopFailure";
  if (Iur(e.stdout)) {
    if (e.status === 2 && !w && k) return {
      answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    };
    return e.status === 0 ? {
      answer: {},
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: e.status === 2 ? "2" : "other",
      localWarning: `[${r}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
      blocked: !1
    };
  }
  let {json: y, plainText: S, validationError: C} = LQ(e.stdout), A = yYt(e, n, y), R = Xkt(e, n, e.stdout, A, x => LQ(x).json);
  if (R !== void 0) {
    let x = `[${r}]: output incomplete \u2014 its stdio was cut before end-of-stream on this machine; retry`, z = Bye.has(n) ? Fe(n, x, vrt(n, x) ?? {}) : {};
    return {
      answer: z,
      exitClass: "0",
      localWarning: `[${r}]: ${Ie(R, "stdio incomplete")}`,
      blocked: Jy(z)
    };
  }
  if (C !== void 0 && e.status !== 2) return {
    answer: {},
    exitClass: e.status === 0 ? "0" : "other",
    localWarning: `[${r}]: ${Ie(Yot(C, e.status, e.stderr), "hook JSON output failed validation")}`,
    blocked: !1
  };
  if (A !== void 0) {
    if ("async" in A) return e.status === 2 && !w && k ? {
      answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    } : e.status === 0 ? {
      answer: {},
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: e.status === 2 ? "2" : "other",
      localWarning: `[${r}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
      blocked: !1
    };
    let x = A;
    if (e.status === 2 && !Pxt(x)) return {
      answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`, x),
      exitClass: "2",
      blocked: !0
    };
    return {
      answer: x,
      exitClass: e.status === 0 ? "0" : e.status === 2 ? "2" : "other",
      blocked: Jy(x)
    };
  }
  if (e.status === 0) {
    let x = (S ?? "").trim();
    return (n === "UserPromptSubmit" || n === "UserPromptExpansion") && x !== "" ? {
      answer: {
        hookSpecificOutput: {
          hookEventName: n,
          additionalContext: x
        }
      },
      exitClass: "0",
      blocked: !1
    } : {
      answer: {},
      exitClass: "0",
      blocked: !1
    };
  }
  if (e.status === 2) {
    if (w) return {
      answer: {},
      exitClass: "2",
      localWarning: `[${r}]: the hook script appears to be missing (${Ie(e.stderr, "no such file")})`,
      blocked: !1
    };
    return {
      answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    };
  }
  return {
    answer: {},
    exitClass: "other",
    localWarning: `[${r}]: failed with non-blocking status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
    blocked: !1
  };
}

function xn(e, n) {
  return e === "PreToolUse" ? {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: n
    }
  } : {};
}

var or = {
  isAnsweredOn: () => Yze(),
  isAnsweredOff: () => rHe({
    cloudClient: !0
  }) !== void 0
};

function In(e = or) {
  let n = !1;
  return () => {
    if (e.isAnsweredOff()) return "answered_off";
    return n ||= e.isAnsweredOn(), n ? "answered_on" : "unanswered";
  };
}

import { devNull as rr } from "os";

import { basename as wt, delimiter as Dn, dirname as ir, isAbsolute as Ft, resolve as vt } from "path";

var sr = 3e4, ar = 8, Ut = 64, lr = 1048576, Lt = 2e3, Pn = 1e3, dr = 256, dt = 256, cr = 64, ur = 8, On = 256, fr = rr, hr = 'started in an empty folder \xb7 mark it "cloud": "device" if it needs the project', qn = /^[A-Za-z0-9_.:-]{1,128}$/, pr = /^[a-z]{1,16}$/, mr = "Not running your hooks for the cloud session: the service could not vouch for the sender of its hook requests under your organization's trusted-device policy. The session goes on without them.";

function gr(e) {
  return e.deadlineMs !== void 0 && (e.ageMs === void 0 || e.ageMs > e.deadlineMs + sr);
}

function be(e) {
  return qn.test(e) ? e : Ks(e, {
    maxCodeUnits: 64
  });
}

function he(e, n, r) {
  return e === "PreToolUse" ? {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: `[${n}]: ${r}`
    }
  } : {};
}

function $n(e, n, r) {
  return n.rawPath === r ? e : PRn(e, n.site, r);
}

function Hn(e, n) {
  if (typeof e !== "string" || n === null || !e.startsWith("/")) return !1;
  if (e.trim() !== e || /^\/(?:proc|dev|net|network)(?:\/|$)/i.test(e)) return !1;
  if (e.split("/").slice(1).some(s => s === "" || s === "." || s === "..")) return !1;
  return !IQt(e, Tfn(n.containerProjectDir));
}

var yt = P1o;

function kr(e, n) {
  if (yt(e)) return !0;
  let r = oBt(e), s = r[0] === "tool_calls" ? 2 : 0;
  if (r[s] !== "tool_response") return !1;
  let u = r.slice(0, s + 1).reduce((h, w) => xe(h) ? h[w] : void 0, n);
  for (let h of r.slice(s + 1)) {
    if (Array.isArray(u)) return !1;
    u = xe(u) ? u[h] : void 0;
  }
  return !0;
}

function wr(e, n, r) {
  let s = oBt(e), u = s[0] === "tool_calls", h = u ? s.slice(2) : s;
  if (h[0] === "tool_response") return !0;
  if (h[0] !== "tool_input" || h.length !== 2 || !xe(n)) return !1;
  let w = n.tool_calls, k = u ? xe(w) ? w[s[1] ?? ""] : void 0 : n, y = xe(k) ? k.tool_name : void 0, S = typeof y === "string" ? Afn(y, r) : void 0;
  return S !== void 0 && h[1] === S;
}

var _r = /^[A-Za-z][A-Za-z0-9_-]{0,40}$/, gt = Symbol("deviceHooks.disconnect"), Nn = Symbol("deviceHooks.deadline");

function vr(e) {
  let n = [ e.session_id, e.agent_id, e.prompt_id ];
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") n.push(e.tool_use_id);
  return n.every(r => r === void 0 || qn.test(r) && !r.includes("..")) && (e.permission_mode === void 0 || _r.test(e.permission_mode)) && (e.effort === void 0 || pr.test(e.effort.level)) && (e.agent_type === void 0 || Ks(e.agent_type, {
    maxCodeUnits: 64
  }) === e.agent_type);
}

function Bn(e, n) {
  if (e.type === "http") try {
    return new URL(e.url).host || "http hook";
  } catch {
    return "http hook";
  }
  let r = n?.kind === "script" ? wt(n.rawPath) : wt(e.command.trim().split(/\s+/)[0] ?? "");
  return Ks(r, {
    maxCodeUnits: 64
  }) || "hook";
}

function Vn(e, n, r) {
  if (r.wireLabel === "basename") return n;
  if (e.type === "http") try {
    return Ks(new URL(e.url).origin, {
      maxCodeUnits: 200
    });
  } catch {
    return n;
  }
  return Ks(e.command, {
    maxCodeUnits: 200
  });
}

function yr(e, n) {
  let r = {
    ...e,
    transcript_path: n
  };
  return "agent_transcript_path" in r ? {
    ...r,
    agent_transcript_path: n
  } : r;
}

function xe(e) {
  return typeof e === "object" && e !== null;
}

function Wt(e, n) {
  return oBt(n).reduce((r, s) => xe(r) ? r[s] : void 0, e);
}

function Sr(e, n) {
  let r = [], s = (w, k, y, S) => {
    if (r.length > dt || S > ur) return;
    if (typeof k === "string") {
      if (y && k !== "" && !Ft(k)) r.push(w);
      return;
    }
    if (Array.isArray(k)) {
      k.forEach((C, A) => s(`${w}/${A}`, C, y, S + 1));
      return;
    }
    if (xe(k)) {
      let C = Object.keys(k).some(qWe);
      for (let [A, R] of Object.entries(k)) s(`${w}/${rBt(A)}`, R, y && !C || qWe(A), S + 1);
    }
  }, u = (w, k, y) => {
    if (!xe(y)) return;
    let S = typeof k === "string" ? Afn(k, n) : void 0;
    for (let [C, A] of Object.entries(y)) s(`${w}/tool_input/${rBt(C)}`, A, C === S || qWe(C), 1);
  }, h = (w, k) => {
    if (!xe(k) || Array.isArray(k)) return;
    let y = (S, C, A) => {
      if ((yt(S) || I1o(S) || qWe(C)) && typeof A === "string" && A !== "" && !Ft(A) && A.length <= 4096 && !/\p{Cc}/u.test(A)) r.push(S);
    };
    for (let [S, C] of Object.entries(k)) {
      let A = `${w}/tool_response/${rBt(S)}`;
      if (y(A, S, C), xe(C) && !Array.isArray(C)) for (let [R, x] of Object.entries(C)) y(`${A}/${rBt(R)}`, R, x);
    }
  };
  if ("tool_input" in e) u("", "tool_name" in e ? e.tool_name : void 0, e.tool_input);
  if ("tool_response" in e) h("", e.tool_response);
  if ("tool_calls" in e && Array.isArray(e.tool_calls)) e.tool_calls.forEach((w, k) => {
    if (xe(w)) {
      if (u(`/tool_calls/${k}`, w.tool_name, w.tool_input), "tool_response" in w) h(`/tool_calls/${k}`, w.tool_response);
    }
  });
  return r;
}

async function kt(e, n) {
  let r = e, s = [];
  for (;;) {
    if (s.length > cr) return null;
    try {
      let u = await n.realpath(r);
      return s.length === 0 ? u : vt(u, ...s);
    } catch (u) {
      if (E(u) !== "ENOENT") return null;
      let h = await n.lstat(r).then(k => k.isSymbolicLink()).catch(() => !1), w = ir(r);
      if (h || w === r) return null;
      s.unshift(wt(r)), r = w;
    }
  }
}

async function Mn(e, n, r, s) {
  let u = w => w !== null && (iz(w, r.real) || iz(w, r.dir));
  return (await Promise.all(e.map(async w => {
    let k = Wt(n, w);
    if (typeof k !== "string" || k === "") return null;
    let y = Ft(k) ? k : vt(n.cwd, k);
    return u(await kt(y, s)) ? null : w;
  }))).filter(w => w !== null);
}

function br(e) {
  let n = 0, r = [], s = () => {
    n -= 1;
    let u = r.shift();
    if (u !== void 0) n += 1, u.grant();
  };
  return {
    acquire(u, h) {
      if (h.aborted) return Promise.resolve(null);
      if (n < ar) return n += 1, Promise.resolve(Ln(s));
      if (u <= 0) return Promise.resolve(null);
      return new Promise(w => {
        let k = !1, y = R => {
          if (k) {
            if (R !== null) R();
            return;
          }
          k = !0, A.clear(), h.removeEventListener("abort", C);
          let x = r.indexOf(S);
          if (x !== -1) r.splice(x, 1);
          w(R);
        }, S = {
          grant: () => y(Ln(s)),
          refuse: () => y(null)
        }, C = () => y(null), A = e.setTimer(() => y(null), u);
        h.addEventListener("abort", C, {
          once: !0
        }), r.push(S);
      });
    },
    refuseAll() {
      for (let u of r.splice(0)) u.refuse();
    }
  };
}

function Ln(e) {
  let n = !1;
  return () => {
    if (n) return;
    n = !0, e();
  };
}

function Gn(e) {
  let n = new Map, r = new Map, s = br(e), u = (P, N, G) => {
    let B = N.local.hook.timeout !== void 0 && N.local.hook.timeout > 0 ? N.local.hook.timeout * 1e3 : e.defaultTimeoutMs(u8(N.local.event) ? N.local.event : "Stop");
    return (P.deadlineMs ?? 2 * B + 2 * Lt) - (e.now() - G) - Lt / 2;
  }, h = new Set, w = new Map, {repinned: k, everInReach: y, answered: S, withdrawn: C} = e.memory, A = Number.NEGATIVE_INFINITY, R = P => {
    if (P.size > dr) {
      let N = P.keys().next().value;
      if (N !== void 0) P.delete(N);
    }
  }, x = (P, N, G) => {
    S.delete(P), S.set(P, {
      callbackId: N,
      answer: G
    }), R(S);
  }, z = P => {
    C.delete(P), C.add(P), R(C);
  }, V = (P, N, G) => {
    if (h.has(P)) return;
    h.add(P), e.onLine(N, G);
  }, W = (P, N) => {
    let G = e.now();
    if (G - (w.get(P) ?? Number.NEGATIVE_INFINITY) < 6e4) return;
    w.set(P, G), e.onLine(N, "warning");
  }, I = (P, N, G) => e.telemetry({
    outcome: P.outcome,
    event: P.event ?? null,
    kind: P.kind ?? null,
    exitClass: P.exitClass ?? null,
    translatedPaths: P.translatedPaths ?? 0,
    replay: P.replay ?? !1,
    blocked: P.blocked ?? !1,
    staged: P.staged ?? !1,
    projectFrame: P.projectFrame ?? !1,
    repinned: P.repinned ?? !1,
    waitedMs: P.waitedMs ?? 0,
    durationMs: Math.max(0, e.now() - N),
    attestation: G
  }), H = async (P, N, G, B, te, Y) => {
    let M = P.local.pinnedTarget, q = ne => he(te, B.wire, ne);
    if (M === void 0) {
      if (G !== null && G.kind === "script") {
        let ne = await kt(G.resolvedPath, e.pin);
        if (ne === null) return V(`unvouched:unjudgeable:${P.wire.id}`, `Not running ${B.local} for the cloud session: its file cannot be found or judged on this machine.`, "warning"), 
        {
          kind: "refuse",
          answer: q(`not run \u2014 its file cannot be found or judged on ${Y.displayName}`),
          outcome: "pin_unreadable"
        };
        let se = y.has(P.wire.id) || P_([ G.resolvedPath, ne ], [ ...Y.cloudWritableRoots, ...e.extraWritableRoots() ]);
        if (se) y.add(P.wire.id);
        if (se && P.local.cloudOptIn !== !0) return V(`reach:${P.wire.id}`, `Not running ${B.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info"), 
        {
          kind: "refuse",
          answer: q(`not run \u2014 its file now sits where the cloud session can write on ${Y.displayName} and it is not marked cloud: "device"`),
          outcome: "in_reach_refused"
        };
        if (se) return V(`unvouched:in_reach:${P.wire.id}`, `Not running ${B.local} for the cloud session: it could not be pinned when this session started and now sits where the session can write; review the file, then restart claude --cloud to offer it again.`, "warning"), 
        {
          kind: "refuse",
          answer: q(`not run \u2014 its file could not be pinned on ${Y.displayName} and sits where the cloud session can write; review it there`),
          outcome: "in_reach_refused"
        };
      }
      return {
        kind: "run",
        hook: G !== null && G.kind === "script" ? $n(N, G, G.resolvedPath) : N,
        staged: null,
        repinned: !1
      };
    }
    let Q = k.get(P.wire.id) ?? M.sha256, X = await wns({
      ...M,
      sha256: Q
    }, e.pin), L = y.has(P.wire.id) || P_([ M.path, M.realPath, ...X.realPath !== void 0 ? [ X.realPath ] : [] ], [ ...Y.cloudWritableRoots, ...e.extraWritableRoots() ]);
    if (L) y.add(P.wire.id);
    if (L && P.local.cloudOptIn !== !0) return V(`reach:${P.wire.id}`, `Not running ${B.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info"), 
    {
      kind: "refuse",
      answer: q(`not run \u2014 its file now sits where the cloud session can write on ${Y.displayName} and it is not marked cloud: "device"; move it under ~/.claude or mark the entry`),
      outcome: "in_reach_refused"
    };
    let ee, re = Q, ie = k.has(P.wire.id);
    if (X.ok) ee = X.bytes; else if (X.reason === "changed" && !L && Y.repinChangedScripts) k.set(P.wire.id, X.current.sha256), 
    ie = !0, ee = X.current.bytes, re = X.current.sha256, V(`repin:${P.wire.id}:${X.current.sha256}`, `${B.local} changed on this machine since it was registered; the cloud session's runs use the current version.`, "info"); else if (X.reason === "changed" && !L) {
      let ne = Y.inventory.forwarded.some(se => se.wire.event === "PreToolUse" && se.local.pinnedTarget?.path === M.path);
      return V(`changed:${M.path}${ne ? ":guard" : ""}`, `${B.local} changed since it was registered for this cloud session, so it won't run.${ne ? " Matching tool calls are blocked." : ""} If you edited it, restart claude --cloud. If not, check the file.`, "warning"), 
      {
        kind: "refuse",
        answer: q(`not run \u2014 its file changed on ${Y.displayName} since it was registered; it runs again once that machine re-registers it`),
        outcome: "pin_changed"
      };
    } else if (X.reason === "changed") return V(`pin:changed:${P.wire.id}`, `Not running ${B.local} for the cloud session: its file changed while the session could write to it on this machine \u2014 review the file before trusting it again.`, "warning"), 
    {
      kind: "refuse",
      answer: q(`not run \u2014 its file changed on ${Y.displayName} while the cloud session could write to it; review the file there before trusting it again`),
      outcome: "pin_refused"
    }; else if (X.reason === "multiply_linked" || X.reason === "relocated") {
      let ne = X.reason === "multiply_linked" ? "it now has more than one hard link" : "its path now leads to a different file than the one registered";
      return V(`pin:${X.reason}:${P.wire.id}`, `Not running ${B.local} for the cloud session: ${ne} on this machine \u2014 look at the file; if you re-linked or moved it yourself, relaunch claude --cloud here to register it again.`, "warning"), 
      {
        kind: "refuse",
        answer: q(`not run \u2014 ${ne} on ${Y.displayName}; review it there`),
        outcome: "pin_refused"
      };
    } else {
      let ne = X.reason.replace("_", " ");
      return V(`pin:${X.reason}:${P.wire.id}`, `Not running ${B.local} for the cloud session: the file it runs can no longer be read on this machine (${ne}).`, "warning"), 
      {
        kind: "refuse",
        answer: q(`not run \u2014 its file on ${Y.displayName} can no longer be read (${ne}); it runs again once that machine re-registers it`),
        outcome: L ? "pin_refused" : "pin_unreadable"
      };
    }
    if (G?.kind !== "script" || G.resolvedPath !== M.path) return V(`pin:parse:${P.wire.id}`, `Not running ${B.local} for the cloud session: its command no longer reads as the script that was registered.`, "warning"), 
    {
      kind: "refuse",
      answer: q(`not run \u2014 its command on ${Y.displayName} no longer names the script that was registered`),
      outcome: "pin_refused"
    };
    if (!(Y.stageVerifiedBytes === "always" || Y.stageVerifiedBytes === "in_reach" && L)) return {
      kind: "run",
      hook: $n(N, G, M.path),
      staged: null,
      repinned: ie
    };
    try {
      let ne = await e.staging.stage(re, ee, wt(M.path));
      return {
        kind: "run",
        hook: PRn(N, G.site, ne.path),
        staged: ne,
        repinned: ie
      };
    } catch {
      return V(`stage:${P.wire.id}`, `Not running ${B.local} for the cloud session: couldn't save a private copy of it.${te === "PreToolUse" ? " Matching tool calls are blocked." : ""} If the cloud session can write your temporary folder, set CLAUDE_CODE_TMPDIR to a folder it can't write to and restart claude --cloud.`, "warning"), 
      {
        kind: "refuse",
        answer: q(`not run \u2014 ${Y.displayName} couldn't save a private copy of it. If this session can write the temporary folder on that machine, set CLAUDE_CODE_TMPDIR there to a folder it can't write to and restart claude --cloud.`),
        outcome: "staging_failed"
      };
    }
  }, F = async (P, N, G, B, te) => {
    let Y = G.local.event;
    if (!u8(Y)) return {
      answer: {},
      telemetry: {
        outcome: "event_mismatch"
      }
    };
    let M = G.local.hook;
    if (M.type !== "command" && M.type !== "http") {
      let oe = he(Y, `hook on ${N.displayName}`, "not run \u2014 it is not a kind of hook that machine can run for a cloud session; retry");
      return {
        answer: oe,
        telemetry: {
          event: Y,
          outcome: "unsupported_kind",
          blocked: Jy(oe)
        }
      };
    }
    let q = {
      event: Y,
      kind: M.type
    }, Q = M.type === "command" ? e.parseTarget(M) : null, X = Bn(M, Q), L = {
      local: X,
      wire: Vn(M, X, N)
    };
    if (gr(P)) {
      V("stale", 'A hook request from the cloud session arrived already past its deadline (this machine was asleep, offline, or its stream was running behind). A guard answered "retry"; anything else had no opinion.', "warning");
      let oe = he(Y, L.wire, `not run \u2014 the request reached ${N.displayName} already past its deadline (that machine was asleep or its stream ran behind); retry`);
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "stale",
          blocked: Jy(oe)
        }
      };
    }
    let ee = 0;
    try {
      let oe = _(P.input);
      ee = typeof oe === "string" ? Buffer.byteLength(oe, "utf8") : 0;
    } catch {
      ee = 0;
    }
    if (ee > lr) {
      let oe = Fn(G, N, e, "too_large");
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "input_too_large",
          blocked: Jy(oe)
        }
      };
    }
    let re = P8e().safeParse(P.input);
    if (!re.success || !vr(re.data)) {
      let oe = he(Y, L.wire, `not run \u2014 the event could not be read on ${N.displayName}; retry`);
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "invalid_input",
          blocked: Jy(oe)
        }
      };
    }
    if (re.data.hook_event_name !== Y) {
      let oe = he(Y, L.wire, `not run \u2014 the event does not match the hook it names on ${N.displayName}; retry`);
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "event_name_mismatch",
          blocked: Jy(oe)
        }
      };
    }
    if (N.roots === null) {
      let oe = he(Y, L.wire, `not run \u2014 ${N.displayName} does not know this session's directories yet; retry`);
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "no_roots",
          blocked: Jy(oe)
        }
      };
    }
    if (!e.trustAccepted()) {
      let oe = he(Y, L.wire, `not run \u2014 its folder is no longer marked trusted on ${N.displayName}`);
      return {
        answer: oe,
        telemetry: {
          ...q,
          outcome: "untrusted",
          blocked: Jy(oe)
        }
      };
    }
    let ie = e.toolAliases?.();
    if (!pqe(re.data, G.local.matcher, ie)) return {
      answer: {},
      telemetry: {
        ...q,
        outcome: "event_mismatch"
      }
    };
    let ae = O1o(re.data, N.roots, {
      cloudSessionId: N.cloudSessionId
    }, ie), ne = ae.input, se = Object.keys(ne.cloud_session.original.paths), j = se.length, Z = {
      dir: N.frame.launchDir,
      real: N.launchDirReal
    }, le = async oe => {
      let ue = ge => iz(ge, Z.real) || iz(ge, Z.dir);
      try {
        return ue(await e.pin.realpath(oe)) ? "inside" : "unjudgeable";
      } catch (ge) {
        if (E(ge) !== "ENOENT") return "unjudgeable";
        let Le = await kt(oe, e.pin);
        return Le !== null && ue(Le) ? "missing" : "unjudgeable";
      }
    }, de = await le(ne.cwd);
    if (de !== "inside") e.debug(`[deviceHooks] ${be(P.requestId)}: translated cwd is ${de === "missing" ? "not an existing directory" : "not judgeable as a directory inside the launch directory"}; running from the launch directory`), 
    ne = {
      ...ne,
      cwd: Z.dir
    };
    let _e = Sr(ne, ie), ve = [ ...se.filter(oe => kr(oe, ne)), ..._e ], me = ve.length > dt ? ve : await Mn(ve, ne, Z, e.pin), Ae = (ae.untranslated.includes("/cwd") || de === "unjudgeable") && _e.length > 0, $e = ae.untranslated.flatMap(oe => {
      let ue = Wt(re.data, oe);
      return yt(oe) && !wr(oe, re.data, ie) && typeof ue === "string" && Hn(ue, N.roots) ? [ {
        pointer: oe,
        value: ue
      } ] : [];
    }), Ve = async oe => {
      if (oe.length > dt) return {
        waived: [],
        namingFilesHere: oe.map(ge => ge.pointer)
      };
      let ue = await Promise.all(oe.map(async ({pointer: ge, value: Le}) => {
        let Re = await kt(Le, e.pin), Se = Re !== null && (iz(Re, Z.real) || iz(Re, Z.dir)), Ge = Re !== null && !Se && await e.pin.realpath(Le).then(() => !1, $t => E($t) === "ENOENT");
        return {
          pointer: ge,
          waived: Se || Ge
        };
      }));
      return {
        waived: ue.filter(ge => ge.waived).map(ge => ge.pointer),
        namingFilesHere: ue.filter(ge => !ge.waived).map(ge => ge.pointer)
      };
    }, ht = await Ve($e), Mo = ht.namingFilesHere, Lo = N.denyUnjudgeablePaths ? [] : ht.waived, un = [ ...ae.untranslated.filter(oe => yt(oe) && !Lo.includes(oe)), ...Ae ? [ "/cwd" ] : [], ...me ];
    if (un.length > 0) {
      let oe = !Ae && me.length === 0 && Mo.length === 0 && ve.length <= dt && un.every(ue => Hn(Wt(re.data, ue), N.roots));
      if (!(oe && N.runWithUntranslatedPaths)) {
        V(`untranslated:${G.wire.id}:${oe ? "container" : "unjudgeable"}`, oe ? `Skipped ${L.local} for the cloud session: the file it would look at exists only in the cloud, not in the synced project on this machine.` : `Not running ${L.local} for the cloud session: the event names a path this machine could not map to its own files.`, "info");
        let ue = !oe || N.denyUnjudgeablePaths ? he(Y, L.wire, oe ? "not run \u2014 the event names a file that exists only in the cloud, so this machine could not judge it" : "not run \u2014 the event names a path this machine could not map to its own files; retry with a plain path inside the project") : {};
        return {
          answer: ue,
          telemetry: {
            ...q,
            outcome: "untranslated_skipped",
            translatedPaths: j,
            blocked: Jy(ue)
          }
        };
      }
    }
    let He = yr(ne, await e.emptyTranscriptPath().catch(() => fr));
    if (M.if) {
      let oe;
      try {
        oe = await e.evaluateCondition(M.if, He);
      } catch {
        oe = null;
      }
      if (oe === null) {
        let ue = he(Y, L.wire, "not run \u2014 its condition could not be evaluated on this machine; retry");
        return {
          answer: ue,
          telemetry: {
            ...q,
            outcome: "condition_error",
            translatedPaths: j,
            blocked: Jy(ue)
          }
        };
      }
      if (!oe) return {
        answer: {},
        telemetry: {
          ...q,
          outcome: "condition_false",
          translatedPaths: j
        }
      };
    }
    let ke = M.type === "command" ? await H(G, M, Q, L, Y, N) : {
      kind: "run",
      hook: M,
      staged: null,
      repinned: !1
    };
    if (ke.kind === "refuse") return {
      answer: ke.answer,
      telemetry: {
        ...q,
        outcome: ke.outcome,
        translatedPaths: j,
        blocked: Jy(ke.answer)
      }
    };
    let Ne = null;
    try {
      if (te.aborted) return {
        answer: null,
        telemetry: {
          ...q,
          outcome: "cancelled"
        }
      };
      let oe = M.timeout !== void 0 && M.timeout > 0 ? M.timeout * 1e3 : e.defaultTimeoutMs(Y), ue = () => P.deadlineMs !== void 0 ? P.deadlineMs - (e.now() - B) - Lt : oe, ge = ue(), Le = e.now(), Re = await s.acquire(ge, te), Se = Math.max(0, e.now() - Le), Ge = Re !== null && ue() < Pn;
      if (Ge && Re !== null) Re(), Re = null;
      if (Re === null) {
        if (te.aborted) return {
          answer: null,
          telemetry: {
            ...q,
            outcome: "cancelled",
            waitedMs: Se
          }
        };
        if (!Ge && e.now() - A >= 6e4) A = e.now(), e.onLine('The cloud session is asking for more hooks at once than this machine can run in time; some were answered "retry" (guards) or with no opinion.', "warning");
        let Ze = he(Y, L.wire, Ge ? `not run \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry` : `not run \u2014 ${N.displayName} is running too many hooks for the cloud session at once; retry`);
        return {
          answer: Ze,
          telemetry: {
            ...q,
            outcome: Ge ? "too_late" : "no_slot",
            translatedPaths: j,
            blocked: Jy(Ze),
            waitedMs: Se
          }
        };
      }
      let $t = Re;
      try {
        if (te.aborted) return {
          answer: null,
          telemetry: {
            ...q,
            outcome: "cancelled",
            waitedMs: Se
          }
        };
        let Ze = He.cwd === Z.dir ? "inside" : await le(He.cwd), Ht = He;
        if (Ze !== "inside") Ht = {
          ...He,
          cwd: Z.dir
        };
        let fn = Ze === "unjudgeable" && _e.length > 0 || ve.length <= dt && (await Mn(ve, Ht, Z, e.pin)).length > 0, Fo = !fn && $e.length > 0 && (await Ve($e)).namingFilesHere.length > 0;
        if (fn || Fo) {
          let ce = he(Y, L.wire, `not run \u2014 a path the event names moved outside the project on ${N.displayName} while it waited; retry`);
          return {
            answer: ce,
            telemetry: {
              ...q,
              outcome: "untranslated_skipped",
              translatedPaths: j,
              blocked: Jy(ce),
              waitedMs: Se
            }
          };
        }
        if (te.aborted) return {
          answer: null,
          telemetry: {
            ...q,
            outcome: "cancelled",
            waitedMs: Se
          }
        };
        let Nt = Math.min(oe, ue());
        if (ue() < Pn) {
          let ce = he(Y, L.wire, `not run \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry`);
          return {
            answer: ce,
            telemetry: {
              ...q,
              outcome: "too_late",
              translatedPaths: j,
              blocked: Jy(ce),
              waitedMs: Se
            }
          };
        }
        let Qe = e.hostEnv(), pn = [ N.frame.launchDir, N.launchDirReal, ...N.cloudWritableRoots, ...e.extraWritableRoots() ], mn = ce => ce !== TN && !wR(ce), pt = O() === "windows" && pn.some(mn) ? [ TN ] : pn.filter(ce => !mn(ce)).map(ce => ce === TN ? ce : cu(vt(ce))), tt = await e.childEnvironment(pt, Qe), Wo = ce => pt.some(Pe => QRe(cu(vt(ce)), Pe)) || O() === "windows" && Ar(ce, pt), gn = Cr(Qe.CLAUDE_CODE_SHELL_PREFIX ?? "", {
          home: Qe.HOME,
          launchDir: N.frame.launchDir
        }), kn = await Promise.all(gn.map(ce => e.placePath(ce).then(Pe => Pe === "unreadable" ? jn : Pe === "absent" ? ce : Pe))), rt = (kn.includes(jn) || [ ...gn, ...kn ].some(Wo)) && !tt.omit.includes("CLAUDE_CODE_SHELL_PREFIX") ? {
          ...tt,
          omit: [ ...tt.omit, "CLAUDE_CODE_SHELL_PREFIX" ],
          extra: Es(tt.extra, "CLAUDE_CODE_SHELL_PREFIX")
        } : tt;
        if (Qe.CLAUDE_CODE_SHELL_PREFIX?.trim() && ke.hook.type === "command" && ke.hook.args === void 0 && Mt(rt) === void 0) V("prefix-unwrapped", 'Hooks marked cloud: "device" run for the cloud session WITHOUT your CLAUDE_CODE_SHELL_PREFIX here: this machine cannot vouch for that wrapper (it is not an absolute path outside what the session can write).', "warning");
        let wn = rt.extra.PATH, it = wn === void 0 || wn === "" ? {
          ...rt,
          extra: {
            ...rt.extra,
            PATH: _rt
          }
        } : rt, Uo = new Set((it.extra.PATH ?? "").split(Dn)), st = (Qe.PATH ?? "").split(Dn).filter(ce => ce !== "" && !Uo.has(ce));
        if (it.omit.length > 0) e.debug(`[deviceHooks] ${be(P.requestId)}: not passing on ${it.omit.join(", ")}`);
        if (st.length > 0) V("search-path-trimmed", `Hooks the cloud session forwards here run without ${st.length} PATH entr${st.length === 1 ? "y" : "ies"} the session can write to or that cannot be resolved on this machine (${st.slice(0, 3).map(ce => Wn(ce)).join(", ")}${st.length > 3 ? ", \u2026" : ""}); a tool installed only there is "not found" for them.`, "debug");
        let lt = ke.hook.type !== "command" ? void 0 : ke.hook.args !== void 0 ? ke.hook.command.includes("/") ? void 0 : ke.hook.command : Q?.kind === "script" && Q.interpreter !== null ? Q.interpreter : void 0;
        if (lt !== void 0) {
          if (await e.resolveProgram(lt, it.extra.PATH ?? "", pt) === "in_reach") {
            V(`program:${lt}`, `Not running hooks through ${lt} for the cloud session: on this machine that name leads to a file the session can write.`, "warning");
            let Pe = he(Y, L.wire, `not run \u2014 ${lt} on ${N.displayName} leads to a file the cloud session can write`);
            return {
              answer: Pe,
              telemetry: {
                ...q,
                outcome: "in_reach_refused",
                translatedPaths: j,
                blocked: Jy(Pe),
                waitedMs: Se
              }
            };
          }
        }
        if (ke.hook.type === "command" && G.local.cloudOptIn !== !0 && N.unmarkedStartFolder === "private") {
          if (Ne = await e.staging.runDirectory().catch(() => null), Ne === null) {
            V(`run-folder:${G.wire.id}`, `Not running ${L.local} for the cloud session: this machine has no private folder to start it in.`, "warning");
            let ce = he(Y, L.wire, `not run \u2014 ${N.displayName} has no private folder to start it in`);
            return {
              answer: ce,
              telemetry: {
                ...q,
                outcome: "staging_failed",
                translatedPaths: j,
                blocked: Jy(ce),
                waitedMs: Se
              }
            };
          }
        }
        let jo = e.now(), _n = await e.run({
          hook: ke.hook,
          event: Y,
          input: Ht,
          timeoutMs: Nt,
          env: it,
          ...Ne !== null && {
            startDirectory: Ne.path
          }
        }, N.frame, te), vn = _n.aborted === !0 && !te.aborted, we = vn && Nt < oe ? {
          answer: he(Y, L.wire, `not run to completion \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry`),
          exitClass: "timeout",
          blocked: Y === "PreToolUse",
          localWarning: void 0
        } : Tn(_n, {
          event: Y,
          label: L.wire,
          timedOut: vn,
          timeoutMs: Nt,
          timeoutFailsClosed: N.timeoutFailsClosed
        }), yn = e.now() - jo;
        if (we.localWarning !== void 0) W(`${G.wire.id}:${we.exitClass}`, `cloud \u25b8 ${Y} \u25b8 ${we.localWarning}${Ne !== null && we.exitClass === "other" ? ` \xb7 ${hr}` : ""}`); else if (we.answer !== null && we.blocked) e.onLine(`cloud \u25b8 ${Y}${Un(He)} \u25b8 ${L.local} \u25b8 ${qms(we.answer) ? "asked" : "blocked"} (${yn} ms)`, "info"); else if (we.answer !== null && Er(we.answer)) e.onLine(`cloud \u25b8 ${Y}${Un(He)} \u25b8 ${L.local} \u25b8 added context (${yn} ms)`, "debug");
        return {
          answer: we.answer,
          telemetry: {
            ...q,
            outcome: we.answer === null ? "cancelled" : we.exitClass === "spawn_failed" || we.exitClass === "other" && we.localWarning !== void 0 ? "run_error" : "answered",
            exitClass: we.exitClass,
            translatedPaths: j,
            blocked: we.blocked,
            staged: ke.staged !== null,
            projectFrame: ke.hook.type === "command" && Ne === null,
            repinned: ke.repinned,
            waitedMs: Se
          }
        };
      } finally {
        $t();
      }
    } finally {
      await Promise.all([ ke.staged?.release(), Ne?.release() ]);
    }
  };
  return {
    async serve(P, N) {
      let G = e.now();
      if (N === null) return {
        kind: "silent",
        reason: "no_state"
      };
      if (P.requestId.length > On || P.callbackId.length > On) return I({
        outcome: "not_mine"
      }, G, void 0), {
        kind: "silent",
        reason: "not_mine"
      };
      let B = age(P.callbackId), te = B?.instanceId, Y = te !== void 0 && N.retiredInstanceIds.has(te);
      if (!Y && te !== N.instanceId) return I({
        outcome: "not_mine"
      }, G, void 0), {
        kind: "silent",
        reason: "not_mine"
      };
      let M = e.judgeSender(P.attestationStatus), q = (j, Z) => I(j, Z, M?.attestation);
      if (M?.heldBack === !0) return e.debug(`[deviceHooks] ${be(P.requestId)}: held back for its sender (attestation ${M.attestation.status}) \u2014 no opinion, nothing run`), 
      V("unattested", mr, "warning"), q({
        outcome: "unattested"
      }, G), {
        kind: "answer",
        answer: {}
      };
      if (e.isMuted?.() === !0) return e.debug(`[deviceHooks] ${be(P.requestId)}: serving is switched off (emergency switch) \u2014 no opinion`), 
      q({
        outcome: "muted"
      }, G), {
        kind: "answer",
        answer: {}
      };
      if (C.has(P.requestId)) return e.debug(`[deviceHooks] ${be(P.requestId)}: withdrawn earlier \u2014 staying silent`), 
      q({
        outcome: "withdrawn_replay",
        replay: !0
      }, G), {
        kind: "silent",
        reason: "withdrawn"
      };
      let Q = S.get(P.requestId);
      if (Q !== void 0 && Q.callbackId === P.callbackId) return e.debug(`[deviceHooks] ${be(P.requestId)}: replay \u2014 resending the earlier answer`), 
      q({
        outcome: "cached",
        replay: !0
      }, G), {
        kind: "answer",
        answer: Q.answer
      };
      if (Q !== void 0) {
        let j = he(B?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${N.displayName}`, "not run \u2014 its request id was already used for another hook; retry");
        return q({
          outcome: "replay_mismatch",
          blocked: Jy(j)
        }, G), {
          kind: "answer",
          answer: j
        };
      }
      if (n.has(P.requestId)) return {
        kind: "silent",
        reason: "running"
      };
      let X = Y ? void 0 : N.inventory.forwarded.find(j => j.wire.id === P.callbackId);
      if (X === void 0) {
        e.debug(`[deviceHooks] ${be(P.requestId)}: ${Y ? "retired instance" : "not in the current inventory"} \u2014 ${B?.event === "PreToolUse" ? "holding the guard" : "no opinion"}`);
        let j = he(B?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${N.displayName}`, "not run \u2014 it belongs to a registration that machine has since replaced; retry");
        return q({
          outcome: "unknown_id",
          blocked: Jy(j)
        }, G), {
          kind: "answer",
          answer: j
        };
      }
      if (n.size >= Ut) {
        e.debug(`[deviceHooks] ${be(P.requestId)}: too many requests in hand \u2014 refusing`);
        let j = Fn(X, N, e);
        return q({
          outcome: "overloaded",
          blocked: Jy(j)
        }, G), {
          kind: "answer",
          answer: j
        };
      }
      let L = Rr(X, P.input, e.defaultShell()), ee = L === null ? void 0 : r.get(L.key);
      if (ee !== void 0 && ee.requestId !== P.requestId) {
        let j = new AbortController;
        n.set(P.requestId, j);
        let Z = null;
        try {
          Z = await new Promise(le => {
            let de = e.setTimer(() => le("too_late"), Math.max(0, u(P, X, G)));
            j.signal.addEventListener("abort", () => {
              de.clear(), le(null);
            }, {
              once: !0
            }), ee.answer.then(_e => {
              de.clear(), le(_e);
            });
          });
        } finally {
          n.delete(P.requestId);
        }
        if (j.signal.aborted) {
          if (j.signal.reason !== gt) z(P.requestId);
          return q({
            outcome: "cancelled",
            blocked: !1
          }, G), {
            kind: "silent",
            reason: "cancelled"
          };
        }
        if (Z === "too_late") {
          let le = he(u8(X.local.event) ? X.local.event : "Stop", `hook on ${N.displayName}`, `not run \u2014 ${N.displayName} could not decide it before the cloud session stops waiting; retry`);
          return x(P.requestId, P.callbackId, le), q({
            outcome: "too_late",
            blocked: Jy(le)
          }, G), {
            kind: "answer",
            answer: le
          };
        }
        if (Z !== null) return x(P.requestId, P.callbackId, Z), e.debug(`[deviceHooks] ${be(P.requestId)}: the same hook and invocation as ${be(ee.requestId)} \u2014 answered from its run`), 
        q({
          outcome: "same_invocation",
          blocked: Jy(Z)
        }, G), {
          kind: "answer",
          answer: Z
        };
      }
      let re = () => {};
      if (L !== null) {
        let j = new Promise(Z => {
          re = Z;
        });
        r.delete(L.key), r.set(L.key, {
          requestId: P.requestId,
          answer: j
        }), R(r);
      }
      let ie = null, ae = new AbortController;
      n.set(P.requestId, ae);
      let ne = !1, se = F(P, N, X, G, ae.signal).catch(j => {
        e.logError(j);
        let Z = he(u8(X.local.event) ? X.local.event : "Stop", `hook on ${N.displayName}`, "not run \u2014 an internal error while deciding it; retry");
        return {
          answer: Z,
          telemetry: {
            outcome: "decide_error",
            blocked: Jy(Z)
          }
        };
      });
      se.finally(() => {
        ne = !0;
      });
      try {
        let {answer: j, telemetry: Z} = await new Promise(_e => {
          let ve = u(P, X, G), me = e.setTimer(() => {
            if (ae.signal.aborted) {
              _e({
                answer: null,
                telemetry: {
                  outcome: "cancelled",
                  blocked: !1
                }
              });
              return;
            }
            ae.abort(Nn);
            let Ae = he(u8(X.local.event) ? X.local.event : "Stop", `hook on ${N.displayName}`, `not run \u2014 ${N.displayName} could not decide it before the cloud session stops waiting; retry`);
            _e({
              answer: Ae,
              telemetry: {
                outcome: "too_late",
                blocked: Jy(Ae)
              }
            });
          }, Math.max(0, ve));
          se.then(Ae => {
            me.clear(), _e(Ae);
          });
        });
        if (ae.signal.reason !== Nn && (j === null || ae.signal.aborted)) {
          if (ae.signal.reason !== gt) z(P.requestId); else if (j !== null) x(P.requestId, P.callbackId, j);
          return e.debug(`[deviceHooks] ${be(P.requestId)}: ${X.wire.id} withdrawn \u2014 nothing sent`), 
          q({
            ...Z,
            outcome: "cancelled"
          }, G), {
            kind: "silent",
            reason: "cancelled"
          };
        }
        let de = j ?? {};
        return ie = de, x(P.requestId, P.callbackId, de), e.debug(`[deviceHooks] ${be(P.requestId)}: ${X.wire.id} \u2192 ${Z.outcome}`), 
        q(Z, G), {
          kind: "answer",
          answer: de
        };
      } finally {
        if (re(ie), L !== null && r.get(L.key)?.requestId === P.requestId) r.delete(L.key);
        if (ne) n.delete(P.requestId); else se.finally(() => n.delete(P.requestId));
      }
    },
    cancel(P, N = "worker") {
      let G = n.get(P);
      if (G === void 0) return !1;
      if (N === "worker") z(P), G.abort(); else G.abort(gt);
      return !0;
    },
    cancelAll() {
      let P = n.size;
      for (let N of n.values()) N.abort(gt);
      return s.refuseAll(), P;
    },
    inFlight: () => n.size
  };
}

function Rr(e, n, r) {
  if (typeof n !== "object" || n === null) return null;
  let s = e.local.hook, u = s.type === "command" ? `command\0${s.shell ?? r}\0${s.command}\0${_(s.args ?? null)}\0${s.if ?? ""}` : s.type === "http" ? `http\0${s.url}\0${s.if ?? ""}` : null;
  if (u === null) return null;
  let h = "tool_use_id" in n && typeof n.tool_use_id === "string" ? `tool\0${n.tool_use_id}` : `input\0${at(_(n))}`;
  return {
    key: `${e.local.event}\0${h}\0${u}`
  };
}

function Fn(e, n, r, s = "in_hand") {
  let u = e.local.hook;
  if (e.local.event !== "PreToolUse" || u.type !== "command" && u.type !== "http") return {};
  let h = null;
  try {
    h = u.type === "command" ? r.parseTarget(u) : null;
  } catch {}
  let w = Bn(u, h);
  return he("PreToolUse", Vn(u, w, n), s === "too_large" ? `not run \u2014 the event was too large to judge on ${n.displayName}; retry with less` : `not run \u2014 ${n.displayName} has too many hook requests from the cloud session in hand at once; retry`);
}

function Un(e) {
  return "tool_name" in e && typeof e.tool_name === "string" ? `:${Ks(e.tool_name, {
    maxCodeUnits: 48
  })}` : "";
}

function Er(e) {
  if (Jy(e) || "async" in e) return !1;
  let n = e.hookSpecificOutput;
  return e.systemMessage !== void 0 || n !== void 0 && "additionalContext" in n && n.additionalContext !== void 0;
}

function zn(e) {
  return c3n[e] * 1e3;
}

var xr = /^(?:PATH|CDPATH|PYTHONPATH|PYTHONHOME|NODE_PATH|RUBYLIB|PERL5LIB|PERLLIB|GEM_PATH|GEM_HOME|CLASSPATH|LD_LIBRARY_PATH|DYLD_\w+)$/, jn = "\0unplaceable";

function Cr(e, {home: n, launchDir: r}) {
  let s = [], u = "", h = "", w = null, k = () => {
    if (u !== "") s.push({
      raw: u,
      text: h
    });
    u = "", h = "";
  };
  for (let R of e.trim()) if (w !== null) if (u += R, R === w) w = null; else h += R; else if (R === '"' || R === "'") w = R, 
  u += R; else if (R === " " || R === "\t") k(); else u += R, h += R;
  k();
  let y = O() === "windows", S = R => y ? /[\\/]/.test(R) : R.includes("/"), C = R => y ? /^(?:[A-Za-z]:[\\/]|[\\/])/.test(R) : R.startsWith("/"), A = R => y && /^[A-Za-z]:(?![\\/])/.test(R);
  return s.flatMap(({raw: R, text: x}) => {
    if (y && R.replace(/'[^']*'|"[^"]*"/g, "").includes("\\")) return [ r ];
    let z = x.replace(/^\$(?:HOME\b|\{HOME\})/, ""), V = R.replace(/'[^']*'/g, "").replace(/^"?\$\{HOME\}/, "");
    if (/[`$;|&<>]/.test(z) || /[*?[{]/.test(V)) return [ r ];
    let W = x.match(/^(--?[\w-]+|[A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (W) {
      let H = W[2], F = xr.test(y ? W[1].toUpperCase() : W[1]), P = A(H) ? [ r ] : C(H) ? [ H ] : S(H) ? [ `${r}/${H}` ] : [], G = (y && !F ? H.split(":").reduce((B, te) => {
        let Y = B.at(-1);
        if (Y !== void 0 && /^[A-Za-z]$/.test(Y)) B[B.length - 1] = `${Y}:${te}`; else B.push(te);
        return B;
      }, []) : H.split(":")).flatMap(B => B === "" ? F || H.includes(":") ? [ r ] : [] : A(B) ? [ r ] : C(B) ? [ B ] : S(B) || F || B === "." || B === ".." ? [ `${r}/${B}` ] : []);
      return D([ ...P, ...G ]);
    }
    let I = x;
    if (n !== void 0 && n !== "") {
      if (R === "~" || R.startsWith("~/")) I = n + x.slice(1); else if (/^"?\$\{HOME\}(?=[/"]|$)/.test(R) && (x === "${HOME}" || x.startsWith("${HOME}/"))) I = n + x.slice(7); else if (/^"?\$HOME(?=[/"]|$)/.test(R) && (x === "$HOME" || x.startsWith("$HOME/"))) I = n + x.slice(5);
    }
    if (A(I)) return [ r ];
    if (C(I)) return [ I ];
    return S(I) ? [ `${r}/${I}` ] : [];
  });
}

function Ar(e, n) {
  return n.some(r => QRe(cu(e), r));
}

import { posix as ft } from "path";

import { posix as qr } from "path";

var Yn = new Set([ "env", "nice", "nohup", "exec", "time", "caffeinate", "builtin", "command", "xargs", "sudo", "doas", "runuser", "coproc", "timeout", "gtimeout", "flock", "arch", "setsid", "stdbuf", "unbuffer", "chronic", "busybox", "strace", "ltrace", "entr" ]), Bt = new Set([ "-w", "--wait", "--timeout", "-E", "--conflict-exit-code" ]), Tr = {
  nice: new Set([ "-n", "--adjustment" ]),
  timeout: new Set([ "-s", "--signal", "-k", "--kill-after" ]),
  gtimeout: new Set([ "-s", "--signal", "-k", "--kill-after" ]),
  sudo: new Set([ "-u", "-g", "-C", "-D", "-h", "-p", "-R", "-T", "-U", "--user", "--group", "--host", "--prompt", "--close-from", "--chdir", "--role", "--type", "--other-user" ]),
  doas: new Set([ "-u", "-C" ]),
  runuser: new Set([ "-u", "-g", "-G", "--user", "--group", "--supp-group", "-w", "--whitelist-environment" ]),
  xargs: new Set([ "-n", "-P", "-I", "-L", "-s", "-d", "-E", "-a", "--arg-file", "--max-args", "--max-procs", "--delimiter" ]),
  env: new Set([ "-u", "-C", "-P", "--unset", "--chdir" ]),
  caffeinate: new Set([ "-t", "-w" ]),
  exec: new Set([ "-a" ]),
  flock: new Set([ ...Bt, "-c", "--command" ]),
  arch: new Set([ "-arch", "-e", "-d" ]),
  stdbuf: new Set([ "-i", "-o", "-e", "--input", "--output", "--error" ]),
  strace: new Set([ "-e", "-o", "-p", "-s", "-P", "-E", "-u", "-a", "-X" ]),
  ltrace: new Set([ "-e", "-o", "-p", "-s", "-n", "-u", "-a", "-F" ]),
  ionice: new Set([ "-c", "--class", "-n", "--classdata", "-p", "--pid", "-P", "--pgid", "-u", "--uid" ]),
  chrt: new Set([ "-T", "--sched-runtime", "-P", "--sched-period", "-D", "--sched-deadline" ]),
  "xvfb-run": new Set([ "-n", "--server-num", "-s", "--server-args", "-f", "--auth-file", "-e", "--error-file", "-w", "--wait", "-p", "--xauth-protocol" ])
}, Ir = {
  timeout: 1,
  gtimeout: 1,
  flock: 1,
  chrt: 1,
  taskset: 1
};

function Vt(e) {
  return /^(?:\/|\$(?!\{?(?:CURDIR|PWD)\b)(?:[A-Za-z_][A-Za-z0-9_]*|\{[A-Za-z_][A-Za-z0-9_]*\})\/)/.test(e.text) || /^~(?:[A-Za-z_][A-Za-z0-9._-]*)?\//.test(Ue(e.raw));
}

var St = {
  anchored: Vt,
  takesNext: (e, n) => e(n) || !n.startsWith("--") && Array.from(n).findIndex((r, s) => s > 0 && e("-" + r)) === n.length - 1,
  alsoLaunchers: new Set([ "ionice", "chrt", "taskset", "xvfb-run" ]),
  alsoValued: {
    sudo: new Set([ "-r", "-t" ])
  },
  runuserIsSu: !0
}, Qn = [ {
  anchored: e => e.text.startsWith("/"),
  takesNext: (e, n) => !n.includes("=") && (e(n) || /^-[a-zA-Z]{2,}$/.test(n) && e("-" + n.at(-1))),
  alsoLaunchers: new Set,
  alsoValued: {},
  runuserIsSu: !1
}, St, {
  ...St,
  alsoValued: {
    ...St.alsoValued,
    time: new Set([ "-f", "--format", "-o", "--output" ]),
    strace: new Set([ "-I", "-b" ]),
    xargs: new Set([ "-J" ])
  }
}, {
  ...St,
  stepsPastVariable: !0
} ];

function eo(e) {
  return Yn.has(e) || Qn.some(n => n.alsoLaunchers.has(e));
}

function Dr(e) {
  let n = Array(e.length + 1).fill(!1);
  for (let r = e.length - 1; r >= 0; r -= 1) {
    let s = e[r].text;
    n[r] = s !== "--" && (/^(?:-[flmpPT]*u|--user(?:=|$))/.test(s) || n[r + 1]);
  }
  return n;
}

var to = new Set([ "then", "do", "else", "elif", "if", "while", "until", "!" ]), Pr = new Set([ "fi", "done", "esac", "}", "]]" ]), Or = new Set([ "time", "coproc", "function", "fi", "done", "esac" ]), $r = new Set([ "coproc", "function" ]), Hr = /^[A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?\+?=/, Kn = 6, jt = " \t", Nr = ` \t\n;&|()<>`, Ke = String.fromCharCode(96), Mr = /(?:^|[^\\])(?:\\\\)*\\\n/, Lr = /(?:^|[^\\])(?:\\\\)*\\$/;

function qt(e, n) {
  let r = n;
  while (e[r] === "\\" && e[r + 1] === `\n`) r += 2;
  return r;
}

function Ue(e) {
  if (!e.includes("\\\n")) return e;
  let n = [], r = 0, s = -1;
  for (let u = 0; u < e.length; u += 1) {
    let h = e[u];
    if (h === "\\") {
      if (s === -1) s = u;
      continue;
    }
    if (h === `\n` && s !== -1 && (u - s) % 2 === 1) n.push(e.slice(r, u - 1)), r = u + 1;
    s = -1;
  }
  return n.push(e.slice(r)), n.join("");
}

function Fr(e) {
  if (!e.includes("\\")) return e;
  let n = "", r = 0;
  for (let s = 0; s < e.length; s += 1) {
    if (e[s] !== "\\") continue;
    let u = e[s + 1];
    if (u === "$" || u === Ke || u === "\\" || u === `\n`) n += e.slice(r, s), r = u === `\n` ? s + 2 : s + 1, 
    s += 1;
  }
  return r === 0 ? e : n + e.slice(r);
}

var Jn = /[ \t\n|]/, Xn = /@P\}/, Wr = /\$'[^']*\\|"[^"]*\\/;

function Rt(e, n = {}) {
  let r = new Je(e, n.make === !0), s = r.tokens("eof", 0), u = [];
  for (let h of [ s, ...r.bodies ]) Ur(h, n, u);
  return {
    commands: u,
    unreadable: r.unreadable
  };
}

function no(e) {
  let n = new Je(e, !1);
  return n.tokens("eof", 0), n.comments;
}

function Ur(e, n, r) {
  let s = 0, u = 0, h = !1, w = !1, k = 0, y = 0;
  while (s < e.length) {
    let S = e[s];
    if (h) {
      if (S.kind === "op" && S.op === `\n`) {
        s += 1;
        continue;
      }
      if (S.kind === "word" && S.word.text === "esac" && !S.word.quoted) {
        u -= 1, h = !1, s += 1;
        continue;
      }
      while (s < e.length) {
        let H = e[s];
        if (H.kind === "op" && H.op === ")" || H.kind === "word" && H.word.text === "esac" && !H.word.quoted) break;
        s += 1;
      }
      if (e[s]?.kind === "op") s += 1;
      h = !1, w = !1;
      continue;
    }
    if (S.kind === "op") {
      if (u > 0 && /^;[;&]|^;;&$/.test(S.op)) h = !0;
      if (S.op === "(" || S.op === "{") {
        if (y += 1, w && k === 0) k = y;
      } else if (S.op === ")" || S.op === "}") {
        if (y === k) k = 0;
        y = Math.max(0, y - 1);
      }
      if (S.op === "|" || S.op === "|&") w = !0; else if (S.op !== `\n` && S.op !== "(" && S.op !== "{") w = !1;
      s += 1;
      continue;
    }
    let C = [], A = [], R;
    while (s < e.length && e[s].kind !== "op") {
      let H = e[s];
      if (H.kind === "word") C.push(H.word); else if (H.kind === "redirect") A.push({
        op: H.op,
        target: H.word
      }); else if (H.kind === "heredoc" && H.body !== null) R = (R ?? "") + H.body;
      s += 1;
    }
    let x = w || k > 0;
    w = !1;
    let [z, ...V] = oo(C, n), W = z ?? (A.length > 0 || R !== void 0 ? {
      program: {
        text: ":",
        quoted: !1,
        raw: ":"
      },
      args: [],
      assignments: []
    } : void 0);
    if (W === void 0) continue;
    let I = W.program.text;
    if (!W.program.quoted) {
      if (I === "case") {
        u += 1;
        let H = e[s];
        if (H?.kind === "op" && H.op === ")" && W.args.some(F => F.text === "in")) s += 1; else h = !0;
        continue;
      }
      if (I === "esac") {
        u = Math.max(0, u - 1);
        continue;
      }
      if (I === "[[") {
        if (!C.some(H => H.text === "]]" && !H.quoted)) {
          while (s < e.length) {
            let H = e[s];
            if (H.kind === "word" && H.word.text === "]]" || H.kind === "op" && H.op === `\n`) break;
            s += 1;
          }
          if (e[s]?.kind === "word") s += 1;
        }
        continue;
      }
      if (Pr.has(I)) {
        if (A.length > 0 || R !== void 0) r.push({
          program: {
            text: ":",
            quoted: !1,
            raw: ":"
          },
          args: [],
          assignments: [],
          redirects: A,
          piped: x,
          ...R !== void 0 && {
            heredoc: R
          }
        });
        continue;
      }
    }
    for (let H of [ W, ...V ]) r.push({
      ...H,
      redirects: A,
      piped: x,
      ...R !== void 0 && {
        heredoc: R
      }
    });
  }
}

function jr(e, n, r) {
  let s = [], u, h = !1, w, k = 0;
  for (;;) {
    while (k < e.length) {
      let x = e[k];
      if (Hr.test(Ue(x.raw))) s.push(x); else if (!(!x.quoted && to.has(x.text))) break;
      k += 1;
    }
    let y = e[k];
    if (y === void 0) return s.length > 0 ? {
      program: {
        text: ":",
        quoted: !1,
        raw: ":"
      },
      args: [],
      assignments: s
    } : void 0;
    if (n.make && !y.quoted && /^[@+-]+./.test(y.text)) {
      let x = y.text.replace(/^[@+-]+/, "");
      y = {
        ...y,
        text: x,
        raw: x
      };
    }
    let S = y.text.slice(y.text.lastIndexOf("/") + 1).toLowerCase();
    if (!(Yn.has(S) || r.alsoLaunchers.has(S)) || /[ \t]/.test(y.text) || y.text.includes("/") && !r.anchored(y)) {
      if (r.stepsPastVariable === !0 && h && y.text.startsWith("$") && e[k + 1] !== void 0) {
        w ??= {
          k,
          kept: s.length
        }, s.push(y), k += 1;
        continue;
      }
      let x = y.text.startsWith("$") && !/^\$\((?:\u2026|\(\u2026\))\)/.test(y.text);
      if (w !== void 0 && (y.text.startsWith("-") || !x && (y.quoted || y.expands === !0))) return {
        program: e[w.k],
        args: e.slice(w.k + 1),
        assignments: s.slice(0, w.kept)
      };
      return {
        program: y,
        args: e.slice(k + 1),
        assignments: s
      };
    }
    if (S === "command") {
      let x = !1;
      for (let z = k + 1; e[z]?.text.startsWith("-") === !0; z += 1) x ||= Tdt(e[z].text);
      if (x) return {
        program: y,
        args: e.slice(k + 1),
        assignments: s
      };
    }
    if (S === "runuser" && r.runuserIsSu) {
      if (u ??= Dr(e), !u[k + 1]) return {
        program: y,
        args: e.slice(k + 1),
        assignments: s
      };
    }
    if (S === "busybox") {
      s.push(y), k += 1;
      continue;
    }
    s.push(y), h = !0, w = void 0, k += 1;
    let C = Ir[S] ?? 0, A = x => (Tr[S]?.has(x) ?? !1) || (r.alsoValued[S]?.has(x) ?? !1), R = !1;
    while (k < e.length) {
      let x = e[k].text;
      if (!R && x === "--") {
        s.push(e[k]), R = !0, k += 1;
        continue;
      }
      if (!R && S === "env" && x === "-") {
        s.push({
          ...e[k],
          text: "-i"
        }), k += 1;
        continue;
      }
      if (!R && x.startsWith("-") && x !== "-") {
        let z = r.takesNext(A, x);
        if (s.push(e[k]), z && e[k + 1] !== void 0) s.push(e[k + 1]);
        k += z ? 2 : 1;
        continue;
      }
      if (C > 0 && (S !== "chrt" || /^\d+$/.test(x))) {
        s.push(e[k]), C -= 1, k += 1;
        continue;
      }
      break;
    }
  }
}

function oo(e, n) {
  return Qn.flatMap(r => {
    let s = jr(e, n, r);
    return s === void 0 ? [] : [ s ];
  }).filter((r, s, u) => u.findIndex(h => h.program.raw === r.program.raw && h.args.length === r.args.length) === s);
}

function Gt(e) {
  return oo(e, {});
}

class Je {
  text;
  make;
  pos=0;
  unreadable=null;
  bodies=[];
  comments=[];
  pending=[];
  lineIndex=null;
  strippedLineIndex=null;
  constructor(e, n) {
    this.text = e;
    this.make = n;
  }
  fail(e) {
    this.unreadable ??= e;
  }
  pastContinuations(e, n = !1) {
    for (;;) {
      let r = qt(this.text, e);
      if (r !== e) e = r; else if (n && e < this.text.length && jt.includes(this.text[e])) e += 1; else return e;
    }
  }
  tooDeep(e) {
    if (e < Kn) return !1;
    this.fail("command substitutions nested too deeply");
    let n = 1;
    while (this.pos < this.text.length && n > 0) {
      let r = this.text[this.pos];
      if (r === "(") n += 1; else if (r === ")") n -= 1;
      this.pos += 1;
    }
    return !0;
  }
  tokens(e, n) {
    let r = this.text, s = r.length, u = [], h = this.pending, w = 0, k = 0, y = !1, S = !1, C = !0, A = !1;
    while (this.pos < s) {
      let R = r[this.pos];
      if (jt.includes(R)) {
        this.pos += 1;
        continue;
      }
      if (R === `\n`) {
        if (this.pos += 1, h.length > 0) this.readHeredocBodies(h.splice(0), n);
        if (e === "array") continue;
        u.push({
          kind: "op",
          op: `\n`
        }), C = !0;
        continue;
      }
      if (R === "\\" && r[this.pos + 1] === `\n`) {
        this.pos += 2;
        continue;
      }
      if (R === "#") {
        let P = r.indexOf(`\n`, this.pos), N = P === -1 ? s : P;
        this.comments.push([ this.pos, N ]), this.pos = N;
        continue;
      }
      if (e === "array") {
        if (R === ")") return this.pos += 1, u;
        if (";&|<>".includes(R) || R === "(") {
          this.fail("an array assignment holds something other than words"), this.pos += 1;
          continue;
        }
        u.push({
          kind: "word",
          word: this.readWord(n)
        });
        continue;
      }
      let x = this.pastContinuations(this.pos + 1), z = R + (r[x] ?? ""), V = this.pastContinuations(x + 1);
      if (z === ";;" && r[V] === "&") {
        u.push({
          kind: "op",
          op: ";;&"
        }), this.pos = V + 1, S = k > 0, C = !0;
        continue;
      }
      if (z === "&&" || z === "||" || z === ";;" || z === ";&" || z === "|&") {
        if (u.push({
          kind: "op",
          op: z
        }), this.pos = x + 1, (z === ";;" || z === ";&") && k > 0) S = !0;
        C = !0;
        continue;
      }
      if (z === "((" && C) {
        let P = x + 1, N = Zn(r, P);
        if (N !== -1) {
          this.collectExpansions(r.slice(P, N - 2), n), this.pos = N, C = !1;
          continue;
        }
      }
      if (R === "(") {
        if (this.pos += 1, S) continue;
        w += 1, u.push({
          kind: "op",
          op: "("
        }), C = !0;
        continue;
      }
      if (R === ")") {
        if (this.pos += 1, S) {
          u.push({
            kind: "op",
            op: ")"
          }), S = !1, C = !0;
          continue;
        }
        if (w > 0) {
          w -= 1, u.push({
            kind: "op",
            op: ")"
          }), C = !0;
          continue;
        }
        if (e === "paren") return u;
        this.fail("a closing parenthesis that closes nothing"), u.push({
          kind: "op",
          op: ")"
        });
        continue;
      }
      if (R === "&" && r[x] === ">") {
        if (this.pos = r[V] === ">" ? V + 1 : x + 1, this.pos = this.pastContinuations(this.pos, !0), 
        this.pos < s && !`\n;&|()`.includes(r[this.pos])) u.push({
          kind: "redirect",
          op: "&>",
          word: this.readWord(n)
        });
        C = !1;
        continue;
      }
      if (R === ";" || R === "&" || R === "|") {
        u.push({
          kind: "op",
          op: R
        }), this.pos += 1, C = !0;
        continue;
      }
      if (R === "<" || R === ">") {
        if (r[x] === "(") {
          u.push({
            kind: "word",
            word: this.readWord(n)
          }), C = !1;
          continue;
        }
        let P = x, N = z, G = N === "<<" ? this.pastContinuations(P + 1) : P;
        if (N === "<<" && r[G] !== "<") {
          this.pos = G;
          let te = !1;
          if (r[this.pos] === "-") {
            if (G !== P + 1) this.fail('a heredoc "-" that only a joined line continuation puts next to the <<');
            te = !0, this.pos = this.pastContinuations(this.pos + 1);
          }
          this.pos = this.pastContinuations(this.pos, !0);
          let Y = this.readWord(n, !0);
          if (Y.raw !== "") {
            if (Wr.test(Ue(Y.raw))) this.fail("a heredoc delimiter this reading cannot spell as the shell does");
            if (Y.text === "" && !Y.quoted) this.fail("a heredoc delimiter that reads as empty");
            let M = {
              kind: "heredoc",
              body: null
            };
            u.push(M), C = !1, h.push({
              token: M,
              delimiter: Y.text,
              strip: te,
              expand: !Y.quoted
            });
          }
          continue;
        }
        let B = N === "<<" ? "<<<" : [ ">>", ">&", "<&", ">|", "<>" ].includes(N) ? N : R;
        if (this.pos = B === "<<<" ? G + 1 : B.length === 2 ? P + 1 : this.pos + 1, this.pos = this.pastContinuations(this.pos, !0), 
        this.pos < s && !`\n;&|()`.includes(r[this.pos])) u.push({
          kind: "redirect",
          op: B,
          word: this.readWord(n)
        });
        C = !1;
        continue;
      }
      if (R === "{" || R === "}") {
        let P = this.pastContinuations(this.pos + 1), N = P >= s || (jt + `\n;&|()<>`).includes(r[P]);
        if (N && C) {
          u.push({
            kind: "op",
            op: R
          }), this.pos += 1, C = !0;
          continue;
        }
        if (N && R === "{") this.fail("a { that may open a group or may be an argument");
      }
      let W = /^[A-Za-z_][A-Za-z0-9_]*\+?=\(/.exec(r.slice(this.pos, this.pos + 256));
      if (W !== null) {
        let P = this.pos;
        if (this.pos += W[0].length, !this.tooDeep(n + 1)) this.tokens("array", n + 1);
        let N = r.slice(P, this.pos);
        u.push({
          kind: "word",
          word: {
            text: N,
            quoted: !1,
            raw: N
          }
        }), C = !1;
        continue;
      }
      let I = this.readWord(n);
      if (I.raw === "") {
        this.pos += 1;
        continue;
      }
      if (/^[0-9]+$/.test(Ue(I.raw)) && (r[this.pos] === "<" || r[this.pos] === ">")) continue;
      if (u.push({
        kind: "word",
        word: I
      }), !I.quoted) {
        if (C && I.text === "case") y = !0; else if (y && I.text === "in") y = !1, k += 1, 
        S = !0; else if (I.text === "esac" && k > 0 && (C || S)) k -= 1, S = !1;
      }
      let H = C, F = A;
      A = H && !I.quoted && $r.has(I.text), C = F || H && !I.quoted && (to.has(I.text) || Or.has(I.text));
    }
    if (e === "eof") h.splice(0);
    if (k > 0 || S) this.fail("a case statement that is never closed");
    if (e !== "eof") this.fail(e === "array" ? "an array assignment that is never closed" : "a $( or ( that is never closed");
    return u;
  }
  readWord(e, n = !1) {
    let r = this.text, s = r.length, u = this.pos, h = "", w = !1, k = !1;
    while (this.pos < s) {
      let S = r[this.pos];
      if (S === "'") {
        w = !0;
        let C = r.indexOf("'", this.pos + 1);
        if (C === -1) {
          this.fail("a single quote that is never closed"), h += r.slice(this.pos + 1), this.pos = s;
          break;
        }
        h += r.slice(this.pos + 1, C), this.pos = C + 1;
        continue;
      }
      if (S === "$" && r[this.pos + 1] === "'") {
        w = !0;
        {
          let C = r.indexOf("'", this.pos + 2);
          if (r.slice(this.pos + 2, C === -1 ? s : C).includes("\\")) k = !0;
        }
        this.pos += 2;
        while (this.pos < s && r[this.pos] !== "'") if (r[this.pos] === "\\" && this.pos + 1 < s) h += r[this.pos + 1], 
        this.pos += 2; else h += r[this.pos], this.pos += 1;
        if (this.pos >= s) {
          this.fail("a $' quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (S === '"' || S === "$" && r[this.pos + 1] === '"') {
        w = !0, this.pos += S === "$" ? 2 : 1;
        while (this.pos < s && r[this.pos] !== '"') {
          let C = r[this.pos];
          if (C === "\\" && this.pos + 1 < s) h += r[this.pos + 1] === `\n` ? "" : r[this.pos + 1], 
          this.pos += 2; else if (!n && C === "$" && r[this.pastContinuations(this.pos + 1)] === "(") h += this.readDollarParen(e, this.pastContinuations(this.pos + 1)); else if (!n && C === Ke) h += this.readBackticks(e); else if (C === "$" && r[this.pastContinuations(this.pos + 1)] === "{") h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1)), 
          k = !0; else {
            if (C === "$") k = !0;
            h += C, this.pos += 1;
          }
        }
        if (this.pos >= s) {
          this.fail("a double quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (S === "\\" && this.pos + 1 < s) {
        if (r[this.pos + 1] !== `\n`) h += r[this.pos + 1], w = !0;
        this.pos += 2;
        continue;
      }
      if (S === "$" && r[this.pastContinuations(this.pos + 1)] === "{") {
        h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1)), k = !0;
        continue;
      }
      if (!n && S === "$" && r[this.pastContinuations(this.pos + 1)] !== "(") k = !0;
      if (!n && S === "$" && r[this.pastContinuations(this.pos + 1)] === "(") {
        h += this.readDollarParen(e, this.pastContinuations(this.pos + 1)), w = !0, k = !0;
        continue;
      }
      if (!n && S === Ke) {
        h += this.readBackticks(e), w = !0, k = !0;
        continue;
      }
      if (!n && (S === "<" || S === ">") && r[this.pastContinuations(this.pos + 1)] === "(") {
        if (this.pos = this.pastContinuations(this.pos + 1) + 1, !this.tooDeep(e + 1)) this.bodies.push(this.tokens("paren", e + 1));
        h += S + "(\u2026)", w = !0;
        continue;
      }
      if (Nr.includes(S)) break;
      h += S, this.pos += 1;
    }
    let y = r.slice(u, this.pos);
    if (/\{[^{}'"]*(?:,|\.\.)[^{}'"]*\}/.test(y.replace(/'[^']*'|"[^"]*"/g, ""))) k = !0;
    return {
      text: h,
      quoted: w,
      raw: y,
      ...k && {
        expands: k
      }
    };
  }
  readParameterExpansion(e, n = this.pos + 1) {
    let r = this.text, s = r.length;
    this.pos = n + 1;
    let u = y => Jn.test(r[this.pastContinuations(y)] ?? "");
    if (u(this.pos)) this.fail("a ${ \u2026; } command substitution");
    let h = 1, w = !1;
    while (this.pos < s && h > 0) {
      let y = r[this.pos];
      if (y === "\\") this.pos += 2; else if (y === '"') w = !w, this.pos += 1; else if (y === "'" && !w) {
        let S = r.indexOf("'", this.pos + 1), C = S === -1 ? s : S;
        this.collectExpansions(r.slice(this.pos + 1, C), e), this.pos = S === -1 ? s : S + 1;
      } else if (y === "'") this.pos += 1; else if (y === "$" && r[this.pastContinuations(this.pos + 1)] === "(") this.readDollarParen(e, this.pastContinuations(this.pos + 1)); else if (y === Ke) this.readBackticks(e); else if (y === "$" && r[this.pastContinuations(this.pos + 1)] === "{") {
        if (h += 1, this.pos = this.pastContinuations(this.pos + 1) + 1, u(this.pos)) this.fail("a ${ \u2026; } command substitution");
      } else {
        if (y === "}" && !w) h -= 1;
        this.pos += 1;
      }
    }
    if (h > 0) this.fail("a ${ that is never closed");
    let k = Ue(r.slice(n, this.pos));
    if (Xn.test(k)) this.fail("a ${ \u2026@P } expansion");
    return "$" + k;
  }
  readDollarParen(e, n = this.pos + 1) {
    let r = this.text;
    if (r[n + 1] === "(") {
      let h = Zn(r, n + 2);
      if (h !== -1) return this.collectExpansions(r.slice(n + 2, h - 2), e), this.pos = h, 
      "$((\u2026))";
    }
    if (this.pos = n + 1, this.tooDeep(e + 1)) return "$(\u2026)";
    let s = this.pos, u = this.tokens("paren", e + 1);
    if (this.make) {
      let h = u[0];
      if (h?.kind === "word" && /^(?:shell|eval|call)$/.test(h.word.text)) return this.bodies.push(u.slice(1)), 
      "$(\u2026)";
      return "$(" + this.text.slice(s, Math.max(s, this.pos - 1)) + ")";
    }
    return this.bodies.push(u), "$(\u2026)";
  }
  readBackticks(e) {
    let n = this.text, r = n.length, s = this.pos + 1;
    while (s < r && n[s] !== Ke) s += n[s] === "\\" ? 2 : 1;
    if (s >= r) this.fail("a backtick that is never closed");
    let u = new Je(n.slice(this.pos + 1, Math.min(s, r)).replace(/\\([$\x60\\])/g, "$1"), this.make);
    if (e + 1 > Kn) this.fail("command substitutions nested too deeply"); else if (this.bodies.push(u.tokens("eof", e + 1), ...u.bodies), 
    u.unreadable !== null) this.fail(u.unreadable);
    return this.pos = Math.min(s + 1, r), "$(\u2026)";
  }
  collectExpansions(e, n) {
    if (Xn.test(Ue(e))) this.fail("a ${ \u2026@P } expansion");
    let r = 0;
    while (r < e.length) {
      let s = e[r], u = s === "$" ? qt(e, r + 1) : r + 1;
      if (s === "$" && e[u] === "(") {
        let h = new Je(e.slice(r), this.make);
        if (h.readDollarParen(n, u - r), this.bodies.push(...h.bodies), h.unreadable !== null) this.fail(h.unreadable);
        r += Math.max(h.pos, 1);
        continue;
      }
      if (s === "$" && e[u] === "{") {
        if (Jn.test(e[qt(e, u + 1)] ?? "")) this.fail("a ${ \u2026; } command substitution");
      }
      if (s === "\\") r += 2; else if (s === Ke) {
        let h = new Je(e.slice(r), this.make);
        if (h.readBackticks(n), this.bodies.push(...h.bodies), h.unreadable !== null) this.fail(h.unreadable);
        r += Math.max(h.pos, 1);
      } else r += 1;
    }
  }
  readHeredocBodies(e, n) {
    for (let r of e) {
      let s = this.findLine(r.delimiter, this.pos, r.strip), u = s === -1 ? -1 : this.text.indexOf(`\n`, s);
      if (r.expand && s !== -1 && this.unreadable === null && Mr.test(this.text.slice(this.pos, s))) ({at: s, lineEnd: u} = this.findJoinedLine(r.delimiter, this.pos, r.strip));
      if (s === -1) {
        this.fail("a heredoc is never terminated");
        break;
      }
      let h = this.text.slice(this.pos, s);
      if (r.expand) this.collectExpansions(Ue(h), n);
      r.token.body = r.expand ? Fr(h) : h, this.pos = u === -1 ? this.text.length : u + 1;
    }
  }
  findJoinedLine(e, n, r) {
    let s = this.text, u = n;
    while (u <= s.length) {
      let h = "", w = u, k = -1;
      for (;;) {
        k = s.indexOf(`\n`, w);
        let y = s.slice(w, k === -1 ? s.length : k), S = k !== -1 && Lr.test(y);
        if (h += S ? y.slice(0, -1) : y, !S) break;
        w = k + 1;
      }
      if ((r ? h.replace(/^\t+/, "") : h) === e) return {
        at: u,
        lineEnd: k
      };
      if (k === -1) return {
        at: -1,
        lineEnd: -1
      };
      u = k + 1;
    }
    return {
      at: -1,
      lineEnd: -1
    };
  }
  findLine(e, n, r) {
    if (this.lineIndex === null) {
      let w = new Map, k = new Map, y = 0;
      for (let S of this.text.split(`\n`)) {
        let C = (A, R) => {
          let x = A.get(R);
          if (x === void 0) A.set(R, [ y ]); else x.push(y);
        };
        C(w, S), C(k, S.replace(/^\t+/, "")), y += S.length + 1;
      }
      this.lineIndex = w, this.strippedLineIndex = k;
    }
    let s = (r ? this.strippedLineIndex : this.lineIndex).get(e);
    if (s === void 0) return -1;
    let u = 0, h = s.length;
    while (u < h) {
      let w = u + h >> 1;
      if (s[w] < n) u = w + 1; else h = w;
    }
    return u < s.length ? s[u] : -1;
  }
}

function Zn(e, n) {
  let r = Math.min(e.length, n + 4096), s = n, u = 0;
  while (s < r) {
    let h = e[s];
    if (h === "'" || h === '"') {
      let w = e.indexOf(h, s + 1);
      s = w === -1 ? r : w + 1;
      continue;
    }
    if (h === "(") u += 1; else if (h === ")") {
      if (u === 0) return e[s + 1] === ")" ? s + 2 : -1;
      u -= 1;
    }
    s += 1;
  }
  return -1;
}

var Br = new Set([ "DEVELOPER_DIR", "MAKEFILES", "MAKEFLAGS", "GNUMAKEFLAGS", "AWKPATH", "AWKLIBPATH", "GOFLAGS", "RUSTFLAGS", "GIT_EDITOR", "GIT_SEQUENCE_EDITOR", "GIT_EXTERNAL_DIFF", "GIT_PROXY_COMMAND", "SUDO_ASKPASS", "ZDOTDIR", "CDPATH", "GCONV_PATH", "NLSPATH", "DOTNET_STARTUP_HOOKS", "npm_config_node_options", "NPM_CONFIG_NODE_OPTIONS", "LESSOPEN", "LESSCLOSE", "MANPAGER", "MAVEN_OPTS", "GRADLE_OPTS", "OPENSSL_ENGINES", "SHELLOPTS", "BASHOPTS", "PS4", "PROMPT_COMMAND", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_EXEC_PATH", "GIT_ASKPASS", "SSH_ASKPASS", "GIT_PAGER", "PAGER", "EDITOR", "VISUAL", "BROWSER", "PYTHONWARNINGS", "PYTHONBREAKPOINT", "PERL5DB", "NODE_REPL_EXTERNAL_MODULE", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "NODE_OPTIONS", "NODE_COMPILE_CACHE", "PYTHONSTARTUP", "PYTHONHOME", "PYTHONUSERBASE", "BASH_ENV", "ENV", "PERL5OPT", "RUBYOPT", "GEM_HOME", "RUBYGEMS_GEMDEPS", "BUNDLE_GEMFILE", "OPENSSL_CONF", "OPENSSL_MODULES", "DYLD_INSERT_LIBRARIES", "LD_PRELOAD", "LD_AUDIT" ]), Vr = /^(?:DYLD_|LD_|BASH_FUNC_|GIT_CONFIG_|LUA_C?PATH)/, Gr = /^(?:GH_BROWSER|RSYNC_RSH|CVS_RSH|SOPS_GPG_EXEC|PERL5SHELL|RUBYSHELL|JAVACMD|CLOUDSDK_PYTHON|UV_PYTHON|RUSTC_WRAPPER|RUSTC_WORKSPACE_WRAPPER|npm_config_script_shell|NPM_CONFIG_SCRIPT_SHELL|R_(?:PROFILE|ENVIRON)(?:_USER)?|TAR_OPTIONS|BUN_OPTIONS|TF_CLI_ARGS\w*|CARGO_ALIAS_\w+|[A-Z0-9][A-Z0-9_]*_(?:EXTERNAL_DIFF|PAGER|EDITOR))$/, zr = /^(?![\/~$-])(?:[^\s]*\/[^\s]*|[^\s\/]+\.(?:sh|bash|zsh|fish|py|rb|pl|js|mjs|cjs|ts|php|lua|R|r|ps1|awk|tcl|exs?|jl))$/;

function Kr(e) {
  return Br.has(e) || Vr.test(e);
}

function uo(e) {
  return (e.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) ?? []).map(n => n.replace(/["']/g, ""));
}

function Jr(e, n) {
  let r = e.replace(/\/+$/, "");
  if (!r.startsWith("/") || r === "") return [];
  let s = n !== "" && n !== "/" && (r === n || r.startsWith(`${n}/`)) ? r.slice(n.length) : null, u = s === "" ? "/" : s;
  return s === null ? [ r ] : [ r, `~${u}`, `$HOME${u}`, `$HOME"${u}`, `\${HOME}${u}`, `\${HOME}"${u}` ];
}

var Xr = /(?:^|[\s"'=(`:;&|<>])\.\.?\/|\bprocess\.cwd\(\)|\bos\.getcwd\(\)|\bPath\.cwd\(\)|\bDir\.pwd\b|\bgit\b[^\n]{0,12}\brev-parse\b[^\n]{0,6}--show-toplevel\b/im, Zr = /\$PWD\b|\$\{PWD\b|\$\(pwd(?:[ \t]+-[LP])?\)|`pwd`/im, Yr = /^(?:bash|sh|zsh|dash|ash|(?:pd|lo|o|m|r)?ksh[0-9]*|rbash|fish|csh|tcsh|yash|posh|[oy]sh)$/i, Oe = new Set([ "bash", "sh", "zsh", "dash", "ash", "ksh", "mksh", "rbash", "fish", "csh", "tcsh", "pwsh", "yash", "posh", "osh", "ysh", "pdksh", "loksh", "oksh" ]), Zt = new Set([ "python", "pypy", "node", "nodejs", "ruby", "perl", "php", "lua", "tsx", "ts-node", "bb", "awk", "gawk", "osascript", "expect", "tclsh", "wish", "rscript", "irb", "erb", "nawk", "mawk", "sed", "gsed", "m4" ]), ei = {
  julia: /\.jl$/,
  elixir: /\.exs?$/,
  groovy: /\.groovy$/,
  racket: /\.rkt$/,
  guile: /\.scm$/,
  sbcl: /\.(?:lisp|cl)$/
}, ti = new Set([ "bmake", "pmake", "gnumake", "make", "gmake", "ninja", "nix-build", "nix-instantiate", "nix-env", "ctest", "meson", "cmake", "bazel", "bazelisk", "npm", "npx", "pnpm", "yarn", "bun", "bunx", "lint-staged", "npm-run-all", "run-p", "run-s", "turbo", "nx", "lerna", "lefthook", "gulp", "grunt", "eslint", "prettier", "jest", "vitest", "mocha", "ava", "playwright", "cypress", "webpack", "rollup", "vite", "babel", "postcss", "tailwindcss", "next", "tsc", "commitlint", "stylelint", "uv", "pip", "pip3", "poetry", "pipenv", "hatch", "pdm", "rye", "pytest", "tox", "nox", "pylint", "flake8", "mypy", "pre-commit", "cargo", "rake", "bundle", "rspec", "rubocop", "rails", "composer", "phpunit", "phpstan", "psalm", "gradle", "gradlew", "mvn", "mvnw", "scons", "ant", "hg", "sbt", "lein", "clj", "clojure", "stack", "cabal", "mix", "dotnet", "msbuild", "swift", "xcodebuild", "pod", "fastlane", "just", "task", "terraform", "tofu", "terragrunt", "snakemake", "vagrant", "docker-compose", "podman-compose", "devbox", "mise", "asdf" ]), ro = /^--(?:version|help)$/, ni = {
  go: new Set([ "generate", "run", "test", "build", "install", "get", "vet", "tool" ]),
  deno: new Set([ "task", "test", "bench", "lint", "fmt", "check" ]),
  docker: new Set([ "compose", "build", "buildx" ]),
  podman: new Set([ "compose", "build" ]),
  nix: new Set([ "develop", "run", "build", "shell", "flake", "eval", "profile", "bundle", "print-dev-env", "fmt", "repl" ]),
  node: new Set([ "--run", "--test" ])
}, io = {
  python: new Set([ "-W", "-X", "--check-hash-based-pycs" ]),
  pypy: new Set([ "-W", "-X" ]),
  node: new Set([ "-e", "--eval", "-p", "--print", "-r", "--require", "--import", "--loader", "--experimental-loader", "-C", "--conditions", "--input-type", "--title" ]),
  ruby: new Set([ "-e", "-r", "--require", "-I", "-C", "-E", "-F" ]),
  perl: new Set([ "-e", "-E", "-M", "-m", "-I" ]),
  php: new Set([ "-r", "-d", "--define", "-c", "--php-ini", "-B", "-R", "-F", "-E", "-z", "--zend-extension", "-f", "--file" ]),
  osascript: new Set([ "-l", "-s" ]),
  lua: new Set([ "-e", "-l" ]),
  tsx: new Set([ "-e", "--eval", "-r", "--require", "--import", "--tsconfig" ]),
  "ts-node": new Set([ "-e", "--eval", "-r", "--require", "-P", "--project", "-O", "--compilerOptions" ])
};

function tn(e, n) {
  switch (e) {
   case "node":
   case "nodejs":
   case "tsx":
   case "ts-node":
    return /^(?:-e|--eval|-p|--print)$/.test(n) || /^-[a-zA-Z]*[ep]$/.test(n);

   case "python":
   case "pypy":
    return /^-[bBdEhiIOPqRsSuvVx]*[cm]/.test(n);

   case "perl":
    return /^-[acfgnpsStTuUwWXl0-9]*[eE]$/.test(n);

   case "ruby":
    return /^-[acdhlnpsSUvwy]*e$/.test(n);

   case "php":
    return /^-[aeHilmnqsvw]*[rRBE]$/.test(n);

   case "lua":
   case "bb":
   case "osascript":
   case "rscript":
   case "erb":
    return n === "-e";

   default:
    return !1;
  }
}

var oi = /\bimport\b|__import__|\bexec\b/;

function Et(e) {
  let n = e.text;
  return n.slice(n.lastIndexOf("/") + 1).toLowerCase();
}

function ri(e) {
  return e.replace(/^(python|pypy|perl|ruby|php|lua|node|nodejs|ksh|tclsh|wish)[0-9.]+t?$/, "$1");
}

function ii(e) {
  return Oe.has(e) || Zt.has(e) || Vbr.test(e);
}

function fo(e) {
  return /^[\/~$]|^[<>]\(/.test(e.text) && !/^~[+-]/.test(e.text);
}

function Ce(e) {
  return e !== void 0 && e.text !== "" && !fo(e) && !e.text.startsWith("-");
}

function Tt({program: e, args: n, assignments: r, redirects: s, heredoc: u, piped: h}, w, k = {
  roots: [],
  home: "",
  fromPayload: !1
}) {
  let R = r.findIndex(M => Et(M) === "flock"), x = R === -1 ? void 0 : mi(r, R), z = [ ...r.filter((M, q) => q !== x?.at), .../^(?:export|declare|typeset|local|readonly)$/.test(e.text) ? n : [] ], V = lo(z, k.shell === "zsh");
  if (V !== void 0 && k.standing === void 0) return V;
  let W = r.find(M => ct(M, k));
  if (W !== void 0) return "it names " + W.text;
  let I = pi(r, w, [ e, ...n ]);
  if (I !== void 0 && (k.standing === void 0 || po.has(I))) return Ct(I, k);
  let H = e.text === ":" ? r.findIndex(M => /^(?:sudo|doas)$/.test(Et(M))) : -1;
  if (H !== -1 && r.some((M, q) => q > H && (Fue(M.text, "si") || M.text === "--shell" || M.text === "--login"))) return Ct(Qt.sudo, k);
  if (x !== void 0) {
    let M = go(x.text, {
      redirects: s,
      heredoc: u,
      piped: h
    }, w, k);
    if (M !== void 0 && k.standing === void 0) return M;
  }
  if (e.text === "setenv" || e.text === "set" && /^-[a-zA-Z]*x/.test(n[0]?.text ?? "")) {
    let M = e.text === "setenv" ? 0 : 1, q = n[M], Q = lo(q === void 0 ? [] : [ {
      ...q,
      text: q.text + "=" + n.slice(M + 1).map(X => X.text).join(":")
    } ]);
    if (Q !== void 0) return Q;
  }
  if (e.text === "unset" && n.some(M => M.text.startsWith("GIT_CONFIG"))) return "it unsets a GIT_CONFIG variable";
  if (e.text === "unset" && n.some(M => M.text === "PATH")) return "it unsets PATH";
  if (e.expands && !/^\$/.test(e.text)) return "it runs a command whose name is built by an expansion";
  if (/^\$\(\u2026\)/.test(e.text)) return "it runs a command held in a variable or produced by another command";
  if (/^\$/.test(e.text)) {
    if (ct(e, k)) return "it names " + e.text;
    let M = /^\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?\//.exec(e.text)?.[1];
    if (M !== void 0 && k.relativeNames?.has(M) === !0) return "it runs a file by a relative path";
    if (/^\$[({](?:CURDIR|PWD)[)}]/.test(e.text)) return "it uses its working directory";
    let q = e.text.replace(/^\$\{[^}]*\}|^\$\([^)]*\)|^\$[A-Za-z_][A-Za-z0-9_]*/, "");
    if (q !== e.text && /^[^\/~$].*\//.test(q)) return "it runs a file by a relative path";
    let Q = k.make === !0 && /^(?:\$[({][A-Za-z_]+[)}])*\$[({]MAKE[)}]$/.test(e.text) ? "make" : /:-([^}]+)\}$/.exec(e.text)?.[1];
    if (Q === void 0) {
      if (k.fromPayload) return "it runs a command held in a variable or produced by another command";
      let X = n.find(ee => !ee.text.startsWith("-"));
      if (X !== void 0 && Ce(X) && (X.text.includes("/") || /\.[A-Za-z0-9]{1,5}$/.test(X.text))) return "it runs a file by a relative path";
      if (!/^\/(?:.*\/)?[^\/$]+$/.test(q)) return;
      let L = Et(e);
      if (eo(L) && L !== "runuser") return Vt(e) && !/[ \t]/.test(e.text) ? void 0 : zt([ {
        text: L,
        quoted: !1,
        raw: L
      }, ...n ], h, w, k, !0);
    } else e = {
      ...e,
      text: Q
    };
  }
  if (e.quoted && /[ \t]/.test(e.text) && !e.text.includes("/")) {
    w.push(e.text);
    return;
  }
  let F = ri(Et(e)), P = [ e, ...n, ...s.map(M => M.target) ].find(M => ct(M, k));
  if (P !== void 0) return "it names " + P.text;
  if (e.text.includes("/") && !fo(e) && !e.text.endsWith("/")) return "it runs a file by a relative path";
  if (k.standing === void 0 && /(?:^|[^$])\{[-+]?\d*[.\/#%+]{0,4}\}/.test(e.text)) return "it runs a file by a relative path";
  if (F === "for" || F === "select") return n.slice(n.findIndex(q => q.text === "in") + 1).some(q => Ce(q) && /[\/*?[]/.test(q.text)) ? "it loops over files by a relative name" : void 0;
  if (F === "source" || e.text === ".") {
    let M = n[0]?.text === "--" ? n[1] : n[0];
    if (M !== void 0 && qe(M)) {
      if (u !== void 0 && M.text !== "<(\u2026)") {
        w.push(u);
        return;
      }
      return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
    }
    return Ce(M) ? "it sources a file by a relative name" : void 0;
  }
  let N = gi(F, n);
  if (N === "reads_input") return Ct(Qt[F], k);
  if (N !== void 0) {
    if (N !== "held") for (let M of N.lines ?? []) w.push(M);
    return N === "held" || N.held ? "it runs " + F + " with a command or file this machine cannot verify" : (N.words ?? []).map(M => zt(M, h, w, k)).find(M => M !== void 0);
  }
  if (ti.has(F) || so(F, n) !== void 0) return F !== "hg" && n.length > 0 && n.every(M => ro.test(M.text)) ? void 0 : "it runs a project tool, such as make or npm";
  let G = F === "rscript" ? Xe(F, n) : void 0;
  if (ai.has(F) && !(F === "rscript" && (typeof G === "object" ? n.slice(0, n.indexOf(G)) : n).some(M => M.text === "--vanilla"))) return "it runs " + F;
  if (Oe.has(F) || Zt.has(F) || e.text === ":" && x === void 0) {
    let M = Oe.has(F), q = e.text !== ":" && (M ? ui(F, n) : fi(F, n));
    if (!q) {
      for (let {op: X, target: L} of s) {
        if ((X === "<" || X === "<>") && (Ce(L) || qe(L))) return e.text === ":" ? "it reads a compound command's input from a file in the launch directory" : "it runs a script by a relative name";
        if (X === "<<<" && Oe.has(F)) {
          if (/^\$/.test(L.text.trim())) return "it runs a command held in a variable or produced by another command";
          w.push(L.text);
        }
      }
      if (u !== void 0 && Oe.has(F)) w.push(u);
    }
    let Q = M && !q && u === void 0 && !s.some(X => /^<(?!>)/.test(X.op) || X.op === "<>");
    if (!q && e.text !== ":" && (h || Q || !Oe.has(F) && (u !== void 0 || s.some(X => X.op === "<<<")))) return F === "python" || F === "pypy" ? co(n) : "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
  }
  if (Oe.has(F)) return li(F, n, w, k, {
    redirects: s,
    heredoc: u,
    piped: h
  });
  if (F === "python" || F === "pypy") {
    let M = co(n);
    if (M !== void 0) return M;
  } else if (F === "perl") {
    if (n.some((M, q) => {
      let Q = /^-[acnpsTtwWX]*(?:I([\s\S]*)|[Mm]lib(?:=([\s\S]*)|(\s[\s\S]*))?)$/.exec(M.text);
      return Q !== null && (Q[1] !== void 0 ? ut(At(n, Q[1], q), k) : Q[3] !== void 0 ? Q[3].trim() !== "" : (Q[2] ?? "").split(",").some(X => X !== "" && ut({
        value: X,
        tildeLiteral: !0
      }, k)));
    })) return "it runs perl with -I or the lib pragma";
  } else if (F === "ruby") {
    let M = Xe("ruby", n), q = typeof M === "object" && n.includes(M) ? n.slice(0, n.indexOf(M)) : n;
    if (q.some((Q, X) => {
      let L = /^-[acdlnpsvwy]*I(.*)$/.exec(Q.text);
      if (L !== null) return At(q, L[1], X).value.split(":").some((ie, ae, ne) => (ie !== "" || ne.length === 1) && ut({
        value: ie,
        tildeLiteral: !1
      }, k));
      let ee = /^(?:-[acdlnpsvwy]*r|--require=?)([\s\S]*)$/.exec(Q.text);
      if (ee === null) return !1;
      let {value: re} = At(q, ee[1], X);
      return /^\.\.?\//.test(re) || /^bundler(?:\/+setup(?:\.rb)?)?$/i.test(re) || ct({
        text: re,
        quoted: !1,
        raw: re
      }, k);
    })) return "it runs ruby with -I or -r";
  } else if (F === "node" || F === "nodejs" || F === "tsx" || F === "ts-node") {
    if (n.some((Q, X) => /^(?:-r|--require|--import|--(?:experimental-)?loader)(?:=|$)/.test(Q.text) && !/^(?:\/|node:)/.test(Q.text.includes("=") ? Q.text.split("=")[1] ?? "" : n[X + 1]?.text ?? ""))) return "it runs node with --require, --import or --loader";
    let M = n.findIndex(Q => /^(?:-e|--eval|-p|--print|-pe|-ep)$/.test(Q.text)), q = M !== -1 ? n[M + 1]?.text : n.find(Q => /^--(?:eval|print)=/.test(Q.text))?.text.replace(/^--(?:eval|print)=/, "");
    if (q !== void 0 && _i(q)) return "it runs node code that loads a module by a bare or relative name";
  } else if (F === "lua") {
    if (n.some(M => /^-l/.test(M.text))) return "it runs lua with -l";
  } else if (F === "php") {
    let M = Si(n, k);
    if (M !== void 0) return M;
  }
  if (Zt.has(F) || ii(F) && !Oe.has(F)) {
    let M = Xe(F, n);
    if (M === "unknown_option") return "it runs an interpreter with an option this version does not know";
    if (M !== void 0 && qe(M) && F !== "python" && F !== "pypy") return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
    if (M !== void 0 && (M.text === "{}" || Ce(M))) return "it runs a script by a relative name";
    return;
  }
  if (/^(?:emacs|vim?|nvim|gvim|view|ex)$/.test(F) && n.some((M, q) => {
    let Q = /^(?:--?script|--load|-l|-S|-u)(?:=([\s\S]*))?$/.exec(M.text), X = Q === null ? void 0 : Q[1] ?? n[q + 1]?.text ?? "-";
    return X !== void 0 && !(M.text === "-u" && /^(?:NONE|NORC|DEFAULTS)$/.test(X)) && (X.startsWith("-") ? M.text === "-S" : !/^[\/~$]/.test(X));
  })) return "it runs a script by a relative name";
  let te = ei[F];
  if (te !== void 0) {
    if (n.some(M => M.text === "{}" || !M.text.startsWith("-") && te.test(M.text) && Ce(M))) return "it runs a script by a relative name";
    if (n.every(M => M.text.startsWith("-")) && (h || u !== void 0 || s.some(M => M.op.startsWith("<")))) return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
  }
  let Y = F === "dart" ? (n[0]?.text === "run" ? n.slice(1) : n).find(M => !M.text.startsWith("-")) : void 0;
  if (Y !== void 0 && Y.text.endsWith(".dart") && Ce(Y)) return "it runs a script by a relative name";
  if (F === "git") return vi(n, r, w);
  if (F === "java") {
    let M = n.findIndex(X => X.text === "-jar"), q = n.findIndex(X => /^(?:-cp|-classpath|--class-path)$/.test(X.text)), Q = q === -1 ? n.find(X => X.text.startsWith("--class-path="))?.text.slice(13) : n[q + 1]?.text;
    if (M !== -1) return Ce(n[M + 1]) ? "it runs a file by a relative path" : void 0;
    return n.length > 0 && n.every(X => ro.test(X.text)) ? void 0 : Q !== void 0 && Q.split(":").every(X => De(X)) ? void 0 : "it runs java with the working directory on its class path";
  }
  if (F === "eval") {
    w.push((n[0]?.text === "--" ? n.slice(1) : n).map(M => M.text).join(" "));
    return;
  }
  if (F === "nix-shell" || F === "nix") {
    let M = n.findIndex(q => /^(?:--run|--command|-c)$/.test(q.text));
    if (M !== -1 && n[M + 1] !== void 0) w.push(n.slice(M + 1).map(q => q.text).join(" "));
    return so(F, n) !== void 0 || F === "nix-shell" ? "it runs a project tool, such as make or npm" : void 0;
  }
  if (F === "trap") {
    let M = n[0]?.text === "--" ? n.slice(1) : n;
    if (M.length >= 2 && !/^-[lp]$/.test(M[0].text) && M[0].text !== "-") w.push(M[0].text);
    return;
  }
  if (F === "alias") {
    for (let M of n) {
      let q = M.text.indexOf("=");
      if (q > 0) w.push(M.text.slice(q + 1));
    }
    return;
  }
  if (F === "enable" || F === "hash") {
    let M = n.findIndex(q => q.text === (F === "enable" ? "-f" : "-p"));
    return M !== -1 && Ce(n[M + 1]) ? "it runs a file by a relative path" : void 0;
  }
  if (F === "exec" || F === ":") return;
  if (F === "find") {
    let M = [];
    for (let q = 0; q < n.length; q += 1) {
      if (!/^-(?:exec|execdir|ok|okdir)$/.test(n[q].text)) continue;
      let Q = q + 1;
      while (Q < n.length && n[Q].text !== ";" && n[Q].text !== "+") Q += 1;
      let X = n.slice(q + 1, Q);
      if (X.length === 0) continue;
      let L = zt(X, !1, w, k);
      M.push(X[0].text === "{}" || Gt(X).some(ee => ee.program.text === "{}") ? "it runs a file by a relative path" : L), 
      q = Q;
    }
    return M.find(q => q !== void 0);
  }
  return;
}

function so(e, n) {
  let r = ni[e];
  if (r === void 0) return;
  return n.find(s => r.has(s.text.startsWith("--") ? nt(s.text, "=") : s.text))?.text;
}

var si = 4, ho = "it wraps a command in more than four layers of commands such as find -exec or parallel", Yt = "it runs env with -P naming a relative directory", Qt = {
  parallel: "it runs parallel with no command of its own",
  script: "it runs script with no command of its own",
  su: "it runs su with no command",
  runuser: "it runs runuser with no command",
  sudo: "it starts a shell through sudo or doas with no command"
}, po = new Set([ ho, Yt, ...Object.values(Qt) ]);

function Ct(e, n) {
  if (po.has(e)) n.standing?.push(e);
  return e;
}

function zt(e, n, r, s, u = !1) {
  let h = (s.nesting ?? 0) + 1;
  if (h > si) return Ct(ho, s);
  if (e.length === 0) return;
  let w = [ ...u ? [] : [ {
    program: e[0],
    args: e.slice(1),
    assignments: []
  } ], ...Gt(e).filter(y => u || y.args.length !== e.length - 1) ], k = [];
  for (let y of w) {
    let S = Tt({
      ...y,
      redirects: [],
      piped: n
    }, r, {
      ...s,
      nesting: h
    });
    if (S !== void 0 && s.standing === void 0) return S;
    k.push(S);
  }
  return k.find(y => y !== void 0);
}

var ai = new Set([ "bun", "deno", "tsx", "ts-node", "lua", "rscript", "r", "bb" ]);

function De(e) {
  return /^[\/~$]/.test(e) && !/^~[+-]/.test(e) && e !== "";
}

function At(e, n, r) {
  return n !== "" ? {
    value: n,
    tildeLiteral: !0
  } : {
    value: e[r + 1]?.text ?? "",
    tildeLiteral: e[r + 1]?.quoted ?? !1
  };
}

function ut({value: e, tildeLiteral: n}, r) {
  return n && e.startsWith("~") || !De(e) || r.make === !0 && /^\$[({](?:CURDIR|PWD)[)}]/.test(e) || ct({
    text: e,
    quoted: !1,
    raw: e
  }, r);
}

function qe(e) {
  return e !== void 0 && /^(?:\/dev\/(?:stdin|fd\/\d+)|\/proc\/(?:self|\d+)\/fd\/\d+|-|[<>]\(\u2026\))$/.test(e.text);
}

function ct(e, n) {
  if (n.roots.length === 0) return !1;
  let r = e.text;
  if (/^\$(?:HOME|\{HOME\})(?=\/|$)/.test(r)) r = n.home + r.replace(/^\$(?:HOME|\{HOME\})/, ""); else if (/^~[A-Za-z0-9._-]*(?=\/|$)/.test(r)) r = n.home + r.replace(/^~[A-Za-z0-9._-]*/, "");
  if (!r.startsWith("/")) return !1;
  let s = qr.normalize(r);
  return n.roots.some(u => L$e(s, u));
}

function li(e, n, r, s, u) {
  let w = u.piped || u.heredoc !== void 0 || u.redirects.some(S => S.op.startsWith("<")), k = S => w && !/^\$/.test(S.text.trim()) ? go(S.text, u, r, s) : hi(S, r), y = !1;
  for (let S = 0; S < n.length; S += 1) {
    let C = n[S], A = C.text;
    if (A === "--") {
      let x = n[S + 1];
      if (x === void 0) return;
      return y ? k(x) : !/^[\/~$]/.test(x.text) || /^~[+-]/.test(x.text) ? "it runs a script by a relative name" : void 0;
    }
    if (e === "fish") {
      let x = /^(?:-C|--init-command(?:=([\s\S]*))?)$/.exec(A);
      if (x !== null) {
        let z = x[1] !== void 0 ? {
          ...C,
          text: x[1]
        } : n[S + 1], V = z === void 0 ? void 0 : k(z);
        if (V !== void 0 && s.standing === void 0) return V;
        S += x[1] !== void 0 ? 0 : 1;
        continue;
      }
    }
    if (mo(e, A) && !A.startsWith("--command=")) {
      if (e === "pwsh" && /^-e/i.test(A)) return "it hands pwsh an encoded command";
      y = !0, S += en(e, A);
      continue;
    }
    if (A.startsWith("--command=")) return k({
      ...C,
      text: A.slice(10)
    });
    if (/^--(?:rcfile|init-file)=/.test(A)) {
      if (!De(A.slice(A.indexOf("=") + 1))) return "it runs " + e + " with an rc file by a relative name";
      continue;
    }
    let R = en(e, A);
    if (R > 0) {
      let x = n[S + 1]?.text;
      if (S += R, /^--(?:rcfile|init-file)$/.test(A) && x !== void 0 && !De(x)) return "it runs " + e + " with an rc file by a relative name";
      continue;
    }
    if (A.startsWith("-") || A.startsWith("+")) continue;
    if (y) {
      let x = k(C);
      return e === "pwsh" && S + 1 < n.length ? x ?? k({
        ...C,
        text: n.slice(S).map(z => z.text).join(" ")
      }) : x;
    }
    return qe(C) ? "it runs a shell whose program arrives on a pipe, a heredoc or a file descriptor" : Ce(C) ? "it runs a script by a relative name" : void 0;
  }
  return;
}

var di = new Set([ "bash", "sh", "dash", "ash", "ksh", "mksh", "zsh", "rbash" ]);

function en(e, n) {
  if (/^--(?:rcfile|init-file)$/.test(n)) return 1;
  if (di.has(e)) {
    let r = /^[-+]([a-zA-Z]+)$/.exec(n);
    if (r === null) return 0;
    if (e === "zsh" || e === "ksh" || e === "mksh") return (e === "zsh" ? /o$/ : /[oO]$/).test(r[1]) ? 1 : 0;
    return (r[1].match(/[oO]/g) ?? []).length;
  }
  if (e === "fish") return /^(?:[+-]O|\+o|-C|--init-command|-p|--profile|-d|--debug|-D|--debug-stack-frames|-f|--features)$/.test(n) ? 1 : 0;
  if (e === "pwsh") return /^-(?:o|of|outputformat|ex|ep|executionpolicy|wd|workingdirectory|config|configurationname|custompipename|if|inp|inputformat|settings|settingsfile|w|windowstyle|v|version)$/i.test(n) ? 1 : 0;
  return n === "-o" || n === "+o" || n === "-O" || n === "+O" ? 1 : 0;
}

function ci(e, n) {
  let r = new Set;
  for (let s = 0; s < n.length; s += 1) {
    let u = n[s].text;
    if (u === "--") break;
    if (u.startsWith("-") || u.startsWith("+")) {
      let h = en(e, u);
      for (let w = 1; w <= h; w += 1) r.add(s + w);
      s += h;
    }
  }
  return r;
}

function ui(e, n) {
  let r = ci(e, n), s = n.findIndex((w, k) => !r.has(k) && !/^[-+]./.test(w.text)), u = s === -1 ? n : n.slice(0, s);
  if (u.some(w => mo(e, w.text))) return (s !== -1 || u.some(w => /^--command=./.test(w.text))) && !(e === "pwsh" && n[s]?.text === "-");
  let h = e !== "fish" && e !== "pwsh" && u.some(w => Fue(w.text, "s"));
  return s !== -1 && !qe(n[s]) && !h;
}

function mo(e, n) {
  return e === "pwsh" ? /^-(?:c|command|cwa|commandwithargs|e|ec|encodedcommand)$/i.test(n) : Fue(n, "c") || /^--command(?:=|$)/.test(n);
}

function fi(e, n) {
  let r = Xe(e, n);
  return n.some(s => tn(e, s.text)) || /^(?:[gnm]?awk|g?sed)$/.test(e) && n.some(s => !s.text.startsWith("-")) || typeof r === "object" && !qe(r);
}

function hi(e, n) {
  if (/^\$/.test(e.text.trim())) return "it hands a shell a command held in a variable or produced by another command";
  n.push(e.text);
  return;
}

function go(e, n, r, s) {
  let {commands: u, unreadable: h} = Rt(e, {
    make: !1
  });
  if (h !== null) return `it could not be read to the end as shell (${h})`;
  return u.map(w => Tt(w.program.text === ":" && w.args.length === 0 && w.redirects.length === 0 ? w : {
    ...w,
    redirects: [ ...w.redirects, ...n.redirects.filter(k => k.op.startsWith("<")) ],
    heredoc: w.heredoc ?? n.heredoc,
    piped: w.piped || n.piped
  }, r, {
    ...s,
    fromPayload: !0
  })).find(w => w !== void 0);
}

function pi(e, n, r = []) {
  let s = Array(e.length + 1), u = Array(e.length + 1).fill(!1), h = Array(e.length + 3).fill(!1);
  for (let A = e.length - 1; A >= 0; A -= 1) {
    let R = e[A].text, x = /^(?:-[iv0]*[uCP]|--unset|--chdir)$/.test(R) ? 2 : 1;
    h[A] = R.startsWith("-") && (/^-[iv0]*P/.test(R) && !(R.replace(/^-[iv0]*P/, "") || (e[A + 1]?.text ?? "")).split(":").every(De) || h[A + x]), 
    s[A] = /^(?:-S.|--split-string=)/.test(R) ? R.replace(/^(?:-S|--split-string=)/, "") : s[A + 1];
    let z = /^-[0oprtx]+a([\s\S]*)$/.exec(R), V = /^(?:-a|--arg-file)$/.test(R) ? e[A + 1]?.text : R.startsWith("--arg-file=") ? R.slice(11) : R.startsWith("-a") && R.length > 2 ? R.slice(2) : z !== null ? z[1] || e[A + 1]?.text : void 0;
    u[A] = V !== void 0 && !De(V) || u[A + 1];
  }
  let w = e.map(A => A.text.slice(A.text.lastIndexOf("/") + 1).toLowerCase()), k = w.indexOf("xargs"), y = k === -1 ? [] : D(e.slice(k + 1).flatMap((A, R, x) => {
    let z = /^-[0oprtx]*([IJi])([\s\S]*)$/.exec(A.text);
    if (z === null) return /^--replace(?:=|$)/.test(A.text) ? [ A.text.split("=")[1] ?? "{}" ] : [];
    return z[1] === "i" ? [ "{}", ...z[2] === "" ? [] : [ z[2] ], ...z[2].includes("=") ? [ A.text.split("=")[1] ] : [] ] : [ z[2] || x[R + 1]?.text ].filter(V => V !== void 0);
  })), S = y.length > 64 || r.some(A => y.some(R => A.text.includes(R)));
  w.forEach((A, R) => {
    if (A === "env" && s[R + 1] !== void 0) n.push(s[R + 1]);
  });
  let C = w.map((A, R) => {
    if (A === "env") return !e[R].text.startsWith("-") && h[R + 1] ? Yt : void 0;
    if (A !== "xargs") return;
    return S ? "it runs what xargs splices into the command from its input" : u[R + 1] ? "it runs xargs with its arguments read from a file by a relative name" : void 0;
  });
  return C.find(A => A === Yt) ?? C.find(A => A !== void 0);
}

function mi(e, n) {
  let r = e.slice(n + 1), s = r.findIndex((w, k) => !w.text.startsWith("-") && !Bt.has(r[k - 1]?.text ?? "")), u = s === -1 ? "" : r[s + 1]?.text ?? "", h = /^(?:-c|--command)$/.test(u) ? r[s + 2] : void 0;
  if (h !== void 0) return {
    at: n + s + 3,
    text: h.text
  };
  return u.startsWith("--command=") ? {
    at: n + s + 2,
    text: u.slice(10)
  } : void 0;
}

var Kt = new Set([ "-j", "-P", "-a", "-S", "-C", "-N", "-n", "-L", "-s", "-I", "-U", "-d", "-E", "-J", "-D", "--jobs", "--max-procs", "--arg-file", "--sshlogin", "--sshloginfile", "--slf", "--colsep", "--max-replace-args", "--max-args", "--max-lines", "--max-chars", "--delimiter", "--eof", "--halt", "--halt-on-error", "--joblog", "--results", "--res", "--delay", "--timeout", "--retries", "--tmpdir", "--workdir", "--wd", "--tagstring", "--env", "--rpl", "--load", "--memfree", "--memsuspend", "--nice", "--limit", "--termseq", "--basefile", "--bf", "--return", "--profile", "--transferfile", "--tf", "--block", "--blocksize", "--block-size", "--recstart", "--recend", "--compress-program", "--header", "--id", "--semaphorename", "--semaphoretimeout", "--st", "--shellquote-ignore" ]), ao = new Set([ "-t", "-F", "-E", "--echo", "-O", "--log-out", "-I", "--log-in", "-B", "--log-io", "-T", "--log-timing", "-m", "--logging-format", "-o", "--output-limit" ]);

function xt(e, n, r = !1) {
  let s = 0;
  while (s < e.length && e[s].text.startsWith("-")) {
    let u = e[s].text;
    s += n.has(u) || r && /^-[A-Za-z]{2,}$/.test(u) && n.has("-" + u.at(-1)) ? 2 : 1;
  }
  return e.slice(s);
}

function gi(e, n) {
  let r = u => u >= 0 && u < n.length ? {
    words: [ n.slice(u) ]
  } : void 0, s = u => u.filter((h, w) => h.length > 0 && u.findIndex(k => k.length === h.length && k.every((y, S) => y === h[S])) === w);
  switch (e) {
   case "su":
   case "runuser":
    {
      let u = n.flatMap((k, y) => {
        let S = /^(?:-[flmpPT]*c|--(?:session-)?command(?==|$))=?([\s\S]*)$/.exec(k.text);
        return S === null ? [] : [ S[1] !== "" ? S[1] : n[y + 1]?.text ];
      }), h = n.some((k, y) => {
        let S = /^(?:-[flmpPT]*s|--shell)(?:=?([\s\S]+))?$/.exec(k.text), C = S === null ? void 0 : S[1] ?? n[y + 1]?.text;
        return C !== void 0 && !/^[\/~$]/.test(C);
      });
      if (u.length === 0) {
        if (e === "runuser" && n.some(y => /^(?:-[flmpPT]*u|--user(?:=|$))/.test(y.text)) || n.length > 0 && n.every(y => /^(?:--version|--help|-V|-h)$/.test(y.text))) return;
        let k = n.filter((y, S) => !y.text.startsWith("-") && !/^(?:-[flmpPT]*[sgGwu]|--shell|--group|--supp-group|--whitelist-environment|--user)$/.test(n[S - 1]?.text ?? ""));
        return k.length <= 1 ? "reads_input" : h ? "held" : {
          words: [ [ {
            text: "sh",
            quoted: !1,
            raw: "sh"
          }, ...k.slice(1) ] ]
        };
      }
      let w = u.filter(k => k !== void 0);
      return {
        lines: w,
        held: w.length < u.length || h
      };
    }

   case "watch":
    {
      let u = D([ /^(?:-n|--interval|-d|--differences|-q|--equexit)$/, /^(?:-[a-zA-Z]*[nq]|--interval|--equexit)$/ ].map(h => {
        let w = 0;
        while (w < n.length && n[w].text.startsWith("-")) w += h.test(n[w].text) ? 2 : 1;
        return w;
      })).filter(h => h < n.length);
      return u.length === 0 ? void 0 : {
        lines: u.map(h => n.slice(h).map(w => w.text).join(" "))
      };
    }

   case "script":
    {
      let u = n.findIndex(y => /^(?:-[a-zA-Z]*c|--command)$/.test(y.text));
      if (u !== -1) {
        let y = n[u + 1]?.text;
        return y === void 0 ? "held" : {
          lines: [ y ]
        };
      }
      let h = n.filter(y => !y.text.startsWith("-"));
      if (h.length < 2) return n.length > 0 && n.every(y => /^(?:--version|--help|-V|-h)$/.test(y.text)) ? void 0 : "reads_input";
      let w = xt(n, ao), k = xt(n, ao, !0);
      if (w.length <= 1 || k.length <= 1) return "reads_input";
      return {
        words: s([ h.slice(1), n.slice(n.indexOf(h[0]) + 1), w.slice(1), k.slice(1) ])
      };
    }

   case "dotenv":
    return "held";

   case "direnv":
    {
      if (n[0]?.text !== "exec") return;
      let u = n[1];
      return u === void 0 || !De(u.text) ? "held" : r(2);
    }

   case "op":
    {
      if (n[0]?.text !== "run") return;
      let u = n.findIndex(w => /^--env-file(?:=|$)/.test(w.text));
      if (u !== -1) {
        let w = n[u].text.includes("=") ? n[u].text.slice(11) : n[u + 1]?.text ?? "";
        if (!De(w)) return "held";
      }
      let h = n.findIndex(w => w.text === "--");
      return h === -1 ? void 0 : r(h + 1);
    }

   case "hyperfine":
    {
      let u = [], h = /^(?:-p|--prepare|-s|--setup|-c|--cleanup|--conclude)$/, w = /^(?:-w|--warmup|-r|--runs|-m|--min-runs|-M|--max-runs|-n|--command-name|--export-\w+|--output|--shell|--sort|-u|--time-unit|-D|--parameter-step-size)$/, k = [];
      for (let y = 0; y < n.length; y += 1) {
        let S = n[y].text;
        if (h.test(S)) u.push(n[y + 1]?.text ?? ""), y += 1; else if (/^(?:-L|--parameter-list)$/.test(S)) k.push(...(n[y + 2]?.text ?? "").split(",")), 
        y += 2; else if (/^(?:-P|--parameter-scan)$/.test(S)) y += 3; else if (w.test(S)) y += 1; else if (!S.startsWith("-")) u.push(S);
      }
      return {
        lines: [ u.join(`\n`), ...u.length > 1 ? u : [], ...k ]
      };
    }

   case "parallel":
    {
      let u = n.filter(x => !x.text.startsWith("-") && x.text !== ":::");
      if (u.length === 0) return "reads_input";
      let h = n.findIndex(x => !x.text.startsWith("-")), w = n.slice(h), k = w.findIndex(x => /^::::?\+?$/.test(x.text)), y = w.filter(x => !/^::::?\+?$/.test(x.text)), S = xt(n, Kt), C = xt(n, Kt, !0);
      if ([ S, C ].some(x => x.length === 0 || /^::::\+?$/.test(x[0].text))) return "reads_input";
      let A = new Set(n.filter((x, z) => Kt.has(n[z - 1]?.text ?? "") && /^\{[-+]?\d*[.#%+]{0,4}\}$/.test(x.text))), R = x => {
        let z = x.findIndex(V => !A.has(V));
        return z === -1 ? [] : x.slice(z);
      };
      return {
        words: s([ R(u), R(y), S.filter(x => !/^::::?\+?$/.test(x.text)), C.filter(x => !/^::::?\+?$/.test(x.text)) ]),
        lines: k === 0 || [ S, C ].some(x => /^:::\+?$/.test(x[0].text)) ? y.map(x => x.text) : []
      };
    }

   default:
    return;
  }
}

function Xe(e, n) {
  if (e === "deno") return n[0]?.text === "run" ? n.slice(1).find(u => !u.text.startsWith("-")) : void 0;
  if (e === "php") {
    let u = io.php;
    for (let h = 0; h < n.length; h += 1) {
      let w = n[h].text, k = /^(?:-[fF]|--file)(?:=?([\s\S]+))?$/.exec(w);
      if (k !== null) return k[1] !== void 0 ? {
        ...n[h],
        text: k[1]
      } : n[h + 1];
      if (!w.startsWith("-") || w === "-" || w === "--") break;
      if (u.has(w)) h += 1;
    }
  }
  if (/^(?:[gnm]?awk|g?sed)$/.test(e)) {
    let u = e.endsWith("awk"), h = u ? /^-[a-zA-Z]*[fE]$/ : /^-[a-zA-Z]*f$/, w = u ? /^-[fE]./ : /^-f./;
    for (let k = 0; k < n.length; k += 1) {
      let y = n[k].text;
      if (h.test(y)) return n[k + 1];
      if (w.test(y)) return {
        ...n[k],
        text: y.slice(2)
      };
      if (y.startsWith("--file=")) return {
        ...n[k],
        text: y.slice(7)
      };
    }
    return;
  }
  let r = io[e] ?? new Set, s = !1;
  for (let u = 0; u < n.length; u += 1) {
    let h = n[u].text;
    if (h === "--") return n[u + 1];
    if (h === "-" || !h.startsWith("-")) return h === "-" ? n[u] : s ? "unknown_option" : n[u];
    if (tn(e, h)) return;
    if (r.has(h)) {
      u += 1;
      continue;
    }
    if ([ ...r ].some(w => w.length === 2 && h.length > 2 && h.startsWith(w))) continue;
    if (h.startsWith("--") && h.includes("=")) continue;
    if (!ki[e]?.test(h)) s = !0;
  }
  return;
}

var ki = {
  python: /^-[bBdEhiIOPqRsSuvVxE]+$|^--(?:version|help)$/,
  pypy: /^-[bBdEhiIOqRsSuvVx]+$/,
  node: /^--(?:enable-source-maps|no-warnings|no-deprecation|throw-deprecation|trace-warnings|trace-deprecation|pending-deprecation|experimental-strip-types|expose-gc|no-addons|preserve-symlinks|frozen-intrinsics|disallow-code-generation-from-strings|jitless|version|help)$|^-[civ]$/,
  ruby: /^-[acdhlnpsSTUvwWy0]+$|^--[a-z][a-z-]*$/,
  perl: /^-(?:[acfgnpsStTuUvwWX]|l[0-7]*|0[0-7]*|i\S*)+$/,
  osascript: /^-i$/,
  rscript: /^--[a-z][a-z-]*$/,
  php: /^-[aeHilmnqsvw]+$|^--[a-z-]+$/,
  lua: /^-[ivEW]$/,
  tsx: /^--[a-z][a-z0-9-]*$/,
  "ts-node": /^--[a-zA-Z][a-zA-Z0-9-]*$|^-[hvT]$/,
  bb: /^--?[a-z][a-z-]*$/
}, wi = new Set([ "assert", "async_hooks", "buffer", "child_process", "cluster", "console", "constants", "crypto", "dgram", "diagnostics_channel", "dns", "domain", "events", "fs", "http", "http2", "https", "inspector", "module", "net", "os", "path", "perf_hooks", "process", "punycode", "querystring", "readline", "repl", "stream", "string_decoder", "sys", "timers", "tls", "trace_events", "tty", "url", "util", "v8", "vm", "wasi", "worker_threads", "zlib", "test", "sqlite" ]);

function _i(e) {
  for (let n of e.matchAll(/(?:\brequire\s*(?:\?\.)?\s*\(|\bimport\s*\(|\bimport\s+(?:[\w*{}\s,]+\s+from\s+)?|\bfrom\s+|\bcreateRequire\b[^'"]*)\s*['"]([^'"]+)['"]/g)) {
    let r = n[1];
    if (r.startsWith("/") || r.startsWith("node:")) continue;
    if (!wi.has(nt(r, "/"))) return !0;
  }
  return /\bcreateRequire\b/.test(e);
}

function lo(e, n = !1) {
  for (let r of e) {
    let s = /^([A-Za-z_][A-Za-z0-9_]*)(?:\[[^\]]*\])?\+?=([\s\S]*)$/.exec(r.text);
    if (s === null) continue;
    let u = s[1], h = s[2], w = y => y === "." || !/^[\/~$]/.test(y) || /^~[+-]|^\$\{?PWD\b|^\$\(/.test(y), k = y => /^\$/.test(y) && !new RegExp(`^\\$\\{?(?:${u}|HOME|PATH)\\b`).test(y);
    if (dYe.includes(u)) {
      if (h.split(":").some(y => w(y) || k(y))) return `it sets ${u} with the working directory or a relative entry on it`;
    } else if (n && /^(?:path|fpath|manpath|cdpath)$/.test(u)) {
      let y = /^\(([\s\S]*)\)$/.exec(h)?.[1];
      if ((y === void 0 ? [ h ] : uo(y)).some(w)) return `it sets ${u} with the working directory or a relative entry on it`;
    } else if (u === "PHPRC" || u === "PHP_INI_SCAN_DIR") {
      let y = u === "PHPRC" ? [ h ] : h.split(":").filter(S => S !== "");
      if (h !== "" && y.some(w)) return `it sets ${u} to a php.ini location in the working directory`;
    } else if (Kr(u) || /^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+|PARAMETERS|GLOBAL|SYSTEM)$/.test(u)) return `it sets ${u}, which makes a shell, an interpreter or git load what it names`; else if (Gr.test(u)) {
      let y = h.split(/[\s=]+/).find(S => zr.test(S));
      if (y !== void 0) return `it sets ${u}, which a tool runs or loads, to a file in the working directory (${y})`;
    }
  }
  return;
}

function vi(e, n, r) {
  if (n.some(s => /^(?:env|-i|--ignore-environment|-u|--unset)$/.test(s.text.slice(s.text.lastIndexOf("/") + 1)) || s.text.startsWith("GIT_CONFIG"))) return "it runs git with the environment that switches its repository hooks off cleared or edited";
  for (let s = 0; s < e.length; s += 1) {
    let u = e[s].text, h;
    if (u === "-c" || u === "--config-env") s += 1, h = e[s]?.text; else if (u.startsWith("--config-env=")) h = u.slice(13); else if (/^-c./.test(u)) h = u.slice(2); else if (/^--exec-path=(?![\/~])/.test(u)) return "it runs git with an exec path in the launch directory (git-* commands come from there)";
    if (h === void 0) {
      if (/^(?:bisect|submodule|rebase)$/.test(u)) {
        let S = e.slice(s + 1), C = S.findIndex(A => /^(?:run|foreach|-x|--exec)$/.test(A.text));
        if (C !== -1 && S[C + 1] !== void 0) r.push(S.slice(C + 1).map(A => A.text).join(" "));
        break;
      }
      continue;
    }
    let w = h.indexOf("="), k = w === -1 ? h : h.slice(0, w), y = w === -1 ? "" : h.slice(w + 1);
    if (/^core\.hookspath$/i.test(k)) {
      if (!/^(?:\/|~\/)/.test(y) || /^~[+-]/.test(y)) return "it runs git with core.hooksPath set on the command line";
    } else if (/^include(?:if\.[^=]*)?\.path$/i.test(k) && !De(y)) return "it runs git with an include path set on the command line"; else if (y.startsWith("!") || y.includes("/") && !/^[\/~$]/.test(y) || /^(?:core\.(?:fsmonitor|sshcommand|askpass|editor|pager|gitproxy)|credential\.helper|diff\.external|gpg\.(?:\w+\.)?program|sequence\.editor|uploadpack\.packobjectshook)$/i.test(k)) return `it runs git with ${k} set on the command line to something that runs from the checkout`;
  }
  return;
}

var yi = /^(?:auto_prepend_file|auto_append_file|include_path|extension_dir|(?:zend_)?extension|opcache\.(?:preload|file_cache)|ffi\.preload|phar\.cache_list|sendmail_path|sqlite3\.extension_dir)$/;

function Si(e, n) {
  let r = Xe("php", e), s = typeof r === "object" ? e.indexOf(r) : -1, u = e.findIndex(y => y.text === "--"), h = typeof r === "object" && s !== -1 && !/^(?:-[fF]|--file)$/.test(e[s - 1]?.text ?? "") ? e.slice(0, s) : e.filter((y, S) => S !== s && (u === -1 || S < u)), w = (y, S) => At(h, y.replace(/^=/, ""), S);
  return h.some((y, S) => {
    let C = /^(?:-[zc]|--zend-extension=?|--php-ini=?)(.*)$/.exec(y.text);
    if (C !== null) return ut(w(C[1], S), n);
    let A = /^(?:-d|--define=?)(.*)$/.exec(y.text);
    if (A === null) return !1;
    let {value: R} = w(A[1], S), x = R.indexOf("="), z = (x === -1 ? R : R.slice(0, x)).trim(), V = x === -1 ? "1" : R.slice(x + 1);
    if (!yi.test(z)) return !1;
    let W = I => ut({
      value: I,
      tildeLiteral: !0
    }, n);
    if (z === "include_path") return V.split(":").some(W);
    if (/^(?:zend_)?extension$/.test(z) && !V.includes("/")) return !1;
    return V !== "" && W(V);
  }) ? "it runs php with -z, -c or a -d setting that loads a file" : void 0;
}

function co(e) {
  let r = Xe("python", e), s = e.findIndex(h => h === r || tn("python", h.text));
  if ((s === -1 ? e : e.slice(0, e[s] === r ? s : s + 1)).some(h => /^-[bBdEhIOPqRsSuvVx]*i/.test(h.text))) return "it runs python with -i";
  for (let h = 0; h < e.length; h += 1) {
    let w = e[h].text;
    if (w === "-" || qe(e[h])) return "it runs python with -m, -c or a program on stdin, without -P or -I";
    if (!w.startsWith("-") || w === "--") return;
    if (w.startsWith("--")) {
      if (w === "--version" || w === "--help") return;
      if (w === "--check-hash-based-pycs") h += 1;
      continue;
    }
    for (let k = 1; k < w.length; k += 1) {
      let y = w[k];
      if (y === "I" || y === "P") return;
      if (y === "V" || y === "h") return;
      if (y === "W" || y === "X") {
        if (k === w.length - 1) h += 1;
        break;
      }
      if (y === "m") return "it runs python with -m, -c or a program on stdin, without -P or -I";
      if (y === "c") {
        let S = k < w.length - 1 ? w.slice(k + 1) : e[h + 1]?.text ?? "";
        return oi.test(S) ? "it runs python with -m, -c or a program on stdin, without -P or -I" : void 0;
      }
    }
  }
  return "it runs python with -m, -c or a program on stdin, without -P or -I";
}

var bi = /^[ \t]*-?(?:s?include|load)[ \t]+(?!=)([^\n]*)$|^[ \t]*\.[ \t]*[ds-]?include[ \t]*("[^\n]*)$|^[ \t]*@(?:include|load)[ \t]*("[^\n]*)$/gm, Jt = /^(?:[gbp]|gnu)?(?:make|[gnm]?awk)$/i;

function Xt(e) {
  let n = e.trim().split(/[ \t]+/), r = 0;
  if (/(?:^|\/)env$/.test(n[0] ?? "")) {
    r = 1;
    while (r < n.length && (n[r].startsWith("-") || /^[A-Za-z_][A-Za-z0-9_]*=/.test(n[r]))) r += /^-[A-Za-z]*[PuC]$|^--(?:unset|chdir)$/.test(n[r]) ? 2 : 1;
  }
  let s = n[r] ?? "";
  return s.slice(s.lastIndexOf("/") + 1);
}

var Ri = /\bCLAUDE_PROJECT_DIR\b/i, Ei = /^[ \t]*#.*$/gm;

function ko(e, n, r, s) {
  let h = (e.includes(0) ? Buffer.from(e.filter(W => W !== 0)) : e).toString("utf8"), w = h.indexOf(`\n`), k = h.startsWith("#!") ? h.slice(2, w === -1 ? void 0 : w) : "", y = Xt(k), S = s !== void 0 && s !== null ? /^(?:bash|sh|zsh|dash|ash|ksh|mksh|rbash|fish)$/i.test(s) : y === "" || Yr.test(y) || Jt.test(y), C = h.startsWith("#!") ? w === -1 ? "" : h.slice(w + 1) : h, A = k + `\n` + (S ? xi(C) : h.replace(Ei, "")), R = cu(A), x = D(n).flatMap(W => Jr(W, r)).find(W => new RegExp(`(?<![\\w./~$-])${dl(cu(W))}${W.endsWith("/") ? "" : "(?![\\w.-])"}`).test(R));
  if (x !== void 0) return `it names ${x.replace('"', "")}`;
  if (Ri.test(R)) return "it reads $CLAUDE_PROJECT_DIR";
  if (Xr.test(R) || S && Zr.test(R)) return "it uses its working directory";
  let z = (s ?? y).toLowerCase();
  if (/^t?csh$/.test(z) && Array.from(C.matchAll(/^[ \t]*set[ \t]+path[ \t]*=[ \t]*\(([^)\n]*)\)/gm)).some(W => uo(W[1]).some(I => I === "." || !/^[\/~$]/.test(I)))) return "it sets path with the working directory or a relative entry on it";
  let V;
  try {
    let W = {
      roots: D(n),
      home: r,
      fromPayload: !1,
      shell: z
    };
    V = (S ? nn(C, Jt.test(Xt(k)), W) : void 0) ?? Ai(k, W);
  } catch {
    V = "it could not be read as shell";
  }
  if (V !== void 0) return V;
  if (Jt.test(Xt(k)) && Ci(A)) return "it includes another build file, plugin or awk source by a relative name";
  return;
}

function xi(e) {
  let n = [], r = 0;
  for (let [s, u] of no(e)) n.push(e.slice(r, s)), r = u;
  return n.push(e.slice(r)), n.join("");
}

function Ci(e) {
  for (let n of e.matchAll(bi)) {
    let r = (n[1] ?? n[2] ?? n[3] ?? "").trim().replace(/^"|"$/g, "").split(/[ \t]+/).filter(Boolean);
    if (r.length === 0 || r.some(s => !/^(?:\/|~\/|\$\(HOME\)|\$\{HOME\}|"\/|'\/|<)/.test(s))) return !0;
  }
  return !1;
}

function Ai(e, n) {
  let r = [], s = [];
  for (let u of Rt(e).commands) Tt(u, r, {
    roots: [],
    home: "",
    fromPayload: !1,
    standing: s
  });
  return s[0] ?? r.map(u => nn(u, !1, {
    ...n,
    fromPayload: !0
  }, 1)).find(u => u !== void 0);
}

function nn(e, n, r, s = 0) {
  let {commands: u, unreadable: h} = Rt(e, {
    make: n
  }), w = [], k = new Set(r.relativeNames);
  for (let {program: y, args: S, assignments: C} of u) {
    let A = /^(?:export|declare|typeset|local|readonly)$/.test(y.text) ? [ ...C, ...S ] : C;
    for (let R of A) {
      let x = /^([A-Za-z_][A-Za-z0-9_]*)=([^\/~$][\s\S]*)$/.exec(R.text);
      if (x !== null) k.add(x[1]);
    }
  }
  for (let y of u) {
    let S = Tt(y, w, {
      ...r,
      make: n,
      relativeNames: k
    });
    if (S !== void 0) return S;
  }
  if (h !== null) return `it could not be read to the end as shell (${h})`;
  for (let y of w) {
    let S = s >= 3 ? "it hands shell code to a shell too many layers deep" : nn(y, !1, {
      ...r,
      fromPayload: !0
    }, s + 1);
    if (S !== void 0) return S;
  }
  return;
}

var on = 128, wo = Ut, rn = 8, Ti = 512, Ii = 600, Di = {
  user: "your user settings",
  local: "this folder's settings.local.json",
  flag: "the --settings file"
};

function sn(e, n, r) {
  let s = n.type === "command" ? `${n.shell ?? r}\0${n.command}\0${_(n.args ?? null)}` : n.url;
  return `${e.event}\0${e.matcher ?? ""}\0${n.type}\0${s}\0${n.if ?? ""}`;
}

function Ro(e) {
  return e !== void 0 && e > 0 ? Math.min(e, Ii) : void 0;
}

async function It(e, n) {
  try {
    let r = await e.realpath(n);
    return wR(r) ? r : n;
  } catch {
    return n;
  }
}

var Pi = {
  reason: "source_in_sync_root",
  cause: "the cloud session can change that file"
}, Dt = {
  reason: "source_in_sync_root",
  cause: "this machine could not check where that file is"
}, Oi = {
  reason: "sync_root_is_config_dir",
  cause: "a directory the cloud session can write on this machine is a Claude config directory"
};

async function $i(e, n) {
  let r = n.opts.sync?.rootReal, s = e.source === "local" ? void 0 : n.opts.reachMemory;
  if (e.settingsFile === null || !s?.everInReach.has(e.source) && r === void 0 && n.roots.extraReach.length === 0) return null;
  let u = e.settingsFile, h = e.source === "local" ? n.opts.localSettingsLocation : void 0, w = h?.current ?? null;
  if (w === null) {
    let W = await ZNe(await e$e(u, n.opts.launchDir), n.opts.launchDir, Xce());
    if (W.verdict !== "local") return Dt;
    try {
      w = [ W.spelling, await n.deps.realpath(W.spelling) ];
    } catch {
      return Dt;
    }
    if (h !== void 0) h.current ??= w, w = h.current;
  }
  let k = [ u, ...w, ...s?.knownSpellings.get(e.source) ?? [] ].map(cu), y = O() === "windows", S = y ? /[\\/]/ : "/", C = [ ...r !== void 0 ? [ r ] : [], ...n.opts.sync?.root !== void 0 ? [ n.opts.sync.root ] : [], ...n.roots.extraReach ].map(W => y ? cu(W).replace(/[\\/]+$/, "") || "/" : cu(W.replace(/\/+$/, "") || "/"));
  if (C.some(W => k.some(I => !iz(I, W) && QRe(I, W)))) return Dt;
  let A = C.filter(W => k.some(I => iz(I, W))), R = k.flatMap(W => A.flatMap(I => iz(W, I) ? [ W === I ? "" : W.slice(I === "/" ? 1 : I.length + 1) ] : []));
  if (R.length === 0) return s?.everInReach.has(e.source) ? Dt : null;
  let x = D([ n.roots.configHomeReal, n.opts.configHome ].map(cu));
  if (A.some(W => x.some(I => W === I || QRe(W, I) || QRe(I, W)) || W.split(S).includes(".claude"))) return Oi;
  let V = R.every(W => W.split(S).some(I => I.startsWith(".")));
  return e.source === "local" && V ? null : Pi;
}

function _o(e) {
  return Object.entries(e.hooks).flatMap(([n, r]) => (r ?? []).flatMap(s => s.hooks.map(u => ({
    source: e,
    event: n,
    matcher: s.matcher,
    hook: u
  }))));
}

function vo(e, n) {
  let r = e.trim().split(/ +/);
  return n === null ? r.length === 1 : (n === "python3" || n === "python") && r.length === 2;
}

function Hi(e) {
  return up.includes(e);
}

var Ni = new Set([ "/usr/bin/env", "/bin/env" ]);

function Mi(e) {
  let n = e.subarray(0, 512).toString("utf8");
  if (!n.startsWith("#!")) return null;
  let r = n.indexOf(`\n`), s = n.slice(2, r === -1 ? void 0 : r).replace(/^[ \t]+|[ \t]+$/g, "").split(/[ \t]+/), u = s[0];
  if (u === void 0 || u === "") return null;
  if (s.some(y => /[^\x21-\x7e]/.test(y))) return "unjudgeable";
  if (!u.startsWith("/") || an.test(u)) return "unjudgeable";
  let h = Zts;
  if (!Ni.has(cu(ft.normalize(u)))) return s.slice(1).every(h) ? ft.normalize(u) : "unjudgeable";
  let w = s[1] === "-S" ? s.slice(2) : s.slice(1), k = w[0];
  if (k === void 0 || k.startsWith("-") || k.includes("=") || !w.slice(1).every(h)) return "unjudgeable";
  if (k.startsWith("/")) return an.test(k) ? "unjudgeable" : ft.normalize(k);
  return /^[\w.+-]+$/.test(k) ? null : "unjudgeable";
}

var an = /(?:^|\/)\.\.(?:\/|$)/, Li = /^\/dev\/(?:null|zero|full|u?random|tty\d*|pts(?:\/.*)?|ptmx|std(?:in|out|err)|fd(?:\/.*)?|dtracehelper|autofs_nowait)$/;

function Eo(e) {
  return e === "local";
}

async function yo(e, n, r = !1, s = !1) {
  if (!u8(e.event)) return {
    kind: "held",
    reason: `event_${(Hi(e.event) ? Yms(e.event) : null) ?? "container_internal"}`
  };
  let {hook: u} = e;
  if (u.type !== "command" && u.type !== "http") return {
    kind: "held",
    reason: "kind_unsupported"
  };
  let h = Eo(e.source.source), w = u.cloud === "device" && !h, k = u.cloud === "device" && h ? ' Its "cloud": "device" mark is ignored in settings.local.json.' : "", y = `"${Te(u)}" in ${Di[e.source.source]} does not run for cloud work`, S = Jms(e.event, e.matcher);
  if (r) return S ? {
    kind: "held",
    reason: "after_edit"
  } : {
    kind: "forward",
    event: e.event,
    hook: u
  };
  let {hooksFolderInReach: C} = n, A = C || h ? "" : " Check the script, then move it to ~/.claude/hooks.";
  if (S && u.cloud === "skip") return {
    kind: "held",
    reason: "after_edit"
  };
  if (u.cloud === "skip") return {
    kind: "held",
    reason: "author_skip",
    notice: `${y}: its entry is marked "cloud": "skip" or a value this version does not know.`
  };
  let R, x, z, V = !1, W = !1, I = !1, H = !1, F = !1, P, N, G = S && w ? `${y}: cloud edits change files in the cloud.${n.opts.inRepository ? " Put the hook in the repository's .claude/settings.json." : ""}` : void 0;
  if (u.type === "command") {
    let B = await bn(u, n.reach, n.deps, {
      resolved: n.resolved
    });
    if (W = B.kind === "opaque" && B.reason === "private_dotdir", I = B.kind === "opaque" && B.reason === "shell_prefix", 
    H = B.kind === "opaque" && (B.reason === "unsupported_platform" || B.reason === "unsupported_shell"), 
    B.kind === "unverifiable") V = !0, x = {
      kind: "held",
      reason: "unverifiable_target",
      notice: `${y}: ${B.missing ? "its script is missing" : "this machine could not verify its script"}.`,
      ...B.missing && {
        cause: "script_missing"
      }
    }; else if (B.kind === "script_in_reach" || B.kind === "script_outside_reach") {
      V = !0;
      let te = B.kind === "script_in_reach";
      if (R = B.pinnedTarget, te && !w) z = {
        kind: "held",
        reason: "in_reach",
        notice: `${y}: the cloud session can change the hook's script.${A}${k}`,
        ...C && {
          noRemedy: !0
        }
      };
      let Y = ze(n.reach), M = [ ...B.site.form === "exec" && B.site.slot === "arg0" && u.command.startsWith("/") ? [ an.test(u.command) ? "unjudgeable" : ft.normalize(u.command) ] : [], ...B.interpreter === null ? [ Mi(B.bytes) ].filter(L => L !== null) : [] ], q;
      for (let L of M) {
        if (L === "unjudgeable") {
          q = "this machine cannot check the interpreter the hook names";
          break;
        }
        let ee = await ZNe(await e$e(L, n.opts.launchDir), n.opts.launchDir, Xce()), re = ee.verdict === "local" ? await n.deps.realpath(ee.spelling).catch(() => null) : null;
        if (re === null) {
          q = `its interpreter ${Ks(L, {
            maxCodeUnits: 200
          })} could not be located on this machine`;
          break;
        }
        if ([ L, re ].some(ie => Y.some(ae => L$e(ie, ae)))) {
          q = `the cloud session can change its interpreter ${Ks(L, {
            maxCodeUnits: 200
          })}`;
          break;
        }
      }
      if (q === void 0 && B.interpreter === null) {
        let L = bbs(B.bytes);
        if (L !== null && (L === "unjudgeable" || L.kind !== "absolute" && L.kind !== "env")) q = "its interpreter may load code the cloud session can change";
      }
      if (q !== void 0 && !te) if (w) F = !0; else z = {
        kind: "held",
        reason: "interpreter_unvouched",
        notice: `${y}: ${q}.${h ? "" : " Use bash, python3 or node from your PATH."}${k}`
      };
      if (F = F || te && w, !te) {
        let L = ko(B.bytes, [ n.reach.launchDir, n.reach.launchDirReal, ...n.reach.sync !== void 0 ? [ n.reach.sync.rootReal, ...n.reach.sync.root !== void 0 ? [ n.reach.sync.root ] : [] ] : [], ...n.reach.extraReach ].filter(ee => !Li.test(ee)), n.deps.home, B.interpreter);
        if (L !== void 0 && !w && z === void 0) z = {
          kind: "held",
          reason: "loads_from_reach",
          notice: `${y}: its script may load files the cloud session can change. ${L.replace(/^it /, "The script ")}.${k}`
        }; else if (L !== void 0 && w) F = !0;
      }
      if (w && n.opts.optInPins !== void 0) {
        let L = `${B.pinnedTarget.realPath}\0${B.pinnedTarget.sha256}`, ee = n.opts.optInPins.get(B.pinnedTarget.path);
        if (ee === void 0 || !te && ee !== L) n.opts.optInPins.set(B.pinnedTarget.path, L); else if (ee !== L) x = {
          kind: "held",
          reason: "unverifiable_target",
          notice: `${y}: its script changed and the cloud session can write to it. Check the file, then restart claude --cloud.`
        }, R = void 0, F = !1;
      }
      let Q = s ? void 0 : (n.deps.findTemplateByDigest ?? H1o)(B.pinnedTarget.sha256), X = w && !S ? void 0 : Q;
      if (w && Q !== void 0 && u.args === void 0 && !u.if && !u.async && !u.asyncRewake && !u.once && vo(u.command, B.interpreter)) P = Q.template.id;
      if (X) {
        let {template: L, label: ee} = X, re = (n.opts.refusedTemplateIds ?? []).includes(L.id), ie = !re && (n.opts.enabledTemplateIds ?? M1o()).includes(L.id);
        if (re) G = S ? `${L.filename} is an after-edit hook, so it is not forwarded either: it does not run for this cloud session, only in local ones.` : void 0; else if (!ie) G = S ? `${L.filename} is not run in the cloud in this version, and as an after-edit hook it is not forwarded either, so it only runs in local sessions.` : `${L.filename} is not run in the cloud in this version; it runs on this machine instead.`; else if (L.event !== e.event) G = `${L.filename} is configured on ${e.event}; the cloud runs it only on ${L.event}, so it runs on this machine instead.`; else if (ee === "legacy" && !n.opts.allowLegacyTemplateDigests) G = `${L.filename} is an older copy of ${L.id}; the cloud will not run it. Update it.`; else if (u.args !== void 0 || u.if || u.async || u.asyncRewake || u.once || !vo(u.command, B.interpreter)) G = `${L.filename} is run in a way the cloud cannot reproduce (arguments, a condition, async or once), so it runs on this machine instead.`; else if (e.matcher !== void 0 && !uYe(e.matcher) && (!So(e.matcher) || !QNe.test(e.matcher))) G = void 0; else if (!whr(e.matcher, L.matcher)) G = `${L.filename} is configured with the matcher "${Ks(e.matcher ?? "", {
          maxCodeUnits: 200
        })}" and the cloud runs it on "${L.matcher}", so it runs on this machine instead.`; else {
          let ae = Ro(u.timeout);
          N = {
            entry: {
              wire: {
                template: L.id,
                digest: B.pinnedTarget.sha256,
                event: e.event,
                ...!uYe(e.matcher) && {
                  matcher: e.matcher
                },
                ...ae !== void 0 && {
                  timeout_s: ae
                }
              },
              local: {
                templateId: L.id,
                label: ee,
                scriptRealPath: B.pinnedTarget.realPath,
                bytes: B.bytes,
                userMatcher: e.matcher,
                source: e.source.source
              }
            },
            ...ee === "legacy" && {
              legacyNotice: `${L.filename} is an older copy of ${L.id}; the cloud will run that copy. Update it to get fixes.`
            },
            ...e.matcher !== void 0 && !uYe(e.matcher) && !whr(L.matcher, e.matcher) && {
              narrowNotice: `${L.filename} is configured with the matcher "${Ks(e.matcher, {
                maxCodeUnits: 200
              })}"; in the cloud it runs on "${L.matcher}" only.`
            }
          };
        }
        if (N === void 0 && S && ie) G = `${(G ?? `${L.filename} cannot move to the cloud here.`).replace(/(?:, so|; it) (?:it )?runs on this machine instead\.$/, ".").replace(/\.$/, "")}, and as an after-edit hook it is not forwarded either: it runs in local sessions only.`;
      }
    }
  }
  if (N !== void 0) {
    let B = [ N.legacyNotice, N.narrowNotice ].filter(te => te !== void 0).join(" ");
    return {
      kind: "template",
      entry: N.entry,
      event: e.event,
      hook: u,
      ...B !== "" && {
        notice: B
      }
    };
  }
  if (S) return {
    kind: "held",
    reason: "after_edit",
    ...G !== void 0 && {
      notice: G
    }
  };
  if (x !== void 0) return x;
  if (e.matcher !== void 0 && !So(e.matcher)) return {
    kind: "held",
    reason: "over_cap"
  };
  if (e.matcher !== void 0 && !uYe(e.matcher) && !QNe.test(e.matcher)) return {
    kind: "held",
    reason: "pattern_matcher",
    notice: `"${Te(u)}" does not run for cloud work: cloud sessions cannot take the pattern matcher "${Ks(e.matcher, {
      maxCodeUnits: 200
    })}".${h ? "" : ` List the names to match${GRn.has(e.event) ? `, such as ${je}|${et}` : ""}.`}`
  };
  if (z !== void 0) return z;
  if (u.type === "command" && !V) {
    if (!w) return {
      kind: "held",
      reason: "unpinned_command",
      notice: I ? `${y}: it would run through your CLAUDE_CODE_SHELL_PREFIX, which this machine cannot verify.${e.source.source === "user" ? ' Marked "cloud": "device", it runs on this machine, unverified, when the cloud session asks.' : ""}${k}` : W ? `${y}: its script is in a dot-folder this machine does not read hooks from.${A}${k}` : `${y}: this machine cannot verify what the command runs.${C || H || h ? "" : " Put the command in one script in ~/.claude/hooks."}${k}`,
      ...I ? {
        cause: "shell_prefix"
      } : W && {
        cause: "dot_folder"
      },
      ...(C || H) && {
        noRemedy: !0
      }
    };
    F = !0;
  }
  return {
    kind: "forward",
    event: e.event,
    hook: u,
    ...R !== void 0 && {
      pinnedTarget: R
    },
    ...F && {
      authorOptIn: !0
    },
    ...w && {
      cloudDevice: !0
    },
    ...P !== void 0 && {
      templateTwinId: P
    },
    ...G !== void 0 && {
      notice: G
    }
  };
}

function So(e) {
  return e.length <= Ti && !/[\p{Cc}\p{Cf}]/u.test(e);
}

function bo(e) {
  return `${e} is configured more than once; the cloud runs it once.`;
}

function Fi() {
  return {
    forwarded: [],
    templates: [],
    held: [],
    heldCounts: {
      after_edit: 0,
      kind_unsupported: 0,
      plugin: 0,
      managed: 0,
      other: 0
    },
    notices: []
  };
}

async function u6n(e, n, r) {
  let s = Fi();
  if (e.kind === "none") return s;
  let u = {
    launchDirReal: await It(r, n.launchDir),
    projectDirReal: await It(r, n.projectDir),
    configHomeReal: await It(r, n.configHome),
    extraReach: D((await Promise.all([ ...n.repoRoot !== void 0 ? [ n.repoRoot ] : [], ...n.extraReachRoots ?? [] ].map(async H => {
      let F = await ZNe(await e$e(H, n.launchDir), n.launchDir, Xce());
      return F.verdict === "local" ? [ H, await It(r, F.spelling) ] : F.verdict === "foreign" ? [ F.spelling ] : [ H, ...t$e(F, n.launchDir) ];
    }))).flat())
  }, h = {
    launchDir: n.launchDir,
    launchDirReal: u.launchDirReal,
    configHomeReal: u.configHomeReal,
    projectDir: n.projectDir,
    projectDirReal: u.projectDirReal,
    ...n.sync !== void 0 && {
      sync: n.sync
    },
    extraReach: u.extraReach
  }, w = {
    opts: n,
    deps: r,
    roots: u,
    reach: h,
    resolved: new Map,
    hooksFolderInReach: mt([ ft.join(r.home, ".claude", "hooks") ], h)
  }, k = (H, F, {cause: P, noRemedy: N} = {}) => {
    if (s.held.push({
      event: H.event,
      ...H.matcher !== void 0 && {
        matcher: Ks(H.matcher, {
          maxCodeUnits: 200
        })
      },
      source: H.source.source,
      command: Te(H.hook),
      reason: F,
      ...P !== void 0 && {
        cause: P
      },
      ...(N || Eo(H.source.source) || F === "after_edit" && !n.inRepository) && {
        noRemedy: !0
      }
    }), F === "after_edit") s.heldCounts.after_edit += 1; else if (F === "kind_unsupported") s.heldCounts.kind_unsupported += 1; else s.heldCounts.other += 1;
  }, y = new Set, S = H => {
    if (H !== void 0 && !y.has(H)) y.add(H), s.notices.push(H);
  }, C = H => {
    if (y.delete(H)) s.notices = s.notices.filter(F => F !== H);
  }, A = new Map, R = new Map, x = new Map, z = new Set, V = new Set, W = new Map;
  if ([ n.launchDir, n.configHome, n.sync?.rootReal, n.sync?.root, ...n.extraReachRoots ?? [] ].some(H => H !== void 0 && !wR(H))) {
    S("Hooks stay on this machine: its launch, config or sync directory is not an absolute path this version can place, so none are offered to the cloud session.");
    for (let H of e.sources) for (let F of _o(H)) k(F, "unverifiable_target");
    return s;
  }
  for (let H of e.sources) {
    let F = await $i(H, w), P = _o(H);
    if (F !== null && P.length > 0) S(`Hooks from ${Ks(H.settingsFile ?? "", {
      maxCodeUnits: 200
    })} are not offered to the cloud session: ${F.cause}.`);
    for (let N of P) {
      let G = await yo(N, w, F !== null);
      if (F !== null) {
        k(N, G.kind === "held" && (G.reason.startsWith("event_") || G.reason === "kind_unsupported" || G.reason === "after_edit") ? G.reason : F.reason, {
          noRemedy: !0
        });
        continue;
      }
      if (G.kind === "held") {
        S(G.notice), k(N, G.reason, G);
        continue;
      }
      let B = G;
      if (B.kind === "template") {
        let {entry: ie} = B, ae = sn(N, B.hook, r.defaultShell), ne = W.get(ie.local.templateId), se = R.get(ae), j = ne !== void 0 && (ne.site.matcher ?? "") === (N.matcher ?? ""), Z = ne !== void 0 ? j : s.templates.length < rn;
        if (se !== void 0 && Z) {
          if (k(se.site, "duplicate"), z.add(se.index), se.notice !== void 0) C(se.notice);
          R.delete(ae);
        }
        if (ne !== void 0 && !j) {
          if (B = await yo(N, w, !1, !0), B.kind === "held") {
            k(N, B.reason, B), S(B.notice);
            continue;
          }
        } else if (ne !== void 0) {
          k(ne.site, "duplicate");
          let le = sn(ne.site, ne.hook, r.defaultShell);
          if (le !== ae) x.delete(le);
          if (x.set(ae, {
            index: ne.index,
            templateId: ie.local.templateId
          }), s.templates[ne.index] = ie, ne.notice !== void 0) C(ne.notice);
          W.set(ie.local.templateId, {
            index: ne.index,
            site: N,
            hook: B.hook,
            ...B.notice !== void 0 && {
              notice: B.notice
            }
          }), S(bo(ie.local.templateId)), S(B.notice);
          continue;
        } else if (s.templates.length >= rn) {
          k(N, "over_cap"), S(`Only ${rn} templates can run in the cloud session; the rest stay on this machine.`);
          continue;
        } else {
          W.set(ie.local.templateId, {
            index: s.templates.length,
            site: N,
            hook: B.hook,
            ...B.notice !== void 0 && {
              notice: B.notice
            }
          }), x.set(ae, {
            index: s.templates.length,
            templateId: ie.local.templateId
          }), s.templates.push(ie), S(B.notice);
          continue;
        }
      }
      if (B.kind !== "forward") continue;
      let te = B, Y = Ro(te.hook.timeout), M = {
        wire: {
          id: "",
          event: N.event,
          ...!uYe(N.matcher) && {
            matcher: N.matcher
          },
          kind: te.hook.type,
          ...Y !== void 0 && {
            timeout_s: Y
          },
          source: H.source,
          ...te.hook.if && {
            has_condition: !0
          },
          ...te.pinnedTarget !== void 0 && {
            target_pinned: !0
          },
          ...(te.authorOptIn || te.cloudDevice && te.hook.type === "command") && {
            author_opt_in: !0
          }
        },
        local: {
          hook: te.hook,
          matcher: N.matcher,
          event: te.event,
          source: H.source,
          ...te.pinnedTarget !== void 0 && {
            pinnedTarget: te.pinnedTarget
          },
          ...te.cloudDevice && {
            cloudOptIn: !0
          },
          ...te.templateTwinId !== void 0 && {
            templateTwinId: te.templateTwinId
          }
        }
      }, q = sn(N, te.hook, r.defaultShell), Q = x.get(q), X = (A.get(N.event) ?? 0) < wo, L = R.has(q) || s.forwarded.length < on && X;
      if (Q !== void 0 && L) {
        let ie = W.get(Q.templateId);
        if (ie !== void 0 && ie.index === Q.index) {
          if (k(ie.site, "duplicate"), ie.notice !== void 0) C(ie.notice);
          C(bo(Q.templateId)), W.delete(Q.templateId);
        }
        V.add(Q.index), x.delete(q);
      }
      let ee = R.get(q);
      if (ee !== void 0) {
        k(ee.site, "duplicate");
        let ie = s.forwarded[ee.index].wire.id;
        if (s.forwarded[ee.index] = {
          ...M,
          wire: {
            ...M.wire,
            id: ie
          }
        }, ee.notice !== void 0) C(ee.notice);
        R.set(q, {
          index: ee.index,
          site: N,
          ...te.notice !== void 0 && {
            notice: te.notice
          }
        }), S(te.notice);
        continue;
      }
      if (s.forwarded.length >= on) {
        k(N, "over_cap"), S(`Only the first ${on} hooks are offered to the cloud session; the rest stay on this machine.`);
        continue;
      }
      if (!X) {
        k(N, "over_cap"), S(`Only the first ${wo} ${N.event} hooks are offered to the cloud session; the rest stay on this machine.`);
        continue;
      }
      let re = A.get(N.event) ?? 0;
      A.set(N.event, re + 1), R.set(q, {
        index: s.forwarded.length,
        site: N,
        ...te.notice !== void 0 && {
          notice: te.notice
        }
      }), S(te.notice), s.forwarded.push({
        ...M,
        wire: {
          ...M.wire,
          id: L1o(n.instanceId, N.event, re)
        }
      });
    }
  }
  s.forwarded = s.forwarded.filter((H, F) => !z.has(F)), s.templates = s.templates.filter((H, F) => !V.has(F));
  let I = new Map(s.templates.map(H => [ `${H.wire.template}\0${H.wire.event}`, H.wire.template ]));
  return s.forwarded = s.forwarded.filter(H => {
    let F = H.local.templateTwinId, P = F === void 0 ? void 0 : I.get(`${F}\0${H.wire.event}`);
    if (F === void 0 || P === void 0 || !whr(FQe(F)?.matcher ?? "", H.local.matcher ?? "*")) return !0;
    return s.held.push({
      event: H.wire.event,
      ...H.local.matcher !== void 0 && {
        matcher: Ks(H.local.matcher, {
          maxCodeUnits: 200
        })
      },
      source: H.local.source,
      command: Te(H.local.hook),
      reason: "duplicate"
    }), s.heldCounts.other += 1, S(`"${Te(H.local.hook)}" is the same script the cloud already runs as ${P}; it is not also run on this machine.`), 
    !1;
  }), s;
}

function xo(e) {
  let n = Qae(e);
  return n === void 0 ? void 0 : {
    attestation: n,
    heldBack: Lge(n)
  };
}

function Ui(e) {
  let n = e.forwarded + e.templateNames.length;
  return `${n === 1 ? "One of your hooks" : `${n} of your hooks`} could run for cloud sessions started from this machine \u2014 run /hooks to decide (nothing from this machine runs for them until you do).`;
}

function p6n(e) {
  return e.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
}

var Co = 3e4;

function ji(e, n, r = async s => ({
  real: await Be(s),
  aliased: await lar(s)
})) {
  let s = {
    path: e,
    real: null,
    env: n === void 0 ? void 0 : {
      ...n
    },
    locate: () => {
      s.retryAt = void 0, r(e).then(({real: u, aliased: h}) => {
        if (s.real = h ? "unresolvable" : u, h) s.retryAt = Date.now() + Co;
      }, u => {
        if (s.real = "unresolvable", u?.code !== "ENOENT" && u?.code !== "ENOTDIR") s.retryAt = Date.now() + Co;
      });
    }
  };
  return s.locate(), s;
}

function qi(e, n = Date.now()) {
  if (e.retryAt !== void 0 && n >= e.retryAt) e.locate?.();
}

function hUt(e) {
  return e.legacyConfigFile ??= ji(Jl(), ens(e, aZ())), qi(e.legacyConfigFile), e.legacyConfigFile;
}

function f6n(e, n, r = s => fe(s)?.env) {
  let s = h => e.pinnedScopes.has(h) || h === "userSettings" && e.everInReach.has("user") || h === "flagSettings" && e.everInReach.has("flag"), u = n.env !== void 0 && typeof n.real === "string" && n.real !== "unresolvable" && Wi(n.path) && !P_([ n.path, n.real ], [ ...e.stickyRoots ]);
  return Object.assign({}, u ? n.env : {}, ...ws.filter(h => !zp.has(h) && !s(h)).map(h => dUe(r(h), h) ?? {}));
}

function m6n(e) {
  return Qr() ?? e;
}

function g6n(e, n) {
  let r = setTimeout(e, n);
  return r.unref(), {
    clear: () => clearTimeout(r)
  };
}

function Spn() {
  if (!(O() !== "windows" && zf() && vkr() && !a.CLAUDE_CODE_DISABLE_HOOK_FORWARDING)) return !1;
  if (qze()) return !0;
  return i("tengu_device_hooks_kept_back", {
    flag: c(Tke),
    own_flags_loaded: sa()
  }), !1;
}

function Bi(e) {
  let n = null, r = !1, s = new Set;
  return {
    state: () => n,
    setState(u) {
      n = r ? null : u;
    },
    async handleForwardedHook(u) {
      if (r) return;
      try {
        let h = await e.servicer.serve(u, n);
        if (r) return;
        if (h.kind === "silent") {
          if (h.reason === "not_mine" || h.reason === "no_state" || h.reason === "withdrawn") e.release(u.requestId);
          return;
        }
        e.respond(u.requestId, h.answer);
      } catch (h) {
        if (e.logError(h), age(u.callbackId)?.event === "PreToolUse" && !r) try {
          e.respond(u.requestId, {
            hookSpecificOutput: {
              hookEventName: "PreToolUse",
              permissionDecision: "deny",
              permissionDecisionReason: "A hook on your machine could not be run for this call (internal error); retry"
            }
          });
        } catch {}
      }
    },
    handleCancelled(u, h) {
      if (r || !e.servicer.cancel(u, h) || h !== "worker") return;
      for (let w of s) w();
    },
    onStoppedWhileRunning(u) {
      return s.add(u), () => s.delete(u);
    },
    async dispose() {
      r = !0, n = null, s.clear(), e.servicer.cancelAll(), await e.staging.dispose();
    }
  };
}

function Ao({launchDir: e, memory: n, getTools: r, respond: s, release: u, onLine: h, trustAccepted: w = UO, isMuted: k}) {
  let y = () => null, S = vns(Ens(), () => [ ...y()?.cloudWritableRoots ?? [ e ], ...IXt(e) ]), C = bt(() => S.dispose()), A = m6n(e), R = A;
  Be(A).then(H => {
    R = H;
  }, () => {});
  let x = {
    ...gs()
  };
  ARn(n, hUt(n).env);
  let z = n.senderFor(e), V = () => {
    let H = gs();
    return yrt({
      attached: x,
      beforeSettings: fh(),
      ownEnv: f6n(z, hUt(n)),
      childrenSee: F => Object.hasOwn(H, F)
    });
  }, W = Gn({
    memory: n.servicerFor(e),
    now: Date.now,
    setTimer: g6n,
    trustAccepted: w,
    ...k && {
      isMuted: k
    },
    judgeSender: xo,
    pin: Ert(),
    staging: S,
    run: (H, F, P) => sg(F.launchDir, () => An(H, F, Cn, P)),
    evaluateCondition: (H, F) => Yto(H, F, r(), F.cwd),
    parseTarget: H => {
      let F = V();
      return D$e(H, {
        home: M0e(F),
        hookCwd: R,
        projectDir: A,
        defaultShell: v1(),
        shellPrefix: p6n(F)
      });
    },
    emptyTranscriptPath: () => S.placeholder("cloud-transcript.jsonl"),
    defaultTimeoutMs: zn,
    onLine: (H, F) => h({
      line: H,
      level: F
    }),
    telemetry: H => {
      let F = Gi(H.outcome);
      if (F === "ok") g("device_hooks_serve"); else if (F === "sad") f("device_hooks_serve", H.outcome); else if (F === "bad") m("device_hooks_serve", H.outcome);
      i("tengu_device_hook_served", {
        event: pe(H.event),
        kind: pe(H.kind),
        outcome: c(H.outcome),
        exit_class: pe(H.exitClass),
        duration_ms: H.durationMs,
        translated_paths: H.translatedPaths,
        replay: H.replay,
        blocked: H.blocked,
        staged: H.staged,
        project_frame: H.projectFrame,
        repinned: H.repinned,
        waited_ms: H.waitedMs,
        ...H.attestation !== void 0 && {
          attestation_mode: c(H.attestation.mode),
          request_attestation: c(H.attestation.status),
          attestation_verdict: c(H.attestation.verdict)
        }
      });
    },
    debug: H => t(H),
    logError: d,
    extraWritableRoots: () => IXt(e),
    hostEnv: V,
    childEnvironment: (H, F) => aar(H, F, gs()),
    placePath: Uye,
    resolveProgram: brt,
    defaultShell: () => v1()
  }), I = Bi({
    servicer: W,
    staging: {
      dispose: () => (C(), S.dispose())
    },
    respond: s,
    release: u,
    logError: H => {
      d(H), m("device_hooks_serve", "serve_threw");
    }
  });
  return y = I.state, t("[deviceHooks] device hook session created for this attach"), 
  I;
}

var Vi = {
  stageVerifiedBytes: "always",
  unmarkedStartFolder: "private",
  repinChangedScripts: !1,
  wireLabel: "basename",
  denyUnjudgeablePaths: !1,
  runWithUntranslatedPaths: !1,
  timeoutFailsClosed: !1
};

function To({launchDir: e, memory: n, cloudSessionId: r, session: s, sendControlRequest: u, syncRoot: h, servingMuted: w, onLine: k, storageV5: y}) {
  let S = Ert().openNoFollow, C = Be(e).catch(() => e), A = m6n(e), R = Py(e), x = R ?? e, z = n.senderFor(e), V = {
    ...gs()
  };
  ARn(n, hUt(n).env);
  let W = () => {
    let I = gs();
    return yrt({
      attached: V,
      beforeSettings: fh(),
      ownEnv: f6n(z, hUt(n)),
      childrenSee: H => Object.hasOwn(I, H)
    });
  };
  return ogs({
    memory: z,
    now: Date.now,
    setTimer: g6n,
    hookFlags: In(),
    capture: () => GDn(VDn()),
    buildInventory: ({captured: I, instanceId: H, syncRoot: F, reachRoots: P, withoutTemplates: N}) => {
      let G = W();
      return u6n(I, {
        instanceId: H,
        launchDir: e,
        projectDir: A,
        configHome: Ee(),
        ...F !== null && {
          sync: {
            rootReal: F.real,
            root: F.root
          }
        },
        inRepository: R !== null,
        ...x !== e && {
          repoRoot: x
        },
        extraReachRoots: P,
        allowLegacyTemplateDigests: !0,
        refusedTemplateIds: [ ...N ],
        optInPins: z.optInPins,
        reachMemory: z,
        localSettingsLocation: z.localSettingsLocation
      }, {
        realpath: Be,
        open: S,
        home: M0e(G),
        defaultShell: v1(),
        shellPrefix: p6n(G)
      });
    },
    mintInstanceId: () => D1o(),
    displayName: Eyt(),
    cloudSessionId: r,
    launchDir: e,
    launchDirReal: () => C,
    realpath: Be,
    projectRoot: x,
    syncRoot: async () => {
      let I = h();
      return I === null ? null : {
        root: I,
        real: await Be(I).catch(() => I)
      };
    },
    servingMuted: w,
    commonWriteRoots: () => fRe(e),
    scopeWriteRoots: (I, H) => Qce(e, I, H),
    scopeWriteEntries: I => Jce(I, e),
    scopeSettingsFile: I => hn(I) ?? null,
    sendRequest: async (I, {timeoutMs: H, onEchoed: F}) => {
      try {
        return await u(I, {
          timeoutMs: H,
          background: !0,
          ...F && {
            onEchoed: F
          }
        });
      } catch (P) {
        let N = mV(P);
        if (N === "timeout" || N === "aborted") throw Error("timeout: no answer from the cloud worker in time");
        if (N === "disconnected" || N === "not_connected") throw Error("disconnected: the session stream is not connected");
        throw P;
      }
    },
    ensureConsent: rgs({
      deps: gRe(y),
      pin: n.consentPin,
      onNotAsked: I => {
        i("tengu_device_hooks_consent_notice", {}), k({
          line: Ui(I),
          level: "info"
        });
      },
      isStoreInReach: I => Ixt(mRe(), I, Be),
      onUntrustedStore: I => {
        let H = Wn(mRe());
        k({
          line: I === "writable" ? `The saved answer about this machine's hooks is ignored here: this cloud session can itself write ${H}. Decide for it in /hooks.` : `The saved answer about this machine's hooks is ignored here: ${H} could not be located to check who can write it. Decide for this session in /hooks.`,
          level: "warning"
        });
      }
    }),
    arm: I => s.setState(I),
    onLine: k,
    telemetry: I => {
      if (I.trigger === "renewal" && I.outcome === "registered") return;
      let H = {
        held_after_edit: I.heldAfterEdit,
        held_kind_unsupported: I.heldByReason.kind_unsupported ?? 0,
        held_event_runs_locally: I.heldByReason.event_runs_locally ?? 0,
        held_event_later: I.heldByReason.event_later ?? 0,
        held_event_low_value: I.heldByReason.event_low_value ?? 0,
        held_event_container_internal: I.heldByReason.event_container_internal ?? 0,
        held_source_in_sync_root: I.heldByReason.source_in_sync_root ?? 0,
        held_sync_root_is_config_dir: I.heldByReason.sync_root_is_config_dir ?? 0,
        held_unverifiable_target: I.heldByReason.unverifiable_target ?? 0,
        held_in_reach: I.heldByReason.in_reach ?? 0,
        held_interpreter_unvouched: I.heldByReason.interpreter_unvouched ?? 0,
        held_loads_from_reach: I.heldByReason.loads_from_reach ?? 0,
        held_unpinned_command: I.heldByReason.unpinned_command ?? 0,
        held_author_skip: I.heldByReason.author_skip ?? 0,
        held_duplicate: I.heldByReason.duplicate ?? 0,
        held_over_cap: I.heldByReason.over_cap ?? 0,
        held_pattern_matcher: I.heldByReason.pattern_matcher ?? 0
      };
      switch (i("tengu_device_hooks_client_register", {
        outcome: c(I.outcome),
        trigger: c(I.trigger),
        forwarded: I.forwarded,
        templates: I.templates,
        ...H,
        held_other: I.heldOther,
        accepted: I.accepted,
        ignored: I.ignored,
        attempt: I.attempt,
        after_flags_unanswered: I.afterFlagsUnanswered
      }), I.outcome) {
       case "registered":
       case "unregistered":
       case "nothing_to_offer":
       case "dormant":
       case "no_consent":
       case "muted":
       case "flag_off":
        g("device_hooks_client_register", {
          forwarded: I.forwarded
        });
        break;

       case "not_ready":
       case "stale_epoch":
       case "superseded":
       case "failed":
       case "consent_distrusted":
       case "flag_unanswered":
        f("device_hooks_client_register", I.outcome);
        break;

       default:
        m("device_hooks_client_register", I.outcome);
      }
    },
    lapseTelemetry: I => i("tengu_device_hooks_lapse_line", {
      kind: c(I)
    }),
    reachPinnedTelemetry: I => i("tengu_device_hooks_reach_pinned", {
      source: c(I)
    }),
    sourcePinnedTelemetry: I => i("tengu_device_hooks_source_pinned", {
      source: c(I.source),
      changed: I.changed,
      appeared: I.appeared,
      vanished: I.vanished
    }),
    servicerDefaults: Vi
  });
}

function Gi(e) {
  switch (e) {
   case "answered":
   case "event_mismatch":
   case "condition_false":
   case "cancelled":
   case "muted":
    return "ok";

   case "not_mine":
   case "cached":
   case "withdrawn_replay":
   case "same_invocation":
    return null;

   case "unknown_id":
   case "replay_mismatch":
   case "event_name_mismatch":
   case "input_too_large":
   case "overloaded":
   case "stale":
   case "invalid_input":
   case "unsupported_kind":
   case "no_roots":
   case "untrusted":
   case "in_reach_refused":
   case "pin_refused":
   case "pin_changed":
   case "pin_unreadable":
   case "untranslated_skipped":
   case "condition_error":
   case "no_slot":
   case "too_late":
   case "run_error":
   case "unattested":
    return "sad";

   case "staging_failed":
   case "decide_error":
    return "bad";

   default:
    return e;
  }
}

var zi = new Set([ "userSettings", "localSettings", "flagSettings", "projectSettings", "policySettings" ]);

function kpn(e) {
  let n = e.createSession ?? Ao, r = e.createSender ?? To, s = e.isServingMuted ?? Gce, u = s(), h = n({
    launchDir: e.launchDir,
    memory: e.memory,
    getTools: e.getTools,
    respond: (W, I) => e.manager()?.respondToForwardedHook(W, I) ?? !1,
    release: W => e.manager()?.releaseForwardedHook(W),
    onLine: e.onLine,
    ...e.trustAccepted && {
      trustAccepted: e.trustAccepted
    },
    isMuted: () => u
  }), w = r({
    launchDir: e.launchDir,
    memory: e.memory,
    cloudSessionId: e.cloudSessionId,
    session: h,
    sendControlRequest: (W, I) => {
      let H = e.manager();
      if (H === null) return Promise.reject(Error("[RemoteSessionManager] Cannot send: not connected"));
      return H.sendControlRequest(W, I);
    },
    syncRoot: e.syncRoot,
    servingMuted: u,
    onLine: e.onLine,
    storageV5: e.storageV5
  }), k = (e.onServingMuteRecheck ?? p7)(() => {
    try {
      let W = s();
      if (W === u) return;
      if (W) u = !0, w.servingMute(!0); else w.servingMute(!1), u = !1;
    } catch (W) {
      d(W);
    }
  }), y = e.registerCleanup(() => w.unregister(Oxt)), S = e.subscribeSettingsChanges(W => {
    if (zi.has(W)) w.settingsChanged();
  }), C = h.onStoppedWhileRunning(() => w.requestRegistration("stopped_while_running")), R = (e.subscribeConsent ?? (W => ngs(e.memory.consentAnnounced, W)))(W => w.consentDecided(W)), x = W => () => {
    try {
      w.requestRegistration(W);
    } catch (I) {
      d(I);
    }
  }, z = e.memory.noteAttached(e.launchDir), V = !1;
  return {
    callbacks: {
      onForwardedHookCallback: W => {
        h.handleForwardedHook(W);
        let I = age(W.callbackId)?.instanceId, {registeredInstanceId: H, instanceId: F} = w.snapshot();
        if (I !== void 0 && (I === H || I === F)) w.activity();
      },
      onForwardedHookCancelled: (W, I) => {
        h.handleCancelled(W, I);
      }
    },
    onStreamConnected: x("connected"),
    onWorkerInit: x("init"),
    onWorkerUp: x("worker_up"),
    onTurnInFlight: () => w.turnInFlight(),
    onTurnEnded: () => w.turnEnded(),
    beforeSend: () => w.ensureRegistered(),
    snapshot: () => w.snapshot(),
    dispose: () => {
      if (V) return;
      V = !0, z(), k(), S(), C(), R(), y();
      let W = w.unregister(Oxt);
      w.dispose();
      let I = e.registerCleanup(() => W);
      W.then(I, I), h.dispose();
    }
  };
}

import { randomUUID as us } from "crypto";

var Ji = p(() => _t({
  status: U([ "announced", "withdrawn" ]),
  passthrough_declined: U([ "policy", "pending", "unavailable" ]).optional().catch(void 0),
  worker_epoch: v().int().positive().max(Number.MAX_SAFE_INTEGER).optional().catch(void 0),
  protocol_version: v().nullable().optional().catch(void 0),
  ignored_tools: T(o()).optional().catch(void 0),
  passthrough_adopted: v().int().nonnegative().optional().catch(void 0),
  worker_capabilities: T(o()).optional().catch(void 0)
})), Xi = 15e3, BEe = "unverified_sender", Ot = [ "aborted", "no_answer", "post_failed", "post_lost", "replaced", "unreadable_ack" ];

function Zi(e) {
  if (e instanceof J_e) return {
    kind: "failed",
    reason: "post_failed"
  };
  if (e instanceof qM) return {
    kind: "failed",
    reason: "no_answer"
  };
  if (e instanceof Ye) return {
    kind: "failed",
    reason: "aborted"
  };
  let n = l(e);
  if (n.startsWith("Unsupported control request subtype")) return {
    kind: "unsupported"
  };
  if (n.startsWith("remote_tools_disabled:") || n.startsWith("invalid_announce:")) return {
    kind: "refused",
    reason: n
  };
  if (n.startsWith("remote_tools_not_ready:")) return {
    kind: "retry",
    reason: n
  };
  if (n.startsWith("stale_worker_epoch")) return {
    kind: "retry",
    reason: "stale_worker_epoch"
  };
  return {
    kind: "failed",
    reason: n
  };
}

async function Io(e, n, r = {}) {
  UVt();
  let s = new AbortController, u, h = S => {
    u ??= S, s.abort();
  }, w = "none", k = Date.now(), y = S => {
    if (w !== "none") {
      let C = Date.now(), A = w === "waiting" ? C : w.endedAt;
      i("tengu_remote_tools_announce_waited_for_worker", {
        waited_ms: A - k,
        after_wait_ms: C - A,
        outcome: c(S.kind),
        reason: pe(Ot.find(R => S.kind === "failed" && R === S.reason))
      });
    }
    return S;
  };
  try {
    let {posted: S, response: C} = e.postControlRequest(Pt(n), {
      signal: r.signal ? AbortSignal.any([ r.signal, s.signal ]) : s.signal,
      ...r.timeoutMs !== void 0 && {
        timeoutMs: r.timeoutMs
      },
      ...r.answerExpected === !1 ? {
        answerExpected: !1
      } : {
        awaitWorkerStart: {
          onChange: x => {
            w = x ? "waiting" : {
              endedAt: Date.now()
            };
          }
        }
      },
      background: !0,
      onEchoed: x => {
        if (x === "unverified") h({
          kind: "refused",
          reason: BEe
        });
      }
    });
    S.then(({outcome: x}) => x === "accepted" ? r.replaced?.then(() => "replaced") : "post_lost").then(x => {
      if (x !== void 0 && w === "waiting") h({
        kind: "failed",
        reason: x
      });
    });
    let A = await C, R = W$("remote_tools_announce", Ji(), A);
    if (R === null) return y({
      kind: "failed",
      reason: "unreadable_ack"
    });
    return y({
      kind: "announced",
      status: R.status,
      ...R.passthrough_declined !== void 0 && {
        passthroughDeclined: R.passthrough_declined
      },
      workerEpoch: R.worker_epoch,
      protocolVersion: R.protocol_version,
      ignoredTools: R.ignored_tools ?? [],
      ...R.passthrough_adopted !== void 0 && {
        passthroughAdopted: R.passthrough_adopted
      },
      ...R.worker_capabilities !== void 0 && {
        workerCapabilities: R.worker_capabilities
      }
    });
  } catch (S) {
    return y((S instanceof Ye ? u : void 0) ?? Zi(S));
  }
}

function Pt(e) {
  return {
    subtype: "remote_tools_announce",
    instance_id: e.instance_id,
    ...e.worker_epoch !== void 0 && {
      worker_epoch: e.worker_epoch
    },
    host: e.host,
    tools: e.tools.map(n => ({
      ...n,
      refused_input_fields: [ ...n.refused_input_fields ],
      protocol_versions: [ ...n.protocol_versions ]
    })),
    passthrough: [ ...e.passthrough ],
    plumbing: [ ...e.plumbing ]
  };
}

function Yi(e) {
  return e.slice(0, 200).replace(/[^\x20-\x7e]/g, "?");
}

var Qi = 4, Do = 2e3, $o = 1048576;

function es(e) {
  if (e.passthrough.length === 0 || _(Pt(e)).length <= $o) return {
    body: e,
    trimmed: !1
  };
  return {
    body: {
      ...e,
      passthrough: []
    },
    trimmed: !0
  };
}

function ts(e) {
  let {passthroughAdopted: n, ...r} = e;
  return r;
}

var ns = 6e4, os = 6, ln = 36e5, Po = 1e3, rs = 6, is = 6, ss = 6e4, as = 5e3, Oo = 1500;

function Ho(e) {
  let n = L => e.backoffMs !== void 0 ? e.backoffMs[L] : L < Qi ? kx({
    baseMs: Do,
    attempt: L,
    floorMs: Do * 2 ** L / 2
  }) : void 0, r = e.setTimer ?? ((L, ee) => {
    let re = setTimeout(L, ee);
    return {
      clear: () => clearTimeout(re)
    };
  }), s = !1, u = null, h = null, w = 0, k = null, y = null, S = null, C = !1, A, R = null, x = 0, z = 0, V = [], W = !1, I = [], H = null, F = !1, P = [], N = async L => {
    if (G(L) || L === "reconnected") z = 0;
    if (H !== null || e.hostAsleep?.() === !0) {
      h = te(h, L);
      return;
    }
    let ee = e.session(), re = e.build();
    if (ee === null || re === void 0 || !e.workerLive()) {
      h = te(h, L);
      return;
    }
    let {body: ie, trimmed: ae} = es(re);
    if (ae && !C) C = !0, f("remote_tools_client_announce", "passthrough_over_frame"), 
    t(`[remoteToolsAnnounce] the announce with this machine's ${re.passthrough.length} MCP tools is larger than the worker reads (${$o} chars); announcing without them \u2014 they are not offered to this worker`, {
      level: "warn"
    });
    h = null, M();
    let {promise: ne, resolve: se} = Promise.withResolvers();
    u = {
      replace: se,
      reason: L
    }, A = ie;
    let j = W;
    if (W = !1, L === "returned") V.push((e.now ?? Date.now)());
    let Z = await Io(ee, ie, {
      ...e.signal && {
        signal: e.signal
      },
      timeoutMs: Xi,
      replaced: ne
    });
    if (u = null, Z.kind === "failed" && j) W = !0;
    if (s) return;
    let le = ae && Z.kind === "announced" ? ts(Z) : Z, de = L === "returned", _e = le.kind === "failed" && le.reason === "no_answer", ve = le.kind === "refused" && le.reason === BEe;
    z = !de && (_e || ve) ? z + 1 : 0;
    let me = de && ve ? {
      kind: "failed",
      reason: BEe
    } : _e && z > 1 ? {
      kind: "refused",
      reason: "no_answer_parked"
    } : ve && z === 1 ? {
      kind: "retry",
      reason: BEe
    } : le;
    t(`[remoteToolsAnnounce] ${L}: ${me.kind}${"reason" in me ? ` (${Yi(me.reason)})` : ""}`), 
    e.onOutcome?.(me, L);
    let Ae = de || L === "retry" && F;
    if (F = de && me.kind === "retry" && me.reason === "stale_worker_epoch", Ae && !F) if (me.kind === "announced") g("rtc_return_announce"); else if (me.kind === "failed") {
      let Ve = me.reason;
      if (de && (Ve === "post_failed" || Ve === "post_lost")) V.pop();
      f("rtc_return_announce", [ ...Ot, BEe ].find(ht => ht === Ve) ?? "other");
    } else f("rtc_return_announce", me.kind);
    switch (me.kind) {
     case "announced":
      Y(), x = 0;
      break;

     case "refused":
     case "unsupported":
      Y(), x = 0, R = me.kind === "refused" && me.reason === "no_answer_parked" ? "silence" : "refusal";
      break;

     case "retry":
      if (me.reason === "stale_worker_epoch" && ++x === 1 || me.reason === BEe) h ??= "retry"; else Q();
      break;

     case "failed":
      if (!de) Q();
      break;
    }
    let $e = h;
    if ($e !== null) {
      if (h = null, R === null || B($e)) R = null, Y(), N($e);
    }
  }, G = L => L === "worker_init" || L === "tools_changed" || L === "worker_asked", B = L => G(L) || R === "silence" && L === "reconnected", te = (L, ee) => L !== null && G(L) && !G(ee) ? L : ee, Y = () => {
    w = 0, k?.clear(), k = null;
  }, M = () => {
    S?.clear(), S = null, y = null;
  }, q = (L, ee) => {
    if (y !== null && y.ms <= ee) {
      y = {
        reason: te(y.reason, L),
        ms: y.ms
      };
      return;
    }
    let re = y?.reason ?? null;
    M(), y = {
      reason: te(re, L),
      ms: ee
    }, S = r(() => {
      let ie = y;
      if (S = null, y = null, ie !== null) X.requestAnnounce(ie.reason);
    }, ee);
  }, Q = () => {
    let L = k === null ? n(w) : void 0;
    if (L === void 0) return;
    w += 1, k = r(() => {
      if (k = null, !s) N("retry");
    }, L);
  }, X = {
    requestAnnounce(L, ee) {
      if (s) return;
      if (ee?.coalesceMs !== void 0 && ee.coalesceMs > 0) {
        q(L, ee.coalesceMs);
        return;
      }
      let re = y === null ? L : te(y.reason, L);
      if (M(), B(re)) R = null;
      if (w = 0, R !== null) return;
      if (re === "returned" && !W) {
        let ie = (e.now ?? Date.now)();
        V = V.filter(ne => ne <= ie && ie - ne < ln);
        let ae = V.at(-1);
        if (V.length >= os || ae !== void 0 && ie - ae < ns) {
          f("rtc_return_announce", "rate_limited");
          return;
        }
      }
      if (k?.clear(), k = null, u) {
        if (h = te(h, re), re === "tools_changed") u.replace();
        return;
      }
      N(re);
    },
    outstanding: () => u !== null && u.reason !== "returned" || h !== null && h !== "returned",
    workerLive() {
      if (s || u || h === null || R !== null) return;
      let L = h;
      h = null, k?.clear(), k = null, N(L);
    },
    async withdraw() {
      if (s) return;
      s = !0, k?.clear(), M();
      let L = e.session(), ee = A === void 0 ? void 0 : e.build() ?? A;
      if (L === null || ee === void 0 || !e.workerLive()) return;
      await Io(L, {
        ...ee,
        tools: [],
        passthrough: [],
        plumbing: []
      }, {
        signal: AbortSignal.timeout(Oo),
        timeoutMs: Oo,
        answerExpected: !1
      });
    },
    sayAsleep(L) {
      let ee = e.session();
      if (s || ee === null || A === void 0 || !e.workerLive()) return null;
      let re = (e.now ?? Date.now)();
      if (I = I.filter(se => se <= re && re - se < ln), W || I.length >= rs) return f("rtc_sleep_notice", W ? "already_said" : "rate_limited"), 
      null;
      W = !0, I.push(re);
      let {posted: ie, response: ae} = ee.postControlRequest(Pt({
        ...A,
        worker_epoch: L,
        host: {
          ...A.host,
          capabilities: [ ...A.host.capabilities ?? [], $Un ]
        }
      }), {
        timeoutMs: Po,
        answerExpected: !1,
        background: !0
      });
      ae.catch(() => {});
      let ne = We(ie.then(({outcome: se}) => {
        if (se === "accepted") return g("rtc_sleep_notice"), !0;
        return f("rtc_sleep_notice", "post_failed"), W = !1, I.pop(), !1;
      }), Po, (se, j) => r(se, j).clear).then(se => (H = null, X.workerLive(), se !== !1));
      return H = ne, ne;
    },
    sayStillHere(L) {
      let ee = e.session();
      if (s || ee === null || A === void 0 || W || H !== null || e.hostAsleep?.() === !0 || !e.workerLive()) return !1;
      let re = (e.now ?? Date.now)();
      P = P.filter(se => se <= re && re - se < ln);
      let ie = P.at(-1);
      if (P.length >= is || ie !== void 0 && re - ie < ss) return !1;
      P.push(re);
      let {posted: ae, response: ne} = ee.postControlRequest(Pt({
        ...A,
        passthrough: [],
        worker_epoch: L,
        host: {
          ...A.host,
          capabilities: [ UUn, ...A.host.capabilities ?? [] ]
        }
      }), {
        timeoutMs: as,
        answerExpected: !1,
        background: !0
      });
      return ne.catch(() => {}), ae.then(se => {
        if (se.outcome === "accepted") {
          g("rtc_still_here");
          return;
        }
        if (!(se.outcome === "failed" && (se.cause === "network" || se.cause === "timeout"))) P = P.filter(Z => Z !== re);
        if (se.outcome !== "failed" || se.cause !== "closed") f("rtc_still_here", "post_failed");
      }), !0;
    },
    dispose() {
      s = !0, k?.clear(), k = null, M();
    }
  };
  return X;
}

function No({serving: e, manager: n, observer: r}) {
  let s = new Map;
  return {
    onServedChannelRequest: u => {
      let h = new AbortController;
      s.set(u.requestId, h);
      let w = {
        ...u,
        signal: AbortSignal.any([ u.signal, h.signal ])
      };
      ls(w, e, n, r).catch(k => {
        d(k), n()?.releaseServedChannelRequest(u.requestId);
      }).finally(() => s.delete(u.requestId));
    },
    onServedChannelRequestCancelled: () => {},
    onControlRequestRefused: u => e()?.noteUnlistedKind?.(u),
    abandonInHand: () => {
      for (let [u, h] of s) h.abort(), n()?.releaseServedChannelRequest(u);
      s.clear();
    }
  };
}

async function ls(e, n, r, s) {
  let u = R => {
    t(`[servedChannel] ${e.subtype} ${Lv(e.requestId)} not answered here: ${R}`), r()?.releaseServedChannelRequest(e.requestId);
  }, h = n();
  if (h === null) return u("nothing serving");
  let w = performance.now(), k = e.subtype === "remote_tool_call" ? Mvs(e.request) : void 0, y = k?.request.ok === !0 && k.instance_id === h.instanceId ? {
    callId: k.request.value.call_id,
    leg: k.request.kind === "outcome_query" ? "outcome_of" : k.request.value.approval === void 0 ? 1 : 2,
    approval: k.request.kind === "outcome_query" ? "none" : k.request.value.approval?.decision ?? "none"
  } : void 0;
  dn(() => {
    if (y !== void 0) md(y.callId, "leg received", {
      leg: y.leg,
      age_ms: e.ageMs === void 0 ? void 0 : Math.round(e.ageMs)
    }, o2t(y.leg));
  });
  let S = s !== void 0 && k !== void 0 && k.instance_id === h.instanceId ? {
    observer: s,
    leg: k
  } : void 0;
  dn(() => S?.observer.legStarted(S.leg, e.ageMs));
  let C;
  try {
    C = await cs(e, h, k);
  } finally {
    dn(() => S?.observer.legAnswered(S.leg, C?.result));
  }
  if (C === void 0) return u("not this client's to answer");
  if (e.signal.aborted) return;
  let A = Math.round(performance.now() - w);
  if (r()?.respondToServedChannelRequest(e.requestId, C, y === void 0 ? void 0 : (R, x) => ds(y, A, R, x)) !== !0) t(`[servedChannel] ${e.subtype} ${Lv(e.requestId)} answered after it was withdrawn \u2014 result dropped`);
}

function ds(e, n, r, s) {
  let u = r.outcome === "accepted" ? r.signMs : void 0, h = r.outcome === "accepted" ? r.postMs : void 0;
  if (md(e.callId, "reply posted", {
    leg: e.leg,
    serve_ms: n,
    reply_ms: s,
    sign_ms: u,
    post_ms: h,
    post_outcome: r.outcome
  }, o2t(e.leg)), e.leg === "outcome_of") return;
  i("tengu_remote_tool_serve", {
    op: b("reply"),
    call_id: ye(e.callId),
    transport: b("session"),
    second_leg: e.leg === 2,
    approval_decision: c(e.approval),
    serve_ms: n,
    reply_ms: s,
    reply_sign_ms: u,
    reply_post_ms: h,
    reply_accepted: r.outcome === "accepted"
  });
}

function dn(e) {
  try {
    e();
  } catch (n) {
    d(n);
  }
}

async function cs(e, n, r) {
  let s = {
    signal: e.signal,
    requestId: e.requestId,
    ageMs: e.ageMs,
    workerEpoch: e.workerEpoch,
    attestationStatus: e.attestationStatus,
    modeStamp: e.modeStamp
  };
  switch (e.subtype) {
   case "remote_tool_call":
    return r === void 0 ? void 0 : n.serveSessionToolCall(r, s);

   case "remote_plumbing_call":
    {
      let u = Dvs(e.request);
      return u === void 0 ? void 0 : n.servePlumbingCall(u, s);
    }

   case "remote_tools_probe":
    return e.request.instance_id === n.instanceId ? n.answerProbe() : void 0;

   case "remote_tools_reannounce":
    return;
  }
}

var cn = e => e.tools.length + e.plumbing.length + (e.passthrough?.length ?? 0) === 0, fs = 1e4, hs = new Set([ ...Ot, "invalid_announce", "no_answer_parked", "remote_tools_disabled", "remote_tools_not_ready", "stale_worker_epoch", BEe ]);

function ps(e) {
  let n = /^[a-z_]+(?=:|$)/.exec(e)?.[0];
  return n !== void 0 && hs.has(n) ? n : "other";
}

function ms(e) {
  if (e.kind === "failed" && e.reason === "replaced") return;
  if (e.kind === "announced") {
    g("remote_tools_client_announce");
    return;
  }
  f("remote_tools_client_announce", e.kind === "unsupported" ? "unsupported" : `${e.kind}_${ps(e.reason)}`);
}

function yUt(e) {
  let n = `cc-${us()}`, r = null, s = !1, u = null, h = null, w = () => {}, k, y, S, C, A, R, x, z, V = !1, W = !1, I = !1, H = !1, F = !1, P = !1, N, G = new Map, B = Ho({
    hostAsleep: () => P,
    session: e.manager,
    workerLive: () => e.manager()?.workerLive() ?? !1,
    build: () => {
      let j = r?.servedTools?.();
      if (j === void 0) return;
      return W = cn(j), R = k ?? A, e.buildAnnounce(j, n, k);
    },
    onOutcome: (j, Z) => {
      let le = R;
      A = void 0;
      let de = Z === "returned" && j.kind === "failed";
      if (j.kind === "announced") {
        if (j.workerEpoch !== void 0) x = Math.max(x ?? 0, j.workerEpoch);
        if (j.workerEpoch !== void 0 && (k === void 0 || j.workerEpoch >= k)) k = j.workerEpoch; else if (j.workerEpoch !== k) md(void 0, "epoch ratchet ignored", {
          heard: j.workerEpoch,
          kept: k
        });
        y = j.passthroughDeclined === "pending" ? void 0 : j.workerEpoch, S = void 0, C = void 0, 
        V = !1, I = W, H = j.workerCapabilities?.includes(BUn) === !0;
      } else if (!de) {
        if (y = void 0, V = j.kind === "failed" || j.kind === "retry" || j.kind === "refused" && j.reason === "no_answer_parked", 
        j.kind === "refused" && j.reason === "no_answer_parked") C = le; else if (j.kind === "refused" || j.kind === "unsupported") {
          if (S = le, j.kind === "refused" && j.reason === BEe && !F) F = !0, e.onNotice?.("announce_unverified", Ki.announce_unverified(pwe()));
        } else if (j.kind === "retry" && j.reason === "stale_worker_epoch") k = void 0, 
        x = void 0;
      }
      if (Z !== "returned" || !de && j.kind !== "announced") ms(j);
      e.onAnnounceOutcome?.(j, Z);
    },
    ...e.signal && {
      signal: e.signal
    },
    ...e.announcer
  }), te = j => {
    if (s) {
      j.dispose();
      return;
    }
    if (r = j, Y(), w = j.onServedToolsChanged?.(Z => {
      Y(), M("tools_changed", {
        coalesceMs: Z === void 0 || Z === "adopted" || Z === "redescribed" ? 0 : Kgn[Z]
      });
    }) ?? w, u !== null) {
      let {reason: Z, opts: le} = u;
      u = null, M(Z, le);
    }
  }, Y = () => {
    if (s) return;
    let j = r?.servedTools?.();
    e.manager()?.markServing(j !== void 0 && !cn(j));
  }, M = (j, Z) => {
    if (r === null) {
      u = {
        reason: j,
        ...Z && {
          opts: Z
        }
      };
      return;
    }
    if (j === "attached") Y();
    if (j === "worker_asked") {
      y = void 0, S = void 0, C = void 0, A = void 0, B.requestAnnounce("worker_asked");
      return;
    }
    if (j === "returned") {
      if (y === void 0 || I) {
        M("reconnected");
        return;
      }
      B.requestAnnounce("returned");
      return;
    }
    if (j === "reconnected" && y !== void 0 || j === "attached" && (y !== void 0 || A !== void 0)) {
      t(`[servedChannel] ${j}: nothing to announce \u2014 worker epoch ${y ?? A} already has (or is being told) this machine's tools`);
      return;
    }
    if (j === "worker_init" && Z?.workerEpoch !== void 0 && (Z.workerEpoch === y || Z.workerEpoch === S || Z.workerEpoch === C || Z.workerEpoch === A || k !== void 0 && Z.workerEpoch < k)) return;
    if (y = void 0, j === "reconnected") C = void 0;
    if (j === "worker_init") {
      if (Z?.workerEpoch !== void 0) x = Math.max(x ?? 0, Z.workerEpoch);
      A = Z?.workerEpoch;
      let le = Z?.workerEpoch === void 0 || k === void 0 || Z.workerEpoch === k;
      if (Z?.workerEpoch !== void 0) k = Z.workerEpoch;
      if (le && B.outstanding()) return;
    } else if (j === "tools_changed") S = void 0, C = void 0;
    B.requestAnnounce(j, {
      ...Z?.coalesceMs !== void 0 && {
        coalesceMs: Z.coalesceMs
      }
    });
  }, q = j => {
    e.manager()?.releaseServedChannelRequest(j.requestId);
    let Z = f2n().safeParse(j.request), le = Date.now(), de = !Z.success || j.ageMs === void 0 || j.ageMs > Z.data.deadline_ms || Lge(Qae(j.attestationStatus)) || x !== void 0 && Z.data.worker_epoch < x || z?.epoch === Z.data.worker_epoch && !V || z !== void 0 && le - z.at < fs || B.outstanding();
    if (!Z.success || de) {
      t("[servedChannel] remote_tools_reannounce not honoured: unreadable, undated, past its wait, from a sender held back, from an older worker, already answered, rate limited, or an announce is already out");
      return;
    }
    z = {
      epoch: Z.data.worker_epoch,
      at: le
    }, V = !1, M("worker_asked");
  }, Q = e.createServingContext({
    sessionId: e.sessionId,
    instanceId: n,
    ...e.onNotice && {
      onNotice: e.onNotice
    }
  }), X = Q instanceof Promise ? Q.then(te).catch(j => {
    d(j);
  }) : Promise.resolve(te(Q)), L = () => {}, ee = () => (h ??= (async () => {
    s = !0, L();
    for (let de of G.keys()) e.manager()?.releaseServedChannelRequest(de);
    G.clear();
    let j = r?.servedTools?.(), Z = j === void 0 || cn(j), le = I && W && Z ? Promise.resolve(B.dispose()) : B.withdraw();
    e.manager()?.markServing(!1), await X, w(), await le, r?.dispose(), B.dispose();
  })(), h), {abandonInHand: re, onServedChannelRequest: ie, ...ae} = No({
    serving: () => s ? null : r,
    manager: e.manager,
    observer: e.onServedCall
  }), ne = j => j.subtype === "remote_tools_reannounce" ? q(j) : ie?.(j), se = {
    instanceId: n,
    callbacks: {
      ...ae,
      onServedChannelRequest: j => {
        let Z = j.subtype === "remote_tools_reannounce" ? j : {
          ...j,
          workerEpoch: j.workerEpoch ?? k
        };
        if (Z.subtype === "remote_tools_probe" && (P || N !== void 0 && Z.ageMs !== void 0 && Date.now() - Z.ageMs < N)) t(`[servedChannel] remote_tools_probe ${Lv(Z.requestId)} not answered: the host ${P ? "says this computer sleeps" : "had not yet said it woke when it was stored"}`), 
        e.manager()?.releaseServedChannelRequest(Z.requestId); else if (P && !s) t(`[servedChannel] ${Z.subtype} ${Lv(Z.requestId)} held until the host says this computer woke`), 
        G.set(Z.requestId, {
          request: Z,
          at: Date.now()
        }); else ne(Z);
      },
      onWorkerLive: () => B.workerLive(),
      onWorkerGone: () => {
        y = void 0, r?.workerGone?.();
      }
    },
    requestAnnounce: M,
    sayAsleep: () => (P = !0, s || y === void 0 || I ? null : B.sayAsleep(y)),
    sayStillHere: () => !s && !P && y !== void 0 && !I && H && B.sayStillHere(y),
    hostWoke: j => {
      if (!P) return;
      P = !1;
      let Z = Date.now();
      if (N = Z, !j) B.workerLive();
      let le = [ ...G.values() ];
      G.clear();
      for (let {request: de, at: _e} of le) {
        if (de.signal.aborted) continue;
        try {
          ne({
            ...de,
            ageMs: de.ageMs === void 0 ? void 0 : de.ageMs + (Z - _e)
          });
        } catch (ve) {
          d(ve), e.manager()?.releaseServedChannelRequest(de.requestId);
        }
      }
    },
    heldServedCall: j => s || r === null ? p2 : r.heldServedCall?.(j) ?? p2,
    servedHost: () => s ? void 0 : r?.servedTools?.()?.host,
    close: ee
  };
  if (L = e.onRevoked?.(j => {
    t(`[servedChannel] serving revoked on this machine (${j}) \u2014 closing the channel`), 
    re(), e.manager()?.giveUpKeptServedResults(), ee();
  }) ?? L, s) L();
  return se;
}

var ks = [ 400, 1200 ], _s = 5e3, SNr = "Switch permission modes away and back once to keep this session's mode: it couldn't be saved on the server, so the session may fall back to default after idling.", vs = "Switch permission modes away and back once: this session's mode couldn't be saved on the server.", ys = "This session's permission mode couldn't be saved: the server says the session isn't active. Switch modes away and back once it is.";

function Ss(e) {
  return e.outcome === "failed" && (e.cause === "network" || e.cause === "http" && (e.status >= 500 || e.status === 429));
}

function Tpn({manager: e, mode: n, surface: r, sessionId: s, superseded: u, observedMode: h, seededModeReported: w, onRefused: k, onGaveUp: y, onTaken: S, linkDown: C}) {
  let A = V => {
    i("tengu_remote_create_permission_mode_push", {
      surface: c(r),
      mode: c(n),
      kind: c(V.kind),
      posted_mode: c(V.postedMode),
      outcome: c(V.outcome),
      ..."cause" in V && {
        cause: c(V.cause)
      },
      ..."status" in V && {
        status: V.status
      },
      ...V.attempt !== void 0 && {
        attempt: V.attempt
      },
      session_id: ye(s)
    });
  }, R = () => {
    let V = h?.();
    return u() || V !== void 0 && V !== n && (V !== "default" || (w?.() ?? !1));
  }, x = async (V, W, I = Date.now(), H = 1) => {
    let F = new AbortController, P = e.postControlRequest({
      subtype: "set_permission_mode",
      mode: V
    }, {
      answerExpected: !1,
      background: !0,
      timeoutMs: h6n,
      signal: F.signal
    });
    P.response.catch(() => {});
    let N = await P.posted;
    if (A({
      ...N,
      kind: W,
      postedMode: V,
      attempt: H
    }), N.outcome === "accepted") return {
      result: N,
      response: P.response
    };
    if (F.abort(), R()) return A({
      kind: W,
      postedMode: V,
      outcome: "superseded"
    }), {
      result: N,
      response: null
    };
    let G = ks[H - 1];
    if (G !== void 0 && Ss(N) && Date.now() - I < _s) {
      if (await J(G), !R()) return x(V, W, I, H + 1);
      return A({
        kind: W,
        postedMode: V,
        outcome: "superseded"
      }), {
        result: N,
        response: null
      };
    }
    if (A({
      kind: W,
      postedMode: V,
      outcome: "gave_up"
    }), m("remote_create_mode_push", `${W}_gave_up`), !(N.outcome === "failed" && N.cause === "closed")) y?.(N.outcome === "session_inactive" ? ys : W === "push" ? SNr : vs);
    return {
      result: N,
      response: null
    };
  }, z = V => {
    V.then(() => {
      A({
        kind: "push",
        postedMode: n,
        outcome: "taken"
      }), S?.(), g("remote_create_mode_push"), t(`[remote] The session took its create's ${n} permission mode as a live request`);
    }, W => {
      let I = mV(W);
      if (t(`[remote] The create's ${n} permission mode push was not taken (${I}): ${Ks(l(W), {
        maxCodeUnits: 200
      })}`), !(I === "server_error" || (I === "disconnected" || I === "not_connected") && C !== void 0 && !C())) {
        A({
          kind: "push",
          postedMode: n,
          outcome: "unanswered"
        }), f("remote_create_mode_push", "unanswered");
        return;
      }
      if (A({
        kind: "push",
        postedMode: n,
        outcome: "refused"
      }), f("remote_create_mode_push", "refused"), R() || n === "default") return;
      let F = x("default", "converge");
      F.then(({response: P}) => P?.catch(N => {
        t(`[remote] The default mode sent after that refusal was not taken either: ${Ks(l(N), {
          maxCodeUnits: 200
        })}`);
      })), k?.(F.then(({result: P}) => P));
    });
  };
  return x(n, "push").then(({result: V, response: W}) => {
    if (W !== null) z(W);
    return V;
  });
}

function KUo({posted: e, mode: n, latch: r, retire: s, now: u = Date.now}) {
  let h = e.then(w => w.outcome === "accepted", () => !1);
  return h.then(w => {
    if (w) s(); else r.notTakenAtMs ??= u();
  }), async ({submittedAtMs: w}) => {
    let k = w ?? u();
    if (await h) return;
    if (k - (r.notTakenAtMs ?? k) < qUo) return {
      go: !1,
      reason: `the session's ${n} permission mode couldn't be saved on the server first`
    };
    s();
    return;
  };
}

var bs = 6e4, Rs = 18e4, Apn = "Cloud session may be unresponsive. Attempting to reconnect\u2026", Cpn = "Claude is waiting for you to answer its request and will continue with this message once you do.";

function Rpn(e) {
  return e ? Rs : bs;
}

class _Ut {
  holdsWhileAsked;
  openRequests=new Set;
  watched=null;
  watch(e, n) {
    let r = this.holds();
    if (r) this.clear();
    let s = {
      onSilent: e,
      schedule: n,
      cancel: null
    };
    if (this.watched = s, r && this.openRequests.size > 0) return g("remote_response_watch_hold"), 
    !1;
    return this.start(s), !0;
  }
  clear() {
    this.watched?.cancel?.(), this.watched = null;
  }
  requestOpened(e) {
    if (this.openRequests.add(e), this.holds() && this.watched?.cancel) this.watched.cancel(), 
    this.watched.cancel = null, g("remote_response_watch_hold");
  }
  requestClosed(e) {
    if (this.openRequests.delete(e), this.openRequests.size === 0 && this.watched?.cancel === null) this.start(this.watched);
  }
  holds() {
    return this.holdsWhileAsked ??= Hgn(), this.holdsWhileAsked;
  }
  start(e) {
    e.cancel = e.schedule(() => {
      if (this.watched === e) this.watched = null;
      e.onSilent();
    });
  }
}

export { SQe, u6n, p6n, hUt, f6n, m6n, g6n, Spn, wpn, vpn, Epn, kpn, BEe, yUt, SNr, Tpn, KUo, Apn, Cpn, Rpn, _Ut };
