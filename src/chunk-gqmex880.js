// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { yS } from "./chunk-1pxjahnn.js";

import { Rh } from "./chunk-fj1a15yf.js";

import { s, n, ti } from "./chunk-3vw306fv.js";

import { fd } from "./chunk-f3sxrxpt.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { ie } from "./chunk-yxennhe9.js";

import { o1, s1, jce, mDn } from "./chunk-n4eyr3t2.js";

import { a_t } from "./chunk-a5nr78wg.js";

import { G, ML } from "./chunk-j706jx8h.js";

import { xmn, DE } from "./chunk-vyvnan99.js";

import { Se } from "./chunk-sebqm9p5.js";

import { os } from "./chunk-wwjrcnvz.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Ae, P, Zt, Z, R, y, F } from "./chunk-cpyd3eya.js";

F();

F();

var Ie = {
  "confirm:yes": {
    description: "confirm"
  },
  "confirm:no": {
    description: "cancel"
  },
  "confirm:previous": {
    description: "navigate"
  },
  "confirm:next": {
    description: "navigate"
  },
  "confirm:nextField": {
    description: "next field"
  },
  "confirm:previousField": {
    description: "previous field"
  },
  "confirm:toggle": {
    description: "toggle"
  },
  "confirm:cycleMode": {
    description: "cycle mode"
  },
  ...{},
  "select:next": {
    description: "navigate"
  },
  "select:previous": {
    description: "navigate"
  },
  "select:pageUp": {
    description: "page up"
  },
  "select:pageDown": {
    description: "page down"
  },
  "select:first": {
    description: "first"
  },
  "select:last": {
    description: "last"
  },
  "select:accept": {
    description: "select"
  },
  "select:cancel": {
    description: "cancel"
  },
  "abovePrompt:toggle": {
    description: "hide/show plugin panel"
  },
  "abovePrompt:focus": {
    description: "focus plugin buttons, inputs and selects"
  },
  "abovePrompt:next": {
    description: "navigate"
  },
  "abovePrompt:previous": {
    description: "navigate"
  },
  "abovePrompt:press": {
    description: "press / submit / pick"
  },
  "abovePrompt:leave": {
    description: "back to prompt"
  },
  "abovePrompt:highlightNext": {
    description: "next option"
  },
  "abovePrompt:highlightPrevious": {
    description: "previous option"
  },
  "pane:scrollUp": {
    description: "scroll"
  },
  "pane:scrollDown": {
    description: "scroll"
  },
  "pane:pageUp": {
    description: "page up"
  },
  "pane:pageDown": {
    description: "page down"
  },
  "pane:top": {
    description: "top"
  },
  "pane:bottom": {
    description: "bottom"
  },
  "pane:grow": {
    description: "widen / heighten plugin pane"
  },
  "pane:shrink": {
    description: "narrow / shorten plugin pane"
  },
  "pane:close": {
    description: "close plugin pane"
  },
  "pane:next": {
    description: "show next plugin pane"
  },
  "pane:previous": {
    description: "show previous plugin pane"
  },
  "tabs:next": {
    description: "switch tab"
  },
  "tabs:previous": {
    description: "switch tab"
  },
  "app:toggleReplTab": {
    description: "switch tab"
  },
  "app:toggleDiffNoiseFilter": {
    description: "show/hide tests in diff panel"
  },
  "app:diffFileListUp": {
    description: "scroll diff panel file list"
  },
  "app:diffFileListDown": {
    description: "scroll diff panel file list"
  },
  "app:toggleDiffPreSession": {
    description: "show/hide pre-session changes in diff panel"
  },
  "app:cycleDiffBase": {
    description: "switch diff panel base"
  },
  ...{}
};

function fe(a) {
  if (a.startsWith("command:")) return {
    description: a.slice(8)
  };
  return Ie[a];
}

var Oe = 4, Be = [ [ "select:previous", "select:next" ], [ "confirm:previous", "confirm:next" ], [ "tabs:next", "tabs:previous" ] ];

