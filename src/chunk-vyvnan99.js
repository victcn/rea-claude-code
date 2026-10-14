// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _, t } from "./chunk-kawq2919.js";

import { yc } from "./chunk-150qmpyg.js";

import { IWo, cB, Ix } from "./chunk-fj1a15yf.js";

import { fd } from "./chunk-f3sxrxpt.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, ae, Ae, P, Vco, Zt, Z, R, y, F } from "./chunk-cpyd3eya.js";

F();

var xmn = Kt(null);

F();

function DE({scope: n, bindings: l, active: r = !0, preemptive: s = !1, swallowAll: d = !1, claimFocus: a = !1, ref: m, flexGrow: B = 0, flexDirection: M, flexShrink: O, children: S}) {
  let b = R(null), g = fd(), p = R([]);
  p.current = r ? l : [];
  let A = ae(o => L(o, p.current), []), N = I(n, r, s, d, p.current), h = r && s && Boolean(n), v = h && d;
  Zt(() => {
    if (!g) return;
    let o = b.current;
    if (!o) return;
    let {decls: i, scopesChanged: c, preemptiveScopes: K, swallowAll: f} = g.keyHandlerRegistry, E = {
      scope: n,
      active: r,
      preemptive: s,
      swallowAll: d,
      entriesRef: p
    };
    if (i.set(o, E), h && n) {
      if (w(K, n), v) w(f, n);
    }
    return c.emit(), () => {
      if (i.delete(o), h && n) {
        if (D(K, n), v) D(f, n);
      }
      c.emit();
    };
  }, [ g, n, h, v, N ]);
  let u = Ae(xmn), x = Vco(), [C] = y(() => new Map), H = Z(() => ({
    chain: [ ...u?.chain ?? [], {
      scope: n,
      entriesRef: p
    } ],
    below: [ ...u?.below ?? [], C ]
  }), [ u, n, C ]);
  for (let o of u?.below ?? []) o.set(x, {
    chain: H.chain,
    claimFocus: a
  });
  P(() => {
    let o = u?.below ?? [];
    for (let i of o) i.set(x, {
      chain: H.chain,
      claimFocus: a
    });
    return () => {
      for (let i of o) i.delete(x);
    };
  }, [ u, x, H, a ]), Zt(() => {
    if (!a) return;
    let o = b.current;
    if (!o) return;
    let i = Ix(o), c = !1, K = () => {
      if (c) return;
      let f = b.current;
      if (!f) return;
      let E = i.activeElement;
      if (E && cB(E, f)) return;
      c = !0;
      try {
        i.focus(f);
      } finally {
        c = !1;
      }
    };
    return i.pushAutoFocusFallback(o), K(), i.subscribe(K);
  }, [ a ]);
  let k = R(!1);
  Zt(() => {}, [ n, a, g ]);
  let j = ae(o => {
    if (b.current = o, typeof m === "function") m(o); else if (m) m.current = o;
  }, [ m ]);
  return e(yc, {
    ref: j,
    keybindingScope: n,
    onAction: A,
    tabIndex: a ? -1 : void 0,
    flexGrow: B,
    flexDirection: M,
    flexShrink: O,
    children: e(xmn, {
      value: H,
      children: S
    })
  });
}

function L(n, l) {
  for (let r of l) {
    if (r.action !== n.action) continue;
    if (r.chordOnly && !n.isChordCompletion) continue;
    if (r.run() === !1) continue;
    n.consume();
    return;
  }
}

function w(n, l) {
  n.set(l, (n.get(l) ?? 0) + 1);
}

function D(n, l) {
  let r = (n.get(l) ?? 0) - 1;
  if (r <= 0) n.delete(l); else n.set(l, r);
}

function I(n, l, r, s, d) {
  return _([ n ?? "", l, r, s, d.map(a => [ a.action ?? "", a.hint ?? "", Boolean(a.chordOnly) ]) ]);
}

export { xmn, DE };
