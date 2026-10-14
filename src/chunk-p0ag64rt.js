// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { IDr, ODr, Fn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { d } from "./chunk-6ah1819r.js";

import { bt, bI, t } from "./chunk-kawq2919.js";

import { Px, T9n, A9n, C9n } from "./chunk-jb3h1y0s.js";

import { Qm, A0t } from "./chunk-xywp7esx.js";

import { er } from "./chunk-dd98x6x7.js";

import { an, Ha } from "./chunk-3vw306fv.js";

import { bke, cB, dgn, Ix, Uq, P6 } from "./chunk-fj1a15yf.js";

import { k9n, vo } from "./chunk-apnet8r0.js";

import { A_t, Pe } from "./chunk-7w995nyx.js";

import { yc } from "./chunk-150qmpyg.js";

import { Kct } from "./chunk-tz958kay.js";

import { RWo, x1t, T_t, fd } from "./chunk-f3sxrxpt.js";

import { UNe, Ofs, d7, Bce, NT, lxt, Nfs, _F, wbe, jNe, J4e, Vgr, mXt } from "./chunk-n4eyr3t2.js";

import { n9n, r9n, xA } from "./chunk-wpjx0bxn.js";

import { Pa } from "./chunk-4v78v8fd.js";

import { koe } from "./chunk-2xhrgh8h.js";

import { P7e } from "./chunk-bcsgak8m.js";

import { A7e } from "./chunk-dmt7d1ya.js";

import { dZe, G_t } from "./chunk-kb4ad24r.js";

import { ZUr, w9n } from "./chunk-7wy5hhd8.js";

import { rBr, $q } from "./chunk-tjp7we1h.js";

import { b9n, S9n } from "./chunk-vbtgyghk.js";

import { xze, Gmn } from "./chunk-ads8rv8r.js";

import { S1t } from "./chunk-s4bevjrx.js";

import { g1t, h1t, _1t } from "./chunk-9bhe3db4.js";

import { v9n } from "./chunk-mbz49tpm.js";

import { c_t } from "./chunk-4x4edc26.js";

import { m1t, V8n } from "./chunk-mvs17ht2.js";

import { Q, e } from "./chunk-xx3xgkvz.js";

import { Qq } from "./chunk-cne2a37b.js";

