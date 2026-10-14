// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Tx } from "./chunk-2v9tfgc3.js";

import { _ } from "./chunk-kawq2919.js";

import { ne, Ql } from "./chunk-5wbhf1bk.js";

import { Xc } from "./chunk-pf1mhyjr.js";

import { x, E, Zl } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { pln, gX } from "./chunk-zscnwzv2.js";

import { Dl } from "./chunk-4dwgr3et.js";

import { zQ, Jqe, zst, Kds, PCe } from "./chunk-vg1pmpv1.js";

import { fl } from "./chunk-548qpzj1.js";

import { FFe } from "./chunk-j31ahx42.js";

import { spawn as Tt } from "child_process";

import { randomUUID as Rt } from "crypto";

import { lstat as qe, mkdir as Pt, open as Nn, readdir as Fn, readFile as Mn, realpath as Ee, rm as Hn, rmdir as vt, stat as Un, unlink as Ze, writeFile as Ve } from "fs/promises";

import { basename as De, dirname as W, isAbsolute as kt, join as A, relative as Vn, resolve as we, sep as ae } from "path";

var be = 50;

function dQo(e, t) {
  return {
    certificateFile: He(e, "GIT_SSL_CAINFO", t),
    skipVerification: He(e, "GIT_SSL_NO_VERIFY", t)
  };
}

function He(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(e)) {
    if (o === void 0) continue;
    if (i === t) r.unshift({
      name: i,
      value: o
    }); else if (n && i.toUpperCase() === t) r.push({
      name: i,
      value: o
    });
  }
  return r;
}

function Zvt(e) {
  return e.flatMap(([t, n]) => [ "-c", `${t}=${n}` ]);
}

var ye = {
  envOverrides: {},
  commandScopeEntries: [],
  fileSeedLines: ""
};

