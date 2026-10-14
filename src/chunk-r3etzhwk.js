// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { cn, t } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { yr } from "./chunk-7w995nyx.js";

import { ge, CIe } from "./chunk-07cck4g7.js";

import { _$ } from "./chunk-r276nwd3.js";

import { Ti, eW, s, n, Uo, wu, ti } from "./chunk-3vw306fv.js";

import { kCe } from "./chunk-ydwee02n.js";

import { aB } from "./chunk-ebd8npjf.js";

import { Amn, w7e, wze, cUr } from "./chunk-kbqs71k0.js";

import { id } from "./chunk-0ypdmr94.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Bm, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { I4n } from "./chunk-pnn4xyvt.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

F();

import { extname as bt } from "path";

var jt = 500;

function S7e(l, a, i, u) {
  let d = `${u}\0${kCe.pluginGrammarGeneration}\0${CIe()}`, o = I4n(d, i), m = l.get(o);
  if (m !== void 0) {
    if (l.delete(o), m.code === i && m.variant === d) return l.set(o, m), m.highlighted;
  }
  let c = a.highlight(i, {
    language: u
  });
  if (l.size >= jt) {
    let g = l.keys().next().value;
    if (g !== void 0) l.delete(g);
  }
  return l.set(o, {
    variant: d,
    code: i,
    highlighted: c
  }), c;
}

function j(l) {
  let a = new Map;
  if (l.length <= Amn) return {
    text: l,
    markers: a
  };
  return {
    text: l.split(`\n`).map((d, o) => {
      let {code: m, truncatedChars: c} = w7e(d);
      if (c > 0) return a.set(o, wze(c)), m;
      return d;
    }).join(`\n`),
    markers: a
  };
}

function L(l, a) {
  if (a.size === 0) return l;
  return l.split(`\n`).map((i, u) => {
    let d = a.get(u);
    return d ? i + ge.dim(d) : i;
  }).join(`\n`);
}

function B(l) {
  let c = w(16), {code: a, filePath: i, dim: u, skipColoring: d} = l, o = u === void 0 ? !1 : u, m = d === void 0 ? !1 : d, g, h;
  if (c[0] !== a || c[1] !== o || c[2] !== m) {
    h = _n;
    ce: {
      g = _$(a);
      if (m) {
        let {text: k, markers: _} = j(g);
        const x = e(Uo, {
          children: L(k, _)
        });
        let C;
        if (c[5] !== o || c[6] !== x) C = e(n, {
          dimColor: o,
          children: x
        }), c[5] = o, c[6] = x, c[7] = C; else C = c[7];
        h = C;
        break ce;
      }
    }
    c[0] = a, c[1] = o, c[2] = m, c[3] = g, c[4] = h;
  } else g = c[3], h = c[4];
  if (h !== _n) return h;
  let x;
  if (c[8] !== i) x = bt(i).slice(1), c[8] = i, c[9] = x; else x = c[9];
  let p = x, C;
  if (c[10] !== g || c[11] !== p) C = e(nt, {
    codeWithSpaces: g,
    language: p
  }), c[10] = g, c[11] = p, c[12] = C; else C = c[12];
  let _t;
  if (c[13] !== o || c[14] !== C) _t = e(n, {
    dimColor: o,
    children: C
  }), c[13] = o, c[14] = C, c[15] = _t; else _t = c[15];
  return _t;
}

function nt(l) {
  let u = w(7), {codeWithSpaces: a, language: i} = l, d;
  if (u[0] === S) d = aB(), u[0] = d; else d = u[0];
  let o = d, {highlightedCode: m} = eW(), c = kCe.pluginGrammarGeneration, g;
  if (u[1] !== a || u[2] !== m || u[3] !== i) {
    ce: {
      let {text: h, markers: k} = j(a);
      let _ = "markdown";
      if (i) {
        if (o.supportsLanguage(i)) _ = i; else t(`Language not supported while highlighting code, falling back to markdown: ${i}`);
      }
      try {
        g = L(S7e(m, o, h, _), k);
      } catch (x) {
        let C = x;
        if (C instanceof Error && C.message.includes("Unknown language")) {
          g = (t(`Language not supported while highlighting code, falling back to markdown: ${C}`), 
          L(S7e(m, o, h, "markdown"), k));
          break ce;
        }
        g = L(h, k);
      }
    }
    u[1] = a, u[2] = m, u[3] = i, u[4] = g;
  } else g = u[4];
  let p = g, x;
  if (u[5] !== p) x = e(Uo, {
    children: p
  }), u[5] = p, u[6] = x; else x = u[6];
  return x;
}

function he(ke, xe) {
  return e(n, {
    children: e(Uo, {
      children: ke
    })
  }, xe);
}

