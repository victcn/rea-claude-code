// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { IEe } from "./chunk-b0z4bv3v.js";

import { xme } from "./chunk-3pqddg8f.js";

import { i, Vs } from "./chunk-hedpgw9m.js";

function Z(e, r, u, o) {
  var a = -1, n = e == null ? 0 : e.length;
  if (o && n) u = e[++a];
  while (++a < n) u = r(u, e[a], a, e);
  return u;
}

var d = Z;

function I(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}

var x = I;

var D = {
  "\xc0": "A",
  "\xc1": "A",
  "\xc2": "A",
  "\xc3": "A",
  "\xc4": "A",
  "\xc5": "A",
  "\xe0": "a",
  "\xe1": "a",
  "\xe2": "a",
  "\xe3": "a",
  "\xe4": "a",
  "\xe5": "a",
  "\xc7": "C",
  "\xe7": "c",
  "\xd0": "D",
  "\xf0": "d",
  "\xc8": "E",
  "\xc9": "E",
  "\xca": "E",
  "\xcb": "E",
  "\xe8": "e",
  "\xe9": "e",
  "\xea": "e",
  "\xeb": "e",
  "\xcc": "I",
  "\xcd": "I",
  "\xce": "I",
  "\xcf": "I",
  "\xec": "i",
  "\xed": "i",
  "\xee": "i",
  "\xef": "i",
  "\xd1": "N",
  "\xf1": "n",
  "\xd2": "O",
  "\xd3": "O",
  "\xd4": "O",
  "\xd5": "O",
  "\xd6": "O",
  "\xd8": "O",
  "\xf2": "o",
  "\xf3": "o",
  "\xf4": "o",
  "\xf5": "o",
  "\xf6": "o",
  "\xf8": "o",
  "\xd9": "U",
  "\xda": "U",
  "\xdb": "U",
  "\xdc": "U",
  "\xf9": "u",
  "\xfa": "u",
  "\xfb": "u",
  "\xfc": "u",
  "\xdd": "Y",
  "\xfd": "y",
  "\xff": "y",
  "\xc6": "Ae",
  "\xe6": "ae",
  "\xde": "Th",
  "\xfe": "th",
  "\xdf": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010a": "C",
  "\u010c": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010b": "c",
  "\u010d": "c",
  "\u010e": "D",
  "\u0110": "D",
  "\u010f": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011a": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011b": "e",
  "\u011c": "G",
  "\u011e": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011d": "g",
  "\u011f": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012a": "I",
  "\u012c": "I",
  "\u012e": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012b": "i",
  "\u012d": "i",
  "\u012f": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013b": "L",
  "\u013d": "L",
  "\u013f": "L",
  "\u0141": "L",
  "\u013a": "l",
  "\u013c": "l",
  "\u013e": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014a": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014b": "n",
  "\u014c": "O",
  "\u014e": "O",
  "\u0150": "O",
  "\u014d": "o",
  "\u014f": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015a": "S",
  "\u015c": "S",
  "\u015e": "S",
  "\u0160": "S",
  "\u015b": "s",
  "\u015d": "s",
  "\u015f": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016a": "U",
  "\u016c": "U",
  "\u016e": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016b": "u",
  "\u016d": "u",
  "\u016f": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017b": "Z",
  "\u017d": "Z",
  "\u017a": "z",
  "\u017c": "z",
  "\u017e": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017f": "s"
}, P = x(D), s = P;

var j = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, H = "\\u0300-\\u036f", B = "\\ufe20-\\ufe2f", G = "\\u20d0-\\u20ff", J = H + B + G, V = "[" + J + "]", Y = RegExp(V, "g");

function q(e) {
  return e = xme(e), e && e.replace(j, s).replace(Y, "");
}

var p = q;

var K = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function Q(e) {
  return e.match(K) || [];
}

var b = Q;

var X = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function ee(e) {
  return X.test(e);
}

var l = ee;

