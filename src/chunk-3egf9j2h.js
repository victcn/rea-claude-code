// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { I, Br } from "./chunk-5wbhf1bk.js";

import { yo, ULs, JK, SKn, lPo } from "./chunk-q6wab2jw.js";

import { w } from "./chunk-9rj1xaxr.js";

import { r_, cm } from "./chunk-xywp7esx.js";

import { ie, ut, rn, cme, xr } from "./chunk-yxennhe9.js";

import { s, n, Gi } from "./chunk-3vw306fv.js";

import { cO } from "./chunk-1pzzpwf7.js";

import { ct } from "./chunk-qk83zz02.js";

import { pl, is } from "./chunk-1pxjahnn.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { SS } from "./chunk-zkmvjknk.js";

import { te, yds } from "./chunk-48xcyvwy.js";

import { Lu } from "./chunk-81s9fscg.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { qs } from "./chunk-05wvva46.js";

import { dc, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function WQe(l, t) {
  let a = i => cm(i) ?? r_(i);
  if (t != null) return `${l == null ? "" : `${a(l)} `}${ULs} ${a(t)}`;
  return l != null ? a(l) : "";
}

function _t(ge) {
  return ge.state === "done";
}

function jt(pe) {
  return pe.state === "error";
}

function zt(ee) {
  return ee.state === "start" || ee.state === "progress";
}

function Vt(v) {
  return v.state === "done";
}

function Bt(T) {
  return T.state === "error";
}

function Ut(v, T) {
  return e(n, {
    dimColor: !0,
    children: v
  }, T);
}

function S3n(l) {
  let t = new Map, a = [], i = new Map;
  for (let o of l) if (o.type === "workflow_agent") t.set(o.index, o); else if (o.type === "workflow_log") a.push(o.message); else if (o.type === "workflow_phase") i.set(o.index, {
    title: o.title,
    kind: o.kind
  });
  return {
    agents: [ ...t.values() ].sort((o, d) => o.index - d.index),
    logs: a,
    phaseTitles: i
  };
}

function ae(l, t) {
  if (!l.some(i => i.phaseIndex != null)) return null;
  let a = new Map;
  for (let i of l) {
    let o = i.phaseIndex ?? 0, d = a.get(o);
    if (!d) {
      let c = t.get(o);
      d = {
        phaseIndex: o,
        title: c?.title ?? `Phase ${o}`,
        kind: c?.kind,
        agents: []
      }, a.set(o, d);
    }
    d.agents.push(i);
  }
  return [ ...a.values() ].sort((i, o) => i.phaseIndex - o.phaseIndex);
}

function K(l) {
  let g = w(31), {row: t, isLast: a} = l, i = a ? "\u2514\u2500" : "\u251c\u2500", o = t.state === "start" || t.state === "progress", d;
  c: switch (t.state) {
   case "done":
    {
      d = "success";
      break c;
    }

   case "error":
    {
      d = "error";
      break c;
    }

   case "start":
   case "progress":
    {
      d = "running";
    }
  }
  let m;
  if (g[0] !== o || g[1] !== t.agentType || g[2] !== t.durationMs || g[3] !== t.fallbackModel || g[4] !== t.model || g[5] !== t.tokens || g[6] !== t.toolCalls) {
    m = [];
    if (t.agentType != null) m.push(t.agentType);
    if (t.model != null || t.fallbackModel != null) {
      let u;
      if (g[8] !== t.fallbackModel || g[9] !== t.model) u = WQe(t.model, t.fallbackModel), 
      g[8] = t.fallbackModel, g[9] = t.model, g[10] = u; else u = g[10];
      m.push(u);
    }
    if (t.tokens != null) {
      let u;
      if (g[11] !== t.tokens) u = xr(t.tokens), g[11] = t.tokens, g[12] = u; else u = g[12];
      m.push(`${u} tok`);
    }
    if (t.toolCalls != null && t.toolCalls > 0) {
      const u = t.toolCalls;
      let f;
      if (g[13] !== t.toolCalls) f = I(t.toolCalls, "tool"), g[13] = t.toolCalls, g[14] = f; else f = g[14];
      m.push(`${u} ${f}`);
    }
    if (t.durationMs != null) {
      let u;
      if (g[15] !== t.durationMs) u = rn(t.durationMs), g[15] = t.durationMs, g[16] = u; else u = g[16];
      m.push(u);
    }
    if (o && m.length === 0) m.push("\u2026running");
    g[0] = o, g[1] = t.agentType, g[2] = t.durationMs, g[3] = t.fallbackModel, g[4] = t.model, 
    g[5] = t.tokens, g[6] = t.toolCalls, g[7] = m;
  } else m = g[7];
  let u;
  if (g[17] !== d) u = e(ct, {
    status: d
  }), g[17] = d, g[18] = u; else u = g[18];
  const f = t.label;
  let p;
  if (g[19] !== m) p = m.length > 0 && r(n, {
    dimColor: !0,
    children: [ "  ", m.join(" \xb7 ") ]
  }), g[19] = m, g[20] = p; else p = g[20];
  let h;
  if (g[21] !== t.error || g[22] !== t.state) h = t.state === "error" && t.error && r(n, {
    color: "error",
    children: [ " ", "\u2014", " ", t.error ]
  }), g[21] = t.error, g[22] = t.state, g[23] = h; else h = g[23];
  let C;
  if (g[24] !== o || g[25] !== t.label || g[26] !== u || g[27] !== p || g[28] !== h || g[29] !== i) C = e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: o,
      children: [ i, " ", u, " ", f, p, h ]
    })
  }), g[24] = o, g[25] = t.label, g[26] = u, g[27] = p, g[28] = h, g[29] = i, g[30] = C; else C = g[30];
  return C;
}

