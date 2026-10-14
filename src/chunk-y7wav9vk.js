// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { ke } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l, E, W } from "./chunk-b0z4bv3v.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Ja, Om } from "./chunk-2msx6erf.js";

import { le } from "./chunk-cqgvwwgb.js";

import { pr } from "./chunk-9yajep3y.js";

import { cG } from "./chunk-dd98x6x7.js";

import { Ac, Fi, MR, ec } from "./chunk-8drhysk2.js";

import { mk } from "./chunk-9wtp3skp.js";

import { Ie } from "./chunk-3btm71fm.js";

import { Go } from "./chunk-jbphjy99.js";

import { QFn, Ge } from "./chunk-chhsvfy5.js";

import { ir, DTr, UHt, l5, Vse, LP, Cut, Cpe } from "./chunk-ep1bh0vt.js";

import { FH, ce } from "./chunk-xywp7esx.js";

import { nH } from "./chunk-bv9f914r.js";

import { xl } from "./chunk-67jt18z1.js";

import { jRt } from "./chunk-sg5gpfs4.js";

import { N9t } from "./chunk-81rtbneg.js";

import { JB, ZQ, uit } from "./chunk-w21nffj3.js";

import { ose } from "./chunk-yz2w7bj4.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var uO = {};

Nr(uO, {
  ASKED_MAX: () => K,
  ASKED_ROW_SCHEMA: () => V,
  EMPTY_PANES: () => QFn,
  PANE_ID_MAX: () => DTr,
  askedLatch: () => M,
  askedPaneOf: () => i9t,
  closePane: () => c9t,
  closePanesOf: () => uus,
  cycledPaneId: () => pus,
  default: () => uO,
  everyPane: () => abe,
  focusPane: () => t8,
  forgetAsked: () => q,
  forgetDismissed: () => H,
  hasAsked: () => h,
  isToastHoldShown: () => eio,
  keepAsked: () => P,
  keptAsked: () => C,
  nextPaneId: () => tio,
  offerPlacement: () => u9t,
  openFloor: () => O,
  openPane: () => fus,
  paneCloseProblem: () => mus,
  paneIdProblem: () => UHt,
  paneManners: () => Q,
  paneOpenProblem: () => hus,
  panesOf: () => yus,
  panesStore: () => Ci,
  placeWaiting: () => _us,
  placeWaitingRemote: () => Bmr,
  placedPanes: () => T,
  placementAtOpen: () => X,
  raiseClose: () => cit,
  rememberAsked: () => bus,
  remotePlacement: () => mHn,
  seedAsked: () => I,
  settleFocusRequest: () => jmr,
  showPane: () => Wmr,
  shownPane: () => TRt,
  withKeptAsked: () => G,
  withoutPane: () => z
});

function se() {
  let e = new Map, r = new Set, n = () => [ ...e.values() ], i = Me();
  return {
    attach: s => {
      let a = e.get(s.clientId);
      if (r.delete(s.clientId), a === void 0) return e.set(s.clientId, s), !0;
      if (s.viewport !== void 0 || s.answers !== void 0) e.set(s.clientId, {
        ...a,
        ...s.viewport !== void 0 && {
          viewport: {
            ...a.viewport,
            ...s.viewport
          }
        },
        ...s.answers !== void 0 && {
          answers: s.answers
        }
      });
      return !1;
    },
    detach: s => {
      let a = e.get(s);
      return e.delete(s), r.delete(s), i.emit(s), a;
    },
    hasSurface: s => n().some(a => a.surface === s),
    list: n,
    surfaces: () => D(n().map(s => s.surface)),
    onDetach: s => i.subscribe(s),
    missed: s => {
      if (e.has(s)) r.add(s);
    },
    heard: s => void r.delete(s),
    isSilent: s => r.has(s)
  };
}

var fw = Ue(se(), e => {
  for (let r of e.list()) e.detach(r.clientId);
});

var fHn = () => fw.list().filter(e => e.viewport?.isFullscreen !== void 0);

function ie() {
  return fw.list().filter(e => e.viewport !== void 0);
}

