// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To, XG, Vt } from "./chunk-vxr6sv7z.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { h$o, TYn, wht, z } from "./chunk-bmq0vae0.js";

import { f0r } from "./chunk-nvtwm272.js";

import { xEe, kht, n0r, ZU, JG, Aae, vT, fFt, GJe, Cae, Tht, mFt, lo, Ln } from "./chunk-ddr690nj.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var U = {};

Nr(U, {
  default: () => Nje
});

var _ = {};

Nr(_, {
  default: () => $je
});

function In() {
  this.__data__ = new kht, this.size = 0;
}

var tt = In;

function En(e) {
  var t = this.__data__, o = t.delete(e);
  return this.size = t.size, o;
}

var nt = En;

function Dn(e) {
  return this.__data__.get(e);
}

var ot = Dn;

function Hn(e) {
  return this.__data__.has(e);
}

var rt = Hn;

var Bn = 200;

function Un(e, t) {
  var o = this.__data__;
  if (o instanceof kht) {
    var r = o.__data__;
    if (!Tht || r.length < Bn - 1) return r.push([ e, t ]), this.size = ++o.size, this;
    o = this.__data__ = new mFt(r);
  }
  return o.set(e, t), this.size = o.size, this;
}

var it = Un;

function P(e) {
  var t = this.__data__ = new kht(e);
  this.size = t.size;
}

P.prototype.clear = tt;

P.prototype.delete = nt;

P.prototype.get = ot;

P.prototype.has = rt;

P.prototype.set = it;

var Lje = P;

var jn = "__lodash_hash_undefined__";

function _n(e) {
  return this.__data__.set(e, jn), this;
}

var st = _n;

function qn(e) {
  return this.__data__.has(e);
}

var at = qn;

function E(e) {
  var t = -1, o = e == null ? 0 : e.length;
  this.__data__ = new mFt;
  while (++t < o) this.add(e[t]);
}

E.prototype.add = E.prototype.push = st;

E.prototype.has = at;

var xHr = E;

function Wn(e, t) {
  var o = -1, r = e == null ? 0 : e.length;
  while (++o < r) if (t(e[o], o, e)) return !0;
  return !1;
}

var dt = Wn;

function Nn(e, t) {
  return e.has(t);
}

var PHr = Nn;

var Gn = 1, Kn = 2;

