// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xc } from "./chunk-qqd24q2y.js";

import { i } from "./chunk-hedpgw9m.js";

import { ko } from "./chunk-q6wab2jw.js";

import { N_, ovr, svr } from "./chunk-8wkn08ep.js";

import { K2n, yDs } from "./chunk-7afk7vdn.js";

import { homedir as ht } from "os";

function Tdt(e) {
  return /^-[pvV]+$/.test(e) && /[vV]/.test(e);
}

function Fue(e, t) {
  return /^-[a-zA-Z]+$/.test(e) && [ ...t ].some(r => e.includes(r));
}

function $e(e) {
  return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e);
}

function hvs(e, t) {
  return /^-[a-z]+$/.test(e) && [ ...t ].some(r => e.includes(r));
}

var Te = 1e4, ut = new Set([ "export", "declare", "typeset", "readonly", "local", "unset", "unsetenv" ]), ft = new Set([ "word", "string", "raw_string", "number" ]), ne = new Set([ "command_substitution", "process_substitution" ]), re = new Set([ "command", "declaration_command" ]);

async function Ywr(e) {
  if (!e || e.length > Te) return null;
  try {
    let t = N_().parse(e);
    if (!t) return null;
    let r = Uue(t, null), s = dt(r);
    return {
      rootNode: t,
      envVars: s,
      commandNode: r,
      originalCommand: e
    };
  } catch {
    return null;
  }
}

var kP = Symbol("parse-aborted");

async function eK(e) {
  if (!e) return null;
  if (e.length > Te) return i("tengu_tree_sitter_parse_abort", {
    cmdLength: e.length,
    panic: !1
  }), kP;
  try {
    let t = N_().parse(e);
    if (t === null) return i("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !1
    }), kP;
    return t;
  } catch {
    return i("tengu_tree_sitter_parse_abort", {
      cmdLength: e.length,
      panic: !0
    }), kP;
  }
}

function Uue(e, t) {
  let {type: r, children: s} = e;
  if (re.has(r)) return e;
  if (r === "variable_assignment" && t) return t.children.find(o => re.has(o.type) && o.startIndex > e.startIndex) ?? null;
  if (r === "pipeline") {
    for (let o of s) {
      let n = Uue(o, e);
      if (n) return n;
    }
    return null;
  }
  if (r === "redirected_statement") return s.find(o => re.has(o.type)) ?? null;
  for (let o of s) {
    let n = Uue(o, e);
    if (n) return n;
  }
  return null;
}

function dt(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let r of e.children) if (r.type === "variable_assignment") t.push(r.text); else if (r.type === "command_name" || r.type === "word") break;
  return t;
}

function u6e(e) {
  if (e.type === "declaration_command") {
    let s = e.children[0];
    return s && ut.has(s.text) ? [ s.text ] : [];
  }
  let t = [], r = !1;
  for (let s of e.children) {
    if (s.type === "variable_assignment") continue;
    if (s.type === "command_name" || !r && s.type === "word") {
      r = !0;
      let o = s.children[0] ?? s;
      if (o.type === "concatenation") t.push(o.children.some(n => ne.has(n.type)) ? o.text : o.children.map(G).join("")); else t.push(G(o));
      continue;
    }
    if (ft.has(s.type)) t.push(G(s)); else if (s.type === "concatenation") {
      if (s.children.some(o => ne.has(o.type))) break;
      t.push(s.children.map(G).join(""));
    } else if (ne.has(s.type)) break;
  }
  return t;
}

function G(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return pt(e.text);
}

function pt(e) {
  return e.length >= 2 && (e[0] === '"' && e.at(-1) === '"' || e[0] === "'" && e.at(-1) === "'") ? e.slice(1, -1) : e;
}

var be = new Set([ "program", "list", "pipeline", "redirected_statement" ]), Y = new Set([ "&&", "||", "|", ";", "&", "|&", `\n` ]), ze = new Set([ "command", "pipeline", "list", "negated_command", "declaration_command", "unset_command" ]), mt = new Set([ "test_command", "redirected_statement" ]), R = "__CMDSUB_OUTPUT__", _ = "__TRACKED_VAR__";

function Js(e) {
  return e.includes(R) || e.includes(_);
}

function p6e(e) {
  return e.replaceAll(R, "$(\u2026)").replaceAll(_, "${\u2026}");
}

var A = 0, j = 0, P = 0, gt = /["`\\]/;

function xt(e, t) {
  return t > 0 && e[t - 1] === `\n`;
}

function who(e) {
  if (e.includes(_)) return !0;
  let t = e.indexOf(R);
  while (t !== -1) {
    if (!xt(e, t)) return !0;
    t = e.indexOf(R, t + R.length);
  }
  return !1;
}

function vho(e) {
  return e.startsWith(R) || e.startsWith(_);
}

var ve = /[ \t\n*?[]/, yt = /^-[ioe]$/, _t = /^-[ioe]./, bt = /^--(input|output|error)=/, le = new Set([ "HOME", "PWD", "OLDPWD", "USER", "LOGNAME", "SHELL", "PATH", "HOSTNAME", "UID", "EUID", "PPID", "RANDOM", "SECONDS", "LINENO", "TMPDIR", "BASH_VERSION", "BASHPID", "SHLVL", "HISTFILE", "IFS" ]), kt = new Set([ "?", "$", "!", "#", "0", "-" ]), wt = new Set([ "command_substitution", "process_substitution", "expansion", "simple_expansion", "brace_expression", "subshell", "compound_statement", "for_statement", "while_statement", "until_statement", "if_statement", "case_statement", "function_definition", "test_command", "ansi_c_string", "translated_string", "herestring_redirect", "heredoc_redirect" ]), Et = [ ...wt ];

function Eho(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = Et.indexOf(e);
  return t >= 0 ? t + 1 : 0;
}

var ce = {
  ">": ">",
  ">>": ">>",
  "<": "<",
  ">&": ">&",
  "<&": "<&",
  ">|": ">|",
  "&>": "&>",
  "&>>": "&>>",
  "<<<": "<<<"
}, K = /\{[^\s]*(,|\.\.)[^\s]*\}/, ue = /\{[^{]*\\}/, fe = /\{[^}]*\\\{/, Adt = /[\x00-\x08\x0B-\x1F\x7F]/, Xwr = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/, CUn = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/, Jwr = /\\[ \t]/, Qwr = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n/, Rt = new RegExp(`${Jwr.source}|${Qwr.source}`), IOt = /(?:^|[^\\])(?:\\\\)*[`$]/, OOt = /(?:^|[^\\])(?:\\\\)*['"]/, RUn = /~\[/, xUn = /(?:^|[\s;&|])=[a-zA-Z_]/, Zwr = /<\d*-\d*>/, At = /\{[^}]*['"]/;

function T(e) {
  let t = !1, r = !1, s = !1, o = !0, n = 0;
  while (n < e.length) {
    let l = e[n];
    if (s) if (l === "\\" && (e[n + 1] === "`" || e[n + 1] === "\\" || e[n + 1] === "$")) n += 2; else {
      if (l === "`") s = !1;
      n++;
    } else if (t) {
      if (l === "'") t = !1;
      n++;
    } else if (r) if (l === "\\" && (e[n + 1] === '"' || e[n + 1] === "\\" || e[n + 1] === "`")) n += 2; else if (l === "`") s = !0, 
    n++; else {
      if (l === '"') r = !1;
      n++;
    } else if (l === "\\" && n + 1 < e.length) {
      if (e[n + 1] !== `\n`) o = !1;
      n += 2;
    } else if (l === "#" && o) {
      while (n < e.length && e[n] !== `\n`) n++;
      o = !0;
    } else if (l === "`") s = !0, o = !1, n++; else {
      if (l === "*" || l === "?" || l === "[") return !0;
      if (l === "'") t = !0; else if (l === '"') r = !0;
      o = l === " " || l === "\t" || l === `\n` || l === ";" || l === "|" || l === "&" || l === "(" || l === ")" || l === "<" || l === ">", 
      n++;
    }
  }
  return !1;
}

var St = /[*?]|\[[^\]]*\]/;

function V(e) {
  return St.test(e);
}

function PUn(e) {
  let t = e.argvUnquotedGlob;
  if (e.carveOutMayDesyncQuoteScan === !0 || t === void 0 && e.argv.some(Js)) return e.argv.some(V) || e.redirects.some(s => s.op !== "<<" && s.op !== "<<<" && V(s.target));
  if (t === void 0) return !1;
  if (t.length !== e.argv.length) return e.argv.some(V);
  return e.argv.some((s, o) => V(s) && (t[o] === !0 || Js(s)));
}

function Fe(e) {
  if (!e.includes("{")) return e;
  let t = [], r = !1, s = !1, o = !1, n = !0, l = 0;
  while (l < e.length) {
    let a = e[l];
    if (o) if (a === "\\" && (e[l + 1] === "`" || e[l + 1] === "\\" || e[l + 1] === "$")) t.push(a, e[l + 1]), 
    l += 2; else {
      if (a === "`") o = !1;
      t.push(a === "{" ? " " : a), l++;
    } else if (r) {
      if (a === "'") r = !1;
      t.push(a === "{" ? " " : a), l++;
    } else if (s) if (a === "\\" && (e[l + 1] === '"' || e[l + 1] === "\\" || e[l + 1] === "`")) t.push(a, e[l + 1]), 
    l += 2; else if (a === "`") o = !0, t.push(a), l++; else {
      if (a === '"') s = !1;
      t.push(a === "{" ? " " : a), l++;
    } else if (a === "\\" && l + 1 < e.length) {
      if (t.push(a, e[l + 1]), e[l + 1] !== `\n`) n = !1;
      l += 2;
    } else if (a === "#" && n) {
      while (l < e.length && e[l] !== `\n`) t.push(e[l]), l++;
      n = !0;
    } else if (a === "`") o = !0, n = !1, t.push(a), l++; else {
      if (a === "'") r = !0; else if (a === '"') s = !0;
      n = a === " " || a === "\t" || a === `\n` || a === ";" || a === "|" || a === "&" || a === "(" || a === ")" || a === "<" || a === ">", 
      t.push(a), l++;
    }
  }
  return t.join("");
}

var Ne = String.fromCharCode(36);

function te(e, t) {
  if (e.type === t) return !0;
  for (let r of e.children) if (r && te(r, t)) return !0;
  return !1;
}

async function DF(e) {
  if (e === "") return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  let t = await eK(e);
  if (t === null) return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  let r = tK(e, t);
  if (t !== kP && (r.kind === "simple" || r.nodeType !== void 0)) return {
    ...r,
    tree: t
  };
  return r;
}

function evr(e, t) {
  let r = o => Array.from({
    length: e
  }, (n, l) => o(l));
  if (e <= 3) return {
    readings: Array.from({
      length: 2 ** e
    }, (o, n) => r(l => Math.floor(n / 2 ** l) % 2 === 1)),
    exhaustive: !0
  };
  let s = [ r(() => !1), r(() => !0) ];
  for (let o = 0; e <= 8 && o < e; o++) s.push(r(n => n === o));
  if (t?.length === e && !s.some(o => o.every((n, l) => n === t[l]))) s.push([ ...t ]);
  return {
    readings: s,
    exhaustive: !1
  };
}

function tK(e, t, {plainUnquotedHeredocs: r = !1, declarationPrefix: s} = {}) {
  if (Xwr.test(e)) return {
    kind: "too-complex",
    reason: "Contains lone surrogate",
    differential: !0
  };
  if (Adt.test(e)) return {
    kind: "too-complex",
    reason: "Contains control characters",
    differential: !0
  };
  if (CUn.test(e)) return {
    kind: "too-complex",
    reason: "Contains Unicode whitespace",
    differential: !0
  };
  if (Rt.test(e)) return {
    kind: "too-complex",
    reason: "Contains backslash-escaped whitespace",
    differential: !0
  };
  if (RUn.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh ~[ dynamic directory syntax",
    differential: !0
  };
  if (xUn.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh =cmd equals expansion",
    differential: !0
  };
  if (Zwr.test(e)) return {
    kind: "too-complex",
    reason: "Contains zsh <N-M> numeric-range glob",
    differential: !0
  };
  if (At.test(Fe(e))) return {
    kind: "too-complex",
    reason: "Contains brace with quote character (expansion obfuscation)",
    differential: !0
  };
  if (e.trim() === "") return {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  };
  if (t === kP) return {
    kind: "too-complex",
    reason: "Parser aborted (timeout, resource limit, or over-length)",
    nodeType: "PARSE_ABORT"
  };
  for (let y of [ "backtick_body_empty", "backtick_body_overrun", "backtick_escape_unsupported" ]) if (te(t, y)) return {
    kind: "too-complex",
    reason: y === "backtick_body_empty" ? "empty backtick substitution \u2014 bash joins the surrounding words, so the parsed command boundaries cannot be trusted" : "backtick substitution scan could not be trusted (" + y + ") \u2014 the parsed bytes may differ from what bash executes",
    differential: !0
  };
  let n = Buffer.from(e, "utf8");
  {
    let y = He(t, n, 0);
    if (y) return y;
  }
  {
    let y = Ze(t);
    if (y) return y;
  }
  let l = y => y === 32 || y === 9 || y === 10 || y === 13 || y === 59 || y === 38, a = (y, k) => {
    let w = y;
    while (w < k) {
      let N = n[w];
      if (l(N)) w++; else if (N === 92 && (n[w + 1] === 10 || n[w + 1] === 13 && n[w + 2] === 10)) w += n[w + 1] === 13 ? 3 : 2; else break;
    }
    return w;
  }, h = t.children.filter(y => y !== null).map(y => [ y.startIndex, y.endIndex ]).sort((y, k) => y[0] - k[0]), p = 0;
  for (let [y, k] of h) {
    if (a(p, y) < y) return {
      kind: "too-complex",
      reason: "Parser skipped input between top-level statements"
    };
    if (k > p) p = k;
  }
  if (a(p, n.length) < n.length) return {
    kind: "too-complex",
    reason: "Parser did not consume trailing input"
  };
  {
    let y = tt(t, n);
    if (y !== null) return {
      kind: "too-complex",
      reason: `Redirect uses ${we(y)} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
  }
  {
    let y = nt(t);
    if (y) return y;
  }
  let c = D, d = I, f = L, g = H, u = B, m = M;
  D = r, I = s, L = 0, H = new Map, B = !1, M = void 0;
  let x;
  try {
    if (x = Dt(t), B && x.kind === "simple") x = {
      kind: "too-complex",
      reason: "A variable set in front of a declaration inside a branch or loop can't be checked before it runs"
    };
    let y = Zt();
    if (s === void 0 && y !== void 0) x = {
      ...x,
      declarationPrefixes: y.length,
      declarationPrefixBashKeeps: y
    };
    if (s !== void 0 && x.kind === "simple" && Gt() !== s.length) x = {
      kind: "too-complex",
      reason: "The variables set in front of declarations in this command can't be checked before it runs"
    };
  } finally {
    D = c, I = d, L = f, H = g, B = u, M = m;
  }
  if (x.kind === "too-complex" && x.nodeType !== "ERROR" && (Be(t) || Ue(t))) return {
    ...x,
    nodeType: "ERROR"
  };
  return x;
}

function Be(e) {
  if (e.type === "ERROR" && (e.text.startsWith("${") || We(e.text))) return !0;
  for (let t of e.children) if (t && Be(t)) return !0;
  return !1;
}

function Ue(e) {
  let t = e.children;
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    if (!s) continue;
    if (s.type === "simple_expansion" && s.children.some(o => o?.type === "special_variable_name" && o.text === "#")) {
      let o = "";
      for (let l = r + 1; l < t.length; l++) {
        let a = t[l]?.text ?? "";
        if (o += a, !/^[\w\u0080-\uffff]*$/.test(a)) break;
      }
      let n = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(o);
      if (n && /[\u0080-\uffff]/.test(n[0])) return !0;
    }
    if (Ue(s)) return !0;
  }
  return !1;
}

function We(e) {
  return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(e) && /[\u0080-\uffff]/.test(e);
}

function He(e, t, r) {
  for (let s of e.children) {
    if (!s) continue;
    let o = s.startIndex - 1 - r;
    if (s.type === "comment" && o >= 0 && (t[o] === 41 || t[o] === 40)) return {
      kind: "too-complex",
      reason: "comment glued to a paren \u2014 bash reads `)#\u2026` and `(#\u2026` as a comment, but zsh reads a keyword- or word-glued `(\u2026)` as a glob group whose `#\u2026` text is word content that executes",
      differential: !0
    };
    let n = He(s, t, r);
    if (n) return n;
  }
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "case_item" && !s.children.some(o => o !== void 0 && o.type === ")") && Ve(s)) return {
      kind: "too-complex",
      reason: "`case` pattern group holds a comment \u2014 bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents",
      differential: !0
    };
    if (s.type === "function" && !e.children.some(o => o !== void 0 && o.type === "(")) {
      let o = e.children[1], n = e.children.find(a => a !== void 0 && a.type === "redirected_statement")?.children[0], l = e.children.find(a => a !== void 0 && a.type === "subshell") ?? (n?.type === "subshell" ? n : void 0);
      if (o !== void 0 && l !== void 0 && Ct(t, o.endIndex - r, l.startIndex - r)) return {
        kind: "too-complex",
        reason: "`function` with a parenthesised body and no `()` \u2014 bash reads a subshell body, but zsh reads one glob-group word and expands its contents",
        differential: !0
      };
    }
    if ($t.has(s.type) && t[s.endIndex - r] === 40) return {
      kind: "too-complex",
      reason: `\`${s.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`,
      differential: !0
    };
  }
  return null;
}

