// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ii } from "./chunk-5wbhf1bk.js";

import { yo, xmt } from "./chunk-q6wab2jw.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ie } from "./chunk-yxennhe9.js";

import { ge } from "./chunk-07cck4g7.js";

import { st, n, XMe, ma } from "./chunk-3vw306fv.js";

import { _S } from "./chunk-7w995nyx.js";

import { qMe, sy, Dm, Nb } from "./chunk-xw6qmghy.js";

import { Lu } from "./chunk-81s9fscg.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { hg } from "./chunk-crkn0jm6.js";

import { te } from "./chunk-48xcyvwy.js";

var Tge = {
  success: {
    icon: te.tick,
    color: "success",
    ariaLabel: "done:"
  },
  error: {
    icon: te.cross,
    color: "error",
    ariaLabel: "failed:"
  },
  warning: {
    icon: te.warning,
    color: "warning",
    ariaLabel: "warning:"
  },
  info: {
    icon: te.info,
    color: "suggestion",
    ariaLabel: "note:"
  },
  pending: {
    icon: te.circle,
    color: void 0,
    ariaLabel: "pending:"
  },
  loading: {
    icon: "\u2026",
    color: void 0,
    ariaLabel: "loading:"
  },
  running: {
    icon: yo,
    color: void 0,
    ariaLabel: "running:"
  },
  on: {
    icon: te.tick,
    color: "success",
    ariaLabel: "on:"
  },
  off: {
    icon: te.circle,
    color: void 0,
    ariaLabel: "off:"
  },
  working: {
    icon: xmt,
    color: void 0,
    ariaLabel: "working:"
  },
  needsYou: {
    icon: xmt,
    color: "warning",
    ariaLabel: "needs you:"
  },
  idle: {
    icon: xmt,
    color: void 0,
    ariaLabel: "idle:"
  },
  failed: {
    icon: xmt,
    color: "error",
    ariaLabel: "error:"
  }
}, I = {
  working: xmt,
  needsYou: "!",
  idle: "\u25e6",
  failed: "\xd7"
}, L = 8, Y = 200;

function N7e() {
  return Math.max(...Object.values(Tge).map(l => ie(l.icon)));
}

function egn() {
  return N7e() + 1;
}

function ct(l) {
  let a = w(20), {status: i, "aria-label": s, withSpace: u, slot: o} = l, c = u === void 0 ? !1 : u;
  if (i === void 0) {
    let m;
    if (a[0] !== o) m = o && e(n, {
      children: " ".repeat(egn())
    }), a[0] = o, a[1] = m; else m = a[1];
    return m;
  }
  let t = Tge[i], m;
  if (a[2] !== s || a[3] !== t || a[4] !== o) m = s ?? (o === "trailing" ? t.ariaLabel.replace(/:$/, "") : t.ariaLabel), 
  a[2] = s, a[3] = t, a[4] = o, a[5] = m; else m = a[5];
  let d = m;
  if (B(i)) {
    let f;
    if (a[6] !== o || a[7] !== d || a[8] !== i || a[9] !== c) f = e(M, {
      status: i,
      spoken: d,
      slot: o,
      withSpace: c
    }), a[6] = o, a[7] = d, a[8] = i, a[9] = c, a[10] = f; else f = a[10];
    return f;
  }
  const f = t.color, p = !t.color;
  let g;
  if (a[11] !== t.icon || a[12] !== o || a[13] !== d || a[14] !== c) g = x(t.icon, d, o, c), 
  a[11] = t.icon, a[12] = o, a[13] = d, a[14] = c, a[15] = g; else g = a[15];
  let k;
  if (a[16] !== t.color || a[17] !== p || a[18] !== g) k = e(n, {
    color: f,
    dimColor: p,
    children: g
  }), a[16] = t.color, a[17] = p, a[18] = g, a[19] = k; else k = a[19];
  return k;
}

function x(l, i, s, u) {
  let o = s === void 0 ? u && " " : Ii(" ", egn() - ie(l));
  return r(Q, {
    children: [ s === "trailing" && o, e(n, {
      "aria-label": i,
      children: l
    }), s !== "trailing" && o ]
  });
}

function B(l) {
  return l in I;
}

function M(l) {
  let a = w(17), {status: i, spoken: s, slot: u, withSpace: o} = l, c = _S(), m;
  if (a[0] !== c.subtle) m = Nb(c.subtle), a[0] = c.subtle, a[1] = m; else m = a[1];
  let t = m, d;
  if (a[2] !== c.inactive) d = Nb(c.inactive), a[2] = c.inactive, a[3] = d; else d = a[3];
  let f = d, {color: p} = Tge[i], g = ge.level >= 2 && t !== null && f !== null;
  const k = g ? xmt : I[i];
  let K;
  if (a[4] !== u || a[5] !== s || a[6] !== k || a[7] !== o) K = x(k, s, u, o), a[4] = u, 
  a[5] = s, a[6] = k, a[7] = o, a[8] = K; else K = a[8];
  let b = K;
  if (g && i === "working") {
    let S;
    if (a[9] !== f || a[10] !== t || a[11] !== b) S = e(N, {
      dimmer: t,
      dim: f,
      children: b
    }), a[9] = f, a[10] = t, a[11] = b, a[12] = S; else S = a[12];
    return S;
  }
  const S = !p;
  let X;
  if (a[13] !== p || a[14] !== b || a[15] !== S) X = e(n, {
    color: p,
    dimColor: S,
    children: b
  }), a[13] = p, a[14] = b, a[15] = S, a[16] = X; else X = a[16];
  return X;
}

function N(l) {
  let d = w(8), {dimmer: i, dim: s, children: u} = l, o = Lu(), c = st(), a = o || c, m = Math.ceil(XMe(Y) / hg) * hg, [, t] = ma(a ? null : m), f;
  if (d[0] !== s || d[1] !== i || d[2] !== a || d[3] !== t) f = a ? "subtle" : Dm(sy(i, s, qMe(Math.floor(t / m) % L, L))), 
  d[0] = s, d[1] = i, d[2] = a, d[3] = t, d[4] = f; else f = d[4];
  let p = f, g;
  if (d[5] !== u || d[6] !== p) g = e(n, {
    color: p,
    children: u
  }), d[5] = u, d[6] = p, d[7] = g; else g = d[7];
  return g;
}

export { Tge, N7e, egn, ct };
