// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, ADo, Fn } from "./chunk-3pqddg8f.js";

import { Ii } from "./chunk-5wbhf1bk.js";

import { dS } from "./chunk-q6wab2jw.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { a } from "./chunk-j016gcgm.js";

import { vt, tRr, Rr } from "./chunk-xywp7esx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { le } from "./chunk-cqgvwwgb.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { as } from "./chunk-r276nwd3.js";

import { ie, Cd, ut, iM, vj, qo } from "./chunk-yxennhe9.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Tv, Oe } from "./chunk-cjt10y7b.js";

import { st, s, n, zt, Wv } from "./chunk-3vw306fv.js";

import { Lb } from "./chunk-1jbdb8dv.js";

import { V } from "./chunk-jb3h1y0s.js";

import { Zj, mke } from "./chunk-apnet8r0.js";

import { _o } from "./chunk-2enjs241.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { te } from "./chunk-48xcyvwy.js";

import { Fao } from "./chunk-sqb9meyh.js";

import { Kt, Bm, Z, y, F } from "./chunk-cpyd3eya.js";

import { F1 } from "./chunk-akt0hp0c.js";

import { Go } from "./chunk-jbphjy99.js";

import { pa } from "./chunk-g7z9901y.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

function xL(o) {
  let i = w(10), t, c, l;
  if (i[0] !== o) ({active: t, children: l, ...c} = o), i[0] = o, i[1] = t, i[2] = c, 
  i[3] = l; else t = i[1], c = i[2], l = i[3];
  let u;
  if (i[4] !== t) u = {
    line: 0,
    column: 0,
    active: t
  }, i[4] = t, i[5] = u; else u = i[5];
  let d = Wv(u), p;
  if (i[6] !== c || i[7] !== l || i[8] !== d) p = e(s, {
    ...c,
    ref: d,
    children: l
  }), i[6] = c, i[7] = l, i[8] = d, i[9] = p; else p = i[9];
  return p;
}

var xt = /\s+/g;

function m7e(o) {
  let i = o.arrowedSuggestionId;
  return i != null && o.suggestions[o.selectedSuggestion]?.id === i ? i : null;
}

function fo(o, i, t, c) {
  let l = p => o[p] ?? 1, u = p => {
    let f = p + 1, x = l(p);
    while (f < o.length && x + l(f) <= i) x += l(f), f++;
    return {
      start: p,
      end: f,
      usedRows: x
    };
  }, d = u(Math.max(0, Math.min(c, o.length - 1)));
  if (t >= d.end) d = u(t); else if (t < d.start) d = {
    start: t,
    end: t + 1,
    usedRows: l(t)
  };
  while (d.start > 0 && d.usedRows + l(d.start - 1) <= i) d.start--, d.usedRows += l(d.start);
  return u(d.start);
}

var go = 5;

function ue(o) {
  if (o.startsWith("file-")) return "+";
  if (o.startsWith("mcp-resource-")) return dS;
  if (o.startsWith("mcp-template")) return dS;
  if (o.startsWith("agent-")) return "*";
  return "+";
}

function me(o, i, t = !1) {
  let c = o.toLowerCase();
  if (c.length !== o.length) return [];
  let l = c.indexOf(i);
  if (l !== -1) return Ge(o, [ [ l, l + i.length ] ]);
  if (t) return [];
  let u = [], d = 0;
  for (let p of i) {
    let f = c.indexOf(p, d);
    if (f === -1) return [];
    let x = f + p.length, m = u.at(-1);
    if (m && m[1] === f) m[1] = x; else u.push([ f, x ]);
    d = x;
  }
  return Ge(o, u);
}

function rt(o) {
  let p = w(13), {text: i, query: t, color: c, isSelected: l, bold: u, contiguousOnly: d} = o, f, x;
  if (p[0] !== u || p[1] !== c || p[2] !== d || p[3] !== l || p[4] !== t || p[5] !== i) {
    x = _n;
    g: {
      let m = t ? me(i, t, d) : [];
      if (m.length === 0) {
        const R = !l;
        let C;
        if (p[8] !== u || p[9] !== c || p[10] !== R || p[11] !== i) C = e(n, {
          color: c,
          dimColor: R,
          bold: u,
          children: i
        }), p[8] = u, p[9] = c, p[10] = R, p[11] = i, p[12] = C; else C = p[12];
        x = C;
        break g;
      }
      let W = [];
      let M = (O, Y, K) => {
        if (O >= Y) {
          return;
        }
        W.push(e(n, {
          color: c,
          dimColor: !K && !l,
          bold: u || K,
          children: i.slice(O, Y)
        }, O));
      };
      let _ = 0;
      for (const [I, L] of m) M(_, I, !1), M(I, L, !0), _ = L;
      M(_, i.length, !1);
      f = e(Q, {
        children: W
      });
    }
    p[0] = u, p[1] = c, p[2] = d, p[3] = l, p[4] = t, p[5] = i, p[6] = f, p[7] = x;
  } else f = p[6], x = p[7];
  if (x !== _n) return x;
  return f;
}

