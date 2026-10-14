// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MV } from "./chunk-nmecgx1t.js";

import { l, Zl, r2 } from "./chunk-b0z4bv3v.js";

import { Un, Ny, Eh, za } from "./chunk-ddr690nj.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { se, t } from "./chunk-kawq2919.js";

import { dl, Nt } from "./chunk-5wbhf1bk.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { dFs, _$, FXe } from "./chunk-r276nwd3.js";

import { H9 } from "./chunk-s2t7g8m9.js";

import { R3e } from "./chunk-ckggj4y9.js";

import { Kfr, _ce, Q4 } from "./chunk-0t44d1pt.js";

import { IOe, SX } from "./chunk-dgqa0xqf.js";

import { oc } from "./chunk-zx69jgxc.js";

import { resolve as O } from "path";

var v = 1e3, D = 16777216;

class I {
  cache;
  constructor(e = v, n = D) {
    this.cache = new oc({
      max: e,
      maxSize: n,
      sizeCalculation: r => Math.max(1, r.content.length)
    });
  }
  readFile(e) {
    let n = se(), r;
    try {
      r = n.statSync(e);
    } catch (a) {
      throw this.cache.delete(e), a;
    }
    if (!r.isFile()) this.cache.delete(e), IOe(r, e, void 0);
    let i = this.cache.get(e);
    if (i && i.mtime === r.mtimeMs) return {
      content: i.content,
      encoding: i.encoding
    };
    let s = dFs(e), o = n.readFileSync(e, {
      encoding: s
    }).replaceAll(`\r\n`, `\n`);
    return this.cache.set(e, {
      content: o,
      encoding: s,
      mtime: r.mtimeMs
    }), {
      content: o,
      encoding: s
    };
  }
  invalidate(e) {
    this.cache.delete(e);
  }
  getStats() {
    return {
      size: this.cache.size,
      totalChars: this.cache.calculatedSize,
      entries: Array.from(this.cache.keys())
    };
  }
}

var P = new K(() => new I);

function m(e) {
  let {content: n} = P.of(B().host).readFile(e);
  return n;
}

function Tst(e) {
  return /\.(md|mdx)$/i.test(e);
}

function Ast(e) {
  let n = e.split(/(\r\n|\n|\r)/), r = "";
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s !== void 0) if (i % 2 === 0) r += s.replace(/\s+$/, ""); else r += s;
  }
  return r;
}

var z = {
  "<fnr>": "<function_results>",
  "<n>": "<name>",
  "</n>": "</name>",
  "<o>": "<output>",
  "</o>": "</output>",
  "<e>": "<error>",
  "</e>": "</error>",
  "<s>": "<system>",
  "</s>": "</system>",
  "<r>": "<result>",
  "</r>": "</result>",
  "< META_START >": "<META_START>",
  "< META_END >": "<META_END>",
  "< EOT >": "<EOT>",
  "< META >": "<META>",
  "< SOS >": "<SOS>",
  "\n\nH:": `\n\nHuman:`,
  "\n\nA:": `\n\nAssistant:`
};

function $fr(e) {
  let n = e, r = [];
  for (let [i, s] of Object.entries(z)) {
    let o = n;
    if (n = n.replaceAll(i, s), o !== n) r.push({
      from: i,
      to: s
    });
  }
  return {
    result: n,
    appliedReplacements: r
  };
}

var x = "\u2018", h = "\u2019", A = "\u201c", T = "\u201d";

function b(e) {
  return e.replaceAll(x, "'").replaceAll(h, "'").replaceAll(A, '"').replaceAll(T, '"');
}

var w = /\\u[0-9a-fA-F]{4}/, y = /[\u0080-\uffff]/;

function _(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, i) => r !== void 0 ? n : String.fromCharCode(parseInt(i, 16)));
}

function k(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 128) {
      n += "\\\\u";
      for (let s of i.toString(16).padStart(4, "0")) n += s >= "a" ? `[${s}${s.toUpperCase()}]` : s;
    } else n += dl(e[r]);
  }
  return n;
}

function C(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) >= 128) n++;
  return e.length + 5 * n;
}

function R(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r;
}

