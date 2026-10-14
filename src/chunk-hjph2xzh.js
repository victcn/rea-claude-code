// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _, Y, se, En, t } from "./chunk-kawq2919.js";

import { hq, z4n } from "./chunk-5wbhf1bk.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { W } from "./chunk-b0z4bv3v.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { qu, Rd, a } from "./chunk-j016gcgm.js";

import { p } from "./chunk-jkzenvsk.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { iEe, le } from "./chunk-cqgvwwgb.js";

import { Qh, gI } from "./chunk-4dwgr3et.js";

import { it } from "./chunk-zscnwzv2.js";

import { gn } from "./chunk-yxennhe9.js";

import { Crn, ce, ron, nIe } from "./chunk-xywp7esx.js";

import { dG } from "./chunk-hazy64h6.js";

import { Axt, sYe } from "./chunk-sqb9meyh.js";

import { dbs, Loe, qe } from "./chunk-r8a304y3.js";

import { JZo, h0e, Vnt, oKe, OJr, QZo, tes } from "./chunk-zdw25e0t.js";

import { n5 } from "./chunk-av9t4vjk.js";

import { F1 } from "./chunk-akt0hp0c.js";

import { me, St, Dd } from "./chunk-dexzwy8h.js";

import { O } from "./chunk-1xnsr4dy.js";

import { lstat as te, realpath as F } from "fs/promises";

import { homedir as y } from "os";

import { stripVTControlCharacters as ne } from "util";

import { delimiter as ae, join as m, posix as v, win32 as R } from "path";

import { join as X } from "path";

var J = p(() => St({
  timestamp: me(),
  path: Dd([ "npm-global", "npm-local", "native" ]),
  outcome: Dd([ "success", "failed" ]),
  status: me(),
  version_from: me(),
  version_to: me().nullable(),
  error_code: me().nullable()
}));

function S() {
  return X(Ee(), ".last-update-result.json");
}

function I() {
  return Fe.state("last-update-result");
}

async function rKe(e, n) {
  if (z() && n) {
    let i = await n.write(I(), _(e), {
      mode: 438 & ~process.umask()
    });
    if (!i.ok) t(`Failed to record update result: ${i.error.code}`, {
      level: "error"
    });
    return;
  }
  try {
    await gn().atomicWrite(S(), _(e));
  } catch (i) {
    t(`Failed to record update result: ${i}`, {
      level: "error"
    });
  }
}