function Zt(o) {
  return o.startsWith("file-") || o.startsWith("mcp-resource-") || o.startsWith("mcp-template") || o.startsWith("agent-");
}

var ze = Bm(function(i) {
  let m = w(101), {item: t, maxColumnWidth: c, isSelected: l, allowWrap: u} = i, d = u === void 0 ? !0 : u, p = Te().columns, f = st(), x = Zt(t.id), R;
  if (m[0] !== t.id) R = t.id.startsWith("emoji:"), m[0] = t.id, m[1] = R; else R = m[1];
  let C = R, g = f && !C ? "" : l ? `${te.pointer} ` : "  ", W = ie(g);
  if (x) {
    let O;
    if (m[2] !== t.id) O = ue(t.id), m[2] = t.id, m[3] = O; else O = m[3];
    let Y = O;
    let K = l ? "suggestion" : void 0;
    let M = !l;
    let _ = t.id.startsWith("file-");
    let I = t.id.startsWith("mcp-resource-");
    let L;
    if (m[4] !== t.id) L = t.id.startsWith("mcp-template-value::"), m[4] = t.id, m[5] = L; else L = m[5];
    let U = L;
    let A = t.id.startsWith("mcp-template::");
    let H = t.description ? 3 : 0;
    let k;
    if (_ || A || U) {
      let T;
      if (m[6] !== t.description) T = t.description ? Math.min(20, ie(t.description)) : 0, 
      m[6] = t.description, m[7] = T; else T = m[7];
      let v = T;
      let B = p - W - 2 - 4 - H - v;
      let J;
      if (m[8] !== U || m[9] !== t.displayText || m[10] !== B) J = U ? iM(t.displayText, B) : Cd(t.displayText, B), 
      m[8] = U, m[9] = t.displayText, m[10] = B, m[11] = J; else J = m[11];
      k = J;
    } else if (I) {
      let T;
      if (m[12] !== t.displayText) T = ut(t.displayText, 30), m[12] = t.displayText, m[13] = T; else T = m[13];
      k = T;
    } else k = t.displayText;
    let ce = p - W - 2 - ie(k) - H - 4;
    let it;
    if (t.description) {
      let Ct = Math.max(0, ce);
      let T;
      if (m[14] !== t.description || m[15] !== Ct) T = ut(t.description.replace(xt, " "), Ct), 
      m[14] = t.description, m[15] = Ct, m[16] = T; else T = m[16];
      let de = T;
      it = `${g}${Y} ${k} \u2013 ${de}`;
    } else it = `${g}${Y} ${k}`;
    let T;
    if (m[17] !== M || m[18] !== it || m[19] !== K) T = e(n, {
      color: K,
      dimColor: M,
      wrap: "truncate",
      children: it
    }), m[17] = M, m[18] = it, m[19] = K, m[20] = T; else T = m[20];
    return T;
  }
  let b = t.description || t.tag || t.kind !== void 0 || t.sourceTag, G = c ?? ie(t.displayText) + 5, O;
  if (m[21] !== G || m[22] !== p || m[23] !== b || m[24] !== f || m[25] !== t) O = b ? ee(t, p, G, f) : Math.min(G, p - 4), 
  m[21] = G, m[22] = p, m[23] = b, m[24] = f, m[25] = t, m[26] = O; else O = m[26];
  let j = O, D = t.color || (l ? "suggestion" : void 0), X = !l, E = C && l, kt = j - 2 - (b && !C ? W : 0), P = t.displayText;
  if (ie(P) > kt) {
    let L;
    if (m[27] !== P || m[28] !== kt) L = P.includes("/") || P.includes("\\") ? iM(P, kt) : ut(P, kt), 
    m[27] = P, m[28] = kt, m[29] = L; else L = m[29];
    P = L;
  }
  let L;
  if (m[30] !== j || m[31] !== P || m[32] !== W) L = " ".repeat(Math.max(0, j - ie(P) - W)), 
  m[30] = j, m[31] = P, m[32] = W, m[33] = L; else L = m[33];
  let Tt = L, lt = t.tag ? `[${t.tag}] ` : "", It = ie(lt), at, et, ot, T, J;
  if (m[34] !== t) {
    let {kindLaneText: Ot, kindLabel: no, sourceText: St} = Et(t);
    et = Ot;
    ot = St;
    at = no === "skill" ? "skill" : no === "agent" ? "background" : void 0;
    T = ie(et);
    J = ie(ot);
    m[34] = t, m[35] = at, m[36] = et, m[37] = ot, m[38] = T, m[39] = J;
  } else at = m[35], et = m[36], ot = m[37], T = m[38], J = m[39];
  let Bt = T + J, Ft = Math.max(0, p - j - It - Bt - 4), Rt, Wt, Mt, Ot, St;
  if (m[40] !== d || m[41] !== E || m[42] !== p || m[43] !== Ft || m[44] !== j || m[45] !== P || m[46] !== l || m[47] !== t.description || m[48] !== t.query || m[49] !== at || m[50] !== et || m[51] !== Bt || m[52] !== Tt || m[53] !== g || m[54] !== X || m[55] !== ot || m[56] !== lt || m[57] !== It || m[58] !== D) {
    St = _n;
    gn: {
      let so = t.description ? t.description.replace(xt, " ").trim() : "";
      let [Qo, io] = d ? He(so, Ft) : [ ut(so, Ft), "" ];
      Rt = l ? "suggestion" : void 0;
      let ct;
      if (m[64] !== E || m[65] !== g || m[66] !== X || m[67] !== D) ct = g ? e(n, {
        color: D,
        dimColor: X,
        bold: E,
        children: g
      }) : null, m[64] = E, m[65] = g, m[66] = X, m[67] = D, m[68] = ct; else ct = m[68];
      let pt;
      if (m[69] !== E || m[70] !== P || m[71] !== l || m[72] !== t.query || m[73] !== D) pt = e(rt, {
        text: P,
        query: t.query,
        color: D,
        isSelected: l,
        bold: E
      }), m[69] = E, m[70] = P, m[71] = l, m[72] = t.query, m[73] = D, m[74] = pt; else pt = m[74];
      let mt;
      if (m[75] !== E || m[76] !== Tt || m[77] !== X || m[78] !== D) mt = e(n, {
        color: D,
        dimColor: X,
        bold: E,
        children: Tt
      }), m[75] = E, m[76] = Tt, m[77] = X, m[78] = D, m[79] = mt; else mt = m[79];
      let Lt;
      if (m[80] !== at || m[81] !== et) Lt = et ? e(n, {
        color: at,
        dimColor: at === void 0,
        children: et
      }) : null, m[80] = at, m[81] = et, m[82] = Lt; else Lt = m[82];
      let lo;
      if (m[83] !== lt) lo = lt ? e(n, {
        dimColor: !0,
        children: lt
      }) : null, m[83] = lt, m[84] = lo; else lo = m[84];
      let ao;
      if (m[85] !== ot) ao = ot ? e(n, {
        dimColor: !0,
        children: ot
      }) : null, m[85] = ot, m[86] = ao; else ao = m[86];
      Wt = r(n, {
        wrap: "truncate",
        children: [ ct, pt, mt, Lt, lo, ao, e(rt, {
          text: Qo,
          query: t.query,
          color: Rt,
          isSelected: l,
          bold: E,
          contiguousOnly: !0
        }) ]
      });
      if (!io) {
        St = Wt;
        break gn;
      }
      Mt = j + It + Bt;
      Ot = ut(io, Math.max(0, p - Mt - 4));
    }
    m[40] = d, m[41] = E, m[42] = p, m[43] = Ft, m[44] = j, m[45] = P, m[46] = l, m[47] = t.description, 
    m[48] = t.query, m[49] = at, m[50] = et, m[51] = Bt, m[52] = Tt, m[53] = g, m[54] = X, 
    m[55] = ot, m[56] = lt, m[57] = It, m[58] = D, m[59] = Rt, m[60] = Wt, m[61] = Mt, 
    m[62] = Ot, m[63] = St;
  } else Rt = m[59], Wt = m[60], Mt = m[61], Ot = m[62], St = m[63];
  if (St !== _n) return St;
  let pe = Ot, ct;
  if (m[87] !== Mt) ct = " ".repeat(Mt), m[87] = Mt, m[88] = ct; else ct = m[88];
  let pt;
  if (m[89] !== E || m[90] !== Rt || m[91] !== pe || m[92] !== l || m[93] !== t.query) pt = e(rt, {
    text: pe,
    query: t.query,
    color: Rt,
    isSelected: l,
    bold: E,
    contiguousOnly: !0
  }), m[89] = E, m[90] = Rt, m[91] = pe, m[92] = l, m[93] = t.query, m[94] = pt; else pt = m[94];
  let mt;
  if (m[95] !== pt || m[96] !== ct) mt = r(n, {
    wrap: "truncate",
    children: [ ct, pt ]
  }), m[95] = pt, m[96] = ct, m[97] = mt; else mt = m[97];
  let Lt;
  if (m[98] !== Wt || m[99] !== mt) Lt = r(s, {
    flexDirection: "column",
    children: [ Wt, mt ]
  }), m[98] = Wt, m[99] = mt, m[100] = Lt; else Lt = m[100];
  return Lt;
});

