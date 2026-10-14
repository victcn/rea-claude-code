// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ne, Ql, Nt } from "./chunk-5wbhf1bk.js";

import { iie, arn, FDt, q1 } from "./chunk-xywp7esx.js";

import { sje } from "./chunk-yxennhe9.js";

import { ir } from "./chunk-ep1bh0vt.js";

import { s, n } from "./chunk-3vw306fv.js";

import { w } from "./chunk-9rj1xaxr.js";

import { tl, iB, SD } from "./chunk-m3evanyp.js";

import { jar } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { r_t } from "./chunk-3jkt4cpt.js";

import { bD } from "./chunk-3f9spx0j.js";

import { jl } from "./chunk-2wkn9yp3.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { W2e, knr, cvt, yXo } from "./chunk-qsfrt3tm.js";

import { Qfe } from "./chunk-vjmbaret.js";

import { wOe, Tj } from "./chunk-g7z9901y.js";

import { Nr, _n } from "./chunk-m8ez8fhk.js";

var Iq = {};

Nr(Iq, {
  default: () => Iq,
  deliveredBy: () => E,
  useUserMessageSite: () => mze
});

function NMe(d, t = new Date) {
  let o = new Date(d);
  if (Number.isNaN(o.getTime())) return "";
  let a = W2e(), i = cvt(), {timeZone: m} = i, u = G(t, m) - G(o, m), g = Math.round(u / 864e5), l = "older";
  if (g === 0) l = "today"; else if (g > 0 && g < 7) l = "week";
  if (i.kind === "preset") return knr(i, se[l], a, o);
  let p = yXo(i.pattern, m, o);
  if (l === "today") return p;
  let c = Tj(a, wOe(de[l], m)).format(o);
  return l === "week" ? `${c} ${p}` : `${c}, ${p}`;
}

var se = {
  today: {
    hour: "numeric",
    minute: "2-digit"
  },
  week: {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit"
  },
  older: {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }
}, de = {
  week: {
    weekday: "long"
  },
  older: {
    weekday: "long",
    month: "short",
    day: "numeric"
  }
};

function G(d, t) {
  if (!t) return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  let o = Tj("en-US", wOe(ae, t)).formatToParts(d), a = {};
  for (let i of o) a[i.type] = i.value;
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
}

var ae = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

function E(d) {
  switch (d.kind) {
   case "plugin":
    return d.name;

   case "channel":
    return Qfe(d.server)?.pluginName;

   default:
    return;
  }
}

function mze({messageId: d, stored: t, text: o, isExpanded: a, task: i, sender: m, draw: u}) {
  let g = ir(i), l = ir(m), p = SD("UserMessage", () => ({
    requestId: d,
    props: {
      text: o,
      origin: jar(t),
      isExpanded: a,
      ...i !== void 0 && {
        task: i
      },
      ...m !== void 0 && {
        from: m
      }
    }
  }), [ d, o, t, a, g, l ]);
  return iB(p, c => u(c.props.text), E(p.props.origin));
}

var me = 1e4, ue = 2500, pe = 2500;

function zBt(d) {
  if (d.length <= me) return d;
  let t = ne(d, ue), o = Ql(d, pe), a = Nt(d, `\n`, t.length) - Nt(o, `\n`), i = d.length - t.length - o.length;
  return {
    head: t,
    hiddenLines: a,
    hiddenChars: i,
    tail: o
  };
}

var J = 4e3;

function GBt(d) {
  let f = w(33), {text: t, useBriefLayout: o, timestamp: a, bodyOnly: i, awaitingModel: m} = d, u = i === void 0 ? !1 : i, g = m === void 0 ? !1 : m, l = r_t(), p = l?.isQueued ?? !1, c = typeof t === "object", re;
  if (f[0] !== t || f[1] !== c) re = !c && t.length <= J && !(iie() && arn(t)), f[0] = t, 
  f[1] = c, f[2] = re; else re = f[2];
  let R = re, y = l?.selectionHighlight === "on", x = p || g;
  if (o || u) {
    let D;
    if (f[3] !== a) D = a ? NMe(a) : "", f[3] = a, f[4] = D; else D = f[4];
    let U = D;
    let _ = y ? "suggestion" : x ? "subtle" : "text";
    const C = u ? 0 : 2;
    let L;
    if (f[5] !== u || f[6] !== y || f[7] !== U || f[8] !== x) L = u ? null : r(s, {
      flexDirection: "row",
      children: [ y ? r(n, {
        "aria-label": "selected:",
        color: "suggestion",
        children: [ te.pointer, " " ]
      }) : null, e(n, {
        color: y ? "suggestion" : x ? "subtle" : "briefLabelYou",
        children: "You"
      }), U ? r(n, {
        dimColor: !0,
        children: [ " ", U ]
      }) : null ]
    }), f[5] = u, f[6] = y, f[7] = U, f[8] = x, f[9] = L; else L = f[9];
    let q;
    if (f[10] !== u || f[11] !== R || f[12] !== t || f[13] !== _ || f[14] !== c || f[15] !== x) q = c ? r(Q, {
      children: [ e(n, {
        color: _,
        children: t.head
      }), e(b, {
        hiddenLines: t.hiddenLines,
        indent: u ? 0 : 2
      }), e(n, {
        color: _,
        children: t.tail
      }) ]
    }) : R ? e(tl, {
      promptMode: !0,
      color: _,
      monochrome: x,
      children: t
    }) : e(n, {
      color: _,
      children: t
    }), f[10] = u, f[11] = R, f[12] = t, f[13] = _, f[14] = c, f[15] = x, f[16] = q; else q = f[16];
    let ie;
    if (f[17] !== C || f[18] !== L || f[19] !== q) ie = r(s, {
      flexDirection: "column",
      paddingLeft: C,
      children: [ L, q ]
    }), f[17] = C, f[18] = L, f[19] = q, f[20] = ie; else ie = f[20];
    return ie;
  }
  let S = y ? "suggestion" : x ? "inactive" : "text", D;
  if (f[21] !== l?.selectionHighlight || f[22] !== y) D = e(s, {
    flexShrink: 0,
    children: l?.selectionHighlight === "off" ? e(n, {
      children: "  "
    }) : r(n, {
      "aria-label": y ? "selected:" : "you:",
      color: y ? "suggestion" : "inactive",
      children: [ te.pointer, " " ]
    })
  }), f[21] = l?.selectionHighlight, f[22] = y, f[23] = D; else D = f[23];
  let C;
  if (f[24] !== R || f[25] !== t || f[26] !== S || f[27] !== c || f[28] !== x) C = c ? r(s, {
    flexDirection: "column",
    children: [ e(P, {
      text: t.head,
      color: S
    }), e(b, {
      hiddenLines: t.hiddenLines,
      indent: 3
    }), e(P, {
      text: t.tail,
      color: S
    }) ]
  }) : R ? e(tl, {
    promptMode: !0,
    color: S,
    monochrome: x,
    children: t
  }) : e(P, {
    text: t,
    color: S
  }), f[24] = R, f[25] = t, f[26] = S, f[27] = c, f[28] = x, f[29] = C; else C = f[29];
  let L;
  if (f[30] !== D || f[31] !== C) L = r(s, {
    flexDirection: "row",
    children: [ D, C ]
  }), f[30] = D, f[31] = C, f[32] = L; else L = f[32];
  return L;
}