function Vn(e, t, o, r, i, s) {
  var a = o & Gn, l = e.length, d = t.length;
  if (l != d && !(a && d > l)) return !1;
  var p = s.get(e), m = s.get(t);
  if (p && m) return p == t && m == e;
  var c = -1, f = !0, u = o & Kn ? new xHr : void 0;
  s.set(e, t), s.set(t, e);
  while (++c < l) {
    var g = e[c], v = t[c];
    if (r) var b = a ? r(v, g, c, t, e, s) : r(g, v, c, e, t, s);
    if (b !== void 0) {
      if (b) continue;
      f = !1;
      break;
    }
    if (u) {
      if (!dt(t, function(C, x) {
        if (!PHr(u, x) && (g === C || i(g, C, o, r, s))) return u.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === v || i(g, v, o, r, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}

var D = Vn;

var Jn = ZU.Uint8Array, ldn = Jn;

function Qn(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, i) {
    o[++t] = [ i, r ];
  }), o;
}

var ut = Qn;

function Xn(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}

var ddn = Xn;

var Yn = 1, $n = 2, Zn = "[object Boolean]", to = "[object Date]", no = "[object Error]", oo = "[object Map]", ro = "[object Number]", io = "[object RegExp]", so = "[object Set]", ao = "[object String]", uo = "[object Symbol]", co = "[object ArrayBuffer]", po = "[object DataView]", ct = JG ? JG.prototype : void 0, Z = ct ? ct.valueOf : void 0;

function fo(e, t, o, r, i, s, a) {
  switch (o) {
   case po:
    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
    e = e.buffer, t = t.buffer;

   case co:
    if (e.byteLength != t.byteLength || !s(new ldn(e), new ldn(t))) return !1;
    return !0;

   case Zn:
   case to:
   case ro:
    return xEe(+e, +t);

   case no:
    return e.name == t.name && e.message == t.message;

   case io:
   case ao:
    return e == t + "";

   case oo:
    var l = ut;

   case so:
    var d = r & Yn;
    if (l || (l = ddn), e.size != t.size && !d) return !1;
    var p = a.get(e);
    if (p) return p == t;
    r |= $n, a.set(e, t);
    var m = D(l(e), l(t), r, i, s, a);
    return a.delete(e), m;

   case uo:
    if (Z) return Z.call(e) == Z.call(t);
  }
  return !1;
}

var pt = fo;

function go(e, t) {
  var o = -1, r = t.length, i = e.length;
  while (++o < r) e[i + o] = t[o];
  return e;
}

var H$t = go;

var ho = Array.isArray, Hv = ho;

function mo(e, t, o) {
  var r = t(e);
  return Hv(e) ? r : H$t(r, o(e));
}

var IHr = mo;

function So(e, t) {
  var o = -1, r = e == null ? 0 : e.length, i = 0, s = [];
  while (++o < r) {
    var a = e[o];
    if (t(a, o, e)) s[i++] = a;
  }
  return s;
}

var OHr = So;

function vo() {
  return [];
}

var MHr = vo;

var yo = Object.prototype, bo = yo.propertyIsEnumerable, ft = Object.getOwnPropertySymbols, ko = !ft ? MHr : function(e) {
  if (e == null) return [];
  return e = Object(e), OHr(ft(e), function(t) {
    return bo.call(e, t);
  });
}, D$t = ko;

function Co(e, t) {
  var o = -1, r = Array(e);
  while (++o < e) r[o] = t(o);
  return r;
}

var gt = Co;

function xo(e) {
  return e != null && typeof e == "object";
}

var jG = xo;

var Ro = "[object Arguments]";

function Po(e) {
  return jG(e) && Aae(e) == Ro;
}

var ee = Po;

var ht = Object.prototype, {hasOwnProperty: Ao, propertyIsEnumerable: Mo} = ht, wo = ee(function() {
  return arguments;
}()) ? ee : function(e) {
  return jG(e) && Ao.call(e, "callee") && !Mo.call(e, "callee");
}, SJe = wo;

function Oo() {
  return !1;
}

var mt = Oo;

var yt = typeof U == "object" && U && !U.nodeType && U, St = yt && typeof H == "object" && H && !H.nodeType && H, Io = St && St.exports === yt, vt = Io ? ZU.Buffer : void 0, Fo = vt ? vt.isBuffer : void 0, Eo = Fo || mt, Nje = Eo;

var Do = 9007199254740991, Ho = /^(?:0|[1-9]\d*)$/;

function Bo(e, t) {
  var o = typeof e;
  return t = t == null ? Do : t, !!t && (o == "number" || o != "symbol" && Ho.test(e)) && (e > -1 && e % 1 == 0 && e < t);
}

var wJe = Bo;

var Uo = 9007199254740991;

function jo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uo;
}

var A = jo;

var _o = "[object Arguments]", qo = "[object Array]", Wo = "[object Boolean]", No = "[object Date]", Go = "[object Error]", Ko = "[object Function]", Vo = "[object Map]", Jo = "[object Number]", zo = "[object Object]", Qo = "[object RegExp]", Xo = "[object Set]", Yo = "[object String]", $o = "[object WeakMap]", Zo = "[object ArrayBuffer]", er = "[object DataView]", tr = "[object Float32Array]", nr = "[object Float64Array]", or = "[object Int8Array]", rr = "[object Int16Array]", ir = "[object Int32Array]", sr = "[object Uint8Array]", ar = "[object Uint8ClampedArray]", lr = "[object Uint16Array]", dr = "[object Uint32Array]", S = {};

S[tr] = S[nr] = S[or] = S[rr] = S[ir] = S[sr] = S[ar] = S[lr] = S[dr] = !0;

S[_o] = S[qo] = S[Zo] = S[Wo] = S[er] = S[No] = S[Go] = S[Ko] = S[Vo] = S[Jo] = S[zo] = S[Qo] = S[Xo] = S[Yo] = S[$o] = !1;

function ur(e) {
  return jG(e) && A(e.length) && !!S[Aae(e)];
}

var bt = ur;

function cr(e) {
  return function(t) {
    return e(t);
  };
}

var cdn = cr;

var kt = typeof _ == "object" && _ && !_.nodeType && _, L = kt && typeof j == "object" && j && !j.nodeType && j, pr = L && L.exports === kt, te = pr && n0r.process, fr = function() {
  try {
    var e = L && L.require && L.require("util").types;
    if (e) return e;
    return te && te.binding && te.binding("util");
  } catch (t) {}
}(), $je = fr;

var Ct = $je && $je.isTypedArray, gr = Ct ? cdn(Ct) : bt, udn = gr;

var hr = Object.prototype, mr = hr.hasOwnProperty;

function Sr(e, t) {
  var o = Hv(e), r = !o && SJe(e), i = !o && !r && Nje(e), s = !o && !r && !i && udn(e), a = o || r || i || s, l = a ? gt(e.length, String) : [], d = l.length;
  for (var p in e) if ((t || mr.call(e, p)) && !(a && (p == "length" || i && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || wJe(p, d)))) l.push(p);
  return l;
}

var HHr = Sr;

var vr = Object.prototype;

function yr(e) {
  var t = e && e.constructor, o = typeof t == "function" && t.prototype || vr;
  return e === o;
}

var L$t = yr;

function br(e, t) {
  return function(o) {
    return e(t(o));
  };
}

var DHr = br;

var kr = DHr(Object.keys, Object), xt = kr;

var Cr = Object.prototype, xr = Cr.hasOwnProperty;

function Rr(e) {
  if (!L$t(e)) return xt(e);
  var t = [];
  for (var o in Object(e)) if (xr.call(e, o) && o != "constructor") t.push(o);
  return t;
}

var Rt = Rr;

function Tr(e) {
  return e != null && A(e.length) && !fFt(e);
}

var yEe = Tr;

function Pr(e) {
  return yEe(e) ? HHr(e) : Rt(e);
}

var Rme = Pr;

function Ar(e) {
  return IHr(e, Rme, D$t);
}

var q4n = Ar;

var Mr = 1, wr = Object.prototype, Or = wr.hasOwnProperty;

function Fr(e, t, o, r, i, s) {
  var a = o & Mr, l = q4n(e), d = l.length, p = q4n(t), m = p.length;
  if (d != m && !a) return !1;
  var c = d;
  while (c--) {
    var f = l[c];
    if (!(a ? f in t : Or.call(t, f))) return !1;
  }
  var u = s.get(e), g = s.get(t);
  if (u && g) return u == t && g == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  var b = a;
  while (++c < d) {
    f = l[c];
    var C = e[f], x = t[f];
    if (r) var et = a ? r(x, C, f, t, e, s) : r(C, x, f, e, t, s);
    if (!(et === void 0 ? C === x || i(C, x, o, r, s) : et)) {
      v = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (v && !b) {
    var I = e.constructor, F = t.constructor;
    if (I != F && ("constructor" in e && "constructor" in t) && !(typeof I == "function" && I instanceof I && typeof F == "function" && F instanceof F)) v = !1;
  }
  return s.delete(e), s.delete(t), v;
}

var Tt = Fr;

var Er = Cae(ZU, "DataView"), W = Er;

var Dr = Cae(ZU, "Promise"), N = Dr;

var Hr = Cae(ZU, "Set"), Zgt = Hr;

var Br = Cae(ZU, "WeakMap"), G = Br;

var Pt = "[object Map]", Ur = "[object Object]", At = "[object Promise]", Mt = "[object Set]", wt = "[object WeakMap]", Lt = "[object DataView]", jr = GJe(W), _r = GJe(Tht), qr = GJe(N), Wr = GJe(Zgt), Gr = GJe(G), R = Aae;

if (W && R(new W(new ArrayBuffer(1))) != Lt || Tht && R(new Tht) != Pt || N && R(N.resolve()) != At || Zgt && R(new Zgt) != Mt || G && R(new G) != wt) R = function(e) {
  var t = Aae(e), o = t == Ur ? e.constructor : void 0, r = o ? GJe(o) : "";
  if (r) switch (r) {
   case jr:
    return Lt;

   case _r:
    return Pt;

   case qr:
    return At;

   case Wr:
    return Mt;

   case Gr:
    return wt;
  }
  return t;
};

var vJe = R;

var Kr = 1, Ot = "[object Arguments]", It = "[object Array]", V = "[object Object]", Vr = Object.prototype, Ft = Vr.hasOwnProperty;

function Jr(e, t, o, r, i, s) {
  var a = Hv(e), l = Hv(t), d = a ? It : vJe(e), p = l ? It : vJe(t);
  d = d == Ot ? V : d, p = p == Ot ? V : p;
  var m = d == V, c = p == V, f = d == p;
  if (f && Nje(e)) {
    if (!Nje(t)) return !1;
    a = !0, m = !1;
  }
  if (f && !m) return s || (s = new Lje), a || udn(e) ? D(e, t, o, r, i, s) : pt(e, t, d, o, r, i, s);
  if (!(o & Kr)) {
    var u = m && Ft.call(e, "__wrapped__"), g = c && Ft.call(t, "__wrapped__");
    if (u || g) {
      var v = u ? e.value() : e, b = g ? t.value() : t;
      return s || (s = new Lje), i(v, b, o, r, s);
    }
  }
  if (!f) return !1;
  return s || (s = new Lje), Tt(e, t, o, r, i, s);
}

var Et = Jr;

function Dt(e, t, o, r, i) {
  if (e === t) return !0;
  if (e == null || t == null || !jG(e) && !jG(t)) return e !== e && t !== t;
  return Et(e, t, o, r, Dt, i);
}

var M = Dt;

function zr(e, t) {
  return M(e, t);
}

var zn = zr;

var Xr = function() {
  try {
    var e = Cae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {}
}(), fdn = Xr;

function Yr(e, t, o) {
  if (t == "__proto__" && fdn) fdn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }); else e[t] = o;
}

var Jee = Yr;

function $r(e) {
  return function(t, o, r) {
    var i = -1, s = Object(t), a = r(t), l = a.length;
    while (l--) {
      var d = a[e ? l : ++i];
      if (o(s[d], d, s) === !1) break;
    }
    return t;
  };
}

var Ht = $r;

var Zr = Ht(), UHr = Zr;

function ei(e, t) {
  return e && UHr(e, t, Rme);
}

var $$t = ei;

var ti = 1, ni = 2;

function oi(e, t, o, r) {
  var i = o.length, s = i, a = !r;
  if (e == null) return !s;
  e = Object(e);
  while (i--) {
    var l = o[i];
    if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  while (++i < s) {
    l = o[i];
    var d = l[0], p = e[d], m = l[1];
    if (a && l[2]) {
      if (p === void 0 && !(d in e)) return !1;
    } else {
      var c = new Lje;
      if (r) var f = r(p, m, d, e, t, c);
      if (!(f === void 0 ? M(m, p, ti | ni, r, c) : f)) return !1;
    }
  }
  return !0;
}

var Bt = oi;

function ri(e) {
  return e === e && !vT(e);
}

var J = ri;

function ii(e) {
  var t = Rme(e), o = t.length;
  while (o--) {
    var r = t[o], i = e[r];
    t[o] = [ r, i, J(i) ];
  }
  return t;
}

var Ut = ii;

function si(e, t) {
  return function(o) {
    if (o == null) return !1;
    return o[e] === t && (t !== void 0 || e in Object(o));
  };
}

var Q = si;

function ai(e) {
  var t = Ut(e);
  if (t.length == 1 && t[0][2]) return Q(t[0][0], t[0][1]);
  return function(o) {
    return o === e || Bt(o, e, t);
  };
}

var jt = ai;

var li = "[object Symbol]";

function ui(e) {
  return typeof e == "symbol" || jG(e) && Aae(e) == li;
}

var hae = ui;

var ci = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pi = /^\w*$/;

function fi(e, t) {
  if (Hv(e)) return !1;
  var o = typeof e;
  if (o == "number" || o == "symbol" || o == "boolean" || e == null || hae(e)) return !0;
  return pi.test(e) || !ci.test(e) || t != null && e in Object(t);
}

var w = fi;

var gi = 500;

function hi(e) {
  var t = lo(e, function(r) {
    if (o.size === gi) o.clear();
    return r;
  }), o = t.cache;
  return t;
}

var _t = hi;

var mi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Si = /\\(\\)?/g, vi = _t(function(e) {
  var t = [];
  if (e.charCodeAt(0) === 46) t.push("");
  return e.replace(mi, function(o, r, i, s) {
    t.push(i ? s.replace(Si, "$1") : r || o);
  }), t;
}), qt = vi;

function yi(e, t) {
  var o = -1, r = e == null ? 0 : e.length, i = Array(r);
  while (++o < r) i[o] = t(e[o], o, e);
  return i;
}

var Fje = yi;

var bi = 1 / 0, Wt = JG ? JG.prototype : void 0, Nt = Wt ? Wt.toString : void 0;

function Gt(e) {
  if (typeof e == "string") return e;
  if (Hv(e)) return Fje(e, Gt) + "";
  if (hae(e)) return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bi ? "-0" : t;
}

var Kt = Gt;

function ki(e) {
  return e == null ? "" : Kt(e);
}

var xme = ki;

function Ci(e, t) {
  if (Hv(e)) return e;
  return w(e, t) ? [ e ] : qt(xme(e));
}

var Pme = Ci;

var xi = 1 / 0;

function Ri(e) {
  if (typeof e == "string" || hae(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -xi ? "-0" : t;
}

var yae = Ri;

function Ti(e, t) {
  t = Pme(t, e);
  var o = 0, r = t.length;
  while (e != null && o < r) e = e[yae(t[o++])];
  return o && o == r ? e : void 0;
}

var kJe = Ti;

function Pi(e, t, o) {
  var r = e == null ? void 0 : kJe(e, t);
  return r === void 0 ? o : r;
}

var BHr = Pi;

function Ai(e, t) {
  return e != null && t in Object(e);
}

var Jt = Ai;

function Mi(e, t, o) {
  t = Pme(t, e);
  var r = -1, i = t.length, s = !1;
  while (++r < i) {
    var a = yae(t[r]);
    if (!(s = e != null && o(e, a))) break;
    e = e[a];
  }
  if (s || ++r != i) return s;
  return i = e == null ? 0 : e.length, !!i && A(i) && wJe(a, i) && (Hv(e) || SJe(e));
}

var zt = Mi;

function wi(e, t) {
  return e != null && zt(e, t, Jt);
}

var jHr = wi;

var Li = 1, Oi = 2;

function Ii(e, t) {
  if (w(e) && J(t)) return Q(yae(e), t);
  return function(o) {
    var r = BHr(o, e);
    return r === void 0 && r === t ? jHr(o, e) : M(t, r, Li | Oi);
  };
}

var Qt = Ii;

function Fi(e) {
  return e;
}

var TJe = Fi;

function Ei(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}

var Xt = Ei;

function Di(e) {
  return function(t) {
    return kJe(t, e);
  };
}

var Yt = Di;

function Hi(e) {
  return w(e) ? Xt(yae(e)) : Yt(e);
}

var $t = Hi;

function Bi(e) {
  if (typeof e == "function") return e;
  if (e == null) return TJe;
  if (typeof e == "object") return Hv(e) ? Qt(e[0], e[1]) : jt(e);
  return $t(e);
}

var qU = Bi;

function Ui(e, t) {
  var o = {};
  return t = qU(t, 3), $$t(e, function(r, i, s) {
    Jee(o, i, t(r, i, s));
  }), o;
}

var eo = Ui;

import { homedir as Ji } from "os";

import { resolve as bn, sep as yn } from "path";

import { randomUUID as hEe } from "crypto";

import { randomUUID as ji } from "crypto";

var ne = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";

function V4n(e) {
  return XG(e.trim(), ne);
}

function K4n() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? XG(e, ne) : null;
}

function hDo(e) {
  if (e.toLowerCase().endsWith(".jsonl")) return {
    sessionId: ji(),
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: e,
    isJsonlFile: !0
  };
  if (Vt(e)) return {
    sessionId: e,
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: null,
    isJsonlFile: !1
  };
  try {
    let t = new URL(e);
    return {
      sessionId: K4n() ?? XG(t.href, ne),
      ingressUrl: t.href,
      isUrl: !0,
      jsonlFile: null,
      isJsonlFile: !1
    };
  } catch {}
  return null;
}

import { basename as qi, dirname as en } from "path";

class K {
  #e;
  #t=new WeakMap;
  constructor(e) {
    this.#e = e;
  }
  of(e) {
    let t = this.#t.get(e);
    if (t !== void 0) return t;
    let o = this.#e();
    return this.#t.set(e, o), o;
  }
}

function vI(e) {
  return {
    subscribe(t) {
      return e().subscribe(t);
    },
    emit(...t) {
      e().emit(...t);
    },
    clear() {
      e().clear();
    }
  };
}

class oe {
  walked=new Map;
  folderIsLink=new Map;
  managedMcp=null;
  clearWalk() {
    this.walked.clear(), this.folderIsLink.clear();
  }
  noteWalked(e, t) {
    if (!this.walked.has(e)) this.walked.set(e, t());
  }
  isLinked(e) {
    return (this.walked.get(e) ?? null) !== null;
  }
  all() {
    return [ ...this.walked.values(), this.managedMcp ].filter(e => e !== null);
  }
}

var zUs = [ "not_admin_owned", "other_writable", "group_writable", "symlinked", "unknown", "not_evaluated", "protected" ];

function GUs({file: e, folder: t, linked: o, posix: r}) {
  if (!r) return "not_evaluated";
  if (e === void 0 || t === void 0) return o ? "symlinked" : "unknown";
  if (e.uid !== 0 || t.uid !== 0) return "not_admin_owned";
  let i = e.mode | t.mode;
  if ((i & 2) !== 0) return "other_writable";
  if ((i & 16) !== 0) return "group_writable";
  return o ? "symlinked" : "protected";
}

class re {
  documents=new Map;
  folderOwners=new Map;
  setsOrgPin=!1;
  clear() {
    this.documents.clear(), this.folderOwners.clear(), this.setsOrgPin = !1;
  }
  note(e, t) {
    this.documents.set(e, t);
  }
  all() {
    return [ ...this.documents ];
  }
}

class ie {
  holders=0;
  tiers;
  baseline;
  lingering;
  tier(e) {
    if (this.holders === 0 && this.lingering !== void 0) {
      let t = this.lingering();
      if (t === void 0) this.lingering = void 0;
      this.tiers = t;
    }
    return this.tiers?.get(e);
  }
  engage(e, t) {
    let o;
    if (this.holders === 0) {
      let i = e(), s = t?.() ?? i;
      if (this.lingering !== void 0) o = {
        tiers: this.tiers,
        lingering: this.lingering
      }, this.lingering = void 0;
      this.tiers = i, this.baseline = s;
    }
    this.holders++;
    let r = !1;
    return {
      release: () => {
        if (r) return {
          last: !1
        };
        if (r = !0, this.holders--, this.holders > 0) return {
          last: !1
        };
        return this.tiers = void 0, this.lingering = void 0, this.baseline = void 0, {
          last: !0
        };
      },
      abandon: () => {
        if (r) return;
        if (r = !0, this.holders--, this.holders === 0) this.tiers = o?.tiers, this.lingering = o?.lingering, 
        this.baseline = void 0;
      }
    };
  }
  whileLive(e) {
    let t = this.tiers, o = this.lingering;
    this.tiers = void 0, this.lingering = void 0;
    try {
      return e();
    } finally {
      this.tiers = t, this.lingering = o;
    }
  }
  baselineTier(e) {
    return this.baseline?.get(e);
  }
  differingTiers(e) {
    return this.baseline === void 0 ? [] : _i(this.baseline, e);
  }
  rebaseline(e, t) {
    if (this.baseline === void 0) return;
    let o = new Map(this.baseline);
    for (let r of t) {
      let i = e.get(r);
      if (i === void 0) o.delete(r); else o.set(r, i);
    }
    this.baseline = o;
  }
  linger(e, t) {
    if (this.holders === 0) this.tiers = e, this.lingering = t, this.baseline = void 0;
  }
  isHeld() {
    return this.holders > 0;
  }
}

function N$t(e) {
  return e !== null && Object.keys(e).length === 0 ? null : e;
}

function Zt(e) {
  return {
    ...e,
    settings: N$t(e.settings),
    unfiltered: N$t(e.unfiltered),
    ...e.legacy !== void 0 && {
      legacy: N$t(e.legacy)
    }
  };
}

function _i(e, t) {
  return [ ...e.keys(), ...[ ...t.keys() ].filter(o => !e.has(o)) ].filter(o => {
    let r = e.get(o), i = t.get(o);
    return !zn(r && Zt(r), i && Zt(i));
  });
}

class EJe {
  mergedSettings=null;
  perSource=new Map;
  parsedFiles=new Map;
  managedDocumentLinks=new oe;
  managedFileProtections=new re;
  folderListings=new Map;
  managedFileReads=new Map;
  primedFiles=new Set;
  policyWalks=0;
  walkedFolders=new Map;
  policy={};
  lastPolicyEnvComposition=null;
  isLoadingFromDisk=!1;
  autoModeUntrustedSourceWarned=!1;
  changed=Me();
  internalWrites=new Map;
  enabledSources;
  inlineFlagParse;
  repoTierFreeze=new ie;
  pluginBase;
  epoch=0;
  systemSpaceServingLogged=!1;
  systemAttestationContradicted=!1;
  backendReadResetTail=Promise.resolve();
  backgroundWorkTail=Promise.resolve();
  invalidated=Me();
  pluginBaseLoaded=!1;
  primer;
  localStoreProbes=new tn;
  retained=new Map;
  retainedListings=new Map;
  setPluginBase(e) {
    this.pluginBase = e, this.pluginBaseLoaded = !0;
  }
  clearPluginBase() {
    this.pluginBase = void 0;
  }
  invalidateAll(e) {
    if (this.epoch++, this.mergedSettings = null, this.perSource.clear(), this.parsedFiles.clear(), 
    this.managedDocumentLinks.clearWalk(), this.managedFileProtections.clear(), this.primedFiles.clear(), 
    this.policyWalks = 0, this.walkedFolders.clear(), this.folderListings.clear(), this.policy = {}, 
    e?.userLayer === "retain" && z() && this.primer !== void 0) {
      for (let [t, o] of this.retained) this.parsedFiles.set(t, o.parsed), this.primedFiles.add(t);
      for (let [t, o] of this.retainedListings) this.folderListings.set(t, o.names);
    } else this.retained.clear(), this.retainedListings.clear();
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    this.mergedSettings = null, this.perSource.delete("policySettings"), this.policy = {};
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(e, t, o, r) {
    if (r !== this.epoch) return !1;
    let i = this.parsedFiles.get(e), s = i !== void 0 && se(i, o), a = !s, l = s ? i : o;
    if (this.parsedFiles.set(e, l), a || this.primedFiles.has(e)) this.primedFiles.add(e);
    let d = this.retained.get(e);
    if (d !== void 0) d.parsed = l;
    if (a) this.dropDerivedCaches(t);
    return !0;
  }
  walkReadDiffers(e, t) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !zn(o, t);
  }
  unseedParsedFile(e, t, o) {
    if (o !== this.epoch) return;
    if (this.retained.delete(e), !this.primedFiles.has(e) || t === "policySettings" && this.policyWalks > 0) return;
    this.primedFiles.delete(e), this.parsedFiles.delete(e), this.dropDerivedCaches(t);
  }
  dropDerivedCaches(e) {
    if (this.perSource.delete(e), this.mergedSettings = null, e === "policySettings") this.policy = {};
  }
  primedFolderListing(e) {
    return z() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!z()) return;
    this.policyWalks++;
    let t = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || t !== void 0) this.walkedFolders.set(e, t ?? null);
    return t;
  }
  noteWalkListing(e, t) {
    if (!z()) return;
    this.walkedFolders.set(e, t);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, t, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || se(r, t)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, t, o) {
    if (!this.walkedFolders.has(e)) return this.hasParsedDropInOutside(e, t) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && zn(r, t)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, t, o) {
    if (o !== this.epoch) return !1;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, t);
    let i = this.retainedListings.get(e);
    if (i !== void 0) i.names = t;
    if (r !== void 0 && !zn(r, t)) this.dropDerivedCaches("policySettings");
    return !0;
  }
  walkReadManagedFileIn(e, t) {
    for (let [o, r] of this.parsedFiles) if (!o.includes("\0") && !this.primedFiles.has(o) && (r.settings !== null || r.errors.length > 0) && (o === e || en(o) === t)) return !0;
    return !1;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, t) {
    for (let o of this.parsedFiles.keys()) if (!o.includes("\0") && !this.primedFiles.has(o) && en(o) === e && !t.includes(qi(o))) return !0;
    return !1;
  }
  clearFolderListing(e, t) {
    if (t !== this.epoch) return;
    if (this.retainedListings.delete(e), !this.folderListings.has(e) || this.walkedFolders.has(e)) return;
    this.folderListings.delete(e), this.dropDerivedCaches("policySettings");
  }
  retainLayer(e, t) {
    let o = this.parsedFiles.get(e), r = {
      parsed: o !== void 0 && se(o, t) ? o : t
    };
    return this.retained.set(e, r), () => {
      if (this.retained.get(e) === r) this.retained.delete(e);
    };
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, t) {
    let o = {
      names: t
    };
    return this.retainedListings.set(e, o), () => {
      if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
    };
  }
}

class tn {
  ownerUidsByRoot=new Map;
  realHomeDir=void 0;
  canonicalRootOwnerUids(e, t) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = t(e);
    return this.ownerUidsByRoot.set(e, r), r;
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, t) {
    if (this.ownerUidsByRoot.has(e)) return !1;
    return this.ownerUidsByRoot.set(e, t), !0;
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return this.realHomeDir ??= e(), this.realHomeDir;
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}

var LHr = new K(() => new EJe);

function se(e, t) {
  return zn({
    ...e,
    fileOwner: void 0
  }, {
    ...t,
    fileOwner: void 0
  });
}

function Xee() {
  return {
    sent: new Set,
    rejected: new Set,
    declaredTools: void 0,
    noChannelTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set,
    surfacedOnWire: new Set,
    definedByValue: new Set,
    inlineToolsRefusal: {
      rejectedHeader: void 0,
      announcementsByName: new Set
    },
    advisorHeld: void 0,
    wireShapeSeed: void 0,
    webSearchHistoryRejected: !1,
    mediaItemCap: void 0,
    systemMessagesAcceptedBy: new Set,
    nameOnlyEntries: {
      held: new Set,
      refused: !1,
      reported: void 0
    }
  };
}

function kA(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: void 0,
    noChannelTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}

function eht(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: e.declaredTools,
    noChannelTools: e.noChannelTools,
    declaredToolsDecided: e.declaredToolsDecided,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}

function Y4n(e) {
  yDo(e), e.nameOnlyEntries.held.clear(), e.nameOnlyEntries.refused = !1, e.nameOnlyEntries.reported = void 0;
}

function yDo(e) {
  e.declaredTools = void 0, e.noChannelTools = void 0, e.declaredToolsDecided = !1;
}

function tht(e) {
  e.systemMessagesAcceptedBy.clear();
  let t = e.wireShapeSeed;
  if (t === void 0) return;
  for (let o of t.sent) e.sent.delete(o);
  for (let o of t.rejected) e.rejected.delete(o);
  e.wireShapeSeed = void 0;
}

function _Do(e, t) {
  for (let o of t.sent) fL(e, o);
  for (let o of t.rejected) dg(e, o);
  e.wireShapeSeed = t;
}

function nht(e) {
  e.advisorHeld = void 0;
}

function X4n(e) {
  let {rejectedHeader: t, announcementsByName: o} = e.inlineToolsRefusal;
  if (t !== void 0) e.rejected.delete(t), e.inlineToolsRefusal.rejectedHeader = void 0;
  for (let r of o) e.nameOnlyAnnouncements.delete(r);
  o.clear();
}

function VUs(e) {
  return e.advisorHeld = void 0, e;
}

function rht(e) {
  e.declaredToolsDecided = !0;
}

function X(e) {
  let t = Xee();
  if (t.declaredTools = e.declaredTools, t.noChannelTools = e.noChannelTools, t.declaredToolsDecided = e.declaredToolsDecided, 
  t.advisorHeld = e.advisorHeld, e.wireShapeSeed !== void 0) _Do(t, e.wireShapeSeed);
  let {rejectedHeader: o, announcementsByName: r} = e.inlineToolsRefusal;
  if (o !== void 0) bDo(t, o);
  return SDo(t, r), t.webSearchHistoryRejected = e.webSearchHistoryRejected, t.mediaItemCap = e.mediaItemCap, 
  t.nameOnlyEntries.refused = e.nameOnlyEntries.refused, t.nameOnlyEntries.reported = e.nameOnlyEntries.reported, 
  t;
}

function bDo(e, t) {
  dg(e, t), e.inlineToolsRefusal.rejectedHeader = t;
}

function SDo(e, t) {
  for (let o of t) e.inlineToolsRefusal.announcementsByName.add(o), e.nameOnlyAnnouncements.add(o);
}

function pdn(e, t) {
  if (e.declaredTools === void 0) e.declaredTools = t;
  rht(e);
}

function J4n(e) {
  return e.definedByValue.size === 0 ? e.surfacedOnWire : new Set([ ...e.surfacedOnWire, ...e.definedByValue ]);
}

function fL(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}

function xb(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}

function dg(e, t) {
  e.sent.delete(t), e.rejected.add(t);
}

function em(e, t) {
  return e.rejected.has(t);
}

function NHr(e, t) {
  e.sent.delete(t), e.rejected.delete(t);
}

function KUs(e) {
  e.webSearchHistoryRejected = !0;
}

function Q4n(e) {
  e.webSearchHistoryRejected = !1;
}

function $Hr(e, t) {
  return e.mediaItemCap?.model === t ? e.mediaItemCap : void 0;
}

function FHr(e, t) {
  e.mediaItemCap = t;
}

function oht(e) {
  e.mediaItemCap = void 0;
}

class ae {
  spawner=void 0;
  pairings=new Map;
  mainEnsureInFlight=!1;
  mainSlotBlocked=!1;
}

class le {
  #e=Xee();
  #t=void 0;
  #n;
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = X(this.#e);
  }
  atisLatch() {
    return this.#t;
  }
  replaceAtisLatch(e) {
    this.#t = e, this.#n?.(e);
  }
  watchAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    this.#e = Xee(), this.#t = void 0;
  }
}

function Wi(e, t) {
  var o, r = -1, i = e.length;
  while (++r < i) {
    var s = t(e[r]);
    if (s !== void 0) o = o === void 0 ? s : o + s;
  }
  return o;
}

var nn = Wi;

function Ni(e, t) {
  return e && e.length ? nn(e, qU(t, 2)) : 0;
}

var u6 = Ni;

var on = {
  inputTokens: 0,
  outputTokens: 0,
  cacheReadInputTokens: 0,
  cacheCreationInputTokens: 0
};

function Y(e) {
  let t = Object.create(null);
  return Object.assign(t, e);
}

class de {
  #e=0;
  #t=0;
  #n=0;
  #o=0;
  #r=Date.now();
  #i=void 0;
  #a=0;
  #u=0;
  #l=0;
  #d=on;
  #c=!1;
  #p=0;
  #s=Y();
  #f=null;
  #h=null;
  #g=null;
  totalCostUSD() {
    return this.#e;
  }
  restoredCostUSD() {
    return this.#l;
  }
  restoredTokens() {
    return this.#d;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#o;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#r);
  }
  sessionStartTime() {
    return this.#i ?? this.#r;
  }
  totalLinesAdded() {
    return this.#a;
  }
  totalLinesRemoved() {
    return this.#u;
  }
  hasUnknownModelCost() {
    return this.#c;
  }
  safetyStops() {
    return this.#p;
  }
  modelUsage() {
    return this.#s;
  }
  usageForModel(e) {
    return this.#s[e];
  }
  totalInputTokens() {
    return u6(Object.values(this.#s), "inputTokens");
  }
  totalOutputTokens() {
    return u6(Object.values(this.#s), "outputTokens");
  }
  totalCacheReadInputTokens() {
    return u6(Object.values(this.#s), "cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return u6(Object.values(this.#s), "cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return u6(Object.values(this.#s), "webSearchRequests");
  }
  recordApiDuration(e, t) {
    this.#t += e, this.#n += t;
  }
  recordCost(e, t, o) {
    this.#s[o] = t, this.#e += e;
  }
  recordToolDuration(e) {
    this.#o += e;
  }
  recordLinesChanged(e, t) {
    this.#a += e, this.#u += t;
  }
  markUnknownModelCost() {
    this.#c = !0;
  }
  recordSafetyStop() {
    this.#p += 1;
  }
  zeroDurationsAndCostForTests() {
    this.#t = 0, this.#n = 0, this.#e = 0, this.#l = 0;
  }
  restartClock() {
    this.#r = Date.now(), this.anchorLogicalStart(void 0);
  }
  anchorLogicalStart(e) {
    this.#i = e === void 0 ? void 0 : Math.min(e, this.#r);
  }
  restore({totalCostUSD: e, totalAPIDuration: t, totalAPIDurationWithoutRetries: o, totalToolDuration: r, totalLinesAdded: i, totalLinesRemoved: s, lastDuration: a, startTime: l, modelUsage: d, hasUnknownModelCost: p}, m) {
    if (this.#g = m, this.#e = e, this.#l = e, this.#t = t, this.#n = o, this.#o = r, 
    this.#a = i, this.#u = s, this.#c = p ?? !1, d) this.#s = Y(d);
    if (this.#d = {
      inputTokens: this.totalInputTokens(),
      outputTokens: this.totalOutputTokens(),
      cacheReadInputTokens: this.totalCacheReadInputTokens(),
      cacheCreationInputTokens: this.totalCacheCreationInputTokens()
    }, a !== void 0) this.#r = Date.now() - a;
    this.anchorLogicalStart(l);
  }
  registerSaver(e) {
    this.#f = e;
  }
  runSaver(e, t) {
    (this.#f ?? (t ? t.#f : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#h = e;
  }
  runTranscriptRecorder(e, t, o) {
    (this.#h ?? (o ? o.#h : null))?.(e, t);
  }
  snapshot() {
    return {
      ownerSessionId: this.#g,
      totalCostUSD: this.#e,
      totalAPIDuration: this.#t,
      totalAPIDurationWithoutRetries: this.#n,
      totalToolDuration: this.#o,
      startTime: this.#r,
      sessionLogicalStartTime: this.#i,
      totalLinesAdded: this.#a,
      totalLinesRemoved: this.#u,
      restoredCostUSD: this.#l,
      restoredTokens: this.#d,
      hasUnknownModelCost: this.#c,
      safetyStops: this.#p,
      modelUsage: eo(this.#s, e => ({
        ...e
      }))
    };
  }
  restoreSnapshot(e) {
    this.#g = e.ownerSessionId, this.#e = e.totalCostUSD, this.#t = e.totalAPIDuration, 
    this.#n = e.totalAPIDurationWithoutRetries, this.#o = e.totalToolDuration, this.#r = e.startTime, 
    this.#i = e.sessionLogicalStartTime, this.#a = e.totalLinesAdded, this.#u = e.totalLinesRemoved, 
    this.#l = e.restoredCostUSD, this.#d = e.restoredTokens, this.#c = e.hasUnknownModelCost, 
    this.#p = e.safetyStops, this.#s = Y(eo(e.modelUsage, t => ({
      ...t
    })));
  }
  claim(e) {
    this.#g ??= e;
  }
  scopeTo(e) {
    this.#g = e;
  }
  ownerSessionId() {
    return this.#g;
  }
  belongsTo(e) {
    return this.#g === e;
  }
  reset(e) {
    this.#g = e, this.#e = 0, this.#l = 0, this.#d = on, this.#t = 0, this.#n = 0, this.#o = 0, 
    this.#r = Date.now(), this.anchorLogicalStart(void 0), this.#a = 0, this.#u = 0, 
    this.#c = !1, this.#p = 0, this.#s = Y();
  }
}

class ue {
  #e=new Set;
  #t=new Map;
  consentSessionFallback(e) {
    return this.#e.has(e);
  }
  replaceConsentSessionFallback(e, t) {
    if (t) this.#e.add(e); else this.#e.delete(e);
  }
  sessionConsentKey(e) {
    return this.#t.get(e) ?? null;
  }
  replaceSessionConsentKey(e, t) {
    if (t === null) this.#t.delete(e); else this.#t.set(e, t);
  }
  reset() {
    this.#e.clear(), this.#t.clear();
  }
}

class ce {
  #e={
    registeredHooks: null
  };
  #t=void 0;
  #n=void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    this.#e = {
      registeredHooks: null
    }, this.#t = void 0, this.#n = void 0;
  }
}

class pe {
  #e=new Map;
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = new Map;
  }
}

