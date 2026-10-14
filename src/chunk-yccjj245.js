// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l, E, Zl } from "./chunk-b0z4bv3v.js";

import { ul } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { D } from "./chunk-hmqkrrtz.js";

import { stat as C } from "fs/promises";

import { homedir as _ } from "os";

import { join as s } from "path";

function B() {
  switch ("linux") {
   case "darwin":
    return [ "Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser" ].flatMap(r => [ s("/Applications", r), s(_(), "Applications", r) ]);

   case "win32":
    return [ "C:\\Program Files", "C:\\Program Files (x86)", s(_(), "AppData", "Local") ].flatMap(r => [ s(r, "Google", "Chrome", "Application", "chrome.exe"), s(r, "Chromium", "Application", "chrome.exe"), s(r, "Microsoft", "Edge", "Application", "msedge.exe") ]);

   default:
    return [ "/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome" ];
  }
}

async function T(e, r) {
  try {
    let o = await C(e);
    return o.isFile() && (o.mode & 73) !== 0;
  } catch (o) {
    if (r && !Zl(o)) throw o;
    return !1;
  }
}

async function v(e) {
  let r = [];
  for (let o of B()) {
    if (ul(o)) continue;
    if (await T(o, e?.strict === !0)) r.push(o);
  }
  return r;
}

import { lstatSync as O } from "fs";

import { isAbsolute as R, join as w, relative as S, sep as h } from "path";

var x = "/mnt/skills", y = "examples/artifact-emulator", l8r = "scripts/bootstrap.py", L = "tengu_cobalt_plinth_hornbeam", m = {
  base: x,
  ownerUid: 0
};

function jTn() {
  return w(m.base, y);
}

function d8r(e) {
  let r = S(m.base, e);
  if (r === "" || r === ".." || r.startsWith(`..${h}`) || R(r)) return "outside_mount";
  let o = r.split(h), p = m.base;
  for (let f = 0; f <= o.length; f++) {
    if (f > 0) p = w(p, o[f - 1]);
    let n;
    try {
      n = O(p);
    } catch (A) {
      let d = E(A);
      return d === "ENOENT" || d === "ENOTDIR" ? "missing" : "unreadable";
    }
    if (n.isSymbolicLink()) return "link";
    if (f === o.length ? !n.isFile() : !n.isDirectory()) return "wrong_type";
    if (n.uid !== m.ownerUid) return "wrong_owner";
    if ((n.mode & 18) !== 0) return "writable";
  }
  return;
}

function M() {
  if (!Jr()) return "not_hosted";
  return d8r(w(jTn(), l8r));
}

function P() {
  return U().on;
}

function U() {
  let e = Eo();
  if (e.artifactPreviewEmulator === void 0) e.artifactPreviewEmulator = I(), i("tengu_artifact_preview_emulator_gate", {
    on: e.artifactPreviewEmulator.on,
    reason: c(e.artifactPreviewEmulator.reason)
  });
  return e.artifactPreviewEmulator;
}

function I() {
  let e = a.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (e === !1) return {
    on: !1,
    reason: "pinned_off"
  };
  let r;
  try {
    r = M();
  } catch (o) {
    t(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${l(o)}`), 
    r = "unreadable";
  }
  if (r !== void 0) return {
    on: !1,
    reason: r
  };
  if (e === !0) return {
    on: !0,
    reason: "pinned_on"
  };
  return k(L, !1) === !0 ? {
    on: !0,
    reason: "flag_on"
  } : {
    on: !1,
    reason: "flag_off"
  };
}

var u = null;

function g() {
  return u !== null && !0;
}

function eAe() {
  if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === !1) return !1;
  if (VL() === "emulator") return !0;
  if (!V()) return !1;
  if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === !0) return !0;
  return W() !== "none";
}

var F = {
  on: !1
};

function VL() {
  let e = Eo();
  return e.artifactPreviewEngine ??= a.CLAUDE_CODE_ARTIFACT_PREVIEW !== !1 && F.on && H() ? "emulator" : "local_chrome", 
  e.artifactPreviewEngine;
}

function H() {
  return a.CLAUDE_CODE_REMOTE === !0 && P();
}

function V() {
  if (a.CLAUDE_CODE_REMOTE || !g()) return !1;
  return a.CLAUDE_CODE_ARTIFACT_PREVIEW ?? k("tengu_cobalt_plinth_aspen", !1);
}

function Ror() {
  if (u === null) throw Error("artifact preview is not compiled into this build");
  let {findPlaywrightChromes: e} = u, r = async o => a.BUN_CHROME_PATH ? [ a.BUN_CHROME_PATH ] : D([ ...await e(o), ...await v(o) ]);
  return {
    chromeCandidates: r,
    resolveChrome: async () => (await r())[0],
    noSandbox: u.needsNoSandbox,
    installHint: u.chromeInstallHint,
    installDir: u.chromeInstallDir
  };
}

function b() {
  return `${a.BUN_CHROME_PATH ?? ""}\n${a.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}

async function ZYs() {
  let e;
  try {
    if (a.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || a.CLAUDE_CODE_REMOTE || !g()) return;
    let r = Eo();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = {
      env: b(),
      state: "pending"
    }, r.artifactPreviewBrowserSearch = e;
  } catch (r) {
    t(`Artifact preview: could not start the browser search: ${l(r)}`);
    return;
  }
  try {
    let r = await Ror().chromeCandidates({
      strict: !0
    });
    e.state = r.length > 0 ? "found" : "none";
  } catch (r) {
    e.state = "error", t(`Artifact preview: the startup browser search failed: ${l(r)}`);
  }
}

function W() {
  let e = Eo();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch), 
  i("tengu_artifact_preview_browser", {
    verdict: c(e.artifactPreviewBrowser.verdict),
    source: c(e.artifactPreviewBrowser.source)
  });
  return e.artifactPreviewBrowser.verdict;
}

function c8r() {
  return Eo().artifactPreviewBrowser;
}

function G(e) {
  if (e === void 0) return {
    verdict: "unknown",
    source: "not_started"
  };
  if (e.env !== b()) return {
    verdict: "unknown",
    source: "stale_env"
  };
  if (e.state === "pending" || e.state === "error") return {
    verdict: "unknown",
    source: e.state
  };
  return {
    verdict: e.state,
    source: "session"
  };
}

export { l8r, jTn, d8r, eAe, VL, Ror, ZYs, c8r };
