// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import N from "process";

import { Buffer as R } from "buffer";

import z from "path";

import { fileURLToPath as we } from "url";

import { promisify as ge } from "util";

import D from "child_process";

import he, { constants as xe } from "fs/promises";

import I from "process";

import O, { constants as J } from "fs/promises";

import T from "process";

import Y from "os";

import j from "fs";

import K from "fs";

import M from "fs";

var h;

function G() {
  try {
    return M.statSync("/.dockerenv"), !0;
  } catch {
    return !1;
  }
}

function X() {
  try {
    return M.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return !1;
  }
}

function x() {
  if (h === void 0) h = G() || X();
  return h;
}

var y, q = () => {
  try {
    return K.statSync("/run/.containerenv"), !0;
  } catch {
    return !1;
  }
};

function p() {
  if (y === void 0) y = q() || x();
  return y;
}

var L = () => {
  if (T.platform !== "linux") return !1;
  if (Y.release().toLowerCase().includes("microsoft")) {
    if (p()) return !1;
    return !0;
  }
  try {
    return j.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !p() : !1;
  } catch {
    return !1;
  }
}, c = T.env.__IS_WSL_TEST__ ? L : L();

var Q = (() => {
  let r;
  return async function() {
    if (r) return r;
    let o = "/etc/wsl.conf", n = !1;
    try {
      await O.access(o, J.F_OK), n = !0;
    } catch {}
    if (!n) return "/mnt/";
    let t = await O.readFile(o, {
      encoding: "utf8"
    }), s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(t);
    if (!s) return "/mnt/";
    return r = s.groups.mountPoint.trim(), r = r.endsWith("/") ? r : `${r}/`, r;
  };
})(), V = async () => `${await Q()}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`, v = async () => {
  if (c) return V();
  return `${I.env.SYSTEMROOT || I.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
};

function m(e, r, o) {
  let n = t => Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    writable: !0
  });
  return Object.defineProperty(e, r, {
    configurable: !0,
    enumerable: !0,
    get() {
      let t = o();
      return n(t), t;
    },
    set(t) {
      n(t);
    }
  }), e;
}

import { promisify as le } from "util";

import E from "process";

import { execFile as pe } from "child_process";

import { promisify as Z } from "util";

import ee from "process";

import { execFile as re } from "child_process";

var oe = Z(re);

async function S() {
  if (ee.platform !== "darwin") throw Error("macOS only");
  let {stdout: e} = await oe("defaults", [ "read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers" ]);
  return /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(e)?.groups.id ?? "com.apple.Safari";
}

import te from "process";

import { promisify as ne } from "util";

import { execFile as ie, execFileSync as Xe } from "child_process";

var se = ne(ie);

async function W(e, {humanReadableOutput: r = !0, signal: o} = {}) {
  if (te.platform !== "darwin") throw Error("macOS only");
  let n = r ? [] : [ "-ss" ], t = {};
  if (o) t.signal = o;
  let {stdout: s} = await se("osascript", [ "-e", e, n ], t);
  return s.trim();
}

async function P(e) {
  return W(`tell application "Finder" to set app_path to application file id "${e}" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}

import { promisify as ae } from "util";

import { execFile as ce } from "child_process";

var me = ae(ce), fe = {
  AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
    name: "Edge",
    id: "com.microsoft.edge.old"
  },
  MSEdgeDHTML: {
    name: "Edge",
    id: "com.microsoft.edge"
  },
  MSEdgeHTM: {
    name: "Edge",
    id: "com.microsoft.edge"
  },
  "IE.HTTP": {
    name: "Internet Explorer",
    id: "com.microsoft.ie"
  },
  FirefoxURL: {
    name: "Firefox",
    id: "org.mozilla.firefox"
  },
  ChromeHTML: {
    name: "Chrome",
    id: "com.google.chrome"
  },
  BraveHTML: {
    name: "Brave",
    id: "com.brave.Browser"
  },
  BraveBHTML: {
    name: "Brave Beta",
    id: "com.brave.Browser.beta"
  },
  BraveSSHTM: {
    name: "Brave Nightly",
    id: "com.brave.Browser.nightly"
  }
};

class b extends Error {}

async function A(e = me) {
  let {stdout: r} = await e("reg", [ "QUERY", " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice", "/v", "ProgId" ]), o = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(r);
  if (!o) throw new b(`Cannot find Windows browser in stdout: ${JSON.stringify(r)}`);
  let {id: n} = o.groups, t = fe[n];
  if (!t) throw new b(`Unknown browser ID: ${n}`);
  return t;
}

var ue = le(pe), de = e => e.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, r => r.toUpperCase());

async function B() {
  if (E.platform === "darwin") {
    let e = await S();
    return {
      name: await P(e),
      id: e
    };
  }
  if (E.platform === "linux") {
    let {stdout: e} = await ue("xdg-mime", [ "query", "default", "x-scheme-handler/http" ]), r = e.trim();
    return {
      name: de(r.replace(/.desktop$/, "").replace("-", " ")),
      id: r
    };
  }
  if (E.platform === "win32") return A();
  throw Error("Only macOS, Linux, and Windows are supported");
}

var ye = ge(D.execFile), F = z.dirname(we(import.meta.url)), k = z.join(F, "xdg-open"), {platform: u, arch: H} = N;