import { Kt, ae, Ae, P, xo, Zt, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { _s } from "./chunk-1dj3skht.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

var le = Kt(null), Le = 20;

function X(o) {
  let a = w(4), {children: i} = o, r;
  if (a[0] === S) r = [], a[0] = r; else r = a[0];
  let n = R(r), l;
  if (a[1] === S) l = {
    getDenials: () => n.current,
    recordDenial: h => {
      n.current = [ h, ...n.current.slice(0, Le - 1) ];
    },
    removeDenial: E => {
      n.current = n.current.filter(j => j !== E);
    }
  }, a[1] = l; else l = a[1];
  let _ = l, c;
  if (a[2] !== i) c = e(le.Provider, {
    value: _,
    children: i
  }), a[2] = i, a[3] = c; else c = a[3];
  return c;
}

function cke() {
  let o = Ae(le);
  if (!o) {
    throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}

F();

var ce = Kt(void 0);

function ue(o) {
  let r = w(3), {getFpsMetrics: i, children: a} = o, n;
  if (r[0] !== a || r[1] !== i) n = e(ce.Provider, {
    value: i,
    children: a
  }), r[0] = a, r[1] = i, r[2] = n; else n = r[2];
  return n;
}

function W8n() {
  return Ae(ce);
}

F();

function Ve(o, i) {
  let a = i / 100 * (o.length - 1), r = Math.floor(a), n = Math.ceil(a);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (a - r);
}

var Ue = 1024;

function z8n() {
  let o = new Map, i = new Map, a = new Map;
  return {
    increment(r, n = 1) {
      o.set(r, (o.get(r) ?? 0) + n);
    },
    set(r, n) {
      o.set(r, n);
    },
    observe(r, n) {
      let l = i.get(r);
      if (!l) l = {
        reservoir: [],
        count: 0,
        sum: 0,
        min: n,
        max: n
      }, i.set(r, l);
      if (l.count++, l.sum += n, n < l.min) l.min = n;
      if (n > l.max) l.max = n;
      if (l.reservoir.length < Ue) l.reservoir.push(n); else {
        let h = Math.floor(Math.random() * l.count);
        if (h < Ue) l.reservoir[h] = n;
      }
    },
    add(r, n) {
      let l = a.get(r);
      if (!l) l = new Set, a.set(r, l);
      l.add(n);
    },
    getAll() {
      let r = Object.fromEntries(o);
      for (let [n, l] of i) {
        if (l.count === 0) continue;
        r[`${n}_count`] = l.count, r[`${n}_min`] = l.min, r[`${n}_max`] = l.max, r[`${n}_avg`] = l.sum / l.count;
        let h = [ ...l.reservoir ].sort((E, j) => E - j);
        r[`${n}_p50`] = Ve(h, 50), r[`${n}_p95`] = Ve(h, 95), r[`${n}_p99`] = Ve(h, 99);
      }
      for (let [n, l] of a) r[n] = l.size;
      return r;
    }
  };
}

var ze = Kt(null);

function pe(o) {
  let r = w(8), {store: i, children: a} = o, n;
  if (r[0] === S) n = z8n(), r[0] = n; else n = r[0];
  let h = i ?? n, {storageV5: E} = Pe(), j, _;
  if (r[1] !== E || r[2] !== h) j = () => {
    let c = !1;
    let U = z() && E !== void 0 ? bI(async () => {
      let T = h.getAll();
      if (Object.keys(T).length > 0) await Qm(p => ({
        ...p,
        lastSessionMetrics: T
      }), E);
      c = !0;
    }) : void 0;
    let W = () => {
      if (c) {
        return;
      }
      let V = h.getAll();
      if (Object.keys(V).length > 0) A0t(G => ({
        ...G,
        lastSessionMetrics: V
      }));
    };
    return process.on("exit", W), () => {
      U?.(), process.off("exit", W);
    };
  }, _ = [ h, E ], r[1] = E, r[2] = h, r[3] = j, r[4] = _; else j = r[3], _ = r[4];
  P(j, _);
  let A;
  if (r[5] !== a || r[6] !== h) A = e(ze.Provider, {
    value: h,
    children: a
  }), r[5] = a, r[6] = h, r[7] = A; else A = r[7];
  return A;
}

F();

class p1t extends bke {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(o, i) {
    super("action", {
      bubbles: !0,
      cancelable: !0
    });
    this.action = o, this.sourceEvent = i?.sourceEvent ?? null, this.isChordCompletion = i?.isChordCompletion ?? !1, 
    this.origin = i?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}

var Ze = 3e3;

function Tze(o) {
  let r = w(4), {children: i} = o;
  if (fd()) {
    let n;
    if (r[0] !== i) n = e(Q, {
      children: i
    }), r[0] = i, r[1] = n; else n = r[1];
    return n;
  }
  let n;
  if (r[2] !== i) n = e(et, {
    children: i
  }), r[2] = i, r[3] = n; else n = r[3];
  return n;
}

function et({children: o}) {
  let [{bindings: i}, a] = y(() => {
    let C = lxt(NT);
    return t(`[keybindings] KeybindingSetup initialized with ${C.bindings.length} bindings, ${C.warnings.length} warnings`), 
    C;
  }), r = an(), {addNotification: n} = vo(), l = R(null), [h, E] = y(null), j = R(null), _ = R(new Map), c = R(new Set), T = R(new Set), p = R(null), [U] = y(x1t), V = ae(C => {
    c.current.add(C);
  }, []), G = ae(C => {
    c.current.delete(C);
  }, []), W = ae(() => {
    j.current?.(), j.current = null;
  }, []), A = ae(C => {
    if (W(), C !== null) j.current = r.setTimeout(() => {
      t("[keybindings] Chord timeout - cancelling"), l.current = null, E(null), n({
        key: "chord-timeout",
        kind: "feedback",
        text: `${Bce(C, _F())} cancelled \u2014 no next key within ${Ze / 1e3}s`,
        priority: "immediate",
        timeoutMs: 3e3
      });
    }, Ze);
    l.current = C, E(C);
  }, [ n, W, r ]);
  return P(() => {
    Nfs(NT);
    let C = NT.changed.subscribe(s => {
      a(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
    });
    return () => {
      C(), W();
    };
  }, [ W ]), e(T_t, {
    bindings: i,
    pendingChordRef: l,
    pendingChord: h,
    setPendingChord: A,
    activeContexts: c.current,
    registerActiveContext: V,
    unregisterActiveContext: G,
    handlerRegistryRef: _,
    preDispatchRef: T,
    singleKeyEventRef: p,
    keyHandlerRegistry: U,
    children: e(Jt, {
      bindings: i,
      pendingChordRef: l,
      setPendingChord: A,
      activeContexts: c.current,
      handlerRegistryRef: _,
      preDispatchRef: T,
      singleKeyEventRef: p,
      keyHandlerRegistry: U,
      children: o
    })
  });
}

function tt(o) {
  let i = [ ...o ], a = new Set(i.filter(r => !r.fallback).map(r => r.action));
  return [ ...i.filter(r => !r.fallback), ...i.filter(r => r.fallback && !a.has(r.action)) ];
}

function ot(o) {
  return !o.ctrl && !o.meta && !o.superKey;
}

var qt = UNe.map(o => d7(o.key));

function rt(o) {
  let i = wbe(o);
  return i !== null && qt.some(a => jNe(a, i));
}

function Jt({bindings: o, pendingChordRef: i, setPendingChord: a, activeContexts: r, handlerRegistryRef: n, preDispatchRef: l, singleKeyEventRef: h, keyHandlerRegistry: E, children: j}) {
  let _ = R([]), c = R(null), T = R("legacy"), p = ae((s, u, f, x) => {
    for (let g of l.current) try {
      if (g.handler(s, u, f) === !0) return x(), !0;
    } catch (v) {
      d(v);
    }
    return !1;
  }, [ l ]), U = (s, u, f, x) => {
    let g = n.current;
    if (!g) return !1;
    let v = [ ...g.values() ].flatMap(b => [ ...b ]), D = [ ...new Set(v.filter(b => !b.fallback).map(b => b.context)), ...r, "Global" ], m = J4e(s, D, o, u), N = m.type === "match" && v.some(b => !b.fallback && b.action === m.action) ? m.action : null, I = N === null ? [ f ] : [ N, f ], k = rt(s);
    for (let b of I) {
      let [B] = tt(g.get(b) ?? []).filter(M => !(M.fallback && k));
      if (B) return B.handler(), mXt(b), x(), !0;
    }
    return !1;
  }, V = (s, u, f, x, g, v = !1) => {
    let D = n.current, m = rt(s), N = new Set;
    if (D) {
      for (let H of D.values()) for (let L of H) if (!(m && L.fallback)) N.add(L.context);
    }
    let I = [ ...N, ...r, "Global" ], k = i.current, b = k !== null, B = J4e(s, I, o, k);
    switch (B.type) {
     case "chord_started":
      T.current = "legacy", a(B.pending), g();
      return;

     case "chord_cancelled":
      a(null), g();
      return;

     case "unbound":
      if (a(null), b) {
        g();
        return;
      }
      break;

     case "match":
      if (a(null), b) {
        U(s, k, B.action, g);
        return;
      }
      break;

     case "none":
      break;
    }
    if (!D) return;
    if (!v && p(u, f, x, g)) return;
    let M = new Map, J = tt([ ...D.values() ].flatMap(H => [ ...H ])), K = ot(s) || m, re;
    for (let H of J) {
      if (!H.singleKey || H.fallback && K) continue;
      let L;
      if (H.fallback && !r.has(H.context)) re ??= (() => {
        let q = J4e(s, [ ...r, "Global" ], o, null);
        return q.type === "match" ? q.action : null;
      })(), L = re; else L = M.get(H.context);
      if (L === void 0) {
        let q = J4e(s, [ ...r, H.context, "Global" ], o, null);
        L = q.type === "match" ? q.action : null, M.set(H.context, L);
      }
      if (L === H.action) {
        let q = h.current;
        h.current = s;
        let se;
        try {
          se = H.handler();
        } finally {
          h.current = q;
        }
        if (se !== !1) {
          mXt(L), g();
          return;
        }
      }
    }
  }, G = (s, u, f, x, g, v) => {
    let D = E, m = (B, M) => {};
    if (D.swallowAll.size > 0) {
      m(null, !0), v();
      return;
    }
    if (i.current !== null && T.current === "legacy") {
      m(null, !1), V(u, f, x, g, v);
      return;
    }
    let N = eo(s.target), I = i.current !== null && T.current === "scopeChain";
    if (N.length === 0 && D.preemptiveScopes.size === 0 && !I) {
      m(null, !1), V(u, f, x, g, v);
      return;
    }
    let k = fe(s.target);
    if (D.preemptiveScopes.size > 0 && !I) {
      let B = [ ...D.preemptiveScopes.keys(), "Global" ], M = Vgr(u, B, o, null);
      if (M.type === "match" && k) {
        if (Ie(k, s, M.action, !1, s.type === "wheel" ? "wheel" : "single")) {
          m(M.action, !0), mXt(M.action);
          return;
        }
      }
    }
    if (!I && k?.attributes.textEntry === !0 && ot(u) && [ ...u.key ].length === 1) {
      m(null, p(f, x, g, v));
      return;
    }
    if (I) {
      let B = i.current, M = Vgr(u, _.current, o, B);
      if (M.type === "chord_started") {
        T.current = "scopeChain", a(M.pending), v(), m(null, !0);
        return;
      }
      if (M.type === "match") {
        a(null);
        let J = c.current;
        c.current = null, _.current = [];
        let K = J && k && cB(J, dgn(k)) ? J : k;
        if (K) {
          if (Ie(K, s, M.action, !0, "chord")) {
            m(M.action, !0), mXt(M.action);
            return;
          }
        }
        let re = U(u, B, M.action, v);
        m(M.action, re);
        return;
      }
      c.current = null, _.current = [], m(null, !1), V(u, f, x, g, v);
      return;
    }
    let b = Vgr(u, N, o, null);
    switch (b.type) {
     case "chord_started":
      _.current = N, c.current = k ?? null, T.current = "scopeChain", a(b.pending), v(), 
      m(null, !0);
      return;

     case "match":
      {
        if (!k) {
          m(b.action, !1), V(u, f, x, g, v);
          return;
        }
        if (p(f, x, g, v)) {
          a(null), m(b.action, !0);
          return;
        }
        if (Ie(k, s, b.action, !1, s.type === "wheel" ? "wheel" : "single")) {
          a(null), m(b.action, !0), mXt(b.action);
          return;
        }
        m(b.action, !1), V(u, f, x, g, v, !0);
        return;
      }

     case "unbound":
      if (p(f, x, g, v)) {
        a(null), m(null, !0);
        return;
      }
      a(null), m(null, !1);
      return;

     default:
      m(null, !1), V(u, f, x, g, v);
      return;
    }
  }, W = s => {
    let {input: u, key: f} = RWo(s);
    G(s, s, u, f, s.sequence, () => nt(s));
  }, A = s => {
    if (Xt(s.target, s.currentTarget, s.col, s.row)) return;
    let u = {
      name: s.deltaY < 0 ? "wheelup" : "wheeldown",
      key: "",
      ctrl: s.ctrl,
      shift: s.shift,
      meta: s.meta,
      superKey: !1
    }, f = {
      upArrow: !1,
      downArrow: !1,
      leftArrow: !1,
      rightArrow: !1,
      pageDown: !1,
      pageUp: !1,
      wheelUp: s.deltaY < 0,
      wheelDown: s.deltaY > 0,
      home: !1,
      end: !1,
      return: !1,
      escape: !1,
      tab: !1,
      backspace: !1,
      delete: !1,
      ctrl: s.ctrl,
      shift: s.shift,
      meta: s.meta,
      super: !1
    };
    G(s, u, "", f, "", () => nt(s));
  }, C = R(null);
  return Zt(() => {
    if (!C.current) return;
    let s = Ix(C.current), u = () => {
      let f = C.current;
      if (!f || s.activeElement === f) return;
      if (s.activeElement === null) {
        s.focus(f);
        return;
      }
      let x = f.parentNode;
      while (x) {
        if (x === s.activeElement) {
          s.focus(f);
          return;
        }
        x = x.parentNode;
      }
    };
    return u(), s.subscribe(u);
  }, []), e(yc, {
    ref: C,
    keybindingScope: "Global",
    tabIndex: -1,
    flexDirection: "column",
    flexGrow: 1,
    onKeyDownCapture: W,
    onWheelCapture: A,
    children: j
  });
}

function nt(o) {
  o.preventDefault(), o.stopImmediatePropagation();
}

function Yt(o) {
  return o !== null && "attributes" in o;
}

function fe(o) {
  return Yt(o) ? o : void 0;
}

function Xt(o, i, a, r) {
  let n = fe(o), l = fe(i);
  while (n && n !== l) {
    if (n._eventHandlers?.onWheel && (a === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || Uq(n, a, r) !== null)) return !0;
    n = n.parentNode;
  }
  return !1;
}

function eo(o) {
  let i = [], a = fe(o);
  while (a) {
    let r = a.attributes.keybindingScope;
    if (typeof r === "string" && Ofs(r)) i.push(r);
    a = a.parentNode;
  }
  return i;
}

function Ie(o, i, a, r, n) {
  let l = new p1t(a, {
    sourceEvent: i,
    isChordCompletion: r,
    origin: n
  });
  return P6.dispatch(o, l), l.consumed;
}

F();

F();

F();

var me = Kt(null);

function ee(o) {
  let r = w(3), {children: i} = o, a = R(null), n;
  if (r[0] === S) n = {
    setHandler: l => {
      a.current = l;
    },
    tryDelete: h => a.current?.(h) ?? !1
  }, r[0] = n; else n = r[0];
  let E = n, j;
  if (r[1] !== i) j = e(me.Provider, {
    value: E,
    children: i
  }), r[1] = i, r[2] = j; else j = r[2];
  return j;
}

function f1t() {
  let o = Ae(me);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}

F();

class ge {
  queue=[];
  waiters=[];
  changed=Me();
  _revision=0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(o) {
    this._revision++;
    let i = this.waiters.findIndex(a => a.fn(o));
    if (i !== -1) {
      let a = this.waiters.splice(i, 1)[0];
      if (a) {
        a.resolve(o), this.notify();
        return;
      }
    }
    this.queue.push(o), this.notify();
  }
  poll(o = () => !0) {
    let i = this.queue.findIndex(o);
    if (i === -1) return;
    return this.queue.splice(i, 1)[0];
  }
  receive(o = () => !0) {
    let i = this.queue.findIndex(o);
    if (i !== -1) {
      let a = this.queue.splice(i, 1)[0];
      if (a) return this.notify(), Promise.resolve(a);
    }
    return new Promise(a => {
      this.waiters.push({
        fn: o,
        resolve: a
      });
    });
  }
  subscribe=this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}

var he = Kt(void 0);

function ye(o) {
  let a = w(3), {children: i} = o, r;
  if (a[0] === S) r = new ge, a[0] = r; else r = a[0];
  let n = r, l;
  if (a[1] !== i) l = e(he.Provider, {
    value: n,
    children: i
  }), a[1] = i, a[2] = l; else l = a[2];
  return l;
}

function bUr() {
  let o = Ae(he);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return o;
}

F();

function Aze(o) {
  let i = xo(o);
  P(() => Pa.subscribe((a, r) => {
    let n = er();
    i(a, n, r);
  }), []);
}

F();

var Se = Kt(null);

function Bte() {
  let o = Ae(Se);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o;
}

function Ao(Ge) {
  return Ge.expandedView === "tasks" ? {
    ...Ge,
    expandedView: "none"
  } : Ge;
}

var ve = Kt(!1), Y = null;

function be(o) {
  let c = w(86), {children: i, store: a, initialState: r, onChangeAppState: n, fleetNudgeStore: l, writesExitHandoff: h, sessionHooks: E} = o, j = h === void 0 ? !1 : h;
  if (Ae(ve)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let T;
  if (c[0] !== r || c[1] !== n || c[2] !== a) T = () => a ?? _s(r ?? c_t(), n), c[0] = r, 
  c[1] = n, c[2] = a, c[3] = T; else T = c[3];
  let [p] = y(T), U;
  if (c[4] !== E) U = () => E ?? koe(), c[4] = E, c[5] = U; else U = c[5];
  let [V] = y(U), G = Ha(), W;
  if (c[6] !== G) W = () => rBr(G), c[6] = G, c[7] = W; else W = c[7];
  let [A] = y(W), [C] = y(ZUr), {storageV5: s} = Pe(), u = xA(), f;
  if (c[8] !== s || c[9] !== p) f = () => new b9n(s, globalThis, () => p.setState(Ao)), 
  c[8] = s, c[9] = p, c[10] = f; else f = c[10];
  let [x] = y(f), g;
  if (c[11] !== l || c[12] !== s) g = () => l ?? new xze({
    storageV5: s
  }), c[11] = l, c[12] = s, c[13] = g; else g = c[13];
  let [v] = y(g), D;
  if (c[14] !== s) D = () => Y ? new Y.SessionRosterStore({
    storageV5: s
  }) : null, c[14] = s, c[15] = D; else D = c[15];
  let [m] = y(D), [N] = y(j), [I] = y(s), k, b;
  if (c[16] !== I || c[17] !== p || c[18] !== N) k = () => {
    let B = N ? () => m1t(p.getState().tasks, I) : () => V8n(p.getState().tasks);
    let M = bt(B);
    return () => {
      B(), M();
    };
  }, b = [ p, N, I ], c[16] = I, c[17] = p, c[18] = N, c[19] = k, c[20] = b; else k = c[19], 
  b = c[20];
  P(k, b);
  let J;
  if (c[21] !== p) J = () => A7e.over(p), c[21] = p, c[22] = J; else J = c[22];
  let [K] = y(J), re;
  if (c[23] !== p) re = () => Qq.over(p), c[23] = p, c[24] = re; else re = c[24];
  let [H] = y(re), L;
  if (c[25] !== K || c[26] !== u?.mcpSessionWiring) L = () => u?.mcpSessionWiring.acquireConnections(K), 
  c[25] = K, c[26] = u?.mcpSessionWiring, c[27] = L; else L = c[27];
  let q;
  if (c[28] !== K || c[29] !== u) q = [ u, K ], c[28] = K, c[29] = u, c[30] = q; else q = c[30];
  P(L, q);
  let se;
  if (c[31] !== p) se = () => dZe.over(p), c[31] = p, c[32] = se; else se = c[32];
  let [Re] = y(se), xt, Pt;
  if (c[33] !== Re || c[34] !== u) xt = () => {
    if (u === void 0) {
      return;
    }
    return G_t.of(u).acquire(Re);
  }, Pt = [ u, Re ], c[33] = Re, c[34] = u, c[35] = xt, c[36] = Pt; else xt = c[35], 
  Pt = c[36];
  P(xt, Pt);
  let Ct, wt;
  if (c[37] !== K) Ct = () => IDr(() => K.get().clients), wt = [ K ], c[37] = K, c[38] = Ct, 
  c[39] = wt; else Ct = c[38], wt = c[39];
  P(Ct, wt);
  let kt, Mt;
  if (c[40] !== K) kt = () => ODr((Wo, Go, Lo) => K.swapServerTools(Wo, Go, Lo)), 
  Mt = [ K ], c[40] = K, c[41] = kt, c[42] = Mt; else kt = c[41], Mt = c[42];
  P(kt, Mt);
  let Et;
  if (c[43] !== p.setState) Et = () => S1t(p.setState), c[43] = p.setState, c[44] = Et; else Et = c[44];
  let At;
  if (c[45] !== p) At = [ p ], c[45] = p, c[46] = At; else At = c[46];
  P(Et, At);
  let Dt;
  if (c[47] !== u || c[48] !== s || c[49] !== p) Dt = ($o, ei, Uo) => {
    if (g1t(u, $o, p.setState, s, Uo), !Fn()) _1t(p.getState().toolPermissionContext, p.setState, p.getState().fastMode);
  }, c[47] = u, c[48] = s, c[49] = p, c[50] = Dt; else Dt = c[50];
  let xe = xo(Dt);
  Aze(xe);
  let Nt;
  if (c[51] !== xe) Nt = () => {
    h1t(() => xe("policySettings"));
  }, c[51] = xe, c[52] = Nt; else Nt = c[52];
  let Ht;
  if (c[53] === S) Ht = [], c[53] = Ht; else Ht = c[53];
  P(Nt, Ht);
  const We = u ?? null;
  let Ce;
  if (c[54] !== i || c[55] !== m) Ce = Y && m ? e(Y.SessionRosterStoreContext.Provider, {
    value: m,
    children: i
  }) : i, c[54] = i, c[55] = m, c[56] = Ce; else Ce = c[56];
  let we;
  if (c[57] !== Ce) we = e(X, {
    children: e(ee, {
      children: Ce
    })
  }), c[57] = Ce, c[58] = we; else we = c[58];
  let ke;
  if (c[59] !== v || c[60] !== we) ke = e(Gmn.Provider, {
    value: v,
    children: we
  }), c[59] = v, c[60] = we, c[61] = ke; else ke = c[61];
  let Ke;
  if (c[62] !== ke || c[63] !== x) Ke = e(S9n.Provider, {
    value: x,
    children: ke
  }), c[62] = ke, c[63] = x, c[64] = Ke; else Ke = c[64];
  let Ee;
  if (c[65] !== C || c[66] !== Ke) Ee = e(w9n.Provider, {
    value: C,
    children: Ke
  }), c[65] = C, c[66] = Ke, c[67] = Ee; else Ee = c[67];
  let De;
  if (c[68] !== A || c[69] !== Ee) De = e(ye, {
    children: e(v9n, {
      children: e($q.Provider, {
        value: A,
        children: Ee
      })
    })
  }), c[68] = A, c[69] = Ee, c[70] = De; else De = c[70];
  let Ne;
  if (c[71] !== V || c[72] !== De) Ne = e(Se.Provider, {
    value: V,
    children: De
  }), c[71] = V, c[72] = De, c[73] = Ne; else Ne = c[73];
  let He;
  if (c[74] !== We || c[75] !== Ne) He = e(T9n.Provider, {
    value: We,
    children: Ne
  }), c[74] = We, c[75] = Ne, c[76] = He; else He = c[76];
  let je;
  if (c[77] !== H || c[78] !== He) je = e(C9n.Provider, {
    value: H,
    children: He
  }), c[77] = H, c[78] = He, c[79] = je; else je = c[79];
  let Te;
  if (c[80] !== K || c[81] !== je) Te = e(A9n.Provider, {
    value: K,
    children: je
  }), c[80] = K, c[81] = je, c[82] = Te; else Te = c[82];
  let jt;
  if (c[83] !== p || c[84] !== Te) jt = e(ve.Provider, {
    value: !0,
    children: e(Px.Provider, {
      value: p,
      children: Te
    })
  }), c[83] = p, c[84] = Te, c[85] = jt; else jt = c[85];
  return jt;
}

function Db(o) {
  let A = w(32), {session: i, host: a, project: r, storageV5: n, messageQueue: l, store: h, initialState: E, onChangeAppState: j, fleetNudgeStore: _, sessionHooks: c, writesExitHandoff: T, getFpsMetrics: p, stats: U, keybindings: V, children: G} = o, W = V === void 0 ? !0 : V, C;
  if (A[0] !== n) C = Kct(n), A[0] = n, A[1] = C; else C = A[1];
  let s = C, u;
  if (A[2] !== G || A[3] !== W) u = W ? e(Tze, {
    children: G
  }) : G, A[2] = G, A[3] = W, A[4] = u; else u = A[4];
  let f;
  if (A[5] !== u) f = e(k9n, {
    children: e(X, {
      children: e(ee, {
        children: u
      })
    })
  }), A[5] = u, A[6] = f; else f = A[6];
  let x;
  if (A[7] !== _ || A[8] !== E || A[9] !== j || A[10] !== c || A[11] !== h || A[12] !== f || A[13] !== T) x = e(be, {
    store: h,
    initialState: E,
    onChangeAppState: j,
    fleetNudgeStore: _,
    sessionHooks: c,
    writesExitHandoff: T,
    children: f
  }), A[7] = _, A[8] = E, A[9] = j, A[10] = c, A[11] = h, A[12] = f, A[13] = T, A[14] = x; else x = A[14];
  let g = x, v;
  if (A[15] !== g || A[16] !== a || A[17] !== r || A[18] !== i) v = i !== void 0 ? e(n9n, {
    session: i,
    children: g
  }) : a !== void 0 ? e(r9n, {
    host: a,
    project: r,
    children: g
  }) : g, A[15] = g, A[16] = a, A[17] = r, A[18] = i, A[19] = v; else v = A[19];
  let D;
  if (A[20] !== U || A[21] !== v) D = e(pe, {
    store: U,
    children: v
  }), A[20] = U, A[21] = v, A[22] = D; else D = A[22];
  let m;
  if (A[23] !== p || A[24] !== D) m = e(ue, {
    getFpsMetrics: p,
    children: D
  }), A[23] = p, A[24] = D, A[25] = m; else m = A[25];
  let N = m, I;
  if (A[26] !== l || A[27] !== N) I = l === void 0 ? N : e(P7e, {
    queue: l,
    children: N
  }), A[26] = l, A[27] = N, A[28] = I; else I = A[28];
  let k = I;
  if (n === void 0) {
    return k;
  }
  let b;
  if (A[29] !== k || A[30] !== s) b = e(A_t, {
    ...s,
    children: k
  }), A[29] = k, A[30] = s, A[31] = b; else b = A[31];
  return b;
}

export { cke, W8n, z8n, p1t, Tze, f1t, bUr, Aze, Bte, Db };