function DKt(e) {
  let t = e.operator.certificateFile.length > 0, n = e.operator.skipVerification.length > 0 || e.role === "child" && e.serverSetsSkipVerification;
  if (!e.routing) return {
    ...ye,
    decision: {
      role: e.role,
      certificateFile: t ? "left_no_routing" : "left_unset",
      skipVerification: n ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  switch (e.role) {
   case "prep":
   case "resume":
   case "outcome":
    return yt(e, t, n);

   case "child":
    return St(e, e.routing, n);

   case "hook":
    return bt(e, e.routing, t, n);
  }
}

function bt(e, t, n, r) {
  let i = n ? "left_operators_hook" : "left_unset";
  if (!e.reachesGitMount) return {
    ...ye,
    decision: {
      role: "hook",
      certificateFile: i,
      skipVerification: r ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  let o = URL.canParse(t.mountBaseUrl) ? Ue(t) : [], c = Be(o, []), d = r && o.length > 0;
  return {
    ...ye,
    envOverrides: r ? ie(e.operator.skipVerification) : {},
    commandScopeEntries: d ? [ [ "http.sslVerify", "false" ], ...c ] : c,
    decision: {
      role: "hook",
      certificateFile: i,
      skipVerification: !r ? "unset" : d ? "moved" : "pinned_off",
      mountEntries: !1,
      mountVerificationPinned: o.length > 0
    }
  };
}

function _t(e, t) {
  return [ "", `${new URL(e).origin}.`, `${e}.` ].map(r => [ `http.${r}sslCAInfo`, t ]);
}

function ie(e) {
  let t = {};
  for (let {name: n} of e) t[n] = void 0;
  return t;
}

function yt(e, t, n) {
  if (!e.target.mountRouted) return {
    ...ye,
    decision: {
      role: e.role,
      certificateFile: t ? "left_direct_target" : "left_unset",
      skipVerification: n ? "left" : "unset",
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  let r = ie(e.operator.skipVerification), i = n ? "pinned_off" : "unset";
  if (!t) return {
    envOverrides: r,
    commandScopeEntries: [],
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: "left_unset",
      skipVerification: i,
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  if (e.trustBundle.status !== "built" || !URL.canParse(e.target.url)) return {
    envOverrides: r,
    commandScopeEntries: [],
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: e.trustBundle.status !== "built" ? "left_no_trust_bundle" : "left_unparseable_target",
      skipVerification: i,
      mountEntries: !1,
      mountVerificationPinned: !1
    }
  };
  return {
    envOverrides: {
      ...ie(e.operator.certificateFile),
      ...r
    },
    commandScopeEntries: _t(e.target.url, e.trustBundle.path),
    fileSeedLines: "",
    decision: {
      role: e.role,
      certificateFile: "moved",
      skipVerification: i,
      mountEntries: !0,
      mountVerificationPinned: !1
    }
  };
}

function Et(e) {
  let n = (e.serverCertificateFile ?? e.operator.certificateFile[0]?.value)?.trim();
  if (!n || /[\n\r\0]/.test(n)) return;
  return n;
}

function _e(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function Ue(e) {
  let t = new Set;
  for (let n of [ e.mountBaseUrl, e.pushBaseUrl ]) if (n && URL.canParse(n)) {
    for (let r of [ new URL(n).origin, n ]) if (!r.includes("=")) t.add(r);
  }
  return [ ...t ];
}

function Be(e, t) {
  return [ ...e, ...t.map(n => `https://${n}/`) ].map(n => [ `http.${n}.sslVerify`, "true" ]);
}

function wt(e) {
  return e.map(([t, n]) => {
    let r = t.slice(5, t.length - 10);
    return `[http ${_e(r)}]\n\tsslVerify = ${n}\n`;
  }).join("");
}

function St(e, t, n) {
  let r = e.serverCertificateFile !== void 0 || e.operator.certificateFile.length > 0, i = Et(e), o = !r ? "left_unset" : !e.gitConfigArm ? "left_git_config_arm_off" : i === void 0 ? "left_unusable_value" : !e.gitReadsEnvironmentConfig ? "left_old_git" : "moved", c = Ue(t), d = !n ? "unset" : e.gitConfigArm && e.gitReadsEnvironmentConfig && c.length > 0 ? "moved" : "left", s = [], f = "", h = {};
  if (o === "moved" && i !== void 0) {
    if (s.push([ "http.sslCAInfo", i ]), f += `\n[http]\n\tsslCAInfo = ${_e(i)}\n`, 
    e.trustBundle.status === "built") for (let l of c) s.push([ `http.${l}.sslCAInfo`, e.trustBundle.path ]), 
    f += `[http ${_e(l)}]\n\tsslCAInfo = ${_e(e.trustBundle.path)}\n`;
    h = {
      GIT_SSL_CAINFO: void 0,
      ...ie(e.operator.certificateFile)
    };
  }
  if (d === "moved") s.push([ "http.sslVerify", "false" ]), f += `${f === "" ? `\n` : ""}[http]\n\tsslVerify = false\n`, 
  h = {
    ...h,
    GIT_SSL_NO_VERIFY: void 0,
    ...ie(e.operator.skipVerification)
  };
  let P = Be(c, e.gitConfigArm ? t.governedHosts : []);
  if (s.push(...P), P.length > 0) f += `${f === "" ? `\n` : ""}${wt(P)}`;
  return {
    envOverrides: h,
    commandScopeEntries: s,
    fileSeedLines: f,
    decision: {
      role: "child",
      certificateFile: o,
      skipVerification: d,
      mountEntries: o === "moved" && e.trustBundle.status === "built" && c.length > 0,
      mountVerificationPinned: c.length > 0
    }
  };
}

var lTn = "+refs/heads/*:refs/remotes/origin/*";

function Prr(e) {
  return e.upstreamUrl;
}

function xe(e) {
  if (e) return [];
  let {depth: t} = Qe();
  return t === void 0 ? [] : [ "--depth", String(t) ];
}

function Qe() {
  let e = a.CLAUDE_RUNNER_FETCH_DEPTH;
  if (e === void 0) return {
    depth: be,
    invalid: void 0
  };
  if (e === "full" || e === "0") return {
    depth: void 0,
    invalid: void 0
  };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) return {
    depth: t,
    invalid: void 0
  };
  return {
    depth: be,
    invalid: e
  };
}

var et = 12e4, Ce = 6e5, We = 3e5, ce = 18e5;

function tt() {
  let e = a.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
  if (e === void 0) return {
    capMs: Ce,
    invalid: void 0,
    clamped: void 0
  };
  if (e === "0" || e.toLowerCase() === "off") return {
    capMs: 0,
    invalid: void 0,
    clamped: void 0
  };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) {
    let n = Math.min(Math.max(t, et), ce);
    return {
      capMs: n,
      invalid: void 0,
      clamped: n === t ? void 0 : e
    };
  }
  return {
    capMs: Ce,
    invalid: e,
    clamped: void 0
  };
}

var $e = 5e3, nt = /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/, rt = /^(Enumerating objects): (\d{1,15})\b/, $t = "Receiving objects", At = {
  KiB: 1024,
  MiB: 1048576,
  GiB: 1073741824
}, Ct = 5e3, Gt = 500, dTn = 6e5, Ot = new Set([ "worktree" ]);

function Dt(e, t = !1) {
  let n, r, i, o = 0, c = e.split(/\r|\n/);
  if (t) c = c.slice(1);
  for (let d of c) {
    if (d.length === 0) continue;
    let s = d.startsWith("remote: ");
    if (s) o++;
    let f = s ? d.slice(8) : d, h = nt.exec(f);
    if (h === null) {
      if (s) {
        let w = rt.exec(f);
        if (w !== null) {
          let v = Number(w[2]);
          i = {
            sideband: s,
            label: w[1],
            pct: 0,
            done: v,
            raw: `remote: ${w[1]}: ${v}`
          };
        }
      }
      continue;
    }
    let [, P, l, y, T, R, u] = h, S = {
      sideband: s,
      label: P,
      pct: Math.min(100, Number(l)),
      done: y !== void 0 ? Number(y) : void 0,
      total: T !== void 0 ? Number(T) : void 0,
      bytes: R !== void 0 && u !== void 0 ? Math.round(Number(R) * At[u]) : void 0,
      raw: `${s ? "remote: " : ""}${P}: ${l}%${y !== void 0 ? ` (${y}/${T})` : ""}`
    };
    if (n = S, s) i = S; else r = S;
  }
  return {
    display: n,
    client: r,
    server: i,
    remoteLines: o
  };
}

var Lt = 1e3;

function It(e, t, n) {
  if (e.active) return;
  if (t.display?.sideband) {
    e.active = !0;
    return;
  }
  if (t.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = n; else if (n - e.firstRemoteLineAt >= Lt) e.active = !0;
}

function Nt(e, t) {
  if (e === void 0) return !0;
  if (t.label !== e.label) return !0;
  if (t.done !== void 0 && e.done !== void 0) return t.done > e.done || (t.bytes ?? 0) > (e.bytes ?? 0);
  return t.pct > e.pct;
}

function Ft(e, t, n) {
  if (e === void 0 || n.label !== e.label) return !t.has(n.label);
  if (n.done !== void 0 && e.done !== void 0) return n.done > e.done;
  if (n.done === void 0 !== (e.done === void 0)) return !1;
  return n.pct > e.pct;
}

function Mt(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}

function Ht(e) {
  let t = e.startsWith("remote: "), n = t ? e.slice(8) : e;
  return nt.test(n) || t && rt.test(n);
}

var Se = 2e3;

function Ut(e, t, n, r) {
  let i = t ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e, o = fTn(i, n, r).split(/\r|\n/).filter(d => d.length > 0 && !Ht(d)).join(`\n`), c = mt(o);
  return ht.test(c) ? c.slice(0, Se) : c.slice(-Se);
}

var de = 1e4, Bt = 3e4, Ge = 3, oe = 5, Ye = 300, je = 150, it = 2, se = 3, Vt = 1e3, Wt = 15;

function ot() {
  return Boolean(tr.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}

function Yt() {
  return Boolean(tr.CLAUDE_RUNNER_STALL_GIVEUP);
}

function jt(e) {
  return e.split(`\n`).some(t => {
    let n = t.indexOf("Operation too slow");
    if (n === -1) return !1;
    let r = t.slice(0, n);
    return !/\bremote(?: error)?: /.test(r) && /curl 28\b|unable to access '[^']*': $/.test(r);
  });
}

function Kt() {
  return Boolean(tr.CCR_DELTA_RESET);
}

var zt = [ "couldn't find remote ref" ];

function cTn(e) {
  let t = e.toLowerCase();
  return zt.some(n => t.includes(n));
}

var kB = [ "-c", `core.hooksPath=${pln()}`, "-c", "core.fsmonitor=", "-c", "core.askPass=", "-c", "gc.auto=0", "-c", "maintenance.auto=false" ], qTe = {
  SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
  SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
  GIT_ALLOW_PROTOCOL: "https:http:ssh"
}, M = {
  GIT_NO_LAZY_FETCH: "1",
  GIT_ALLOW_PROTOCOL: "none",
  GIT_SSH_COMMAND: "false",
  GIT_NO_REPLACE_OBJECTS: "1",
  GIT_TERMINAL_PROMPT: "0",
  CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0
}, Xt = [ "-c", "alias.remote-none=", "-c", "fetch.bundleURI=" ];

async function cQo(e) {
  let {baseDir: t, sources: n, outcomes: r, skipValidation: i, alwaysFetch: o, skipReset: c, initWithoutTemplate: d, onDebug: s, onPhase: f, onProgress: h, signal: P} = e, l = vn(r ?? []);
  for (let y of n) {
    if (!n3r(y.type)) {
      s(`[byoc:git] Skipping unsupported source type: ${y.type}`);
      continue;
    }
    await Jt({
      baseDir: t,
      source: y,
      targetBranch: l.get(y.repo),
      skipValidation: i ?? !1,
      alwaysFetch: o ?? !1,
      skipReset: c ?? !0,
      initWithoutTemplate: d ?? !1,
      onDebug: s,
      onPhase: f,
      onProgress: h,
      signal: P
    });
  }
}

function n3r(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}

async function Jt(e) {
  let t = Date.now();
  try {
    let {repoExisted: n} = await qt(e);
    g("byoc_git_prepare_repo", {
      repo_existed: n,
      duration_ms: Date.now() - t
    });
  } catch (n) {
    throw m("byoc_git_prepare_repo", "error", {
      duration_ms: Date.now() - t
    }), n;
  }
}

async function qt(e) {
  let {baseDir: t, source: n, targetBranch: r, skipValidation: i, alwaysFetch: o, skipReset: c, initWithoutTemplate: d, onDebug: s, onPhase: f, onProgress: h, signal: P} = e, l = Tn(n), y = n.getAuthToken ? l : s3r(l, n.token), T = i3r(t, n);
  if (!T) throw Error(`Could not determine repository directory for: ${n.repo}`);
  if (n.ref && !Tx(n.ref)) throw Error(`Invalid ref: ${n.ref}`);
  if (r && !Tx(r)) throw Error(`Invalid target branch: ${r}`);
  let R = Date.now();
  s(`[byoc:git] Preparing ${n.repo} at ${T} (ref=${n.ref ?? "HEAD"}, auth=${n.getAuthToken ? "git-proxy" : y !== l})`);
  let {invalid: u} = Qe();
  if (u !== void 0) s(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${u}' \u2014 expected 'full', '0', or a positive integer; using default ${be}`);
  let S = tt();
  if (S.invalid !== void 0) s(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${S.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${Ce}`); else if (S.clamped !== void 0) s(`[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${S.clamped}' is ${S.capMs === ce ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${S.capMs} ms`);
  let w = {
    repoPath: T,
    gitURL: l,
    authURL: y,
    originURL: Prr(n) ?? y,
    token: n.token,
    getAuthToken: n.getAuthToken,
    governedMount: n.governedMount,
    gitEnvironment: n.gitEnvironment,
    sanitized: n.sanitized,
    initWithoutTemplate: d,
    onDebug: s,
    onPhase: f,
    onProgress: h,
    signal: P
  }, v = void 0;
  if (!i) await Oe(w, "validateAccess", () => en(w));
  let b = await Oe(w, "ensureRepository", () => sn(w, t, v !== void 0));
  if (o) await Ae(w, n.ref, c, b, n.prefetchedTip, n.standbyCheckout, v); else if (b && !n.ref) s("[byoc:git] Using prefetched repo as-is (no ref requested)"); else if (b && n.ref) {
    if (r && await ut(w, r)) return s(`[byoc:git] Task branch ${r} exists on remote, fetching it`), 
    await dt(w, r, b), s(`[byoc:git] Ready: ${n.repo} (${Date.now() - R}ms)`), {
      repoExisted: b
    };
    if (await _n(w, n.ref)) s(`[byoc:git] Ref ${n.ref} resolves locally, skipping fetch`), 
    await p(w, w.repoPath, [ "checkout", "--progress", "--force", n.ref ]); else await Ae(w, n.ref, !1, b);
  } else await Ae(w, n.ref, !1, b);
  if (r) await bn(w, r, b);
  return s(`[byoc:git] Ready: ${n.repo} (${Date.now() - R}ms)`), {
    repoExisted: b
  };
}

function V(e, t, n, r) {
  e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? " " + _(r) : ""}`);
  try {
    e.onPhase?.(t, n, r);
  } catch (i) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${O(i)}`);
  }
}

async function Oe(e, t, n, r, i = Date.now()) {
  let o = await n();
  return V(e, t, Date.now() - i, r), o;
}

var uQo = {
  repo_not_found_or_no_permission: "repository not found or no permission",
  no_credentials: "no credentials for the repository's git host",
  authentication_failed: "authentication failed",
  blocked_by_git_proxy: "blocked by the git proxy"
}, Zt = [ [ /^fatal: repository '.*' not found$/, "repo_not_found_or_no_permission" ], [ /^fatal: unable to access '.*': the requested url returned error: 404$/, "repo_not_found_or_no_permission" ], [ /^error: repository not found\.?$/, "repo_not_found_or_no_permission" ], [ /^fatal: could not read (username|password) for /, "no_credentials" ], [ /^fatal: authentication failed for /, "authentication_failed" ], [ /^fatal: unable to access '.*': the requested url returned error: 401$/, "authentication_failed" ], [ /^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/, "authentication_failed" ] ], xt = /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;

function Qt(e, t) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  let n = e.replace(/^git \S+ failed: /, "");
  if (n.length >= Se) return;
  let r = n.toLowerCase().split(`\n`).map(i => i.trim());
  if (t) return r.some(i => i.startsWith("remote: access denied by the git proxy")) ? "blocked_by_git_proxy" : void 0;
  if (r.some(i => xt.test(i))) return;
  for (let [i, o] of Zt) if (r.some(c => i.test(c))) return o;
  return;
}

class Irr extends x {
  denial;
  constructor(e, t) {
    super(`Repository access validation failed after ${Ge} attempts: ${O(e)}`, "Repository access validation failed");
    this.name = "RepositoryAccessError", this.denial = Qt(O(e), t);
  }
}

async function en(e) {
  let t = 2e3 + Math.random() * 2e3, n;
  for (let r = 0; r < Ge; r++) {
    if (r > 0) {
      let i = t * (1 << r - 1);
      e.onDebug(`[byoc:git] Validation retry ${r + 1}/${Ge}, backing off ${Math.round(i)}ms`), 
      await J(i, e.signal, {
        throwOnAbort: !0
      });
    }
    try {
      if (await p(e, "", [ "ls-remote", "--heads", e.authURL, "HEAD" ]), r > 0) e.onDebug(`[byoc:git] Validation succeeded on attempt ${r + 1}`);
      return;
    } catch (i) {
      n = i;
    }
  }
  throw new Irr(n, e.getAuthToken !== void 0);
}

function tn(e) {
  let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
  if (!t) return;
  let [, n, r, i] = t, o = i.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1], c;
  try {
    c = new URL(r).pathname;
  } catch {
    return;
  }
  if (o === void 0 || !c.endsWith(`/${o}`)) return;
  return n;
}

var nn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";

function rn(e) {
  let t = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
  if (!t) return;
  let [, n, r, i] = t;
  return i === pTn(nn) ? {
    key: n,
    base: r.replace(/\/+$/, "")
  } : void 0;
}

function on(e, t) {
  let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
  if (!n) return;
  let [, r, i, o] = n, c = o.replace(/\.git$/i, "").match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
  if (c === void 0) return;
  return t.some(d => i === `${d}/${c}`) ? r : void 0;
}

async function sn(e, t, n) {
  let r = {};
  if (e.originURL === e.authURL ? await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "remote", "set-url", "origin", e.authURL ], void 0, void 0, r).then(() => !0, () => !1) : await dn(e)) {
    await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--unset-all", "remote.origin.pushurl" ]).catch(() => {});
    let o = await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.pushinsteadof$" ]).catch(() => "");
    for (let f of o.split(`\n`)) {
      let h = tn(f);
      if (h === void 0) continue;
      await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", h ]).catch(() => {}), 
      e.onDebug(`[byoc:git] Dropped a stale git-mount push rewrite (${ee(h)}) from ${e.repoPath}`);
    }
    let c = await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^credential\\..*\\.helper$" ]).catch(() => ""), d = new Set, s = [];
    for (let f of c.split(`\n`)) {
      let h = rn(f);
      if (h !== void 0 && !d.has(h.key)) d.add(h.key), s.push(h.base);
    }
    if (s.length > 0) {
      let f = await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.insteadof$" ]).catch(() => ""), h = new Set;
      for (let P of f.split(`\n`)) {
        let l = on(P, s);
        if (l === void 0 || h.has(l)) continue;
        h.add(l), await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", l ]).catch(() => {}), 
        e.onDebug(`[byoc:git] Dropped a stale git-mount fetch rewrite (${ee(l)}) from ${e.repoPath}`);
      }
    }
    for (let f of d) await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--local", "--unset-all", f ]).catch(() => {}), 
    e.onDebug(`[byoc:git] Dropped a stale git-mount credential helper (${ee(f)}) from ${e.repoPath}`);
    return await Xe(e), e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`), 
    !0;
  }
  return e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`), 
  await fl(Pt(t, {
    recursive: !0
  }), de, `[runner:stuck] mkdir ${t} (check NFS/CSI mount health)`), await p(e, "", [ "init", ...e.initWithoutTemplate ? [ "--template=" ] : [], e.repoPath ]), 
  await p(e, e.repoPath, [ "config", "gc.auto", "0" ]).catch(() => {}), await p(e, e.repoPath, [ "remote", "add", "origin", e.originURL ]).catch(() => p(e, e.repoPath, [ "remote", "set-url", "origin", e.originURL ])), 
  await Xe(e), !1;
}

var Ke = 7, an = 100, st = {
  GIT_CONFIG_NOSYSTEM: "1",
  GIT_CONFIG_GLOBAL: "/dev/null",
  GIT_CONFIG_COUNT: "0",
  GIT_CONFIG_PARAMETERS: ""
}, Orr = {
  GIT_CONFIG_GLOBAL: "/dev/null",
  HOME: pln(),
  XDG_CONFIG_HOME: pln()
}, cn = {
  ...st,
  ...Orr
};

async function ze(e, t, n, r) {
  let i = {};
  return p(e, "", [ "--git-dir", t, "config", ...n ], r, void 0, i).catch(o => {
    if (i.exitCode === 1) return;
    if (e.signal?.aborted) throw o;
    throw new x(`Could not read remote.origin.url from ${t}/config (${O(o)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`, "Could not read remote.origin.url of the repository's clone");
  });
}

async function dn(e) {
  let t = A(e.repoPath, ".git"), n = await ze(e, t, [ "--get-all", "remote.origin.url" ]);
  if (n === void 0) {
    if (await ze(e, t, [ "--get-regexp", "^remote\\.origin\\." ], st) === void 0) return !1;
    let o = {};
    if (!await p(e, "", [ "--git-dir", t, "config", "--get-regexp", "^remote\\.origin\\." ], cn, void 0, o).then(() => !0, d => {
      if (e.signal?.aborted) throw d;
      return o.exitCode !== 1 || o.wroteStderr !== !1;
    })) return !1;
  }
  let r = (n ?? "").split(`\n`).filter(i => i.length > 0);
  if (r.length === 1 && r[0] === e.originURL) return !0;
  for (let i = 1; ;i++) {
    let o = await p(e, e.repoPath, [ "--git-dir", t, "config", "--replace-all", "remote.origin.url", e.originURL ]).then(() => {}, c => c ?? Error("git config failed"));
    if (o === void 0) return e.onDebug(`[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`), 
    !0;
    if (e.signal?.aborted) throw o;
    if (i === Ke) throw new x(`Could not correct remote.origin.url in ${t}/config after ${Ke} tries over about six seconds (${O(o)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${t}/config.lock.`, "Could not write remote.origin.url of the repository's clone");
    await J(an * 2 ** (i - 1), e.signal, {
      throwOnAbort: !0
    });
  }
}

async function Xe(e) {
  if (e.originURL !== e.authURL) {
    let t = (await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--get-all", "remote.origin.fetch" ]).catch(() => "")).split(`\n`).filter(n => /^\+?refs\/heads\//.test(n));
    if (t.length > 0 && t.every(n => n === lTn)) return;
  }
  await p(e, e.repoPath, [ "--git-dir", A(e.repoPath, ".git"), "config", "--replace-all", "remote.origin.fetch", lTn, "^\\+?refs/heads/" ]).catch(t => e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${O(t)}`));
}

function at(e) {
  if (e.originURL === e.authURL) return {
    configArgs: [],
    remote: "origin"
  };
  let t = `claude-runner-prep-${Rt()}`, n = ft();
  return {
    configArgs: [ "-c", `remote.${t}.url=${e.authURL}`, "-c", `remote.${t}.fetch=${lTn}`, ...n ? [ "-c", `remote.${t}.proxy=${n}` ] : [] ],
    remote: t
  };
}

async function Ae(e, t, n, r, i, o, c) {
  let d = t || "HEAD", s = () => {
    let b = at(e);
    return [ ...b.configArgs, "fetch", ...xe(r), "--progress", "--no-tags", ...[], b.remote, d ];
  }, f = !n && Kt(), h = !1, P = f && !h && await p(e, e.repoPath, [ "rev-parse", "--verify", "--quiet", "HEAD^{commit}" ], {
    ...M
  }).then(() => !0, () => !1);
  if (!0) {
    let b = !1, G = await ct(e, s, async () => (b = await yn(e), !b), r && ot());
    if (b) {
      if (e.onDebug("[byoc:git] Repository is empty, skipping checkout"), e.sanitized) {
        let C = A(e.repoPath, ".git"), H = {};
        await p(e, e.repoPath, [ "--git-dir", C, "read-tree", "HEAD" ], {
          ...M
        }, Bt, H).then(e.sanitized.onIndexFromHead, async q => {
          if (e.signal?.throwIfAborted(), e.onDebug(`[byoc:git] Could not read HEAD into the index: ${O(q)}`), 
          typeof H.exitCode !== "number" || H.exitCode > 128) await Ze(A(C, "index.lock")).catch(() => {});
        });
      }
      return;
    }
    if (!G) throw Error(`git fetch failed for ${e.gitURL}`);
  }
  if (await p(e, e.repoPath, [ "update-ref", "refs/remotes/origin/HEAD", "FETCH_HEAD^{commit}" ], {
    ...M
  }).catch(b => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${O(b)}`)), n) {
    e.onDebug("[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)");
    return;
  }
  let y = () => p(e, e.repoPath, [ "update-ref", "--no-deref", "HEAD", "HEAD" ], {
    ...M
  }).catch(() => {}), T = () => p(e, e.repoPath, [ "-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "reset", "--hard", "FETCH_HEAD^{commit}" ]), R = Date.now(), u = void 0, S = u === void 0 || u.outcome === "absent" || u.outcome === "ready" && u.state?.phase === "idle" && u.state.head === void 0 ? void 0 : u, w = S && {
    standby_outcome: S.outcome,
    standby_wait_ms: String(S.waitedMs)
  }, v = S === void 0 ? {
    action: "usual"
  } : fn({
    outcome: S.outcome,
    state: S.state,
    ...S.state?.phase === "idle" && S.state.head !== void 0 ? await un(e) : {
      head: void 0,
      fetchHead: void 0
    }
  });
  switch (v.action) {
   case "skip":
    {
      await y(), e.onDebug(`[byoc:git] Standby checkout already left the tree at FETCH_HEAD (${v.sha.slice(0, 12)}); skipping reset`);
      let b = S?.state?.lastOkMs === void 0 ? void 0 : Math.max(0, Math.round((Date.now() - S.state.lastOkMs) / 1e3));
      V(e, "reset", Date.now() - R, {
        ...w,
        skipped: "same_commit",
        ...b !== void 0 && {
          standby_checkout_age_s: String(b)
        }
      });
      return;
    }

   case "forced":
    {
      e.onDebug(`[byoc:git] Standby checkout left the tree suspect (${v.reason}); forcing reset --hard`), 
      await y(), await T();
      let b = await gn(e, {
        base: v.base ?? S?.lockBase,
        target: v.target ?? S?.lockTarget
      });
      V(e, "reset", Date.now() - R, {
        ...w,
        standby_forced: v.reason,
        standby_strays_removed: b === void 0 ? "unknown" : String(b)
      });
      return;
    }

   case "usual":
    break;
  }
  if (!P) await y();
  await Oe(e, "reset", async () => {
    if (P) try {
      await p(e, e.repoPath, [ "-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "checkout", "-q", "--progress", "--detach", "FETCH_HEAD^{commit}" ]);
      return;
    } catch (b) {
      if (e.signal?.aborted) throw b;
      e.onDebug(`[byoc:git] Delta reset failed, falling back to reset --hard: ${O(b)}`), 
      await y();
    }
    await T();
  }, h ? {
    ...w,
    delta_reset: "withheld"
  } : w, S === void 0 ? void 0 : R);
}

var Je = /^[0-9a-f]{40}$/;

async function Te(e, t, n, r) {
  return p(e, e.repoPath, [ ...r === void 0 ? [] : [ "--git-dir", r ], "rev-parse", "--verify", "--quiet", `${t}^{commit}` ], {
    ...M
  }, void 0, n).then(i => i.trim() || void 0, () => {});
}

async function un(e) {
  let [t, n] = await Promise.all([ Te(e, "HEAD"), Te(e, "FETCH_HEAD") ]);
  return {
    head: t,
    fetchHead: n
  };
}

function ln(e, t) {
  return e.startsWith(t) || t.startsWith(e);
}

function fn({outcome: e, state: t, head: n, fetchHead: r}) {
  let i = o => ({
    action: "forced",
    reason: o,
    base: t?.base,
    target: t?.target
  });
  switch (e) {
   case "absent":
    return {
      action: "usual"
    };

   case "stale":
   case "killed":
   case "timeout":
    return i(e);

   case "ready":
   case "waited":
    break;
  }
  if (t === void 0) return i("no_record");
  switch (t.phase) {
   case "failed":
    return i("failed");

   case "running":
    return i("interrupted");

   case "other":
    return i("unknown_phase");

   case "idle":
    break;
  }
  if (t.head === void 0) return {
    action: "usual"
  };
  if (n === void 0 || !ln(n, t.head)) return i("head_mismatch");
  if (r !== void 0 && r === n) return {
    action: "skip",
    sha: n
  };
  return {
    action: "usual"
  };
}

async function gn(e, {base: t, target: n}) {
  if (t === void 0 || n === void 0 || !Je.test(t) || !Je.test(n)) {
    e.onDebug("[byoc:git] Standby stray clean-up skipped: no usable base/target");
    return;
  }
  try {
    let [r, i] = await Promise.all([ Te(e, t), Te(e, n) ]);
    if (r === void 0 || i === void 0) {
      e.onDebug("[byoc:git] Standby stray clean-up skipped: base/target do not resolve locally");
      return;
    }
    let o = async (y, T) => {
      let R = {}, u = await p(e, e.repoPath, [ "diff", "--no-renames", "--name-only", "--diff-filter=A", "-z", y, T, "--" ], {
        ...M
      }, void 0, R);
      if (R.stdoutTruncated || u.length > 0 && !u.endsWith("\0")) {
        e.onDebug(`[byoc:git] Standby stray clean-up skipped: the ${y.slice(0, 12)}\u2192${T.slice(0, 12)} listing was truncated`);
        return;
      }
      return u.split("\0").filter(S => S.length > 0);
    }, c = await o(r, i);
    if (c === void 0) return;
    if (c.length === 0) return 0;
    let d = new Set(c), s = await o("FETCH_HEAD^{commit}", i);
    if (s === void 0) return;
    let f = s.filter(y => d.has(y));
    if (f.length === 0) return 0;
    let h = await Ee(e.repoPath), P = 0, l = new Set;
    for (let y of f) {
      if (!pn(y)) {
        e.onDebug(`[byoc:git] Standby stray clean-up: refusing path '${y}'`);
        continue;
      }
      let T = A(h, y);
      try {
        if (await Ee(W(T)) !== W(T)) {
          e.onDebug(`[byoc:git] Standby stray clean-up: refusing '${y}' (its directory resolves to another path)`);
          continue;
        }
        let u = await qe(T);
        if (!u.isFile() && !u.isSymbolicLink()) continue;
        await Ze(T), P++, l.add(W(T));
      } catch (R) {
        if (E(R) !== "ENOENT") e.onDebug(`[byoc:git] Standby stray clean-up: '${y}': ${O(R)}`);
      }
    }
    for (let y of [ ...l ].sort((T, R) => R.length - T.length)) for (let T = y; T !== h && T.startsWith(h + ae); T = W(T)) try {
      await vt(T);
    } catch {
      break;
    }
    return e.onDebug(`[byoc:git] Standby stray clean-up: removed ${P} of ${f.length} file(s) the interrupted checkout ${t.slice(0, 12)}\u2192${n.slice(0, 12)} added`), 
    P;
  } catch (r) {
    e.onDebug(`[byoc:git] Standby stray clean-up failed: ${O(r)}`);
    return;
  }
}

function pn(e) {
  if (e.length === 0 || kt(e) || e.includes("\\")) return !1;
  let t = e.split("/");
  if (t.some(n => n === "" || n === "." || n === "..")) return !1;
  return t[0].toLowerCase() !== ".git";
}

function hn(e, t) {
  let n = [];
  if (t && e < it) n.push("-c", `http.lowSpeedLimit=${Vt}`, "-c", `http.lowSpeedTime=${Wt}`);
  if (e >= 3) n.push("-c", "http.version=HTTP/1.1");
  return n;
}

var mn = (e, t, n, r, i) => p(e, e.repoPath, t, n, r, i);

async function ct(e, t, n, r = !1, i = mn) {
  let o = Date.now(), c = 4e3 + Math.random() * 4e3, d = r && Yt(), s = 0, f, h = [], P = u => u.length <= Ye ? u : ne(u, je) + "\u2026" + Ql(u, Ye - je - 1), l = () => h.length > 0 ? {
    attempt_errors: _(h)
  } : {}, y = 0, T = 0, R = u => ({
    failfast_aborts: String(y),
    client_aborts: String(T),
    ...u?.transferBytes !== void 0 && {
      pack_bytes: String(u.transferBytes)
    },
    ...u?.sawServerProgress === !0 && {
      server_progress: "true"
    }
  });
  for (let u = 0; u < oe; u++) {
    if (u > 0) {
      let G = c * (1 << u - 1);
      e.onDebug(`[byoc:git] Fetch retry ${u + 1}/${oe}, backing off ${Math.round(G)}ms`), 
      await J(G, e.signal, {
        throwOnAbort: !0
      });
    }
    let S = [ ...hn(u, r), ...typeof t === "function" ? t() : t ], v = u === oe - 1 || d && u === se - 1 && s === se - 1 ? {
      GIT_TRACE_PACKET: "1"
    } : void 0, b = {};
    try {
      let G = ce - (Date.now() - o);
      if (await i(e, S, v, Math.max(1, G), b), u > 0) e.onDebug(`[byoc:git] Fetch succeeded on attempt ${u + 1}`);
      return V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        ...R(b),
        ...l()
      }), !0;
    } catch (G) {
      f = G;
      let C = O(G);
      e.onDebug(`[byoc:git] Fetch attempt ${u + 1} failed: ${C}`), h.push(P(Xc(C)));
      let H = r && u < it && jt(C);
      if (b.killReason !== void 0) T++; else if (H) y++;
      if (s = (H || b.killReason === "silence" || b.killReason === "escalated") && !b.sawClientProgress && !b.sawRemoteActivity ? s + 1 : 0, 
      Date.now() - o >= ce) throw e.onDebug(`[byoc:git] Fetch cumulative wall-clock ${Date.now() - o}ms \u2265 hard cap \u2014 not retrying`), 
      V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        hard_cap: "true",
        ...R(),
        ...l()
      }), Error(`git fetch failed (cumulative hard cap after ${u + 1} attempts): ${C}`);
      if (n && cTn(C) && !await n()) return !1;
      if (cTn(C)) throw e.onDebug("[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries"), 
      V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        permanent: "true",
        ...R(),
        ...l()
      }), Error(`git fetch failed (permanent): ${C}`);
      if (d && u === se - 1 && s === se) throw e.onDebug(`[byoc:git] Fetch remote mute on all ${se} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`), 
      V(e, "fetch", Date.now() - o, {
        attempts: String(u + 1),
        exhausted: "true",
        giveup: "mute",
        ...R(),
        ...l()
      }), Error(`git fetch failed after ${u + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): ${C}`);
    }
  }
  throw V(e, "fetch", Date.now() - o, {
    attempts: String(oe),
    exhausted: "true",
    ...R(),
    ...l()
  }), Error(`git fetch failed after ${oe} attempts: ${O(f)}`);
}