var $t = new Set([ "if", "elif", "else", "while", "until", "case" ]);

function Ze(e) {
  if (e.type === "declaration_command" || e.type === "unset_command") {
    if (e.type === "declaration_command" && e.children.some(n => n !== void 0 && (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "") ? Nt : ke).test(S(n.text))) && !W(e)) return {
      kind: "too-complex",
      reason: `${e.children[0]?.text ?? "declare"} with a flag that changes assignment semantics and an operand it would evaluate`,
      differential: !0
    };
    let t = e.type === "unset_command" || /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? ""), r = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? ""), s = e.children.some(n => n !== void 0 && /^[-+][A-Za-z]*[fF]/.test(S(n.text))), o;
    for (let [n, l] of e.children.entries()) {
      if (!l) continue;
      if (n > 1 && o !== void 0 && l.type !== "variable_assignment" && l.startIndex === o.endIndex) return {
        kind: "too-complex",
        reason: `${e.children[0]?.text ?? e.type} operand '${o.text}${l.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
        differential: !0
      };
      if (n > 0 && l.type === "ansi_c_string" && /^\$'[-+]/.test(l.text)) return {
        kind: "too-complex",
        reason: `${e.children[0]?.text ?? e.type} flag ${l.text} \u2014 a $'\u2026' flag word the shell decodes`,
        differential: !0
      };
      if (n > 0 && !/^[-+]/.test(S(l.text))) {
        let a = l.type === "word" || l.type === "raw_string" || l.type === "concatenation" || l.type === "variable_name" || l.type === "number";
        if (l.type === "ansi_c_string" && (t || e.children[0]?.text === "readonly")) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} operand ${l.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
          differential: !0
        };
        if (r) {
          if (!J(l, s)) return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? "declare"} operand '${l.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          o = l;
          continue;
        }
        let h = O(l.text), p = /^['"]?[A-Za-z_]\w*=/.test(l.text), c = a ? t && h.includes("[") || (p ? h.slice(1).includes("\\") : l.text.slice(1).includes("\\")) : l.type === "string" && (p ? h.includes("\\") : l.text.includes("\\")), d = l.type === "variable_assignment" && /['\\]/.test(O(l.text)), f = a && t && /^['"]?\$/.test(h) && /[[`'"]/.test(l.text);
        if (c || d || f) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} operand '${l.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`,
          differential: !0
        };
        if (l.type === "variable_name" ? !(z.test(l.text) || s && X.test(l.text)) : (l.type === "word" || l.type === "concatenation" || l.type === "raw_string" || l.type === "string" && O(l.text) !== l.text) && !Ie(l.text, s, e.children[0]?.text === "readonly")) return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} operand '${l.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`,
          differential: !0
        };
      }
      o = l;
    }
  }
  if (e.type === "command") {
    let t = e.children.find(o => o !== void 0 && o.type === "command_name"), r = t === void 0 ? -1 : e.children.indexOf(t), s = e.children.filter((o, n) => o !== void 0 && n > r && o.type !== "command_name");
    if (t !== void 0) {
      if (Q(t) && s.some(p => !/^[-+]/.test(S(p.text)))) return {
        kind: "too-complex",
        reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
        differential: !0
      };
      let o = ie(t.text), n = s, l = !1, a = !1;
      while (Tt.test(o) && n.length > 0) {
        l = !0;
        while (n.length > 0 && /^-/.test(S(n[0].text))) {
          let p = S(n[0].text);
          if (o === "command" && /^-[pP]*[vV]/.test(p)) a = !0;
          n = n.slice(o === "exec" && /^-[cl]*a$/.test(p) ? 2 : 1);
        }
        if (!a && n.length > 0 && Q(n[0]) && n.slice(1).some(p => !/^[-+]/.test(S(p.text)))) return {
          kind: "too-complex",
          reason: `command head ${n[0].text} after ${o} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
          differential: !0
        };
        o = n.length > 0 ? ie(n[0].text) : "", n = n.slice(1);
      }
      let h = l || ie(t.text) !== t.text || Pe.test(t.text);
      if (!a && h && Pe.test(o)) {
        let p = o === "integer" || o === "float", c = {
          ...e,
          children: [ t, ...p ? [ {
            ...t,
            text: "-i"
          } ] : [], ...n ]
        }, d = n.map(x => S(x.text)).filter(x => /^[-+]/.test(x)).join(""), f = p || /^(?:declare|typeset|local|private)$/.test(o) && vt.test(d) || /^(?:export|readonly)$/.test(o) && Pt.test(d), g = n.filter(x => !/^[-+]/.test(S(x.text))), u = /[fF]/.test(d), m = f && !W(c) || n.some(x => x.type === "ansi_c_string" && /^\$'[-+]/.test(x.text));
        if (/^(?:declare|typeset|local|integer|float|private)$/.test(o)) m ||= g.some(x => !J(x, u)); else m ||= g.some(x => {
          if (x.type === "ansi_c_string") return !0;
          let y = O(x.text);
          return /[\\'"]/.test(y.replace(/^['"]/, "").replace(/['"]$/, "")) || o !== "readonly" && y.includes("[") || /^['"]?\$/.test(y) || (x.type === "word" || x.type === "concatenation" || x.type === "raw_string" || x.type === "string" && O(x.text) !== x.text) && !Ie(x.text, u, o === "readonly");
        });
        if (m) return {
          kind: "too-complex",
          reason: `${o} spelled '${l ? `${t.text} \u2026` : t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`,
          differential: !0
        };
      }
    }
  }
  for (let t of e.children) {
    if (!t) continue;
    let r = Ze(t);
    if (r) return r;
  }
  return null;
}

var Tt = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/, Pe = /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/, ke = /^[-+].*[nialuAEFLRZ]/, vt = /[nialuAEFLRZ]/, Nt = /^[-+].*[aAiluEFLRZ]/, Pt = /[aAiluEFLRZ]/, z = /^[A-Za-z_][A-Za-z0-9_]*$/, X = /^[A-Za-z_][\w.:-]*$/;

function Ie(e, t, r = !1) {
  let s = O(e), o = e[0];
  if (o === "'" || o === '"') {
    if (s = s.slice(1), s.endsWith(o)) s = s.slice(0, -1);
  } else if (/^\\[A-Za-z_]/.test(s)) s = s.slice(1);
  if (r && (o === "'" || o === '"')) {
    let n = e.indexOf("["), l = e.indexOf(o, 1);
    if (n > 0 && l > n) s = s.replace(/\[[\s\S]*$/, "");
  }
  return s = s.replace(/\+$/, ""), z.test(s) || t && X.test(s);
}

function Q(e) {
  return e.type === "ansi_c_string" || e.children.some(t => t !== void 0 && Q(t));
}

function ie(e) {
  return e.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "");
}

var It = new Set([ "command_substitution", "process_substitution", "arithmetic_expansion", "expansion", "simple_expansion" ]), de = "$_";

function Ot(e) {
  let t = [], r = l => {
    for (let a of l.children) {
      if (!a) continue;
      if (It.has(a.type)) t.push([ a.startIndex - e.startIndex, a.endIndex - e.startIndex ]); else r(a);
    }
  };
  if (r(e), t.length === 0) return e.text;
  t.sort((l, a) => l[0] - a[0]);
  let s = Buffer.from(e.text, "utf8"), o = "", n = 0;
  for (let [l, a] of t) {
    if (l < n || a > s.length) return e.text;
    o += s.subarray(n, l).toString("utf8") + de, n = a;
  }
  return o + s.subarray(n).toString("utf8");
}

