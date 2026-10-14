// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { ft } from "./chunk-zscnwzv2.js";

import { spawn as m } from "child_process";

import { lstat as g } from "fs/promises";

import { dirname as C, win32 as h } from "path";

var w = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths", f = 1e4, A = 5e3;

function P() {
  if (!a.LOCALAPPDATA) return;
  let e = a.LOCALAPPDATA.replace(/[\\/]+$/, "");
  return h.normalize(`${e}\\Microsoft\\WindowsApps\\`).toLowerCase();
}

function bue() {
  return a.SYSTEMROOT || a.SystemRoot || "C:\\Windows";
}

function S(e) {
  for (let i of e.split(/\r?\n/)) {
    let o = i.match(/^\s+.+?\s+REG_(?:EXPAND_)?SZ\s+(.+)$/i);
    if (o && o[1]) {
      let r = o[1].trim();
      if (r.length >= 2 && r.startsWith('"') && r.endsWith('"')) r = r.slice(1, -1);
      return r;
    }
  }
  return null;
}

function y(e, i = process.env) {
  let o = new Map;
  for (let [r, n] of Object.entries(i)) if (n !== void 0) o.set(r.toLowerCase(), n);
  return e.replace(/%([^%]+)%/g, (r, n) => o.get(n.toLowerCase()) ?? r);
}

async function Sbs(e, i = A) {
  let o = bue(), r = `${o}\\System32\\reg.exe`;
  for (let n of [ "HKCU", "HKLM" ]) {
    let u = await ft(r, [ "query", `${n}\\${w}\\${e}`, "/ve" ], {
      timeout: f,
      cwd: o
    });
    if (u.code !== 0) {
      if (u.exitCode === void 0) t(`[Claude in Chrome] ${n} App Paths query for ${e} did not run to completion: ${u.error ?? `killed at the ${f}ms bound, or reg.exe failed to spawn`}`);
      continue;
    }
    let p = S(u.stdout);
    if (!p) {
      t(`[Claude in Chrome] ${n} App Paths value for ${e} had no parseable string default; skipping`);
      continue;
    }
    let c = y(p);
    if (!/^(?:[a-zA-Z]:[\\/]|\\\\)/.test(c)) {
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: not a fully qualified path`);
      continue;
    }
    try {
      let d = g(c);
      d.catch(() => {});
      let s = await We(d, i);
      if (s === void 0) {
        t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: existence check exceeded ${i}ms`);
        continue;
      }
      if (!s.isDirectory()) return t(`[Claude in Chrome] Resolved ${e} via ${n} App Paths`), 
      c;
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: resolves to a directory`);
    } catch (d) {
      let s = E(d), l = P();
      if (l !== void 0 && h.normalize(c).toLowerCase().startsWith(l) && s !== "ENOENT" && s !== "ENOTDIR") return t(`[Claude in Chrome] Resolved ${e} via ${n} App Paths (stat-odd: ${s ?? String(d)})`), 
      c;
      t(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: ${s ?? String(d)}`);
    }
  }
  return null;
}

function wbs(e, i) {
  return new Promise(o => {
    let r;
    try {
      r = m(e, i, {
        cwd: C(e),
        detached: !0,
        stdio: "ignore",
        windowsHide: !1
      });
    } catch (n) {
      t(`[Claude in Chrome] Detached launch of ${e} failed: ${E(n) ?? String(n)}`, {
        level: "error"
      }), o(!1);
      return;
    }
    r.once("spawn", () => o(!0)), r.once("error", n => {
      t(`[Claude in Chrome] Detached launch of ${e} failed: ${E(n) ?? n.message}`, {
        level: "error"
      }), o(!1);
    }), r.unref();
  });
}

export { bue, Sbs, wbs };
