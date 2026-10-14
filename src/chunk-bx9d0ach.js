// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tPe, Xjn, d5, ixs, wut, ou, Vse, uxs, _K, tWn, ywe, XTr, zwo, kut, inn, fxs, RGs, S3e, Gwo, w3e, LP, Ape, mxs, ZTr, Aut, iPe, svo, IGs, ivo, Axs } from "./chunk-ep1bh0vt.js";

import { Ie, hWn, _Wn, TAr, bWn, oS, vvo } from "./chunk-3btm71fm.js";

import { l } from "./chunk-b0z4bv3v.js";

import { SAr, pvo, Put, QHt } from "./chunk-9wtp3skp.js";

import { eo } from "./chunk-3pqddg8f.js";

import { L } from "./chunk-vh1p9t2h.js";

var Re = () => eo(d5, (e, t) => ixs(t));

var Y = "classic.PostToolUse";

var Ee = "this could not be given to a hook that checks it, so it was not done";

var J = "this tool input could not be given to a hook that checks it, so the tool was not run";

function be(e, t) {
  let r = {
    "classic.PreToolUse": {
      deny: J
    },
    "classic.PermissionRequest": {
      decision: {
        behavior: "deny",
        message: J
      }
    }
  }, o = e === "tool.call" || e === "tool.check", i = e === "session.compact" || (m => e === "session.append")(t) && !wut(t) ? void 0 : tPe[e];
  return Object.hasOwn(tPe, e) ? i?.(o ? J : Ee) : r[e];
}

var Gtn = "a hook that checks this result could not hand back its answer";

var Fe = new Set([ "tool.check", "agent.offer", "plugin.register", "classic.PreToolUse", "classic.PermissionRequest" ]);

function Cwo(e, t) {
  if (e === Y) return {
    isNoted: !0
  };
  let r = be(e, t);
  if (r === void 0) return;
  if (Fe.has(e)) return {
    answer: r,
    afterNext: r
  };
  return e === "tool.call" ? {
    answer: r,
    afterNext: {
      deny: Gtn
    },
    isWithholding: !0
  } : {
    answer: r
  };
}

function Oe(e) {
  let t = "kind" in e, r = "value" in e;
  return t ? "ui.input" : r ? "ui.select" : "ui.press";
}

function Pe(e, t) {
  let r = e.answering.getStore();
  return r !== void 0 && r.isLive && Date.now() < r.answersUntil && (r.event === "session.start" || r.environmentId === t) ? r.event : void 0;
}

var Et = (e, t) => ({
  event: Oe(t),
  isLive: !0,
  answersUntil: Date.now() + Ape,
  environmentId: e
});

function de(e, t) {
  let r = e?.find(o => o.environmentId === t);
  return {
    leftOut: r?.registrations,
    told: r?.told,
    causes: r?.causes
  };
}

function Ot(e, t) {
  let r = new WeakMap, o = new WeakSet;
  return s => {
    let {stamp: n, environments: i} = e;
    if (n === void 0) return QHt(s);
    let m = n, a = Atomics.load(m, Aut), d = new Map, x = f => Atomics.store(m, Aut, f ?? a);
    function c(f, g) {
      x(f);
      let h = g(), F = f !== void 0 && typeof h === "object" && h !== null;
      if (F) vvo(h, new Set((oS(h) ? Object.values(h) : []).filter(p => oS(p) && r.has(p))));
      if (F && Object.isFrozen(h)) r.set(h, f);
      return h;
    }
    function b(f, g) {
      if (!d.has(f)) {
        let h = [ ...i ].filter(([, F]) => F.name === f);
        d.set(f, h.length === 1 ? h[0]?.[0] : void 0);
      }
      return c(d.get(f), g);
    }
    try {
      return s(f => (x(f ? r.get(f) : void 0), f !== void 0 && o.has(f)), b, f => {
        let g = c(t, f);
        if (r.has(g)) o.add(g);
        return g;
      });
    } finally {
      Atomics.store(m, Aut, a);
    }
  };
}

import { isProxy as Ae } from "util/types";

function ye(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callers : [];
}

function Ne(e, t, r) {
  let {result: o, resolver: s} = r;
  if (Ae(o)) throw new Ie("the ui.resolve answer is a Proxy; a table of elements is a plain object");
  if (!L(o)) return o;
  let n = Object.create(null);
  for (let i of Reflect.ownKeys(o)) {
    if (typeof i !== "string" || i === "then" || i === "__proto__") continue;
    let m = Reflect.getOwnPropertyDescriptor(o, i);
    if (m?.enumerable !== !0) continue;
    let a = m.value, d = !Ae(a) && typeof a === "function", x = d && Xjn.nameOf(a) === i;
    n[i] = !d ? void 0 : x ? a : c => IGs(e.stamp, () => Axs(e.stamp, [ ...ye(e), s ], () => t.invokeSync(a, c)));
  }
  return n;
}