var Wt = 80, ow = Bm(function(a) {
  let G = w(40), {code: i, filePath: u, width: d, dim: o, startLine: m, lineNumbers: c} = a, g = o === void 0 ? !1 : o, h = m === void 0 ? 1 : m, k = c === void 0 ? !0 : c, _ = R(null), [x, C] = y(Wt), ce = d || x, [p] = yr(), v = id().syntaxHighlightingDisabled ?? !1, O;
  if (G[0] !== i || G[1] !== u || G[2] !== v) {
    Ye: {
      if (v) {
        O = null;
        break Ye;
      }
      let $t = cUr();
      if (!$t) {
        O = null;
        break Ye;
      }
      O = new $t(_$(i), u);
    }
    G[0] = i, G[1] = u, G[2] = v, G[3] = O;
  } else O = G[3];
  let A = O, vt, It;
  if (G[4] !== d) vt = () => {
    if (!d && _.current) {
      let {width: Tt} = ti(_.current);
      if (Tt > 0) C(Tt - 2);
    }
  }, It = [ d ], G[4] = d, G[5] = vt, G[6] = It; else vt = G[5], It = G[6];
  P(vt, It);
  let zt;
  if (G[7] !== i) zt = K(i), G[7] = i, G[8] = zt; else zt = G[8];
  let fe = String(zt).length + 2, ut;
  Ze: {
    if (!k || h === 1) {
      ut = null;
      break Ze;
    }
    let Ot = K(i);
    let Q = String(h + Ot - 1).length;
    const E = Math.max(0, Q - String(Ot).length);
    let f;
    if (G[9] !== Q || G[10] !== E) f = {
      digits: Q,
      extraCols: E
    }, G[9] = Q, G[10] = E, G[11] = f; else f = G[11];
    ut = f;
  }
  let mt = ut, pe = Ti() || h !== 1, E;
  ii: {
    if (A === null) {
      E = null;
      break ii;
    }
    let I = ce - (mt?.extraCols ?? 0) + (k ? 0 : fe);
    if (k && !pe) {
      let f;
      if (G[12] !== A || G[13] !== I || G[14] !== g || G[15] !== p) f = A.render(p, I, g) ?? [], 
      G[12] = A, G[13] = I, G[14] = g, G[15] = p, G[16] = f; else f = G[16];
      let W;
      if (G[17] !== f) W = {
        split: !1,
        lines: f
      }, G[17] = f, G[18] = W; else W = G[18];
      E = W;
      break ii;
    }
    let f;
    if (G[19] !== A || G[20] !== I || G[21] !== g || G[22] !== p) f = A.renderSplit(p, I, g), 
    G[19] = A, G[20] = I, G[21] = g, G[22] = p, G[23] = f; else f = G[23];
    let {gutters: ht, contents: ct} = f;
    let W;
    if (G[24] !== ct || G[25] !== ht) W = {
      split: !0,
      gutters: ht,
      contents: ct
    }, G[24] = ct, G[25] = ht, G[26] = W; else W = G[26];
    E = W;
  }
  let b = E, f;
  ri: {
    if (mt === null || b === null || !b.split) {
      f = null;
      break ri;
    }
    let {digits: V} = mt;
    let W;
    if (G[27] !== V || G[28] !== b.gutters || G[29] !== h) {
      let ft = h;
      W = b.gutters.map(be => {
        if (cn(be).trim() === "") {
          return " ".repeat(V + 2);
        }
        let ye = ft;
        return ft = ft + 1, ` ${String(ye).padStart(V)} `;
      });
      G[27] = V, G[28] = b.gutters, G[29] = h, G[30] = W;
    } else W = G[30];
    f = W;
  }
  let pt = f, W;
  if (G[31] !== i || G[32] !== g || G[33] !== pt || G[34] !== u || G[35] !== k || G[36] !== b || G[37] !== h || G[38] !== v) W = e(s, {
    ref: _,
    children: b ? e(s, {
      flexDirection: "column",
      children: b.split ? b.contents.map((Xt, Y) => !k ? e(n, {
        children: e(Uo, {
          children: Xt
        })
      }, Y) : e(gt, {
        gutter: b.gutters[Y],
        content: Xt,
        displayGutter: pt?.[Y]
      }, Y)) : b.lines.map(he)
    }) : r(s, {
      flexDirection: "column",
      children: [ k && h !== 1 && r(n, {
        dimColor: !0,
        children: [ "\u2026 from line ", h ]
      }), e(B, {
        code: i,
        filePath: u,
        dim: g,
        skipColoring: v
      }) ]
    })
  }), G[31] = i, G[32] = g, G[33] = pt, G[34] = u, G[35] = k, G[36] = b, G[37] = h, 
  G[38] = v, G[39] = W; else W = G[39];
  return W;
});

function K(l) {
  let a = Nt(l, `\n`) + 1;
  return l.endsWith(`\n`) ? a - 1 : a;
}

function gt(l) {
  let d = w(8), {gutter: a, content: i, displayGutter: u} = l, o;
  if (d[0] !== u || d[1] !== a) o = e(wu, {
    fromLeftEdge: !0,
    children: u === void 0 ? e(n, {
      children: e(Uo, {
        children: a
      })
    }) : e(n, {
      dimColor: !0,
      children: u
    })
  }), d[0] = u, d[1] = a, d[2] = o; else o = d[2];
  let m;
  if (d[3] !== i) m = e(n, {
    children: e(Uo, {
      children: i
    })
  }), d[3] = i, d[4] = m; else m = d[4];
  let c;
  if (d[5] !== o || d[6] !== m) c = r(s, {
    flexDirection: "row",
    children: [ o, m ]
  }), d[5] = o, d[6] = m, d[7] = c; else c = d[7];
  return c;
}

export { S7e, ow };
