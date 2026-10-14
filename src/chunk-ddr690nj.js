// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { J } from "./chunk-nvtwm272.js";

import { Ue } from "./chunk-nvz3jsgg.js";

function Vt() {
  this.__data__ = [], this.size = 0;
}

var it = Vt;

function Kt(t, e) {
  return t === e || t !== t && e !== e;
}

var xEe = Kt;

function Zt(t, e) {
  var n = t.length;
  while (n--) if (xEe(t[n][0], e)) return n;
  return -1;
}

var w = Zt;

var Yt = Array.prototype, Xt = Yt.splice;

function qt(t) {
  var e = this.__data__, n = w(e, t);
  if (n < 0) return !1;
  var r = e.length - 1;
  if (n == r) e.pop(); else Xt.call(e, n, 1);
  return --this.size, !0;
}

var st = qt;

function Qt(t) {
  var e = this.__data__, n = w(e, t);
  return n < 0 ? void 0 : e[n][1];
}

var at = Qt;

function te(t) {
  return w(this.__data__, t) > -1;
}

var ut = te;

function ee(t, e) {
  var n = this.__data__, r = w(n, t);
  if (r < 0) ++this.size, n.push([ t, e ]); else n[r][1] = e;
  return this;
}

var lt = ee;

function v(t) {
  var e = -1, n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}

v.prototype.clear = it;

v.prototype.delete = st;

v.prototype.get = at;

v.prototype.has = ut;

v.prototype.set = lt;

var kht = v;

var ne = typeof global == "object" && global && global.Object === Object && global, n0r = ne;

var re = typeof self == "object" && self && self.Object === Object && self, oe = n0r || re || Function("return this")(), ZU = oe;

var ie = ZU.Symbol, JG = ie;

var ct = Object.prototype, {hasOwnProperty: se, toString: ae} = ct, N = JG ? JG.toStringTag : void 0;

function ue(t) {
  var e = se.call(t, N), n = t[N];
  try {
    t[N] = void 0;
    var r = !0;
  } catch (i) {}
  var o = ae.call(t);
  if (r) if (e) t[N] = n; else delete t[N];
  return o;
}

var ft = ue;

var le = Object.prototype, ce = le.toString;

function fe(t) {
  return ce.call(t);
}

var pt = fe;

var pe = "[object Null]", de = "[object Undefined]", dt = JG ? JG.toStringTag : void 0;

function ge(t) {
  if (t == null) return t === void 0 ? de : pe;
  return dt && dt in Object(t) ? ft(t) : pt(t);
}

var Aae = ge;

function me(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}

var vT = me;

var he = "[object AsyncFunction]", xe = "[object Function]", be = "[object GeneratorFunction]", we = "[object Proxy]";

function _e(t) {
  if (!vT(t)) return !1;
  var e = Aae(t);
  return e == xe || e == be || e == he || e == we;
}

var fFt = _e;

var Se = ZU["__core-js_shared__"], M = Se;

