// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, W } from "./chunk-b0z4bv3v.js";

import { a } from "./chunk-j016gcgm.js";

import { _ } from "./chunk-kawq2919.js";

import { it } from "./chunk-zscnwzv2.js";

import { aa } from "./chunk-w4hwgefc.js";

import { execFile as Q } from "child_process";

import { constants as A } from "fs";

import { access as x, chmod as O, lstat as I, mkdir as G, readdir as Z, readFile as ee, readlink as ne, writeFile as k } from "fs/promises";

import { delimiter as te, dirname as b, isAbsolute as H, join as c, resolve as p, sep as T } from "path";

import { promisify as ie } from "util";

var w = ie(Q), oe = /^[a-zA-Z0-9_-]+$/, U = [ 2, 34 ];

function Hcn(e) {
  let n = /git version (\d+)\.(\d+)/.exec(e);
  if (!n) return null;
  return [ Number(n[1]), Number(n[2]) ];
}

function se(e) {
  let n = Hcn(e);
  if (n === null) return null;
  let [i, o] = n, [t, s] = U;
  return i > t || i === t && o >= s;
}

async function IVs(e) {
  let n = (await w("git", [ "--version" ], {
    windowsHide: !0
  })).stdout, i = se(n);
  if (i === null) e.onStatus(`[runner:git] --configure-git: could not parse git version from "${n.trim()}"; proceeding without version check`); else if (!i) {
    let [d, u] = U;
    throw Error(`--configure-git requires git >= ${d}.${u} for SSH commit signing (found: ${n.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`);
  }
  let o = c(e.baseDir, ".runner");
  await G(o, {
    recursive: !0
  });
  let t = c(o, "code-sign"), s = c(o, "commit_signing_key.pub"), r = L(e.execPath);
  await k(t, r, {
    mode: 493
  }), await O(t, 493), await k(s, "");
  let g = [ [ "user.name", "Claude" ], [ "user.email", "noreply@anthropic.com" ], [ "gpg.format", "ssh" ], [ "gpg.ssh.program", t ], [ "user.signingkey", s ], [ "commit.gpgsign", "true" ], [ "tag.gpgsign", "true" ], [ "push.negotiate", "true" ] ], h = e.gitConfigPath ? [ "--file", e.gitConfigPath ] : [ "--global" ];
  for (let [d, u] of g) await w("git", [ "config", ...h, "--replace-all", d, u ], {
    windowsHide: !0
  });
  e.onStatus(`[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${t}`);
  let f = await he(o, h, e.onStatus);
  return f.installed ? {
    shimPath: t
  } : {
    shimPath: t,
    operatorHooksPath: f.existingHooksPath
  };
}

function L(e) {
  return `#!/bin/sh\nBIN="$CLAUDE_RUNNER_CLAUDE_BIN"\n[ -n "$BIN" ] || BIN='${z(e)}'\nexec "$BIN" self-hosted-runner code-sign "$@"\n`;
}

function OVs(e, n) {
  let i = c(e, ".runner");
  return [ {
    path: c(i, "code-sign"),
    content: L(n),
    mode: 493
  }, {
    path: c(i, "commit_signing_key.pub"),
    content: "",
    mode: 420
  } ];
}

function _0r(e) {
  return Dcn(c(e, ".runner"));
}

function Dcn(e) {
  return [ [ "user.name", "Claude" ], [ "user.email", "noreply@anthropic.com" ], [ "user.signingkey", c(e, "commit_signing_key.pub") ], [ "gpg.format", "ssh" ], [ "gpg.ssh.program", c(e, "code-sign") ], [ "commit.gpgsign", "true" ], [ "tag.gpgsign", "true" ], [ "push.negotiate", "true" ], [ "core.hooksPath", c(e, "git-hooks") ] ];
}

function YYn(e, n, i) {
  let o = c(n, ".runner") + T;
  return e.map(t => {
    if (!t.path.startsWith(o)) throw Error("relocateConfigureGitArtifacts: artifact path is not under {baseDir}/.runner/");
    return {
      ...t,
      path: c(i, t.path.slice(o.length))
    };
  });
}