function oe({boundary: a, fallback: E = null, order: v, omit: u, max: N = Oe, maxWidth: b}) {
  let S = fd(), {focusManager: h, rootNode: A} = Ae(Rh), d = Ae(xmn), [H, j] = y(0);
  P(() => {
    if (!S || !h) return;
    let c = () => j(O => O + 1), k = h.subscribe(c), I = S.keyHandlerRegistry.scopesChanged.subscribe(c);
    return c(), () => {
      k(), I();
    };
  }, [ S, h ]);
  let m = Z(() => He({
    ctx: S,
    activeElement: h?.activeElement ?? null,
    boundaryNode: a ? a.current : A ?? null,
    rendered: a ? d : null,
    order: v,
    omit: u,
    max: N,
    maxWidth: b
  }), [ S, h, a, A, d, v, u, N, b, H ]), x = R(null);
  if (P(() => {
    let c = m.fellBack ? "fell_back" : m.hadEntryWithoutDescription ? "no_description" : "ok";
    if (c === x.current) return;
    let k = x.current === null;
    if (x.current = c, k && c === "fell_back") return;
    if (c === "ok") g("keybinding_auto_hints"); else f("keybinding_auto_hints", c);
  }, [ m.fellBack, m.hadEntryWithoutDescription ]), m.fellBack) return E;
  return e(n, {
    dimColor: !0,
    italic: !0,
    children: m.text
  });
}

function He({ctx: a, activeElement: E, boundaryNode: v, rendered: u, order: N, omit: b, max: S, maxWidth: h}) {
  let A = {
    fellBack: !0,
    text: "",
    hadEntryWithoutDescription: !1
  };
  if (!a) return A;
  let d = [], H = !1, j = 0, m = v === null ? void 0 : E ?? void 0;
  while (m) {
    let t = m === v, i = a.keyHandlerRegistry.decls.get(m);
    if (i) me(d, i, j, t);
    if (t) {
      H = !0;
      break;
    }
    m = m.parentNode, j++;
  }
  if (!H) {
    if (!u) return A;
    let t = u.chain.length - 1, i = u.chain;
    for (let o of u.below[t]?.values() ?? []) if (o.claimFocus && o.chain.length > i.length) i = o.chain;
    d = [];
    for (let o = i.length - 1; o >= t; o--) {
      let D = i[o];
      if (D) me(d, D, i.length - 1 - o, o === t);
    }
  }
  if (!d.some(t => !t.isBoundary)) return A;
  let x = new Set(b ?? []), c = jce(o1), k = !1, I = [];
  for (let t of d) {
    if (x.has(t.action) || !t.scope) continue;
    let i = mDn(t.action, t.scope, a.bindings, c);
    if (!i) continue;
    let o = t.hint ?? fe(t.action)?.description;
    if (!o) {
      k = !0;
      continue;
    }
    I.push({
      action: t.action,
      description: o,
      chord: s1(i),
      depth: t.depth
    });
  }
  let O = new Map;
  (N ?? []).forEach((t, i) => O.set(t, i));
  let K = new Set, l = [];
  for (let t of I) {
    if (K.has(t.description)) continue;
    K.add(t.description);
    let o = Be.find(C => C.some(B => B === t.action))?.flatMap(C => I.find(B => B.action === C && B.description === t.description) ?? []), D = o?.length === 2 ? o : [ t ];
    l.push({
      order: Math.min(...D.map(C => O.get(C.action) ?? 1 / 0)),
      text: ML({
        chord: D.map(C => C.chord),
        action: t.description
      }),
      depth: t.depth
    });
  }
  l.sort((t, i) => {
    if (t.order !== i.order) return t.order - i.order;
    return t.depth - i.depth;
  });
  let M = " \xb7 ", z = ie(M), T = 0, p = [];
  for (;;) {
    p = [];
    let t = 0;
    for (let D of l) {
      if (p.length >= S) break;
      let C = (p.length === 0 ? 0 : z) + ie(D.text);
      if (h !== void 0 && t + C + T > h && p.length > 0) break;
      p.push(D.text), t += C;
    }
    let i = l.length - p.length;
    if (h === void 0 || i === 0) break;
    let o = ie(`${M}+${i} more`);
    if (o <= T) break;
    T = o;
  }
  if (p.length === 0) return A;
  let U = l.length - p.length;
  return {
    fellBack: !1,
    text: U > 0 ? `${p.join(M)}${M}+${U} more` : p.join(M),
    hadEntryWithoutDescription: k
  };
}

function me(a, {scope: E, entriesRef: v}, u, N) {
  for (let b of v.current) {
    if (!b.action) continue;
    a.push({
      action: b.action,
      hint: b.hint,
      scope: E,
      depth: u,
      isBoundary: N
    });
  }
}

var L = r(Se, {
  children: [ e(G, {
    chord: "enter",
    action: "confirm"
  }), e(pt, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: "cancel"
  }) ]
});

