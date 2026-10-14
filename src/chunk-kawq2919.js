// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, E, W, r2, Gj } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { Ln, Un, Ly, Ny, cl, I$, ET, eb, Rae, lte, O$, va, el, cMe, gS, _M, TI, za, Cs, kT, hD, cte } from "./chunk-ddr690nj.js";

import { wht, z } from "./chunk-bmq0vae0.js";

import { OEe, Le } from "./chunk-2v9tfgc3.js";

import { K, ps, q, he } from "./chunk-3pqddg8f.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Fj } from "./chunk-a16yb89m.js";

import { Ii, Ma, ne, Mv, nt, Br } from "./chunk-5wbhf1bk.js";

import { yt } from "./chunk-9zhz923g.js";

import * as k from "fs";

import { appendFile as as, chmod as us, copyFile as ls, link as cs, lstat as wt, mkdir as fs, open as Q, readdir as gs, readFile as Hn, readlink as hs, realpath as ms, rename as ys, rmdir as bs, rm as ks, stat as Bn, symlink as Es, unlink as Ss } from "fs/promises";

import { homedir as Mn } from "os";

import * as g from "path";

import { realpath as ir } from "fs";

var sr = e => new Promise((n, r) => {
  ir(e, (i, s) => i === null ? n(s) : r(i));
});

var or = 0xffffffffffffffffn;

function xf(e) {
  let n = BigInt(e);
  return n === 0n || n === -1n || n === or || n === 1n << 64n;
}

import { writeFileSync as is } from "fs";

import { appendFile as mt, mkdir as _n, rename as vn, stat as Gi, symlink as Ki, unlink as kt } from "fs/promises";

import { dirname as ce, isAbsolute as zi, join as X, resolve as Nn } from "path";

function wh(e) {
  return {
    ok: !0,
    value: e
  };
}

function Rp(e) {
  return {
    ok: !1,
    error: e
  };
}

class vt extends Error {
  constructor(e) {
    super("Result was an error (see .error)");
    this.name = "ResultError", Object.defineProperty(this, "error", {
      value: e,
      enumerable: !1
    });
  }
}

function CUs(e) {
  if (e.ok) return e.value;
  throw new vt(e.error);
}

var Rf = {
  home: e => ({
    space: "home",
    path: e
  }),
  workspace: e => ({
    space: "workspace",
    path: e
  }),
  system: e => ({
    space: "system",
    path: e
  }),
  userNamed: e => ({
    space: "userNamed",
    path: e
  })
};

function WHo(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = Reflect.get(e, "code"), r = Reflect.get(e, "telemetryCode");
  return n === "Failed" && typeof r === "string" && (Gj(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r));
}

function RUs(e) {
  if (WHo(e)) {
    if (e.cause instanceof Error) return e.cause;
    return Object.assign(new x(yt(e), "host file operation refused by the storage backend"), {
      code: e.telemetryCode,
      cause: e
    });
  }
  return Object.assign(new x(yt(e), "host file operation could not be performed by the storage backend"), {
    cause: e
  });
}

var Be = globalThis.process?.getBuiltinModule?.("async_hooks"), Ot = Be !== void 0, Me = Be ? new Be.AsyncLocalStorage : {
  run: (e, n) => n(),
  getStore: () => {}
};

function Ue({writeBatch: e, sizeOf: n, flushIntervalMs: r = 1e3, maxBufferSize: i = 100, maxBufferBytes: s = 1 / 0, immediateMode: o = !1}) {
  let a = [], u = 0, l = null, c = null;
  function d() {
    if (l) clearTimeout(l), l = null;
  }
  function p(f) {
    try {
      e(f);
    } catch {}
  }
  function m() {
    if (c) p(c), c = null;
    if (a.length === 0) return;
    p(a), a = [], u = 0, d();
  }
  function h() {
    if (!l) l = setTimeout(m, r);
  }
  function w() {
    if (c) {
      c.push(...a), a = [], u = 0, d();
      return;
    }
    let f = a;
    a = [], u = 0, d(), c = f, setImmediate(() => {
      let y = c;
      if (c = null, y) p(y);
    });
  }
  return {
    write(f) {
      if (o) {
        p([ f ]);
        return;
      }
      if (a.push(f), u += n(f), h(), a.length >= i || u >= s) w();
    },
    flush: m,
    dispose() {
      m();
    }
  };
}

function xUs({writeFn: e, flushIntervalMs: n, maxBufferSize: r, maxBufferBytes: i, immediateMode: s}) {
  return Ue({
    writeBatch: o => e(o.join("")),
    sizeOf: o => o.length,
    flushIntervalMs: n,
    maxBufferSize: r,
    maxBufferBytes: i,
    immediateMode: s
  });
}

function ar(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}

class Ge {
  #e=new Set;
  #t=!1;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let n = ar(e);
    this.#e.add(n);
    let r = () => {
      this.#e.delete(n);
    };
    return Object.assign(r, {
      [Symbol.dispose]: r
    });
  }
  async drain() {
    this.#t = !0;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async i => i()))).find(i => i.status === "rejected");
    if (r !== void 0) throw r.reason;
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
}

class Lt {
  cleanup=new Ge;
  preExitFlush=new Ge;
}

var ur = new K(() => new Lt);

function ge() {
  return ps(ur);
}

var zee = 2e3;

function bt(e) {
  return ge().cleanup.register(e);
}

async function Ggt() {
  await ge().cleanup.drain();
}

function Oy() {
  return ge().cleanup.drainStarted;
}

function bI(e) {
  return ge().preExitFlush.register(e);
}

async function M4n() {
  await ge().preExitFlush.drain();
}

class It {
  parsed=new Map;
  lookup(e) {
    return this.parsed.get(e);
  }
  remember(e, n) {
    this.parsed.set(e, n);
  }
  reset() {
    this.parsed.clear();
  }
}

var Tt = new It;

function Ct(e) {
  let n = Tt.lookup(e);
  if (n !== void 0) return n;
  let r = lr(e);
  return Tt.remember(e, r), r;
}

function lr(e) {
  if (!e || e.trim() === "") return null;
  let n = e.split(",").map(o => o.trim()).filter(Boolean);
  if (n.length === 0) return null;
  let r = n.some(o => o.startsWith("!")), i = n.some(o => !o.startsWith("!"));
  if (r && i) return null;
  let s = n.map(o => o.replace(/^!/, "").toLowerCase());
  return {
    include: r ? [] : s,
    exclude: r ? s : [],
    isExclusive: r
  };
}

function cr(e) {
  let n = [], r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) n.push("mcp"), n.push(r[1].toLowerCase()); else {
    let o = e.match(/^([^:[]+):/);
    if (o && o[1]) n.push(o[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let s = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (s && s[1]) {
    let o = s[1].trim().toLowerCase();
    if (o.length < 30 && !o.includes(" ")) n.push(o);
  }
  return Array.from(new Set(n));
}

function dr(e, n) {
  if (!n) return !0;
  if (e.length === 0) return !1;
  if (n.isExclusive) return !e.some(r => n.exclude.includes(r)); else return e.some(r => n.include.includes(r));
}

function Pt(e, n) {
  if (!n) return !0;
  let r = cr(e);
  return dr(r, n);
}

var fr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]{32,}", "gu"), gr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]", "u");

var Ke = new Map, oe = [], ze = new Map;

function be(e, n) {
  return e !== n && (e + n).normalize("NFD") === n + e;
}

function Ft(e) {
  let n = Ke.get(e);
  if (n !== void 0) return n;
  let r = String.fromCodePoint(e), i = null;
  if (r === "\u0334" || be(r, "\u0334") || be("\u0345", r)) {
    let s = 0, o = oe.length;
    while (s < o && i === null) {
      let a = s + o >> 1, u = oe[a];
      if (be(r, u.sample)) s = a + 1; else if (be(u.sample, r)) o = a; else i = u;
    }
    if (i === null) {
      i = {
        order: s,
        sample: r
      }, oe.splice(s, 0, i);
      for (let a = s + 1; a < oe.length; a++) oe[a].order = a;
    }
  }
  return Ke.set(e, i), i;
}

function $t(e) {
  let n = ze.get(e);
  if (n === void 0) n = Array.from(String.fromCodePoint(e).normalize("NFKD"), r => r.codePointAt(0)), 
  ze.set(e, n);
  return n;
}

var Dt = 4096;

function pr(e, n) {
  let r = "";
  for (let i = 0; i < n; i += Dt) r += String.fromCodePoint(...e.subarray(i, Math.min(i + Dt, n)));
  return r;
}

function hr(e) {
  let n = new Int32Array(e.length + 16), r = 0;
  for (let a = 0; a < e.length; ) {
    let u = e.codePointAt(a);
    a += u > 65535 ? 2 : 1;
    for (let l of $t(u)) {
      if (r === n.length) {
        let c = new Int32Array(n.length * 2);
        c.set(n), n = c;
      }
      n[r++] = l, Ft(l);
    }
  }
  let i = new Int16Array(r);
  for (let a = 0; a < r; a++) i[a] = Ke.get(n[a])?.order ?? -1;
  let s = n.slice(0, r), o = new Int32Array(oe.length);
  for (let a = 0; a < r; ) {
    let u = a, l = !0;
    while (u < r && i[u] >= 0) l &&= u === a || i[u - 1] <= i[u], u++;
    if (l) {
      a = u + 1;
      continue;
    }
    o.fill(0);
    for (let d = a; d < u; d++) o[i[d]]++;
    let c = a;
    for (let d = 0; d < o.length; d++) {
      let p = o[d];
      o[d] = c, c += p;
    }
    for (let d = a; d < u; d++) s[o[i[d]]++] = n[d];
    a = u;
  }
  return pr(s, r);
}

function qHo(e) {
  return e.length < 32 ? e : e.replace(fr, hr);
}

var Nt = 128;

function Ht(e) {
  if (e < 768) return !0;
  let n = ze.get(e);
  if (n === void 0 && !gr.test(String.fromCodePoint(e))) return !0;
  return Ft((n ?? $t(e))[0]) === null;
}

function mr(e, n) {
  let r = n;
  if (r < e.length && (e.charCodeAt(r) & 64512) === 56320 && (e.charCodeAt(r - 1) & 64512) === 55296) r++;
  while (r < e.length) {
    let i = e.codePointAt(r);
    if (Ht(i)) break;
    r += i > 65535 ? 2 : 1;
  }
  return Math.min(r, e.length);
}

function yr(e) {
  let n = e.length;
  while (n > 0) {
    if (n--, n > 0 && (e.charCodeAt(n) & 64512) === 56320 && (e.charCodeAt(n - 1) & 64512) === 55296) n--;
    if (Ht(e.codePointAt(n))) return n;
  }
  return 0;
}

function Bt(e, n) {
  let r = qHo(e);
  if (r.length <= Nt) return r.normalize(n);
  let i = [], s = "";
  for (let o = 0; o < r.length; ) {
    let a = mr(r, o + Nt), u = (s + r.slice(o, a)).normalize(n), l = a === r.length ? u.length : yr(u);
    i.push(u.slice(0, l)), s = u.slice(l), o = a;
  }
  return i.join("");
}

function Vee(e) {
  return Bt(e, "NFKC");
}

function PUs(e) {
  return Bt(e, "NFKD");
}

var br = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, FG = 256, N4n = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;

function kr(e) {
  return e.length <= 256 && !N4n.test(e);
}

function UG(e) {
  return e.length > 0 && kr(e);
}

function uJe(e) {
  return e.length <= 256 && /^[A-Za-z0-9_:.-]+$/.test(e);
}

function $4n(e) {
  return e.length <= 256 && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e);
}

function YHo(e) {
  return e.length <= 256 && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e);
}

function vA(e) {
  return Gd(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}

function Gd(e) {
  return e.replace(br, n => `&#${n.charCodeAt(0)};`);
}

function $j(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function Iu(e) {
  return Gd($j(String(e ?? "")));
}

function EHr(e) {
  return Iu(e).replaceAll('"', "&quot;");
}

function cn(e) {
  return Bun.stripANSI(e);
}

function Xgt(e) {
  return Mv(cn(Mv(String(e))));
}

function C$(e) {
  return e.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, n => cn(n));
}

var Mt = "\\p{Default_Ignorable_Code_Point}\\u2800", b_ = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${Mt}`, GOe = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`, Ut = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`, pJe = `[${GOe}${Ut}\\ufeff]*`, IUs = new RegExp(`[${GOe}${Ut}\\ufeff]`);

function Mje(e) {
  return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${pJe}`).replace(/\[_-\]\?/g, `(?:[_-]${pJe})?`);
}

var Wt = new RegExp(`[${b_}]+`, "gu"), Ve = "\\u200D\\uFE0E\\uFE0F", Er = new RegExp(`(?:(?![${Ve}])[${b_}])+`, "gu"), Sr = new RegExp(`(?:(?![${Ve}\\n])[${b_}])+`, "gu"), xr = new RegExp(`(?<!\\S)[${Ve}]+`, "gu"), wr = /\p{Cs}/gu;

function fM(e, n, r) {
  let i = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0, s = cn(e.replace(wr, "\u200b")).replace(r?.keepNewlines ? Sr : i ? Er : Wt, n);
  return i ? s.replace(xr, "") : s;
}

var Ar = new RegExp(`[${b_}]`, "u"), Rr = /(?! )\p{Zs}|[\uFFFC\u{1D159}\u{13441}\u{13442}\u{16FE4}]|^ | $/u, ke = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]", _r = new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${ke}|${ke}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${ke}*)(?!\\p{sc=Inherited})${ke}`, "u");

function XHo(e) {
  return vr(e) && !e.includes("  ") && !_r.test(e);
}

function vr(e) {
  return UG(e) && !Ar.test(e) && !Rr.test(e);
}

var Or = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${Mt}]`, "gu");

function Lr(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return n = n.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), 
  n;
}

function lg(e) {
  let n = Mv(e);
  for (let r = 0; r < 10; r++) {
    let i = Lr(n);
    if (i === n) return n;
    n = i;
  }
  return n;
}

var Tr = /\p{Default_Ignorable_Code_Point}/gu;

function Ou(e) {
  return Br(lg(e).replace(Tr, ""));
}

function JHo(e) {
  return !/[^\0-\x7f]/.test(e);
}

function fJe(e) {
  if (JHo(e)) return e;
  let n = e, r = "", i = 0, s = 10;
  while (n !== r && i < s) r = n, n = Vee(n), n = lg(n), i++;
  if (i >= s) throw Error(`Unicode sanitization reached maximum iterations (${s}) for input: ${e.slice(0, 100)}`);
  return n;
}

function cx(e) {
  if (typeof e === "string") return fJe(e);
  if (Array.isArray(e)) return e.map(cx);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, i] of Object.entries(e)) {
      let s = cx(r);
      if (s !== "__proto__") n[s] = cx(i);
    }
    return n;
  }
  return e;
}

function Vd(e) {
  return mJe(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}

function mJe(e) {
  return e.replace(/[^\x20-\x7e]/g, a6);
}

function En(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}

function dD(e) {
  return e.replace(Or, n => Array.from({
    length: n.length
  }, (r, i) => `\\u${n.charCodeAt(i).toString(16).padStart(4, "0")}`).join(""));
}

function i6(e) {
  return Mv(cn(e)).replace(Wt, " ");
}

function Ks(e, n) {
  let r = i6(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (r = r.replace(/\s+/g, " ").trim(), n?.maxCodeUnits !== void 0) r = ne(r, n.maxCodeUnits).trim();
  return r;
}

function OUs(e) {
  return Ks(e) === e;
}

var gJe = 255;

function $C(e) {
  let n = Ks(e, {
    drop: /[`<>]/g
  }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
  return ne(n, gJe).trim();
}