import { AsyncLocalStorage as X } from "async_hooks";

var It = (e, t, r) => ({
  environments: new Map,
  loading: new Map,
  dispatching: new X,
  framing: new X,
  serving: new X,
  answering: new X,
  servingLive: new Set,
  toldUnder: new Map,
  hostOps: e,
  hostStreamOps: t,
  presses: new Map,
  taking: new Map,
  resolving: new Map,
  stamp: r
});

function Z({environment: e, name: t, event: r, e: o}) {
  try {
    return e.argumentFor(o);
  } catch (s) {
    throw bWn(new Ie(`${t}: ${r}: could not be given its argument: ${l(s)}`));
  }
}

function ee(e) {
  let t = new WeakMap;
  return r => {
    let o = t.get(r) ?? Z({
      ...e,
      e: r
    });
    return t.set(r, o), o;
  };
}

var te = e => e === "engine" || e === "Svg";

var U = e => e === "Button" || e === "Input" || e === "Select" || e === "Markdown";

var je = e => e === "Button" || !te(e) && e !== "Client" && e !== "Raster" && e !== "Image" && !U(e);

function I(e, t) {
  let {children: r} = e;
  return Array.isArray(r) && je(e.type) ? r.flatMap(t) : [];
}

function Ce(e) {
  if (!Array.isArray(e)) return;
  let t = e.map(o => typeof o === "object" && o !== null && "value" in o ? o.value : void 0);
  return t.every(o => typeof o === "string") ? t : void 0;
}

function HHt(e) {
  if (typeof e !== "object" || !e || Array.isArray(e)) return [];
  let t = e, r = t.type, o = I(t, HHt);
  if (!U(r)) return o;
  let {press: s, props: n} = t;
  if (!(typeof s === "object" && s !== null)) return o;
  let {plugin: m, handle: a} = s, d = n?.key;
  if (!(typeof m === "string" && typeof a === "number" && typeof d === "string")) return o;
  let c = n?.pressableLinks, b = Array.isArray(c) && c.every(g => typeof g === "string"), f = r === "Select" ? Ce(n?.options) : void 0;
  return [ {
    tag: r,
    plugin: m,
    handle: a,
    element: d,
    ...b && {
      pressableLinks: c
    },
    ...f !== void 0 && {
      options: f
    }
  }, ...o ];
}

var xe = e => `${e.plugin}\0client\0${e.key}\0${e.module}`;

var E = e => L(e) ? e.plugin : void 0;

function Awo(e) {
  if (!L(e)) return [];
  let t = e;
  if (t.type !== "Client") return I(t, Awo);
  let {props: r} = t, o = E(t.client), s = L(r) ? r.key : void 0, n = L(r) ? r.module : void 0;
  return typeof o === "string" && o !== "" && typeof s === "string" && typeof n === "string" ? [ {
    plugin: o,
    module: n,
    key: s
  } ] : [];
}

var er = () => ({
  seen: new Set,
  groups: new Map,
  parts: new Map,
  counted: new WeakSet
});

var RTr = e => `${e.plugin}\0scope\0${e.scope}`;

var DHt = e => e === "Box" || e === "Text";

function LHt(e) {
  let t = L(e) ? e.scope : void 0;
  return typeof t === "string" ? t : void 0;
}

function De(e) {
  let t = L(e) ? e : {}, {hover: r, press: o, group: s} = t, n = LHt(r), i = t.type, a = L(o) && typeof o.handle === "number" ? o : void 0, d = U(i) ? a : DHt(i) ? s : void 0, x = E(d);
  return [ ...n !== void 0 && typeof x === "string" && x !== "" ? [ {
    plugin: x,
    scope: n
  } ] : [], ...I(t, De) ];
}

var Vtn = String.fromCharCode(0);

var ge = e => [ "image", e.plugin, e.key ?? "" ].join(Vtn);

function re(e, t, r) {
  let o = r === "Raster", s = o ? "a Raster" : "an Image", n = o ? "cells" : "source";
  return `returned ${s} it did not draw (${String(t)}/${String(e)}); a render hook may keep the ones next(e) returned and change their ${n}, not which plugin or key they name`;
}

var Me = (e, t) => ({
  ...e,
  image: {
    plugin: t
  }
});

