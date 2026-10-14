// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, l, E, W } from "./chunk-b0z4bv3v.js";

import { xle, W6 } from "./chunk-qjb8dzm4.js";

import { Rle } from "./chunk-g9n1m2vk.js";

import { p } from "./chunk-jkzenvsk.js";

import { Li, QG, el, Mm, za } from "./chunk-ddr690nj.js";

import { _, Y, ty, T$, __, mJe } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { Pjt } from "./chunk-09wwpwma.js";

import { o, M, oe, T, u, $e, Kr, ue, U, A, Tk } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { createHash as de } from "crypto";

import { constants as k } from "fs";

import R from "path";

import { open as L } from "fs/promises";

import Q from "path";

var z = 120;

function F(e) {
  return e.length > z ? `${ne(e, z)}...` : e;
}

function Qp(e) {
  return mJe(_(F(e)));
}

function Q1r(e) {
  if (typeof e === "string") return Qp(e);
  let t = _(e) ?? String(e);
  return t.length <= z ? mJe(t) : mJe(_(F(t)));
}

async function bS(e, t, r, i = []) {
  let n = Q.resolve(e, t), s = Qp(t), a = [ e, ...i ];
  if (Mm(t) && !el(t) || Mm(n) && !el(n)) throw new x(`${r}: ${s} is an automounter path (macOS /Network, or the bare /net root) \u2014 refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path \u2014 refusing it");
  let f = za(n) || za(t) && !Li(n, e);
  if (Li(t, e) && i.every(h => Li(n, h)) && !f) throw new x(`${r}: ${s} is a network-reaching path (UNC / automount) \u2014 refusing it`, "plugin eval: a repo-authored path is network-reaching \u2014 refusing it");
  let d, y = await T$(__, n, {
    anchors: a,
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified",
    onOutcome: h => {
      if (h.kind === "resolved") d = h.path;
    }
  });
  if (y === ty) throw new x(`${r}: ${s} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component \u2014 refusing it");
  if (y !== void 0) throw new x(`${r}: ${s} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`, "plugin eval: a repo-authored path links to a network-reaching path \u2014 refusing it");
  if (d !== void 0 && QG(d)) throw new x(`${r}: ${s} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) \u2014 refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory \u2014 refusing it");
}

import N from "path";

var ee = 8192, B = 5e7, te = /^[is]*$/;

function D(e) {
  let r = 0, i = 1, n = 0, s = !1, a = !1, f = !1;
  for (let c = 0; c < e.length; c++) {
    let g = e[c];
    if (g === "(" || g === ")" || g === "|") return {
      problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
    };
    if (g === "^") {
      if (c !== 0) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      s = !0, a = !1, f = !1;
      continue;
    }
    if (g === "$") {
      if (c !== e.length - 1) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      continue;
    }
    let b = null;
    if (g === "*") b = {
      lo: 0,
      hi: 1 / 0
    }; else if (g === "+") b = {
      lo: 1,
      hi: 1 / 0
    }; else if (g === "?") {
      if (f) {
        f = !1;
        continue;
      }
      b = {
        lo: 0,
        hi: 1
      };
    } else if (g === "{") {
      let m = /^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(c));
      if (m) {
        let w = Number(m[1]), S = m[2] === void 0 ? w : m[2] === "" ? 1 / 0 : Number(m[2]);
        if (S < w) return {
          problem: `quantifier ${m[0]} has max < min`
        };
        b = {
          lo: w,
          hi: S
        }, c += m[0].length - 1;
      }
    }
    if (b !== null) {
      if (!a) return {
        problem: "a quantifier must follow a single character, escape, or class"
      };
      if (n += (b.hi === 1 / 0 ? b.lo : b.hi) - 1, b.hi === 1 / 0) r++; else i *= b.hi - b.lo + 1;
      a = !1, f = !0;
      continue;
    }
    if (f = !1, g === "\\") {
      let m = e[c + 1];
      if (m === void 0) return {
        problem: "pattern ends with a lone backslash"
      };
      if (/[1-9]/.test(m) || m === "k") return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      if (a = m !== "b" && m !== "B", a) n++;
      c++;
      continue;
    }
    if (g === "[") {
      c++;
      while (c < e.length && e[c] !== "]") {
        if (e[c] === "\\") c++;
        c++;
      }
      if (c >= e.length) return {
        problem: "unterminated character class"
      };
      a = !0, n++;
      continue;
    }
    a = !0, n++;
  }
  if (i > B) return {
    problem: "too many optional/bounded repeats for an expect: guard"
  };
  let d = c => {
    let g = 1;
    for (let b = 1; b <= r; b++) g = g * (c + b) / b;
    return (s ? 1 : Math.max(1, c)) * g * i * (c + n);
  }, y = 0, h = ee;
  while (y < h) {
    let c = Math.ceil((y + h) / 2);
    if (d(c) <= B) y = c; else h = c - 1;
  }
  if (y < 16) return {
    problem: "this combination of repeats leaves no useful subject length under the matching budget \u2014 use fewer quantifiers"
  };
  return {
    maxSubject: y,
    problem: null
  };
}

var re = new Set([ "string", "number", "bool", "boolean", "object", "array" ]);

function P(e, t) {
  let r = e;
  for (let i of t.split(".")) {
    if (r === null || typeof r !== "object") return;
    if (Array.isArray(r)) {
      if (!/^\d+$/.test(i)) return;
      r = r[Number(i)];
      continue;
    }
    r = Object.hasOwn(r, i) ? r[i] : void 0;
  }
  return r;
}

function abt(e, t, r = "") {
  for (let [i, n] of Object.entries(t)) {
    let s = r ? `${r}.${i}` : i, a = P(e, s), f = ie(a, n, s, e);
    if (f !== null) return f;
  }
  return null;
}

function ie(e, t, r, i) {
  if (Array.isArray(t)) return t.some(s => H(e, s)) ? null : `${r} = ${v(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return abt(i, t, r);
  let n = G(t);
  if (n !== null) {
    let s = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null, a = D(n.source);
    if (!("maxSubject" in a)) return `${r}: ${t} is not a usable guard (${a.problem})`;
    let f = a.maxSubject;
    if (s !== null && s.length > f) return `${r} is ${s.length} characters, more than this /regex/ guard checks (${f})`;
    return s !== null && n.test(s) ? null : `${r} = ${v(e)} does not match ${t}`;
  }
  if (re.has(t)) {
    let s = t === "boolean" ? "bool" : t;
    return se(e) === s ? null : `${r} = ${v(e)} is not a ${t}`;
  }
  return H(e, t) ? null : `${r} = ${v(e)} is not "${t}"`;
}

function H(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return !1;
}

function G(e) {
  let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
  if (!t) return null;
  return new RegExp(t[1] ?? "", t[2] ?? "");
}

function se(e) {
  if (Array.isArray(e)) return "array";
  if (e === null || e === void 0) return "missing";
  if (typeof e === "boolean") return "bool";
  return typeof e;
}

function v(e) {
  if (e === void 0) return "(missing)";
  let t = _(e);
  return t.length > 80 ? `${ne(t, 77)}...` : t;
}

var C = 32;

function Z1r(e, t = "") {
  let r = [];
  if (t === "") {
    let i = q(e);
    if (i > C) return r.push(`expect: ${i} guards is more than the ${C} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`), 
    r;
  }
  for (let [i, n] of Object.entries(e)) {
    let s = t ? `${t}.${i}` : i;
    if (Array.isArray(n)) {
      if (n.length === 0) r.push(`expect.${s}: an empty list of allowed values can never be satisfied \u2014 list at least one`);
      continue;
    }
    if (typeof n === "object" && n !== null) {
      r.push(...Z1r(n, s));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(n)) try {
      let a = G(n), f = a ? D(a.source) : null;
      if (a && !te.test(a.flags)) r.push(`expect.${s}: ${n} \u2014 only the i and s flags are supported in expect: guards`); else if (f && f.problem !== null) r.push(`expect.${s}: ${n} \u2014 ${f.problem}`);
    } catch (a) {
      r.push(`expect.${s}: invalid regular expression ${n} (${a instanceof Error ? a.message : String(a)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`);
    }
  }
  return r;
}

var ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;

async function jXn(e, t, r, i, n = Number.POSITIVE_INFINITY) {
  let s = null, a = [], f = 0;
  for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)) {
    a.push(e.slice(f, y.index)), f = y.index + y[0].length;
    let h = y[1] ?? "";
    if (h.startsWith("input.")) {
      let m = P(t, h.slice(6)), w = m === void 0 ? "" : typeof m === "string" ? m : _(m);
      a.push(w.length > n ? `${ne(w, n)}\u2026 [${w.length - n} more characters omitted]` : w);
      continue;
    }
    let c = h.slice(5).trim(), g = null;
    if (c = c.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (m, w) => {
      let S = P(t, w), I = S === void 0 || S === null ? "" : String(S);
      if (!ae.test(I)) g = `{input.${w}} = ${v(S)} is not a plain file-name segment`;
      return I;
    }), g !== null) {
      s ??= g;
      continue;
    }
    let b = N.resolve(r, c);
    if (!le(r, b)) {
      s ??= `{{file:${c}}} names a path outside the mock's directory`;
      continue;
    }
    a.push(i(b).then(m => {
      if (typeof m !== "string") return s ??= `{{file:${c}}}: ${m.problem}`, "";
      return m;
    }));
  }
  a.push(e.slice(f));
  let d = await Promise.all(a);
  if (s !== null) return {
    ok: !1,
    reason: s
  };
  return {
    ok: !0,
    text: d.join("")
  };
}

function le(e, t) {
  let r = N.relative(e, t);
  return r !== "" && !r.startsWith("..") && !N.isAbsolute(r);
}

function q(e) {
  let t = 0;
  for (let r of Object.values(e)) if (t += typeof r === "object" && r !== null && !Array.isArray(r) ? q(r) : 1, 
  t > C) break;
  return t;
}

import { createConnection as pe } from "net";

var xjt = "eval aborted by mock", Rke = "mock agent responder failed";

var fe = p(() => u({
  verdict: U([ "ok", "tool_error", "abort" ]),
  text: o(),
  replay: U([ "hit", "miss" ]).optional()
})), ge = 4194304;

async function X(e, t, r) {
  try {
    let i = await me(e.socketPath, `${_({
      token: e.token,
      ...t
    })}\n`, r);
    return fe().parse(Y(i));
  } catch (i) {
    return process.stderr.write(`eval mock stand-in: agent relay failed: ${l(i)}\n`), 
    {
      verdict: "abort",
      text: `${Rke} (harness_unreachable) \u2014 see the eval debug log`
    };
  }
}

function me(e, t, r) {
  return new Promise((i, n) => {
    if (r.aborted) {
      n(Error("aborted"));
      return;
    }
    let s = pe({
      path: e
    }), a = Buffer.alloc(0), f = !1, d = (h, c) => {
      if (f) return;
      if (f = !0, r.removeEventListener("abort", y), s.destroy(), h !== null) n(h); else i(c ?? "");
    }, y = () => d(Error("aborted"));
    r.addEventListener("abort", y, {
      once: !0
    }), s.once("connect", () => s.write(t)), s.on("data", h => {
      if (a = Buffer.concat([ a, h ]), a.length > ge) {
        d(Error("relay response too large"));
        return;
      }
      let c = a.indexOf(10);
      if (c !== -1) d(null, a.subarray(0, c).toString("utf8"));
    }), s.once("error", h => d(h)), s.once("close", () => d(Error("harness closed the relay without answering")));
  });
}

var he = p(() => {
  let e = Tk(() => $e([ o(), T(o()), ue(o(), e) ])), t = ue(o(), e).nullable(), r = Kr("kind", [ u({
    kind: A("fixed"),
    body: o(),
    isError: M(),
    expect: t,
    baseDir: o()
  }), u({
    kind: A("agent"),
    prompt: o(),
    abortWhen: o().nullable(),
    expect: t,
    baseDir: o(),
    replay: u({
      mockHash: o(),
      replayDir: o(),
      pinned: ue(o(), o())
    }).default({
      mockHash: "",
      replayDir: "",
      pinned: {}
    })
  }) ]);
  return u({
    registeredName: o(),
    server: o(),
    nonce: o(),
    callLogPath: o(),
    tools: T(u({
      name: o(),
      description: o(),
      inputSchema: ue(o(), oe())
    })),
    responders: ue(o(), r),
    agent: u({
      socketPath: o(),
      token: o()
    }).nullable()
  });
}), V = 1048576;

async function Hqs(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await ve(e);
  if (t !== void 0 && de("sha256").update(r).digest("hex") !== t) throw Error("spec file does not match the hash the harness launched this stand-in with \u2014 refusing to serve it");
  let i = Se(r), n = be(i), s = new Pjt;
  if (!await Z(i.callLogPath, _({
    ready: i.nonce,
    server: i.server
  }))) throw Error("could not write the identity line to the run call log \u2014 refusing to serve unidentified");
  await n.connect(s), process.stdin.on("end", () => void n.close()), process.stdin.on("error", () => void n.close());
}

function be(e) {
  let t = 0, r = new AbortController, i = {
    spec: e,
    signal: r.signal
  }, n = new Rle({
    name: `eval-mock/${e.server}`,
    version: "1"
  }, {
    capabilities: {
      tools: {}
    }
  });
  n.onclose = () => r.abort(), n.setRequestHandler(xle, async () => ({
    tools: e.tools.map(f => ({
      name: f.name,
      description: f.description,
      inputSchema: {
        type: "object",
        ...f.inputSchema
      }
    }))
  }));
  let s = Promise.resolve();
  n.setRequestHandler(W6, f => {
    let d = s.then(() => a(f.params));
    return s = d.catch(() => {}), d;
  });
  async function a(f) {
    let d = f.name, y = f.arguments ?? {}, h = Date.now(), c = Object.hasOwn(e.responders, d) ? e.responders[d] : void 0, g = c === void 0 ? {
      verdict: "tool_error",
      text: `no mock for ${e.server}/${d}`
    } : await ye(c, y, i, d), b = {
      nonce: e.nonce,
      seq: t++,
      server: e.server,
      tool: d,
      responder: c?.kind ?? "fixed",
      input: we(y),
      verdict: g.verdict,
      output: K(g.text),
      ms: Date.now() - h,
      ...g.replay && {
        replay: g.replay
      }
    };
    if (!await Z(e.callLogPath, _(b)) && g.verdict === "abort") process.stderr.write(`eval mock stand-in: could not write the abort record to the call log\n`);
    switch (g.verdict) {
     case "ok":
      return {
        content: [ {
          type: "text",
          text: _hn(g.text)
        } ]
      };

     case "tool_error":
      return {
        content: [ {
          type: "text",
          text: _hn(g.text)
        } ],
        isError: !0
      };

     case "abort":
      return {
        content: [ {
          type: "text",
          text: `${xjt} ${e.nonce}: ${e.server}/${d} \u2014 ${g.text}`
        } ],
        isError: !0
      };
    }
  }
  return n;
}

async function ye(e, t, r, i = "") {
  if (e.expect !== null) {
    let n = abt(t, e.expect);
    if (n !== null) return {
      verdict: "abort",
      text: `input violates expect: ${n}`
    };
  }
  switch (e.kind) {
   case "agent":
    {
      if (!r || r.spec.agent === null) return {
        verdict: "tool_error",
        text: "agent mock responder called without a harness relay"
      };
      return X(r.spec.agent, {
        registeredName: r.spec.registeredName,
        tool: i,
        input: t
      }, r.signal);
    }

   case "fixed":
    {
      let n = await jXn(e.body, t, e.baseDir, WXn);
      if (!n.ok) return {
        verdict: "tool_error",
        text: n.reason
      };
      return {
        verdict: e.isError ? "tool_error" : "ok",
        text: n.text
      };
    }
  }
}

async function WXn(e) {
  try {
    await bS(R.dirname(e), R.basename(e), "mock fixture");
    let t = await L(e, k.O_RDONLY | (O() === "windows" ? 0 : k.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return {
        problem: "is not a regular file"
      };
      if (r.size > V) return {
        problem: `is ${r.size} bytes, over the ${V}-byte fixture limit`
      };
      return (await J(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (t) {
    return {
      problem: W(t) ? "no such fixture" : `could not be read (${E(t) ?? l(t)})`
    };
  }
}

var ejr = 16384, j = 16384;

function K(e) {
  return e.length > j ? `${ne(e, j)}\u2026[truncated]` : e;
}

function we(e) {
  let t = _(e) ?? "";
  return t.length > j ? K(t) : e;
}

async function Z(e, t) {
  try {
    let r = k.O_WRONLY | k.O_APPEND | k.O_CREAT | (O() === "windows" ? 0 : k.O_NONBLOCK), i = await L(e, r, 384);
    try {
      if (!(await i.stat()).isFile()) return !1;
      let n = Buffer.from(`${t}\n`, "utf8"), s = 0;
      while (s < n.length) {
        let {bytesWritten: a} = await i.write(n, s);
        if (a <= 0) return !1;
        s += a;
      }
      return !0;
    } finally {
      await i.close();
    }
  } catch {
    return !1;
  }
}

async function J(e, t) {
  let r = Buffer.alloc(t), i = 0;
  while (i < t) {
    let {bytesRead: n} = await e.read({
      buffer: r,
      offset: i,
      position: i
    });
    if (n <= 0) break;
    i += n;
  }
  return r.subarray(0, i);
}

function _hn(e) {
  return ke.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}

var xe = "| ", ke = new RegExp(`^(?:${xjt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);

function Se(e) {
  return he().parse(Y(e));
}

var Ee = 4194304;

async function ve(e) {
  await bS(R.dirname(e), R.basename(e), "mock spec");
  let t = await L(e, k.O_RDONLY | (O() === "windows" ? 0 : k.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile()) throw Error("spec path is not a regular file \u2014 refusing to read it");
    if (r.size > Ee) throw Error("spec file is over the size limit the harness writes \u2014 refusing to read it");
    return (await J(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}

export { Qp, Q1r, bS, abt, Z1r, jXn, xjt, Rke, Hqs, WXn, ejr, _hn };
