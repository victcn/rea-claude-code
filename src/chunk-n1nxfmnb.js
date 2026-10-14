// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s, n, F$ } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { Er } from "./chunk-t54wevgw.js";

import { te } from "./chunk-48xcyvwy.js";

import { jr } from "./chunk-wpjx0bxn.js";

import { G } from "./chunk-j706jx8h.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { Se } from "./chunk-sebqm9p5.js";

import { be } from "./chunk-gqmex880.js";

import { oke } from "./chunk-bjm1wscq.js";

import { hun } from "./chunk-hkkpv0df.js";

import { bo } from "./chunk-cqm6ka4q.js";

import { ss } from "./chunk-wafhv2dx.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { eye, tye } from "./chunk-fttavbjg.js";

import { P, Z, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function He(l) {
  return l.replace(/[\r\n]/g, "");
}

var W = [ {
  value: "yes-session",
  label: "Yes, for this session"
}, {
  value: "yes-remember",
  label: "Yes, and remember this directory"
}, {
  value: "no",
  label: "No"
} ];

function O() {
  let R = w(1), i;
  if (R[0] === S) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), R[0] = i; else i = R[0];
  return i;
}

function Y(R) {
  let d = w(5), {path: i} = R, a;
  if (d[0] !== i) a = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = a; else a = d[1];
  let p;
  if (d[2] === S) p = e(O, {}), d[2] = p; else p = d[2];
  let t;
  if (d[3] !== a) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ a, p ]
  }), d[3] = a, d[4] = t; else t = d[4];
  return t;
}

function q(R) {
  let m = w(16), {value: i, onChange: d, cursorOffset: a, onChangeCursorOffset: p, onSubmit: t, error: C, suggestions: c, selectedSuggestion: k} = R, E;
  if (m[0] === S) E = e(n, {
    children: "Enter the path to the directory:"
  }), m[0] = E; else E = m[0];
  let f;
  if (m[1] !== a || m[2] !== d || m[3] !== p || m[4] !== t || m[5] !== i) f = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Er, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${te.ellipsis}`,
      value: i,
      onChange: d,
      onSubmit: t,
      columns: 80,
      cursorOffset: a,
      onChangeCursorOffset: p,
      inputFilter: He,
      disableCursorMovementForUpDownKeys: !0
    })
  }), m[1] = a, m[2] = d, m[3] = p, m[4] = t, m[5] = i, m[6] = f; else f = m[6];
  let v;
  if (m[7] !== k || m[8] !== c) v = c.length > 0 && e(s, {
    marginBottom: 1,
    children: e(oke, {
      suggestions: c,
      selectedSuggestion: k,
      noPad: !0
    })
  }), m[7] = k, m[8] = c, m[9] = v; else v = m[9];
  let o;
  if (m[10] !== C) o = e(ss, {
    error: C
  }), m[10] = C, m[11] = o; else o = m[11];
  let K;
  if (m[12] !== f || m[13] !== v || m[14] !== o) K = r(s, {
    flexDirection: "column",
    children: [ E, f, v, o ]
  }), m[12] = f, m[13] = v, m[14] = o, m[15] = K; else K = m[15];
  return K;
}

function f7e(R) {
  let o = w(38), {onAddDirectory: i, onAlreadyAccessible: d, onCancel: a, permissionContext: p, directoryPath: t} = R, C = jr(), [c, k] = y(""), [m, E] = y(0), [f, v] = y(null), K;
  if (o[0] === S) K = [], o[0] = K; else K = o[0];
  let [l, ge] = y(K), [D, T] = y(0), de;
  if (o[1] !== C) de = async pe => {
    if (!pe) {
      ge([]), T(0);
      return;
    }
    let _e = await hun(C, pe);
    ge(_e), T(0);
  }, o[1] = C, o[2] = de; else de = o[2];
  let N = F$(de, 100), me, fe;
  if (o[3] !== N || o[4] !== c) me = () => {
    N(c);
  }, fe = [ c, N ], o[3] = N, o[4] = c, o[5] = me, o[6] = fe; else me = o[5], fe = o[6];
  P(me, fe);
  let he;
  if (o[7] === S) he = et => {
    let ye = et.id + "/";
    k(ye), E(ye.length), v(null);
  }, o[7] = he; else he = o[7];
  let tt = he, Ce;
  if (o[8] !== i || o[9] !== d || o[10] !== p) Ce = async ot => {
    let x = await eye(ot, p);
    if (x.resultType === "success") {
      i(x.absolutePath, !1);
      return;
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && d?.(x)) {
      return;
    }
    v(tye(x));
  }, o[8] = i, o[9] = d, o[10] = p, o[11] = Ce; else Ce = o[11];
  let z = Ce, ve;
  if (o[12] === S) ve = {
    context: "Settings"
  }, o[12] = ve; else ve = o[12];
  rt("confirm:no", a, ve);
  let we;
  if (o[13] !== D || o[14] !== l) we = g => {
    if (l.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let De = l[D];
        if (De) tt(De);
        return;
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), T(xe => xe <= 0 ? l.length - 1 : xe - 1);
        return;
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), T(Ae => Ae >= l.length - 1 ? 0 : Ae + 1);
        return;
      }
    }
  }, o[13] = D, o[14] = l, o[15] = we; else we = o[15];
  let Q = we, Oe;
  if (o[16] !== t || o[17] !== i || o[18] !== a) Oe = nt => {
    if (!t) {
      return;
    }
    kt: switch (nt) {
     case "yes-session":
      {
        i(t, !1);
        break kt;
      }

     case "yes-remember":
      {
        i(t, !0);
        break kt;
      }

     case "no":
      {
        a();
      }
    }
  }, o[16] = t, o[17] = i, o[18] = a, o[19] = Oe; else Oe = o[19];
  let B = Oe, L;
  if (o[20] !== t) L = t ? void 0 : r(Se, {
    children: [ e(G, {
      chord: "tab",
      action: "complete"
    }), e(G, {
      chord: "enter",
      action: "add"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    }) ]
  }), o[20] = t, o[21] = L; else L = o[21];
  let U;
  if (o[22] !== m || o[23] !== c || o[24] !== t || o[25] !== f || o[26] !== B || o[27] !== z || o[28] !== D || o[29] !== l) U = t ? r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ e(Y, {
      path: t
    }), e(Xe, {
      options: W,
      onChange: B,
      onCancel: () => B("no")
    }) ]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ e(O, {}), e(q, {
      value: c,
      onChange: k,
      cursorOffset: m,
      onChangeCursorOffset: E,
      onSubmit: z,
      error: f,
      suggestions: l,
      selectedSuggestion: D
    }) ]
  }), o[22] = m, o[23] = c, o[24] = t, o[25] = f, o[26] = B, o[27] = z, o[28] = D, 
  o[29] = l, o[30] = U; else U = o[30];
  let V;
  if (o[31] !== a || o[32] !== L || o[33] !== U) V = e(be, {
    title: "Add directory to workspace",
    onCancel: a,
    color: "permission",
    isCancelActive: !1,
    inputGuide: L,
    children: U
  }), o[31] = a, o[32] = L, o[33] = U, o[34] = V; else V = o[34];
  let Pe;
  if (o[35] !== Q || o[36] !== V) Pe = e(bo, {
    onKeyDown: Q,
    children: V
  }), o[35] = Q, o[36] = V, o[37] = Pe; else Pe = o[37];
  return Pe;
}

export { f7e };
