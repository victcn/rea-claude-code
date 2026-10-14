// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { lt, he } from "./chunk-3pqddg8f.js";

import { I, $s, nt } from "./chunk-5wbhf1bk.js";

import { p } from "./chunk-jkzenvsk.js";

import { _E } from "./chunk-qqd24q2y.js";

import { S5, QT, Pg, vt, e8e, An, Up, k } from "./chunk-xywp7esx.js";

import { KCo, ksn, Vft, YDs } from "./chunk-8yperama.js";

import { KO, s$, sj, vC, B8e, I2n, O2n, _l, Ku, XAo, hft } from "./chunk-f1zpf9me.js";

import { yf, fK, pv, ZSe } from "./chunk-t156fjxt.js";

import { cOe, vn } from "./chunk-3rbd48rp.js";

import { o, T, u, A } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

function L6e(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential";
}

function EMt() {
  return vt() || de();
}

function de() {
  if (_E() !== "env-quad") return !1;
  try {
    return S5() && e8e();
  } catch {
    return !1;
  }
}

function kMt() {
  return !vt() && de();
}

function Ect() {
  let {info: e, storeBearerOnly: n} = g1n();
  if (!n || e === void 0) return e;
  return QT() === "store" ? e : void 0;
}

function g1n() {
  let e = An();
  if (e !== void 0) return {
    info: e,
    storeBearerOnly: !1
  };
  return kMt() ? {
    info: Up(),
    storeBearerOnly: !0
  } : {
    info: void 0,
    storeBearerOnly: !1
  };
}

async function JSe(e) {
  let {info: n, storeBearerOnly: t} = g1n();
  if (!t || n === void 0) return n;
  return await Pg(e) === "store" ? n : void 0;
}

function ph(e) {
  return he() ? `This session could not reach Artifacts: ${e}` : `Not authenticated \u2014 run /login (${e})`;
}

function lk() {
  return k("tengu_cobalt_plinth_sedge", !1);
}

var yse = "public_unasked", jen = "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";

var _Ts = "[a-z][a-z_-]{0,31}", N6e = new RegExp("^[a-z][a-z_-]{0,31}$");

var lT = "live-doc", nZ = "index.html";

var P_o = 128, I_o = 32, ye = /^[A-Za-z0-9_.-]{1,128}$/, z = 64, Le = "\u2800\u{1d159}\u{13441}\u{13442}\ufffc", K = `${Le}\\p{Cf}\\p{Default_Ignorable_Code_Point}`, be = "\u2026\u22ef\ufe19", ie = new RegExp(`^(?:[<>\\\\${be}]|[${K}]|[^ \\P{Z}]|\\p{C})$`, "u");

function _e(e) {
  let n = Array.from(e).length - 1, t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return t = r, i;
  };
}

function Te(e) {
  let n = _e(e), t = -1;
  return r => (t++, n(r, t) || ie.test(r));
}

