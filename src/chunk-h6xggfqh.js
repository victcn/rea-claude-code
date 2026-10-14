// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { jt } from "./chunk-b0z4bv3v.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Rd, a } from "./chunk-j016gcgm.js";

import { it, ft } from "./chunk-zscnwzv2.js";

import { bue, Sbs, wbs } from "./chunk-vwf8r6dz.js";

import { Ia } from "./chunk-rkw37sbq.js";

import { O } from "./chunk-1xnsr4dy.js";

class w {
  bridgeBinding=void 0;
  browserHints=void 0;
  lastSentPreferredDeviceId=void 0;
  resolvedHostByToolUseId=new Map;
  shouldAutoEnable=void 0;
  wiredThisSession=!1;
  attachedInstructions="";
  installUpsellResolution=void 0;
  installUpsellBypassSuppressionCounted=!1;
  trackedTabIds=new Set;
  tabGroupCleanupRegistered=!1;
  unsubscribeSessionSwitch=void 0;
  unregisterExitCleanup=void 0;
  closesInFlight=new Map;
  lastExecutedTabUrlByScope=new Map;
  resolvedUrlByToolUseId=new Map;
  browserRosterVersion=0;
  browserRosterChanged=Me();
  noBrowserFound=void 0;
  relayConnectFailed=void 0;
  disconnectedAnswerCount=0;
  disconnectedAnswerTexts=new Set;
  notConnectedSeenByPriorWorker=!1;
  notConnectedMirrored=!1;
  chromeSetupOfferArm=void 0;
  chromeSetupOfferArmMirrored=!1;
  chromeSetupOfferStateUnread=!1;
  lastTurnClientPlatform=void 0;
  reset() {
    this.bridgeBinding = void 0, this.browserHints = void 0, this.lastSentPreferredDeviceId = void 0, 
    this.resolvedHostByToolUseId = new Map, this.shouldAutoEnable = void 0, this.wiredThisSession = !1, 
    this.attachedInstructions = "", this.installUpsellResolution = void 0, this.installUpsellBypassSuppressionCounted = !1, 
    this.trackedTabIds = new Set, this.tabGroupCleanupRegistered = !1, this.unsubscribeSessionSwitch?.(), 
    this.unsubscribeSessionSwitch = void 0, this.unregisterExitCleanup?.(), this.unregisterExitCleanup = void 0, 
    this.closesInFlight = new Map, this.lastExecutedTabUrlByScope = new Map, this.resolvedUrlByToolUseId = new Map, 
    this.browserRosterVersion++, this.noBrowserFound = void 0, this.relayConnectFailed = void 0, 
    this.disconnectedAnswerCount = 0, this.notConnectedSeenByPriorWorker = !1, this.notConnectedMirrored = !1, 
    this.chromeSetupOfferArm = void 0, this.chromeSetupOfferArmMirrored = !1, this.chromeSetupOfferStateUnread = !1, 
    this.lastTurnClientPlatform = void 0, this.disconnectedAnswerTexts = new Set;
  }
}

var bgr = new K(() => new w);

function ha() {
  return bgr.of(B().host);
}

function rps(e) {
  let r = ha().resolvedHostByToolUseId.get(e);
  if (r !== void 0) r.keepHostPin = !0;
}

import { readdir as M, stat as C } from "fs/promises";

import { homedir as v, platform as S, userInfo as y } from "os";

import { join as u } from "path";

