// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sy, xw, DO, PPe, Di, tG, Z1, Ce } from "./chunk-xywp7esx.js";

import { K, B, q, Kp, ve } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, Cn } from "./chunk-hwdwjvh8.js";

import { fMe, Je, l, E, zr, ug, W, r2, jt, $y, tm } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { qu, a } from "./chunk-j016gcgm.js";

import { _, se, dD, t } from "./chunk-kawq2919.js";

import { Tr } from "./chunk-a16yb89m.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { ft } from "./chunk-zscnwzv2.js";

import { DC, ls, yFs } from "./chunk-30n0xq4e.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { fe, dt } from "./chunk-dd98x6x7.js";

import { wn, O9, vy } from "./chunk-s2t7g8m9.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { w4e, kNe, dbe } from "./chunk-e4tjnht7.js";

import { XMr, Sje, u$t } from "./chunk-ng6g8eep.js";

import { ln } from "./chunk-ajd6by9m.js";

import { uV, Qn, Hs } from "./chunk-84yp45y8.js";

import { P4t, I4t } from "./chunk-q4g003ck.js";

import { NV } from "./chunk-t17yn24n.js";

import { O } from "./chunk-1xnsr4dy.js";

import { we } from "./chunk-m8ez8fhk.js";

var C = we(vy(), 1);

import { randomBytes as ht } from "crypto";

import { constants as Ne } from "fs";

import { access as Le, copyFile as Ae, readdir as U, rename as Me, rm as _t, stat as G, unlink as V, writeFile as Te } from "fs/promises";

import { homedir as N } from "os";

import { basename as Y, dirname as Z, join as x } from "path";

function ze(e) {
  return w4e(e) ? e.over.promise : Promise.resolve();
}

var de = 2e3;

var L = () => Math.max(de - (Date.now() - Kp()), 0);

var pe = () => L() > 0 || kNe();

var me = 1e3;

var ge = () => kNe() ? Math.max(L(), me) : L();

async function he() {
  while (pe()) await J(ge());
}

async function _e(e) {
  if (await he(), wn()) return;
  e.say(), await e.shutDown().catch(n => t(`refusal after the flag fetch hold failed (${l(n)})`, {
    level: "error"
  })), e.hard();
}

function nt(e, r, n) {
  return e.hasHeld && !ve() ? void _e(n) : r();
}

var ot = e => e;

var xe = 1;

async function nir(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++) try {
    return await e(AbortSignal.timeout(r.timeoutMs));
  } catch (s) {
    if (n = s, o >= r.attempts) break;
    r.onRetry?.(o, s);
    let u = 500 * 3 ** (o - 1);
    await J(u * (.75 + Math.random() * .5));
  }
  throw n;
}

import { existsSync as ct } from "fs";

import { open as ut, readFile as pt, stat as mt } from "fs/promises";

import { homedir as ke } from "os";

import { join as H } from "path";

import { access as it, chmod as at, writeFile as st } from "fs/promises";

import { join as D } from "path";

function j() {
  return D(Ee(), "local");
}

function Re() {
  return D(j(), "claude");
}

function JZo() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}

async function Se(e, r, n) {
  try {
    return await st(e, r, {
      encoding: "utf8",
      flag: "wx",
      mode: n
    }), !0;
  } catch (o) {
    if (E(o) === "EEXIST") return !1;
    throw o;
  }
}

async function lt() {
  try {
    let e = j();
    await se().mkdir(e), await Se(D(e, "package.json"), _({
      name: "claude-local",
      version: "0.0.1",
      private: !0
    }, null, 2));
    let r = D(e, "claude");
    if (await Se(r, `#!/bin/sh\nexec "${e}/node_modules/.bin/claude" "$@"`, 493)) await at(r, 493);
    return !0;
  } catch (e) {
    return t(`Failed to set up local package environment: ${e}`, {
      level: "error"
    }), !1;
  }
}