var hV = Ue(Go(), e => e.set(void 0));

function rY(e) {
  let {name: r, marketplace: n} = ec(e);
  return n === Fi && mk(r) !== void 0;
}

var M = Ue(Go(), e => e.set(void 0));

var K = 64;

var i9t = (e, r) => ({
  plugin: e,
  id: r
});

var V = p(() => u({
  plugin: o(),
  id: o()
}));

var a9t = Ue(Go(), e => e.set(void 0));

var l9t = Ue(Go(), e => e.set(void 0));

var d9t = Ue(Go(), e => e.set(void 0));

var ERt = (e, r) => `${e}\0${r}`;

function kRt(e, r) {
  return d9t.get()?.get(ERt(e, r)) ?? 0;
}

function dit(e, r) {
  let n = new Map(e);
  for (let i of r) n.delete(i);
  return n;
}

function Zso(e, r) {
  let n = ERt(e, r), i = kRt(e, r) + 1;
  a9t.set(dit(a9t.get() ?? new Map, [ n ])), l9t.set(dit(l9t.get() ?? new Map, [ n ])), 
  d9t.set(new Map(d9t.get()).set(n, i));
}

var Ci = Ue(() => Ge().panes, e => e().setState(() => QFn));

function z(e, r) {
  let n = e.open.filter(d => !r(d)), i = e.unplaced.filter(d => !r(d));
  if (n.length === e.open.length && i.length === e.unplaced.length) return e;
  let a = new Set([ ...n, ...i ].map(d => d.id)), m = d => a.has(d ?? "") ? d : null;
  return {
    open: n,
    unplaced: i,
    asked: e.asked,
    shownId: m(e.shownId) ?? n.at(-1)?.id ?? null,
    focusedId: m(e.focusedId),
    focusRequest: m(e.focusRequest),
    placements: e.placements,
    closing: e.closing.filter(d => a.has(d))
  };
}

function c9t(e) {
  Ci().setState(r => z(r, n => n.id === e)), Zso("Pane", e);
}

var abe = e => [ ...e.open, ...e.unplaced ];

function h(e, r) {
  return e.asked.some(n => n.id === r.id && n.plugin === r.plugin);
}

import { dirname as pe, resolve as po } from "path";

function oY({pluginStorageId: e, pluginRoot: r}) {
  let {name: n, marketplace: i} = ec(e), s = jRt(e), a = pe(po(r)), d = [ a, pe(a) ].includes(ose()) ? "dev_mods" : "plugin_dir", k = s ? "managed" : i === Ac ? d : "installed", A = rY(e) ? "builtin" : k;
  return {
    provenance: c(A),
    ...N9t(n, i, s ? new Set([ n ]) : null)
  };
}

function C(e) {
  let r = e.pluginPanes?.asked;
  return Array.isArray(r) ? r.flatMap(n => {
    let i = V().safeParse(n);
    return i.success ? [ i.data ] : [];
  }) : [];
}

var G = (e, r) => ({
  ...e,
  pluginPanes: {
    ...e.pluginPanes,
    asked: r
  }
});

function P(e, r) {
  let n = r === "asked", i = !1;
  FH(s => {
    let a = C(s), m = a.filter(d => d.plugin !== e.plugin || d.id !== e.id);
    return i = m.length < a.length !== n, i ? G(s, n ? [ ...m, i9t(e.plugin, e.id) ].slice(-K) : m) : s;
  }).then(s => {
    if (i) {
      let a = JB(e.plugin), m = a && oY(a);
      s ? g("plugin_function_hooks_pane_ask", m) : f("plugin_function_hooks_pane_ask", "not_persisted", m);
    }
  });
}

function q(e) {
  Ci().setState(r => h(r, e) ? {
    ...r,
    asked: r.asked.filter(n => n.plugin !== e.plugin || n.id !== e.id)
  } : r), P(e, "dismissed");
}

function H(e, r, n) {
  if (r.kind === "person" && n !== void 0) q(i9t(n, e));
}