var gt = function() {
  var t = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();

function ye(t) {
  return !!gt && gt in t;
}

var mt = ye;

var ve = Function.prototype, Te = ve.toString;

function Ae(t) {
  if (t != null) {
    try {
      return Te.call(t);
    } catch (e) {}
    try {
      return t + "";
    } catch (e) {}
  }
  return "";
}

var GJe = Ae;

var Oe = /[\\^$.*+?()[\]{}|]/g, Ce = /^\[object .+?Constructor\]$/, Ne = Function.prototype, Ee = Object.prototype, Pe = Ne.toString, Re = Ee.hasOwnProperty, De = RegExp("^" + Pe.call(Re).replace(Oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Le(t) {
  if (!vT(t) || mt(t)) return !1;
  var e = fFt(t) ? De : Ce;
  return e.test(GJe(t));
}

var ht = Le;

function Me(t, e) {
  return t == null ? void 0 : t[e];
}

var xt = Me;

function Ie(t, e) {
  var n = xt(t, e);
  return ht(n) ? n : void 0;
}

var Cae = Ie;

var ke = Cae(ZU, "Map"), Tht = ke;

var $e = Cae(Object, "create"), h = $e;

function je() {
  this.__data__ = h ? h(null) : {}, this.size = 0;
}

var bt = je;

function He(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}

var wt = He;

var We = "__lodash_hash_undefined__", Fe = Object.prototype, ze = Fe.hasOwnProperty;

function Be(t) {
  var e = this.__data__;
  if (h) {
    var n = e[t];
    return n === We ? void 0 : n;
  }
  return ze.call(e, t) ? e[t] : void 0;
}

var _t = Be;

var Ge = Object.prototype, Je = Ge.hasOwnProperty;

function Ve(t) {
  var e = this.__data__;
  return h ? e[t] !== void 0 : Je.call(e, t);
}

var St = Ve;

var Ke = "__lodash_hash_undefined__";

function Ze(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = h && e === void 0 ? Ke : e, this;
}

var yt = Ze;

function T(t) {
  var e = -1, n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}

T.prototype.clear = bt;

T.prototype.delete = wt;

T.prototype.get = _t;

T.prototype.has = St;

T.prototype.set = yt;

var B = T;

function Ye() {
  this.size = 0, this.__data__ = {
    hash: new B,
    map: new (Tht || kht),
    string: new B
  };
}

var vt = Ye;

function Xe(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}

var Tt = Xe;

function qe(t, e) {
  var n = t.__data__;
  return Tt(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}

var _ = qe;

function Qe(t) {
  var e = _(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}

var At = Qe;

function tn(t) {
  return _(this, t).get(t);
}

var Ot = tn;

function en(t) {
  return _(this, t).has(t);
}

var Ct = en;

function nn(t, e) {
  var n = _(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}

var Nt = nn;

function A(t) {
  var e = -1, n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}

A.prototype.clear = vt;

A.prototype.delete = At;

A.prototype.get = Ot;

A.prototype.has = Ct;

A.prototype.set = Nt;

var mFt = A;

var rn = "Expected a function";

function G(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function") throw TypeError(rn);
  var n = function() {
    var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache;
    if (i.has(o)) return i.get(o);
    var s = t.apply(this, r);
    return n.cache = i.set(o, s) || i, s;
  };
  return n.cache = new (G.Cache || mFt), n;
}

G.Cache = mFt;

var lo = G;

import { lstatSync as ln, readFileSync as go, readlinkSync as et, realpathSync as nt, statSync as mo } from "fs";

import { readlink as cn } from "fs/promises";

var dMe = /[.\s]+$/, b$o = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i, RYn = /~\d/;

function nw(t) {
  let e = t.indexOf("."), n = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(n);
}

function xYn(t) {
  return dMe.test(t) || b$o.test(t);
}

function Scn(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}

function PYn(t) {
  return Scn(t.replace(/\u0307/g, ""));
}

function VJe(t) {
  return Array.from(t, e => {
    let n = e.toUpperCase();
    return [ ...n ].length === 1 ? n : e;
  }).join("").toLowerCase();
}

function Aht(t) {
  let e = VJe(t);
  return e === "users" || e === "documents and settings" || e === "dokumente und einstellungen" || /^do[ck]ume~[0-9]+$/.test(e);
}

function on(t) {
  if (t.length < 3 || !Aht(t[0])) return;
  let e = sn.get(t[2]) ?? an.find(([n]) => n.test(t[2]))?.[1];
  return e === void 0 ? void 0 : [ ...t.slice(0, 2), ...e, ...t.slice(3) ];
}

function IYn(t) {
  return VJe(t).split("/").filter(Boolean);
}

function r0r(t) {
  let e = IYn(t), n = on(e);
  return n === void 0 ? [ e ] : [ e, n ];
}

function OYn(t, e) {
  let n = r0r(e);
  return r0r(t).flatMap(r => n.flatMap(o => r.length <= o.length && r.every((i, s) => un(s, i, o[s])) ? [ o.slice(r.length) ] : []));
}

var sn = new Map([ [ "my documents", [ "documents" ] ], [ "application data", [ "appdata", "roaming" ] ], [ "local settings", [ "appdata", "local" ] ] ]), an = [ [ /^mydocu~[0-9]+$/, [ "documents" ] ], [ /^applic~[0-9]+$/, [ "appdata", "roaming" ] ], [ /^locals~[0-9]+$/, [ "appdata", "local" ] ] ];

function un(t, e, n) {
  return S$o(e, n) || t === 0 && Aht(e) && Aht(n);
}

function S$o(t, e) {
  return t === e || PYn(t) || PYn(e);
}

function Cht(t) {
  let e = /^[\\/]{2}(?:[?.][\\/]([A-Za-z]):|(?:localhost|127\.0\.0\.1)[\\/]([A-Za-z])\$)(?=$|[\\/])/i.exec(t);
  if (e === null) return t;
  let n = t.slice(e[0].length);
  return `${e[1] ?? e[2]}:${n === "" ? "\\" : n}`;
}

import { homedir as rt } from "os";

import { basename as Y, dirname as c, isAbsolute as x, join as X, parse as ot, relative as q, resolve as f, sep as d } from "path";

import * as Q from "path";

function Ln(t) {
  return t;
}

function Un(t) {
  return /^[\\/]{2}/.test(t) || M$(t);
}

function Ly(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}

function jC(t) {
  return t.includes("\\");
}

function Ny(t) {
  return /^[\\/]\?\?[\\/]/.test(t);
}

function bx(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return t.match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]?.replace(/[A-Z]/g, e => e.toLowerCase()) ?? null;
}

function cl(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}

function oWe(t) {
  return t.split(/[/\\]/).some(e => /^\.\. [ .]*$/.test(e));
}

function MYn(t, e = "linux") {
  return e === "win32" ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t) : /(^|\/)\.{1,2}(\/|$)/.test(t);
}

function I$(t) {
  return MYn(t);
}

function ET(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t);
}

function eb(t) {
  if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) return !1;
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), e.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(n)) return !0;
  }
  return !1;
}