var Yln = 2048, F4n = /[`\[\]<>]/g;

function Kee(e) {
  let n = Ks(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
  return ne(n, Yln).trim();
}

function Jgt(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, a6);
}

function a6(e) {
  return e.split("").map(n => "\\u" + n.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}

function Gt(e) {
  let n = new Int32Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = r;
  return {
    text: e,
    origin: n
  };
}

function Kt(e, n, r) {
  let i = [];
  for (let s of e.text.matchAll(n)) {
    let {keep: o, insert: a, keepEnd: u = 0} = r(s), l = s.index ?? 0, c = s[0].length, d = Math.min(Math.max(o | 0, 0), c), p = Math.min(Math.max(u | 0, 0), c - d);
    i.push([ l + d, l + c - p, a ]);
  }
  return Se(e, i);
}

function Se(e, n) {
  if (n.length === 0) return e;
  let {text: r, origin: i} = e, s = r.length;
  for (let [c, d, p] of n) s += p.length - (d - c);
  let o = new Int32Array(s), a = [], u = 0, l = 0;
  for (let [c, d, p] of n) a.push(r.slice(u, c)), o.set(i.subarray(u, c), l), l += c - u, 
  a.push(p), o.fill(-1, l, l + p.length), l += p.length, u = d;
  return a.push(r.slice(u)), o.set(i.subarray(u), l), {
    text: a.join(""),
    origin: o
  };
}

function je(e, n, r) {
  return {
    text: e.text.slice(n, r),
    origin: e.origin.slice(n, r)
  };
}

function VU(e) {
  let n = 0;
  while (n < e.length && e.charCodeAt(n) <= 32) n++;
  let r = e.slice(n), i = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(r), s = i?.[1]?.toLowerCase(), o = i ? r.slice(i[0].length) : r, a = o.indexOf(":"), u = o.indexOf("/");
  if (!(s !== void 0 ? s !== "file" : a !== -1 && (u === -1 || a < u) && !/^[A-Za-z]:/.test(o))) {
    let m = i ? pe(o) : o;
    return m.includes("@[") || m.startsWith("[");
  }
  let c = pe(o), d = i ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(c) : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(c), p = d !== null && !!VOe(`ssh://${d[1]}/`)?.hostname;
  return /[[\]]/.test(c.slice(p ? d[0].length : 0));
}

function VOe(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}

function pe(e) {
  return e.replace(/%([0-9A-Fa-f]{2})/g, (n, r) => {
    let i = parseInt(r, 16);
    return i === 0 ? n : String.fromCharCode(i);
  });
}

function mae(e, {asRewritten: n = !1} = {}) {
  let r = e.trimStart(), i = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(r);
  if (i) {
    let s = i[1]?.toLowerCase();
    if (s === "file") return null;
    if (s === "http" || s === "https") {
      let o = VOe(r);
      return o?.hostname ? {
        host: o.hostname,
        path: o.pathname
      } : null;
    }
    return zt(C$t(r.slice(i[0].length)), "/");
  }
  return zt(n ? C$t(r) : r, ":");
}

function jt(e, n) {
  let r = e.indexOf("@["), i = r === -1 ? 0 : r + 1, s = e[i] === "[" ? i : -1, o = s === -1 ? -1 : e.indexOf("]", s + 1), a = e.indexOf(n, o === -1 ? 0 : o + 1);
  return {
    open: s,
    close: o,
    cut: a
  };
}

function zt(e, n) {
  let {open: r, close: i, cut: s} = jt(e, n), o = r === -1 ? 0 : r, a = e.indexOf("/");
  if (n === ":" && (s === -1 || a !== -1 && a < e.indexOf(":"))) return null;
  let u = s === -1 ? "" : e.slice(n === ":" ? s + 1 : s);
  if (i !== -1) {
    let p = e.slice(i + 1, s === -1 ? e.length : s), m = e.slice(0, o) + e.slice(o + 1, i), h = Vt(p) !== p ? m : Vt(m), w = h.slice(h.lastIndexOf("@") + 1), f = VOe(`ssh://[${w}]/`)?.hostname;
    return w ? {
      host: f || w,
      path: u
    } : null;
  }
  let l = s === -1 ? e : e.slice(0, s), c = l.slice(l.lastIndexOf("@") + 1);
  if (c.startsWith("[")) return null;
  let d = n === "/" ? c.replace(/:\d*$/, "") : c;
  return d ? {
    host: d,
    path: u
  } : null;
}

function Zt(e) {
  let {text: n, from: r} = Ir(e), {close: i, cut: s} = jt(n, "/"), o = s === -1 ? n.length : s, a = [], u = (l, c) => {
    let d = n.lastIndexOf("@", c - 1);
    if (d >= l) a.push([ r(l), r(d) ]);
  };
  if (i === -1) u(0, o); else u(0, i), u(i + 1, o);
  return a;
}

function C$t(e) {
  return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, n => {
    try {
      return decodeURIComponent(n);
    } catch {
      return pe(n);
    }
  });
}

function Ir(e) {
  if (!e.includes("%")) return {
    text: e,
    from: s => s
  };
  let n = [], r = "", i = 0;
  for (let s of e.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)) {
    for (let c = i; c < s.index; c++) n.push(c);
    r += e.slice(i, s.index);
    let o, a;
    try {
      o = decodeURIComponent(s[0]), a = Array.from(o, c => {
        let d = c.codePointAt(0);
        return d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
      });
    } catch {
      o = pe(s[0]), a = Array.from(o, () => 1);
    }
    let u = s.index, l = 0;
    for (let c of a) {
      let d = o.codePointAt(l) > 65535 ? 2 : 1;
      for (let p = 0; p < d; p++) n.push(u);
      l += d, u += 3 * c;
    }
    r += o, i = s.index + s[0].length;
  }
  for (let s = i; s <= e.length; s++) n.push(s);
  return {
    text: r + e.slice(i),
    from: s => n[s]
  };
}

function Vt(e) {
  let n = e.indexOf(":"), r = e.slice(n + 1);
  if (n === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(r)) return e;
  let i = Number.parseInt(r.trim(), 10);
  return i >= 0 && i < 65536 ? e.slice(0, n) : e;
}

