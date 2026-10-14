// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { Q0 } from "./chunk-q6wab2jw.js";

import { ze } from "./chunk-r2h53bm2.js";

import { jo } from "./chunk-nnrb0acr.js";

import { fe, HLt, Hve, Qsn, Dve, YVn, mxo } from "./chunk-dd98x6x7.js";

import { af, Cr } from "./chunk-xywp7esx.js";

import { Fi, Cw, HWn, kn, Hi, fr, Pl } from "./chunk-8drhysk2.js";

import { eDt } from "./chunk-jbphjy99.js";

import { aho, bOt, SZt } from "./chunk-67jt18z1.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var Sit = "cc-plugin-sec-default";

var ggr = af();

function s7() {
  let e = fe("policySettings");
  return e !== null && Object.keys(e).length > 0;
}

var BRt = Sit + "@" + Fi;

var hgr = Ue(af(), e => e.set(null));

function ygr(e) {
  let n = e !== void 0, o = e?.indexOf(BRt) ?? -1, s = o !== -1, i = s7() || YVn(), d = i || ggr.get()?.() === !0, a = n || d ? void 0 : Cr(), c = a === "team" || a === "enterprise", r = hgr.get() === !0, l = n ? s : d || c || r, f = n ? s ? `seated by managed prependPlugins at position ${o + 1}` : "not seated: managed prependPlugins does not list it" : d ? i ? "seated outermost: this machine has managed settings" : "seated outermost: this machine has a managed MCP server file" : c ? `seated outermost: the organization is ${a}` : r ? "seated outermost: it was seated earlier in this session, and a seat holds until the session ends" : `not seated: no managed settings and not a Team or Enterprise organization (${a ?? "none"})`;
  if (l) hgr.set(!0);
  return {
    outermost: l ? [ BRt ] : [],
    seat: `${BRt} ${f}`
  };
}

function tp() {
  let e = wit();
  return e ? new Set(e.map(n => n.name)) : null;
}

function ZB() {
  let e = fe("policySettings"), n = I(), o = g(e), s = n === e ? null : g(n);
  return o && s ? new Set([ ...o, ...s ]) : o ?? s;
}

function Tio() {
  let e = Dve(), n = h(e), o = L(n), s = o ? e : fe("policySettings"), i = Hve();
  if (HLt().servedSnapshot) return {
    enables: s,
    names: i
  };
  if (o) return {
    enables: s,
    names: e
  };
  let d = new Map, u = new Set;
  for (let c of n) {
    let r = Object.entries(c.extraKnownMarketplaces ?? {}).filter(([l]) => !u.has(fr(l)));
    for (let [l, f] of r) d.set(l, f);
    for (let [l] of r) u.add(fr(l));
  }
  let a = u.size > 0 || n.some(c => c.strictKnownMarketplaces !== void 0);
  return {
    enables: s,
    names: a ? {
      extraKnownMarketplaces: Object.fromEntries(d),
      ...e?.strictKnownMarketplaces !== void 0 && {
        strictKnownMarketplaces: e.strictKnownMarketplaces
      }
    } : i
  };
}

function s8() {
  let e = g(I());
  if (e === null || eDt()) return e;
  let n = Ge().vouchedManagedPluginIds, o = [ ...e ].filter(s => Hi(s) === Fi || n.has(fr(s)));
  return o.length > 0 ? new Set(o) : null;
}

function jRt(e) {
  let n = fr(e);
  return [ ...s8() ?? [] ].some(o => fr(o) === n);
}

function nps(e) {
  let n = Tio(), o = new Set([ ...g(n.enables) ?? [] ].map(fr)), s = e.filter(r => o.has(fr(r.source))), i = s.filter(r => Hi(r.source) !== Fi && !v(r, n.names)), d = Hve();
  for (let r of i) {
    if (r.modulePath === void 0) continue;
    let l = ze(r.source);
    if (r.readInPlace !== !0) t(`${l} is enabled by managed settings, but it is not read in place from a local folder its marketplace is registered from: it loads from a copy (the plugin cache, an archive or a seed directory), or that marketplace has no folder of its own. Nothing yet records which source a copy was taken from, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It is seated when managed settings declare its marketplace under extraKnownMarketplaces as a local directory and that marketplace lists it by a relative path. A plugin delivered from a remote source gains the tier in a later release.`, {
      level: "warn"
    }); else if (v(r, d)) t(`${l} is enabled by managed settings, but the source its marketplace is registered from is named only by ${E}, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when managed settings the session vouches for (this machine's own, or remote managed settings once the server confirms them) declare that source for its marketplace under extraKnownMarketplaces.`, {
      level: "warn"
    }); else t(`${l} is enabled by managed settings, but managed settings do not name the source its marketplace is registered from, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when the marketplace is registered from the source that managed settings declare for it under extraKnownMarketplaces.`, {
      level: "warn"
    });
  }
  let u = M(h(Dve())) ? "settings it does vouch for list or enable plugins on this machine" : "a managed settings source on this machine was not read whole (a load error, or a plugin key it could not apply), so what it says of plugins is not known", a = new Set([ ...g(fe("policySettings")) ?? [] ].map(fr));
  for (let r of e) {
    let l = fr(r.source);
    if (r.modulePath !== void 0 && Hi(r.source) !== Fi && a.has(l) && !o.has(l)) t(`${ze(r.source)} is enabled only by ${E}, while ${u}, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It can be seated only once managed settings the session vouches for enable it: this machine's own, or remote managed settings once the server confirms them.`, {
      level: "warn"
    });
  }
  let c = new Set(i.map(r => fr(r.source)));
  Ge().vouchedManagedPluginIds = new Set(s.map(r => fr(r.source)).filter(r => !c.has(r)));
}