async function XYn() {
  try {
    let {stdout: e} = await w("git", [ "--version" ], {
      windowsHide: !0
    });
    return e;
  } catch {
    return "";
  }
}

var cBs = `#!/bin/sh\ntest "$1" = get || exit 0\nprintf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"\n`;

function uBs(e) {
  return c(e, ".runner", "git-proxy-cred");
}

function MVs(e) {
  let n = c(e, ".runner", "git-hooks");
  return [ ...Y.map(i => ({
    path: c(n, i),
    content: J
  })), ...[ "commit-msg", "prepare-commit-msg" ].map(i => ({
    path: c(n, i),
    content: q
  })) ];
}

async function HVs(e) {
  let n = e.apiBaseUrl.replace(/\/+$/, ""), i;
  try {
    i = new URL(n).host;
  } catch {
    throw Error(`--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${n}`);
  }
  let o = c(e.baseDir, ".runner");
  await G(o, {
    recursive: !0
  });
  let t = uBs(e.baseDir);
  await k(t, cBs, {
    mode: 448
  }), await O(t, 448);
  let s = e.gitConfigPath ? [ "--file", e.gitConfigPath ] : [ "--global" ], r = [ [ `credential.https://${i}.helper`, `!'${z(t)}'` ], [ `credential.https://${i}.useHttpPath`, "false" ], [ `credential.https://${i}.username`, "unused" ], [ `http.https://${i}/.proactiveAuth`, "basic" ] ];
  for (let [g, h] of r) await w("git", [ "config", ...s, "--replace-all", g, h ], {
    windowsHide: !0
  });
  return e.onStatus(`[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${i} (${t})`), 
  n;
}

var R = 1e4;

function M(e, n, i) {
  return w("git", [ "config", ...e, "--includes", "--type=path", "--get", n ], {
    windowsHide: !0,
    timeout: R,
    ...i && {
      env: i
    }
  }).then(o => o.stdout.trim(), () => "");
}

async function F(e, n) {
  let [i, o] = await Promise.all([ ae([ "--system" ], e, n), M([ "--global" ], e, n) ]);
  return {
    ...i.value !== "" && {
      system: i.value
    },
    ...i.origin !== void 0 && {
      systemOrigin: i.origin
    },
    ...o !== "" && {
      global: o
    }
  };
}

async function re(e, n) {
  let {system: i, global: o} = await F(e, n);
  return [ ...i !== void 0 ? [ "system" ] : [], ...o !== void 0 ? [ "global" ] : [] ];
}

async function ae(e, n, i) {
  let o = await w("git", [ "config", ...e, "--includes", "--show-origin", "-z", "--type=path", "--get", n ], {
    cwd: "/",
    windowsHide: !0,
    timeout: R,
    ...i && {
      env: i
    }
  }).then(s => s.stdout, () => ""), t = o.indexOf("\0");
  if (t < 0) return {
    value: o.trim()
  };
  return {
    value: o.slice(t + 1).replace(/\0$/, "").trim(),
    origin: K(o.slice(0, t))
  };
}

var K = e => e.startsWith("file:") ? e.slice(5) : e, j = e => e.length > 1 ? e.replace(/[\\/]+$/, "") : e, N = e => H(e) && p(e) === j(e);

async function ce(e) {
  let n;
  try {
    n = (await w("git", [ "config", "--system", "--includes", "--show-origin", "-z", "--list" ], {
      cwd: "/",
      windowsHide: !0,
      timeout: R,
      maxBuffer: 4194304,
      ...e && {
        env: e
      }
    })).stdout;
  } catch (t) {
    let s = t, r = E(t) ?? (s !== null && typeof s === "object" ? typeof s.signal === "string" ? `killed by ${s.signal}${s.killed === !0 ? ", timed out" : ""}` : s.code !== void 0 ? `exit ${String(s.code)}` : "error" : "error");
    return {
      files: [],
      unverifiable: `the system configuration could not be listed (${r})`
    };
  }
  let i = n.split("\0"), o = [];
  for (let t = 0; t + 1 < i.length; t += 2) {
    let s = K(i[t]);
    if (!i[t].startsWith("file:") || !N(s)) return {
      files: o,
      unverifiable: `git reports a source that is not a plainly spelled absolute file path (${fte(s)}; write [include] paths absolute, without '.' or '..' components)`
    };
    if (!o.includes(s)) o.push(s);
  }
  return {
    files: o
  };
}