var Cr = /\s/g, Pr = /[\n\r\u2028\u2029]/g, Dr = /(?:@|%40)(?:\[|%5B)/gi, Nr = /^(?:\[|%5B)/i, Fr = /\]|%5D/gi, QHo = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i, qt = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i, $r = /[,;|&]/g, Hr = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/, Mr = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i, Ur = /["'`]/, Wr = /[;|&\n]/g, Gr = 64, Kr = 2048, zr = /[\s"'`]/g;

function Ze(e) {
  let n = [], r = C(e, zr), i = 0;
  for (let s = e.indexOf("://"); s !== -1; ) {
    let o = s + 3;
    if (s >= i && qt.test(e.slice(Math.max(0, s - 8), s))) {
      i = Math.min(r(o), o + Kr);
      for (let [a, u] of Zt(e.slice(o, i))) n.push([ o + a, o + u ]);
    }
    s = e.indexOf("://", o);
  }
  return n;
}

function MUs(e) {
  return Qt(e).spans;
}

function Qt(e) {
  let n = [], r = [], i = C(e, Cr), s = C(e, /\//g), o = Je(e, Dr), a = C(e, Fr), u = C(e, /\//g), l = C(e, Wr), c = C(e, /[/?#]/g), d = C(e, $r), p = C(e, /@/g), m = C(e, /%40/gi), h = C(e, /\[REDACTED|\*\*\*:\*\*\*/g), w = C(e, /[:%]/g), f = C(e, /["'`,;|&<>{}()]/g), y = Xt(e, !1), b = Xt(e, !0);
  for (let v = e.indexOf("://"); v !== -1; ) {
    let S = v + 3, N, I = e.indexOf("://", S), A = i(S), ee = p(S), P;
    if (QHo.test(e.slice(Math.max(0, v - 8), v))) {
      let O = Math.min(c(S), A), H = Math.min(d(S), O);
      if (P = ee < O ? Math.max(y(S, O), b(ee, O)) : Math.max(y(S, Math.min(s(S), A)), b(S, H)), 
      P <= S) {
        let V = Math.min(O, l(S));
        r.push({
          start: S,
          fieldEnd: Math.min(H, V),
          lastEncodedAt: b(S, V)
        });
      }
    } else {
      let O = Math.min(s(S), A), H = Math.min(A, I === -1 ? e.length : I), V = qt.test(e.slice(Math.max(0, v - 8), v)), T = V ? o(S) : null, R = V ? Nr.exec(e.slice(S, S + 3)) : null, L = [ [ R !== null ? S + R[0].length : -1, H ], [ T !== null && T.index < H ? T.index + T[0].length : -1, A ] ];
      for (let [B, j] of L) {
        let ie = B === -1 ? A : a(B);
        if (ie < j) N = Math.max(N ?? ie, ie), O = Math.max(O, Math.min(u(ie), A));
      }
      P = Math.max(y(S, O), b(S, O));
    }
    if (P > S) n.push({
      start: S,
      end: P,
      separatorEnd: P + (e[P] === "@" ? 1 : 3),
      loginEnd: ee <= P ? ee : Math.min(m(S), P),
      bracketClose: N
    }); else {
      let O = h(S);
      if (O > S && O < Math.min(A, s(S), f(S)) && w(S) < O) n.push({
        start: S,
        end: O,
        separatorEnd: O,
        loginEnd: O
      });
    }
    v = I;
  }
  return {
    spans: n,
    hostParts: r
  };
}

function en(e, n) {
  let {spans: r, hostParts: i} = Qt(e);
  if (r.length === 0 && i.length === 0) return [];
  let s = C(e, /[\s"'>}|,;&`)\]]/g), o = C(e, /\s/g), a = [], u = [];
  for (let h of r) a.push({
    start: h.start,
    end: h.end,
    loginEnd: h.loginEnd
  }), u.push({
    ...h,
    userinfo: h
  });
  let l = xe(e, n);
  for (let h of i) {
    let w = l(h.start)[0];
    if (w && w.keyStart < h.fieldEnd && e.slice(h.start, w.keyStart).includes("%")) {
      let f = h.lastEncodedAt > w.keyStart ? h.lastEncodedAt : w.valueStart;
      a.push({
        start: h.start,
        end: f,
        loginEnd: f
      }), u.push(f > w.valueStart ? {
        start: h.start,
        end: f,
        userinfo: {
          start: h.start,
          end: f,
          separatorEnd: f + 3,
          loginEnd: f
        }
      } : {
        start: h.start,
        end: f
      });
    }
  }
  if (u.length === 0) return [];
  a.sort((h, w) => h.start - w.start);
  let c = xe(e, n), d = 0;
  for (let h = 0, w = c(h); w[0] !== void 0; ) {
    let f, y = null;
    for (let v of w) if (y = v.valueEnd(), y !== null) {
      f = v;
      break;
    }
    if (f === void 0 || y === null) {
      h = w[0].keyStart + 1, w = c(h);
      continue;
    }
    while (d < a.length && a[d].start <= f.keyStart) d++;
    let b = a[d];
    if (b !== void 0 && b.start < y) {
      let v = e[f.valueStart] ?? "", N = (v === '"' || v === "'") && y - 1 > f.valueStart && e[y - 1] === v ? Math.max(y, b.end) : o(Math.max(y, b.end, s(b.loginEnd + 1)));
      u.push({
        start: f.valueStart,
        end: N
      });
    }
    h = y, w = c(h);
  }
  let p = {
    nextKey: xe(e, n),
    plainKeys: xe(e, n),
    nextLineEnd: C(e, Pr),
    span: 0,
    lineEnd: -1,
    resumeAt: 0,
    overflowEnd: Zr(e, () => p.lineEnd)
  }, m = [];
  for (let h of Yr(u)) {
    let w = m.at(-1);
    m.push(w !== void 0 && h.start < w.end ? Yt(e, {
      start: m.pop().start,
      end: Math.max(w.end, h.end)
    }, p) : Yt(e, h, p));
  }
  return m.map(h => h.userinfo ? h : Jr(e, h));
}

var Jt = new WeakMap;

function Vr(e) {
  let n = Jt.get(e);
  if (!n) n = {
    word: new RegExp(e.word, "gi"),
    notTail: new RegExp(`(?!${e.tail})[^]`, "gi"),
    separator: new RegExp(e.separator, "iy"),
    value: new RegExp(e.value, "iy")
  }, Jt.set(e, n);
  return n;
}

function xe(e, n) {
  let r = n.map(i => {
    let {word: s, notTail: o, separator: a, value: u} = Vr(i), l = Je(e, s), c = C(e, o), d = -1, p = -1, m = -1, h = null, w = v => {
      if (v !== m) m = v, u.lastIndex = v, h = u.test(e) ? u.lastIndex : null;
      return h;
    }, f = v => {
      if (v !== d) d = v, a.lastIndex = v, p = a.test(e) ? a.lastIndex : -1;
      return p;
    }, y = -1, b = null;
    return v => {
      if (y !== -1 && v >= y && (b === null || v <= b.keyStart)) return b;
      y = v, b = null;
      for (let S = l(v); S !== null; ) {
        let N = S.index + S[0].length, I = f(i.tail ? c(N) : N);
        if (I !== -1) {
          b = {
            keyStart: S.index,
            valueStart: I,
            valueEnd: () => w(I)
          };
          break;
        }
        S = l(S.index + 1);
      }
      return b;
    };
  });
  return i => {
    let s = [];
    for (let o of r) {
      let a = o(i);
      if (a && (!s[0] || a.keyStart <= s[0].keyStart)) s = s[0] && a.keyStart === s[0].keyStart ? [ ...s, a ] : [ a ];
    }
    return s;
  };
}

function Yt(e, n, r) {
  if (n.userinfo && jr(e, n.userinfo, r)) return n;
  let i = n.end;
  r.resumeAt = Math.max(r.resumeAt, n.start);
  for (let s = r.nextKey(r.resumeAt); s[0] !== void 0 && s[0].keyStart < i; ) {
    let o = s[0].keyStart;
    if (o > r.lineEnd) {
      let c = r.nextLineEnd(o);
      r.span = Gr * (c - r.lineEnd), r.lineEnd = c;
    }
    let a = null, u = s[0];
    for (let c of s) if (a = c.valueEnd(), a !== null) {
      u = c;
      break;
    }
    let l = a ?? u.valueStart;
    if (r.span -= l - o, r.span < 0) return {
      start: n.start,
      end: Math.max(i, r.overflowEnd(n.start))
    };
    i = Math.max(i, l), r.resumeAt = u.valueStart, s = r.nextKey(r.resumeAt);
  }
  return i === n.end ? n : {
    start: n.start,
    end: i
  };
}

function jr(e, n, r) {
  if (e[n.end] !== "@" || Mr.test(e.slice(n.start, n.end)) || !Hr.test(e.slice(Math.max(0, n.start - 36), n.start - 3))) return !1;
  for (let i = r.plainKeys(n.start); i[0] !== void 0 && i[0].keyStart < n.end; i = r.plainKeys(i[0].keyStart + 1)) if (i.some(s => s.valueStart === n.end)) return !1;
  return !0;
}

function Zr(e, n) {
  let r = C(e, /["'`]/g), i = -1, s = e.length;
  return o => {
    if (n() !== i) i = n(), s = r(o) < i ? e.length : i;
    return s;
  };
}

function Jr(e, n) {
  let r = e[n.end - 1];
  if (r === void 0 || !Ur.test(r)) return n;
  return (e.slice(n.start, n.end).split(r).length - 1) % 2 === 1 ? {
    start: n.start,
    end: n.end - 1
  } : n;
}

function Yr(e) {
  e.sort((r, i) => r.start - i.start || i.end - r.end);
  let n = [];
  for (let r of e) {
    let i = n.at(-1);
    if (i === void 0 || r.start >= i.end) n.push(r); else n[n.length - 1] = {
      start: i.start,
      end: Math.max(i.end, r.end)
    };
  }
  return n;
}

function C(e, n) {
  let r = Je(e, n);
  return i => r(i)?.index ?? e.length;
}

function Je(e, n) {
  let r = -1, i = null;
  return s => {
    if (r === -1 || s < r || i !== null && s > i.index) n.lastIndex = s, i = n.exec(e), 
    r = s;
    return i;
  };
}

function Xt(e, n) {
  let r = null;
  return (i, s) => {
    if (r === null) {
      r = new Int32Array(e.length + 1);
      let a = -1;
      for (let u = 0; u <= e.length; u++) {
        if (n) {
          if (u >= 3 && e.startsWith("%40", u - 3)) a = u - 3;
        } else if (u >= 1 && e[u - 1] === "@") a = u - 1;
        r[u] = a;
      }
    }
    let o = r[Math.min(s, e.length)];
    return o >= i ? o : -1;
  };
}

var st = new RegExp(Mje(String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`), "i"), le = `[\\s\\u0085${GOe}]`, te = `(?:${Mje("Bearer|Basic")})[${GOe}]*[\\s\\u0085]+`, tn = "[^\\s\\u0085,;&}\\])]+", nn = "(?![\\w\\[({$/+=~!@%^?\\\\-])", _e = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029", J = "[\\s\\u0085]", ZHo = new RegExp(le), HUs = new RegExp(`(?:[=:]|["']|\\b(?:${Mje("bearer|basic")}))$`, "i"), Xr = `\\\\+(?:"[^"${_e}]*(?<!\\\\)(?=\\\\+")|'[^'${_e}]*(?<!\\\\)(?=\\\\+'))`, rn = `[^\\s\\u0085,;&})"'\\\\]+`, Ie = `"[^"${_e}]*"|'[^'${_e}]*'|"[^"]*"${nn}|'[^']*'${nn}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${te}(?:\\[REDACTED\\]|${tn})|${tn}`, qr = {
  word: "\\b(?:Bearer|Basic)",
  tail: "",
  separator: `${J}+`,
  value: "[A-Za-z0-9+/=._~-]{20,}"
}, Qr = {
  word: `(?:${st.source})`,
  tail: "[\\w.-]",
  separator: `["']?${J}*[=:]${J}*`,
  value: Ie
}, ti = {
  word: "\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w",
  tail: "\\w",
  separator: `${J}*[=:]${J}*`,
  value: Ie
}, ni = [ Qr, ti, qr ], ri = [ "sk", "ant", "api" ].join("-"), M = "[\\w=-]", U = `${M}{20,}(?:\\.[0-9a-z]{9})?`, ii = "[\\w.-]{0,256}(?![\\w.-])", dn = `${J}*(?!${J})`, ot = `(?:${st.source})${ii}`, fn = `\\b(?:${Mje("AWS|GOOGLE|GCP|GCLOUD|AZURE")})${pJe}_\\w+`, Qe = `${ot}(?:${pJe}["'])?${le}*[=:]${dn}(${Ie})`, et = `${fn}${le}*[=:]${J}*(${Ie})`, gn = /\\["']/, pn = `${ot}${pJe}\\\\+["']${le}*[=:]${dn}(${Xr}|${te}${rn}|${rn}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`, Z = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${ot}|${fn})`, si = `(?:${te})?(?:[{[(]{0,8}(?:"${Z}"|'${Z}')|${Z})${le}*[=:]`, oi = `(?:${te})?(?:[{[(]{0,8}(?:"${Z}"|'${Z}'|\\\\+"${Z}\\\\+"|\\\\+'${Z}\\\\+')|${Z})${le}*[=:]`, hn = "\\][^\\s\"'>}|,;&`)\\]]*", ye = "[A-Za-z0-9_-]", tt = `${ye}{10}${ye}*`, sn = `\\.${tt}\\.${tt}`, at = `(?<!${ye})(?=${ye}+${sn})(?:${ye}*?-)??(eyJ${tt}${sn})`, mn = [ {
  id: "url-userinfo",
  source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`,
  confidence: "low"
}, {
  id: "gcp-service-account",
  source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
  flags: "i",
  confidence: "low"
}, {
  id: "loose-anthropic-key",
  source: "\\b(sk-ant-?[\\w-]{10,})",
  confidence: "low"
}, {
  id: "http-auth-scheme",
  source: `\\b${te}([A-Za-z0-9+/=._~-]{20,})`,
  flags: "i",
  confidence: "low"
}, {
  id: "loose-jwt",
  prefilter: /eyJ/,
  source: at,
  confidence: "low"
}, {
  id: "sensitive-assign",
  source: Qe,
  flags: "i",
  confidence: "low"
}, {
  id: "cloud-env-var",
  source: et,
  flags: "i",
  confidence: "low"
}, {
  id: "url-userinfo-tail",
  source: ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))",
  confidence: "low"
}, {
  id: "url-userinfo-later-at",
  source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)",
  confidence: "low"
}, {
  id: "url-userinfo-encoded",
  source: ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))",
  confidence: "low"
}, {
  id: "masked-value-rest",
  source: `\\[REDACTED\\](${hn})`,
  confidence: "low"
}, {
  id: "sensitive-assign-escaped",
  redactOnly: !0,
  prefilter: gn,
  source: pn,
  flags: "i",
  confidence: "low"
}, {
  id: "aws-access-token",
  source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
  confidence: "high"
}, {
  id: "gcp-api-key",
  source: "\\b(AIza[\\w-]{35})(?![\\w-])",
  confidence: "high"
}, {
  id: "google-oauth-client-secret",
  source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
  confidence: "high"
}, {
  id: "azure-ad-client-secret",
  source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
  confidence: "high"
}, {
  id: "digitalocean-pat",
  source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "digitalocean-access-token",
  source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "anthropic-api-key",
  source: `\\b(${ri}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "anthropic-admin-api-key",
  source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "anthropic-oauth-token",
  source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  run: "[\\w-]",
  confidence: "high"
}, {
  id: "openai-api-key",
  source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
  confidence: "high"
}, {
  id: "openai-legacy-api-key",
  source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
  confidence: "high"
}, {
  id: "huggingface-access-token",
  source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "supabase-secret-key",
  source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
  confidence: "high"
}, {
  id: "supabase-access-token",
  source: "\\bsbp_[a-z0-9]{40,}",
  confidence: "high"
}, {
  id: "github-pat",
  source: "ghp_[0-9a-zA-Z]{36}",
  confidence: "high"
}, {
  id: "github-fine-grained-pat",
  source: "github_pat_\\w{82}",
  confidence: "high"
}, {
  id: "github-app-token",
  source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
  confidence: "high"
}, {
  id: "github-oauth",
  source: "gho_[0-9a-zA-Z]{36}",
  confidence: "high"
}, {
  id: "github-refresh-token",
  source: "ghr_[0-9a-zA-Z]{36}",
  confidence: "high"
}, {
  id: "gitlab-pat",
  source: `glpat-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-deploy-token",
  source: `gldt-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-runner-authentication-token",
  source: `glrt-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-oauth-app-secret",
  source: `gloas-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-pipeline-trigger-token",
  source: `glptt-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-kubernetes-agent-token",
  source: `glagent-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-incoming-mail-token",
  source: `glimt-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-scim-oauth-token",
  source: `glsoat-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-ci-build-token",
  source: `glcbt-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-feed-token",
  source: `glft-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "gitlab-feature-flag-client-token",
  source: `glffct-${U}`,
  displayRun: M,
  confidence: "high"
}, {
  id: "slack-bot-token",
  source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
  confidence: "high"
}, {
  id: "slack-user-token",
  source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
  confidence: "high"
}, {
  id: "slack-rotation-token",
  source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
  confidence: "high"
}, {
  id: "slack-app-token",
  source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
  flags: "i",
  confidence: "high"
}, {
  id: "slack-workflow-token",
  source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
  confidence: "high"
}, {
  id: "slack-webhook-url",
  source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
  flags: "i",
  confidence: "high"
}, {
  id: "twilio-api-key",
  source: "SK[0-9a-fA-F]{32}",
  confidence: "high"
}, {
  id: "sendgrid-api-token",
  source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "npm-access-token",
  source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "pypi-upload-token",
  source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
  confidence: "high"
}, {
  id: "databricks-api-token",
  source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "hashicorp-tf-api-token",
  source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
  confidence: "high"
}, {
  id: "pulumi-api-token",
  source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "postman-api-token",
  source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "grafana-api-key",
  source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "grafana-cloud-api-token",
  source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "grafana-service-account-token",
  source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "sentry-user-token",
  source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "sentry-org-token",
  source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
  confidence: "high"
}, {
  id: "stripe-access-token",
  source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  confidence: "high"
}, {
  id: "shopify-access-token",
  source: "shpat_[a-fA-F0-9]{32}",
  confidence: "high"
}, {
  id: "shopify-shared-secret",
  source: "shpss_[a-fA-F0-9]{32}",
  confidence: "high"
} ], ai = 64;

function rt(e, n) {
  let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi, i = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  r.lastIndex = n;
  let s = r.exec(e);
  if (!s) return null;
  i.lastIndex = s.index + s[0].length + ai;
  let o = i.exec(e);
  if (!o) return null;
  return {
    start: s.index,
    end: o.index + o[0].length
  };
}

function ui(e) {
  return rt(e, 0) !== null;
}

function eDo(e) {
  let n = yn(e);
  if (n.length === 0) return e;
  let r = "", i = 0;
  for (let s of n) r += e.slice(i, s.start) + "[REDACTED]", i = s.end;
  return r + e.slice(i);
}

function yn(e) {
  let n = e.indexOf("-----");
  while (n !== -1) {
    while (e.charCodeAt(n + 5) === 45) n++;
    if ((e.charCodeAt(n + 5) | 32) === 98 && (e.charCodeAt(n + 6) | 32) === 101 && (e.charCodeAt(n + 7) | 32) === 103 && (e.charCodeAt(n + 8) | 32) === 105 && (e.charCodeAt(n + 9) | 32) === 110) break;
    n = e.indexOf("-----", n + 5);
  }
  let r = [];
  if (n === -1) return r;
  for (let i = rt(e, n); i; i = rt(e, i.end)) r.push(i);
  return r;
}

var it = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`, Ye = "(?=[^a-zA-Z0-9_\\-+=]|$)", on = "(?<![a-zA-Z0-9_\\-])";

function li() {
  return mn.map(({id: e, confidence: n, source: r, flags: i = "", displayRun: s}) => {
    let o = {
      id: e,
      confidence: n
    }, a = i.replace("g", "") + "g";
    if (n !== "high") return {
      ...o,
      re: new RegExp(r, a)
    };
    let u = bn(r);
    if (s === void 0) return {
      ...o,
      re: new RegExp(on + u + Ye, a)
    };
    return {
      ...o,
      prefilter: new RegExp(u, i.replace("g", "")),
      re: new RegExp(`(?<!${s})(?=${s}+${Ye})${s}*?${on}(${u})${Ye}`, a)
    };
  });
}

function me(e) {
  return mn.map(n => {
    let r = (n.flags ?? "").replace("g", ""), i = {
      id: n.id,
      confidence: n.confidence,
      ...n.redactOnly === !0 && {
        redactOnly: n.redactOnly
      },
      ...n.prefilter !== void 0 && {
        prefilter: n.prefilter
      }
    };
    if (n.run === void 0) return {
      ...i,
      re: new RegExp(n.source, e ? r + "g" : n.flags ?? "")
    };
    return {
      ...i,
      prefilter: new RegExp(bn(n.source), r),
      re: new RegExp(`(?:(?<!${n.run})|(?<=\\\\[nr]))(?=${n.run}+${it})${n.run}*?${n.source}`, e ? r + "g" : r)
    };
  });
}

function bn(e) {
  return e.endsWith(it) ? e.slice(0, -it.length) : e;
}

function we(e, n) {
  if (typeof n !== "string") return "[REDACTED]";
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "", i = e.lastIndexOf(n);
  return `${e.slice(0, i)}${r}[REDACTED]${r}${e.slice(i + n.length)}`;
}

function ci(e) {
  let n = e[1];
  if (typeof n !== "string") return {
    keep: 0,
    insert: "[REDACTED]"
  };
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? 1 : 0, i = e[0].lastIndexOf(n);
  return {
    keep: i + r,
    insert: "[REDACTED]",
    keepEnd: e[0].length - i - n.length + r
  };
}

function ve(e) {
  let n = en(e, ni).map(({start: s, end: o}) => {
    let a = /^(["'])[^]*\1$/.test(e.slice(s, o)) ? 1 : 0;
    return [ s + a, o - a ];
  }), r = Ze(e), i = gi(e);
  return r.length === 0 && i.length === 0 ? n : kn([ ...n, ...r, ...i ]);
}

var Xe, di = new RegExp(hn, "y"), fi = 512;

function gi(e) {
  Xe ??= {
    plain: {
      assign: new RegExp(`${Qe}|${et}`, "gi"),
      nextKey: new RegExp(si, "iy"),
      valueWithWhitespace: new RegExp(`["']|${te}`, "iy"),
      skipsStrays: !1
    },
    escaped: {
      assign: new RegExp(`${Qe}|${et}|${pn}`, "gi"),
      nextKey: new RegExp(oi, "iy"),
      valueWithWhitespace: new RegExp(`\\\\*["']|${te}`, "iy"),
      skipsStrays: !0
    }
  };
  let n = an(e, Xe.plain);
  return gn.test(e) ? [ ...n, ...an(e, Xe.escaped) ] : n;
}

function an(e, {assign: n, nextKey: r, valueWithWhitespace: i, skipsStrays: s}) {
  let o = [], a, u = 0, l = di;
  n.lastIndex = 0;
  for (let c = n.exec(e); c !== null; c = n.exec(e)) {
    let d = c[1] ?? c[2] ?? c[3], p = c.index + c[0].length, m = p - d.length;
    r.lastIndex = m;
    let h = d.length <= fi && r.test(e) ? r.lastIndex : void 0;
    if (h !== void 0 && h < p) {
      if (i.lastIndex = h, !i.test(e)) h = void 0;
    }
    if (s && a !== void 0 && c.index >= a && c.index < u && h === void 0) {
      a = void 0, n.lastIndex = u;
      continue;
    }
    if (a !== void 0 && c.index < a) {
      let w = /^(["'])[^]*\1$/.test(d), f = w && u <= m ? 1 : 0;
      l.lastIndex = p, o.push([ m + f, !w && l.test(e) ? l.lastIndex : p - f ]);
    }
    if (u = p, a = h, a !== void 0) n.lastIndex = m;
  }
  return o;
}

function kn(e) {
  let n = e.filter(([i, s]) => s > i).sort((i, s) => i[0] - s[0]), r = [];
  for (let [i, s] of n) {
    let o = r.at(-1);
    if (o !== void 0 && i <= o[1]) o[1] = Math.max(o[1], s); else r.push([ i, s ]);
  }
  return r;
}

function ue(e, n) {
  let {text: r, origin: i} = e, s = [], o = 0;
  for (let a = 0; a < r.length; ) {
    let u = i[a];
    while (o < n.length && n[o][1] <= u) o++;
    let l = n[o];
    if (u < 0 || l === void 0 || u < l[0]) {
      a++;
      continue;
    }
    let c = a;
    while (c > 0 && i[c - 1] < 0) c--;
    while (a < r.length && (i[a] < 0 || i[a] >= l[0] && i[a] < l[1])) a++;
    let d = s.at(-1);
    if (d !== void 0 && d[1] >= c) d[1] = a; else s.push([ c, a, "[REDACTED]" ]);
  }
  return Se(e, s);
}

var pi = 512, hi = 512;

class Sn {
  testRules=null;
  redactRules=null;
  displayRules=null;
  resultCache=new Map;
  scan(e) {
    this.testRules ??= me(!1);
    let n = [];
    for (let r of this.testRules) if (r.confidence === "high" && r.prefilter?.test(e) !== !1 && r.re.test(e)) n.push({
      ruleId: r.id,
      label: r.id.split("-").map(i => Ui[i] ?? Ma(i)).join(" ")
    });
    if (ui(e)) n.push({
      ruleId: "private-key",
      label: "Private Key"
    });
    return n;
  }
  redactContext(e, n = !1) {
    this.redactRules ??= me(!0);
    let r = eDo(e);
    for (let i of this.redactRules) if (i.confidence === "low" && qe(i, n, r)) r = r.replace(i.re, we);
    return r;
  }
  redactTokens(e) {
    this.redactRules ??= me(!0);
    let n = e;
    for (let r of this.redactRules) if (r.confidence === "high" && r.prefilter?.test(n) !== !1) n = n.replace(r.re, we);
    return n;
  }
  trackedByRules(e, n = !1) {
    return this.trackedTokens(this.trackedContext(e, n));
  }
  trackedContext(e, n = !1) {
    let r = Se(Gt(e), yn(e).map(({start: i, end: s}) => [ i, s, "[REDACTED]" ]));
    return this.trackedRules(r, "low", n);
  }
  redactOnlyRules(e) {
    this.redactRules ??= me(!0);
    let n = e;
    for (let r of this.redactRules) if (r.redactOnly === !0 && qe(r, !0, n)) n = n.replace(r.re, we);
    return n;
  }
  trackedTokens(e) {
    return this.trackedRules(e, "high");
  }
  trackedRules(e, n, r = !1) {
    this.redactRules ??= me(!0);
    let i = e;
    for (let s of this.redactRules) if (s.confidence === n && qe(s, r, i.text)) s.re.lastIndex = 0, 
    i = Kt(i, s.re, ci);
    return i;
  }
  redactWithUrlRanges(e) {
    let n = ve(e);
    return n.length === 0 ? this.redactTokens(this.redactContext(e, !0)) : ue(this.trackedByRules(e, !0), n).text;
  }
  redactTracked(e) {
    return ue(this.trackedByRules(e, !0), ve(e));
  }
  redact(e) {
    let n = e.length <= pi;
    if (n) {
      let i = this.resultCache.get(e);
      if (i !== void 0) return i;
    }
    let r = this.redactWithUrlRanges(e);
    if (n) {
      if (this.resultCache.size >= hi) this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, r);
    }
    return r;
  }
  redactForDisplay(e) {
    this.displayRules ??= li();
    let n = e;
    for (let r of this.displayRules) {
      if (r.confidence !== "high" || r.prefilter?.test(n) === !1) continue;
      n = n.replace(r.re, bi);
    }
    return n;
  }
}

var D = new Sn;

function U4n(e) {
  return D.scan(e);
}

function ds(e) {
  return D.redact(e);
}

function xX(e) {
  return D.redactTokens(D.redactContext(e));
}

function tDo(e) {
  return D.redactContext(e);
}

function B4n(e) {
  return D.redactTokens(e);
}

var mo = new RegExp(at), yo = new RegExp(at, "g");

var Hje = 16384;

function R$t(e, n) {
  let r = ve(e);
  if (r.length === 0) return Mi(D.redactContext(e, !0), n);
  let i = D.trackedContext(e, !0);
  for (let s = n + 2 * Hje; ;s *= 2) {
    if (i.text.length <= s) return ue(D.trackedTokens(i), r).text;
    let o = D.trackedTokens(je(i, 0, s)), a = o.text.length - Hje;
    if (a >= n) {
      let u = ne(o.text, a).length, l = ue(je(o, 0, u), r);
      if (l.text.length >= n) return l.text;
    }
  }
}

var mi = /[$\x60|;&<>()\s]/, yi = /[/.@:~*?\\]/;

function bi(e, n) {
  let r = typeof n === "string" ? n : e;
  if (mi.test(r) || yi.test(r)) return e;
  return we(e, n);
}

function KOe(e) {
  return D.redactForDisplay(e);
}

function PX(e, n = ds) {
  if (typeof e === "string") return n(e);
  if (Array.isArray(e)) return e.map(r => PX(r, n));
  if (e !== null && typeof e === "object") {
    let r = Object.create(null), i = Object.entries(e), s = n === ds ? ki(i.map(([o]) => o)) : void 0;
    for (let [o, [a, u]] of i.entries()) {
      let l = s ? s[o] : a;
      if (typeof u === "string") {
        if (n === ds) {
          r[l] = nDo(a, u);
          continue;
        }
        let c = `${a}: `, d = n(c + u);
        r[l] = d.startsWith(c) ? d.slice(c.length) : n(u);
      } else r[l] = PX(u, n);
    }
    return r;
  }
  return e;
}

function nDo(e, n) {
  let r = `${e}: `, i = r + n, s = ve(i);
  if (s.length === 0) {
    let l = ds(i);
    if (l.startsWith(r)) return l.slice(r.length);
    let c = xX(i);
    return c.startsWith(r) ? D.redactOnlyRules(c.slice(r.length)) : ds(n);
  }
  let o = [];
  for (let [l, c] of s) if (c > r.length) o.push([ Math.max(l, r.length), c ]);
  let a = D.trackedByRules(i, !0);
  if (a.text.startsWith(r)) return ue(a, o).text.slice(r.length);
  let u = D.trackedByRules(i);
  return u.text.startsWith(r) ? D.redactOnlyRules(ue(u, o).text.slice(r.length)) : ds(n);
}

function ki(e) {
  let n = e.map(s => ds(s));
  if (n.every((s, o) => s === e[o])) return n;
  let r = new Set(n.filter((s, o) => s === e[o])), i = new Map;
  return n.map((s, o) => {
    if (s === e[o]) return s;
    let a = s, u = i.get(s) ?? 2;
    while (r.has(a)) a = `${s} (${u})`, u++;
    return i.set(s, u), r.add(a), a;
  });
}

function Xln(e) {
  let n = Object.create(null);
  for (let [r, i] of Object.entries(e)) n[r] = st.test(r) ? "[REDACTED]" : i;
  return n;
}

var ST = "[redacted URL]";

function un(e) {
  let n = F(e);
  if (!/%(?:40|3a|5c)/i.test(n)) return e;
  let r = /^(?:https?|wss?|ftp|file):/i.test(n);
  return n.replace(r ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (i, s) => String.fromCharCode(parseInt(s, 16)));
}

function ut(e, n, r) {
  let i = n(e), s = un(e);
  if (i === r || s === e) return i;
  return i !== null && un(i) === n(s) ? i : r;
}

function Jln(e) {
  return ut(e, Ei, null);
}

function Ei(e) {
  try {
    let n = new URL(e);
    if (!n.host || dt(e) || ct(n) || gt(e, n) || An(e)) return null;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

var rDo = /[@:]|\/\//;

function kHr(e) {
  let n = Jln(e);
  if (n === null) return null;
  let {protocol: r, host: i, pathname: s} = new URL(n);
  if (!rDo.test(s)) return n;
  let o = s.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, a => `/${Ii("%2F", a.length - 1)}`);
  return `${r}//${i}${o}`;
}

function j4n(e) {
  let n = [], r = 0;
  for (let [i, s] of kn(Ze(e))) n.push(e.slice(r, i), "[REDACTED]"), r = s;
  return n.push(e.slice(r)), n.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (i, s) => s === "@" ? "://" : "://[REDACTED]%40");
}

function S_(e) {
  return ut(e, Ae, ST);
}

function Ae(e) {
  if (!e) return e;
  if (Te(e) || wn(e) || dt(e)) return ST;
  try {
    let n = new URL(e);
    if (!n.host) throw TypeError("opaque");
    if ((n.username !== "" || n.password !== "") && `${n.pathname}${n.search}${n.hash}`.includes("@") || ct(n) || gt(e, n)) return ST;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    let n = F(e), r = pt(n), i = n.slice(r), s = ht(i), o = i.search(/[?#]/);
    if (s !== -1 && o !== -1 && o < s) return ST;
    let a = s === -1 ? i : i.slice(s + 1), u = a.search(/[?#]/);
    if (u !== -1 && a.includes("@", u) && (s !== -1 || !Ni(a, u, r !== 0))) return ST;
    let l = nt(nt(s === -1 ? n : n.slice(r + s + 1), "?"), "#"), c = l.lastIndexOf("@"), d = c === -1 ? l : l.slice(c + 1);
    return ae(d) && !ae(n) && !/^:\d+\/?$/.test(d.startsWith("[") ? d.slice(d.indexOf("]") + 1) : d.slice(d.indexOf(":"))) ? ST : d;
  }
}

var lt = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;

function If(e) {
  return ut(e, Si, ST);
}

function Si(e) {
  if (Te(e) || dt(e)) return ST;
  if (lt.test(e)) {
    let s = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return s === -1 ? e : e.slice(0, s);
  }
  if (wn(e) && !Di(e)) return ST;
  let n;
  try {
    n = new URL(e);
  } catch {
    return Re(e, ln(e) ? Ae(e) : e);
  }
  if (!n.host) return Re(e, n.search || n.hash || ln(e) ? Ae(e) : e);
  if (gt(e, n)) return ST;
  let r = n.username !== "" && ft(n.protocol.slice(0, -1)), i = n.username !== "" && !/^[^:]*:\//.test(F(e));
  return Re(e, r || i || n.password || Ce(n.username) || ct(n) || n.search || n.hash ? Ae(e) : e);
}

function hJe(e) {
  return Re(e, S_(e));
}

function Tme(e, n, r) {
  return n === "" || n === r ? e : e.split(n).join(r);
}

function IX(e, n) {
  let r = typeof n === "string" || n === void 0 ? [ n ] : n;
  for (let i of r) {
    let s = xi(i), o = i && s.length > 0 ? If(i) : "";
    for (let a of s) e = Tme(e, a, o);
  }
  return EA(e);
}

function xi(e) {
  if (!e || !Rn.test(e) || If(e) === e) return [];
  let n = [ e ], r = pt(e), i = e.slice(r), s = i.indexOf("/");
  for (let o of new Set([ i.indexOf("@"), ht(i) ])) if (r !== 0 && o !== -1 && (s === -1 || o < s)) n.push(e.slice(0, r) + i.slice(o + 1));
  return n;
}

function wi(e) {
  let n = F(e), r = pt(n), i = r !== 0, s = n.indexOf("#");
  if (n.includes("?") || s !== -1 && (i || n.includes("@", s))) return !0;
  let o = n.slice(r), a = ht(o);
  if (a === -1) return !1;
  let u = n.slice(0, r - 3), l = /^(?:ftps?|wss?)$/i.test(u) ? o.slice(0, a).replace(/^[/\\]+/, "") : o.slice(0, a);
  return Ce(l) || i && (/https?$/i.test(u) || !l.includes("/") && ft(u));
}

var Qln = /:|%3a/i;

function ct(e) {
  return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@");
}

function Ce(e) {
  return Qln.test(e);
}

function dt(e) {
  let n = F(e), r = n.indexOf(":"), i = r === -1 ? "" : n.slice(0, r);
  if (!/^[a-z][a-z0-9+.-]*$/i.test(i) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(i) || lt.test(n)) return !1;
  let s = n.slice(r + 1), o = nt(s.slice(/^\/*/.exec(s)[0].length), "/"), a = o.search(/[?#]/);
  if (!(/%40/i.test(o) || a !== -1 && o.includes("@", a))) return !1;
  let u = o.replace(/%([0-9a-f]{2})/gi, (c, d) => String.fromCharCode(parseInt(d, 16))), l = u.lastIndexOf("@");
  return l !== -1 && u.slice(0, l).includes(":");
}

function ae(e) {
  let n = e.indexOf(":"), r = e.indexOf("/");
  return n > 0 && !e.includes("://") && (r === -1 || n < r);
}

function Re(e, n) {
  let r = (s, o) => {
    let a = F(s);
    return Ai(s) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(a) && o !== s && !o.toLowerCase().startsWith(a.slice(0, a.indexOf("://") + 3).toLowerCase()) || ae(s) && (Ri(s) || /[\t\n\r]/.test(s) || _i(s, o));
  };
  return n !== e && ae(n) && !ae(e) || r(e, n) || r(n, n) ? ST : n;
}

function Ai(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""), r = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(n), i = r !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(r[0].replace(/[\t\n\r]/g, "")) ? r : null;
  if (!i && !ae(e)) return !1;
  let s = i ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i, o = i ? n.slice(i[0].length) : e, a = i ? o.slice(Math.max(o.indexOf("/"), 0)) : "";
  return !s.test(o) || /(?:@|%40)(?:\[|%5b)/i.test(a);
}

function Ri(e) {
  try {
    return new URL(e).host !== "";
  } catch {
    return !1;
  }
}

function _i(e, n) {
  let r = F(e), i = r.indexOf(":"), s = r.slice(0, i);
  if (i <= 0 || /[/?#]/.test(s) || e.includes("://")) return !1;
  let o = s.lastIndexOf("@"), a = r.indexOf("@["), u = a !== -1 ? a + 1 : r.startsWith("[") ? 0 : -1, l = s.slice(o + 1);
  if (u !== -1) {
    let c = r.indexOf("]", u);
    if (u !== o + 1 || r[c + 1] !== ":" || /[/?#@\\]/.test(r.slice(u + 1, c))) return !0;
    l = r.slice(u, c + 1);
  }
  return n !== e && n !== ST && !n.startsWith(`${l}:`);
}

function ln(e) {
  return wi(e) || vi(e);
}

function vi(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""), r = n.indexOf("://");
  if (r !== -1 && /[?#]/.test(n)) return !0;
  let i = nt(r === -1 ? n : n.slice(r + 3), "/"), s = i.lastIndexOf("@");
  return s !== -1 && (Ce(i.slice(0, s)) || r !== -1 && ft(n.slice(0, r)));
}

function ft(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e);
}

function F(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "");
}

var Oe = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})", Oi = "https?|wss?|ftps?", xn = "ssh\\+git|git\\+ssh|ssh|git", Li = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${Oe}(?:wss?|file):(?!\\/)|${Oe}(?:${xn}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");

function Te(e, {forDestination: n = !1} = {}) {
  let r = F(e).replace(/\\/g, "/"), i = r.search(/[?#]/), s = i === -1 ? r : r.slice(0, i), o = (n ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(s) : null) ?? /:\/+/.exec(s);
  if (!o) return !1;
  let a = o.index + o[0].length, u = (n ? Li : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(s.slice(a)), l = a + (u?.index ?? 0) + (u?.[0].length ?? 0);
  return u !== null && (r.includes("@", l) || /%40/i.test(nt(r.slice(l), "/")));
}

function wn(e) {
  let n = F(e);
  if (lt.test(n) || /^file:/i.test(n)) return !1;
  return An(e);
}

function An(e) {
  let n = F(e), r = n.search(/[?#]/), s = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
  return s !== -1 && n.includes("@", s);
}

function Ti(e) {
  let n = F(e), r = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
  if (!r) return !1;
  let i = n.slice(r.index + r[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "["), s = i.search(/[/?#]/);
  return s !== -1 && i.includes("@[", s);
}

function Ci(e, n) {
  if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(n.protocol)) return !1;
  let r = mae(F(e))?.host;
  return r !== void 0 && r.toLowerCase() !== C$t(n.hostname).toLowerCase();
}

function gt(e, n) {
  return Te(e, {
    forDestination: !0
  }) || Te(n.href, {
    forDestination: !0
  }) || Ti(e) || Ci(e, n) || n.protocol === "file:" && Pi(e);
}

function Pi(e) {
  let n = F(e), r = n.search(/[?#]/), s = (r === -1 ? n : n.slice(0, r)).indexOf("\\"), o = n.lastIndexOf("@");
  return s !== -1 && o > s && /:|%3a/i.test(n.slice(s, o));
}

function Di(e) {
  return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e);
}

function pt(e) {
  let n = e.indexOf("://");
  return n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n)) ? n + 3 : 0;
}

function ht(e) {
  let n = e.indexOf("@");
  if (n === -1) return -1;
  let r = e.search(/[?#]/);
  if (r !== -1 && r < n && e.lastIndexOf("/", r) !== -1) return -1;
  let i = e.indexOf("/", n);
  return e.lastIndexOf("@", i === -1 ? e.length : i);
}

function Ni(e, n, r) {
  let i = e.indexOf("/");
  if (i <= 0 || i > n) return !1;
  let s = e.slice(0, i).replace(/^\[[^\]]*\]/, "");
  return !Ce(r ? s.replace(/:\d+$/, "") : s);
}

var Fi = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi, Rn = /[\s'"`<>]/, DUs = "whitespace, quotes, backticks or angle brackets";

function LUs(e) {
  return /^https?:\/\//i.test(e) && !Rn.test(e);
}

var $i = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi, Hi = new RegExp(`${Oe}(?:${Oi}):(?!\\/\\/)|${Oe}(?:${xn}):(?!\\/\\/)`, "gi");

function Bi(e) {
  let n = e.toLowerCase(), r = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
  for (let i of e.matchAll(Hi)) {
    let s = i.index + i[0].length;
    if (r < s) return -1;
    let o = i.index + (i[1] ?? i[2] ?? "").length;
    if (i[2] === void 0) return o;
    let a = n.indexOf(":", s), u = Math.min(a === -1 ? r : a, r);
    if (a !== -1 && a < r || n.slice(s, u).includes("%3a")) return o;
  }
  return -1;
}

function EA(e) {
  if (!e) return e;
  return e.replace(Fi, n => If(n)).replace($i, (n, r, i) => {
    let s = Bi(i);
    return s === -1 ? r + i : r + i.slice(0, s) + If(i.slice(s));
  });
}

function qe(e, n, r) {
  return (n || e.redactOnly !== !0) && (e.prefilter === void 0 || e.prefilter.test(r));
}

function Mi(e, n) {
  for (let r = n + 2 * Hje; ;r *= 2) {
    if (e.length <= r) return B4n(e);
    let i = B4n(e.slice(0, r)), s = i.length - Hje;
    if (s >= n) return ne(i, s);
  }
}

var Ui = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid"
};

var St = {
  verbose: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
}, Vi = new RegExp(`(?!\\t)[${b_}]`, "gu"), ji = 10485760, On = 1048576, Zi = 1e4, Ji = 262144, Yi = 5e3, Tn = 100, Xi = OEe(e => e());

function qi(e) {
  return Object.hasOwn(St, e);
}

function In(e) {
  return hD(e) ? null : Nn(e);
}

function Cn() {}

function Qi(e, n) {
  e.stuck = e.appendSince === n ? "yes" : "no";
}

var es = {
  sessionId: "",
  fromBackend: !1
};

function Pn(e, n, r, i) {
  let s = X(n, "debug"), o = X(s, `${e.sessionId}.txt`), a;
  if (r === null) a = o; else if (i !== null && r === i) a = X(i, `${e.sessionId}.txt`); else a = r;
  let u = !e.fromBackend && a === o ? "v5" : "raw";
  return {
    target: a,
    arm: u,
    configHome: n,
    rotate: u === "raw" && !(ce(a) === s && a.endsWith(".txt")),
    pointLatest: u === "raw" && a !== o
  };
}

function Et(e) {
  return Rf.userNamed(zi(e) ? e : Nn(e));
}

function ts(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}

function ns(e, n = Ot) {
  return n ? e : void 0;
}

async function Dn(e, n, r, i) {
  let s = {
    namespace: "log",
    sessionId: n,
    channel: "debug"
  }, o = await Me.run(!0, () => e.append(s, [ {
    data: r
  } ], i ? {
    markLatest: !0
  } : void 0));
  if (o.ok) return "landed";
  return i && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest" ? "refused" : "dropped";
}

class Fn {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled=!1;
  hasFormattedOutput=!1;
  debugFromLaunch;
  storageV5;
  writer=null;
  redirect=null;
  unflushedChunks=[];
  backlog={
    chain: Promise.resolve(),
    length: 0,
    appendSince: 0,
    stuck: "no",
    droppedCount: 0
  };
  appendOldest=this.appendOldestChunks.bind(this);
  backendLinesLogged=0;
  exiting=!1;
  exitHandlerRegistered=!1;
  successor=null;
  writtenBytes=-1;
  rotating=!1;
  resolvedLogPath=null;
  overrideDirectory=null;
  rotationTarget=null;
  latestMarked=!1;
  latestRefused=!1;
  constructor(e) {
    this.deps = e;
    if (this.storageV5 = ns(e.storageV5), e.launchIdentity !== void 0) {
      this.minLevel = e.launchIdentity.minLevel, this.filter = e.launchIdentity.filter, 
      this.toStderr = e.launchIdentity.toStderr, this.filePath = e.launchIdentity.filePath, 
      this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
      return;
    }
    let n = Array.isArray(e.argv) ? e.argv : [], r = n.indexOf("--"), i = r === -1 ? n : n.slice(0, r), s = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = s && qi(s) ? s : "debug";
    let o = i.find(u => u.startsWith("--debug="));
    this.filter = o ? Ct(o.substring(8)) : null, this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e");
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let l = i[u];
      if (l.startsWith("--debug-file=")) {
        a = In(l.substring(13));
        break;
      }
      if (l === "--debug-file" && u + 1 < i.length) {
        a = In(i[u + 1]);
        break;
      }
    }
    this.filePath = a, this.debugFromLaunch = Le(e.env.DEBUG) || Le(e.env.DEBUG_SDK) || i.includes("--debug") || i.includes("-d") || this.toStderr || o !== void 0 || this.filePath !== null;
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  drainsSyncAtExit() {
    return !(z() && this.storageV5 !== void 0 && this.deps.syncExitDrain === !1);
  }
  launchIdentity() {
    return {
      minLevel: this.minLevel,
      filter: this.filter,
      toStderr: this.toStderr,
      filePath: this.filePath,
      debugFromLaunch: this.debugFromLaunch,
      isAnt: this.deps.isAnt,
      isTestEnvironment: this.deps.isTestEnvironment
    };
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return this.runtimeDebugEnabled = !0, e;
  }
  logPath() {
    return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? X(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath();
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return X(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  log(e, {level: n} = {
    level: "debug"
  }) {
    if (St[n] < St[this.minLevel]) return;
    let r = this.deps.limits?.();
    if (r === void 0) {
      this.emit(e, n);
      return;
    }
    let i = e.length > r.maxMessageLength ? `debug message not logged: it has ${e.length} characters, over this log's fixed limit of ${r.maxMessageLength} per message` : e, {admitted: s, leftOutBefore: o} = r.admit(i.length);
    if (!s) return;
    r.timed(() => {
      if (o > 0) this.emit(`debug messages not logged: ${o} since this log's last line, over its fixed limit on how much it logs at a time`, n);
      this.emit(i, n);
    });
  }
  emit(e, n) {
    if (!this.shouldLog(e)) return;
    let r = ds(e.trim());
    r = r.includes(`\n`) ? dD(_(r)) : r.replace(Vi, a6);
    let s = `${(new Date).toISOString()} [${n.toUpperCase()}] ${r}\n`;
    if (this.toStderr) {
      this.deps.writeToStderr(s);
      return;
    }
    this.write(s);
  }
  write(e) {
    let n = this.getWriter(), r = es;
    if (this.storageV5 !== void 0) {
      if (r = {
        sessionId: this.deps.sessionId(),
        fromBackend: Me.getStore() === !0
      }, r.fromBackend) this.backendLinesLogged++;
    }
    if (n.write({
      origin: r,
      content: e
    }), this.exiting) n.flush();
  }
  async flush() {
    let e = this.backendLinesLogged;
    if (this.writer?.flush(), await this.drained(), this.storageV5 !== void 0 && this.successor) return this.successor.flush();
    for (let n = 0; this.backendLinesLogged !== e && n < 3; n++) e = this.backendLinesLogged, 
    this.writer?.flush(), await this.drained();
    if (this.backlog.droppedCount > 0 && this.backlog.length === 0 && !this.successor) this.write(""), 
    this.writer?.flush(), await this.drained();
  }
  async drained() {
    if (this.isAppendStuck()) return;
    let e = this.backlog.chain.then(() => !0);
    do {
      if (await We(e, Tn)) return;
    } while (!this.isAppendStuck());
  }
  isAppendStuck() {
    let e = this.backlog, {appendSince: n} = e;
    if (e.stuck === "no" && n !== 0 && Date.now() - n >= Yi) e.stuck = "suspected", 
    setTimeout(Qi, Tn, e, n).unref();
    return e.stuck === "yes";
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose();
    } finally {
      this.redirect = null, this.writer = null;
    }
  }
  succeed(e) {
    this.runtimeDebugEnabled = e.runtimeDebugEnabled, this.hasFormattedOutput = e.hasFormattedOutput, 
    this.unflushedChunks = e.unflushedChunks, this.backlog = e.backlog, this.exitHandlerRegistered = e.exitHandlerRegistered, 
    e.successor = this, e.dispose(n => {
      this.write(n);
    });
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return;
    }
    if (this.exiting = !0, this.backlog.droppedCount > 0) try {
      this.write("");
    } catch {}
    this.writer?.flush(), this.drainSync();
  }
  async maybeRotate(e, n, r = ji) {
    let i = z() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0) if (i) {
      let s = await i.stat(Et(e));
      this.writtenBytes = s.ok && s.value.kind !== "absent" ? s.value.size : 0;
    } else this.writtenBytes = await Gi(e).then(s => s.size).catch(() => 0); else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let s = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let o = Et(e), a = Et(s), u = await i.rename(o, a);
        if (!u.ok && !ts(u.error)) {
          if (await i.delete(a, {
            missingOk: !0
          }), !(await i.rename(o, a)).ok) await i.delete(o, {
            missingOk: !0
          });
        }
      } else try {
        await vn(e, s);
      } catch (o) {
        if (!W(o)) await kt(s).catch(() => {}), await vn(e, s).catch(() => kt(e).catch(() => {}));
      }
      this.writtenBytes = 0;
    } finally {
      this.rotating = !1;
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) return !1;
    if (!this.deps.isAnt && !this.isDebugMode()) return !1;
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u") return !1;
    return Pt(e, this.filter);
  }
  resolveDirToFile(e) {
    return this.resolvedLogPath = X(e, `${this.deps.sessionId()}.txt`), this.resolvedLogPath;
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return;
    }
    if (!this.writesFiles()) return;
    if (i) await _n(ce(e.target), {
      recursive: !0
    }).catch(() => {});
    let s = e;
    try {
      await mt(e.target, r);
    } catch (o) {
      if (!r2(o)) throw o;
      if (this.storageV5 === void 0) s = {
        ...e,
        target: this.resolveDirToFile(e.target)
      }, await mt(s.target, r); else {
        if (this.overrideDirectory = e.target, s = Pn(n, e.configHome, e.target, e.target), 
        s.arm === "v5") {
          await this.appendV5AndMark(this.storageV5, n, r);
          return;
        }
        await _n(ce(s.target), {
          recursive: !0
        }).catch(() => {});
        try {
          await mt(s.target, r);
        } catch {
          return;
        }
      }
    }
    if (s.rotate) {
      if (this.storageV5 !== void 0 && s.target !== this.rotationTarget) this.rotationTarget = s.target, 
      this.writtenBytes = -1;
      await this.maybeRotate(s.target, Buffer.byteLength(r)).catch(Cn);
    }
    if (s.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, n, r) {
    let i = z(), s = i && !this.latestMarked && !this.latestRefused, o = await Dn(e, n.sessionId, r, s);
    if (o === "refused") this.latestRefused = !0, o = await Dn(e, n.sessionId, r, !1), 
    this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", {
      level: "warn"
    });
    if (o !== "landed") return;
    if (s && !this.latestRefused) this.latestMarked = !0; else if (!i) this.markLatestSymlink();
  }
  markLatestSymlink() {
    if (!this.latestMarked && this.writesFiles()) this.latestMarked = !0, this.updateLatestSymlink();
  }
  writesFiles() {
    try {
      return this.deps.diskless?.() !== !0 && (this.deps.defaultFile?.() !== !1 || this.filePath !== null || this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== void 0);
    } catch {
      return !1;
    }
  }
  async appendOldestChunks() {
    let e = this.backlog, n = this.unflushedChunks[0], r = n?.queued;
    if (r === void 0) return;
    let i = 0, s = 0, o = !1;
    for (let {content: a, queued: u} of this.unflushedChunks) {
      if (u === void 0 || u.owner !== r.owner || u.decision.arm !== r.decision.arm || u.decision.target !== r.decision.target || u.origin.sessionId !== r.origin.sessionId || u.origin.fromBackend !== r.origin.fromBackend || i > 0 && s + a.length > Ji) break;
      i++, s += a.length, o ||= u.needMkdir;
    }
    if (e.appendSince = Date.now(), await r.owner.appendGroup(r.decision, r.origin, this.unflushedChunks.slice(0, i).map(a => a.content).join(""), o).catch(Cn), 
    e.appendSince = 0, e.stuck = "no", this.unflushedChunks[0] === n) this.unflushedChunks.splice(0, i), 
    e.length -= s;
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (this.backlog.length = 0, !this.drainsSyncAtExit() || !this.writesFiles() || this.isAppendStuck()) {
      this.unflushedChunks.length = 0;
      return;
    }
    let e = [];
    for (let n of this.unflushedChunks.splice(0)) {
      let r = e.at(-1);
      if (r !== void 0 && r.armed === n.armed && (!n.armed || r.target === n.target)) r.parts.push(n); else e.push({
        target: n.target,
        armed: n.armed,
        parts: [ n ]
      });
    }
    for (let {target: n, armed: r, parts: i} of e) {
      let s = r ? n : this.logPath(), o = i.map(a => a.content).join("");
      try {
        se().mkdirSync(ce(s));
      } catch {}
      try {
        se().appendFileSync(s, o);
      } catch (a) {
        if (r2(a)) try {
          if (!r) se().appendFileSync(this.resolveDirToFile(s), o); else {
            let u = (d, p) => {
              try {
                se().appendFileSync(X(s, `${d}.txt`), p);
              } catch {}
            }, l = i[0]?.sessionId, c = "";
            for (let d of i) {
              if (d.sessionId !== l) u(l, c), l = d.sessionId, c = "";
              c += d.content;
            }
            u(l, c);
          }
        } catch {}
      }
    }
  }
  takeDroppedNote() {
    let {droppedCount: e} = this.backlog;
    if (e === 0) return "";
    return this.backlog.droppedCount = 0, `${(new Date).toISOString()} [WARN] debug messages not logged: ${e} since the line above, because writes to this log were over 10 s behind, with over 1 MiB waiting\n`;
  }
  groupLines(e) {
    let n = e[0];
    if (n === void 0) return [];
    if (this.storageV5 === void 0) return [ {
      decision: {
        target: this.logPath(),
        arm: "raw",
        configHome: "",
        rotate: !0,
        pointLatest: !0
      },
      origin: n.origin,
      lines: e
    } ];
    let r = [];
    for (let i of e) {
      let s = r.at(-1);
      if (s !== void 0 && s.origin.sessionId === i.origin.sessionId && s.origin.fromBackend === i.origin.fromBackend) s.lines.push(i); else r.push({
        decision: Pn(i.origin, this.deps.configHomeDir(), this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null, this.overrideDirectory),
        origin: i.origin,
        lines: [ i ]
      });
    }
    return r;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null, n = this.storageV5 !== void 0;
    if (this.writer = Ue({
      writeBatch: r => {
        if (this.redirect) {
          this.redirect(r.map(o => o.content).join(""));
          return;
        }
        if (this.exiting) {
          for (let o of this.groupLines(r)) this.unflushedChunks.push({
            target: o.decision.target,
            sessionId: o.origin.sessionId,
            armed: n,
            content: this.takeDroppedNote() + o.lines.map(a => a.content).join("")
          });
          this.drainSync();
          return;
        }
        let i = this.writesFiles(), s = this.backlog;
        this.isAppendStuck();
        for (let o of this.groupLines(r)) {
          if (o.decision.arm === "raw" && !i) continue;
          if (s.droppedCount > 0 ? s.length >= On / 2 : s.length >= On && Date.now() - (this.unflushedChunks[0]?.queued?.at ?? 1 / 0) >= Zi) {
            s.droppedCount += o.lines.length;
            continue;
          }
          let a = this.takeDroppedNote() + o.lines.map(c => c.content).join("");
          if (a === "") continue;
          let u = ce(o.decision.target), l = o.decision.arm === "raw" && (o.origin.fromBackend || e !== u);
          if (o.decision.arm === "raw") e = u;
          this.unflushedChunks.push({
            target: o.decision.target,
            sessionId: o.origin.sessionId,
            armed: n,
            content: a,
            queued: {
              at: Date.now(),
              owner: this,
              decision: o.decision,
              origin: o.origin,
              needMkdir: l
            }
          }), s.length += a.length, s.chain = Xi(() => s.chain.then(this.appendOldest));
        }
      },
      sizeOf: r => r.content.length,
      flushIntervalMs: 1e3,
      maxBufferSize: 100,
      immediateMode: this.isDebugMode()
    }), this.deps.registerCleanup(async () => {
      this.writer?.dispose(), await this.drained();
    }), !this.exitHandlerRegistered) this.exitHandlerRegistered = !0, this.deps.onExit(this.handleExit.bind(this));
    return this.writer;
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath(), n = X(ce(e), "latest");
      await kt(n).catch(() => {}), await Ki(e, n);
    } catch {}
  }
}

class $n {
  instance=void 0;
  init={};
  defaultFile=!0;
  limits=void 0;
  setInstance(e) {
    this.instance = e;
  }
  setInit(e) {
    this.init = e;
  }
  disableDefaultFile() {
    this.defaultFile = !1;
  }
  setLimits(e) {
    this.limits = e;
  }
}

var rs = new K(() => new $n);

function Pe() {
  return ps(rs);
}

function xt(e, n) {
  return new Fn({
    argv: process.argv,
    env: process.env,
    sessionId: () => q(),
    configHomeDir: () => Ee(),
    onExit: r => {
      process.on("exit", r);
    },
    registerCleanup: r => {
      bt(r);
    },
    writeToStderr: r => {
      Fj(r, {
        mayDrop: !0
      });
    },
    isAnt: n?.isAnt ?? !1,
    isTestEnvironment: n?.isTestEnvironment ?? !1,
    launchIdentity: n,
    storageV5: e.init.storageV5 !== void 0 && e.init.configHome === Ee() ? e.init.storageV5 : void 0,
    syncExitDrain: e.init.syncExitDrain,
    diskless: () => he(),
    defaultFile: () => e.defaultFile,
    limits: () => e.limits
  });
}

function mq(e) {
  let n = Pe();
  n.setInit({
    storageV5: e.storageV5,
    configHome: Ee(),
    syncExitDrain: e.syncExitDrain
  });
  let r = n.instance;
  if (r) {
    let i = xt(n, r.launchIdentity());
    n.setInstance(i), i.succeed(r);
  }
  if (e.syncExitDrain === !1 && !G().drainsSyncAtExit()) t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short");
}

function G() {
  let e = Pe(), n = e.instance;
  if (n) return n;
  let r = xt(e);
  return e.setInstance(r), r;
}

function Zln() {
  return G().minLevel;
}

function OX() {
  return G().isDebugMode();
}

function l6() {
  return G().toStderr;
}

function oDo() {
  return G().filePath;
}

function sDo() {
  return G().enableDebugLogging();
}

function iDo() {
  let e = Pe(), n = e.instance;
  if (!n) return;
  let r = xt(e);
  e.setInstance(r), r.succeed(n);
}

function qOe(e) {
  G().hasFormattedOutput = e;
}

function aDo() {
  return G().hasFormattedOutput;
}

async function gEe() {
  await (Pe().instance?.flush());
}

function t(e, n = {
  level: "debug"
}) {
  G().log(e, n);
}

function gq() {
  return G().logPath();
}

function lDo(e, n) {
  return e === G().defaultLogPath(n);
}

function qee(e, n) {
  return;
}

var jo = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let n = Number(e);
    if (!Number.isNaN(n) && n >= 0) return n;
  }
  return 1 / 0;
})();

var ss = {
  [Symbol.dispose]() {}
};

function os() {
  return ss;
}

var vh = os;

function _(e, n, r) {
  using i = vh`JSON.stringify(${De(e)})`;
  return JSON.stringify(e, n, r);
}

function k$(e) {
  return JSON.stringify(e) + `\n`;
}

function Wi(e) {
  return JSON.stringify(e);
}

function H4n(e) {
  using n = vh`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++) r += JSON.stringify(e[i]) + `\n`;
  return r;
}

var Y = (e, n) => {
  using r = vh`JSON.parse(${De(e)})`;
  return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n);
};

function Do(e) {
  return JSON.parse(e);
}

function Ic(e, n) {
  using r = vh`structuredClone(${De(e)})`;
  return structuredClone(e, n);
}

function lJe(e, n, r) {
  using i = vh`fs.writeFileSync(${e}, ${De(n)})`;
  is(e, n, r);
}

function De(e) {
  return typeof e === "string" ? e.length : e;
}

var xs = "\u2192";

function ws() {
  return k.constants.O_NOFOLLOW | k.constants.O_NONBLOCK;
}

function RX() {
  return k.constants.O_RDONLY | k.constants.O_NONBLOCK | k.constants.O_NOCTTY;
}

var de = /\/+/;

function A$t(e, n) {
  let r = u => u.split(de).filter(Boolean), i = g.resolve(e), s = g.resolve(n), o = r(i), a = r(s);
  return g.parse(i).root === g.parse(s).root && o.length < a.length && o.every((u, l) => u === a[l]);
}

function Wn(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i;
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}

function As(e) {
  if (e.startsWith("\\\\")) return Wn(e);
  let n = e.replace(/^\/+/, "/"), r = cMe(n);
  if (r !== null) return r;
  return Wn(e);
}

var Rs = As;

function Fe(e, n, r) {
  let i = cl(e);
  if (n.length === 0 || i || n.some(s => s === "." || s === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(g.join(e, ...n));
    return i ? Rs(e) : e;
  }
  return g.join(e, ...n);
}

var ty = "\0unverified-ancestry", dJe = "\0opaque-link-text";

function Rt(e) {
  return Ly(g.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}

function D4n(e, n = !1) {
  return e.includes("\ufffd") || Rt(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some(r => r !== "." && r !== ".." && /[. ]$/.test(r)));
}

function zHo(e) {
  return e !== void 0 && e !== ty;
}

function L4n(e) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
    code: "ELOOP",
    path: e
  });
}

function Gn(e, n, r = !1, i = !1, s = !1) {
  if (n?.unreadableAncestry !== "unverified") return;
  let o = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (o === "ENOENT" || o === "ENOTDIR") return;
  if (o === "ENAMETOOLONG" && !r && !i && !s) return;
  return ty;
}

function re(e) {
  return _M(e);
}

function Ne(e, n) {
  return n !== void 0 && n.some(r => _M(r) && !O$(e, r) && (jn(e, r) || va(e)));
}

function Kn(e, n) {
  return n !== void 0 && n.some(r => _M(r) && jn(r, e));
}

function jn(e, n) {
  let r = o => o.length > 1 ? o.replace(/\/+$/, "") : o, [i, s] = [ r(e), r(n) ];
  return i === s || i.startsWith(s === "/" ? s : s + "/");
}

function fe(e, n) {
  return n === void 0 || n.every(r => O$(e, r));
}

function $e(e, n) {
  return n === void 0 || n.every(r => Rae(e, r));
}

function zn(e, n, r) {
  let i = va(e) ? cMe(e) : null;
  if (i === null || !fe(i, n)) return;
  let s = g.join(e);
  if (va(s) && lte(s) === lte(i)) return s;
  return Fe(e, [], r);
}

function Zn(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [ e.anchor ] : void 0;
}

function SI(e) {
  return Ly(e) || Cs(e) || el(e) || gS(e) || Pf(__, e) !== void 0;
}

async function Vgt(e) {
  return Ly(e) || Cs(e) || el(e) || gS(e) || await T$(__, e) !== void 0;
}

function GHo(e, n = __) {
  return Ly(e) || Cs(e) || el(e) || gS(e) || Pf(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0;
}

async function fae(e, n = __) {
  return Ly(e) || Cs(e) || el(e) || gS(e) || await T$(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0;
}

async function fEe(e, n, r = __) {
  if (Ly(e)) return !0;
  if (Cs(e)) return !0;
  if (el(e)) {
    let i = lte(e);
    if (i === null || n === null || i !== lte(n)) return !0;
  }
  if (gS(e)) return !0;
  return (await bHr(e, n, {
    fsImpl: r
  })).verdict !== "clean";
}

async function bHr(e, n, {fsImpl: r = __, signal: i} = {}) {
  let s = await T$(r, e, {
    ...n === null ? {} : {
      anchor: n
    },
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0
  }, i);
  if (s === void 0) return {
    verdict: "clean"
  };
  if (s === ty) return {
    verdict: "unverified"
  };
  return {
    verdict: "network",
    reaches: s
  };
}

function Pf(e, n, r) {
  return Jn(He(n, r), i => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return e.openDirNoFollowSync(i.path), "ok";
    return e.readlinkSync(i.path);
  });
}

function T$(e, n, r, i, s) {
  return _s(He(n, r), i, async o => {
    if (o.kind === "lstat") {
      if (s === void 0) return e.lstat(o.path);
      let a;
      try {
        a = await e.lstatBigint(o.path);
      } catch (u) {
        throw s(o.path, void 0), u;
      }
      return s(o.path, a), a;
    }
    if (o.kind === "opendirNofollow") return await e.openDirNoFollow(o.path), "ok";
    return e.readlink(o.path);
  });
}

function Jn(e, n) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = n(i.value);
    } catch (s) {
      r = {
        errno: E(s)
      };
    }
  }
}

async function _s(e, n, r) {
  let i;
  for (;;) {
    let s = e.next(i);
    if (s.done) return s.value;
    if (n?.aborted === !0) return ty;
    try {
      i = await r(s.value);
    } catch (o) {
      i = {
        errno: E(o)
      };
    }
  }
}

async function vs(e, n, r, i) {
  let s = Symbol("cut short"), o, a = n === void 0 ? void 0 : new Promise(l => {
    o = () => l(s), n.addEventListener("abort", o, {
      once: !0
    });
  }), u;
  try {
    for (;;) {
      let l = e.next(u);
      if (l.done) return l.value;
      if (n?.aborted === !0) return i;
      let c = r(l.value).catch(p => ({
        errno: E(p)
      })), d = await (a === void 0 ? c : Promise.race([ c, a ]));
      if (d === s) return i;
      u = d;
    }
  } finally {
    if (o !== void 0) n?.removeEventListener("abort", o);
  }
}

function* He(e, n) {
  let r = Zn(n);
  if (re(e) && !Ne(e, r)) return e;
  if (Un(e) && !za(e) && $e(e, r) || va(e) && fe(e, r)) return;
  let i = g.resolve(e), s = g.parse(i).root, o = s, a = i.slice(s.length).split(de).filter(Boolean), u = 0, l = a.length, c = !1, d = !1, p, m = 64, h = () => a.some(f => cl(f)), w = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && u < m) {
    if (c && cl(a[0])) return ty;
    let f = g.join(o, a[0]);
    if (va(f) && fe(f, r) || re(f) && !(Ne(f, r) || Kn(f, r))) return Fe(f, a.slice(1), n?.onCollapsedLanding);
    if (eb(f)) {
      if (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified") return ty;
      return Fe(f, a.slice(1), n?.onCollapsedLanding);
    }
    let y = !1;
    if (y && g.dirname(f) === "/dev/fd" && a.some((T, R) => R > 0 && (T === ".." || T === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      o = f;
      continue;
    }
    let b = y ? {
      errno: "ENOENT"
    } : yield {
      kind: "lstat",
      path: f
    };
    if (b === void 0 || typeof b === "string" || "errno" in b) {
      if (typeof b === "object" && "errno" in b && b.errno !== void 0 && b.errno !== "ENOENT" && b.errno !== "ENOTDIR" && b.errno !== "ENAMETOOLONG") {
        if (typeof (yield {
          kind: "opendirNofollow",
          path: f
        }) === "string") {
          d = !0, a.shift(), o = f;
          continue;
        }
      }
      if (n?.launchAncestry && !d && typeof b === "object" && "errno" in b && (b.errno === "EPERM" || b.errno === "EACCES") && A$t(f, n.launchAncestry)) {
        c = !0, a.shift(), o = f;
        continue;
      }
      if (typeof b === "object" && "errno" in b && (b.errno === "ENOENT" || b.errno === "ENOTDIR")) n?.onOutcome?.({
        kind: "absent",
        at: o,
        remaining: [ ...a ],
        fromLinkTarget: a.length > l,
        ...b.errno === "ENOTDIR" && {
          notAFolder: !0
        }
      });
      return Gn(b, n, u > 0, h(), w());
    }
    let v = b;
    if (d = !0, !v.isSymbolicLink()) {
      a.shift(), o = f;
      continue;
    }
    u++;
    let S = f + "\0" + a.join("\0");
    if ((p ??= new Set).has(S)) return;
    p.add(S);
    let N = yield {
      kind: "readlink",
      path: f
    };
    if (typeof N !== "string") return Gn(N, n, u > 0, h(), w());
    let I = N;
    if (n?.literalLinkText === "opaque" && D4n(I)) return dJe;
    if (!g.isAbsolute(I)) {
      let T = I.split(de).filter(Boolean);
      if (n?.surfaceNetworkRaw === !0) {
        let R = zn((o.endsWith(g.sep) ? o : o + g.sep) + [ ...T, ...a.slice(1) ].join(g.sep), r, n?.onCollapsedLanding);
        if (R !== void 0) return R;
      }
      a.shift(), n?.onHop?.({
        composed: g.resolve(o, I, ...a),
        leaf: a.length === 0,
        text: I
      }), l = Math.min(l, a.length), a = [ ...T, ...a ];
      continue;
    }
    let A = I;
    if (n?.surfaceNetworkRaw === !0 && a.length > 1 && gS(A)) {
      let T = zn([ A, ...a.slice(1) ].join(g.sep), r, n?.onCollapsedLanding);
      if (T !== void 0) return T;
    }
    if (Un(A) && !za(A) && $e(A, r) || va(A) && fe(A, r) || re(A) && !(Ne(A, r) || a.length > 1 && Kn(A, r))) return a.shift(), 
    Fe(A, a, n?.onCollapsedLanding);
    if (n?.surfaceNetworkRaw === !0 && cl(A) && (Un(A) || el(A) || _M(A) || gS(A))) return a.shift(), 
    a.length === 0 ? A : A + g.sep + a.join(g.sep);
    a.shift();
    let P = g.parse(A).root || g.sep, O = g.parse(f).root, H = /^[\\/]$/.test(P) && O !== "" && !/^[\\/]$/.test(O);
    if (H && (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified")) return ty;
    n?.onHop?.({
      composed: a.length === 0 ? A : g.resolve(A, ...a),
      leaf: a.length === 0,
      text: I
    }), o = H ? O : P, d = !1, l = Math.min(l, a.length), a = [ ...A.slice(P.length).split(de).filter(Boolean), ...a ];
  }
  if (a.length > 0 && n?.literalLinkText === "opaque") return dJe;
  if (a.length > 0) return ty;
  if (u > 0 && gS(o)) return o;
  if (re(o) && !Ne(o, r)) return o;
  if (a.length === 0) n?.onOutcome?.({
    kind: "resolved",
    path: o
  });
  return;
}

function wo(e, n) {
  if (Un(n) && !za(n) || va(n) || TI(n)) return {
    resolvedPath: n,
    isSymlink: !1,
    isCanonical: !1
  };
  let r = Pf(e, n);
  if (r === ty) return {
    resolvedPath: n,
    isSymlink: !1,
    isCanonical: !1
  };
  if (r !== void 0) return {
    resolvedPath: r,
    isSymlink: !0,
    isCanonical: !1
  };
  try {
    let i = Gee(e, n);
    return {
      resolvedPath: i,
      isSymlink: i !== n,
      isCanonical: !0
    };
  } catch (i) {
    return {
      resolvedPath: n,
      isSymlink: !1,
      isCanonical: !1
    };
  }
}

function mEe(e) {
  let n = wht();
  if (n === null) return null;
  try {
    let r = g.resolve(n), i = g.resolve(e.cwd()), s = g.parse(r).root;
    if (s !== g.parse(i).root) return null;
    let o = r.slice(s.length).split(de).filter(Boolean), a = i.slice(s.length).split(de).filter(Boolean), u = 0;
    while (u < o.length && u < a.length && o[u] === a[u]) u++;
    return u > 0 ? g.join(s, ...o.slice(0, u)) : null;
  } catch {
    return null;
  }
}

function Gee(e, n) {
  try {
    return e.realpathSync(n);
  } catch (r) {
    let i = E(r);
    if (i !== "EPERM" && i !== "EACCES") throw r;
    let s, o = mEe(e);
    if (Pf(e, n, {
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0,
      launchAncestry: o,
      onOutcome: u => {
        s = u;
      }
    }) !== void 0 || s === void 0) throw r;
    if (s.kind === "absent") throw Object.assign(Error("ENOENT: no such file or directory"), {
      code: "ENOENT",
      syscall: "realpath",
      path: n
    });
    return Ln(s.path);
  }
}

var Kgt = "ERR_SYMLINK_TO_NETWORK_PATH";

function fq(e, n, r) {
  let {asWritten: i, opts: s} = qn(e, n, r), o, a;
  return er(Pf(e, i, {
    ...s,
    onOutcome: u => {
      o = Yn(u), a = Xn(u);
    }
  }), n, i), {
    ...Qn(i),
    linksResolvedPath: o,
    absentAt: a
  };
}

async function Nj(e, n, r) {
  let {asWritten: i, opts: s, ownHost: o} = qn(e, n, r), a, u, l, c, d = !o, p = !1, m, h = [], w = {
    ...s,
    onOutcome: f => {
      p = !0, a = Yn(f), u = Xn(f);
      let y = m, b = f.kind === "resolved" && y?.path === f.path;
      d = !b, c = b ? y.stats : void 0, l = b && !xf(y.stats.ino) ? {
        dev: y.stats.dev,
        ino: y.stats.ino,
        ctimeNs: y.stats.ctimeNs
      } : void 0;
    }
  };
  if (er(await T$(e, i, w, void 0, r?.fileIdentity === !0 ? (f, y) => {
    if (m = y === void 0 ? void 0 : {
      path: f,
      stats: y
    }, y?.isSymbolicLink() === !0) h.push(y);
  } : void 0), n, i), !p && m?.stats.isSymbolicLink() === !0) d = !0;
  return {
    ...Qn(i),
    linksResolvedPath: a,
    absentAt: u,
    ...l !== void 0 && {
      identity: l
    },
    ...c !== void 0 && {
      endStats: c
    },
    ...r?.fileIdentity === !0 && {
      linksFollowed: h
    },
    ...r?.fileIdentity === !0 && d && {
      noFileSeen: !0
    }
  };
}

function Yn(e) {
  return e.kind === "resolved" ? Ln(e.path) : void 0;
}

function Xn(e) {
  return e.kind === "absent" ? {
    at: e.at,
    remaining: e.remaining,
    fromLinkTarget: e.fromLinkTarget,
    ...e.notAFolder && {
      notAFolder: !0
    }
  } : void 0;
}

function qn(e, n, r) {
  let i = kT(n);
  if (ET(i) || Ny(i)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: Kgt,
    path: n,
    reason: "unexamined"
  });
  let s = g.isAbsolute(i) ? g.resolve(i) : g.resolve(process.cwd(), i), o = kT(s);
  if (ET(o) || Ny(o)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: Kgt,
    path: n,
    reason: "unexamined"
  });
  let a = re(o) || va(o) || Un(o) && !za(o);
  return {
    asWritten: o,
    ownHost: a,
    opts: {
      ...a && {
        anchors: [ o ]
      },
      surfaceNetworkRaw: !0,
      ...(!a || r?.failClosed) && {
        unreadableAncestry: "unverified",
        launchAncestry: mEe(e)
      }
    }
  };
}

function Qn(e) {
  return {
    resolvedPath: e,
    isSymlink: !1,
    isCanonical: !1
  };
}

function er(e, n, r) {
  if (e === void 0) return;
  let i = o => Object.assign(Error("Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"), {
    code: Kgt,
    path: n,
    reason: o
  });
  if (e === ty) throw i("unexamined");
  if (re(r) && e === r) return;
  if (!(Un(e) || el(e) || re(e) || gS(e))) throw i("unexamined");
  throw Object.assign(Error("Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"), {
    code: Kgt,
    path: n,
    reason: "network"
  });
}

function SHr(e) {
  return E(e) === Kgt;
}

function VHo(e) {
  if (!SHr(e)) return;
  let n = e.reason;
  return n === "network" || n === "unexamined" ? n : void 0;
}

function kme(e, n, r) {
  let {resolvedPath: i} = wo(e, n);
  if (r.has(i)) return !0;
  return r.add(i), !1;
}

var At = /(^|[\\/])\.\.([\\/]|$)/;

function Os(e, n = "linux") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}

function A$(e, n, r) {
  let i = Zn(r);
  if (Un(n) && !za(n) || va(n) || TI(n)) {
    if (i !== void 0 && (va(n) && !fe(n, i) || Un(n) && !za(n) && !$e(n, i))) {
      let c = Pf(e, n, {
        anchors: i,
        surfaceNetworkRaw: r?.surfaceNetworkRaw
      });
      if (c === ty && r?.surfaceNetworkRaw !== !0) {
        if (r?.surfaceDotDotTargets === !0) throw L4n(n);
        return n;
      }
      return c;
    }
    return n;
  }
  let s = Pf(e, n, r?.surfaceNetworkRaw === !0 ? {
    surfaceNetworkRaw: !0,
    anchors: i
  } : void 0);
  if (s === ty && r?.surfaceNetworkRaw !== !0) {
    if (r?.surfaceDotDotTargets === !0) throw L4n(n);
    return;
  }
  if (s !== void 0) return s;
  let o = n, a = [], u = r?.surfaceDotDotTargets === !0, l = c => a.length === 0 ? c : u && At.test(c) ? [ c, ...a ].join(g.sep) : g.join(c, ...a);
  while (o !== g.dirname(o)) {
    let c, d;
    try {
      c = e.readlinkSync(o);
    } catch (p) {
      d = E(p);
    }
    if (c !== void 0) {
      if (u && At.test(c)) return l(g.isAbsolute(c) ? c : g.dirname(o) + g.sep + c);
      let p = g.isAbsolute(c) ? c : g.resolve(g.dirname(o), c);
      if (Un(p) && !za(p) || va(p) || TI(p) || eb(p) || r?.surfaceNetworkRaw === !0 && cl(p)) return r?.surfaceNetworkRaw === !0 && a.length > 0 ? p + g.sep + a.join(g.sep) : l(p);
      try {
        let m = Gee(e, o);
        return l(m);
      } catch {
        let m = o, h = 0, w = 64;
        while (h < w) {
          let f;
          try {
            f = e.readlinkSync(m);
          } catch {
            break;
          }
          if (u && At.test(f)) {
            m = g.isAbsolute(f) ? f : g.dirname(m) + g.sep + f;
            break;
          }
          let y = g.isAbsolute(f) ? u ? Os(f) : f : g.resolve(g.dirname(m), f);
          if (Un(y) && !za(y) && $e(y, i) || va(y) && fe(y, i) || TI(y) || eb(y) || r?.surfaceNetworkRaw === !0 && cl(y)) {
            m = y;
            break;
          }
          let b;
          try {
            b = e.lstatSync(y);
          } catch {
            m = y;
            break;
          }
          if (!b.isSymbolicLink()) {
            m = y;
            break;
          }
          m = y, h++;
        }
        if (h >= w && r?.surfaceNetworkRaw === !0) return ty;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 && (Un(m) && !za(m) || va(m) || TI(m) || eb(m) || cl(m)) ? m + g.sep + a.join(g.sep) : l(m);
      }
    }
    if (d === "ENOENT") {
      a.unshift(g.basename(o)), o = g.dirname(o);
      continue;
    }
    try {
      let p = Gee(e, o);
      if (p !== o) return l(p);
    } catch (p) {
      if (u) throw p;
    }
    return;
  }
  return;
}

function Vn(e) {
  return Un(e) && !za(e) || el(e) || ET(e);
}

function wHr(e) {
  return tr(e, !1) ?? e;
}

function KHo(e) {
  return tr(e, !0);
}

function tr(e, n) {
  if (Vn(e)) return e;
  let r = e, i = "";
  for (;;) {
    if (!cl(r)) {
      let o = cte(r);
      if (o !== null) {
        let a = i === "" ? o : o.endsWith(g.sep) ? o + i : o + g.sep + i;
        if (Vn(a)) return n ? a : e;
        return a;
      }
      if (n) try {
        return k.lstatSync(r), null;
      } catch (a) {
        if (!W(a)) return null;
      }
    }
    let s = g.dirname(r);
    if (s === r) return e;
    i = i === "" ? g.basename(r) : g.basename(r) + g.sep + i, r = s;
  }
}

function ei(e) {
  return nr(e, "permission");
}

function qgt(e, n) {
  let r = se();
  return vs(rr(e, "permission"), n, async i => {
    switch (i.kind) {
     case "lstat":
      return r.lstat(i.path);

     case "opendirNofollow":
      return await r.openDirNoFollow(i.path), "ok";

     case "readlink":
      return r.readlink(i.path);

     case "realpath":
      return r === __ ? Ln(await sr(i.path)) : r.realpath(i.path);
    }
  }, {
    unresolved: !0,
    requested: e,
    spellings: [ e ],
    stoppedAt: e,
    leafIsSymlink: !1,
    reason: "cut-short"
  });
}

function s6(e) {
  let n = nr(e, "screen");
  return {
    paths: n.spellings,
    vetted: !n.unresolved
  };
}

function nr(e, n) {
  let r = se();
  return Jn(rr(e, n), i => {
    switch (i.kind) {
     case "lstat":
      return r.lstatSync(i.path);

     case "opendirNofollow":
      return r.openDirNoFollowSync(i.path), "ok";

     case "readlink":
      return r.readlinkSync(i.path);

     case "realpath":
      return r.realpathSync(i.path);
    }
  });
}

function* rr(e, n) {
  let r = e;
  if (r === "~") r = Mn().normalize("NFC"); else if (r.startsWith("~/")) r = g.join(Mn().normalize("NFC"), r.slice(2));
  let i = new Set([ r ]), s = (R, L = !1) => ({
    unresolved: !1,
    requested: r,
    spellings: Array.from(i),
    landing: R,
    leafIsSymlink: L
  });
  if (Un(r) && !za(r) || va(r) || TI(r)) return s(r);
  let o = se(), a = mEe(o), u, l, c = !1, d = !1, p = !1, m = !1, h = [], w = new Set, f = R => {
    let L = g.resolve(R);
    if (!w.has(L)) w.add(L), h.push(R);
  }, y = r, b, v = function*(R) {
    let L;
    for (;;) {
      let B = R.next(L);
      if (B.done) return B.value;
      let j = B.value;
      if (y = j.path, j.kind === "readlink") d = !0; else b = void 0;
      if (L = yield j, typeof L === "object" && "errno" in L) if (j.kind === "readlink") p = !0; else b = L.errno, 
      m ||= j.kind === "opendirNofollow" && L.errno === "ELOOP";
    }
  }, S = yield* v(He(r, {
    unreadableAncestry: "unverified",
    launchAncestry: a,
    ...!1,
    onCollapsedLanding: R => {
      u = R;
    },
    onOutcome: R => {
      l = R;
    },
    onHop: ({composed: R, leaf: L, text: B}) => {
      if (L) i.add(R), c = !0;
      if (n === "screen" && Rt(B)) f(R);
    }
  })), N = n === "permission" && !d && (b === "ENAMETOOLONG" || (b === "EACCES" || b === "EPERM")), I = () => {
    let R = Ln(r);
    return i.add(R), s(R);
  }, A = () => N ? I() : {
    unresolved: !0,
    requested: r,
    spellings: Array.from(i),
    stoppedAt: y,
    leafIsSymlink: c,
    reason: d || m ? "past-a-link" : "unexamined"
  }, ee = 8, P = function*() {
    for (let R = 0; R < h.length; R++) {
      if (R >= ee) return !1;
      let L = h[R];
      if (Un(L) && !za(L) || va(L) || TI(L)) {
        i.add(L);
        continue;
      }
      let B = yield* v(He(L, {
        unreadableAncestry: "unverified",
        launchAncestry: a,
        onHop: ({composed: j, text: ie}) => {
          if (Rt(ie)) f(j);
        }
      }));
      if (B === ty || p) return !1;
      if (B !== void 0) i.add(B);
    }
    return !0;
  };
  if (S === ty || S === dJe) return A();
  if (S !== void 0) {
    if (n === "screen" && !(yield* P())) return A();
    if (u !== void 0) i.add(u);
    return i.delete(S), i.add(S), s(S, c);
  }
  if (l === void 0) {
    if (n === "screen" && !p) return (yield* P()) ? I() : A();
    return A();
  }
  if (l.kind === "absent" && (n === "screen" ? l.remaining.some(R => cl(R)) : d && l.remaining.some(R => I$(R)))) return A();
  let O = l.kind === "absent" ? l.at : l.path, H = l.kind === "absent" ? l.remaining.join(g.sep) : "", V = Ln(H === "" ? O : g.join(O, H));
  if (d || O !== g.parse(O).root) i.add(V);
  let T = Ls(yield {
    kind: "realpath",
    path: O
  }, O, H);
  if (T !== void 0 && T !== V) i.delete(T), i.add(T);
  if (n === "screen" && !(yield* P())) return A();
  return s(V, c);
}

function Ls(e, n, r) {
  if (typeof e !== "string" || e === n) return;
  return r === "" ? e : g.join(e, r);
}

function Ygt(e) {
  return {
    unresolved: !1,
    requested: e,
    spellings: [ e ],
    landing: e,
    leafIsSymlink: !1
  };
}

function uo(e) {
  return vHr(ei(e));
}

function vHr(e) {
  if (!e.unresolved) return e.spellings;
  let {resolvedPath: n, isCanonical: r, isSymlink: i} = wo(se(), e.requested);
  return (r || i) && !e.spellings.includes(n) ? [ ...e.spellings, n ] : e.spellings;
}

var __ = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using n = vh`fs.existsSync(${e})`;
    return k.existsSync(e);
  },
  async stat(e) {
    return Bn(e);
  },
  async lstat(e) {
    return wt(e);
  },
  async openDirNoFollow(e) {
    await (await Q(e, k.constants.O_DIRECTORY | k.constants.O_NOFOLLOW)).close();
  },
  openDirNoFollowSync(e) {
    let n = k.openSync(e, k.constants.O_DIRECTORY | k.constants.O_NOFOLLOW);
    k.closeSync(n);
  },
  async lstatBigint(e) {
    return wt(e, {
      bigint: !0
    });
  },
  async statBigint(e) {
    return Bn(e, {
      bigint: !0
    });
  },
  async readdir(e) {
    return gs(e, {
      withFileTypes: !0
    });
  },
  async unlink(e) {
    return Ss(e);
  },
  async rmdir(e) {
    return bs(e);
  },
  async rm(e, n) {
    return ks(e, n);
  },
  async mkdir(e, n) {
    try {
      await fs(e, {
        recursive: !0,
        ...n
      });
    } catch (r) {
      if (E(r) !== "EEXIST") throw r;
    }
  },
  async readFile(e, n) {
    return Hn(e, {
      encoding: n.encoding
    });
  },
  async rename(e, n) {
    return ys(e, n);
  },
  async realpath(e) {
    return Ln(await ms(e));
  },
  async readlink(e) {
    return hs(e);
  },
  async copyFile(e, n) {
    return ls(e, n);
  },
  async appendFile(e, n, r) {
    if (r?.mode !== void 0) try {
      let i = await Q(e, "ax", r.mode);
      try {
        await i.appendFile(n);
      } finally {
        await i.close();
      }
      return;
    } catch (i) {
      if (E(i) !== "EEXIST") throw i;
    }
    return as(e, n);
  },
  async symlink(e, n, r) {
    return Es(e, n, r);
  },
  async link(e, n) {
    return cs(e, n);
  },
  async chmod(e, n) {
    return us(e, n);
  },
  statSync(e) {
    using n = vh`fs.statSync(${e})`;
    return k.statSync(e);
  },
  lstatSync(e) {
    using n = vh`fs.lstatSync(${e})`;
    return k.lstatSync(e);
  },
  readFileSync(e, n) {
    using r = vh`fs.readFileSync(${e})`;
    return k.readFileSync(e, {
      encoding: n.encoding
    });
  },
  readSync(e, n) {
    using r = vh`fs.readSync(${e}, ${n.length} bytes)`;
    let i = void 0;
    try {
      i = k.openSync(e, "r");
      let s = [], o = 0;
      while (o < n.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, n.length - o)), l = k.readSync(i, u, 0, u.length, o);
        if (l === 0) break;
        s.push(u.subarray(0, l)), o += l;
      }
      return {
        buffer: Buffer.concat(s, o),
        bytesRead: o
      };
    } finally {
      if (i !== void 0) k.closeSync(i);
    }
  },
  appendFileSync(e, n, r) {
    using i = vh`fs.appendFileSync(${e}, ${n.length} chars)`;
    if (r?.mode !== void 0) try {
      let s = k.openSync(e, "ax", r.mode);
      try {
        k.appendFileSync(s, n);
      } finally {
        k.closeSync(s);
      }
      return;
    } catch (s) {
      if (E(s) !== "EEXIST") throw s;
    }
    k.appendFileSync(e, n);
  },
  unlinkSync(e) {
    using n = vh`fs.unlinkSync(${e})`;
    k.unlinkSync(e);
  },
  renameSync(e, n) {
    using r = vh`fs.renameSync(${e} ${xs} ${n})`;
    k.renameSync(e, n);
  },
  readlinkSync(e) {
    using n = vh`fs.readlinkSync(${e})`;
    return k.readlinkSync(e);
  },
  realpathSync(e) {
    using n = vh`fs.realpathSync(${e})`;
    return Ln(k.realpathSync(e));
  },
  mkdirSync(e, n) {
    using r = vh`fs.mkdirSync(${e})`;
    let i = {
      recursive: !0
    };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      k.mkdirSync(e, i);
    } catch (s) {
      if (E(s) !== "EEXIST") throw s;
    }
  },
  readdirSync(e) {
    using n = vh`fs.readdirSync(${e})`;
    return k.readdirSync(e, {
      withFileTypes: !0
    });
  },
  rmSync(e, n) {
    using r = vh`fs.rmSync(${e})`;
    k.rmSync(e, n);
  },
  createWriteStream(e) {
    return k.createWriteStream(e);
  },
  async readFileBytes(e, n) {
    if (n === void 0) return Hn(e);
    let r = await Q(e, RX());
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await pL(r, n, "file");
    } finally {
      await r.close();
    }
  },
  async readFileFdGated(e, n) {
    try {
      let r = ws();
      if (r === 0) {
        if (!(await wt(e)).isFile()) return null;
      }
      let i = await Q(e, k.constants.O_RDONLY | r);
      try {
        let s = await i.stat();
        if (!s.isFile() || s.size > n) return null;
        let o = Number(s.size), a = Buffer.allocUnsafe(o), u = 0;
        while (u < o) {
          let {bytesRead: l} = await i.read(a, u, o - u, u);
          if (l === 0) break;
          u += l;
        }
        return {
          content: (u < o ? a.subarray(0, u) : a).toString("utf8"),
          stats: s
        };
      } finally {
        await i.close();
      }
    } catch {
      return null;
    }
  }
};

function se() {
  return __;
}

function ag(e) {
  process.chdir(e);
  try {
    process.cwd();
  } catch {}
}

async function Oje(e, n, r) {
  await using i = typeof e === "string" ? await Q(e, "r") : null;
  let s = typeof e === "string" ? i : e, o = (await s.stat()).size;
  if (o <= n) return null;
  let a = Math.min(o - n, r), u = Buffer.allocUnsafe(a), l = 0;
  while (l < a) {
    let {bytesRead: c} = await s.read(u, l, a - l, n + l);
    if (c === 0) break;
    l += c;
  }
  return {
    content: u.toString("utf8", 0, l),
    bytesRead: l,
    bytesTotal: o
  };
}

async function pL(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(), s = [], o = 0;
  while (o < n) {
    let a = Buffer.allocUnsafe(Math.min(65536, n - o)), {bytesRead: u} = await e.read(a, 0, a.length, i ? o : null);
    if (u === 0) break;
    s.push(a.subarray(0, u)), o += u;
  }
  return Buffer.concat(s, o);
}

async function wA(e, n) {
  await using r = typeof e === "string" ? await Q(e, "r") : null;
  let i = typeof e === "string" ? r : e, s = (await i.stat()).size;
  if (s === 0) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  let o = Math.max(0, s - n), a = s - o, u = Buffer.allocUnsafe(a), l = 0;
  while (l < a) {
    let {bytesRead: c} = await i.read(u, l, a - l, o + l);
    if (c === 0) break;
    l += c;
  }
  return {
    content: u.toString("utf8", 0, l),
    bytesRead: l,
    bytesTotal: s
  };
}

async function* qln(e, n = 65536) {
  let r = await Q(e, "r"), i = Buffer.alloc(n), s = 0, o = [], a = 0;
  try {
    while (!0) {
      let {bytesRead: u} = await r.read(i, 0, n, s);
      if (u === 0) break;
      s += u;
      let l = i.subarray(0, u), c = 0;
      while (c < u) {
        let d = l.indexOf(10, c);
        if (d === -1) {
          o.push(Buffer.from(l.subarray(c))), a += u - c;
          break;
        }
        if (a === 0) yield l.subarray(c, d); else yield Buffer.concat([ ...o, l.subarray(c, d) ], a + (d - c)), 
        o = [], a = 0;
        c = d + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (a > 0) yield o.length === 1 ? o[0] : Buffer.concat(o, a);
}

async function* cJe(e) {
  let r = await Q(e, "r");
  try {
    let s = (await r.stat()).size, o = Buffer.alloc(0), a = Buffer.alloc(4096);
    while (s > 0) {
      let u = Math.min(4096, s);
      s -= u, await r.read(a, 0, u, s);
      let l = Buffer.concat([ a.subarray(0, u), o ]), c = l.indexOf(10);
      if (c === -1) {
        o = l;
        continue;
      }
      o = Buffer.from(l.subarray(0, c));
      let d = l.toString("utf8", c + 1).split(`\n`);
      for (let p = d.length - 1; p >= 0; p--) {
        let m = d[p];
        if (m) yield m;
      }
    }
    if (o.length > 0) yield o.toString("utf8");
  } finally {
    await r.close();
  }
}

export { wh, Rp, CUs, Rf, WHo, RUs, xUs, zee, bt, Ggt, Oy, bI, M4n, xf, vh, _, k$, Wi, H4n, Y, Do, Ic, lJe, RX, A$t, ty, dJe, D4n, zHo, L4n, SI, Vgt, GHo, fae, fEe, bHr, Pf, T$, wo, mEe, Gee, Kgt, fq, Nj, SHr, VHo, kme, A$, wHr, KHo, ei, qgt, s6, Ygt, uo, vHr, __, se, ag, Oje, pL, wA, qln, cJe, qHo, Vee, PUs, FG, N4n, UG, uJe, $4n, YHo, vA, Gd, $j, Iu, EHr, cn, Xgt, C$, b_, GOe, pJe, IUs, Mje, fM, XHo, lg, Ou, JHo, fJe, cx, Vd, mJe, En, dD, i6, Ks, OUs, gJe, $C, Yln, F4n, Kee, Jgt, a6, VU, VOe, mae, C$t, QHo, MUs, ZHo, HUs, eDo, U4n, ds, xX, tDo, B4n, Hje, R$t, KOe, PX, nDo, Xln, ST, Jln, rDo, kHr, j4n, S_, If, hJe, Tme, IX, Qln, DUs, LUs, EA, mq, Zln, OX, l6, oDo, sDo, iDo, qOe, aDo, gEe, t, gq, lDo, qee };