async function ve() {
  let e = await v(), r = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`, o = R.from(r, "utf16le").toString("base64"), {stdout: n} = await ye(e, [ "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", o ], {
    encoding: "utf8"
  }), t = n.trim(), s = {
    ChromeHTML: "com.google.chrome",
    BraveHTML: "com.brave.Browser",
    MSEdgeHTM: "com.microsoft.edge",
    FirefoxURL: "org.mozilla.firefox"
  };
  return s[t] ? {
    id: s[t]
  } : {};
}

var _ = async (e, r) => {
  let o;
  for (let n of e) try {
    return await r(n);
  } catch (t) {
    o = t;
  }
  throw o;
}, w = async e => {
  if (e = {
    wait: !1,
    background: !1,
    newInstance: !1,
    allowNonzeroExitCode: !1,
    ...e
  }, Array.isArray(e.app)) return _(e.app, i => w({
    ...e,
    app: i
  }));
  let {name: r, arguments: o = []} = e.app ?? {};
  if (o = [ ...o ], Array.isArray(r)) return _(r, i => w({
    ...e,
    app: {
      name: i,
      arguments: o
    }
  }));
  if (r === "browser" || r === "browserPrivate") {
    let i = {
      "com.google.chrome": "chrome",
      "google-chrome.desktop": "chrome",
      "com.brave.Browser": "brave",
      "org.mozilla.firefox": "firefox",
      "firefox.desktop": "firefox",
      "com.microsoft.msedge": "edge",
      "com.microsoft.edge": "edge",
      "com.microsoft.edgemac": "edge",
      "microsoft-edge.desktop": "edge"
    }, a = {
      chrome: "--incognito",
      brave: "--incognito",
      firefox: "--private-window",
      edge: "--inPrivate"
    }, f = c ? await ve() : await B();
    if (f.id in i) {
      let C = i[f.id];
      if (r === "browserPrivate") o.push(a[C]);
      return w({
        ...e,
        app: {
          name: l[C],
          arguments: o
        }
      });
    }
    throw Error(`${f.name} is not supported as a default browser`);
  }
  let n, t = [], s = {};
  if (u === "darwin") {
    if (n = "open", e.wait) t.push("--wait-apps");
    if (e.background) t.push("--background");
    if (e.newInstance) t.push("--new");
    if (r) t.push("-a", r);
  } else if (u === "win32" || c && !p() && !r) {
    if (n = await v(), t.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand"), 
    !c) s.windowsVerbatimArguments = !0;
    let i = [ "Start" ];
    if (e.wait) i.push("-Wait");
    if (r) {
      if (i.push(`"\`"${r}\`""`), e.target) o.push(e.target);
    } else if (e.target) i.push(`"${e.target}"`);
    if (o.length > 0) o = o.map(a => `"\`"${a}\`""`), i.push("-ArgumentList", o.join(","));
    e.target = R.from(i.join(" "), "utf16le").toString("base64");
  } else {
    if (r) n = r; else {
      let i = !F || F === "/", a = !1;
      try {
        await he.access(k, xe.X_OK), a = !0;
      } catch {}
      n = N.versions.electron ?? (u === "android" || i || !a) ? "xdg-open" : k;
    }
    if (o.length > 0) t.push(...o);
    if (!e.wait) s.stdio = "ignore", s.detached = !0;
  }
  if (u === "darwin" && o.length > 0) t.push("--args", ...o);
  if (e.target) t.push(e.target);
  let d = D.spawn(n, t, s);
  if (e.wait) return new Promise((i, a) => {
    d.once("error", a), d.once("close", f => {
      if (!e.allowNonzeroExitCode && f > 0) {
        a(Error(`Exited with code ${f}`));
        return;
      }
      i(d);
    });
  });
  return d.unref(), d;
}, Se = (e, r) => {
  if (typeof e !== "string") throw TypeError("Expected a `target`");
  return w({
    ...r,
    target: e
  });
};

function U(e) {
  if (typeof e === "string" || Array.isArray(e)) return e;
  let {[H]: r} = e;
  if (!r) throw Error(`${H} is not supported`);
  return r;
}

function g({[u]: e}, {wsl: r}) {
  if (r && c) return U(r);
  if (!e) throw Error(`${u} is not supported`);
  return U(e);
}

var l = {};

m(l, "chrome", () => g({
  darwin: "google chrome",
  win32: "chrome",
  linux: [ "google-chrome", "google-chrome-stable", "chromium" ]
}, {
  wsl: {
    ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    x64: [ "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" ]
  }
}));

m(l, "brave", () => g({
  darwin: "brave browser",
  win32: "brave",
  linux: [ "brave-browser", "brave" ]
}, {
  wsl: {
    ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
    x64: [ "/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe" ]
  }
}));

m(l, "firefox", () => g({
  darwin: "firefox",
  win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
  linux: "firefox"
}, {
  wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
}));

m(l, "edge", () => g({
  darwin: "microsoft edge",
  win32: "msedge",
  linux: [ "microsoft-edge", "microsoft-edge-dev" ]
}, {
  wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
}));

m(l, "browser", () => "browser");

m(l, "browserPrivate", () => "browserPrivate");

var hr = Se;

export { hr as default };