var Le = {
  stampOf: e => e.image,
  restamp: Me,
  seenKeyOf: (e, t) => {
    let r = e.props.key;
    return r === void 0 || typeof r === "string" ? ge({
      plugin: t,
      key: r
    }) : void 0;
  },
  refusal: (e, t) => re(e.props.key, t, "Image")
};

function Ue(e) {
  if (!L(e)) return [];
  let t = e;
  if (t.type !== "Image") return I(t, Ue);
  let {props: r} = t, o = E(t.image), s = L(r) ? r.key : void 0;
  return typeof o === "string" && o !== "" ? [ {
    plugin: o,
    key: typeof s === "string" ? s : void 0
  } ] : [];
}

function _e(e) {
  return e === "onPress" || e === "onEvent";
}

var Ke = e => oS(e) && typeof e.type === "string";

var oe = e => typeof e === "string" || te(e.type);

var ne = e => U(e.type) && "press" in e && L(e.press);

var W = e => DHt(e.type);

import { isProxy as We } from "util/types";

function se(e, t) {
  let r = Object.getOwnPropertyDescriptor(e, t);
  return r && "value" in r ? r.value : void 0;
}

function ke(e, t, r) {
  return e.set(t, r), r;
}

function wr(e, t) {
  let r = new WeakMap;
  function o(i) {
    if (Array.isArray(i)) {
      let a = se(i, "length"), d = typeof a === "number" ? a : 0, x = ke(r, i, []);
      for (let c = 0; c < d; c += 1) x[c] = n(se(i, String(c)));
      return x;
    }
    let m = ke(r, i, {});
    for (let a of Object.keys(i)) if (a !== "__proto__") m[a] = s(a, se(i, a));
    return m;
  }
  function s(i, m) {
    return !We(m) && typeof m === "function" && _e(i) ? m : n(m);
  }
  function n(i) {
    if (We(i)) throw new Ie(`${t}: returned a drawing that holds a Proxy; an element, its props and its hover are plain objects and arrays`);
    let m = Array.isArray(i) || oS(i);
    if (typeof i === "function") throw new Ie(`${t}: returned a drawing with a function where plain data goes; a closure rides only in an element's onPress or onEvent`);
    if (!m && L(i)) throw new Ie(`${t}: returned a drawing that holds an object that is not plain data (a class instance); an element, its props and its hover are plain objects and arrays`);
    return m ? r.get(i) ?? o(i) : i;
  }
  return n(e);
}

function $e(e) {
  let t = L(e) ? e : {}, r = E(t.part);
  return [ ...DHt(t.type) && typeof r === "string" && r !== "" ? [ r ] : [], ...I(t, $e) ];
}

var Te = (e, t) => `${e}\0${t}`;

var he = e => [ "raster", e.plugin, e.key ].join(Vtn);

var Be = (e, t) => ({
  ...e,
  raster: {
    plugin: t
  }
});

var Ge = {
  stampOf: e => e.raster,
  restamp: Be,
  seenKeyOf: (e, t) => {
    let r = e.props.key;
    return typeof r === "string" ? he({
      plugin: t,
      key: r
    }) : void 0;
  },
  refusal: (e, t) => re(e.props.key, t, "Raster")
};

function qe(e) {
  if (!L(e)) return [];
  let t = e;
  if (t.type !== "Raster") return I(t, qe);
  let {props: r} = t, o = E(t.raster), s = L(r) ? r.key : void 0;
  return typeof o === "string" && o !== "" && typeof s === "string" ? [ {
    plugin: o,
    key: s
  } ] : [];
}

function ze(e, t) {
  let r = {
    plugin: e.press.plugin,
    handle: t
  };
  switch (e.type) {
   case "Button":
    return {
      ...e,
      press: r
    };

   case "Input":
    return {
      type: "Input",
      props: e.props,
      press: r
    };

   case "Select":
    return {
      type: "Select",
      props: e.props,
      press: r
    };

   case "Markdown":
    return {
      type: "Markdown",
      props: e.props,
      press: r
    };
  }
}

function B(e, t) {
  let r = e, o = "children" in r ? r.children : void 0;
  return Array.isArray(o) ? {
    ...e,
    children: o.map(t)
  } : e;
}

function ve(e, t) {
  if (oe(e)) return e;
  if (ne(e)) {
    let r = t(e.press.plugin, e.press.handle);
    return r === void 0 ? e : ze(e, r);
  }
  return B(e, r => ve(r, t));
}

var wGs = (e, t) => ve(e, t);

