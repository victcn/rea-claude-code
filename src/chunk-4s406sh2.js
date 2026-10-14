// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E, W } from "./chunk-b0z4bv3v.js";

import { Ly, oWe } from "./chunk-ddr690nj.js";

import { Y, lg, t } from "./chunk-kawq2919.js";

import { I, vr, xd, Br } from "./chunk-5wbhf1bk.js";

import { sk, X7t } from "./chunk-f4r8hspx.js";

import { x9e, GLt, Amt, vin, Q9, Ffe, Z9, TKn, vE, Bfe, Din, AKn, $mt, wPo, QLt, NIr, Bie, ZLt, tX, CKn, H9e, zIr, GIr, IKn, VIr, kPo, TPo, tNt, x1e, Fin, Z0, eM, nNt, Xh, bee } from "./chunk-q6wab2jw.js";

import { iWn, A3e, a9, Iut, FGs, gvo, hvo } from "./chunk-9wtp3skp.js";

import { wr } from "./chunk-t26295zc.js";

import { Mo } from "./chunk-j90se18b.js";

import { ITr, GTr } from "./chunk-ep1bh0vt.js";

import { pde, Mye, $B, nO, rF, bQ, peo, gAt, Ncr, $cr, hAt, Fcr, gto, U6t, QAt } from "./chunk-84yp45y8.js";

import { P_s, Xat } from "./chunk-wbxkeemq.js";

import { yb } from "./chunk-t70vnbgq.js";

import { jRe, epo } from "./chunk-2xhrgh8h.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { dle } from "./chunk-bmb755n1.js";

import { P7n } from "./chunk-4pmt367q.js";

import { Yke } from "./chunk-kxb3y2h2.js";

import { c4o, RGe } from "./chunk-2vshys8w.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, T, u, ue, Sa } from "./chunk-cvcg6n1z.js";

import { N } from "./chunk-hmqkrrtz.js";

import { lstat as On, readdir as je, readFile as Oe, stat as kt } from "fs/promises";

import * as g from "path";

function he(e) {
  let n = /@ts-/i.test(e), s = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return n ? "@ts-" : s ? "framing" : void 0;
}

var A = (e, n, ...s) => e?.kind === n && s.includes(e.text);

function ze(e) {
  let n = A(e, "punct", "{", "(", "["), s = A(e, "punct", "}", ")", "]");
  return n ? 1 : s ? -1 : 0;
}

var V = (e, n, s) => ({
  kind: e,
  text: n,
  line: s
});

var jt = (e, n, s) => {
  let r = e.indexOf("*/", n + 2), a = r !== -1, i = a ? r + 2 : e.length, c = e.slice(n, i), p = c.match(/\r\n|[\n\r\u2028\u2029]/g), m = s + (p?.length ?? 0), d = a ? he(c) : "/*", y = {
    end: i,
    line: m
  };
  return d ? {
    ...y,
    token: V("stray", d, s)
  } : y;
};

var Ot = (e, n, s) => {
  let r = e.slice(n).search(/[\n\r\u2028\u2029]/), a = r === -1 ? e.length : n + r, i = e.slice(n, a).trim(), c = he(i), m = i.startsWith("///") ? V("reference", i, s) : c ? V("stray", c, s) : void 0;
  return m ? {
    end: a,
    line: s,
    token: m
  } : {
    end: a,
    line: s
  };
};

var Ve = (e, n, s) => {
  let r = e[n] ?? "", a = "", i = n + 1;
  while (i < e.length) {
    let p = e[i] ?? "", m = p === "\\" && i + 1 < e.length;
    if (p === r || p === `\n` || p === "\r") break;
    a += m ? e[i + 1] ?? "" : p, i += m ? 2 : 1;
  }
  return e[i] === r ? {
    end: i + 1,
    line: s,
    token: V("string", a, s)
  } : {
    end: i,
    line: s,
    token: V("stray", r, s)
  };
};

var _t = (e, n, s) => {
  let r = n + 1;
  while (r < e.length && /[\w$]/.test(e[r] ?? "")) r += 1;
  return {
    end: r,
    line: s,
    token: V("word", e.slice(n, r), s)
  };
};

function Be(e, n) {
  let s = e[n] ?? "", r = e.slice(n, n + 2), a = {
    "//": Ot,
    "/*": jt
  }, i = {
    "'": Ve,
    '"': Ve
  }, c = /[\w$]/.test(s);
  return a[r] ?? i[s] ?? (c ? _t : void 0);
}

function Ue(e) {
  let n = [], s = [], r = 0, a = 0, i = 1, c = !1, p = 1;
  while (a < e.length) {
    let m = e[a] ?? "", d = m === `\n` || m === "\u2028" || m === "\u2029" || m === "\r" && e[a + 1] !== `\n`;
    if (c) {
      let x = m === "\\", k = m === "$" && e[a + 1] === "{", R = m === "`";
      if (k) s.push(r);
      c = !k && !R, i += d ? 1 : 0, a += x || k ? 2 : 1;
      continue;
    }
    let y = Be(e, a), h = m === "`", b = m === "}" && s.length > 0 && r === s.at(-1), w = /[\t\n\v\f\r \u2028\u2029]/.test(m), C = m === "/" || m === "\\", S = /[!-~]/.test(m) && !C, v = !w && !S, f = C ? m : "other";
    if (y) {
      let x = y(e, a, i);
      if (x.token) n.push(x.token);
      a = x.end, i = x.line;
      continue;
    }
    if (h) n.push(V("string", "`", i)), p = i;
    if (v) n.push(V("stray", f, i));
    if (b) s.pop();
    if (!h && !b && !v && !w) n.push(V("punct", m, i)), r += m === "{" ? 1 : m === "}" ? -1 : 0;
    c = h || b, i += d ? 1 : 0, a += 1;
  }
  if (c || s.length > 0) n.push(V("stray", "`", p));
  return n;
}

var ae = (e, n) => [ e[n], e[n + 1], e[n + 2] ];

function We(e, n) {
  let [s, r, a] = ae(e, n), i = A(s, "word", "global") && A(r, "punct", "{"), c = A(s, "word", "module", "namespace") && r?.kind === "string", p = A(s, "word", "as") && A(r, "word", "namespace"), m = A(s, "word", "interface") && r?.kind === "word" && r.line !== s?.line, d = A(s, "word", "interface") && A(r, "word", "EngineInterface") && !A(a, "punct", "{");
  return i ? "`global { \u2026 }` augments the global scope" : c ? `a nested \`module '${r.text}'\` augments another module` : p ? "`as namespace` declares a global" : m ? "`interface` without its name on the same line" : d ? "`EngineInterface` takes members only, no `extends` or type parameters" : void 0;
}

function Ke(e) {
  let n = [], s = 0;
  for (let [r, a] of e.entries()) {
    let c = s === 0 && A(e[r - 1], "word", "declare") && A(a, "word", "module") ? void 0 : We(e, r);
    if (s += ze(a), c !== void 0) n.push(`line ${a.line}: ${c}; the contract may only augment 'claude-code', at its top level`);
  }
  return n;
}

function ge(e, n, s) {
  let [r, a, i] = ae(e, n);
  return r?.kind === "word" && r.text === "interface" && a?.kind === "word" && a.text === s && a.line === r.line && i?.kind === "punct" && i.text === "{";
}

function ne(e, n) {
  let s = 0;
  for (let r = n; r < e.length; r += 1) {
    let a = e[r];
    if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) continue;
    if (s += a.text === "{" ? 1 : -1, s === 0) return r;
  }
  return e.length;
}

function ie(e, n) {
  let s = [], r = ne(e, n), a = (p, ...m) => e[p]?.kind === "punct" && m.includes(e[p].text), i = 0, c = !0;
  for (let p = n + 1; p < r; p += 1) {
    let m = a(p, "{", "(", "["), d = a(p, "}", ")", "]"), y = i === 0 && a(p, ";", ","), h = (e[p - 1]?.line ?? 0) < (e[p]?.line ?? 0), w = e[p]?.text === "readonly" && e[p + 1]?.kind !== "punct" ? p + 1 : p, C = e[w], S = i === 0 && (c || h) && C !== void 0 && C.kind !== "punct" && a(w + 1, ":", "?", "(", "<");
    if (i += m ? 1 : d ? -1 : 0, c = y, S) s.push(C.text);
  }
  return s;
}

function Ye(e, n) {
  let s = new Set;
  for (let {start: r, end: a} of n) for (let i = r; i < a; i += 1) {
    if (!ge(e, i, "EngineInterface")) continue;
    let c = i + 2;
    for (let p of ie(e, c)) s.add(p);
  }
  return [ ...s ];
}

var qe = e => e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((n, s) => /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(n) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(n) ? [ `line ${s + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither` ] : []);

function Ze(e) {
  let n = [], s = "reaches outside the file; the contract must be self-contained (no " + "import, export \u2026 from, require or reference)", r = 0;
  for (let [a, i] of e.entries()) {
    let c = e[a + 1], p = e[a + 2], m = f => i.kind === "word" && i.text === f, d = c?.kind === "punct" && c.text === "(" && p?.kind === "string", y = c?.kind === "string" || c?.kind === "word" || c?.kind === "punct" && (c.text === "{" || c.text === "*") || d, h = i.line !== r, b = i.kind === "reference", w = m("import") && y, C = m("from") && h && c?.kind === "string", S = m("require") && h && d, v = b ? "a triple-slash reference" : w ? "`import`" : C ? `\`from '${c.text}'\`` : S ? `\`require('${p.text}')\`` : void 0;
    if (v === void 0) continue;
    r = i.line, n.push(`line ${i.line}: ${v} ${s}`);
  }
  return n;
}

var Je = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;

var Xe = e => e.split(`\n`).flatMap((n, s) => Je.test(n.replace(/[\t\r]/g, "")) ? [ `line ${s + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none` ] : []);

function Qe(e) {
  try {
    iWn("contract.d.ts", e);
    return;
  } catch (n) {
    return `does not parse as TypeScript: ${l(n)}`;
  }
}