function ye(l) {
  let o = w(41), {group: t, verbose: a, width: i} = l, d;
  if (o[0] !== t.agents) d = t.agents.filter(_t), o[0] = t.agents, o[1] = d; else d = o[1];
  let c = d, g, m, u, f, p;
  if (o[2] !== c.length || o[3] !== t.agents || o[4] !== a) {
    let h = t.agents.filter(jt);
    let C = t.agents.filter(zt);
    p = t.agents.length;
    m = c.length;
    u = h.length;
    g = m + u === p && p > 0;
    f = a ? t.agents : [ ...h, ...C ];
    o[2] = c.length, o[3] = t.agents, o[4] = a, o[5] = g, o[6] = m, o[7] = u, o[8] = f, 
    o[9] = p;
  } else g = o[5], m = o[6], u = o[7], f = o[8], p = o[9];
  let b = f, x = t.agents[0]?.model, M;
  if (o[10] !== x || o[11] !== t.agents) M = x && t.agents.every(A => A.model === x) ? WQe(x, void 0) : void 0, 
  o[10] = x, o[11] = t.agents, o[12] = M; else M = o[12];
  let P = M, v = !g ? "running" : u > 0 ? "error" : "success";
  const T = t.kind === "child" ? "permission" : "subtle";
  let _;
  if (o[13] !== t.title) _ = e(n, {
    bold: !0,
    children: t.title
  }), o[13] = t.title, o[14] = _; else _ = o[14];
  let W;
  if (o[15] !== v) W = e(ct, {
    status: v
  }), o[15] = v, o[16] = W; else W = o[16];
  const D = P && ` \xb7 ${P}`;
  let G;
  if (o[17] !== u) G = u > 0 && r(n, {
    color: "error",
    children: [ " ", "\xb7", " ", u, " failed" ]
  }), o[17] = u, o[18] = G; else G = o[18];
  let j;
  if (o[19] !== m || o[20] !== D || o[21] !== G || o[22] !== p) j = r(n, {
    dimColor: !0,
    children: [ m, "/", p, D, G ]
  }), o[19] = m, o[20] = D, o[21] = G, o[22] = p, o[23] = j; else j = o[23];
  let z;
  if (o[24] !== _ || o[25] !== W || o[26] !== j) z = e(s, {
    paddingX: 1,
    children: r(n, {
      children: [ _, "  ", W, " ", j ]
    })
  }), o[24] = _, o[25] = W, o[26] = j, o[27] = z; else z = o[27];
  let U;
  if (o[28] !== m || o[29] !== a) U = !a && m > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [ e(ct, {
        status: "success"
      }), " ", m, " done" ]
    })
  }), o[28] = m, o[29] = a, o[30] = U; else U = o[30];
  let X;
  if (o[31] !== b) {
    let O;
    if (o[33] !== b.length) O = (Z, Y) => e(K, {
      row: Z,
      isLast: Y === b.length - 1
    }, Z.index), o[33] = b.length, o[34] = O; else O = o[34];
    X = b.map(O);
    o[31] = b, o[32] = X;
  } else X = o[32];
  let O;
  if (o[35] !== z || o[36] !== U || o[37] !== X || o[38] !== T || o[39] !== i) O = r(s, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: T,
    alignSelf: "flex-start",
    width: i,
    children: [ z, U, X ]
  }), o[35] = z, o[36] = U, o[37] = X, o[38] = T, o[39] = i, o[40] = O; else O = o[40];
  return O;
}