var l0 = `mcp__${Ia}__`, SV = "ClaudeInChromeDomain", l = {
  chrome: {
    name: "Google Chrome",
    macos: {
      appName: "Google Chrome",
      nativeMessagingPath: [ "Library", "Application Support", "Google", "Chrome", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "google-chrome", "google-chrome-stable" ],
      nativeMessagingPath: [ ".config", "google-chrome", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "Google", "Chrome", "User Data" ],
      registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
      appPathsExe: "chrome.exe"
    }
  },
  brave: {
    name: "Brave",
    macos: {
      appName: "Brave Browser",
      nativeMessagingPath: [ "Library", "Application Support", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "brave-browser", "brave" ],
      nativeMessagingPath: [ ".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "BraveSoftware", "Brave-Browser", "User Data" ],
      registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
      appPathsExe: "brave.exe"
    }
  },
  arc: {
    name: "Arc",
    macos: {
      appName: "Arc",
      nativeMessagingPath: [ "Library", "Application Support", "Arc", "User Data", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [],
      nativeMessagingPath: []
    },
    windows: {
      dataPath: [ "Arc", "User Data" ],
      registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
    }
  },
  chromium: {
    name: "Chromium",
    macos: {
      appName: "Chromium",
      nativeMessagingPath: [ "Library", "Application Support", "Chromium", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "chromium", "chromium-browser" ],
      nativeMessagingPath: [ ".config", "chromium", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "Chromium", "User Data" ],
      registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
    }
  },
  edge: {
    name: "Microsoft Edge",
    macos: {
      appName: "Microsoft Edge",
      nativeMessagingPath: [ "Library", "Application Support", "Microsoft Edge", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "microsoft-edge", "microsoft-edge-stable" ],
      nativeMessagingPath: [ ".config", "microsoft-edge", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "Microsoft", "Edge", "User Data" ],
      registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
      appPathsExe: "msedge.exe"
    }
  },
  vivaldi: {
    name: "Vivaldi",
    macos: {
      appName: "Vivaldi",
      nativeMessagingPath: [ "Library", "Application Support", "Vivaldi", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "vivaldi", "vivaldi-stable" ],
      nativeMessagingPath: [ ".config", "vivaldi", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "Vivaldi", "User Data" ],
      registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
      appPathsExe: "vivaldi.exe"
    }
  },
  opera: {
    name: "Opera",
    macos: {
      appName: "Opera",
      nativeMessagingPath: [ "Library", "Application Support", "com.operasoftware.Opera", "NativeMessagingHosts" ]
    },
    linux: {
      binaries: [ "opera" ],
      nativeMessagingPath: [ ".config", "opera", "NativeMessagingHosts" ]
    },
    windows: {
      dataPath: [ "Opera Software", "Opera Stable" ],
      registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
      useRoaming: !0,
      appPathsExe: "opera.exe"
    }
  }
}, f = [ "chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera" ];

function xio() {
  let e = O(), r = v(), o = [];
  for (let i of f) {
    let s = l[i];
    switch (e) {
     case "macos":
      if (s.macos.nativeMessagingPath.length > 0) o.push({
        browser: i,
        path: u(r, ...s.macos.nativeMessagingPath)
      });
      break;

     case "linux":
     case "wsl":
      if (s.linux.nativeMessagingPath.length > 0) o.push({
        browser: i,
        path: u(r, ...s.linux.nativeMessagingPath)
      });
      break;

     case "windows":
      break;
    }
  }
  return o;
}

function Pio() {
  let e = [];
  for (let r of f) {
    let o = l[r];
    if (o.windows.registryKey) e.push({
      browser: r,
      key: o.windows.registryKey
    });
  }
  return e;
}

async function Sgr() {
  let e = O();
  for (let r of f) {
    let o = l[r];
    switch (e) {
     case "macos":
      {
        let i = `/Applications/${o.macos.appName}.app`;
        try {
          if ((await C(i)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${o.name}`), 
          r;
        } catch (s) {
          if (!jt(s)) throw s;
        }
        break;
      }

     case "wsl":
     case "linux":
      {
        for (let i of o.linux.binaries) if (await Rd(i).catch(() => null)) return t(`[Claude in Chrome] Detected browser: ${o.name}`), 
        r;
        break;
      }

     case "windows":
      {
        let i = v();
        if (o.windows.dataPath.length > 0) {
          let s = o.windows.useRoaming ? u(i, "AppData", "Roaming") : u(i, "AppData", "Local"), d = u(s, ...o.windows.dataPath);
          try {
            if ((await C(d)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${o.name}`), 
            r;
          } catch (n) {
            if (!jt(n)) throw n;
          }
        }
        break;
      }
    }
  }
  return null;
}

var P = 200;

function Iio(e) {
  let r = ha().trackedTabIds;
  if (r.size >= P && !r.has(e)) r.clear();
  r.add(e);
}

function Oio(e) {
  return ha().trackedTabIds.has(e);
}

function p(e) {
  return {
    exec_exit_code: e.code,
    exec_failure_kind: e.exitCode !== void 0 ? b("nonzero_exit") : e.code === 127 ? b("not_found") : b("spawn_failed_or_killed")
  };
}

async function MNe(e) {
  if (!/^https?:\/\//i.test(e)) return m("chrome_open_url", "invalid_url"), !1;
  let r = O(), o = await Sgr();
  if (!o) return t("[Claude in Chrome] No compatible browser found"), m("chrome_open_url", "no_browser"), 
  !1;
  let i = l[o];
  switch (r) {
   case "macos":
    {
      let s = await it("open", [ "-a", i.macos.appName, e ]);
      if (s.code === 0) return g("chrome_open_url"), !0;
      return m("chrome_open_url", "exec_failed", p(s)), !1;
    }

   case "windows":
    {
      let s = i.windows.appPathsExe, d = !1;
      if (s) {
        let h = await Sbs(s);
        if (h) {
          if (await wbs(h, [ e ])) return g("chrome_open_url", {
            open_method: b("app_paths"),
            browser: c(o)
          }), !0;
          d = !0;
        }
      }
      let n = await ft("rundll32", [ "url,OpenURL", e ], {
        cwd: bue()
      });
      if (n.code === 0) return g("chrome_open_url", {
        open_method: d ? b("rundll32_after_spawn_fail") : s ? b("rundll32") : b("rundll32_no_app_paths_support"),
        browser: c(o)
      }), !0;
      return m("chrome_open_url", "exec_failed", {
        ...p(n),
        ...d && {
          app_paths_spawn_failed: !0
        },
        browser: c(o)
      }), !1;
    }

   case "wsl":
   case "linux":
    {
      let s;
      for (let d of i.linux.binaries) {
        let n = await it(d, [ e ], {
          useCwd: !0,
          useToolMemoryCgroup: !1
        });
        if (n.code === 0) return g("chrome_open_url"), !0;
        if (s?.exitCode === void 0 || n.exitCode !== void 0) s = n;
      }
      return m("chrome_open_url", "exec_failed", s ? p(s) : void 0), !1;
    }

   default:
    return m("chrome_open_url", "exec_failed"), !1;
  }
}

function F9t() {
  return `/tmp/claude-mcp-browser-bridge-${_()}`;
}

function U9t() {
  if (S() === "win32") return `\\\\.\\pipe\\${x()}`;
  return u(F9t(), `${process.pid}.sock`);
}

async function Mio() {
  if (S() === "win32") return [ `\\\\.\\pipe\\${x()}` ];
  let e = [], r = F9t();
  try {
    let o = await M(r);
    for (let i of o) if (i.endsWith(".sock")) e.push(u(r, i));
  } catch {}
  return e;
}

function x() {
  return `claude-mcp-browser-bridge-${_()}`;
}

function _() {
  try {
    return y().username || "default";
  } catch {
    return a.USER || a.USERNAME || "default";
  }
}

export { bgr, ha, rps, l0, SV, xio, Pio, Sgr, Iio, Oio, MNe, F9t, U9t, Mio };
