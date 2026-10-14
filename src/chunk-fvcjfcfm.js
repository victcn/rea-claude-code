// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ln, ul } from "./chunk-ddr690nj.js";

import { K, gM, B } from "./chunk-3pqddg8f.js";

import { Bl, le } from "./chunk-cqgvwwgb.js";

import { se, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { YMr } from "./chunk-0pmh7awy.js";

import { cM } from "./chunk-zx69jgxc.js";

import { O } from "./chunk-1xnsr4dy.js";

import { homedir as c } from "os";

import { dirname as f, extname as P, isAbsolute as b, join as x, normalize as u, posix as A, relative as w, resolve as v, sep as S, win32 as _ } from "path";

import * as s from "path/win32";

class h {
  shellConfig=null;
  powerShellProvider=null;
  powerShellPath=null;
  resolvedPowerShellPath=void 0;
  gitBashPath=void 0;
  windowsShellLauncherUsable=null;
  warnedShortTmpDir=!1;
}

var p = new K(() => new h);

function AOe() {
  return p.of(B().host);
}

function Yqn() {
  if (O() === "windows") {
    let e = bX();
    if (e) process.env.SHELL = e, t(`Using bash path: "${e}"`); else t("Git Bash not found; BashTool will be unavailable");
  }
}

function bX() {
  let e = AOe();
  if (e.gitBashPath === void 0) e.gitBashPath = m();
  return e.gitBashPath;
}

function m() {
  let {existsSync: e} = se();
  if (a.CLAUDE_CODE_GIT_BASH_PATH) {
    let i = s.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(), o = [ "bash.exe", "sh.exe", "bash", "sh" ].includes(i);
    if (o && e(a.CLAUDE_CODE_GIT_BASH_PATH)) return a.CLAUDE_CODE_GIT_BASH_PATH;
    t(`CLAUDE_CODE_GIT_BASH_PATH "${a.CLAUDE_CODE_GIT_BASH_PATH}" ${o ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`, {
      level: "warn"
    });
  }
  let r = [ "C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe" ];
  for (let i of r) if (e(i)) return i;
  let n = YMr("git");
  if (n) {
    let i = s.join(n, "..", "..", "bin", "bash.exe");
    if (e(i)) return i;
  }
  return null;
}

function Xqn(e, r) {
  if (!s.isAbsolute(r)) return;
  let n = s.dirname(r), i = Object.keys(e).find(l => l.toUpperCase() === "PATH") ?? "PATH", o = e[i];
  e[i] = o ? n + s.delimiter + o : n;
}

function Jqn(e) {
  let r = e.trim(), n = "", i = 0;
  while (i < r.length) {
    let o = r[i];
    if (o === '"' || o === "'") {
      let l = r.indexOf(o, i + 1);
      if (l === -1) {
        n += r.slice(i + 1), i = r.length;
        break;
      }
      n += r.slice(i + 1, l), i = l + 1;
    } else if (o === "\\" && i + 1 < r.length) n += r[i + 1], i += 2; else if (/\s/.test(o)) break; else n += o, 
    i++;
  }
  return n.endsWith(".sh") ? `bash ${e}` : e;
}

var lM = cM(e => {
  if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
  let r = e.match(/^([A-Za-z]):[/\\]/);
  if (r) return "/" + r[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
  return e.replaceAll("\\", "/");
}, e => e, 500), Nee = cM(e => {
  if (e.startsWith("//")) return e.replaceAll("/", "\\");
  let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
  if (r) {
    let i = r[1].toUpperCase(), o = e.slice(("/cygdrive/" + r[1]).length);
    return i + ":" + (o || "\\").replaceAll("/", "\\");
  }
  let n = e.match(/^\/([A-Za-z])(\/|$)/);
  if (n) {
    let i = n[1].toUpperCase(), o = e.slice(2);
    return i + ":" + (o || "\\").replaceAll("/", "\\");
  }
  return e.replaceAll("/", "\\");
}, e => e, 500);

class nEe extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError";
  }
}

function bln(e) {
  if (e.includes("\0")) throw new nEe;
}

function ot(e, r) {
  let n = g(e, r ?? Bl());
  if (n === null) throw new gM;
  return n;
}

function g(e, r) {
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (r !== null && typeof r !== "string") throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if (bln(e), r !== null) bln(r);
  let n = e.trim();
  if (!n) return r === null ? null : Ln(u(r));
  if (n === "~") return Ln(c());
  if (n.startsWith("~/")) return Ln(x(c(), n.slice(2)));
  let i = n;
  if (O() === "windows" && n.match(/^\/[a-z]\//i)) try {
    i = Nee(n);
  } catch {
    i = n;
  }
  if (b(i)) return Ln(u(i));
  return r === null ? null : Ln(v(r, i));
}

class Cgt extends Error {
  constructor() {
    super('Path ends in white space once its "." and ".." are resolved');
    this.name = "UnstablePathError";
  }
}

function xv(e, r) {
  let n = ot(e, r);
  if (ot(n, r) !== n) throw new Cgt;
  return n;
}

function yT(e, r) {
  try {
    return g(e, r ?? Bl());
  } catch {
    return null;
  }
}

function n$t(e) {
  let r = w(le(), e);
  return r.startsWith("..") ? e : r;
}

function sq(e) {
  let r = ot(e);
  if (ul(r)) return f(r);
  try {
    if (se().statSync(r).isDirectory()) return r;
  } catch {}
  return f(r);
}

function sD(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}

function Os(e) {
  let r = c();
  if (e === r) return "~";
  if (e.startsWith(r + S)) return "~" + e.slice(r.length);
  return e;
}

function PG(e) {
  let r = u(e);
  if (O() === "windows") return r.replaceAll("\\", "/");
  return r;
}

function sx(e) {
  return P(e).toLowerCase() === ".ipynb";
}

function OMr(e, r = "linux") {
  if ((r === "win32" ? _.isAbsolute : A.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || r === "win32" && e.startsWith("~\\")) return d(c(), e.slice(2), r);
  if (r === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return d(le(), e, r);
}

function d(e, r, n) {
  if (r === "") return e;
  if (n === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + r;
  return e + (n === "win32" ? "\\" : "/") + r;
}

export { AOe, Yqn, bX, Xqn, Jqn, lM, Nee, nEe, bln, ot, Cgt, xv, yT, n$t, sq, sD, Os, PG, sx, OMr };