function o0r(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}

function Rae(t, e) {
  if (!Un(t)) return !1;
  if (ET(t) || M$(t)) return !0;
  if (cl(t)) return !0;
  let n = bx(t);
  return n === null || n !== bx(e);
}

function C(t) {
  return t.length === 2 && Sx(t[0]) === "net" || t.length === 3 && Sx(t[0]) === "network" && Sx(t[1]) === "servers";
}

function lte(t) {
  if (!t.startsWith("/")) return null;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), C(e)) return O(n);
  }
  return null;
}

function O(t) {
  return t.replace(/[A-Z]/g, e => e.toLowerCase());
}

function Sx(t) {
  return t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase();
}

function HYn(t, e = "linux") {
  let n = t.split("/");
  if (n[0] !== "") return t;
  let r, o;
  if (e === "darwin" ? C(n.slice(1, 3)) : n[1] === "net" && n.length >= 3) r = "/net/", 
  o = 2; else if (e === "darwin" && C(n.slice(1, 4))) r = "/Network/Servers/", o = 3; else return t;
  let i = n[o];
  if (i === void 0 || i === "") return t;
  let s = n.slice(o + 1);
  return r + O(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "");
}

function s0r(t) {
  let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
  if (e === null || e[2].toLowerCase() === "wsl.localhost") return t;
  return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1);
}

function O$(t, e) {
  if (eb(t)) return !0;
  if (va(t)) {
    let n = lte(t);
    if (n === null || n !== lte(e)) return !0;
  }
  return i0r(t, e);
}

function Li(t, e) {
  let n = f(e, t);
  if (Rae(t, e) || Rae(n, e)) return !0;
  let r = lte(e);
  for (let o of [ t, n ]) {
    if (va(o)) {
      let i = lte(o);
      if (i === null || i !== r) return !0;
    }
    if (_M(o) || gS(o) || eb(o) || i0r(o, e)) return !0;
  }
  return !1;
}

function i0r(t, e, n = "linux", r = n === "darwin" && !0) {
  if (n !== "darwin" || !gD(t, n, r)) return !1;
  let o = tt(e, n, r).complete[0] ?? null, {complete: i, partial: s} = tt(t, n, r);
  if (i.length === 0 && s.length === 0) return !0;
  if (o === null) return !0;
  return i.some(a => a !== o) || s.some(a => !o.startsWith(a));
}

