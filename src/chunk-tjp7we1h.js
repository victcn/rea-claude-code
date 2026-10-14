// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { Nl } from "./chunk-gdpv30ry.js";

import { M8e } from "./chunk-mw643xee.js";

import { VGr } from "./chunk-s4b6gt3v.js";

import { Kt, Ae, xt, F } from "./chunk-cpyd3eya.js";

import { _s } from "./chunk-1dj3skht.js";

F();

function NE(o) {
  return o.open.findLast(e => !e.userInvoked) ?? null;
}

function Gae(o) {
  return o.open.findLast(e => e.userInvoked === !0) ?? null;
}

function E_t(o, e) {
  return o.open.some(s => s.kind === e);
}

function rBr(o = () => Date.now()) {
  let e = _s({
    open: []
  }), s = [ NE(e.getState()), Gae(e.getState()) ];
  e.subscribe(() => {
    let t = [ NE(e.getState()), Gae(e.getState()) ];
    if (t.some((n, a) => n !== null && n !== s[a])) M8e();
    s = t;
  });
  let l = Me(), d = new VGr, c = Number.NEGATIVE_INFINITY, i = new Set, g = (t, n) => `${t}:${n}`, p = t => {
    for (let n of i) if (n.startsWith(`${t}:`)) i.delete(n);
  }, r = t => {
    let {removed: n, closedBlockingTopBare: a} = v(e, t);
    if (!n) return !1;
    if (a) c = Date.now();
    return p(t), !0;
  }, u = {
    getState: e.getState,
    subscribe: e.subscribe,
    onClosed: l.subscribe,
    askTally: d,
    open(t) {
      if (t.countedAsk !== void 0) d.join(t.countedAsk);
      e.setState(n => {
        let a = t.place === "queue" ? h(n.open, t) : void 0;
        if (a !== void 0) return {
          open: [ ...n.open.slice(0, a), t, ...n.open.slice(a) ]
        };
        let f = NE(n), k = f?.holdsTop === !0 && b(f, t) && t.succeeds !== !0;
        if ((t.place === "under" || k) && n.open.some(S => S.userInvoked !== !0)) return {
          open: [ t, ...n.open ]
        };
        let D = n.open.some(S => b(S, t)) || t.userInvoked !== !0 && n.open.some(S => S.userInvoked === !0), m = t.userInvoked !== !0 && Nl(o, c), y = D || m ? {
          ...t,
          shownAt: Date.now()
        } : t;
        return {
          open: [ ...n.open, y ]
        };
      });
    },
    update(t, n) {
      e.setState(a => {
        let f = a.open.findIndex(D => D.id === t);
        if (f === -1) return a;
        let k = a.open.slice();
        return k[f] = {
          ...a.open[f],
          payload: n,
          shownAt: Date.now()
        }, {
          open: k
        };
      });
    },
    answer(t, n) {
      if (e.getState().open.find(a => a.id === t)?.countedAsk?.settle(), !r(t)) return;
      l.emit({
        id: t,
        type: "answered",
        result: n
      });
    },
    dismiss(t) {
      if (!r(t)) return;
      l.emit({
        id: t,
        type: "dismissed"
      });
    },
    firstReveal(t, n) {
      if (!e.getState().open.some(f => f.id === t)) return !1;
      let a = g(t, n);
      if (i.has(a)) return !1;
      return i.add(a), !0;
    },
    hasRevealed(t, n) {
      return i.has(g(t, n));
    },
    dismissKind(t) {
      for (let n of e.getState().open) if (n.kind === t) u.dismiss(n.id);
    }
  };
  return u;
}

function v(o, e) {
  let s = !1, l = !1;
  return o.setState(d => {
    let c = d.open.find(u => u.id === e);
    if (!c) return d;
    s = !0;
    let i = d.open.filter(u => u !== c), g = d.open.filter(u => b(u, c)), p = g.at(-1) === c, r = g.at(-2);
    if (l = p && !r && c.userInvoked !== !0, !p || !r) return {
      open: i
    };
    return {
      open: i.map(u => u === r ? {
        ...r,
        shownAt: Date.now(),
        revealSeq: (r.revealSeq ?? 0) + 1
      } : u)
    };
  }), {
    removed: s,
    closedBlockingTopBare: l
  };
}

function h(o, e) {
  let s = e.askOrder ?? Number.POSITIVE_INFINITY, l = o.findIndex(i => i.place !== void 0 && i.askOrder !== void 0 && i.askOrder <= s);
  if (l === -1) {
    let i = o.findLastIndex(r => r.place === "queue" && r.askOrder !== void 0), g = o.findLastIndex(r => r.place !== void 0 && r.askOrder !== void 0), p = o.slice(g + 1).some(r => r.askOrder === void 0 && r.holdsTop !== !0 && r.userInvoked !== !0);
    l = i !== -1 && !p ? g + 1 : o.findIndex(r => r.place === void 0 && r.askOrder !== void 0);
  }
  if (l === -1) return;
  let d = o.findIndex(i => i.place === void 0 && i.askOrder !== void 0);
  if (d !== -1 && d < l) l = d;
  return o.slice(l).some(i => i.userInvoked !== !0) ? l : void 0;
}

function b(o, e) {
  return o.userInvoked === !0 === (e.userInvoked === !0);
}

var $q = Kt(null);

function nm() {
  let o = Ae($q);
  if (!o) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return o;
}

function GMe() {
  let o = nm(), e = () => o.getState().open.length > 0;
  return xt(o.subscribe, e, e);
}

function Jj() {
  let o = nm(), e = () => NE(o.getState()) !== null;
  return xt(o.subscribe, e, e);
}

function xx(o) {
  let e = nm(), s = () => E_t(e.getState(), o);
  return xt(e.subscribe, s, s);
}

function R1t() {
  let o = nm(), e = () => Gae(o.getState());
  return xt(o.subscribe, e, e);
}

function AWo() {
  let o = nm(), e = () => NE(o.getState());
  return xt(o.subscribe, e, e);
}

function oBr(o) {
  let e = nm(), s = () => D7e(NE(e.getState()), o);
  return xt(e.subscribe, s, s);
}

function D7e(o, e) {
  return o?.hideWhile?.includes(e) === !0;
}

function Qmn() {
  let o = nm(), e = () => NE(o.getState())?.kind;
  return xt(o.subscribe, e, e);
}

function Qj(o) {
  let e = nm(), s = () => o(e.getState());
  return xt(e.subscribe, s, s);
}

export { NE, Gae, E_t, rBr, $q, nm, GMe, Jj, xx, R1t, AWo, oBr, D7e, Qmn, Qj };