async function bn(e, t, n) {
  if ((await p(e, e.repoPath, [ "branch", "--show-current" ]).catch(() => "")).trim() === t) {
    e.onDebug(`[byoc:git] Already on target branch ${t}`);
    return;
  }
  if (await ut(e, t)) e.onDebug("[byoc:git] Target branch exists on remote, fetching"), 
  await dt(e, t, n); else e.onDebug(`[byoc:git] Creating local branch ${t} from HEAD`), 
  await p(e, e.repoPath, [ "checkout", "-B", t ]), await p(e, e.repoPath, [ "update-ref", `refs/remotes/origin/${t}`, "HEAD" ], {
    ...M
  }).catch(() => {});
}

async function dt(e, t, n) {
  await ct(e, () => {
    let r = at(e);
    return [ ...r.configArgs, "fetch", ...xe(n), "--progress", r.remote, t ];
  }, void 0, n && ot()), await p(e, e.repoPath, [ "checkout", "--progress", "--force", "-B", t, "FETCH_HEAD" ]);
}

async function ut(e, t) {
  try {
    return (await p(e, e.repoPath, [ "ls-remote", "--heads", e.authURL, `refs/heads/${t}` ])).trim().length > 0;
  } catch {
    return !1;
  }
}

async function _n(e, t) {
  try {
    return await p(e, e.repoPath, [ "rev-parse", "--verify", "--quiet", t ], {
      ...M
    }), !0;
  } catch {
    return !1;
  }
}