async function Gnt(e, r, n) {
  try {
    if (!await lt()) return m("update_apply", "update_apply_env_setup_failed"), "install_failed";
    let o = r ? r : e === "stable" ? "stable" : "latest", s = await ft("npm", [ "install", `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL}@${o}` ], {
      cwd: j(),
      maxBuffer: 1e6,
      useToolMemoryCgroup: !1
    });
    if (s.code !== 0) return m("update_apply", "update_apply_local_npm_failed"), t(`Failed to install Claude CLI package: ${s.stderr}`, {
      level: "error"
    }), s.code === 190 ? "in_progress" : "install_failed";
    return await Ce(u => ({
      ...u,
      installMethod: "local"
    }), n), g("update_apply"), "success";
  } catch (o) {
    return m("update_apply", "update_apply_local_exception"), d(o), "install_failed";
  }
}

async function h0e() {
  try {
    return await it(D(j(), "node_modules", ".bin", "claude")), !0;
  } catch {
    return !1;
  }
}

function Vnt() {
  let e = a.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}

var $e = /^\s*alias\s+claude\s*=/;

function oKe(e) {
  let r = e?.homedir ?? ke(), n = e?.env ?? process.env, o = e?.platform ?? "linux", s = e?.fileExists ?? ct, u = n.ZDOTDIR || r, k = o === "darwin" ? [ ".bash_profile", ".bash_login", ".profile" ].find(p => s(H(r, p))) ?? ".bash_profile" : ".bashrc";
  return {
    zsh: H(u, ".zshrc"),
    bash: H(r, k),
    ...o === "darwin" && {
      bashrc: H(r, ".bashrc")
    },
    fish: H(r, ".config/fish/config.fish")
  };
}

function rir(e) {
  let r = !1;
  return {
    filtered: e.filter(o => {
      if ($e.test(o)) {
        let s = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === Re()) return r = !0, !1;
        }
      }
      return !0;
    }),
    hadAlias: r
  };
}

async function wCn(e) {
  try {
    return (await pt(e, {
      encoding: "utf8"
    })).split(`\n`);
  } catch (r) {
    if (jt(r)) return null;
    if (r2(r)) return t(`Skipping ${e}: path is a directory`, {
      level: "warn"
    }), null;
    throw r;
  }
}

async function oir(e, r) {
  let n = await ut(e, "w");
  try {
    await n.writeFile(r.join(`\n`), {
      encoding: "utf8"
    }), await n.datasync();
  } finally {
    await n.close();
  }
}

var gt = new Set([ "EBUSY", "EOPNOTSUPP", "ENOTSUP", "ENOMEM", "ERR_FS_FILE_TOO_LARGE", "ENOTCONN", "EHOSTDOWN", "EHOSTUNREACH", "ETIMEDOUT" ]);

async function OJr(e) {
  let r = oKe(e);
  for (let n of Object.values(r)) {
    let o = await wCn(n).catch(s => {
      if (tm(s) || $y(s) || gt.has(E(s) ?? "")) return t(`Skipping unreadable shell config ${n} during alias scan: ${l(s)}`, {
        level: "warn"
      }), null;
      throw s;
    });
    if (!o) continue;
    for (let s of o) if ($e.test(s)) {
      let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
      if (u && u[1]) return u[1];
    }
  }
  return null;
}

async function QZo(e) {
  let r = await OJr(e);
  if (!r) return null;
  let n = e?.homedir ?? ke(), o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let s = await mt(o);
    if (s.isFile() || s.isSymbolicLink()) return r;
  } catch {}
  return null;
}

var wt = "https://downloads.claude.ai/claude-code-releases";

class De extends fMe {}

function R4t(e) {
  switch (e) {
   case "windows_running_exe_lock":
    return "update_apply_exe_locked";

   case "native_binary_missing":
    return "update_apply_native_binary_missing";

   case void 0:
    return null;
  }
}