function Ge(e) {
  if (e.type === "expansion" && e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")) return !0;
  return e.children.some(t => t !== void 0 && Ge(t));
}

function J(e, t) {
  if (e.type === "number" || /^\d+$/.test(e.text)) return !0;
  let r = Ot(e);
  if (e.type !== "raw_string" && e.type !== "string" && K.test(Fe(r))) return !1;
  let s = /^['"]/.test(r) ? r.slice(1) : r, o = s.indexOf("="), n = (o < 0 ? s : s.slice(0, o)).replace(/\+$/, "");
  if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(n)) return !1;
  if (o < 0) return !0;
  if (e.children.find((p, c) => p !== void 0 && c >= 2 && p.type !== "=" && p.type !== "+=")?.type === "array") return !0;
  if (Q(e) || /\$'./.test(r)) return !1;
  if (Ge(e)) return !1;
  let h = s.slice(o + 1);
  for (;;) if (/^[\\'"]/.test(h)) h = h.slice(1); else if (/^\$['"]/.test(h)) h = h.slice(2); else if (h.startsWith(de)) h = h.slice(de.length); else break;
  return !h.startsWith("(");
}

function O(e) {
  let t = 0, r = null, s = e[0] === "'" || e[0] === '"' ? e[0] : null;
  for (let o = s === null ? 0 : 1; o < e.length; o += 1) {
    let n = e[o];
    if (r !== null) {
      if (n === r) r = null;
    } else if ((n === "'" || n === '"') && n !== s) r = n; else if (n === "[") t += 1; else if (n === "]" && t > 0) t -= 1; else if (n === "=" && t === 0) return e.slice(0, o);
  }
  return e;
}

function Ve(e) {
  return e.children.some(t => t !== void 0 && (t.type === "comment" || Ve(t)));
}

function Ct(e, t, r) {
  let s = t;
  while (s < r) {
    let o = e[s];
    if (o === 32 || o === 9) s += 1; else if (o === 92 && e[s + 1] === 10) s += 2; else return !1;
  }
  return !0;
}

function W(e) {
  let t = e.children.map(o => o === void 0 ? "" : S(o.text)).filter(o => /^[-+]/.test(o)).join(""), s = /[iEF]/.test(t) ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/ : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
  return e.children.every((o, n) => {
    if (!o || n === 0 || /^[-+]/.test(S(o.text))) return !0;
    return s.test(o.text);
  });
}

function S(e) {
  let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(e);
  if (t) return t[2];
  return /^\\[-+]/.test(e) ? e.slice(1) : e;
}

var qe = new Set([ "for_statement", "while_statement" ]);

function Oe(e) {
  return qe.has(e.type) && xc();
}

function Dt(e) {
  let t = IUn(e);
  if (t) return t;
  let r = [], s = new Map, o = [], n = E(e, r, s, o);
  if (n) return n;
  let l = [ ...qe ].some(a => te(e, a));
  return {
    kind: "simple",
    commands: r,
    bareAssignmentNames: o,
    hasLoop: l
  };
}

function Lt(e, t, r) {
  return !Buffer.from(e.text, "utf8").subarray(t.endIndex - e.startIndex, r.startIndex - e.startIndex).toString("utf8").replace(/\\\r?\n/g, "").includes(`\n`);
}

var Mt = new Set([ "command", "variable_assignment", "variable_assignments", "list", "pipeline", "redirected_statement", "negated_command", "declaration_command", "unset_command", "test_command", "subshell", "compound_statement", "if_statement", "while_statement", "for_statement", "case_statement", "function_definition", "ERROR" ]), zt = new Set([ "negated_command", "if_statement", "while_statement", "for_statement", "subshell" ]);

function IUn(e) {
  let t = null;
  for (let r of e.children) {
    if (!r) continue;
    if (Mt.has(r.type)) {
      if (t !== null) {
        let o = r;
        while (be.has(o.type)) {
          let n = o.children.find(l => l != null);
          if (!n) break;
          o = n;
        }
        if (zt.has(o.type) && Lt(e, t, o)) return {
          kind: "too-complex",
          reason: o.type === "subshell" ? "`(\u2026)` group directly follows a statement or word on the same line \u2014 bash rejects the line, but zsh reads the glued `(\u2026)` as a glob-group word and expands what follows it" : "statement directly follows another statement on the same line \u2014 bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements",
          differential: !0
        };
      }
      t = r;
    } else t = null;
    let s = IUn(r);
    if (s) return s;
  }
  return null;
}

function E(e, t, r, s, o = !1) {
  if (e.type === "command") {
    let n = Kt(e, [], t, r, s);
    if (n.kind !== "simple") return n;
    return t.push(...n.commands), null;
  }
  if (e.type === "redirected_statement") return Wt(e, t, r, s, o);
  if (e.type === "comment") return null;
  if (be.has(e.type)) {
    let n = e.type === "pipeline", l = t.length, a = !1;
    if (!n) {
      for (let d of e.children) if (d && (d.type === "||" || d.type === "&")) {
        a = !0;
        break;
      }
    }
    let h = a ? new Map(r) : null, p = n ? new Map(r) : r, c = null;
    for (let d of e.children) {
      if (!d) continue;
      if (Y.has(d.type)) {
        if (d.type === "||" || d.type === "|" || d.type === "|&" || d.type === "&") if (d.type === "||") {
          c ??= new Set;
          for (let u of r.keys()) c.add(u);
          let g = h ?? r;
          p = new Map(g);
          for (let [u, m] of r) if (g.get(u) !== m) p.set(u, _);
          for (let u of g.keys()) if (!r.has(u)) p.set(u, _);
        } else p = new Map(h ?? r); else if (c !== null) {
          for (let g of c) r.set(g, _);
          c = null, p = r;
        }
        continue;
      }
      let f = E(d, t, p, s, e.type === "program");
      if (f) return f;
    }
    if (c !== null) for (let d of c) r.set(d, _);
    if (n) {
      if (F(r, p), t.length === l) C(t, e);
    }
    return null;
  }
  if (e.type === "negated_command") {
    let n = t.length;
    for (let l of e.children) {
      if (!l) continue;
      if (l.type === "!") continue;
      let a = E(l, t, r, s);
      if (a) return a;
    }
    if (t.length === n) C(t, e);
    return null;
  }
  if (e.type === "declaration_command") {
    let n = t.length, l = P, a = new Map(r), h = !1, p = !1, c = [], d = -1;
    for (let f of e.children) {
      if (!f) continue;
      let g = f.startIndex === d;
      switch (d = f.endIndex, f.type) {
       case "export":
       case "local":
       case "readonly":
       case "declare":
       case "typeset":
        c.push(f.text);
        break;

       case "word":
       case "number":
       case "raw_string":
       case "string":
       case "concatenation":
        {
          if (g) return {
            kind: "too-complex",
            reason: `${c[0] ?? "declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
            differential: !0
          };
          let u = v(f, t, a, s);
          if (typeof u !== "string") return u;
          if (/^[+-].*m/.test(u)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${u} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
            nodeType: "declaration_command"
          };
          if (c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "readonly") {
            if (/^[+-].*f/.test(u)) h = !0;
            if (/^[+-].*[uU]/.test(u)) p = !0;
            if (h && p) return {
              kind: "too-complex",
              reason: `${c[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`,
              nodeType: "declaration_command"
            };
          }
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && ke.test(u)) return {
            kind: "too-complex",
            reason: `declare flag ${u} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`,
            ...W(e) ? {
              nodeType: "declaration_command"
            } : {
              differential: !0
            }
          };
          if ((c[0] === "export" || c[0] === "readonly") && $e(u) && !W(e)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${u} with an operand bash would evaluate as a compound array assignment`,
            differential: !0
          };
          if ((c[0] === "export" || c[0] === "readonly") && /^[+-].*[iluEFLRZ]/.test(u)) return {
            kind: "too-complex",
            reason: `${c[0]} flag ${u} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`,
            ...W(e) ? {
              nodeType: "declaration_command"
            } : {
              differential: !0
            }
          };
          if (/^[+-].*T/.test(u)) return {
            kind: "too-complex",
            reason: `${c[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
            nodeType: "declaration_command"
          };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && u[0] !== "-" && /^[^=]*\[/.test(u)) return {
            kind: "too-complex",
            reason: `${c[0]} positional '${u}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
            differential: !0
          };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !/^[-+]/.test(u) && !J(f, c.some(m => /^[-+][A-Za-z]*[fF]/.test(m)))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${f.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          if (u[0] !== "-") {
            let m = u.indexOf("=");
            if (m > 0) {
              let x = u.slice(0, m);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(x)) {
                let y = x.endsWith("+"), k = y ? x.slice(0, -1) : x;
                oe(r, {
                  name: k,
                  value: u.slice(m + 1),
                  isAppend: y
                }, n > 0), s.push(k);
              }
            }
          }
          c.push(u);
          break;
        }

       case "variable_assignment":
        {
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !J(f, c.some(m => /^[-+][A-Za-z]*[fF]/.test(m)))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${f.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
            differential: !0
          };
          let u = xe(f, t, a, s);
          if ("kind" in u) return u;
          oe(r, u, n > 0), s.push(u.name), c.push(`${u.name}=${u.value}`);
          break;
        }

       case "variable_name":
        {
          let u = f.text;
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && u[0] !== "-" && /^[^=]*\[/.test(u)) return {
            kind: "too-complex",
            reason: `${c[0]} positional '${u}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
            differential: !0
          };
          let m = c.some(x => /^-[A-Za-z]*[fF]/.test(x));
          if (!z.test(u) && !(m && X.test(u))) return {
            kind: "too-complex",
            reason: `${c[0]} operand '${u}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`,
            differential: !0
          };
          c.push(u);
          break;
        }

       case "ansi_c_string":
        return {
          kind: "too-complex",
          reason: `${c[0] ?? "declaration"} operand ${f.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
          differential: !0
        };

       default:
        return b(f);
      }
    }
    return t.push({
      argv: c,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: T(e.text),
      carveOutMayDesyncQuoteScan: P !== l
    }), null;
  }
  if (e.type === "variable_assignment") {
    let n = t.length, l = xe(e, t, r, s);
    if ("kind" in l) return l;
    if (m6e(l.name)) return {
      kind: "too-complex",
      reason: `${l.name} assignment alters command lookup/execution for subsequent commands`,
      nodeType: "variable_assignment"
    };
    if (ct(l.name, l.value)) return {
      kind: "too-complex",
      reason: `${l.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`,
      nodeType: "variable_assignment"
    };
    if (oe(r, l, n > 0), s.push(l.name), t.length === n && ge(e)) C(t, e);
    return null;
  }
  if (e.type === "for_statement") {
    if (Oe(e)) return b(e);
    let n = null, l = null, a = t.length, h = !1;
    for (let d of e.children) {
      if (!d) continue;
      if (d.type === "variable_name") n = d.text; else if (d.type === "do_group") l = d; else if (d.type === "select") return {
        kind: "too-complex",
        reason: "select statement reads stdin into $REPLY; cannot statically model",
        nodeType: "for_statement"
      }; else if (d.type === "for" || d.type === "in" || d.type === ";") continue; else if (d.type === "command_substitution") {
        let f = Re(d, t, r, s);
        if (f) return f;
      } else {
        let f = v(d, t, r, s);
        if (typeof f !== "string") return f;
        if (ge(d)) h = !0; else if ((T(d.text) || ee(d)) && yDs()) h = !0;
      }
    }
    if (n === null || l === null) return b(e);
    if (n === "PS4" || n === "IFS" || n === "SHELLOPTS" || n === "BASHOPTS" || n === "BASH_VERSINFO" || n === "BASH_ARGV0" || m6e(n) || DOt.has(n) || le.has(n) || MUn.has(n)) return {
      kind: "too-complex",
      reason: `${n} as loop variable bypasses assignment validation`,
      nodeType: "for_statement"
    };
    let p = r.get(n);
    if (p !== void 0 && !Js(p)) return {
      kind: "too-complex",
      reason: `for-loop variable '${n}' would overwrite tracked literal ${JSON.stringify(p.slice(0, 40))}; post-loop value cannot be statically determined`,
      nodeType: "for_statement"
    };
    r.delete(n), s.push(n);
    let c = new Map(r);
    ae(c, l), c.delete(n);
    for (let d of l.children) {
      if (!d) continue;
      if (d.type === "do" || d.type === "done" || d.type === ";") continue;
      let f = E(d, t, c, s);
      if (f) return f;
    }
    if (F(r, c), h && t.length === a) C(t, e);
    return null;
  }
  if (e.type === "if_statement" || e.type === "while_statement") {
    if (Oe(e)) return b(e);
    let n = null, l = null;
    if (e.type === "while_statement") n = new Set(r.keys()), l = new Map(r), ae(r, e);
    let a = !1;
    for (let h of e.children) {
      if (!h) continue;
      if (h.type === "if" || h.type === "fi" || h.type === "else" || h.type === "elif" || h.type === "while" || h.type === "until" || h.type === ";") continue;
      if (h.type === "then") {
        a = !0;
        continue;
      }
      if (h.type === "do_group") {
        let f = new Map(r);
        ae(f, h);
        for (let g of h.children) {
          if (!g) continue;
          if (g.type === "do" || g.type === "done" || g.type === ";") continue;
          let u = E(g, t, f, s);
          if (u) return u;
        }
        F(r, f);
        continue;
      }
      if (h.type === "elif_clause" || h.type === "else_clause") {
        let f = new Map(r);
        for (let g of h.children) {
          if (!g) continue;
          if (g.type === "elif" || g.type === "else" || g.type === "then" || g.type === ";") continue;
          let u = E(g, t, f, s);
          if (u) return u;
        }
        F(r, f);
        continue;
      }
      let p = new Map(r), c = t.length, d = E(h, t, p, s);
      if (d) return d;
      if (!a) {
        for (let [f, g] of p) {
          let u = (l ?? r).get(f);
          if (u !== void 0 && !Js(u) && g !== u) return {
            kind: "too-complex",
            reason: `'${f}' was tracked as literal '${u}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
            nodeType: e.type
          };
          r.set(f, g);
        }
        for (let f of r.keys()) if (!p.has(f)) {
          let g = (l ?? r).get(f);
          if (g !== void 0 && !Js(g)) return {
            kind: "too-complex",
            reason: `'${f}' was tracked as literal '${g}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
            nodeType: e.type
          };
          r.set(f, _);
        }
        for (let f = c; f < t.length; f++) {
          let g = t[f];
          if (g?.argv[0] === "read") {
            for (let m of g.argv.slice(1)) if (!m.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(m)) {
              let x = r.get(m);
              if (x !== void 0 && !Js(x)) return {
                kind: "too-complex",
                reason: `'read ${m}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${x}'`,
                nodeType: e.type
              };
              r.set(m, _);
            }
            let u = r.get("REPLY");
            if (u !== void 0 && !Js(u)) return {
              kind: "too-complex",
              reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${u}'`,
              nodeType: e.type
            };
            r.set("REPLY", _);
          }
        }
      } else F(r, p);
    }
    if (n !== null) {
      for (let h of [ ...r.keys() ]) if (!n.has(h)) r.delete(h);
    }
    return null;
  }
  if (e.type === "subshell") {
    let n = new Map(r), l = t.length, a = !1;
    for (let h of e.children) {
      if (!h) continue;
      if (h.type === "(" || h.type === ")") continue;
      if (h.type !== "comment") a = !0;
      let p = E(h, t, n, s);
      if (p) return p;
    }
    if (a && t.length === l) C(t, e);
    return null;
  }
  if (e.type === "test_command") {
    let n = e.children.some(p => p?.type === "[["), l = je(e, n);
    if (l) return l;
    let a = [ "[[" ], h = P;
    for (let p of e.children) {
      if (!p) continue;
      if (p.type === "[[" || p.type === "]]" || p.type === "[" || p.type === "]") {
        if (p.text === "") return {
          kind: "too-complex",
          reason: "test_command early-close (quote in operator position)",
          differential: !0
        };
        continue;
      }
      let c = Ke(p, a, t, r, s, n);
      if (c) return c;
    }
    return t.push({
      argv: a,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: T(e.text),
      carveOutMayDesyncQuoteScan: P !== h
    }), null;
  }
  if (e.type === "unset_command") {
    let n = [], l = P, a = !1, h = !1, p = !1;
    for (let c of e.children) {
      if (!c) continue;
      switch (c.type) {
       case "unset":
        n.push(c.text), p = c.text === "unsetenv";
        break;

       case "variable_name":
        if (!z.test(c.text) && !(a && X.test(c.text))) return {
          kind: "too-complex",
          reason: `${n[0] ?? "unset"} operand '${c.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`,
          differential: !0
        };
        if (n.push(c.text), h = !0, a || p) {
          let d = r.get(c.text);
          if (d !== void 0 && Js(d)) return {
            kind: "too-complex",
            reason: `'${c.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
            nodeType: "unset_command"
          };
          break;
        }
        if (F8(c.text)) return {
          kind: "too-complex",
          reason: `'unset' targets shell variable ${c.text} (exec-influencing / integer-attr / IFS / PS4)`,
          nodeType: "unset_command"
        };
        r.set(c.text, "");
        break;

       case "word":
        {
          let d = v(c, t, r, s);
          if (typeof d !== "string") return d;
          if (d.startsWith("-")) {
            if (h) return b(c);
            if (d !== "-f" && d !== "-v") return b(c);
            if (d === "-f") a = !0;
            n.push(d);
            break;
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) return b(c);
          if (n.push(d), h = !0, a || p) {
            let f = r.get(d);
            if (f !== void 0 && Js(f)) return {
              kind: "too-complex",
              reason: `'${d}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
              nodeType: "unset_command"
            };
            break;
          }
          if (F8(d)) return {
            kind: "too-complex",
            reason: `'unset' targets shell variable ${d} (exec-influencing / integer-attr / IFS / PS4)`,
            nodeType: "unset_command"
          };
          r.set(d, "");
          break;
        }

       case "ansi_c_string":
       case "raw_string":
       case "string":
       case "concatenation":
        if (/\[/.test(c.text) || c.type === "ansi_c_string") return {
          kind: "too-complex",
          reason: `${n[0] ?? "unset"} operand ${c.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`,
          differential: !0
        };
        return b(c);

       default:
        return b(c);
      }
    }
    return t.push({
      argv: n,
      envVars: [],
      redirects: [],
      text: e.text,
      hasUnquotedGlob: T(e.text),
      carveOutMayDesyncQuoteScan: P !== l
    }), null;
  }
  return b(e);
}

var Ye = new Set([ "unary_expression", "binary_expression", "negated_expression", "parenthesized_expression" ]);

function Ce(e, t) {
  let r = 0;
  while (r < e.length) {
    let s = e[r];
    if (s === " " || s === "\t") {
      r++;
      continue;
    }
    if (s === "\\" && e[r + 1] === `\n`) {
      r += 2;
      continue;
    }
    if (t && s === `\n`) {
      r++;
      continue;
    }
    if (t && s === "#") {
      r++;
      while (r < e.length && e[r] !== `\n`) r++;
      continue;
    }
    return !1;
  }
  return !0;
}

function je(e, t) {
  let r = Buffer.from(e.text, "utf8"), s = e.startIndex;
  for (let o of e.children) {
    if (!o) continue;
    if (o.endIndex > e.endIndex || o.startIndex < e.startIndex) return {
      kind: "too-complex",
      reason: "Test command child extends past the node span \u2014 gap byte accounting is untrustworthy"
    };
    if (o.startIndex > s) {
      let n = r.subarray(s - e.startIndex, o.startIndex - e.startIndex).toString("utf8");
      if (!Ce(n, t)) return {
        kind: "too-complex",
        reason: "Test command has unparsed bytes between children \u2014 parser dropped content that shell will see"
      };
    }
    if (s = Math.max(s, o.endIndex), Ye.has(o.type)) {
      let n = je(o, t);
      if (n) return n;
    }
  }
  if (s < e.endIndex) {
    let o = r.subarray(s - e.startIndex).toString("utf8");
    if (!Ce(o, t)) return {
      kind: "too-complex",
      reason: "Test command has unparsed bytes after its last child \u2014 parser dropped content that shell will see"
    };
  }
  return null;
}

function Ft(e) {
  let t = !1, r = !1, s = !1, o = 0, n;
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    if (!t && a === "\\") {
      l++;
      continue;
    }
    if (!r && a === "'") {
      t = !t;
      continue;
    }
    if (!t && a === '"') {
      r = !r;
      continue;
    }
    if (!t && !r) {
      if (a === "=" && e[l + 1] === "(" && (s || l === 0 || n === "|")) return !0;
      if (a === "(") o++; else if (a === ")") o = Math.max(0, o - 1); else if (o === 0 && (a === "|" || a === "&") && n === a) s = !0;
      n = a;
    }
  }
  return !1;
}

function se(e) {
  let t = e.replace(/\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g, "\0"), r = /[A-Za-z0-9_]/, s = t.indexOf("]]");
  while (s !== -1) {
    let o = s > 0 ? t[s - 1] : "", n = s + 2 < t.length ? t[s + 2] : "";
    if (!(r.test(o) && r.test(n))) return !0;
    s = t.indexOf("]]", s + 1);
  }
  return !1;
}

var Bt = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/, Ut = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;

function Ke(e, t, r, s, o, n) {
  if (Ye.has(e.type)) {
    for (let l = 0; l < e.children.length; l++) {
      let a = e.children[l];
      if (!a) continue;
      if ((a.type === "simple_expansion" || a.type === "expansion") && (e.children[l + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[l + 1]?.text ?? "") || a.children.some(p => p?.type === "special_variable_name") && Ut.test(e.children[l + 1]?.text ?? ""))) return {
        kind: "too-complex",
        reason: "zsh $name[expr] / $name:mod in [[ ]] operand \u2014 recursive eval",
        differential: !0
      };
      let h = Ke(a, t, r, s, o, n);
      if (h) return h;
    }
    return null;
  }
  switch (e.type) {
   case "test_operator":
   case "!":
   case "(":
   case ")":
   case "&&":
   case "||":
   case "==":
   case "=":
   case "!=":
   case "<":
   case ">":
   case "=~":
    if (e.text === "") return {
      kind: "too-complex",
      reason: "Test command has a synthesized zero-width token \u2014 parser diverged from shell",
      differential: !0
    };
    return t.push(e.text), null;

   case "regex":
   case "extglob_pattern":
    if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text)) return {
      kind: "too-complex",
      reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains expansion / command / process substitution`,
      differential: !0
    };
    if (e.text.startsWith("=(")) return {
      kind: "too-complex",
      reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains zsh =(CMD) process substitution`,
      differential: !0
    };
    if (e.type === "regex" && Ft(e.text)) return {
      kind: "too-complex",
      reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`,
      differential: !0
    };
    if (e.type === "extglob_pattern") {
      let l = e.text, a = 0;
      while (a < l.length) {
        if (l[a] === "\\" && a + 1 < l.length) {
          a += 2;
          continue;
        }
        if (l[a] === "&") return {
          kind: "too-complex",
          reason: "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)",
          differential: !0
        };
        a++;
      }
    }
    if (e.type === "regex") {
      let l = e.text, a = 0, h = 0;
      while (h < l.length) {
        let p = l[h];
        if (p === "\\" && h + 1 < l.length) {
          h += 2;
          continue;
        }
        if (a === 0 && p === "|" && l[h + 1] === p) return {
          kind: "too-complex",
          reason: "[[ ]] regex contains glued || (zsh splits it as a cond operator)",
          differential: !0
        };
        if (p === "&") return {
          kind: "too-complex",
          reason: "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)",
          differential: !0
        };
        if (p === '"' || p === "'") {
          let c = p;
          h++;
          while (h < l.length && l[h] !== c) {
            if (c === '"' && l[h] === "\\" && h + 1 < l.length) h++;
            h++;
          }
          if (h < l.length) h++;
          continue;
        }
        if (p === "(") a++; else if (p === ")") {
          if (a--, a < 0) return {
            kind: "too-complex",
            reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
            differential: !0
          };
        }
        h++;
      }
      if (a !== 0) return {
        kind: "too-complex",
        reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
        differential: !0
      };
    }
    if (e.text.includes("&&")) return {
      kind: "too-complex",
      reason: "[[ ]] pattern leaf contains `&&` \u2014 shell cond-lexer divergence (zsh splits the word there)",
      differential: !0
    };
    if (se(e.text)) return {
      kind: "too-complex",
      reason: "[[ ]] pattern leaf contains a potential standalone `]]` closer \u2014 shell cond-lexer divergence (zsh may close the conditional early)",
      differential: !0
    };
    return t.push(e.text), null;

   case "test_rhs_missing":
    return {
      kind: "too-complex",
      reason: "Test command comparison is missing its right-hand side \u2014 parser dropped consumed bytes"
    };

   default:
    {
      let l = v(e, r, s, o);
      if (typeof l !== "string") {
        if (n && l.kind === "too-complex") {
          let {nodeType: a, ...h} = l;
          return {
            ...h,
            differential: !0
          };
        }
        return l;
      }
      if (n && (se(l) || se(e.text)) || /]].*[;\n&|<>]/s.test(l)) return {
        kind: "too-complex",
        reason: n ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes \u2014 possible parser quote-state desync" : "test command quoted operand contains `]]`+separator bytes \u2014 possible parser quote-state desync",
        differential: !0
      };
      return t.push(l), null;
    }
  }
}

function Xe(e) {
  let t = null;
  for (let r of e.children) {
    if (!r || r.type === "!" || r.type === "comment" || Y.has(r.type)) continue;
    t = r;
  }
  if (!t) return null;
  if (t.type === "list" || t.type === "negated_command") return Xe(t);
  if (!ze.has(t.type) && !mt.has(t.type)) return t;
  return null;
}

function Wt(e, t, r, s, o) {
  let n = [], l = null, a = [], h = [];
  for (let f of e.children) {
    if (!f) continue;
    if (f.type === "file_redirect") a.push(f); else if (f.type === "heredoc_redirect") h.push(f); else if (ze.has(f.type)) {
      if (f.type === "list" || f.type === "negated_command") {
        let g = Xe(f);
        if (g) return b(g);
      }
      l = f;
    } else return b(f);
  }
  if (!l) {
    for (let f of a) {
      let g = pe(f, t, r, s);
      if ("kind" in g) return g;
      n.push(g);
    }
    for (let f of h) {
      let g = he(f, r);
      if (g) return g;
    }
    return t.push({
      argv: [],
      envVars: [],
      redirects: n,
      text: e.text,
      hasUnquotedGlob: T(e.text)
    }), null;
  }
  let p = t.length, c = D && o && l.type === "command" && a.length === 0 && h.length === 1 ? h[0]?.children.find(f => f?.type === "pipeline") : void 0, d;
  if (l.type === "list") {
    let f = l.children;
    if (f.length === 3 && f[0] && f[1]?.type === "&&" && f[2]) {
      let g = E(f[0], t, r, s);
      if (g) return g;
      d = new Map(r);
      let u = E(f[2], t, r, s);
      if (u) return u;
    } else {
      let g = E(l, t, r, s);
      if (g) return g;
      d = r;
    }
  } else if (be.has(l.type)) {
    let f = E(l, t, r, s);
    if (f) return f;
    d = r;
  } else {
    d = new Map(r);
    let f = E(l, t, c ? new Map(r) : r, s);
    if (f) return f;
  }
  for (let f of a) {
    let g = pe(f, t, d, s);
    if ("kind" in g) return g;
    n.push(g);
  }
  for (let f of h) {
    let g = he(f, d, c);
    if (g) return g;
  }
  if (c) {
    let f = E(c, t, r, s);
    if (f) return f;
  }
  if (h.length > 0) for (let f = p; f < t.length; f++) {
    let g = t[f];
    if (g) g.argvSourceLiteral = !1;
  }
  if (n.length > 0) if (t.length > p) {
    let f = t.at(-1);
    if (f) f.redirects.push(...n);
  } else t.push({
    argv: [],
    envVars: [],
    redirects: n,
    text: e.text,
    hasUnquotedGlob: T(e.text)
  });
  return null;
}

function Qe(e) {
  {
    let s = e.startIndex;
    for (let o of e.children) {
      if (!o) continue;
      if (o.startIndex > s) {
        let n = Buffer.from(e.text, "utf8").subarray(s - e.startIndex, o.startIndex - e.startIndex).toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(n)) return {
          kind: "too-complex",
          reason: "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see"
        };
      }
      s = o.endIndex;
    }
    if (s < e.endIndex) {
      let o = Buffer.from(e.text, "utf8").subarray(s - e.startIndex).toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(o)) return {
        kind: "too-complex",
        reason: "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see"
      };
    }
  }
  let t = null, r = 0;
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${s.text} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    if (s.type === "file_descriptor") continue;
    if (s.type === ">&-" || s.type === "<&-") {
      t = s.type;
      continue;
    }
    if (s.type in ce) {
      t = s.type;
      continue;
    }
    if ((t === ">&" || t === "<&") && s.text.startsWith("-")) return {
      kind: "too-complex",
      reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
    };
    if (t === ">&-" || t === "<&-") return {
      kind: "too-complex",
      reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
    };
    r++, t = null;
  }
  if (r > 1) return {
    kind: "too-complex",
    reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
  };
  return null;
}

var Je = new Set([ "heredoc_start", "heredoc_body", "<<", "<<-", "heredoc_end", "file_descriptor" ]), et = new Set([ "file_redirect", "pipeline" ]), Ht = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;

function we(e) {
  let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
  if (t === void 0) return "{\u2026}";
  let r = /^\w{1,64}$/.test(t) ? t : "\u2026";
  return e[t.length + 1] === "[" ? `{${r}[\u2026]}` : `{${r}}`;
}

function tt(e, t) {
  let r = t[e.startIndex] === 123 ? Ht.exec(e.text) : null;
  if (r) {
    let s = e.endIndex, o = !1;
    for (;;) {
      let h = t[s];
      if (h === 32 || h === 9) o = !0, s++; else if (h === 92 && t[s + 1] === 10) s += 2; else break;
    }
    let n = t[s], l = t[s + 1];
    if (((n === 62 || n === 60) && l !== 40 || n === 38 && l === 62) && !(o && r[1] !== void 0)) return e.text;
  }
  for (let s of e.children) if (s) {
    let o = tt(s, t);
    if (o !== null) return o;
  }
  return null;
}

function nt(e) {
  if (e.type === "file_redirect") {
    let t = Qe(e);
    if (t) return t;
  }
  if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
    for (let t of e.children) if (t?.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${we(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    if (e.type === "heredoc_redirect") {
      for (let t of e.children) if (t && !Je.has(t.type) && !et.has(t.type)) return {
        kind: "too-complex",
        reason: "Text after the heredoc start on the same line cannot be statically analyzed"
      };
    }
  }
  for (let t of e.children) if (t) {
    let r = nt(t);
    if (r) return r;
  }
  return null;
}

function pe(e, t, r, s) {
  let o = A, n = j, l = null, a = null, h;
  {
    let p = Qe(e);
    if (p) return p;
  }
  for (let p of e.children) {
    if (!p) continue;
    if (p.type === "file_descriptor") h = Number(p.text); else if (p.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${p.text} fd-variable assignment \u2014 modifies shell variable as side effect`
    }; else if (p.type in ce) l = ce[p.type] ?? null; else if (p.type === ">&-" || p.type === "<&-") {
      if (e.children.some(c => c !== p && c?.type !== "file_descriptor")) return {
        kind: "too-complex",
        reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
      };
      return b(p);
    } else if (a !== null) return {
      kind: "too-complex",
      reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
    }; else if ((l === ">&" || l === "<&") && p.text.startsWith("-")) return {
      kind: "too-complex",
      reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
    }; else if (p.type === "word" || p.type === "number") {
      if (p.children.length > 0) return b(p);
      if (K.test(p.text)) return b(p);
      if (ue.test(p.text)) return b(p);
      if (fe.test(p.text)) return b(p);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(p.text)) return b(p);
      a = p.text.replace(/\\([\s\S])/g, (c, d) => d === `\n` ? "" : d);
    } else if (p.type === "raw_string") a = st(p.text); else if (p.type === "string") {
      let c = it(p, t, r, s);
      if (typeof c !== "string") return c;
      a = c;
    } else if (p.type === "concatenation") {
      let c = v(p, t, r, s);
      if (typeof c !== "string") return c;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(p.text)) return {
        kind: "too-complex",
        reason: "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution",
        nodeType: "concatenation"
      };
      a = c;
    } else return b(p);
  }
  if (!l || a === null) return {
    kind: "too-complex",
    reason: "Unrecognized redirect shape"
  };
  if (Js(a)) return {
    kind: "too-complex",
    reason: "Redirect target contains $(cmd) output \u2014 path is runtime-determined",
    nodeType: e.type
  };
  if (a.includes(`\n`)) return {
    kind: "too-complex",
    reason: "Redirect target contains newline \u2014 potential path traversal",
    nodeType: e.type
  };
  if (a.startsWith("!")) return {
    kind: "too-complex",
    reason: "Redirect target starts with ! \u2014 zsh clobber or history expansion",
    nodeType: e.type
  };
  if (a.startsWith("=")) return {
    kind: "too-complex",
    reason: "Redirect target starts with = \u2014 zsh expands to PATH binary",
    nodeType: e.type
  };
  if ((l === ">&" || l === "<&") && a.startsWith("-")) return {
    kind: "too-complex",
    reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
  };
  if (l === ">&" && !/^[A-Za-z0-9./_-]+$/.test(a)) return {
    kind: "too-complex",
    reason: "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated",
    nodeType: e.type
  };
  return {
    op: l,
    target: a,
    fd: h,
    targetSourceLiteral: A === o && j === n
  };
}

