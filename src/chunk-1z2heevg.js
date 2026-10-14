// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ze } from "./chunk-r2h53bm2.js";

var c = {
  Task: "Agent",
  KillShell: "TaskStop",
  KillBash: "TaskStop",
  ListPeers: "ListAgents",
  Brief: "SendUserMessage",
  ListMcpResources: "ListMcpResourcesTool",
  ReadMcpResource: "ReadMcpResourceTool",
  ReadMcpResourceDir: "ReadMcpResourceDirTool"
};

function Yl(e) {
  return Object.hasOwn(c, e) ? c[e] : e;
}

function Kie(e) {
  let n = [];
  for (let [t, r] of Object.entries(c)) if (r === e) n.push(t);
  return n;
}

var aqn = "workspace", j1e = `mcp__${aqn}__bash`, lqn = `mcp__${aqn}__web_fetch`;

function kee(e, n) {
  let t = n && Object.hasOwn(n, e) ? n[e] : void 0;
  return t !== void 0 && t !== e ? [ e, t ] : [ e ];
}

function SG(e, n) {
  if (!n) return [];
  let t = [];
  for (let [r, o] of Object.entries(n)) if (o === e) t.push(r);
  return t;
}

function TE(e) {
  return e.includes("*");
}

function wG(e, n) {
  return h(e)(n);
}

function h(e) {
  let n = e.split("*"), t = n[0] ?? "";
  if (n.length === 1) return i => t === i;
  let r = n.at(-1) ?? "", o, s = [];
  return i => {
    let a = i.length - r.length;
    if (a < t.length || !i.startsWith(t) || !i.endsWith(r)) return !1;
    o ??= n.slice(1, -1).filter(l => l !== "");
    let u = t.length;
    for (let [l, f] of o.entries()) {
      let g = (s[l] ??= x(f))(i, u, a);
      if (g === -1) return !1;
      u = g + f.length;
    }
    return !0;
  };
}

function San(e, n, t) {
  let r = 0, o = 0;
  for (;;) {
    let s = d(e, t, r), i = d(n, t, o);
    if (e.charAt(s) !== n.charAt(i) || !wG(e.slice(r, s), n.slice(o, i))) return !1;
    if (s === e.length) return !0;
    r = s + 1, o = i + 1;
  }
}

function d(e, n, t) {
  let r = t;
  while (r < e.length && !n.includes(e.charAt(r))) r++;
  return r;
}

function ngt(e, n) {
  return wG(e, n);
}

function dqn(e) {
  return h(e);
}

function p(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function qie(e, n) {
  let t = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, r => `\\${r}`);
  if (n?.escapeGlobs) t = t.replaceAll("*", "\\*");
  if (t.startsWith("!") || t.startsWith("#")) t = `\\${t}`;
  return t = t.replace(/\s+$/, r => Array.from(r, o => `\\${o}`).join("")), t;
}

function wan(e) {
  return e.replace(/\\([^])/g, (n, t) => van(t) ? t : n);
}

var m = /^[\\[\]!#()|+^$*?\s]$/;

function van(e) {
  return m.test(e);
}

var b = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;

function JIo(e) {
  return b.test(e);
}

function QIo(e) {
  return ZIo(e).replaceAll("\\\\", "\\");
}

function ZIo(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}

function sX(e) {
  if (typeof e === "string" && !e.includes("(") && !e.includes(")")) return {
    kind: "bare"
  };
  let n = A(e, "("), t = R(e, ")");
  if (n === -1 && t === -1) return {
    kind: "bare"
  };
  let r = e.substring(0, n);
  if (n === -1 || t <= n || t !== e.length - 1 || /[()]/.test(r)) return {
    kind: "malformed"
  };
  return {
    kind: "call",
    toolName: r,
    rawContent: e.substring(n + 1, t)
  };
}

function jn(e) {
  let n = sX(e);
  if (n.kind !== "call" || !n.toolName) return {
    toolName: Yl(e)
  };
  if (n.rawContent === "" || n.rawContent === "*") return {
    toolName: Yl(n.toolName)
  };
  let t = QIo(n.rawContent);
  return {
    toolName: Yl(n.toolName),
    ruleContent: t
  };
}

function bn(e) {
  if (!e.ruleContent) return e.toolName;
  let n = p(e.ruleContent);
  return `${e.toolName}(${n})`;
}

var eq = "!";

function DNs(e) {
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (r === void 0) continue;
    let o = e[t + 1];
    if (r === eq && o !== void 0 && !o.startsWith(eq) && !o.startsWith("(")) {
      n.push(eq + o), t++;
      continue;
    }
    n.push(r);
  }
  return n;
}

function LNs(e) {
  return e.lastIndexOf("(") > e.lastIndexOf(")");
}

function rgt(e) {
  return `Error: the --disallowed-tools rule "${ze(e, 64)}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`;
}

function fu(e) {
  if (e.length === 0) return [];
  let n = [];
  for (let t of e) {
    if (!t) continue;
    let r = "", o = !1;
    for (let s of t) switch (s) {
     case "(":
      o = !0, r += s;
      break;

     case ")":
      o = !1, r += s;
      break;

     case ",":
      if (o) r += s; else {
        if (r.trim()) n.push(r.trim());
        r = "";
      }
      break;

     case " ":
      if (o) r += s; else if (r.trim()) n.push(r.trim()), r = "";
      break;

     default:
      if (r || s.trim()) r += s;
    }
    if (r.trim()) n.push(r.trim());
  }
  return n;
}

function A(e, n) {
  for (let t = 0; t < e.length; t++) if (e[t] === n) {
    let r = 0, o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}

function R(e, n) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] === n) {
    let r = 0, o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}

function x(e) {
  if (!e.includes(e.charAt(0), 1)) return (t, r, o) => {
    let s = t.indexOf(e, r);
    return s + e.length > o ? -1 : s;
  };
  let n = new Int32Array(e.length);
  for (let t = 1, r = 0; t < e.length; t++) {
    while (r > 0 && e.charCodeAt(t) !== e.charCodeAt(r)) r = n[r - 1] ?? 0;
    if (e.charCodeAt(t) === e.charCodeAt(r)) r++;
    n[t] = r;
  }
  return (t, r, o) => {
    for (let s = r, i = 0; s < o; s++) {
      while (i > 0 && t.charCodeAt(s) !== e.charCodeAt(i)) i = n[i - 1] ?? 0;
      if (t.charCodeAt(s) === e.charCodeAt(i)) i++;
      if (i === e.length) return s - e.length + 1;
    }
    return -1;
  };
}

export { Yl, Kie, aqn, j1e, lqn, kee, SG, TE, wG, San, ngt, dqn, qie, wan, van, JIo, QIo, ZIo, sX, jn, bn, eq, DNs, LNs, rgt, fu };