var vo = Ue({
  value: void 0
}, t => {
  t.value = void 0;
});

var fn = 6;

function tt(t, e, n) {
  let r = [], o = [];
  if (!t.startsWith("/")) return {
    complete: r,
    partial: o
  };
  let i = [];
  for (let s of t.split("/")) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i.pop();
      continue;
    }
    if (i.push(s), i.length > fn) continue;
    let a = "/" + i.join("/"), u = (e === "darwin" ? ZG(a) : a).split("/").filter(b => b !== ""), m = u[0]?.toLowerCase();
    if (m === "network") {
      if (u.length === 1) o.push("/network/"); else if (u.length === 2) o.push(`/network/${O(u[1])}/`); else if (u.length === 3) r.push(`/network/${O(u[1])}/${O(u[2])}`);
    } else if (n && m === "home" && u.length === 2) r.push(`/home/${u[1]}`);
  }
  return {
    complete: r,
    partial: o
  };
}

function va(t) {
  return el(t);
}

function QG(t) {
  if (!t.startsWith("/")) return !1;
  let e = t.split("/").filter(r => r !== "" && r !== ".");
  if (e.length < 1 || e.length > 3 || e.includes("..")) return !1;
  if (C(e) && (e.length === 2 || !1)) return !0;
  let n = e[0].toLowerCase();
  return e.length <= 2 && (n === "net" || !1);
}

function ul(t) {
  return Un(t) || va(t) || TI(t) || eb(t);
}

function Eh(t) {
  return va(t) || TI(t) || gS(t) || eb(t);
}

function el(t) {
  return cMe(t) !== null;
}

var Ht = 1024, Wt = 4096, I = new Map, k = new Map;

function cMe(t) {
  if (!t.startsWith("/")) return null;
  if (t.length > Wt) return Et(t);
  let e = I.get(t);
  if (e === void 0) {
    if (e = Et(t), I.size >= Ht) I.clear();
    I.set(t, e);
  }
  return e;
}

function Et(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), C(e)) return "/" + e.join("/");
  }
  return null;
}

function nBs(t) {
  let e = cMe(t);
  return e === null ? null : e.slice(e.lastIndexOf("/") + 1);
}

var pn = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;

function gFt(t) {
  let e = pn.exec(t);
  return e === null ? void 0 : {
    prefix: e[1],
    rest: e[2] ?? ""
  };
}

function gS(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    e.push(n);
  }
  return e.length === 1 && e[0].toLowerCase() === "net";
}

function _M(t) {
  if (!t.startsWith("/")) return !1;
  if (t.length > Wt) return Pt(t);
  let e = k.get(t);
  if (e === void 0) {
    if (e = Pt(t), k.size >= Ht) k.clear();
    k.set(t, e);
  }
  return e;
}

function Pt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), e.length === 1 && e[0].toLowerCase() === "network") return !0;
  }
  return !1;
}

function TI(t) {
  return !1;
}

function Mm(t) {
  return el(t) || gS(t) || _M(t) || eb(t);
}

function Rht(t, e, n = null) {
  let r = dte(t), o = dte(e);
  if (!r && !o) return !1;
  if (r && !o) return !0;
  if (!r && o) {
    let u = n === null || Un(n) ? null : lte(n), m = Un(e) ? null : V(e);
    if (u !== null && m !== null && u === m) return !1;
    if (n !== null && Un(n) && Un(e) && !Rae(e, n)) return !1;
    return !0;
  }
  let i = Un(t) ? null : V(t), s = Un(e) ? null : V(e);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let a = bx(t), l = bx(e);
  if (a !== null || l !== null) return a === null || l === null || a !== l;
  return t !== e;
}

function V(t) {
  return _M(t) ? null : lte(t);
}

