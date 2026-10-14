// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { wX, Igt, a$t, lL, Dl, RFs } from "./chunk-4dwgr3et.js";

import { Cn } from "./chunk-hwdwjvh8.js";

import { x, Je, j, E, Ms } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { KMr } from "./chunk-cqgvwwgb.js";

import { bt, Oy, vh, Wi, t } from "./chunk-kawq2919.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { Is } from "./chunk-p35rdtee.js";

import { co } from "./chunk-k5d016nk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as Ut } from "buffer";

import { basename as be } from "path";

import { homedir as Ve } from "os";

import { sep as je } from "path";

function ZNt(e) {
  return;
}

var dln = "<user-code>";

function Ke() {
  try {
    return Ve();
  } catch {
    return "";
  }
}

var de = "cli", ue = new Set([ "cli.js", de, "sdk.mjs", "browser-sdk.js", "agentSdk.js" ]), ae = /^chunk-[0-9a-z]+\.js$/;

function le(e) {
  return e[0] === "/" && ae.test(e.slice(1));
}

function fe(e) {
  return le(e) || e[0] === "/" && ue.has(e.slice(1));
}

function q$s(e) {
  return le(e) ? "/" + de : e;
}

var Ye = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;

function pe(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return Ye.test(n);
}

function ze(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (pe(n)) return SMr(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = Ke();
  if (r && n.startsWith(r + je)) n = "~" + n.slice(r.length);
  return n;
}

var Xe = [ "src/", "packages/" ];

function SMr(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}

function $qn(e) {
  return fe(e.file) || Xe.some(n => e.file.startsWith(n));
}

var Ze = [ "node:", "bun:", "internal:" ], qe = new Set([ "native", "unknown", "ws", "undici", "node-fetch", "isomorphic-fetch", "vercel_fetch", "utf-8-validate" ]);

function me(e) {
  return qe.has(e) || Ze.some(n => e.startsWith(n));
}

function MMo(e) {
  return me(e.file);
}

function Y$s(e) {
  let n = e.find(r => !MMo(r));
  if (n === void 0) return e.length >= ge;
  return n.file === dln || n.file.startsWith("node_modules/");
}

function X$s(e) {
  return fe(e.file) && (e.function == null || e.function === "<anonymous>");
}

function Qe(e) {
  let n = e.split(/[/\\]/), r = -1;
  for (let u = n.length - 1; u >= 0; u--) if (n[u] === "node_modules") {
    r = u;
    break;
  }
  if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1], i;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    i = `${o}/${n[r + 2]}`;
  } else i = o;
  let s = n.at(-1);
  if (!s) return null;
  return `node_modules/${i}/${s}`;
}

function et(e) {
  let n = ze(e), r = SMr(n), o = Qe(n);
  if (ue.has(r) && (o === null || o.startsWith("node_modules/@anthropic-ai/")) || pe(e) && ae.test(r)) return "/" + r;
  let i = null;
  if (i) return i;
  if (me(n)) return n;
  return dln;
}

function tt(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3), o = r.indexOf(" ("), i, s;
  if (o !== -1 && r.endsWith(")")) i = r.slice(0, o).trim(), s = r.slice(o + 2, -1); else s = r.trim();
  if (i) {
    if (i = i.replace(/^async\s+/, "").replace(/^new\s+/, ""), i = i.replace(/\s*\[as\s+[^\]]+\]$/, ""), 
    !i) i = void 0;
  }
  let u = s.match(/^(.*):(\d+):(\d+)$/);
  if (!u) return null;
  let [, c, p, f] = u, g = et(c);
  return {
    file: g,
    line: Number(p),
    column: Number(f),
    function: g === dln && i ? dln : i
  };
}

var ge = 50;

function cln(e, n = ge) {
  let r = [];
  for (let o of e$t(e).split(`\n`)) {
    let i = tt(o);
    if (i) {
      if (r.push(i), r.length >= n) break;
    }
  }
  return r;
}

function e$t(e) {
  let n = typeof e.stack === "string" ? e.stack : "", r = typeof e.message === "string" ? e.message : "", o = rt(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1);
}

