// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ie, cPe, NUe, Kl } from "./chunk-3btm71fm.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { ir, CUe, h3e, Yjn, Epe, uE, Sut, wb, OO, MUe, Kse, hxs, yxs, _xs, bxs, unn, oAr, ovo, oWn, kxs, Txs } from "./chunk-ep1bh0vt.js";

import { Go } from "./chunk-jbphjy99.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { Ht } from "./chunk-nvtwm272.js";

import { Y, t } from "./chunk-kawq2919.js";

import { XW } from "./chunk-bv9f914r.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { dat, _Y, pdo, Vxt, pyr, fyr, myr, gyr, hyr, P0n, yyr, _yr, iue, bY, Nbe, U0n, $be, Nyr, $yr, Fyr, sco, Uyr, Byr, j0n, mJt } from "./chunk-sqb9meyh.js";

import { hV } from "./chunk-y7wav9vk.js";

import { DHt, LHt } from "./chunk-bx9d0ach.js";

import { T8t } from "./chunk-bkx9v5fh.js";

import { j4t, Tot } from "./chunk-84yp45y8.js";

import { hg } from "./chunk-crkn0jm6.js";

import { $Ce } from "./chunk-w21nffj3.js";

import { _s } from "./chunk-1dj3skht.js";

import { L } from "./chunk-vh1p9t2h.js";

import { Ue } from "./chunk-nvz3jsgg.js";

function Njr(r = {}) {
  let i = r.run ?? mJt, f = r.schedule ?? (m => {
    let c = setTimeout(m, hg);
    return () => {
      clearTimeout(c);
    };
  }), w = r.warn ?? (m => {
    t(m, {
      level: "warn"
    });
  }), p = new Map, T, a = 0;
  function u() {
    T = void 0;
    let m = [ ...p.values() ];
    p.clear();
    for (let {message: c, reply: C} of m) a += 1, i(c).then(C, v => {
      w(`ui.message ${c.plugin}/${c.message.element}: the chain threw (${l(v)}); no reply`);
    });
  }
  return {
    post(m, c, C) {
      p.set(m, {
        message: c,
        reply: C
      }), T ??= f(u);
    },
    cancel(m) {
      if (p.delete(m), p.size === 0 && T !== void 0) T(), T = void 0;
    },
    dispatched: () => a
  };
}

var We = Njr();

var $jr = (r, i) => `${r}\0client\0${i}`;

var we = r => ({
  component: r.component,
  requestId: $jr(r.requestId, r.key),
  surface: r.surface
});

var te = (r, i, f) => `Client ${i}: ${Fyr(r, i, f)}`;

var sGe = Ue(_s({
  focusedId: null
}), r => r.setState(() => ({
  focusedId: null
})));

var Xhn = r => sGe.setState(i => i.focusedId === r ? i : {
  focusedId: r
});

var MVo = r => sGe.setState(i => i.focusedId === r ? {
  focusedId: null
} : i);

var j = r => r === h3e ? 1 : 0;

function ye(r, i) {
  let f = {
    surface: r.drawing.surface,
    component: i,
    requestId: r.requestId
  };
  return {
    site: f,
    bornAt: $be(f),
    holders: 0
  };
}

var Ce = (r, i) => ({
  plugin: r,
  handle: i
});

function Se(r, i, f) {
  function w(p) {
    if (!L(p)) return p;
    let {props: T, hover: a, children: u, held: m} = p, c = {
      type: p.type
    };
    if (T !== void 0) c.props = T;
    if (a !== void 0) c.hover = a;
    if (DHt(p.type) && LHt(a) !== void 0) c.group = {
      plugin: r
    };
    if (typeof m === "number") c.press = Ce(r, f(m));
    if ((typeof m !== "number" || p.type === "Button") && Array.isArray(u)) c.children = u.map(w);
    return c;
  }
  return NUe(w(Sut(Y(i))));
}

var re = r => [ r.plugin, r.surface, r.requestId, r.key ].join(" ");

var ne = 20;

var se = 8;

var ke = 3;

var ge = r => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});

