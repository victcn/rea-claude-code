// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { g, f } from "./chunk-3ykz5st8.js";

import { Zsr, GZo, kye } from "./chunk-b154cm67.js";

import { bft } from "./chunk-n3526wzr.js";

import { n3 } from "./chunk-a38pss7p.js";

import { HAe, Krt, a_e, Q0e, oR } from "./chunk-84yp45y8.js";

import { qDn, Ihr, qlo, ugs, pgs, fgs, mgs } from "./chunk-sqb9meyh.js";

import { D } from "./chunk-hmqkrrtz.js";

import { O4n, Kln } from "./chunk-pnn4xyvt.js";

function _(p, c, u) {
  let s = c.flat(), m = qDn(p), d = Ihr(p, s, m), o = new Set(d.map(e => p.slice(e.from, e.to))), l = e => {
    let i = m(e), r = i(0);
    for (let a of d) {
      if (r !== -1 && r < a.from) r = i(a.from);
      if (r === -1) return !1;
      if (r + e.length <= a.to) return !0;
    }
    return !1;
  };
  if (c.some(e => !e.some(i => o.has(i)) && !e.some(l))) f("sdk_pasted_content", "inline_paste_not_found");
  let P = HAe();
  return mgs(p, fgs(d, pgs(p, qlo([ ...d, ...ugs(p, s, m) ]), u)), e => ({
    opener: O4n(P),
    body: a_e(e),
    closer: Kln(P)
  }), a_e);
}

function pGe(p, c, u) {
  let s = p ?? "", {texts: m, problem: d} = Zsr(c), o = GZo(u);
  if (d !== void 0) f("sdk_pasted_content", d);
  if (o.problem !== void 0) f("sdk_pasted_content", o.problem);
  if (m.length === 0 && o.texts.length === 0) return s;
  let l = oR();
  if (d === void 0 && o.problem === void 0) g("sdk_pasted_content", {
    tagged: l,
    ...o.texts.length > 0 && {
      inline: !0
    }
  });
  if (m.length === 0 && !l) return s;
  let P = o.texts.map(t => t.trim()).filter(t => t.length >= Krt).map(t => D([ t, kye(`x${t}`).slice(1).trim(), kye(`${t}x`).slice(0, -1).trim(), kye(t).trim() ].flatMap(n => [ n, bft(n), n3(n) ])).filter(n => n.length >= Krt)), e = t => !l ? t : Array.isArray(u) ? _(t, P, o.texts.map(n => n.trim()).filter(n => n !== "" && n.length < Krt)) : a_e(t), i = m.map(t => l ? Q0e(t) : `\n\n${t}`).join("");
  if (typeof s === "string") return n3(e(s) + i);
  let r = s.findLastIndex(t => t.type === "text"), a = s.map((t, n) => t.type !== "text" ? t : n === r ? {
    ...t,
    text: e(t.text)
  } : l ? {
    ...t,
    text: a_e(t.text)
  } : t), C = a[r];
  return n3(C?.type !== "text" ? i === "" ? a : [ ...a, {
    type: "text",
    text: i
  } ] : [ ...a.slice(0, r), {
    ...C,
    text: C.text + i
  }, ...a.slice(r + 1) ]);
}

export { pGe };