async function B(e) {
  let n = e;
  for (;;) try {
    return await x(n, A.W_OK), !0;
  } catch (i) {
    if (W(i)) {
      let t = b(n);
      if (t === n) return !1;
      n = t;
      continue;
    }
    let o = process.getuid?.();
    if (o !== void 0 && o !== 0) try {
      if ((await I(n)).uid === o) return !0;
    } catch {}
    return !1;
  }
}

var v = (e, n) => n !== void 0 && n !== "" && (p(e) === p(n) || p(e).startsWith(p(n) + T));

async function DVs(e) {
  let n = e?.sessionReachable ?? B, i = e?.env ? e.env.HOME : a.HOME, o = e?.env ? e.env.PATH : a.PATH, t = [], s = (o ?? "").split(te).filter(u => {
    if (u === "" || !H(u)) return !1;
    if (v(u, i) || v(u, e?.baseDir)) return t.push(u), !1;
    return !0;
  }), r = async u => {
    for (let m of s) {
      let l = c(m, u);
      try {
        await x(l, A.X_OK);
      } catch {
        continue;
      }
      if (await y(l, n) !== void 0 || await y(m, n) !== void 0) {
        t.push(l);
        continue;
      }
      return l;
    }
    return;
  }, g = "/nonexistent-gpg";
  for (let u of [ "/bin/false", "/usr/bin/false" ]) {
    try {
      await x(u, A.X_OK);
    } catch {
      continue;
    }
    if (await y(u, n) === void 0 && await y(b(u), n) === void 0) {
      g = u;
      break;
    }
  }
  let [h, f, d] = await Promise.all([ r("gpg"), r("gpgsm"), r("ssh-keygen") ]);
  return {
    gpg: h ?? g,
    gpgsm: f ?? g,
    sshKeygen: d ?? g,
    inert: g,
    skipped: t
  };
}

function V(e, n) {
  let i = o => p(o).replace(/[\\/]+$/, "");
  return n !== void 0 && i(e) === i(n) || i(e).endsWith(c(T + ".runner", "git-hooks"));
}

async function LVs(e) {
  let n = e?.sessionReachable ?? B, i = e?.systemConfigFiles ?? ce, o = e?.env ? e.env.HOME : a.HOME;
  function t(l) {
    return e?.lifecycleHooks ? re(l, e.env) : [];
  }
  let [{system: s, systemOrigin: r, global: g}, h, f, d] = await Promise.all([ F("core.hooksPath", e?.env), t("core.sshCommand"), t("core.askPass"), t("filter.lfs.clean") ]), u = l => l !== void 0 && !V(l), m = {
    ...u(g) && {
      ignoredGlobalHooksPath: g
    },
    ...h.length > 0 && {
      sshCommandScopes: h
    },
    ...f.length > 0 && {
      askPassScopes: f
    },
    ...d.length > 0 && {
      lfsFilterScopes: d
    }
  };
  if (u(s)) {
    let l;
    if (r === void 0 || !N(r)) l = `git does not report a plainly spelled absolute file path as its origin (${fte(r ?? "")}) \u2014 cannot verify it is out of the sessions' reach`; else {
      let S = await i(e?.env);
      if (S.unverifiable !== void 0) l = `${S.unverifiable} \u2014 cannot verify it is out of the sessions' reach`; else if (!S.files.includes(r)) l = `the system configuration changed while it was being read (${fte(r)} is no longer among its files) \u2014 cannot verify it is out of the sessions' reach`; else for (let P of S.files) {
        let D = await I(P).then(() => {}, X => E(X) ?? "error"), C = D !== void 0 ? `is listed by git but cannot be found as reported (${D}) \u2014 cannot verify it is out of the sessions' reach` : await y(P, n);
        if (C !== void 0) {
          l = P === r ? `it comes from ${fte(P)}, which ${C}` : `one of the files the system configuration reads, ${fte(P)}, ${C}`;
          break;
        }
      }
    }
    if (l === void 0) if (!H(s)) l = "it is relative (git would resolve it inside each repository)"; else if (!N(s)) l = `it is not spelled as a plain absolute path (${fte(s)}) \u2014 write it without '.' or '..' components`; else if (v(s, o) || v(s, e?.baseDir)) l = "it points under the runner HOME / --base-dir, which sessions can write"; else {
      let S = await y(s, n);
      l = S !== void 0 ? `its target directory ${S}` : await le(s, n);
    }
    if (l === void 0) m.hooksPath = s; else m.ignoredSystemHooksPath = {
      value: s,
      reason: l
    };
  }
  return m;
}