var ve = (r, i) => ({
  id: re(r),
  plugin: r.plugin,
  module: r.module,
  element: r.key,
  drawing: we(r),
  requestId: r.requestId,
  clock: r.clock,
  props: r.props,
  handedProps: r.props,
  columns: 0,
  rows: 0,
  surface: void 0,
  snapshot: {
    status: "loading"
  },
  listeners: new Set,
  held: [],
  holders: 1,
  dialogHolders: j(r.component),
  rowSite: j(r.component) === 0 ? r.component : void 0,
  drawnSite: void 0,
  isOverBudget: !1,
  isDirty: !1,
  isRendering: !1,
  unpromptedRenders: 0,
  renderTimer: void 0,
  measurings: 0,
  frameOutcome: "unmeasured",
  isUnsettled: !1,
  terminal: i,
  selfDrawnTimer: void 0,
  renderedAt: i,
  thrownAt: void 0,
  toldLast: void 0,
  isDestroyed: !1,
  destroyTimer: void 0,
  mountGeneration: 0,
  heldIn: new Map,
  environmentId: void 0
});

var N = (r, i, f) => Nbe({
  key: [ `${r.plugin}#${r.environmentId}`, `Client ${r.module}`, i ].join(" "),
  lead: r.plugin,
  text: te(r.plugin, r.module, f)
});

var Re = {
  instance: `its region changed size on each of ${se} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`,
  frame: `the Clients on screen were measured again in ${ne} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns`
};

var So = (r, i) => N(r, `unsettled ${i}`, Re[i]);

function U() {
  let r = hV.get();
  return [ r?.columns, r?.rows, r?.conversationColumns ].join("x");
}

