// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, ps, ew } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { WPe, Xi, no, Fr, dU, In } from "./chunk-xywp7esx.js";

import { Mj, Tp } from "./chunk-5brm0azz.js";

import { kd, BDs, Ep, mVn } from "./chunk-8yperama.js";

import { ws } from "./chunk-nnrb0acr.js";

import { Yl, kee, SG, TE, wG, ngt, dqn, jn, bn } from "./chunk-1z2heevg.js";

import { vxo } from "./chunk-dd98x6x7.js";

import { Qs, ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { $p } from "./chunk-9tdwgnpn.js";

import { gt } from "./chunk-yebkpv3k.js";

import { mH } from "./chunk-tsqxvhwm.js";

import { kl } from "./chunk-x1z20h6y.js";

import { ho } from "./chunk-9r9vcg3z.js";

import { cr } from "./chunk-2kgjyw8x.js";

import { Dr, Oxe } from "./chunk-10gv16xm.js";

import { DAr } from "./chunk-0f42zdcd.js";

import { et } from "./chunk-59na0977.js";

import { oX, oo, po, zs, jc, YIo, aXe, XIo, HNs } from "./chunk-vjmbaret.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var J = "bot_protected_tengu_atomic_magpie", X = new Set([ "session", "cliArg" ]), x = new K(() => ({
  value: !1
}));

function Z7t(e, n) {
  if (e === kd && !Ep(n) && "url" in n && typeof n.url === "string" && mVn(n.url)) ps(x).value = !0;
}

function Qoe(e) {
  if (e !== cr && e !== $p || !(ps(x).value || a.CLAUDE_CODE_PROJECTS_SESSION || WPe(ew()))) return !1;
  let n = In(J, !1);
  return !(n.value === !0 && n.source === "payload" && !dU());
}

function R(e) {
  let n = typeof e !== "string", o = !n && TE(e);
  return [ cr, $p ].some(r => (n || o || Yl(e) === r) && Qoe(r) && (!o || ngt(e, r)));
}

function O(e, n) {
  return !X.has(e) && Qoe(n);
}

function v() {
  return Qoe(cr) || Qoe($p);
}

function k(e) {
  if (typeof e !== "object" || e === null) return !0;
  if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") return !1;
  let n = "rules" in e ? e.rules : void 0;
  return !Array.isArray(n) || n.some(o => typeof o !== "object" || o === null || !("toolName" in o) || typeof o.toolName !== "string" || "ruleContent" in o && o.ruleContent !== void 0 && typeof o.ruleContent !== "string");
}

function I(e, n) {
  if (e.type !== "removeRules" && e.type !== "replaceRules" || e.behavior === "allow") return;
  if (e.type === "replaceRules") {
    if (n === void 0) return e.rules.length === 0 ? [] : [ {
      type: "addRules",
      rules: e.rules,
      behavior: e.behavior,
      destination: e.destination
    } ];
    let r = (e.behavior === "deny" ? n.alwaysDenyRules : n.alwaysAskRules) ?? {}, s = Object.hasOwn(r, e.destination) ? r[e.destination] : void 0, i = Array.isArray(s) ? s : [], m = f => bn(jn(f)), l = new Set(e.rules.map(f => m(bn(f)))), u = i.map(f => jn(f)).filter(f => R(f.toolName) && !l.has(m(bn(f))));
    return u.length === 0 ? void 0 : [ {
      ...e,
      rules: [ ...e.rules, ...u ]
    } ];
  }
  let o = e.rules.filter(r => !R(r.toolName));
  if (o.length === e.rules.length) return;
  return o.length === 0 ? [] : [ {
    ...e,
    rules: o
  } ];
}

function WFn(e, n) {
  if (!v()) return e;
  let o = !1, r = e.flatMap(s => {
    if (k(s)) return o = !0, [];
    let i = I(s, n);
    if (i !== void 0) return o = !0, i;
    if (s.type !== "addRules" && s.type !== "replaceRules" || s.behavior !== "allow") return [ s ];
    let m = s.rules.filter(l => !R(l.toolName));
    if (m.length === s.rules.length) return [ s ];
    return o = !0, m.length === 0 ? [] : [ {
      ...s,
      rules: m
    } ];
  });
  return o ? r : e;
}

