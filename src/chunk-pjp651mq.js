// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { I } from "./chunk-5wbhf1bk.js";

import { _, Wi, Y, Ks, t } from "./chunk-kawq2919.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { d } from "./chunk-6ah1819r.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { p } from "./chunk-jkzenvsk.js";

import { j0 } from "./chunk-xywp7esx.js";

import { iI, eX, C1e, Nmt, eM, zfe, QR } from "./chunk-q6wab2jw.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { aq } from "./chunk-wptm3jf5.js";

import { gn } from "./chunk-yxennhe9.js";

import { ws, jo, zp } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Wn } from "./chunk-4v78v8fd.js";

import { Ac, Cu, Fi, Cw, MR, Hi } from "./chunk-8drhysk2.js";

import { j7, _xe, Hc } from "./chunk-67jt18z1.js";

import { Gce, p7, tz } from "./chunk-sqb9meyh.js";

import { Ble, tQo } from "./chunk-ppcb7f41.js";

import { wr } from "./chunk-t26295zc.js";

import { yit } from "./chunk-af7jrchc.js";

import { est, Gl, ice, iV, xre } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { MGo } from "./chunk-73wnf5r6.js";

import { Gge, lWt } from "./chunk-vb37x88h.js";

import { Xkn } from "./chunk-jxxx97e3.js";

import { vKt } from "./chunk-qharssgg.js";

import { Coe, du } from "./chunk-e2kb3426.js";

import { Dz } from "./chunk-whs0esmw.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, v, T, u, U, A } from "./chunk-cvcg6n1z.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { hostname as _n } from "os";

import { dirname as yn, join as wn } from "path";

var kn = p(() => u({
  version: A(1),
  choice: U([ "accepted", "declined" ]),
  decidedAt: o(),
  hostname: o()
})), xe = "cloud-plugins-consent";

function Le() {
  return Fe.state(xe);
}

function OMe() {
  return wn(Ee(), "state", `${xe}.json`);
}