async function ZZo() {
  try {
    let e = dbe();
    await ze(e);
    let r = await Z1("tengu_version_config", {
      minVersion: "0.0.0"
    });
    if (r.minVersion && DO({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION, r.minVersion)) {
      let n = He({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION, r.minVersion);
      nt(e, () => yt(r.minVersion), ot({
        say: () => {
          O9(), uV(n);
        },
        shutDown: () => Qn(xe),
        hard: ln
      }));
    }
  } catch (e) {
    d(e);
  }
}

function yt(e) {
  let r = He({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION, e);
  if (console.error(`\n${r}\n`), Sje() && XMr()) try {
    Tr(_(u$t({
      sessionId: q(),
      message: r,
      reason: "cli_version_too_old",
      resultIndex: null
    })) + `\n`);
  } catch (n) {
    t(`[assertMinVersion] startup failure result not written: ${l(n)}`, {
      level: "error"
    });
  }
  Hs(xe);
}

function He(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.\nA newer version (${r} or higher) is required to continue.\n\nTo update, please run:\n    claude update\n\nThis will ensure you have access to the latest features and improvements.`;
}

var bt = 3e5;

class Ve {
  lastAutoUpdateCheckAt=0;
  updateRestoreFailure=null;
  mintedPreservedInodes=new Set;
}

var vt = new K(() => new Ve);

function ne() {
  return vt.of(B().host);
}

var xt = 1e4;

function MJr() {
  return Math.max(0, xt - process.uptime() * 1e3);
}

function Knt() {
  let e = ne(), r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < bt) return t(`auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1e3)}s ago)`), 
  !0;
  return e.lastAutoUpdateCheckAt = r, !1;
}

async function vCn() {
  return (await y0e()).maxVersion;
}

async function y0e() {
  let e = await Be(), r = !1, n = e.external || void 0, o = n ? C.parse(n)?.version ?? void 0 : void 0;
  if (n && !o) t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
    level: "error"
  }), i("tengu_max_version_config_invalid", {
    raw_value: Di(n)
  });
  return {
    maxVersion: o,
    forceDowngradeEnabled: e.external_force_downgrade === !0
  };
}

function sKe(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater", s = C.parse(e);
  if (s && s.compare(r) > 0) return t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), 
  !0;
  return t(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`), 
  !1;
}

async function ees() {
  return (await Be()).external_message || void 0;
}

async function Be() {
  try {
    return await Z1("tengu_max_version_config", {});
  } catch (e) {
    return d(e), {};
  }
}

function sir(e) {
  if (!C.parse(e)) return t("update target is not a valid semver version \u2014 skip checks constrain nothing", {
    level: "error"
  }), t(`update target (first 300 chars, JSON-encoded): ${dD(JSON.stringify(e.slice(0, 300)))}`), 
  null;
  let r = dt()?.minimumVersion;
  if (r) {
    let o = C.parse(r)?.version;
    if (!o) t(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${dD(JSON.stringify(r.slice(0, 300)))}`, {
      level: "error"
    }); else if (!xw(e, o)) return `below your minimumVersion setting (${r})`;
  }
  let n = fe("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = C.parse(n)?.version;
    if (!o) t(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${dD(JSON.stringify(n.slice(0, 300)))}`, {
      level: "error"
    }); else if (!PPe(e, o)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}

function iKe(e) {
  let r = sir(e);
  if (r) t(`Skipping update to ${e}: ${r}`);
  return r !== null;
}

var X = 3e5;

function We() {
  return x(Ee(), ".update.lock");
}

function ee() {
  return Fe.state("update-lock");
}

async function Et(e) {
  let r = ee(), n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < X) return !1;
    let u = await e.statMeta(r);
    if (u.ok) {
      if (Date.now() - u.value.mtimeMs < X) return !1;
      let k = await e.delete(r);
      if (!k.ok) return t(`AutoUpdater: failed to remove stale update lock: ${k.error.code}`, {
        level: "error"
      }), !1;
    } else if (u.error.code !== "NotFound") return t(`AutoUpdater: failed to re-stat stale update lock: ${u.error.code}`, {
      level: "error"
    }), !1;
  } else if (n.error.code !== "NotFound") return t(`AutoUpdater: failed to stat update lock: ${n.error.code}`, {
    level: "error"
  }), !1;
  let o = await e.write(r, `${process.pid}`, {
    precondition: {
      type: "ifAbsent"
    },
    mode: 438 & ~process.umask()
  });
  if (o.ok) return !0;
  if (o.error.code === "AlreadyExists") return !1;
  return t(`AutoUpdater: failed to create update lock: ${o.error.code}`, {
    level: "error"
  }), !1;
}