var Ve = (e, t) => ({
  ...e,
  client: {
    plugin: t
  }
});

function Ye(e, t) {
  let r = E(e.client), o = e.props.key, s = e.props.module;
  if (r === "" || r === void 0) return Ve(e, t.plugin);
  if (!(typeof r === "string" && typeof o === "string" && typeof s === "string" && t.seen.has(xe({
    plugin: r,
    key: o,
    module: s
  })))) throw new Ie(`${t.plugin}: returned a Client it did not draw (${String(r)}/${String(o)} ${String(s)}); a render hook may keep the ones next(e) returned and change their props, not which plugin, key or module they name`);
  return e;
}

var Je = (e, t) => ({
  ...e,
  group: {
    plugin: t
  }
});

function pe(e, t, r) {
  let o = RTr(t), s = e.groups.get(o) ?? 0;
  if (s < 1) throw new Ie(`${e.plugin}: returned a ${r} in another plugin's hover scope that next(e) did not hand it; a render hook may keep the ones next(e) returned and restyle them, not join another plugin's group`);
  e.groups.set(o, s - 1);
}

function Qe(e, t) {
  let r = LHt(e.hover);
  if (r === void 0) return e;
  let o = E(e.group);
  if (o === "" || o === void 0 || o === t.plugin) return Je(e, t.plugin);
  return pe(t, {
    plugin: String(o),
    scope: r
  }, e.type), e;
}

function ie(e, t, r) {
  let o = E(r.stampOf(e));
  if (o === "" || o === void 0) return r.restamp(e, t.plugin);
  let n = typeof o === "string" ? r.seenKeyOf(e, o) : void 0;
  if (!(n !== void 0 && t.seen.has(n))) throw new Ie(`${t.plugin}: ${r.refusal(e, o)}`);
  return e;
}

var Xe = (e, t) => ie(e, t, Le);

var Ze = {
  Button: "a Button",
  Input: "an Input",
  Select: "a Select",
  Markdown: "a Markdown"
};

var G = (e, t) => ({
  ...e,
  part: {
    plugin: t
  }
});

function me(e) {
  let {part: t, ...r} = e;
  return r;
}

function et(e, t) {
  if (!("part" in e)) return e;
  let r = E(e.part);
  if (r === t.plugin) return G(e, t.plugin);
  let o = typeof r === "string" ? t.parts.get(r) ?? 0 : 0;
  if (typeof r !== "string" || r === "" || o < 1) return me(e);
  return t.parts.set(r, o - 1), G(e, r);
}

var tt = (e, t) => ie(e, t, Ge);

function rt(e, t, r) {
  let o = {
    plugin: t,
    handle: r
  };
  switch (e.type) {
   case "Button":
    {
      let s = {
        type: "Button",
        props: e.props,
        press: o
      }, i = e.hover === void 0 ? s : {
        ...s,
        hover: e.hover
      };
      return e.children === void 0 ? i : {
        ...i,
        children: e.children
      };
    }

   case "Input":
    return {
      type: "Input",
      props: e.props,
      press: o
    };

   case "Select":
    return {
      type: "Select",
      props: e.props,
      press: o
    };

   case "Markdown":
    return {
      type: "Markdown",
      props: e.props,
      press: o
    };
  }
}

var ot = {
  Button: "returned a Button without an onPress function; a render hook draws one with <Button key label onPress>",
  Input: "returned an Input without an onSubmit function; a render hook draws one with <Input key onSubmit>",
  Select: "returned a Select without an onSelect function; a render hook draws one with <Select key options onSelect>",
  Markdown: "returned a pressable Markdown without an onLinkPress function; a render hook draws one with <Markdown key text onLinkPress>"
};

function q(e, t) {
  if (typeof e === "object" && e !== null && e.type === "engine") return {
    type: "engine",
    ref: e.ref
  };
  if (typeof e === "object" && !W(e) && "part" in e) return q(me(e), t);
  if (oe(e)) return e;
  if (e.type === "Client") return Ye(e, t);
  if (e.type === "Raster") return tt(e, t);
  if (e.type === "Image") return Xe(e, t);
  if (!ne(e)) {
    let H = W(e) ? et(Qe(e, t), t) : e;
    return B(H, p => q(p, t));
  }
  let {press: o, onPress: s, onEvent: n} = e, i = e.type === "Button", m = i ? s : n, a = i ? B(e, H => q(H, t)) : e;
  if (typeof o !== "object" || o === null) return a;
  let {handle: x, plugin: c} = o;
  if (typeof x !== "number") return a;
  if (c === "") {
    if (typeof m !== "function") throw new Ie(`${t.plugin}: ${ot[a.type]}`);
    return t.take(x, m), rt(a, t.plugin, x);
  }
  if (typeof c !== "string" || !t.seen.has(Te(c, x))) throw new Ie(`${t.plugin}: returned ${Ze[a.type]} it did not draw (${String(c)}#${x}); a render hook may keep the ones next(e) returned, not address another plugin's`);
  let {hover: g} = a, h = LHt(g);
  if (h !== void 0 && c !== t.plugin) pe(t, {
    plugin: c,
    scope: h
  }, a.type);
  return a;
}

