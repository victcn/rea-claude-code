// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Mu } from "./chunk-3pqddg8f.js";

import { lJe, se, t } from "./chunk-kawq2919.js";

import { nt, Nt } from "./chunk-5wbhf1bk.js";

import { gw, SF, m7, tue } from "./chunk-sqb9meyh.js";

import { S$, a } from "./chunk-j016gcgm.js";

import { ax, qMr } from "./chunk-4dwgr3et.js";

import { SOe } from "./chunk-rgd61mm3.js";

import { oi } from "./chunk-bp2n0w3d.js";

import { fy } from "./chunk-4v78v8fd.js";

import { spawnSync as I } from "child_process";

import { spawn as _, spawnSync as y } from "child_process";

import { basename as h } from "path";

function v(n) {
  return !!S$(n);
}

var L = new Set([ "start", "cmd", "cmd.exe" ]);

function x(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = h(r);
    if (L.has(o.toLowerCase())) continue;
    return o;
  }
  return h(e[0] ?? n);
}

var T = [ "code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad" ], b = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/, D = new Set([ "code", "cursor", "windsurf", "codium" ]);

function E(n) {
  let e = x(n);
  return T.find(r => e.includes(r));
}

function A(n, e, r) {
  if (!r) return [ e ];
  if (D.has(n)) return [ "-g", `${e}:${r}` ];
  if (n === "subl") return [ `${e}:${r}` ];
  return [ e ];
}

function R(n, e, r) {
  let o = E(n);
  if (o) return A(o, e, r);
  return r && b.test(h(nt(n, " "))) ? [ `+${r}`, e ] : [ e ];
}

function p2e(n, e) {
  let r = jx();
  if (!r) return !1;
  let o = r.split(" "), c = o[0] ?? r, d = o.slice(1), g = E(r);
  if (g) {
    let p = A(g, n, e), l = {
      detached: !0,
      stdio: "ignore",
      windowsHide: !0
    }, i;
    return i = _(c, [ ...d, ...p ], l), i.on("error", s => t(`editor spawn failed: ${s}`, {
      level: "error"
    })), ax(i.pid), i.unref(), !0;
  }
  let u = oi().get(process.stdout);
  if (!u) return !1;
  let m = e && b.test(h(c));
  u.enterAlternateScreen();
  try {
    let p = {
      stdio: "inherit"
    }, l;
    {
      let i = [ ...d, ...m ? [ `+${e}`, n ] : [ n ] ], s = qMr();
      if (l = y(c, i, {
        ...p,
        ...s
      }), l.error && s.cgroup !== void 0) l = y(c, i, p);
    }
    if (l.error) return t(`editor spawn failed: ${l.error}`, {
      level: "error"
    }), !1;
    return !0;
  } finally {
    u.exitAlternateScreen();
  }
}

class C {
  isResolved=!1;
  editor=void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (a.VISUAL) this.editor = a.VISUAL; else if (a.EDITOR) this.editor = a.EDITOR; else {
      let n = [ "code", "vi", "nano" ];
      this.editor = n.find(e => v(e));
    }
    return this.isResolved = !0, this.editor;
  }
  reset() {
    this.isResolved = !1, this.editor = void 0;
  }
}

var F = new K(() => new C);

function P() {
  return F.of(B().host);
}

function jx() {
  return Mu()?.editor ?? P().resolve();
}

function C2() {
  let n = jx();
  if (!n) return;
  let e = x(n);
  return e && e.length <= 8 ? e : void 0;
}

var N = {
  code: "code -w",
  subl: "subl --wait"
};

function Ale(n, e) {
  let r = se(), o = oi().get(process.stdout);
  if (!o) throw Error("Ink instance not found - cannot pause rendering");
  let c = jx();
  if (!c) return {
    content: null
  };
  try {
    r.statSync(n);
  } catch {
    return {
      content: null
    };
  }
  let d = E(c) === void 0;
  if (d) o.enterAlternateScreen(); else o.prepareTerminalForHandoff();
  try {
    let g = N[c] ?? c, u = g.split(" "), m = u[0] ?? g, p = u.slice(1), l = R(c, n, e), i;
    {
      let f = qMr();
      if (i = I(m, [ ...p, ...l ], {
        stdio: "inherit",
        ...f
      }), i.error && f.cgroup !== void 0) i = I(m, [ ...p, ...l ], {
        stdio: "inherit"
      });
    }
    if (i.error || i.signal || i.status !== null && i.status !== 0) {
      let f = gw(c);
      return {
        content: null,
        error: i.error ? `Couldn't open ${f} \u2014 ${i.error.message}` : i.signal ? `${f} closed unexpectedly (${i.signal})` : `${f} quit unexpectedly (exit code ${i.status})`
      };
    }
    return {
      content: r.readFileSync(n, {
        encoding: "utf-8"
      })
    };
  } catch {
    return {
      content: null
    };
  } finally {
    if (d) o.exitAlternateScreen(); else o.restoreTerminalAfterHandoff();
  }
}

function U(n, e, r) {
  let o = n;
  for (let [c, d] of Object.entries(r)) if (d.type === "text") {
    let g = parseInt(c), u = d.content;
    if (d.unavailable || u === "") continue;
    if (d.inline) continue;
    let m = o.indexOf(u);
    if (m !== -1) {
      let p = SF(u), l = m7(g, p);
      o = o.slice(0, m) + l + o.slice(m + u.length);
    }
  }
  return o;
}

var S = "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", O = 50;

function k(n) {
  let e = fy(n).split(`\n`);
  if (e.length > O) e = e.slice(-O), e.unshift("\u2026 (earlier output truncated)");
  return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500\n` + `${e.map(o => o ? `# ${o}` : "#").join(`\n`)}\n${S}\n\n`;
}

function W(n) {
  let e = n.indexOf(S);
  if (e === -1) return n;
  return n.slice(e + S.length).replace(/^\r?\n\r?\n?/, "");
}

function uW(n, e, r, o) {
  let c = se(), d = SOe();
  try {
    let g = e ? tue(n, e) : n, u = r ? k(r) : "", m = u + g, p = n.slice(0, o), l = o === void 0 ? void 0 : 1 + Nt(u, `\n`) + Nt(e ? tue(p, e) : p, `\n`);
    lJe(d, m, {
      encoding: "utf-8",
      flush: !0
    });
    let i = Ale(d, l);
    if (i.content === null) return i;
    let s = i.content;
    if (r) s = W(s);
    let f = s.endsWith(`\r\n`) ? `\r\n` : `\n`;
    if (s.endsWith(f) && !s.endsWith(f + f)) s = s.slice(0, -f.length);
    if (e) s = U(s, n, e);
    return {
      content: s
    };
  } finally {
    try {
      c.unlinkSync(d);
    } catch {}
  }
}

export { p2e, jx, C2, Ale, uW };
