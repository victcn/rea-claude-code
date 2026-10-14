// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { V } from "./chunk-jb3h1y0s.js";

import { ie, ut } from "./chunk-yxennhe9.js";

import { hP } from "./chunk-pegykqwq.js";

import { zae } from "./chunk-vbtgyghk.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { an, s, n } from "./chunk-3vw306fv.js";

import { h0 } from "./chunk-yrmy36g6.js";

import { es } from "./chunk-e937g4pd.js";

import { _Pn } from "./chunk-84yp45y8.js";

import { Hp } from "./chunk-bkx9v5fh.js";

import { te } from "./chunk-48xcyvwy.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { P, R, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

F();

function Se(v) {
  return v.expandedView;
}

function Be(T, U) {
  return parseInt(T, 10) - parseInt(U, 10);
}

function Ie(ee) {
  return `#${ee}`;
}

function P8n(i) {
  let x = w(2), {hidden: c} = i, f = V(Se) === "tasks", d = zae();
  if (c || !f || !d || d.length === 0) {
    return null;
  }
  let z;
  if (x[0] !== d) z = e(s, {
    width: "100%",
    flexDirection: "column",
    children: e(I8n, {
      tasks: d,
      isStandalone: !0
    })
  }), x[0] = d, x[1] = z; else z = x[1];
  return z;
}

var oe = 3e4;

function W(i, c) {
  let f = parseInt(i.id, 10), d = parseInt(c.id, 10);
  if (!isNaN(f) && !isNaN(d)) return f - d;
  return i.id.localeCompare(c.id);
}

function I8n({tasks: i, isStandalone: c = !1}) {
  let f = V(t => t.teamContext), d = V(t => t.tasks), [x, z] = y(0), {rows: v, columns: I} = Te(), A = an(), C = R(null);
  C.current ??= new Map(i.filter(t => t.status === "completed").map(t => [ t.id, null ]));
  let a = C.current, S = v <= 10 ? 0 : Math.min(5, Math.max(3, v - 14)), E = new Set(i.filter(t => t.status === "completed").map(t => t.id)), _ = Date.now();
  for (let t of E) if (!a.has(t)) a.set(t, _);
  for (let t of a.keys()) if (!E.has(t)) a.delete(t);
  if (P(() => {
    let t = Date.now(), o = 1 / 0;
    for (let l of a.values()) {
      if (l === null) continue;
      let m = l + oe;
      if (m > t && m < o) o = m;
    }
    if (o === 1 / 0) return;
    return A.setTimeout(() => z(l => l + 1), o - t);
  }, [ i, A, a, x ]), !hP()) return null;
  if (i.length === 0) return null;
  let O = {};
  if (es() && f?.teammates) {
    for (let t of Object.values(f.teammates)) if (t.color) {
      let o = h0[t.color];
      if (o) O[t.name] = o;
    }
  }
  let g = {}, j = new Set;
  if (es()) {
    for (let t of Object.values(d)) if (Hp(t) && t.status === "running") {
      j.add(t.identity.agentName), j.add(t.identity.agentId);
      let o = t.progress?.recentActivities, l = (o && _Pn(o)) ?? t.progress?.lastActivity?.activityDescription;
      if (l) g[t.identity.agentName] = l, g[t.identity.agentId] = l;
    }
  }
  let H = N(i, t => t.status === "completed"), D = N(i, t => t.status === "pending"), q = i.length - H - D, B = new Set(i.filter(t => t.status !== "completed").map(t => t.id)), G = i.length > S, M, h;
  if (G) {
    let t = [], o = [];
    for (let u of i.filter(T => T.status === "completed")) {
      let T = a.get(u.id);
      if (typeof T === "number" && _ - T < oe) t.push(u); else o.push(u);
    }
    t.sort(W), o.sort(W);
    let l = i.filter(u => u.status === "in_progress").sort(W), m = i.filter(u => u.status === "pending").sort((u, T) => {
      let U = u.blockedBy.some(J => B.has(J)), ee = T.blockedBy.some(J => B.has(J));
      if (U !== ee) return U ? 1 : -1;
      return W(u, T);
    }), p = [ ...t, ...l, ...m, ...o ];
    M = p.slice(0, S), h = p.slice(S);
  } else M = [ ...i ].sort(W), h = [];
  let b = "";
  if (h.length > 0) {
    let t = [], o = N(h, p => p.status === "pending"), l = N(h, p => p.status === "in_progress"), m = N(h, p => p.status === "completed");
    if (l > 0) t.push(`${l} in progress`);
    if (o > 0) t.push(`${o} pending`);
    if (m > 0) t.push(`${m} completed`);
    b = ` \u2026 +${t.join(", ")}`;
  }
  let L = r(Q, {
    children: [ M.map(t => e(de, {
      task: t,
      ownerColor: t.owner ? O[t.owner] : void 0,
      openBlockers: t.blockedBy.filter(o => B.has(o)),
      activity: t.owner ? g[t.owner] : void 0,
      ownerActive: t.owner ? j.has(t.owner) : !1,
      columns: I
    }, t.id)), S > 0 && b && e(n, {
      dimColor: !0,
      children: b
    }) ]
  });
  if (c) return r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginLeft: 2,
    children: [ e(s, {
      children: r(n, {
        dimColor: !0,
        children: [ e(n, {
          bold: !0,
          children: i.length
        }), " tasks (", e(n, {
          bold: !0,
          children: H
        }), " done, ", q > 0 && r(Q, {
          children: [ e(n, {
            bold: !0,
            children: q
          }), " in progress, " ]
        }), e(n, {
          bold: !0,
          children: D
        }), " open)" ]
      })
    }), L ]
  });
  return e(s, {
    flexDirection: "column",
    children: L
  });
}