async function yn(e) {
  try {
    return (await p(e, e.repoPath, [ "ls-remote", "--symref", e.authURL, "HEAD" ])).trim() === "";
  } catch {
    return !1;
  }
}

var uTn = "SHR_GIT_PROXY_TOKEN", r3r = [ "-c", "lfs.locksverify=false" ];

function o3r(e) {
  return lt("unused", e);
}

function lt(e, t) {
  return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${t}"; fi; }; f`;
}

function pTn(e) {
  return lt("x-access-token", e);
}

function Mrr(e) {
  let t = new URL(e).origin;
  return [ "-c", "credential.helper=", "-c", `credential.${t}.helper=`, "-c", `credential.${t}.helper=${o3r(uTn)}` ];
}

function ft() {
  return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "";
}

function Hrr(e) {
  let n = [ "", `${new URL(e).origin}.`, `${e}.` ], r = ft(), i = r ? [ "-c", `remote.origin.proxy=${r}` ] : [];
  for (let o of n) {
    if (r) i.push("-c", `http.${o}proxy=${r}`);
    i.push("-c", `http.${o}sslVerify=true`);
  }
  return i;
}

var En = new Set([ "fetch", "ls-remote" ]);

function wn(e) {
  for (let t = 0; t < e.length; t++) {
    if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
      t++;
      continue;
    }
    return e[t];
  }
  return;
}