function oke({suggestions: o, selectedSuggestion: i, maxColumnWidth: t, emptyMessage: c, overlay: l, noPad: u, onSelect: d, hoveredId: p, onHoverChange: f, cursorRowId: x, keepWindow: m = !1}) {
  let {rows: R, columns: C} = Te(), g = st(), W = Lb(), O = Z(() => t ?? o.reduce((b, G) => Math.max(b, ie(G.displayText)), 0) + 5, [ o, t ]), [Y, K] = y(null), M = l ? go : Math.max(1, Math.min(Math.max(6, Math.floor(R / 2)), R - 3));
  if (o.length === 0) {
    if (!c) return null;
    let b = u ? 0 : Math.max(0, M - 1);
    return r(s, {
      flexDirection: "column",
      justifyContent: l ? void 0 : "flex-end",
      children: [ e(_o, {
        children: c
      }), Array.from({
        length: b
      }, (G, j) => e(n, {
        children: " "
      }, `pad-${j}`)) ]
    });
  }
  let _ = Math.max(0, Math.min(i, o.length - 1)), I = Math.max(0, _ - M), L = o.slice(I, _ + M + 1), U = M >= 2, A = L.map(b => U ? No(b, C, O, g) : 1), H = _ - I, k = H, T = H + 1, v = A[H] ?? 1, B = 0, J = Math.floor(M / 2);
  while (k > 0 && v < M && B + (A[k - 1] ?? 1) <= J) k--, B += A[k] ?? 1;
  v += B;
  while (T < L.length && v + (A[T] ?? 1) <= M) v += A[T] ?? 1, T++;
  while (k > 0 && v + (A[k - 1] ?? 1) <= M) k--, v += A[k] ?? 1;
  if (m) {
    let b = fo(A, M, H, (Y ?? I + k) - I);
    if (k = b.start, T = b.end, v = b.usedRows, I + k !== Y) K(I + k);
  }
  let ce = L.slice(k, T), it = u ? 0 : Math.max(0, M - v), Ct = o[i]?.id, de = p != null && o.some(b => b.id === p) ? p : void 0;
  return r(s, {
    flexDirection: "column",
    justifyContent: l ? void 0 : "flex-end",
    onMouseLeave: d ? () => f?.(null) : void 0,
    children: [ ce.map((b, G) => {
      let j = I + k + G, D = e(ze, {
        item: b,
        maxColumnWidth: O,
        isSelected: b.id === (de ?? Ct),
        allowWrap: U
      }, b.id);
      if (x != null && b.id === x) return e(xL, {
        active: !0,
        children: D
      }, b.id);
      if (!d) return D;
      return e(s, {
        onMouseEnter: () => f?.(b.id),
        onClick: X => {
          if (W(X)) return;
          d(j, b.id);
        },
        children: D
      }, b.id);
    }), Array.from({
      length: it
    }, (b, G) => e(n, {
      children: " "
    }, `pad-${G}`)) ]
  });
}