class fe {
  #e=[];
  #t;
  #n;
  #o;
  #r;
  approvedServers() {
    return this.#e;
  }
  approveServers(e, t) {
    for (let o of t) if (!this.#e.some(r => r.name === o && r.workspaceKey === e)) this.#e.push({
      name: o,
      workspaceKey: e
    });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {};
    return this.#t = e, () => {
      if (this.#t === e) this.#t = void 0;
    };
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerConnectedClientWiring(e) {
    this.#n = e;
  }
  connectedClientWiring() {
    return this.#n;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {};
    return this.#o = e, () => {
      if (this.#o === e) this.#o = void 0;
    };
  }
  swapServerTools(e, t, o) {
    if (!this.#o) return !1;
    return this.#o(e, t, o);
  }
  registerConnections(e) {
    this.#r = e;
  }
  acquireConnections(e) {
    if (this.#r) return () => {};
    return this.#r = e, () => {
      if (this.#r === e) this.#r = void 0;
    };
  }
  connections() {
    return this.#r;
  }
  reset() {
    this.#e = [], this.#t = void 0;
  }
}

class ge {
  #e=void 0;
  #t=void 0;
  #n=void 0;
  #o=void 0;
  #r=void 0;
  #i=void 0;
  #a=!1;
  #u=!1;
  #l=void 0;
  #d=!1;
  #c=void 0;
  #p=void 0;
  #s=void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#o;
  }
  replaceInitialModelSettingLayer(e) {
    this.#o = e;
  }
  resolvedOrgDefault() {
    return this.#r;
  }
  replaceResolvedOrgDefault(e) {
    this.#r = e;
  }
  initialEnvDefaultModel() {
    return this.#i;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#i = e;
  }
  refusalFallbackOccurred() {
    return this.#a;
  }
  markRefusalFallbackOccurred(e) {
    this.#a = !0, this.#l ??= e;
  }
  refusalFallbackHeaderArmed() {
    return this.#u;
  }
  armRefusalFallbackHeader(e) {
    this.#u = !0, this.#l ??= e;
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#l;
  }
  silentLaneServerArmed() {
    return this.#d;
  }
  armSilentLaneFromServer() {
    this.#d = !0;
  }
  forgetRefusalFallbackOccurred() {
    this.#a = !1, this.#u = !1, this.#d = !1, this.#l = void 0;
  }
  refusalFallbackModelLatch() {
    return this.#c;
  }
  replaceRefusalFallbackModelLatch(e, t = "superseded") {
    if (this.#c?.carriedEffort !== void 0 && e?.carriedEffort === void 0) this.#p = t;
    this.#c = e;
  }
  unlatchRefusalFallbackModel(e) {
    this.replaceRefusalFallbackModelLatch(void 0, e);
  }
  takeCarriedEffortEnd() {
    let e = this.#p;
    return this.#p = void 0, e;
  }
  availabilityFallbackChain() {
    return this.#s;
  }
  replaceAvailabilityFallbackChain(e) {
    this.#s = e;
  }
  reset() {
    this.#e = void 0, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, 
    this.#i = void 0, this.#a = !1, this.#u = !1, this.#d = !1, this.#l = void 0, this.#c = void 0, 
    this.#p = void 0, this.#s = void 0;
  }
}

class me {
  #e=new Map;
  #t=0;
  #n=void 0;
  sections() {
    return this.#e;
  }
  recordSection(e, t) {
    this.#e.set(e, t);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    this.#t += 1, this.#n = e;
  }
  epoch() {
    return this.#t;
  }
  lastInvalidationReason() {
    return this.#n;
  }
  reset() {
    this.#e = new Map;
  }
}

class Se {
  #e=null;
  #t=null;
  #n=null;
  #o=null;
  #r=null;
  #i=0;
  #a=null;
  #u=void 0;
  #l=0;
  #d=null;
  #c=null;
  #p=null;
  #s=null;
  #f=null;
  #h=!1;
  #g=null;
  #v=null;
  #S=!1;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#o;
  }
  replaceLastClassifierRequests(e) {
    this.#o = e;
  }
  promptId() {
    return this.#r;
  }
  replacePromptId(e) {
    this.#r = e;
  }
  promptIndex() {
    return this.#i;
  }
  replacePromptIndex(e) {
    this.#i = e;
  }
  incrementPromptIndex() {
    return this.#i++, this.#i;
  }
  lastPersonPrompt() {
    return this.#a;
  }
  replaceLastPersonPrompt(e) {
    this.#a = e;
  }
  lastMainRequestId() {
    return this.#u;
  }
  replaceLastMainRequestId(e) {
    if (this.#u = e, e === void 0) this.#l += 1;
  }
  mainChainReleaseCount() {
    return this.#l;
  }
  lastMainThreadCacheTtlMs() {
    return this.#d;
  }
  replaceLastMainThreadCacheTtlMs(e, t, o = !1) {
    this.#d = e, this.#s = Date.now(), this.#p = {
      ttlMs: e,
      model: t,
      requestAt: this.#s,
      askedAt: o ? this.#p?.askedAt ?? this.#s : this.#s
    }, this.#f = this.#s, this.#h = !0;
  }
  isLastMainThreadAskLive(e, t) {
    let o = this.#p;
    return o !== null && o.requestAt === this.#s && o.ttlMs === e && o.model === t && Date.now() - o.askedAt < e;
  }
  adjustLastMainThreadCacheTtlMs(e) {
    this.#d = e;
  }
  recordLastMainThreadCacheRenewal(e) {
    if (this.#s !== null) this.#c = {
      requestAt: this.#s,
      at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -1 / 0)
    };
  }
  lastMainThreadCacheRenewedAt() {
    let e = this.#c;
    return e !== null && e.requestAt === this.#s ? e.at : null;
  }
  lastLiveMainThreadRequestAt() {
    return this.#f;
  }
  lastMainThreadRequestAt() {
    return this.#s;
  }
  mainThreadRequestedInProcess() {
    return this.#h;
  }
  recordMainThreadTurnStart() {
    this.#h = !0;
  }
  replaceLastMainThreadRequest(e, t) {
    this.#s = e, this.#d = t;
  }
  lastMainThreadContextTokens() {
    return this.#g;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#g = e;
  }
  stageResumeSeed(e) {
    this.#m = e;
  }
  applyResumeSeed(e) {
    this.#m = null, this.#d = e.ttlMs, this.#s = e.requestAt, this.#g = e.contextTokens;
  }
  #m=null;
  clearLastMainThreadRequest(e) {
    let t = e !== void 0 && this.#m?.sessionId === e ? this.#m : null;
    this.#m = null, this.#d = t?.ttlMs ?? null, this.#s = t?.requestAt ?? null, this.#g = t?.contextTokens ?? null, 
    this.#f = null, this.#h = !1;
  }
  lastApiCompletionTimestamp() {
    return this.#v;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#v = e;
  }
  pendingPostCompaction() {
    return this.#S;
  }
  replacePendingPostCompaction(e) {
    this.#S = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, 
    this.#i = 0, this.#a = null, this.#u = void 0, this.#l += 1, this.#d = null, this.#s = null, 
    this.#f = null, this.#h = !1, this.#g = null, this.#m = null, this.#v = null, this.#S = !1;
  }
}

class ye {
  #e=[];
  #t=Object.create(null);
  #n=null;
  #o=0;
  #r=!1;
  #i=0;
  changed=Me();
  pendingLoopWakeup=Me();
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, t) {
    this.#t[e] = t;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  replaceTickInFlightPrompt(e) {
    this.#n = e;
  }
  consecutiveKeepalives() {
    return this.#o;
  }
  replaceConsecutiveKeepalives(e) {
    this.#o = e;
  }
  ended() {
    return this.#r;
  }
  replaceEnded(e) {
    this.#r = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    this.#e = [], this.#t = Object.create(null), this.#n = null, this.#o = 0, this.#r = !1, 
    this.#i = 0;
  }
}

class be {
  #e=!1;
  #t=!1;
  #n=!1;
  #o=!1;
  #r=!1;
  #i=!1;
  #a=!1;
  #u=!1;
  #l=!1;
  #d=!1;
  #c=void 0;
  #p=!1;
  #s=void 0;
  #f=!1;
  #h=!1;
  #g=null;
  #v=null;
  #S=null;
  #m=!1;
  #C=null;
  #b=!1;
  #y=!1;
  #R=!1;
  #k=!1;
  #T=!1;
  #x=void 0;
  #A=void 0;
  #M=void 0;
  #P=null;
  #w=null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#o;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#o = e;
  }
  hasExitedPlanMode() {
    return this.#r;
  }
  replaceHasExitedPlanMode(e) {
    this.#r = e;
  }
  needsPlanModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#i = e;
  }
  needsAutoModeExitAttachment() {
    return this.#a;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#a = e;
  }
  memoryToggledOff() {
    return this.#u;
  }
  replaceMemoryToggledOff(e) {
    this.#u = e;
  }
  autoMemoryOffThisSession() {
    return this.#l;
  }
  replaceAutoMemoryOffThisSession(e) {
    this.#l = e;
  }
  accountMemorySessionMode() {
    return this.#c;
  }
  replaceAccountMemorySessionMode(e, t = !1) {
    this.#c = e, this.#p = t && e !== void 0;
  }
  accountMemorySessionModeRestored() {
    return this.#p;
  }
  accountMemoryLaunchMode() {
    return this.#s;
  }
  replaceAccountMemoryLaunchMode(e) {
    this.#s = e;
  }
  restoredMemoryPause() {
    return this.#f;
  }
  replaceRestoredMemoryPause(e) {
    this.#f = e;
  }
  restoredAutoMemoryOff() {
    return this.#d;
  }
  replaceRestoredAutoMemoryOff(e) {
    this.#d = e;
  }
  teardownUnwindRequested() {
    return this.#m;
  }
  replaceTeardownUnwindRequested(e) {
    this.#m = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#h;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#h = e;
  }
  deferredToolStubGateLatch() {
    return this.#g;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#g = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#v;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#v = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#S;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#S = e;
  }
  memoryToolsShapeLatch() {
    return this.#C;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#C = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#b;
  }
  markProposeGoalAvailabilityLogged() {
    this.#b = !0;
  }
  activeRoutine() {
    return this.#A;
  }
  replaceActiveRoutine(e) {
    this.#A = e;
  }
  inheritedTeamName() {
    return this.#M;
  }
  replaceInheritedTeamName(e) {
    this.#M = e;
  }
  teleportedSessionInfo() {
    return this.#P;
  }
  replaceTeleportedSessionInfo(e) {
    this.#P = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#P) this.#P.hasLoggedFirstMessage = !0;
  }
  cachedClaudeMdContent() {
    return this.#w;
  }
  replaceCachedClaudeMdContent(e) {
    this.#w = e;
  }
  accountSkillsSyncEnabled() {
    return this.#y;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#y = e;
  }
  skillsSyncVetoed() {
    return this.#R;
  }
  replaceSkillsSyncVetoed(e) {
    this.#R = e;
  }
  accountPluginsSyncEnabled() {
    return this.#k;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#k = e;
  }
  pluginsSyncVetoed() {
    return this.#T;
  }
  replacePluginsSyncVetoed(e) {
    this.#T = e;
  }
  armPendingContextCompacted(e) {
    this.#x = e;
  }
  consumePendingContextCompacted() {
    let e = this.#x;
    return this.#x = void 0, e;
  }
  forgetPendingContextCompacted() {
    this.#x = void 0;
  }
  reset() {
    this.#y = !1, this.#R = !1, this.#k = !1, this.#T = !1, this.#e = !1, this.#t = !1, 
    this.#n = !1, this.#o = !1, this.#r = !1, this.#i = !1, this.#a = !1, this.#u = !1, 
    this.#l = !1, this.#c = void 0, this.#p = !1, this.#s = void 0, this.#f = !1, this.#d = !1, 
    this.#m = !1, this.#h = !1, this.#g = null, this.#v = null, this.#S = null, this.#C = null, 
    this.#b = !1, this.#A = void 0, this.#M = void 0, this.#P = null, this.#w = null, 
    this.#x = void 0;
  }
}

function rn() {
  return {
    messagesArriving: 0,
    lastInLine: Promise.resolve(),
    gaveUpOn: void 0,
    besideLine: 0,
    lastBesideLine: Promise.resolve(),
    gaveUpOnBeside: void 0,
    pathsArrivingBeside: new Map,
    toolCallsWaiting: 0,
    pathsArriving: new Map
  };
}

class Ce {
  #e=new Map;
  #t=new Map;
  #n=null;
  #o=new Map;
  #r=new Set;
  #i=new Set;
  #a=new Set;
  #u=new Set;
  #l=new Set;
  #d=new Set;
  #c=new Set;
  #p=new Set;
  #s=new Set;
  #f=new Set;
  #h=new Map;
  #g=new Map;
  #v=new Map;
  #S;
  #m={
    byFileUuid: new Map,
    recentPrefetchStarts: []
  };
  #C=rn();
  #b=new Set;
  #y=void 0;
  #R=void 0;
  #k=void 0;
  #T=void 0;
  #x=void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = new Map;
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#o;
  }
  sessionCreatedTeams() {
    return this.#r;
  }
  sessionSpawnedTeammatePanes() {
    return this.#i;
  }
  surfacedHookSpawnFailures() {
    return this.#a;
  }
  bareMcpServerMatchersWarned() {
    return this.#u;
  }
  pendingConversationEditKinds() {
    return this.#l;
  }
  clientTruncatedAssistantIds() {
    return this.#d;
  }
  heldStatelessReplyIds() {
    return this.#c;
  }
  unsupportedThreadKeys() {
    return this.#p;
  }
  pendingPrLinks() {
    return this.#s;
  }
  policyPredicateTelemetryEmitted() {
    return this.#f;
  }
  humanAttachmentDigests() {
    return this.#h;
  }
  inboundAttachmentFiles() {
    return this.#g;
  }
  filesPlacedByName() {
    return this.#v;
  }
  filesPlacedByNameRead() {
    return this.#S;
  }
  setFilesPlacedByNameRead(e) {
    this.#S = e;
  }
  inboundAttachmentDownloads() {
    return this.#m;
  }
  arrivingInboundFiles() {
    return this.#C;
  }
  chromeAvailabilityStagesLogged() {
    return this.#b;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (this.#b = new Set, e) this.#y = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#y;
  }
  pendingGoalIdleCheckin() {
    return this.#R;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#R = e;
  }
  pendingGoalReprompt() {
    return this.#k;
  }
  replacePendingGoalReprompt(e) {
    this.#k = e;
  }
  goalInterruptionStreak() {
    return this.#T;
  }
  replaceGoalInterruptionStreak(e) {
    this.#T = e;
  }
  workerCheckin() {
    return this.#x;
  }
  replaceWorkerCheckin(e) {
    this.#x = e;
  }
  reset() {
    this.#e = new Map, this.#t = new Map, this.#n = null, this.#o = new Map, this.#r = new Set, 
    this.#i = new Set, this.#a = new Set, this.#u = new Set, this.#l = new Set, this.#d = new Set, 
    this.#c = new Set, this.#p = new Set, this.#s = new Set, this.#f = new Set, this.#h = new Map, 
    this.#g = new Map, this.#v = new Map, this.#S = void 0;
    for (let e of this.#m.byFileUuid.values()) clearTimeout(e.expiry), e.abort.abort();
    this.#m = {
      byFileUuid: new Map,
      recentPrefetchStarts: []
    }, this.#C = rn(), this.#b = new Set, this.#y = void 0, clearTimeout(this.#R), this.#R = void 0, 
    clearTimeout(this.#k), this.#k = void 0, this.#T = void 0, clearInterval(this.#x?.timer), 
    this.#x = void 0;
  }
}

var sn = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null
};

class xe {
  #e=!1;
  #t=void 0;
  #n=void 0;
  #o=void 0;
  #r=void 0;
  #i=void 0;
  #a=void 0;
  #u=null;
  #l=!1;
  #d=void 0;
  #c=sn;
  #p=!1;
  #s="idle";
  attacherCapsChanged=Me();
  rvSupervisorLinkChanged=Me();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, t) {
    this.#t = e, this.#n = e === void 0 ? void 0 : t;
  }
  sdkPerTaskStopAffordance() {
    return this.#o;
  }
  declarePerTaskStopAffordance(e) {
    this.#o = e;
  }
  sdkRapidFollowupPreempt() {
    return this.#r;
  }
  declareRapidFollowupPreempt(e) {
    this.#r = e;
  }
  sdkForwardNestedSubagentToolCalls() {
    return this.#i;
  }
  declareForwardNestedSubagentToolCalls(e) {
    this.#i = e;
  }
  hostRendersChromeSetupOffer() {
    return this.#a;
  }
  declareHostRendersChromeSetupOffer(e) {
    this.#a = e;
  }
  attacherCaps() {
    return this.#u;
  }
  replaceAttacherCaps(e) {
    this.#u = e, this.attacherCapsChanged.emit();
  }
  rvSupervisorLinkLive() {
    return this.#l;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#l === e) return;
    this.#l = e, this.rvSupervisorLinkChanged.emit();
  }
  sdkBetas() {
    return this.#d;
  }
  replaceSdkBetas(e) {
    this.#d = e;
  }
  caps() {
    return this.#c;
  }
  replaceCaps(e) {
    this.#c = e;
  }
  markRemote(e) {
    this.#c = {
      ...this.#c,
      workspace: e ? "remote" : "local"
    };
  }
  replBridgeActive() {
    return this.#p;
  }
  replaceReplBridgeActive(e) {
    if (this.#p === e) return;
    this.#p = e;
  }
  mainLoopBusy() {
    return this.#s !== "idle";
  }
  mainQueryRunning() {
    return this.#s === "running";
  }
  replaceMainLoopStatus(e) {
    this.#s = e;
  }
  reset() {
    this.#e = !1, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, 
    this.#i = void 0, this.#a = void 0, this.#u = null, this.#d = void 0, this.#c = sn, 
    this.#p = !1, this.#s = "idle", this.#l = !1, this.attacherCapsChanged.clear(), 
    this.rvSupervisorLinkChanged.clear();
  }
}

var an = 150;

class Re {
  #e=Date.now();
  #t=!1;
  #n=0;
  interactionFired=Me();
  #o=void 0;
  terminalFocusFired=Me();
  #r=!1;
  #i;
  lastInteractionTime() {
    return this.#e;
  }
  lastSubmitTime() {
    return this.#n;
  }
  recordSubmit() {
    this.#n = Date.now();
  }
  recordInteraction(e) {
    if (e) this.#a(); else this.#t = !0;
  }
  flushIfDirty() {
    if (this.#t) this.#a();
  }
  #a() {
    this.#e = Date.now(), this.#t = !1, this.interactionFired.emit();
  }
  resetBaseline() {
    this.#e = Date.now(), this.#t = !1;
  }
  terminalFocus() {
    return this.#o;
  }
  updateTerminalFocus(e) {
    this.#o = e, this.terminalFocusFired.emit();
  }
  scrollDraining() {
    return this.#r;
  }
  markScrollActivity() {
    if (this.#r = !0, this.#i) clearTimeout(this.#i);
    this.#i = setTimeout(() => {
      this.#r = !1, this.#i = void 0;
    }, an), this.#i.unref?.();
  }
  async waitForScrollIdle() {
    while (this.#r) await new Promise(e => setTimeout(e, an));
  }
  reset() {
    this.#e = Date.now(), this.#n = 0, this.#o = void 0, this.interactionFired.clear(), 
    this.terminalFocusFired.clear();
  }
}

var Gi = [ "sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn", "rows_unreadable" ];