function gD(t, e = "linux", n = e === "darwin" && !0) {
  if (e !== "darwin") return !1;
  if (_M(t) || eb(t)) return !0;
  if (!t.startsWith("/")) return !1;
  let {complete: r, partial: o} = tt(t, e, n);
  if (o.length > 0) return !0;
  if (r.some(s => s.startsWith("/network/"))) return !0;
  let i = r.filter(s => s.startsWith("/home/"));
  if (i.length > 0) {
    let s = dn();
    if (i.some(a => a !== s)) return !0;
  }
  return !1;
}

function dn() {
  let t;
  try {
    t = rt();
  } catch {
    return null;
  }
  let e = /^\/home\/([^/]+)/.exec(ZG(t));
  return e ? `/home/${e[1]}` : null;
}

function dte(t) {
  return wcn(t) || _M(t);
}

function wcn(t) {
  return Cs(t) || el(t) || gS(t) || ET(t) || M$(t) || o0r(t) || eb(t);
}

function vcn(t) {
  let e = t.split("/").filter(Boolean);
  if (e.length === 0) return t;
  let n = e.at(-1);
  return "/" + [ ...e.slice(0, -1).map(Sx), O(n) ].join("/");
}

function KJe(t) {
  if (!t.startsWith("/")) return [];
  let e = [], n = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      n.pop();
      continue;
    }
    if (n.push(r), C(n)) e.push(vcn("/" + n.join("/")));
  }
  return e;
}

function za(t) {
  let e = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
  return e !== null && !/^\.{0,2}[. ]*$/.test(e[1] ?? "");
}

function Cs(t) {
  return Un(t) && !za(t);
}

function qc(t) {
  if (Ut(t)) return rt() + t.slice(1);
  return t;
}

function Ecn(t, e) {
  if (Ut(t)) return e + t.slice(1);
  return t;
}

function Ut(t) {
  return t === "~" || t.startsWith("~/") || !1;
}

function bM(t) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n === "*" || n === "?") return e;
    if (n === "[" && t.indexOf("]", e + 1) !== -1) return e;
  }
  return -1;
}

function kT(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") return t.slice(4);
  return t;
}

function WC(t) {
  if (hD(t)) {
    let e = kT(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let n = 0; n < gn && M$(e); n++) {
      e = Jt(e).replace(/^([\\/])[\\/]+/, "$1");
      let r = 1;
      while (e[r] === "?" && e[r + 1] === "?" && (r + 2 === e.length || Rt(e[r + 2]))) {
        r += 3;
        while (Rt(e[r])) r++;
      }
      e = e.slice(0, 1) + e.slice(r);
    }
    return M$(e) ? e.slice(0, 1) : e;
  }
  return t;
}

var gn = 4;

function Rt(t) {
  return t === "\\" || t === "/";
}

function hD(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return Dt(t);
  if (M$(t)) return !0;
  let e = kT(t);
  if (e !== t && Dt(e)) return !0;
  return Un(e) && !za(e);
}

function Dt(t) {
  return cl(t) || t.includes("/");
}

function Yp(t) {
  try {
    return kT(nt.native(t));
  } catch {
    return null;
  }
}

function rBs(t) {
  try {
    return nt(t);
  } catch {
    return null;
  }
}

var mn = 4, P = 50, a0r = P * (mn - 1), Lt;

function cte(t) {
  return sWe(t).real ?? null;
}

function DYn(t, e) {
  let n = f(e).toLowerCase(), r = c(f(t)).toLowerCase();
  if (r === n || Mt(r, n) || It(r, n, "lexical")) return !0;
  let o = cte(e)?.toLowerCase();
  if (o == null) return !1;
  let i = cte(c(f(t)))?.toLowerCase();
  if (i == null) return !0;
  return i === o || Mt(i, o) || It(i, o, "canonical");
}

var hn = new Set([ "node_modules", ".venv", "venv", "env", ".env", "virtualenv", ".tox", ".nox", ".direnv", "__pypackages__" ]);

function Mt(t, e) {
  if (!t.startsWith(H(e) + d)) return !1;
  return t.split(d).some(n => hn.has(n));
}

function H(t) {
  return t.endsWith(d) ? t.slice(0, -1) : t;
}

var K;