async function Pt(e) {
  if (z() && e) return Et(e);
  let r = se(), n = We();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < X) return !1;
    try {
      let u = await r.stat(n);
      if (Date.now() - u.mtimeMs < X) return !1;
      await r.unlink(n);
    } catch (u) {
      if (!W(u)) return d(u), !1;
    }
  } catch (o) {
    if (!W(o)) return d(o), !1;
  }
  try {
    return await Te(n, `${process.pid}`, {
      encoding: "utf8",
      flag: "wx"
    }), !0;
  } catch (o) {
    let s = E(o);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT") try {
      return await r.mkdir(Ee()), await Te(n, `${process.pid}`, {
        encoding: "utf8",
        flag: "wx"
      }), !0;
    } catch (u) {
      if (E(u) === "EEXIST") return !1;
      return t(`Failed to create config dir or update lock file: ${u}`, {
        level: "error"
      }), !1;
    }
    return t(`AutoUpdater: failed to create update lock file ${n}: ${o}`, {
      level: "error"
    }), !1;
  }
}

async function St(e) {
  if (z() && e) {
    let o = await e.read([ ee() ]);
    if (!o.ok) {
      t(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
        level: "error"
      });
      return;
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let u = await e.delete(ee());
      if (!u.ok) t(`AutoUpdater: failed to release update lock: ${u.error.code}`, {
        level: "error"
      });
    }
    return;
  }
  let r = se(), n = We();
  try {
    if (await r.readFile(n, {
      encoding: "utf8"
    }) === `${process.pid}`) await r.unlink(n);
  } catch (o) {
    if (W(o)) return;
    t(`AutoUpdater: failed to release update lock file ${n}: ${o}`, {
      level: "error"
    });
  }
}

function oe() {
  let e = process.execPath.replace(/\\/g, "/"), r = (a.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || r && e.startsWith(r + "/install/global/")) return "bun";
  return a.isRunningWithBun() && !qu() ? "bun" : "npm";
}

async function Ke() {
  let e = oe() === "bun", r = null;
  if (e) r = await ft("bun", [ "pm", "bin", "-g" ], {
    cwd: N(),
    useToolMemoryCgroup: !1
  }); else r = await ft("npm", [ "-g", "config", "get", "prefix" ], {
    cwd: N(),
    useToolMemoryCgroup: !1
  });
  if (r.code !== 0) return t(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
    level: "error"
  }), null;
  return r.stdout.trim() || null;
}

async function Rt() {
  let e = await Ke();
  if (!e) return null;
  if (oe() === "bun") {
    let n = x(e, "claude");
    return {
      execPaths: [ n ],
      imagePath: n
    };
  }
  if (O() === "windows") return {
    execPaths: [ x(e, "claude.cmd"), x(e, "claude.exe") ],
    imagePath: x(e, "node_modules", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL, "bin", "claude.exe")
  };
  let r = x(e, "bin", "claude");
  return {
    execPaths: [ r ],
    imagePath: r
  };
}

async function Oe(e) {
  let r = Date.now(), n = await Rt(), o = e ? C.parse(e)?.version : void 0, s = !1, u = !1;
  for (let p of n?.execPaths ?? []) {
    let w = await ft(p, [ "--version" ], {
      abortSignal: AbortSignal.timeout(45e3),
      cwd: N(),
      useToolMemoryCgroup: !1
    }), P = C.parse(w.stdout.trim().split(/\s+/)[0])?.version;
    if (w.code === 0 && P != null && (o != null ? P === o : Sy(P, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION))) return {
      outcome: "landed",
      version: P,
      durationMs: Date.now() - r
    };
    if (w.code !== 0) s = !0, u ||= `${w.stdout}\n${w.stderr}`.includes(I4t);
  }
  return {
    outcome: u || s && n !== null && await G(n.imagePath).then(p => p.isFile() && p.size < P4t, () => !1) ? "placeholder_stub" : "inconclusive",
    durationMs: Date.now() - r
  };
}

