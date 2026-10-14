// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { is } from "./chunk-1pxjahnn.js";

import { d } from "./chunk-6ah1819r.js";

import { s, n } from "./chunk-3vw306fv.js";

import { ie } from "./chunk-yxennhe9.js";

import { $q } from "./chunk-tjp7we1h.js";

import { gg } from "./chunk-150qmpyg.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, P, xo, y, xt, F } from "./chunk-cpyd3eya.js";

import { ype } from "./chunk-b47tzzqx.js";

F();

F();

var c7e = Kt(null);

function Ujo() {
  let u = Ae(c7e), i = Ae($q);
  return () => {
    if (u === null || !i) return;
    try {
      i.getState().open.find(t => t.id === u)?.onClaimed?.();
    } catch (t) {
      d(t);
    }
  };
}

function X() {
  let u = Ae(c7e), i = Ae($q), t = u === null || !i ? void 0 : i.getState().open.find(o => o.id === u)?.countedAsk, a = t === void 0 ? void 0 : i?.askTally;
  return xt(a?.subscribe ?? V, () => t === void 0 || !a ? null : a.positionLabel(t));
}

function Hte(u, i, {perReveal: t = !1} = {}) {
  let a = Ae(c7e), o = Ae($q), q = xo(i), [f] = y(() => t && a !== null && o ? o.getState().open.find(p => p.id === a)?.revealSeq ?? 0 : 0);
  P(() => {
    if (a !== null && o) {
      if (!o.firstReveal(a, t ? `${u}@${f}` : u)) return;
    }
    q();
  }, [ a, o, u, t, f ]);
}

function V() {
  return () => {};
}

function R(u) {
  let i = ype(u);
  return i === null ? void 0 : String(i);
}

function eJ(u) {
  let m = w(25), {title: i, subtitle: t, color: a, requestSource: o, srPrefix: q, aside: f} = u, p = a === void 0 ? "permission" : a, c;
  I: switch (o?.type) {
   case "workflow-agent":
    {
      let l;
      if (m[0] !== o.workflowName) l = R(o.workflowName), m[0] = o.workflowName, m[1] = l; else l = m[1];
      let h = l;
      c = h !== void 0 ? `from the "${h}" workflow` : "from a workflow";
      break I;
    }

   case "subagent":
    {
      let l;
      if (m[2] !== o.agentName) l = R(o.agentName), m[2] = o.agentName, m[3] = l; else l = m[3];
      let x = l;
      c = x !== void 0 ? `from the ${x} agent` : "from a subagent";
      break I;
    }

   case "remote-agent":
    {
      c = "from a remote cloud agent";
      break I;
    }

   case "plugin":
    {
      let l;
      if (m[4] !== o.pluginName) l = R(o.pluginName), m[4] = o.pluginName, m[5] = l; else l = m[5];
      let k = l;
      c = k === void 0 ? "from a plugin" : `from the ${k} plugin`;
    }
  }
  const l = q !== void 0 ? `${q} ${i}` : void 0;
  let b;
  if (m[6] !== p || m[7] !== l || m[8] !== i) b = e(n, {
    "aria-label": l,
    bold: !0,
    color: p,
    children: i
  }), m[6] = p, m[7] = l, m[8] = i, m[9] = b; else b = m[9];
  let S;
  if (m[10] !== c) S = c !== void 0 && r(n, {
    children: [ e(n, {
      dimColor: !0,
      children: "\xb7 "
    }), c ]
  }), m[10] = c, m[11] = S; else S = m[11];
  let C;
  if (m[12] !== b || m[13] !== S) C = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [ b, S ]
  }), m[12] = b, m[13] = S, m[14] = C; else C = m[14];
  let L = C, v = f !== void 0 && ie(i) + (c === void 0 ? 0 : 1 + ie(`\xb7 ${c}`)) + 1 + ie(f.text) <= f.rowColumns;
  const B = v ? 1 : void 0;
  let A;
  if (m[15] !== f || m[16] !== v || m[17] !== L) A = v ? r(s, {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 1,
    children: [ L, e(n, {
      dimColor: !0,
      children: f.text
    }) ]
  }) : L, m[15] = f, m[16] = v, m[17] = L, m[18] = A; else A = m[18];
  let E;
  if (m[19] !== t) E = t != null && (typeof t === "string" ? e(n, {
    dimColor: !0,
    wrap: "truncate-start",
    children: t
  }) : t), m[19] = t, m[20] = E; else E = m[20];
  let U;
  if (m[21] !== B || m[22] !== A || m[23] !== E) U = r(s, {
    flexDirection: "column",
    flexGrow: B,
    children: [ A, E ]
  }), m[21] = B, m[22] = A, m[23] = E, m[24] = U; else U = m[24];
  return U;
}

function Ca(u) {
  let x = w(20), {title: i, subtitle: t, color: a, titleColor: o, innerPaddingX: q, requestSource: f, titleRight: p, children: c} = u, m = a === void 0 ? "permission" : a, l = q === void 0 ? 1 : q, h = X(), {columns: I} = is(Ae(gg) ?? {
    rows: 0,
    columns: 0
  }), k;
  if (x[0] !== h || x[1] !== I || x[2] !== p) k = p === void 0 && h !== null ? {
    text: h,
    rowColumns: I - 2
  } : void 0, x[0] = h, x[1] = I, x[2] = p, x[3] = k; else k = x[3];
  let b;
  if (x[4] !== f || x[5] !== t || x[6] !== k || x[7] !== i || x[8] !== o) b = e(eJ, {
    title: i,
    subtitle: t,
    color: o,
    requestSource: f,
    srPrefix: "Permission Required:",
    aside: k
  }), x[4] = f, x[5] = t, x[6] = k, x[7] = i, x[8] = o, x[9] = b; else b = x[9];
  let S;
  if (x[10] !== b || x[11] !== p) S = e(s, {
    paddingX: 1,
    flexDirection: "column",
    children: r(s, {
      justifyContent: "space-between",
      children: [ b, p ]
    })
  }), x[10] = b, x[11] = p, x[12] = S; else S = x[12];
  let C;
  if (x[13] !== c || x[14] !== l) C = e(s, {
    flexDirection: "column",
    paddingX: l,
    children: c
  }), x[13] = c, x[14] = l, x[15] = C; else C = x[15];
  let L;
  if (x[16] !== m || x[17] !== S || x[18] !== C) L = r(s, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: m,
    borderLeft: !1,
    borderRight: !1,
    borderBottom: !1,
    marginTop: 1,
    children: [ S, C ]
  }), x[16] = m, x[17] = S, x[18] = C, x[19] = L; else L = x[19];
  return L;
}

export { c7e, Ujo, Hte, eJ, Ca };