var _e = 8;

function Ce(l) {
  let i = w(26), {agents: t, verbose: a} = l, o;
  if (i[0] !== t || i[1] !== a) o = a ? t : t.slice(-_e), i[0] = t, i[1] = a, i[2] = o; else o = i[2];
  let d = o, c = t.length - d.length, g;
  if (i[3] !== t) g = N(t, Vt), i[3] = t, i[4] = g; else g = i[4];
  let m = g, u = N(t, Bt);
  const f = t.length;
  let p;
  if (i[5] !== t.length) p = I(t.length, "agent"), i[5] = t.length, i[6] = p; else p = i[6];
  let h;
  if (i[7] !== u) h = u > 0 && r(n, {
    color: "error",
    children: [ " ", "\xb7", " ", u, " failed" ]
  }), i[7] = u, i[8] = h; else h = i[8];
  let C;
  if (i[9] !== t.length || i[10] !== m || i[11] !== p || i[12] !== h) C = r(n, {
    children: [ f, " ", p, " ", "\xb7", " ", m, " done", h ]
  }), i[9] = t.length, i[10] = m, i[11] = p, i[12] = h, i[13] = C; else C = i[13];
  let b;
  if (i[14] !== c || i[15] !== d) {
    let x;
    if (i[17] !== c || i[18] !== d.length) x = (M, A) => e(K, {
      row: M,
      isLast: A === d.length - 1 && c === 0
    }, M.index), i[17] = c, i[18] = d.length, i[19] = x; else x = i[19];
    b = d.map(x);
    i[14] = c, i[15] = d, i[16] = b;
  } else b = i[16];
  let x;
  if (i[20] !== c) x = c > 0 && e(s, {
    paddingLeft: 1,
    children: r(n, {
      dimColor: !0,
      children: [ "\u2514\u2500 \xb7 \xb7 \xb7 +", c, " more" ]
    })
  }), i[20] = c, i[21] = x; else x = i[21];
  let P;
  if (i[22] !== C || i[23] !== b || i[24] !== x) P = r(s, {
    flexDirection: "column",
    children: [ C, b, x ]
  }), i[22] = C, i[23] = b, i[24] = x, i[25] = P; else P = i[25];
  return P;
}