async function tes() {
  try {
    let e = await Ke();
    if (!e) return {
      hasPermissions: !1,
      npmPrefix: null
    };
    try {
      return await Le(e, Ne.W_OK), {
        hasPermissions: !0,
        npmPrefix: e
      };
    } catch {
      return t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        hasPermissions: !1,
        npmPrefix: e
      };
    }
  } catch (e) {
    return d(e), {
      hasPermissions: !1,
      npmPrefix: null
    };
  }
}

async function qnt(e) {
  let r = e === "stable" ? "stable" : "latest", n = await ft("npm", [ "view", `${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL}@${r}`, "version", "--prefer-online" ], {
    abortSignal: AbortSignal.timeout(5e3),
    cwd: N(),
    useToolMemoryCgroup: !1
  });
  if (n.code !== 0) {
    let s = n.stdout.trim();
    if (s && C.parse(s)) {
      if (f("update_check", "update_check_npm_view_stderr_warning"), t(`npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`), 
      n.stderr) t(`npm stderr: ${n.stderr.trim()}`);
      return s;
    }
    if (m("update_check", "update_check_npm_view_failed"), t(`npm view failed with code ${n.code}`), 
    n.stderr) t(`npm stderr: ${n.stderr.trim()}`); else t("npm stderr: (empty)");
    if (n.stdout) t(`npm stdout (first 300 chars, JSON-encoded): ${dD(JSON.stringify(n.stdout.trim().slice(0, 300)))}`);
    return null;
  }
  let o = n.stdout.trim();
  if (o && !C.parse(o)) return m("update_check", "update_check_npm_view_invalid_stdout"), 
  t("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"), 
  t(`npm stdout (first 300 chars, JSON-encoded): ${dD(JSON.stringify(o.slice(0, 300)))}`), 
  null;
  return g("update_check"), o || null;
}

var Ie = 5e3, Ue = 3;

async function iir(e) {
  if (Ct()) return null;
  let r = 0;
  try {
    let o = (await nir(s => (r++, NV.get(`${wt}/${e}`, {
      timeout: Ie,
      responseType: "text",
      signal: s
    })), {
      attempts: Ue,
      timeoutMs: Ie,
      onRetry: (s, u) => {
        t(`Failed to fetch ${e} from GCS on attempt ${s}/${Ue}, retrying: ${u}`);
      }
    })).data.trim();
    if (!C.parse(o)) return m("update_check", "update_check_gcs_invalid_response"), 
    t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`), 
    t(`GCS response body (first 300 chars, JSON-encoded): ${dD(JSON.stringify(o.slice(0, 300)))}`), 
    null;
    if (r > 1) f("update_check", "update_check_gcs_retry"); else g("update_check");
    return o;
  } catch (n) {
    return m("update_check", "update_check_gcs_failed"), t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${n}`), 
    null;
  }
}

async function kt(e) {
  if (Ct()) return null;
  try {
    let r = await Qa.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
      timeout: 5e3,
      responseType: "json"
    }), n = r.data?.version, o = typeof n === "string" ? n.trim() : null;
    if (!o || !C.parse(o)) {
      m("update_check", "update_check_homebrew_invalid_version"), t(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
      let s = typeof r.data === "string" ? r.data : String(_(r.data));
      return t(`brew response (first 300 chars, JSON-encoded): ${dD(JSON.stringify(s.slice(0, 300)))}`), 
      null;
    }
    return g("update_check"), o;
  } catch (r) {
    return m("update_check", "update_check_homebrew_failed"), t(`Failed to fetch ${e} from formulae.brew.sh: ${r}`), 
    null;
  }
}

async function x4t(e, r) {
  let [n, o] = await Promise.all([ kt(e), iir(r) ]);
  return n ?? o;
}

function aKe() {
  return ne().updateRestoreFailure;
}