class Te {
  byAgent=new Map;
  attemptsByAgent=new Map;
  cappedFailuresByAgent=new Map;
  armGateEventEmitted=new Set;
  vetoedUnderPrompt=new Map;
  sidecarIo=Promise.resolve();
  rehydrateAttemptedSessions=new Set;
  sidecarReadsAhead=new Map;
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, t) {
    this.byAgent.set(e, t);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return this.attemptsByAgent.set(e, t), t;
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return this.cappedFailuresByAgent.set(e, t), t;
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  recordVeto(e, t) {
    this.vetoedUnderPrompt.set(e, t);
  }
  isVetoedUnder(e, t) {
    return this.vetoedUnderPrompt.get(e) === t;
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return !1;
    return this.armGateEventEmitted.add(e), !0;
  }
  enqueueSidecarIo(e, t) {
    return this.sidecarIo = this.sidecarIo.then(e, e).catch(t), this.sidecarIo;
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, t) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= 8) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, t);
  }
  takeSidecarReadAhead(e) {
    let t = this.sidecarReadsAhead.get(e);
    return this.sidecarReadsAhead.delete(e), t;
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    this.attemptsByAgent.delete(e), this.cappedFailuresByAgent.delete(e), this.vetoedUnderPrompt.delete(e);
    for (let t of Gi) this.armGateEventEmitted.delete(`${e}:${t}`);
  }
}

function AJe(e) {
  return e ?? "main";
}

function wDo({messages: e, rowUuids: t}, o) {
  return {
    lastUuid: o,
    seenUuids: new Set(e.map(r => r.uuid)),
    rowUuids: t
  };
}

function WHr({coverage: e, kept: t, sent: o, received: r, instructions: i, fit: s}) {
  let a = ({uuid: u}) => e.seenUuids.has(u), l = new Set(o.messages.map(u => u.uuid));
  if (!l.has(e.lastUuid)) return {
    kind: "refuse",
    reason: "boundary_uuid_missing"
  };
  if (!e.rowUuids.every(u => l.has(u))) return {
    kind: "refuse",
    reason: "covered_messages_changed"
  };
  if (t.some(u => a(u) && !l.has(u.uuid))) return {
    kind: "refuse",
    reason: "kept_message_missing"
  };
  if (o.messages.slice(0, o.messages.findLastIndex(a)).some(u => u.type === "assistant" && !a(u))) return {
    kind: "refuse",
    reason: "unseen_reply"
  };
  let p = o.rowUuids.slice(0, o.rowUuids.findLastIndex(u => e.seenUuids.has(u)) + 1);
  if (i || !r.messages.some(({uuid: u}) => u === e.lastUuid) || !ln(r.rowUuids, p)) return {
    kind: "refuse",
    reason: "hook_rewrite"
  };
  let m = u => u.type !== "progress" && !a(u), c = r.messages.filter(m), f = s && Ki(s, r.messages, [ ...t, ...c ]);
  if (f?.givesWay) return {
    kind: "refuse",
    reason: "would_not_fit",
    sizes: f.sizes
  };
  return {
    kind: "reuse",
    tail: c,
    earlyTailCount: r.messages.slice(0, r.messages.findLastIndex(a)).reduce((u, g) => u + (m(g) ? 1 : 0), 0),
    headReordered: !ln(r.rowUuids, e.rowUuids),
    sizes: f?.sizes
  };
}

function Ki({thresholdTokens: e, windowTokens: t, liveTokens: o, madeFromTokens: r, summary: i, sizeOf: s}, a, l) {
  let d = new Set(l.map(g => g.uuid)), p = new Set(a.map(g => g.uuid)), m = a.filter(g => !d.has(g.uuid)), c = a.filter(g => d.has(g.uuid)), f = l.filter(g => !p.has(g.uuid)), u = Math.max(o - s(m), s(c)) + s([ ...i, ...f ]);
  return {
    sizes: {
      postSwapTokens: u,
      thresholdTokens: e,
      windowTokens: t
    },
    givesWay: u >= e && r < t
  };
}

function ln(e, t) {
  return t.every((o, r) => e[r] === o);
}

function vDo(e) {
  return e.findLast(o => o.type === "user" && !o.isMeta && o.toolUseResult === void 0 && (typeof o.message.content === "string" || !o.message.content.some(r => r.type === "tool_result")))?.uuid ?? "";
}

function qUs(e, t, o) {
  e.recordVeto(AJe(t), vDo(o));
}

class Pe {
  #e=void 0;
  get current() {
    return this.#e;
  }
  adopt(e) {
    this.#e = e;
  }
}

class Ae {
  #e=null;
  #t=null;
  mainAgentId(e) {
    return this.#e ??= To(e), this.#e;
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}

class we {
  openToolUseId;
  answeredThisSession=!1;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = !0;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}

class Le {
  granted=!1;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = !0;
  }
}

class Oe {
  inFlight=null;
  startedForTurnEnd=!1;
  reset() {
    this.inFlight?.abort(), this.inFlight = null, this.startedForTurnEnd = !1;
  }
}

class Ie {
  firstSyncPromise=null;
  accountListing="pending";
  syncErrors=[];
  lastRoundListed=!1;
  listedStamp=null;
  changesLanded=0;
  changesReloaded=0;
  reloadsCompleted=0;
  holdsSet=0;
  reloadHeld=!1;
  lastCompleteList=null;
  syncedLaneOpened=!1;
  syncedDirsLoadedHere=new Set;
  removalsDeferredHere=new Set;
  pendingTrashRemovals=[];
  ensureBucketRoot=null;
  deferredRelist=null;
  missingEntry={
    resync: null,
    resyncAt: -1 / 0,
    swept: !1
  };
  settingsInstall={
    current: null,
    next: null,
    loaded: null
  };
  holdReload() {
    this.reloadHeld = !0, this.holdsSet++;
  }
  endHoldSetBefore(e) {
    this.reloadHeld &&= this.holdsSet !== e;
  }
  reloaded(e) {
    this.changesReloaded = Math.max(this.changesReloaded, e), this.reloadsCompleted++;
  }
}

class Fe {
  abortController=null;
  eligibleTurns=0;
  unusedInARow=0;
  askOnNextTurn() {
    this.eligibleTurns = 0;
  }
  reset() {
    this.abortController?.abort(), this.abortController = null;
  }
  arm() {
    let e = new AbortController;
    return this.abortController = e, e;
  }
}

class Ee {
  #e=void 0;
  #t=void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return this.#t = e, e;
  }
}

class De {
  autonomousPreambleDelivered=!1;
  lastLoopFileDelivered=null;
  reset() {
    this.autonomousPreambleDelivered = !1, this.lastLoopFileDelivered = null;
  }
}

class He {
  exchanges=[];
  replace(e) {
    this.exchanges = e;
  }
  append(e, t, o) {
    this.exchanges = [ ...this.exchanges, {
      question: e,
      response: t,
      ...o && {
        fallbackNotice: o
      }
    } ].slice(-20);
  }
  pendingReopen=null;
  reopenAway=!1;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, t) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = {
      owners: new Set([ e ]),
      cancel: t()
    };
  }
  clearPendingReopen(e) {
    let t = this.pendingReopen;
    if (!t) {
      this.reopenAway = !1;
      return;
    }
    if (e !== void 0) {
      if (t.owners.delete(e), t.owners.size > 0) return;
    }
    t.cancel(), this.pendingReopen = null, this.reopenAway = !1;
  }
  reopener=null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? !1;
  }
  inFlightQuestions=[];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e)) this.inFlightQuestions = [ ...this.inFlightQuestions, e ];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e)) this.inFlightQuestions = this.inFlightQuestions.filter(t => t !== e);
  }
}

var Vi = 16;

class Be {
  pending=null;
  shownThisSession=!1;
  changed=Me();
  submitted=[];
  submittedChanged=Me();
  subscribe=this.changed.subscribe;
  getSnapshot=() => this.pending;
  subscribeSubmitted=this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Vi) this.submitted.shift();
    this.submitted.push(e), this.submittedChanged.emit();
  }
  takeSubmitted() {
    let e = this.submitted;
    return this.submitted = [], e;
  }
  offer(e) {
    if (this.shownThisSession) return;
    this.pending = e, this.changed.emit();
  }
  dismiss() {
    if (this.pending !== null) this.pending = null, this.changed.emit();
  }
  markShown() {
    this.shownThisSession = !0;
  }
}

class Z4n {
  lastEmittedAt=new Map;
  shouldEmit(e, t, o) {
    let r = this.lastEmittedAt.get(e) || 0;
    if (t - r < o) return !1;
    if (this.lastEmittedAt.size >= 100) {
      let i = this.lastEmittedAt.keys().next().value;
      if (i !== void 0) this.lastEmittedAt.delete(i);
    }
    return this.lastEmittedAt.set(e, t), !0;
  }
}

var CJe = Symbol("permission-stash-evicted");

class je {
  entriesCap;
  evictedKeysCap;
  lanes={
    write: new Map,
    read: new Map
  };
  evicted={
    write: new Set,
    read: new Set
  };
  poisoned={
    write: !1,
    read: !1
  };
  identities=new Map;
  identitiesEvicted=new Set;
  identitiesPoisoned=!1;
  constructor(e = 256, t = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = t;
  }
  stash(e, t, o, r = "write") {
    if (e === void 0) return;
    let i = this.lanes[r], s = this.evicted[r], a = Ue(e, t);
    if (s.has(a)) return;
    let l = i.get(a);
    if (l !== void 0) {
      let d = new Set(o);
      i.set(a, l.filter(p => d.has(p)));
      return;
    }
    if (i.size >= this.entriesCap) {
      let d = i.keys().next().value;
      if (d !== void 0) {
        if (i.delete(d), s.add(d), s.size > this.evictedKeysCap) {
          this.poisoned[r] = !0;
          let p = s.values().next().value;
          if (p !== void 0) s.delete(p);
        }
      }
    }
    i.set(a, o);
  }
  holds(e, t, o = "write") {
    return e !== void 0 && this.lanes[o].has(Ue(e, t));
  }
  stashIdentity(e, t, o) {
    if (e === void 0) return;
    let r = this.identities.get(e), i = r?.get(t);
    if (r !== void 0 && i !== void 0) {
      if (i === null || o === null || i.dev !== o.dev || i.ino !== o.ino) r.set(t, null);
      return;
    }
    let s = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
    if (r === void 0) {
      if (!s && this.identities.size >= this.entriesCap) {
        let a = this.identities.keys().next().value;
        if (a !== void 0) {
          if (this.identities.delete(a), this.identitiesEvicted.add(a), this.identitiesEvicted.size > this.evictedKeysCap) {
            this.identitiesPoisoned = !0;
            let l = this.identitiesEvicted.values().next().value;
            if (l !== void 0) this.identitiesEvicted.delete(l);
          }
        }
      }
      r = new Map, this.identities.set(e, r);
    }
    r.set(t, s ? null : o);
  }
  takeIdentity(e, t) {
    if (e === void 0) return;
    let o = this.identities.get(e), r = o?.get(t);
    if (o?.delete(t) && o.size === 0) this.identities.delete(e);
    return r;
  }
  consume(e, t, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o], i = Ue(e, t), s = r.get(i), a = s === void 0 && (this.evicted[o].delete(i) || this.poisoned[o]), l = `${e}\0`;
    for (let d of r.keys()) if (d.startsWith(l)) r.delete(d);
    if (o === "read") this.identities.delete(e), this.identitiesEvicted.delete(e);
    if (a) return CJe;
    return s;
  }
}

function Ue(e, t) {
  return `${e}\0${t}`;
}

var dn = "NoProjectDirectoryError", un = new K(() => ({}));

var cn = () => {};

function pn(e) {
  cn = e;
}

class gM extends Error {
  name=dn;
  constructor() {
    super("This session has no working directory.");
    try {
      cn(this);
    } catch {}
  }
}

function RJe(e) {
  try {
    return e instanceof Error && e.name === dn;
  } catch {
    return !1;
  }
}

function Lo(e) {
  let {project: t} = e;
  if (t === null) throw new gM;
  return t;
}

function zHr(e) {
  return fn({
    kind: "root",
    host: e.host,
    id: e.id,
    parentId: e.parentId
  }, e.project, e.project?.isolationRoot);
}

function O(e, t) {
  let o = t.originalCwd ?? e?.originalCwd, r = t.projectRoot ?? e?.projectRoot, i = t.cwd ?? e?.cwd;
  if (o === void 0 && r === void 0 && i === void 0) return null;
  if (o === void 0 || r === void 0 || i === void 0) throw new gM;
  return {
    originalCwd: Ln(o),
    projectRoot: Ln(r),
    cwd: Ln(i)
  };
}

function fn(e, t, o) {
  let r = {
    project: t === null ? null : O(null, t)
  }, i = o, s = Me(), a = e.kind === "fork" ? e.root.observers : new ae, l = e.kind === "fork" ? e.root.autonomousLoopPreamble : new De, d = e.kind === "fork" ? e.root.precompute : new Te, p = {
    get originalCwd() {
      return Lo(r).originalCwd;
    },
    get projectRoot() {
      return Lo(r).projectRoot;
    },
    get cwd() {
      return Lo(r).cwd;
    },
    get isolationRoot() {
      return i;
    }
  }, m = {
    host: e.kind === "fork" ? e.root.host : e.host,
    get id() {
      return e.kind === "fork" ? e.root.id : e.id;
    },
    get parentId() {
      return e.kind === "fork" ? e.root.parentId : e.parentId;
    },
    get root() {
      return e.kind === "fork" ? e.root : m;
    },
    get project() {
      return r.project === null ? null : p;
    },
    observers: a,
    autonomousLoopPreamble: l,
    btwHistory: e.kind === "fork" ? e.root.btwHistory : new He,
    ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Oe,
    conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new le,
    costLedger: e.kind === "fork" ? e.root.costLedger : new de,
    engineStore: e.kind === "fork" ? e.root.engineStore : new Pe,
    usageCreditsOnlyModelConsentSlots: e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new ue,
    hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new ce,
    identity: e.kind === "fork" ? e.root.identity : new Ae,
    invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new pe,
    mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new fe,
    modelSelection: e.kind === "fork" ? e.root.modelSelection : new ge,
    promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new me,
    promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new Fe,
    pendingHint: e.kind === "fork" ? e.root.pendingHint : new Be,
    pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new Ie,
    precompute: d,
    requestJournal: e.kind === "fork" ? e.root.requestJournal : new Se,
    sessionCron: e.kind === "fork" ? e.root.sessionCron : new ye,
    sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new be,
    sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new Ee,
    sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new Ce,
    surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new xe,
    toolProgressThrottle: e.kind === "fork" ? e.root.toolProgressThrottle : new Z4n,
    userPresence: e.kind === "fork" ? e.root.userPresence : new Re,
    workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new Le,
    outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new we,
    writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new je,
    subscribe(c) {
      let f = s.subscribe(c);
      if (e.kind !== "fork") return f;
      let u = e.root, {id: g, parentId: v} = u, b = u.subscribe(() => {
        if (u.id === g && u.parentId === v) return;
        g = u.id, v = u.parentId, c();
      });
      return () => {
        f(), b();
      };
    },
    setCwd(c) {
      m.update({
        project: {
          cwd: c
        }
      });
    },
    setIsolationRoot(c) {
      if (c !== i) i = c, s.emit();
    },
    withProject(c) {
      return fn({
        kind: "fork",
        root: m.root
      }, O(r.project, c), c.isolationRoot ?? i);
    },
    update(c) {
      let f = c.project === void 0 ? r.project : c.project === null ? null : O(r.project, c.project), u = !1;
      if (c.id !== void 0 || "parentId" in c) {
        if (e.kind === "fork") throw Error("A withProject fork cannot re-identify the session \u2014 update the root session instead");
        if (c.id !== void 0 && c.id !== e.id) e.id = c.id, u = !0;
        if ("parentId" in c && c.parentId !== e.parentId) e.parentId = c.parentId, u = !0;
      }
      if (f?.originalCwd !== r.project?.originalCwd || f?.projectRoot !== r.project?.projectRoot || f?.cwd !== r.project?.cwd) r.project = f, 
      u = !0;
      let g = c.project?.isolationRoot;
      if (g !== void 0 && g !== i) i = g, u = !0;
      if (u) s.emit();
    }
  };
  return m;
}

class lt {
  #e;
  #t=new WeakMap;
  constructor(e) {
    this.#e = e;
  }
  peek(e) {
    return this.#t.get(e.root);
  }
  of(e) {
    let t = e.root, o = this.#t.get(t);
    if (o !== void 0) return o;
    let r = this.#e();
    return this.#t.set(t, r), r;
  }
  drop(e) {
    this.#t.delete(e.root);
  }
}