function F$r(l) {
  let g = w(18), {collected: t, verbose: a, width: i} = l, {agents: o, logs: d, phaseTitles: c} = t;
  if (o.length === 0 && d.length === 0) {
    return null;
  }
  let m, u, f, p, h;
  if (g[0] !== o || g[1] !== d || g[2] !== c || g[3] !== a || g[4] !== i) {
    let C = ae(o, c);
    let b;
    if (g[10] !== d) b = d.at(-1), g[10] = d, g[11] = b; else b = g[11];
    let x = b;
    let M = d.slice(-3, -1);
    m = s;
    u = "column";
    f = x && e(s, {
      marginBottom: C || o.length > 0 ? 1 : 0,
      children: r(n, {
        children: [ te.pointer, " ", x ]
      })
    });
    p = C ? e(s, {
      flexDirection: "column",
      children: C.map((A, P) => r(dc, {
        children: [ e(ye, {
          group: A,
          verbose: a,
          width: i
        }), P < C.length - 1 && e(s, {
          paddingLeft: 3,
          children: e(n, {
            dimColor: !0,
            children: "\u2193"
          })
        }) ]
      }, A.phaseIndex))
    }) : o.length > 0 ? e(Ce, {
      agents: o,
      verbose: a
    }) : null;
    h = M.length > 0 && e(s, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: M.map(Ut)
    });
    g[0] = o, g[1] = d, g[2] = c, g[3] = a, g[4] = i, g[5] = m, g[6] = u, g[7] = f, 
    g[8] = p, g[9] = h;
  } else m = g[5], u = g[6], f = g[7], p = g[8], h = g[9];
  let b;
  if (g[12] !== m || g[13] !== u || g[14] !== f || g[15] !== p || g[16] !== h) b = r(m, {
    flexDirection: u,
    children: [ f, p, h ]
  }), g[12] = m, g[13] = u, g[14] = f, g[15] = p, g[16] = h, g[17] = b; else b = g[17];
  return b;
}

F();

function An() {
  return Date.now();
}

var R = 4, Ze = 80;

function Re(l) {
  let t = w(2), a;
  if (t[0] === S) a = lPo(), t[0] = a; else a = t[0];
  let i = a, [o, d] = y(0), c = Lu(), g;
  if (t[1] === S) g = () => d(m => (m + 1) % i.length), t[1] = g; else g = t[1];
  return Gi(g, l && !c ? Ze : null), i[o % i.length];
}

function ve(l) {
  let o = w(14), {done: t, total: a, running: i} = l, d;
  if (o[0] !== t || o[1] !== a) d = a > 0 ? Math.round(t / a * R) : 0, o[0] = t, o[1] = a, 
  o[2] = d; else d = o[2];
  let c = d, g = Math.min(i ? R - 1 : R, Math.max(0, c)), m = i ? Math.min(R - g, 1) : 0, u = R - g - m, f = Re(m > 0), p;
  if (o[3] !== g) p = g > 0 && e(n, {
    color: "success",
    children: SKn.repeat(g)
  }), o[3] = g, o[4] = p; else p = o[4];
  let h;
  if (o[5] !== f || o[6] !== m) h = m > 0 && e(n, {
    color: "success",
    children: f
  }), o[5] = f, o[6] = m, o[7] = h; else h = o[7];
  let C;
  if (o[8] !== u) C = u > 0 && e(n, {
    color: "subtle",
    dimColor: !0,
    children: SKn.repeat(u)
  }), o[8] = u, o[9] = C; else C = o[9];
  let b;
  if (o[10] !== p || o[11] !== h || o[12] !== C) b = r(n, {
    children: [ p, h, C ]
  }), o[10] = p, o[11] = h, o[12] = C, o[13] = b; else b = o[13];
  return b;
}

var w3n = 9, Je = 12;

function v3n(l) {
  let o = w(9), t = Te(), {rows: a} = is(t), i = pl(), d;
  if (o[0] !== i || o[1] !== l || o[2] !== a) d = i ? a : cO() ? Math.floor(a / 2) : l ? Math.max(Je, a - w3n) : a, 
  o[0] = i, o[1] = l, o[2] = a, o[3] = d; else d = o[3];
  let c = d, {columns: g} = t, m = Math.max(24, g - 6), u;
  if (o[4] !== c || o[5] !== g || o[6] !== a || o[7] !== m) u = {
    availableRows: c,
    width: m,
    rows: a,
    columns: g
  }, o[4] = c, o[5] = g, o[6] = a, o[7] = m, o[8] = u; else u = o[8];
  return u;
}