async function cit(e, r) {
  let n = Ci().getState(), i = n.closing.includes(e), s = r.kind === "unload", a = abe(n).find(x => x.id === e)?.plugin, m = !1;
  if (s) c9t(e);
  if (i) return;
  let d = nH("ui.close").filter(x => !s || x.name !== a);
  if (d.length === 0) {
    c9t(e), H(e, r, a);
    return;
  }
  if (!s) Ci().setState(x => ({
    ...x,
    closing: [ ...x.closing, e ]
  }));
  try {
    let x = await LP({
      e: {
        id: e,
        origin: r
      },
      handlers: d,
      site: Vse("ui.close"),
      bottom: S => {
        if (S.id !== e || Ci().getState().closing.includes(e)) c9t(S.id), m = S.id === e;
        return Promise.resolve({
          value: void 0
        });
      }
    }), k = Ci().getState();
    if (k.closing.includes(e) && abe(k).some(S => S.id === e)) t(`ui.close ${e} (${r.kind}): kept open by a hook` + (x.deny === void 0 ? "" : ` (${x.deny})`));
  } catch (x) {
    t(`ui.close ${e} (${r.kind}): the chain failed: ` + l(x), {
      level: "error"
    });
  } finally {
    if (Ci().setState(x => x.closing.includes(e) ? {
      ...x,
      closing: x.closing.filter(k => k !== e)
    } : x), m) H(e, r, a);
  }
}

function uus(e) {
  let r = abe(Ci().getState());
  for (let n of r) if (n.plugin === e) cit(n.id, {
    kind: "unload"
  });
}

function pus(e, r) {
  let n = e.open.length, i = e.open.findIndex(a => a.id === e.shownId);
  return n > 1 && i >= 0 ? e.open[(i + r + n) % n]?.id ?? null : null;
}

var t8 = e => Ci().setState(r => {
  let n = e === null || r.open.some(m => m.id === e), i = n ? e : r.focusedId, s = n && e !== null ? e : r.shownId;
  return r.focusedId === i && r.shownId === s && r.focusRequest === null ? r : {
    ...r,
    focusedId: i,
    shownId: s,
    focusRequest: null
  };
});

var TRt = e => e.open.find(r => r.id === e.shownId);

var eio = e => e.placements > 0 && TRt(e)?.holdToasts === !0;

function tio(e) {
  let r = e.open.findIndex(n => n.id === e.focusedId);
  return e.open[r + 1]?.id ?? null;
}

function u9t() {
  return Ci().setState(e => ({
    ...e,
    placements: e.placements + 1
  })), () => Ci().setState(e => ({
    ...e,
    placements: e.placements - 1
  }));
}

var O = (e, r) => h(e, r) ? ZQ : uit;

function Q(e) {
  return {
    ...e.closeOnEscape && {
      closeOnEscape: e.closeOnEscape
    },
    ...e.holdToasts && {
      holdToasts: e.holdToasts
    },
    ...e.rows !== void 0 && {
      rows: e.rows
    },
    ...e.columns !== void 0 && {
      columns: e.columns
    }
  };
}

function T(e, r, n) {
  let i = e.open.some(a => a.id === r.id), s = e.open.map(a => a.id === r.id ? {
    ...r,
    plugin: a.plugin
  } : a);
  return {
    open: i ? s : [ ...e.open, r ],
    unplaced: e.unplaced.filter(a => a.id !== r.id),
    asked: e.asked,
    shownId: i ? e.shownId : e.focusedId ?? r.id,
    focusedId: e.focusedId,
    focusRequest: n,
    placements: e.placements,
    closing: e.closing
  };
}

function mHn() {
  let e = ie();
  if (e.length === 0) return;
  if (fHn().length > 0) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `no attached surface places panes (${e.map(n => n.clientId).join(", ")}): placed when a surface that does attaches; once they detach, as a fresh open is`
  };
}

function X(e, r, n) {
  let i = hV.get()?.columns, s = O(e, r);
  if (i === void 0) return mHn() ?? {
    isPlaced: !0
  };
  if (n || i >= s) return {
    isPlaced: !0
  };
  return {
    isPlaced: !1,
    reason: `unasked below ${s} columns (${i} now${s === ZQ ? ", an id the person opened before" : ""}): placed when the person opens it, or when the terminal is widened to ${s} columns`
  };
}