var D = !1, I, L = 0, M, H = new Map, B = !1;

function Zt() {
  return M;
}

function Gt() {
  return L;
}

var Vt = /`|\\[$`\\\n]/, De = z.source.slice(1, -1), qt = new RegExp(`\\$(?:${De}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${De}\\})(?!\\[|:[A-Za-z&])`, "g");

function he(e, t, r) {
  let s = null, o = null, n = null, l = !1;
  for (let h of e.children) {
    if (!h) continue;
    if (Je.has(h.type)) {
      if (h.type === "heredoc_start") s = h.text; else if (h.type === "heredoc_body") n = h; else if (h.type === "<<-") l = !0; else if (h.type === "heredoc_end") o = h.text;
    } else if (h === r && h.children.at(-1)?.type === "command" && h.children.every(p => p?.type === "|" || p?.type === "command" && !p.children.some(c => c?.type.endsWith("_redirect")))) ; else if (et.has(h.type)) {
      let p = b(h);
      return p.kind === "too-complex" ? {
        ...p,
        afterHeredocDelimiter: !0
      } : p;
    } else return {
      kind: "too-complex",
      reason: "Text after the heredoc start on the same line cannot be statically analyzed"
    };
  }
  if (n === null) return {
    kind: "too-complex",
    reason: "Heredoc body was not scanned by the parser",
    nodeType: "heredoc_redirect"
  };
  if (r) {
    let h = Buffer.from(e.text, "utf8").subarray(0, n.startIndex - e.startIndex).toString("utf8"), p = e.children.slice(0, e.children.indexOf(n)).map(c => (c === r ? "|" : "") + (c?.text ?? "")).join("");
    if (h.indexOf(`\n`) !== h.length - 1 || h.includes("\\") || h.replace(/[ \t\n]/g, "") !== p.replace(/[ \t]/g, "")) return {
      kind: "too-complex",
      reason: "More than a pipeline follows the heredoc delimiter on its line"
    };
  }
  let a = s !== null && (s.startsWith("'") && s.endsWith("'") || s.startsWith('"') && s.endsWith('"') || s.startsWith("\\"));
  if (!a) {
    let h = n.children.filter(c => c?.type !== "heredoc_content");
    if (!(D && t !== void 0 && s !== null && z.test(s) && o === s && !Vt.test(n.text) && (n.text.match(/\$/g)?.length ?? 0) === h.length && (n.text.match(qt)?.length ?? 0) === h.length && h.every(c => (A++, 
    (c?.type === "simple_expansion" || c?.type === "expansion") && typeof Z(c, t, !0) === "string")))) return {
      kind: "too-complex",
      reason: "Heredoc with unquoted delimiter undergoes shell expansion",
      nodeType: "heredoc_redirect",
      differential: !0
    };
  }
  if (s !== null && (s.startsWith("'") || s.startsWith('"')) && s.slice(1, -1).includes("\\")) return {
    kind: "too-complex",
    reason: "Quoted heredoc delimiter contains backslash",
    nodeType: "heredoc_redirect"
  };
  if (a) for (let h of n.children) {
    if (!h) continue;
    if (h.type !== "heredoc_content") return b(h);
  }
  if (s !== null && n !== null) {
    let h = !a ? s : s.startsWith("\\") ? s.slice(1) : s.slice(1, -1);
    if (h.length > 0) {
      if (l && h.startsWith("\t")) return {
        kind: "too-complex",
        reason: "Heredoc uses <<- with a tab-prefixed delimiter",
        nodeType: "heredoc_redirect"
      };
      for (let p of n.text.split(`\n`)) {
        let c = l ? p.replace(/^\t+/, "") : p;
        if (!c.startsWith(h)) continue;
        let d = c.slice(h.length);
        if (/[)`}]/.test(d)) return {
          kind: "too-complex",
          reason: "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
          nodeType: "heredoc_redirect"
        };
      }
    }
  }
  return null;
}

function Yt(e, t, r, s) {
  for (let o of e.children) {
    if (!o) continue;
    if (o.type === "<<<") continue;
    if (o.type === "variable_name") return {
      kind: "too-complex",
      reason: `Redirect uses ${we(o.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
    };
    let n = v(o, t, r, s);
    if (typeof n !== "string") return n;
    if (q.test(n)) return b(o);
  }
  return null;
}

var me = new Set([ "command", "builtin", "noglob", "nocorrect", "time" ]), Ee = new Set([ "declare", "typeset", "local", "export", "readonly" ]), rt = new Set([ ...Ee, "integer", "float", "private" ]), OUn = new Set([ ":", "break", "continue", "return", "exit", "shift", "times", "set", "export", "readonly", "unset" ]);

function jt(e, t, r, s) {
  let o = [], n = [], l = (u, m = !0) => {
    let x = u.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (x) {
      if (o.push(x[0]), m) n.push(x[0]);
    }
  }, a = e, h = !1, p, c = [];
  for (;;) {
    let u = a[0];
    if (u === void 0) break;
    if (me.has(u)) {
      if ((p === "builtin" || p === "command") && u !== "builtin" && u !== "command") {
        if (u === "noglob" && !h) return {
          kind: "too-complex",
          reason: `'${p} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`,
          nodeType: "command"
        };
        h = !0;
      }
      let m = 1;
      while (m < a.length && /^-[-pvV]*$/.test(a[m])) {
        if (/[vV]/.test(a[m])) h = !0;
        m++;
      }
      a = a.slice(m), p = u;
    } else if (u === "!") {
      if (p === "builtin" || p === "command") h = !0;
      a = a.slice(1), p = void 0;
    } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(u)) {
      let m = o.length;
      l(u), c.push({
        word: u,
        target: o.length > m ? m : void 0
      }), a = a.slice(1), p = void 0;
    } else break;
  }
  let d = a[0];
  if (d === void 0) for (let u of t) l(u.name); else if (Ee.has(d)) {
    let u = !1;
    for (let m = 1; m < a.length; m++) {
      let x = a[m];
      if (!u && x === "--") {
        u = !0;
        continue;
      }
      if (!u && /^[+-].*m/.test(x)) return {
        kind: "too-complex",
        reason: `'${d} ${x}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
        nodeType: "command"
      };
      if (!u && x.startsWith("-")) continue;
      if (x.includes("=")) l(x);
    }
  } else if (d === "read") {
    let u = 1, m = !1, x = !1;
    while (u < a.length) {
      let y = a[u];
      if (!m && y === "--") {
        m = !0, u++;
        continue;
      }
      if (!m && y.startsWith("-")) {
        if (CFe.has(y)) {
          u += 2;
          continue;
        }
        let k = !1;
        for (let w = 1; w < y.length; w++) {
          let N = y[w];
          if (N === "a" || N === "A") {
            let Se = w < y.length - 1 ? y.slice(w + 1) : a[u + 1];
            if (Se) l(Se), x = !0;
            k = w === y.length - 1;
            break;
          }
          if (CFe.has("-" + N)) {
            k = w === y.length - 1;
            break;
          }
        }
        u += k ? 2 : 1;
        continue;
      }
      l(y), x = !0, u++;
    }
    if (!x) o.push("REPLY");
  } else if (d === "printf") for (let u = 1; u < a.length; u++) {
    let m = a[u];
    if (m === "--" || !m.startsWith("-")) break;
    if (m === "-v") {
      if (a[u + 1]) l(a[u + 1]);
      u++;
      continue;
    }
    if (m.startsWith("-v")) l(m.slice(2));
  } else if (d === "getopts") {
    let u = a[1] === "--" ? 1 : 0;
    if (a[2 + u]) l(a[2 + u]);
    o.push("OPTARG"), r.set("OPTIND", _);
  } else if (d === "wait") for (let u = 1; u < a.length; u++) {
    let m = a[u];
    if (m === "--" || !m.startsWith("-")) break;
    for (let x = 1; x < m.length; x++) if (m[x] === "p") {
      if (x < m.length - 1) l(m.slice(x + 1)); else if (a[u + 1]) l(a[u + 1]), u++;
      break;
    }
  } else if (!h && (d === "unset" || d === "unsetenv")) {
    let u = !1, m = !1;
    for (let x = 1; x < a.length; x++) {
      let y = a[x];
      if (y.startsWith("-")) {
        if (m) return {
          kind: "too-complex",
          reason: `'unset \u2026 ${y}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
          nodeType: "command"
        };
        if (y !== "-f" && y !== "-v") return {
          kind: "too-complex",
          reason: `'unset ${y}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
          nodeType: "command"
        };
        if (y === "-f") u = !0;
        continue;
      }
      if (m = !0, !/^[A-Za-z_][A-Za-z0-9_]*$/.test(y)) return {
        kind: "too-complex",
        reason: `'unset ${y}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
        nodeType: "command"
      };
      if (u || d === "unsetenv") {
        let k = r.get(y);
        if (k !== void 0 && Js(k)) return {
          kind: "too-complex",
          reason: `'${y}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`,
          nodeType: "command"
        };
        continue;
      }
      if (F8(y)) return {
        kind: "too-complex",
        reason: `'unset' targets shell variable ${y} (exec-influencing / integer-attr / IFS / PS4)`,
        nodeType: "command"
      };
      r.set(y, "");
    }
  } else if (d === "print") for (let u = 1; u < a.length; u++) {
    let m = a[u];
    if (m === "--" || m === "-" || !m.startsWith("-")) break;
    let x = !1;
    for (let y = 1; y < m.length; y++) {
      let k = m[y];
      if (k === "v") {
        let w = y < m.length - 1 ? m.slice(y + 1) : a[u + 1];
        if (w) l(w);
        x = y === m.length - 1;
        break;
      }
      if (un.has("-" + k)) {
        x = y === m.length - 1;
        break;
      }
    }
    if (x) u++;
  } else if (d === "set") for (let u = 1; u < a.length; u++) {
    let m = a[u];
    if (m === "--" || !/^[-+]/.test(m)) break;
    let x = m.indexOf("A", 1);
    if (x === -1) {
      if (m.endsWith("o")) u++;
      continue;
    }
    if (x < m.length - 1) l(m.slice(x + 1)); else if (a[u + 1]) l(a[u + 1]);
    break;
  } else if (d === "mapfile" || d === "readarray") {
    let u = !1;
    for (let m = 1; m < a.length; m++) {
      let x = a[m];
      if (x.startsWith("-")) {
        if (/^-[dnOsuCc]$/.test(x)) m++;
        continue;
      }
      l(x), u = !0;
    }
    if (!u) o.push("MAPFILE");
  } else if (!h && (d === "cd" || d === "chdir" || d === "pushd" || d === "popd")) {
    let u = !1;
    if (d === "pushd" || d === "popd") for (let m = 1; m < a.length; m++) {
      let x = a[m];
      if (x === "--") break;
      if (Fue(x, "n")) {
        u = !0;
        break;
      }
      if (d === "popd" && (/^\+0*[1-9]/.test(x) || /^-0+$/.test(x))) {
        u = !0;
        break;
      }
    }
    if (!u) r.set("PWD", _), r.set("OLDPWD", _);
    if (d === "pushd" || d === "popd") r.set("DIRSTACK", _), r.set("dirstack", _);
  }
  let f = d !== void 0 && rt.has(d) ? t.length + c.length : 0, g = L;
  if (L += f, f > 0 && I === void 0) {
    let u = d === "export" || d === "readonly" || a.some(x => /^-[A-Za-z]*[xr]/.test(x)), m = new Set;
    for (let x of u ? a.slice(1) : []) {
      let y = /^[A-Za-z_]\w*/.exec(x);
      if (y !== null) m.add(y[0]);
    }
    M = [ ...M ?? [], ...t.map(x => m.has(x.name)), ...c.map(({word: x}) => m.has(/^[A-Za-z_]\w*/.exec(x)?.[0] ?? "")) ];
  }
  if (f > 0 && I !== void 0) {
    let u = {
      kind: "too-complex",
      reason: `A variable set in front of ${d} in this command can't be checked before it runs`
    }, m = [ ...t ];
    for (let {word: x} of c) {
      let y = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(x);
      if (y === null) return u;
      let [, k = "", w, N = ""] = y;
      m.push(w === "+" ? {
        name: k,
        value: N,
        isAppend: !0
      } : {
        name: k,
        value: N
      });
    }
    if (I.length < g + m.length || c.length > 0 && m.length > 1) return u;
    for (let x = c.length - 1; x >= 0; x--) {
      let y = c[x]?.target;
      if (y !== void 0) o.splice(y, 1);
    }
    for (let [x, y] of m.entries()) {
      if (I[g + x] !== !0) continue;
      let k = y.isAppend ? r.get(y.name) : "";
      if (k === void 0 || Js(k) || Js(y.value) || F8(y.name)) return u;
      r.set(y.name, k + y.value), H.set(y.name, k + y.value);
    }
  }
  if (d !== void 0 && t.length > 0 && !(f > 0 && I !== void 0) && OUn.has(d)) for (let u of t) l(u.name);
  for (let u of o) {
    if (F8(u)) return {
      kind: "too-complex",
      reason: `'${d ?? t[0]?.name}' writes shell variable ${u} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
      nodeType: "command"
    };
    r.set(u, _);
  }
  return s.push(...n), null;
}

function Kt(e, t, r, s, o) {
  let n = A, l = P, a = [], h = [], p = [], c = [ ...t ];
  for (let u of e.children) {
    if (!u) continue;
    switch (u.type) {
     case "variable_assignment":
      {
        if (p.length > 0) {
          let x = ot(u, new Set(p.map(y => y.name)));
          if (x !== null) return {
            kind: "too-complex",
            reason: `Env-prefix value references \`$${x}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
            nodeType: "variable_assignment"
          };
        }
        let m = xe(u, r, s, o);
        if ("kind" in m) return m;
        if (ct(m.name, m.value)) return {
          kind: "too-complex",
          reason: `${m.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`,
          nodeType: "variable_assignment"
        };
        p.push(m.isAppend ? {
          name: m.name,
          value: m.value,
          isAppend: !0
        } : {
          name: m.name,
          value: m.value
        });
        break;
      }

     case "command_name":
      {
        let m = u.children[0] ?? u;
        if (xc()) {
          if (m.type === "simple_expansion" || m.type === "expansion") return b(m);
          if ((m.type === "string" || m.type === "concatenation") && at(m)) return b(m);
        }
        let x = v(m, r, s, o);
        if (typeof x !== "string") return x;
        a.push(x), h.push(T(m.text) || ee(m));
        break;
      }

     case "word":
     case "number":
     case "raw_string":
     case "string":
     case "concatenation":
     case "arithmetic_expansion":
      {
        let m = v(u, r, s, o);
        if (typeof m !== "string") return m;
        if (/^--?[\nA-Za-z0-9_]/.test(m) && Js(m)) return {
          kind: "too-complex",
          reason: "Argument starting with `-` contains runtime-determined content",
          nodeType: u.type
        };
        a.push(m), h.push(T(u.text) || ee(u));
        break;
      }

     case "simple_expansion":
      {
        A++;
        let m = Z(u, s, !1);
        if (typeof m !== "string") return m;
        a.push(m), h.push(!0);
        break;
      }

     case "file_redirect":
      {
        let m = pe(u, r, s, o);
        if ("kind" in m) return m;
        c.push(m);
        break;
      }

     case "herestring_redirect":
      {
        A++;
        let m = Yt(u, r, s, o);
        if (m) return m;
        break;
      }

     default:
      return b(u);
    }
  }
  {
    let u = jt(a, p, s, o);
    if (u) return u;
  }
  let d = (u, m) => u === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(u) || m === 0 && u.includes("=") ? `'${u.replaceAll("'", "'\\''")}'` : u, f = /\$[A-Za-z_]/.test(e.text) || e.text.includes(`\n`) ? [ ...p.map(u => `${u.name}=${d(u.value)}`), ...a.map((u, m) => d(u, m)) ].join(" ") : e.text, g = T(e.text);
  return {
    kind: "simple",
    commands: [ {
      argv: a,
      envVars: p,
      redirects: c,
      text: f,
      hasUnquotedGlob: g,
      argvSourceLiteral: A === n,
      carveOutMayDesyncQuoteScan: P !== l,
      argvUnquotedGlob: h
    } ],
    bareAssignmentNames: []
  };
}

var Xt = "*?[";

function ee(e) {
  switch (e.type) {
   case "word":
   case "number":
    for (let t = 0; t < e.text.length; t++) if (e.text[t] === "\\") t++; else if (Xt.includes(e.text[t])) return !0;
    return !1;

   case "string":
   case "raw_string":
   case "simple_expansion":
   case "arithmetic_expansion":
    return !1;

   case "concatenation":
    return e.children.some(t => t !== null && ee(t));

   default:
    return !0;
  }
}

function Re(e, t, r, s) {
  if (D && te(e, "heredoc_redirect")) return b(e);
  let o = new Map(r), n = t.length, l = !1;
  {
    let a = Buffer.from(e.text, "utf8"), h = d => d === 32 || d === 9 || d === 10 || d === 13 || d === 59 || d === 38, p = (d, f) => {
      let g = d;
      while (g < f) {
        let u = a[g];
        if (h(u)) g++; else if (u === 92 && (a[g + 1] === 10 || a[g + 1] === 13 && a[g + 2] === 10)) g += a[g + 1] === 13 ? 3 : 2; else return !1;
      }
      return !0;
    }, c = 0;
    for (let d of e.children) {
      if (!d) continue;
      let f = d.startIndex - e.startIndex;
      if (!p(c, f)) return {
        kind: "too-complex",
        reason: "command substitution contains bytes no parsed node accounts for"
      };
      c = d.endIndex - e.startIndex;
    }
    if (!p(c, a.length)) return {
      kind: "too-complex",
      reason: "command substitution contains bytes no parsed node accounts for"
    };
  }
  for (let a of e.children) {
    if (!a) continue;
    if (a.type === "$(" || a.type === "`" || a.type === ")") continue;
    if (a.type !== "comment") l = !0;
    let h = E(a, t, o, s);
    if (h) return h;
  }
  if (l && t.length === n) C(t, e);
  return null;
}

function v(e, t, r, s) {
  if (!e) return {
    kind: "too-complex",
    reason: "Null argument node"
  };
  switch (e.type) {
   case "word":
    {
      if (K.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains brace expansion syntax",
        nodeType: "word",
        differential: !0
      };
      if (ue.test(e.text) || fe.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace body contains backslash-escaped brace",
        nodeType: "word",
        differential: !0
      };
      if (IOt.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains unescaped ` or $ \u2014 parser missed expansion",
        nodeType: "word",
        differential: !0
      };
      if (OOt.test(e.text)) return {
        kind: "too-complex",
        reason: "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word",
        nodeType: "word"
      };
      return e.text.replace(/\\(.)/g, "$1");
    }

   case "number":
    if (e.children.length > 0) return {
      kind: "too-complex",
      reason: "Number node contains expansion (NN# arithmetic base syntax)",
      nodeType: e.children[0]?.type
    };
    return e.text;

   case "raw_string":
    return st(e.text);

   case "string":
    return it(e, t, r, s);

   case "concatenation":
    {
      if (K.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace expansion",
        nodeType: "concatenation",
        differential: !0
      };
      if (ue.test(e.text) || fe.test(e.text)) return {
        kind: "too-complex",
        reason: "Brace body contains backslash-escaped brace",
        nodeType: "concatenation",
        differential: !0
      };
      let o = "", n = !1, l = e.startIndex;
      for (let a = 0; a < e.children.length; a++) {
        let h = e.children[a];
        if (!h) continue;
        if (h.startIndex > l) return {
          kind: "too-complex",
          reason: "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see",
          nodeType: "concatenation"
        };
        if (l = h.endIndex, h.type === "word" && h.text.includes("{")) n = !0;
        if ((h.type === "simple_expansion" || h.type === "expansion") && (e.children[a + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[a + 1]?.text ?? ""))) return {
          kind: "too-complex",
          reason: "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval",
          nodeType: "concatenation",
          differential: !0
        };
        let p = v(h, t, r, s);
        if (typeof p !== "string") return p;
        o += p;
      }
      if (n && (o.includes(",") || o.includes(".."))) return {
        kind: "too-complex",
        reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
        nodeType: "concatenation"
      };
      if (RUn.test(o)) return {
        kind: "too-complex",
        reason: "zsh ~[ dynamic directory syntax (post-collapse)",
        nodeType: "concatenation",
        differential: !0
      };
      if (xUn.test(o)) return {
        kind: "too-complex",
        reason: "zsh =cmd expansion (post-collapse)",
        nodeType: "concatenation",
        differential: !0
      };
      return o;
    }

   case "arithmetic_expansion":
    {
      A++;
      let o = Ae(e);
      if (o) return o;
      return _;
    }

   case "simple_expansion":
    return A++, Z(e, r, !1);

   default:
    return b(e);
  }
}

function it(e, t, r, s) {
  let o = "", n = -1, l = !1, a = !1, h = !1;
  for (let p of e.children) {
    if (!p) continue;
    if (n !== -1 && p.startIndex > n) {
      let c = Buffer.from(e.text, "utf8").subarray(n - e.startIndex, p.startIndex - e.startIndex).toString("utf8");
      if (c.includes("`")) return {
        kind: "too-complex",
        reason: "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown",
        nodeType: "string",
        differential: !0
      };
      if (c.length > 0) o += c, a = !0;
    }
    switch (n = p.endIndex, p.type) {
     case '"':
      n = p.endIndex;
      break;

     case "string_content":
      o += p.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1"), a = !0;
      break;

     case Ne:
      {
        let c = e.children.indexOf(p), d = e.children[c + 1];
        if (d?.type === "string_content") {
          if (d.text.startsWith("[")) return {
            kind: "too-complex",
            reason: "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval",
            nodeType: "string",
            differential: !0
          };
          if (/^[+^=~]/.test(d.text)) return {
            kind: "too-complex",
            reason: "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks",
            nodeType: "string",
            differential: !0
          };
          let f = e.children[c - 1];
          if (/^:[a-zA-Z&]/.test(d.text) && f?.type === "simple_expansion" && f.endIndex === p.startIndex && f.children.some(g => g?.type === "special_variable_name")) return {
            kind: "too-complex",
            reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
            nodeType: "string",
            differential: !0
          };
        }
        o += Ne, a = !0;
        break;
      }

     case "command_substitution":
      {
        let c = Jt(p);
        if (c === "DANGEROUS") return b(p);
        if (c !== null) {
          let f = c.replace(/\n+$/, "");
          if (gt.test(p.text)) P++;
          if (f.includes(`\n`)) {
            if (/^--?[A-Za-z0-9]/.test(o + f)) return {
              kind: "too-complex",
              reason: "cat-heredoc body would make the argument start with option syntax",
              nodeType: "command_substitution"
            };
            j++, o += `\n` + R, a = !0;
            break;
          }
          j++, o += f, a = !0;
          break;
        }
        let d = Re(p, t, r, s);
        if (d) return d;
        A++, o += R, l = !0;
        break;
      }

     case "simple_expansion":
      {
        A++;
        let c = Z(p, r, !0);
        if (typeof c !== "string") return c;
        {
          let d = e.children[e.children.indexOf(p) + 1], f = p.children.some(g => g?.type === "special_variable_name");
          if (d?.type === "string_content" && (d.text.startsWith("[") || /^:[a-zA-Z&]/.test(d.text) || f && Bt.test(d.text))) return {
            kind: "too-complex",
            reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
            nodeType: "string",
            differential: !0
          };
        }
        if (Js(c)) l = !0; else if (c !== "") a = !0; else h = !0;
        o += c;
        break;
      }

     case "arithmetic_expansion":
      {
        let c = Ae(p);
        if (c) return c;
        A++, o += _, l = !0;
        break;
      }

     default:
      return b(p);
    }
  }
  if (l) {
    if ([ ...o.replaceAll(R, "").replaceAll(_, "") ].length <= 1) return b(e);
  }
  if (!a && !l && !h && e.text.length > 2) {
    let p = e.text.slice(1, -1);
    if (p.includes("`") || p.includes("$(")) return {
      kind: "too-complex",
      reason: "Delimiters-only string node contains unparsed command substitution",
      nodeType: "string",
      differential: !0
    };
    return p;
  }
  return o;
}

var Qt = /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;

function Ae(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!Qt.test(t.text)) return {
        kind: "too-complex",
        reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
        nodeType: "arithmetic_expansion"
      };
      continue;
    }
    switch (t.type) {
     case "binary_expression":
     case "unary_expression":
     case "ternary_expression":
     case "parenthesized_expression":
      {
        let r = Ae(t);
        if (r) return r;
        break;
      }

     default:
      return b(t);
    }
  }
  return null;
}

function C(e, t) {
  e.push({
    argv: [ "true" ],
    envVars: [],
    redirects: [],
    text: t.text,
    hasUnquotedGlob: T(t.text)
  });
}

function ge(e) {
  if (e.type === "arithmetic_expansion") return !0;
  for (let t of e.children) if (t && ge(t)) return !0;
  return !1;
}

function Jt(e) {
  let t = null;
  for (let o of e.children) {
    if (!o) continue;
    if (o.type === "$(" || o.type === ")") continue;
    if (o.type === "redirected_statement" && t === null) t = o; else return null;
  }
  if (!t) return null;
  let r = !1, s = null;
  for (let o of t.children) {
    if (!o) continue;
    if (o.type === "command") {
      let n = o.children.filter(a => a);
      if (n.length !== 1) return null;
      let l = n[0];
      if (l?.type !== "command_name" || l.text !== "cat") return null;
      r = !0;
    } else if (o.type === "heredoc_redirect") {
      if (he(o) !== null) return null;
      for (let n of o.children) {
        if (n?.type === "<<-") return null;
        if (n?.type === "heredoc_body") s = n.text;
      }
    } else return null;
  }
  if (!r || s === null) return null;
  if (_e.test(s)) return "DANGEROUS";
  if (HOt(s) !== !1) return "DANGEROUS";
  return s;
}

function xe(e, t, r, s) {
  let o = null, n = "", l = !1;
  for (let a of e.children) {
    if (!a) continue;
    if (a.type === "variable_name") o = a.text; else if (a.type === "=" || a.type === "+=") {
      l = a.type === "+=";
      continue;
    } else if (a.type === "command_substitution") {
      let h = Re(a, t, r, s);
      if (h) return h;
      n = R;
    } else if (a.type === "simple_expansion") {
      let h = Z(a, r, !0);
      if (typeof h !== "string") return h;
      n = h;
    } else {
      let h = v(a, t, r, s);
      if (typeof h !== "string") return h;
      n = h;
    }
  }
  if (o === null) return {
    kind: "too-complex",
    reason: "Variable assignment without name",
    nodeType: "variable_assignment"
  };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(o)) return {
    kind: "too-complex",
    reason: `Invalid variable name (bash treats as command): ${o}`,
    nodeType: "variable_assignment"
  };
  if (o === "IFS") return {
    kind: "too-complex",
    reason: "IFS assignment changes word-splitting \u2014 cannot model statically",
    nodeType: "variable_assignment"
  };
  if (o === "PS4" || o === "PROMPT4") {
    if (l) return {
      kind: "too-complex",
      reason: "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment",
      nodeType: "variable_assignment"
    };
    if (Js(n)) return {
      kind: "too-complex",
      reason: "PS4 value derived from cmdsub/variable \u2014 runtime unknowable",
      nodeType: "variable_assignment"
    };
    if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(n.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, ""))) return {
      kind: "too-complex",
      reason: "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
      nodeType: "variable_assignment"
    };
  }
  if (n.includes("~")) return {
    kind: "too-complex",
    reason: "Tilde in assignment value \u2014 bash may expand at assignment time",
    nodeType: "variable_assignment"
  };
  return {
    name: o,
    value: n,
    isAppend: l
  };
}

