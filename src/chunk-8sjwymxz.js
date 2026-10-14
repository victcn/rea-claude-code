// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Te } from "./chunk-dmfz0ptg.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ie } from "./chunk-yxennhe9.js";

import { s, n } from "./chunk-3vw306fv.js";

import { hc } from "./chunk-fj1a15yf.js";

import { II } from "./chunk-gh6ycgc0.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Zy, dc, _m, F } from "./chunk-cpyd3eya.js";

F();

function re(ce) {
  return Zy.toArray(ce.props.children);
}

function le(de) {
  return de.header !== void 0;
}

function ae(me) {
  return me.header;
}

var k = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
}, E = 2, qyt = 12;

function I(l) {
  if (typeof l === "string" || typeof l === "number") return !0;
  if (_m(l) && l.type === dc) return !0;
  return !1;
}

function H(l, o, h) {
  if (!I(l)) return l;
  return e(n, {
    dimColor: o.dim && !h,
    bold: o.bold || h,
    children: l
  });
}

function G(l) {
  return ie(II(l));
}

function M(l, o, h, b) {
  let y = l.length, c = l.map((t, i) => {
    let f = h ? G(t.header) : 0;
    for (let d of o) f = Math.max(f, G(d[i]));
    return f;
  }), p = Array(y), a = [];
  for (let t = 0; t < y; t++) {
    let i = l[t].width;
    if (i === "fill") p[t] = 0; else if (typeof i === "number") p[t] = i; else if (i && "ratio" in i && i.ratio !== void 0) a.push(t), 
    p[t] = 0; else if (i) p[t] = hc(c[t], i.min ?? 0, i.max ?? 1 / 0); else p[t] = c[t];
  }
  if (a.length > 0) {
    let t = p.reduce((d, m) => d + m, 0), i = Math.max(0, b - E * (y - 1) - t), f = a.reduce((d, m) => d + (l[m].width.ratio ?? 0), 0);
    for (let d of a) {
      let m = l[d].width, u = f > 0 ? Math.floor(i * (m.ratio ?? 0) / f) : 0;
      p[d] = hc(u, m.min ?? 1, m.max ?? 1 / 0);
    }
  }
  return p;
}

function W(l) {
  let i = w(16), {cells: o, columns: h, widths: b, isHeader: y} = l, c = h.length - 1, p = h[c]?.width, a = p === "fill" ? qyt : p === void 0 ? Math.min(qyt, b[c] ?? 0) : 0;
  const t = a > 0 ? "wrap" : "nowrap";
  let f;
  if (i[0] !== o || i[1] !== h || i[2] !== a || i[3] !== y || i[4] !== c || i[5] !== b) {
    let d;
    if (i[7] !== o || i[8] !== a || i[9] !== y || i[10] !== c || i[11] !== b) d = (m, u) => m.width === "fill" ? e(s, {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      minWidth: u === c ? a : 1,
      justifyContent: k[m.align ?? "start"],
      children: H(o[u], m, y)
    }, u) : e(s, {
      width: b[u] || void 0,
      flexShrink: u === c && m.width === void 0 ? 1 : 0,
      flexBasis: u === c && a > 0 ? a : void 0,
      flexGrow: u === c && a > 0 ? 1 : 0,
      maxWidth: u === c && a > 0 ? b[u] : void 0,
      justifyContent: k[m.align ?? "start"],
      children: H(o[u], m, y)
    }, u), i[7] = o, i[8] = a, i[9] = y, i[10] = c, i[11] = b, i[12] = d; else d = i[12];
    f = h.map(d);
    i[0] = o, i[1] = h, i[2] = a, i[3] = y, i[4] = c, i[5] = b, i[6] = f;
  } else f = i[6];
  let d;
  if (i[13] !== t || i[14] !== f) d = e(s, {
    flexDirection: "row",
    columnGap: E,
    flexWrap: t,
    children: f
  }), i[13] = t, i[14] = f, i[15] = d; else d = i[15];
  return d;
}

function L(l) {
  let h = w(2), {children: o} = l, b;
  if (h[0] !== o) b = e(Q, {
    children: o
  }), h[0] = o, h[1] = b; else b = h[1];
  return b;
}

function P(l) {
  let p = w(12), {columns: o, children: h, forceWidth: b} = l, {columns: y} = Te(), c = b ?? y, a, t, i, f;
  if (p[0] !== h || p[1] !== o || p[2] !== c) {
    let d = Zy.toArray(h).filter(_m);
    let m = d.map(re);
    let u = o.some(le);
    let V = M(o, m, u, c);
    a = s;
    t = "column";
    i = u && e(W, {
      cells: o.map(ae),
      columns: o,
      widths: V,
      isHeader: !0
    });
    f = m.map((se, X) => e(W, {
      cells: se,
      columns: o,
      widths: V,
      isHeader: !1
    }, d[X].key ?? X));
    p[0] = h, p[1] = o, p[2] = c, p[3] = a, p[4] = t, p[5] = i, p[6] = f;
  } else a = p[3], t = p[4], i = p[5], f = p[6];
  let Z;
  if (p[7] !== a || p[8] !== t || p[9] !== i || p[10] !== f) Z = r(a, {
    flexDirection: t,
    children: [ i, f ]
  }), p[7] = a, p[8] = t, p[9] = i, p[10] = f, p[11] = Z; else Z = p[11];
  return Z;
}

var Ju = Object.assign(P, {
  Row: L
});

export { qyt, Ju };
