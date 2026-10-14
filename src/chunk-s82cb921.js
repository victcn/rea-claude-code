// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { n5 } from "./chunk-av9t4vjk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as p, statSync as m } from "fs";

import { access as h, stat as g } from "fs/promises";

import { isAbsolute as d, join as w } from "path";

var qT = "CLAUDE_CODE_PROCESS_WRAPPER", X6e = 12e3, c = {
  argv: [],
  error: null,
  platformIgnored: !1,
  record: ""
};

class f {
  memoRaw=void 0;
  memoState=c;
  getState() {
    let r = process.env[qT];
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (this.memoRaw = r, this.memoState = v(r), this.memoState.error && this.memoState.error !== e) t(`${qT} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, {
      level: "error"
    }); else if (this.memoState.platformIgnored) t(`${qT} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, {
      level: "warn"
    });
    return this.memoState;
  }
}

var S = new K(() => new f);

function njn() {
  return S.of(B().host).getState();
}

function nf() {
  return njn().argv;
}

function bf() {
  return njn().error;
}

async function O0() {
  if (bf() !== null) return !1;
  let r = nf();
  if (r.length === 0) return !0;
  let e = qbo(r)[0];
  return e === void 0 ? !0 : Kbo(e);
}

async function Kbo(r) {
  try {
    if (!(await g(r)).isFile()) return !1;
    return await h(r, p.X_OK), !0;
  } catch {
    return !1;
  }
}

function qbo(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [ e ] : [];
}

async function J6e() {
  let r = bf();
  if (r) return r;
  if (await O0()) return null;
  return `${qT}: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}

function D1() {
  return njn().record;
}

function v(r) {
  if (O() === "windows") return {
    argv: [],
    error: null,
    platformIgnored: !0,
    record: ""
  };
  let e;
  try {
    e = y(r);
  } catch (n) {
    return i(n instanceof Error ? n.message : String(n));
  }
  if (e.length === 0) return i("the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher");
  let s = e[0];
  if (s === process.execPath || s === w(n5(), "claude")) return i(`launcher \`${s}\` is Claude Code's own launch path \u2014 point ${qT} at your launcher, not at claude`);
  if (!d(s)) return i("the launcher must be an absolute path, not a bare name resolved via PATH");
  try {
    let n = m(s);
    if (!n.isFile() || (n.mode & 73) === 0) return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return {
    argv: e,
    error: null,
    platformIgnored: !1,
    record: e.map(n => /[\s"]/.test(n) ? _(n) : n).join(" ")
  };
}

function i(r) {
  return {
    argv: [],
    error: `${qT}: ${r}`,
    platformIgnored: !1,
    record: ""
  };
}

var P = ";|&$()`<>";

function y(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let o;
    try {
      o = Y(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(o) || !o.every(a => typeof a === "string")) throw Error("JSON form must be an array of strings");
    if (o.length > 0 && o.some(a => a === "")) {
      if (o.every(a => a === "")) return [];
      throw Error("the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for");
    }
    return o;
  }
  let s = [], n = "", u = !1, l = !1;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (l) {
      if (a === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\")) n += e[++o]; else if (a === '"') l = !1; else n += a;
      continue;
    }
    if (a === '"') {
      l = !0, u = !0;
      continue;
    }
    if (/\s/.test(a)) {
      if (u) s.push(n), n = "", u = !1;
      continue;
    }
    if (P.includes(a)) throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command");
    n += a, u = !0;
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(n);
  if (s.length > 0 && s.some(o => o === "")) {
    if (s.every(o => o === "")) return [];
    throw Error('the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for');
  }
  return s;
}

export { qT, X6e, njn, nf, bf, O0, Kbo, qbo, J6e, D1 };
