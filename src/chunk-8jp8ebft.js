// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { qc } from "./chunk-ddr690nj.js";

import { TX } from "./chunk-y752zmas.js";

import { uo } from "./chunk-kawq2919.js";

import { dl } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { san, yj } from "./chunk-jnzpsr0d.js";

import { je, Rt } from "./chunk-s2t7g8m9.js";

import { kP, eK, Js, DF, tK, wxe, G7, bH, Exe, $8, m6e } from "./chunk-77jtkrp2.js";

import { Ud } from "./chunk-9tdwgnpn.js";

import { yAe, kos, oN, sot, zl } from "./chunk-84yp45y8.js";

import { io, K5e, q5e, vgo, Ego, mz } from "./chunk-4v78v8fd.js";

import { d5e, c5e, RQt, u5e, vR } from "./chunk-r8a304y3.js";

import { mN } from "./chunk-sqb9meyh.js";

import { jvt } from "./chunk-ns5zh457.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { co } from "./chunk-k5d016nk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

var K = "tengu_violin_lining";

function kke() {
  return Fl(K, {
    safe: !0
  });
}

async function gjt(e) {
  if (!kke()) return DF(e);
  let n = await eK(e);
  if (n === kP && e.trim() !== "") return {
    kind: "too-complex",
    reason: "the parser gave up on the command"
  };
  return n === null ? {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  } : tK(e, n);
}

import { homedir as x } from "os";

import { basename as Z, isAbsolute as C, join as X, resolve as I } from "path";

var Y = 16, T = 64;

function R(e) {
  return m6e(e) || e === "PWD" || e === "OLDPWD";
}

function M(e) {
  return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && R(e);
}

var q = new Set([ "export", "declare", "typeset", "readonly", "local", "unset" ]), J = new Set([ ...G7, ...wxe, ...bH, ...Exe, ...$8, "xargs", "parallel" ]), B = [ RQt, d5e, c5e ], Q = "tengu_toasty_hammock";

function k(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}

async function hjt(e, n, t, s) {
  let r = t.behavior === "ask" && zl(t.decisionReason, yj) !== void 0;
  if (e.name === je) {
    if (typeof n.command !== "string") return "uncertain";
    let l = await te(n.command, s, r);
    return l === "none" && t.behavior === "ask" && zl(t.decisionReason, san) !== void 0 ? "uncertain" : l;
  }
  if (e.name !== Rt) return "none";
  if (r) return "settings";
  return t.behavior === "ask" && G(t) ? "uncertain" : "none";
}

async function yjt(e, n, t, s = !1) {
  if (e.name !== je && e.name !== Rt || !aJ(n, "file") || !await uXn(e, n, t)) return !1;
  let r = n.command;
  return !(s && e.name === je && typeof r === "string" && await i1r(r));
}

async function uXn(e, n, t) {
  try {
    let s = n.command;
    return e.name === Rt && typeof s === "string" ? !jvt(s, await yAe(s)) : !e.isReadOnly(n, t);
  } catch (s) {
    return d(Error("a served shell line's read-only check threw; the line counts as not read-only", {
      cause: s
    })), !0;
  }
}

function s1r() {
  return {
    paths: [ ...u5e(), ...mN().flatMap(e => B.map(n => X(e, n))) ],
    globalConfigNames: TX.map(e => `.claude${e}.json`)
  };
}