function I() {
  if (M.get()) return;
  M.set(!0);
  let e = C(ce());
  if (e.length === 0) return;
  Ci().setState(r => ({
    ...r,
    asked: [ ...e.filter(n => !h(r, n)), ...r.asked ]
  }));
}

function fus(e, r, n) {
  I();
  let i = e.title ?? e.id, s = e.focus === !0 ? e.id : void 0, a = Q(e), m = {
    id: e.id,
    plugin: r
  }, d = y => y?.title === i && y.closeOnEscape === a.closeOnEscape && y.holdToasts === a.holdToasts && y.rows === a.rows && y.columns === a.columns, x, k = !1;
  if (Ci().setState(y => {
    let R = n && !h(y, m), ee = y.open.find(b => b.id === e.id), B = y.unplaced.find(b => b.id === e.id), oe = ee !== void 0, $e = B !== void 0, te = {
      id: e.id,
      plugin: B?.plugin ?? r
    };
    x = oe ? {
      isPlaced: !0
    } : X(y, te, n), k = R;
    let re = x.isPlaced, Ee = d(ee) && s === void 0 && !R, N = {
      ...te,
      title: i,
      ...a
    }, ne = R ? {
      ...y,
      asked: [ ...y.asked, m ]
    } : y, Re = {
      ...ne,
      unplaced: $e ? y.unplaced.map(b => b.id === e.id ? N : b) : [ ...y.unplaced, N ]
    }, He = oe ? Ee : !re && d(B) && !R, _e = re ? T(ne, N, s ?? y.focusRequest) : Re;
    return He ? y : _e;
  }), k) P(m, "asked");
  let A = x ?? {
    isPlaced: !0
  }, S = hV.get()?.columns ?? "unmeasured", Z = n ? "asked" : "unasked", Oe = A.isPlaced ? "placed" : `waits unplaced (${A.reason})`;
  return t(`ui.open ${r} ${e.id} (${Z}, ${S} columns): ${Oe}`), A;
}

function mus(e) {
  let r = ir(e?.origin) === ir({
    kind: "plugin"
  });
  return UHt(e?.id) ?? (r ? void 0 : "origin is the engine's to set");
}

function v(e) {
  return Array.isArray(e) && e.length > 0 && e.every(n => typeof n === "string") && e[0] !== "" ? void 0 : "takes argv, a non-empty list of strings naming the command first";
}

function F(e, r) {
  return e === void 0 || L(e) && Object.values(e).every(i => typeof i === "string") ? void 0 : `${r} is an object of strings`;
}

function lzs(e) {
  let r = typeof e?.name !== "string" || e.name === "", n = e?.fallback === void 0;
  return r ? "takes the flag's name" : n ? "takes a fallback, the value where the flag table has no say" : void 0;
}

var gus = e => e !== void 0 && typeof e !== "string";

function nio(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 && e <= r;
}

function rio(e) {
  let r;
  try {
    r = _(e);
  } catch (a) {
    return `value is not JSON data: ${l(a)}`;
  }
  let n = r;
  if (typeof n !== "string") return `value is not JSON data: ${e === void 0 ? "undefined" : `a ${typeof e}`}`;
  return n.length > Cpe ? `the value is ${n.length} characters, over the ${Cpe} limit` : void 0;
}

function Fmr(e) {
  return typeof e?.key === "string" ? void 0 : "takes a key";
}

function dzs(e) {
  let r = e?.agentId, n = e?.as, i = r === void 0 || typeof r === "string" && r !== "", s = n === void 0 || n === "api";
  if (!i) return `takes agentId, a non-empty string (got ${String(r)})`;
  return s ? void 0 : `takes as "api" or none (got ${String(n)})`;
}

import { isAbsolute as _o, win32 as vo } from "path";