var ZFr = Bm(oke);

function Et(o) {
  let t = o.kind === void 0 || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind, c = o.kind === void 0 ? "" : t + Ii(" ", 7 - ie(t)), l = o.sourceTag ? `[${o.sourceTag}] ` : "";
  return {
    kindLaneText: c,
    kindLabel: t,
    sourceText: l
  };
}

function ee(o, i, t, c) {
  let l = Math.floor(i * .4);
  return t > l ? l + Eo(o, i, c) : t;
}

function Eo(o, i, t) {
  if (t || o.id.startsWith("emoji:")) return 0;
  let c = o.tag ? ie(`[${o.tag}] `) : 0, {kindLaneText: l, sourceText: u} = Et(o), d = i - Math.floor(i * .4) - c - ie(l) - ie(u) - 4 - (o.description ? 1 : 0), p = ie(`${te.pointer} `);
  return d < 0 ? p : Math.min(p, d);
}

function No(o, i, t, c) {
  if (Zt(o.id) || !o.description) return 1;
  let l = ee(o, i, t, c), u = o.tag ? ie(`[${o.tag}] `) : 0, {kindLaneText: d, sourceText: p} = Et(o), f = Math.max(0, i - l - u - ie(d) - ie(p) - 4);
  if (f <= 0) return 1;
  let x = o.description.replace(xt, " ").trim();
  return ie(x) > f ? 2 : 1;
}

