// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { W } from "./chunk-b0z4bv3v.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { _, Y, fM, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { ls, iL } from "./chunk-30n0xq4e.js";

import { p } from "./chunk-jkzenvsk.js";

import { lu } from "./chunk-sqb9meyh.js";

import { a } from "./chunk-j016gcgm.js";

import { Xa } from "./chunk-3kb22va7.js";

import { ol } from "./chunk-z09tf6qf.js";

import { o, v, T, u, U } from "./chunk-cvcg6n1z.js";

import { rm as P } from "fs/promises";

import { join as y } from "path";

var w = ".prompt-stash", x = 262144, O = 256, z = p(() => u({
  text: o(),
  cursorOffset: v().int().nonnegative(),
  pasteIds: T(v().int().nonnegative()).max(O),
  launchWarning: u({
    type: U([ "deep-link", "prefill" ]),
    prefillLength: v().int().nonnegative()
  }).optional()
}));

function D(e) {
  return _({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents).filter(r => !r.inline).slice(0, O).map(r => r.id),
    launchWarning: e.launchWarning
  });
}

function _Wr(e) {
  let r = [], s = "";
  for (let i of e.replace(/\r\n|\r/g, `\n`).replaceAll("\t", "    ").split(/\u200C+/)) {
    let n = fM(i, "", {
      keepNewlines: !0
    });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("\u200c");
    r.push(n), s = n;
  }
  return r.join("");
}

async function fHe(e, r) {
  await P(e, {
    force: !0
  });
  let s = await iL(e, r, 384);
  try {
    await ls(s, e);
  } catch (i) {
    throw await P(s, {
      force: !0
    }).catch(() => {}), i;
  }
}

function E(e) {
  let r;
  try {
    r = Y(e);
  } catch {
    return null;
  }
  let s = z().safeParse(r);
  if (!s.success) return null;
  let {cursorOffset: i, pasteIds: n, launchWarning: h} = s.data, d = _Wr(s.data.text), j = new Set(n), l = "", S = 0;
  for (let c of lu(d)) if (j.has(c.id)) l += d.slice(S, c.index), S = c.index + c.match.length;
  if (l += d.slice(S), l.trim() === "") return null;
  return {
    text: l,
    mode: "prompt",
    cursorOffset: ne(l, Math.min(i, l.length)).length,
    pastedContents: {},
    launchWarning: h
  };
}

async function I(e, r) {
  let s = y(e, w), i = r === null ? "" : D(r);
  if (Buffer.byteLength(i) > x) t("[bg] prompt stash too large to persist; kept in memory only", {
    level: "warn"
  }), i = "";
  try {
    let n = await P(s, {
      force: !0
    }).then(() => !0, h => (ol(h), !1));
    if (i === "" && n) return;
    await fHe(s, i);
  } catch (n) {
    if (!W(n)) ol(n);
  }
}

async function k(e) {
  let r = await Xa(y(e, w), x);
  if (!r) return null;
  let s = E(r);
  if (s === null) t("[bg] persisted prompt stash unreadable or empty", {
    level: "warn"
  }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return s;
}

class bWr {
  #t;
  #e;
  #r=Promise.resolve();
  #s=!1;
  #o;
  constructor(e) {
    this.#t = e, this.#e = b(e.getState().stash), this.#o = e.subscribe(this.#n);
  }
  #n=() => {
    let e = b(this.#t.getState().stash);
    if (e === this.#e) return;
    this.#e = e;
    let r = a.CLAUDE_JOB_DIR;
    if (!r) return;
    this.#r = this.#r.then(() => I(r, e));
  };
  async restore() {
    let e = a.CLAUDE_JOB_DIR;
    if (this.#s || !e) return !1;
    this.#s = !0;
    let r = await k(e);
    if (r === null) return !1;
    if (this.#t.getState().stash !== null) return f("bg_prompt_stash_restore", "slot_taken"), 
    !1;
    return this.#e = r, this.#t.setState(s => ({
      ...s,
      stash: r
    })), g("bg_prompt_stash_restore"), !0;
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#o();
  }
}

function b(e) {
  return e?.cameBack === !0 ? null : e;
}

export { _Wr, fHe, bWr };