var ue = 32;

async function le(e, n) {
  let i;
  try {
    i = (await Z(e)).sort();
  } catch (o) {
    return W(o) ? "its target directory does not exist" : `its target directory cannot be listed (${E(o) ?? "error"})`;
  }
  for (let o of i) {
    let t = await y(c(e, o), n);
    if (t !== void 0) return `${fte(o)} in it ${t}`;
  }
  return;
}

async function y(e, n, i = {
  hops: ue
}) {
  let o = j(e), t = o;
  for (;;) {
    if (await n(t)) return t === o ? "is writable by (or belongs to) this runner's user" : `resolves to ${fte(t)}, which this runner's user can write or owns`;
    let s;
    try {
      s = (await I(t)).isSymbolicLink();
    } catch (h) {
      if (t === o) {
        if (W(h)) return;
        return `cannot be examined (${E(h) ?? "error"})`;
      }
      return `is a link that does not resolve (${fte(t)})`;
    }
    if (!s) return;
    if (i.hops <= 0) return "is a link with too many levels of indirection";
    i.hops--;
    let r;
    try {
      r = await ne(t);
    } catch (h) {
      return `is a link that cannot be read (${E(h) ?? "error"})`;
    }
    t = p(b(t), r);
    let g = await y(b(t), n, i);
    if (g !== void 0) return i.hops <= 0 ? `is a link with too many levels of indirection (through ${fte(b(t))})` : `resolves into ${fte(b(t))}, a directory that ${g} (the target could be replaced)`;
  }
}

var ge = /^\p{Cf}$/u;

function fte(e) {
  let n = _(e), i = "";
  for (let o of n) {
    let t = o.codePointAt(0);
    if (t >= 127 && t <= 159 || t === 8232 || t === 8233 || ge.test(o)) for (let s = 0; s < o.length; s++) i += `\\u${o.charCodeAt(s).toString(16).padStart(4, "0")}`; else i += o;
  }
  return i;
}

