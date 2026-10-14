// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { My } from "./chunk-5wbhf1bk.js";

import { X9, rKn, wE, dn } from "./chunk-nnrb0acr.js";

import { yb } from "./chunk-t70vnbgq.js";

import { Ls } from "./chunk-sqb9meyh.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Ro, K4e, dXt } from "./chunk-wgsx43va.js";

import { Jx, Dye, P0e, vKe, sYt, lRn, Uqe } from "./chunk-84yp45y8.js";

var N_t = [ "on", "name-only", "user-invocable-only", "off" ];

function x(e) {
  return e.type === "prompt" && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp");
}

function BBr(e) {
  let n = lRn(e);
  if (n) return {
    value: n.value,
    source: n.source === "policySettings" ? "policy" : "flag"
  };
  if (!Dye(e.name)) return {
    value: e.disableModelInvocation ? "user-invocable-only" : "on",
    source: "reserved-name"
  };
  if (e.disableModelInvocation) return {
    value: "user-invocable-only",
    source: "author"
  };
  if (e.source === "plugin") return {
    value: "on",
    source: "plugin"
  };
  return;
}

function F(e, {skipLocalBareKey: n = !1} = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [ e.name, ...sYt(e) ];
    for (let y of [ "projectSettings", "userSettings" ]) {
      if (!dn(y)) continue;
      let m = vKe(fe(y)?.skillOverrides, a);
      if (m !== void 0) return m;
    }
    return;
  }
  let i = a => dn(a) ? fe(a)?.skillOverrides : void 0, o = a => Jx(i("projectSettings"), a) ?? Jx(i("userSettings"), a), t = P0e(e), f = n ? void 0 : Jx(fe("localSettings")?.skillOverrides, t);
  return o(e.name) ?? (t != null ? f ?? o(t) : void 0);
}

function b(e, n) {
  return e.loadedFrom === "mcp" ? vKe(n, [ e.name, ...sYt(e) ]) : Jx(n, e.name);
}

function tHe(e, n) {
  if (n === "syncedSkills") return X9;
  switch (e) {
   case "mcp":
   case "plugin":
    return e;

   case "memoryStore":
    return "memory store";

   case "bundled":
   case "builtin":
    return "built-in";

   default:
    return wE(e);
  }
}

function Uze(e) {
  let n = dXt(e);
  return n !== void 0 && Ro(e) === n ? n : e.name;
}