async function Ie(e) {
  let n;
  try {
    n = await e.readText();
  } catch (r) {
    return t(`cloud-plugins consent: store unreadable (${l(r)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let r = kn().safeParse(Y(n));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset";
  } catch {
    return "unset";
  }
}

async function Sn(e) {
  let n = await Ie(e);
  return n === "unreadable" ? "unset" : n;
}

function bn(e, n) {
  return n === "declined" || n === "unset" && e ? "declined" : "accepted";
}

async function hjo(e, n) {
  try {
    return await n.writeText(_({
      version: 1,
      choice: e,
      decidedAt: n.now().toISOString(),
      hostname: n.hostname()
    }, null, 2) + `\n`), !0;
  } catch (r) {
    return t(`cloud-plugins consent: answer not saved (${l(r)})`, {
      level: "warn"
    }), !1;
  }
}

function jyt(e) {
  return {
    readText: async () => {
      if (e) {
        let n = await e.readText([ Le() ]);
        if (!n.ok) throw Error("cloud-plugins consent read failed");
        let r = n.value.items[0];
        return r.found ? r.value : void 0;
      }
      try {
        return await gn().read(OMe());
      } catch (n) {
        if (W(n)) return;
        throw n;
      }
    },
    writeText: async n => {
      if (e) {
        if (!(await e.write(Le(), n, {
          mode: 384
        })).ok) throw Error("cloud-plugins consent write failed");
        return;
      }
      let r = OMe();
      await gn().mkdir(yn(r), 448), await gn().atomicWrite(r, n, 384);
    },
    now: () => new Date,
    hostname: _n
  };
}

function yjo() {
  return {
    value: null,
    persisted: !1,
    given: !1
  };
}

async function s7e(e, n, r) {
  let {answer: s, given: a} = await Pn(e, n);
  if (s !== "accepted" || a || r === void 0 || !await r.storeUntrusted().catch(() => !0)) return s;
  return Cn(r.onUntrusted), "unset";
}

async function Pn(e, n) {
  let r = !1;
  if (e.value === null) r = !0, e.value = Sn(n).then(M => (e.persisted = M !== "unset", 
  M)), e.given = !1;
  let {value: s, given: a} = e, k = await s;
  if (k !== "accepted" || r) return {
    answer: k,
    given: a
  };
  let P = await Ie(n), {value: S, given: h} = e;
  if (S !== null && S !== s) return {
    answer: await S,
    given: h
  };
  if (P === "accepted") e.persisted = !0;
  let F = bn(e.persisted, P);
  if (F === "declined") return e.value = Promise.resolve(F), e.given = !1, {
    answer: F,
    given: !1
  };
  return {
    answer: F,
    given: a
  };
}

function Cn(e) {
  try {
    e?.();
  } catch (n) {
    t(`cloud-plugins consent: callback failed (${l(n)})`, {
      level: "warn"
    });
  }
}

var We = [ "userSettings", "projectSettings", "localSettings", "flagSettings" ], Rn = new Set([ "userSettings", "flagSettings" ]), vn = ws.toReversed(), En = 200, Fn = 32, Pe = 2e3, An = 256, Tn = 1024, On = 140, Nn = 128, Dn = 256, Ln = 16, xn = 128, In = 262144, Mn = new Set([ du, "claude-code-marketplace" ]), jn = new Set([ "https:", "ssh:", "git+ssh:", "git+https:" ]), Me = new Set([ "http:", "git:", "git+http:" ]), $n = new Set([ "ssh:", "git+ssh:" ]), Un = new Set([ "https:" ]), Bn = /^[\x21-\x7e]+$/, Kn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/, Gn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/, Hn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/, Yn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/, zn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/, Ue = /(?:^|[/:])\.\.(?:$|[/?#;])/, Be = /%2e|%2f|%5c|%3b|%3f|%23|\\/i, Vn = /^[^:]*:\/\/[^/?#]*%/, qn = [ "invalid_id", "invalid_value", "directory_loaded", "unknown_builtin", "ambiguous_marketplace", "blocked_by_policy", "not_installed_here", "unknown_marketplace", "untrusted_for_folder", "reserved_name_conflict", "not_provided_by_container", "local_marketplace", "needs_credentials", "insecure_transport", "invalid_marketplace", "over_cap", "guard_builtin_not_own_choice" ];

function HBt(e) {
  let n = mt(), r = [], s = new Map, a = [], k = tt(e), P = {
    byPolicy: je(e.policyRefusedMarketplaces),
    asReserved: je(e.reservedNameConflicts)
  };
  for (let [E, C] of [ ...Jn(e, n) ].sort(([q], [Z]) => ye(q, Z))) {
    let q = Hi(E) ?? "", Z = s.get(q) ?? ot(q, e, P);
    s.set(q, Z);
    let j = nt(E, C, q, Z, k, e);
    if (j !== void 0) {
      if (n[j]++, j !== "directory_loaded") r.push({
        id: E,
        reason: j
      });
      continue;
    }
    let ne = {
      id: E,
      value: C.value === !0,
      ownMention: C.ownMention,
      marketplace: q,
      declaration: Z.kind === "declare" && C.value === !0 ? Z.source : void 0
    };
    a.push(ne), a.push(...MR(E).map(B => ({
      ...ne,
      id: B
    })));
  }
  let S = gt(pt(a, n, r), n, r), h = {
    enabledPlugins: Object.fromEntries(S.map(({id: E, value: C}) => [ E, C ])),
    extraKnownMarketplaces: Object.fromEntries(S.flatMap(({marketplace: E, declaration: C}) => C === void 0 ? [] : [ [ E, {
      source: C
    } ] ]).sort(([E], [C]) => ye(E, C)))
  }, F = {
    forwarded: S.length,
    forwardedDisabled: N(S, ({value: E}) => !E),
    marketplacesDeclared: Object.keys(h.extraKnownMarketplaces).length,
    dropped: n
  };
  r.sort((E, C) => ye(E.id, C.id));
  let M = Qn(e) ? "over_read_cap" : !zfe(h).safeParse(h).success ? "schema_rejected" : Buffer.byteLength(Zn(h), "utf8") > In ? "too_large" : void 0;
  if (M !== void 0) return {
    patch: {
      enabledPlugins: {},
      extraKnownMarketplaces: {}
    },
    dropped: [ ...r, ...S.map(({id: E}) => ({
      id: E,
      reason: "over_cap"
    })) ].sort((E, C) => ye(E.id, C.id)),
    counts: {
      forwarded: 0,
      forwardedDisabled: 0,
      marketplacesDeclared: 0,
      dropped: {
        ...n,
        over_cap: n.over_cap + S.length
      }
    },
    refusedWhole: M
  };
  return {
    patch: h,
    dropped: r,
    counts: F
  };
}

function Zn(e) {
  return _(iI(e));
}

function Ke(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(qn.map(n => [ `dropped_${n}`, e.dropped[n] ]))
  };
}

function Xn(e, n) {
  if (!L(n)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  switch (Q(n, "source")) {
   case "github":
    return it(e, n);

   case "git":
    return at(e, n);

   case "url":
    return dt(e, n);

   case "directory":
   case "file":
   case "npm":
   case "settings":
    return {
      kind: "drop",
      reason: "local_marketplace"
    };

   default:
    return {
      kind: "drop",
      reason: "invalid_marketplace"
    };
  }
}

function Jn(e, n) {
  let r = new Map, s = new Set;
  for (let a of We) {
    let k = e.enabledPluginsByTier[a];
    if (!L(k)) continue;
    let P = Rn.has(a) || a === "localSettings" && e.localSettingsAreOwnChoice, S = Object.keys(k);
    n.over_cap += Math.max(0, S.length - Pe);
    for (let h of S.slice(0, Pe)) {
      let F = k[h], M = Ge(k, h);
      if (F === void 0 || M === void 0) continue;
      if (!Dz.includes(a) && e.trustedOnlyBuiltinIds.has(M.toLowerCase())) {
        n.guard_builtin_not_own_choice++;
        continue;
      }
      if (!et(M)) {
        s.add(M);
        continue;
      }
      let E = r.get(M);
      r.set(M, {
        value: F,
        ownChoice: (E?.ownChoice ?? !1) || P && F === !0,
        ownMention: (E?.ownMention ?? !1) || P && typeof F === "boolean"
      });
    }
  }
  return n.invalid_id += s.size, r;
}

function Qn(e) {
  return We.some(n => {
    let r = e.enabledPluginsByTier[n];
    return L(r) && Object.keys(r).length > Pe;
  });
}

function et(e) {
  return e.length <= An && eM().safeParse(e).success;
}

function nt(e, n, r, s, a, {installedPluginIds: k, builtinPluginIds: P, directoryPluginsAllowedByPolicy: S}) {
  let h = r.toLowerCase();
  if (h === Ac) return "directory_loaded";
  if (typeof n.value !== "boolean") return "invalid_value";
  if (h === Cu && !S) return "blocked_by_policy";
  if (h === Fi && !P.has(e)) return "unknown_builtin";
  if (n.value && a.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && n.value) return s.reason;
  if (n.value && !n.ownChoice && !k.has(e) && h !== Fi && h !== Cu) return "not_installed_here";
  return;
}

function tt({enabledPluginsByTier: e}) {
  let n = e.policySettings;
  return new Set(L(n) ? Object.keys(n).filter(r => n[r] === !1).flatMap(r => Ge(n, r) ?? []).map(r => r.toLowerCase()) : []);
}

function Ge(e, n) {
  let r = Cw(n), s = [ r, ...MR(r) ], a = s.indexOf(n);
  return s.slice(0, a === -1 ? s.length : a).some(P => Object.hasOwn(e, P) && e[P] !== void 0) ? void 0 : r;
}

function je(e) {
  return new Set([ ...e ].map(n => n.toLowerCase()));
}

function ot(e, n, r) {
  let s = e.toLowerCase();
  if (s === Fi || s === Cu) return {
    kind: "reserved"
  };
  if (r.byPolicy.has(s)) return {
    kind: "drop",
    reason: "blocked_by_policy"
  };
  let a = rt(e, n), k = eX.has(s);
  if (a === void 0 && n.marketplaceRestrictionPolicyActive && s !== du) return {
    kind: "drop",
    reason: k ? "blocked_by_policy" : $e(e, n)
  };
  if (k) return r.asReserved.has(s) ? {
    kind: "drop",
    reason: "reserved_name_conflict"
  } : Mn.has(s) ? {
    kind: "reserved"
  } : {
    kind: "drop",
    reason: "not_provided_by_container"
  };
  if (C1e(e)) return {
    kind: "drop",
    reason: "reserved_name_conflict"
  };
  if (a === void 0) return {
    kind: "drop",
    reason: $e(e, n)
  };
  return Xn(e, a);
}

function $e(e, n) {
  return st(e, n) ? "untrusted_for_folder" : "unknown_marketplace";
}

function rt(e, n) {
  let r = L(n.registeredMarketplaces) ? Q(n.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return L(r) ? Q(r, "source") ?? null : null;
  for (let s of vn) {
    if (zp.has(s) && !n.folderTrustedForProjectPlugins) continue;
    let a = He(n, s, e);
    if (a !== void 0) return L(a) ? Q(a, "source") ?? null : null;
  }
  return;
}

function st(e, n) {
  return !n.folderTrustedForProjectPlugins && [ ...zp ].some(r => He(n, r, e) !== void 0);
}

function He(e, n, r) {
  let s = e.declaredMarketplacesByTier[n];
  return L(s) ? Q(s, r) : void 0;
}

function it(e, n) {
  let r = Q(n, "repo");
  if (typeof r !== "string" || r.length > On || !Kn.test(r) || r.split("/").some(qe)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = ze(n);
  return s === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ce(e, {
    source: "github",
    repo: r,
    ...s
  });
}

function at(e, n) {
  let r = Q(n, "url"), s = Ye(r);
  if (s === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let a = ft(s);
  if (a !== "network") return {
    kind: "drop",
    reason: a
  };
  if (!yit(s)) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let k = ze(n);
  return k === void 0 ? {
    kind: "drop",
    reason: "invalid_marketplace"
  } : Ce(e, {
    source: "git",
    url: s,
    ...k
  });
}

function dt(e, n) {
  let r = Ye(Q(n, "url"));
  if (r === void 0) return {
    kind: "drop",
    reason: "invalid_marketplace"
  };
  let s = Q(n, "headers");
  if (Q(n, "headersHelper") !== void 0 || s !== void 0 && !(L(s) && Object.keys(s).length === 0)) return {
    kind: "drop",
    reason: "needs_credentials"
  };
  let a = Ze(r, Un);
  return a === "network" ? Ce(e, {
    source: "url",
    url: r
  }) : {
    kind: "drop",
    reason: a
  };
}

function Ye(e) {
  return typeof e === "string" && e.length > 0 && e.length <= Tn && Bn.test(e) ? e : void 0;
}

function ze(e) {
  let n = Q(e, "ref"), r = Q(e, "path"), s = Q(e, "sparsePaths"), a = Q(e, "skipLfs");
  if (n !== void 0 && !lt(n) || r !== void 0 && !ut(r) || s !== void 0 && !ct(s) || a !== void 0 && typeof a !== "boolean") return;
  return {
    ...n !== void 0 && {
      ref: n
    },
    ...r !== void 0 && {
      path: r
    },
    ...s !== void 0 && {
      sparsePaths: s
    },
    ...a !== void 0 && {
      skipLfs: a
    }
  };
}

function lt(e) {
  return typeof e === "string" && e.length <= Nn && Yn.test(e) && !e.split("/").some(qe);
}

function ut(e) {
  return typeof e === "string" && e.length <= Dn && Ve(e);
}

function ct(e) {
  return Array.isArray(e) && e.length <= Ln && e.every(n => typeof n === "string" && n.length <= xn && Ve(n));
}

function Ve(e) {
  return zn.test(e) && !e.startsWith("/") && !e.split("/").some(n => n === "..");
}

function qe(e) {
  return e === "." || e === "..";
}

function Ce(e, n) {
  return QR("extraKnownMarketplaces").safeParse({
    [e]: {
      source: n
    }
  }).success ? {
    kind: "declare",
    source: n
  } : {
    kind: "drop",
    reason: "invalid_marketplace"
  };
}

function ft(e) {
  if (e.startsWith("-") || Hn.test(e) || aq(e)) return "invalid_marketplace";
  if (e.includes("://")) return Ze(e, jn);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let n = Gn.exec(e);
  if (n === null) return "invalid_marketplace";
  let [, , r = "", s = ""] = n;
  if (s.length === 0 || /^[-:]/.test(s) || Ue.test(s) || Be.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return Xe(r) ? "local_marketplace" : "network";
}

function Ze(e, n) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (!(n.has(r.protocol) || Me.has(r.protocol)) || Vn.test(e) || r.hostname === "" || /^\[?-/.test(r.hostname) || r.username.startsWith("-")) return "invalid_marketplace";
  if (r.password !== "" || r.username !== "" && !$n.has(r.protocol) || r.search !== "" || r.hash !== "" || e.includes("?") || e.includes("#")) return "needs_credentials";
  if (Xe(r.hostname)) return "local_marketplace";
  if (Ue.test(e) || Be.test(e)) return "invalid_marketplace";
  return Me.has(r.protocol) ? "insecure_transport" : "network";
}

function Xe(e) {
  return tQo(e, "address") || Ble(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}

function pt(e, n, r) {
  let s = new Map;
  for (let {marketplace: a, declaration: k} of e) if (k !== void 0) {
    let P = a.toLowerCase(), S = s.get(P) ?? new Set;
    S.add(Wi(iI(k))), s.set(P, S);
  }
  return e.filter(({id: a, marketplace: k, declaration: P}) => {
    if (P === void 0 || (s.get(k.toLowerCase())?.size ?? 0) <= 1) return !0;
    return n.ambiguous_marketplace++, r.push({
      id: a,
      reason: "ambiguous_marketplace"
    }), !1;
  });
}

function gt(e, n, r) {
  let s = new Set(ht(e).slice(0, Fn)), a = e.filter(({declaration: S, marketplace: h}) => S === void 0 || s.has(h)), k = [ ...a.filter(({value: S, ownMention: h}) => h && !S), ...a.filter(({value: S, ownMention: h}) => h && S), ...a.filter(({value: S, ownMention: h}) => !h && S), ...a.filter(({value: S, ownMention: h}) => !h && !S) ].slice(0, En).sort((S, h) => ye(S.id, h.id)), P = new Set(k.map(({id: S}) => S));
  for (let {id: S} of e) if (!P.has(S)) n.over_cap++, r.push({
    id: S,
    reason: "over_cap"
  });
  return k;
}

function ht(e) {
  let n = e.filter(({declaration: a}) => a !== void 0), r = D(n.filter(({ownMention: a}) => a).map(({marketplace: a}) => a)).sort(), s = new Set(r);
  return [ ...r, ...D(n.map(({marketplace: a}) => a)).filter(a => !s.has(a)).sort() ];
}

function ye(e, n) {
  return e < n ? -1 : e > n ? 1 : 0;
}

function mt() {
  return {
    invalid_id: 0,
    invalid_value: 0,
    directory_loaded: 0,
    unknown_builtin: 0,
    ambiguous_marketplace: 0,
    blocked_by_policy: 0,
    not_installed_here: 0,
    unknown_marketplace: 0,
    untrusted_for_folder: 0,
    reserved_name_conflict: 0,
    not_provided_by_container: 0,
    local_marketplace: 0,
    needs_credentials: 0,
    insecure_transport: 0,
    invalid_marketplace: 0,
    over_cap: 0,
    guard_builtin_not_own_choice: 0
  };
}

function Q(e, n) {
  return Object.hasOwn(e, n) ? e[n] : void 0;
}

function Je({admission: e, readChoices: n, transport: r, clock: s, bound: a, onNotice: k, onOutcome: P, onState: S}) {
  let h = a === void 0 ? {} : {
    bound: a
  }, F = "idle", M = null, E = y => {
    if (F = y, y !== "skipped") M = null;
    pe(() => S?.(y), ke);
  }, C = null, q = null, Z = !1, j = null, ne = !1, B = null, V = null, he = !1;
  function oe(y, b) {
    if (b === "read_failed" || b === "internal_error" || b === "refused_whole") m("ccr_cloud_plugins_forward", b, h);
    M = b, E("skipped"), i("tengu_cloud_plugins_skipped", {
      reason: c(b),
      ...h,
      reattach: y.reattach
    });
  }
  function ue(y) {
    pe(() => P?.(y), ke);
    let b = _(y.refusedByWorker === void 0 ? [ y.forwarded, y.forwardedDisabled, y.loaded, y.notApplied, y.stayed ] : [ "refused", y.refusedByWorker, y.stayed ]);
    if (b !== j || y.messageWentFirst && !ne) pe(() => {
      k(y), j = b, ne = y.messageWentFirst;
    }, ke);
  }
  function ge(y, b, R, H) {
    let z = B !== null;
    return {
      forwarded: b.forwarded,
      forwardedDisabled: b.forwardedDisabled,
      loaded: z ? null : R,
      stayed: b.stayed,
      notApplied: H || z,
      messageWentFirst: !z && !H && y.messageWentFirst,
      ...B !== null && {
        refusedByWorker: B.reason
      }
    };
  }
  function ie(y) {
    return pe(() => r.post(y), kt);
  }
  function re(y, b, R, H) {
    Z = !0;
    let z = ie({
      subtype: "apply_flag_settings",
      settings: {
        [Gge]: b.patch
      }
    }), de = () => Re(y, H) === "current";
    return z.response.then(() => {
      if (de()) B = null;
    }, _e => {
      let se = wt(_e);
      if (i("tengu_cloud_plugins_apply_unconfirmed", {
        at: c(R),
        ...h,
        standing: c(Re(y, H)),
        ...se !== null && {
          refused_by_worker: c(se)
        }
      }), se !== null && de()) B = {
        reason: se,
        generation: H
      }, ue(ge(y, b, null, !0));
    }), z;
  }
  function me(y, b) {
    let R = HBt(b);
    if (i("tengu_cloud_plugins_forwarded", {
      ...Ke(R.counts),
      refused_whole: R.refusedWhole !== void 0,
      ...h,
      reattach: y.reattach
    }), R.refusedWhole !== void 0) {
      ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: R.dropped,
        notApplied: !0,
        messageWentFirst: !1
      }), oe(y, "refused_whole");
      return;
    }
    if (R.counts.forwarded === 0 && R.counts.marketplacesDeclared === 0 && !y.reattach && !y.workerKnownAtConnect && !Z) {
      if (R.dropped.length > 0) ue({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: R.dropped,
        notApplied: !1,
        messageWentFirst: !1
      });
      oe(y, "nothing_to_forward");
      return;
    }
    let H = {
      patch: R.patch,
      patchKey: _(R.patch),
      forwardedEnabledIds: new Set(Object.entries(R.patch.enabledPlugins).filter(([, z]) => z).map(([z]) => z.toLowerCase())),
      forwarded: R.counts.forwarded,
      forwardedDisabled: R.counts.forwardedDisabled,
      stayed: R.dropped
    };
    if (y.plan = H, E("waiting_for_worker"), y.generation !== null) y.earlyApply = "skipped", 
    K(y, H, y.generation, "connect"); else ve(re(y, H, "connect", null)).then(z => {
      y.earlyApply = z;
    });
  }
  function K(y, b, R, H) {
    if (y.handledGeneration !== null && R <= y.handledGeneration) return;
    let z = y.handledGeneration !== null;
    y.handledGeneration = R, y.reloadTaken = !1, B = _t(R, y, B), ne = !1;
    let de = () => Re(y, R), _e = X => {
      i("tengu_cloud_plugins_reload", {
        early_apply: c(y.earlyApply),
        generation_changed: z,
        install_frames_seen: y.installFrames,
        forwarded_enabled: b.forwardedEnabledIds.size,
        ...h,
        reattach: y.reattach,
        ...X
      });
    };
    E("posted");
    let se = null, we = (X, w, G) => {
      let x = X === "accepted" && w === "accepted";
      if (de() === "current") {
        if (y.reloadTaken = x, x && B === null) V = {
          generation: R,
          patchKey: b.patchKey
        };
        let J = X === "session_inactive" || w === "session_inactive";
        if (!x) {
          if (J) f("ccr_cloud_plugins_forward", "session_inactive", {
            ...h
          }); else m("ccr_cloud_plugins_forward", "posts_refused", {
            ...h
          });
          ue(ge(y, b, null, !0));
        } else if (B !== null) f("ccr_cloud_plugins_forward", "refused_by_worker", {
          ...h
        }); else g("ccr_cloud_plugins_forward", {
          ...h,
          message_went_first: y.messageWentFirst
        });
        E(x ? "settled" : "failed");
      }
      G.then(J => {
        if (_e({
          apply_outcome: c(X),
          reload_outcome: c(w),
          standing: c(de()),
          message_went_first: y.messageWentFirst,
          reload_rtt_ms: se === null ? -1 : s.now() - se,
          answered: J !== null,
          loaded_of_forwarded: J?.loaded ?? -1,
          worker_error_count: J?.workerErrors ?? -1
        }), de() === "current" && (x || J !== null)) {
          if (ue(ge(y, b, J?.loaded ?? null, !1)), y.messageWentFirst = !1, J !== null) {
            if (y.reloadTaken = !0, B === null) V = {
              generation: R,
              patchKey: b.patchKey
            };
            E("settled");
          }
        }
      });
    };
    ve(re(y, b, H, R)).then(X => {
      if (X !== "accepted" || de() !== "current") {
        we(X, "not_posted", Promise.resolve(null));
        return;
      }
      se = s.now();
      let w = ie({
        subtype: "reload_plugins"
      }), G = w.response.then(x => bt(b, x), () => null);
      ve(w).then(x => {
        we(X, x, G);
      });
    });
  }
  function ce(y) {
    return V !== null && y.generation === V.generation && (y.plan === null || y.plan.patchKey === V.patchKey);
  }
  function ae(y) {
    let b = he && !(V !== null && q === V.generation);
    return he = !1, {
      reattach: y,
      workerKnownAtConnect: q !== null,
      reloadTaken: !1,
      messageWentFirst: b,
      closed: !1,
      plan: null,
      generation: q,
      handledGeneration: null,
      earlyApply: "pending",
      installFrames: 0
    };
  }
  return {
    connected({reattach: y}) {
      if (C !== null) C.closed = !0;
      let b = ae(y);
      C = b;
      let R = pe(e, () => "internal_error");
      if (R !== "admitted") {
        oe(b, R);
        return;
      }
      E("reading"), Promise.resolve().then(n).then(H => {
        if (!b.closed) pe(() => me(b, H), () => oe(b, "internal_error"));
      }, () => {
        if (!b.closed) oe(b, "read_failed");
      });
    },
    workerUp(y) {
      if (q !== null && y < q) return;
      if (q = y, C === null || C.generation !== null && y <= C.generation) return;
      C.generation = y;
      let b = C, R = b.plan;
      if (R !== null) pe(() => K(b, R, y, "worker_up"), () => oe(b, "internal_error"));
    },
    pluginInstallFrame() {
      if (C !== null) C.installFrames++;
    },
    messageSent() {
      if (C === null) {
        he = !0;
        return;
      }
      if (!C.reloadTaken && F !== "skipped" && !ce(C)) C.messageWentFirst = !0;
    },
    disconnected() {
      if (C !== null) C.closed = !0, C = null;
      E("idle");
    },
    state: () => F,
    skipped: () => F === "skipped" ? M : null
  };
}

function Re(e, n) {
  return e.closed ? "disconnected" : e.handledGeneration === n ? "current" : "superseded";
}

function _t(e, n, r) {
  if (r === null || r.generation === e) return r;
  return r.generation === null && !n.workerKnownAtConnect ? {
    ...r,
    generation: e
  } : null;
}

function pe(e, n) {
  try {
    return e();
  } catch (r) {
    return d(r), n(r);
  }
}

function ke() {}

var yt = [ "not_managed_cloud_worker", "entrypoint", "disabled", "hermetic", "not_admitted", "flag_off", "flag_unsettled", "malformed", "other" ];

function wt(e) {
  let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (n === lWt) return "other";
  let r = `${lWt}: `;
  if (!n.startsWith(r)) return null;
  let s = n.slice(r.length).trim();
  return yt.find(a => a === s) ?? "other";
}

function kt(e) {
  let n = Promise.reject(e);
  return n.catch(ke), {
    posted: Promise.resolve("failed"),
    response: n
  };
}

function ve(e) {
  return e.posted.catch(() => "failed");
}

var St = p(() => u({
  plugins: T(u({
    source: o().optional()
  })),
  error_count: v().int()
}));

function bt(e, n) {
  let r = St().safeParse(n);
  if (!r.success) return {
    loaded: null,
    workerErrors: -1
  };
  return {
    loaded: new Set(r.data.plugins.flatMap(({source: s}) => s !== void 0 && e.forwardedEnabledIds.has(s.toLowerCase()) ? [ s.toLowerCase() ] : [])).size,
    workerErrors: r.data.error_count
  };
}

async function q3n(e) {
  let n = jo().map(h => [ h, fe(h) ]), [r, s] = await Promise.all([ Gl(e), iV(e) ]), a = est(), k = n.filter(([h]) => a || !zp.has(h)).flatMap(([, h]) => Object.entries(h?.extraKnownMarketplaces ?? {}).map(([F, {source: M}]) => [ F, M ])), P = [ ...k, ...Object.entries(r).map(([h, {source: F}]) => [ h, F ]), [ du, Coe ] ], S = n.find(([h]) => h === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(n.map(([h, F]) => [ h, F?.enabledPlugins ])),
    declaredMarketplacesByTier: Object.fromEntries(n.map(([h, F]) => [ h, F?.extraKnownMarketplaces ])),
    registeredMarketplaces: r,
    folderTrustedForProjectPlugins: a,
    localSettingsAreOwnChoice: !(L(S) && Object.keys(S).length > 0) || !j0({
      onIndeterminate: "tracked"
    }),
    directoryPluginsAllowedByPolicy: j7(),
    builtinPluginIds: new Set([ ...wr().builtinPlugins.keys() ].map(h => `${h}@${Fi}`)),
    trustedOnlyBuiltinIds: new Set([ ...wr().builtinPlugins.keys() ].map(h => `${h}@${Fi}`).filter(tz).map(h => h.toLowerCase())),
    installedPluginIds: new Set(Object.entries(s.plugins).filter(([, h]) => xre(h)).map(([h]) => h)),
    policyRefusedMarketplaces: new Set(P.filter(([, h]) => !Hc(h)).map(([h]) => h)),
    marketplaceRestrictionPolicyActive: _xe(),
    reservedNameConflicts: new Set([ ...Object.entries(r).filter(([h, F]) => ice(h, F) !== null).map(([h]) => h), ...k.filter(([h, F]) => !Object.hasOwn(r, h) && Nmt(h, F) !== null).map(([h]) => h) ])
  };
}

var yFr = 5e3, Ae = 6;

function Y3n(e) {
  if (e === void 0) return;
  if (e.refusedByWorker !== void 0) return "refused_by_worker";
  if (e.notApplied) return "not_applied";
  let n = e.forwarded - e.forwardedDisabled;
  if (e.forwarded === 0) return e.stayed.length > 0 ? "none_to_send" : void 0;
  if (n === 0) return;
  if (e.loaded === null) return "not_confirmed";
  if (e.loaded < n) return e.loaded === 0 ? "not_installed" : "some_not_installed";
  return;
}

function Pt(e) {
  return e === "skipped" || e === "failed";
}

function Ct(e) {
  return e === "reading" || e === "posted";
}

function Rt(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0;
}

var _Fr = {
  now: () => Date.now(),
  setTimeout(e, n) {
    let r = setTimeout(e, n);
    return () => clearTimeout(r);
  }
};

function Gfn(e) {
  let {sessionId: n, reattach: r, manager: s, memory: a} = e, k = w => {
    try {
      e.say(w);
    } catch (G) {
      d(G);
    }
  }, P = e.readChoices ?? (() => q3n(e.storageV5)), S = e.clock ?? _Fr, h = e.muted ?? Gce, F = w => new Promise((G, x) => {
    let J = S.setTimeout(() => x(Error("a local read for plugin forwarding timed out")), yFr);
    Promise.resolve().then(w).then(G, x).finally(J);
  }), M = () => F(P), E = e.consentDeps ?? jyt(e.storageV5), C = e.distrust ?? bFr(e.reach), q = () => F(() => s7e(a.consentPin, E, C)), Z = new AbortController, j = "no_consent", ne, B, V = () => {
    try {
      e.onChange?.();
    } catch (w) {
      d(w);
    }
  }, he = w => {
    B = w, Qe(w, k), V();
  }, oe = !1, ue = !1, ge = !1, ie = h(), re = !1, me = !1, K = Je({
    admission: () => j,
    readChoices: () => M().then(w => (oe = !1, w), w => {
      throw oe = !0, w;
    }),
    transport: {
      post(w) {
        let {posted: G, response: x} = s.postControlRequest(w, {
          answerExpected: !1
        });
        return {
          posted: G.then(({outcome: J}) => J),
          response: x
        };
      }
    },
    clock: S,
    ...e.bound !== void 0 && {
      bound: e.bound
    },
    onNotice: w => {
      if (w.forwarded > w.forwardedDisabled && w.loaded !== 0 && !w.notApplied && w.refusedByWorker === void 0) ue = !0;
      Qe(w, k);
    },
    onOutcome: w => {
      B = w, V();
    },
    onState: () => V()
  }), ce = !1, ae = null, y = () => {
    if (!me) me = !0, k({
      line: vt,
      level: "notice"
    });
  }, b = () => {
    if (re) return;
    re = !0, B = void 0, K.disconnected(), y(), i("tengu_cloud_plugins_admission", {
      admission: c("flag_off"),
      source: c("muted"),
      reattach: r
    }), V();
  }, R = () => {
    if (re = !1, B = void 0, k({
      line: Et,
      level: "notice"
    }), K.connected({
      reattach: r
    }), z) K.messageSent();
    V();
  }, H = w => {
    if (Z.signal.aborted) return;
    if (a.setAsideSessions.delete(n), !ce) {
      ae = w;
      return;
    }
    let G = w === "accepted" ? "admitted" : "opted_out";
    if (G === j && !oe) return;
    let x = "decided";
    if (j = G, ne = x, B = void 0, V(), i("tengu_cloud_plugins_admission", {
      admission: c(G),
      source: c(x),
      reattach: r
    }), G === "admitted" && ie) {
      b();
      return;
    }
    if (re = !1, K.disconnected(), K.connected({
      reattach: r
    }), z) K.messageSent();
  }, z = !1, de = a.decided.subscribe(w => {
    try {
      H(w);
    } catch (G) {
      d(G);
    }
  }), _e = (e.onMuteRecheck ?? p7)(() => {
    try {
      let w = h();
      if (Z.signal.aborted || w === ie) return;
      if (ie = w, w) {
        if (j === "admitted" && ce && Ct(K.state())) {
          b();
          return;
        }
        V();
        return;
      }
      if (me = !1, re) {
        R();
        return;
      }
      V();
    } catch (w) {
      d(w);
    }
  }), se = () => {
    if (j !== "admitted") return;
    s7e(a.consentPin, E, C).then(w => {
      if (w !== "accepted") H("declined");
    }, () => {});
  };
  we().catch(w => (d(w), {
    admission: "no_consent",
    source: "internal_error",
    unsent: []
  })).then(w => {
    if (i("tengu_cloud_plugins_admission", {
      admission: c(w.admission),
      source: c(w.source),
      reattach: r
    }), Z.signal.aborted) return;
    if (w.source === "read_failed" || w.source === "internal_error") {
      if (m("ccr_cloud_plugins_forward", w.source), ne = w.source, ce = !0, V(), ae !== null) H(ae);
      return;
    }
    if (j = w.admission, ne = w.source, ce = !0, j === "admitted" && ie) b(); else K.connected({
      reattach: r
    }), V();
    if (w.unsent.length > 0) he(Ot(w.unsent));
    if (ae !== null) H(ae);
  }).catch(w => {
    d(w);
  });
  async function we() {
    let w = await q().catch(() => null);
    if (w === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    if (w !== "unset") return {
      admission: w === "accepted" ? "admitted" : "opted_out",
      source: "stored",
      unsent: []
    };
    let G = await M().then(hn => hn, () => null);
    if (G === null) return {
      admission: "no_consent",
      source: "read_failed",
      unsent: []
    };
    let x = HBt(G);
    if (x.counts.forwarded === 0 && x.counts.marketplacesDeclared === 0) return {
      admission: "no_consent",
      source: "not_asked",
      unsent: x.dropped
    };
    if (Z.signal.aborted) return {
      admission: "no_consent",
      source: "detached",
      unsent: []
    };
    let J = C.withheld();
    if (J !== null) {
      if (a.setAsideSessions.add(n), ae === null) k({
        line: At(J),
        level: "warning"
      });
      return {
        admission: "no_consent",
        source: "untrusted_store",
        unsent: []
      };
    }
    if (!a.pointedToCommand.shown && ae === null) a.pointedToCommand.shown = !0, k({
      line: Tt(x.counts.forwarded - x.counts.forwardedDisabled, x.counts.forwarded),
      level: "debug"
    });
    return {
      admission: "no_consent",
      source: "undecided",
      unsent: []
    };
  }
  let X = w => () => {
    try {
      w();
    } catch (G) {
      d(G);
    }
  };
  return {
    workerKnownUp: X(() => {
      if (j === "admitted" && ie) b();
      K.workerUp(a.generations.known(n));
    }),
    workerCameUp: X(() => {
      if (j === "opted_out" && ue && !ge) ge = !0, k({
        line: Ft,
        level: "notice"
      });
      se();
      let w = a.generations.next(n);
      if (j === "admitted" && ie) b(); else if (j === "admitted" && ce && oe) {
        if (B = void 0, K.disconnected(), K.connected({
          reattach: r
        }), z) K.messageSent();
      }
      K.workerUp(w);
    }),
    pluginInstallFrame: X(() => K.pluginInstallFrame()),
    messageSent: X(() => {
      z = !0, K.messageSent();
    }),
    teardown: X(() => {
      if (Z.signal.aborted) return;
      a.setAsideSessions.delete(n), Z.abort(), _e(), de(), K.disconnected();
    }),
    state: () => ({
      settled: ce,
      admission: j,
      source: ne,
      notice: B,
      muted: re,
      answerPending: j === "admitted" && !re && B === void 0 && !Pt(K.state()),
      gaveUp: Rt(K.skipped())
    })
  };
}

var vt = "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.", Et = "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.", Ft = "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";

function bFr(e) {
  let n = null, r = null, s = null, a = () => n ??= Promise.resolve().then(() => e.judge()).catch(() => "unknown").then(k => (r = k, 
  k));
  return {
    storeUntrusted: () => a().then(k => k !== "outside"),
    onUntrusted: () => {
      s = r === null || r === "outside" ? "unknown" : r;
    },
    withheld: () => s
  };
}

function At(e) {
  let n = Wn(OMe());
  return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${n} from the folder or repository it runs in` : e === "in_other_root" ? `the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`;
}

function Tt(e, n) {
  return `${e > 0 ? `Your ${e} enabled ${I(e, "plugin")} can be used in` : `Your ${n} plugin ${I(n, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}

function Ot(e) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: e,
    notApplied: !1,
    messageWentFirst: !1
  };
}

function Qe(e, n) {
  Nt(e).forEach(n);
}

function Nt(e) {
  return [ ...Dt(e), ...Lt(e.stayed, e.forwarded === 0) ];
}

function Dt(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied) return [];
  if (e.refusedByWorker !== void 0) return [ {
    line: `This cloud session did not take your plugins: ${It[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
    level: "warning"
  } ];
  if (e.notApplied) return [ {
    line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
    level: "warning"
  } ];
  let n = e.forwarded - e.forwardedDisabled, r = e.forwardedDisabled, s = r > 0 ? ` (${r} you turned off here ${I(r, "stays", "stay")} off there)` : "";
  if (n === 0) return [ {
    line: `The ${r} ${I(r, "plugin")} you turned off here ${I(r, "is", "are")} off in this cloud session too.`,
    level: "debug"
  } ];
  let a = e.loaded !== null && e.loaded >= n, k = I(n, "it", "them"), P = e.loaded === null ? `Sent your ${n} enabled ${I(n, "plugin")} to this cloud session${s}; it has not confirmed ${k} \u2014 /reload-plugins shows what loaded.` : e.loaded >= n ? `Using your ${n} ${I(n, "plugin")} in this cloud session${s}.` : e.loaded === 0 ? `${n === 1 ? "Your enabled plugin could not" : `None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n === 1 ? "it" : "them"} or cannot reach ${n === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.` : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n - e.loaded} could not be installed there yet \u2014 the session is still fetching ${n - e.loaded === 1 ? "it" : "them"} or cannot reach ${n - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`, S = !e.messageWentFirst ? "" : e.loaded === null ? ` If ${I(n, "it", "they")} loaded, ${I(n, "it applies", "they apply")} from your next prompt; the one already sent may have run without ${k}.` : ` ${I(n, "It applies", "They apply")} from your next prompt; the one already sent may have run without ${k}.`;
  return [ {
    line: `${P}${S}`,
    level: a && !e.messageWentFirst ? "debug" : "notice"
  } ];
}

function Lt(e, n) {
  if (e.length === 0) return [];
  let r = e.slice(0, Ae).map(({id: k, reason: P}) => `${Ks(k, {
    maxCodeUnits: 80
  })} (${xt[P]})`).join("; "), s = e.length > Ae ? `; and ${e.length - Ae} more` : "";
  return [ {
    line: `${n ? `Not using your plugins in this cloud session; ${e.length} ${I(e.length, "stays", "stay")} on this machine` : `${e.length} of your plugin choices ${I(e.length, "stays", "stay")} on this machine`}: ${r}${s}.`,
    level: "debug"
  } ];
}

var xt = {
  invalid_id: "not a plugin@marketplace id",
  invalid_value: "its setting is not true or false",
  directory_loaded: "loaded with --plugin-dir, which exists only on this machine",
  unknown_builtin: "this build has no such built-in plugin",
  ambiguous_marketplace: "its marketplace name is spelled in conflicting ways here",
  blocked_by_policy: "your organization's policy does not allow it",
  not_installed_here: "only the repository\u2019s settings enable it and it is not installed on this machine; the cloud session goes by its own copy of the repository for that",
  unknown_marketplace: "its marketplace is not known on this machine",
  untrusted_for_folder: "its marketplace is declared by this folder's files, which you have not trusted for plugins",
  reserved_name_conflict: "its marketplace name is reserved for an official marketplace it does not match",
  not_provided_by_container: "its marketplace name is reserved for an official marketplace that cloud sessions do not have",
  local_marketplace: "its marketplace lives on this machine or your network",
  needs_credentials: "its marketplace needs credentials, which are never sent",
  insecure_transport: "its marketplace is fetched over an unencrypted connection",
  invalid_marketplace: "its marketplace source is malformed",
  over_cap: "over the limit of plugins one cloud session is sent",
  guard_builtin_not_own_choice: "a repository set it, and only your own settings may decide this one"
}, It = {
  disabled: "plugin forwarding is switched off in that container",
  not_managed_cloud_worker: "that kind of cloud session does not take plugins from your machine",
  entrypoint: "that kind of cloud session does not take plugins from your machine",
  hermetic: "that cloud session runs sealed off from outside configuration",
  not_admitted: "plugin forwarding is not available there",
  flag_off: "plugin forwarding is not switched on for your account there",
  flag_unsettled: "it could not confirm in time that plugin forwarding is on for your account",
  malformed: "it did not accept the request",
  other: "it did not accept the request"
};

var X3n = "Synced from this computer:", SFr = {
  files: "A message is waiting \xb7 esc to take it back",
  settings: "A message is waiting for your settings to upload \xb7 esc to take it back"
}, eke = {
  projectFiles: "Project files",
  settings: "Settings",
  plugins: "Plugins",
  localTools: "Local tools"
}, sn = [ "projectFiles", "settings", "plugins" ], Mt = te.tick, J3n = te.cross, jt = "\u2026", Ne = {
  mark: "synced"
}, Oe = {
  mark: "pending"
};

function O(e) {
  return {
    mark: "not_synced",
    words: e
  };
}

function $t(e) {
  switch (e.mark) {
   case "synced":
    return Mt;

   case "pending":
    return jt;

   case "not_synced":
    return J3n;
  }
}

function be(e, n) {
  let r = `${$t(n)} ${e}`;
  switch (n.mark) {
   case "synced":
    return n.note === void 0 ? r : `${r} (${n.note})`;

   case "pending":
    return r;

   case "not_synced":
    return `${r} \u2014 ${n.words}`;
  }
}

function Wt(e) {
  return [ X3n, ...sn.map(n => be(eke[n], e[n])), ...e.localTools === void 0 ? [] : [ be(eke.localTools, e.localTools) ] ];
}

function _jo(e) {
  let [n, ...r] = Wt(e), s = `${n} ${r.join(" \xb7 ")}`, a = Q3n(e), k = a === void 0 ? s : `${s}. ${a}`, P = Z3n(e);
  if (P === void 0) return k;
  return a === void 0 ? `${k}. ${P}.` : `${k} ${P}.`;
}

function Q3n(e) {
  return;
}

function Z3n(e) {
  if (e.repositoryTrust === void 0 || e.repositoryTrust === "nothing_to_mark") return;
  return MGo(e.repositoryTrust);
}

function bjo(e, n) {
  return e.whileClosed === n.whileClosed && e.repositoryTrust === n.repositoryTrust && Ut(e.localTools, n.localTools) && sn.every(r => an(e[r], n[r]));
}

function Sjo(e, n, r) {
  if (n !== void 0 && e?.on !== !0) return O(n);
  if (e === void 0) return;
  return e.on ? {
    mark: "synced",
    note: `served by this machine (${e.name})`
  } : O("not serving this session");
}

function Ut(e, n) {
  return e === void 0 || n === void 0 ? e === n : an(e, n);
}

function an(e, n) {
  return be("", e) === be("", n);
}

function wjo(e) {
  switch (e) {
   case "elsewhere":
    return "not_from_here";

   case "unknown":
   case "failed":
    return "lookup_failed";

   case "here_only":
    return "not_opted_in";

   case "held":
   case "nowhere":
   case "not_looked":
   case void 0:
    return "not_set_up";
  }
}

function vjo(e, n) {
  switch (e.state) {
   case "seeding":
   case "armed":
    return O(Se("off", void 0, n));

   case "absent":
    return O(Se(e.state, e.reason, n));

   case "off":
   case "stopped":
    return O(Se(e.state, e.reason, n));
  }
}

function wFr(e) {
  return;
}

function Ejo(e) {
  return !1;
}

function Vfn(e) {
  return {
    fromUpload: e?.kind === "bundle"
  };
}

var en = "not set up for this session";

var Te = {
  not_opted_in: en,
  not_from_here: "this session was not started from this folder",
  not_set_up: en,
  lookup_failed: "this computer could not check its records of this session"
}, Bt = {}, nn = {
  ...Te,
  ...Bt,
  seeded_elsewhere: Te.not_from_here,
  not_seeded: Te.not_set_up
};

function Se(e, n, r, s) {
  return (n !== void 0 && Object.hasOwn(nn, n) ? nn[n] : void 0) ?? (e === "stopped" ? "sync stopped for this session" : "sync is off for this session");
}

function kjo(e) {
  if (e.kind === "absent") return O(le[e.reason]);
  let {outcome: n, readBack: r} = e;
  if (n === void 0) return Oe;
  let s = n.keptForCredential, a = n.keptAsLinks === void 0 ? [] : [ Kt(n.keptAsLinks) ];
  if (n.kind === "none") {
    let h = [ ...s === void 0 ? [] : [ `${tn(s)} kept here: ${I(s.others + (s.claudeMd ? 1 : 0), "it looks like it holds", "they look like they hold")} a credential` ], ...a ];
    return O(h.length > 0 && n.reason === "nothing_to_send" ? h.join("; also ") : Gt(n.reason));
  }
  let k = [ ...s === void 0 ? [] : [ `without ${tn(s)}` ], ...a ], P = k.length === 0 ? Ne : {
    mark: "synced",
    note: k.join("; also ")
  }, S = n.settingsRefused === void 0 ? void 0 : O(dn[n.settingsRefused]);
  switch (n.outcome) {
   case "sent":
   case "unchanged":
   case "conflict_resolved":
    return S ?? (r === void 0 ? P : on(r, P));

   case "deadline":
    return S ?? (r === void 0 ? O("the upload took too long") : on(r, P));

   case "raced":
    return O("another launch of this session sent its settings first");

   case "not_forwarded_at_create":
    return O(ln);

   case "lane_full":
    return O("the session holds as many uploaded files as it may");

   case "unavailable":
    return O("not available for this session");

   case "unauthorized":
    return O(vKt);

   case "failed":
    return O("the upload failed");

   case "aborted":
    return O("the upload was cancelled");
  }
}

function tn({claudeMd: e, others: n}) {
  if (!e) return `${n} ${I(n, "file")}`;
  return n === 0 ? "CLAUDE.md" : `CLAUDE.md and ${n} more ${I(n, "file")}`;
}

function Kt({names: e, more: n}) {
  let r = n > 0 ? `${e.join(", ")} and ${n} more` : e.join(" and ");
  return e.length + n === 1 ? `${r} is a link, so it wasn't sent` : `${r} are links, so they weren't sent`;
}

function on(e, n) {
  switch (e.verdict) {
   case "applied_before_first_ask":
   case "applied_late":
    return e.left === null ? n : O(Xkn[e.left]);

   case "behind":
    return n;

   case "not_applied":
    return O("the cloud session could not apply them");

   case "stale":
    return O("the cloud session holds a different copy");

   case "not_seen":
    return O("the cloud session has not confirmed them");

   case "unreadable":
    return O("the cloud session's answer could not be read");
  }
}

var dn = {
  schema_rejected: "your settings file has errors",
  settings_too_large: "your settings file is too large",
  settings_unreadable: "your settings file could not be read"
}, De = "turned off by Anthropic for now (emergency switch)", ln = "this machine has no record of sending them to this session", le = {
  unsupported: "not available in this version",
  not_enabled: "not enabled for this account",
  kept_on_this_machine: "you chose not to send them",
  not_decided: "not decided on this machine yet (/config, for new sessions)",
  launch_keeps_them: "this launch keeps them on this machine",
  not_sent: "not sent with this session",
  no_project_files: "not sent with this session"
};

function Gt(e) {
  switch (e) {
   case "flag_off":
    return le.not_enabled;

   case "no_consent":
    return "kept on this machine (see /config)";

   case "user_settings_disabled":
    return "this launch does not load your user settings";

   case "unbound":
    return "this session is not bound to this machine";

   case "aborted":
    return "the upload was cancelled";

   case "failed":
    return "preparing them failed";

   case "too_slow":
    return "preparing them took too long";

   case "no_project_files":
    return le.no_project_files;

   case "home_unvettable":
    return "your settings folder could not be fully examined";

   case "nothing_to_send":
    return "nothing to send from this machine";

   case "rules_unreadable":
    return "a settings file here has errors";
  }
}

function Tjo(e, n, r) {
  return e === void 0 ? {
    kind: "absent",
    reason: n
  } : {
    kind: "seed",
    outcome: e.outcome(),
    readBack: r
  };
}

var un = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine"
};

function Ajo(e) {
  if (e.kind === "pending") return Oe;
  if (e.kind === "absent") return O(un[e.reason]);
  let {state: n} = e;
  if (n.muted) return O(De);
  if (!n.settled || n.answerPending) return Oe;
  switch (n.admission) {
   case "flag_off":
    return O("not enabled for this account");

   case "opted_out":
    return O("you chose not to send them");

   case "no_consent":
    return O(cn(n.source));

   case "admitted":
    return Ht(n);
  }
}

function cn(e) {
  switch (e) {
   case "not_asked":
    return "no plugins to send from this machine";

   case "read_failed":
    return "your plugin choices here could not be read";

   case "detached":
   case "internal_error":
    return "they could not be sent this time";

   case "bound_elsewhere":
    return "this machine could not show that this session is bound to it";

   case "binding_unknown":
    return "could not check this session's binding";

   case "muted":
    return De;

   case "untrusted_store":
    return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";

   case void 0:
   case "undecided":
   case "stored":
   case "decided":
    return "run /cloud-plugins to send them";
  }
}

function Ht(e) {
  let n = Y3n(e.notice);
  if (n !== void 0) return O(fn[n]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? O(cn(e.gaveUp)) : Ne;
}

var fn = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there"
};

function Cjo(e, n) {
  let r = e.directory_sync;
  return {
    projectFiles: O(Se(r.state === "stopped" ? "stopped" : "off", r.reason, {
      fromUpload: r.started_from_upload === !0
    }, n)),
    settings: rn(e.settings),
    plugins: rn(e.plugins),
    ...Yt(r),
    ...e.repository_trust !== void 0 && {
      repositoryTrust: e.repository_trust
    }
  };
}

function Yt(e) {
  let n = wFr(e.state === "armed" ? {
    state: "armed",
    direction: e.direction ?? "pending",
    firstUpload: e.first_upload === void 0 ? null : e.first_upload === "landed" ? "landed" : "pending"
  } : {
    state: e.state
  });
  return n === void 0 ? {} : {
    whileClosed: n
  };
}

function rn(e) {
  if (e === void 0) return O("not enabled for this launch");
  if (e.state === "forwarded") return Ne;
  return O(e.reason !== void 0 && zt(e.reason) ? pn[e.reason] : "not sent from this machine");
}

function zt(e) {
  return Object.hasOwn(pn, e);
}

var pn = {
  unsupported: le.unsupported,
  flag_off: le.not_enabled,
  launch_flag: le.launch_keeps_them,
  declined: le.kept_on_this_machine,
  no_consent: "not decided yet on this machine",
  unbound: "this session is not bound to this machine",
  switched_off: un.switched_off,
  bound_elsewhere: "this machine could not show that this session is bound to it",
  binding_unknown: "could not check this session's binding",
  not_seeded: le.not_sent,
  nothing_to_forward: "nothing to send from this machine",
  nothing_to_send: "nothing to send from this machine",
  rules_unreadable: "a settings file here has errors",
  plan_failed: "preparing them failed",
  user_settings_disabled: "this launch does not load your user settings",
  muted: De,
  too_slow: "preparing them took too long",
  no_project_files: le.no_project_files,
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: ln,
  lane_full: "the session holds as many uploaded files as it may",
  unavailable: "not available for this session",
  unauthorized: vKt,
  failed: "the upload failed",
  ...dn,
  ...fn,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time"
};

export { OMe, hjo, jyt, yjo, s7e, HBt, q3n, yFr, Y3n, _Fr, Gfn, bFr, X3n, SFr, eke, J3n, _jo, Q3n, Z3n, bjo, Sjo, wjo, vjo, wFr, Ejo, Vfn, kjo, Tjo, Ajo, Cjo };