function b(d) {
  let m = w(7), {hiddenLines: t, hiddenChars: o, indent: a} = d, i = `${t} ${t === 1 ? "line" : "lines"}`, u;
  if (m[0] !== o || m[1] !== t || m[2] !== i) u = o === void 0 ? `(${i} hidden)` : t === 0 ? `(~${sje(o)} KB hidden)` : `(${i}, ~${sje(o)} KB hidden)`, 
  m[0] = o, m[1] = t, m[2] = i, m[3] = u; else u = m[3];
  let g = u, l;
  if (m[4] !== a || m[5] !== g) l = e(jl, {
    title: g,
    titleAlign: "start",
    color: "subtle",
    padding: a
  }), m[4] = a, m[5] = g, m[6] = l; else l = m[6];
  return l;
}

function P(d) {
  let a = w(4), {text: t, color: o} = d, i, m;
  if (a[0] !== o || a[1] !== t) {
    m = _n;
    g: {
      let u = iie() ? FDt(t) : [];
      if (u.length === 0) {
        m = e(n, {
          color: o,
          children: t
        });
        break g;
      }
      let l = [];
      let p = 0;
      for (const c of u) {
        if (c.start > p) l.push(e(n, {
          color: o,
          children: t.slice(p, c.start)
        }, `plain-${p}`));
        for (let f = c.start; f < c.end; f++) l.push(e(n, {
          color: q1(f - c.start),
          children: t[f]
        }, `rb-${f}`));
        p = c.end;
      }
      if (p < t.length) l.push(e(n, {
        color: o,
        children: t.slice(p)
      }, `plain-${p}`));
      i = e(n, {
        children: l
      });
    }
    a[0] = o, a[1] = t, a[2] = i, a[3] = m;
  } else i = a[2], m = a[3];
  if (m !== _n) return m;
  return i;
}

function Cx(d) {
  let o = w(19), {text: t} = d, a, i, m, u, g, l, p, c;
  if (o[0] !== t) {
    c = _n;
    re: {
      let f = zBt(t);
      if (typeof f === "string") {
        c = e(n, {
          wrap: "wrap",
          children: bD(f)
        });
        break re;
      }
      i = s;
      g = "column";
      l = e(n, {
        wrap: "wrap",
        children: bD(f.head)
      });
      p = e(b, {
        hiddenLines: f.hiddenLines,
        hiddenChars: f.hiddenChars,
        indent: 0
      });
      a = n;
      m = "wrap";
      u = bD(f.tail);
    }
    o[0] = t, o[1] = a, o[2] = i, o[3] = m, o[4] = u, o[5] = g, o[6] = l, o[7] = p, 
    o[8] = c;
  } else a = o[1], i = o[2], m = o[3], u = o[4], g = o[5], l = o[6], p = o[7], c = o[8];
  if (c !== _n) return c;
  let R;
  if (o[9] !== a || o[10] !== m || o[11] !== u) R = e(a, {
    wrap: m,
    children: u
  }), o[9] = a, o[10] = m, o[11] = u, o[12] = R; else R = o[12];
  let y;
  if (o[13] !== i || o[14] !== g || o[15] !== l || o[16] !== p || o[17] !== R) y = r(i, {
    flexDirection: g,
    children: [ l, p, R ]
  }), o[13] = i, o[14] = g, o[15] = l, o[16] = p, o[17] = R, o[18] = y; else y = o[18];
  return y;
}

export { NMe, mze, Iq, zBt, GBt, Cx };