function dOt(e, n) {
  let o = jc(e);
  if (o === $p) return {
    toolName: o
  };
  let r = typeof n === "object" && n !== null && "url" in n ? n.url : void 0;
  if (o !== cr || typeof r !== "string") return;
  try {
    let s = new URL(r).hostname;
    return s.includes("*") ? void 0 : {
      toolName: o,
      ruleContent: `domain:${s}`
    };
  } catch {
    return;
  }
}

function IY(e, n, o) {
  if (!v()) return e;
  let r = !1, s = e.flatMap(i => {
    if (k(i)) return r = !0, [];
    let m = I(i, o);
    if (m !== void 0) return r = !0, m;
    if (i.type !== "addRules" && i.type !== "replaceRules" || i.behavior !== "allow") return [ i ];
    let l = i.rules.filter(c => R(c.toolName));
    if (l.length === 0) return [ i ];
    r = !0;
    let u = i.rules.filter(c => !R(c.toolName)), f = i.type === "addRules" && n !== void 0 ? l.filter(c => Yl(c.toolName) === n.toolName && c.ruleContent === n.ruleContent) : [];
    return [ ...u.length > 0 ? [ {
      ...i,
      rules: u
    } ] : [], ...f.length > 0 ? [ {
      ...i,
      destination: "session",
      rules: f
    } ] : [] ];
  });
  return r ? s : e;
}

var M = Ue(new Set, e => e.clear());

function zFn(e, n) {
  let o = e.toolName;
  if (M.has(o)) return;
  M.add(o), t(n.mcpInfo ? `Allow rule "${o}" does not allow the tools named "${po(n.mcpInfo.serverName)}<tool>": they belong to another MCP server than the rule names. To allow them, use "${po(n.mcpInfo.serverName)}*".` : `Allow rule "${o}" does not allow "${n.name}": the name reads as more than one MCP server's. To allow it, use the tool's full name.`, {
    level: "warn"
  });
}

var q = new K(() => new Set);

function Igo(e, n) {
  for (let o of n) L().add(zs(e, o));
}

function C(e) {
  if (!e.startsWith("mcp__")) return !1;
  for (let n of L()) if (e === n || HNs(e, {
    name: n
  })) return !0;
  return !1;
}

function L() {
  return q.of(B().host);
}

var Q = [], GFn = [ ...Q, "python", "python3", "python2", "node", "deno", "tsx", "ruby", "perl", "php", "lua", "npx", "bunx", "npm run", "yarn run", "pnpm run", "bun run", "bash", "sh", "ssh" ], Ogo = [ ...GFn, "zsh", "fish", "eval", "exec", "env", "xargs", "sudo" ], mwr = [ "curl", "wget", "kubectl", "aws", "gcloud", "gsutil" ], gwr = [], D = new Set([ ...mwr, ...gwr ]), U = {
  kubectl: new Set([ "exec", "apply", "create", "delete", "run", "cp", "port-forward", "proxy", "patch", "edit", "replace", "attach", "debug", "scale", "rollout", "drain", "cordon", "taint" ]),
  ...!1
}, V = [ ...Ogo, ...[] ];

function hwr(e, n) {
  if (e !== je) return !1;
  if (n === void 0 || n === "") return !0;
  if (/^[\s*]+$/.test(n)) return !0;
  return VFn(n, V);
}