function rt(e, n, r) {
  let o = s => s !== "" && e.startsWith(`${s}\n`);
  if (r !== "") {
    let s = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (s !== "" && o(s)) return s.length;
    let u = `: ${r}`, c = e.indexOf(`${u}\n`);
    return c > 0 && !e.slice(0, c).includes(`\n`) ? c + u.length : n === "" && o(r) ? r.length : -1;
  }
  let i = n === void 0 ? "Error" : typeof n === "string" ? n : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null ? String(n) : "";
  return o(i) ? i.length : -1;
}

function _e(e, n) {
  try {
    let r = typeof e.stack === "string" ? e.stack : "", o = e$t(e), s = o.length < r.length && r.endsWith(o) ? o.replace(/\n$/, "").split(`\n`) : [], u = s.every(c => c.trimStart().startsWith("at ")) ? s : [];
    e.stack = [ `${e.name}: ${n}`, ...u ].join(`\n`), e.message = n;
  } catch {}
  return e;
}

function J$s(e, n) {
  return [ `${e.name}: ${e.message}`, ...n.map(r => {
    let o = `${r.file}${r.line ? `:${r.line}` : ""}${r.column ? `:${r.column}` : ""}`;
    return r.function ? `    at ${r.function} (${o})` : `    at ${o}`;
  }) ].join(`\n`);
}

import { mkdir as mt } from "fs/promises";

import { homedir as gt } from "os";

import { basename as he, delimiter as H, dirname as V, isAbsolute as _t, resolve as K } from "path";

var xn = Object.freeze([ "-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=" ]), Rb = "--ignore-submodules=dirty", mX = Object.freeze([ "status", "--porcelain", "--untracked-files=normal", "--ignore-submodules=dirty" ]), A = Object.freeze({
  GIT_LFS_SKIP_SMUDGE: "1"
}), ije = "/", Ee = [ "'alias.remote-none=version'", "'alias.remote-none.command=version'", "'alias.remote-/.command=version'", "'fetch.bundleURI='", "'help.autocorrect=0'" ], Te = Ee.join(" "), ot = Object.freeze({
  GIT_ALLOW_PROTOCOL: "/",
  GIT_CONFIG_PARAMETERS: Te,
  GIT_NO_LAZY_FETCH: "1",
  GIT_NO_REPLACE_OBJECTS: "1",
  GIT_TERMINAL_PROMPT: "0",
  ...A
}), st = Object.freeze({
  GIT_SSH_COMMAND: "false"
}), Fqn = 2e3, wgt = Object.freeze([ ...xn, "-c", "safe.bareRepository=explicit", "-c", "protocol.file.allow=never" ]), Uqn = [ "GIT_DIR", "GIT_WORK_TREE", "GIT_COMMON_DIR", "GIT_INDEX_FILE", "GIT_CEILING_DIRECTORIES", "GIT_DISCOVERY_ACROSS_FILESYSTEM", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_SHALLOW_FILE", "GIT_NAMESPACE", "GIT_IMPLICIT_WORK_TREE", "GIT_REFERENCE_BACKEND" ], fme = [ ...Uqn, "GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "GIT_CONFIG" ], ct = /^GIT_CONFIG_(KEY|VALUE)_\d+$/, uln = new RegExp(ct.source, "i"), dt = new Set(fme);

function As(e, n = {}) {
  let r = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return lt(Se({
    ...ot,
    ...!r && st
  }, e, n));
}

function Bqn(e, n = {}) {
  let r = Se({}, e, n);
  for (let o of ut) if (!(o in r)) r[o] = void 0;
  return r;
}

var ut = [ "GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH", "GIT_NO_REPLACE_OBJECTS" ];

function Se(e, n, {base: r = process.env, repository: o}) {
  let i = at({
    ...e,
    ...o !== void 0 && {
      GIT_DIR: o.gitDir,
      GIT_COMMON_DIR: o.commonDir
    },
    ...o !== void 0 && (o.workTree !== null ? {
      GIT_WORK_TREE: o.workTree
    } : {
      GIT_IMPLICIT_WORK_TREE: "0"
    }),
    ...n
  }), s = {};
  for (let c of fme) s[c] = void 0;
  let u = new Set(Object.keys(i).map(c => c.toUpperCase()));
  for (let c of Object.keys(r)) {
    let p = c.toUpperCase();
    if (dt.has(p) || uln.test(c) || u.has(p) && !(c in i)) s[c] = void 0;
  }
  return {
    ...r,
    ...s,
    ...i
  };
}