function czs(e) {
  let r = e?.names;
  if (!Array.isArray(r)) return "takes names, a list of relative .md file names";
  for (let n of [ "of", "below" ]) {
    let i = e?.[n];
    if (i !== void 0 && (typeof i !== "string" || i === "")) return `takes ${n}, a path, when given`;
  }
  for (let n of r) {
    if (typeof n !== "string" || !n.toLowerCase().endsWith(".md")) return `takes names, each a .md file name (${JSON.stringify(n)})`;
    if (_o(n) || vo.isAbsolute(n) || n.split(/[\\/]/).includes("..")) return `takes names, each relative with no ".." (${n})`;
  }
  return;
}

function ARt(e) {
  let r = e?.path;
  return typeof r !== "string" || r === "" ? "takes a path" : void 0;
}

function uzs(e) {
  let r = e?.as === "text" || e?.as === "bytes";
  return ARt(e) ?? (r ? void 0 : 'as is "text" or "bytes"');
}

function pzs(e) {
  let r = typeof e?.resolve === "boolean";
  return ARt(e) ?? (r ? void 0 : "resolve is true or false");
}

var gHn = 6e5;

function fzs(e) {
  let r = v(e?.argv);
  if (r !== void 0) return r;
  let n = e?.init;
  if (n === void 0) return;
  if (!L(n)) return "takes init, { cwd?, env?, stdin?, timeoutMs? }";
  if (n.cwd !== void 0 && (typeof n.cwd !== "string" || n.cwd === "")) return "init.cwd is a non-empty path";
  let s = F(n.env, "init.env");
  if (s !== void 0) return s;
  if (n.stdin !== void 0 && typeof n.stdin !== "string") return "init.stdin is a string";
  return n.timeoutMs !== void 0 && !nio(n.timeoutMs, gHn) ? `init.timeoutMs is a whole number of ms, 1 to ${gHn}` : void 0;
}

function mzs(e) {
  if (!L(e)) return "takes { argv, cwd?, env?, input? }";
  let {argv: r, cwd: n, env: i, input: s} = e, a = n !== void 0 && (typeof n !== "string" || n === ""), m = s !== void 0 && typeof s !== "string";
  return v(r) ?? (a ? "cwd is a non-empty path" : void 0) ?? F(i, "env") ?? (m ? "input is a string" : void 0);
}

function oio(e) {
  let r = e?.name, n = e?.description, i = typeof r !== "string" || !Cut.test(r), s = typeof n === "string" && !!n.trim();
  return (i ? "name is letters, digits, _ or - (up to 64)" : void 0) ?? (s ? void 0 : "needs a description");
}

var gzs = e => Fmr(e) ?? rio(e?.value);

function hzs(e) {
  if (!L(e)) return "inputSchema must be a JSON schema object";
  try {
    _(e);
    return;
  } catch (r) {
    return `inputSchema is not JSON data: ${l(r)}`;
  }
}

var S4e = e => typeof e === "string" ? void 0 : "takes a string text";

function yzs(e) {
  let r = e?.breakdown, n = e?.columns;
  if (!(r === void 0 || r === "summary" || r === "full")) return `takes breakdown "summary" or "full" (got ${String(r)})`;
  return n === void 0 || typeof n === "number" && Number.isInteger(n) && n > 0 ? void 0 : `takes columns, a positive whole number (got ${String(n)})`;
}

var Umr = new RegExp(`[${l5.escape}${l5.loneSurrogate}${l5.placeholder}]`, "u");

var fR = e => Umr.test(e);

function hus(e) {
  let r = e?.title, n = r !== void 0, i = typeof r === "string" && fR(r), s = [ "focus", "closeOnEscape", "holdToasts" ].find(m => e?.[m] !== void 0 && e[m] !== !0), a = [ "rows", "columns" ].find(m => {
    let d = e?.[m];
    return d !== void 0 && !(typeof d === "number" && Number.isInteger(d) && d > 0);
  });
  return UHt(e?.id) ?? (n ? S4e(r) : void 0) ?? (i ? "title holds a control character" : void 0) ?? (s === void 0 ? void 0 : `${s} is true or left out`) ?? (a === void 0 ? void 0 : `${a} is a positive whole number or left out (got ${String(e?.[a])})`);
}

