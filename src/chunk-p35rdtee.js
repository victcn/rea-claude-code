// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { H$t, IHr, MHr, D$t, wJe, HHr, L$t, DHr, yEe, Jee, Fje, Pme, yae, kJe, qU } from "./chunk-3pqddg8f.js";

import { xEe, vT } from "./chunk-ddr690nj.js";

var v = DHr(Object.getPrototypeOf, Object), yln = v;

var d = Object.prototype, g = d.hasOwnProperty;

function P(r, t, e) {
  var o = r[t];
  if (!(g.call(r, t) && xEe(o, e)) || e === void 0 && !(t in r)) Jee(r, t, e);
}

var MXe = P;

function x(r) {
  var t = [];
  if (r != null) for (var e in Object(r)) t.push(e);
  return t;
}

var u = x;

var O = Object.prototype, I = O.hasOwnProperty;

function h(r) {
  if (!vT(r)) return u(r);
  var t = L$t(r), e = [];
  for (var o in r) if (!(o == "constructor" && (t || !I.call(r, o)))) e.push(o);
  return e;
}

var l = h;

function K(r) {
  return yEe(r) ? HHr(r, !0) : l(r);
}

var cje = K;

var c = Object.getOwnPropertySymbols, A = !c ? MHr : function(r) {
  var t = [];
  while (r) H$t(t, D$t(r)), r = yln(r);
  return t;
}, AMr = A;

function S(r) {
  return IHr(r, cje, AMr);
}

var _ln = S;

function w(r, t, e, o) {
  if (!vT(r)) return r;
  t = Pme(t, r);
  var i = -1, m = t.length, s = m - 1, n = r;
  while (n != null && ++i < m) {
    var f = yae(t[i]), a = e;
    if (f === "__proto__" || f === "constructor" || f === "prototype") return r;
    if (i != s) {
      var p = n[f];
      if (a = o ? o(p, f, n) : void 0, a === void 0) a = vT(p) ? p : wJe(t[i + 1]) ? [] : {};
    }
    MXe(n, f, a), n = n[f];
  }
  return r;
}

var y = w;

function b(r, t, e) {
  var o = -1, i = t.length, m = {};
  while (++o < i) {
    var s = t[o], n = kJe(r, s);
    if (e(n, s)) y(m, Pme(s, r), n);
  }
  return m;
}

var TMr = b;

function _(r, t) {
  if (r == null) return {};
  var e = Fje(_ln(r), function(o) {
    return [ o ];
  });
  return t = qU(t), TMr(r, e, function(o, i) {
    return t(o, i[0]);
  });
}

var Is = _;

export { MXe, TMr, yln, AMr, cje, _ln, Is };