function L(e, n) {
  if (R(e, e.length) % 2 === 1) return null;
  let r = e[0] === "\\" ? [ 0 ] : [], i = 0;
  for (let o = 0; o < e.length; o++) if (e.charCodeAt(o) >= 128) r.push(i), i += 6; else i += 1;
  let s = k(e);
  try {
    let o = new RegExp(s, "g");
    for (let a = o.exec(n); a !== null; a = o.exec(n)) {
      let c = a.index;
      if (r.every(u => R(n, c + u) % 2 === 0)) return n.indexOf(a[0]) === c ? a[0] : null;
      o.lastIndex = c + 1;
    }
    return null;
  } catch (o) {
    return t(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${s.length}-character pattern (${o instanceof Error ? o.name : "non-Error"})`), 
    null;
  }
}

function bds(e) {
  return w.test(e) || y.test(e);
}

function Sds(e, n, r) {
  if (e === n) return r;
  if (y.test(e) && C(e) === n.length && L(e, n) !== null) {
    let i = new Map, s = 0, o = 0;
    for (let a = 0, c = 0; a < e.length; a++) {
      let u = e.charCodeAt(a);
      if (u >= 128) {
        let f = n.slice(c + 2, c + 6);
        i.set(u, f);
        for (let d of f) if (d >= "a" && d <= "f") o++; else if (d >= "A" && d <= "F") s++;
        c += 6;
      } else c += 1;
    }
    return r.replace(/[\u0080-\uffff]/g, a => {
      let c = a.charCodeAt(0), u = i.get(c);
      if (u !== void 0) return "\\u" + u;
      let f = c.toString(16).padStart(4, "0");
      return "\\u" + (s > o ? f.toUpperCase() : f);
    });
  }
  if (w.test(e) && _(e) === n) return _(r);
  return r;
}

function cNe(e, n) {
  if (e.includes(n)) return n;
  let r = b(n), s = b(e).indexOf(r);
  if (s !== -1) return e.substring(s, s + n.length);
  if (w.test(n)) {
    let o = _(n);
    if (o !== n && e.includes(o)) return o;
  }
  if (y.test(n)) {
    if (C(n) > e.length || !e.includes("\\u")) return null;
    return L(n, e);
  }
  return null;
}

function Cst(e, n, r) {
  if (e === n) return r;
  let i = n.includes(A) || n.includes(T), s = n.includes(x) || n.includes(h);
  if (!i && !s) return r;
  let o = r;
  if (i) o = H(o);
  if (s) o = W(o);
  return o;
}

function N(e, n) {
  if (n === 0) return !0;
  let r = e[n - 1];
  return r === " " || r === "\t" || r === `\n` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "\u2014" || r === "\u2013";
}

function H(e) {
  let n = [ ...e ], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === '"') r.push(N(n, i) ? A : T); else r.push(n[i]);
  return r.join("");
}

function W(e) {
  let n = [ ...e ], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === "'") {
    let s = i > 0 ? n[i - 1] : void 0, o = i < n.length - 1 ? n[i + 1] : void 0, a = s !== void 0 && /\p{L}/u.test(s), c = o !== void 0 && /\p{L}/u.test(o);
    if (a && c) r.push(h); else r.push(N(n, i) ? x : h);
  } else r.push(n[i]);
  return r.join("");
}

function Q(e, n, r, i = !1) {
  let s = i ? (a, c, u) => a.replaceAll(c, () => u) : (a, c, u) => a.replace(c, () => u);
  if (r !== "") return s(e, n, r);
  return !n.endsWith(`\n`) && e.includes(n + `\n`) ? s(e, n + `\n`, r) : s(e, n, r);
}

function f8t({filePath: e, fileContents: n, oldString: r, newString: i, replaceAll: s = !1}) {
  return Moo({
    filePath: e,
    fileContents: n,
    edits: [ {
      old_string: r,
      new_string: i,
      replace_all: s
    } ]
  });
}

function Moo({filePath: e, fileContents: n, edits: r}) {
  if (S(n, r)) return {
    patch: Q4({
      filePath: e,
      fileContents: n,
      edits: [ {
        old_string: n,
        new_string: n,
        replace_all: !1
      } ]
    }),
    updatedFile: ""
  };
  let i = F(n, r);
  return {
    patch: _ce({
      filePath: e,
      oldContent: _$(n),
      newContent: _$(i)
    }),
    updatedFile: i
  };
}

function S(e, n) {
  return !e && n.length === 1 && n[0] !== void 0 && n[0].old_string === "" && n[0].new_string === "";
}

function F(e, n) {
  if (S(e, n)) return "";
  let r = e, i = [];
  for (let s of n) {
    let o = s.old_string.replace(/\n+$/, "");
    for (let c of i) if (o !== "" && c.includes(o)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let a = r;
    if (r = s.old_string === "" ? s.new_string : Q(r, s.old_string, s.new_string, s.replace_all), 
    r === a) throw new H9("String not found in file. Failed to apply edit.");
    i.push(s.new_string);
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r;
}

var E = 8192;

function wds(e, n) {
  let r = MV("file.txt", "file.txt", e, n, void 0, void 0, {
    context: 8,
    timeout: Kfr
  });
  if (!r) return "";
  let i = R3e(), s = r.hunks.map(p => ({
    startLine: p.oldStart,
    content: p.lines.filter(g => !g.startsWith("-") && !g.startsWith("\\")).map(g => g.slice(1)).join(`\n`),
    tabAwareSeparator: i
  })).map(FXe).join(`\n...\n`);
  if (s.length <= E) return s;
  let o = s.lastIndexOf(`\n`, E), a = o > 0 ? s.slice(0, o) : s.slice(0, E), c = 1, u = 1, d = Nt(s, `\n`, a.length + c) + u;
  return `${a}\n\n... [${d} lines truncated] ...`;
}

function vds(e) {
  return e.map(n => {
    let r = [], i = [];
    for (let s of n.lines) if (s.startsWith(" ")) r.push(s.slice(1)), i.push(s.slice(1)); else if (s.startsWith("-")) r.push(s.slice(1)); else if (s.startsWith("+")) i.push(s.slice(1));
    return {
      old_string: r.join(`\n`),
      new_string: i.join(`\n`),
      replace_all: !1
    };
  });
}

function U(e) {
  return Zl(e) || r2(e) || SX(e);
}

function Ffr({file_path: e, edits: n}) {
  if (n.length === 0) return {
    file_path: e,
    edits: n
  };
  let r = Tst(e);
  try {
    let i = ot(e);
    if ((Un(e) || Un(i)) && !(za(e) || za(i)) || Ny(e) || Ny(i) || Eh(e) || Eh(i)) return {
      file_path: e,
      edits: n
    };
    let s = m(i);
    return {
      file_path: e,
      edits: n.map(({old_string: o, new_string: a, replace_all: c}) => {
        let u = r ? a : Ast(a);
        if (s.includes(o)) return {
          old_string: o,
          new_string: u,
          replace_all: c
        };
        let {result: f, appliedReplacements: d} = $fr(o);
        if (s.includes(f)) {
          let p = u;
          for (let {from: g, to: M} of d) p = p.replaceAll(g, M);
          return {
            old_string: f,
            new_string: p,
            replace_all: c
          };
        }
        return {
          old_string: o,
          new_string: u,
          replace_all: c
        };
      })
    };
  } catch (i) {
    if (!U(i)) t(`Failed to read ${e} for edit normalization: ${i instanceof Error ? i.message : String(i)}`, {
      level: "error"
    });
  }
  return {
    file_path: e,
    edits: n
  };
}

function j(e, n, r) {
  if (e.length === n.length && e.every((c, u) => {
    let f = n[u];
    return f !== void 0 && c.old_string === f.old_string && c.new_string === f.new_string && c.replace_all === f.replace_all;
  })) return !0;
  let i = null, s = null, o = null, a = null;
  try {
    i = F(r, e);
  } catch (c) {
    s = l(c);
  }
  try {
    o = F(r, n);
  } catch (c) {
    a = l(c);
  }
  if (s !== null && a !== null) return s === a;
  if (s !== null || a !== null) return !1;
  return i === o;
}

function Hoo(e, n) {
  return e.file_path === n.file_path && e.edits.length === n.edits.length && e.edits.every((r, i) => {
    let s = n.edits[i];
    return s !== void 0 && r.old_string === s.old_string && r.new_string === s.new_string && r.replace_all === s.replace_all;
  });
}

function Eds(e, n) {
  if (e.file_path !== n.file_path) return !1;
  if (Hoo(e, n)) return !0;
  let r = "";
  if ((!Un(e.file_path) || za(e.file_path)) && !Ny(e.file_path) && !Eh(e.file_path) && !Eh(O(e.file_path))) try {
    r = m(e.file_path);
  } catch (i) {
    if (!U(i)) throw i;
  }
  return j(e.edits, n.edits, r);
}

export { Tst, Ast, $fr, bds, Sds, cNe, Cst, f8t, Moo, wds, vds, Ffr, Hoo, Eds };
