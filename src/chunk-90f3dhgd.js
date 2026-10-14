// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { j, l, Ms } from "./chunk-b0z4bv3v.js";

import { oWe } from "./chunk-ddr690nj.js";

import { Y, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { yh } from "./chunk-q6wab2jw.js";

import { sD } from "./chunk-fvcjfcfm.js";

import { mn, rf, Nz, kn } from "./chunk-8drhysk2.js";

import { mk } from "./chunk-9wtp3skp.js";

import { b0e, ort, dpr, eOn, tst, qLe, Eoo } from "./chunk-84yp45y8.js";

import { ai, N7 } from "./chunk-f4r8hspx.js";

import { Dc } from "./chunk-9tdwgnpn.js";

import { tH } from "./chunk-bv9f914r.js";

import { D } from "./chunk-hmqkrrtz.js";

import * as f from "fs/promises";

import * as u from "path";

async function s3n(n, e) {
  if (e === "builtin") {
    let h = mk(n.name);
    if (!h) throw Error(`Built-in plugin ${n.name} not found`);
    return {
      commands: [],
      agents: [],
      skills: h.skills?.map(M => ({
        name: M.name
      })) ?? [],
      hooks: h.hooks ? Object.keys(h.hooks) : [],
      mcpServers: h.mcpServers ? Object.keys(h.mcpServers) : [],
      lspServers: []
    };
  }
  let r = rf(e) || e === yh, o = kn(n.source).name || n.name, m = e === mn ? (await tst(`${o}@${e}`, void 0, "load"))?.entry ?? (await dpr(o, void 0, !0))?.entry : void 0, s = r ? void 0 : m ?? (await eOn(e, void 0)).plugins.find(h => h.name === o);
  if (!s && !r) throw Error(`Plugin ${o} not found in marketplace ${e}`);
  let [c, a, p] = await Promise.all([ F([ n.commandsPath, ...n.commandsPaths ?? [] ]), F([ n.agentsPath, ...n.agentsPaths ?? [] ]), x([ n.skillsPath, ...n.skillsPaths ?? [] ], n.name) ]), g = n.hooksConfig ? Object.keys(n.hooksConfig) : k(s?.hooks), i = n.mcpServers ? Object.keys(n.mcpServers) : D(await L(n)), P = i.length > 0 ? i : k(s?.mcpServers), y = n.lspServers ? Object.keys(n.lspServers) : (await A(n)).concat(k(n.manifest.lspServers)), _ = y.length > 0 ? D(y) : k(s?.lspServers);
  return {
    commands: c,
    agents: a,
    skills: p,
    hooks: g,
    mcpServers: P,
    lspServers: _
  };
}

async function jKs(n, e, r) {
  let [o, m, s] = await Promise.all([ Promise.all(n.skills.map(i => w(i.path ? u.join(i.path, "SKILL.md") : void 0, E(i, r)))), Promise.all(n.agents.map(i => w(i.path, i.name))), Promise.all(n.commands.map(i => w(i.path, E(i, r)))) ]), c = [ ...o, ...m, ...s ], a = c.map(i => i.alwaysOn).filter(Boolean).join(`\n`), p = c.map(i => i.onInvoke).filter(Boolean).join(`\n\n`), g = {};
  for (let i of e) {
    let [P, y] = await Promise.all([ I(a, i), I(p, i) ]);
    if (P !== null && y !== null) g[i] = {
      always_on: P,
      on_invoke: y
    };
  }
  return {
    tokens: g,
    inventory: {
      ...n,
      skills: S(n.skills, o),
      agents: S(n.agents, m),
      commands: S(n.commands, s)
    }
  };
}

function WKs(n, e, r, o = 4) {
  if (r !== void 0 && e > 0) return Math.round(n / e * r);
  return Dc(" ".repeat(n), o);
}

var v = 1048576;

function E(n, e) {
  if (!e) return n.name;
  return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

async function w(n, e) {
  if (!n) return {
    alwaysOn: "",
    onInvoke: ""
  };
  let r;
  try {
    r = await b(n, v);
  } catch (p) {
    return C(n, p), {
      alwaysOn: "",
      onInvoke: ""
    };
  }
  let {frontmatter: o, content: m} = ai(r, n, {
    normalizeKeys: !0
  }), s = N7(o.description, e) ?? b0e(m, "Skill"), c = o.when_to_use != null ? String(o.when_to_use) : void 0;
  return {
    alwaysOn: Eoo({
      name: e,
      description: s,
      whenToUse: c
    }),
    onInvoke: m.trim()
  };
}

async function b(n, e) {
  let r = await f.open(n, "r");
  try {
    let {size: o} = await r.stat(), m = Math.min(o, e), s = Buffer.alloc(m), {bytesRead: c} = await r.read(s, 0, m, 0);
    return s.toString("utf8", 0, c);
  } finally {
    await r.close();
  }
}

function S(n, e) {
  return n.map((r, o) => {
    let m = e[o];
    if (!m) return r;
    return {
      ...r,
      chars: {
        always_on: m.alwaysOn.length,
        on_invoke: m.onInvoke.length
      }
    };
  });
}

async function I(n, e) {
  if (!n) return 0;
  return qLe([ {
    role: "user",
    content: n
  } ], [], e);
}

function k(n) {
  return [ n ].flat().filter(e => e != null && typeof e === "object").flatMap(Object.keys);
}

async function L(n) {
  if (n.isBuiltin) return [];
  let e = [ await O(await T(n, ".mcp.json")) ];
  for (let r of [ n.manifest.mcpServers ?? [] ].flat()) if (typeof r !== "string") e.push(k(r)); else if (!tH(r) && !sD(r) && !oWe(r)) e.push(await O(await ort(n, r)));
  return e.flat();
}

async function O(n) {
  if (n === null) return [];
  try {
    let e = Y(await b(n, v));
    if (e == null || typeof e !== "object") return [];
    let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}

async function A(n) {
  try {
    let e = await T(n, ".lsp.json");
    if (e === null) return [];
    let r = await f.readFile(e, "utf-8"), o = Y(r);
    if (o == null || typeof o !== "object") return [];
    return Object.keys(o);
  } catch {
    return [];
  }
}

async function T(n, e) {
  return Nz(n) ? ort(n, e) : u.join(n.path, e);
}

async function F(n) {
  let e = [], r = new Set;
  for (let o of n) {
    if (!o) continue;
    let m;
    try {
      m = await f.readdir(o, {
        withFileTypes: !0
      });
    } catch (s) {
      C(o, s);
      continue;
    }
    for (let s of m) if (s.isFile() && s.name.endsWith(".md")) {
      let c = u.join(o, s.name), a = u.resolve(c);
      if (r.has(a)) continue;
      r.add(a), e.push({
        name: u.basename(s.name, ".md"),
        path: c
      });
    }
  }
  return e;
}

async function x(n, e) {
  let r = [], o = new Set, m = (s, c) => {
    let a = u.resolve(c);
    if (o.has(a)) return;
    o.add(a), r.push({
      name: s,
      path: c
    });
  };
  for (let s of n) {
    if (!s) continue;
    try {
      let a = u.join(s, "SKILL.md");
      if ((await f.stat(a)).isFile()) {
        let g = "";
        try {
          let i = await b(a, v), {frontmatter: P} = ai(i, a), y = typeof P.name === "string" ? P.name.trim() : "";
          g = y.startsWith(`${e}:`) ? y.slice(e.length + 1) : y;
        } catch {}
        m(g || u.basename(s), s);
        continue;
      }
    } catch {}
    let c;
    try {
      c = await f.readdir(s, {
        withFileTypes: !0
      });
    } catch (a) {
      C(s, a);
      continue;
    }
    for (let a of c) {
      if (!a.isDirectory() && !a.isSymbolicLink()) continue;
      let p = u.join(s, a.name);
      try {
        if ((await f.stat(u.join(p, "SKILL.md"))).isFile()) m(a.name, p);
      } catch {}
    }
  }
  return r;
}

function C(n, e) {
  if (t(`Failed to read plugin components from ${n}: ${l(e)}`, {
    level: "error"
  }), Ms(e)) return;
  d(j(e));
}

export { s3n, jKs, WKs };
