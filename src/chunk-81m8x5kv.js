// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rr } from "./chunk-xywp7esx.js";

var C2r = !0;

var R2r = () => Rr("tengu_agents_md_mod", C2r);

var OGe = "cc-plugin-agents-md";

function j_n(t, o) {
  let e = new Set([ t.path ]), {path: n, parent: r} = t;
  while (r !== void 0 && !e.has(r)) e.add(r), n = r, r = o.get(r)?.parent;
  return n;
}

var I7n = [ "project", "local", "user" ];

var eet = t => t.flatMap(o => o.parts.map((e, n) => ({
  path: e.path,
  kind: "project",
  content: e.content,
  ...n > 0 && {
    parent: o.parts[0]?.path ?? e.path
  }
})));

function mYo(t, o, e) {
  if ((t === "~" || t.startsWith("~/")) && e !== void 0) {
    let r = e.replace(/(?<=.)[\\/]+$/, "");
    return t === "~" ? r : `${r}${c(r)}${t.slice(2)}`;
  }
  return /^(?:[A-Za-z]:)?[\\/]/.test(t) ? t : `${o}${c(o)}${t}`;
}

var c = t => t.includes("\\") ? "\\" : "/";

var Qge = t => t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");

var W_n = (t, o) => Qge(t).startsWith(`${Qge(o)}/`);

var x2r = (t, o) => Qge(t.path) === Qge(o);

var P2r = t => `Contents of ${t.path}:\n\n${t.content}`;

function O7n(t, o) {
  let e = new Set(o.map(n => n.dir));
  return t.filter(n => !e.has(n.dir));
}

var I2r = (t, o) => [ ...t ?? [], ...o.map(P2r) ];

var tet = t => t.kind === "project" || t.kind === "local";

function cSt(t) {
  let o = Qge(t), e = o.lastIndexOf("/.claude/"), n = e === -1 ? o.lastIndexOf("/") : e;
  return n <= 0 ? "/" : o.slice(0, n);
}

function O2r(t, o) {
  let e = new Map(t.map(s => [ s.path, s ])), n = t.findIndex(s => tet(s) && W_n(cSt(j_n(s, e)), o));
  if (n !== -1) return n;
  let r = t.findLastIndex(tet);
  if (r !== -1) return r + 1;
  let i = t.findIndex(s => s.kind === "memory");
  return i === -1 ? t.length : i;
}

var kzt = [ "AGENTS.md", ".claude/AGENTS.md" ];

var net = [ "CLAUDE.md", ".claude/CLAUDE.md", "CLAUDE.local.md" ];

var ret = "main";

var gYo = [ "clear", "compact", "resume" ];

function M7n(t, o) {
  if (!(tet(t) && t.parent === void 0 && net.some(i => Qge(t.path).endsWith(`/${i}`)))) return !1;
  let n = cSt(t.path), r = Qge(o);
  return n === r || W_n(r, n);
}

var hYo = t => !I7n.includes(t.kind);

function Tzt(t, o) {
  let e = new Set(o.map(i => Qge(i.path))), n = new Set(o.filter(tet).map(i => i.content.trim())), r = [];
  for (let i of t) {
    let s = Qge(i.path), m = i.content.trim();
    if (!(e.has(s) || m !== "" && n.has(m))) e.add(s), r.push(i);
  }
  return r;
}

function H7n(t, o) {
  if (o.length === 0) return t;
  let e = [ ...t ], n = new Map(o.map(i => [ i.path, i ])), r = new Map;
  for (let i of o) {
    let s = cSt(j_n(i, n));
    r.set(s, [ ...r.get(s) ?? [], i ]);
  }
  for (let [i, s] of r) e.splice(O2r(e, i), 0, ...s);
  return e;
}

var oet = "claude-md-or-agents-md";

var x = {
  none: "managed-only",
  claude: "claude-md",
  "agents-fallback": "claude-md-or-agents-md",
  both: "claude-md-and-agents-md"
};

function yYo(t) {
  if (t === void 0) return;
  return (typeof t === "string" ? x[t] : void 0) ?? "claude-md";
}

var z_n = [ "claude-md", "claude-md-or-agents-md", "claude-md-and-agents-md", "managed-only" ];

var _Yo = t => z_n.find(o => o === t) ?? oet;

export { C2r, R2r, OGe, j_n, I7n, eet, mYo, Qge, W_n, x2r, P2r, O7n, I2r, tet, cSt, O2r, kzt, net, ret, gYo, M7n, hYo, Tzt, H7n, oet, yYo, z_n, _Yo };