function at(e) {
  let n = e.GIT_ALLOW_PROTOCOL;
  if (n === void 0) return {
    ...e
  };
  let r = n.split(":").filter(c => c !== "/");
  if (r.find(c => !/^[A-Za-z0-9-]*$/.test(c)) !== void 0) throw Error('GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"');
  let i = [ ...new Set([ ...Ee, ...r.flatMap(c => [ `'alias.remote-${c}=version'`, `'alias.remote-${c}.command=version'` ]) ]) ], s = e.GIT_CONFIG_PARAMETERS;
  return {
    ...e,
    GIT_CONFIG_PARAMETERS: [ ...s === void 0 || s === "" || s === Te ? [] : [ s ], ...i ].join(" ")
  };
}

function lt(e) {
  let o = c => c, i = c => c.startsWith("/"), s = c => {
    if (c === void 0) return;
    let p = c.split(":").map(o).filter(f => f !== "" && i(f));
    return p.length > 0 ? p.join(":") : "/dev/null";
  }, u = Object.keys(e).filter(c => c === "PATH");
  return {
    ...e,
    ...Object.fromEntries(u.map(c => [ c, s(e[c]) ]))
  };
}

var wMr = `f() { git --git-dir="$1" for-each-ref --format='%(objectname)'; }; f`;

import { delimiter as pt } from "path";

function vMr(e) {
  return e.includes(pt) ? null : e;
}

function vgt() {
  return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}

var mme = "--upload-pack=git-upload-pack", Rn = [ "-c", `core.alternateRefsCommand=${wMr}` ];

function pln() {
  return O() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}