class _e {
  #e=!1;
  #t=null;
  #n=!1;
  #o=void 0;
  #r=!1;
  #i=!1;
  #a=!1;
  #u=!1;
  #l=void 0;
  #d=!1;
  #c=!1;
  #p=null;
  #s=null;
  #f=new Map;
  #h="cli";
  #g="fresh";
  #v=void 0;
  #S=!1;
  #m=!1;
  #C=[];
  #b=!1;
  #y=!1;
  #R=!1;
  #k=new Set;
  #T=!1;
  #x="none";
  #A=!1;
  #M=!1;
  #P=!1;
  #w=!1;
  #L=!1;
  #I=void 0;
  #F=void 0;
  #E=void 0;
  #D=!1;
  #H=!1;
  #B=!1;
  #U=null;
  #j=!0;
  #_=null;
  #O=!1;
  #z=Me();
  #q=null;
  #W=!1;
  #N=!1;
  #G={};
  #K=null;
  #V="none";
  #J=void 0;
  isInteractive() {
    return this.#e;
  }
  replaceIsInteractive(e) {
    this.#e = e;
  }
  printOutputFormat() {
    return this.#t;
  }
  replacePrintOutputFormat(e) {
    this.#t = e;
  }
  thinkingDisplayExplicit() {
    return this.#n;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#n = e;
  }
  permissionPromptToolName() {
    return this.#o;
  }
  replacePermissionPromptToolName(e) {
    this.#o = e;
  }
  hasStreamingInput() {
    return this.#r;
  }
  replaceHasStreamingInput(e) {
    this.#r = e;
  }
  singleShotPrintSession() {
    return this.#i;
  }
  replaceSingleShotPrintSession(e) {
    this.#i = e;
  }
  printInputClosed() {
    return this.#a;
  }
  markPrintInputClosed() {
    this.#a = !0;
  }
  modelOverrideOptOutForSession() {
    return this.#u;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#u = e;
  }
  rendererMode() {
    return this.#l;
  }
  replaceRendererMode(e) {
    this.#l = e;
  }
  strictToolResultPairing() {
    return this.#d;
  }
  replaceStrictToolResultPairing(e) {
    this.#d = e;
  }
  restrictedSession() {
    return this.#c;
  }
  replaceRestrictedSession(e) {
    this.#c = e;
  }
  workspaceRestrictionState() {
    return this.#p;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#p = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    this.#s?.(), this.#s = e;
  }
  restrictedWorkspaceRoots() {
    return this.#f;
  }
  addRestrictedWorkspaceRoot(e, t) {
    this.#f.set(e, t);
  }
  clearRestrictedWorkspaceRoots() {
    this.#f = new Map;
  }
  clientType() {
    return this.#h;
  }
  replaceClientType(e) {
    this.#h = e;
  }
  sessionStartType() {
    return this.#g;
  }
  replaceSessionStartType(e) {
    this.#g = e;
  }
  questionPreviewFormat() {
    return this.#v;
  }
  replaceQuestionPreviewFormat(e) {
    this.#v = e;
  }
  extendedQuestionsEnabled() {
    return this.#S;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#S = e;
  }
  questionOptionDescriptionsOptional() {
    return this.#m;
  }
  replaceQuestionOptionDescriptionsOptional(e) {
    this.#m = e;
  }
  replConfigArgv() {
    return this.#C;
  }
  replaceReplConfigArgv(e) {
    this.#C = e;
  }
  userMsgOptIn() {
    return this.#b;
  }
  replaceUserMsgOptIn(e) {
    this.#b = e;
  }
  searchToolsOptIn() {
    return this.#y;
  }
  replaceSearchToolsOptIn(e) {
    this.#y = e;
  }
  todoToolsOptIn() {
    return this.#R;
  }
  replaceTodoToolsOptIn(e) {
    this.#R = e;
  }
  toolsOmittedByLaunchList() {
    return this.#k;
  }
  replaceToolsOmittedByLaunchList(e) {
    this.#k = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#T;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#T = e;
  }
  pollEventIngress() {
    return this.#x;
  }
  markPollEventIngress(e) {
    this.#x = e;
  }
  ownEventDeliveryRequested() {
    return this.#A && !this.#M;
  }
  replaceOwnEventDeliveryHeld(e) {
    this.#M = e;
  }
  markOwnEventDeliveryRequested() {
    this.#A = !0;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#P;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#P = e;
  }
  sessionPersistenceDisabled() {
    return this.#w;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#w = e;
  }
  diskless() {
    return this.#L;
  }
  replaceDiskless(e) {
    this.#L = e;
  }
  ccrSessionUrl() {
    return this.#I;
  }
  replaceCcrSessionUrl(e) {
    this.#I = e;
  }
  ccrDerivedSurface() {
    return this.#F;
  }
  replaceCcrDerivedSurface(e) {
    this.#F = e;
  }
  toolsMachine() {
    return this.#E;
  }
  replaceToolsMachine(e) {
    this.#E = e;
  }
  sessionBypassPermissionsMode() {
    return this.#D;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#D = e;
  }
  disableSlashCommands() {
    return this.#H;
  }
  replaceDisableSlashCommands(e) {
    this.#H = e;
  }
  disableFileMentions() {
    return this.#B;
  }
  replaceDisableFileMentions(e) {
    this.#B = e;
  }
  sessionUploadsDir() {
    return this.#U;
  }
  replaceSessionUploadsDir(e) {
    this.#U = e;
  }
  mayForwardHomeSettings() {
    return this.#j;
  }
  replaceMayForwardHomeSettings(e) {
    this.#j = e;
  }
  homeSettingsHostConsent() {
    return this.#_;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#_ = e;
  }
  scheduledTasksEnabled() {
    return this.#O;
  }
  replaceScheduledTasksEnabled(e) {
    let t = e && !this.#O;
    if (this.#O = e, t) this.#z.emit();
  }
  onScheduledTasksEnabled(e) {
    return this.#z.subscribe(e);
  }
  initJsonSchema() {
    return this.#q;
  }
  replaceInitJsonSchema(e) {
    this.#q = e;
  }
  cliSessionConfigCarried() {
    return this.#W;
  }
  replaceCliSessionConfigCarried(e) {
    this.#W = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#N;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#N = e;
  }
  forkReplayLaunchConfig() {
    return this.#G;
  }
  spareClaimState() {
    return this.#V;
  }
  replaceSpareClaimState(e) {
    this.#V = e;
  }
  spareParkedAtMs() {
    return this.#J;
  }
  replaceSpareParkedAtMs(e) {
    this.#J = e;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#G = e;
  }
  projectConfigRoot() {
    return this.#K;
  }
  replaceProjectConfigRoot(e) {
    this.#K = e;
  }
  reset() {
    this.#e = !1, this.#t = null, this.#V = "none", this.#J = void 0, this.#n = !1, 
    this.#o = void 0, this.#r = !1, this.#i = !1, this.#a = !1, this.#u = !1, this.#l = void 0, 
    this.#d = !1, this.#c = !1, this.#p = null, this.replaceWorkspaceRestrictionUnsubscribe(null), 
    this.#f = new Map, this.#h = "cli", this.#g = "fresh", this.#v = void 0, this.#S = !1, 
    this.#m = !1, this.#C = [], this.#b = !1, this.#y = !1, this.#R = !1, this.#k = new Set, 
    this.#T = !1, this.#x = "none", this.#A = !1, this.#M = !1, this.#P = !1, this.#w = !1, 
    this.#L = !1, this.#I = void 0, this.#F = void 0, this.#E = void 0, this.#D = !1, 
    this.#H = !1, this.#B = !1, this.#U = null, this.#j = !0, this.#_ = null, this.#O = !1, 
    this.#q = null, this.#W = !1, this.#N = !1, this.#G = {}, this.#K = null;
  }
}

class qe {
  #e=void 0;
  #t=[];
  #n=void 0;
  #o=void 0;
  #r=null;
  #i=null;
  #a=!1;
  #u=gn();
  #l=null;
  #d=!1;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagAgentsFilePaths() {
    return this.#t;
  }
  replaceFlagAgentsFilePaths(e) {
    this.#t = e;
  }
  flagSettingsExpectedContent() {
    return this.#n;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#n = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#o;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#o = e;
  }
  flagSettingsInline() {
    return this.#r;
  }
  replaceFlagSettingsInline(e) {
    this.#r = e;
  }
  parentManagedSettings() {
    return this.#i;
  }
  replaceParentManagedSettings(e) {
    this.#i = e;
  }
  parentManagedSettingsInvalid() {
    return this.#a;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#a = e;
  }
  allowedSettingSources() {
    return this.#u;
  }
  replaceAllowedSettingSources(e) {
    this.#u = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#u;
    if (this.#l?.of !== e) this.#l = {
      of: e,
      result: e.filter(t => t !== "projectSettings" && t !== "localSettings")
    };
    return this.#l.result;
  }
  useCoworkPlugins() {
    return this.#d;
  }
  replaceUseCoworkPlugins(e) {
    this.#d = e;
  }
  reset() {
    this.#e = void 0, this.#t = [], this.#n = void 0, this.#o = void 0, this.#r = null, 
    this.#i = null, this.#a = !1, this.#u = gn(), this.#l = null, this.#d = !1;
  }
}

function gn() {
  return [ "userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings" ];
}

class We {
  #e=[];
  #t=[];
  #n=[];
  #o=void 0;
  #r=new Map;
  #i=new Map;
  #a=[];
  #u=[];
  #l=!1;
  #d=void 0;
  #c=void 0;
  #p=void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#o ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#o !== void 0;
  }
  syncedPluginAttestation(e) {
    return this.#r.get(e);
  }
  replaceSyncedPluginDirs(e, t = new Map) {
    this.#o = e, this.#r = t, this.#i = this.#s(this.#i);
  }
  clearSyncedPluginDirs() {
    this.#o = void 0, this.#r = new Map, this.#i = new Map;
  }
  attestedOfficialPluginMarketplace(e) {
    return this.#i.get(e);
  }
  replaceAttestedOfficialPluginIds(e) {
    this.#i = this.#s(e);
  }
  #s(e) {
    let t = new Set([ ...this.#r.values() ].map(o => `${o.pluginName}@${o.marketplace}`));
    return new Map([ ...e ].filter(([o, r]) => t.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
  }
  additionalDirectoriesForClaudeMd() {
    return this.#a;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#a = e;
  }
  allowedChannels() {
    return this.#u;
  }
  replaceAllowedChannels(e) {
    this.#u = e;
  }
  hasDevChannels() {
    return this.#l;
  }
  replaceHasDevChannels(e) {
    this.#l = e;
  }
  sessionSkillAllowlist() {
    return this.#d;
  }
  replaceSessionSkillAllowlist(e) {
    this.#d = e;
  }
  chromeFlagOverride() {
    return this.#c;
  }
  replaceChromeFlagOverride(e) {
    this.#c = e;
  }
  teammateAgentId() {
    return this.#p;
  }
  replaceTeammateAgentId(e) {
    this.#p = e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = [], this.clearSyncedPluginDirs(), this.#a = [], 
    this.#u = [], this.#l = !1, this.#d = void 0, this.#c = void 0, this.#p = void 0;
  }
}

class Ne {
  #e=null;
  #t=null;
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    this.#e = null;
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  reset() {
    this.#e = null, this.#t = null;
  }
}

var hn = [];

class Ge {
  #e=[];
  #t=[];
  #n=void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, t) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return hn;
    let e = Date.now();
    if (this.#t.some(t => e - t.timestamp >= 1e4)) {
      if (this.#t = this.#t.filter(t => e - t.timestamp < 1e4), this.#t.length === 0) return hn;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 6e4) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = void 0;
  }
}

var YUs = 100;

function mn() {
  return {
    rateTokens: null,
    rateLastRefillMs: null,
    featureOkLogged: !1,
    reportedDropReasons: new Set
  };
}

class Ke {
  #e=null;
  #t=null;
  #n=null;
  #o=null;
  #r=null;
  #i=null;
  #a=null;
  #u=null;
  #l=null;
  #d=null;
  #c=null;
  #p=null;
  #s=null;
  #f=[];
  #h=null;
  #g=mn();
  #v=null;
  #S=null;
  #m=null;
  #C={
    direct: null,
    proxied: null
  };
  #b=null;
  #y=null;
  installMeter(e, t, {omitUnits: o = !1} = {}) {
    this.#e = e;
    let r = i => o ? void 0 : i;
    this.#t = t("claude_code.session.count", {
      description: "Count of CLI sessions started"
    }), this.#n = t("claude_code.lines_of_code.count", {
      description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change"
    }), this.#o = t("claude_code.pull_request.count", {
      description: "Number of pull requests created"
    }), this.#r = t("claude_code.commit.count", {
      description: "Number of git commits created"
    }), this.#i = t("claude_code.cost.usage", {
      description: "Cost of the Claude Code session",
      unit: r("USD")
    }), this.#a = t("claude_code.token.usage", {
      description: "Number of tokens used",
      unit: r("tokens")
    }), this.#u = t("claude_code.code_edit_tool.decision", {
      description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
    }), this.#l = t("claude_code.active_time.total", {
      description: "Total active time in seconds",
      unit: r("s")
    });
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#o;
  }
  commitCounter() {
    return this.#r;
  }
  costCounter() {
    return this.#i;
  }
  tokenCounter() {
    return this.#a;
  }
  codeEditToolDecisionCounter() {
    return this.#u;
  }
  activeTimeCounter() {
    return this.#l;
  }
  statsStore() {
    return this.#d;
  }
  replaceStatsStore(e) {
    this.#d = e;
  }
  loggerProvider() {
    return this.#c;
  }
  replaceLoggerProvider(e) {
    this.#c = e;
  }
  eventLogger() {
    return this.#p;
  }
  eventLoggerOwner() {
    return this.#s;
  }
  attachEventLogger(e, t) {
    if (this.#p = e, this.#s = e ? t : null, !e) return;
    let o = this.#f;
    if (this.#f = null, o) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#f === null || this.#f.length >= 100) return !1;
    return this.#f.push(e), !0;
  }
  closeWindow(e) {
    this.#f = null, this.#h = e;
  }
  windowCloseCause() {
    return this.#h;
  }
  isWindowOpen() {
    return this.#f !== null;
  }
  hostOtel() {
    return this.#g;
  }
  meterProvider() {
    return this.#v;
  }
  replaceMeterProvider(e) {
    this.#v = e;
  }
  tracerProvider() {
    return this.#S;
  }
  replaceTracerProvider(e) {
    this.#S = e;
  }
  cachedTelemetryResource() {
    return this.#m;
  }
  replaceCachedTelemetryResource(e) {
    this.#m = e;
  }
  cachedOtlpHttpAgentFactory(e) {
    return this.#C[e ? "proxied" : "direct"];
  }
  replaceCachedOtlpHttpAgentFactory(e, t) {
    this.#C[e ? "proxied" : "direct"] = t;
  }
  inClusterOtlpTrustRoots() {
    return this.#b;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#b = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#y;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#y = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, 
    this.#i = null, this.#a = null, this.#u = null, this.#l = null, this.#d = null, 
    this.#c = null, this.#p = null, this.#s = null, this.#f = [], this.#h = null, this.#g = mn(), 
    this.#v = null, this.#S = null, this.#m = null, this.#C = {
      direct: null,
      proxied: null
    }, this.#b = null, this.#y = null;
  }
}

class Ve {
  #e=void 0;
  #t=void 0;
  #n=!1;
  #o=void 0;
  #r=void 0;
  #i=new Set;
  #a=void 0;
  #u=null;
  #l=null;
  #d=0;
  #c=!1;
  #p=() => !1;
  #s=null;
  #f=void 0;
  #h=null;
  #g=null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  oauthTokenFromFd() {
    return this.#t;
  }
  replaceOauthTokenFromFd(e) {
    this.#t = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#n;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#n = e;
  }
  oauthScopesFromFd() {
    return this.#o;
  }
  replaceOauthScopesFromFd(e) {
    this.#o = e;
  }
  apiKeyFromFd() {
    return this.#r;
  }
  replaceApiKeyFromFd(e) {
    this.#r = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#i.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#i.add(e);
  }
  gatewayTokenFromDescriptor() {
    return this.#a;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#a = e;
  }
  resetFdCredentialState() {
    this.#e = void 0, this.#t = void 0, this.#n = !1, this.#o = void 0, this.#r = void 0;
  }
  gatewayAuth() {
    return this.#u;
  }
  replaceGatewayAuth(e) {
    this.#u = e;
  }
  gatewayServerProcess() {
    return this.#c;
  }
  replaceGatewayServerProcess(e) {
    this.#c = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#p();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#p = e;
  }
  authenticatedAccount() {
    return this.#l;
  }
  authenticatedAccountEpoch() {
    return this.#d;
  }
  stampAuthenticatedAccount(e) {
    let t = this.#l;
    if (e !== null && t !== null && e.accountUuid === t.accountUuid && e.emailAddress === t.emailAddress && e.organizationUuid === t.organizationUuid) return;
    this.#d += 1, this.#l = e;
  }
  startupPolicySnapshot() {
    return this.#f;
  }
  replaceStartupPolicySnapshot(e) {
    this.#f = e;
  }
  gatewayRefreshInFlight() {
    return this.#s;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#s = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#h;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#h = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#g;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#g = e;
  }
  resetForTests() {
    this.#e = null, this.#t = null, this.#n = !1, this.#o = void 0, this.#r = null, 
    this.#i.clear(), this.#a = void 0, this.#u = null, this.#l = null, this.#d = 0, 
    this.#c = !1, this.#p = () => !1, this.#s = null, this.#f = void 0, this.#h = null, 
    this.#g = null;
  }
}

class Je {
  #e=void 0;
  #t=!1;
  #n=!1;
  #o;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#o = e;
  }
  ensureConnectedClient() {
    return this.#o;
  }
  reset() {
    this.#e = void 0, this.#t = !1, this.#n = !1;
  }
}

class ze {
  #e=null;
  #t=new Map;
  #n=new Map;
  #o=new Set;
  #r=new Set;
  #i=new Set;
  #a=new Map;
  #u=!1;
  #l=!1;
  #d=!1;
  #c=!1;
  #p=!1;
  #s=!1;
  #f=!1;
  #h=!1;
  #g=!1;
  #v=new Set;
  #S=!1;
  #m=new Set;
  #C=!1;
  #b=!1;
  #y=!1;
  #R=!1;
  #k=new Map;
  #T=void 0;
  #x=void 0;
  #A=!1;
  #M=void 0;
  #P=void 0;
  #w=new Map;
  #L=new Map;
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, t) {
    this.#t.set(e, t);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, t) {
    this.#n.set(e, t);
  }
  effortUnsupportedModels() {
    return this.#o;
  }
  markEffortUnsupported(e) {
    this.#o.add(e);
  }
  structuredOutputsUnsupportedModels() {
    return this.#r;
  }
  markStructuredOutputsUnsupported(e) {
    this.#r.add(e);
  }
  clearStructuredOutputsUnsupported() {
    this.#r = new Set;
  }
  context1mRefusedModels() {
    return this.#i;
  }
  markContext1mRefused(e) {
    this.#i.add(e);
  }
  clearContext1mRefused() {
    this.#i = new Set;
  }
  refusedBetas(e) {
    return this.#a.get(e) ?? [];
  }
  markBetaRefused(e, t) {
    let o = this.#a.get(e);
    if (o) o.add(t); else this.#a.set(e, new Set([ t ]));
  }
  midConvCachePromotionRejected() {
    return this.#u;
  }
  markMidConvCachePromotionRejected() {
    this.#u = !0;
  }
  perTurnEffortOkEmitted() {
    return this.#l;
  }
  markPerTurnEffortOkEmitted() {
    this.#l = !0;
  }
  lateToolAdditionsOkEmitted() {
    return this.#d;
  }
  markLateToolAdditionsOkEmitted() {
    this.#d = !0;
  }
  toolResultScreeningOkEmitted() {
    return this.#c;
  }
  markToolResultScreeningOkEmitted() {
    this.#c = !0;
  }
  toolChangeHeaderRefused() {
    return this.#p;
  }
  markToolChangeHeaderRefused() {
    this.#p = !0;
  }
  promptEndMarkRefused() {
    return this.#s;
  }
  markPromptEndMarkRefused() {
    this.#s = !0;
  }
  inlineToolsRefused() {
    return this.#f;
  }
  markInlineToolsRefused() {
    this.#f = !0;
  }
  inlineToolsOkEmitted() {
    return this.#h;
  }
  markInlineToolsOkEmitted() {
    this.#h = !0;
  }
  thinkingResumptionRefused() {
    return this.#g;
  }
  markThinkingResumptionRefused() {
    this.#g = !0;
  }
  refusedBetaHeaders() {
    return this.#v;
  }
  markBetaHeaderRefused(e) {
    this.#v.add(e);
  }
  thinkingHighlightsRefused() {
    return this.#S;
  }
  markThinkingHighlightsRefused() {
    this.#S = !0;
  }
  toolChangeUnsupportedModels() {
    return this.#m;
  }
  markToolChangeUnsupportedModel(e) {
    this.#m.add(e);
  }
  internalModelFieldsRefused() {
    return this.#C;
  }
  markInternalModelFieldsRefused() {
    this.#C = !0;
  }
  internalModelFieldsRefusalAnnounced() {
    return this.#b;
  }
  markInternalModelFieldsRefusalAnnounced() {
    this.#b = !0;
  }
  thirdPartyServerClassifierRefused() {
    return this.#y;
  }
  markThirdPartyServerClassifierRefused() {
    this.#y = !0;
  }
  threadsHeldForServerClassifier() {
    return this.#R;
  }
  markThreadsHeldForServerClassifier() {
    this.#R = !0;
  }
  autoModeUnavailableResponse(e) {
    return this.#k.get(e);
  }
  autoModeUnavailableResponsesInARow(e) {
    let t = 0;
    for (let o of this.#k.values()) if (o.runKey === e) t++;
    return t;
  }
  noteAutoModeUnavailableResponse(e, t) {
    this.#k.set(e, t);
  }
  clearAutoModeUnavailableResponses(e) {
    for (let [t, o] of this.#k) if (o.runKey === e) this.#k.delete(t);
  }
  setAutoModeUnavailableStopNotice(e) {
    this.#T = e;
  }
  autoModeUnavailableStopNotice() {
    return this.#T;
  }
  setLocalCommandExitCode(e) {
    this.#x = e;
  }
  localCommandExitCode() {
    return this.#x;
  }
  observedGateway() {
    return this.#M;
  }
  serverClassifierFallbackChoice() {
    return this.#P;
  }
  setServerClassifierFallbackChoice(e) {
    this.#P = e;
  }
  clearServerClassifierFallbackChoice() {
    this.#P = void 0;
  }
  noteObservedGateway(e) {
    this.#M ??= e;
  }
  takeServerClassifierFallbackAnnouncement() {
    if (!this.#y || this.#A) return !1;
    return this.#A = !0, !0;
  }
  inferenceProfileBackingModels() {
    return this.#w;
  }
  recordInferenceProfileBackingModel(e, t) {
    this.#w.set(e, t);
  }
  foundryDeploymentCapabilities() {
    return this.#L;
  }
  reset() {
    this.#e = null, this.#t = new Map, this.#n = new Map, this.#o = new Set, this.#r = new Set, 
    this.#i = new Set, this.#a = new Map, this.#u = !1, this.#l = !1, this.#d = !1, 
    this.#c = !1, this.#p = !1, this.#s = !1, this.#f = !1, this.#h = !1, this.#g = !1, 
    this.#v = new Set, this.#S = !1, this.#m = new Set, this.#C = !1, this.#b = !1, 
    this.#y = !1, this.#R = !1, this.#k.clear(), this.#T = void 0, this.#x = void 0, 
    this.#A = !1, this.#M = void 0, this.#P = void 0, this.#w = new Map, this.#L = new Map;
  }
}

class Qe {
  #e=!1;
  #t=!1;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  usageCreditsRequired() {
    return this.#t;
  }
  replaceUsageCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    this.#e = !1, this.#t = !1;
  }
}

class Xe {
  #e=!1;
  #t=!1;
  #n=Sn;
  #o=Me();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    this.#e = e, this.#t ||= e;
  }
  inheritSelectorGateEverOn() {
    this.#t = !0;
  }
  resampleSelectorGate(e) {
    let t = this.#e;
    if (this.#e = e, this.#t ||= e, t !== e) this.#o.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#o.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let t = this.#n;
    this.#n = e, t();
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription(Sn);
  }
}

function Sn() {}

class Ye {
  started=!1;
  stagingReaped=!1;
  claim() {
    if (this.started) return !1;
    return this.started = !0, !0;
  }
  claimStagingReap() {
    if (this.stagingReaped) return !1;
    return this.stagingReaped = !0, !0;
  }
}

