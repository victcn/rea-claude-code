// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ML } from "./chunk-j706jx8h.js";

import { as } from "./chunk-r276nwd3.js";

import { $d } from "./chunk-1pzzpwf7.js";

import { s, n } from "./chunk-3vw306fv.js";

import { fd } from "./chunk-f3sxrxpt.js";

import { l8, s1 } from "./chunk-n4eyr3t2.js";

import { Be } from "./chunk-50asgqhj.js";

import { ms } from "./chunk-zzj636ts.js";

import { iB, SD, Pd } from "./chunk-m3evanyp.js";

import { cdr, R5t, X3, sNe } from "./chunk-84yp45y8.js";

import { Mb } from "./chunk-fsk1q3y7.js";

import { l7e } from "./chunk-s1j0r5f5.js";

import { CMe } from "./chunk-vvk1zbxb.js";

import { d7e, fm } from "./chunk-n2wn9c6a.js";

import { Ik } from "./chunk-rv6y1pjz.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { s0 } from "./chunk-7etzs4d7.js";

import { P, xo, Z, F } from "./chunk-cpyd3eya.js";

import { Lc } from "./chunk-ejckqh3m.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var h = {};

Nr(h, {
  PILL_INDENT_COLUMNS: () => b,
  ToolProgressHint: () => S,
  default: () => h
});

F();

var g = "ctrl+b", _ = "ctrl+x ctrl+b", C = new Set([ g, _ ].map(i => s1(l8(i))));

function j(i) {
  for (let o of i) {
    if (o.context !== "Task") continue;
    let u = s1(o.chord);
    if (o.action === "task:background") {
      if (!C.has(u)) return !0;
    } else if (o.action === null && C.has(u)) return !0;
  }
  return !1;
}

function pBt({handler: i, isActive: o}) {
  let u = Ik(), l = ms("task:background", "Task", g), d = fd(), c = d?.bindings, t = Z(() => c ? j(c) : !1, [ c ]), p = xo(i), m = !(u && !t);
  P(() => {
    if (!d || !o) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => p(),
      singleKey: m
    });
  }, [ d, o, m ]);
  let f = t ? l : _, x = l === "" ? "" : a.terminal === "tmux" ? f.split(" ").map(y => y === g ? `${g} ${g}` : y).join(" ") : f;
  return {
    cohesionFixes: u,
    gateOnShortcut: x,
    resolvedShortcut: l
  };
}

var b = 5;

function z(t) {
  return t.props.hint === "" ? null : e(s, {
    paddingLeft: b,
    children: e(n, {
      dimColor: !0,
      children: t.props.hint
    })
  });
}

var S = i => {
  let l = w(4), {toolUseId: o, hint: u} = i, d, c;
  if (l[0] !== u || l[1] !== o) d = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: u
    }
  }), c = [ o, u ], l[0] = u, l[1] = o, l[2] = d, l[3] = c; else d = l[2], c = l[3];
  return Pd.useRenderHook(Pd.useRenderInput("ToolProgress", d, c), z);
};

var E = 2, T = 160;

function T3n(i) {
  let t = w(10), {toolUseId: o, keyOnly: u, onBackground: l} = i, d = u === void 0 ? !1 : u, c = Mb(), p;
  if (t[0] !== l || t[1] !== c) p = () => {
    X3(c), l?.();
  }, t[0] = l, t[1] = c, t[2] = p; else p = t[2];
  let m = p, f;
  if (t[3] !== m) f = {
    handler: m,
    isActive: !0
  }, t[3] = m, t[4] = f; else f = t[4];
  let {cohesionFixes: x, gateOnShortcut: y} = pBt(f), U = ms("task:background", "Task", "ctrl+b"), k = x ? y : a.terminal === "tmux" && U === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : U;
  if (d) {
    return null;
  }
  if (Lc() || x && k === "") {
    return null;
  }
  let D;
  if (t[5] !== k) D = ML({
    chord: k,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), t[5] = k, t[6] = D; else D = t[6];
  let R = D;
  if (R === "") {
    return null;
  }
  let A;
  if (t[7] !== R || t[8] !== o) A = e(h.ToolProgressHint, {
    toolUseId: o,
    hint: R
  }), t[7] = R, t[8] = o, t[9] = A; else A = t[9];
  return A;
}

function KKs(i, {verbose: o, theme: u}) {
  let {command: l} = i;
  if (!l) return null;
  let d = sNe(l);
  if (d) return o ? d.filePath : as(d.filePath);
  if (!o) {
    let c = l.split(`\n`);
    if ($d()) {
      let m = cdr(l);
      if (m) return m.length > T ? m.slice(0, T) + "\u2026" : m;
    }
    let t = c.length > E, p = l.length > T;
    if (t || p) {
      let m = l;
      if (t) m = c.slice(0, E).join(`\n`);
      if (m.length > T) m = m.slice(0, T);
      return r(n, {
        children: [ m.trim(), "\u2026" ]
      });
    }
  }
  return l;
}

function qKs(i, {verbose: o, tools: u, terminalSize: l, inProgressToolCallCount: d}) {
  let c = i.at(-1);
  if (!c || !c.data) return e(Be, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let t = c.data;
  return e(CMe, {
    fullOutput: t.fullOutput,
    output: t.output,
    elapsedTimeSeconds: t.elapsedTimeSeconds,
    totalLines: t.totalLines,
    totalBytes: t.totalBytes,
    timeoutMs: t.timeoutMs,
    taskId: t.taskId,
    verbose: o
  });
}

function YKs() {
  return e(Be, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Waiting\u2026"
    })
  });
}

function XKs(i, o, {verbose: u, theme: l, tools: d, style: c, input: t}) {
  let m = o.at(-1)?.data?.timeoutMs, f = typeof t === "object" && t !== null && "command" in t && typeof t.command === "string" ? t.command : void 0;
  return e(l7e, {
    content: i,
    verbose: u,
    timeoutMs: m,
    style: c,
    command: f
  });
}

function JKs(i, {verbose: o, progressMessagesForMessage: u, tools: l}) {
  return e(fm, {
    result: i,
    verbose: o
  });
}

function QKs(i, {columns: o}) {
  if (i.isImage) return !1;
  return s0(i.stdout, o) || s0(typeof i.stderr === "string" ? d7e(i.stderr).trim().replace(R5t, "") : i.stderr, o);
}

export { pBt, T3n, KKs, qKs, YKs, XKs, JKs, QKs };