async function p(e, t, n, r, i = ce, o) {
  let c = e.getAuthToken !== void 0, d = wn(n), s = d !== void 0 && En.has(d), f = c && s ? e.getAuthToken() : void 0, h = r?.GIT_ALLOW_PROTOCOL === "none", P = [ ...kB, ...Zvt(e.gitEnvironment?.commandScopeEntries ?? []), ...h ? Xt : [], "-c", "http.proxyAuthMethod=basic", ...c && s ? Hrr(e.gitURL) : [], ...f ? Mrr(e.gitURL) : [], ...e.governedMount && s ? r3r : [], ...n ], l = f ?? e.token, y = P.map(Y => kn(Y, e.authURL, e.gitURL, l));
  e.onDebug(`[byoc:git] git ${y.join(" ")} (dir=${t || "."})`);
  let T = {
    ...process.env,
    ...r,
    ...e.gitEnvironment?.envOverrides,
    ...f ? {
      [uTn]: f
    } : void 0,
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
    ...c ? {
      GIT_CONFIG_GLOBAL: "/dev/null"
    } : void 0,
    GIT_CONFIG: void 0,
    GIT_TERMINAL_PROMPT: "0",
    GCM_INTERACTIVE: gX.GCM_INTERACTIVE,
    LC_ALL: "C",
    GIT_PROGRESS_DELAY: "0",
    ...qTe,
    ...e.authURL.startsWith("file://") && {
      GIT_ALLOW_PROTOCOL: `file:${qTe.GIT_ALLOW_PROTOCOL}`
    },
    GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
    ...h && {
      GIT_ALLOW_PROTOCOL: "none",
      GIT_SSH_COMMAND: "false"
    }
  };
  for (let Y of Object.keys(T)) if (Y.toUpperCase() === "GIT_CONFIG") T[Y] = void 0;
  let {signal: R, dispose: u} = Sn(e.signal, i), S = d !== void 0 && Ot.has(d) ? dTn : e.watchdog?.silenceMs ?? et, w, v, b = Date.now(), G = e.watchdog?.preTransferCapMs ?? tt().capMs, C, H = new Set, q, Le = !1, Ie = {
    active: !1
  }, ue = Date.now();
  try {
    return await new Promise((j, K) => {
      let N = Tt("git", P, {
        cwd: t || void 0,
        windowsHide: !0,
        ...Dl("helper"),
        env: T,
        stdio: [ "ignore", "pipe", "pipe" ]
      }), le = 10485760, Z = 8192, te = 0, U = [], L = "", fe = !1, D = 0, re = -1, Ne, Re = k => {
        if (typeof k === "object" && "unref" in k) k.unref();
        return k;
      }, Q = !1, Pe, Fe = k => {
        if (w === void 0) w = k;
        N.kill("SIGTERM"), Pe ??= Re(setTimeout(() => {
          if (Q) return;
          N.kill("SIGKILL"), w = "escalated", Q = !0, K(Object.assign(Error("git did not exit after SIGTERM"), {
            stdout: Buffer.concat(U).toString("utf8"),
            stderr: L
          }));
        }, $e));
      }, ge = (k = S) => Re(setTimeout(I => I("silence"), k, Fe)), z = ge();
      N.stdout.on("data", k => {
        if (te < 10485760) U.push(k), te += k.length; else if (o) o.stdoutTruncated = !0;
      }), N.stderr.on("data", k => {
        let I = k.toString("utf8"), X = L + I;
        if (X.length > 8192) Le = !0;
        L = X.slice(-8192);
        let pe = Dt(I, fe), {display: F, client: B, server: he} = pe;
        if (I.length > 0) fe = !/[\r\n]$/.test(I);
        if (o !== void 0) {
          if (It(Ie, pe, Date.now()), Ie.active) o.sawRemoteActivity = !0;
        }
        if (B) {
          if (o !== void 0) o.sawClientProgress = !0;
          if (S < We && Mt(B)) S = We, clearTimeout(z), z = ge();
          if (Nt(v, B)) b = Date.now(), clearTimeout(z), z = ge();
          if (v = B, o !== void 0 && B.bytes !== void 0 && B.label === $t && B.bytes > (o.transferBytes ?? -1)) o.transferBytes = B.bytes;
        } else if (he !== void 0 && v === void 0) {
          if (Ft(C, H, he)) {
            C = he;
            let me = ue + G - Date.now();
            if (G > 0 && me > 0) {
              if (q = Date.now(), clearTimeout(z), z = ge(Math.min(S, me)), o !== void 0) o.sawServerProgress = !0;
            }
          }
          H.add(he.label);
        }
        if (F) {
          if (F.label !== Ne) Ne = F.label, re = -1;
          let me = Math.floor(F.pct / 10), Me = Date.now() - D;
          if (Me >= Gt && (Me >= Ct || me > Math.floor(re / 10))) {
            D = Date.now(), re = F.pct;
            try {
              e.onDebug(`[byoc:git] ${d ?? "git"}: ${F.raw}`), e.onProgress?.(d ?? "git", F);
            } catch {}
          }
        }
      });
      let ve = () => {
        if (e.signal?.aborted) N.kill("SIGTERM"), Pe ??= Re(setTimeout(() => {
          if (Q) return;
          N.kill("SIGKILL"), Q = !0;
          let k = Error("The operation was aborted");
          k.name = "AbortError", K(Object.assign(k, {
            stderr: L
          }));
        }, $e)); else Fe("hard-cap");
      };
      if (R.aborted) ve(); else R.addEventListener("abort", ve, {
        once: !0
      });
      let ke;
      N.on("error", k => {
        ke = k;
      }), N.on("close", (k, I) => {
        if (Q) return;
        if (Q = !0, clearTimeout(z), clearTimeout(Pe), R.removeEventListener("abort", ve), 
        o !== void 0) o.exitCode = k, o.wroteStderr = L.length > 0;
        let X = Buffer.concat(U).toString("utf8");
        if (e.signal?.aborted && w === void 0) {
          let F = Error("The operation was aborted");
          return F.name = "AbortError", K(Object.assign(F, {
            stdout: X,
            stderr: L,
            code: k,
            signal: I
          }));
        }
        if (ke) return K(Object.assign(ke, {
          stdout: X,
          stderr: L
        }));
        if (k === 0) return j(X);
        let pe = Error(I !== null ? `git exited on signal ${I}` : `git exited with code ${k}`);
        K(Object.assign(pe, {
          stdout: X,
          stderr: L,
          code: k,
          signal: I
        }));
      });
    });
  } catch (Y) {
    let j = Y;
    if (w !== void 0) {
      let le = v ? ` at ${v.label} ${v.pct}%${v.total ? ` (${v.done}/${v.total})` : ""}` : "", Z = Date.now(), te = Z - b, U = "", L = `no forward progress for ${te}ms (budget ${S}ms)${le}`;
      if (v === void 0 && C !== void 0 && q !== void 0) {
        let D = C, re = D.done !== void 0 ? D.pct > 0 ? ` ${D.pct}% (${D.done}${D.total !== void 0 ? `/${D.total}` : ""})` : ` ${D.done}` : ` ${D.pct}%`;
        U = ` \u2014 no pack data received; server-side progress last advanced ${Z - q}ms ago at ${D.label}${re}`, 
        L = Z - ue >= G ? `pre-transfer cap ${G}ms reached with no client-side progress${U}` : `no client-side progress for ${Z - ue}ms and server-side progress stopped advancing (budget ${S}ms)${U}`;
      }
      let fe = w === "silence" ? L : w === "hard-cap" ? `hard cap ${i}ms after ${Z - ue}ms${le}${U}` : `did not exit within ${$e}ms of SIGTERM (D-state? \u2014 last forward ${te}ms ago)${le}`;
      e.onDebug(`[runner:stuck] git ${y.join(" ")} (dir=${t || "."}) \u2014 ${fe} \u2014 killing subprocess`);
    }
    let K = j.stderr !== void 0 && j.stderr.length > 0 ? Ut(j.stderr, Le, e.authURL, l) : mt(fTn(j.stdout || j.message || "", e.authURL, l)).slice(0, Se), N = w !== void 0 ? ` (watchdog: ${w})` : "";
    throw Error(`git ${d ?? "?"} failed${N}: ${K}`);
  } finally {
    if (o !== void 0 && w !== void 0) o.killReason = w;
    u();
  }
}