var v = "\\ud800-\\udfff", re = "\\u0300-\\u036f", ue = "\\ufe20-\\ufe2f", oe = "\\u20d0-\\u20ff", te = re + ue + oe, C = "\\u2700-\\u27bf", h = "a-z\\xdf-\\xf6\\xf8-\\xff", ae = "\\xac\\xb1\\xd7\\xf7", ne = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fe = "\\u2000-\\u206f", de = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", O = "A-Z\\xc0-\\xd6\\xd8-\\xde", ie = "\\ufe0e\\ufe0f", y = ae + ne + fe + de, F = "['\u2019]", R = "[" + y + "]", xe = "[" + te + "]", k = "\\d+", se = "[" + C + "]", E = "[" + h + "]", U = "[^" + v + y + k + C + h + O + "]", ce = "\\ud83c[\\udffb-\\udfff]", me = "(?:" + xe + "|" + ce + ")", ge = "[^" + v + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", L = "[\\ud800-\\udbff][\\udc00-\\udfff]", t = "[" + O + "]", pe = "\\u200d", _ = "(?:" + E + "|" + U + ")", be = "(?:" + t + "|" + U + ")", S = "(?:" + F + "(?:d|ll|m|re|s|t|ve))?", A = "(?:" + F + "(?:D|LL|M|RE|S|T|VE))?", N = me + "?", T = "[" + ie + "]?", le = "(?:" + pe + "(?:" + [ ge, w, L ].join("|") + ")" + T + N + ")*", Re = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _e = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Se = T + N + le, Ae = "(?:" + [ se, w, L ].join("|") + ")" + Se, ve = RegExp([ t + "?" + E + "+" + S + "(?=" + [ R, t, "$" ].join("|") + ")", be + "+" + A + "(?=" + [ R, t + _, "$" ].join("|") + ")", t + "?" + _ + "+" + S, t + "+" + A, _e, Re, k, Ae ].join("|"), "g");

function Ce(e) {
  return e.match(ve) || [];
}

var z = Ce;

function he(e, r, u) {
  if (e = xme(e), r = u ? void 0 : r, r === void 0) return l(e) ? z(e) : b(e);
  return e.match(r) || [];
}

var M = he;

var Oe = "['\u2019]", ye = RegExp(Oe, "g");

function Fe(e) {
  return function(r) {
    return d(M(p(r).replace(ye, "")), e, "");
  };
}

var W = Fe;

var ke = W(function(e, r, u) {
  return e + (u ? "_" : "") + r.toLowerCase();
}), Mln = ke;

function c$t(e) {
  return `tool_${Mln(e)}`;
}

function EX(e) {
  return `cmd_${Mln(e)}`;
}

function kX(e) {
  return `hook_${Mln(e)}`;
}

function g(e, r) {
  i("tengu_feature_ok", {
    ...r,
    feature_name: c(e)
  });
}

function m(e, r, u) {
  i("tengu_feature_bad", {
    ...u,
    feature_name: c(e),
    error_code: IEe(r)
  });
}

function f(e, r, u) {
  i("tengu_feature_sad", {
    ...u,
    feature_name: c(e),
    error_code: IEe(r)
  });
}

async function Wr(e, r) {
  try {
    await Vs("tengu_feature_ok", {
      ...r,
      feature_name: c(e)
    });
  } catch {}
}

async function Bt(e, r, u) {
  try {
    await Vs("tengu_feature_bad", {
      ...u,
      feature_name: c(e),
      error_code: IEe(r)
    });
  } catch {}
}

async function Wa(e, r, u) {
  try {
    await Vs("tengu_feature_sad", {
      ...u,
      feature_name: c(e),
      error_code: IEe(r)
    });
  } catch {}
}

async function so(e, r, u) {
  try {
    let o = await r();
    return g(e), o;
  } catch (o) {
    throw m(e, u?.(o) ?? "error"), o;
  }
}

export { Mln, c$t, EX, kX, g, m, f, Wr, Bt, Wa, so };
