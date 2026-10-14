// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { readdir as f, readFile as c } from "fs/promises";

import { release as u } from "os";

function cHr() {
  try {
    return se().readFileSync("/proc/version", {
      encoding: "utf8"
    }).toLowerCase();
  } catch {
    return;
  }
}

function uHr(e) {
  return e.includes("microsoft") || e.includes("wsl");
}

var bHo = [ "macos", "wsl" ];

class l {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead=!1;
  platform;
  wslVersion=null;
  macOSMajorVersion=null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead) this.fallbackProcVersion = this.sources.readProcVersionSync(), 
    this.fallbackProcVersionRead = !0;
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos"; else if (this.sources.platform === "win32") this.platform = "windows"; else if (this.sources.platform === "linux") if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) this.platform = "wsl"; else {
        let e = this.kernelString();
        this.platform = e !== void 0 && uHr(e) ? "wsl" : "linux";
      } else this.platform = "unknown";
    } catch (e) {
      d(e), this.platform = "unknown";
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1]; else if (e.includes("microsoft")) this.wslVersion = "1"; else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    return this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : void 0, this.macOSMajorVersion;
  }
  getLinuxDistroInfo() {
    return this.linuxDistroInfo ??= this.readLinuxDistroInfo();
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = {
      linuxKernel: this.sources.osRelease()
    };
    try {
      let r = await this.sources.readOsRelease();
      for (let o of r.split(`\n`)) {
        let n = o.match(/^(ID|VERSION_ID)=(.*)$/);
        if (n && n[1] && n[2]) {
          let i = n[2].replace(/^"|"$/g, "");
          if (n[1] === "ID") e.linuxDistroId = i; else e.linuxDistroVersion = i;
        }
      }
    } catch {}
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux") return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (e) {
      t(`Failed to read /proc/version for WSL detection: ${e}`, {
        level: "error"
      });
      return;
    }
    this.platform = void 0, this.wslVersion = null;
  }
}

var m;

function s() {
  return m ??= new l({
    platform: "linux",
    env: process.env,
    readProcVersionSync: cHr,
    readProcVersion: () => c("/proc/version", {
      encoding: "utf8"
    }),
    osRelease: u,
    readOsRelease: () => c("/etc/os-release", "utf8")
  });
}

function qFs() {
  return s().prime();
}

function O() {
  return s().getPlatform();
}

function BOe(e) {
  switch (e) {
   case "darwin":
    return "macOS";

   case "win32":
    return "Windows";

   case "linux":
    return "Linux";

   default:
    return e;
  }
}

function kje() {
  return s().getWslVersion();
}

function w4n() {
  return s().getLinuxDistroInfo();
}

function YFs() {
  return s().getMacOSMajorVersion();
}

var p = [ [ ".git", "git" ], [ ".hg", "mercurial" ], [ ".svn", "svn" ], [ ".p4config", "perforce" ], [ "$tf", "tfs" ], [ ".tfvc", "tfs" ], [ ".jj", "jujutsu" ], [ ".sl", "sapling" ] ];

async function XFs(e) {
  let r = new Set;
  if (process.env.P4PORT) r.add("perforce");
  try {
    let o = e ?? se().cwd(), n = new Set(await f(o));
    for (let [i, a] of p) if (n.has(i)) r.add(a);
  } catch {}
  return [ ...r ];
}

export { cHr, uHr, bHo, qFs, O, BOe, kje, w4n, YFs, XFs };
