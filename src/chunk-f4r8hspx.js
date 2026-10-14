// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tL, m$ } from "./chunk-pvmwc6wy.js";

import { Le, ys } from "./chunk-2v9tfgc3.js";

import { Kc } from "./chunk-z52kmxx4.js";

import { nJe } from "./chunk-j016gcgm.js";

import { FG, t } from "./chunk-kawq2919.js";

import { ne, Nt } from "./chunk-5wbhf1bk.js";

import { dse } from "./chunk-29yvrnf5.js";

import { H0t } from "./chunk-s2t7g8m9.js";

import { vee, QKn } from "./chunk-gmn1ce75.js";

import { oc } from "./chunk-zx69jgxc.js";

import { D } from "./chunk-hmqkrrtz.js";

import { normalize as b } from "path";

import { createHash as L } from "crypto";

function x(e) {
  return {
    sha256: L("sha256").update(e, "utf8").digest("hex"),
    bytes: Buffer.byteLength(e, "utf8")
  };
}

function Koe(e, n) {
  return Buffer.byteLength(n, "utf8") === e.bytes && x(n).sha256 === e.sha256;
}

var M = "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.";

function $Fn(e) {
  return e === void 0 ? M : `File has been modified on ${e} since this session read it. Read it again there (Read with "_host": "${e}") before attempting to write it.`;
}

function lwr(e) {
  return e === void 0 ? H0t : `File content on ${e} has changed since this session read it. Read it again there (Read with "_host": "${e}"), then retry.`;
}

var oT = 5e3, B = 26214400, N = 4096;

function dwr(e) {
  return Bun.hash(e).toString(36);
}

function sC(e) {
  if ((e.offset ?? 1) > 1 || e.isPartialView) return !1;
  if (e.limit === void 0) return !0;
  return e.content !== "" && Nt(e.content, `\n`) + 1 < e.limit;
}

function gz(e) {
  return e !== void 0 && sC(e) && !e.contentNotInModelContext;
}

function MF(e, n) {
  if (e.contentHash !== void 0) return e.contentHash === dwr(n);
  return e.content === n;
}

function pFe(e, n) {
  return A(e, n) || e.contentFromTranscript === !0 && n.endsWith(`\n`) && A(e, n.slice(0, -1));
}

function A(e, n) {
  return e.readBaseline !== void 0 ? Koe(e.readBaseline, n) : MF(e, n);
}

function gb(e) {
  return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
}

function Wm(e) {
  return gb(e).replaceAll(`\r\n`, `\n`);
}

function FFn(e, n) {
  return MF(e, Wm(n));
}

