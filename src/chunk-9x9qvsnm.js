// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Z1e, Vp, pI, wXe, pr, cMr } from "./chunk-9yajep3y.js";

import { Dt, le } from "./chunk-cqgvwwgb.js";

import { So } from "./chunk-wptm3jf5.js";

import { clt } from "./chunk-npbhxfn0.js";

import { ht, qt } from "./chunk-s2t7g8m9.js";

import { Uh } from "./chunk-9tdwgnpn.js";

import { lstat as T, readdir as S } from "fs/promises";

import { join as p } from "path";

var h = String.raw`(?:\[[^\]\n]{0,100}\]){0,4}["']?\]?[ \t]{0,20}(?:=>|[=:])[ \t]{0,20}[\["' ]{0,8}`, w = String.raw`iphone(?:os|simulator)[\d.]{0,12}\b`, b = new RegExp([ String.raw`\bSDKROOT${h}${w}`, String.raw`\bTARGETED_DEVICE_FAMILY${h}(?:\d,){0,8}[12]\b`, String.raw`\bSUPPORTED_PLATFORMS${h}[^;\n]{0,200}?\b${w}` ].join("|")), L = /IPHONEOS_DEPLOYMENT_TARGET|TARGETED_DEVICE_FAMILY/, v = /\bimport UIKit\b|#import\s*<UIKit\/|\.iOS\(/, x = [ ".swift", ".m", ".mm", ".h" ], D = /simctl|devicectl|iphone(?:os|simulator)|platform=iOS|-apple-ios|Simulator/i, y = String.raw`-sdk\s+\S*iphone(?:os|simulator)`, j = String.raw`(?:"[^"]*"|'[^']*'|[^\s"'])*`, N = new RegExp(String.raw`^(?:(?:\w+=${j}|sudo|time|env|nice|caffeinate|xcrun|timeout\s+\S+|arch\s+-\S+)\s+){0,20}` + String.raw`(?:\S*[\\/])?(?:` + [ String.raw`(?:xcrun\s[\s\S]*?)?\b(?:simctl|devicectl)\b`, String.raw`xcrun\s[\s\S]*${y}`, String.raw`xcodebuild\s[\s\S]*(?:${y}|platform=iOS\b)`, String.raw`swift\s+(?:build|test|run)\s[\s\S]*(?:${y}|-triple\s+\S*-apple-ios)`, String.raw`open\s[\s\S]*-a\s+["']?Simulator\b` ].join("|") + ")", "i"), M = /\bsimctl\b|-sdk iphonesimulator|-sdk iphoneos|platform=iOS Simulator/, W = new Set([ ht, qt ]);

function uJo() {
  return {
    swiftFileEdited: !1,
    evidence: null,
    conclusiveEvidence: null
  };
}

function o6r(e) {
  return e.swiftFileEdited && e.evidence !== null ? e.evidence : e.conclusiveEvidence;
}

function F(e) {
  return o6r(e) !== null;
}

function pJo(e, t) {
  for (let n of t) {
    if (F(e)) return;
    let s = n.type === "progress" && (n.data.type === "agent_progress" || n.data.type === "skill_progress") ? n.data.message : n;
    if (s.type === "assistant") {
      if (!Array.isArray(s.message.content)) continue;
      for (let o of s.message.content) {
        if (o.type !== "tool_use") continue;
        let r = o.input;
        if (typeof r !== "object" || r === null) continue;
        if (W.has(o.name)) {
          let i = "file_path" in r && typeof r.file_path === "string" ? r.file_path.toLowerCase() : "";
          if (i.endsWith(".swift")) e.swiftFileEdited = !0;
          let u = x.some(m => i.endsWith(m));
          if ("content" in r) R(e, r.content, u);
          if ("new_string" in r) R(e, r.new_string, u);
        } else if (Uh.includes(o.name) && "command" in r && typeof r.command === "string") {
          let i = U(r.command);
          if (i || M.test(r.command)) g(e, "ios_command", i);
        }
      }
    } else if (s.type === "user") {
      if (!Array.isArray(s.message.content)) continue;
      for (let o of s.message.content) if (o.type === "tool_result") for (let r of G(o.content)) A(e, r);
    }
  }
}

function g(e, t, n) {
  if (e.evidence ??= t, n) e.conclusiveEvidence ??= t;
}

function A(e, t) {
  if (b.test(t)) g(e, "xcode_project", !0); else if (L.test(t)) g(e, "xcode_project", !1);
}

function R(e, t, n) {
  if (typeof t !== "string") return;
  if (v.test(t)) g(e, "uikit_import", n);
  A(e, t);
}