function zQe(l) {
  let o = w(1), t = l.status === "running", [a, i] = y(An), d;
  if (o[0] === S) d = () => i(Date.now()), o[0] = d; else d = o[0];
  return Gi(d, t ? 1e3 : null), Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0));
}

var ue = 17;

function E3n(l) {
  let P = w(28), {index: t, title: a, done: i, total: o, status: d, selected: c, trailing: g} = l, m = c === void 0 ? !1 : c, u = g === void 0 ? "" : g, f = d === "done", p = d === "failed", h = f || p, C = m ? "permission" : f ? "success" : p ? "error" : "subtle", b = m ? te.pointer : " ", x = f ? te.tick : p ? te.cross : String(t), M = ie(b) + 1 + ie(x) + 1, A = Math.max(1, ue - M), v;
  if (P[0] !== a || P[1] !== A) v = ut(a, A), P[0] = a, P[1] = A, P[2] = v; else v = P[2];
  let T = v, _ = `${b} ${x} ${T}`, W = Math.max(0, ue - ie(_)), D = o > 0 ? `${i}/${o}` : "";
  const G = m ? "permission" : void 0;
  let j;
  if (P[3] !== b || P[4] !== G) j = e(n, {
    color: G,
    children: b
  }), P[3] = b, P[4] = G, P[5] = j; else j = P[5];
  let z;
  if (P[6] !== C || P[7] !== x) z = e(n, {
    color: C,
    children: x
  }), P[6] = C, P[7] = x, P[8] = z; else z = P[8];
  const U = m ? "permission" : f ? "success" : p ? "error" : void 0, X = !m && !h;
  let O;
  if (P[9] !== T || P[10] !== U || P[11] !== X) O = e(n, {
    color: U,
    dimColor: X,
    children: T
  }), P[9] = T, P[10] = U, P[11] = X, P[12] = O; else O = P[12];
  let Z;
  if (P[13] !== W) Z = " ".repeat(W), P[13] = W, P[14] = Z; else Z = P[14];
  let Y;
  if (P[15] !== Z || P[16] !== j || P[17] !== z || P[18] !== O) Y = r(n, {
    wrap: "truncate-end",
    children: [ j, " ", z, " ", O, Z ]
  }), P[15] = Z, P[16] = j, P[17] = z, P[18] = O, P[19] = Y; else Y = P[19];
  const ge = m ? "permission" : f ? "success" : p ? "error" : void 0, pe = !m && !h, ee = u ? `  ${u}` : "";
  let fe;
  if (P[20] !== D || P[21] !== ge || P[22] !== pe || P[23] !== ee) fe = r(n, {
    wrap: "truncate-end",
    color: ge,
    dimColor: pe,
    children: [ D, ee ]
  }), P[20] = D, P[21] = ge, P[22] = pe, P[23] = ee, P[24] = fe; else fe = P[24];
  let wt;
  if (P[25] !== Y || P[26] !== fe) wt = r(s, {
    children: [ Y, fe ]
  }), P[25] = Y, P[26] = fe, P[27] = wt; else wt = P[27];
  return wt;
}

function k3n(l) {
  let p = w(23), {name: t, done: a, total: i, running: o, elapsedMs: d, complete: c, dotState: g, phaseText: m, selected: u} = l, f = u === void 0 ? !1 : u, h;
  if (p[0] !== d) h = d !== void 0 ? cme(d) : void 0, p[0] = d, p[1] = h; else h = p[1];
  let C = h, b = c ? ` \xb7 ${te.ellipsis} to view` : "", x = g === "failed" ? "error" : "success", M;
  if (p[2] !== x) M = e(n, {
    color: x,
    children: yo
  }), p[2] = x, p[3] = M; else M = p[3];
  let A;
  if (p[4] !== t || p[5] !== f) A = t ? r(n, {
    color: f ? "claude" : void 0,
    bold: f,
    children: [ t, " " ]
  }) : null, p[4] = t, p[5] = f, p[6] = A; else A = p[6];
  let P;
  if (p[7] !== a || p[8] !== o || p[9] !== i) P = e(ve, {
    done: a,
    total: i,
    running: o
  }), p[7] = a, p[8] = o, p[9] = i, p[10] = P; else P = p[10];
  const v = !f, T = m ? ` \xb7 ${m}` : "", _ = ` \xb7 ${a}/${i} agents`, W = C ? ` \xb7 ${C}` : "";
  let D;
  if (p[11] !== b || p[12] !== f || p[13] !== v || p[14] !== T || p[15] !== _ || p[16] !== W) D = r(n, {
    dimColor: v,
    bold: f,
    children: [ T, _, W, b ]
  }), p[11] = b, p[12] = f, p[13] = v, p[14] = T, p[15] = _, p[16] = W, p[17] = D; else D = p[17];
  let G;
  if (p[18] !== D || p[19] !== M || p[20] !== A || p[21] !== P) G = r(n, {
    wrap: "truncate-end",
    children: [ M, " ", A, P, D ]
  }), p[18] = D, p[19] = M, p[20] = A, p[21] = P, p[22] = G; else G = p[22];
  return G;
}