function He(o, i) {
  if (i <= 0 || ie(o) <= i) return [ o, "" ];
  let t = vj(o, i), c = o.slice(t.length);
  if (c.startsWith(" ")) return [ t, c.trimStart() ];
  let l = t.lastIndexOf(" ");
  if (l > 0) return [ t.slice(0, l), o.slice(l + 1) ];
  return [ t, c ];
}

var Ao = /[^\u0020-\u02ff]/;

function Ge(o, i) {
  if (i.length === 0 || !Ao.test(o)) return i;
  let t = new Set;
  for (let {index: l} of pa().segment(o)) t.add(l);
  let c = [];
  for (let [l, u] of i) {
    let d = l;
    while (d > 0 && !t.has(d)) d--;
    let p = u;
    while (p < o.length && !t.has(p)) p++;
    let f = c.at(-1);
    if (f && d <= f[1]) f[1] = Math.max(f[1], p); else c.push([ d, p ]);
  }
  return c;
}

var g7e = Ue(Go(), o => o.set(void 0));

var Dte = () => g7e.get() ?? {
  kept: void 0,
  takenAfter: 0,
  runs: 0
};

var Lte = () => g7e.set({
  ...Dte(),
  kept: void 0
});

var Bo = {
  default: {
    eyes: "open",
    arms: "down",
    feet: "both"
  },
  "arms-up": {
    eyes: "open",
    arms: "up",
    feet: "both"
  },
  "look-left": {
    eyes: "left",
    arms: "down",
    feet: "both"
  },
  "look-right": {
    eyes: "right",
    arms: "down",
    feet: "both"
  }
}, Ye = {
  down: {
    r1L: " \u2590",
    r1R: "",
    r2L: "\u259d\u259c",
    r2R: "\u2588\u2580"
  },
  up: {
    r1L: "\u2597\u259f",
    r1R: "\u2584",
    r2L: " \u259c",
    r2R: "\u2588\u2598"
  },
  "one-up": {
    r1L: " \u2590",
    r1R: "\u2584",
    r2L: "\u259d\u259c",
    r2R: "\u2588\u2598"
  }
}, Xe = {
  open: [ {
    glyphs: "\u259b\u2588\u2588\u2588\u259b\u2588"
  } ],
  left: [ {
    glyphs: "\u259f\u2588\u2588\u2588\u259f\u2588"
  } ],
  right: [ {
    glyphs: "\u2588\u259f\u2588\u2588\u2588\u259f"
  } ],
  closed: [ {
    glyphs: "\u2582",
    lid: !0
  }, {
    glyphs: "\u2588\u2588\u2588"
  }, {
    glyphs: "\u2582",
    lid: !0
  }, {
    glyphs: "\u2588"
  } ],
  wink: [ {
    glyphs: "\u259b\u2588\u2588\u2588"
  }, {
    glyphs: "\u2582",
    lid: !0
  }, {
    glyphs: "\u2588"
  } ]
}, Je = {
  both: " \u259d\u259d   \u259d\u259d ",
  left: " \u259d\u259d      ",
  right: "      \u259d\u259d "
}, Qe = {
  open: " \u2597   \u2596 ",
  left: " \u2598   \u2598 ",
  right: " \u259d   \u259d ",
  closed: " \u2582   \u2582 ",
  wink: " \u2597   \u2582 "
}, Ze = {
  "right-12": [ {
    glyphs: " \u2590\u2588\u259c\u2588\u2588\u259b\u2588 ",
    from: 2,
    to: 8
  }, {
    glyphs: "\u259d\u259c\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u259d   \u259d\u259d ",
    from: 0,
    to: 0
  } ],
  "right-30": [ {
    glyphs: "  \u2588\u259b\u2588\u2588\u259b\u258c ",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u2588\u2588\u2588\u2588\u2588\u259b ",
    from: 2,
    to: 7
  }, {
    glyphs: "  \u2598\u2598  \u2598\u2598 ",
    from: 0,
    to: 0
  } ],
  "right-55": [ {
    glyphs: "  \u2590\u2588\u259b\u2588\u259c  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u259d\u259d \u259d\u259d  ",
    from: 0,
    to: 0
  } ],
  "right-75": [ {
    glyphs: "   \u2588\u2588\u259b\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2588\u2588\u2588\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2598  \u2598  ",
    from: 0,
    to: 0
  } ],
  edge: [ {
    glyphs: "   \u2590\u2588\u2588   ",
    from: 4,
    to: 6
  }, {
    glyphs: "   \u2590\u2588\u2588   ",
    from: 4,
    to: 6
  }, {
    glyphs: "   \u259d \u259d   ",
    from: 0,
    to: 0
  } ],
  "back-105": [ {
    glyphs: "   \u2588\u2588\u2588\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2588\u2588\u2588\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2598  \u2598  ",
    from: 0,
    to: 0
  } ],
  "back-125": [ {
    glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u259d\u259d \u259d\u259d  ",
    from: 0,
    to: 0
  } ],
  "back-150": [ {
    glyphs: "  \u2588\u2588\u2588\u2588\u2588\u258c ",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u2588\u2588\u2588\u2588\u2588\u259b ",
    from: 2,
    to: 7
  }, {
    glyphs: "  \u2598\u2598  \u2598\u2598 ",
    from: 0,
    to: 0
  } ],
  back: [ {
    glyphs: " \u2590\u2588\u2588\u2588\u2588\u2588\u2588 ",
    from: 2,
    to: 8
  }, {
    glyphs: "\u259d\u259c\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u259d   \u259d\u259d ",
    from: 0,
    to: 0
  } ],
  "left-75": [ {
    glyphs: "   \u259b\u2588\u2588\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2588\u2588\u2588\u258c  ",
    from: 3,
    to: 6
  }, {
    glyphs: "   \u2598  \u2598  ",
    from: 0,
    to: 0
  } ],
  "left-55": [ {
    glyphs: "  \u2590\u259c\u259b\u2588\u2588  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u2590\u2588\u2588\u2588\u2588  ",
    from: 3,
    to: 7
  }, {
    glyphs: "  \u259d\u259d \u259d\u259d  ",
    from: 0,
    to: 0
  } ],
  "left-30": [ {
    glyphs: "  \u259b\u2588\u2588\u259b\u2588\u258c ",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u2588\u2588\u2588\u2588\u2588\u259b ",
    from: 2,
    to: 7
  }, {
    glyphs: "  \u2598\u2598  \u2598\u2598 ",
    from: 0,
    to: 0
  } ],
  "left-12": [ {
    glyphs: " \u2590\u259b\u2588\u2588\u2588\u259c\u2588 ",
    from: 2,
    to: 8
  }, {
    glyphs: "\u259d\u259c\u2588\u2588\u2588\u2588\u2588\u2588\u2580",
    from: 2,
    to: 7
  }, {
    glyphs: " \u259d\u259d   \u259d\u259d ",
    from: 0,
    to: 0
  } ]
};