var MUn = new Set([ "_", "RANDOM", "SECONDS", "LINENO", "BASH_COMMAND", "FUNCNAME", "EPOCHSECONDS", "EPOCHREALTIME", "SRANDOM", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "HISTCMD", "ERRNO", "REPLY", "reply", "PIPESTATUS", "pipestatus", "BASH_SOURCE", "DIRSTACK", "GROUPS", "BASH_ARGV", "BASH_ARGC", "BASH_SUBSHELL", "BASH_LINENO", "BASH_ARGV0", "BASH_REMATCH", "MATCH", "match", "MBEGIN", "MEND", "mbegin", "mend", "OPTARG", "OPTIND", "argv", "FIGNORE", "fignore", "PSVAR", "psvar", "WATCH", "watch", "HISTCHARS", "histchars", "PS1", "PROMPT", "prompt", "PS2", "PROMPT2", "PS3", "PROMPT3", "PS4", "PROMPT4", "RPS1", "RPROMPT", "RPS2", "RPROMPT2" ]);

function Z(e, t, r) {
  let s = null, o = !1;
  for (let l of e.children) {
    if (l?.type === "variable_name") {
      s = l.text;
      break;
    }
    if (l?.type === "special_variable_name") {
      s = l.text, o = !0;
      break;
    }
  }
  if (s === null) return b(e);
  let n = t.get(s);
  if (n !== void 0) {
    if (MUn.has(s)) return r && le.has(s) && s !== "BASHPID" ? _ : b(e);
    if (Js(n)) {
      if (!r) return b(e);
      return n;
    }
    if (!r) {
      if (n === "") return b(e);
      if (ve.test(n)) return b(e);
    }
    return n;
  }
  if (s === "HOME") {
    let l = ht();
    if (!r && (l === "" || ve.test(l))) return b(e);
    return l;
  }
  if (r) {
    if (le.has(s)) return _;
    if (o && (kt.has(s) || /^[0-9]+$/.test(s))) return _;
  }
  return b(e);
}