function GQe(l) {
  let c = w(17), {name: t, subtext: a, stats: i, width: o} = l, d = pl(), g;
  if (c[0] !== d || c[1] !== o) g = !d && e(n, {
    color: "text",
    wrap: "truncate-end",
    children: JK.repeat(Math.max(1, o))
  }), c[0] = d, c[1] = o, c[2] = g; else g = c[2];
  let m;
  if (c[3] !== t) m = r(n, {
    bold: !0,
    color: "permission",
    wrap: "truncate-end",
    children: [ " ", t ]
  }), c[3] = t, c[4] = m; else m = c[4];
  let u;
  if (c[5] !== a) u = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    children: r(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: [ " ", a ]
    })
  }), c[5] = a, c[6] = u; else u = c[6];
  let f;
  if (c[7] !== i) f = i ? e(s, {
    flexShrink: 0,
    children: r(n, {
      dimColor: !0,
      children: [ i, " " ]
    })
  }) : null, c[7] = i, c[8] = f; else f = c[8];
  let p;
  if (c[9] !== u || c[10] !== f || c[11] !== o) p = r(s, {
    width: o,
    overflow: "hidden",
    children: [ u, f ]
  }), c[9] = u, c[10] = f, c[11] = o, c[12] = p; else p = c[12];
  let h;
  if (c[13] !== g || c[14] !== m || c[15] !== p) h = r(s, {
    flexDirection: "column",
    children: [ g, m, p ]
  }), c[13] = g, c[14] = m, c[15] = p, c[16] = h; else h = c[16];
  return h;
}

function $e(l) {
  let t = N(l.agents, u => u.state === "done"), a = N(l.agents, u => u.state === "error"), i = l.agents.length, o = t + a === i && i > 0, d = 0, c = 1 / 0, g = 0;
  for (let u of l.agents) {
    if (u.tokens) d += u.tokens;
    if (u.startedAt != null) {
      if (u.startedAt < c) c = u.startedAt;
      let f = u.lastProgressAt ?? u.startedAt;
      if (f > g) g = f;
    }
  }
  let m = c < 1 / 0 ? g - c : 0;
  return {
    title: l.title,
    status: o ? a > 0 ? "failed" : "done" : "running",
    agents: l.agents,
    doneCount: t,
    totalCount: i,
    tokens: d,
    durationMs: m
  };
}

function Sn(l) {
  return {
    title: l,
    status: "not-started",
    agents: [],
    doneCount: 0,
    totalCount: 0,
    tokens: 0,
    durationMs: 0
  };
}

function ft(l) {
  return l.toLowerCase().trim();
}

function Rn(l, t) {
  let a = ft(l), i = ft(t);
  if (!a || !i) return a === i;
  return a === i || a.startsWith(i) || i.startsWith(a);
}

function vn(l, t) {
  let a = new Set, i = [];
  function o(d) {
    for (let c of t) {
      if (a.has(c)) continue;
      if (Rn(d, c.title)) return a.add(c), c;
    }
    return;
  }
  for (let d of l ?? []) {
    let c = o(d.title);
    i.push(c ? $e(c) : Sn(d.title));
  }
  for (let d of t) if (!a.has(d)) i.push($e(d));
  return i;
}

