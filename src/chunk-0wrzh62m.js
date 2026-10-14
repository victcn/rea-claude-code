// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { sc } from "./chunk-5wbhf1bk.js";

import { y7 } from "./chunk-sqb9meyh.js";

import { Nxn } from "./chunk-84yp45y8.js";

import { INn } from "./chunk-7g0zqzby.js";

import { posix as r } from "path";

var D = r.dirname(y7), l = "/mnt/user-data/working", F6r = r.join(l, y7), iVe = 32, Ine = 524288, kKt = 2097152, U6r = 200, E = 237, a = 4, XJ = "CLAUDE.md", WTe = "rules", aVe = "output-styles", Kvt = "settings.json", e = ".md", p = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u, c = /^\p{M}/u;

function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= E && !t.startsWith(".") && !INn(t) && !t.includes("\\") && !p.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}

function u(t) {
  return t.length > e.length && t.endsWith(e);
}

function TKt(t) {
  return Nxn(t);
}

function M(t) {
  return u(TKt(t));
}

function zTe(t) {
  if (t.length > U6r || !sc(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === XJ ? "claude_md" : null;
  let s = o.slice(0, -1), _ = o.at(-1) ?? "";
  if (!u(_) || s.some(M)) return null;
  if (o.length > a) return null;
  return i === WTe ? "rule" : i === aVe ? "output_style" : null;
}

function qvt(t) {
  return zTe(t) !== null;
}

function Wtt(t) {
  let n = zTe(t);
  return n === null ? null : {
    destination: t,
    kind: n
  };
}

export { F6r, iVe, Ine, kKt, U6r, XJ, WTe, aVe, Kvt, TKt, zTe, qvt, Wtt };