function et(e, n) {
  let s = new Map, r = (a, i) => e[a]?.kind === "punct" && e[a].text === i;
  for (let {start: a, end: i} of n) for (let c = a; c < i; c += 1) {
    if (!ge(e, c, "PluginState")) continue;
    let p = c + 2, m = ne(e, p), d = new Set(ie(e, p)), y = 0;
    for (let h = p + 1; h < m; h += 1) {
      let b = e[h];
      if (y === 0 && b !== void 0 && b.kind !== "punct" && d.has(b.text) && r(h + 1, ":") && r(h + 2, "{")) {
        let v = s.get(b.text) ?? new Set;
        for (let f of ie(e, h + 2)) v.add(f);
        s.set(b.text, v);
      }
      let C = r(h, "{") || r(h, "(") || r(h, "["), S = r(h, "}") || r(h, ")") || r(h, "]");
      y += Number(C) - Number(S);
    }
  }
  return [ ...s ].map(([a, i]) => ({
    plugin: a,
    keys: [ ...i ]
  }));
}

function tt(e) {
  let n = iWn("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim(), s = vr(n);
  return n === "" ? [] : [ `the contract holds code that would run (\`${s}\`); a contract is types only` ];
}

var nt = e => e.flatMap((n, s) => {
  let r = e[s - 1], a = A(n, "word", "class", "const", "enum", "function", "let", "var"), i = r === void 0 || r.line < n.line || A(r, "punct", ";", "{", "}") || A(r, "word", "abstract", "async", "declare", "default", "export"), c = A(e[s + 1], "punct", ":", "?", "(", "<");
  return a && i && !c ? [ `line ${n.line}: \`${n.text}\` declares something that runs; a contract holds types only` ] : [];
});

var st = {
  "/": "a `/` outside a comment or string (a regular expression or arithmetic)",
  "\\": "a `\\` outside a string",
  "`": "a template literal that never closes",
  "'": "a string that never closes on its line",
  '"': "a string that never closes on its line",
  "/*": "a comment that never closes",
  "@ts-": "a `@ts-` compiler pragma in a comment",
  framing: "a comment that imitates the roll-up's banner or trailer",
  other: "a character outside plain ASCII (or a control character) in code"
};

var rt = e => e.filter(n => n.kind === "stray").map(n => `line ${n.line}: ` + (st[n.text] ?? `\`${n.text}\``) + ": a type contract never holds one, so the check refuses it rather than read past it");

var le = "claude-code";

function ot(e, n) {
  let [s, r, a] = ae(e, n), [, , i] = ae(e, n + 1), c = A(s, "word", "declare") && A(r, "word", "module") && a?.kind === "string" && s?.line === r?.line && r?.line === a.line && A(i, "punct", "{"), p = c && a.text !== le, m = A(s, "word", "declare") && !c, d = A(s, "word", "export") && !A(r, "word", "type", "interface"), y = A(s, "word", "abstract", "async", "default", "module", "namespace"), h = A(s, "word", "type", "interface") && !A(e[n - 1], "word", "export", "import");
  return p ? `augments module '${a.text}'; the contract may only augment '${le}'` : m ? `\`declare\` at the top level opens only \`declare module '${le}' { \u2026 }\`, its three words on one line` : d ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else" : y ? `\`${s?.text}\` at the top level: a contract holds type exports and \`declare module '${le}'\` blocks only` : h ? `a top-level \`${s?.text}\` without \`export\` would be global in a dependent's program; export it` : void 0;
}

function at(e) {
  let n = [], s = [], r = 0, a = 0;
  while (a < e.length) {
    let [i, c, p] = ae(e, a), d = r === 0 && i?.kind === "word" ? ot(e, a) : void 0, y = d === void 0 || d.startsWith("augments"), h = r === 0 && y && A(i, "word", "declare") && A(c, "word", "module") && p?.kind === "string", b = a + 2;
    if (r += ze(i), d !== void 0) n.push(`line ${i?.line}: ${d}`);
    if (!h) {
      a += 1;
      continue;
    }
    let w = ne(e, b + 1);
    if (w === e.length) n.push(`line ${i?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`);
    s.push({
      start: b + 2,
      end: w
    }), a = w + 1;
  }
  return {
    problems: n,
    blocks: s
  };
}

function it(e) {
  let n = Qe(e);
  if (n !== void 0) return {
    problems: [ n ],
    nouns: [],
    state: []
  };
  let s = Ue(e), r = s.filter(c => c.kind !== "reference"), {problems: a, blocks: i} = at(r);
  return {
    problems: [ ...Xe(e), ...rt(s), ...qe(e), ...Ze(s), ...a, ...nt(r), ...tt(e), ...Ke(r) ],
    nouns: Ye(r, i),
    state: et(r, i)
  };
}

import { isAbsolute as mn, relative as fn, resolve as hn } from "path";

var ce = (...e) => ({
  kind: "refused",
  problems: e.map(Br)
});

async function ye(e, n, s) {
  let r = e ?? gAt, a = hn(n, r), i = fn(n, a);
  if (i.startsWith("..") || mn(i)) return ce(`${r} leaves the plugin's folder`);
  let p = v => ce(`${r}: ${$cr(s, a, v)}`), m = await A3e(a, n, s).then(v => v, v => e === void 0 && Ncr(v) ? void 0 : p(v));
  if (m === void 0 || "kind" in m) return m;
  if (m.size > hAt) return ce(`${r} is over ${hAt} bytes and was not read`);
  let h = await Fcr(m.real).then(v => v, p);
  if (typeof h !== "string") return h;
  let {problems: b, nouns: w, state: C} = it(h);
  return b.length === 0 ? {
    kind: "read",
    text: h,
    nouns: w,
    state: C
  } : ce(...b);
}

function wn({names: e, owner: n, declared: s, others: r, contract: a, refusal: i}) {
  let c = new Map;
  for (let {plugin: d, keys: y} of [ ...s, ...r ?? [] ]) {
    let h = c.get(d) ?? new Set;
    y.forEach(b => h.add(b)), c.set(d, h);
  }
  let p = [], m = new Set;
  for (let {plugin: d, key: y} of e.writes) if (d !== n) p.push(`$.state.set refers to ${Iut({
    plugin: d,
    key: y
  })}, which ${d} owns: only a value's owner writes it (to change what is written, hook ${d}'s state.set and rewrite e.value)`);
  for (let {plugin: d, key: y} of [ ...e.reads, ...e.writes ]) {
    let h = d === n, b = h || r !== void 0, w = Iut({
      plugin: d,
      key: y
    });
    if (!b) {
      m.add(w);
      continue;
    }
    let C = c.get(d)?.has(y) === !0, S = h ? a ?? "the manifest's types contract" : "no enabled plugin's contract", v = i ?? `${S} must name it in interface PluginState { ${d}: { ${y}: ... } }`, f = h ? `${w} is not declared: ${v}` : `${w} is not declared: ${S} names it in PluginState`;
    if (!C && !p.includes(f)) p.push(f);
  }
  return {
    problems: p,
    unchecked: [ ...m ]
  };
}

var Se = [ "monitors", "themes" ], $n = [ {
  key: "commands",
  recordPathProperty: "source"
}, {
  key: "hooks",
  bareStringIndexed: !0,
  jsonFile: !0
}, {
  key: "agents",
  bareStringIndexed: !0
}, {
  key: "skills",
  bareStringIndexed: !0
}, {
  key: "outputStyles"
}, {
  key: "themes"
}, {
  key: "monitors",
  jsonFile: !0
}, {
  key: "lspServers",
  jsonFile: !0
}, {
  key: "workflows",
  bareStringIndexed: !0
}, {
  key: "types",
  bareStringOnly: !0
}, {
  key: "mcpServers",
  jsonFile: !0,
  acceptsUrl: !0,
  missingConsequence: e => e.endsWith(".json") ? "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load." : void 0
} ];

function ct(e) {
  let n = L(e.experimental) ? e.experimental : void 0, s = [];
  for (let r of $n) {
    let a = e[r.key], i = r.key, c = n !== void 0 && Se.includes(r.key) && Object.hasOwn(n, r.key) ? n[r.key] : void 0;
    if (c != null) a = c, i = `experimental.${r.key}`;
    let p = [];
    if (r.bareStringOnly) p.push([ i, a ]); else if (Array.isArray(a)) for (let [m, d] of a.entries()) p.push([ `${i}[${m}]`, d ]); else if (!L(a)) p.push([ r.bareStringIndexed ? `${i}[0]` : i, a ]); else if (r.recordPathProperty !== void 0) {
      for (let [m, d] of Object.entries(a)) if (L(d)) p.push([ `${i}.${m}.${r.recordPathProperty}`, d[r.recordPathProperty] ]);
    }
    for (let [m, d] of p) if (typeof d === "string" && !(r.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(d))) s.push({
      spec: r,
      field: m,
      relPath: d
    });
  }
  return s;
}

var pt = new Set([ "icon", "screenshots", "classification", "privacyPolicyUrl", "privacy_policy", "privacyPolicy", "supportUrl", "support", "bugs", "termsOfServiceUrl", "terms_of_service", "documentationUrl", "docs" ]);

var xn = [ "CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR" ];

function dt(e) {
  let n = [];
  for (let [s, r] of Object.entries(e)) for (let a of r ?? []) for (let i of a.hooks) {
    if (i.type !== "command" || i.args !== void 0 || i.shell === "powershell") continue;
    let c = Tn(i.command);
    if (c.length > 0) n.push({
      event: s,
      command: i.command,
      placeholders: c
    });
  }
  return n;
}

function Tn(e) {
  let n = new Set, s = !1, r = !1;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (!s && i === "\\") {
      a++;
      continue;
    }
    if (i === "'" && !r) {
      s = !s;
      continue;
    }
    if (i === '"' && !s) {
      r = !r;
      continue;
    }
    if (i !== "$" || s || r) continue;
    for (let c of xn) {
      let p = e.startsWith(`{${c}}`, a + 1), m = e.startsWith(c, a + 1) && !/[A-Za-z0-9_]/.test(e.charAt(a + 1 + c.length));
      if (p || m) {
        n.add(`\${${c}}`);
        break;
      }
    }
  }
  return [ ...n ];
}