class $e {
  clock;
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    this.clock = e.clock, this.backgroundHousekeeping = e.backgroundHousekeeping, this.launchOptions = e.launchOptions, 
    this.settingsSource = e.settingsSource, this.extensionsConfig = e.extensionsConfig, 
    this.modelStringsCache = e.modelStringsCache, this.diagnostics = e.diagnostics, 
    this.telemetryHandles = e.telemetryHandles, this.credentialSlots = e.credentialSlots, 
    this.mcpProcessWiring = e.mcpProcessWiring, this.requestLatches = e.requestLatches, 
    this.accountCreditLatches = e.accountCreditLatches, this.proactivity = e.proactivity;
  }
}

function vn() {
  return new $e({
    clock: new f0r,
    backgroundHousekeeping: new Ye,
    launchOptions: new _e,
    settingsSource: new qe,
    extensionsConfig: new We,
    modelStringsCache: new Ne,
    diagnostics: new Ge,
    telemetryHandles: new Ke,
    credentialSlots: new Ve,
    mcpProcessWiring: new Je,
    requestLatches: new ze,
    accountCreditLatches: new Qe,
    proactivity: new Xe
  });
}

function zi(e = h$o()) {
  return zHr({
    host: vn(),
    id: K4n() ?? hEe(),
    project: {
      originalCwd: e,
      projectRoot: e,
      cwd: e
    }
  });
}

var y = zi(TYn);

function B() {
  return n();
}

function n() {
  return k()?.session ?? y;
}

function ps(e) {
  return e.of(y.host);
}

function h() {
  let e = k();
  return e?.session ? void 0 : e;
}

var k = () => {};

function e9s(e) {
  k = e;
}

pn(e => un.of(n().host).reporter?.(e));

function q() {
  return h()?.sessionId ?? n().id;
}

function Ze() {
  let e = h()?.sessionId;
  if (e) return To(e);
  let t = n();
  return t.identity.mainAgentId(t.id);
}

function kn() {
  let e = n();
  return e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0;
}

function EDo(e = {}) {
  let t = n(), o = t.id;
  t.sessionScratch.forgetPlanSlug(o), t.identity.replaceProjectDir(null);
  let r = kn();
  t.requestJournal.replacePromptIndex(0), t.requestJournal.replaceLastPersonPrompt(null), 
  t.requestJournal.replaceLastCancelledAPIMessageId(null), t.requestJournal.clearLastMainThreadRequest(), 
  t.requestJournal.replaceLastMainRequestId(void 0), t.modelSelection.forgetRefusalFallbackOccurred(), 
  t.sessionFlags.forgetPendingContextCompacted(), t.sessionScratch.replacePendingBranchLinks(), 
  t.sessionScratch.replaceChromeAvailabilityStagesLogged(r);
  let i = Rn(), s = hEe();
  return t.costLedger.scopeTo(s), t.update({
    id: s,
    ...e.setCurrentAsParent && {
      parentId: o
    }
  }), Cn(t, "clear", i), t.id;
}

function Cn(e, t, o) {
  let r = Tn.of(e);
  if (o) r.emit(e.id, t, o); else r.emit(e.id, t);
}

function xn(e) {
  An.of(e).emit(Lo(e).originalCwd);
}

function JOe() {
  let e = h();
  return e ? e.parentSessionId : n().parentId;
}

function Z_(e, t, o = null, r) {
  let i = n(), s = r ? O(i.project, Pn(r)) : r, a, l = i.parentId;
  if (i.id !== e) {
    if (i.sessionScratch.forgetPlanSlug(i.id), i.requestJournal.replaceLastCancelledAPIMessageId(null), 
    i.requestJournal.replaceLastPersonPrompt(null), i.requestJournal.clearLastMainThreadRequest(e), 
    t !== "fork") i.requestJournal.replaceLastMainRequestId(void 0);
    i.modelSelection.forgetRefusalFallbackOccurred(), i.sessionFlags.forgetPendingContextCompacted(), 
    i.sessionScratch.replacePendingBranchLinks(), i.sessionScratch.replaceChromeAvailabilityStagesLogged(kn()), 
    a = Rn(), l = void 0;
  }
  if (i.identity.replaceProjectDir(o), i.update({
    id: e,
    parentId: l,
    ...s !== void 0 && {
      project: s
    }
  }), Cn(i, t, a), r?.originalCwd !== void 0) xn(i);
}

function Rn() {
  let e = n(), t = e.modelSelection.refusalFallbackModelLatch();
  if (e.modelSelection.unlatchRefusalFallbackModel("session_transition"), !t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel) return;
  return e.modelSelection.overrideMainLoopModel(t.previousOverride), {
    appStateModel: t.previousAppStateModel,
    forSessionValue: t.previousModelForSession,
    overrideValue: t.previousOverride,
    restoredToExplicitOverride: t.previousOverride !== void 0,
    fallbackModel: t.fallbackModel
  };
}

var Tn = new lt(() => Me());

function Oc(e) {
  return Tn.of(n()).subscribe(e);
}

function GHr() {
  return n().sessionScratch.humanAttachmentDigests();
}

function kDo() {
  return n().sessionScratch.inboundAttachmentFiles();
}

function QOe() {
  return n().sessionScratch.filesPlacedByName();
}

function eYn() {
  return n().sessionScratch.filesPlacedByNameRead();
}

function VHr(e) {
  n().sessionScratch.setFilesPlacedByNameRead(e);
}

function F$t() {
  return n().sessionScratch.inboundAttachmentDownloads();
}

function U$t() {
  return n().sessionScratch.arrivingInboundFiles();
}

function Ime() {
  let e = h();
  return e ? e.sessionProjectDir : n().identity.projectDir();
}

function ke() {
  return h()?.originalCwd ?? Lo(n()).originalCwd;
}

function ea() {
  if (h()?.originalCwd === void 0 && n().project === null) return null;
  return ke();
}

function p6() {
  return wht();
}

function ux() {
  return ke() === Ji();
}

function Ir() {
  return h()?.projectRoot ?? Lo(n()).projectRoot;
}

function pm() {
  if (h()?.projectRoot === void 0 && n().project === null) return null;
  return Ir();
}

function Pn(e) {
  return e;
}

function mdn(e) {
  let t = n();
  if (t.update({
    project: Pn(e)
  }), e.originalCwd !== void 0) xn(t);
}

function px(e) {
  mdn({
    originalCwd: e
  });
}

var An = new lt(() => Me());

function TDo(e) {
  return An.of(n()).subscribe(e);
}

function _Ee(e) {
  mdn({
    projectRoot: e
  });
}

function TA() {
  return Lo(n()).cwd;
}

function xJe(e) {
  mdn({
    cwd: e
  });
}

function gdn() {
  n().costLedger.restartClock();
}

function Uje() {
  return n().costLedger.sessionStartTime();
}

function ADo() {
  return n().host.mcpProcessWiring.directConnectServerUrl();
}

function _ae() {
  return n().host.mcpProcessWiring.connectNonBlocking();
}

function CDo(e) {
  n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}

function RDo() {
  return n().sessionFlags.teardownUnwindRequested();
}

function KHr(e) {
  n().sessionFlags.replaceTeardownUnwindRequested(e);
}

function xDo() {
  return n().sessionFlags.backgroundAutoModeSetupInFlight();
}

function qHr(e) {
  n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}

function PDo() {
  return n().sessionFlags.deferredToolStubGateLatch();
}

function IDo(e) {
  n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}

function ODo() {
  return n().sessionFlags.verifySkillRolloutGateLatch();
}

function MDo(e) {
  n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}

function HDo() {
  return n().sessionFlags.commitSkillRolloutGateLatch();
}

function DDo(e) {
  n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}

function LDo() {
  return n().sessionFlags.memoryToolsShapeLatch();
}

function tYn(e) {
  n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}

function hdn(e) {
  n().sessionFlags.armPendingContextCompacted(e);
}

function NDo() {
  return n().sessionFlags.consumePendingContextCompacted();
}

function $Do() {
  n().sessionFlags.forgetPendingContextCompacted();
}

function QS() {
  return n().host.mcpProcessWiring.strictConfig();
}

function ydn(e) {
  n().host.mcpProcessWiring.replaceStrictConfig(e);
}

function _dn() {
  return n().host.launchOptions.cliSessionConfigCarried();
}

function bdn(e) {
  n().host.launchOptions.replaceCliSessionConfigCarried(e);
}

function mL() {
  return n().host.launchOptions.forkRestrictedLaunchConfig();
}

function FDo(e) {
  n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}

function HX() {
  return n().host.launchOptions.forkReplayLaunchConfig();
}

function UDo(e) {
  n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}

function Sdn() {
  return n().mcpSessionWiring.approvedServers();
}

function nYn(e, t) {
  n().mcpSessionWiring.approveServers(e, t);
}

function BDo(e, t) {
  n().costLedger.recordApiDuration(e, t);
}

function jDo(e, t, o) {
  n().costLedger.recordCost(e, t, o);
}

function Hy() {
  return n().costLedger.totalCostUSD();
}

function gL() {
  return n().costLedger.totalAPIDuration();
}

function Ome() {
  return n().costLedger.totalDuration();
}

function YHr() {
  return n().costLedger.totalAPIDurationWithoutRetries();
}

function XHr() {
  return n().costLedger.totalToolDuration();
}

function JHr(e) {
  n().costLedger.recordToolDuration(e);
}

function sht() {
  return n().host.telemetryHandles.statsStore();
}

function WDo(e) {
  n().host.telemetryHandles.replaceStatsStore(e);
}

function Mme(e) {
  n().userPresence.recordInteraction(e);
}

function Hme() {
  n().userPresence.flushIfDirty();
}

function yq(e) {
  return n().userPresence.interactionFired.subscribe(e);
}

function zDo() {
  n().userPresence.resetBaseline();
}

function GDo(e, t) {
  n().costLedger.recordLinesChanged(e, t);
}

function ZOe() {
  return n().costLedger.totalLinesAdded();
}

function eMe() {
  return n().costLedger.totalLinesRemoved();
}

function B$t() {
  return n().costLedger.totalInputTokens();
}

function Xg() {
  return n().costLedger.totalOutputTokens();
}

function j$t() {
  return n().costLedger.totalCacheReadInputTokens();
}

function W$t() {
  return n().costLedger.totalCacheCreationInputTokens();
}

function VDo() {
  return n().costLedger.totalWebSearchRequests();
}

function KDo() {
  n().costLedger.markUnknownModelCost();
}

function QHr() {
  return n().costLedger.hasUnknownModelCost();
}

function ZHr() {
  n().costLedger.recordSafetyStop();
}

function DX() {
  return n().costLedger.safetyStops();
}

function WG() {
  return n().requestJournal.lastMainRequestId();
}

function qDo(e) {
  n().requestJournal.replaceLastMainRequestId(e);
}

function bEe() {
  n().requestJournal.replaceLastMainRequestId(void 0);
}

function PJe() {
  return n().requestJournal.mainChainReleaseCount();
}

function f6() {
  return n().requestJournal.lastMainThreadCacheTtlMs();
}

function YDo(e, t) {
  return n().requestJournal.isLastMainThreadAskLive(e, t);
}

function _q() {
  return n().requestJournal.lastMainThreadRequestAt();
}

function wdn() {
  return n().requestJournal.lastLiveMainThreadRequestAt();
}

function XDo(e, t, o) {
  n().requestJournal.replaceLastMainThreadCacheTtlMs(e, t, o);
}

function JDo(e) {
  n().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}

function QDo(e) {
  n().requestJournal.recordLastMainThreadCacheRenewal(e);
}

function iht() {
  return n().requestJournal.lastMainThreadCacheRenewedAt();
}

function tMe() {
  return n().requestJournal.lastMainThreadContextTokens();
}

function nMe(e) {
  n().requestJournal.replaceLastMainThreadContextTokens(e);
}

function ZDo(e) {
  let t = n();
  if (e.sessionId !== void 0 && e.sessionId === t.id) t.requestJournal.applyResumeSeed(e); else t.requestJournal.stageResumeSeed(e);
}

function Qee() {
  return n().requestJournal.lastApiCompletionTimestamp();
}

function rYn(e) {
  n().requestJournal.replaceLastApiCompletionTimestamp(e);
}

function z$t(e, {keepsCachedPrefix: t = !1} = {}) {
  let o = n().requestJournal;
  if (o.replacePendingPostCompaction(!0), o.replaceLastMainThreadContextTokens(e), 
  !t) o.replaceLastMainThreadRequest(null, null);
}

function e0o() {
  let e = n(), t = e.requestJournal.pendingPostCompaction();
  return e.requestJournal.replacePendingPostCompaction(!1), t;
}

function Kp() {
  return n().userPresence.lastInteractionTime();
}

function eDr() {
  return n().userPresence.lastSubmitTime();
}

function IJe() {
  n().userPresence.recordSubmit();
}

var OJe = 6e4;

function t0o(e) {
  n().userPresence.updateTerminalFocus(e);
}

function rMe() {
  return n().userPresence.terminalFocus();
}

function n0o(e) {
  return n().userPresence.terminalFocusFired.subscribe(e);
}

function r0o() {
  let e = rMe();
  if (e !== void 0) return e;
  return Date.now() - Kp() < OJe;
}

function tDr() {
  n().userPresence.markScrollActivity();
}

function aht() {
  return n().userPresence.scrollDraining();
}

async function vdn() {
  return n().userPresence.waitForScrollIdle();
}

function hM() {
  return n().costLedger.modelUsage();
}

function o0o(e) {
  return n().costLedger.usageForModel(e);
}

function ic() {
  return n().modelSelection.mainLoopModelOverride();
}

function pD() {
  return n().modelSelection.initialMainLoopModel();
}

function Pp(e) {
  n().modelSelection.overrideMainLoopModel(e);
}

function Edn() {
  return n().modelSelection.mainLoopEffortState();
}

function kdn(e) {
  n().modelSelection.replaceMainLoopEffortState(e);
}

function s0o(e) {
  n().modelSelection.markRefusalFallbackOccurred(e);
}

function zG() {
  return n().modelSelection.refusalFallbackOccurred();
}

function G$t(e) {
  n().modelSelection.armRefusalFallbackHeader(e);
}

function Bje() {
  return n().modelSelection.refusalFallbackHeaderArmed();
}

function i0o() {
  n().modelSelection.armSilentLaneFromServer();
}

function nDr() {
  return n().modelSelection.silentLaneServerArmed();
}

function a0o() {
  return n().modelSelection.refusalFallbackLatchOriginRequestId();
}

function V$t(e) {
  let t = n(), o = t.modelSelection.refusalFallbackModelLatch();
  if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    t.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      fallbackModel: e.fallbackModel,
      carriedEffort: e.carriedEffort ?? o.carriedEffort
    });
    return;
  }
  t.modelSelection.replaceRefusalFallbackModelLatch(e);
}

function Dme() {
  n().modelSelection.unlatchRefusalFallbackModel("model_pick");
}

function Uj() {
  return n().modelSelection.refusalFallbackModelLatch();
}

function Tdn(e) {
  let {modelSelection: t} = n(), o = t.refusalFallbackModelLatch();
  if (o !== void 0) t.replaceRefusalFallbackModelLatch({
    ...o,
    carriedEffort: void 0
  }, e);
}

function l0o() {
  return n().modelSelection.takeCarriedEffortEnd();
}

function d0o(e) {
  let t = n(), o = t.modelSelection.refusalFallbackModelLatch();
  if (o) t.modelSelection.replaceRefusalFallbackModelLatch({
    ...o,
    previousOverride: e
  });
}

function c0o() {
  n().modelSelection.forgetRefusalFallbackOccurred();
}

function u0o(e) {
  n().surfaceCapabilities.markSdkDialogHostActive(e);
}

function GG() {
  return n().surfaceCapabilities.sdkDialogHostActive();
}

function rDr(e, t) {
  n().surfaceCapabilities.declareDialogKinds(e, t);
}

function bae() {
  return n().surfaceCapabilities.sdkSupportedDialogKinds();
}

function p0o() {
  let e = n();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}

function f0o(e) {
  n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}

function Adn() {
  return n().surfaceCapabilities.sdkPerTaskStopAffordance() === !0;
}

function m0o(e) {
  n().surfaceCapabilities.declareRapidFollowupPreempt(e);
}

function g0o() {
  return n().surfaceCapabilities.sdkRapidFollowupPreempt() === !0;
}

function h0o(e) {
  n().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}

function oYn(e) {
  n().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}

function lht() {
  return n().surfaceCapabilities.hostRendersChromeSetupOffer() === !0;
}

function VG() {
  return n().host.launchOptions.replConfigArgv();
}

function jje(e) {
  n().host.launchOptions.replaceReplConfigArgv(e);
}

function y0o(e) {
  n().modelSelection.replaceInitialMainLoopModel(e);
}

function _0o() {
  return n().modelSelection.availabilityFallbackChain();
}

function b0o(e) {
  n().modelSelection.replaceAvailabilityFallbackChain(e);
}

function Cdn() {
  return n().modelSelection.initialModelSettingLayer();
}

function S0o(e) {
  n().modelSelection.replaceInitialModelSettingLayer(e);
}

function w0o() {
  return n().modelSelection.resolvedOrgDefault();
}

function MJe(e) {
  n().modelSelection.replaceResolvedOrgDefault(e);
}

function v0o() {
  return n().modelSelection.initialEnvDefaultModel();
}

function E0o(e) {
  n().modelSelection.replaceInitialEnvDefaultModel(e);
}

function Of() {
  return h()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}

function k0o(e) {
  n().surfaceCapabilities.replaceSdkBetas(e);
}

function K$t() {
  return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}

function T0o(e) {
  n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}

function A0o() {
  return n().host.accountCreditLatches.usageCreditsRequired();
}

function Rdn(e) {
  n().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}

function oDr(e) {
  return n().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}

function sDr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, t);
}

function C0o(e) {
  return n().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}

function iDr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, t);
}

function SEe() {
  return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}

function q$t(e) {
  n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}

function Wje() {
  return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}

function xdn(e) {
  n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}

function R0o(e) {
  y.costLedger.registerSaver(e);
}

function x0o(e) {
  n().costLedger.runSaver(e, y.costLedger);
}

function P0o(e) {
  y.costLedger.registerTranscriptRecorder(e);
}

function I0o(e, t) {
  n().costLedger.runTranscriptRecorder(e, t, y.costLedger);
}

function O0o() {
  let e = n();
  return e.costLedger.belongsTo(e.id);
}

function Pdn() {
  let e = n();
  e.costLedger.claim(e.id);
}

function M0o() {
  let e = n();
  e.costLedger.scopeTo(e.id);
}

function HJe() {
  let e = n();
  e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null);
}

function H0o(e) {
  let t = n();
  t.costLedger.restore(e, t.id);
}

function Qr() {
  return n().host.launchOptions.projectConfigRoot();
}

function D0o(e) {
  n().host.launchOptions.replaceProjectConfigRoot(e);
}

function Y$t() {
  return n().host.modelStringsCache.modelStrings();
}

function sYn(e) {
  n().host.modelStringsCache.replaceModelStrings(e);
}

function L0o() {
  n().host.modelStringsCache.invalidate();
}

function N0o(e) {
  n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}

function $0o() {
  return n().host.modelStringsCache.admin3PSteeringSnapshot();
}

function dht() {
  return n().host.telemetryHandles.loggerProvider();
}

function aDr(e) {
  n().host.telemetryHandles.replaceLoggerProvider(e);
}

function zje() {
  return n().host.telemetryHandles.eventLogger();
}

function lDr() {
  return n().host.telemetryHandles.eventLoggerOwner();
}

function dDr(e, t = "org") {
  n().host.telemetryHandles.attachEventLogger(e, t);
}

function F0o(e) {
  return n().host.telemetryHandles.bufferPendingEvent(e);
}

function cDr(e) {
  n().host.telemetryHandles.closeWindow(e);
}

function U0o() {
  return n().host.telemetryHandles.windowCloseCause();
}

function Idn() {
  return n().host.telemetryHandles.isWindowOpen();
}

function X$t() {
  return n().host.telemetryHandles.hostOtel();
}

function DJe() {
  return n().host.telemetryHandles.tracerProvider();
}

function uDr(e) {
  n().host.telemetryHandles.replaceTracerProvider(e);
}

function iYn() {
  return n().host.requestLatches.foundryDeploymentCapabilities();
}