function ae(e, t) {
  U(t, e);
}

function Le(e, t) {
  let r = () => {
    for (let s of t.keys()) t.set(s, _);
  };
  for (let s of e) {
    if (s?.type === "unset" && s.text === "unsetenv") return;
    if (!s || s.type === "unset" || s.type === "file_redirect" || s.type === "heredoc_redirect" || s.type === "herestring_redirect") continue;
    if (s.type === "variable_name") {
      t.set(s.text.replace(/\\/g, ""), _);
      continue;
    }
    if (s.type === "word") {
      if (s.text.startsWith("-")) {
        if (s.text === "--" || /^-[fvn]+$/.test(s.text)) continue;
        r();
        continue;
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(s.text)) {
        t.set(s.text.replace(/^\\/, ""), _);
        continue;
      }
    }
    r();
  }
}

function ye(e) {
  if (!e) return null;
  switch (e.type) {
   case "word":
   case "number":
    return e.text.replace(/\\(.)/g, "$1");

   case "raw_string":
    return e.text.slice(1, -1);

   case "string":
    {
      let t = e.children.filter(r => r && r.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null;
    }

   case "concatenation":
    {
      let t = "";
      for (let r of e.children) {
        let s = ye(r);
        if (s === null) return null;
        t += s;
      }
      return t;
    }

   default:
    return null;
  }
}

function U(e, t) {
  if (e.type === "function_definition" || e.type === "subshell" || e.type === "command_substitution" || e.type === "process_substitution") return;
  if (e.type === "pipeline") {
    let r = null;
    for (let s of e.children) if (s && !Y.has(s.type)) r = s;
    if (r) U(r, t);
    return;
  }
  if (e.type === "list" || e.type === "program") {
    let r = e.children;
    for (let s = 0; s < r.length; s++) {
      let o = r[s];
      if (!o || Y.has(o.type)) continue;
      let n = s + 1;
      while (n < r.length && !r[n]) n++;
      if (r[n]?.type === "&") continue;
      U(o, t);
    }
    return;
  }
  if (e.type === "variable_assignment") {
    for (let r of e.children) if (r?.type === "variable_name") {
      t.set(r.text, _);
      break;
    }
  }
  if (e.type === "for_statement") {
    for (let r of e.children) if (r?.type === "variable_name") {
      t.set(r.text, _);
      break;
    }
  }
  if (e.type === "unset_command") Le(e.children, t);
  if (e.type === "command") {
    let r, s, o = [], n = [], l = !1;
    for (let u of e.children) {
      if (!u) continue;
      if (u.type === "command_name") s = u, r = ye(u.children[0] ?? u) ?? void 0, l = !0; else if (!l || u.type === "file_redirect" || u.type === "herestring_redirect" || u.type === "heredoc_redirect") ; else o.push(ye(u) ?? ""), 
      n.push(u);
    }
    let a = !1, h;
    while (r !== void 0 && (me.has(r) || r === "!")) {
      if ((h === "builtin" || h === "command") && r !== "builtin" && r !== "command" && r !== "noglob") a = !0;
      let u = r === "!" ? void 0 : r;
      while (o.length > 0) {
        let m = o[0];
        if (/^-[-pvV]*$/.test(m)) {
          if (/[vV]/.test(m)) a = !0;
          o.shift(), n.shift();
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(m)) {
          let x = m.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          t.set(x, _), o.shift(), n.shift(), u = void 0;
        } else break;
      }
      h = u, r = o.shift(), n.shift();
    }
    let p = o, c = u => {
      if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(u)) t.set(u, _);
    };
    if (r === "read") {
      t.set("REPLY", _);
      let u = 0, m = !1;
      while (u < p.length) {
        let x = p[u];
        if (!m && x === "--") {
          m = !0, u++;
          continue;
        }
        if (!m && x.startsWith("-")) {
          if (CFe.has(x)) {
            u += 2;
            continue;
          }
          let y = !1;
          for (let k = 1; k < x.length; k++) {
            let w = x[k];
            if (w === "a" || w === "A") {
              c(k < x.length - 1 ? x.slice(k + 1) : p[u + 1] ?? ""), y = k === x.length - 1;
              break;
            }
            if (CFe.has("-" + w)) {
              y = k === x.length - 1;
              break;
            }
          }
          u += y ? 2 : 1;
          continue;
        }
        c(x), u++;
      }
    } else if (r === "mapfile" || r === "readarray") {
      t.set("MAPFILE", _);
      for (let u = 0; u < p.length; u++) {
        let m = p[u];
        if (m.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(m)) u++;
          continue;
        }
        c(m);
      }
    } else if (r === "unset" && !a) Le(n, t);
    let d = s?.children[0], f = d?.type === "word" ? d.text.replace(/\\(.)/g, "$1") : void 0, g = f !== void 0 && !OUn.has(f) && !me.has(f) && !(I === void 0 ? Ee : rt).has(f);
    for (let u of e.children) if (u && (u.type !== "variable_assignment" || !g)) U(u, t);
    return;
  }
  if (e.type === "declaration_command") {
    for (let r of e.children) if (r?.type === "string" || r?.type === "raw_string" || r?.type === "word" || r?.type === "number" || r?.type === "concatenation" || r?.type === "variable_name") {
      let s = r.text.replace(/['"\\]/g, ""), o = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(s);
      if (o) t.set(o[1], _); else {
        let n = s.indexOf("=");
        if (n > 0 && s.lastIndexOf("$", n - 1) !== -1) for (let l of [ ...t.keys() ]) t.set(l, _);
      }
    }
  }
  for (let r of e.children) if (r) U(r, t);
}

function F(e, t) {
  for (let [r, s] of t) {
    let o = e.get(r);
    if (o !== void 0 && o !== s) {
      if (H.get(r) === s) B = !0;
      e.set(r, _);
    }
  }
  for (let r of e.keys()) if (!t.has(r)) e.set(r, _);
}

function oe(e, t, r = !1) {
  if (r) {
    e.set(t.name, _);
    return;
  }
  if (t.isAppend && !e.has(t.name)) return;
  let s = e.get(t.name);
  if (s !== void 0 && s !== t.value && !t.isAppend && !Js(t.value)) {
    e.set(t.name, _);
    return;
  }
  let o = t.isAppend ? (s ?? "") + t.value : t.value;
  e.set(t.name, o);
}

function st(e) {
  return e.slice(1, -1);
}

function at(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return !0;
    if (at(t)) return !0;
  }
  return !1;
}