function yus(e) {
  let r = Ci().getState(), n = new Set(r.open);
  return Object.freeze(abe(r).filter(i => i.plugin === e).map(i => Object.freeze({
    id: i.id,
    title: i.title,
    isShown: r.shownId === i.id,
    isFocused: r.focusedId === i.id,
    isPlaced: n.has(i)
  })));
}

function _us(e) {
  let r = Ci().getState().unplaced;
  Ci().setState(i => i.unplaced.filter(s => e >= O(i, s)).reduce((s, a) => T(s, a, s.focusRequest), i));
  let n = new Set(Ci().getState().open);
  for (let i of r.filter(s => n.has(s))) t(`ui.open ${i.plugin} ${i.id} (waiting, ${e} columns): placed`);
}

function Bmr(e) {
  let r = Ci().getState().unplaced;
  if (r.length === 0) return;
  Ci().setState(n => n.unplaced.reduce((i, s) => T(i, s, i.focusRequest), n));
  for (let n of r) t(`ui.open ${n.plugin} ${n.id} (waiting, ${e}): placed`);
}

function bus(e) {
  I();
  let r = !1;
  if (Ci().setState(n => (r = !h(n, e), r ? {
    ...n,
    asked: [ ...n.asked, {
      ...e
    } ]
  } : n)), r) P(e, "asked");
}

function jmr(e) {
  let {focusRequest: r} = Ci().getState();
  if (r === null) return;
  e ? t8(r) : Ci().setState(n => ({
    ...n,
    focusRequest: null
  }));
}

var Wmr = e => Ci().setState(r => r.shownId === e || !r.open.some(i => i.id === e) ? r : {
  ...r,
  shownId: e,
  focusedId: r.focusedId === null ? null : e
});

function _zs(e) {
  let r = e ?? le();
  return cG(r) ?? pr(r) ?? ke();
}

var ae = e => e.catch(() => {});

function ENe() {
  let e = Promise.resolve();
  return r => {
    let n = e.then(r, r);
    return e = ae(n), n;
  };
}

var it = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;

var me = 64;

var pt = 12;

var ft = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => {
    t(`$.store lock compromised: ${l(e)}`, {
      level: "warn"
    });
  }
};

function de() {
  let e = new Map;
  return r => {
    let n = e.get(r) ?? ENe();
    return e.set(r, n), n;
  };
}

var mt = /^[a-z0-9._-]+$/;

var dt = de();

import { mkdir as gt } from "fs/promises";

import { dirname as yt } from "path";

import { join as ut } from "path";

import { createHash as lt } from "crypto";

function ue(e) {
  if (mt.test(e) && !it.test(e) && e.length <= me && e !== "." && e !== "..") return `${e}.json`;
  let n = e.replace(/[^a-zA-Z0-9_-]/g, "_"), i = lt("sha256").update(e).digest("hex").slice(0, pt);
  return `${n.slice(0, me) || "plugin"}-${i}.json`;
}

var w = e => ut(xl(), "store", ue(e));

async function xe(e) {
  let r = w(e);
  return await gt(yt(r), {
    recursive: !0,
    mode: 448
  }), r;
}

import { utimes as ht } from "fs/promises";

async function kt(e, r) {
  let n = new Date;
  try {
    await ht(r, n, n);
  } catch (i) {
    t(`$.store (${e}): could not touch ${r}: ${l(i)}`, {
      level: "warn"
    });
  }
}

import { randomUUID as Pt } from "crypto";

import { constants as Tt } from "fs";

import { copyFile as At, link as bt, mkdir as Ct, unlink as Ot, writeFile as $t } from "fs/promises";

import { dirname as Et } from "path";

import { readFile as wt } from "fs/promises";

async function ye(e) {
  let r = await wt(w(e), "utf8").catch(n => {
    if (W(n)) return;
    throw n;
  });
  return r === void 0 ? void 0 : [ e, r ];
}