var v = {
  simctl: [ "launch", "terminate", "uninstall", "get_app_container", "appinfo", "privacy" ],
  open: [ "-b" ],
  defaults: [ "read", "read-type", "write", "delete" ]
}, H = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`, ee = new RegExp(`^${H}$`, "i"), ne = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;

async function i1r(e) {
  if (ne.test(e)) return !1;
  try {
    let n = await gjt(e);
    if (n.kind !== "simple" || n.bareAssignmentNames.some(R)) return !1;
    let t = [], s = e.replace(new RegExp(String.raw`(^|\s)(${H})(?=$|[\s;&])`, "gi"), (o, c, u) => (t.push(u), 
    `${c}APPID`)), r = [], l = 0;
    for (let {argv: o, envVars: c, redirects: u} of n.commands) {
      if (c.some(p => R(p.name)) || u.some(({op: p, target: S}) => S !== "/dev/null" && !(p === ">&" && (S === "1" || S === "2")))) return !1;
      let i = o[0], m = i === "simctl" ? 0 : (i === "xcrun" || i === "/usr/bin/xcrun") && o[1] === "simctl" ? 1 : void 0, y = m === void 0 ? void 0 : o[m + 1], g = m !== void 0 && y !== void 0 && v.simctl.includes(y) ? m + 1 : void 0, h = (i === "defaults" || i === "/usr/bin/defaults") && o[1] !== void 0 && v.defaults.includes(o[1]), a = i === "open" || i === "/usr/bin/open";
      if (m === void 0 && !h && !a && i !== void 0 && i !== "sleep") return !1;
      for (let [p, S] of o.entries()) {
        if (!ee.test(S)) continue;
        r.push(S);
        let _ = o[p - 1];
        if (g !== void 0 && p > g || h && p === 2 || a && _ !== void 0 && v.open.includes(_)) l += 1;
      }
    }
    return t.length > 0 && l === r.length && t.toSorted().join(" ") === r.toSorted().join(" ") && !aJ({
      command: s
    }, "file");
  } catch (n) {
    return d(Error("reading a served shell line's app identifiers threw; the line counts as naming settings", {
      cause: n
    })), !1;
  }
}

function aJ(e, n) {
  let t = e.command;
  if (typeof t !== "string") return !0;
  let {files: s, dirs: r} = q5e(), l = n !== "file_or_folder", o = n === "own_file", c = r.flatMap(a => [ a, Os(a) ]), u = s1r(), i = l ? u.paths : [], m = [ ...o ? [] : [ ...vgo(), "managed-settings" ], ...l ? u.globalConfigNames : [ ...K5e, ...c ], ...[ ...o ? [] : s, ...i ].flatMap(a => [ a, Os(a) ]) ], y = Ego(), g = l ? [ ...o ? [] : K5e, ...B ] : s.map(a => Z(a)).filter(a => a.includes("."));
  return [ "", "/" ].some(a => {
    let p = A(t, a);
    if (m.some(E => p.includes(A(E, a)))) return !0;
    let S = y.some(E => new RegExp(`${dl(A(E, a))}(?![a-z0-9_])`).test(p)), _ = g.some(E => new RegExp(`(?<![a-z0-9_])${dl(A(E, a))}(?![a-z0-9_])`).test(p));
    if (!l) return S || _;
    return _ && (S || c.some(E => p.includes(A(E, a)))) || (o ? [] : [ ...y, ...c ]).some(E => new RegExp(`${dl(A(E, a))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`).test(p));
  });
}

function A(e, n) {
  return io(e.normalize("NFKC")).replace(/['"`]/g, "").replaceAll("\\", n);
}

function G(e) {
  let n = e.decisionReason;
  if (n?.type === "subcommandResults") {
    for (let t of n.reasons.values()) if (t.behavior === "ask" && G(t)) return !0;
    return !1;
  }
  if (n === void 0) return e.blockedPath === void 0;
  if (n.type === "safetyCheck" && !yj(n)) return san(n) || e.blockedPath === void 0;
  return n.type === "other";
}

async function te(e, n, t = !1) {
  let s = await gjt(e);
  if (s.kind !== "simple") return "uncertain";
  let r = s.bareAssignmentNames.some(R), l = [ n ], o = !0, c = !1, u = !0, i = 0, m = s.hasLoop !== !1 && Fl(Q, {
    safe: !0
  });
  for (let y of s.commands) {
    let {simple: g, wrapperWords: h, pathSpelled: a, doubt: p} = z(y);
    if (p || se(g)) r = !0;
    let S = U(g, l);
    if (S !== void 0 && m) r = !0;
    if (S === "unknown") o = !1; else if (S !== void 0) {
      if (l = S, g.argv.slice(1).some(j)) o = !1;
    }
    let _ = kos(g);
    if (_.writesUnseen) r = !0;
    if (!_.known && S === void 0 && g.argv.length > 0) u = !1;
    let E = f => C(f) || f.startsWith("~") ? [ n ] : l, b = [ ...h, ..._.known && !a ? [] : g.argv.slice(1), ...g.envVars.map(f => f.value) ].flatMap(f => V(f));
    if (!_.known && S === void 0 && g.argv.length > 0 && l.some(f => _jt(".", f))) r = !0;
    if (!o && b.some(f => f !== "" && !C(f) && !f.startsWith("~") && _jt(f, I(n, ".claude")))) r = !0;
    for (let f of [ ...b, ..._.landings ]) if (f !== "" && E(f).some(w => _jt(f, w))) r = !0;
    for (let f of _.written) {
      if (i++, i > T) return "uncertain";
      if (Js(f) || E(f) === l && !o) r = !0;
      for (let w of E(f)) {
        let L = P(f, w);
        if (L === "settings") return "settings";
        if (L === "uncertain") r = !0;
      }
    }
    for (let f of _.copySources) {
      if (i++, i > T) return "uncertain";
      if (E(f).some(w => P(f, w) === "settings")) c = !0; else if (E(f).some(w => oe(f, w))) r = !0;
    }
  }
  if (r || t && !(c && u)) return "uncertain";
  return "none";
}

var N = new Set([ "HOME", "CDPATH", "PWD", "OLDPWD" ]), re = /^-[^-]*[CD]|^--chd/;