function en(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null;
}

function ot(e, t) {
  let r = e.type === "variable_assignment";
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "variable_name") {
      if (r) continue;
      if (t.has(s.text)) return s.text;
    }
    if (s.type === "word") {
      let n = en(s.text);
      if (n !== null && t.has(n)) return n;
    }
    let o = ot(s, t);
    if (o !== null) return o;
  }
  return null;
}

function b(e) {
  if (e.type === "ERROR") return {
    kind: "too-complex",
    reason: We(e.text) || e.text.startsWith("${") && svr(e.text) ? "A $ followed by non-ASCII text in this command can't be checked before it runs" : "Parse error",
    nodeType: e.type
  };
  let t = tn.get(e.type);
  return {
    kind: "too-complex",
    reason: `${t === void 0 ? "This command" : `${t} in this command`} can't be checked before it runs`,
    nodeType: e.type
  };
}

var tn = new Map([ [ "simple_expansion", "A variable" ], [ "expansion", "A variable in braces" ], [ "command_substitution", "A nested command" ], [ "process_substitution", "A command used as a file" ], [ "brace_expression", "A brace pattern" ], [ "ansi_c_string", "Text with escape codes" ], [ "translated_string", "Translatable text" ], [ "test_command", "A test in brackets" ], [ "herestring_redirect", "A here-string" ], [ "heredoc_redirect", "A here-document" ], [ "subshell", "A group in parentheses" ], [ "compound_statement", "A group in braces or double parentheses" ], [ "for_statement", "A for or select loop" ], [ "c_style_for_statement", "A counting for loop" ], [ "while_statement", "A while or until loop" ], [ "until_statement", "An until loop" ], [ "if_statement", "An if statement" ], [ "case_statement", "A case statement" ], [ "function_definition", "A function definition" ], [ "array", "A list of values" ], [ "string", "Quoted text" ], [ "file_redirect", "A file redirect" ], [ "pipeline", "A pipeline" ], [ "concatenation", "Joined pieces of text" ], [ "variable_assignment", "A variable assignment" ], [ "variable_assignments", "Variable assignments" ] ]);

function kho(e) {
  let t = [], r = 0, s = !1, o = !1;
  while (r < e.length) {
    let n = e[r];
    if (n === "\\" && !s) {
      r += 2;
      continue;
    }
    if (n === "'" && !o) {
      s = !s, r++;
      continue;
    }
    if (n === '"' && !s) {
      o = !o, r++;
      continue;
    }
    if (!s && n === "$" && e[r + 1] === "{") {
      let l = 1, a = r + 2, h = !1, p = !1;
      while (a < e.length && l > 0) {
        let c = e[a];
        if (c === "\\" && !h) {
          a += 2;
          continue;
        }
        if (c === "'" && !p) h = !h; else if (c === '"' && !h) p = !p; else if (!h && !p) {
          if (c === "{") l++; else if (c === "}") l--;
        }
        a++;
      }
      t.push(e.slice(r + 2, l === 0 ? a - 1 : a)), r = a;
      continue;
    }
    r++;
  }
  return t;
}

function Cdt(e) {
  let t = "", r = !1, s = !1;
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    if (r) {
      if (n === "'") r = !1, t += n;
      continue;
    }
    if (n === "\\" && !r) {
      let l = e[o + 1];
      if (o++, l !== void 0 && !"$'\"`\\".includes(l)) t += l;
      continue;
    }
    if (n === '"') {
      s = !s, t += n;
      continue;
    }
    if (n === "'" && !s) {
      r = !0, t += n;
      continue;
    }
    t += n;
  }
  return t;
}

function AFe(e) {
  let t = "", r;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    if (r === "'") {
      if (o === "'") r = void 0;
      continue;
    }
    if (r === '"') {
      if (o === "\\") s++; else if (o === '"') r = void 0;
      continue;
    }
    if (o === "\\") {
      s++;
      continue;
    }
    if (o === "'" || o === '"') {
      r = o;
      continue;
    }
    t += o;
  }
  return t;
}

var wxe = new Set([ "zmodload", "emulate", "sysopen", "sysread", "syswrite", "sysseek", "zpty", "ztcp", "zsocket", "zf_rm", "zf_mv", "zf_ln", "zf_chmod", "zf_chown", "zf_mkdir", "zf_rmdir", "zf_chgrp", "repeat", "foreach", "zcompile", "setopt", "unsetopt", "disable", "shopt", "autoload", "functions" ]), nn = new Set([ "-exec", "-execdir", "-ok", "-okdir", "-delete", "-rm", "-fprint", "-fprint0", "-fprintf", "-fls", "-files0-from" ]);

function EZt(e) {
  return nn.has(e) && K2n(e);
}

var rn = new Set([ "-name", "-iname", "-path", "-ipath", "-lname", "-ilname", "-regex", "-iregex", "-wholename", "-iwholename", "-samefile", "-newer", "-anewer", "-cnewer", "-mnewer", "-perm", "-user", "-group", "-uid", "-gid", "-size", "-type", "-xtype", "-fstype", "-inum", "-links", "-used", "-context", "-amin", "-cmin", "-mmin", "-atime", "-ctime", "-mtime", "-mindepth", "-maxdepth", "-printf", "-regextype", "-D", "-f", "-flags", "-Bnewer", "-Btime", "-Bmin", "-files0-from", "-xattrname" ]), sn = /^-newer[aBcm][aBcmt]$/, lt = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/, an = /^-[dsx]+f$/;

function MOt(e) {
  return rn.has(e) || sn.test(e) || lt.test(e);
}

function kZt(e) {
  return lt.test(e);
}

function TZt(e) {
  return an.test(e);
}

var G7 = new Set([ "eval", "source", ".", "exec", "nocorrect", "fc", "coproc", "trap", "enable", "mapfile", "readarray", "hash", "bind", "complete", "compgen", "alias", "let" ]), vxe = new Set([ "awk", "gawk", "mawk", "nawk" ]), on = /^(?:-[FvW]$|--(?:fie|a$|as))/;

function HOt(e) {
  if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e)) return "awk program contains system() which executes arbitrary commands";
  if (/(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) || /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e)) return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
  if (/@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(e)) return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
  if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e)) return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
  if (/"\/inet[46]?\//.test(e)) return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
  return !1;
}

var Bue = new Set([ "bash", "sh", "zsh", "dash", "ksh", "mksh", "ash", "hush", "rbash" ]), AZt = new Set([ "busybox", "toybox", "wsl", "su", "runuser" ]), bH = new Set([ ...Bue, "fish", "csh", "tcsh", "rsh", ...AZt, "cmd", "powershell", "pwsh" ]), Exe = new Set([ "time", "command", "builtin", "noglob", "env", "nice", "nohup", "sudo", "doas", "stdbuf", "timeout" ]), $8 = new Set([ "watch", "ionice", "chrt", "setsid", "taskset", "strace", "ltrace", "script", "flock", "unshare", "nsenter" ]);

function Tho(e) {
  let t = e.replace(/^.*[\\/]/, "");
  return G7.has(e) || wxe.has(e) || $8.has(e) || $8.has(t) || t === "rm" || t === "rmdir";
}

var tvr = {
  test: new Set([ "-v", "-R", "-t" ]),
  "[": new Set([ "-v", "-R", "-t" ]),
  "[[": new Set([ "-v", "-R", "-t" ]),
  printf: new Set([ "-v" ]),
  read: new Set([ "-a" ]),
  unset: new Set([ "-v" ]),
  wait: new Set([ "-p" ])
}, f6e = new Set([ "-eq", "-ne", "-lt", "-le", "-gt", "-ge" ]), Rdt = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/, nvr = new Set([ "read", "unset" ]), Me = new Set([ "declare", "typeset", "local", "export", "readonly", "private", "float", "integer" ]), xdt = new Set([ "declare", "typeset", "local", "export", "readonly", "print", "getopts", "set", "zparseopts", "zformat", "zstyle", "autoload", "shift", "exit", "return", "break", "continue", "bye", "logout", "vared", "private", "getln", "zregexparse", "float", "integer" ]), CZt = new Set([ "pipefail", "errexit", "nounset", "xtrace", "noglob", "noclobber", "verbose", "monitor", "notify", "vi", "emacs", "errtrace", "functrace", "hashall", "physical", "ignoreeof" ]), RZt = new Set([ "e", "u", "x", "f", "C", "v", "m", "b", "E", "T", "h", "P", "n" ]), ln = new Set([ "path", "home", "dirstack", "tmpprefix", "bash_env", "env", "cdpath", "globignore", "shell", "fpath", "bash_loadables_path", "module_path", "manpath", "mailpath", "readnullcmd", "nullcmd", "histfile", "zdotdir", "functions", "commands", "aliases", "galiases", "saliases", "bash_cmds", "bash_aliases", "execignore", "bash_source_path", "lang", "language", "lc_all", "lc_ctype", "lc_collate", "lc_messages", "lc_numeric", "lc_time", "histchars", "textdomain", "textdomaindir" ]), DOt = new Set([ "RANDOM", "SECONDS", "LINENO", "OPTIND", "MAILCHECK", "HISTCMD", "SRANDOM", "EPOCHSECONDS", "EPOCHREALTIME", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "COLUMNS", "LINES", "SHLVL", "ERRNO", "TMOUT", "HISTSIZE", "SAVEHIST", "TRY_BLOCK_ERROR", "TRY_BLOCK_INTERRUPT", "KEYTIMEOUT", "LISTMAX", "LOGCHECK", "PERIOD", "FUNCNEST", "UID", "EUID", "GID", "EGID", "REPORTTIME", "REPORTMEMORY", "DIRSTACKSIZE", "BAUD", "ZLE_RPROMPT_INDENT", "MBEGIN", "MEND", "PPID", "ARGC", "ZSH_SUBSHELL", "TTYIDLE", "status" ]);

function ct(e, t) {
  if (!DOt.has(e)) return !1;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || Js(t)) return !0;
  if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) return !0;
  return !1;
}

function m6e(e) {
  let t = e.toLowerCase();
  return ln.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_");
}