function VFn(e, n) {
  let o = e.trim().toLowerCase();
  if (o === "*") return !0;
  for (let r of n) {
    let s = r.toLowerCase();
    if (o === s) return !0;
    if (o === `${s}:*` || o === `${s} *`) return !0;
    if (o === `${s}*`) return !0;
    if (o.startsWith(`${s} `) && o.endsWith("*")) {
      let i = o.slice(s.length + 1);
      if (D.has(s)) {
        if (/[$`]/.test(i)) return !0;
        let m = U[s];
        if (m === "all") return !0;
        let l = i.replace(/[\s:*]+$/, "").split(/\s+/).filter(Boolean), u = 0;
        for (;u < l.length; u++) {
          let c = l[u];
          if (!c.startsWith("-")) break;
          if (!c.includes("=") && u + 1 < l.length && !l[u + 1].startsWith("-")) u++;
        }
        let f = l[u];
        if (f === void 0) {
          if ((s === "curl" || s === "wget") && l.some(c => c.includes("://"))) continue;
          return !0;
        }
        if (m?.has(f)) return !0;
        continue;
      }
      if (i.startsWith("-")) {
        let m = i.slice(0, -1);
        if (!(/^python[\d.]*$/.test(s) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(m))) return !0;
      }
    }
  }
  return !1;
}

function ywr(e, n) {
  if (e !== Rt) return !1;
  if (n === void 0 || n === "") return !0;
  if (/^[\s*]+$/.test(n)) return !0;
  let o = n.trim().toLowerCase();
  if (o === "*") return !0;
  let r = [ ...GFn, "pwsh", "powershell", "cmd", "wsl", "iex", "invoke-expression", "icm", "invoke-command", "start-process", "saps", "start", "start-job", "sajb", "start-threadjob", "invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "register-objectevent", "register-engineevent", "register-wmievent", "register-scheduledjob", "new-pssession", "nsn", "enter-pssession", "etsn", "add-type", "new-object" ];
  for (let s of r) {
    if (o === s) return !0;
    if (o === `${s}:*`) return !0;
    if (o === `${s}*`) return !0;
    if (o === `${s} *`) return !0;
    if (o.startsWith(`${s} -`) && o.endsWith("*")) return !0;
    let i = s.indexOf(" "), m = i === -1 ? `${s}.exe` : `${s.slice(0, i)}.exe${s.slice(i)}`;
    if (o === m) return !0;
    if (o === `${m}:*`) return !0;
    if (o === `${m}*`) return !0;
    if (o === `${m} *`) return !0;
    if (o.startsWith(`${m} -`) && o.endsWith("*")) return !0;
  }
  return !1;
}

function eGs(e, n) {
  return Yl(e) === gt;
}

function ee(e) {
  return e === kl;
}

class W {
  verdicts=new Map;
  lookup(e) {
    return this.verdicts.get(e);
  }
  remember(e, n) {
    this.verdicts.set(e, n);
  }
  reset() {
    this.verdicts.clear();
  }
}

var F = new W;

function fFe() {
  return Mj() || vxo();
}

function cOt(e, n) {
  let o = `${e}\0${n ?? ""}`, r = F.lookup(o);
  if (r !== void 0) return r;
  let s = hwr(e, n) || ywr(e, n) || eGs(e, n) || ee(e) || e === import.meta.require("./chunk-b1bs6y86.js").APPIFACT_REPL_TOOL_NAME;
  return F.remember(o, s), s;
}

function _wr(e) {
  return C(jc(e)) || Mj() && cOt(e.name, void 0);
}

function Zoe(e, n) {
  if ((e === je || e === Rt) && fFe()) return !0;
  if (C(e)) return !0;
  return cOt(e, n);
}

function Nws(e) {
  if (e === je || e === Rt) return fFe() ? void 0 : e;
  if (mH(e) || Zoe(e, void 0) || KFn(e)) return;
  return e === qt || e === Xi ? ht : e;
}

var ne = new Set(Array.from(BDs, e => zs(kd, e)));

function KFn(e) {
  return ne.has(e);
}

var y1 = [ ...ws, "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy", "hostCredential" ], mFe = [ "toolsNarrowing", "command" ], oe = new Set([ import.meta.require("./chunk-mdvvh5zs.js").END_CONVERSATION_TOOL_NAME ]);

function $7(e) {
  return !e.mcpInfo && oe.has(e.name);
}

function fH(e) {
  if (Qs(e.mode, e.servedCall === !0)) {
    let r = a.CLAUDE_CODE_EVAL_CONFINED ? {
      cliArg: e.alwaysAllowRules.cliArg
    } : e.alwaysAllowRules, s = [];
    for (let i of y1) {
      let m = r[i];
      if (m === void 0) continue;
      for (let l of m) {
        let u = jn(l);
        if (Zoe(u.toolName, u.ruleContent)) continue;
        if (KFn(u.toolName)) continue;
        if (O(i, u.toolName)) continue;
        s.push({
          source: i,
          ruleBehavior: "allow",
          ruleValue: u
        });
      }
    }
    return s;
  }
  if (a.CLAUDE_CODE_EVAL_CONFINED) return gFe({
    cliArg: e.alwaysAllowRules.cliArg
  }, "allow");
  let n = gFe(e.alwaysAllowRules, "allow"), o;
  for (let [r, s] of n.entries()) if (O(s.source, s.ruleValue.toolName)) o ??= n.slice(0, r); else o?.push(s);
  return o ?? n;
}

function gFe(e, n) {
  let o = [];
  for (let r of y1) {
    let s = e[r];
    if (s === void 0) continue;
    for (let i of s) o.push({
      source: r,
      ruleBehavior: n,
      ruleValue: jn(i)
    });
  }
  return o;
}

function Qd(e) {
  return gFe(e.alwaysDenyRules, "deny");
}

function zm(e) {
  return gFe(e.alwaysAskRules, "ask");
}

function eZt(e, n, o = {}) {
  if (n.ruleValue.ruleContent !== void 0) return !1;
  return S(e, n, o);
}

function S(e, n, {proxyExpansion: o = !1, globMatching: r = !1, toolAliases: s} = {}, i = w(n), m = T(e, s)) {
  let l = m.name;
  if (n.ruleValue.toolName === l) return !0;
  let u = "familyParentToolName" in e ? e.familyParentToolName : void 0;
  if (u !== void 0 && e.mcpInfo === void 0 && n.ruleValue.toolName === u) return !0;
  if (o && kee(n.ruleValue.toolName, s).includes(l)) return !0;
  let {matchesGlob: f} = i;
  if (r && f !== void 0 && (f(l) || o && m.aliasSources().some(f))) return !0;
  let c = i.coversMcpTool(m.mcpInfo());
  if (n.ruleBehavior === "allow") {
    if (!c) return !1;
    if (XIo(n.ruleValue.toolName, e)) return !0;
    return zFn(n.ruleValue, e), !1;
  }
  return c || j(n) && m.mcpServerRuleNames().includes(n.ruleValue.toolName);
}

function j({source: e, ruleValue: n}) {
  return e !== "mcpServerPolicy" && n.toolName.startsWith(oX);
}

function w({ruleValue: {toolName: e}}) {
  let n, o;
  return {
    matchesGlob: TE(e) ? r => (n ??= dqn(e))(r) : void 0,
    coversMcpTool: r => (o ??= YIo(e))(r)
  };
}

function T(e, n) {
  let o = jc(e), r, s, i;
  return {
    name: o,
    mcpInfo: () => i === void 0 ? i = oo(o) : i,
    aliasSources: () => r ??= SG(o, n),
    mcpServerRuleNames: () => s ??= aXe(e)
  };
}

function XV(e, n) {
  return fH(e).find(o => eZt(n, o)) || null;
}

function g(e) {
  return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}

function vP(e, n, o, r = w(o), s) {
  let i = {
    proxyExpansion: g(o),
    globMatching: !0,
    toolAliases: e.toolAliases
  };
  if (S(n, o, i, r, s)) return !0;
  if (("aliasSkillToolNames" in n ? n.aliasSkillToolNames : void 0)?.some(u => S({
    name: u
  }, o, i, r))) return !0;
  let l = "packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames : void 0;
  if (l === void 0 || TE(o.ruleValue.toolName) && !Tp()) return !1;
  return l.some(u => S({
    name: u
  }, o, i, r));
}

function zo(e, n, o) {
  if ($7(n)) return null;
  let r;
  return (o ?? Qd(e)).find(s => A(n, s, e, void 0, r ??= T(n, e.toolAliases))) || null;
}

function Mgo(e) {
  return /^[\s*]+$/.test(e);
}

function re(e) {
  return e.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(e.replace(/\/{2,}/g, "/"));
}

var G = [ ht, qt, Xi ], H = [ et, Fr, no ], te = new Map([ [ et, {
  deny: [ ...H, ht, qt ],
  ask: H
} ], [ ht, {
  deny: G,
  ask: G
} ] ]);

function N({ruleBehavior: e, ruleValue: {toolName: n, ruleContent: o}}, r) {
  if (o === void 0 || e === "allow") return !1;
  return n === je ? r === je && Mgo(o) : re(o) && (te.get(n)?.[e] ?? []).includes(r);
}

function A(e, n, o, r, s) {
  if (n.ruleValue.ruleContent === void 0) return vP(o, e, n, r, s);
  let {name: i, aliasSources: m} = s ?? T(e, o.toolAliases), l = n.ruleValue.toolName === i, u = g(n);
  return m().some(f => f !== i && (u && N(n, f) || l && N(Y(f, n), f)));
}

function Y(e, n) {
  return {
    ...n,
    ruleValue: {
      ...n.ruleValue,
      toolName: e
    }
  };
}

function se(e) {
  if (TE(e)) return !0;
  let n = oo(e);
  return n !== null && n.toolName === void 0;
}

function Hgo(e, n) {
  let o = new Set, r = new Set, s = new Set, i = [], m = [];
  for (let l of n) {
    let {toolName: u, ruleContent: f} = l.ruleValue;
    if (f !== void 0) {
      if (Object.entries(e.toolAliases ?? {}).some(([d, y]) => N(l, d) || y === u && N(Y(d, l), d))) m.push(l);
      continue;
    }
    if (se(u)) {
      i.push({
        rule: l,
        ruleName: w(l)
      });
      continue;
    }
    if (j(l)) s.add(u);
    r.add(u);
    let c = g(l) ? kee(u, e.toolAliases) : [ u ];
    for (let d of c) o.add(d);
  }
  return {
    names: o,
    parentNames: r,
    mcpServerNames: s,
    patterns: i,
    withContent: m
  };
}

function Due(e) {
  let n = Qd(e);
  return {
    rules: n,
    index: Hgo(e, n)
  };
}

function Q5e(e, n, o) {
  if ($7(o) || n.names.size === 0 && n.patterns.length === 0 && n.withContent.length === 0) return !1;
  let r = T(o, e.toolAliases);
  if (n.names.has(r.name)) return !0;
  let s = "familyParentToolName" in o ? o.familyParentToolName : void 0;
  if (s !== void 0 && o.mcpInfo === void 0 && n.parentNames.has(s)) return !0;
  let i = "aliasSkillToolNames" in o ? o.aliasSkillToolNames : void 0;
  if (i?.some(l => n.names.has(l))) return !0;
  let m = "packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : void 0;
  if (m?.some(l => n.names.has(l))) return !0;
  if (n.mcpServerNames.size > 0 && (r.mcpServerRuleNames().some(l => n.mcpServerNames.has(l)) || [ ...i ?? [], ...m ?? [] ].some(l => aXe({
    name: l
  }).some(u => n.mcpServerNames.has(u))))) return !0;
  return n.patterns.some(({rule: l, ruleName: u}) => A(o, l, e, u, r)) || r.aliasSources().length > 0 && n.withContent.some(l => A(o, l, e, void 0, r));
}

function $ws(e, n) {
  if (!$7(n)) return !1;
  if (fH(e).some(r => r.ruleValue.toolName === n.name)) return !1;
  return Qd(e).some(r => eZt(n, r, {
    proxyExpansion: g(r),
    globMatching: !0,
    toolAliases: e.toolAliases
  }));
}

function ese(e, n, o) {
  return Qd(e).find(r => r.ruleValue.toolName === n && r.ruleValue.ruleContent === o) || null;
}

function Fws(e, n, o) {
  return zm(e).find(r => r.ruleValue.toolName === n && r.ruleValue.ruleContent === o) || null;
}

function Uws(e, n, o) {
  let r = new Set;
  for (let s of Qd(n)) if (s.ruleValue.toolName === o && s.ruleValue.ruleContent !== void 0) r.add(s.ruleValue.ruleContent);
  return e.filter(s => !r.has(s.agentType));
}

function rd(e, n, o) {
  if ($7(n)) return null;
  let r;
  return (o ?? zm(e)).find(s => A(n, s, e, void 0, r ??= T(n, e.toolAliases))) || null;
}

function ie(e) {
  if (e === void 0 || e === null) return null;
  if (typeof e !== "object") return String(e);
  return null;
}

function le(e) {
  let n = e.indexOf(":");
  if (n <= 0) return null;
  let o = e.slice(0, n).trim(), r = e.slice(n + 1).trim();
  return o === "" || r === "" ? null : {
    key: o,
    expected: r
  };
}

function gdt(e, n) {
  return `Permission to use ${e} with ${n.ruleValue.ruleContent} has been denied.`;
}

function Fh(e, n, o, r) {
  let s = jc(n), i = [ ..."aliasSkillToolNames" in n ? n.aliasSkillToolNames ?? [] : [], ..."packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames ?? [] : [] ], m = [ [ s, !1 ], ...i.map(u => [ u, !1 ]), ...SG(s, e.toolAliases).map(u => [ u, !0 ]) ];
  for (let [u, f] of m) {
    let c = ISe(e, u, r).filter(d => !f || g(d));
    for (let [d = "", y] of new Map(c.map(p => [ p.ruleValue.ruleContent, p ]))) {
      let p = le(d);
      if (p === null) continue;
      let {key: P, expected: h} = p;
      if (P === n.ruleContentField) continue;
      let _ = P === Oxe && !Object.hasOwn(o, P) && Object.hasOwn(o, Dr) ? Dr : P;
      if (!Object.hasOwn(o, _)) continue;
      let E = ie(o[_]);
      if (E === null) continue;
      if (wG(h, E.trim())) return y;
      if (s === ho && _ === "skill") {
        let z = E.trim(), b = DAr(z);
        if (b !== void 0) {
          if ((!h.includes("*") || Tp()) && wG(h, b)) return y;
        }
      }
    }
  }
  let l = "familyParentToolName" in n ? n.familyParentToolName : void 0;
  if (l !== void 0 && n.mcpInfo === void 0 && n.toFamilyParentInput !== void 0) return Fh(e, {
    name: l,
    ruleContentField: n.ruleContentField
  }, n.toFamilyParentInput(o), r);
  return null;
}

function tse(e, n, o) {
  return v0(e, jc(n), o);
}

function v0(e, n, o) {
  let r = new Map;
  for (let s of ISe(e, n, o)) if (s.ruleValue.ruleContent !== void 0) r.set(s.ruleValue.ruleContent, s);
  return r;
}

function ISe(e, n, o) {
  let r = [];
  switch (o) {
   case "allow":
    r = fH(e);
    break;

   case "deny":
    r = Qd(e);
    break;

   case "ask":
    r = zm(e);
    break;
  }
  let s = [];
  for (let i of r) if (i.ruleValue.toolName === n && i.ruleValue.ruleContent !== void 0 && i.ruleBehavior === o) s.push(i);
  return s;
}

export { Z7t, Qoe, WFn, dOt, IY, zFn, Igo, GFn, Ogo, mwr, gwr, hwr, VFn, ywr, eGs, fFe, cOt, _wr, Zoe, Nws, KFn, y1, mFe, $7, fH, gFe, Qd, zm, eZt, XV, vP, zo, Mgo, Hgo, Due, Q5e, $ws, ese, Fws, Uws, rd, gdt, Fh, tse, v0, ISe };
