// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { pe } from "./chunk-hwdwjvh8.js";

import { zr, yD, c0r } from "./chunk-b0z4bv3v.js";

import { Fw } from "./chunk-x5881pc6.js";

import { a } from "./chunk-j016gcgm.js";

import { dln, SMr, $qn, MMo, cln, e$t } from "./chunk-zscnwzv2.js";

import { dt } from "./chunk-dd98x6x7.js";

import { sn } from "./chunk-642shbw5.js";

function O8e(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}

var p = 4e3;

function v(e, n = 5) {
  let t = [], o;
  for (let R of e.slice(0, p).split(`\n`)) {
    let i = R.trim();
    if (!i.startsWith("at ")) continue;
    let d = i.slice(3), s = d.indexOf(" (");
    if (o === void 0) {
      let f = s !== -1 ? d.slice(s + 2, -1) : d;
      if (/^(?:node|bun|internal):/.test(f)) o = f; else {
        let E = f.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (E) o = E[1];
      }
    }
    let u = s !== -1 ? d.slice(0, s) : d;
    if (u = u.replace(/^async\s+/, "").replace(/^new\s+/, ""), u.includes("/") || u.includes("\\") || /:\d/.test(u)) continue;
    if (u) t.push(u);
    if (t.length >= n) break;
  }
  return {
    names: t,
    topFrame: o
  };
}

function N(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}

function dp(e) {
  try {
    let n = N(e instanceof Error ? e.message : e), t = {
      error_message_hash: sn(O8e(n))
    }, o = zr(e);
    if (o !== void 0) t.error_code = o;
    if (!(e instanceof Error)) return t;
    let R = yD(e.constructor?.name);
    if (R !== void 0) t.error_constructor = R;
    let i = e.stack;
    if (typeof i !== "string") return t;
    let d = {
      name: e.name,
      message: e.message,
      stack: i
    }, s = e$t(d), u = s.length < i.length && i.endsWith(s), {names: f, topFrame: E} = v(s);
    if (f.length > 0) t.error_stack_hash = sn(f.join("|"));
    let h = i.length - s.length, g = i.slice(0, h + p), [l] = u ? cln({
      ...d,
      stack: g
    }, 1) : [];
    if (l !== void 0) {
      let m = MMo(l) ? l.file : $qn(l) ? SMr(l.file) : void 0, _ = c0r(m === void 0 ? dln : `${m}:${l.line}:${l.column}`), b = m !== void 0 && c0r(E ?? "") !== _;
      if (_ !== void 0 && !b) t.error_top_frame = _;
    }
    return t;
  } catch {
    return {};
  }
}

var M = "tengu_ax_screen_reader";

function uHs(e) {
  return r().swapRemoteGateReader(e);
}

class S {
  #n;
  #a;
  #o;
  #u;
  #t=null;
  #i=null;
  #c=!1;
  #e=[];
  #r=!1;
  #s=0;
  swapRemoteGateReader(e) {
    let n = this.#t;
    return this.#t = e, n;
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, n;
    if (Fw("--ax-screen-reader")) e = !0, n = "flag"; else {
      let o = a.CLAUDE_AX_SCREEN_READER;
      if (o !== void 0) e = o, n = "env"; else e = dt().axScreenReader === !0, n = "settings";
    }
    if (!e) return this.#n = !1;
    let t = this.#t?.(M, !0) ?? !0;
    return this.#a = t ? n : void 0, this.#n = t;
  }
  activationSource() {
    return this.isEnabled() ? this.#a : void 0;
  }
  isArrowNavEnabled() {
    if (this.#o === void 0) this.#o = this.#t?.(C, !1) ?? !1;
    return this.#o;
  }
  isSuggestionNavEnabled() {
    {
      if (!this.isEnabled()) return !1;
      let e = !1;
      return this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e, this.#u;
    }
    return !1;
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e;
  }
  endStartupQuiet() {
    this.#c = !0;
  }
  startupQuietOpenedAtMs() {
    return this.#c ? null : this.#i;
  }
  queueAnnouncement(e, n = !1) {
    if (this.#e.push(e), n) this.#r = !0;
    if (this.#e.length > A) this.#e.splice(0, this.#e.length - A);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  takeHoldRequest() {
    let e = this.#r;
    return this.#r = !1, e;
  }
  startHold(e) {
    this.#s = e;
  }
  endHold() {
    this.#s = 0, this.#r = !1;
  }
  holdActive(e) {
    return e < this.#s;
  }
  reset() {
    this.#n = void 0, this.#a = void 0, this.#o = void 0, this.#u = void 0, this.#i = null, 
    this.#c = !1, this.#e.length = 0, this.#r = !1, this.#s = 0;
  }
}

var x = new K(() => new S);

function r() {
  return x.of(B().host);
}

var C = "tengu_ax_sr_arrow_nav";

function nft() {
  return r().isArrowNavEnabled();
}

function v2n() {
  return r().isSuggestionNavEnabled();
}

function Am() {
  return r().isEnabled();
}

function pHs() {
  {
    let e = r();
    if (e.isEnabled()) {
      let n = e.activationSource();
      return n ? `[Screen Reader Mode: on via ${n}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}

var D = 3e3, T = 6e5;

function fHs() {
  r().markAnnouncementWritten(Date.now());
}

function Pxr() {
  r().endStartupQuiet();
}

function mHs() {
  {
    let e = r().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let n = Math.min(a.CLAUDE_AX_STARTUP_QUIET_MS ?? D, T), t = e + n - Date.now();
    return t > 0 ? t : 0;
  }
  return 0;
}

var w = 0, X = 5e3;

function gHs() {
  return Math.min(a.CLAUDE_AX_PREPARK_MS ?? w, X);
}

function hHs() {
  return a.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? !1;
}

function N9() {
  if (r().isEnabled()) return {
    CLAUDE_AX_SCREEN_READER: "1"
  };
  return {};
}

function yHs() {
  {
    let e = r();
    if (e.isEnabled()) return {
      screenReaderMode: !0,
      screenReaderActivationSource: pe(e.activationSource())
    };
  }
  return {};
}

var A = 16;

function HK(e, n) {
  r().queueAnnouncement(e, n?.hold === !0);
}

function _Hs() {
  if (r().takeHoldRequest()) return Math.min(a.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1e3, 1e4);
  return 0;
}

function bHs(e) {
  r().startHold(Date.now() + e);
}

function M8e() {
  r().endHold();
}

function SHs() {
  return r().holdActive(Date.now());
}

function wHs() {
  return r().drainAnnouncements();
}

export { O8e, dp, uHs, nft, v2n, Am, pHs, fHs, Pxr, mHs, gHs, hHs, N9, yHs, HK, _Hs, bHs, M8e, SHs, wHs };
