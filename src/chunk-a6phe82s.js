// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Cee } from "./chunk-9yajep3y.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { uh, dct } from "./chunk-j4rs03r7.js";

import { Cz, R6e, ken } from "./chunk-ma4gjakn.js";

import { se, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { Qh, gI } from "./chunk-4dwgr3et.js";

import { Dt } from "./chunk-cqgvwwgb.js";

import { ud } from "./chunk-rgd61mm3.js";

import { h5e } from "./chunk-rtp0339k.js";

import { co } from "./chunk-k5d016nk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as v } from "crypto";

import { basename as W, dirname as E, isAbsolute as _, join as w } from "path";

var b4 = 800, h = {
  darwin: "osascript -e 'get POSIX path of (the clipboard as \xabclass furl\xbb)'",
  linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
  win32: [ "powershell", "-NoProfile", "-Command", "Get-Clipboard" ]
};

function B() {
  let o = ud(), r = "claude_cli_latest_screenshot.png", n = {
    darwin: w(o, "claude_cli_latest_screenshot.png"),
    linux: w(o, "claude_cli_latest_screenshot.png"),
    win32: w(o, "claude_cli_latest_screenshot.png")
  }, s = n.linux || n.linux, i = co([ s ]), f = `set fp to open for access POSIX file ${`"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`, c = "", u = O() === "wsl", p = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"', y = u ? ` || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }' 2>/dev/null` : "", F = u ? ` 2>/dev/null || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; $i = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $i) { exit 1 }; $ms = New-Object System.IO.MemoryStream; $i.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png); [Convert]::ToBase64String($ms.ToArray())' 2>/dev/null | tr -d '\\r' | base64 -d > ${i}` : "", I = {
    darwin: {
      checkImage: "osascript -e 'the clipboard as \xabclass PNGf\xbb'",
      saveImage: `osascript -e 'set png_data to (the clipboard as \xabclass PNGf\xbb)' -e ${co([ f ])} -e 'write png_data to fp' -e 'close access fp'`,
      getPath: h.darwin,
      deleteFile: `rm -f -- ${i}`
    },
    linux: {
      checkImage: `xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"${y}`,
      saveImage: `xclip -selection clipboard -t image/png -o > ${i} 2>/dev/null || wl-paste --type image/png > ${i} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${i} 2>/dev/null || wl-paste --type image/bmp > ${i}${F}`,
      getPath: h.linux,
      deleteFile: `rm -f -- ${i}`
    },
    win32: {
      checkImage: [ "powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }" ],
      saveImage: [ "powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)" ],
      getPath: h.win32,
      deleteFile: [ "powershell", "-NoProfile", "-Command", "Remove-Item -Force -LiteralPath " ]
    }
  };
  return {
    commands: I.linux || I.linux,
    screenshotPath: s
  };
}

async function b(e) {
  if (typeof e === "string") return gI(e, {
    reject: !1
  });
  let [o, ...r] = e;
  return Qh(o, r, {
    reject: !1
  });
}

async function Q7o() {
  return !1;
}

async function Jle(e) {
  let o;
  try {
    o = B();
  } catch (s) {
    return d(s), m("clipboard_read", "construct_failed"), null;
  }
  let {commands: r, screenshotPath: n} = o;
  try {
    if ((await b(r.checkImage)).exitCode !== 0) return null;
    if (await se().mkdir(E(n), {
      mode: 448
    }), (await b(r.saveImage)).exitCode !== 0) return m("clipboard_read", "save_failed"), 
    null;
    let l = await se().readFileBytes(n);
    if (l.length >= 2 && l[0] === 66 && l[1] === 77) l = await (await Cz())(l).png().toBuffer();
    let f = await R6e(l, l.length, "png", e, {
      directWebpMaxBytes: C()
    }), c = f.buffer.toString("base64"), u = dct(c);
    return b(r.deleteFile), g("clipboard_read"), {
      base64: c,
      mediaType: u,
      dimensions: f.dimensions
    };
  } catch {
    return m("clipboard_read", "read_failed"), null;
  }
}

async function D() {
  try {
    let o = h.linux || h.linux, r = await b(o);
    if (r.exitCode !== 0 || !r.stdout) return null;
    return r.stdout.trim();
  } catch (e) {
    return t(`Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), null;
  }
}

var OEt = /\.(png|jpe?g|gif|webp)$/i;

function P(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e;
}

var S = /^(?:[A-Za-z]:\\|\\\\)/;

function x(e) {
  if (O() === "wsl" && S.test(e)) return e;
  let n = `__DOUBLE_BACKSLASH_${v(8).toString("hex")}__`;
  return e.replaceAll("\\\\", n).replace(/\\(.)/g, "$1").replace(new RegExp(n, "g"), "\\");
}

function Z7o(e) {
  let o = P(e.trim()), r = x(o);
  return OEt.test(r);
}

function z9r(e) {
  let o = P(e.trim()), r = x(o);
  if (OEt.test(r)) return r;
  return null;
}

async function eZo(e, o, r) {
  let n = z9r(e);
  if (!n) return null;
  let s = n;
  if (O() === "wsl" && S.test(s)) s = await new h5e(a.WSL_DISTRO_NAME).toLocalPath(s);
  let i;
  try {
    if (_(s)) i = await r(s); else {
      let p = await D();
      if (p && s === W(p)) i = await r(p);
    }
  } catch (p) {
    return t(`Failed to read pasted image file ${s}: ${p instanceof Error ? p.message : String(p)}`, {
      level: "error"
    }), null;
  }
  if (i === "refused") return "refused";
  if (!i || i === "absent") return null;
  if (i.length === 0) return t(`Image file is empty: ${s}`, {
    level: "warn"
  }), null;
  if (i.length >= 2 && i[0] === 66 && i[1] === 77) i = await (await Cz())(i).png().toBuffer();
  let l = uh(i);
  if (l === null) return t(`Pasted path has image extension but content is not a supported image: ${s}`, {
    level: "warn"
  }), null;
  let f = l.split("/")[1] || "png", c = await R6e(i, i.length, f, o, {
    directWebpMaxBytes: C()
  }), u = c.buffer.toString("base64");
  return {
    path: s,
    base64: u,
    mediaType: `image/${c.mediaType}`,
    dimensions: c.dimensions
  };
}

function G9r(e) {
  if (e.includes("\0")) return !0;
  let o = e.slice(0, 4096);
  if (o.length < 32) return !1;
  let r = 0;
  for (let n of o) if (n === "\ufffd") r++;
  return r / o.length > .05;
}

function C() {
  return Dt() ? void 0 : ken(Cee);
}

export { b4, Q7o, Jle, OEt, Z7o, z9r, eZo, G9r };