function Ro(r = Nyr()) {
  return i => void r(i).catch(f => {
    Kl().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${l(f)})`, "warn");
  });
}

function Ae(r, i) {
  let {name: f, message: w} = unn(r) ? r : i(r);
  return w.trim() !== "" ? w : f === "Error" ? $yr : f;
}

var De = r => `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;

var be = ({pluginName: r, environmentId: i, owns: f}) => j4t((w, p) => {
  if (!(f(p) || f(w))) return;
  let a = De(iue(oWn(w)));
  try {
    bY({
      key: `${r}#${i} Client rejection`,
      lead: r,
      text: a
    });
  } catch (u) {
    t(`${r}: the fault could not be said: ${l(u)}`, {
      level: "error"
    });
  }
  return `${r}: ${a}`;
});

import * as ie from "vm";

var $e = r => unn(r) && E(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";

var he = 1e3;

var _e = 6e4;

var Fe = "__surface__.run()";

var je = (r, i) => ({
  ...r,
  timers: new Map,
  tick: i
});

async function Ko(r, i = {}) {
  let {pluginName: f, pluginRoot: w, environmentId: p, surfaceModules: T} = r, a = !1, {sandbox: u, context: m} = kxs(), c = _xs(m), C = o => NUe(c(o)), v = bxs(m, w), O = yxs(m), S = Kse(m), {intoEnvironment: P} = oAr(S, v, O), y = Txs(m, P);
  Object.assign(u, {
    console: hxs(y, `[${f}] surface`)
  });
  let ae = be({
    pluginName: f,
    environmentId: p,
    owns: O
  }), k = new Map, M = 0, fe = 0;
  function A(o) {
    let n = k.get(o);
    if (!n) throw new Ie(`${f}: no client instance ${o}`);
    return n;
  }
  function me(o, n) {
    let s = A(o), d = `${f}: Client ${s.module}: post: the data`;
    if (n.length > Yjn) throw new Ie(`${d} serializes to ${n.length} characters, over the ${Yjn} limit; not sent`);
    let x = Y(n), g = Epe(x);
    if (g !== void 0) throw new Ie(`${d} ${g}; not sent`);
    s.host.post(x);
  }
  function K(o, n) {
    let s = A(o), d = ++fe;
    return s.timers.set(d, s.host.startTimer(n, () => {
      if (k.get(o)?.timers.has(d) === !0) s.tick(d);
    })), d;
  }
  let R = wb({
    schedule: OO(y(o => {
      k.get(o)?.host.schedule();
    })),
    post: OO(y(me)),
    startTimer: OO(y(K)),
    stopTimer: OO(y((o, n) => {
      let s = k.get(o);
      s?.timers.get(n)?.(), s?.timers.delete(n);
    })),
    fault: OO(y((o, n) => {
      let s = k.get(o);
      if (s === void 0) {
        t(`${f}: Client: a promise an instance since unmounted returned was rejected: ${iue(n)}`, {
          level: "warn"
        });
        return;
      }
      s.host.fault(new Ie(`${f}: Client ${s.module}: a promise it returned was rejected: ${n}`));
    }))
  }), {mount: pe, setProps: ue, resize: B, stage: V, dropHeld: W, hasListener: q, unmount: J} = ie.runInContext(uE(Uyr), m)(R, C(Byr())), ce = new ie.Script(uE(Fe), {
    filename: `${f} surface`
  }), de = i.budgetMs ?? he, _ = MUe(he, i.budgetMs), Q = o => $e(o) ? `ran longer than its ${de}ms budget` : Ae(o, S), Z = (o, n) => new Ie(`${f}: Client ${o}: ${Q(n)}`);
  function H(o, n, s) {
    if (a) throw cPe(f);
    V(o.id, n, s === void 0 ? void 0 : C(s));
    try {
      return ce.runInContext(m, _);
    } catch (d) {
      throw Z(o.module, d);
    }
  }
  let ee = ovo({
    args: {
      pluginName: f,
      pluginRoot: w,
      linked: T.flatMap(o => o.linked),
      links: T.flatMap(o => o.links)
    },
    context: m,
    isScanned: !0,
    stamped: o => o(),
    evaluateOptions: _
  }), G = i.readyMs ?? Tot, D = new Map;
  for (let o of T) D.set(o.module, await F(o));
  async function F(o) {
    try {
      let n = await Ht(ee.load(o.modulePath, o.source), G, `its top level did not settle in ${G}ms`);
      return {
        component: o.component,
        exports: n
      };
    } catch (n) {
      return {
        error: new Ie(`${f}: Client ${o.module}: the surface module did not load: ${Q(n)}`)
      };
    }
  }
  function z(o) {
    if (!k.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if (o.timers.clear(), !a) J(o.id);
  }
  function oe(o) {
    let n = D.get(o);
    if (!n) {
      let g = [ ...D.keys() ].join(", ") || "none";
      throw new Ie(`${f}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`);
    }
    if ("error" in n) throw n.error;
    let {component: s, exports: d} = n, x = Object.hasOwn(d, s) && d[s];
    if (typeof x !== "function") throw new Ie(`${f}: Client ${o}: its export ${s} is not a function (props, surface) => tree`);
    return x;
  }
  function X(o) {
    if (!a) o();
  }
  function e(o) {
    let {props: n, host: s} = o;
    if (a) throw cPe(f);
    let d = oe(o.module), x = ++M, g = je({
      id: x,
      module: o.module,
      host: s
    }, h => {
      H(g, "tick", h);
    });
    return k.set(x, g), pe(x, d, C(n)), {
      id: x,
      render: () => {
        let h = H(g, "render");
        if (typeof h !== "string") throw Z(o.module, Error("the module returned no tree"));
        return h;
      },
      setProps: h => X(() => ue(x, C(h))),
      resize: (h, I) => X(() => B(x, h, I)),
      pointer: h => {
        H(g, "pointer", h);
      },
      key: h => {
        H(g, "key", h);
      },
      runHeld: (h, I) => {
        H(g, "held", {
          handle: h,
          event: I
        });
      },
      dropHeld: h => X(() => W(x, C(h))),
      hasPointerListener: () => !a && q(x, "pointer"),
      hasKeyListener: () => !a && q(x, "key"),
      unmount: () => z(g)
    };
  }
  return {
    pluginName: f,
    environmentId: p,
    mount: e,
    dispose() {
      if (a) return;
      for (let o of [ ...k.values() ]) z(o);
      setTimeout(ae, _e).unref(), a = !0;
    },
    isDisposed: () => a
  };
}

var Be = (r, i) => ({
  environmentId: r,
  loading: i,
  loaded: void 0
});

var qe = Ue(Go(), r => r.set(void 0));

function ze() {
  let r = new Map, i = Me(), f;
  function w(a, u) {
    if (r.get(a) === u) r.delete(a);
    u.loading.then(c => {
      c.dispose(), dat.forget(a), t(`surface environment of ${a} (environment ${u.environmentId}) disposed`);
    }, () => {}), queueMicrotask(() => i.emit(a));
  }
  function p() {
    let a = new Map(Ge().loadedModules.map(u => [ u.name, u.environmentId ]));
    for (let [u, m] of [ ...r ]) if (a.get(u) !== m.environmentId) w(u, m);
  }
  function T(a) {
    let u = $Ce(a);
    if (!u) return Promise.reject(new Ie(`${a}: Client: the plugin is not loaded`));
    let m = r.get(a);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) w(a, m);
    let {surfaceModules: c, pluginRoot: C} = u.args;
    if (!c || c.length === 0) return Promise.reject(new Ie(`${a}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let v = qe.get(), {environmentId: O} = u, S = Be(O, Ko({
      pluginName: a,
      pluginRoot: C,
      environmentId: O,
      surfaceModules: c
    }, v === void 0 ? {} : {
      budgetMs: v
    }).then(P => (S.loaded = P, t(`surface environment of ${a} (environment ${O}) loaded ` + c.map(y => y.module).join(", ")), 
    P)));
    return r.set(a, S), S.loading;
  }
  return {
    environmentFor(a) {
      return f ??= T8t(p), T(a);
    },
    sweep: p,
    onDisposed: i.subscribe,
    disposeAll() {
      for (let [a, u] of [ ...r ]) w(a, u);
      f?.(), f = void 0;
    },
    count: () => r.size
  };
}

var Xe = ze();

function Fjr(r = {}) {
  let i = r.environments ?? Xe, f = r.port ?? We, w = r.raiseFault ?? Ro(), p = new Map, T, a = 0, u = !1, m;
  function c(e, o) {
    e.snapshot = o;
    for (let n of e.listeners) n();
  }
  function C(e) {
    k(e, e.held), e.held = [];
  }
  function v(e) {
    if (e.mountGeneration += 1, R(e), e.isDirty = !1, e.isOverBudget = !1, e.thrownAt = void 0, 
    e.drawnSite = void 0, Vxt.dropClient(A(e)), e.renderTimer) clearImmediate(e.renderTimer), 
    e.renderTimer = void 0;
    clearImmediate(e.selfDrawnTimer), _(e), e.measurings = 0, e.frameOutcome = "unmeasured", 
    e.isUnsettled = !1, _Y.holdDrawing(e.plugin, e.drawing, []), C(e), e.surface?.unmount(), 
    e.surface = void 0, f.cancel(e.id), MVo(e.id);
  }
  function O(e, o, n) {
    let s = te(e.plugin, e.module, o), d = `${e.plugin}: ${s}`;
    return Kl().log(`${d}; ${n}`, "warn"), XW(e.plugin, s, e.toldLast === s ? "once" : "again"), 
    e.toldLast = s, d;
  }
  function S(e, o, n) {
    let s = l(o), d = O(e, s, "the instance unmounted"), x = new Map(e.heldIn);
    v(e), c(e, {
      status: "failed",
      text: d
    }), w(sco(ge(e), e.drawing.surface, {
      phase: n,
      reason: s,
      sites: () => [ ...e.heldIn.values() ].filter(g => g.holders > 0).map(g => ({
        site: g.site,
        bornAt: (x.get(g.site.component) ?? g).bornAt
      }))
    }));
  }
  let P = (e, o) => `${o} ${ir({
    props: e.handedProps
  })}`;
  function y(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o();
    } catch (n) {
      S(e, n, "run");
    }
  }
  function ae(e, o) {
    let n = [], s = [], d = [], x = 0;
    try {
      let g = Se(e.plugin, o.render(), I => {
        let le = dat.hold(e.plugin, xe => {
          R(e), y(e, () => o.runHeld(I, xe));
        });
        return n.push({
          surfaceHandle: le,
          environmentHandle: I
        }), le;
      }), h = hyr(g, void 0, {
        surface: e.drawing.surface,
        within: F(e),
        measured: I => {
          x = I;
        }
      });
      if (h !== void 0) throw new Ie(`returned a tree that does not validate (${h})`);
      return [ _yr(yyr(P0n(g, I => N(e, "borderStyle", U0n(I))), I => {
        s.push(I);
      }), e.drawing.surface, I => {
        d.push(I);
      }), n, x, s, d ];
    } catch (g) {
      throw k(e, n), g;
    }
  }
  function k(e, o) {
    dat.release(e.plugin, o.map(n => n.surfaceHandle)), e.surface?.dropHeld(o.map(n => n.environmentHandle));
  }
  function M(e) {
    let {surface: o} = e;
    if (!o || e.isDestroyed) return;
    e.isDirty = !1, e.isRendering = !0, e.renderedAt = U();
    let n;
    try {
      n = ae(e, o);
    } catch (b) {
      S(e, b, "render");
      return;
    } finally {
      e.isRendering = !1;
    }
    let [s, d, x, g, h] = n, I = F(e) === h3e;
    if (I && !Vxt.fits(A(e), x)) {
      e.isOverBudget = !0, k(e, d), O(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${CUe}`, "the frame before it kept");
      return;
    }
    e.isOverBudget = !1;
    let xe = e.held;
    e.held = d;
    let Ke = pdo(s, e.drawing);
    k(e, xe), e.drawnSite = F(e), c(e, {
      status: "drawn",
      tree: Ke
    });
    for (let b of g) N(e, pyr(b), fyr(b));
    for (let b of h) N(e, `${e.drawing.surface} ${myr(b)}`, gyr(b));
    if (I) Vxt.recordClient(A(e), x);
  }
  function fe(e) {
    for (let o of p.values()) if (o.isOverBudget && o.requestId === e && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = !0, 
    o.unpromptedRenders = 0, o.renderTimer = setImmediate(K, o);
  }
  let A = e => ({
    requestId: e.requestId,
    plugin: e.plugin,
    key: e.element
  });
  function me(e) {
    if (e.isDirty || e.isDestroyed || !e.surface) return;
    if (e.unpromptedRenders >= ke) {
      let o = new Ie(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
      if (e.isRendering) throw o;
      S(e, o, "run");
      return;
    }
    e.isDirty = !0, e.renderTimer = setImmediate(K, e);
  }
  function K(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, clearImmediate(e.selfDrawnTimer), 
    e.selfDrawnTimer = setImmediate(_, e), M(e);
  }
  function R(e) {
    for (let o of p.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  function pe(e, o) {
    let n = e.mountGeneration;
    f.post(e.id, j0n(ge(e), e.drawing.surface, o), s => {
      if (s.props !== void 0 && !e.isDestroyed && e.mountGeneration === n) V(e, s.props);
    });
  }
  function ue(e, o) {
    if (e.isDestroyed || e.surface) return;
    if (e.thrownAt !== void 0) {
      if (e.thrownAt === P(e, U())) return;
      e.thrownAt = void 0, e.props = e.handedProps;
      for (let [n, s] of e.heldIn) if (s.holders > 0) e.heldIn.set(n, {
        ...s,
        bornAt: $be(s.site)
      });
    }
    try {
      e.environmentId = o.environmentId, e.surface = o.mount({
        module: e.module,
        props: e.props,
        host: {
          schedule: () => me(e),
          post: n => pe(e, n),
          startTimer: (n, s) => e.clock.every(n, () => {
            R(e), y(e, s);
          }),
          fault: n => y(e, () => {
            throw n;
          })
        }
      }), e.surface.resize(e.columns, e.rows);
    } catch (n) {
      S(e, n, "load");
      return;
    }
    M(e);
  }
  function B(e) {
    e.mountGeneration += 1;
    let o = e.mountGeneration, n = () => e.mountGeneration === o && !e.isDestroyed;
    i.environmentFor(e.plugin).then(s => {
      if (n()) ue(e, s);
    }, s => {
      if (n()) S(e, s, "load");
    });
  }
  function V(e, o) {
    if (ir(o) === ir(e.props)) return;
    e.props = o, R(e), y(e, () => {
      e.surface?.setProps(o);
    }), M(e);
  }
  function W(e, o) {
    e.handedProps = o, V(e, o);
  }
  function q(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), v(e), p.get(e.id) === e) p.delete(e.id);
  }
  function J() {
    m = void 0, a = 0;
    for (let e of p.values()) e.isUnsettled &&= e.frameOutcome !== "measured", e.measurings = 0, 
    e.frameOutcome = "unmeasured";
  }
  function ce(e) {
    let o = e.measurings >= (e.isUnsettled ? 1 : se), n = e.measurings > 0 && a > ne;
    return o ? "instance" : n ? "frame" : void 0;
  }
  function de(e, o) {
    if (e.frameOutcome = "passed over", e.surface?.resize(e.columns, e.rows), !e.isUnsettled) e.isUnsettled = !0, 
    So(e, o);
  }
  function _(e) {
    e.selfDrawnTimer = void 0;
  }
  function Q(e) {
    if (e.holders === 0) q(e);
  }
  function Z(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    let n = U(), s = n !== e.terminal, d = u && !s && e.measurings > 0;
    if (e.terminal = n, e.columns = o.columns, e.rows = o.rows, d) a += 1, u = !1;
    let x = s ? void 0 : ce(e);
    if (x !== void 0) {
      de(e, x);
      return;
    }
    if (!s) e.measurings += 1;
    if (e.frameOutcome === "unmeasured") e.frameOutcome = "measured";
    if (m ??= setImmediate(J), s || e.selfDrawnTimer === void 0) R(e);
    if (e.surface) e.surface.resize(o.columns, o.rows), M(e);
  }
  function H(e, o) {
    if (D(e, o, -1), e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - j(o)), 
    e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(Q, 0, e); else if (!ee(e)) G(e);
  }
  function ee(e) {
    return e.surface === void 0 || e.drawnSite === F(e);
  }
  function G(e) {
    if (R(e), Vxt.dropClient(A(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") c(e, {
      status: "loading"
    });
    M(e);
  }
  function D(e, o, n) {
    let s = e.heldIn.get(o) ?? ye(e, o);
    e.heldIn.set(o, {
      ...s,
      holders: Math.max(0, s.holders + n)
    });
  }
  function F(e) {
    return e.dialogHolders > 0 ? h3e : e.rowSite ?? e.drawing.component;
  }
  let z = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: n => (e.listeners.add(n), () => e.listeners.delete(n)),
    getSnapshot: () => e.snapshot,
    setProps: n => W(e, n),
    laidOut: () => {
      u = !0;
    },
    resize: (n, s) => Z(e, {
      columns: n,
      rows: s
    }),
    pointer: n => {
      R(e), y(e, () => e.surface?.pointer(n));
    },
    key: n => {
      R(e), y(e, () => e.surface?.key(n));
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    threw: n => {
      if (e.surface === void 0 || e.isDestroyed) return;
      S(e, n, "render"), e.thrownAt = P(e, e.renderedAt);
    },
    drawnAgain: () => e.thrownAt !== void 0 && e.thrownAt !== P(e, U()) && e.holders > 0 ? B(e) : void 0,
    release: () => H(e, o)
  });
  function oe(e) {
    for (let o of p.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (v(o), o.toldLast = void 0, c(o, {
        status: "loading"
      }), o.holders > 0) B(o);
    }
  }
  function X(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, D(e, o.component, 1), 
    e.clock = o.clock;
    let n = j(o.component);
    if (e.dialogHolders += n, e.rowSite = n === 0 ? o.component : e.rowSite, ee(e)) W(e, o.props); else e.handedProps = o.props, 
    e.props = o.props, y(e, () => {
      e.surface?.setProps(o.props);
    }), G(e);
    return z(e, o.component);
  }
  return {
    acquire(e) {
      T ??= [ i.onDisposed(oe), Vxt.onFreed(fe) ];
      let o = p.get(re(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return X(o, e);
      if (o) q(o);
      let s = ve(e, U());
      return p.set(s.id, s), D(s, e.component, 1), B(s), z(s, e.component);
    },
    remountPlugin: oe,
    count: () => p.size,
    dispose() {
      for (let e of T ?? []) e();
      T = void 0, clearImmediate(m), J();
      for (let e of p.values()) clearImmediate(e.selfDrawnTimer), _(e);
    }
  };
}

var HVo = Fjr();

export { Njr, $jr, sGe, Xhn, MVo, Fjr, HVo };