function LKt(e) {
  return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("ssh://") || !e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e);
}

function Sn(e, t) {
  let n = new AbortController, r = setTimeout(c => c.abort(), t, n);
  if (typeof r === "object" && "unref" in r) r.unref();
  let i;
  if (e) {
    if (e.aborted) {
      clearTimeout(r), n.abort();
      let c = () => {};
      return {
        signal: n.signal,
        dispose: c,
        [Symbol.dispose]: c
      };
    }
    i = () => {
      clearTimeout(r), n.abort();
    }, e.addEventListener("abort", i, {
      once: !0
    });
  }
  n.signal.addEventListener("abort", () => clearTimeout(r));
  let o = () => {
    if (clearTimeout(r), e && i) e.removeEventListener("abort", i);
  };
  return {
    signal: n.signal,
    dispose: o,
    [Symbol.dispose]: o
  };
}

function Tn(e) {
  if (e.url) {
    if (!LKt(e.url)) throw Error(`Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${e.url}`);
    return e.url;
  }
  switch (e.type) {
   case "github":
    return `https://github.com/${e.repo}`;

   case "github-ssh":
    throw Error(`github-ssh source for '${e.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`);

   case "test-file":
    return `file://${e.repo}`;

   default:
    throw Error(`Unsupported git source type: ${e.type}`);
  }
}

