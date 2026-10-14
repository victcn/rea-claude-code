// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Te } from "./chunk-dmfz0ptg.js";

import { I } from "./chunk-5wbhf1bk.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ut } from "./chunk-yxennhe9.js";

import { s, n, Gi } from "./chunk-3vw306fv.js";

import { V } from "./chunk-jb3h1y0s.js";

import { te } from "./chunk-48xcyvwy.js";

import { hi } from "./chunk-vks3d7q4.js";

import { SMe, vUt, vQe } from "./chunk-bd5sv483.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function W(u) {
  return u.remoteBootstrap;
}

function X() {
  return Date.now();
}

function q5n() {
  let i = w(22), c = V(W), {columns: t} = Te(), [d, x] = y(X), g;
  if (i[0] === S) g = () => x(Date.now()), i[0] = g; else g = i[0];
  if (Gi(g, 1e3), c === null) {
    return null;
  }
  let T = c.queuedCount, o;
  if (i[1] !== c.sessionMode) o = vUt(c.sessionMode), i[1] = c.sessionMode, i[2] = o; else o = i[2];
  let a;
  if (i[3] !== o) a = r(n, {
    bold: !0,
    children: [ o, "\u2026" ]
  }), i[3] = o, i[4] = a; else a = i[4];
  let f;
  if (i[5] !== t || i[6] !== d || i[7] !== c.sessionMode || i[8] !== c.steps) {
    let l;
    if (i[10] !== t || i[11] !== d || i[12] !== c.sessionMode) l = D => D.status === "skipped" ? null : e(C, {
      step: D,
      sessionMode: c.sessionMode,
      now: d,
      columns: t
    }, D.id), i[10] = t, i[11] = d, i[12] = c.sessionMode, i[13] = l; else l = i[13];
    f = c.steps.map(l);
    i[5] = t, i[6] = d, i[7] = c.sessionMode, i[8] = c.steps, i[9] = f;
  } else f = i[9];
  let l;
  if (i[14] !== T) l = T > 0 ? `${T} ${I(T, "message")} queued \xb7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", 
  i[14] = T, i[15] = l; else l = i[15];
  let m;
  if (i[16] !== l) m = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: l
    })
  }), i[16] = l, i[17] = m; else m = i[17];
  let p;
  if (i[18] !== a || i[19] !== f || i[20] !== m) p = r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [ a, f, m ]
  }), i[18] = a, i[19] = f, i[20] = m, i[21] = p; else p = i[21];
  return p;
}

function C(c) {
  let g = w(23), {step: t, sessionMode: d, now: x, columns: i} = c, T;
  if (g[0] !== d || g[1] !== t) T = SMe(t, d), g[0] = d, g[1] = t, g[2] = T; else T = g[2];
  let o = T;
  switch (t.status) {
   case "completed":
    {
      let a;
      if (g[3] !== x || g[4] !== t) a = vQe(t, x), g[3] = x, g[4] = t, g[5] = a; else a = g[5];
      let f;
      if (g[6] !== o || g[7] !== a) f = e(Ste, {
        status: "completed",
        label: o,
        annotation: a
      }), g[6] = o, g[7] = a, g[8] = f; else f = g[8];
      return f;
    }

   case "running":
    {
      let a;
      if (g[9] !== x || g[10] !== t) a = vQe(t, x), g[9] = x, g[10] = t, g[11] = a; else a = g[11];
      let f;
      if (g[12] !== i || g[13] !== o || g[14] !== t.detail || g[15] !== a) f = e(Ste, {
        status: "running",
        label: o,
        annotation: a,
        detail: t.detail,
        columns: i
      }), g[12] = i, g[13] = o, g[14] = t.detail, g[15] = a, g[16] = f; else f = g[16];
      return f;
    }

   case "failed":
    {
      let a;
      if (g[17] !== i || g[18] !== o || g[19] !== t.error) a = e(Ste, {
        status: "failed",
        label: o,
        detail: t.error,
        columns: i
      }), g[17] = i, g[18] = o, g[19] = t.error, g[20] = a; else a = g[20];
      return a;
    }

   case "pending":
    {
      let a;
      if (g[21] !== o) a = e(Ste, {
        status: "pending",
        label: o
      }), g[21] = o, g[22] = a; else a = g[22];
      return a;
    }

   case "skipped":
    {
      return null;
    }
  }
}

function Ste(c) {
  let l = w(31), {status: t, label: d, annotation: x, detail: i, columns: g, detailOverflow: T} = c, o = x === void 0 ? "" : x, a = g === void 0 ? 80 : g, f = T === void 0 ? "truncate" : T, D;
  if (l[0] !== a || l[1] !== i || l[2] !== f) D = i === void 0 || f === "wrap" ? i : ut(i, Math.max(20, a - 8)), 
  l[0] = a, l[1] = i, l[2] = f, l[3] = D; else D = l[3];
  let m = D;
  switch (t) {
   case "completed":
    {
      let p;
      if (l[4] === S) p = e(n, {
        color: "success",
        children: `  ${te.tick} `
      }), l[4] = p; else p = l[4];
      let u;
      if (l[5] !== o) u = e(n, {
        dimColor: !0,
        children: o
      }), l[5] = o, l[6] = u; else u = l[6];
      let b;
      if (l[7] !== d || l[8] !== u) b = r(s, {
        children: [ p, r(n, {
          children: [ d, u ]
        }) ]
      }), l[7] = d, l[8] = u, l[9] = b; else b = l[9];
      return b;
    }

   case "running":
    {
      let p;
      if (l[10] === S) p = e(s, {
        width: 4,
        paddingLeft: 2,
        children: e(hi, {})
      }), l[10] = p; else p = l[10];
      let u;
      if (l[11] !== o) u = e(n, {
        dimColor: !0,
        children: o
      }), l[11] = o, l[12] = u; else u = l[12];
      let b;
      if (l[13] !== d || l[14] !== u) b = r(s, {
        children: [ p, r(n, {
          children: [ d, "\u2026", u ]
        }) ]
      }), l[13] = d, l[14] = u, l[15] = b; else b = l[15];
      let M;
      if (l[16] !== m) M = m !== void 0 && m !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          dimColor: !0,
          children: m
        })
      }), l[16] = m, l[17] = M; else M = l[17];
      let A;
      if (l[18] !== b || l[19] !== M) A = r(s, {
        flexDirection: "column",
        children: [ b, M ]
      }), l[18] = b, l[19] = M, l[20] = A; else A = l[20];
      return A;
    }

   case "failed":
    {
      let p;
      if (l[21] === S) p = e(n, {
        color: "error",
        children: `  ${te.cross} `
      }), l[21] = p; else p = l[21];
      let u;
      if (l[22] !== d) u = r(s, {
        children: [ p, e(n, {
          children: d
        }) ]
      }), l[22] = d, l[23] = u; else u = l[23];
      let b;
      if (l[24] !== m) b = m !== void 0 && m !== "" && e(s, {
        paddingLeft: 6,
        children: e(n, {
          color: "error",
          children: m
        })
      }), l[24] = m, l[25] = b; else b = l[25];
      let M;
      if (l[26] !== u || l[27] !== b) M = r(s, {
        flexDirection: "column",
        children: [ u, b ]
      }), l[26] = u, l[27] = b, l[28] = M; else M = l[28];
      return M;
    }

   case "pending":
    {
      const p = `  ${te.circle} ${d}`;
      let u;
      if (l[29] !== p) u = e(s, {
        children: e(n, {
          dimColor: !0,
          children: p
        })
      }), l[29] = p, l[30] = u; else u = l[30];
      return u;
    }
  }
}

export { q5n, Ste };