function B0o() {
  return n().host.telemetryHandles.cachedTelemetryResource();
}

function j0o(e) {
  n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}

function pDr(e) {
  return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e);
}

function W0o(e, t) {
  n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t);
}

function ve() {
  return !n().host.launchOptions.isInteractive();
}

function J$t() {
  return n().host.launchOptions.spareClaimState();
}

function fx() {
  return n().host.launchOptions.spareClaimState() === "parked";
}

function z0o() {
  let e = n().host.launchOptions;
  e.replaceSpareClaimState("parked"), e.replaceSpareParkedAtMs(Date.now());
}

function G0o() {
  let e = n().host.launchOptions, t = e.spareParkedAtMs();
  return e.replaceSpareClaimState("claiming"), t === void 0 ? void 0 : Date.now() - t;
}

function V0o() {
  n().host.launchOptions.replaceSpareClaimState("claimed");
}

function K0o() {
  n().host.launchOptions.replaceSpareClaimState("failed");
}

function Q$t() {
  let e = n().host.launchOptions.spareClaimState();
  return e === "parked" || e === "claiming" || e === "failed";
}

function qp() {
  return n().host.launchOptions.isInteractive();
}

function q0o(e) {
  n().host.launchOptions.replaceIsInteractive(e);
}

function LX() {
  return n().host.launchOptions.printOutputFormat();
}

function Y0o(e) {
  n().host.launchOptions.replacePrintOutputFormat(e);
}

function LJe() {
  return n().host.launchOptions.thinkingDisplayExplicit();
}

function NJe(e) {
  n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}

function mx() {
  return n().host.launchOptions.permissionPromptToolName();
}

function X0o(e) {
  n().host.launchOptions.replacePermissionPromptToolName(e);
}

function Mu() {
  return n().surfaceCapabilities.attacherCaps();
}

function J0o(e) {
  n().surfaceCapabilities.replaceAttacherCaps(e);
}

function hL(e) {
  return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}

function Q0o() {
  return n().surfaceCapabilities.rvSupervisorLinkLive();
}

function Odn(e) {
  n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}

function Z0o(e) {
  return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}

function cht() {
  return n().host.launchOptions.hasStreamingInput();
}

function eLo(e) {
  n().host.launchOptions.replaceHasStreamingInput(e);
}

function tLo({hasStreamingInput: e, sdkUrl: t}) {
  return !e && !t;
}

function Qi(e) {
  if (e.entrypoint === "terminal") return e.ownEventsRequested ? "terminal" : "none";
  if (e.ownEventsOnly) return "evals";
  if (e.hasStreamingInput || e.sdkUrl) return "host";
  if (e.ownEventsRequested) return "evals";
  return "none";
}

function nLo(e) {
  n().host.launchOptions.replaceSingleShotPrintSession(e);
}

function KG() {
  return n().host.launchOptions.singleShotPrintSession();
}

function rLo() {
  n().host.launchOptions.markPrintInputClosed();
}

function oMe() {
  return n().host.launchOptions.printInputClosed();
}

function Mdn() {
  return n().host.launchOptions.clientType();
}

function oLo(e) {
  n().host.launchOptions.replaceClientType(e);
}

function Gje() {
  return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}

function Hdn(e) {
  n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}

function Ddn() {
  return n().host.launchOptions.rendererMode();
}

function sLo(e) {
  n().host.launchOptions.replaceRendererMode(e);
}

function Ldn() {
  return n().host.launchOptions.strictToolResultPairing();
}

function jw() {
  return n().host.launchOptions.restrictedSession();
}

function Ndn(e) {
  n().host.launchOptions.replaceRestrictedSession(e);
}

function $dn() {
  return n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}

function FC() {
  return $dn() !== null;
}

function Xi(e) {
  for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots()) if (e === t || e.startsWith(t.endsWith(yn) ? t : t + yn)) return o;
  return null;
}

function iLo(e) {
  return Xi(e) !== null;
}

function aLo(e) {
  if ($dn()?.gateKeys.includes(e)) return !0;
  for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values()) if (t.gateKeys.includes(e)) return !0;
  return !1;
}

function lLo() {
  return n().sessionFlags.accountMemoryLaunchMode();
}

function UC() {
  return n().sessionFlags.memoryToggledOff();
}

function Zee(e) {
  let t = n();
  if (t.sessionFlags.memoryToggledOff() === e) return;
  t.sessionFlags.replaceMemoryToggledOff(e), Mn.of(t).emit(e);
}

var Mn = new lt(() => Me());

function Z$t(e, t = n()) {
  return Mn.of(t).subscribe(e);
}

function Sae() {
  return n().sessionFlags.autoMemoryOffThisSession();
}

function $Je(e) {
  let t = n();
  if (t.sessionFlags.autoMemoryOffThisSession() === e) return;
  t.sessionFlags.replaceAutoMemoryOffThisSession(e), wn.of(t).emit(e);
}

var wn = new lt(() => Me());

function eFt(e, t = n()) {
  return wn.of(t).subscribe(e);
}

function fDr() {
  return n().sessionFlags.restoredMemoryPause();
}

function tFt(e) {
  n().sessionFlags.replaceRestoredMemoryPause(e);
}

function dLo() {
  return n().sessionFlags.restoredAutoMemoryOff();
}

function FJe(e) {
  n().sessionFlags.replaceRestoredAutoMemoryOff(e);
}

function cLo(e) {
  if (e === !1) throw Error("setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production");
  n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}

function uLo() {
  return n().host.launchOptions.wizardOperatorToolsEnabled();
}

function uht() {
  return n().host.launchOptions.pollEventIngress();
}

function pLo() {
  return uht() !== "none";
}

function Yi(e) {
  n().host.launchOptions.markPollEventIngress(e);
}

function $i() {
  n().host.launchOptions.markOwnEventDeliveryRequested();
}

function fLo(e) {
  let t = Qi(e);
  if (t !== "none" && !(t === "host" && uht() === "evals")) Yi(t);
  if (e.ownEventsRequested) $i();
}

function Bj() {
  return n().host.launchOptions.userMsgOptIn();
}

function sMe(e) {
  n().host.launchOptions.replaceUserMsgOptIn(e);
}

function mLo() {
  return n().host.launchOptions.searchToolsOptIn();
}

function gLo(e) {
  n().host.launchOptions.replaceSearchToolsOptIn(e);
}

function hLo() {
  return n().host.launchOptions.todoToolsOptIn();
}

function yLo(e) {
  n().host.launchOptions.replaceTodoToolsOptIn(e);
}

function _Lo() {
  return n().host.launchOptions.toolsOmittedByLaunchList();
}

function bLo(e) {
  n().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}

function SLo() {
  return n().host.launchOptions.sessionStartType();
}

function Fdn(e) {
  n().host.launchOptions.replaceSessionStartType(e);
}

function mDr() {
  return n().host.launchOptions.questionPreviewFormat();
}

function gDr(e) {
  n().host.launchOptions.replaceQuestionPreviewFormat(e);
}

function wEe() {
  return n().host.launchOptions.extendedQuestionsEnabled();
}

function wLo(e) {
  n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}

function vLo() {
  return n().host.launchOptions.questionOptionDescriptionsOptional();
}

function ELo(e) {
  n().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}

function hDr() {
  return n().sessionScratch.agentColorMap();
}

function BC() {
  return n().host.settingsSource.flagSettingsPath();
}

function kLo(e) {
  n().host.settingsSource.replaceFlagSettingsPath(e);
}

function Lme() {
  return n().host.settingsSource.flagAgentsFilePaths();
}

function TLo(e) {
  n().host.settingsSource.replaceFlagAgentsFilePaths(e);
}

function Ww() {
  return n().host.settingsSource.flagSettingsExpectedContent();
}

function ALo(e) {
  n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}

function ete() {
  return n().host.settingsSource.flagSettingsFilePinnedContent();
}

function CLo(e) {
  n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}

function Mf() {
  return n().host.settingsSource.flagSettingsInline();
}

function gx(e) {
  n().host.settingsSource.replaceFlagSettingsInline(e);
}

function pht() {
  return n().host.settingsSource.parentManagedSettings();
}

function RLo(e) {
  n().host.settingsSource.replaceParentManagedSettings(e);
}

function tte() {
  return n().host.settingsSource.parentManagedSettingsInvalid();
}

function xLo(e) {
  n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}

function Vje() {
  let e = k();
  return e ? e.secrets.sessionIngressToken : n().host.credentialSlots.sessionIngressToken();
}

function Kje(e) {
  let t = k();
  if (t) t.secrets.sessionIngressToken = e; else n().host.credentialSlots.replaceSessionIngressToken(e);
}

function bq() {
  return n().host.credentialSlots.oauthTokenFromFd();
}

function R$(e) {
  n().host.credentialSlots.replaceOauthTokenFromFd(e);
}

function YU() {
  return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}

function nFt(e) {
  n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}

function PLo() {
  return n().host.credentialSlots.oauthScopesFromFd();
}

function rFt(e) {
  n().host.credentialSlots.replaceOauthScopesFromFd(e);
}

function yDr() {
  return n().host.credentialSlots.apiKeyFromFd();
}

function _Dr(e) {
  n().host.credentialSlots.replaceApiKeyFromFd(e);
}

function ILo(e) {
  return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}

function fht(e) {
  n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}

function bDr() {
  return n().host.credentialSlots.gatewayTokenFromDescriptor();
}

function aYn(e) {
  n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}

function OLo() {
  n().host.credentialSlots.resetFdCredentialState();
}

function Lr() {
  return n().host.credentialSlots.gatewayAuth();
}

function MLo() {
  let e = n().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}

function hx(e) {
  return !!e && !e.unpinned;
}

function lYn(e) {
  let t = e?.hostVerdict;
  return t !== void 0 && "verified" in t && t.verified;
}

function dYn(e) {
  return hx(e) || lYn(e);
}

function HLo(e) {
  n().host.credentialSlots.replaceGatewayServerProcess(e);
}

function UJe() {
  return n().host.credentialSlots.gatewayServerProcess();
}

function BJe(e) {
  n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}

function jJe() {
  return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}

function nte(e) {
  n().host.credentialSlots.replaceGatewayAuth(e);
}

function DLo() {
  return n().host.credentialSlots.authenticatedAccount();
}

function vEe(e) {
  n().host.credentialSlots.stampAuthenticatedAccount(e);
}

function Nme() {
  return n().host.credentialSlots.authenticatedAccountEpoch();
}

function LLo() {
  return n().host.credentialSlots.startupPolicySnapshot();
}

function NLo(e) {
  n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}

function iMe() {
  return n().host.credentialSlots.gatewayRefreshInFlight();
}

function SDr(e) {
  n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}

function $Lo(e) {
  n().requestJournal.replaceLastAPIRequest(e);
}

function Udn() {
  return n().requestJournal.lastAPIRequest();
}

function cYn(e) {
  n().requestJournal.replaceLastCancelledAPIMessageId(e);
}

function aMe() {
  return n().requestJournal.lastCancelledAPIMessageId();
}

function FLo(e) {
  n().requestJournal.replaceLastAPIRequestMessages(e);
}

function uYn(e) {
  n().requestJournal.replaceLastClassifierRequests(e);
}

function wDr() {
  return n().requestJournal.lastClassifierRequests();
}

function Bdn(e) {
  let t = h();
  if (t) t.cachedClaudeMdContent = e; else n().sessionFlags.replaceCachedClaudeMdContent(e);
}

function ULo() {
  let e = h();
  return e ? e.cachedClaudeMdContent : n().sessionFlags.cachedClaudeMdContent();
}

function qje() {
  let {settingsSource: e, launchOptions: t} = n().host;
  return t.workspaceRestrictionState()?.restriction ? e.allowedSettingSourcesWithoutRepoDirSources() : e.allowedSettingSources();
}

function $me() {
  return n().host.settingsSource.allowedSettingSources();
}

function vDr(e) {
  n().host.settingsSource.replaceAllowedSettingSources(e);
}

function jdn() {
  return ve() && n().host.launchOptions.clientType() !== "claude-vscode";
}

function m6(e) {
  n().host.extensionsConfig.replaceInlinePlugins(e);
}

function yx() {
  return n().host.extensionsConfig.inlinePlugins();
}

function Wdn(e) {
  n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}

function XU() {
  return n().host.extensionsConfig.inlinePluginsNoMcp();
}

function BLo(e) {
  n().host.extensionsConfig.replaceInlinePluginUrls(e);
}

function Yje() {
  return n().host.extensionsConfig.inlinePluginUrls();
}

function mht(e, t) {
  n().host.extensionsConfig.replaceSyncedPluginDirs(e, t);
}

function zdn(e) {
  return n().host.extensionsConfig.syncedPluginAttestation(e);
}

function jLo(e) {
  n().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}

function WLo(e) {
  return n().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}

function pYn() {
  return n().host.extensionsConfig.syncedPluginDirsRegistered();
}

function Xje() {
  return n().pluginsSync.syncedLaneOpened;
}

function zLo() {
  n().pluginsSync.syncedLaneOpened = !0;
}

function EDr(e) {
  for (let t of e) n().pluginsSync.syncedDirsLoadedHere.add(bn(t));
}

function GLo(e) {
  return n().pluginsSync.syncedDirsLoadedHere.has(bn(e));
}

function fD() {
  return n().pluginsSync;
}

function VLo() {
  return n().pluginsSync.lastCompleteList;
}

function KLo() {
  n().host.extensionsConfig.clearSyncedPluginDirs(), n().pluginsSync.syncedLaneOpened = !1, 
  n().pluginsSync.syncedDirsLoadedHere.clear(), n().pluginsSync.removalsDeferredHere.clear();
}

function Fme() {
  return n().host.extensionsConfig.syncedPluginDirs();
}

function Gdn(e) {
  n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}

function Vdn() {
  return n().sessionFlags.accountSkillsSyncEnabled();
}

function Kdn(e) {
  n().sessionFlags.replaceSkillsSyncVetoed(e);
}

function wT() {
  return n().sessionFlags.skillsSyncVetoed();
}

function qLo(e) {
  n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}

function ght() {
  return n().sessionFlags.accountPluginsSyncEnabled();
}

function YLo(e) {
  n().sessionFlags.replacePluginsSyncVetoed(e);
}

function rte() {
  return n().sessionFlags.pluginsSyncVetoed();
}

function XLo(e) {
  n().host.extensionsConfig.replaceChromeFlagOverride(e);
}

function wae() {
  return n().host.extensionsConfig.chromeFlagOverride();
}

function JLo(e) {
  n().host.extensionsConfig.replaceTeammateAgentId(e);
}

function Pb() {
  return n().host.extensionsConfig.teammateAgentId();
}

function QLo(e) {
  n().sessionFlags.replaceOnboardingShownThisSession(e);
}

function ZLo() {
  return n().sessionFlags.onboardingShownThisSession();
}

function qG(e) {
  let t = n();
  t.host.settingsSource.replaceUseCoworkPlugins(e), LHr.of(t.host).invalidateAll();
}

function qdn() {
  return n().host.settingsSource.useCoworkPlugins();
}

function eNo(e) {
  n().host.launchOptions.replaceDisableSlashCommands(e);
}

function ny() {
  return n().host.launchOptions.disableSlashCommands();
}

function Ydn() {
  return n().host.launchOptions.disableFileMentions();
}

function Jje() {
  return n().host.launchOptions.sessionUploadsDir();
}

function Xdn(e) {
  n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}

function NX() {
  return n().host.launchOptions.sessionBypassPermissionsMode();
}

function JU(e) {
  n().host.launchOptions.replaceScheduledTasksEnabled(e);
}

function fYn() {
  return n().host.launchOptions.scheduledTasksEnabled();
}

function tNo(e) {
  return n().host.launchOptions.onScheduledTasksEnabled(e);
}

function cg() {
  return h()?.sessionCronTasks ?? n().sessionCron.tasks();
}

function EEe(e) {
  let t = h();
  if (t) t.sessionCronTasks.push(e); else n().sessionCron.schedule(e);
  n().sessionCron.changed.emit();
}

function nNo(e) {
  return n().sessionCron.chainStartedAt(e);
}

function kDr(e, t) {
  n().sessionCron.recordChainStart(e, t);
}

function Jdn(e) {
  n().sessionCron.forgetChainStart(e);
}

function Ume() {
  return n().sessionCron.tickInFlightPrompt();
}

function hht(e) {
  n().sessionCron.replaceTickInFlightPrompt(e);
}

function TDr() {
  return n().sessionCron.consecutiveKeepalives();
}

function Qdn(e) {
  n().sessionCron.replaceConsecutiveKeepalives(e);
}

function Zdn() {
  return n().sessionCron.ended();
}

function oFt() {
  return n().sessionCron.wakeFires();
}

function ecn() {
  n().sessionCron.recordWakeFire();
}

function sFt() {
  n().sessionCron.resetWakeFires();
}

function mYn(e) {
  if (n().sessionCron.replaceEnded(e), e) n().sessionCron.changed.emit();
}

function g6(e, {handOff: t = !1} = {}) {
  if (e.length === 0) return 0;
  let o = new Set(e), r = h(), i = r ? r.sessionCronTasks : n().sessionCron.tasks(), s = i.filter(d => !o.has(d.id)), a = i.length - s.length;
  if (a === 0) return 0;
  let l = !t && i.some(d => d.kind === "loop" && o.has(d.id));
  if (r) r.sessionCronTasks.length = 0, r.sessionCronTasks.push(...s); else n().sessionCron.replaceTasks(s);
  if (l) n().sessionCron.pendingLoopWakeup.emit(void 0);
  return n().sessionCron.changed.emit(), a;
}

function tcn(e) {
  return n().sessionCron.changed.subscribe(e);
}

function rNo(e) {
  return n().sessionCron.pendingLoopWakeup.subscribe(e);
}

function iFt(e) {
  n().sessionCron.pendingLoopWakeup.emit(e);
}

function yL(e) {
  n().sessionFlags.replaceSessionTrustAccepted(e);
}

function kEe() {
  return n().sessionFlags.sessionTrustAccepted();
}

function Qje(e) {
  n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}

function TEe() {
  return n().sessionFlags.homeTrustDialogAccepted();
}

function oNo(e) {
  n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}

function EI() {
  return n().host.launchOptions.sessionPersistenceDisabled();
}

function he() {
  return _x();
}

function _x() {
  return n().host.launchOptions.diskless();
}

function ZS() {
  return y.host.launchOptions.diskless();
}

function ncn() {
  return n().host.launchOptions.ccrSessionUrl();
}

function Zje() {
  return n().host.launchOptions.ccrDerivedSurface();
}

function rcn() {
  return n().host.launchOptions.toolsMachine();
}

function ocn() {
  return n().sessionFlags.hasExitedPlanMode();
}

function x$(e) {
  n().sessionFlags.replaceHasExitedPlanMode(e);
}

function ADr() {
  return n().host.proactivity.selectorGate();
}

function sNo() {
  return n().host.proactivity.selectorGateEverOn();
}

function iNo() {
  n().host.proactivity.inheritSelectorGateEverOn();
}

function CDr(e) {
  n().host.proactivity.replaceSelectorGate(e);
}

function aNo(e) {
  n().host.proactivity.resampleSelectorGate(e);
}

function aFt(e) {
  return n().host.proactivity.subscribeSelectorGateChanged(e);
}

function lNo(e) {
  n().host.proactivity.replaceHostGateSubscription(e);
}

function dNo() {
  return n().sessionFlags.needsPlanModeExitAttachment();
}

function Sq(e) {
  n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}

function Bme(e, t) {
  if (t === "plan" && e !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!1);
  if (e === "plan" && t !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!0);
}

function cNo() {
  return n().sessionFlags.needsAutoModeExitAttachment();
}

function _L(e) {
  n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}

function uNo(e, t) {
  if (e === "auto" && t === "plan" || e === "plan" && t === "auto") return;
  let o = e === "auto", r = t === "auto";
  if (r && !o) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!1);
  if (o && !r) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!0);
}

function RDr() {
  return n().sessionFlags.lspRecommendationShownThisSession();
}

function xDr(e) {
  n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}

function pNo(e) {
  n().host.launchOptions.replaceInitJsonSchema(e);
}

function PDr() {
  return n().host.launchOptions.initJsonSchema();
}

function fNo(e) {
  n().mcpSessionWiring.registerClientsAccessor(e);
}

function IDr(e) {
  return n().mcpSessionWiring.acquireClientsAccessor(e);
}