function k8n(o) {
  return typeof o === "string" ? Bo[o] : o;
}

function umn(o) {
  return typeof o !== "string" && "facing" in o;
}

function ske() {
  return a.terminal !== "Apple_Terminal";
}

function ike(o) {
  let i = w(47), t;
  if (i[0] !== o) t = o === void 0 ? {} : o, i[0] = o, i[1] = t; else t = i[1];
  let {pose: c, color: l, paint: u} = t, d = c === void 0 ? "default" : c, p = l === void 0 ? "clawd_body" : l;
  if (st()) {
    return null;
  }
  if (umn(d)) {
    let x;
    if (i[2] !== p || i[3] !== d) x = ske() ? e(ae, {
      facing: d.facing,
      color: p
    }) : e(wt, {
      eyes: "open",
      color: p
    }), i[2] = p, i[3] = d, i[4] = x; else x = i[4];
    return x;
  }
  let x;
  if (i[5] !== d) x = k8n(d), i[5] = d, i[6] = x; else x = i[6];
  let m = x;
  if (!ske()) {
    let R;
    if (i[7] !== p || i[8] !== m.eyes) R = e(wt, {
      eyes: m.eyes,
      color: p
    }), i[7] = p, i[8] = m.eyes, i[9] = R; else R = i[9];
    return R;
  }
  let C = Ye[m.arms], R;
  if (i[10] !== p || i[11] !== u) R = u ?? (() => p), i[10] = p, i[11] = u, i[12] = R; else R = i[12];
  let g = R, W;
  if (i[13] !== m.eyes) {
    W = [];
    for (const O of Xe[m.eyes]) {
      let Y = W.at(-1);
      W.push({
        span: O,
        column: Y ? Y.column + Y.span.glyphs.length : 2
      });
    }
    i[13] = m.eyes, i[14] = W;
  } else W = i[14];
  let K;
  if (i[15] !== C.r1L || i[16] !== g) K = e(N, {
    glyphs: C.r1L,
    column: 0,
    row: 0,
    paint: g
  }), i[15] = C.r1L, i[16] = g, i[17] = K; else K = i[17];
  let M;
  if (i[18] !== g || i[19] !== W) M = W.map(_ => {
    let {span: I, column: L} = _;
    return e(N, {
      glyphs: I.glyphs,
      column: L,
      row: 0,
      paint: g,
      on: I.lid ? "lid" : "eyes"
    }, L);
  }), i[18] = g, i[19] = W, i[20] = M; else M = i[20];
  let _;
  if (i[21] !== C.r1R || i[22] !== g) _ = e(N, {
    glyphs: C.r1R,
    column: 8,
    row: 0,
    paint: g
  }), i[21] = C.r1R, i[22] = g, i[23] = _; else _ = i[23];
  let U;
  if (i[24] !== K || i[25] !== M || i[26] !== _) U = r(n, {
    children: [ K, M, _ ]
  }), i[24] = K, i[25] = M, i[26] = _, i[27] = U; else U = i[27];
  let A;
  if (i[28] !== C.r2L || i[29] !== g) A = e(N, {
    glyphs: C.r2L,
    column: 0,
    row: 1,
    paint: g
  }), i[28] = C.r2L, i[29] = g, i[30] = A; else A = i[30];
  let H;
  if (i[31] !== g) H = e(N, {
    glyphs: "\u2588\u2588\u2588\u2588\u2588",
    column: 2,
    row: 1,
    paint: g,
    on: "eyes"
  }), i[31] = g, i[32] = H; else H = i[32];
  let k;
  if (i[33] !== C.r2R || i[34] !== g) k = e(N, {
    glyphs: C.r2R,
    column: 7,
    row: 1,
    paint: g
  }), i[33] = C.r2R, i[34] = g, i[35] = k; else k = i[35];
  let T;
  if (i[36] !== A || i[37] !== H || i[38] !== k) T = r(n, {
    children: [ A, H, k ]
  }), i[36] = A, i[37] = H, i[38] = k, i[39] = T; else T = i[39];
  const v = Je[m.feet];
  let B;
  if (i[40] !== g || i[41] !== v) B = e(n, {
    children: e(N, {
      glyphs: v,
      column: 0,
      row: 2,
      paint: g
    })
  }), i[40] = g, i[41] = v, i[42] = B; else B = i[42];
  let J;
  if (i[43] !== T || i[44] !== B || i[45] !== U) J = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [ U, T, B ]
  }), i[43] = T, i[44] = B, i[45] = U, i[46] = J; else J = i[46];
  return J;
}