function s3r(e, t) {
  if (!t) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let n;
  try {
    n = new URL(e);
  } catch {
    return e;
  }
  if (n.protocol !== "https:") return e;
  if (t.startsWith("sk-ant-ccsr-")) n.username = "unused", n.password = t; else n.username = t;
  return n.toString();
}

function i3r(e, t) {
  if (t.type === "test-file") {
    let r = De(t.repo);
    if (!r || r === "." || r === "..") return "";
    return A(e, r);
  }
  let n = t.repo.split("/").filter(r => r.length > 0);
  if (n.length === 0) return "";
  for (let r of n) if (r === "." || r === "..") return "";
  return A(e, ...n);
}

function pQo(e) {
  let t = e.repo.split("/").filter(n => n.length > 0);
  for (let n of t) if (n === "." || n === "..") return "";
  return t.join("-");
}

function gt(e, t) {
  let n = W(W(we(t)));
  return De(n) === "_sessions" && we(e).startsWith(W(n) + ae) ? n : Rn(e, t);
}

function Rn(e, t) {
  let n = we(e).split(ae), r = we(t).split(ae), i = 0;
  while (i < n.length && i < r.length && n[i] === r[i]) i++;
  return i >= 2 ? n.slice(0, i).join(ae) : void 0;
}

async function fQo(e) {
  let {canonicalRepoPath: t, worktreePath: n, ref: r, onDebug: i, signal: o, gitEnvironment: c} = e;
  if (n === t) throw Error("addSessionWorktree: worktreePath must not equal canonicalRepoPath");
  let d = {
    repoPath: t,
    gitURL: "",
    authURL: "",
    originURL: "",
    gitEnvironment: c,
    onDebug: i,
    signal: o
  }, s = (await p(d, t, [ "rev-parse", "--verify", "FETCH_HEAD^{commit}" ], {
    ...M
  })).trim(), f;
  try {
    f = (await p(d, n, [ "--git-dir", A(n, ".git"), "rev-parse", "HEAD" ], {
      ...M
    })).trim();
  } catch (l) {
    if (o?.aborted) throw l;
  }
  if (f === s) {
    let l = (await p(d, n, [ "rev-parse", "--absolute-git-dir" ])).trim();
    await Ve(A(l, "FETCH_HEAD"), `${s}\n`).catch(() => {}), i(`[byoc:git] Worktree ${n} already at ${s.slice(0, 12)} \u2014 keeping`);
    return;
  }
  i(f ? `[byoc:git] Worktree ${n} at wrong commit ${f.slice(0, 12)}, clearing before re-add` : `[byoc:git] Clearing ${n} before worktree add`), 
  await fl(Kds(n, gt(t, n)), dTn, `[runner:stuck] rm ${n} (check NFS/CSI mount health)`).catch(l => {
    i(`[byoc:git] rm ${n} failed (continuing): ${l}`);
  });
  let h = await fl(pt(n).then(l => Jqe(t, l)), de, `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`).then(l => {
    if (l.outcome === "kept") i(`[byoc:git] left the worktree registration of ${n} in place: ${l.reason}`);
    return !0;
  }, l => (i(`[byoc:git] worktree deregister did not finish: ${l}`), !1));
  await Pn(d, t, n, s, h);
  let P = (await p(d, n, [ "rev-parse", "--absolute-git-dir" ])).trim();
  await Ve(A(P, "FETCH_HEAD"), `${s}\n`), i(`[byoc:git] Added worktree ${n} at ${s.slice(0, 12)} (detached)`);
}