class C {
  keepsReadBaselines;
  cache;
  constructor(e, n, r = !1) {
    this.keepsReadBaselines = r;
    this.cache = new oc({
      max: e,
      maxSize: n,
      sizeCalculation: o => Math.max(1, Buffer.byteLength(o.content))
    });
  }
  get(e) {
    return this.cache.get(b(e));
  }
  set(e, n) {
    let r = b(e), o = this.cache.get(r), i = n.keepContent ?? o?.keepContent, s = n.contentHash ?? dwr(n.content), a = n.contentLength ?? n.content.length, c = n.content !== "" || n.contentHash === void 0, l = !(this.keepsReadBaselines || dse()) ? void 0 : c && !n.contentFromTranscript && sC(n) ? x(n.content) : n.readBaseline ?? (s === o?.contentHash ? o?.readBaseline : void 0), d = i && n.content === "" && s === o?.contentHash && o.content ? o.content : n.content, u = i || Buffer.byteLength(d) <= N ? d : "";
    return this.cache.set(r, {
      ...n,
      keepContent: i,
      contentHash: s,
      contentLength: a,
      content: u,
      readBaseline: l
    }), this;
  }
  has(e) {
    return this.cache.has(b(e));
  }
  delete(e) {
    return this.cache.delete(b(e));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(e) {
    this.cache.load(e);
  }
}

function DS(e, n = B, r = !1) {
  return new C(e, n, r);
}

function UFn(e) {
  return Object.fromEntries(e.entries());
}

function mdt(e) {
  return Array.from(e.keys());
}

function qoe(e, n) {
  let r = DS(e.max, e.maxSize), o = e.dump();
  if (n?.stripSeededFromContext) {
    for (let i of o) if (i[1].value?.seededFromContext) i[1].value = {
      ...i[1].value,
      seededFromContext: !1
    };
  }
  return r.load(o), r;
}

function BFn(e) {
  let n = [];
  for (let [r, o] of e.entries()) if (o.startupMemorySeed) n.push([ r, o ]);
  e.clear();
  for (let [r, o] of n) e.set(r, o);
}

function Lws(e, n) {
  let r = qoe(e);
  for (let [o, i] of n.entries()) {
    let s = r.get(o);
    if (!s || i.timestamp > s.timestamp) r.set(o, i);
  }
  return r;
}

var v = [ "name", "description", "model", "allowed-tools", "argument-hint", "arguments", "disable-model-invocation", "user-invocable", "effort", "shell", "version", "when_to_use", "paths", "hooks", "context", "agent", "created_by", "improved_by", "mcpServers", "lspServers", "agents", "outputStyles", "themes", "workflows", "channels", "monitors", "settings", "experimental", "commands", "skills", "dependencies", "userConfig", "metadata", "displayName", "defaultEnabled", "fallback", "evals", "author", "homepage", "repository", "license", "keywords", "compatibility", "tools", "disallowedTools", "color", "permissionMode", "maxTurns", "autoCompactWindow", "initialPrompt", "memory", "background", "omitClaudeMd", "isolation", "observer", "observerMessage", "observeSubagents", "keep-coding-instructions", "force-for-plugin", "type", "originSessionId", "hide-from-slash-command-tool" ], ae = QKn(v);

var I = [ "argument-hint", "arguments", "disable-model-invocation", "user-invocable", "context", "agent", "paths", "settings" ], le = new Set(I.map(vee));

function CN(e) {
  return Bun.YAML.parse(e);
}

function Yoe(e) {
  return Bun.YAML.stringify(e, null, 2) + `\n`;
}

var z = /[{}[\]*&#!|>%@`]|: /;

function H(e) {
  let n = e.split(`\n`), r = [];
  for (let o of n) {
    let i = o.match(/^([a-zA-Z_-]+):\s+(\S.*)$/);
    if (i) {
      let [, s, a] = i;
      if (!s || !a) {
        r.push(o);
        continue;
      }
      if (a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'")) {
        r.push(o);
        continue;
      }
      if (a.startsWith("[") && a.endsWith("]")) try {
        if (Array.isArray(CN(a))) {
          r.push(o);
          continue;
        }
      } catch {}
      if (z.test(a)) {
        let c = a.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
        r.push(`${s}: "${c}"`);
        continue;
      }
    }
    r.push(o);
  }
  return r.join(`\n`);
}

function K(e) {
  let n = [], r = [], o = e.split(`\n`).map(i => {
    let s = i.endsWith("\r"), a = s ? i.slice(0, -1) : i, c = a.match(/^([A-Za-z0-9_][A-Za-z0-9_.-]*):[ \t]+(.*)$/);
    if (!c) return k(a, r), i;
    let [, l, d] = c;
    if (!l || !d) return i;
    let u = d.trimEnd();
    if (u === "") return i;
    if (/^["'|>]/.test(u)) return k(a, r), i;
    let f;
    try {
      f = CN(u);
    } catch {
      return i;
    }
    if (typeof f !== "string" && f !== null) return k(a, r), i;
    if (!(typeof f === "string" && f !== u || f === null && ![ "null", "Null", "NULL", "~" ].includes(u))) return i;
    n.push(l);
    let y = u.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
    return `${l}: "${y}"${s ? "\r" : ""}`;
  });
  return {
    text: n.length === 0 ? null : o.join(`\n`),
    quotedKeys: n,
    unprovableKeys: r
  };
}

function k(e, n) {
  let r = e.match(/^("(?:[^"\\]|\\.)*"):[ \t]+(.*)$/) ?? e.match(/^('(?:[^']|'')*'):[ \t]+(.*)$/) ?? e.match(/^([^\s#][^:\n]*?):[ \t]+(.*)$/);
  if (r === null) return;
  let [, o, i] = r;
  if (!o || !i) return;
  let s = i.trimEnd().replace(/"(?:[^"\\]|\\.)*"|'(?:[^']|'')*'/g, "");
  if (/^#|[ \t]#/.test(s)) n.push(o);
}

var Xoe = 30, PY = 65536, sk = /^---\s*\n([\s\S]*?)---\s*\n?/, YV = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;

function Pgo(e, n) {
  return e;
}

function ai(e, n, r) {
  let o = e;
  e = gb(e);
  let i = e.indexOf("---", 3) < 0 ? null : e.match(sk);
  if (!i) return {
    frontmatter: {},
    frontmatterAsWritten: {},
    content: o
  };
  let s = i[1] || "", a = e.slice(i[0].length);
  if (r?.untrusted && (s.length > PY || q(s) || V(s))) return {
    frontmatter: {},
    frontmatterAsWritten: {},
    asWrittenProblem: "was not parsed: it is too long, too nested, or may hold a YAML anchor",
    content: a,
    parseError: "the frontmatter is too long, too nested, or may hold a YAML anchor"
  };
  let c = p => r?.normalizeKeys ? Pgo(p, n) : p, l = {}, d = l, u, f, h;
  if (r?.quoteLossyValues) {
    let p = e.match(YV), g = p?.[1] ?? "";
    if (s.trim() !== "" || g.trim() !== "") {
      if (p === null || g.trim() !== s.trim()) h = 'the closing --- is ambiguous (a value containing "---"?) \u2014 part of the block may have read as body';
    }
  }
  let y, S;
  if (r?.quoteLossyValues) {
    let p = K(s);
    if (p.unprovableKeys.length > 0) y = `an inline '#' in [${p.unprovableKeys.join(", ")}] cannot be preserved by a rewrite`;
    if (p.text !== null) try {
      let g = _(CN(p.text)), w = c(g), E = h ?? y ?? R(s, w);
      return {
        frontmatter: w,
        frontmatterAsWritten: g,
        content: a,
        ...E !== void 0 && {
          rewriteHazard: E
        }
      };
    } catch {
      S = `quoting [${p.quotedKeys.join(", ")}] broke the document; a rewrite from the plain parse would drop their inline '#' content`;
      let g = n ? ` in ${n}` : "";
      t(`quoteLossyValues: ${S}${g}`, {
        level: "warn"
      });
    }
  }
  let m = X7t(s);
  if (m.ok) {
    if (d = _(m.value), l = c(r?.normalizeKeys ? structuredClone(d) : d), !(m.value === null || m.value === void 0 || typeof m.value === "object" && !Array.isArray(m.value))) f = "is a list or a single value, not a table";
  } else {
    u = m.error, f = `did not parse as YAML (${u})`;
    let p = n ? ` in ${n}` : "";
    t(`Failed to parse YAML frontmatter${p}: ${u}`, {
      level: "warn"
    });
  }
  let F = !r?.quoteLossyValues ? void 0 : u !== void 0 ? h ?? `the frontmatter failed to parse: ${u}` : h ?? y ?? S ?? R(s, l);
  return {
    frontmatter: l,
    frontmatterAsWritten: d,
    ...f !== void 0 && {
      asWrittenProblem: f
    },
    content: a,
    ...u !== void 0 && {
      parseError: u
    },
    ...F !== void 0 && {
      rewriteHazard: F
    }
  };
}

function X7t(e) {
  try {
    return {
      ok: !0,
      value: CN(e)
    };
  } catch {
    try {
      let n = H(e).replace(/^\t+/gm, r => "  ".repeat(r.length));
      return {
        ok: !0,
        value: CN(n)
      };
    } catch (n) {
      return {
        ok: !1,
        error: n instanceof Error ? n.message : String(n)
      };
    }
  }
}

function R(e, n) {
  if (e.trim() !== "" && Object.keys(n).length === 0) return "the frontmatter has no keys (a sequence, scalar, or comment-only document)";
  return;
}

function _(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) return e;
  return {};
}

function lOt(e) {
  return O(e, {
    results: P,
    bytes: W
  });
}

function O(e, n) {
  if (Array.isArray(e)) return e.flatMap(a => O(a, n));
  if (typeof e !== "string") return [];
  let r = [], o = "", i = 0;
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    if (c === "{") i++, o += c; else if (c === "}") i--, o += c; else if (c === "," && i === 0) {
      let l = o.trim();
      if (l) r.push(l);
      o = "";
    } else o += c;
  }
  let s = o.trim();
  if (s) r.push(s);
  return r.filter(a => a.length > 0).flatMap(a => j(a, n));
}

var P = 1e3, W = 4194304;

function j(e, n) {
  if (!e.includes("{")) return [ e ];
  let r = [], o = [ e ];
  for (let i = o.pop(); i !== void 0; i = o.pop()) {
    let s = i.match(/^([^{]*)\{([^}]+)\}(.*)$/);
    if (!s) {
      r.push(i);
      continue;
    }
    let a = s[1] || "", c = s[2] || "", l = s[3] || "", d = c.split(",").map(f => f.trim());
    n.bytes -= i.length;
    let u = r.length + o.length + d.length;
    if (n.bytes < 0 || u > n.results || u * e.length > n.bytes) return t(`Brace pattern expansion exceeds the budget; using it unexpanded: ${ne(e, 256)}`, {
      level: "warn"
    }), [ e ];
    for (let f = d.length - 1; f >= 0; f--) o.push(a + (d[f] ?? "") + l);
  }
  return n.results -= r.length, n.bytes -= r.length * e.length, r;
}

function jFn(e) {
  if (e === void 0 || e === null) return;
  let n = typeof e === "number" ? e : Kc(String(e));
  if (Number.isInteger(n) && n > 0) return n;
  return;
}

function cwr(e) {
  let n = jFn(e);
  return n !== void 0 && n >= tL && n <= m$ ? n : void 0;
}

function uwr(e) {
  let n = e.experimental;
  if (typeof n !== "object" || n === null) return;
  let r = Object.entries(n).find(([o]) => vee(o) === "cachettl")?.[1];
  return nJe.find(o => o === r);
}

function N7(e, n, r) {
  if (e == null) return null;
  if (typeof e === "string") return e.trim() || null;
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  let o = r ? `${r}:${n}` : n ?? "unknown";
  return t(`Description invalid for ${o} - omitting`, {
    level: "warn"
  }), null;
}

function J7t(e, n) {
  if (e == null) return;
  let r = String(e);
  if (r.length <= FG) return r;
  t(`Frontmatter "name" of ${n} is over ${FG} characters - ignoring it`, {
    level: "warn"
  });
  return;
}

function pwr(e) {
  let n = r => r != null && typeof r === "object" && !Array.isArray(r) ? Object.keys(r) : [];
  return D([ ...Object.keys(e), ...n(e.experimental) ]);
}

function Q7t(e) {
  return Joe(e) ?? !1;
}

function Joe(e) {
  if (typeof e === "boolean") return e;
  if (typeof e !== "string" && typeof e !== "number") return;
  let n = String(e);
  if (Le(n)) return !0;
  if (ys(n)) return !1;
  return;
}

var T = [ "bash", "powershell" ];

function fwr(e, n) {
  if (e == null) return;
  let r = String(e).trim().toLowerCase();
  if (r === "") return;
  if (T.includes(r)) return r;
  t(`Frontmatter 'shell: ${e}' in ${n} is not recognized. Valid values: ${T.join(", ")}. Falling back to bash.`, {
    level: "warn"
  });
  return;
}

var Y = 256;

function V(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "[" || o === "{" || (o === "-" || o === "?") && ` \t\r\n`.includes(e[r - 1] ?? " ") && ` \t\r\n`.includes(e[r + 1] ?? " ")) {
      if (n++, n > Y) return !0;
    }
  }
  return !1;
}