function no({tree: e, ...t}) {
  let r = q(e, t);
  return W(r) && r.part === void 0 ? G(r, t.plugin) : r;
}

var _ = (e, t) => `${e}\0${t}`;

function ao(e, t, r) {
  let o = e.taking.get(t);
  if (e.taking.delete(t), o === void 0) return;
  let s = new Set;
  for (let {plugin: n, handle: i} of HHt(r)) for (let [m, a] of e.environments) if (a.name === n) s.add(_(m, i));
  for (let n of o) if (!s.has(n)) e.presses.delete(n);
}

function fo(e, t) {
  for (let r of e.toldUnder.get(t) ?? []) r.isTold = !1;
  e.toldUnder.delete(t);
}

function N(e, t) {
  let r = e.environments.get(t);
  if (r === void 0) throw new Ie(`environment ${t} is not loaded`);
  return r;
}

function nt(e, t) {
  let r = e.framing.getStore();
  return r?.environmentId === t ? r.registration : void 0;
}

var z = (e, t) => uxs({
  next: () => t(() => e.next()),
  return: () => t(() => e.return(void 0))
});

function fe(e, t) {
  let {name: r, nextTo: o} = e;
  for (let s of t) if (SAr(s) && !o.has(s)) throw new Ie(`${r}: next.to("${s}") refused: its hooks module does not spell ${pvo(s)} in a literal the scan reads (host rule)`);
}

function it(e, t, r) {
  let {environmentId: o, name: s} = t, n = wr(t.result, s);
  return Ke(n) ? no({
    tree: n,
    plugin: s,
    seen: r.seen,
    groups: r.groups,
    parts: r.parts,
    take: (i, m) => {
      let a = _(o, i);
      e.presses.set(a, m);
      let d = e.dispatching.getStore();
      if (d !== void 0) e.taking.get(d)?.add(a);
    }
  }) : n;
}

function D(e, t, r) {
  let o = e.framing.getStore();
  return o?.environmentId === t && o.isTold === !0 ? new Ie(`${e.environments.get(t)?.name}: ${r} refused: a .catch asked because re-entry left its hook out answers and calls its own next(), nothing else`) : void 0;
}

function mt(e, t, r) {
  let o = TAr(r) ? Cwo(e, t) : void 0;
  return o === void 0 ? r : _Wn(r, o);
}

function K(e, t, r) {
  let {environmentId: o, event: s, resolver: n, leftOut: i, told: m, causes: a, ended: d, caughtAnswered: x, endedReached: c, withheld: b} = t, {environment: f, name: g, tier: h, answersForEngine: F} = N(e, o), H = r ?? f.activation.registrations.get(s, {
    leftOut: i,
    told: m,
    causes: a
  });
  if (!H) throw new Ie(`${g}: no ${s} handler`);
  let {run: p, catch: u} = H;
  function k(y, T) {
    return n !== void 0 ? Ne(e, f, {
      result: y,
      resolver: n
    }) : s === "ui.render" ? it(e, {
      environmentId: o,
      name: g,
      result: y
    }, T) : f.leaving(y, s);
  }
  function w() {
    let y = D(e, o, "next()");
    if (y !== void 0) throw y;
  }
  function v(y, {seen: T, groups: R, parts: M, counted: V}) {
    function Se(P) {
      if (s === "ui.render" && Ke(P) && !V.has(P)) {
        V.add(P);
        for (let j of HHt(P)) T.add(Te(j.plugin, j.handle));
        for (let j of Awo(P)) T.add(xe(j));
        for (let j of qe(P)) T.add(he(j));
        for (let j of Ue(P)) T.add(ge(j));
        for (let j of De(P)) {
          let He = RTr(j);
          R.set(He, (R.get(He) ?? 0) + 1);
        }
        for (let j of $e(P)) M.set(j, (M.get(j) ?? 0) + 1);
      }
      return P;
    }
    return f.nextFor(ywe({
      call: async P => (w(), f.freezeForNext(hWn(P, g)), Se(await y(P))),
      to: async (P, ...le) => (w(), f.freezeForNext(hWn(P, g)), fe(N(e, o), le), Se(await kut(P, y, le))),
      signal: y.signal,
      is: y.is,
      event: y.event,
      origin: y.origin,
      trace: () => y.trace,
      budget: () => y.budget,
      caught: tWn(y)
    }), s);
  }
  let S = ee({
    environment: f,
    name: g,
    event: s
  });
  async function C(y, T, R) {
    let M = er();
    try {
      return k(await y(S(T), v(R, M)), M);
    } catch (V) {
      throw mt(s, T, V);
    }
  }
  async function O(y, T, R) {
    if (c?.(o, T), y.called) await R(T).then(void 0, () => {});
    throw new Ie(y.reason);
  }
  return {
    name: g,
    environmentId: o,
    tier: h,
    ...F && {
      answersForEngine: F
    },
    ...u && {
      catch: async (y, T) => {
        let R = await C(u, y, T);
        if (R !== void 0) x?.(o);
        return R;
      }
    },
    ...b && {
      withheld: b
    },
    run: (y, T) => d === void 0 ? C(p, y, T) : O(d, y, T)
  };
}

