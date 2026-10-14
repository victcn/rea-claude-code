// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { ic, pD } from "./chunk-3pqddg8f.js";

import { In, k, Rr, Tl } from "./chunk-xywp7esx.js";

import { Kc } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { vA, t } from "./chunk-kawq2919.js";

import { Mj } from "./chunk-5brm0azz.js";

import { qRo, f1e } from "./chunk-dd98x6x7.js";

import { Oe, gi } from "./chunk-cjt10y7b.js";

import { pU, fU } from "./chunk-s2t7g8m9.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { On } from "./chunk-3kd8r7rn.js";

var d = "force";

function l() {
  try {
    if (fU()) return !1;
    if (Oe() !== "firstParty") return !1;
    let e = f1e("ENABLE_TOOL_SEARCH");
    if (e === d) return !0;
    if (qRo() !== d) return !1;
    if (Le(f1e("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) return !1;
    return e === void 0 || !_(e);
  } catch (e) {
    return t(`isToolSearchForceOverride: settings read failed: ${e}`, {
      level: "error"
    }), !1;
  }
}

function _(e) {
  if (e.startsWith("auto:")) {
    let r = Kc(e.slice(5));
    return !isNaN(r) && r >= 100;
  }
  return ys(e);
}

function tZt() {
  return pU() && !l();
}

function Swr(e, r) {
  let o = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e), n = o?.[1], u = o?.[2];
  if (!n || !u) return !1;
  let i = r.find(([s]) => s === n)?.[1];
  if (!i) return !1;
  let c = u.split("-").map(Number);
  for (let s = 0; s < Math.max(c.length, i.length); s++) {
    let f = (c[s] ?? 0) - (i[s] ?? 0);
    if (f !== 0) return f > 0;
  }
  return !0;
}

function $go(e) {
  if (!e.startsWith("auto:")) return null;
  let r = e.slice(5), o = Kc(r);
  if (isNaN(o)) return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`), 
  null;
  return Math.max(0, Math.min(100, o));
}

function g(e) {
  if (!e) return !1;
  return e === "auto" || e.startsWith("auto:");
}

function MSe() {
  if (tZt()) return "standard";
  if (l()) return "tst";
  let e = process.env.ENABLE_TOOL_SEARCH, r = e ? $go(e) : null;
  if (r === 0) return "tst";
  if (r === 100) return "standard";
  if (g(e)) return "tst-auto";
  if (Le(e)) return "tst";
  if (ys(e)) return "standard";
  return "tst";
}

var E = [ "claude-3-opus", "claude-3-sonnet", "claude-3-haiku", "claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-7-sonnet" ], S = [ [ "opus", [ 4, 5 ] ], [ "sonnet", [ 4, 5 ] ], [ "haiku", [ 4, 5 ] ] ];

function nse(e) {
  if (Oe() !== "vertex") return !1;
  let r = On(e).replace(/[@-]\d{8}$/, "");
  if (/^claude-3(-|$)/.test(r)) return !0;
  return /^claude-(opus|sonnet|haiku)-\d/.test(r) && !Swr(r, S);
}

function h() {
  try {
    let e = k("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e;
  } catch {}
  return E;
}

var p = [];

function y(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let r = e, o = ic(), n = o !== void 0 ? o : pD();
  if (typeof n === "string") {
    let u = n.toLowerCase();
    for (let i of Object.keys(r)) if (i !== "*" && i.length > 0 && u.includes(i.toLowerCase())) return r[i];
  }
  return r["*"];
}

function wO() {
  let e = new Set;
  try {
    let r = y(k("tengu_non_deferrable_builtins", null));
    if (Array.isArray(r)) {
      for (let o of r) if (typeof o === "string") e.add(o);
    }
  } catch {}
  try {
    let r = Tl()?.non_deferrable_builtins;
    if (Array.isArray(r)) {
      for (let o of r) if (typeof o === "string") e.add(o);
    }
  } catch {}
  if (e.size === 0) return p;
  return [ ...e ];
}

function Wws() {
  return Rr("tengu_shiny_stardust", !1);
}

function m() {
  let e = Rr("tengu_quirky_kazoo", p);
  return typeof e === "object" && e !== null ? e : {};
}

function zws() {
  let e = m();
  return Array.isArray(e) ? e : Object.keys(e);
}

function Gws(e) {
  let r = m(), o = Array.isArray(r) ? void 0 : r[e];
  return typeof o === "string" ? vA(o.replace(/\s+/g, " ").trim()) || void 0 : void 0;
}

var A = "tengu_drifting_heron";

function Vws() {
  return Rr(A, !0) !== !1;
}

function rse(e) {
  let r = e.toLowerCase(), o = h();
  for (let n of o) if (r.includes(n.toLowerCase())) return !1;
  return !0;
}

function gy() {
  let e = MSe();
  if (e === "standard") {
    if (Ji().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=false`);
    return !1;
  }
  if (!a.ENABLE_TOOL_SEARCH && !l() && Oe() === "firstParty" && !gi()) {
    if (Ji().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${a.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`);
    return !1;
  }
  if (Ji().claim("tool_search_optimistic_decision")) t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=true`);
  return !0;
}

function wwr() {
  return k("tengu_surface_failed_mcp_servers", !0);
}

function hdt() {
  return k("tengu_sorted_otter", !1);
}

function Kws() {
  let {value: e, source: r} = In("tengu_precious_koala", "off"), o = typeof e === "string" ? e.trim().toLowerCase() : e, n = Mj();
  return {
    inForce: o === "everywhere" || o === "hosted" && n,
    flagSource: r,
    coworkSurface: n
  };
}

export { tZt, Swr, $go, MSe, nse, wO, Wws, zws, Gws, Vws, rse, gy, wwr, hdt, Kws };