var Et = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i, Tt = [ "applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "prepare-commit-msg", "commit-msg", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "pre-receive", "update", "proc-receive", "post-receive", "post-update", "reference-transaction", "push-to-checkout", "pre-auto-gc", "post-rewrite", "sendemail-validate", "fsmonitor-watchman", "p4-changelist", "p4-prepare-changelist", "p4-post-changelist", "p4-pre-submit", "post-index-change" ], EMr = Tt.map(e => [ `hook.${e}.enabled`, "false" ]);

function aje() {
  return [ [ "core.fsmonitor", "" ], [ "core.hooksPath", pln() ], [ "core.askPass", "" ], [ "protocol.ext.allow", "never" ], [ "submodule.recurse", "false" ], [ "log.showSignature", "false" ], [ "format.pretty", "medium" ], [ "gc.auto", "0" ], [ "maintenance.auto", "false" ], ...EMr ];
}

var St = new Set([ "core.hooksPath", "core.askPass", "submodule.recurse", ...EMr.map(([e]) => e) ]), kMr = {
  GIT_NO_LAZY_FETCH: "1",
  GIT_NO_REPLACE_OBJECTS: "1",
  GIT_TERMINAL_PROMPT: "0",
  ...A
};

function HMo(e, {allowGitTerminalPrompt: n = !1} = {}) {
  return Is(kMr, (r, o) => !(n && o === "GIT_TERMINAL_PROMPT") && !Nt(e, o));
}

function Lee(e, n, r, o = r.GIT_CONFIG_COUNT, {allowRepoGitHooks: i = !1, allowGitTerminalPrompt: s = !1} = {}) {
  let u = he(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(u)) return null;
  let c = i ? aje().filter(([f]) => !St.has(f)) : aje(), p = Oe(n).map(f => n[f]);
  return {
    args: c.filter(([f]) => !p.some(g => g.startsWith(`${f}=`))).flatMap(([f, g]) => [ "-c", `${f}=${g}` ]).concat(Ot(n)),
    env: {
      ...r,
      ...HMo(r, {
        allowGitTerminalPrompt: s
      }),
      ...Aj(o, c),
      GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
    }
  };
}

var ht = new Set([ "-C", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--config-env", "--attr-source", "--exec-path" ]);

function Oe(e) {
  let n = [], r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) n.push(r + 1), r += 2; else if (ht.has(o) && r + 1 < e.length) r += 2; else if (o.startsWith("-")) r += 1; else break;
  }
  return n;
}

function Ot(e) {
  let n = [ ...e ];
  for (let r of Oe(n)) if (Et.test(n[r])) n[r] = `core.hooksPath=${pln()}`;
  return n;
}

var gX = {
  GIT_TERMINAL_PROMPT: "0",
  GIT_ASKPASS: "",
  GCM_INTERACTIVE: "never"
};

function Q$s(e) {
  let n = {};
  for (let [r, o] of Object.entries(gX)) if (_A(e, r) === void 0) n[r] = o;
  return n;
}

function Egt(e = process.env) {
  return {
    ...e,
    ...I(e, (n, r) => Object.hasOwn(gX, n) && r !== n),
    ...gX,
    ...Aj(_A(e, "GIT_CONFIG_COUNT"), [ [ "credential.interactive", "false" ] ], e)
  };
}

function I(e, n) {
  let r = {};
  for (let o of Object.keys(e)) if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}

function _A(e, n) {
  if (e[n] !== void 0 || O() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === n && o !== void 0) return o;
  return;
}

function Nt(e, n) {
  if (Object.hasOwn(e, n)) return !0;
  return O() === "windows" && Object.keys(e).some(r => r.toUpperCase() === n);
}

function Aj(e, n, r = {}) {
  let o = Number(e), i = Number.isInteger(o) && o > 0 ? o : 0, s = {
    GIT_CONFIG_COUNT: String(i + n.length)
  };
  n.forEach(([c, p], f) => {
    s[`GIT_CONFIG_KEY_${i + f}`] = c, s[`GIT_CONFIG_VALUE_${i + f}`] = p;
  });
  let u = new Set(Object.keys(s));
  return {
    ...I(r, (c, p) => u.has(c) && !u.has(p)),
    ...s
  };
}

var lje = [ "-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes" ], It = "-o BatchMode=yes -o StrictHostKeyChecking=yes", Ct = "-o BatchMode=yes", Ne = "-batch";

function Rt(e, n) {
  switch (e) {
   case "ssh":
    return n ? It : Ct;

   case "plink":
    return Ne;

   case "other":
    return;
  }
}

function fln(e, n) {
  let r = O() === "windows" ? e.replace(/\\/g, "/") : e;
  return `CDPATH= cd -- ${co([ r ])} 2>/dev/null || cd / || exit 1; ${n}`;
}

function OXe() {
  let e = "";
  try {
    e = gt();
  } catch {}
  return _t(e) ? e : K("/");
}

function DMo(e, n) {
  if (e !== void 0 && e !== "auto") return e;
  let r = xt(n).toLowerCase().replace(/\.exe$/, "");
  return [ "ssh", "plink", "tortoiseplink" ].includes(r) ? r : "auto";
}

function xt(e) {
  let n = "", r, o = !0;
  for (let s = 0; s < e.length; s++) {
    let u = e[s], c;
    if (r === void 0 && /[ \t\n\r]/.test(u)) o = !1; else if (r === void 0 && (u === "'" || u === '"')) r = u; else if (u === r) r = void 0; else if (u === "\\" && r !== "'") {
      if (s++, s >= e.length) return "";
      c = e[s];
    } else c = u;
    if (o && c !== void 0) n += c;
  }
  if (r !== void 0) return "";
  let i = O() === "windows" ? /[\\/]/ : /\//;
  return n.split(i).filter(s => s !== "").at(-1) ?? "";
}

function Ie(e, n) {
  return {
    ...e,
    ...I(e, r => r === "GIT_SSH_COMMAND" || r === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: n
  };
}

function jqn(e, n, {strictHostKeys: r = !0} = {}) {
  let {chosen: o, named: i} = J(e, n), s = Rt(i === void 0 ? "ssh" : yt(e, i), r);
  if (s === void 0 || s === Ne && At(o)) return {
    command: o,
    env: e
  };
  let u = `${o} ${s}`;
  return {
    command: u,
    env: Ie(e, u)
  };
}

function J(e, n) {
  let r = W(_A(e, "GIT_SSH_COMMAND")) ?? W(n), o = W(_A(e, "GIT_SSH"));
  return {
    chosen: r ?? co([ o ?? "ssh" ]),
    named: r !== void 0 ? wt(r) : o
  };
}

function Z$s(e, n) {
  let r = _A(e, "GIT_SSH_VARIANT"), {chosen: o, named: i} = J(e, n);
  return (r === void 0 || r === "auto") && i !== void 0 && ![ "ssh", "plink", "tortoiseplink" ].includes(Ce(i)) ? o : void 0;
}

async function eFs(e, n) {
  if (O() !== "windows") return e;
  let r = _A(e, "GIT_SSH_COMMAND");
  if (r !== void 0) return r.trim() === "" ? e : jqn(e, void 0, {
    strictHostKeys: !1
  }).env;
  let o = await n([ "config", "--null", "--get", "core.sshCommand" ]), i = o.exitCode === 0 && o.stdout.includes("\0") ? nt(o.stdout, "\0") : void 0;
  if (i?.trim() === "") return e;
  return jqn(e, i, {
    strictHostKeys: !1
  }).env;
}

function W(e) {
  return e !== void 0 && e.trim() !== "" ? e : void 0;
}

function yt(e, n) {
  let r = _A(e, "GIT_SSH_VARIANT");
  if (r !== void 0 && r !== "auto") return r === "plink" ? "plink" : [ "putty", "tortoiseplink", "simple" ].includes(r) ? "other" : "ssh";
  let o = Ce(n);
  return o === "ssh" || o === "plink" ? o : "other";
}

function Ce(e) {
  return he(e.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "");
}

function At(e) {
  let n = e.trim().match(/^(?:"[^"]*"|'[^']*'|\S+)/)?.[0] ?? "";
  return /(?:^|\s)-batch(?:\s|$)/.test(e.trim().slice(n.length));
}

function wt(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}

var Pt = [ "-c", "protocol.ext.allow=never", "-c", "protocol.fd.allow=never", "-c", "protocol.git.allow=never", "-c", "protocol.ftp.allow=never", "-c", "protocol.ftps.allow=never" ];

function Gt(e) {
  return {
    ...e,
    ...I(e, n => n === "GIT_ALLOW_PROTOCOL"),
    GIT_ALLOW_PROTOCOL: void 0
  };
}

function vt(e) {
  let n = _A(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return [ "https", "http", "ssh", "file" ].filter(o => !r.has(o)).flatMap(o => [ "-c", `protocol.${o}.allow=never` ]);
}

function Lt(e) {
  return [ ...Pt, ...vt(e) ];
}

function Ft(e = Egt(kt()), n) {
  let r = Lt(e), o = _A(e, "GIT_SSH_VARIANT"), i = o === void 0 || o === "auto" ? {
    ...e,
    ...I(e, s => s === "GIT_SSH_VARIANT"),
    GIT_SSH_VARIANT: DMo(n.variant, J(e, n.command).chosen)
  } : e;
  return {
    pinArgs: r,
    inCheckoutArgs: [ ...xn, ...lje, ...r ],
    env: {
      ...Ie(Gt(i), fln(OXe(), jqn(i, n.command).command)),
      ...I(e, (s, u) => Object.hasOwn(A, s) && u !== s),
      ...A
    }
  };
}

function kt() {
  let e = new Set(Uqn), n = process.env;
  return {
    ...n,
    ...I(n, r => e.has(r)),
    ...Object.fromEntries([ ...e ].map(r => [ r, void 0 ]))
  };
}

function eEe(e, n) {
  let r = Ft(void 0, n);
  return {
    ...r,
    env: {
      ...r.env,
      GIT_CEILING_DIRECTORIES: Re(V(e))
    }
  };
}

function Wqn(e) {
  let n = {};
  for (let r of [ ...Object.keys(gX), "GIT_CEILING_DIRECTORIES" ]) {
    let o = e[r];
    if (o !== void 0) n[r] = o;
  }
  return n;
}

function Re(e) {
  let n = vMr(K(e));
  if (n === null) throw new x(`Cannot run git under ${K(e)}: its path contains "${H}", which git's discovery ceiling (a "${H}"-separated list) cannot express. Use a location without "${H}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
  return n;
}

async function kgt(e, n) {
  let r = V(e);
  return await mt(r, {
    recursive: !0
  }), {
    cwd: r,
    env: {
      ...n,
      GIT_CEILING_DIRECTORIES: Re(V(r))
    }
  };
}

var Mt = 1e3, Dt = 60;

function zqn(e, {abortSignal: n, timeout: r = 10 * Dt * Mt, input: o, stdio: i = [ "ignore", "pipe", "pipe" ], useToolMemoryCgroup: s} = {}) {
  n?.throwIfAborted();
  using u = vh`exec: ${e.slice(0, 200)}`;
  try {
    let c = RFs(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: r,
      cwd: KMr(),
      stdio: i,
      reject: !1,
      input: o,
      useToolMemoryCgroup: s
    });
    if (!c.stdout) return null;
    return c.stdout.trim() || null;
  } catch {
    return null;
  }
}

var Y = 1e3, z = 60, EOe = "/proc/self/fd/3";

function it(e, n, r = {
  timeout: 10 * z * Y,
  preserveOutputOnError: !0,
  useCwd: !0
}) {
  return Le(() => ft(e, n, {
    allowRepoGitHooks: r.allowRepoGitHooks,
    allowGitTerminalPrompt: r.allowGitTerminalPrompt,
    abortSignal: r.abortSignal,
    timeout: r.timeout,
    preserveOutputOnError: r.preserveOutputOnError,
    cwd: r.cwd ?? (r.useCwd && !lL() ? KMr() : void 0),
    env: r.env,
    extendEnv: r.extendEnv,
    stdin: r.stdin,
    input: r.input,
    stdout: r.stdout,
    stderr: r.stderr,
    maxBuffer: r.maxBuffer,
    stripFinalNewline: r.stripFinalNewline,
    useToolMemoryCgroup: r.useToolMemoryCgroup,
    toolCgroupClass: r.toolCgroupClass,
    waitForExitAfterKill: r.waitForExitAfterKill,
    inheritFd: r.inheritFd
  }));
}

async function Le(e) {
  try {
    return await e();
  } catch (n) {
    return d(n), {
      stdout: "",
      stderr: "",
      code: 1,
      error: j(n).message
    };
  }
}

function ft(e, n, r) {
  return Le(() => r === void 0 ? ve(e, n) : ve(e, n, r));
}

function xe(e) {
  if (e <= 1) return;
  try {
    process.kill(-e, "SIGTERM");
  } catch {}
}

var $t = 6e3, Bt = 5e3;

function Ht(e, n, r, o, i) {
  let s, u = !1, c = () => {
    if (e.exitCode !== null || e.signalCode !== null) return;
    Promise.resolve().then(() => o(n)).catch(() => !1).then(p => {
      if (u) return;
      if (!p) {
        i.abort(r.reason);
        return;
      }
      s = setTimeout((f, g, {stdout: _, stderr: C}) => {
        f.abort(g), _?.destroy(), C?.destroy();
      }, Bt, i, r.reason, e);
    });
  };
  if (r.aborted) c(); else r.addEventListener("abort", c, {
    once: !0
  });
  return () => {
    u = !0, r.removeEventListener("abort", c), clearTimeout(s);
  };
}

async function Wt(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await We(new Promise(r => e.once("exit", () => r())), n);
}

function ye(e) {
  return E(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === !0 || e?.name === "MaxBufferError";
}

var w = {
  cwd: "execFileNoThrow spawn rejected: null byte in cwd",
  file: "execFileNoThrow spawn rejected: null byte in executable path",
  argv: "execFileNoThrow spawn rejected: null byte in argv",
  envName: "execFileNoThrow spawn rejected: null byte in env name",
  envValue: "execFileNoThrow spawn rejected: null byte in env value"
};

function Vt(e, n, r, o, i, s) {
  let u = `the runtime rejected ${Fe(be(e))} because`;
  if (typeof r === "string" && r.includes("\0")) return {
    telemetry: w.cwd,
    local: `${u} the working directory contains a null byte (\\0)`
  };
  if (e.includes("\0")) return {
    telemetry: w.file,
    local: `${u} the executable path contains a null byte (\\0)`
  };
  let c = n.findIndex(_ => typeof _ === "string" && _.includes("\0"));
  if (c !== -1) return {
    telemetry: w.argv,
    local: `${u} the argument at index ${c} (zero-based) contains a null byte (\\0)`
  };
  let p = Object.entries({
    ...i,
    ...o
  }).filter(([, _]) => _ !== void 0), f = p.find(([_]) => _.includes("\0"));
  if (f !== void 0) return {
    telemetry: w.envName,
    local: `${u} the name of environment variable ${Pe(f[0])} contains a null byte (\\0)${Ae(f, s)}`
  };
  let g = p.find(([, _]) => typeof _ === "string" && _.includes("\0"));
  return g && {
    telemetry: w.envValue,
    local: `${u} the value of environment variable ${Pe(g[0])} contains a null byte (\\0)${Ae(g, s)}`
  };
}

function Ae([e, n], r) {
  return r[e] === n ? "; every program this process starts will fail the same way until that variable is removed from its environment" : " (in the env passed for this command)";
}

var we = 200;

function jt(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}

function Fe(e) {
  return Wi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

function Pe(e) {
  let n = e.indexOf("="), r = n === -1 ? e : e.slice(0, n), o = r.length > we, i = `"${Fe(o ? r.slice(0, we) : r)}"${o ? "\u2026" : ""}`;
  return n === -1 ? i : `${i} (then '=' and ${jt(e.length - n - 1)}, not shown)`;
}

var Kt = new Set([ "EPIPE", "ECONNRESET", "ENOTCONN", "EOF" ]);

function Jt(e) {
  let n = {}, r;
  try {
    r = e.stdin;
  } catch {
    return n;
  }
  if (!r) return n;
  return r.removeAllListeners("error"), r.on("error", o => {
    let i = E(o) ?? "unknown";
    if (Kt.has(i)) return;
    n.truncatedBy ??= i, e.kill();
  }), n;
}

function Yt(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n);
}

function zt(e, n) {
  if (!Ms(n) || n.code === void 0 || typeof n.syscall !== "string" || !n.syscall.startsWith("spawn") || e.exitCode !== void 0 || e.timedOut || e.isCanceled || E(e) === n.code) return;
  return `Command failed with ${n.code}: ${e.command}\n${n.message}`;
}

var Xt = 3, Zt = 1e8;

function Ge(e, n) {
  if (e instanceof Uint8Array && n === "utf8-keep-bom") return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  let r = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
  return n === "utf8-keep-bom" ? Buffer.from(r, "latin1").toString("utf8") : r;
}

async function ve(e, n, {abortSignal: r, timeout: o = 10 * z * Y, preserveOutputOnError: i = !0, cwd: s, env: u, extendEnv: c, maxBuffer: p, shell: f, stdin: g, input: _, stdout: C, stderr: L, stripFinalNewline: X, encoding: R, allowRepoGitHooks: ke, allowGitTerminalPrompt: Me, useToolMemoryCgroup: De = !0, toolCgroupClass: Ue = "helper", waitForExitAfterKill: $e = !1, onStdoutData: Z, inheritFd: q, withoutControllingTerminal: Be = !1, tellBeforeKill: F} = {
  timeout: 10 * z * Y,
  preserveOutputOnError: !0,
  maxBuffer: 1e6
}) {
  if (lL()) return {
    stdout: "",
    stderr: a$t,
    code: 126,
    error: a$t
  };
  let k = e, Q = process.env, ee = Lee(k, n, u === void 0 ? Q : c === !1 ? u : {
    ...Q,
    ...u
  }, u && "GIT_CONFIG_COUNT" in u ? u.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT, {
    allowRepoGitHooks: ke,
    allowGitTerminalPrompt: Me
  }), He = ee?.args ?? n, M = ee?.env ?? u, D = Be && O() !== "windows";
  if (D && Oy()) {
    let l = `${be(e)} was not started because Claude Code was exiting; try again after it restarts`;
    return {
      stdout: "",
      stderr: l,
      code: 1,
      error: l
    };
  }
  let m, y, te, ne, U = F !== void 0 && r !== void 0 ? new AbortController : void 0, B, re = O() === "linux" ? {
    noChildLeft: !0
  } : {}, P = re, oe, S = R === "utf8-keep-bom" ? p ?? Zt : void 0;
  try {
    let l = Igt(k, He, {
      signal: U?.signal ?? r,
      timeout: o,
      cwd: s,
      env: M,
      shell: f,
      ...q === void 0 ? {
        stdin: g,
        ...C === void 0 ? {} : {
          stdout: C
        },
        ...L === void 0 ? {} : {
          stderr: L
        }
      } : {
        stdio: [ g, C, L, q ]
      },
      ...S !== void 0 ? {
        maxBuffer: Math.min(S * Xt, Ut.MAX_STRING_LENGTH)
      } : p === void 0 ? {} : {
        maxBuffer: p
      },
      ...X === void 0 ? {} : {
        stripFinalNewline: X
      },
      ...R !== void 0 && R !== "utf8" && {
        encoding: "latin1"
      },
      ...c === void 0 ? {} : {
        extendEnv: c
      },
      ...De ? Dl(Ue) : {},
      ...D && {
        detached: !0
      },
      reject: !1
    });
    if (P = l.pid === void 0 ? re : {}, F !== void 0 && r !== void 0 && U !== void 0 && l.pid !== void 0) ne = Ht(l, l.pid, r, F, U);
    if (y = D ? l.pid : void 0, y !== void 0) {
      let T = y, h = () => xe(T), N = bt(h), b = wX(h, {
        alwaysLast: !0
      });
      te = () => {
        N(), b();
      };
    }
    if (l.once("error", T => {
      oe = T;
    }), B = _ === void 0 ? void 0 : Jt(l), _ !== void 0 && l.pid !== void 0) l.stdin?.end(_);
    if (Z && l.pid !== void 0) l.stdout?.on("data", T => {
      try {
        Z(T.toString());
      } catch (h) {
        d(h);
      }
    });
    if (m = await l, $e && m.exitCode === void 0 && (r?.aborted === !0 || m.timedOut)) await Wt(l, $t);
  } catch (l) {
    let T = l.message;
    if (Ms(l)) return t(`execFileNoThrow spawn failed: ${E(l)} ${T}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      ...P
    }; else if (ye(l)) return t(`execFileNoThrow maxBuffer exceeded: ${T}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      maxBufferExceeded: !0
    }; else {
      let h = process.env, N = E(l) === "ERR_INVALID_ARG_VALUE" ? Vt(k, n, s, M, c === !1 && M !== void 0 ? void 0 : h, h) : void 0;
      if (N) t(`execFileNoThrow spawn refused: ${N.local}`, {
        level: "error"
      });
      let b = j(l);
      d(Je(N ? _e(b, N.telemetry) : b, N?.telemetry ?? "execFileNoThrow unexpected rejection"));
    }
    return {
      stdout: "",
      stderr: "",
      code: 1
    };
  } finally {
    if (ne?.(), te?.(), y !== void 0 && (m === void 0 || m.exitCode === void 0)) xe(y);
  }
  if (B?.truncatedBy !== void 0) {
    let l = `stdin write failed: ${B.truncatedBy}`;
    return t(`execFileNoThrow ${l}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      error: l
    };
  }
  let G = Ge(m.stdout, R), v = Ge(m.stderr, R);
  if (S !== void 0 && (G.length > S || v.length > S)) return i ? {
    stdout: G.slice(0, S),
    stderr: v.slice(0, S),
    code: 1,
    error: `Command failed: ${m.command}\nmaxBuffer exceeded`,
    maxBufferExceeded: !0
  } : {
    stdout: "",
    stderr: "",
    code: 1,
    maxBufferExceeded: !0
  };
  if (!m.failed) return {
    stdout: G,
    stderr: v,
    code: 0,
    exitCode: 0
  };
  let ie = ye(m) ? {
    maxBufferExceeded: !0
  } : {}, se = m.timedOut ? {
    timedOut: !0
  } : {};
  if (!i) return {
    stdout: "",
    stderr: "",
    code: m.exitCode ?? 1,
    exitCode: m.exitCode,
    ...ie,
    ...se,
    ...P
  };
  let ce = m.exitCode ?? 1;
  return {
    stdout: G,
    stderr: v,
    code: ce,
    error: zt(m, oe) ?? Yt(m, ce),
    exitCode: m.exitCode,
    ...ie,
    ...se,
    ...P
  };
}

export { ZNt, dln, q$s, SMr, $qn, MMo, Y$s, X$s, cln, e$t, J$s, xn, Rb, mX, ije, Fqn, wgt, Uqn, fme, uln, As, Bqn, wMr, vMr, vgt, mme, pln, EMr, aje, kMr, HMo, Lee, gX, Q$s, Egt, _A, Aj, lje, fln, OXe, DMo, jqn, Z$s, eFs, eEe, Wqn, kgt, zqn, EOe, it, ft };