function It(t, e, n) {
  let r = rt(), o = (process.env.LOCALAPPDATA ?? "").trim();
  if (n === "lexical") return Z(kt(r, o, l => f(l).toLowerCase()), t, e);
  let i = r + "\0" + o;
  if (K?.key === i) return Z(K.aliasDirs, t, e);
  let s = !0, a = kt(r, o, l => {
    if (!xn(l)) return f(l).toLowerCase();
    let u = cte(l)?.toLowerCase();
    if (u == null) return s = !1, f(l).toLowerCase();
    return u;
  });
  if (s) K = {
    key: i,
    aliasDirs: a
  };
  return Z(a, t, e);
}

function kt(t, e, n) {
  let r = [];
  if (t) r.push(H(n(t)) + d + [ "appdata", "local", "microsoft", "windowsapps" ].join(d));
  if (e) {
    let o = H(n(e)) + d + [ "microsoft", "windowsapps" ].join(d);
    if (!r.includes(o)) r.push(o);
  }
  return r;
}

function xn(t) {
  return t.startsWith("/") && !Un(t);
}

function Z(t, e, n) {
  let r = H(n);
  for (let o of t) {
    if (!(o === r || o.startsWith(r + d))) continue;
    if (e === o || e.startsWith(o + d)) return !0;
  }
  return !1;
}

var bn = [ "usr/local", "usr/libexec/cups", "usr/share/snmp", "AppleInternal", "Applications", "Library", "Users", "Volumes", "cores", "home", "media", "mnt", "opt", "pkg", "private", "sw" ];

function ZG(t) {
  let e = t.split("/");
  if (e.length < 5 || e[0] !== "" || E(e[1] ?? "") !== "system" || E(e[2] ?? "") !== "volumes" || E(e[3] ?? "") !== "data") return t;
  let n = e.slice(4);
  for (let r of bn) {
    let o = r.split("/");
    if (n.length < o.length) continue;
    if (o.every((i, s) => E(n[s] ?? "") === E(i))) return "/" + n.join("/");
  }
  return t;
}

function E(t) {
  return t.toUpperCase().toLowerCase();
}

function e2(t) {
  return Y(c(t)) === "worktrees" && Y(c(c(t))) === ".claude" ? c(c(c(t))) : null;
}