function at(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callId : void 0;
}

var ue = (e, t) => ({
  environmentId: t,
  dispatchId: e.dispatching.getStore(),
  registration: nt(e, t),
  serving: at(e),
  rootEvent: Pe(e, t)
});

var Ao = (e, t) => (r, o, s) => {
  let n = D(e, t, `$.${r}`);
  if (n !== void 0) return Promise.reject(n);
  let i = () => e.hostOps({
    ...ue(e, t),
    op: r,
    args: o,
    signal: s
  });
  return iPe(r) ? i() : Gwo(i);
};

function ce(e, {environmentId: t, call: r}, o) {
  let s = o.next.bind(o);
  return Object.defineProperty(o, "next", {
    configurable: !0,
    value: (...n) => {
      let i = D(e, t, r);
      return i === void 0 ? s(...n) : Promise.reject(i);
    }
  });
}

var Co = (e, t) => (r, o, s) => {
  let n = new AbortController, i = s === void 0 ? n.signal : AbortSignal.any([ s, n.signal ]), m = `$.${r}`, a = D(e, t, m), d = a === void 0 ? z(e.hostStreamOps({
    ...ue(e, t),
    op: r,
    args: o,
    signal: i
  }), Gwo) : void 0;
  async function* x() {
    if (d === void 0) throw a;
    try {
      return yield* d;
    } catch (c) {
      if (n.signal.aborted) return;
      throw c;
    }
  }
  return ce(e, {
    environmentId: t,
    call: m
  }, mxs(_K(x), () => n.abort(new Ie(`${r}: the stream was let go`))));
};

function Io(e, {event: t, leftOut: r}, [o, s]) {
  let {environment: n, name: i} = N(e, o);
  return n.activation.registrations.catches(t, Z({
    environment: n,
    name: i,
    event: t,
    e: s
  }), r?.find(m => m.environmentId === o)?.registrations);
}

function Lo(e, t) {
  let {environmentId: r, request: o, core: s} = t, n = {
    surface: o.surface,
    component: o.component
  }, i = N(e, r);
  return LP({
    e: n,
    handlers: o.environments.filter(m => e.environments.has(m)).map(m => K(e, {
      environmentId: m,
      event: "ui.resolve",
      resolver: r
    })),
    site: ou["ui.resolve"],
    bottom: () => Promise.resolve(s),
    origin: {
      plugin: i.name,
      tier: i.tier
    }
  });
}

var $o = (e, t) => {
  e.delete(t);
};

var Bo = () => ({
  event: "session.start",
  isLive: !0,
  answersUntil: Number.POSITIVE_INFINITY
});

function ft({body: e, isOpened: t, beneath: r}, o) {
  let s = 0;
  async function* n() {
    try {
      let c = yield* e;
      return c !== void 0 || t() ? c : yield* r();
    } finally {
      o.isTold = !1;
    }
  }
  let i = n(), m = i.next.bind(i), a = i.return.bind(i);
  async function d(...c) {
    s += 1;
    try {
      return await m(...c);
    } finally {
      s -= 1;
    }
  }
  function x(c) {
    let b = s === 0, f = a(c);
    if (b) return f;
    return f.catch(() => {}), Promise.resolve({
      done: !0,
      value: void 0
    });
  }
  return Object.defineProperties(i, {
    next: {
      configurable: !0,
      value: d
    },
    return: {
      configurable: !0,
      value: x
    }
  });
}

