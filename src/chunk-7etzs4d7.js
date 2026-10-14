// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ge } from "./chunk-07cck4g7.js";

import { ie, Hee } from "./chunk-yxennhe9.js";

import { NT, fDn, X4e, Lit } from "./chunk-n4eyr3t2.js";

function Vb(r, o, t) {
  let n = fDn(NT), e = X4e(r, o, n);
  if (e === void 0) {
    let i = `${r}:${o}`, s = NT.loggedShortcutFallbacks;
    if (!s.has(i)) s.add(i), Lit(r, o, t, "action_not_found");
    return t;
  }
  return e === null ? "" : e;
}

function h() {
  let r = Vb("app:toggleTranscript", "Global", "ctrl+o");
  return ge.dim(`(${r} to expand)`);
}

var d = 3, u = 10;

function b(r, o) {
  let t = r.split(`\n`), n = [];
  for (let i of t) {
    let s = ie(i);
    if (s <= o) n.push(i.trimEnd()); else {
      let a = 0;
      while (a < s) {
        let c = Bun.sliceAnsi(i, a, a + o);
        n.push(c.trimEnd()), a += o;
      }
    }
  }
  let e = n.length - d;
  if (e === 1) return {
    aboveTheFold: n.slice(0, d + 1).join(`\n`).trimEnd(),
    remainingLines: 0
  };
  return {
    aboveTheFold: n.slice(0, d).join(`\n`).trimEnd(),
    remainingLines: Math.max(0, e)
  };
}

function joo(r, o, t = !1) {
  let n = r.trimEnd();
  if (!n) return "";
  let e = Math.max(o - u, 10), i = d * e * 4, s = n.length > i, a = s ? n.slice(0, i) : n, {aboveTheFold: c, remainingLines: l} = b(a, e), m = l;
  if (s) {
    let g = 0, f = -1;
    for (;;) {
      if (f = n.indexOf(`\n`, f + 1), f === -1) break;
      g++;
    }
    let p = Math.max(g + 1, Math.ceil(n.length / e));
    m = Math.max(l, p - d);
  }
  return [ c, m > 0 ? ge.dim(Hee(m) + (t ? "" : ` ${h()}`)) : "" ].filter(Boolean).join(`\n`);
}

function s0(r, o) {
  if (typeof r !== "string") return !1;
  let t = r.trimEnd(), n = 0, e = 0;
  for (let l = 0; l <= d; l++) {
    if (n = t.indexOf(`\n`, n), n === -1) break;
    e++, n++;
  }
  if (n !== -1 && n < t.length) return !0;
  if (o === void 0) return !1;
  let i = Math.max(o - u, 10), s = d + 1, a = d * i * 4;
  if (t.length > a) return !0;
  if (e === 0) {
    let l = s * i;
    if (t.length <= l) return !1;
    return ie(t) > l;
  }
  let c = 0;
  for (let l of t.split(`\n`)) if (c += Math.max(1, Math.ceil(ie(l) / i)), c > s) return !0;
  return !1;
}

export { Vb, joo, s0 };