function N({glyphs: o, column: i, row: t, paint: c, on: l}) {
  let u = [];
  for (let [d, p] of Array.from(o).entries()) {
    let f = u.at(-1), x = p === " " && f ? f.color : c(i + d, t);
    if (f?.color === x) f.glyphs += p; else u.push({
      glyphs: p,
      color: x
    });
  }
  return u.map((d, p) => e(n, {
    color: l === "lid" ? "clawd_background" : d.color,
    backgroundColor: l === "lid" ? d.color : l && "clawd_background",
    children: d.glyphs
  }, p));
}

function ae(o) {
  let l = w(7), {facing: i, color: t} = o;
  const c = Ze[i];
  let u;
  if (l[0] !== t || l[1] !== c) {
    let d;
    if (l[3] !== t) d = (p, f) => {
      let {glyphs: x, from: m, to: R} = p;
      return r(n, {
        color: t,
        children: [ x.slice(0, m), e(n, {
          backgroundColor: "clawd_background",
          children: x.slice(m, R)
        }), x.slice(R) ]
      }, f);
    }, l[3] = t, l[4] = d; else d = l[4];
    u = c.map(d);
    l[0] = t, l[1] = c, l[2] = u;
  } else u = l[2];
  let d;
  if (l[5] !== u) d = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: u
  }), l[5] = u, l[6] = d; else d = l[6];
  return d;
}

function wt(o) {
  let c = w(19), {eyes: i, color: t} = o, l;
  if (c[0] !== t) l = e(n, {
    color: t,
    children: "\u2597"
  }), c[0] = t, c[1] = l; else l = c[1];
  const u = Qe[i];
  let d;
  if (c[2] !== t || c[3] !== u) d = e(n, {
    color: "clawd_background",
    backgroundColor: t,
    children: u
  }), c[2] = t, c[3] = u, c[4] = d; else d = c[4];
  let p;
  if (c[5] !== t) p = e(n, {
    color: t,
    children: "\u2596"
  }), c[5] = t, c[6] = p; else p = c[6];
  let f;
  if (c[7] !== l || c[8] !== d || c[9] !== p) f = r(n, {
    children: [ l, d, p ]
  }), c[7] = l, c[8] = d, c[9] = p, c[10] = f; else f = c[10];
  let x;
  if (c[11] === S) x = " ".repeat(7), c[11] = x; else x = c[11];
  let m, R;
  if (c[12] !== t) m = e(n, {
    backgroundColor: t,
    children: x
  }), R = e(n, {
    color: t,
    children: "\u2598\u2598   \u259d\u259d"
  }), c[12] = t, c[13] = m, c[14] = R; else m = c[13], R = c[14];
  let C;
  if (c[15] !== f || c[16] !== m || c[17] !== R) C = r(s, {
    flexDirection: "column",
    alignItems: "center",
    children: [ f, m, R ]
  }), c[15] = f, c[16] = m, c[17] = R, c[18] = C; else C = c[18];
  return C;
}

