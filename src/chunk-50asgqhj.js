// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s, n, wu, R6, ti } from "./chunk-3vw306fv.js";

import { dB } from "./chunk-arjjbxqd.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, Zt, R, y, F } from "./chunk-cpyd3eya.js";

F();

F();

F();

function T6({children: g, lock: t = "always", restartKey: o}) {
  let [c, {isVisible: B}, d] = R6(), {rows: i, columns: a} = Te(), f = R(null), [l, m] = y({
    minHeight: 0,
    rows: i,
    columns: a,
    restartKey: o
  }), p = t === "always" && (l.rows !== i || l.columns !== a || l.restartKey !== o), N = (t === "always" || !B) && !p, x = R(0), P = Math.max(l.minHeight, x.current), D = Ae(dB) !== null;
  return Zt(() => {
    if (!f.current) return;
    let {height: L} = ti(f.current), h = Math.min(L, i);
    if (p) {
      m({
        minHeight: h,
        rows: i,
        columns: a,
        restartKey: o
      });
      return;
    }
    if (L > P) {
      if (D && t === "offscreen" && !N && h >= l.minHeight && d()) {
        x.current = h;
        return;
      }
      x.current = 0, m(b => b.minHeight === h ? b : {
        ...b,
        minHeight: h
      });
    }
  }), e(s, {
    minHeight: N ? P : void 0,
    ref: c,
    children: e(s, {
      ref: f,
      flexDirection: "column",
      children: g
    })
  });
}

function Be(g) {
  let i = w(11), {children: t, height: o, screenReaderLabel: c} = g;
  if (Ae(u)) {
    return t;
  }
  const d = c === void 0;
  let a;
  if (i[0] !== c || i[1] !== d) a = e(wu, {
    fromLeftEdge: !0,
    flexShrink: 0,
    children: r(n, {
      "aria-hidden": d,
      "aria-label": c,
      dimColor: !0,
      children: [ "  ", "\u23bf \xa0" ]
    })
  }), i[0] = c, i[1] = d, i[2] = a; else a = i[2];
  let f;
  if (i[3] !== t) f = e(s, {
    flexShrink: 1,
    flexGrow: 1,
    children: t
  }), i[3] = t, i[4] = f; else f = i[4];
  let l;
  if (i[5] !== o || i[6] !== a || i[7] !== f) l = e(H, {
    children: r(s, {
      flexDirection: "row",
      height: o,
      overflowY: "hidden",
      children: [ a, f ]
    })
  }), i[5] = o, i[6] = a, i[7] = f, i[8] = l; else l = i[8];
  let m = l;
  if (o !== void 0) {
    return m;
  }
  let p;
  if (i[9] !== m) p = e(T6, {
    lock: "offscreen",
    children: m
  }), i[9] = m, i[10] = p; else p = i[10];
  return p;
}

var u = Kt(!1);

function v7e() {
  return Ae(u);
}

function H(g) {
  let o = w(2), {children: t} = g, c;
  if (o[0] !== t) c = e(u.Provider, {
    value: !0,
    children: t
  }), o[0] = t, o[1] = c; else c = o[1];
  return c;
}

export { T6, Be, v7e };