var X = 256;

function q(e) {
  for (let n = e.indexOf("&"); n >= 0; n = e.indexOf("&", n + 1)) {
    if (` \t\r\n`.includes(e[n + 1] ?? " ")) continue;
    let r = e[n - 1];
    if (r !== void 0 && /[\p{L}\p{N}&]/u.test(r)) continue;
    let o;
    if (r === " " || r === "\t") {
      let l = n - 1;
      while (e[l] === " " || e[l] === "\t") l--;
      let d = e[l];
      if (d === void 0 || !/[\p{L}\p{N}]/u.test(d)) return !0;
      o = l + 1;
    } else o = n;
    let i = o - 1;
    while (i >= 0 && !` \t\r\n`.includes(e[i] ?? " ")) {
      if (o - i > X) return !0;
      i--;
    }
    let s = e.slice(i + 1, o);
    if (s.includes("!")) return !0;
    let a = Math.max(s.lastIndexOf("["), s.lastIndexOf("{"), s.lastIndexOf(","));
    for (let l = s.indexOf(":"); l >= 0; l = s.indexOf(":", l + 1)) if (l === 0 || `"']}[{,`.includes(s[l - 1] ?? "")) a = Math.max(a, l);
    let c = s.slice(a + 1);
    if ("!&*".includes(c[0] ?? "!")) return !0;
  }
  return !1;
}

export { Koe, $Fn, lwr, oT, dwr, sC, gz, MF, pFe, gb, Wm, FFn, DS, UFn, mdt, qoe, BFn, Lws, CN, Yoe, Xoe, PY, sk, YV, Pgo, ai, X7t, lOt, jFn, cwr, uwr, N7, J7t, pwr, Q7t, Joe, fwr };