function tUr(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}

function UMe(o, i) {
  if (ie(o) <= i) return o;
  let t = "/", c = "\u2026", l = 1, u = 1, d = o.split(t), p = d[0] || "", f = d.at(-1) || "", x = ie(p), m = ie(f);
  if (d.length === 1) return ut(o, i);
  if (p === "" && l + u + m >= i) return `${t}${ut(f, Math.max(1, i - u))}`;
  if (p !== "" && l * 2 + u + m >= i) return `${c}${t}${ut(f, Math.max(1, i - l - u))}`;
  if (d.length === 2) {
    let g = i - l - u - m;
    return `${vj(p, g)}${c}${t}${f}`;
  }
  let R = i - x - m - l - 2 * u;
  if (R <= 0) {
    let g = Math.max(0, i - m - l - 2 * u);
    return `${vj(p, g)}${t}${c}${t}${f}`;
  }
  let C = [];
  for (let g = d.length - 2; g > 0; g--) {
    let W = d[g];
    if (W && ie(W) + u <= R) C.unshift(W), R -= ie(W) + u; else break;
  }
  if (C.length === 0) return `${p}${t}${c}${t}${f}`;
  return `${p}${t}${c}${t}${C.join(t)}${t}${f}`;
}

function yze() {
  let o = a.DEMO_VERSION ?? `${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}${F1()}`, i = ADo(), t = a.DEMO_VERSION ? "/code/claude" : Fn() && (Rr("tengu_violin_wood", !1) || Rr(Fao, !1)) ? Os(ke()) : as(le()), c = a.CLAUDE_CODE_HIDE_CWD ? "" : i ? `${t} in ${i.replace(/^https?:\/\//, "")}` : t, l = Oe(), u = l !== "firstParty" ? Tv[l] : vt() ? tRr() : "API Usage Billing", d = dt().agent;
  return {
    version: o,
    cwd: c,
    billingType: u,
    agentName: d
  };
}

function nUr(o, i, t) {
  if (ie(o) + 3 + ie(i) > t) return {
    shouldSplit: !0,
    truncatedModel: qo(o, t),
    truncatedBilling: qo(i, t)
  };
  return {
    shouldSplit: !1,
    truncatedModel: qo(o, Math.max(t - ie(i) - 3, 10)),
    truncatedBilling: i
  };
}

function ake({segments: o}) {
  return o.map((i, t) => {
    let c = e(n, {
      color: i.color,
      dimColor: i.dim,
      bold: i.bold,
      children: i.text
    }, t);
    return i.url === void 0 ? c : e(zt, {
      url: i.url,
      children: c
    }, t);
  });
}

function Jo(u) {
  return u.notifications.current;
}

function yge() {
  let t = w(12), o = V(Jo), i = V(Zj);
  if (!o || !mke(o, i)) {
    return null;
  }
  if ("jsx" in o) {
    let c;
    if (t[0] !== o.jsx || t[1] !== o.key) c = e(n, {
      wrap: "truncate",
      children: o.jsx
    }, o.key), t[0] = o.jsx, t[1] = o.key, t[2] = c; else c = t[2];
    return c;
  }
  if ("segments" in o) {
    let c;
    if (t[3] !== o.segments) c = e(ake, {
      segments: o.segments
    }), t[3] = o.segments, t[4] = c; else c = t[4];
    let l;
    if (t[5] !== o.key || t[6] !== c) l = e(n, {
      wrap: "truncate",
      children: c
    }, o.key), t[5] = o.key, t[6] = c, t[7] = l; else l = t[7];
    return l;
  }
  const c = !o.color;
  let l;
  if (t[8] !== o.color || t[9] !== o.text || t[10] !== c) l = e(n, {
    color: o.color,
    dimColor: c,
    wrap: "truncate",
    children: o.text
  }), t[8] = o.color, t[9] = o.text, t[10] = c, t[11] = l; else l = t[11];
  return l;
}

F();

var eUr = 2, XBt = 15, JBt = Kt(null);

export { xL, m7e, oke, ZFr, eUr, XBt, JBt, g7e, Dte, Lte, tUr, UMe, yze, nUr, k8n, umn, ske, ike, ake, yge };