async function Qzo(e, n) {
  let t = await gjt(e);
  if (t.kind !== "simple" || t.hasLoop !== !1) return "unparsed";
  let s = t.bareAssignmentNames.some(c => N.has(c)), r = [ n ], l = !1, o = [];
  for (let c of t.commands) {
    if (c.envVars.some(h => N.has(h.name)) || c.argv.some(h => h.includes("=") && N.has(h.split(/\+?=/, 1)[0] ?? ""))) s = !0;
    let {simple: u, wrapperWords: i} = z(c), m = l, y = U(u, r);
    if (y === "unknown" || y !== void 0 && (s || u.argv.slice(1).some(j))) l = !0;
    if (y !== void 0 && y !== "unknown") r = y;
    let g = i.some(h => re.test(h));
    for (let h of [ {
      list: c.argv,
      directories: g ? [] : r,
      mayBeElsewhere: m || g
    }, {
      list: [ ...c.envVars.map(a => a.value), ...c.redirects.filter(a => a.op !== "<<" && a.op !== "<<<").map(a => a.target) ],
      directories: r,
      mayBeElsewhere: m
    } ]) for (let a of h.list) for (let p of V(a)) o.push({
      word: p,
      directories: h.directories,
      mayBeElsewhere: h.mayBeElsewhere
    });
  }
  return o;
}

function V(e) {
  return [ e, ...e.includes("=") ? [ e.slice(e.indexOf("=") + 1) ] : [], .../^-[^-]./.test(e) ? Array.from({
    length: e.length - 2
  }, (n, t) => e.slice(t + 2)) : [] ];
}

function z(e) {
  let [n, ...t] = e.argv;
  if (n === void 0) return {
    simple: e,
    wrapperWords: [],
    pathSpelled: !1,
    doubt: !1
  };
  let s = [ F(n), ...t ], r = oN(sot(s)), l = s.length - r.length, o = l >= 0 && r.every((m, y) => m === s[l + y]), c = o ? s.slice(0, l) : s, u = o && l === 0 ? n : r[0], i = u === void 0 ? void 0 : F(u);
  return {
    simple: o && l === 0 && n === s[0] ? e : {
      ...e,
      argv: r,
      text: co(r)
    },
    wrapperWords: c,
    pathSpelled: n !== s[0] || u !== void 0 && u !== i,
    doubt: !o || !k(n) || [ ...c, ...u === void 0 ? [] : [ u ] ].some(Js) || c.some(m => m.startsWith("-") && m !== "-" && m !== "--" || M(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(m)?.[1] ?? "")) || u !== void 0 && i !== void 0 && (!k(u) || i.startsWith("-") || J.has(i))
  };
}

function F(e) {
  return e.replace(O() === "windows" ? /^.*[\\/]/ : /^.*\//, "");
}

function se(e) {
  let [n, ...t] = e.argv;
  return e.envVars.some(s => M(s.name)) || n !== void 0 && q.has(n) && t.some(s => {
    let r = s.split(/\+?=/, 1)[0] ?? "";
    return Js(r) || R(r);
  });
}

function P(e, n) {
  let t = vR(e, n, Ud(), "write");
  if (t.allowed) return "none";
  if (t.decisionReason?.type === "safetyCheck") {
    if (yj(t.decisionReason)) return "settings";
    return san(t.decisionReason) ? "uncertain" : "none";
  }
  if (t.decisionReason?.type !== "other") return "none";
  return _jt(e, n) ? "settings" : "uncertain";
}

function oe(e, n) {
  let t = vR(e, n, Ud(), "write");
  return !t.allowed && t.decisionReason?.type === "safetyCheck" && san(t.decisionReason);
}

function _jt(e, n) {
  let t = I(n, qc(O() === "windows" ? e.replaceAll("\\", "/") : e)), s = mz(t, [ t ]);
  return !s.safe && yj(s);
}

function U(e, n) {
  let [t, ...s] = e.argv;
  if (t === "popd") return "unknown";
  if (t !== "cd" && t !== "chdir" && t !== "pushd") return;
  let r = [], l = !1;
  for (let i of s) {
    if (!l) {
      if (i === "--") {
        l = !0;
        continue;
      }
      if (i.startsWith("-") && i !== "-") continue;
      l = !0;
    }
    r.push(i);
  }
  let o = r[0];
  if (o === void 0) return t === "pushd" ? "unknown" : W(n, [ x() ]);
  if (r.length > 1 || o === "-" || t === "pushd" && /^[+-]\d+$/.test(o) || Js(o) || P(o, n[0] ?? x()) === "uncertain") return "unknown";
  let c = qc(o), u = C(c) ? [ c ] : n.map(i => I(i, c));
  return W(n, [ ...u, ...u.flatMap(ie) ]);
}

function j(e) {
  let n = !1;
  for (let t of e.split(/[\\/]/)) if (t === "..") {
    if (n) return !0;
  } else if (t !== "" && t !== ".") n = !0;
  return !1;
}

function ie(e) {
  try {
    return uo(e).filter(n => n !== e);
  } catch {
    return [];
  }
}

function W(e, n) {
  let t = D([ ...e, ...n ]);
  return t.length > Y ? "unknown" : t;
}

export { kke, gjt, hjt, yjt, uXn, s1r, i1r, aJ, Qzo, _jt };
