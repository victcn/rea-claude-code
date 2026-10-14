// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, pe } from "./chunk-hwdwjvh8.js";

import { Ye, l } from "./chunk-b0z4bv3v.js";

import { We, Ea } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { k } from "./chunk-xywp7esx.js";

import { lHr, yHo, Uln, a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { ar, dn, c$ } from "./chunk-nnrb0acr.js";

import { D9e, uOr } from "./chunk-q6wab2jw.js";

import { q9, f9e, uG, m9e, lmt, SE, fe, Wp, aS } from "./chunk-dd98x6x7.js";

import { Xa } from "./chunk-3kb22va7.js";

import { K4, cf } from "./chunk-84yp45y8.js";

import { lvr } from "./chunk-9tdwgnpn.js";

import { ebt, mhn } from "./chunk-fyxywezh.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { O, w4n } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { readdir as C, readFile as L, stat as V } from "fs/promises";

import { release as N } from "os";

import { join as F } from "path";

var z = 1500, A = 262144, X = 32, B = 16, w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/, j = /^[a-z0-9_]{1,16}$/, U = /^[a-z0-9._-]{1,24}$/, J = /^[A-Za-z0-9_.-]{1,64}$/, G = [ "swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...lHr ], Y = new Set([ "xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3" ]), q = "/System/Library/CoreServices/SystemVersion.plist", y = "/Applications", W = "/Library/Developer/CommandLineTools/usr/bin", Z = "/usr/local/cuda/version.json", K = "/proc/driver/nvidia/version", Q = p(() => u({
  cuda: u({
    version: o()
  })
}));

function H() {
  let n = k("tengu_bridge_host_profile", "off");
  return D9e.find(e => e === n) ?? "off";
}

function fhn(n) {
  if (ee()) return "off";
  let e = s => s?.remoteControl?.shareHostProfile, r = [ ...Wp(), fe("policySettings"), fe("flagSettings"), fe("userSettings") ].map(e), S = D9e.find(s => r.includes(s)) ?? n, c = [ S, ...c$.filter(dn).map(s => e(fe(s))) ];
  return D9e.find(s => c.includes(s)) ?? S;
}

function ee() {
  return [ ...aS(), ...SE("flagSettings"), ...SE("userSettings"), ...c$.filter(dn).flatMap(e => SE(e)) ].some(e => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    if (e.severity !== "warning") return !0;
    return e.path === uOr || e.path === "remoteControl" || e.path.startsWith("remoteControl.");
  });
}

async function d2o(n) {
  if (n === void 0) return;
  try {
    let e = H();
    if (e === "off") return;
    let r = await lmt();
    ar();
    let S = fhn(e), c = {
      mdm: q9(),
      hkcu: f9e(),
      wslInherits: uG()
    }, s;
    m9e(r.mdm, r.hkcu, r.wslInherits);
    try {
      ar(), s = fhn(e);
    } finally {
      m9e(c.mdm, c.hkcu, c.wslInherits), ar();
    }
    let _ = D9e.find(P => P === S || P === s) ?? "off";
    if (_ === "off") return;
    if (_ === "basic" && n.mcp_servers !== void 0) {
      let {mcp_servers: P, ...h} = n;
      return h;
    }
    return n;
  } catch (e) {
    d(e);
    return;
  }
}

async function F1r(n) {
  try {
    let e = H();
    if (e === "off") return;
    let r = fhn(e);
    if (r === "off") {
      i("tengu_bridge_host_profile_collect", {
        outcome: b("disabled")
      });
      return;
    }
    return await te({
      includeMcpServers: r === "full",
      signal: n
    });
  } catch (e) {
    d(e);
    return;
  }
}

async function te({includeMcpServers: n, signal: e}) {
  let r = Date.now(), S = M();
  try {
    let c = await U1r({
      includeMcpServers: n,
      signal: e
    });
    if (c === void 0) return;
    let {profile: s, complete: _, aborted: P} = c;
    if (i("tengu_bridge_host_profile_collect", {
      outcome: _ ? b("ok") : P ? b("aborted") : b("partial"),
      duration_ms: Date.now() - r,
      tools_count: s.tools.length,
      mcp_count: s.mcp_servers?.length ?? 0,
      platform: pe(S),
      arch: pe("x64"),
      wsl: s.wsl === !0
    }), _) g("bridge_host_profile"); else if (!P) f("bridge_host_profile", "deadline");
    return s;
  } catch (c) {
    d(c), i("tengu_bridge_host_profile_collect", {
      outcome: b("error"),
      duration_ms: Date.now() - r,
      platform: pe(S),
      arch: pe("x64")
    }), m("bridge_host_profile", "error");
    return;
  }
}

