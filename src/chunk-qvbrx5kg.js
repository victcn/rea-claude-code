// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { e } from "./chunk-xx3xgkvz.js";

import { iHe, lJ, Ake } from "./chunk-t5tdzmqk.js";

import { hg } from "./chunk-crkn0jm6.js";

import { Kt, Ae, P, y, xt, F } from "./chunk-cpyd3eya.js";

F();

F();

F();

var u = Kt({
  isTerminalFocused: !0,
  terminalFocusState: "unknown"
});

u.displayName = "TerminalFocusContext";

function xBr(c) {
  let l = w(6), {children: r} = c, t = xt(Ake, iHe), n = xt(Ake, lJ), i;
  if (l[0] !== t || l[1] !== n) i = {
    isTerminalFocused: t,
    terminalFocusState: n
  }, l[0] = t, l[1] = n, l[2] = i; else i = l[2];
  let s = i, a;
  if (l[3] !== r || l[4] !== s) a = e(u.Provider, {
    value: s,
    children: r
  }), l[3] = r, l[4] = s, l[5] = a; else a = l[5];
  return a;
}

var d = u;

function ac() {
  let {isTerminalFocused: c} = Ae(d);
  return c;
}

function qae() {
  let {terminalFocusState: c} = Ae(d);
  return c;
}

function h() {
  return v(hg);
}

var HI = (c, r) => {
  let t = setTimeout(c, r);
  return () => clearTimeout(t);
}, Nze = () => () => {}, z9n = () => null;

function v(c) {
  let r = new Map, t = null, n = c, l = performance.now(), i = 0;
  function s() {
    i = performance.now() - l;
    for (let o of r.keys()) o();
  }
  function a() {
    if ([ ...r.values() ].some(Boolean)) {
      if (t !== null) clearInterval(t); else i = performance.now() - l;
      t = setInterval(s, n);
    } else if (t !== null) clearInterval(t), t = null;
  }
  function f(o, m) {
    return r.set(o, m), a(), () => {
      r.delete(o), a();
    };
  }
  return {
    subscribeKeepAlive(o) {
      return f(o, !0);
    },
    subscribeFollower(o) {
      return f(o, !1);
    },
    now() {
      if (t !== null) return i;
      return performance.now() - l;
    },
    setTickInterval(o) {
      if (o === n) return;
      n = o, a();
    },
    setTimeout(o, m) {
      let x = setTimeout(o, m);
      return () => clearTimeout(x);
    }
  };
}

var zv = Kt(null), T = hg * 2;

function PBr(c) {
  let l = w(7), {children: r} = c, [t] = y(h), n = ac(), i, s;
  if (l[0] !== t || l[1] !== n) i = () => {
    t.setTickInterval(n ? hg : T);
  }, s = [ t, n ], l[0] = t, l[1] = n, l[2] = i, l[3] = s; else i = l[2], s = l[3];
  P(i, s);
  let a;
  if (l[4] !== r || l[5] !== t) a = e(zv.Provider, {
    value: t,
    children: r
  }), l[4] = r, l[5] = t, l[6] = a; else a = l[6];
  return a;
}

export { xBr, ac, qae, HI, Nze, z9n, zv, PBr };