async function tir(e) {
  let n;
  if (z() && e) {
    let i = await e.read([ I() ]);
    if (!i.ok) return t(`Failed to read update result: ${i.error.code}`, {
      level: "error"
    }), null;
    let s = i.value.items[0];
    if (!s.found) return null;
    n = Buffer.from(s.value).toString("utf8");
  } else try {
    n = await gn().read(S());
  } catch (i) {
    if (!W(i)) t(`Failed to read update result: ${i}`, {
      level: "error"
    });
    return null;
  }
  try {
    let i = J().safeParse(Y(n));
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}

import { readFile as Q } from "fs/promises";

function Z(e, n) {
  return n.includes(e.id) || e.idLike.some(i => n.includes(i));
}

class L {
  sources;
  osRelease;
  pacman;
  deb;
  rpm;
  apk;
  packageManager;
  constructor(e) {
    this.sources = e;
  }
  getOsRelease() {
    return this.osRelease ??= this.sources.readOsRelease().then(e => {
      let n = e.match(/^ID=["']?(\S+?)["']?\s*$/m), i = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
      return {
        id: n?.[1] ?? "",
        idLike: i?.[1]?.split(" ") ?? []
      };
    }, () => null);
  }
  detectPacman() {
    return this.pacman ??= this.ownsExecutable([ "arch" ], "pacman", [ "-Qo" ]);
  }
  detectDeb() {
    return this.deb ??= this.ownsExecutable([ "debian" ], "dpkg", [ "-S" ]);
  }
  detectRpm() {
    return this.rpm ??= this.ownsExecutable([ "fedora", "rhel", "suse" ], "rpm", [ "-qf" ]);
  }
  detectApk() {
    return this.apk ??= this.ownsExecutable([ "alpine" ], "apk", [ "info", "--who-owns" ]);
  }
  async ownsExecutable(e, n, i) {
    if (this.sources.platform() !== "linux") return !1;
    let s = await this.getOsRelease();
    if (s && !Z(s, e)) return !1;
    let o = await this.sources.execFileNoThrow(n, [ ...i, this.sources.execPath() ], {
      timeout: 5e3,
      useCwd: !1,
      useToolMemoryCgroup: !1
    });
    if (o.code === 0 && o.stdout) return t(`Detected ${n} installation: ${o.stdout.trim()}`), 
    !0;
    return !1;
  }
  detectHomebrew() {
    let e = this.sources.platform();
    if (e !== "macos" && e !== "linux" && e !== "wsl") return !1;
    let n = this.sources.execPath();
    if (n.includes("/Caskroom/")) return t(`Detected Homebrew cask installation: ${n}`), 
    !0;
    return !1;
  }
  getHomebrewCaskName() {
    return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
  }
  detectWinget() {
    if (this.sources.platform() !== "windows") return !1;
    let e = this.sources.execPath();
    for (let n of [ /Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i ]) if (n.test(e)) return t(`Detected winget installation: ${e}`), 
    !0;
    return !1;
  }
  detectMise() {
    let e = this.sources.execPath();
    if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return t(`Detected mise installation: ${e}`), 
    !0;
    return !1;
  }
  detectAsdf() {
    let e = this.sources.execPath();
    if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e)) return t(`Detected asdf installation: ${e}`), 
    !0;
    return !1;
  }
  getPackageManager() {
    return this.packageManager ??= this.detectPackageManager();
  }
  async detectPackageManager() {
    if (this.detectHomebrew()) return "homebrew";
    if (this.detectWinget()) return "winget";
    if (this.detectMise()) return "mise";
    if (this.detectAsdf()) return "asdf";
    if (await this.detectPacman()) return "pacman";
    if (await this.detectApk()) return "apk";
    if (await this.detectDeb()) return "deb";
    if (await this.detectRpm()) return "rpm";
    return "unknown";
  }
}

var ee = new K(() => new L({
  platform: O,
  readOsRelease: () => Q("/etc/os-release", "utf8"),
  execFileNoThrow: it,
  execPath: () => process.execPath || process.argv[0] || ""
}));

function b() {
  return ee.of(B().host);
}

function D() {
  return b().detectPacman();
}

function E() {
  return b().detectDeb();
}

function T() {
  return b().detectRpm();
}

function H() {
  return b().detectApk();
}

function SCn() {
  return b().detectHomebrew();
}

function Wnt() {
  return b().getHomebrewCaskName();
}

function U() {
  return b().detectWinget();
}

function j() {
  return b().detectMise();
}

function N() {
  return b().detectAsdf();
}

function m0e() {
  return b().getPackageManager();
}

function ie() {
  let e = process.argv[1] || "", n = process.execPath || process.argv[0] || "";
  if (O() === "windows") e = e.split(R.sep).join(v.sep), n = n.split(R.sep).join(v.sep);
  return [ e, n ];
}

async function oe() {
  let [e, n] = ie();
  if (qu()) {
    let l = Ee().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (n.startsWith(l)) return "npm-local";
    if (n.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (SCn() || U() || j() || N() || await D() || await E() || await T() || await H()) return "package-manager";
    return "native";
  }
  if (JZo()) return "npm-local";
  if ([ "/usr/local/lib/node_modules", "/usr/lib/node_modules", "/opt/homebrew/lib/node_modules", "/opt/homebrew/bin", "/usr/local/bin", "/.nvm/versions/node/" ].some(l => e.includes(l))) return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let s = await gI("npm config get prefix", {
    reject: !1
  }), o = s.exitCode === 0 ? s.stdout.trim() : null;
  if (o && e.startsWith(o)) return "npm-global";
  return "unknown";
}

class G {
  attempted=!1;
}

var V = new K(() => new G);

function IJr() {
  return V.of(B().host).attempted;
}

async function g0e() {
  return V.of(B().host).attempted = !0, await oe();
}

async function re() {
  if (qu()) {
    try {
      return await F(process.execPath);
    } catch {}
    try {
      let e = await Rd("claude");
      if (e) return e;
    } catch {}
    try {
      return await se().stat(m(y(), ".local/bin/claude")), m(y(), ".local/bin/claude");
    } catch {}
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}

function ue() {
  try {
    if (qu()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}

async function de() {
  let e = se(), n = [], i = m(y(), ".claude", "local");
  if (await h0e()) n.push({
    type: "npm-local",
    path: i
  });
  let s = [ "@anthropic-ai/claude-code" ];
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") s.push({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.PACKAGE_URL);
  let o = await it("npm", [ "-g", "config", "get", "prefix" ], {
    cwd: iEe(le(), y())
  });
  if (o.code === 0 && o.stdout) {
    let r = o.stdout.trim(), h = O() === "windows", w = h ? m(r, "claude") : m(r, "bin", "claude"), k = !1;
    try {
      await e.stat(w), k = !0;
    } catch {}
    if (k) {
      let d = !1;
      try {
        if ((await F(w)).includes("/Caskroom/")) d = SCn();
      } catch {}
      if (!d) {
        let f = !1;
        for (let x of s) {
          let P = h ? m(r, "node_modules", x) : m(r, "lib", "node_modules", x);
          try {
            await e.stat(P), f = !0;
            break;
          } catch {}
        }
        if (f) n.push({
          type: "npm-global",
          path: w
        });
      }
    } else for (let d of s) {
      let f = h ? m(r, "node_modules", d) : m(r, "lib", "node_modules", d);
      try {
        await e.stat(f), n.push({
          type: "npm-global-orphan",
          path: f
        });
      } catch {}
    }
  }
  let l = m(y(), ".local", "bin", "claude");
  try {
    await e.stat(l), n.push({
      type: "native",
      path: l
    });
  } catch {}
  if (ce().installMethod === "native") {
    let r = m(y(), ".local", "share", "claude");
    try {
      if (await e.stat(r), !n.some(h => h.type === "native")) n.push({
        type: "native",
        path: r
      });
    } catch {}
  }
  return n;
}

function pe(e, n) {
  let i = O() === "windows", s = n;
  if (i) s = n.split(R.sep).join(v.sep).toLowerCase();
  return e.some(o => {
    let l = o;
    if (i) l = o.split(R.sep).join(v.sep).toLowerCase();
    let c = l.replace(/\/+$/, ""), r = o.replace(/[/\\]+$/, "");
    return c === s || r === "~/.local/bin" || r === "$HOME/.local/bin";
  });
}

async function fe(e) {
  let n = [], i = Crn();
  if (i) n.push({
    issue: `otelHeadersHelper is configured but its last invocation failed: ${hq(i, z4n)}`,
    fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable."
  });
  let s = ce();
  if (e === "development") return n;
  if (e === "native") {
    let c = (a.PATH || "").split(ae), r = y(), h = m(r, ".local", "bin"), w = m(n5(), "claude");
    if (!await Axt(w) && !await sYe(w).catch(() => !1)) n.push({
      issue: `${w} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`,
      fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${w} and run \`claude update\`.`
    });
    if (!pe(c, h)) if (O() === "windows") {
      let d = h.split(v.sep).join(R.sep);
      n.push({
        issue: `Native installation exists but ${d} is not in your PATH`,
        fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal."
      });
    } else {
      let d = Vnt(), x = oKe()[d], P = x ? x.replace(y(), "~") : "your shell config file";
      n.push({
        issue: "Native installation exists but ~/.local/bin is not in your PATH",
        fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${P} then open a new terminal or run: source ${P}`
      });
    }
  }
  if (!Le(process.env.DISABLE_INSTALLATION_CHECKS)) {
    if (e === "npm-local" && s.installMethod !== "local") n.push({
      issue: `Running from local installation but config install method is '${s.installMethod ?? "not set"}'`,
      fix: "Consider using native installation: `claude install`"
    });
    if (e === "native" && s.installMethod !== "native") n.push({
      issue: `Running native installation but config install method is '${s.installMethod ?? "not set"}'`,
      fix: "Run `claude install` to update configuration"
    });
  }
  if (e === "npm-global" && await h0e()) n.push({
    issue: "Local installation exists but not being used",
    fix: "Consider using native installation: `claude install`"
  });
  let o = await OJr(), l = await QZo();
  if (e === "npm-local") {
    if (!await Rd("claude") && !l) if (o) n.push({
      issue: "Local installation not accessible",
      fix: `Alias exists but points to invalid target: ${o}. Update alias: alias claude="~/.claude/local/claude"`
    }); else n.push({
      issue: "Local installation not accessible",
      fix: 'Create alias: alias claude="~/.claude/local/claude"'
    });
  }
  return n;
}

async function ge() {
  return null;
}

function he() {
  if (!qe.isSandboxingEnabled()) return [];
  if (qe.canMaskCredentialWarningFire()) qe.checkDependencies();
  let e = qe.getMaskCredentialWarning();
  if (!e) return [];
  return e.split(" \xb7 ").map(n => {
    if (n.includes("have an empty injectHosts")) return {
      issue: n.replace(/\.\s*If the adapter forced this.*$/, ""),
      fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry"
    };
    if (n.includes("degrade to deny on macOS")) return {
      issue: n.replace(/\.\s*Note that switching them.*$/, ""),
      fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the GrowthBook policy; ignored if managed settings pin the filesystem layer), or remove the mask entries \u2014 a deny provides no protection while the relaxed filesystem policy is active"
    };
    return {
      issue: n.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""),
      fix: Loe() ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries \u2014 TLS termination is never enabled in scrub-only mode" : "Enable sandbox.network.tlsTerminate (or remove the mask entries)"
    };
  });
}

function be() {
  if (O() !== "linux") return [];
  let e = [], n = qe.getLinuxGlobPatternWarnings();
  if (n.length > 0) {
    let i = A(n);
    e.push({
      issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
      fix: `Found ${n.length} pattern(s): ${i}. On Linux, glob patterns in Edit/Read rules will be ignored.`
    });
  }
  return e;
}

function A(e) {
  let n = e.map(o => En(ne(o)).trim()), i = n.slice(0, 3).join(", "), s = n.length - 3;
  return s > 0 ? `${i} (${s} more)` : i;
}

async function we() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return [];
  if (!qe.isSandboxingEnabled()) return [];
  let n = qe.getConfig();
  if (n === void 0 || n.filesystem.disabled) return [];
  let {denyWithinAllow: i} = qe.getFsWriteConfig(), s = await Promise.all(i.map(async l => {
    try {
      let c = await te(l);
      return c.isFile() && c.size === 0 && (c.mode & 146) === 0;
    } catch {
      return !1;
    }
  })), o = new Set(i.filter((l, c) => s[c]));
  if (o.size === 0) return [];
  return [ {
    issue: `Stale sandbox mask files left by a killed session: ${A([ ...o ])}`,
    fix: 'Remove each with `rm <path>` while no other Claude Code session is running in that project \u2014 a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start'
  } ];
}

function ye() {
  let e = qe.getUnbracketedIpv6DomainWarnings();
  if (e.length === 0) return [];
  return [ {
    issue: "Sandbox network domain entries have unreliable spellings",
    fix: `Found: ${A(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.`
  } ];
}

function xe() {
  let e = qe.getUnbracketedIpv6InjectHostWarnings();
  if (e.length === 0) return [];
  return [ {
    issue: "Sandbox credential injectHosts entries can never match their destination",
    fix: `Found: ${A(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.`
  } ];
}

async function znt({probeKeychain: e = !1, storageV5: n} = {}) {
  let i = await g0e(), s = typeof {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  } < "u" && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION ? `${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}${F1()}` : "unknown", o = await re(), l = ue(), c = await de(), r = await fe(i), {checkInstall: h} = await import("./chunk-7ekzwshy.js");
  for (let g of await h()) if (g.type === "error") r.push({
    issue: g.message,
    fix: "Run claude install to repair the installation."
  });
  if (r.push(...be()), r.push(...ye()), r.push(...xe()), r.push(...he()), r.push(...await we()), 
  e) {
    let g = await ge();
    if (g) r.push(g);
  }
  if (i === "native") {
    let g = c.filter(u => u.type === "npm-global" || u.type === "npm-global-orphan" || u.type === "npm-local"), C = O() === "windows";
    for (let u of g) if (u.type === "npm-global") {
      let M = "npm -g uninstall @anthropic-ai/claude-code";
      if ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.PACKAGE_URL && {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.PACKAGE_URL !== "@anthropic-ai/claude-code") M += ` && npm -g uninstall ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.PACKAGE_URL}`;
      r.push({
        issue: `Leftover npm global installation at ${u.path}`,
        fix: `Run: ${M}`
      });
    } else if (u.type === "npm-global-orphan") r.push({
      issue: `Orphaned npm global package at ${u.path}`,
      fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
    }); else if (u.type === "npm-local") r.push({
      issue: `Leftover npm local installation at ${u.path}`,
      fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
    });
  }
  let k = ce().installMethod || "not set", d = null;
  if (i === "npm-global") {
    if (d = (await tes()).hasPermissions, !d && !nIe()) r.push({
      issue: "Can't auto-update: npm global folder isn't writable",
      fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall"
    });
  }
  let f = dbs(), x = {
    working: f.working ?? !0,
    mode: f.mode,
    systemPath: f.mode === "system" ? f.path : null
  }, P = i === "package-manager" ? await m0e() : void 0, q = await tir(n);
  return {
    installationType: i,
    version: s,
    installationPath: o,
    invokedBinary: l,
    configInstallMethod: k,
    autoUpdates: (() => {
      let g = nIe();
      return g ? `disabled (${ron(g)})` : "enabled";
    })(),
    hasUpdatePermissions: d,
    lastUpdateResult: q,
    multipleInstallations: c,
    warnings: r,
    packageManager: P,
    ripgrepStatus: x
  };
}

export { rKe, tir, SCn, Wnt, m0e, IJr, g0e, znt };