function be(a) {
  let l = w(44), {title: E, titleEnd: v, subtitle: u, children: N, onCancel: b, color: S, hideInputGuide: h, hideBorder: A, inputGuide: d, isCancelActive: H, onInterrupt: j, exitOnCtrlCD: m} = a, x = S === void 0 ? "permission" : S, c = H === void 0 ? !0 : H, k = m === void 0 ? !1 : m, I = R(null), {entries: O, exitState: K} = a_t(k ? void 0 : b, j, c), M;
  if (l[0] !== c || l[1] !== b) M = c ? [ {
    action: "confirm:no",
    run: b,
    hint: "cancel"
  } ] : [], l[0] = c, l[1] = b, l[2] = M; else M = l[2];
  let z;
  if (l[3] !== O || l[4] !== M) z = [ ...M, ...O ], l[3] = O, l[4] = M, l[5] = z; else z = l[5];
  let T = z, p = Ae(yS), U = R(null), [W, t] = y(u ? 2 : 1), i;
  if (l[6] !== p || l[7] !== W) i = () => {
    if (!p || !U.current) {
      return;
    }
    let o = ti(U.current).height;
    if (o !== W) t(o);
  }, l[6] = p, l[7] = W, l[8] = i; else i = l[8];
  Zt(i);
  let D = W + 1 + (h ? 0 : 2), C;
  if (l[9] !== p || l[10] !== D) C = p ? {
    ...p,
    rows: Math.max(0, p.rows - D)
  } : null, l[9] = p, l[10] = D, l[11] = C; else C = l[11];
  let B = C, ke;
  if (l[12] !== k || l[13] !== K || l[14] !== d) ke = typeof d === "function" ? d(K) : K.pending ? r(n, {
    children: [ "Press ", K.keyName, " again to ", k ? "exit" : "cancel" ]
  }) : d != null ? d : void 0, l[12] = k, l[13] = K, l[14] = d, l[15] = ke; else ke = l[15];
  let pe = ke, de = typeof d === "function" || K.pending || d != null, Ne;
  if (l[16] !== pe || l[17] !== h || l[18] !== c || l[19] !== de) Ne = !h && e(s, {
    marginTop: 1,
    flexShrink: 0,
    children: de ? e(n, {
      dimColor: !0,
      italic: !0,
      children: pe
    }) : !c ? e(n, {
      dimColor: !0,
      italic: !0,
      children: L
    }) : e(oe, {
      boundary: I,
      fallback: e(n, {
        dimColor: !0,
        italic: !0,
        children: L
      })
    })
  }), l[16] = pe, l[17] = h, l[18] = c, l[19] = de, l[20] = Ne; else Ne = l[20];
  let ae = Ne;
  const ue = A ? 0 : 1;
  let J;
  if (l[21] !== x || l[22] !== E || l[23] !== v) J = v ? r(s, {
    justifyContent: "space-between",
    gap: 2,
    children: [ e(n, {
      bold: !0,
      color: x,
      children: E
    }), e(n, {
      dimColor: !0,
      wrap: "truncate-start",
      children: v
    }) ]
  }) : e(n, {
    bold: !0,
    color: x,
    children: E
  }), l[21] = x, l[22] = E, l[23] = v, l[24] = J; else J = l[24];
  let Q;
  if (l[25] !== u) Q = u && e(n, {
    dimColor: !0,
    children: u
  }), l[25] = u, l[26] = Q; else Q = l[26];
  let V;
  if (l[27] !== J || l[28] !== Q) V = r(s, {
    ref: U,
    flexDirection: "column",
    children: [ J, Q ]
  }), l[27] = J, l[28] = Q, l[29] = V; else V = l[29];
  let ee;
  if (l[30] !== B || l[31] !== N) ee = e(yS, {
    value: B,
    children: N
  }), l[30] = B, l[31] = N, l[32] = ee; else ee = l[32];
  let te;
  if (l[33] !== V || l[34] !== ee) te = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ V, ee ]
  }), l[33] = V, l[34] = ee, l[35] = te; else te = l[35];
  let Me;
  if (l[36] !== T || l[37] !== ae || l[38] !== ue || l[39] !== te) Me = r(DE, {
    ref: I,
    scope: "Confirmation",
    claimFocus: !0,
    flexGrow: ue,
    flexDirection: "column",
    bindings: T,
    children: [ te, ae ]
  }), l[36] = T, l[37] = ae, l[38] = ue, l[39] = te, l[40] = Me; else Me = l[40];
  let ne = Me;
  if (A) {
    return ne;
  }
  let Pe;
  if (l[41] !== x || l[42] !== ne) Pe = e(os, {
    color: x,
    children: ne
  }), l[41] = x, l[42] = ne, l[43] = Pe; else Pe = l[43];
  return Pe;
}

export { be };