async function he(e) {
  let r = await MR(e).reduce(async (m, d) => await m ?? ye(d), Promise.resolve(void 0));
  if (r === void 0) return !1;
  let [n, i] = r, s = w(e), a = `${s}.carry-${Pt()}`;
  try {
    if (!L(Y(i))) return !1;
    return await Ct(Et(s), {
      recursive: !0
    }), await $t(a, i, {
      flag: "wx"
    }), await bt(a, s).catch(async m => {
      if (E(m) === "EEXIST") throw m;
      await At(a, s, Tt.COPYFILE_EXCL);
    }), !0;
  } catch (m) {
    let d = E(m) === "EEXIST";
    return t(`$.store (${e}): ` + (d ? `${n}'s store was carried by another session` : `could not carry ${n}'s store: ${l(m)}`), {
      level: d ? "debug" : "warn"
    }), d;
  } finally {
    await Ot(a).catch(() => {});
  }
}

import { readFile as we } from "fs/promises";

async function Rt(e, r) {
  try {
    return await we(r, "utf8");
  } catch (n) {
    if (!W(n)) throw n;
  }
  if (!await he(e)) return;
  try {
    return await we(r, "utf8");
  } catch (n) {
    if (W(n)) return;
    throw n;
  }
}

var Pe = {
  async read(e) {
    let r = w(e), n;
    try {
      n = await Rt(e, r);
    } catch (s) {
      throw new Ie(`${e}: store file ${r} is unreadable (${l(s)})`);
    }
    if (n === void 0) return {};
    let i;
    try {
      i = Y(n);
    } catch (s) {
      throw new Ie(`${e}: store file ${r} is malformed (${l(s)})`);
    }
    if (!L(i)) throw new Ie(`${e}: store file ${r} is malformed (the JSON is not an object)`);
    return await kt(e, r), i;
  },
  write: async (e, r) => Tn(await xe(e), `${_(r, null, 2)}\n`, 384),
  async lock(e) {
    let r = await xe(e);
    return Ja(r, {
      lockfilePath: `${r}.lock`,
      ...ft
    });
  }
};

function Te() {
  let e = Go();
  return {
    setBackend: e.set,
    backendOverride: e.get
  };
}

var Lt = Te();

var be = () => Lt.backendOverride() ?? Pe;

var J = 256;

async function Ce(e, r) {
  try {
    if (e.event !== "keys" && e.key.length > J) throw new Ie(`${r}: $.store.${e.event}: the key is ${e.key.length} characters, over the ${J} limit`);
    let n = be(), s = e.event === "set" || e.event === "delete" ? await (n.lock?.(r)) : void 0;
    try {
      let a = await n.read(r);
      switch (e.event) {
       case "get":
        return Object.hasOwn(a, e.key) ? a[e.key] : void 0;

       case "keys":
        return Object.keys(a);

       case "set":
        {
          let m = {
            ...a,
            [e.key]: e.value
          }, d = _(m).length;
          if (d > Cpe) throw new Ie(`${r}: $.store.set: the store would be ${d} characters, over the ${Cpe} limit`);
          await n.write(r, m), t(`$.store.set (${r}): ${e.key}`);
          return;
        }

       case "delete":
        {
          if (!Object.hasOwn(a, e.key)) return;
          let m = {
            ...a
          };
          delete m[e.key], await n.write(r, m);
          return;
        }
      }
    } finally {
      await Om(s, `$.store.${e.event} (${r})`);
    }
  } catch (n) {
    if (n instanceof Ie) throw n;
    throw new Ie(`${r}: $.store.${e.event} failed: ${l(n)}`);
  }
}

var CRt = (e, r) => dt(r)(() => Ce(e, r));

export { fw, fHn, hV, rY, i9t, a9t, l9t, d9t, ERt, kRt, dit, Zso, Ci, c9t, abe, oY, cit, uus, pus, t8, TRt, eio, tio, u9t, mHn, fus, mus, lzs, gus, nio, rio, Fmr, dzs, czs, ARt, uzs, pzs, gHn, fzs, mzs, oio, gzs, hzs, S4e, yzs, Umr, fR, hus, yus, _us, Bmr, bus, jmr, Wmr, uO, _zs, ENe, CRt };
