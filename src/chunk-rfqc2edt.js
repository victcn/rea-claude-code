// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lg } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { bXe } from "./chunk-9yajep3y.js";

import { vie } from "./chunk-n3526wzr.js";

var Gu = "MEMORY.md", qN = 200, Yse = 25e3, xAr = 4 * Yse, fPe = 200, Xse = 4096;

function Nut(t) {
  let r = t.trim();
  return {
    trimmed: r,
    lineCount: Nt(r, `\n`) + 1,
    byteCount: r.length
  };
}

function MO(t) {
  return t.normalize("NFC").toLowerCase();
}

function Hz(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some(e => e.startsWith(".")) ? "" : n;
}

var $Ue = "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).", PAr = "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";

function tU(t) {
  let r = "";
  for (let n of bXe(lg(t.replace(/\r\n?|[\u2028\u2029]/g, `\n`)))) {
    let e = n.codePointAt(0), o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
    r += o ? "\ufffd" : n;
  }
  return r;
}

function Jse(t) {
  return vie(s(t));
}

function Gxs(t) {
  return $ut(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}

function vnn(t) {
  return Jse(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}

var Ivo = new Set([ 8204, 8205, 65038, 65039 ]), i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;

function $ut(t) {
  let r = t.codePointAt(0);
  if (Ivo.has(r) || r === 9 || r === 10 || r === 13) return !1;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}

function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `\n`)) {
    if ($ut(n)) continue;
    r += n;
  }
  return r;
}

export { Gu, qN, Yse, xAr, fPe, Xse, Nut, MO, Hz, $Ue, PAr, tU, Jse, Gxs, vnn, Ivo, $ut };