function U$r(l) {
  let t = S3n(l.workflowProgress), a = ae(t.agents, t.phaseTitles) ?? [], i = vn(l.phases, a);
  if (i.length === 0 && t.agents.length > 0) return [ $e({
    phaseIndex: 0,
    title: "Agents",
    agents: t.agents
  }) ];
  return i;
}

var me = 16;

function B$r(l, t) {
  return null;
}

var ht = me + 8, We = "aeiou", Wn = new Map([ [ "commit", "committing" ], [ "submit", "submitting" ], [ "format", "formatting" ], [ "edit", "editing" ], [ "exit", "exiting" ], [ "setup", null ], [ "cleanup", null ], [ "init", null ] ]), Dn = /^[A-Za-z]{3,12}$/;

function $n(l) {
  if (!Dn.test(l)) return l;
  let t = l.toLowerCase(), a = Wn.get(t);
  if (a !== void 0) return a === null ? l : l[0] + a.slice(1);
  if (t.endsWith("ing")) return l;
  if (t.endsWith("ie")) return `${l.slice(0, -2)}ying`;
  if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) return `${l.slice(0, -1)}ing`;
  let i = t.at(-1);
  if (t.length <= 4 && !We.includes(t.at(-3)) && We.includes(t.at(-2)) && !We.includes(i) && !"wxy".includes(i)) return `${l}${i}ing`;
  return `${l}ing`;
}

var De = " & ";

function j$r(l) {
  let {titles: t, positionStart: a, totalPhases: i} = l, o = t.map(c => $n(Br(c)));
  if (o.length === 1) return `${ut(o[0] ?? "", me)} (${a}/${i})`;
  if (o.length === 2) {
    let c = o.map(m => ut(m, me)).join(De), g = Math.floor((ht - De.length) / 2);
    return ie(c) <= ht ? c : o.map(m => ut(m, g)).join(De);
  }
  let d = ` +${o.length - 1}`;
  return ut(o[0] ?? "", me - ie(d)) + d;
}

function W$r(l, t) {
  let a = 0, i = 0;
  for (let o of l) a += o.doneCount, i += o.totalCount;
  return {
    doneAgents: a,
    totalAgents: Math.max(t, i, a)
  };
}

function z$r(l) {
  if (l.script.length > 0) {
    let t = SS(l.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return l.description || l.summary || "";
}

function G$r(l, t, a, i) {
  let o = l.status === "completed" ? " \xb7 done" : l.status === "killed" ? " \xb7 stopped" : l.status === "paused" ? " \xb7 paused" : qs(l.status) ? " \xb7 failed" : "", d = l.status === "running" && l.rateLimitWait !== void 0 ? yds(l.rateLimitWait.resetsAt) : t, c = `${a.doneAgents}/${a.totalAgents} ${I(a.totalAgents, "agent")} \xb7 ${cme(i)}${o}`;
  return {
    name: l.workflowName ?? l.summary ?? l.description,
    subtext: d,
    stats: c
  };
}

function tze(l, t = 0) {
  let a = 0, i = 0, o = 0, d = 0, c = !1;
  for (let u of l) {
    if (u.type !== "workflow_agent") continue;
    if (a++, u.state === "done") i++, d++; else if (u.state === "error") o++, d++; else if (u.state === "start" || u.state === "progress") {
      if (c = !0, u.startedAt !== void 0 || u.queuedAt === void 0 || (u.tokens ?? 0) > 0) d++;
    }
  }
  let g = Math.max(t, a), m = !c && a > 0 && i + o >= g;
  return {
    done: i,
    failedCount: o,
    running: c,
    total: g,
    started: d,
    complete: m
  };
}

export { WQe, S3n, F$r, w3n, v3n, zQe, E3n, k3n, GQe, U$r, B$r, j$r, W$r, z$r, G$r, tze };