import { resolve as Rn } from "path";

import { resolve as mt } from "path";

import { sep as ut } from "path";

var Ce = e => e.endsWith(ut) ? e.slice(0, -ut.length) : e;

var ozt = (e, n) => Ce(mt(e)) === Ce(mt(n));

function ke(e, n, s) {
  let {source: r} = e;
  return typeof r === "string" && ozt(Rn(n, r), s);
}

function e7n(e, n, s) {
  return typeof e.source === "string" ? ke(e, n, s.root) : e.name === s.name;
}

import { readFile as Nn } from "fs/promises";

async function t7n(e) {
  try {
    let n = Fin().safeParse(Y(Mo(await Nn(e, {
      encoding: "utf-8"
    }))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}

var _n = new Set([ "category", "source", "tags", "strict", "id", "relevance", "headers", "headersHelper" ]), wt = new Map([ [ "publisher", "a VS Code/Cursor extension manifest" ], [ "engines", "a VS Code/Cursor extension manifest" ], [ "categories", "a VS Code/Cursor extension manifest" ], [ "icon", "a VS Code/Cursor extension manifest" ], [ "contributes", "a VS Code/Cursor extension manifest" ], [ "activationEvents", "a VS Code/Cursor extension manifest" ], [ "preview", "a VS Code/Cursor extension manifest" ], [ "main", "an npm package.json" ], [ "type", "an npm package.json" ], [ "files", "an npm package.json" ], [ "bin", "an npm package.json" ], [ "scripts", "an npm package.json" ], [ "private", "an npm package.json" ], [ "bugs", "an npm package.json" ], [ "contributors", "an npm package.json" ], [ "dxt_version", "an MCPB/DXT manifest" ], [ "mcpb_version", "an MCPB/DXT manifest" ], [ "user_config", "an MCPB/DXT manifest" ], [ "compatibility", "an MCPB/DXT manifest" ], [ "server", "an MCP server manifest" ], [ "tools", "an MCP server manifest" ], [ "prompts", "an MCP server manifest" ], [ "resources", "an MCP server manifest" ], [ "logo", "manifests across many tools" ], [ "readme", "manifests across many tools" ], [ "changelog", "manifests across many tools" ], [ "support", "manifests across many tools" ], [ "privacy_policy", "manifests across many tools" ], [ "privacy_policies", "manifests across many tools" ], [ "terms_of_service", "manifests across many tools" ], [ "_comment", "manifests across many tools" ], [ "$id", "a JSON Schema document" ], [ "$comment", "a JSON Schema document" ] ]), Ln = new Map([ [ "user_config", "userConfig" ] ]), bt = new Set([ "themes", "monitors", "outputStyles", "evals", "syntaxHighlighting" ]), In = new Set(gto.map(yb));

function d4o(e, n) {
  let s = e.every(a => a.success), r = e.some(a => a.warnings.length > 0);
  return {
    noErrors: s,
    hasWarnings: r,
    allSuccess: n.strict ? s && !r : s
  };
}

function q(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}

function Fn(e) {
  let n = g.basename(e), s = g.basename(g.dirname(e));
  if (n === "plugin.json") return "plugin";
  if (n === "marketplace.json") return "marketplace";
  if (s === ".claude-plugin") return "plugin";
  return "unknown";
}

function de(e) {
  return e.issues.map(n => ({
    path: n.path.join(".") || "root",
    message: n.message,
    code: n.code
  }));
}

function Dn(e, n) {
  if (wt.has(e)) return;
  let s = e.length <= 3 ? 1 : 2, r = e.toLowerCase(), a, i = s + 1;
  for (let c of n) {
    if (Math.abs(c.length - e.length) > s) continue;
    if (c.toLowerCase() === r) return c;
    let p = bee(e, c, s);
    if (p < i) i = p, a = c;
  }
  return a;
}

function zn(e, n, s) {
  if (s?.has(e)) return `Field '${e}' belongs in the marketplace entry (marketplace.json), ` + "not plugin.json. It's harmless here but unused \u2014 Claude Code " + "ignores it at load time.";
  let r = Dn(e, n);
  if (r) return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let a = Ln.get(e);
  if (a && n.has(a)) return `Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option ` + "shapes differ slightly \u2014 re-run validate after renaming to check). " + "As-is, Claude Code ignores it at load time.";
  let i = wt.get(e);
  if (i) return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}

function X(e, n, s, r, a, i) {
  for (let c of Object.keys(e)) {
    if (n.has(c) || i?.has(c)) continue;
    r.push({
      path: s ? `${s}.${c}` : c,
      message: zn(c, n, a)
    });
  }
}

function xe(e) {
  let n = e.replace(/^[a-zA-Z]:/, "");
  return Ly(n) || oWe(n);
}

function Pe(e, n, s, r) {
  if (xe(e)) s.push({
    path: n,
    message: r ? `Path contains "..": ${e}. ${r}` : `Path contains ".." which could be a path traversal attempt: ${e}`
  });
}

function Vn(e) {
  let n = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}

async function szt(e, n = {
  kind: "alone"
}) {
  return oe(await Hn(e, n));
}

async function Hn(e, n) {
  let s = g.resolve(e), r;
  try {
    r = await Oe(s, {
      encoding: "utf-8"
    });
  } catch (a) {
    let i = E(a), c;
    if (i === "ENOENT") c = `File not found: ${s}`; else if (i === "EISDIR") c = `Path is not a file: ${s}`; else c = `Failed to read file: ${l(a)}`;
    return {
      success: !1,
      errors: [ {
        path: "file",
        message: c,
        code: i
      } ],
      warnings: [],
      filePath: s,
      fileType: "plugin"
    };
  }
  return vt(s, r, n);
}

async function vt(e, n, s) {
  let r = [], a = [], i = [], c;
  try {
    c = Y(Mo(n));
  } catch (d) {
    return {
      success: !1,
      errors: [ {
        path: "json",
        message: `Invalid JSON syntax: ${l(d)}`
      } ],
      warnings: [],
      filePath: e,
      fileType: "plugin"
    };
  }
  let p = pde(c, "plugin-json", {
    pluginName: g.basename(g.dirname(g.dirname(e))),
    manifestPath: e
  });
  if (!p.ok) r.push(...p.errors.map(d => ({
    ...d,
    path: d.path || "root"
  }))); else a.push(...p.hookNotes.map(d => ({
    path: "hooks",
    message: `${d} at runtime`
  })));
  if (c && typeof c === "object") {
    let d = p.rawCandidate ?? c, y = g.dirname(e), h = g.basename(y) === ".claude-plugin" ? g.dirname(y) : y, b = async (w, C, S = "The runtime loader will report this as a load failure.") => {
      if (Pe(w, C, r), xe(w) || g.isAbsolute(w) || /^[a-zA-Z]:/.test(w)) return;
      try {
        return await kt(g.resolve(h, w));
      } catch (v) {
        let f = E(v);
        r.push({
          path: C,
          message: `Path not found: ${w}${f && f !== "ENOENT" ? ` (${f})` : ""}. ${S}`
        });
        return;
      }
    };
    for (let {spec: w, field: C, relPath: S} of ct(d)) {
      let v = await b(S, C, w.missingConsequence?.(S));
      if (v === void 0) continue;
      if (w.key === "skills" && !v.isDirectory()) {
        let f = g.dirname(S), x = g.basename(S).toLowerCase() === "skill.md" ? f === "." ? " \u2014 point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${f}' instead` : "";
        r.push({
          path: C,
          message: `Path is a file; skills entries must be directories containing SKILL.md${x}: ${S}`
        });
      }
      if (w.jsonFile && S.endsWith(".json") && v.isDirectory()) r.push({
        path: C,
        message: `Path is a directory; ${w.key} must point to a JSON file: ${S}`
      });
      if (w.key === "types") {
        let f = ht(await ye(S, h, g.basename(h)), {
          relPath: S,
          field: C
        });
        r.push(...f.errors), i.push(...f.notes);
      }
    }
    if (d.types === void 0) {
      let w = await ye(void 0, h, g.basename(h));
      if (w?.kind === "read") i.push(...ht(w, {
        relPath: gAt,
        field: "types"
      }).notes);
    }
    if (d.mcpServers !== void 0) {
      let w = Array.isArray(d.mcpServers) ? d.mcpServers : [ d.mcpServers ], C;
      for (let [S, v] of w.entries()) {
        let f = Array.isArray(d.mcpServers) ? `mcpServers[${S}]` : "mcpServers";
        if (L(v)) {
          C ??= await cs(d, e);
          for (let [x, k] of Object.entries(v)) {
            let R = xt(`${f}.${Lg(x, 64)}`, k, C(x));
            r.push(...R.errors), a.push(...R.warnings);
          }
        }
      }
    }
  }
  if (L(c)) {
    let d = c, y = p.rawCandidate ?? d;
    if (X(y, new Set(Object.keys(tX().shape)), "", a, _n, pt), "capabilities" in y) {
      let h = a.findIndex(w => w.path === "capabilities"), b = {
        path: "capabilities",
        message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
      };
      if (h === -1) a.push(b); else a[h] = b;
    }
    for (let h of Se) if (h in d) a.push({
      path: h,
      message: `'${h}' is an experimental component; declare it under 'experimental.${h}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
    });
    if ("experimental" in d) if (L(d.experimental)) {
      let h = d.experimental;
      X(h, bt, "experimental", a);
    } else a.push({
      path: "experimental",
      message: `'experimental' must be an object containing component declarations; got ${q(d.experimental)}. It will be ignored at load time.`
    });
    if ("metadata" in y && !L(y.metadata)) a.push({
      path: "metadata",
      message: `'metadata' must be a free-form object; got ${q(y.metadata)}. It will be ignored at load time.`
    });
    if ("binaries" in d) if (L(d.binaries)) {
      let h = ZLt(d.binaries) ?? {}, b = 0;
      for (let [C, S] of Object.entries(d.binaries)) {
        if ($mt.test(C) && typeof S === "object" && S !== null && typeof S.sha256 === "string" && wPo.test(S.sha256)) {
          b++;
          continue;
        }
        if (!Object.hasOwn(h, C)) a.push({
          path: `binaries.${C}`,
          message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String($mt)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
        });
      }
      if (b > NIr) a.push({
        path: "binaries",
        message: `${b} valid binaries entries declared, but the install hook processes at most ${NIr}; the rest are dropped entirely.`
      });
      let w = Object.keys(h).length;
      if (w > QLt) a.push({
        path: "binaries",
        message: `${w} valid binaries entries declared, but only the first ${QLt} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
      });
    } else a.push({
      path: "binaries",
      message: `'binaries' must be an object mapping basenames to { sha256 }; got ${q(d.binaries)}. It will be ignored at install time.`
    });
  }
  let m = p.manifest;
  if (m) {
    let d = m;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.name)) {
      let b = "Claude Code accepts it, but the";
      if (nNt.test(d.name)) b = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The"; else if (!Z0(d.name)) b = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      a.push({
        path: "name",
        message: `Plugin name "${d.name}" is not kebab-case. ${b} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + pe(d.name)
      });
    }
    let h = s.kind === "alone" || s.kind === "entry" && s.entryName !== d.name ? RGe(d.name) : void 0;
    if (h) (h.severity === "error" ? r : a).push({
      path: "name",
      message: s.kind === "alone" ? `${h.message} ${c4o}` : h.message
    });
    if (!d.version) a.push({
      path: "version",
      message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
    });
    if (!d.description) a.push({
      path: "description",
      message: "No description provided. Adding a description helps users understand what your plugin does"
    });
    if (!d.author) a.push({
      path: "author",
      message: "No author information provided. Consider adding author details for plugin attribution"
    });
  }
  return {
    success: r.length === 0,
    errors: r,
    warnings: a,
    filePath: e,
    fileType: "plugin",
    ...i.length > 0 && {
      notes: i
    }
  };
}

var ft = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/, Bn = new Set([ "org", "org-provisioned", "unknown" ]), ve = "UNRECORDABLE_NAME", n7n = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';

function pe(e) {
  return Lg(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}

async function Re(e) {
  return oe(await Un(e));
}

async function Un(e) {
  let n = [], s = [], r = g.resolve(e), a;
  try {
    a = await Oe(r, {
      encoding: "utf-8"
    });
  } catch (f) {
    let x = E(f), k;
    if (x === "ENOENT") k = `File not found: ${r}`; else if (x === "EISDIR") k = `Path is not a file: ${r}`; else k = `Failed to read file: ${l(f)}`;
    return {
      success: !1,
      errors: [ {
        path: "file",
        message: k,
        code: x
      } ],
      warnings: [],
      filePath: r,
      fileType: "marketplace"
    };
  }
  let i;
  try {
    i = Y(Mo(a));
  } catch (f) {
    return {
      success: !1,
      errors: [ {
        path: "json",
        message: `Invalid JSON syntax: ${l(f)}`
      } ],
      warnings: [],
      filePath: r,
      fileType: "marketplace"
    };
  }
  let c = [], p = L(i) && L(i.metadata) ? i.metadata.pluginRoot : void 0, m = kPo(p), d = L(i) && typeof i.name === "string" && Din(i.name);
  if (i && typeof i === "object") {
    let f = i;
    if (Array.isArray(f.plugins)) c = f.plugins, f.plugins.forEach((x, k) => {
      if (x && typeof x === "object" && "source" in x) {
        let R = x.source;
        if (typeof R === "string") Pe(R, `plugins[${k}].source`, n, Vn(R));
        if (VIr(R) && m === void 0) n.push({
          path: `plugins[${k}].source`,
          message: p === void 0 ? `Bare source name "${R}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof p === "string" ? `Bare source name "${R}" cannot resolve: metadata.pluginRoot ("${p}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${R}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
        });
        if (R && typeof R === "object" && "path" in R && typeof R.path === "string") Pe(R.path, `plugins[${k}].source.path`, n);
      }
    });
  }
  let y = GIr().extend({
    topic: o().min(1).max(64).optional(),
    signals: zIr().extend({
      cli: T(o().min(1).max(64)).max(10).optional(),
      hosts: T(o().min(1).max(128).refine(f => /^[a-z0-9.-]+$/.test(f), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(),
      filesRead: T(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(),
      manifestDeps: T(u({
        file: o().min(1).max(256).refine(CKn, "must be a valid regular expression"),
        pattern: o().min(1).max(256).refine(CKn, "must be a valid regular expression")
      })).min(1).max(10).optional(),
      cwd: T(o().min(1).max(256).refine(f => !f.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional()
    }).refine(f => (f.cli?.length ?? 0) > 0 || (f.hosts?.length ?? 0) > 0 || (f.filesRead?.length ?? 0) > 0 || (f.manifestDeps?.length ?? 0) > 0 || (f.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)")
  }).optional(), h = IKn().extend({
    relevance: Sa(f => L(f) ? f : void 0, y)
  }).refine(f => typeof f.source === "string" || f.source.source !== "unsupported", {
    message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
  }), w = x1e().extend({
    plugins: T(h),
    renames: ue(o(), o().nullable()).optional()
  }).safeParse(tNt(i));
  if (!w.success) n.push(...de(w.error));
  if (w.success && w.data.renames) {
    let f = new Set(w.data.plugins.map(x => x.name));
    for (let x of Object.keys(w.data.renames)) {
      let k = QAt(x, w.data.renames, f);
      if (k?.kind === "unresolved") n.push({
        path: `renames.${x}`,
        message: `chain does not resolve (${k.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
      }); else if (k?.kind === "renamed" && !eM().safeParse(`${k.to}@placeholder`).success) n.push({
        path: `renames.${x}`,
        message: `target "${k.to}" is not a valid plugin name (PluginIdSchema)`
      });
    }
  }
  if (L(i)) {
    let f = i;
    if (X(f, new Set(Object.keys(x1e().shape)), "", s), typeof f.name === "string" && f.name) {
      let k = Z0(f.name);
      if (!k) n.push({
        path: "name",
        code: ve,
        message: `Claude Code cannot install plugins from marketplace "${Lg(f.name, 64)}". ${n7n} Change the marketplace's "name".` + pe(f.name)
      });
      if (Bn.has(f.name.toLowerCase())) s.push({
        path: "name",
        message: `Marketplace name "${f.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
      }); else if (!ft.test(f.name)) s.push({
        path: "name",
        message: `Marketplace name "${f.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (k ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." + pe(f.name)
      });
    }
    let x = f.metadata;
    if (L(x)) X(x, new Set(Object.keys(x1e().shape.metadata.unwrap().shape)), "metadata", s);
    if (Array.isArray(f.plugins)) {
      let k = new Set(Object.keys(IKn().shape)), R = new Set(Object.keys(GIr().shape)), _ = new Set(Object.keys(zIr().shape));
      f.plugins.forEach((M, O) => {
        if (!L(M)) return;
        let j = M;
        if (X(j, k, `plugins[${O}]`, s), typeof j.name === "string" && j.name) {
          let H = Z0(j.name);
          if (!H) n.push({
            path: `plugins[${O}].name`,
            code: ve,
            message: `Claude Code cannot install plugin "${Lg(j.name, 64)}". ${n7n} Change this entry's "name".` + pe(j.name)
          });
          if (!ft.test(j.name)) s.push({
            path: `plugins[${O}].name`,
            message: `Plugin name "${j.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (H ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." + pe(j.name)
          });
          let J = d ? void 0 : RGe(j.name);
          if (J) (J.severity === "error" ? n : s).push({
            path: `plugins[${O}].name`,
            message: J.message
          });
        }
        let B = j.experimental;
        if (L(B)) X(B, bt, `plugins[${O}].experimental`, s); else if (B !== void 0) s.push({
          path: `plugins[${O}].experimental`,
          message: `'experimental' must be an object containing component declarations; got ${q(B)}. It will be ignored at load time.`
        });
        let z = j.relevance;
        if (L(z)) {
          X(z, R, `plugins[${O}].relevance`, s);
          let H = z.signals;
          if (L(H)) X(H, _, `plugins[${O}].relevance.signals`, s);
        } else if (z !== void 0) s.push({
          path: `plugins[${O}].relevance`,
          message: `'relevance' must be an object containing topic and signals; got ${q(z)}. It will be ignored at load time.`
        });
        let Z = j.metadata;
        if (Z !== void 0 && !L(Z)) s.push({
          path: `plugins[${O}].metadata`,
          message: `'metadata' must be a free-form object; got ${q(Z)}. It will be ignored at load time.`
        });
      });
    }
  }
  if (w.success) {
    let f = w.data;
    if (!f.plugins || f.plugins.length === 0) s.push({
      path: "plugins",
      message: "Marketplace has no plugins defined"
    });
    if (f.plugins) f.plugins.forEach((x, k) => {
      if (f.plugins.filter(M => M.name === x.name).length > 1) n.push({
        path: `plugins[${k}].name`,
        message: `Duplicate plugin name "${x.name}" found in marketplace`
      });
      let _ = typeof x.source === "object" && x.source.source === "archive";
      if (_ && jRe(x) && x.strict !== !1) n.push({
        path: `plugins[${k}].headersHelper`,
        message: `Plugin "${Xh(x.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
      });
      if ((x.headers !== void 0 || jRe(x)) && !_) s.push({
        path: `plugins[${k}].${jRe(x) ? "headersHelper" : "headers"}`,
        message: `Plugin "${Xh(x.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
      }); else if (jRe(x) && typeof x.source === "object" && x.source.source === "archive" && !x.source.sha256) s.push({
        path: `plugins[${k}].source.sha256`,
        message: `Plugin "${Xh(x.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
      });
      for (let M of _ ? Object.keys(x.headers ?? {}) : []) if (epo(M)) s.push({
        path: `plugins[${k}].headers.${Xh(M)}`,
        message: `Header "${Xh(M)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
      });
    });
    if (!f.description && !f.metadata?.description) s.push({
      path: "description",
      message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
    });
  }
  let C = IKn(), S = g.dirname(r), v = g.basename(S) === ".claude-plugin" ? g.dirname(S) : S;
  for (let [f, x] of c.entries()) {
    let k = C.safeParse(TPo(x, m));
    if (!k.success) continue;
    let R = k.data, _ = R.source;
    if (!H9e(_) || xe(_)) continue;
    let M = g.join(v, _), O = g.join(M, ".claude-plugin", "plugin.json"), j = g.relative(v, O), B = await nO(v, g.join(M, ".claude-plugin"));
    if (B === "not-a-directory") {
      n.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${j} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
      });
      continue;
    }
    if (B === "refused") {
      s.push({
        path: `plugins[${f}].source`,
        message: `Local source "${_}" is or traverses a symlink, so ${j} was not read \u2014 ` + "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately."
      });
      continue;
    }
    if (B !== "ok") continue;
    let z;
    try {
      z = await bQ(O);
    } catch (D) {
      n.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        message: `Failed to read ${j}: ${l(D)}`
      });
      continue;
    }
    if (z.kind === "refused" || z.kind === "too-large") {
      s.push({
        path: `plugins[${f}].source`,
        message: `${j} ${z.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${Bie} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
      });
      continue;
    }
    if (z.kind === "absent") continue;
    let Z = z.content;
    if (R.version) {
      let D;
      try {
        let U = Y(Mo(Z));
        if (typeof U.version === "string") D = U.version;
      } catch (U) {
        s.push({
          path: `plugins[${f}].source`,
          message: `Could not parse ${g.relative(v, O)} for version cross-check: ${l(U)}`
        });
      }
      if (D && D !== R.version) {
        let U = g.relative(v, O);
        s.push({
          path: `plugins[${f}].version`,
          message: `Entry declares version "${R.version}" but ${U} says "${D}". ` + "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " + `Update this entry to "${D}" to match.`
        });
      }
    }
    let H = oe(await vt(O, Z, d ? {
      kind: "anthropic"
    } : {
      kind: "entry",
      entryName: R.name
    })), J = `plugins[${f}] plugin.json \u2192 `;
    for (let D of H.errors) n.push({
      ...D,
      path: J + D.path
    });
    for (let D of H.warnings) s.push({
      ...D,
      path: J + D.path
    });
  }
  return {
    success: n.length === 0,
    errors: n,
    warnings: s,
    filePath: r,
    fileType: "marketplace"
  };
}

function Lg(e, n) {
  return Br(xd(lg(e), n));
}

function oe(e) {
  return {
    ...e,
    errors: e.errors.map(n => ({
      ...n,
      path: Lg(n.path, 200),
      message: Lg(n.message, 1e3)
    })),
    warnings: e.warnings.map(n => ({
      path: Lg(n.path, 200),
      message: Lg(n.message, 1e3)
    })),
    ...e.notes !== void 0 && {
      notes: e.notes.map(n => Lg(n, 1e3))
    },
    ...e.gatingHooks !== void 0 && {
      gatingHooks: e.gatingHooks.map(n => ({
        module: Lg(n.module, 200),
        pattern: Lg(n.pattern, 200),
        hook: Lg(n.hook, 1e3),
        hasCatch: n.hasCatch
      }))
    }
  };
}

function Wn(e, n, s, r) {
  let a = [], i = [], c = r === "project" && s === "agent", p = Mo(n).match(sk);
  if (!p) {
    if (!c) i.push({
      path: "frontmatter",
      message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
    });
    return {
      success: !0,
      errors: a,
      warnings: i,
      filePath: e,
      fileType: s
    };
  }
  let m = X7t(p[1] || "");
  if (!m.ok) {
    let b = s !== "agent" ? `At runtime this ${s} loads with empty metadata (all frontmatter fields silently dropped).` : r === "project" ? "At runtime this agent does not load at all \u2014 with no frontmatter " + "name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return a.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${Lg(m.error, 200)}. ` + b
    }), {
      success: !1,
      errors: a,
      warnings: i,
      filePath: e,
      fileType: s
    };
  }
  let d = m.value;
  if (d !== null && !L(d)) return a.push({
    path: "frontmatter",
    message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(d) ? "an array" : typeof d}.`
  }), {
    success: !1,
    errors: a,
    warnings: i,
    filePath: e,
    fileType: s
  };
  let y = d ?? {};
  if (y.description !== void 0) {
    let b = y.description;
    if (typeof b !== "string" && typeof b !== "number" && typeof b !== "boolean" && b !== null) a.push({
      path: "description",
      message: `description must be a string, got ${Array.isArray(b) ? "array" : typeof b}. At runtime this value is dropped.`
    });
  } else if (!c || typeof y.name === "string") i.push({
    path: "description",
    message: `No description in frontmatter. A description helps users and Claude understand when to use this ${s}.`
  });
  if (y.name !== void 0 && y.name !== null && typeof y.name !== "string") a.push({
    path: "name",
    message: `name must be a string, got ${typeof y.name}.`
  });
  let h = y["allowed-tools"];
  if (h !== void 0 && h !== null) {
    if (typeof h !== "string" && !Array.isArray(h)) a.push({
      path: "allowed-tools",
      message: `allowed-tools must be a string or array of strings, got ${typeof h}.`
    }); else if (Array.isArray(h) && h.some(b => typeof b !== "string")) a.push({
      path: "allowed-tools",
      message: "allowed-tools array must contain only strings."
    });
  }
  if (s === "skill" || s === "command") {
    let b = !1;
    (C => {
      if (C == null || L(C)) return;
      b = !0, i.push({
        path: "metadata",
        message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(C) ? "array" : typeof C}. It is dropped at load time.`
      });
    })(y.metadata);
  }
  if (s === "skill" || s === "command") {
    let b = y.shell;
    if (b !== void 0 && b !== null) if (typeof b !== "string") a.push({
      path: "shell",
      message: `shell must be a string, got ${typeof b}.`
    }); else {
      let w = b.trim().toLowerCase();
      if (w !== "bash" && w !== "powershell") a.push({
        path: "shell",
        message: `shell must be 'bash' or 'powershell', got '${Lg(b, 64)}'.`
      });
    }
  }
  return {
    success: a.length === 0,
    errors: a,
    warnings: i,
    filePath: e,
    fileType: s
  };
}

async function Kn(e, n) {
  let s = {
    result: {
      success: !0,
      errors: [],
      warnings: [],
      filePath: e,
      fileType: "hooks"
    },
    modules: []
  }, r = k => ({
    result: G(e, "hooks", `${k} \u2014 hooks are read without following symlinks and are capped at ` + `${Bie} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`),
    modules: []
  }), a = g.dirname(e), i = await nO(g.dirname(a), a);
  if (i === "refused") return r("The hooks directory is a symlink and was not read");
  if (i !== "ok") return s;
  let c;
  try {
    c = await bQ(e);
  } catch (k) {
    return {
      result: {
        success: !1,
        errors: [ {
          path: "file",
          message: `Failed to read file: ${l(k)}`
        } ],
        warnings: [],
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (c.kind === "refused") return r("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
  if (c.kind === "too-large") return r("hooks.json is past the size cap and was not read");
  if (c.kind === "absent") return s;
  let p = c.content, m;
  try {
    m = Y(p);
  } catch (k) {
    return {
      result: {
        success: !1,
        errors: [ {
          path: "json",
          message: `Invalid JSON syntax: ${l(k)}. At runtime this breaks the entire plugin load.`
        } ],
        warnings: [],
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (Z9(m, TKn) || Ffe(m)) return {
    result: {
      success: !1,
      errors: [ {
        path: "hooks",
        message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${vE}`
      } ],
      warnings: [],
      filePath: e,
      fileType: "hooks"
    },
    modules: []
  };
  let d = m && typeof m === "object" && "hooks" in m ? Bfe(m.hooks) : {
    notes: [],
    unloadableGuards: []
  }, y = d.notes.map(k => ({
    path: "hooks",
    message: `${k} at runtime`
  }));
  if (d.unloadableGuards.length > 0) return {
    result: {
      success: !1,
      errors: d.unloadableGuards.map(k => ({
        path: "hooks",
        message: `${k} \u2014 ${vE}`
      })),
      warnings: y,
      filePath: e,
      fileType: "hooks"
    },
    modules: []
  };
  let h = AKn().safeParse(m);
  if (!h.success) return {
    result: {
      success: !1,
      errors: de(h.error),
      warnings: y,
      filePath: e,
      fileType: "hooks"
    },
    modules: []
  };
  let b = [];
  for (let k of dt(h.data.hooks ?? {})) b.push({
    path: `hooks.${k.event}`,
    message: `Shell command uses ${k.placeholders.join(", ")} without quotes: ${Lg(k.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
  });
  let w = [], C = [], S = [], v = h.data.modules ?? [], f = v.length > 0 ? await Gn(n) : ee, x = f.nouns;
  for (let k of v) {
    let R = g.resolve(a, k), _ = g.relative(n, R);
    if (_ === ".." || _.startsWith(`..${g.sep}`) || g.resolve(_) === _ || oWe(k)) {
      w.push({
        path: `modules.${k}`,
        message: "The module path leaves the plugin directory"
      });
      continue;
    }
    try {
      let {scan: M, registrations: O, renderMatchers: j, helperCalls: B, catchReads: z} = await FGs(R, n, g.basename(n)), Z = O.length === 0 ? "nothing" : O.join(", "), H = [ ...M.calls.map(P => {
        let F = B.get(P);
        return F === void 0 ? `$.${P}` : `$.${P} (via ${F.join(", ")})`;
      }), ...(M.nextTo ?? []).map(P => `next.to:${P}`) ], J = H.length === 0 ? "nothing on $" : H.join(", "), D = z.filter(P => P.isOwnCommand), U = [];
      if (D.length > 0) {
        let P = wr();
        try {
          if (!P.shippedTablesFillFailed) {
            dle(), Yke();
            let F = U6t();
            U.push(...D.filter(K => !K.commands.some(fe => F(fe) || In.has(yb(fe)))));
          }
        } catch (F) {
          P.shippedTablesFillFailed = !0, t(`plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${l(F)}`, {
            level: "error"
          });
        }
      }
      let Le = z.filter(P => !U.includes(P) && ITr(P.pattern));
      C.push(`${k} hooks: ${Z}`, ...P7n(k, z), ...U.map(P => `${k} answers its own command: ${P.registration}`), ...Le.map(({registration: P, hasCatch: F}) => `${k} gating hook ${F ? "with" : "without"} .catch: ` + P), `${k} calls: ${J}`), 
      S.push(...Le.map(({registration: P, pattern: F, hasCatch: K}) => ({
        module: k,
        pattern: F,
        hook: P,
        hasCatch: K
      })));
      for (let {registration: P, matcher: F} of j) {
        let K = GTr(F);
        if (K !== void 0) y.push({
          path: `modules.${k}`,
          message: `on ${P}: ${K}`
        });
      }
      let Ct = M.hooks.some(P => a9(P, "engine.create"));
      if (x.length > 0 && !Ct) y.push({
        path: `modules.${k}`,
        message: `the manifest's types contract declares ${x.map(P => `$.${P}`).join(", ")} on EngineInterface, but ${k} registers no hook on engine.create, so the plugin never adds ${I(x.length, "it", "them")} to $`
      });
      if (M.env !== void 0) {
        let P = F => F.length === 0 ? "nothing" : F.join(", ");
        C.push(`${k} env writes: ${P(M.env.writes)}`, `${k} env reads: ${P(M.env.reads)}`);
      }
      let Ie = hvo(M);
      if (Ie !== void 0) C.push(`${k} hooks telemetry for: ${Ie}`);
      let Fe = gvo(M, {
        isBuiltin: !1
      });
      if (Fe !== void 0) w.push({
        path: `modules.${k}`,
        message: Fe
      });
      if (M.state !== void 0) {
        let P = te => te.length === 0 ? "nothing" : te.map(Et => Iut(Et)).join(", ");
        C.push(`${k} state writes: ${P(M.state.writes)}`, `${k} state reads: ${P(M.state.reads)}`);
        let F = f.name ?? g.basename(n), K = te => te.plugin !== F, {reads: fe, writes: Rt} = M.state, Te = wn({
          names: f.isRefused ? {
            reads: fe.filter(K),
            writes: Rt.filter(K)
          } : M.state,
          owner: F,
          declared: f.state,
          contract: f.conventional,
          refusal: f.refusal,
          others: await Yn(n)
        });
        if (w.push(...Te.problems.map(te => ({
          path: `modules.${k}`,
          message: te
        }))), Te.unchecked.length > 0) C.push(`${k} state of other plugins, not checked (run validate in a session with them enabled): ${Te.unchecked.join(", ")}`);
      }
      let De = await peo(M.clients, n, g.basename(n));
      if (De !== void 0) C.push(`${k} surface modules: ${De.map(P => P.module).join(", ")}`);
    } catch (M) {
      w.push({
        path: `modules.${k}`,
        message: Lg(l(M), 400)
      });
    }
  }
  return {
    result: {
      success: w.length === 0,
      errors: w,
      warnings: [ ...y, ...b ],
      filePath: e,
      fileType: "hooks",
      ...C.length > 0 && {
        notes: C
      },
      ...S.length > 0 && {
        gatingHooks: S
      }
    },
    modules: v
  };
}

function ht(e, {relPath: n, field: s}) {
  if (e === void 0) return {
    errors: [],
    notes: []
  };
  if (e.kind === "refused") return {
    errors: e.problems.map(i => ({
      path: s,
      message: i
    })),
    notes: []
  };
  let r = `types ${n} declares on $: ` + (e.nouns.length > 0 ? e.nouns.map(i => `$.${i}`).join(", ") : "nothing (no EngineInterface member)"), a = e.state.flatMap(({plugin: i, keys: c}) => c.map(p => Iut({
    plugin: i,
    key: p
  })));
  return {
    errors: [],
    notes: a.length > 0 ? [ r, `types ${n} declares state: ${a.join(", ")}` ] : [ r ]
  };
}

var ee = {
  name: void 0,
  nouns: [],
  state: [],
  isRefused: !1,
  conventional: void 0,
  refusal: void 0
};

async function Gn(e) {
  let n = await se(g.join(e, ".claude-plugin", "plugin.json")), s = n === void 0 ? void 0 : re(Mo(n)), r = typeof s?.name === "string" ? s.name : void 0, a = s?.types;
  if (s === void 0 || a !== void 0 && typeof a !== "string") return {
    ...ee,
    name: r
  };
  let i = await ye(a, e, g.basename(e));
  if (i === void 0) return {
    ...ee,
    name: r
  };
  if (a !== void 0) return i.kind === "read" ? {
    ...ee,
    name: r,
    nouns: i.nouns,
    state: i.state
  } : {
    ...ee,
    name: r,
    isRefused: !0
  };
  let c = `the types contract at ${gAt}`;
  if (i.kind === "read") return {
    ...ee,
    name: r,
    state: i.state,
    conventional: c
  };
  let p = i.problems.length - 1;
  return {
    ...ee,
    name: r,
    conventional: c,
    refusal: Lg(`the file at ${gAt} could not be taken as the types contract (${i.problems[0] ?? "refused"}${p > 0 ? `, and ${p} more` : ""})`, 1e3)
  };
}

async function Yn(e) {
  let n = Ge(), s = n.pluginLoadCacheOnly ?? n.pluginLoad;
  if (s === void 0) return;
  let r;
  try {
    r = (await s).enabled;
  } catch {
    return;
  }
  let a = [];
  for (let i of r) {
    let c = i.manifest.types;
    if (!((c !== void 0 || i.isBuiltin !== !0) && g.resolve(i.path) !== g.resolve(e))) continue;
    let m = await ye(c, i.path, i.name);
    if (m?.kind === "read") a.push(...m.state);
  }
  return a;
}

async function qn(e) {
  let n = [ g.join(e, "hooks", "hooks.json") ];
  if (!await $B(g.join(e, ".claude-plugin"))) return n;
  let s = await se(g.join(e, ".claude-plugin", "plugin.json")), r = s === void 0 ? void 0 : re(Mo(s))?.hooks, a = Array.isArray(r) ? r : [ r ];
  for (let i of a) {
    if (typeof i !== "string") continue;
    let c = g.resolve(e, i), p = g.relative(e, c);
    if (p === ".." || p.startsWith(`..${g.sep}`) || g.resolve(p) === p || oWe(i)) continue;
    if (!n.includes(c)) n.push(c);
  }
  return n;
}

async function Zn(e) {
  let n = [], s = [];
  for (let a of await qn(e)) {
    let {result: i, modules: c} = await Kn(a, e);
    if (c.length > 0) s.push(a);
    if (i.errors.length > 0 || i.warnings.length > 0 || i.notes !== void 0) n.push(i);
  }
  let [, r] = s;
  if (r !== void 0) {
    let a = s.map(i => g.relative(e, i));
    n.push({
      success: !1,
      errors: [ {
        path: "modules",
        message: `The plugin names one hooks module per plugin, but ${a.join(" and ")} each name one; the loader refuses both`
      } ],
      warnings: [],
      filePath: r,
      fileType: "hooks"
    });
  }
  return n;
}

var Jn = new Set([ "stdio", "http", "streamable-http", "sse", "ws", "sdk", "sse-ide", "ws-ide", "claudeai-proxy" ]), Xn = /\$\{user_config\.([^}$]+)\}/g, $t = /\$\{[^}$]+\}/, Ae = 16, Qn = 8192, es = [ /\bsk-[A-Za-z0-9_-]{16,}/, /\bgh[opsur]_[A-Za-z0-9]{30,}/, /\bgithub_pat_[A-Za-z0-9_]{30,}/, /\bxox[abeprs]-[A-Za-z0-9-]{10,}/, /\bAKIA[0-9A-Z]{16}\b/, /\bglpat-[A-Za-z0-9_-]{20,}/, /\bAIza[0-9A-Za-z_-]{35}\b/, /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/ ], ts = /authorization|api[-_]?key|token|secret|password|credential/i, ns = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;

function ss(e) {
  let n = new Map;
  for (let r of e) n.set(r, (n.get(r) ?? 0) + 1);
  let s = 0;
  for (let r of n.values()) {
    let a = r / e.length;
    s -= a * Math.log2(a);
  }
  return s;
}

function rs(e, n) {
  if (n.length > Qn || $t.test(n) || ns.test(n)) return !1;
  let s = n.trim();
  if (es.some(a => a.test(s))) return !0;
  if (!ts.test(e)) return !1;
  let r = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
  return r.length >= 20 && !/\s/.test(r) && ss(r) >= 3;
}

var os = /\$\{[^}$]+\}/g;

function we(e, n) {
  return URL.parse(e.replace(os, n)) ?? void 0;
}

function as(e) {
  let n = we(e, "probe-a.invalid") ?? we(e, "1"), s = we(e, "probe-b.invalid") ?? we(e, "2");
  if (!n || !s || n.hostname !== s.hostname) return;
  let r = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : void 0;
  if (r === void 0) return;
  let a = n.hostname;
  if (a === "localhost" || a.endsWith(".localhost") || a === "127.0.0.1" || a === "[::1]") return;
  let i = r === "http" ? "https" : "wss";
  return `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any ` + `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`;
}

function is(e) {
  let n = [], s = [], r;
  if (e.type === void 0 || e.type === "stdio") {
    if (s.push("command"), r = "env", Array.isArray(e.args)) {
      for (let [i, c] of e.args.entries()) if (typeof c === "string") n.push({
        field: `args[${i}]`,
        value: c
      });
    }
  } else if (Ne(e.type)) s.push("url", "headersHelper"), r = "headers";
  for (let i of s) {
    let c = e[i];
    if (typeof c === "string") n.push({
      field: i,
      value: c
    });
  }
  let a = r === void 0 ? void 0 : e[r];
  if (r !== void 0 && L(a)) {
    for (let [i, c] of Object.entries(a)) if (typeof c === "string") n.push({
      field: `${r}.${i}`,
      value: c
    });
  }
  return n;
}

function Ne(e) {
  return e === "http" || e === "streamable-http" || e === "sse" || e === "ws";
}

function xt(e, n, s) {
  let r = [], a = [];
  if (!L(n)) return {
    errors: r,
    warnings: a
  };
  for (let {field: i, value: c} of is(n)) {
    let p = new Set([ ...c.matchAll(Xn) ].map(d => d[1]));
    if (p.size === 0) continue;
    let m = `${e}.${Lg(i, 64)}`;
    if (i === "headersHelper") {
      r.push({
        path: m,
        message: 'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).'
      });
      continue;
    }
    if (s === null) continue;
    for (let d of p) if (d !== void 0 && !s.has(d)) r.push({
      path: m,
      message: `references \${user_config.${Lg(d, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
    });
  }
  if (Ne(n.type) && typeof n.url === "string") if (n.url.trim() === "") {
    if (typeof n.directory === "string" && n.directory !== "") a.push({
      path: `${e}.directory`,
      message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
    });
  } else if (!$t.test(n.url) && !URL.canParse(n.url)) r.push({
    path: `${e}.url`,
    message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
  }); else {
    let i = as(n.url);
    if (i) a.push({
      path: `${e}.url`,
      message: i
    });
  }
  if (Ne(n.type) && L(n.headers)) {
    for (let [i, c] of Object.entries(n.headers)) if (typeof c === "string" && rs(i, c)) a.push({
      path: `${e}.headers.${Lg(i, 64)}`,
      message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
    });
  }
  return {
    errors: r,
    warnings: a
  };
}

function ls(e, n, s) {
  if (!L(n)) return [ {
    path: e,
    message: `server config must be an object (got ${q(n)}). The plugin loader silently drops this server at load.`
  } ];
  let a = n.type;
  if (a === void 0 && !("command" in n) && "url" in n) return [ {
    path: `${e}.type`,
    message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
  } ];
  if (a !== void 0 && (typeof a !== "string" || !Jn.has(a))) {
    let m = typeof a === "string" ? `"${Lg(a, 32)}"` : q(a);
    return [ {
      path: `${e}.type`,
      message: `unknown server type ${m} \u2014 expected "stdio" (or no type) for a local ` + 'command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.'
    } ];
  }
  let c = (a === void 0 || a === "stdio" ? x9e() : a === "http" || a === "streamable-http" ? Amt() : a === "sse" ? GLt() : a === "ws" ? vin() : void 0)?.safeParse(n);
  if (!c) return [ {
    path: e,
    message: `is not a valid "${String(a)}" server config (${de(s)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
  } ];
  return (c.success ? de(s) : de(c.error)).map(m => ({
    ...m,
    path: m.path === "root" ? e : `${e}.${m.path}`,
    message: `${m.message}. The plugin loader silently drops this server at load.`
  }));
}

async function gt(e, n, s) {
  let a = w => G(n, "mcp", `${w} \u2014 MCP server files are read without following symlinks and are capped at ` + `${Bie} bytes. The plugin loader has neither limit, so validate the real file separately.`), i;
  try {
    i = await bQ(e);
  } catch (w) {
    return {
      success: !1,
      errors: [ {
        path: "file",
        message: `Failed to read file: ${l(w)}`
      } ],
      warnings: [],
      filePath: n,
      fileType: "mcp"
    };
  }
  if (i.kind === "absent") return null;
  if (i.kind === "refused") return a("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
  if (i.kind === "too-large") return a("The file is past the size cap and was not read");
  let c;
  try {
    c = Y(i.content);
  } catch (w) {
    return {
      success: !1,
      errors: [ {
        path: "json",
        message: `Invalid JSON syntax: ${i.content.startsWith("\ufeff") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have \u2014 re-save it as UTF-8 without BOM" : l(w)}. The plugin loader logs this at debug level and loads no servers from the file.`
      } ],
      warnings: [],
      filePath: n,
      fileType: "mcp"
    };
  }
  let p = [], m = [], d = L(c) && Boolean(c.mcpServers), y = d && L(c) ? c.mcpServers : c, h = d ? "mcpServers" : "root", b;
  if (L(y)) b = Object.entries(y); else if (Array.isArray(y)) {
    if (b = y.map((w, C) => [ String(C), w ]), y.length > 0) m.push({
      path: h,
      message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
    });
  } else return {
    success: !1,
    errors: [ {
      path: h,
      message: `must be an object mapping server names to server configs (got ${q(y)}). No servers load from this file.`
    } ],
    warnings: [],
    filePath: n,
    fileType: "mcp"
  };
  for (let [w, C] of b) {
    let S = Lg(w, 64), v = d ? `mcpServers.${S}` : S, f = Q9().safeParse(C);
    if (!f.success) {
      p.push(...ls(v, C, f.error));
      continue;
    }
    let x = Mye(f.data.type);
    if (x !== null) {
      p.push({
        path: `${v}.type`,
        message: x === "host-only" ? `type "${f.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.` : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared ' + 'by a plugin \u2014 declare the server with type "http" instead. The plugin loader drops ' + "this server at load."
      });
      continue;
    }
    let k = xt(v, C, s(w));
    p.push(...k.errors), m.push(...k.warnings);
  }
  return {
    success: p.length === 0,
    errors: p,
    warnings: m,
    filePath: n,
    fileType: "mcp"
  };
}

function Tt(e) {
  let n = new Set(L(e.userConfig) ? Object.keys(e.userConfig) : []), s = new Map;
  if (Array.isArray(e.channels)) {
    for (let r of e.channels) if (L(r) && typeof r.server === "string" && !s.has(r.server)) s.set(r.server, new Set(L(r.userConfig) ? Object.keys(r.userConfig) : []));
  }
  return r => {
    let a = s.get(r);
    return a === void 0 ? n : {
      has: i => n.has(i) || a.has(i)
    };
  };
}

async function cs(e, n) {
  return Tt(e);
}

async function ps(e, n) {
  let s, r = g.join(e, ".claude-plugin", "plugin.json");
  if (await $B(g.dirname(r))) {
    let S = await se(r), v = S === void 0 ? void 0 : re(Mo(S));
    if (v) s = pde(v, "plugin-json", {
      pluginName: g.basename(e),
      manifestPath: r
    }).rawCandidate ?? v;
  }
  let i = s ? Tt(s) : void 0, c = S => i ? i(S) : null, p = [], m = g.join(e, ".mcp.json"), d = await gt(m, m, c);
  if (d) p.push(d);
  let y = new Set([ g.resolve(m) ]), h = s?.mcpServers, b = h === void 0 ? [] : Array.isArray(h) ? h : [ h ], w = Ae, C = 0;
  for (let S of b) {
    if (typeof S !== "string") continue;
    if (!S.startsWith("./") || !S.endsWith(".json") || S.includes("..")) continue;
    let v = g.join(e, S), f = g.resolve(v);
    if (y.has(f)) continue;
    if (y.add(f), w <= 0) {
      C++;
      continue;
    }
    w--;
    let x = g.join(e, Lg(S, 128)), k = await nO(e, g.dirname(v));
    if (k === "refused") {
      p.push(G(x, "mcp", "A directory on the way to this MCP servers file is a symlink or " + "escapes the plugin, and the file was not read \u2014 the plugin loader " + "follows it, so validate the real file separately."));
      continue;
    }
    if (k !== "ok") continue;
    let R = await gt(v, x, c);
    if (R) p.push(R);
  }
  if (C > 0) p.push(G(r, "mcp", `plugin.json names more than ${Ae} MCP server files; ${C} ${I(C, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
  return p.filter(S => S.errors.length > 0 || S.warnings.length > 0);
}

async function _e(e, n) {
  let s;
  try {
    s = await je(e, {
      withFileTypes: !0
    });
  } catch (i) {
    let c = E(i);
    if (c === "ENOENT" || c === "ENOTDIR") return {
      files: [],
      skippedSymlinks: 0
    };
    throw i;
  }
  let r = N(s, i => i.isSymbolicLink());
  if (n) return {
    files: s.filter(i => i.isDirectory()).map(i => g.join(e, i.name, "SKILL.md")),
    skippedSymlinks: r
  };
  let a = [];
  for (let i of s) {
    let c = g.join(e, i.name);
    if (i.isDirectory()) {
      let p = await _e(c, !1);
      a.push(...p.files), r += p.skippedSymlinks;
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) a.push(c);
  }
  return {
    files: a,
    skippedSymlinks: r
  };
}

var r7n = "NO_MANIFEST", St = new Map([ [ "skills", "skill" ], [ "agents", "agent" ], [ "commands", "command" ] ]);

function yt(e, n) {
  return e === "project" || n === "skill";
}

async function Me(e) {
  let n = [ ...St ].map(([r, a]) => [ a, g.join(e, r) ]), s = await Promise.all(n.map(([, r]) => nO(e, r)));
  return {
    dirs: n.filter((r, a) => s[a] === "ok"),
    refused: n.filter((r, a) => s[a] === "refused")
  };
}

async function ds(e) {
  if (await nO(e, g.join(e, ".claude-plugin")) === "ok") return !0;
  let n = g.join(e, "skills"), s = await nO(e, n);
  if (s === "refused") return !0;
  if (s !== "ok") return !1;
  let {files: r} = await _e(n, !0);
  for (let a of r) if (await On(a).then(() => !0, c => {
    let p = E(c);
    return p !== "ENOENT" && p !== "ENOTDIR";
  })) return !0;
  return !1;
}

function G(e, n, s) {
  return {
    success: !0,
    errors: [],
    warnings: [ {
      path: "directory",
      message: s
    } ],
    filePath: e,
    fileType: n
  };
}

async function be(e, n, s) {
  let r = [], a = 0, i = n.length;
  for (let [c, p] of n) r.push(G(p, c, "This directory is a symlink and nothing in it was read \u2014 component " + `directories are read without following symlinks. A session loading this ${s === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`));
  for (let [c, p] of e) {
    let {files: m, skippedSymlinks: d} = await _e(p, c === "skill"), y = yt(s, c) ? d : 0, h = 0, b = 0;
    for (let C of m) {
      let S = Lg(C, 256), v;
      try {
        v = await bQ(C);
      } catch (x) {
        r.push({
          success: !1,
          errors: [ {
            path: "file",
            message: `Failed to read: ${Lg(l(x), 200)}`
          } ],
          warnings: [],
          filePath: S,
          fileType: c
        });
        continue;
      }
      if (v.kind !== "ok") {
        if (v.kind === "refused" && yt(s, c)) h++; else if (v.kind === "too-large") b++;
        continue;
      }
      a++;
      let f = Wn(S, v.content, c, s);
      if (f.errors.length > 0 || f.warnings.length > 0) r.push(f);
    }
    i += y + h + b;
    let w = "A session loading this " + (s === "plugin" ? "plugin" : "directory") + " does follow them, so validate the real paths separately.";
    if (y > 0) r.push(G(p, c, `${y} ${I(y, "entry", "entries")} here ${I(y, "is", "are")} ${I(y, "a symlink", "symlinks")} and ${I(y, "was", "were")} not read \u2014 components are read ` + `without following symlinks. ${w}`));
    if (h > 0) r.push(G(p, c, `${h} ${I(h, "component")} here ${I(h, "was", "were")} not read \u2014 the path is not a ` + `regular file (a symlink, a FIFO, a directory). ${w}`));
    if (b > 0) r.push(G(p, c, `${b} ${I(b, "file")} here ${I(b, "is", "are")} larger than ${Bie} bytes and ${I(b, "was", "were")} not validated.`));
  }
  return {
    results: r,
    scanned: a,
    skipped: i
  };
}

async function us(e) {
  return (await ms(e))?.map(oe) ?? null;
}

async function ms(e) {
  let n = St.get(g.basename(e));
  if (n) {
    let C = g.dirname(e), S;
    if (g.basename(C) === ".claude" && !await $B(C)) S = "The enclosing .claude directory is a symlink."; else if (!await $B(e)) S = "This path is a symlink.";
    if (S) return [ {
      success: !1,
      errors: [ {
        path: "directory",
        message: `${S} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`
      } ],
      warnings: [],
      filePath: e,
      fileType: n
    } ];
    return (await be([ [ n, e ] ], [], "project")).results;
  }
  let s = g.join(e, ".claude"), r = g.basename(e) === ".claude", [a, i] = await Promise.all([ nO(e, s), r ? Promise.resolve(!1) : ds(e) ]), c = r || i ? await Me(e) : {
    dirs: [],
    refused: []
  }, p = a === "ok" ? await Me(s) : {
    dirs: [],
    refused: []
  }, m = r ? "project" : "plugin", [d, y] = await Promise.all([ be(c.dirs, c.refused, m), be(p.dirs, p.refused, "project") ]), h = [ ...d.results, ...y.results ], b = d.scanned + y.scanned, w = d.skipped + y.skipped;
  if (a === "refused") h.push(G(s, "plugin", "This directory is a symlink and nothing in it was read \u2014 .claude is " + "read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
  return b > 0 || w > 0 || h.length > 0 ? h : null;
}

async function o7n(e) {
  let n = [], s = new Set([ "claude.md", "claude.local.md" ]), r = [];
  try {
    r = await je(e, {
      withFileTypes: !0
    });
  } catch {}
  for (let i of r) {
    if (!i.isFile() || !s.has(i.name.toLowerCase())) continue;
    let p = i.name.toLowerCase() === "claude.local.md" ? "Remove it from the plugin root." : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    n.push({
      success: !0,
      errors: [],
      warnings: [ {
        path: "root",
        message: `${i.name} at the plugin root is not loaded as project context. ${p}`
      } ],
      filePath: g.join(e, Lg(i.name, 64)),
      fileType: "plugin"
    });
  }
  n.push(...await hs(e));
  let a = await Me(e);
  return n.push(...(await be(a.dirs, a.refused, "plugin")).results), n.push(...await Zn(e)), 
  n.push(...await ps(e, r)), n.map(oe);
}

async function QGr(e, n) {
  let s = oe(await fs(e));
  if (n?.unrecordableNames !== "warn") return s;
  let r = s.errors.filter(i => i.code !== ve), a = s.errors.filter(i => i.code === ve).map(({path: i, message: c}) => ({
    path: i,
    message: c
  }));
  return {
    ...s,
    success: r.length === 0,
    errors: r,
    warnings: [ ...a, ...s.warnings ]
  };
}

async function fs(e) {
  let n = g.resolve(e), s = null;
  try {
    s = await kt(n);
  } catch (a) {
    if (!W(a)) throw a;
  }
  if (s?.isDirectory()) {
    let a = g.join(n, ".claude-plugin", "marketplace.json"), i = await Re(a), c = i.errors[0];
    if (!(c?.path === "file" && (c.code === "ENOENT" || c.code === "ENOTDIR"))) return i;
    let m = g.join(n, ".claude-plugin", "plugin.json"), d = await szt(m), y = d.errors[0]?.code;
    if (y !== "ENOENT" && y !== "ENOTDIR") return d;
    return {
      success: !1,
      errors: [ {
        path: "directory",
        code: r7n,
        message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
      } ],
      warnings: [],
      filePath: n,
      fileType: "plugin"
    };
  }
  switch (Fn(e)) {
   case "plugin":
    return szt(e);

   case "marketplace":
    return Re(e);

   case "unknown":
    {
      try {
        let a = await Oe(n, {
          encoding: "utf-8"
        }), i = Y(Mo(a));
        if (Array.isArray(i.plugins)) return Re(e);
      } catch (a) {
        if (E(a) === "ENOENT") return {
          success: !1,
          errors: [ {
            path: "file",
            message: `File not found: ${n}`
          } ],
          warnings: [],
          filePath: n,
          fileType: "plugin"
        };
      }
      return szt(e);
    }
  }
}

async function CGe(e) {
  let n = await QGr(e), s = n.filePath;
  if (n.errors.some(d => d.code === r7n)) {
    let d = await us(s);
    return d ? {
      manifest: null,
      contents: d,
      resolvedPath: s
    } : {
      manifest: n,
      contents: [],
      resolvedPath: s
    };
  }
  let r = g.dirname(s), a = g.dirname(r);
  if (g.basename(r) !== ".claude-plugin") return {
    manifest: n,
    contents: [],
    resolvedPath: s
  };
  if (n.fileType === "plugin") {
    let d = await o7n(a);
    return {
      manifest: n,
      contents: d,
      resolvedPath: s
    };
  }
  if (g.resolve(e) !== a) return {
    manifest: n,
    contents: [],
    resolvedPath: s
  };
  let i = await t7n(s), c = i !== void 0 && Din(i.name) && i.plugins.some(d => ke(d, a, a)), p = await szt(g.join(r, "plugin.json"), {
    kind: c ? "anthropic" : "alone"
  });
  if (p.errors[0]?.code === "ENOENT") return {
    manifest: n,
    contents: [],
    resolvedPath: s
  };
  let m = p.errors.length > 0 || p.warnings.length > 0 || (p.notes?.length ?? 0) > 0;
  return {
    manifest: n,
    contents: [ ...m ? [ p ] : [], ...await o7n(a) ],
    resolvedPath: s
  };
}

async function se(e) {
  return rF(e).catch(() => {});
}

function me(e) {
  return L(e) ? e : void 0;
}

function re(e) {
  try {
    return me(Y(e));
  } catch {
    return;
  }
}

function Ee(e, n, s) {
  let r = [];
  for (let [a, i] of Object.entries(e)) {
    let c = me(i);
    if (!c || typeof c.command !== "string") continue;
    let m = c.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (m === void 0 || n.has(m) || s.has(m)) continue;
    let d = Lg(a, 64), y = Lg(m, 64);
    r.push({
      path: `mcpServers.${d}`,
      message: `bin/${y} is not a shipped file, a declared binaries entry, or ` + "a name derivable from the declared entries \u2014 the server will " + 'fail to start. Check for a typo against the "binaries" map in plugin.json.'
    });
  }
  return r;
}

async function hs(e) {
  if (!await $B(g.join(e, ".claude-plugin"))) return [];
  let n = g.join(e, ".claude-plugin", "plugin.json"), s = await se(n);
  if (s === void 0) return [];
  let r = re(Mo(s)), a = ZLt(r?.binaries);
  if (!r || !a) return [];
  let i = new Set(Object.keys(a));
  for (let v of P_s) {
    let f = new Map;
    for (let x of Object.keys(a)) {
      let k = Xat(x, v);
      if (k !== void 0) f.set(k, (f.get(k) ?? 0) + 1);
    }
    for (let [x, k] of f) if (k === 1) i.add(x);
  }
  let c = g.join(e, "bin"), p = new Set;
  if (await $B(c)) p = await je(c).then(v => new Set(v)).catch(() => new Set);
  let m = [];
  function d(v, f) {
    if (f.length > 0) m.push({
      success: !0,
      errors: [],
      warnings: f,
      filePath: v,
      fileType: "plugin"
    });
  }
  let y = g.join(e, ".mcp.json"), h = await se(y);
  if (h !== void 0) {
    let v = re(h);
    if (v) {
      let f = me(v.mcpServers || v);
      if (f) d(y, Ee(f, p, i));
    }
  }
  let b = r.mcpServers, w = b === void 0 ? [] : Array.isArray(b) ? b : [ b ], C = [], S = Ae;
  for (let v of w) {
    if (typeof v === "string" && S <= 0) continue;
    if (typeof v === "string") {
      if (S--, !v.startsWith("./") || xe(v)) continue;
      let x = g.join(e, v);
      if (await nO(e, g.dirname(x)) !== "ok") continue;
      let k = await se(x);
      if (k === void 0) continue;
      let R = re(k);
      if (!R) continue;
      let _ = me(R.mcpServers || R);
      if (_) d(g.join(e, Lg(v, 128)), Ee(_, p, i));
      continue;
    }
    let f = me(v);
    if (f) C.push(...Ee(f, p, i));
  }
  return d(n, C), m;
}

export { ozt, e7n, t7n, d4o, szt, n7n, Lg, r7n, o7n, QGr, CGe };