function F8(e) {
  return m6e(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || DOt.has(e);
}

var CFe = new Set([ "-p", "-d", "-n", "-N", "-t", "-u", "-i" ]), HUn = new Set([ "-t", "-n", "-N" ]), xZt = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/, cn = /^[A-Za-z_][A-Za-z0-9_]*\[/, un = new Set([ "-f", "-C", "-x", "-X", "-u" ]), _e = /\/proc\/.*\/environ/, q = /\n\s*#/;

function rvr(e, t) {
  let r = t?.sourceGlobRecord !== !1, s = null;
  for (let o of e) {
    let n = o.argv, l = !1;
    for (;;) {
      let c = n[0]?.replace(/^.*[\\/]/, ""), d = c === "time" || c === "nohup" || c === "timeout" || c === "nice" || c === "stdbuf" || c === "env" || c === "command" || c === "xargs" ? c : n[0];
      if (d === "time" || d === "nohup") n = n.slice(1); else if (d === "timeout") {
        let f = 1;
        while (f < n.length) {
          let g = n[f];
          if (g === "--foreground" || g === "--preserve-status" || g === "--verbose") f++; else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(g)) f++; else if ((g === "--kill-after" || g === "--signal") && n[f + 1] && /^[A-Za-z0-9_.+-]+$/.test(n[f + 1])) f += 2; else if (g.startsWith("--")) return {
            ok: !1,
            reason: `'timeout ${g}' can't be checked before it runs`
          }; else if (g === "-v") f++; else if ((g === "-k" || g === "-s") && n[f + 1] && /^[A-Za-z0-9_.+-]+$/.test(n[f + 1])) f += 2; else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(g)) f++; else if (g.startsWith("-")) return {
            ok: !1,
            reason: `'timeout ${g}' can't be checked before it runs`
          }; else break;
        }
        if (n[f] && /^\d+(?:\.\d+)?[smhd]?$/.test(n[f])) n = n.slice(f + 1); else if (n[f]) return {
          ok: !1,
          reason: `timeout duration '${n[f]}' can't be checked before it runs`
        }; else break;
      } else if (d === "nice") if (n[1] === "-n" && n[2] && /^-?\d+$/.test(n[2])) n = n.slice(3); else if (n[1] && /^-\d+$/.test(n[1])) n = n.slice(2); else if (n[1] && (/[$(`]/.test(n[1]) || Js(n[1]))) return {
        ok: !1,
        reason: `nice argument '${n[1]}' contains expansion \u2014 cannot statically determine wrapped command`
      }; else n = n.slice(1); else if (d === "env") {
        let f = 1;
        while (f < n.length) {
          let g = n[f];
          if (g.includes("=") && !g.startsWith("-")) f++; else if (g === "-i" || g === "-0" || g === "-v") f++; else if (g === "-u" && n[f + 1]) f += 2; else if (g.startsWith("-")) return {
            ok: !1,
            reason: `'env ${g}' can't be checked before it runs`
          }; else break;
        }
        if (f < n.length) n = n.slice(f); else break;
      } else if (d === "stdbuf") {
        let f = 1;
        while (f < n.length) {
          let g = n[f];
          if (yt.test(g) && n[f + 1]) f += 2; else if (_t.test(g)) f++; else if (bt.test(g)) f++; else if (g.startsWith("-")) return {
            ok: !1,
            reason: `'stdbuf ${g}' can't be checked before it runs`
          }; else break;
        }
        if (f > 1 && f < n.length) n = n.slice(f); else break;
      } else if (d === "command") {
        let f = 1, g = !1;
        while (f < n.length && n[f].startsWith("-") && n[f] !== "--") {
          let u = n[f];
          if (!/^-[pvV]+$/.test(u)) return {
            ok: !1,
            reason: `'command ${u}' can't be checked before it runs`
          };
          if (u.includes("v") || u.includes("V")) g = !0;
          f++;
        }
        if (n[f] === "--") f++;
        if (g || f >= n.length) break;
        n = n.slice(f);
      } else if (n[0] === "builtin" || n[0] === "noglob") {
        let f = n[0] === "builtin" && n[1] === "--" ? 2 : 1;
        if (f < n.length) n = n.slice(f); else break;
      } else if (d === "xargs") if (n.length >= 2 && !n[1].startsWith("-")) n = n.slice(1), 
      l = !0; else break; else break;
    }
    let a = n[0];
    if (a === void 0) continue;
    if (a === "") return {
      ok: !1,
      reason: "Empty command name \u2014 argv[0] may not reflect what bash runs"
    };
    if (a.includes(R) || a.includes(_)) return {
      ok: !1,
      reason: "Command name is runtime-determined (placeholder argv[0])"
    };
    if (a.startsWith("-") || a.startsWith("|") || a.startsWith("&")) return {
      ok: !1,
      reason: "Command appears to be an incomplete fragment"
    };
    let h = ko(tvr, a), p = a === "test" || a === "[" || a === "[[";
    if (h !== void 0) for (let c = 1; c < n.length; c++) {
      let d = n[c], f = n[c + 1];
      if (h.has(d) && f !== void 0 && (f.includes("[") || Js(f))) return {
        ok: !1,
        reason: `'${a} ${d}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
      };
      if (p) {
        if (d === "-t" && f !== void 0 && !Rdt.test(f)) return {
          ok: !1,
          reason: `'${a} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`
        };
        continue;
      }
      if (d.length > 2 && d[0] === "-" && d[1] !== "-" && !d.includes("[")) {
        for (let g of h) if (g.length === 2 && d.includes(g[1])) {
          let u = n[c + 1];
          if (u !== void 0 && (u.includes("[") || Js(u))) return {
            ok: !1,
            reason: `'${a} ${g}' (combined in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
          };
        }
      }
      if (d.length > 2 && d[0] === "-" && a !== "read") for (let g of h) {
        if (g.length !== 2) continue;
        let u = d.indexOf(g[1], 1);
        if (u === -1 || u === d.length - 1) continue;
        let m = d.slice(u + 1);
        if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(m) || Js(m)) return {
          ok: !1,
          reason: `'${a} ${g}' (fused in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
        };
      }
    }
    if (p) for (let c = 2; c < n.length; c++) {
      if (!f6e.has(n[c])) continue;
      for (let d of [ n[c - 1], n[c + 1] ]) {
        if (d === void 0) continue;
        if (d.includes("[") || !Rdt.test(d)) return {
          ok: !1,
          reason: `'${a} ... ${n[c]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`
        };
      }
    }
    if (nvr.has(a)) {
      let c = !1;
      for (let d = 1; d < n.length; d++) {
        let f = n[d];
        if (c !== !1) {
          let g = c;
          if (c = !1, g === "numeric" && !xZt.test(f)) return {
            ok: !1,
            reason: `'read ${n[d - 1]}' operand '${f}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
          };
          if (g === "prompt" && (cn.test(f) || f[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(f) || f.includes(R))) return {
            ok: !1,
            reason: `'read ${n[d - 1]}' operand '${f}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`
          };
          continue;
        }
        if (f[0] === "-") {
          if (a === "read") {
            if (HUn.has(f)) c = "numeric"; else if (f === "-p") c = "prompt"; else if (CFe.has(f)) c = "string"; else if (f.length > 2) for (let g = 1; g < f.length; g++) {
              let u = "-" + f[g], m = HUn.has(u);
              if (m || CFe.has(u)) {
                if (g === f.length - 1) c = m ? "numeric" : u === "-p" ? "prompt" : "string"; else if (m && !xZt.test(f.slice(g + 1))) return {
                  ok: !1,
                  reason: `'read ${u}' (fused in '${f}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
                }; else if (u === "-p") {
                  let x = f.slice(g + 1);
                  if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(x) || x.includes(R)) return {
                    ok: !1,
                    reason: `'read -p' fused remainder '${x}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`
                  };
                }
                break;
              }
            }
          }
          continue;
        }
        if (f.includes("[") || Js(f)) return {
          ok: !1,
          reason: `'${a}' positional NAME '${f}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
        };
      }
    }
    if (xdt.has(a)) {
      let c = a === "declare" || a === "typeset" || a === "local", d = c || a === "export" || a === "readonly", f = c || a === "readonly", g = !1, u = !1;
      for (let m = 1; m < n.length; m++) {
        let x = n[m];
        if (f) {
          if (/^[+-].*f/.test(x)) g = !0;
          if (/^[+-].*[uU]/.test(x)) u = !0;
          if (g && u) return {
            ok: !1,
            reason: `'${a}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')`
          };
        }
        if (c && ke.test(x)) return {
          ok: !1,
          reason: `'${a}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics`
        };
        if (Me.has(a) && /^[+-].*[iluEFLRZ]/.test(x)) return {
          ok: !1,
          reason: `'${a}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value`
        };
        if ((d || a === "private") && /^[+-].*m/.test(x)) return {
          ok: !1,
          reason: `'${a}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`
        };
        if (Me.has(a) && /^[+-].*T/.test(x)) return {
          ok: !1,
          reason: `'${a} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`
        };
        let y = x.includes("[") && /[$`]/.test(x);
        if (y || Js(x)) return {
          ok: !1,
          reason: y ? `'${a}' operand '${p6e(x)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts` : `'${a}' operand '${p6e(x)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`
        };
        if ((a === "float" || a === "integer") && !/^[+-]/.test(x)) return {
          ok: !1,
          reason: `zsh '${a}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`
        };
      }
    }
    if (a === "printf") for (let c = 1; c < n.length; c++) {
      let d = n[c], f = d.includes("[") && /[$`]/.test(d);
      if (f || Js(d)) return {
        ok: !1,
        reason: f ? `printf operand '${p6e(d)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))` : `printf operand '${p6e(d)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
      };
    }
    if (a === "set") for (let c = 1; c < n.length; c++) {
      let d = n[c];
      if (d === "--") break;
      if (!/^[-+]/.test(d)) continue;
      for (let f = 1; f < d.length; f++) {
        let g = d[f];
        if (g === "o") {
          let u = f < d.length - 1 ? d.slice(f + 1) : n[c + 1];
          if (u !== void 0 && u !== "" && !CZt.has(u.toLowerCase().replace(/[_-]/g, ""))) return {
            ok: !1,
            reason: `'set -o/+o ${u}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`
          };
          if (f === d.length - 1) c++;
          break;
        }
        if (g === "A") break;
        if (!RZt.has(g)) return {
          ok: !1,
          reason: `'set ${d[0]}${g}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`
        };
      }
    }
    if (a === "print" && n.some(c => /^[+-].*P/.test(c))) for (let c = 1; c < n.length; c++) {
      let d = n[c];
      if (/\$\(|`/.test(d) || Js(d)) return {
        ok: !1,
        reason: "'print -P' operand contains command substitution \u2014 zsh prompt expansion evaluates $(cmd)"
      };
    }
    if (a === "jobs") for (let c = 1; c < n.length; c++) {
      let d = n[c];
      if (/^[+-].*x/.test(d)) return {
        ok: !1,
        reason: "What 'jobs -x' starts can't be checked before it runs"
      };
    }
    if (ovr.has(a)) return {
      ok: !1,
      reason: `Shell keyword '${a}' as command name \u2014 tree-sitter mis-parse`
    };
    if (l) {
      if (a === "find" || a === "jq") return {
        ok: !1,
        reason: `What xargs adds to ${a} can't be checked before it runs`
      };
      if (vxe.has(a)) {
        let c = !1;
        for (let d = 1; d < n.length; d++) {
          let f = n[d];
          if (f === "--") {
            c = d + 1 < n.length;
            break;
          }
          if (f === "-" || !f.startsWith("-")) {
            c = !0;
            break;
          }
          if (!f.includes("=") && on.test(f)) d++;
        }
        if (!c) return {
          ok: !1,
          reason: `The program xargs gives ${a} can't be checked before it runs`
        };
      }
    }
    if (a === "jq") {
      for (let c of n) {
        if (/\bsystem\s*\(/.test(c)) return {
          ok: !1,
          reason: "jq command contains system() function which executes arbitrary commands"
        };
        if (/\b(?:include|import)\b/.test(c)) return {
          ok: !1,
          reason: 'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins'
        };
      }
      if (n.some(c => /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(c))) return {
        ok: !1,
        reason: "jq command contains dangerous flags that could execute code or read arbitrary files"
      };
    }
    if (vxe.has(a)) {
      if (o.hasUnquotedGlob || r && PUn(o)) return {
        ok: !1,
        reason: "awk command contains unquoted glob characters \u2014 could glob-expand to a planted program or flag before awk runs"
      };
      for (let c of n) {
        let d = HOt(c);
        if (d !== !1) return {
          ok: !1,
          reason: d
        };
        if (Js(c)) return {
          ok: !1,
          reason: "awk is given text that can't be checked before it runs"
        };
      }
      if (n.some(c => /^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(c) || /^--(?:fil|e|i|lo|s|de)/.test(c))) return {
        ok: !1,
        reason: "awk has an option that can't be checked before it runs"
      };
    }
    if (a === "find") {
      if (o.hasUnquotedGlob || r && PUn(o)) return {
        ok: !1,
        reason: "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs"
      };
      let c = !1;
      for (let d = 1; d < n.length; d++) {
        let f = n[d], g = c;
        if (c = !1, EZt(f)) return {
          ok: !1,
          reason: `find with '${f}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`
        };
        if (TZt(f)) return {
          ok: !1,
          reason: `find option '${f}' is read differently by different versions of find \u2014 could hide a following action`
        };
        if (!g && kZt(f)) {
          c = !0;
          continue;
        }
        if (!g && MOt(f)) {
          d++;
          continue;
        }
        if (Js(f)) return {
          ok: !1,
          reason: "find argument is runtime-determined \u2014 could resolve to a dangerous action"
        };
        if (/[[\]*?]/.test(f)) return {
          ok: !1,
          reason: `find argument '${f}' contains glob characters \u2014 could glob-expand to a dangerous action`
        };
      }
    }
    if (wxe.has(a)) return {
      ok: !1,
      reason: `Zsh builtin '${a}' can bypass security checks`
    };
    if (G7.has(a)) if (a === "fc" && !n.slice(1).some(c => /^[+-].*[es]/.test(c))) ; else if (a === "compgen" && !n.slice(1).some(c => /^[+-].*[CFW]/.test(c))) ; else return {
      ok: !1,
      reason: `'${a}' evaluates arguments as shell code`
    };
    if ($8.has(a) && n.length > 1) return {
      ok: !1,
      reason: `What '${a}' starts can't be checked before it runs`
    };
    for (let c of o.argv) if (c.includes("/proc/") && _e.test(c)) return {
      ok: !1,
      reason: "Accesses /proc/*/environ which may expose secrets"
    };
    for (let c of o.redirects) if (c.target.includes("/proc/") && _e.test(c.target)) return {
      ok: !1,
      reason: "Accesses /proc/*/environ which may expose secrets"
    };
    for (let c of o.argv) if (c.includes(`\n`) && q.test(c)) s ??= {
      ok: !1,
      kind: "newline-hash",
      reason: "Newline followed by # inside a quoted argument can hide arguments from path validation"
    };
    for (let c of o.envVars) if (c.value.includes(`\n`) && q.test(c.value)) s ??= {
      ok: !1,
      kind: "newline-hash",
      reason: "Newline followed by # inside an env var value can hide arguments from path validation"
    };
    for (let c of o.redirects) if (c.target.includes(`\n`) && q.test(c.target)) s ??= {
      ok: !1,
      kind: "newline-hash",
      reason: "Newline followed by # inside a redirect target can hide arguments from path validation"
    };
  }
  if (s) return s;
  return {
    ok: !0
  };
}

export { Tdt, Fue, hvs, Ywr, kP, eK, Uue, u6e, Js, p6e, who, vho, Eho, Adt, Xwr, CUn, Jwr, Qwr, IOt, OOt, RUn, xUn, Zwr, PUn, DF, evr, tK, IUn, OUn, MUn, kho, Cdt, AFe, wxe, EZt, MOt, kZt, TZt, G7, vxe, HOt, Bue, AZt, bH, Exe, $8, Tho, tvr, f6e, Rdt, nvr, xdt, CZt, RZt, DOt, m6e, F8, CFe, HUn, xZt, rvr };