async function Pn(e, t, n, r, i) {
  let o = () => p(e, t, [ "worktree", "add", "--detach", n, r ]);
  try {
    await o();
    return;
  } catch (c) {
    if (!i || !O(c).includes("is a missing but already registered worktree")) throw c;
    let d = await fl(Promise.all([ Ee(t), pt(n) ]).then(([s, f]) => zQ(A(s, ".git"), {
      worktreePath: f,
      repoSpelled: t
    }, {
      locked: "keep"
    })), de, `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`).catch(s => ({
      outcome: "kept",
      reason: O(s)
    }));
    if (d.outcome !== "dropped") throw e.onDebug(`[byoc:git] git still registers ${n} with its folder gone, and the registration could not be dropped${d.outcome === "kept" ? `: ${d.reason}` : ""}; not retrying`), 
    c;
    e.onDebug(`[byoc:git] dropped the registration git still had for ${n} with its folder gone; retrying worktree add`);
  }
  await o();
}

async function pt(e) {
  let t = await Ee(W(e)).catch(() => null), n = t === null ? null : A(t, De(e));
  return n === null || n === e ? [ e ] : [ e, n ];
}

async function mQo(e) {
  let {worktrees: t, onDebug: n, signal: r} = e;
  for (let {canonicalRepoPath: i, worktreePath: o} of t) {
    let c = {
      repoPath: i,
      gitURL: "",
      authURL: "",
      originURL: "",
      onDebug: n,
      signal: r
    };
    if (await fl(qe(o).then(() => !1, s => Zl(s)), de, `[runner:stuck] worktree probe ${o} (check NFS/CSI mount health)`).catch(() => !1)) continue;
    try {
      if (!await FFe(o)) {
        n(`[byoc:git] kept worktree ${o} \u2014 unremovable reparse point`);
        continue;
      }
      let s = await fl(zst(i, o, {
        trustedRoot: gt(i, o),
        deregisterIfStopped: !0,
        pointerFirst: !0
      }), dTn, `[runner:stuck] remove ${o} (check NFS/CSI mount health)`);
      if (s.outcome === "unanchored") await p(c, i, [ "worktree", "remove", "--force", o ]); else if (s.outcome !== "removed") {
        n(`[byoc:git] worktree remove ${o} failed: ${PCe(s)}`);
        continue;
      }
      n(`[byoc:git] Removed worktree ${o}`);
    } catch (s) {
      n(`[byoc:git] worktree remove ${o} failed: ${s}`);
    }
  }
  for (let {canonicalRepoPath: i, worktreePath: o} of t) await fl(Jqe(i, o), de, `[runner:stuck] worktree deregister ${i} (check NFS/CSI mount health)`).then(c => {
    if (c.outcome === "kept") n(`[byoc:git] left the worktree registration of ${o} in place: ${c.reason}`);
  }, c => {
    n(`[byoc:git] worktree deregister did not finish: ${c}`);
  });
}

function vn(e) {
  let t = new Map;
  for (let n of e) {
    let r = n.branches ?? [], [i, ...o] = r;
    if (o.length > 0) throw Error(`Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`);
    if (i) t.set(n.repo, i);
  }
  return t;
}

function kn(e, t, n, r) {
  if (e === t && e !== n) return ee(e);
  if (e.includes("://") && e.includes("@")) return ee(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}

function fTn(e, t, n) {
  if (t && /:\/\/[^/]*@/.test(t)) e = e.split(t).join(ee(t));
  if (n) e = e.split(n).join("<token>");
  return e.replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>").replace(/github_pat_[A-Za-z0-9_]+/g, "<token>").replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>").replace(/gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g, "<token>");
}

function ee(e) {
  let t;
  try {
    t = new URL(e);
  } catch {}
  if (t && (t.username || t.password)) {
    let i = t.search || "", o = t.hash || "";
    return `${t.protocol}//<token>@${t.host}${t.pathname}${i}${o}`;
  }
  if (t) return e;
  let n = e.indexOf("@"), r = e.indexOf("://");
  if (r >= 0 && n > r) return e.slice(0, r + 3) + "<token>" + e.slice(n);
  return e;
}

function O(e) {
  return e instanceof Error ? e.message : String(e);
}

var ht = /^(remote:\s+)?(fatal|error):/i;

function mt(e) {
  if (!e) return "";
  let t = [];
  for (let r of e.split(`\n`)) if (ht.test(r)) t.push(r);
  if (t.length === 0) return e;
  let n = t.join(`\n`);
  if (e.startsWith(n)) return e;
  return n + `\n` + e;
}

export { dQo, Zvt, DKt, lTn, Prr, dTn, cTn, kB, qTe, cQo, n3r, uQo, Irr, Orr, uTn, r3r, o3r, pTn, Mrr, Hrr, LKt, s3r, i3r, pQo, fQo, mQo, fTn };