async function $t(e) {
  if (!e.updateRestoreFailure) return;
  if (await ie(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null) e.updateRestoreFailure = {
    originalPath: e.updateRestoreFailure.originalPath,
    preservedPath: await Ye(e, e.updateRestoreFailure.preservedPath)
  };
}

function ie(e) {
  return Le(e, Ne.F_OK).then(() => !0, () => !1);
}

function Ge() {
  let e = x(Z(process.execPath), "..", "..");
  return [ x(e, ".."), e ];
}

async function je() {
  return (await Promise.all(Ge().map(r => U(r, {
    withFileTypes: !0
  }).then(n => n.filter(o => o.isDirectory() && o.name.startsWith(".")).map(o => x(r, o.name))).catch(() => [])))).flat();
}

async function te(e, r) {
  let n = await G(r, {
    bigint: !0
  }).then(o => o.ino, () => 0n);
  return n !== 0n && e.mintedPreservedInodes.has(n);
}

async function Ye(e, r) {
  if (await te(e, r)) return r;
  let n = Y(r), o = (await je()).flatMap(s => [ x(s, n), x(s, "bin", n) ]);
  for (let s of o) if (await te(e, s)) return s;
  return null;
}

async function re(e, r) {
  await se().mkdir(Z(r));
  try {
    let o = Z(r), s = `${Y(r)}.restoring.`;
    for (let u of await U(o)) if (u.startsWith(s)) await V(x(o, u)).catch(() => {});
  } catch {}
  let n = `${r}.restoring.${ht(4).toString("hex")}`;
  try {
    await Ae(e, n);
    try {
      await ls(n, r);
    } catch (o) {
      let s = E(o);
      if (s === void 0 || !DC.has(s)) throw o;
      if (!await ie(r)) throw o;
      try {
        await Ae(n, r);
      } catch (u) {
        if (yFs.has(E(u) ?? "")) await V(r).catch(() => {});
        throw u;
      }
      await V(n).catch(() => {});
    }
  } catch (o) {
    throw await V(n).catch(() => {}), o;
  }
}

async function Ft(e, r) {
  let n = Y(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), o = new RegExp(`^${n}\\.old\\.(\\d+)$`), s = (await Promise.all(r.flatMap(p => [ p, x(p, "bin") ].map(async w => (await U(w).catch(() => [])).map(P => o.exec(P)).filter(P => P !== null).map(P => ({
    path: x(w, P[0]),
    ts: Number(P[1])
  })))))).flat(), k = (await Promise.all(s.map(async p => await te(e, p.path) ? [ p ] : []))).flat().reduce((p, w) => p === null || w.ts > p.ts ? w : p, null);
  if (!k) {
    t(`No preserved ${Y(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
    return;
  }
  try {
    await re(k.path, process.execPath), g("update_apply_heal", {
      heal_kind: b("sweep")
    }), t(`Restored missing ${process.execPath} from preserved copy ${k.path} before update attempt`);
  } catch (p) {
    let w = ug(p);
    m("update_apply_heal", "sweep_restore_failed", {
      ...w && {
        err_code: w
      },
      heal_kind: b("sweep")
    }), t(`Failed to restore missing ${process.execPath} from preserved copy ${k.path}: ${p}`);
  }
}

async function Ynt(e, r) {
  let n = ne();
  if (!await Pt(r)) return f("update_apply", "update_apply_lock_contention"), t("Another process is currently installing an update", {
    level: "error"
  }), i("tengu_auto_updater_lock_contention", {
    pid: process.pid,
    currentVersion: Di({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION)
  }), {
    status: "in_progress"
  };
  let o = n.updateRestoreFailure;
  try {
    await At();
    let s = oe();
    if (s === "npm" && a.isNpmFromWindowsPath()) return m("update_apply", "update_apply_wsl_windows_npm"), 
    t("Windows NPM detected in WSL environment", {
      level: "error"
    }), i("tengu_auto_updater_windows_npm_in_wsl", {
      currentVersion: Di({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION)
    }), console.error(`\nError: Windows NPM detected in WSL\n\nYou're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.\nThis configuration is not supported for updates.\n\nTo fix this issue:\n  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm\n  2. Make sure Linux NPM is in your PATH before the Windows version\n  3. Try updating again with 'claude update'\n`), 
    {
      status: "install_failed"
    };
    let u = e ? `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL}@${e}` : {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL, k = O() === "windows" && qu() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"), p = [];
    if (k) {
      let [, y] = Ge(), v = (await Promise.all((await je()).map(async h => await Promise.all([ U(h).catch(() => []), U(x(h, "bin")).catch(() => []) ]).then(([M, A]) => [ ...M, ...A ].some(I => /\.exe\.old\.\d+$/.test(I))) ? [ h ] : []))).flat();
      if (v.length > 0) if (await ie(process.execPath)) await Promise.all(v.map(h => _t(h, {
        recursive: !0,
        force: !0
      }).catch(S => t(`retired-dir cleanup failed: ${S}`)))); else await Ft(n, v);
      let F = Date.now(), T = await G(process.execPath, {
        bigint: !0
      }).then(h => h.ino).catch(() => 0n), R = [ process.execPath ];
      for (let h of await U(y).catch(() => [])) for (let S of [ "claude.exe", "cli.exe" ]) {
        let M = x(y, h, S);
        if (M === process.execPath) continue;
        let A = await G(M, {
          bigint: !0
        }).then(I => I.ino).catch(() => -1n);
        if (T && A === T) R.push(M);
      }
      for (let h of R) {
        let S = `${h}.old.${F}`;
        try {
          await Me(h, S);
        } catch {
          continue;
        }
        p.push([ h, S ]);
        let M = await G(S, {
          bigint: !0
        }).then(A => A.ino, () => 0n);
        if (M !== 0n) n.mintedPreservedInodes.add(M);
      }
    }
    let w = await ft(s, [ "install", "-g", u ], {
      cwd: N(),
      useToolMemoryCgroup: !1
    }), P = 0, ae = 0, Q = [];
    if (p.length && w.code !== 0) {
      for (let [v, F] of p) try {
        await Me(F, v);
      } catch (T) {
        try {
          await re(F, v), t(`Restored ${v} by copy after rename failed: ${T}`), await V(F).catch(R => t(`Failed to remove ${F} after copy-restore: ${R}`));
        } catch (R) {
          let h = await Ye(n, F), S;
          if (h !== null && h !== F) try {
            await re(h, v), ae++, t(`Restored ${v} from retired-dir copy ${h} after rename (${T}) and copy (${R}) both failed`);
            continue;
          } catch (A) {
            S = A, t(`Failed to restore ${v} from retired-dir copy ${h}: ${A}`);
          }
          let M = h === null ? b("gone") : h === F ? b("original_dir") : b("retired_dir");
          if (P++, Q.length === 0) {
            let A = ug(T), I = ug(R), ce = S === void 0 ? void 0 : ug(S);
            m("update_apply", "update_apply_restore_failed", {
              ...A && {
                rename_err_code: A
              },
              ...I && {
                copy_err_code: I
              },
              ...ce && {
                relocate_err_code: ce
              },
              preserved_state: M
            });
          }
          Q.push({
            originalPath: v,
            preservedPath: h
          }), d(Je(new De(`Failed to restore ${v} after install failure: rename: ${T}; copy: ${R}; preserved copy: ${h ?? "not found"}`), `Failed to restore executable after install failure: rename=${zr(T) ?? "unknown"} copy=${zr(R) ?? "unknown"} relocate=${S === void 0 ? h === null ? "not_found" : "skipped" : zr(S) ?? "unknown"}`));
        }
      }
      if (ae > 0 && P === 0) g("update_apply_heal", {
        heal_kind: b("relocate")
      });
      let y = new Set(p.map(([v]) => v));
      n.updateRestoreFailure = Q[0] ?? (n.updateRestoreFailure && !y.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null);
    }
    if (w.code !== 0) {
      let y = `${w.stdout} ${w.stderr}`, v = Mt(y), F = p.length === 0 ? "not_attempted" : P === 0 ? "restored" : "partial";
      if (v === "warning_only") {
        let R = await Oe(e);
        if (R.outcome === "landed") return await Ce(h => ({
          ...h,
          installMethod: "global"
        }), r), n.updateRestoreFailure = null, f("update_apply", "update_apply_npm_install_stderr_warning"), 
        t(`npm/bun exited ${w.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${R.version}): ${y}`), 
        {
          status: "success",
          probeDurationMs: R.durationMs
        };
      }
      if (i("tengu_auto_updater_npm_failure", {
        npm_exit_code: w.code,
        package_manager: c(s),
        is_bundled_mode: qu(),
        platform: tG(O()),
        windows_self_rename: c(F),
        stderr_signature: c(v),
        npm_error_code: Tt(y) ?? b("none")
      }), O() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(y) && (/\bEBUSY\b|resource busy or locked/i.test(y) || /\bEPERM\b|operation not permitted/i.test(y) && (p.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(y)))) return m("update_apply", "update_apply_exe_locked"), 
      t(`Failed to install new version of claude (running executable is locked): ${y}`, {
        level: "error"
      }), {
        status: "install_failed",
        failureHint: "windows_running_exe_lock"
      };
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(y)) return m("update_apply", "update_apply_no_permissions"), 
      t("Insufficient permissions for global npm install.", {
        level: "error"
      }), {
        status: "no_permissions"
      };
      if (v === "native_package_missing") return m("update_apply", "update_apply_native_binary_missing"), 
      t(`Failed to install new version of claude (platform-native package missing; npm should have restored the previous version): ${y}`, {
        level: "error"
      }), {
        status: "install_failed",
        failureHint: "native_binary_missing"
      };
      if (v === "warning_only") return m("update_apply", "update_apply_npm_install_stderr_warning"), 
      t(`npm/bun exited ${w.code} with only warnings on stderr but the re-probe did not confirm an advance: ${y}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
      return m("update_apply", "update_apply_npm_install_failed"), t(`Failed to install new version of claude: ${y}`, {
        level: "error"
      }), {
        status: "install_failed"
      };
    }
    let le = await Oe(e);
    switch (le.outcome) {
     case "placeholder_stub":
      {
        let y = s === "npm" ? await ft("npm", [ "config", "get", "ignore-scripts" ], {
          abortSignal: AbortSignal.timeout(1e4),
          cwd: N(),
          useToolMemoryCgroup: !1
        }) : null;
        if (y?.code === 0 && y.stdout.trim() === "true") {
          t(`${s} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`);
          break;
        }
        return m("update_apply", "update_apply_native_binary_missing"), t(`${s} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`, {
          level: "error"
        }), {
          status: "install_failed",
          failureHint: "native_binary_missing"
        };
      }

     case "inconclusive":
      t(`${s} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`);
      break;

     case "landed":
      break;
    }
    return await Ce(y => ({
      ...y,
      installMethod: "global"
    }), r), n.updateRestoreFailure = null, g("update_apply"), {
      status: "success",
      probeDurationMs: le.durationMs
    };
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === o) await $t(n);
    await St(r);
  }
}

async function At() {
  let e = oKe();
  for (let [, r] of Object.entries(e)) try {
    let n = await wCn(r);
    if (!n) continue;
    let {filtered: o, hadAlias: s} = rir(n);
    if (s) await oir(r, o), t(`Removed claude alias from ${r}`);
  } catch (n) {
    t(`Failed to remove alias from ${r}: ${n}`, {
      level: "error"
    });
  }
}

function Mt(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/postinstall\] Native package "[^"]*" not found/.test(e)) return "native_package_missing";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (/\bE5\d\d\b/i.test(e) || /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)) return "registry_5xx";
  if (/\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) || /\btimed[\s-]?out\b/i.test(e) || /\btimeout\b/i.test(e)) return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) return "ebusy";
  let r = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e), n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
  if (r && !n) return "warning_only";
  return "unknown";
}

function Tt(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : Cn(r);
}

export { nir, JZo, Gnt, h0e, Vnt, oKe, rir, wCn, oir, OJr, QZo, R4t, ZZo, MJr, Knt, vCn, y0e, sKe, ees, sir, iKe, tes, qnt, iir, x4t, aKe, Ynt };