function we(e, t) {
  let {environmentId: r, event: o, leftOut: s, told: n, causes: i} = t, {environment: m, name: a, tier: d} = N(e, r), x = ee({
    environment: m,
    name: a,
    event: o
  });
  function c(f, g) {
    let h = f;
    function F(H, p) {
      if (g !== void 0) return g.once(() => H(g.raised));
      m.freezeForNext(hWn(p, a));
      let u = D(e, r, "next()");
      if (u !== void 0) throw u;
      return ce(e, {
        environmentId: r,
        call: "next()"
      }, H(p));
    }
    return m.streamNextFor(XTr({
      ...inn(f),
      ...g && {
        caught: fxs(f.budget.ms, g.cause)
      },
      call: H => F(h, H),
      to: (H, ...p) => (fe(N(e, r), p), F(u => zwo(u, h, p), H))
    }));
  }
  let b = (f, g) => z(g, h => e.framing.run(f, h));
  return m.activation.registrations.streamClauses(o, {
    leftOut: s,
    told: n,
    causes: i
  }).map(f => {
    if (f.kind === "value") return RGs(K(e, t, f.hook));
    let {registration: g} = f, h = f.isTold === !0, F = p => async (u, k) => {
      let w = {
        environmentId: r,
        registration: g,
        isTold: h
      }, v, S = O => v ??= O(), C = b(w, await p(x(u), c(k, h ? {
        once: S,
        raised: u,
        cause: i?.[g]
      } : void 0)));
      return h ? ft({
        body: C,
        isOpened: () => v !== void 0,
        beneath: () => k(u)
      }, w) : C;
    }, H = f.catch;
    return {
      name: a,
      environmentId: r,
      tier: d,
      run: F(f.open),
      ...H !== void 0 && {
        catch: F(H)
      },
      ...h && {
        budgetMs: w3e
      }
    };
  });
}

function Zo(e, {request: t, hostNext: r, signal: o}) {
  let {event: s, leftOut: n, environments: i} = t, m = i.flatMap(d => we(e, {
    environmentId: d,
    event: s,
    ...de(n, d)
  })), a = (d, x, c = Put) => r(d, x, c);
  return {
    e: t.payload,
    handlers: m,
    site: Vse(s, t.raise),
    signal: o,
    isHopFold: !0,
    bottom: a,
    origin: t.origin,
    floors: t.floors
  };
}

function rn(e, t, r) {
  let o = {
    ...t,
    isTold: !0
  }, s = e.dispatching.getStore();
  if (s !== void 0) e.toldUnder.get(s)?.add(o);
  return e.framing.run(o, r);
}

