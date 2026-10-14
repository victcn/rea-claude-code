// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { jHn, t1, V9t } from "./chunk-2kzvcfy0.js";

import { wB, d5r, c5r, WI } from "./chunk-k48604rx.js";

function Bhe() {
  return wB().cachedSystemTheme() ?? s() ?? "dark";
}

function SXo() {
  return wB().cachedSystemTheme() ?? s();
}

function jEn() {
  return wB().cachedSystemTheme();
}

function GVt(e) {
  wB().setSystemTheme(e);
}

function gvt(e) {
  return wB().onSystemThemeChange(e);
}

function VVt(e) {
  if (e === "auto") return Bhe();
  if (jHn(e)) return e;
  let t = WI(e);
  return t && d5r(t) || "dark";
}

function G2e(e) {
  let t = t1(VVt(e)), n = WI(e);
  if (!n) return t;
  return V9t(t, c5r(n)?.overrides);
}

function wXo(e) {
  let t = i(e);
  if (!t) return;
  return .2126 * t.r + .7152 * t.g + .0722 * t.b > .5 ? "light" : "dark";
}

function i(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return {
    r: m(t[1]),
    g: m(t[2]),
    b: m(t[3])
  };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1], o = r.length / 3;
    return {
      r: m(r.slice(0, o)),
      g: m(r.slice(o, 2 * o)),
      b: m(r.slice(2 * o))
    };
  }
  return;
}

function m(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}

function s() {
  let e = a.COLORFGBG;
  if (!e) return;
  let n = e.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}

export { Bhe, SXo, jEn, GVt, gvt, VVt, G2e, wXo };