var Me = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u, Pe = new RegExp(`^(?![${K}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${K}\\p{M}])?\\p{M}*$`, "su"), Ie = /\p{Bidi_Control}/u, je = new RegExp(`\\p{M}(?:[${K}]*\\p{M}){8}`, "u"), fe = new RegExp(`[ ${K}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"), V = ":\u02d0\u02d1\u02f8\u0589\u05c3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0a03\u0a83\u0b03\u0c03\u0c83\u0d03\u0d83\u0f7f\u1038\u1361\u1365\u1366\u16ec\u17c7\u1803\u1804\u1809\u1b04\u1b82\u205a\u205d\u205e\u2236\u2237\u2806\u2982\u2d42\u2d53\u2d57\ua4fd\ua6f4\ua789\ua881\ua983\uaaf5\ufe13\ufe30\ufe55\uff1a\u{11002}\u{11082}\u{11182}\u{11303}\u{11445}\u{114c1}\u{115be}\u{1163e}\u{116ac}\u{11838}\u{119df}\u{11a39}\u{11a97}\u{11c3e}\u{11d96}\u{11f03}\u{10781}\u{10782}", De = new RegExp(`^host[${V}]`, "iu"), ve = "\u05c3\u0703\u0704\u0705\u0706\u0707\u0708\u0709", He = new RegExp(`^host.*[${ve}]`, "iu"), ze = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u, Ke = new RegExp(`(?:^|[^a-z])host[${V}]|[${V}]host(?:$|[^a-z])`, "iu"), Ue = new RegExp(`^[^\\p{L}]*[${V}]host(?:$|[^a-z])`, "iu"), Be = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u, We = new RegExp(`(?![${ve}])[${V}]`, "gu"), Ae = new RegExp(`["<>\\\\\`${K}${be}]|${KO.source}|${s$.source}`, "gu"), Ge = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${Ae.source}`, "gu");

function Ve(e) {
  let n = e.normalize("NFD"), t = ze.test(n), r = n.replace(fe, "");
  return pe(r, t) || pe(r.replace(We, ":").normalize("NFKC").replace(fe, ""), t);
}

function pe(e, n) {
  return De.test(e) || He.test(e) || n && Ke.test(e) || Ue.test(e);
}

function X(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map(n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}

function h1n(e) {
  return Array.from(e).length <= z && !e.startsWith(" ") && !e.endsWith(" ") && Me.test(e) && Pe.test(e) && !Ie.test(e) && !Be.test(e) && !je.test(e) && !Ve(e) && !e.startsWith(cOe) && !e.startsWith("mcp__") && Vt(e) === null;
}

function Wf(e, n) {
  if (typeof e === "string" && h1n(e)) return _l(e.replace(Ae, X));
  let t = n?.max ?? z, r = e, s = !1;
  if (typeof e === "string") ({text: r, cut: s} = Re(e, Te(e), t));
  let i = _l(Ku(Wg(r, {
    ...n,
    max: t
  }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, X) ?? "?");
  return s ? `${i}\u2026` : i;
}

function y1n(e) {
  return _l($s(e, z).replace(Ge, X));
}

function $6e(e) {
  return e.declarable !== !1 && h1n(e.server);
}

var Ye = [ "name", "connector", "id", "display_name" ];

function W() {
  return {
    ok: !1,
    unresolved: [],
    internal: [],
    malformed: [],
    oversized: [],
    serverCount: null
  };
}

function uK(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}

function _1n(e) {
  return we(e, "rules");
}

function bTs(e) {
  return we(e, "scopes");
}

function O_o(e) {
  return e.every(n => typeof n === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(n));
}

function STs(e) {
  if (!uK(e)) return !1;
  let {scopes: n, ...t} = e;
  return Object.keys(t).length === 0 && (n === void 0 || Array.isArray(n) && O_o(n));
}

function we(e, n) {
  if (!uK(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0;
}

var DEr = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/, LEr = new Set([ "view", "interact", "admin", "owner" ]);

function wTs(e) {
  if (!uK(e)) return !1;
  let {rules: n, wake: t, ...r} = e;
  return Object.keys(r).length === 0 && (n === void 0 || Array.isArray(n) && M_o(n)) && (t === void 0 || Array.isArray(t) && t.every(s => typeof s === "string" && DEr.test(s)));
}

function M_o(e) {
  return e.every(n => {
    if (!uK(n)) return !1;
    let {path: t, read: r, write: s, ...i} = n;
    return Object.keys(i).length === 0 && typeof t === "string" && (t === "" || DEr.test(t)) && (r === void 0 || typeof r === "string" && LEr.has(r)) && (s === void 0 || typeof s === "string" && LEr.has(s));
  });
}

function U(e) {
  try {
    return uK(e) ? e : void 0;
  } catch {
    return null;
  }
}

function Ee(e) {
  return Array.isArray(e) && e.every(n => typeof n === "string");
}

function qe(e) {
  return Ee(e) ? e : null;
}

function se(e) {
  return [ ...e ].filter(n => ye.test(n));
}

function J(e) {
  return Vt(e) === null ? e : e.toLowerCase();
}

function H_o(e, n, t, r = {}) {
  let s = e.mcp;
  if (s === void 0) return {
    ok: !0,
    caps: e,
    warnings: [],
    servers: [],
    renamed: []
  };
  let i = uK(s) ? s.servers : !1;
  if (i === !1 || i != null && !Array.isArray(i)) return {
    ...W(),
    malformed: [ {
      kind: "not_object"
    } ]
  };
  if (uK(s) && s.dynamic !== void 0 && typeof s.dynamic !== "boolean") return {
    ...W(),
    malformed: [ {
      kind: "dynamic_not_boolean"
    } ]
  };
  if (i == null || i.length === 0) {
    if (uK(s) && RMt(s)) return {
      ok: !0,
      caps: {
        ...e,
        mcp: {
          ...s,
          servers: []
        }
      },
      warnings: [],
      servers: [],
      renamed: []
    };
    return {
      ...W(),
      malformed: [ {
        kind: "no_servers"
      } ]
    };
  }
  let l = new Map(n.map(g => [ J(g.toolPrefix), g ])), c = new Map(n.map(g => [ g.server, g ])), f = [], m = [], a = [], b = [], y = new Map, S = new Map, C = [], M = [];
  for (let [g, h] of i.entries()) {
    let d = Y(h);
    if (d === void 0) {
      let _ = h !== null && typeof h === "object" ? Ye.find(L => L in h) ?? null : null;
      a.push({
        kind: "entry_shape",
        index: g,
        wrongKey: _
      });
      continue;
    }
    let w = l.get(J(d)), F = uK(h) ? h.tools : void 0, R = qe(F);
    if (F === void 0 || R?.length === 0) {
      let _ = w ?? c.get(d);
      a.push({
        kind: "no_tools",
        server: d,
        display: w !== void 0 && $6e(w) ? w.server : null,
        available: se(_?.toolNames ?? [])
      });
    } else if (R === null) a.push({
      kind: "tools_shape",
      server: d
    });
    let O = F6e(d), q = O === void 0 ? void 0 : l.get(J(O)), B = O === void 0 ? null : ksn(O), x = null, ce = c.get(d);
    if (w !== void 0) {
      if (!$6e(w)) a.push({
        kind: "undeclarable_name",
        server: d,
        name: w.server
      }); else if (Vt(d) !== null) a.push({
        kind: "known_id",
        server: d,
        display: w.server
      }); else if (x = w.server, d !== w.server) y.set(d, w.server);
    } else if (ce !== void 0) if ($6e(ce)) x = d; else a.push({
      kind: "undeclarable_name",
      server: d,
      name: d
    }); else if (d.startsWith(cOe)) f.push(d); else if (d.startsWith("mcp__")) {
      let _ = l.get(J(nt(d.slice(5), "__")));
      a.push({
        kind: "tool_name",
        server: d,
        display: _ !== void 0 && $6e(_) ? _.server : null
      });
    } else if (Vt(d) !== null) a.push({
      kind: "opaque_id",
      server: d
    }); else if (q !== void 0) a.push($6e(q) ? {
      kind: "connector_as_host",
      server: d,
      display: q.server
    } : {
      kind: "undeclarable_name",
      server: d,
      name: q.server
    }); else if (O !== void 0 && Vt(O) !== null) a.push({
      kind: "opaque_id",
      server: d
    }); else if (O !== void 0 && r.hostServers === !1) a.push({
      kind: "host_unavailable",
      server: d
    }); else if (B !== null) {
      let _ = E => Vft(E, B) || Vft(nt(`${vn(E)}__`, "__"), B) || Vft(Se(E), B), L = t.find(_) ?? n.find(E => _(E.server))?.server;
      if (L === void 0) x = `host:${B}`; else a.push({
        kind: "local_server_as_first_party",
        server: d,
        local: L
      });
    } else if (YDs(O ?? "")) m.push(d); else {
      x = d;
      let _ = O === void 0 ? Ze(d, n) : void 0;
      if (_ !== void 0 && !S.has(d)) S.set(d, _);
    }
    if (x !== null && R !== null && R.length > 0 && uK(h)) {
      let _ = new Set(n.flatMap(E => E.server === x && $6e(E) ? E.toolNames ?? [] : [])), L = R;
      if (_.size > 0) {
        L = R.map(P => {
          if (_.has(P)) return P;
          let Z = [ ..._ ].filter(Fe => vn(Fe) === P);
          if (Z.length !== 1 || !ye.test(Z[0])) return P;
          return C.push([ P, Z[0] ]), Z[0];
        });
        let E = D(L.filter(P => !_.has(P)));
        if (E.length > 0 && E.length === D(L).length) {
          a.push({
            kind: "unknown_tools",
            server: d,
            display: d === x ? null : x,
            unknown: E,
            available: se(_)
          });
          continue;
        }
        if (E.length > 0) M.push({
          server: x,
          unknown: E,
          known: se(_)
        });
      }
      b.push({
        ...h,
        server: x,
        tools: L
      });
    }
  }
  if (f.length > 0 || m.length > 0 || a.length > 0) return {
    ...W(),
    unresolved: f,
    internal: m,
    malformed: a
  };
  let v = [], H = new Map;
  for (let g of b) {
    let h = H.get(g.server);
    if (h === void 0) H.set(g.server, {
      idx: v.length,
      from: 1
    }), v.push(g); else {
      h.from++;
      let d = v[h.idx];
      v[h.idx] = {
        ...d,
        tools: D([ ...d.tools, ...g.tools ])
      };
    }
  }
  let N = [];
  if (y.size > 0) {
    let g = xO([ ...y ], 8, ([h, d]) => `"${Wg(h)}" \u2192 "${Wf(d)}"`).join(", ");
    N.push(`resolved ${I(y.size, "a connector name", "connector names")} to the display ${I(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  if (S.size > 0) {
    let g = xO([ ...S ], 8, ([h, d]) => `"${Wf(h)}" (closest here: "${Wf(d)}")`).join(", ");
    N.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
  }
  if (C.length > 0) {
    let g = D(C.map(([h, d]) => `"${Wf(h)}" \u2192 "${Wf(d)}"`));
    N.push(`rewrote mcp tool ${I(g.length, "name")} to the upstream ${I(g.length, "spelling")} viewers call \u2014 ${xO(g, 8, h => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  for (let {server: g, unknown: h, known: d} of M) {
    let w = xO(h, 8, O => `"${Wf(O)}"`).join(", "), F = h.length === 1 ? "it" : "them", R = d.length === 0 ? "" : ` (its tools here: ${xO(d, 12, O => `"${Wf(O)}"`).join(", ")})`;
    N.push(`connector "${Wf(g)}" has no ${I(h.length, "tool")} named ${w} in this session${R}, so the page's calls to ${F} fail for any viewer whose "${Wf(g)}" lacks ${F} too \u2014 "tools" takes the connector's own top-level tool names; if ${F === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
  }
  let oe = [];
  for (let [g, h] of H) {
    let d = v[h.idx].tools.length, w = ksn(F6e(g) ?? "") !== null;
    if (h.from > 1 && !w) {
      let F = Wf(g), R = TMt(g);
      N.push(`${h.from} manifest entries resolve to ${R} "${F}" and were merged into one (${d} ${I(d, "tool")}). A viewer with more than one ${R} named "${F}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
    }
    if (d > P_o) oe.push({
      server: g,
      toolCount: d
    });
  }
  let le = v.length > I_o ? v.length : null;
  if (oe.length > 0 || le !== null) return {
    ...W(),
    oversized: oe,
    serverCount: le
  };
  return {
    ok: !0,
    caps: {
      ...e,
      mcp: {
        ...s,
        servers: v
      }
    },
    warnings: N,
    servers: v.map(g => g.server),
    renamed: [ ...y ]
  };
}

function D_o(e, n, t = 8) {
  let r = new Set(n), s = new Set, i = [], l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let c of e) for (let f of c.matchAll(l)) {
    let m = f[1] ?? f[2];
    if (r.has(m) || s.has(m)) continue;
    if (s.add(m), i.push(m), i.length >= t) return i;
  }
  return i;
}

function Q(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}

function Ze(e, n) {
  let t = n.filter($6e), r = Q(e);
  if (t.some(a => Q(a.server) === r)) return;
  let s = a => a.replace(/[^\p{L}\p{N}]/gu, ""), i = a => a.split(/[^\p{L}\p{N}]+/u).filter(b => b.length >= 3), l = s(r);
  if (l.length < 3) return;
  let c = t.find(a => s(Q(a.server)) === l);
  if (c !== void 0) return c.server;
  let f = i(r), m;
  for (let a of t) {
    let b = i(Q(a.server)), [y, S] = b.length <= f.length ? [ b, f ] : [ f, b ];
    if (y.length > 0 && y.every(C => S.includes(C)) && (m === void 0 || y.length > m.shared)) m = {
      server: a.server,
      shared: y.length
    };
  }
  return m?.server;
}

function vTs(e, n) {
  return n.filter(([t]) => e.some(r => [ `'${t}'`, `"${t}"`, `\`${t}\`` ].some(s => r.includes(s))));
}

function ETs(e) {
  let n = e.mcp;
  if (!Ne(n)) return [];
  return n.servers.map(Y).filter(t => t !== void 0 && t.startsWith(cOe));
}

function kTs(e, n, t) {
  let r = e.mcp, s = RMt(r) ? [ an ] : [];
  if (!Ne(r)) return s;
  let i = D(r.servers.map(Y).filter(c => c !== void 0)), l = c => t.has(c) && !KCo.has(c) && !n.some(f => f.toolPrefix === c);
  return i.filter(c => {
    let f = F6e(c);
    if (f !== void 0) {
      let m = ksn(f);
      return m === null ? !l(f) : ![ ...t ].some(a => ksn(a) === m && l(a));
    }
    return !t.has(c) && !l(Se(c)) && !n.some(m => m.server === c && t.has(m.toolPrefix));
  }).map(c => {
    let f = Wf(c);
    return `This page declares ${TMt(c)} "${f}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${f}" integration is unverified.`;
  }).concat(s);
}

function Se(e) {
  return vn(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}

function Y(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0;
}

function I1(e) {
  return ae(e) && Object.keys(e).length > 0;
}

function ae(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function ee(e) {
  let n = Qe(e);
  return ae(n) ? n : e;
}

function j(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
}

function L_o(e, n) {
  let t = ee(e ?? {}), r = ee(n ?? {}), s = {
    ...t
  }, i = !1, l = !1;
  for (let [c, f] of Object.entries(r)) if (Object.hasOwn(t, c)) l ||= !te(t[c], f); else j(s, c, f), 
  i = !0;
  return {
    capabilities: i ? s : e,
    widened: i,
    conflict: l
  };
}

var kct = "0.0.0";

class Ce {
  served=void 0;
}

var ue = new lt(() => new Ce);

function b1n(e, n) {
  ue.of(e).served = n;
}

function TTs(e) {
  return ue.peek(e)?.served;
}

function ATs(e) {
  ue.of(e).served = void 0;
}

var S1n = "host";

function w1n(e, n, t) {
  let r = e.features;
  return r !== void 0 && Object.hasOwn(r, n) && Object.hasOwn(r[n] ?? {}, t);
}

var NEr = /^host:([A-Za-z0-9_-]{1,64})$/;

function F6e(e) {
  return NEr.exec(e)?.[1];
}

function TMt(e) {
  return F6e(e) === void 0 ? "connector" : "local server";
}

var N_o = "CLAUDE_ARTIFACT_HOST_GRANT", Je = p(() => u({
  v: A(1),
  servers: T(u({
    server: o().regex(NEr),
    tools: T(o())
  }))
}));

function U6e(e) {
  if (e === void 0) return {
    kind: "absent"
  };
  let n;
  try {
    n = JSON.parse(e);
  } catch {
    return {
      kind: "unreadable"
    };
  }
  let t = Je().safeParse(n);
  if (!t.success) return {
    kind: "unreadable"
  };
  let r = new Map;
  for (let s of t.data.servers) {
    let i = r.get(s.server) ?? new Set;
    for (let l of s.tools) i.add(l);
    r.set(s.server, i);
  }
  return {
    kind: "granted",
    tools: r
  };
}

function G(e) {
  return e.flatMap(n => {
    let t = Y(n);
    return t === void 0 ? [] : [ t ];
  });
}

function $Er(e, n) {
  let t = e.mcp;
  if (!uK(t) || !Array.isArray(t.servers)) return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: []
  };
  let r = t.servers;
  if (n.kind === "absent") return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: G(r)
  };
  let s = D(G(r).filter(c => F6e(c) !== void 0));
  if (s.length === 0) return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: G(r)
  };
  if (n.kind === "unreadable") return {
    ok: !1,
    refused: s
  };
  let i = [], l = [];
  for (let c of r) {
    let f = Y(c);
    if (f === void 0 || F6e(f) === void 0) {
      l.push(c);
      continue;
    }
    let m = n.tools.get(f);
    if (m === void 0 || !uK(c)) {
      i.push({
        server: f,
        tool: null
      });
      continue;
    }
    let a = c.tools;
    if (!Ee(a)) {
      i.push({
        server: f,
        tool: null
      });
      continue;
    }
    let b = a.filter(y => m.has(y));
    for (let y of a) if (!m.has(y)) i.push({
      server: f,
      tool: y
    });
    if (b.length > 0) l.push({
      ...c,
      tools: b
    });
  }
  if (i.length === 0) return {
    ok: !0,
    caps: e,
    dropped: i,
    servers: G(r)
  };
  if (l.length === 0) {
    let {mcp: c, ...f} = e;
    return {
      ok: !0,
      caps: f,
      dropped: i,
      servers: []
    };
  }
  return {
    ok: !0,
    caps: {
      ...e,
      mcp: {
        ...t,
        servers: l
      }
    },
    dropped: i,
    servers: G(l)
  };
}

var XY = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;

function CTs(e, n) {
  if (!XY.test(e) || !XY.test(n)) return !1;
  let t = e.split(".").map(Number), r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++) if (t[s] !== r[s]) return t[s] > r[s];
  return !1;
}

var pK = /^[a-z][a-z0-9]{0,23}$/;

function LN(e) {
  return typeof e === "string" && e !== kct && XY.test(e) ? e : null;
}

function RTs(e, n) {
  if (n.version === kct) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter(r => !t.has(r));
}

var xR = "artifact", NN = "self";

function xTs(e) {
  return e !== void 0 && (Object.hasOwn(e, xR) || Object.hasOwn(e, NN));
}

function ne(e) {
  let n = pv(e);
  if (n === yf) return;
  if (n !== void 0) {
    let t = n.map(r => ne(r));
    return t.includes(void 0) ? void 0 : `[${t.join(",")}]`;
  }
  if (e !== null && typeof e === "object") {
    let t = e, r = Object.keys(t).sort().map(s => {
      let i = ne(t[s]);
      return i === void 0 ? void 0 : `${JSON.stringify(s)}:${i}`;
    });
    return r.includes(void 0) ? void 0 : `{${r.join(",")}}`;
  }
  return JSON.stringify(e) ?? "null";
}

function te(e, n) {
  let t = ne(e);
  return t !== void 0 && t === ne(n);
}

function $_o(e) {
  if (!Object.hasOwn(e, xR)) return e;
  if (Object.hasOwn(e, NN)) {
    if (!te(e[xR], e[NN])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e)) if (r !== xR) j(t, r, s);
    return t;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) j(n, t === xR ? NN : t, r);
  return n;
}

function Qe(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let n = e;
  if (!Object.hasOwn(n, NN)) return e;
  if (Object.hasOwn(n, xR) && !te(n[xR], n[NN])) return e;
  let t = {};
  for (let [r, s] of Object.entries(n)) {
    if (r === NN) {
      if (!Object.hasOwn(n, xR)) j(t, xR, s);
      continue;
    }
    j(t, r, s);
  }
  return t;
}

function PTs(e, n) {
  let t = Object.hasOwn(e, xR), r = Object.hasOwn(e, NN);
  if (!t && !r || n.version === kct) return {
    caps: e
  };
  let s = new Set(n.capabilities), i = s.has(xR) ? xR : s.has(NN) ? NN : null;
  if (i === null) return {
    caps: e
  };
  if (t && r) {
    if (!te(e[xR], e[NN])) return {
      errMsg: "capabilities declares both `artifact` and `self` \u2014 two " + "spellings of the same capability \u2014 with different configs. " + "Declare it once (canonically `artifact: {}`)."
    };
  }
  let l = {};
  for (let [c, f] of Object.entries(e)) {
    if (c === xR || c === NN) {
      if (!Object.hasOwn(l, i)) j(l, i, f);
      continue;
    }
    j(l, c, f);
  }
  return {
    caps: l
  };
}

function AMt(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}

var re = new Set([ xR, NN, "downloads", "comments", "room", "db", "assets", "user" ]);

function F_o(e) {
  return Oe(e, re);
}

var ke = new Set([ ...re, "mcp", "flags" ]);

function U_o(e) {
  return Oe(e, ke);
}

function ITs(e) {
  return e.every(n => ke.has(n));
}

function Oe(e, n) {
  return e == null || ae(e) && Object.keys(e).every(t => n.has(t));
}

var Xe = new RegExp(`^${KO.source}$`, "u");

function en(e) {
  return XAo.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !Xe.test(e) && !B8e(e.codePointAt(0) ?? 0) && !ie.test(e);
}

function nn(e) {
  let n = Array.from(e).slice(0, z + 1), t = n.length, r = n.map(en), s = n.map((a, b) => r[b] || /^\p{M}$/u.test(a) || B8e(a.codePointAt(0) ?? 0)), i = n.map((a, b) => !r[b] && /^[\p{L}\p{N}]$/u.test(a)), l = Array(t).fill(!1), c = Array(t).fill(!1), f = !1;
  for (let a = 0; a < t; a++) l[a] = f, f = i[a] || s[a] && f;
  f = !1;
  for (let a = t - 1; a >= 0; a--) c[a] = f, f = i[a] || s[a] && f;
  let m = new Set;
  for (let a = 0; a < t; a++) if (r[a] && l[a] && c[a]) m.add(a);
  return m;
}

function tn(e) {
  let n = nn(e), t = _e(e), r = "none", s = -1;
  return i => {
    s++;
    let l = i.codePointAt(0) ?? 0;
    if (t(i, s)) return r = "none", !0;
    if (n.has(s)) return r = "none", !0;
    if (B8e(l)) {
      let c = O2n(l, r);
      return r = c.after, !c.rides;
    }
    if (ie.test(i)) return r = "none", !0;
    return r = I2n(i), !1;
  };
}

function Re(e, n, t) {
  let r = [], s = 0;
  for (let i of e) {
    let l = n(i) ? X(i) : i, c = l === i ? 1 : l.length;
    if (s + c > t) return {
      text: r.join(""),
      cut: !0
    };
    r.push(l), s += c;
  }
  return {
    text: r.join(""),
    cut: !1
  };
}

function rn(e) {
  let n = e, t = !1;
  if (typeof e === "string") ({text: n, cut: t} = Re(e, tn(e), z));
  let r = hft((Ku(Wg(n, {
    max: z
  })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return t ? `${r}\u2026` : r;
}

function FEr(e) {
  if (!e) return "";
  let n = [], t = [], r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? $e(b) : void 0, S = a === "mcp" && RMt(b);
    if (y === yf) r = S ? `${CMt} + ${fK}` : fK, n.unshift("mcp"); else if (y !== void 0 && y.length > 0) {
      let C = xO(y, 8, M => {
        let v = U(M), H = v === null ? yf : pv(v?.tools), N = me(H) ?? 0;
        return `${rn(v?.server)}[${H === yf ? "?" : N} ${I(N, "tool")}]`;
      }).join(", ");
      r = S ? `${CMt} + ${C}` : C, n.unshift("mcp");
    } else if (S) r = CMt, n.unshift("mcp"); else if (re.has(a)) {
      let C = U(b), M = C === null ? yf : pv(C?.rules), v = me(M);
      t.push(M === void 0 ? a : `${a}[${M === yf ? "?" : v} ${I(v ?? 0, "rule")}]`);
    } else n.push(pK.test(a) ? a : xe);
  }
  let s = n.length + t.length;
  if (s === 0) return "";
  let i = [ ...n, ...t.slice(0, Math.max(0, 8 - n.length)) ], l = s > 8 ? `[${s} total]; ` : "", c = l + i.join("; ");
  if (r !== void 0) {
    let a = i.slice(1).join("; "), b = a === "" ? "" : "; ", y = Math.max(16, 400 - Array.from(l + a + b).length - 6), S = Array.from(r), C = S.length > y ? S.slice(0, y).join("") + "\u2026" : r;
    c = `${l}mcp: ${C}${b}${a}`;
  }
  let f = Array.from(c);
  return ` (${f.length > 400 ? f.slice(0, 400).join("") + "\u2026" : f.join("")})`;
}

function OTs(e, n) {
  let t = ee(e ?? {}), r = Object.keys(ee(n ?? {})).filter(l => !Object.hasOwn(t, l)), s = l => l === "mcp" ? 0 : re.has(l) ? 2 : 1, i = r.sort((l, c) => s(l) - s(c)).map(l => pK.test(l) ? l : xe);
  if (!r.includes("mcp")) {
    if (RMt(n?.mcp) && !RMt(e?.mcp)) i.unshift(sn); else if (un(e?.mcp, n?.mcp)) i.unshift(on);
  }
  return i;
}

var xe = "invalid-name", on = "mcp (more servers or tools)", CMt = "any connector the viewer approves", sn = `mcp (${CMt})`, an = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";

function RMt(e) {
  return U(e)?.dynamic === !0;
}

function un(e, n) {
  if (n === void 0) return !1;
  let t = ge(n);
  if (t === void 0) return !0;
  let r = new Map;
  for (let s of ge(e) ?? []) {
    let i = U(s), l = i?.server;
    if (typeof l === "string") r.set(l, new Set(ZSe(i?.tools) ?? []));
  }
  return t.some(s => {
    let i = U(s), l = i?.server, c = typeof l === "string" ? r.get(l) : void 0, f = ZSe(i?.tools);
    return c === void 0 || f === void 0 || f.some(m => !c.has(m));
  });
}

function $e(e) {
  let n = U(e);
  return n === null ? yf : n === void 0 ? void 0 : pv(n.servers);
}

function ge(e) {
  let n = $e(e);
  return n === yf ? void 0 : n;
}

function me(e) {
  return e === void 0 || e === yf ? void 0 : e.length;
}

function xO(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [ `[${e.length} total]`, ...e.slice(0, n).map(t) ];
}

function Ne(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0;
}

function Wg(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64, r = Array.from(e.slice(0, 2 * t), s => vC(s.codePointAt(0) ?? 0) ? " " : s).slice(0, t).join("").replace(sj, " ").replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r;
}

function Wen(e, n) {
  let t = Wg(e, {
    max: n
  }).replace(sj, " ").trim();
  return t !== "" && t !== "?" ? t : void 0;
}

export { L6e, EMt, kMt, Ect, g1n, JSe, ph, lk, yse, jen, _Ts, N6e, lT, nZ, P_o, I_o, h1n, Wf, y1n, $6e, uK, _1n, bTs, O_o, STs, DEr, LEr, wTs, M_o, H_o, D_o, vTs, ETs, kTs, I1, L_o, kct, b1n, TTs, ATs, S1n, w1n, NEr, F6e, TMt, N_o, U6e, $Er, XY, CTs, pK, LN, RTs, xR, NN, xTs, $_o, PTs, AMt, F_o, U_o, ITs, FEr, OTs, CMt, RMt, xO, Wg, Wen };