function NVs(e, {isRoot: n, operatorSshInEnv: i = !1, askpassSource: o = "none", postSessionHook: t = !1, envHooksPath: s = !1}) {
  let r = [];
  if (e.ignoredSystemHooksPath !== void 0) {
    let g = e.ignoredSystemHooksPath;
    r.push(`[runner:warn] the system git config sets core.hooksPath=${fte(g.value)}, which is NOT applied inside lifecycle hooks because ${g.reason}. ` + (n ? "This runner runs as root, so no configuration file is out of the sessions' reach: export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment instead \u2014 and run the runner as an unprivileged user." : "Use an absolute path outside the runner's HOME/--base-dir in a root-owned file, naming a directory whose hook files are root-owned too (or export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment)."));
  }
  if (e.ignoredGlobalHooksPath !== void 0) r.push(`[runner:warn] the global git config sets core.hooksPath=${fte(e.ignoredGlobalHooksPath)}, which is NOT applied inside lifecycle hooks (checkout / post-session): every session this runner hosts can write that file. Git run by those hooks takes core.hooksPath only from the system git config (git config --system) or from a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair exported in the runner's own environment; move it there if your hooks need it. The session's own git is unaffected.`);
  if (e.sshCommandScopes !== void 0 && !i) r.push(`[runner:warn] core.sshCommand is set in the ${e.sshCommandScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks uses plain ssh unless the runner's own environment sets GIT_SSH_COMMAND (or GIT_SSH). If your hooks reach git remotes over ssh and need that command (a deploy key, a jump host), copy its value into GIT_SSH_COMMAND in the runner's environment; if they do not, no action is needed. ` + (e.sshCommandScopes.includes("global") ? "Copy only a command you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.askPassScopes !== void 0 && o !== "own") r.push(`[runner:warn] core.askPass is set in the ${e.askPassScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks takes a credential-prompt program only from the runner's own environment, as GIT_ASKPASS (an SSH_ASKPASS there is handed on as GIT_ASKPASS) or as a core.askPass GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair. ` + (o === "handedOn" ? "Here hook git will use the SSH_ASKPASS program from the runner's environment in its place. " : "") + "If your hooks get https credentials from the program core.askPass names, copy its path into GIT_ASKPASS in the runner's environment; if they do not, no action is needed. " + (e.askPassScopes.includes("global") ? "Copy only a path you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.lfsFilterScopes !== void 0 && t && e.hooksPath === void 0 && !s) r.push(`[runner:warn] git-lfs is set up in the ${e.lfsFilterScopes.join(" and ")} git config and this runner has a post-session hook. Git run inside the runner's lifecycle hooks runs no repository or global git hooks, so git-lfs's pre-push hook does not run there and a plain "git push" from the post-session hook sends LFS pointers WITHOUT their objects. The runner cannot see whether your hook already handles this: in it, run "git-lfs push <remote> <branch>" BEFORE "git push" (or "git-lfs push --all <remote> <branch>" after it), or point core.hooksPath, ${n ? "as" : "in the system git config or as"} a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment, at a root-owned directory that holds git-lfs's pre-push hook. The session's own git is unaffected.`);
  return r;
}

async function he(e, n, i) {
  let o = c(e, "git-hooks"), t;
  if (n[0] === "--file") t = await M(n, "core.hooksPath"); else {
    let s = await F("core.hooksPath");
    t = s.global ?? s.system ?? "";
  }
  if (t !== "" && !V(t, o)) return i(`[runner:git] --configure-git: core.hooksPath already set (${fte(t)}); skipping Co-authored-by hook install so existing hooks keep running for the session's own git (lifecycle ` + "hooks follow the system config / runner environment only \u2014 see " + "the lifecycle-hooks status line)"), 
  {
    installed: !1,
    existingHooksPath: t
  };
  await G(o, {
    recursive: !0
  });
  for (let s of Y) {
    let r = c(o, s);
    await k(r, J, {
      mode: 493
    }), await O(r, 493);
  }
  for (let s of [ "commit-msg", "prepare-commit-msg" ]) {
    let r = c(o, s);
    await k(r, q, {
      mode: 493
    }), await O(r, 493);
  }
  return await w("git", [ "config", ...n, "--replace-all", "core.hooksPath", o ], {
    windowsHide: !0
  }), i(`[runner:git] --configure-git: core.hooksPath=${o}`), {
    installed: !0
  };
}

var Y = [ "applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "reference-transaction", "fsmonitor-watchman", "pre-auto-gc", "post-rewrite", "sendemail-validate", "post-index-change" ], J = `#!/bin/sh\ncommon_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git\nlocal_hook="$common_dir/hooks/$(basename "$0")"\n[ -x "$local_hook" ] && exec "$local_hook" "$@"\nexit 0\n`, q = `#!/bin/sh\ncommon_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git\nlocal_hook="$common_dir/hooks/$(basename "$0")"\nif [ -x "$local_hook" ]; then\n  "$local_hook" "$@" || exit $?\nfi\nemail="$CCR_SESSION_ACCOUNT_EMAIL"\nnl='\n'\ncase "$email" in\n  ''|*'<'*|*'>'*|*"$nl"*) email='' ;;\nesac\nif [ -n "$email" ] && printf %s "$email" | LC_ALL=C grep -q '[^ -~]'; then\n  email=''\nfi\nif [ -n "$email" ]; then\n  name="\${email%%@*}"\n  git interpret-trailers --in-place \\\n    --if-exists addIfDifferent \\\n    --trailer "Co-authored-by: $name <$email>" "$1"\nfi\nexit 0\n`;

function z(e) {
  return e.replace(/'/g, "'\\''");
}

function fe(e) {
  let n = !1, i, o, t;
  for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if (r === "-Y" && e[s + 1] === "sign") n = !0, s++; else if (r === "-n") i = e[++s]; else if (r === "-f") o = e[++s]; else if (r.startsWith("-")) {
      if (e[s + 1] !== void 0 && !e[s + 1].startsWith("-")) s++;
    } else if (t === void 0) t = r;
  }
  if (!n) throw Error(`code-sign: only SSH-style signing (-Y sign) is supported; got: ${e.join(" ")}`);
  if (!t) throw Error("code-sign: no file specified to sign");
  return {
    bufferFile: p(t),
    namespace: i,
    keyFile: o
  };
}

async function de(e, n) {
  let i = n.env.CLAUDE_CODE_REMOTE_SESSION_ID || n.env.CLAUDE_RUNNER_SESSION_ID?.replace(/^session_/, "cse_"), o = n.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN, t = (n.env.ANTHROPIC_BASE_URL || n.env.SESSION_INGRESS_URL || n.env.CLAUDE_RUNNER_API_BASE_URL || "").replace(/\/+$/, "");
  if (!i || !oe.test(i)) throw Error("code-sign: CLAUDE_CODE_REMOTE_SESSION_ID (child) / CLAUDE_RUNNER_SESSION_ID (lifecycle hook) is unset or malformed \u2014 " + "is this process a descendant of a runner-spawned session or hook?");
  if (!o) throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
  if (!t) throw Error("code-sign: ANTHROPIC_BASE_URL (child) / CLAUDE_RUNNER_API_BASE_URL (lifecycle hook) is unset");
  let s = await ee(e.bufferFile, "utf8"), r = await me(), g = JSON.stringify({
    contents: s,
    source: {
      type: "git_repository"
    },
    git_object_format: r
  }), h = `${t}/v1/code/sessions/${i}/sign-commit`, f = await n.fetchFn(h, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "anthropic-version": "2023-06-01",
      "x-environment-runner-version": `shr-${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION}`,
      authorization: `Bearer ${o}`
    },
    body: g,
    ...aa({
      url: h
    }),
    signal: AbortSignal.timeout(3e4)
  });
  if (!f.ok) {
    let m = await f.text().catch(() => "");
    throw Error(`code-sign: sign-commit returned HTTP ${f.status}` + (m ? `: ${pe(m, 200)}` : ""));
  }
  let d = await f.json();
  if (!d.signature) throw Error("code-sign: response missing signature");
  let u = `${e.bufferFile}.sig`;
  return await k(u, d.signature), u;
}

async function me() {
  let {stdout: e, code: n} = await it("git", [ "rev-parse", "--show-object-format" ], {
    useCwd: !1,
    stdin: "ignore",
    stderr: "ignore",
    maxBuffer: 1048576
  });
  return n === 0 && e.trim() === "sha256" ? "sha256" : "sha1";
}

function pe(e, n) {
  return e.length > n ? e.slice(0, n) + "\u2026" : e;
}

async function $Vs(e) {
  try {
    let n = fe(e);
    await de(n, {
      env: process.env,
      fetchFn: fetch
    }), process.exit(0);
  } catch (n) {
    process.stderr.write(`${n instanceof Error ? n.message : String(n)}\n`), process.exit(1);
  }
}

export { Hcn, IVs, OVs, _0r, Dcn, YYn, XYn, cBs, uBs, MVs, HVs, DVs, LVs, fte, NVs, $Vs };
