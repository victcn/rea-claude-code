// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { lo, Ln, Yp } from "./chunk-ddr690nj.js";

import { homedir as R } from "os";

import { basename as D, dirname as O, join as u, resolve as t } from "path";

var l = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;

function N(e) {
  return !!e && l.test(e);
}

function zX(e) {
  return N(e) ? e : void 0;
}

var m = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/, E = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/, c = /[_,\u00A0\u202F ]/g;

function y$o(e) {
  if (e.length <= 32) {
    if (m.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (E.test(e)) return parseInt(e.replace(c, ""), 10);
  }
  return;
}

function Kc(e) {
  let n = String(e).trim();
  return y$o(n) ?? parseInt(n, 10);
}

function Wj(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && E.test(r) ? parseInt(r.replace(c, ""), 10) : NaN;
}

var d = [ [ "claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET" ], [ "claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET" ], [ "claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET" ], [ "claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET" ], [ "claude-sonnet-5-5", "VERTEX_REGION_CLAUDE_5_5_SONNET" ], [ "claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU" ], [ "claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1" ], [ "claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5" ], [ "claude-haiku-5-5", "VERTEX_REGION_CLAUDE_HAIKU_5_5" ], [ "claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS" ], [ "claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS" ], [ "claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS" ], [ "claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS" ], [ "claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS" ], [ "claude-opus-5-5", "VERTEX_REGION_CLAUDE_5_5_OPUS" ], [ "claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET" ], [ "claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET" ], [ "claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5" ], [ "claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS" ], [ "claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS" ] ];

function o() {
  return process.env.CLAUDE_CONFIG_DIR;
}

function AYn(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? o() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0;
}

function e0r(e) {
  return Le(process.env[e]);
}

var Ee = lo(() => (o() ?? u(R(), ".claude")).normalize("NFC"), o);

function ste(e) {
  return t(Ee()) === t(e);
}

function zJe() {
  return u(Ee(), "teams");
}

function p() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}

var A = /^[A-Za-z0-9_-]{1,64}$/, C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

function _$o(e) {
  if (!e || !A.test(e) || C.test(e)) return;
  return e;
}

function I() {
  return `${o() ?? ""}\0${p() ?? ""}`;
}

var _cn = lo(() => o() ? _$o(p()) : void 0, I);

function ite(e) {
  let n = Ee();
  if (t(e) === t(n)) return !0;
  return _(e) === _(n);
}

function _(e) {
  let n = t(e), r = O(n), s = Yp(r) ?? r;
  return Ln(u(s, D(n)));
}

function uFt(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e);
}

function t0r(e, n) {
  if (e === void 0) return n;
  let r = Kc(e);
  return Number.isNaN(r) ? n : r;
}

function QUs(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = Wj(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}

function ZUs(e) {
  let n = Number(e);
  return isNaN(n) || n <= 0 ? void 0 : n;
}

function i(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}

function gr() {
  return Le(process.env.CLAUDE_CODE_SIMPLE) || i("--bare");
}

function Pr() {
  return Le(process.env.CLAUDE_CODE_SAFE_MODE) || i("--safe-mode");
}

function ate() {
  return Le(process.env.CLAUDE_CODE_RESTRICTED);
}

function f(e) {
  return process.env.CLAUDE_CODE_SESSION_KIND === "bg" ? "run /stop, then claude --resume from your shell" : `restart without ${e}`;
}

function Jg() {
  return i("--safe-mode") ? f("--safe-mode") : "unset CLAUDE_CODE_SAFE_MODE";
}

function vht() {
  return i("--bare") ? f("--bare") : "unset CLAUDE_CODE_SIMPLE";
}

function bcn() {
  return Le(process.env.CLAUDE_CODE_SUPERVISED);
}

function eBs(e) {
  let n = {};
  if (e) for (let r of e) {
    let [s, ...a] = r.split("=");
    if (!s || a.length === 0) throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
    n[s] = a.join("=");
  }
  return n;
}

function pFt() {
  return zX(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}

function Eht(e) {
  switch (e) {
   case "global":
    return "https://aiplatform.googleapis.com";

   case "us":
   case "eu":
    return `https://aiplatform.${e}.rep.googleapis.com`;

   default:
    return `https://${e}-aiplatform.googleapis.com`;
  }
}

function CYn() {
  return Le(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}

function tw() {
  return !1;
}

function mD() {
  return !1;
}

function tBs() {
  return {
    namespace: void 0,
    cluster: void 0
  };
}

function jme(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return zX(process.env[n[1]]?.trim()) || pFt();
  }
  return pFt();
}

export { zX, y$o, Kc, Wj, AYn, e0r, Ee, ste, zJe, _$o, _cn, ite, uFt, t0r, QUs, ZUs, gr, Pr, ate, Jg, vht, bcn, eBs, pFt, Eht, CYn, tw, mD, tBs, jme };