async function U1r({includeMcpServers: n, signal: e, alsoLookFor: r = [], maxTools: S = X}) {
  let c = M();
  if (c === void 0) return;
  let s = [ ...G, ...r ], _ = {
    pathTools: new Set,
    mcpServers: []
  }, P = [ oe(c, _), se(_), Uln(s, _.pathTools) ];
  if (c === "darwin") P.push(re(_), ne(_));
  if (c === "linux") P.push(ie(_));
  if (n) P.push(ae(_));
  let h = We(Promise.all(P.map(E => E.catch(x => {
    d(x);
  }))).then(() => !0), z).then(E => E === !0), v = !1, R = e === void 0 ? await h : await Ea(h, e, () => new Ye).catch(() => (v = !0, 
  !1));
  return {
    profile: {
      platform: c,
      ...j.test("x64") && {
        arch: "x64"
      },
      ..._.osVersion !== void 0 && {
        os_version: _.osVersion
      },
      ..._.distro !== void 0 && {
        distro: _.distro
      },
      ...O() === "wsl" && {
        wsl: !0
      },
      tools: ce(c, _, s, S),
      ...n && {
        mcp_servers: _.mcpServers.slice(0, B)
      },
      collected_at: (new Date).toISOString()
    },
    complete: R,
    aborted: v
  };
}

function M() {
  switch ("linux") {
   case "darwin":
   case "linux":
   case "win32":
    return "linux";

   default:
    return;
  }
}

async function oe(n, e) {
  switch (n) {
   case "darwin":
    e.osVersion = await T(q, "ProductVersion");
    return;

   case "linux":
    {
      let r = await w4n();
      if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) e.osVersion = r.linuxDistroVersion;
      let S = r?.linuxDistroId?.toLowerCase();
      if (S && U.test(S)) e.distro = S;
      return;
    }

   case "win32":
    {
      let r = N();
      if (w.test(r)) e.osVersion = r;
      return;
    }
  }
}

async function T(n, e) {
  let r = await Xa(n, A);
  if (r === null) return;
  let S = mhn(r), c = ebt(S) ? S[e] : void 0;
  return typeof c === "string" && w.test(c) ? c : void 0;
}

async function re(n) {
  let e;
  try {
    e = await C(y);
  } catch {
    return;
  }
  let r = e.filter(s => /^Xcode.*\.app$/.test(s)).sort((s, _) => _.localeCompare(s, void 0, {
    numeric: !0
  }));
  if (r.length === 0) return;
  let S = r.includes("Xcode.app") ? "Xcode.app" : r[0], c = await T(F(y, S, "Contents", "version.plist"), "CFBundleShortVersionString");
  n.xcode = c === void 0 ? "xcode" : `xcode@${c}`;
}

async function ne(n) {
  if (await I(W)) n.clt = "clt";
}

async function se(n) {
  let e = a.ANDROID_HOME ?? a.ANDROID_SDK_ROOT;
  if (e === void 0 || !await yHo(e) || !await I(e)) return;
  n.androidSdk = "android-sdk";
}

async function ie(n) {
  let e = await Xa(Z, A);
  if (e !== null) {
    let r = Q().safeParse(mt(e, !1));
    n.cuda = r.success && w.test(r.data.cuda.version) ? `cuda@${r.data.cuda.version}` : "cuda";
    return;
  }
  try {
    await L(K, "utf8"), n.cuda = "cuda";
  } catch {}
}

async function I(n) {
  try {
    return (await V(n)).isDirectory();
  } catch {
    return !1;
  }
}

async function ae(n) {
  let e = new Set;
  for (let r of K4) {
    if (r === "project") continue;
    let S;
    try {
      S = Object.keys(cf(r, {
        expandVars: !1
      }).servers);
    } catch (s) {
      t(`[bridge:host-profile] could not read ${r} MCP config: ${l(s)}`, {
        level: "warn"
      });
      continue;
    }
    let c = r === "managed" ? "enterprise" : r;
    for (let s of S) {
      if (!J.test(s) || e.has(s)) continue;
      e.add(s), n.mcpServers.push({
        name: s,
        scope: c
      });
    }
  }
}

function ce(n, e, r, S) {
  let c = n !== "darwin" || e.xcode !== void 0 || e.clt !== void 0, s = r.filter(P => e.pathTools.has(P) && (c || !Y.has(P))), _ = [ e.xcode, e.clt, ...s.filter(P => P === "swift"), e.androidSdk, e.cuda, ...s.filter(P => P !== "swift") ].filter(P => P !== void 0 && lvr.test(P));
  return D(_).slice(0, S);
}

export { fhn, d2o, F1r, U1r };