function G(e) {
  if (typeof e === "string") return [ e ];
  return Array.isArray(e) ? e.flatMap(t => t.type === "text" ? [ t.text ] : []) : [];
}

function U(e) {
  return D.test(e) && clt(e).some(t => N.test(t));
}

var K = 65536, z = 20, B = [ [ "pnpm-lock.yaml", "pnpm" ], [ "yarn.lock", "yarn" ], [ "bun.lock", "bun" ], [ "bun.lockb", "bun" ], [ "package-lock.json", "npm" ], [ "npm-shrinkwrap.json", "npm" ], [ "deno.lock", "deno" ], [ "poetry.lock", "poetry" ], [ "uv.lock", "uv" ], [ "Pipfile.lock", "pipenv" ], [ "requirements.txt", "pip" ], [ "Cargo.lock", "cargo" ], [ "go.sum", "go" ], [ "composer.lock", "composer" ], [ "Gemfile.lock", "bundler" ], [ "gradle.lockfile", "gradle" ], [ "packages.lock.json", "nuget" ], [ "Podfile.lock", "cocoapods" ], [ "Package.resolved", "swift" ], [ "mix.lock", "mix" ], [ "pubspec.lock", "pub" ], [ "conan.lock", "other" ] ], H = /(?:registry|index-url)\s*=\s*["']?(https?:\/\/[^\s"'`]+)/g, X = /\[\[tool\.(?:poetry\.source|uv\.index)\]\][^[]*?url\s*=\s*["'](https?:\/\/[^\s"'`]+)/g, Y = /npmRegistryServer\s*:\s*["']?(https?:\/\/[^\s"'`]+)/g, I = /(?:index|registry)\s*=\s*["']?(?:sparse\+)?(https?:\/\/[^\s"'`]+)/g, V = /\b(?:VAULT_ADDR|SOPS_[A-Z_]*|op read|aws secretsmanager|gcloud secrets)\b/, k = /\bcom\.android\.(?:application|library|test|dynamic-feature|tools\.build:gradle)\b/, J = /\b(?:enable_language\s*\(\s*CUDA|LANGUAGES\b[^)\n]{0,200}\bCUDA\b|find_package\s*\(\s*CUDA|cuda_add_(?:executable|library))/i, q = /^[^\S\n]*-[^\S\n]*(?:[a-z][\w.-]*::)?(?:cudatoolkit|cuda-toolkit|cudnn|pytorch-cuda)\b/m, Z = [ "settings.gradle", "settings.gradle.kts", "build.gradle", "build.gradle.kts" ], Q = [ "environment.yml", "environment.yaml" ], ee = [ "ios", "iosapp", "macos", "apple" ], te = 5, ne = 1048576, oe = new Set([ "registry.npmjs.org", "registry.yarnpkg.com", "pypi.org", "pypi.python.org", "files.pythonhosted.org", "crates.io", "index.crates.io", "static.crates.io", "proxy.golang.org", "localhost", "127.0.0.1", "0.0.0.0", "[::1]", "registry.npmmirror.com", "registry.npm.taobao.org", "pypi.tuna.tsinghua.edu.cn", "mirrors.aliyun.com" ]);

function se(e) {
  let t = e?.toLowerCase() ?? null;
  if (!t) return "none";
  if (t.includes("jfrog")) return "jfrog";
  if (t.includes("nexus") || t.includes("sonatype")) return "nexus";
  if (t.includes("github")) return "github";
  if (t.includes("gitlab")) return "gitlab";
  if (t === "pkgs.dev.azure.com" || t.endsWith(".visualstudio.com") || t.endsWith(".azure.com")) return "azure";
  if (t.endsWith(".amazonaws.com")) return "aws";
  if (t.endsWith(".pkg.dev") || t.endsWith(".googleapis.com")) return "gcp";
  return "other";
}

function re(e) {
  try {
    let t = new URL(e).hostname.toLowerCase();
    return t && /^[a-z0-9.[][a-z0-9.:\]-]*$/.test(t) ? t : null;
  } catch {
    return null;
  }
}

function ie(e) {
  try {
    let t = new URL(e);
    return So(t.hostname) && /^\/rust-lang\/crates\.io-index(?:\.git)?\/?$/.test(t.pathname);
  } catch {
    return !1;
  }
}

function ae(e, t) {
  let n = [], s = e.split(`\n`).filter(r => !/^\s*[#;]/.test(r)).join(`\n`), o = new RegExp(t.source, t.flags);
  for (let r of s.matchAll(o)) {
    if (r[1] === void 0 || ie(r[1])) continue;
    let i = re(r[1]);
    if (i !== null) n.push(i);
  }
  return n;
}

async function f(e, t) {
  try {
    let n = await pI(p(e, t), K, {
      noFollow: !0
    });
    return typeof n === "string" ? n : null;
  } catch {
    return null;
  }
}

async function O(e) {
  try {
    return (await T(e)).isFile();
  } catch {
    return !1;
  }
}

async function ce(e, t, n) {
  let s = [ ...[ ".npmrc", "pip.conf", "pyproject.toml", "bunfig.toml" ].filter(o => t.has(o)).map(o => [ o, H ]), ...t.has("pyproject.toml") ? [ [ "pyproject.toml", X ] ] : [], ...t.has(".yarnrc.yml") ? [ [ ".yarnrc.yml", Y ] ] : [], ...n ? [ [ ".cargo/config.toml", I ], [ ".cargo/config", I ] ] : [] ];
  for (let [o, r] of s) {
    if (o.startsWith(".cargo/") && !await O(p(e, o))) continue;
    let i = await f(e, o);
    if (i === null) continue;
    for (let u of ae(i, r)) if (!oe.has(u)) return {
      has_private_registry: !0,
      private_registry_host_class: se(u)
    };
  }
  return {
    has_private_registry: !1,
    private_registry_host_class: "none"
  };
}

async function ue(e, t) {
  if (t.some(s => {
    let o = s.toLowerCase();
    return o === ".sops.yaml" || o === ".sops.yml";
  })) return !0;
  let n = t.filter(s => {
    let o = s.toLowerCase();
    return o === ".envrc" || o.endsWith(".yml") || o.endsWith(".yaml") || o.endsWith(".toml") || o.endsWith(".sh");
  }).sort().slice(0, z);
  for (let s of n) {
    let o = await f(e, s);
    if (o !== null && V.test(o)) return !0;
  }
  return !1;
}

async function de(e) {
  try {
    return (await T(e)).isDirectory();
  } catch {
    return !1;
  }
}

async function pe(e) {
  try {
    let t = p(e, ".github", "workflows");
    if (!await de(t)) return !1;
    return (await S(t)).some(s => s.endsWith(".yml") || s.endsWith(".yaml"));
  } catch {
    return !1;
  }
}

function fe(e) {
  for (let [t, n] of B) if (e.has(t)) return n;
  return "none";
}

async function me(e, t, n) {
  for (let s of Z) {
    if (!t.has(s)) continue;
    let o = await f(e, s);
    if (o !== null && k.test(_(o))) return !0;
  }
  if (n) {
    let s = p(e, "gradle", "libs.versions.toml");
    if (await O(s)) {
      let o = await f(e, "gradle/libs.versions.toml");
      if (o !== null && k.test(_(o))) return !0;
    }
  }
  return !1;
}

function _(e) {
  return e.replace(/^[^\S\n]*(?:#|\/\/).*$/gm, "");
}

async function ge(e, t) {
  if (t.has("CMakeLists.txt")) {
    let n = await f(e, "CMakeLists.txt");
    if (n !== null && J.test(_(n))) return !0;
  }
  for (let n of Q) {
    if (!t.has(n)) continue;
    let s = await f(e, n);
    if (s !== null && q.test(_(s))) return !0;
  }
  return !1;
}

function _e(e, t) {
  return [ ...e, ...t ].some(n => {
    let s = n.toLowerCase();
    return s.endsWith(".xcodeproj") || s.endsWith(".xcworkspace");
  }) || e.includes("Podfile");
}

async function E(e) {
  let t = await S(e, {
    withFileTypes: !0
  }).catch(n => wXe(n) ? [] : null);
  if (t === null) return null;
  return {
    dir: e,
    fileNames: t.filter(n => n.isFile()).map(n => n.name),
    dirNames: t.filter(n => n.isDirectory()).map(n => n.name)
  };
}

async function he(e) {
  let t = e.fileNames.find(s => s.toLowerCase() === "project.pbxproj");
  if (t === void 0) return !1;
  let n = await pI(p(e.dir, t), ne, {
    noFollow: !0,
    fromTail: !0
  });
  if (n === "unreadable") return null;
  return n !== null && b.test(n.content);
}

async function P(e) {
  if (e.fileNames.includes("AndroidManifest.xml")) return !0;
  return me(e.dir, new Set(e.fileNames), e.dirNames.includes("gradle"));
}

async function ye(e, t, n) {
  if (await P({
    dir: e,
    fileNames: t,
    dirNames: n
  })) return {
    hasAndroidProject: !0,
    hasAndroidAppProject: !0
  };
  let s = n.find(r => r.toLowerCase() === "android"), o = s === void 0 ? null : await E(p(e, s));
  return {
    hasAndroidProject: !1,
    hasAndroidAppProject: o !== null && await P(o)
  };
}

async function be(e, t, n) {
  let s = ee.flatMap(c => {
    let l = n.find(d => d.toLowerCase() === c);
    return l === void 0 ? [] : [ p(e, l) ];
  }), o = [ ...await Promise.all(s.map(E)), {
    dir: e,
    fileNames: t,
    dirNames: n
  } ], r = o.includes(null), i = o.filter(c => c !== null), u = i.some(c => _e(c.fileNames, c.dirNames)), m = i.flatMap(c => c.dirNames.filter(l => l.toLowerCase().endsWith(".xcodeproj")).sort().map(l => p(c.dir, l))).slice(0, te);
  for (let c of m) {
    let l = await E(c), d = l === null ? null : await he(l);
    if (d === !0) return {
      hasXcodeProject: u,
      hasIosAppProject: !0
    };
    r ||= d === null;
  }
  return {
    hasXcodeProject: u,
    hasIosAppProject: r ? null : !1
  };
}

async function Ee(e, t, n, s, o) {
  let r = t.map(i => i.toLowerCase());
  if (s) return "xcode";
  if (o) return "android";
  if (r.some(i => i.endsWith(".cu") || i.endsWith(".cuh")) || await ge(e, n)) return "cuda";
  if (r.some(i => i.endsWith(".sln") || i.endsWith(".csproj"))) return "dotnet";
  if (r.some(i => (i.endsWith(".bat") || i.endsWith(".cmd") || i.endsWith(".ps1")) && i !== "gradlew.bat" && i !== "gradlew.cmd" && i !== "mvnw.bat" && i !== "mvnw.cmd")) return "windows_scripts";
  return "none";
}

async function Se(e) {
  let t = await S(e, {
    withFileTypes: !0
  }), n = t.filter(a => a.isFile()).map(a => a.name), s = t.filter(a => a.isDirectory()).map(a => a.name), o = new Set(n), r = n.map(a => a.toLowerCase()), i = new Set(s.map(a => a.toLowerCase())), [u, m, c, l, d] = await Promise.all([ ce(e, o, s.includes(".cargo")), ue(e, n), s.includes(".github") ? pe(e) : Promise.resolve(!1), be(e, n, s), ye(e, n, s) ]), C = await Ee(e, n, o, l.hasXcodeProject, d.hasAndroidProject);
  return {
    has_dockerfile: r.some(a => a === "dockerfile" || a.startsWith("dockerfile.") || a.endsWith(".dockerfile")),
    has_compose: r.some(a => /^(docker-)?compose(\..+)?\.ya?ml$/.test(a)),
    has_devcontainer: i.has(".devcontainer") || r.includes(".devcontainer.json"),
    has_nix: [ "flake.nix", "default.nix", "shell.nix" ].some(a => o.has(a)),
    has_bazel: [ "WORKSPACE", "WORKSPACE.bazel", "MODULE.bazel", "BUILD", "BUILD.bazel", ".bazelrc" ].some(a => o.has(a)),
    lockfile_family: fe(o),
    has_env_file: r.some(a => (a === ".env" || a.startsWith(".env.")) && !/\.(example|sample|template|dist)$/.test(a)),
    has_ci_config: c || i.has(".circleci") || i.has(".buildkite") || r.some(a => [ ".gitlab-ci.yml", "jenkinsfile", "azure-pipelines.yml", ".travis.yml", "bitbucket-pipelines.yml" ].includes(a)),
    ...u,
    has_secrets_manager_refs: m,
    has_xcode_project: l.hasXcodeProject,
    has_ios_app_project: l.hasIosAppProject,
    has_android_project: d.hasAndroidProject,
    has_android_app_project: d.hasAndroidAppProject,
    os_locked_toolchain: C
  };
}

async function we(e) {
  try {
    return await Se(e);
  } catch {
    return null;
  }
}

async function Ekn(e) {
  try {
    if (Dt()) return null;
    let t = pr(le());
    if (t === null) return null;
    if (await cMr(t)) return null;
    let n = Vp().markersByRoot;
    if (e?.fresh === !0) n.delete(t);
    let s = Z1e(n, t, we), o = await s;
    if ((o === null || o.has_ios_app_project === null) && n.peek(t) === s) n.delete(t);
    return o;
  } catch {
    return null;
  }
}

var fJo = 500;

export { uJo, o6r, pJo, Ekn, fJo };