function jBr(e, n) {
  let i = n.filter(l => l.loadedFrom !== "syncedSkills"), o = [];
  for (let l of e) {
    let S = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || S === void 0 || K4e(l) !== void 0) continue;
    let r = My(S), u = Ls(S, i), O = yb(S), v = g => [ g.name, Ro(g), ...g.aliases ?? [] ], C = g => v(g).find(R => yb(R) === O), d = u ?? i.find(g => C(g));
    if (!d) {
      o.push({
        bare: r,
        sentence: `Your claude.ai skill can't use /${r} in this session.`,
        held: !1,
        userCanFree: !1,
        renameNeedsNameLine: !1
      });
      continue;
    }
    let p = d.type === "prompt" ? d : void 0, k = p?.skillRoot !== void 0 ? "skill" : `command file ${My(d.name)}.md`, c, s = "", h = !1;
    if (d.kind === "workflow") c = "a workflow"; else if (d.loadedFrom === "plugin") c = "a command from a plugin"; else switch (rKn(d)) {
     case "user":
      {
        let g = p?.skillRoot !== void 0 ? ` in ${My(Os(p.skillRoot))}` : "";
        c = `your own ${k}${g}`, h = d.loadedFrom === "skills", s = h ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
        break;
      }

     case "project":
      c = `this project's ${k}`;
      break;

     case "managed":
      c = `a ${k} your organization manages`;
      break;

     case "plugin":
      c = "a command from a plugin";
      break;

     case "remote":
      c = d.loadedFrom === "mcp" ? "a skill from an MCP server" : d.isMcp ? "a prompt from an MCP server" : "another command";
      break;

     case "builtin":
     case "bundled":
      c = "a built-in Claude Code command";
      break;

     default:
      c = "another command";
    }
    let w = `/${My(C(d) ?? d.name)}`, N = u !== void 0 ? `/${r} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}` : `/${r} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
    o.push({
      bare: r,
      sentence: N,
      held: !0,
      userCanFree: s !== "",
      renameNeedsNameLine: h
    });
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let t = o.every(l => l.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session", f = `${L(o)} ${t}, so they don't run your claude.ai skills.`, a = o.filter(l => l.userCanFree);
  if (a.length === 0) return f;
  let y = a.some(l => l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename", m = a.length === 1 ? "one" : "ones";
  return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}

function L(e) {
  let n = e.map(i => `/${i.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}

function Bze(e, {sortByTokens: n = !1} = {}) {
  let i = e.filter(x);
  if (n) {
    let o = new Map(i.map(t => [ t, Uqe(t) ]));
    return i.sort((t, f) => (o.get(f) ?? 0) - (o.get(t) ?? 0) || Uze(t).localeCompare(Uze(f)));
  }
  return i.sort((o, t) => tHe(o.source, o.loadedFrom).localeCompare(tHe(t.source, t.loadedFrom)) || Uze(o).localeCompare(Uze(t)));
}

function Y9n() {
  return Object.assign(Object.create(null), fe("localSettings")?.skillOverrides);
}

function jze(e, n = Y9n()) {
  let i = new Map, o = new Map;
  for (let t of e) {
    let f = F(t);
    if (f) i.set(t.name, f);
    let a = BBr(t);
    if (a) o.set(t, a);
  }
  return {
    localOverrides: n,
    lowerTier: i,
    locked: o
  };
}

function Wze(e, n) {
  let i = Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(i, o.name)) continue;
    i[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
  }
  return i;
}

function sjt(e, n, i) {
  let {localOverrides: o, lowerTier: t, locked: f} = i, a = new Set(Array.from(f.keys(), r => r.name)), y = new Set(a), m = Object.create(null), l = 0, S = 0;
  for (let r of e) {
    if (y.has(r.name)) continue;
    y.add(r.name);
    let u = Jx(n, r.name) ?? "on", O = t.get(r.name) ?? "on", v = b(r, o) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = !1, k = u === O ? void 0 : u;
      if (k !== Jx(o, r.name) || Object.hasOwn(m, r.name)) m[r.name] = k, p = !0;
      for (let c of sYt(r)) {
        if (Jx(o, c) === void 0) continue;
        for (let s of e) {
          if (s.name === r.name || s.loadedFrom !== "mcp" || !sYt(s).includes(c) || Object.hasOwn(m, s.name)) continue;
          let h = b(s, o);
          if ((a.has(s.name) || (Jx(n, s.name) ?? "on") === (h ?? t.get(s.name) ?? "on")) && h !== void 0) m[s.name] = h;
        }
        m[c] = void 0, p = !0;
      }
      if (p) l++;
      S++;
      continue;
    }
    let C = r.loadedFrom === "syncedSkills" ? P0e(r) : void 0;
    if (C != null && Jx(o, C) !== void 0 && u !== v) {
      let p = F(r, {
        skipLocalBareKey: !0
      }) ?? "on", k = u === p ? void 0 : u;
      if (k !== Jx(o, r.name)) m[r.name] = k;
      m[C] = void 0, l++, S++;
      continue;
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== Jx(o, r.name)) m[r.name] = d, l++;
    if (u !== v) S++;
  }
  return {
    diff: m,
    writes: l,
    effectiveChanged: S
  };
}

export { N_t, BBr, tHe, Uze, jBr, Bze, Y9n, jze, Wze, sjt };