function Rwo({hostOps: e, hostStreamOps: t, stamp: r, createEnvironment: o, servedBudgetMs: s = Ape}) {
  let n = It(e, t, r), i = o ?? svo, {environments: m, loading: a, dispatching: d, framing: x, serving: c, answering: b, presses: f} = n;
  async function g(p, u, k) {
    if (u === "ui.render") n.taking.set(p, new Set);
    let w, S = u === "session.start" ? Bo() : void 0;
    n.toldUnder.set(p, new Set);
    try {
      return w = await d.run(p, () => b.run(S, k)), w;
    } finally {
      if (S !== void 0) S.isLive = !1;
      ao(n, p, w), fo(n, p);
    }
  }
  async function h(p, u, k) {
    let w = new Set, v = p.event === Y ? {
      isGiven: !1
    } : void 0, S = new Map, C;
    try {
      C = await g(p.id, p.event, () => LP({
        e: p.payload,
        handlers: p.environments.map(T => K(n, {
          environmentId: T,
          event: p.event,
          ...de(p.leftOut, T),
          ended: p.ended,
          caughtAnswered: R => w.add(R),
          ...v && {
            withheld: () => {
              v.isGiven = !0;
            }
          },
          endedReached: (R, M) => S.set(R, M)
        })),
        site: Vse(p.event, p.raise),
        signal: k,
        isHopFold: !0,
        bottom: (T, R, M = Put) => u(T, R, M),
        origin: p.origin,
        floors: p.floors,
        cutAt: p.cutAt
      }));
    } catch (T) {
      throw v?.isGiven === !0 ? _Wn(T, {
        isNoted: !0
      }) : T;
    }
    let O = [ ...S ].find(([T]) => T === p.ended?.kept), y = O !== void 0 && !w.has(O[0]) && !Io(n, p, O);
    return {
      result: C,
      ...p.ended !== void 0 && {
        answered: [ ...w ]
      },
      ...y && {
        unmatched: !0
      },
      ...v?.isGiven === !0 && {
        withheld: !0
      }
    };
  }
  let F = (p, u) => z(u, k => d.run(p, () => b.run(void 0, k)));
  return {
    currentDispatch: () => d.getStore(),
    opFailureOf: p => Array.from(m.values(), u => u.environment.opFailureOf(p)).find(u => u !== void 0),
    ownsValue: p => Array.from(m.values()).some(u => u.environment.ownsValue(p)),
    has: p => m.has(p),
    async load(p, u) {
      let k = new AbortController;
      a.set(p, k);
      let w;
      try {
        w = await i(Ao(n, p), u, {
          stamp: r ? {
            view: r,
            environmentId: p
          } : void 0,
          signal: k.signal,
          hostStream: Co(n, p),
          framed: (v, S, C) => {
            let O = C === "told", y = {
              environmentId: p,
              registration: v
            };
            return O ? rn(n, y, S) : x.run({
              ...y,
              isTold: !1
            }, S);
          },
          toldRefusal: v => D(n, p, v),
          blamedFor: () => ye(n)[0],
          blamedWalk: Ot(n, p)
        });
      } finally {
        a.delete(p);
      }
      return m.set(p, {
        environment: w,
        name: u.pluginName,
        tier: u.tier,
        nextTo: new Set(u.scan.nextTo ?? []),
        answersForEngine: ivo(u.modulePath)
      }), {
        registered: w.activation.registrations.registered
      };
    },
    unload(p) {
      a.get(p)?.abort(), a.delete(p);
      let u = m.get(p);
      if (u) m.delete(p), n.resolving.delete(p), u.environment.dispose();
      for (let k of f.keys()) if (k.startsWith(_(p, 0).slice(0, -1))) f.delete(k);
    },
    dispatch: h,
    dispatchStream: (p, u, k) => _K(F(p.id, ZTr(Zo(n, {
      request: p,
      hostNext: u,
      signal: k
    })))),
    link: p => K(n, p),
    linkStreams: p => we(n, p),
    within: g,
    withinSteps: F,
    async resolveTables(p, u) {
      let {environment: k} = N(n, p), w = (n.resolving.get(p) ?? 0) + 1;
      n.resolving.set(p, w);
      let v = Re(), S = await Promise.all(u.map(async O => ({
        surface: O.surface,
        component: O.component,
        answer: await Lo(n, {
          environmentId: p,
          request: O,
          core: v[O.surface]
        })
      })));
      if (m.get(p)?.environment === k && n.resolving.get(p) === w) k.storeResolved(S);
    },
    build: (p, u, k) => {
      N(n, p).environment.activation.finalize(u, k);
    },
    callInterface(p, {name: u, method: k, args: w}, v) {
      let {environment: S} = N(n, p);
      if (v) n.servingLive.add(v.callId);
      let O = v !== void 0 && s !== Number.POSITIVE_INFINITY ? setTimeout($o, s, n.servingLive, v.callId) : void 0;
      function y() {
        if (clearTimeout(O), v) n.servingLive.delete(v.callId);
      }
      let T = () => Axs(r, v?.callers ?? [], () => S.activation.callInterface(u, k, S.cloneIn(w))).then(S.leaving);
      try {
        return S3e.exit(() => x.run(void 0, () => b.run(void 0, () => c.run(v, T)))).finally(y);
      } catch (R) {
        throw y(), R;
      }
    },
    press(p, u, k) {
      let {environment: w} = N(n, p), v = f.get(_(p, u));
      if (v === void 0) return Promise.reject(new Ie(`ui.press/ui.input/ui.select: no handler is held under handle ${u}`));
      let S = Et(p, k);
      return x.run(void 0, () => b.run(S, () => w.invoke(v, [ w.cloneIn(k) ]).then(() => {}).finally(() => {
        S.isLive = !1;
      })));
    },
    releasePresses: (p, u) => {
      for (let k of u) f.delete(_(p, k));
    }
  };
}

function Ktn(e, t) {
  for (let r of e.values()) r.reject(new Ie(t));
  e.clear();
}

function a5(e, t) {
  let r = e.get(t);
  return e.delete(t), r;
}

var xTr = 0;

var vGs = 3;

var xwo = 2;

var Pwo = 1;

export { Gtn, HHt, Awo, RTr, DHt, LHt, Vtn, wGs, Cwo, Rwo, xTr, vGs, xwo, Pwo, Ktn, a5 };
