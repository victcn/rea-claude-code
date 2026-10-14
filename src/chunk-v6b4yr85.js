// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { hae } from "./chunk-3pqddg8f.js";

import { vT } from "./chunk-ddr690nj.js";

var s = /\s/;

function d(r) {
  var t = r.length;
  while (t-- && s.test(r.charAt(t))) ;
  return t;
}

var i = d;

var c = /^\s+/;

function a(r) {
  return r ? r.slice(0, i(r) + 1).replace(c, "") : r;
}

var o = a;

var n = NaN, x = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, b = /^0o[0-7]+$/i, u = parseInt;

function y(r) {
  if (typeof r == "number") return r;
  if (hae(r)) return n;
  if (vT(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = vT(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = o(r);
  var e = I.test(r);
  return e || b.test(r) ? u(r.slice(2), e ? 2 : 8) : x.test(r) ? n : +r;
}

var csn = y;

var f = 1 / 0, E = 17976931348623157e292;

function N(r) {
  if (!r) return r === 0 ? r : 0;
  if (r = csn(r), r === f || r === -f) {
    var t = r < 0 ? -1 : 1;
    return t * E;
  }
  return r === r ? r : 0;
}

var m = N;

function T(r) {
  var t = m(r), e = t % 1;
  return t === t ? e ? t - e : t : 0;
}

var dPr = T;

var O = "Expected a function";

function h(r, t) {
  var e;
  if (typeof t != "function") throw TypeError(O);
  return r = dPr(r), function() {
    if (--r > 0) e = t.apply(this, arguments);
    if (r <= 1) t = void 0;
    return e;
  };
}

var p = h;

function F(r) {
  return p(2, r);
}

var TC = F;

export { csn, dPr, TC };