function GX(t, {allowLocalWsl: e = !1} = {}) {
  let n = i => e && LYn(i);
  if (n(t)) return !1;
  if (zw(t)) return !0;
  let r = Wme(t);
  if (!x(r)) return !0;
  if (uMe(r, {
    allowLocalWsl: e
  })) return !0;
  let o = f(r);
  for (;;) {
    let i = sWe(o);
    if (i.real !== void 0) return zw(i.real) && !n(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return !0;
    let s = c(o);
    if (s === o) return !1;
    o = s;
  }
}

function LYn(t) {
  return !1;
}

function xht(t) {
  return t;
}

var wn = /^\/mnt\/[a-z](?:\/|$)/i;

function NYn(t, e, n = "") {
  if (!t.startsWith("/") || wn.test(t) || MYn(t, "linux")) return;
  let r = n === "" ? t : t.startsWith(n + "/") ? t.slice(n.length) : void 0;
  return r === void 0 ? void 0 : e.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\");
}

function $Yn(t, {exactDots: e = !1} = {}) {
  return;
}

function FYn(t, {exactDots: e = !1} = {}) {
  let n = Wme(t);
  if (e ? MYn(n, "win32") : cl(n)) return;
  let r = /^([A-Za-z]):[\\/]+(.*)$/.exec(n), o = gFt(n)?.rest.replace(/^[\\/]+/, ""), i = (r?.[2] ?? o ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (i === "") return;
  let s = r ? `/mnt/${r[1].toLowerCase()}/${i}` : `/${i}`;
  return zw(s) ? void 0 : s;
}

function oBs(t) {
  return zw(t) && !LYn(t);
}

function zw(t) {
  let e = Wme(t);
  return w$o(e) || Mm(e) || o0r(e);
}

function l0r(t, {allowLocalWsl: e = !1} = {}) {
  let n = Wme(t);
  if (!x(n)) return !0;
  let {root: r} = ot(n);
  return y(r, S(n.slice(r.length)), 0, e);
}

function hFt(t, e) {
  return y(t, S(e), 0, !1, {
    trustedStart: !0,
    trustedRoot: t
  });
}

function UYn(t, e = c(t)) {
  let n = R(() => et(t));
  if (n.value === void 0) return n.code !== "ENOENT" && n.code !== "EINVAL";
  let r = n.value.replace(/^\/{2,}/, "/");
  if (Ft(r)) return !0;
  let o = !1;
  if (o && cl(r)) return !0;
  let i = o ? X(ot(e).root, r) : r, s = {
    trustedStart: !0,
    trustedRoot: e
  };
  if (x(i)) {
    let u = q(e, i);
    if (!cl(i) && u !== "" && !$t(u) && !x(u)) return y(e, S(u), 1, !1, s);
    return zw(i) || uMe(i);
  }
  if (zw(i)) return !0;
  let a = q(e, c(t)), l = !$t(a) && !x(a);
  return y(l ? e : c(t), [ ...l ? S(a) : [], ...S(i) ], 1, !1, s);
}

function uMe(t, e = {}) {
  return l0r(t, e) || cl(t) && l0r(f(t), e);
}

var _n = 40;

function S(t) {
  return t.split(/\/+/).filter(Boolean);
}

function j(t, e) {
  return zw(t) && !(e && LYn(t));
}

function $t(t) {
  return t === ".." || /^\.\.[\\/]/.test(t);
}

function Ft(t) {
  return !1;
}

function y(t, e, n, r, {trustedStart: o = !1, trustedRoot: i = t} = {}) {
  let s = i.endsWith(d) ? i : i + d, a = u => o && (u === i || u.startsWith(s)), l = t;
  if (!a(l) && j(l, r)) return !0;
  for (let u = 0; u < e.length; u++) {
    let m = e[u];
    if (m === ".") continue;
    if (m === "..") {
      l = c(l);
      continue;
    }
    let b = X(l, m);
    if (!a(b) && j(b, r)) return !0;
    let D = R(() => ln(b));
    if (D.value === void 0) {
      if (D.code !== "ENOENT" && D.code !== "ENOTDIR") return !0;
      let g = b;
      for (let L of e.slice(u + 1)) if (g = L === ".." ? c(g) : L === "." ? g : X(g, L), 
      !a(g) && j(g, r)) return !0;
      return !1;
    }
    let F;
    if (D.value.isSymbolicLink()) {
      if (n >= _n) return !0;
      if (F = R(() => et(b)).value, F === void 0) return !0;
    } else {
      l = b;
      continue;
    }
    let p = F.replace(/^\/{2,}/, "/");
    if (!(o && x(p) && !cl(p) && a(p)) && j(p, r)) return !0;
    let z = e.slice(u + 1);
    if (Ft(p)) return !0;
    if (x(p)) {
      if (o && !cl(p) && a(p)) return y(i, [ ...S(p.slice(s.length)), ...z ], n + 1, r, {
        trustedStart: !0,
        trustedRoot: i
      });
      let g = ot(p).root;
      return y(g, [ ...S(p.slice(g.length)), ...z ], n + 1, r);
    }
    return y(l, [ ...S(p), ...z ], n + 1, r, {
      trustedStart: a(l),
      trustedRoot: i
    });
  }
  return !1;
}

function sWe(t) {
  let e = R(() => kT(nt.native(t)));
  return {
    real: e.value,
    code: e.code
  };
}

function U(t) {
  return t != null && typeof t === "object" && "code" in t && typeof t.code === "string" ? t.code : void 0;
}

function R(t) {
  try {
    return {
      value: Sn(t)
    };
  } catch (e) {
    return {
      code: U(e)
    };
  }
}

function Sn(t) {
  return zt(t, () => !0);
}

function d0r(t) {
  let e = 0;
  return n => zt(n, () => {
    if (e + P > t) return !1;
    return e += P, !0;
  });
}

function zt(t, e) {
  for (let n = 0; ;n++) try {
    return t();
  } catch (r) {
    let o = U(r);
    throw r;
  }
}

function Bt(t) {
  let e = U(t);
  return e === "EINVAL" ? {
    kind: "directory"
  } : e === "ENOENT" ? {
    kind: "absent"
  } : {
    kind: "error",
    code: e,
    error: t
  };
}

function sBs(t) {
  let e, n = R(() => {
    try {
      return et(t);
    } catch (r) {
      throw e = r, r;
    }
  });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Bt(e);
}

async function PEe(t) {
  let e, n = await yn(async () => {
    try {
      return await cn(t);
    } catch (r) {
      throw e = r, r;
    }
  });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Bt(e);
}

async function yn(t) {
  for (let e = 0; ;e++) try {
    return {
      value: await t()
    };
  } catch (n) {
    let r = U(n);
    return {
      code: r
    };
  }
}

function w$o(t) {
  return bL(t) || el(t);
}

function Gt(t) {
  return cl(t) || /[. :](?=[\\/]|$)/.test(t) || t.split(/[\\/]/).some(e => nw(e) || nw(e.slice(0, Math.max(0, e.indexOf(":")))));
}

function Wme(t) {
  let e = /^(?:\\\\[?.]\\|\\\?\?\\)(?=[A-Za-z]:[\\/])/.exec(t);
  if (!e) return t;
  let n = t.slice(e[0].length), r = n.slice(2);
  return e[0].includes("\\") && r.includes("/") || Gt(r) ? t : n;
}

function Ib(t, {foldCase: e, knownNotSuspect: n = !1} = {}) {
  if (e ??= !1, t = Wme(t), bL(t) || el(t)) {
    let a = xht(f(xht(t))).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  if (!n && uMe(x(t) ? t : f(t))) {
    let a = f(t).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  let r = f(t), o = [], i = Yp(r);
  while (i === null && c(r) !== r) o.unshift(Y(r)), r = c(r), i = Yp(r);
  i = o.length > 0 ? f(i ?? r, ...o) : i ?? r;
  let s = xht(i).normalize("NFC");
  return e ? s.toLowerCase() : s;
}

function Hm(t, e, {alreadyComparable: n = !1, foldCase: r} = {}) {
  let o = q(n ? t : Ib(t, {
    foldCase: r
  }), n ? e : Ib(e, {
    foldCase: r
  }));
  return o === "" || !x(o) && o !== ".." && !o.startsWith(`..${d}`);
}

function zme(t, e) {
  let n = Yp(t), r = Yp(e);
  return n !== null && r !== null && W(n) === W(r);
}

function v$o(t, e) {
  let n = Yp(t), r = Yp(e);
  return n !== null && r !== null && vn(W(n), W(r), /\//);
}

function vn(t, e, n) {
  let r = new RegExp(`(?:${n.source})+$`), o = t.replace(r, "").split(n), i = e.replace(r, "").split(n);
  return o.length <= i.length && o.every((s, a) => s === i[a]);
}

function W(t) {
  return Ln(xht(t));
}

function bL(t) {
  return Un(t);
}

function M$(t) {
  return jt.test(t) || t.includes("??") && jt.test(Jt(t));
}

var jt = /^[\\/]\?\?[\\/]/;

function Jt(t) {
  return Q.win32 ? Q.win32.normalize(t) : t;
}

export { xEe, kht, n0r, ZU, JG, Aae, vT, fFt, GJe, Cae, Tht, mFt, lo, dMe, b$o, RYn, nw, xYn, Scn, PYn, VJe, Aht, IYn, r0r, OYn, S$o, Cht, Ln, Un, Ly, jC, Ny, bx, cl, oWe, MYn, I$, ET, eb, o0r, Rae, lte, Sx, HYn, s0r, O$, Li, i0r, va, QG, ul, Eh, el, cMe, nBs, gFt, gS, _M, TI, Mm, Rht, gD, dte, wcn, vcn, KJe, za, Cs, qc, Ecn, bM, kT, WC, hD, Yp, rBs, a0r, cte, DYn, ZG, e2, GX, LYn, xht, NYn, $Yn, FYn, oBs, zw, l0r, hFt, UYn, uMe, sWe, d0r, sBs, PEe, w$o, Wme, Ib, Hm, zme, v$o, bL, M$ };