function ew() {
  return n().mcpSessionWiring.clientsFromAccessor();
}

function scn(e) {
  n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}

function h6() {
  return n().host.mcpProcessWiring.ensureConnectedClient();
}

function yht(e) {
  n().mcpSessionWiring.registerConnectedClientWiring(e);
}

function icn() {
  return n().mcpSessionWiring.connectedClientWiring();
}

function mNo(e) {
  n().mcpSessionWiring.registerToolsSwapper(e);
}

function ODr(e) {
  return n().mcpSessionWiring.acquireToolsSwapper(e);
}

function acn(e, t, o) {
  return n().mcpSessionWiring.swapServerTools(e, t, o);
}

function T() {
  return h() ?? n().hookRegistry.holder();
}

function y6(e) {
  let t = T();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let i = o;
    if (!t.registeredHooks[i]) t.registeredHooks[i] = [];
    t.registeredHooks[i].push(...r);
  }
  $X();
}

function P$() {
  return T().registeredHooks;
}

function gNo() {
  return y.hookRegistry.holder().registeredHooks;
}

function lcn() {
  let e = T();
  e.registeredHooks = null, e.sdkHostOutOfReachNoted = void 0, $X();
}

function hNo() {
  let e = T();
  if (e.sdkHostOutOfReachNoted) return !1;
  return e.sdkHostOutOfReachNoted = !0, !0;
}

function MDr() {
  T().sdkHostOutOfReachNoted = void 0;
}

function jj() {
  return T().pluginHookRunner;
}

function HDr(e) {
  let t = jj();
  Zi();
  let o = {};
  for (let [r, i] of Object.entries(e)) o[r] = i.filter(s => !("pluginRoot" in s) || t?.holds(s.pluginId) !== !0);
  y6(o);
}

function Zi() {
  let e = T();
  if (!e.registeredHooks) return;
  let t = e.pluginHookRunner, o = {};
  for (let [r, i] of Object.entries(e.registeredHooks)) {
    let s = i.filter(a => !("pluginRoot" in a) || t?.holds(a.pluginId) === !0);
    if (s.length > 0) o[r] = s;
  }
  e.registeredHooks = Object.keys(o).length > 0 ? o : null, $X();
}

var On = new K(() => Me());

function $X() {
  ps(On).emit();
}

function yNo(e) {
  return ps(On).subscribe(e);
}

function AEe() {
  return n().sessionScratch.planSlugCache();
}

function DDr() {
  return h()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}

function LDr() {
  return h()?.sessionSpawnedTeammatePanes ?? n().sessionScratch.sessionSpawnedTeammatePanes();
}

function gYn() {
  return h()?.surfacedHookSpawnFailures ?? n().sessionScratch.surfacedHookSpawnFailures();
}

function NDr() {
  return k()?.pendingConversationEditKinds ?? y.sessionScratch.pendingConversationEditKinds();
}

function $Dr() {
  return k()?.clientTruncatedAssistantIds ?? y.sessionScratch.clientTruncatedAssistantIds();
}

function FDr() {
  return k()?.heldStatelessReplyIds ?? y.sessionScratch.heldStatelessReplyIds();
}

function UDr() {
  return k()?.unsupportedThreadKeys ?? y.sessionScratch.unsupportedThreadKeys();
}

function _No() {
  return h()?.bareMcpServerMatchersWarned ?? n().sessionScratch.bareMcpServerMatchersWarned();
}

function hYn() {
  return h()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}

function BDr() {
  return n().sessionScratch.pendingPrLinks();
}

function bNo() {
  return n().sessionScratch.policyPredicateTelemetryEmitted();
}

function _ht() {
  return h()?.chromeAvailabilityStagesLogged ?? n().sessionScratch.chromeAvailabilityStagesLogged();
}

function SNo() {
  return n().sessionScratch.chromeAvailabilityAnchorMs();
}

function wNo() {
  return n().sessionFlags.proposeGoalAvailabilityLogged();
}

function vNo() {
  n().sessionFlags.markProposeGoalAvailabilityLogged();
}

function jDr() {
  return n().sessionFlags.inheritedTeamName();
}

function ENo(e) {
  n().sessionFlags.replaceInheritedTeamName(e);
}

function lFt(e) {
  n().sessionFlags.replaceTeleportedSessionInfo({
    isTeleported: !0,
    hasLoggedFirstMessage: !1,
    sessionId: e.sessionId
  });
}

function dFt() {
  return n().sessionFlags.teleportedSessionInfo();
}

function WDr() {
  n().sessionFlags.markFirstTeleportMessageLogged();
}

function ote(e, t, o, r = null) {
  let i = `${r ?? ""}:${e}`;
  n().invokedSkills.record(i, {
    skillName: e,
    skillPath: t,
    content: o,
    invokedAt: Date.now(),
    agentId: r
  });
}

function FX() {
  return n().invokedSkills.skills();
}

function zDr(e, t) {
  let o = n(), r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, {
    ...r,
    content: t
  });
}

function kNo(e) {
  let t = e ?? null, o = new Map;
  for (let [r, i] of n().invokedSkills.skills()) if (i.agentId === t) o.set(r, i);
  return o;
}

function TNo(e) {
  let t = n();
  if (!e || e.size === 0) {
    t.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === null || !e.has(r.agentId)) t.invokedSkills.forget(o);
}

function WJe(e) {
  let t = n();
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === e) t.invokedSkills.forget(o);
}

function t9s(e, t) {
  n().host.diagnostics.recordSlowOperation(e, t);
}

function n9s() {
  return n().host.diagnostics.slowOperations();
}

function r9s() {
  return n().host.diagnostics.devBarAlert();
}

function OE() {
  let e = h();
  return e ? e.mainThreadAgentType : n().hookRegistry.mainThreadAgentType();
}

function vae(e) {
  let t = h();
  if (t) t.mainThreadAgentType = e; else n().hookRegistry.replaceMainThreadAgentType(e);
}

function Eae() {
  let e = h();
  return e ? e.mainThreadAgentHooks : n().hookRegistry.mainThreadAgentHooks();
}

function ANo() {
  return y.hookRegistry.mainThreadAgentHooks();
}

function yYn(e) {
  let t = h();
  if (t) t.mainThreadAgentHooks = e; else n().hookRegistry.replaceMainThreadAgentHooks(e);
  $X();
}

function YG() {
  return n().host.extensionsConfig.sessionSkillAllowlist();
}

function CNo(e) {
  n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}

function yM() {
  return n().surfaceCapabilities.caps();
}

function dcn(e) {
  n().surfaceCapabilities.replaceCaps(e);
}

function Fn() {
  return n().surfaceCapabilities.caps().workspace === "remote";
}

function UX(e) {
  n().surfaceCapabilities.markRemote(e);
}

function bht() {
  return n().promptAssembly.sections();
}

function RNo(e, t) {
  n().promptAssembly.recordSection(e, t);
}

function ccn(e) {
  n().promptAssembly.forgetAllSections(), kI(e);
}

function kI(e) {
  n().promptAssembly.noteInvalidation(e);
}

function BX() {
  return n().promptAssembly.epoch();
}

function o9s() {
  return n().promptAssembly.lastInvalidationReason();
}

function xNo() {
  return n().sessionScratch.vimSharedState();
}

function PNo(e) {
  n().sessionScratch.replaceVimSharedState(e);
}

function fc() {
  return he() ? [] : n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}

function QU(e) {
  n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}

function Dy() {
  return n().host.extensionsConfig.allowedChannels();
}

function eWe(e) {
  n().host.extensionsConfig.replaceAllowedChannels(e);
}

function ucn() {
  return n().host.extensionsConfig.hasDevChannels();
}

function INo(e) {
  n().host.extensionsConfig.replaceHasDevChannels(e);
}

function ONo() {
  return n().host.requestLatches.promptCache1hAllowlist();
}

function MNo(e) {
  n().host.requestLatches.replacePromptCache1hAllowlist(e);
}

function tWe(e) {
  return n().host.requestLatches.thinkingTypeOverrides().get(e);
}

function HNo(e, t) {
  n().host.requestLatches.recordThinkingTypeOverride(e, t);
}

function pcn(e) {
  return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}

function GDr(e, t) {
  if (e === t) return;
  let o = n().host.requestLatches, r = o.servedModelsByRequestedModel().get(e);
  if (r) r.add(t); else o.recordServedModels(e, new Set([ t ]));
}

function _Yn(e) {
  return n().host.requestLatches.effortUnsupportedModels().has(e);
}

function fcn(e) {
  n().host.requestLatches.markEffortUnsupported(e);
}

function DNo(e) {
  return n().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}

function LNo(e) {
  n().host.requestLatches.markStructuredOutputsUnsupported(e);
}

function NNo() {
  n().host.requestLatches.clearStructuredOutputsUnsupported();
}

function $No(e) {
  return n().host.requestLatches.context1mRefusedModels().has(e);
}

function FNo(e) {
  n().host.requestLatches.markContext1mRefused(e);
}

function VDr() {
  n().host.requestLatches.clearContext1mRefused();
}

function UNo(e) {
  return n().host.requestLatches.refusedBetas(e);
}

function BNo(e, t) {
  n().host.requestLatches.markBetaRefused(e, t);
}

function jNo() {
  return n().host.requestLatches.midConvCachePromotionRejected();
}

function WNo() {
  n().host.requestLatches.markMidConvCachePromotionRejected();
}

function kae() {
  return n().host.requestLatches.thirdPartyServerClassifierRefused();
}

function mcn() {
  n().host.requestLatches.markThirdPartyServerClassifierRefused();
}

function bYn() {
  return n().host.requestLatches.threadsHeldForServerClassifier();
}

function zNo() {
  n().host.requestLatches.markThreadsHeldForServerClassifier();
}

function GNo(e) {
  return n().host.requestLatches.autoModeUnavailableResponse(e);
}

function KDr(e) {
  return n().host.requestLatches.autoModeUnavailableResponsesInARow(e);
}

function qDr(e, t) {
  n().host.requestLatches.noteAutoModeUnavailableResponse(e, t);
}

function YDr(e) {
  n().host.requestLatches.clearAutoModeUnavailableResponses(e);
}

function XDr(e) {
  n().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}

function SYn() {
  return n().host.requestLatches.autoModeUnavailableStopNotice();
}

function VNo(e) {
  n().host.requestLatches.setLocalCommandExitCode(e);
}

function KNo() {
  return n().host.requestLatches.localCommandExitCode();
}

function qNo() {
  return n().host.requestLatches.observedGateway();
}

function YNo(e) {
  n().host.requestLatches.noteObservedGateway(e);
}

function wYn() {
  return n().host.requestLatches.serverClassifierFallbackChoice();
}

function XNo(e) {
  n().host.requestLatches.setServerClassifierFallbackChoice(e);
}

function JDr() {
  n().host.requestLatches.clearServerClassifierFallbackChoice();
}

function JNo() {
  return n().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}

function QNo() {
  return n().host.requestLatches.perTurnEffortOkEmitted();
}

function ZNo() {
  n().host.requestLatches.markPerTurnEffortOkEmitted();
}

function e$o() {
  return n().host.requestLatches.lateToolAdditionsOkEmitted();
}

function t$o() {
  n().host.requestLatches.markLateToolAdditionsOkEmitted();
}

function n$o() {
  return n().host.requestLatches.toolChangeHeaderRefused();
}

function r$o() {
  n().host.requestLatches.markToolChangeHeaderRefused();
}

function o$o() {
  return n().host.requestLatches.promptEndMarkRefused();
}

function s$o() {
  n().host.requestLatches.markPromptEndMarkRefused();
}

function vYn() {
  return n().host.requestLatches.inlineToolsRefused();
}

function QDr() {
  n().host.requestLatches.markInlineToolsRefused();
}

function i$o() {
  return n().host.requestLatches.inlineToolsOkEmitted();
}

function a$o() {
  n().host.requestLatches.markInlineToolsOkEmitted();
}

function ZDr() {
  return n().host.requestLatches.thinkingResumptionRefused();
}

function l$o() {
  n().host.requestLatches.markThinkingResumptionRefused();
}

function d$o() {
  return n().host.requestLatches.refusedBetaHeaders();
}

function Sht(e) {
  n().host.requestLatches.markBetaHeaderRefused(e);
}

function gcn() {
  return n().host.requestLatches.thinkingHighlightsRefused();
}

function c$o() {
  n().host.requestLatches.markThinkingHighlightsRefused();
}

function u$o(e) {
  return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}

function p$o(e) {
  n().host.requestLatches.markToolChangeUnsupportedModel(e);
}

function CEe(e) {
  return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}

function f$o(e, t) {
  n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}

function di() {
  return h()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}

function jX() {
  let e = h();
  return e ? e.conversationAtisLatch : n().conversationLatches.atisLatch();
}

function nWe(e) {
  let t = h();
  if (t) t.conversationAtisLatch = e; else n().conversationLatches.replaceAtisLatch(e);
}

function EYn() {
  let e = h();
  if (e) e.stickyBetas = X(e.stickyBetas); else n().conversationLatches.unlatchStickyBetas();
  VDr();
}

function lMe() {
  return n().requestJournal.promptId();
}

function cFt(e) {
  n().requestJournal.replacePromptId(e);
}

function m$o() {
  return n().requestJournal.incrementPromptIndex();
}

function wq() {
  return n().requestJournal.promptIndex();
}

function hcn(e, t) {
  let o = n().requestJournal, r = o.lastPersonPrompt(), i = Date.parse(t);
  if (r === null || !Number.isNaN(i) && !(i < Date.parse(r.timestamp))) o.replaceLastPersonPrompt({
    uuid: e,
    timestamp: t
  });
}

function kYn() {
  return n().requestJournal.lastPersonPrompt();
}

function mc() {
  return n().surfaceCapabilities.replBridgeActive();
}

function rWe(e) {
  n().surfaceCapabilities.replaceReplBridgeActive(e);
}

function REe() {
  return n().surfaceCapabilities.mainLoopBusy();
}

function ycn() {
  return n().surfaceCapabilities.mainQueryRunning();
}

function g$o(e) {
  n().surfaceCapabilities.replaceMainLoopStatus(e);
}

export { hEe, V4n, K4n, hDo, Lje, xHr, PHr, ldn, ddn, H$t, Hv, IHr, OHr, MHr, D$t, jG, SJe, Nje, wJe, cdn, $je, udn, HHr, L$t, DHr, yEe, Rme, q4n, Zgt, vJe, zn, K, vI, zUs, GUs, N$t, EJe, LHr, Xee, kA, eht, Y4n, yDo, tht, _Do, nht, X4n, VUs, rht, bDo, SDo, pdn, J4n, fL, xb, dg, em, NHr, KUs, Q4n, $Hr, FHr, oht, fdn, Jee, UHr, $$t, hae, Fje, xme, Pme, yae, kJe, BHr, jHr, TJe, qU, eo, u6, AJe, wDo, WHr, vDo, qUs, Z4n, CJe, gM, RJe, Lo, zHr, lt, YUs, B, ps, e9s, q, Ze, EDo, JOe, Z_, Oc, GHr, kDo, QOe, eYn, VHr, F$t, U$t, Ime, ke, ea, p6, ux, Ir, pm, mdn, px, TDo, _Ee, TA, xJe, gdn, Uje, ADo, _ae, CDo, RDo, KHr, xDo, qHr, PDo, IDo, ODo, MDo, HDo, DDo, LDo, tYn, hdn, NDo, $Do, QS, ydn, _dn, bdn, mL, FDo, HX, UDo, Sdn, nYn, BDo, jDo, Hy, gL, Ome, YHr, XHr, JHr, sht, WDo, Mme, Hme, yq, zDo, GDo, ZOe, eMe, B$t, Xg, j$t, W$t, VDo, KDo, QHr, ZHr, DX, WG, qDo, bEe, PJe, f6, YDo, _q, wdn, XDo, JDo, QDo, iht, tMe, nMe, ZDo, Qee, rYn, z$t, e0o, Kp, eDr, IJe, OJe, t0o, rMe, n0o, r0o, tDr, aht, vdn, hM, o0o, ic, pD, Pp, Edn, kdn, s0o, zG, G$t, Bje, i0o, nDr, a0o, V$t, Dme, Uj, Tdn, l0o, d0o, c0o, u0o, GG, rDr, bae, p0o, f0o, Adn, m0o, g0o, h0o, oYn, lht, VG, jje, y0o, _0o, b0o, Cdn, S0o, w0o, MJe, v0o, E0o, Of, k0o, K$t, T0o, A0o, Rdn, oDr, sDr, C0o, iDr, SEe, q$t, Wje, xdn, R0o, x0o, P0o, I0o, O0o, Pdn, M0o, HJe, H0o, Qr, D0o, Y$t, sYn, L0o, N0o, $0o, dht, aDr, zje, lDr, dDr, F0o, cDr, U0o, Idn, X$t, DJe, uDr, iYn, B0o, j0o, pDr, W0o, ve, J$t, fx, z0o, G0o, V0o, K0o, Q$t, qp, q0o, LX, Y0o, LJe, NJe, mx, X0o, Mu, J0o, hL, Q0o, Odn, Z0o, cht, eLo, tLo, nLo, KG, rLo, oMe, Mdn, oLo, Gje, Hdn, Ddn, sLo, Ldn, jw, Ndn, $dn, FC, iLo, aLo, lLo, UC, Zee, Z$t, Sae, $Je, eFt, fDr, tFt, dLo, FJe, cLo, uLo, uht, pLo, fLo, Bj, sMe, mLo, gLo, hLo, yLo, _Lo, bLo, SLo, Fdn, mDr, gDr, wEe, wLo, vLo, ELo, hDr, BC, kLo, Lme, TLo, Ww, ALo, ete, CLo, Mf, gx, pht, RLo, tte, xLo, Vje, Kje, bq, R$, YU, nFt, PLo, rFt, yDr, _Dr, ILo, fht, bDr, aYn, OLo, Lr, MLo, hx, lYn, dYn, HLo, UJe, BJe, jJe, nte, DLo, vEe, Nme, LLo, NLo, iMe, SDr, $Lo, Udn, cYn, aMe, FLo, uYn, wDr, Bdn, ULo, qje, $me, vDr, jdn, m6, yx, Wdn, XU, BLo, Yje, mht, zdn, jLo, WLo, pYn, Xje, zLo, EDr, GLo, fD, VLo, KLo, Fme, Gdn, Vdn, Kdn, wT, qLo, ght, YLo, rte, XLo, wae, JLo, Pb, QLo, ZLo, qG, qdn, eNo, ny, Ydn, Jje, Xdn, NX, JU, fYn, tNo, cg, EEe, nNo, kDr, Jdn, Ume, hht, TDr, Qdn, Zdn, oFt, ecn, sFt, mYn, g6, tcn, rNo, iFt, yL, kEe, Qje, TEe, oNo, EI, he, _x, ZS, ncn, Zje, rcn, ocn, x$, ADr, sNo, iNo, CDr, aNo, aFt, lNo, dNo, Sq, Bme, cNo, _L, uNo, RDr, xDr, pNo, PDr, fNo, IDr, ew, scn, h6, yht, icn, mNo, ODr, acn, y6, P$, gNo, lcn, hNo, MDr, jj, HDr, $X, yNo, AEe, DDr, LDr, gYn, NDr, $Dr, FDr, UDr, _No, hYn, BDr, bNo, _ht, SNo, wNo, vNo, jDr, ENo, lFt, dFt, WDr, ote, FX, zDr, kNo, TNo, WJe, t9s, n9s, r9s, OE, vae, Eae, ANo, yYn, YG, CNo, yM, dcn, Fn, UX, bht, RNo, ccn, kI, BX, o9s, xNo, PNo, fc, QU, Dy, eWe, ucn, INo, ONo, MNo, tWe, HNo, pcn, GDr, _Yn, fcn, DNo, LNo, NNo, $No, FNo, VDr, UNo, BNo, jNo, WNo, kae, mcn, bYn, zNo, GNo, KDr, qDr, YDr, XDr, SYn, VNo, KNo, qNo, YNo, wYn, XNo, JDr, JNo, QNo, ZNo, e$o, t$o, n$o, r$o, o$o, s$o, vYn, QDr, i$o, a$o, ZDr, l$o, d$o, Sht, gcn, c$o, u$o, p$o, CEe, f$o, di, jX, nWe, EYn, lMe, cFt, m$o, wq, hcn, kYn, mc, rWe, REe, ycn, g$o };