function O8n(i) {
  switch (i) {
   case "completed":
    return {
      icon: te.tick,
      color: "success"
    };

   case "in_progress":
    return {
      icon: te.squareSmallFilled,
      color: "claude"
    };

   case "pending":
    return {
      icon: te.squareSmall,
      color: void 0
    };
  }
}

function de(i) {
  let a = w(37), {task: c, ownerColor: f, openBlockers: d, activity: x, ownerActive: z, columns: v} = i, I = c.status === "completed", A = c.status === "in_progress", C = d.length > 0, S;
  if (a[0] !== c.status) S = O8n(c.status), a[0] = c.status, a[1] = S; else S = a[1];
  let {icon: E, color: _} = S, O = A && !C && x, g = v >= 60 && c.owner && z, j;
  if (a[2] !== g || a[3] !== c.owner) j = g ? ie(` (@${c.owner})`) : 0, a[2] = g, 
  a[3] = c.owner, a[4] = j; else j = a[4];
  let H = j, D = Math.max(15, v - 15 - H), q;
  if (a[5] !== D || a[6] !== c.subject) q = ut(c.subject, D), a[5] = D, a[6] = c.subject, 
  a[7] = q; else q = a[7];
  let B = q, G = Math.max(15, v - 15), M;
  if (a[8] !== x || a[9] !== G) M = x ? ut(x, G) : void 0, a[8] = x, a[9] = G, a[10] = M; else M = a[10];
  let h = M, b;
  if (a[11] !== _ || a[12] !== E) b = r(n, {
    color: _,
    children: [ E, " " ]
  }), a[11] = _, a[12] = E, a[13] = b; else b = a[13];
  const L = I || C;
  let t;
  if (a[14] !== B || a[15] !== I || a[16] !== A || a[17] !== L) t = e(n, {
    bold: A,
    strikethrough: I,
    dimColor: L,
    children: B
  }), a[14] = B, a[15] = I, a[16] = A, a[17] = L, a[18] = t; else t = a[18];
  let o;
  if (a[19] !== f || a[20] !== g || a[21] !== c.owner) o = g && r(n, {
    dimColor: !0,
    children: [ " (", f ? r(n, {
      color: f,
      children: [ "@", c.owner ]
    }) : `@${c.owner}`, ")" ]
  }), a[19] = f, a[20] = g, a[21] = c.owner, a[22] = o; else o = a[22];
  let l;
  if (a[23] !== C || a[24] !== d) l = C && r(n, {
    dimColor: !0,
    children: [ " ", te.pointerSmall, " blocked by", " ", [ ...d ].sort(Be).map(Ie).join(", ") ]
  }), a[23] = C, a[24] = d, a[25] = l; else l = a[25];
  let m;
  if (a[26] !== b || a[27] !== t || a[28] !== o || a[29] !== l) m = r(s, {
    children: [ b, t, o, l ]
  }), a[26] = b, a[27] = t, a[28] = o, a[29] = l, a[30] = m; else m = a[30];
  let p;
  if (a[31] !== h || a[32] !== O) p = O && h && e(s, {
    children: r(n, {
      dimColor: !0,
      children: [ "  ", h, te.ellipsis ]
    })
  }), a[31] = h, a[32] = O, a[33] = p; else p = a[33];
  let u;
  if (a[34] !== m || a[35] !== p) u = r(s, {
    flexDirection: "column",
    children: [ m, p ]
  }), a[34] = m, a[35] = p, a[36] = u; else u = a[36];
  return u;
}

export { P8n, I8n, O8n };