function v(e, n) {
  let o = Hi(e.source), s = e.marketplaceSource;
  if (o === void 0 || s === void 0 || e.readInPlace !== !0 || Q0(fr(o))) return !1;
  if (Pl(o)) return SZt(s) || bOt(s, void 0, {
    policySettings: n,
    declaredUnder: o
  });
  return bOt(s, void 0, {
    policySettings: n,
    declaredUnder: aho(o, n) ? o : void 0
  });
}

var E = "managed settings this session does not vouch for (such as remote managed settings the server has not confirmed this session, or a document your user account can write)";

function I() {
  let e = Dve();
  return L(h(e)) ? e : fe("policySettings");
}

function L(e) {
  return M(e) || mxo();
}

function g(e) {
  let n = eDt();
  if (n) return new Set(n.managedIds);
  let o = e?.enabledPlugins;
  if (!o) return null;
  let s = new Set;
  for (let [i, d] of Object.entries(o)) if (d === !0 && i.includes("@")) s.add(Cw(i));
  return s.size > 0 ? s : null;
}

function wit() {
  let e = fe("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = [];
  for (let [o, s] of Object.entries(e)) {
    if (typeof s !== "boolean" || !o.includes("@")) continue;
    let {name: i, marketplace: d} = kn(o);
    if (i) {
      let u = `${i}@${d ?? ""}` === o;
      n.push({
        name: i,
        marketplace: u ? d ?? "" : "",
        enabled: s
      });
    }
  }
  return n.length > 0 ? n : null;
}

function qCe(e, n, o) {
  if (!e) return {
    outcome: "unmatched"
  };
  let s = fr(n), i = e.filter(a => HWn(a).some(c => fr(c) === s)), d = i[0];
  if (d === void 0) return {
    outcome: "unmatched"
  };
  let u = i.find(a => !a.enabled);
  if (u) return {
    outcome: "locked",
    entry: u
  };
  if (o !== void 0 && i.some(a => !Q0(fr(a.marketplace)) && fr(a.marketplace) === fr(o))) return {
    outcome: "admitted"
  };
  return {
    outcome: "locked",
    entry: d
  };
}

function dY() {
  let e = eDt();
  if (e) return e.order;
  let n = s7() || YVn(), o = jo().includes("userSettings") ? fe("userSettings") : null, s = n ? void 0 : ygr(), i = s !== void 0 && s.outermost.length > 0, d = !n && !i, u = n ? Dve() : d ? o : null, a = n ? fe("policySettings") : null, c = [ "prependPlugins", "appendPlugins" ], r = c.map(m => u?.[m]?.map(p)), l = s ?? ygr(r[0]), b = n && l.outermost.length === 0 ? ygr(a?.prependPlugins?.map(p)) : l, w = b.outermost.length > 0 ? b : l, [y, P] = c.map((m, S) => {
    let k = r[S] ?? _({
      key: m,
      slot: a,
      holder: u,
      outermost: w.outermost
    });
    return {
      ids: k,
      from: k === void 0 ? "none" : n ? "policy" : "user",
      shadowed: !d && o?.[m] !== void 0
    };
  });
  return {
    prepend: y.ids ?? [],
    append: P.ids ?? [],
    from: {
      prepend: y.from,
      append: P.from
    },
    shadowed: c.filter((m, S) => [ y, P ][S].shadowed),
    ...i && {
      shadowedBy: "seat"
    },
    ...w
  };
}

function p(e) {
  return Cw(fr(e));
}

function _({key: e, slot: n, holder: o, outermost: s}) {
  let i = n?.[e]?.map(p);
  if (i === void 0) return;
  let d = h(o);
  if (e === "prependPlugins" && M(d)) return;
  let u = new Set(d.flatMap(a => [ ...a.prependPlugins ?? [], ...a.appendPlugins ?? [], ...Object.keys(a.enabledPlugins ?? {}) ]).map(p));
  return i.filter(a => !u.has(a) && !s.includes(a));
}

function h(e) {
  return [ e ?? {}, ...Qsn() ];
}

function M(e) {
  return e.some(n => (n.prependPlugins?.length ?? 0) > 0 || (n.appendPlugins?.length ?? 0) > 0 || Object.values(n.enabledPlugins ?? {}).some(o => o !== !1));
}

export { ggr, s7, Sit, BRt, hgr, ygr, tp, ZB, Tio, s8, jRt, nps, wit, qCe, dY };
