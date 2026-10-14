// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C, Ne } from "./chunk-m8ez8fhk.js";

var Ue = C(function(gl, At) {
  At.exports = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
  };
});

var N = C(function(ti) {
  var Fe, ei = [ 0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706 ];
  ti.getSymbolSize = function(e) {
    if (!e) throw Error('"version" cannot be null or undefined');
    if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
    return e * 4 + 17;
  };
  ti.getSymbolTotalCodewords = function(e) {
    return ei[e];
  };
  ti.getBCHDigit = function(t) {
    let e = 0;
    while (t !== 0) e++, t >>>= 1;
    return e;
  };
  ti.setToSJISFunction = function(e) {
    if (typeof e !== "function") throw Error('"toSJISFunc" is not a valid function.');
    Fe = e;
  };
  ti.isKanjiModeEnabled = function() {
    return typeof Fe < "u";
  };
  ti.toSJIS = function(e) {
    return Fe(e);
  };
});

var be = C(function(fi) {
  fi.L = {
    bit: 1
  };
  fi.M = {
    bit: 0
  };
  fi.Q = {
    bit: 3
  };
  fi.H = {
    bit: 2
  };
  function ui(t) {
    if (typeof t !== "string") throw Error("Param is not a string");
    switch (t.toLowerCase()) {
     case "l":
     case "low":
      return fi.L;

     case "m":
     case "medium":
      return fi.M;

     case "q":
     case "quartile":
      return fi.Q;

     case "h":
     case "high":
      return fi.H;

     default:
      throw Error("Unknown EC Level: " + t);
    }
  }
  fi.isValid = function(e) {
    return e && typeof e.bit < "u" && e.bit >= 0 && e.bit < 4;
  };
  fi.from = function(e, r) {
    if (fi.isValid(e)) return e;
    try {
      return ui(e);
    } catch (n) {
      return r;
    }
  };
});

var Nt = C(function(yl, Ot) {
  function Mt() {
    this.buffer = [], this.length = 0;
  }
  Mt.prototype = {
    get: function(t) {
      let e = Math.floor(t / 8);
      return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
    },
    put: function(t, e) {
      for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(t) {
      let e = Math.floor(this.length / 8);
      if (this.buffer.length <= e) this.buffer.push(0);
      if (t) this.buffer[e] |= 128 >>> this.length % 8;
      this.length++;
    }
  };
  Ot.exports = Mt;
});

var Ut = C(function(wl, qt) {
  function de(t) {
    if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
  }
  de.prototype.set = function(t, e, r, n) {
    let i = t * this.size + e;
    if (this.data[i] = r, n) this.reservedBit[i] = !0;
  };
  de.prototype.get = function(t, e) {
    return this.data[t * this.size + e];
  };
  de.prototype.xor = function(t, e, r) {
    this.data[t * this.size + e] ^= r;
  };
  de.prototype.isReserved = function(t, e) {
    return this.reservedBit[t * this.size + e];
  };
  qt.exports = de;
});

var Dt = C(function(ci) {
  var hi = N().getSymbolSize;
  ci.getRowColCoords = function(e) {
    if (e === 1) return [];
    let r = Math.floor(e / 7) + 2, n = hi(e), i = n === 145 ? 26 : Math.ceil((n - 13) / (2 * r - 2)) * 2, o = [ n - 7 ];
    for (let s = 1; s < r - 1; s++) o[s] = o[s - 1] - i;
    return o.push(6), o.reverse();
  };
  ci.getPositions = function(e) {
    let r = [], n = ci.getRowColCoords(e), i = n.length;
    for (let o = 0; o < i; o++) for (let s = 0; s < i; s++) {
      if (o === 0 && s === 0 || o === 0 && s === i - 1 || o === i - 1 && s === 0) continue;
      r.push([ n[o], n[s] ]);
    }
    return r;
  };
});

var Yt = C(function(gi) {
  var pi = N().getSymbolSize;
  gi.getPositions = function(e) {
    let r = pi(e);
    return [ [ 0, 0 ], [ r - 7, 0 ], [ 0, r - 7 ] ];
  };
});

var Kt = C(function(yi) {
  yi.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var G = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  yi.isValid = function(e) {
    return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7;
  };
  yi.from = function(e) {
    return yi.isValid(e) ? parseInt(e, 10) : void 0;
  };
  yi.getPenaltyN1 = function(e) {
    let r = e.size, n = 0, i = 0, o = 0, s = null, l = null;
    for (let u = 0; u < r; u++) {
      i = o = 0, s = l = null;
      for (let f = 0; f < r; f++) {
        let a = e.get(u, f);
        if (a === s) i++; else {
          if (i >= 5) n += G.N1 + (i - 5);
          s = a, i = 1;
        }
        if (a = e.get(f, u), a === l) o++; else {
          if (o >= 5) n += G.N1 + (o - 5);
          l = a, o = 1;
        }
      }
      if (i >= 5) n += G.N1 + (i - 5);
      if (o >= 5) n += G.N1 + (o - 5);
    }
    return n;
  };
  yi.getPenaltyN2 = function(e) {
    let r = e.size, n = 0;
    for (let i = 0; i < r - 1; i++) for (let o = 0; o < r - 1; o++) {
      let s = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
      if (s === 4 || s === 0) n++;
    }
    return n * G.N2;
  };
  yi.getPenaltyN3 = function(e) {
    let r = e.size, n = 0, i = 0, o = 0;
    for (let s = 0; s < r; s++) {
      i = o = 0;
      for (let l = 0; l < r; l++) {
        if (i = i << 1 & 2047 | e.get(s, l), l >= 10 && (i === 1488 || i === 93)) n++;
        if (o = o << 1 & 2047 | e.get(l, s), l >= 10 && (o === 1488 || o === 93)) n++;
      }
    }
    return n * G.N3;
  };
  yi.getPenaltyN4 = function(e) {
    let r = 0, n = e.data.length;
    for (let o = 0; o < n; o++) r += e.data[o];
    return Math.abs(Math.ceil(r * 100 / n / 5) - 10) * G.N4;
  };
  function mi(t, e, r) {
    switch (t) {
     case yi.Patterns.PATTERN000:
      return (e + r) % 2 === 0;

     case yi.Patterns.PATTERN001:
      return e % 2 === 0;

     case yi.Patterns.PATTERN010:
      return r % 3 === 0;

     case yi.Patterns.PATTERN011:
      return (e + r) % 3 === 0;

     case yi.Patterns.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 === 0;

     case yi.Patterns.PATTERN101:
      return e * r % 2 + e * r % 3 === 0;

     case yi.Patterns.PATTERN110:
      return (e * r % 2 + e * r % 3) % 2 === 0;

     case yi.Patterns.PATTERN111:
      return (e * r % 3 + (e + r) % 2) % 2 === 0;

     default:
      throw Error("bad maskPattern:" + t);
    }
  }
  yi.applyMask = function(e, r) {
    let n = r.size;
    for (let i = 0; i < n; i++) for (let o = 0; o < n; o++) {
      if (r.isReserved(o, i)) continue;
      r.xor(o, i, mi(e, o, i));
    }
  };
  yi.getBestMask = function(e, r) {
    let n = Object.keys(yi.Patterns).length, i = 0, o = 1 / 0;
    for (let s = 0; s < n; s++) {
      r(s), yi.applyMask(s, e);
      let l = yi.getPenaltyN1(e) + yi.getPenaltyN2(e) + yi.getPenaltyN3(e) + yi.getPenaltyN4(e);
      if (yi.applyMask(s, e), l < o) o = l, i = s;
    }
    return i;
  };
});

var Ye = C(function(Ti) {
  var x = be(), xe = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81 ], Be = [ 7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430 ];
  Ti.getBlocksCount = function(e, r) {
    switch (r) {
     case x.L:
      return xe[(e - 1) * 4 + 0];

     case x.M:
      return xe[(e - 1) * 4 + 1];

     case x.Q:
      return xe[(e - 1) * 4 + 2];

     case x.H:
      return xe[(e - 1) * 4 + 3];

     default:
      return;
    }
  };
  Ti.getTotalCodewordsCount = function(e, r) {
    switch (r) {
     case x.L:
      return Be[(e - 1) * 4 + 0];

     case x.M:
      return Be[(e - 1) * 4 + 1];

     case x.Q:
      return Be[(e - 1) * 4 + 2];

     case x.H:
      return Be[(e - 1) * 4 + 3];

     default:
      return;
    }
  };
});

var Wt = C(function(xi) {
  var pe = new Uint8Array(512), Ie = new Uint8Array(256);
  (function() {
    let e = 1;
    for (let r = 0; r < 255; r++) if (pe[r] = e, Ie[e] = r, e <<= 1, e & 256) e ^= 285;
    for (let r = 255; r < 512; r++) pe[r] = pe[r - 255];
  })();
  xi.log = function(e) {
    if (e < 1) throw Error("log(" + e + ")");
    return Ie[e];
  };
  xi.exp = function(e) {
    return pe[e];
  };
  xi.mul = function(e, r) {
    if (e === 0 || r === 0) return 0;
    return pe[Ie[e] + Ie[r]];
  };
});

var Jt = C(function(Li) {
  var K = Wt();
  Li.mul = function(e, r) {
    let n = new Uint8Array(e.length + r.length - 1);
    for (let i = 0; i < e.length; i++) for (let o = 0; o < r.length; o++) n[i + o] ^= K.mul(e[i], r[o]);
    return n;
  };
  Li.mod = function(e, r) {
    let n = new Uint8Array(e);
    while (n.length - r.length >= 0) {
      let i = n[0];
      for (let s = 0; s < r.length; s++) n[s] ^= K.mul(r[s], i);
      let o = 0;
      while (o < n.length && n[o] === 0) o++;
      n = n.slice(o);
    }
    return n;
  };
  Li.generateECPolynomial = function(e) {
    let r = new Uint8Array([ 1 ]);
    for (let n = 0; n < e; n++) r = Li.mul(r, new Uint8Array([ 1, K.exp(n) ]));
    return r;
  };
});

var Zt = C(function(Il, Qt) {
  var Ae = Jt();
  function He(t) {
    if (this.genPoly = void 0, this.degree = t, this.degree) this.initialize(this.degree);
  }
  He.prototype.initialize = function(e) {
    this.degree = e, this.genPoly = Ae.generateECPolynomial(this.degree);
  };
  He.prototype.encode = function(e) {
    if (!this.genPoly) throw Error("Encoder not initialized");
    let r = new Uint8Array(e.length + this.degree);
    r.set(e);
    let n = Ae.mod(r, this.genPoly), i = this.degree - n.length;
    if (i > 0) {
      let o = new Uint8Array(this.degree);
      return o.set(n, i), o;
    }
    return n;
  };
  Qt.exports = He;
});

var ze = C(function(Pi) {
  Pi.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  };
});

var Ge = C(function(Ui) {
  var ge = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  ge = ge.replace(/u/g, "\\u");
  var Mi = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ge + `)(?:.|[\r\n]))+`;
  Ui.KANJI = new RegExp(ge, "g");
  Ui.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  Ui.BYTE = new RegExp(Mi, "g");
  Ui.NUMERIC = new RegExp("[0-9]+", "g");
  Ui.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
  var Oi = new RegExp("^" + ge + "$"), Ni = new RegExp("^[0-9]+$"), qi = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  Ui.testKanji = function(e) {
    return Oi.test(e);
  };
  Ui.testNumeric = function(e) {
    return Ni.test(e);
  };
  Ui.testAlphanumeric = function(e) {
    return qi.test(e);
  };
});

var q = C(function(Wi) {
  var $t = ze(), W = Ge();
  Wi.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [ 10, 12, 14 ]
  };
  Wi.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [ 9, 11, 13 ]
  };
  Wi.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [ 8, 16, 16 ]
  };
  Wi.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [ 8, 10, 12 ]
  };
  Wi.MIXED = {
    bit: -1
  };
  Wi.getCharCountIndicator = function(e, r) {
    if (!e.ccBits) throw Error("Invalid mode: " + e);
    if (!$t.isValid(r)) throw Error("Invalid version: " + r);
    if (r >= 1 && r < 10) return e.ccBits[0]; else if (r < 27) return e.ccBits[1];
    return e.ccBits[2];
  };
  Wi.getBestModeForData = function(e) {
    if (W.testNumeric(e)) return Wi.NUMERIC; else if (W.testAlphanumeric(e)) return Wi.ALPHANUMERIC; else if (W.testKanji(e)) return Wi.KANJI; else return Wi.BYTE;
  };
  Wi.toString = function(e) {
    if (e && e.id) return e.id;
    throw Error("Invalid mode");
  };
  Wi.isValid = function(e) {
    return e && e.bit && e.ccBits;
  };
  function Ki(t) {
    if (typeof t !== "string") throw Error("Param is not a string");
    switch (t.toLowerCase()) {
     case "numeric":
      return Wi.NUMERIC;

     case "alphanumeric":
      return Wi.ALPHANUMERIC;

     case "kanji":
      return Wi.KANJI;

     case "byte":
      return Wi.BYTE;

     default:
      throw Error("Unknown mode: " + t);
    }
  }
  Wi.from = function(e, r) {
    if (Wi.isValid(e)) return e;
    try {
      return Ki(e);
    } catch (n) {
      return r;
    }
  };
});

var ir = C(function(je) {
  var U = N(), tr = Ye(), Le = be(), B = q(), j = ze(), er = U.getBCHDigit(7973);
  function Xi(t, e, r) {
    for (let n = 1; n <= 40; n++) if (e <= je.getCapacity(n, r, t)) return n;
    return;
  }
  function rr(t, e) {
    return B.getCharCountIndicator(t, e) + 4;
  }
  function eo(t, e) {
    let r = 0;
    return t.forEach(function(n) {
      let i = rr(n.mode, e);
      r += i + n.getBitsLength();
    }), r;
  }
  function to(t, e) {
    for (let r = 1; r <= 40; r++) if (eo(t, r) <= je.getCapacity(r, e, B.MIXED)) return r;
    return;
  }
  je.from = function(e, r) {
    if (j.isValid(e)) return parseInt(e, 10);
    return r;
  };
  je.getCapacity = function(e, r, n) {
    if (!j.isValid(e)) throw Error("Invalid QR Code version");
    if (typeof n > "u") n = B.BYTE;
    let i = U.getSymbolTotalCodewords(e), o = tr.getTotalCodewordsCount(e, r), s = (i - o) * 8;
    if (n === B.MIXED) return s;
    let l = s - rr(n, e);
    switch (n) {
     case B.NUMERIC:
      return Math.floor(l / 10 * 3);

     case B.ALPHANUMERIC:
      return Math.floor(l / 11 * 2);

     case B.KANJI:
      return Math.floor(l / 13);

     case B.BYTE:
     default:
      return Math.floor(l / 8);
    }
  };
  je.getBestVersionForData = function(e, r) {
    let n, i = Le.from(r, Le.M);
    if (Array.isArray(e)) {
      if (e.length > 1) return to(e, i);
      if (e.length === 0) return 1;
      n = e[0];
    } else n = e;
    return Xi(n.mode, n.getLength(), i);
  };
  je.getEncodedBits = function(e) {
    if (!j.isValid(e) || e < 7) throw Error("Invalid QR Code version");
    let r = e << 12;
    while (U.getBCHDigit(r) - er >= 0) r ^= 7973 << U.getBCHDigit(r) - er;
    return e << 12 | r;
  };
});

var sr = C(function(oo) {
  var J = N(), or = J.getBCHDigit(1335);
  oo.getEncodedBits = function(e, r) {
    let n = e.bit << 3 | r, i = n << 10;
    while (J.getBCHDigit(i) - or >= 0) i ^= 1335 << J.getBCHDigit(i) - or;
    return (n << 10 | i) ^ 21522;
  };
});

var fr = C(function(kl, ur) {
  var lr = q();
  function Q(t) {
    this.mode = lr.NUMERIC, this.data = t.toString();
  }
  Q.getBitsLength = function(e) {
    return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
  };
  Q.prototype.getLength = function() {
    return this.data.length;
  };
  Q.prototype.getBitsLength = function() {
    return Q.getBitsLength(this.data.length);
  };
  Q.prototype.write = function(e) {
    let r, n, i;
    for (r = 0; r + 3 <= this.data.length; r += 3) n = this.data.substr(r, 3), i = parseInt(n, 10), 
    e.put(i, 10);
    let o = this.data.length - r;
    if (o > 0) n = this.data.substr(r), i = parseInt(n, 10), e.put(i, o * 3 + 1);
  };
  ur.exports = Q;
});

var cr = C(function(Ml, hr) {
  var ar = q(), Je = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":" ];
  function Z(t) {
    this.mode = ar.ALPHANUMERIC, this.data = t;
  }
  Z.getBitsLength = function(e) {
    return 11 * Math.floor(e / 2) + 6 * (e % 2);
  };
  Z.prototype.getLength = function() {
    return this.data.length;
  };
  Z.prototype.getBitsLength = function() {
    return Z.getBitsLength(this.data.length);
  };
  Z.prototype.write = function(e) {
    let r;
    for (r = 0; r + 2 <= this.data.length; r += 2) {
      let n = Je.indexOf(this.data[r]) * 45;
      n += Je.indexOf(this.data[r + 1]), e.put(n, 11);
    }
    if (this.data.length % 2) e.put(Je.indexOf(this.data[r]), 6);
  };
  hr.exports = Z;
});

var gr = C(function(Ol, pr) {
  var dr = q();
  function X(t) {
    if (this.mode = dr.BYTE, typeof t === "string") this.data = (new TextEncoder).encode(t); else this.data = new Uint8Array(t);
  }
  X.getBitsLength = function(e) {
    return e * 8;
  };
  X.prototype.getLength = function() {
    return this.data.length;
  };
  X.prototype.getBitsLength = function() {
    return X.getBitsLength(this.data.length);
  };
  X.prototype.write = function(t) {
    for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
  };
  pr.exports = X;
});

var wr = C(function(Nl, yr) {
  var _r = q(), mr = N();
  function ee(t) {
    this.mode = _r.KANJI, this.data = t;
  }
  ee.getBitsLength = function(e) {
    return e * 13;
  };
  ee.prototype.getLength = function() {
    return this.data.length;
  };
  ee.prototype.getBitsLength = function() {
    return ee.getBitsLength(this.data.length);
  };
  ee.prototype.write = function(t) {
    let e;
    for (e = 0; e < this.data.length; e++) {
      let r = mr.toSJIS(this.data[e]);
      if (r >= 33088 && r <= 40956) r -= 33088; else if (r >= 57408 && r <= 60351) r -= 49472; else throw Error("Invalid SJIS character: " + this.data[e] + `\nMake sure your charset is UTF-8`);
      r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
    }
  };
  yr.exports = ee;
});

var Er = C(function(ql, Qe) {
  var _e = {
    single_source_shortest_paths: function(t, e, r) {
      var n = {}, i = {};
      i[e] = 0;
      var o = _e.PriorityQueue.make();
      o.push(e, 0);
      var s, l, u, f, a, h, c, p, _;
      while (!o.empty()) {
        s = o.pop(), l = s.value, f = s.cost, a = t[l] || {};
        for (u in a) if (a.hasOwnProperty(u)) {
          if (h = a[u], c = f + h, p = i[u], _ = typeof i[u] > "u", _ || p > c) i[u] = c, 
          o.push(u, c), n[u] = l;
        }
      }
      if (typeof r < "u" && typeof i[r] > "u") {
        var w = [ "Could not find a path from ", e, " to ", r, "." ].join("");
        throw Error(w);
      }
      return n;
    },
    extract_shortest_path_from_predecessor_list: function(t, e) {
      var r = [], n = e, i;
      while (n) r.push(n), i = t[n], n = t[n];
      return r.reverse(), r;
    },
    find_path: function(t, e, r) {
      var n = _e.single_source_shortest_paths(t, e, r);
      return _e.extract_shortest_path_from_predecessor_list(n, r);
    },
    PriorityQueue: {
      make: function(t) {
        var e = _e.PriorityQueue, r = {}, n;
        t = t || {};
        for (n in e) if (e.hasOwnProperty(n)) r[n] = e[n];
        return r.queue = [], r.sorter = t.sorter || e.default_sorter, r;
      },
      default_sorter: function(t, e) {
        return t.cost - e.cost;
      },
      push: function(t, e) {
        var r = {
          value: t,
          cost: e
        };
        this.queue.push(r), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  if (typeof Qe < "u") Qe.exports = _e;
});

var Br = C(function(ao) {
  var d = q(), $e = fr(), Xe = cr(), et = gr(), tt = wr(), k = Ge(), F = N(), br = Er();
  function Tr(t) {
    return unescape(encodeURIComponent(t)).length;
  }
  function me(t, e, r) {
    let n = [], i;
    while ((i = t.exec(r)) !== null) n.push({
      data: i[0],
      index: i.index,
      mode: e,
      length: i[0].length
    });
    return n;
  }
  function xr(t) {
    let e = me(k.NUMERIC, d.NUMERIC, t), r = me(k.ALPHANUMERIC, d.ALPHANUMERIC, t), n, i;
    if (F.isKanjiModeEnabled()) n = me(k.BYTE, d.BYTE, t), i = me(k.KANJI, d.KANJI, t); else n = me(k.BYTE_KANJI, d.BYTE, t), 
    i = [];
    return e.concat(r, n, i).sort(function(s, l) {
      return s.index - l.index;
    }).map(function(s) {
      return {
        data: s.data,
        mode: s.mode,
        length: s.length
      };
    });
  }
  function Ze(t, e) {
    switch (e) {
     case d.NUMERIC:
      return $e.getBitsLength(t);

     case d.ALPHANUMERIC:
      return Xe.getBitsLength(t);

     case d.KANJI:
      return tt.getBitsLength(t);

     case d.BYTE:
      return et.getBitsLength(t);
    }
  }
  function lo(t) {
    return t.reduce(function(e, r) {
      let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
      if (n && n.mode === r.mode) return e[e.length - 1].data += r.data, e;
      return e.push(r), e;
    }, []);
  }
  function uo(t) {
    let e = [];
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      switch (n.mode) {
       case d.NUMERIC:
        e.push([ n, {
          data: n.data,
          mode: d.ALPHANUMERIC,
          length: n.length
        }, {
          data: n.data,
          mode: d.BYTE,
          length: n.length
        } ]);
        break;

       case d.ALPHANUMERIC:
        e.push([ n, {
          data: n.data,
          mode: d.BYTE,
          length: n.length
        } ]);
        break;

       case d.KANJI:
        e.push([ n, {
          data: n.data,
          mode: d.BYTE,
          length: Tr(n.data)
        } ]);
        break;

       case d.BYTE:
        e.push([ {
          data: n.data,
          mode: d.BYTE,
          length: Tr(n.data)
        } ]);
      }
    }
    return e;
  }
  function fo(t, e) {
    let r = {}, n = {
      start: {}
    }, i = [ "start" ];
    for (let o = 0; o < t.length; o++) {
      let s = t[o], l = [];
      for (let u = 0; u < s.length; u++) {
        let f = s[u], a = "" + o + u;
        l.push(a), r[a] = {
          node: f,
          lastCount: 0
        }, n[a] = {};
        for (let h = 0; h < i.length; h++) {
          let c = i[h];
          if (r[c] && r[c].node.mode === f.mode) n[c][a] = Ze(r[c].lastCount + f.length, f.mode) - Ze(r[c].lastCount, f.mode), 
          r[c].lastCount += f.length; else {
            if (r[c]) r[c].lastCount = f.length;
            n[c][a] = Ze(f.length, f.mode) + 4 + d.getCharCountIndicator(f.mode, e);
          }
        }
      }
      i = l;
    }
    for (let o = 0; o < i.length; o++) n[i[o]].end = 0;
    return {
      map: n,
      table: r
    };
  }
  function Cr(t, e) {
    let r, n = d.getBestModeForData(t);
    if (r = d.from(e, n), r !== d.BYTE && r.bit < n.bit) throw Error('"' + t + '" cannot be encoded with mode ' + d.toString(r) + `.\n Suggested mode is: ` + d.toString(n));
    if (r === d.KANJI && !F.isKanjiModeEnabled()) r = d.BYTE;
    switch (r) {
     case d.NUMERIC:
      return new $e(t);

     case d.ALPHANUMERIC:
      return new Xe(t);

     case d.KANJI:
      return new tt(t);

     case d.BYTE:
      return new et(t);
    }
  }
  ao.fromArray = function(e) {
    return e.reduce(function(r, n) {
      if (typeof n === "string") r.push(Cr(n, null)); else if (n.data) r.push(Cr(n.data, n.mode));
      return r;
    }, []);
  };
  ao.fromString = function(e, r) {
    let n = xr(e, F.isKanjiModeEnabled()), i = uo(n), o = fo(i, r), s = br.find_path(o.map, "start", "end"), l = [];
    for (let u = 1; u < s.length - 1; u++) l.push(o.table[s[u]].node);
    return ao.fromArray(lo(l));
  };
  ao.rawSplit = function(e) {
    return ao.fromArray(xr(e, F.isKanjiModeEnabled()));
  };
});

var it = C(function(Bo) {
  var Y = N(), te = be(), po = Nt(), go = Ut(), Ir = Dt(), Ar = Yt(), ne = Kt(), ie = Ye(), _o = Zt(), D = ir(), Lr = sr(), Rr = q(), re = Br();
  function mo(t, e) {
    let r = t.size, n = Ar.getPositions(e);
    for (let i = 0; i < n.length; i++) {
      let o = n[i][0], s = n[i][1];
      for (let l = -1; l <= 7; l++) {
        if (o + l <= -1 || r <= o + l) continue;
        for (let u = -1; u <= 7; u++) {
          if (s + u <= -1 || r <= s + u) continue;
          if (l >= 0 && l <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && u >= 2 && u <= 4) t.set(o + l, s + u, !0, !0); else t.set(o + l, s + u, !1, !0);
        }
      }
    }
  }
  function yo(t) {
    let e = t.size;
    for (let r = 8; r < e - 8; r++) {
      let n = r % 2 === 0;
      t.set(r, 6, n, !0), t.set(6, r, n, !0);
    }
  }
  function wo(t, e) {
    let r = Ir.getPositions(e);
    for (let n = 0; n < r.length; n++) {
      let i = r[n][0], o = r[n][1];
      for (let s = -2; s <= 2; s++) for (let l = -2; l <= 2; l++) if (s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0) t.set(i + s, o + l, !0, !0); else t.set(i + s, o + l, !1, !0);
    }
  }
  function Eo(t, e) {
    let r = t.size, n = D.getEncodedBits(e), i, o, s;
    for (let l = 0; l < 18; l++) i = Math.floor(l / 3), o = l % 3 + r - 8 - 3, s = (n >> l & 1) === 1, 
    t.set(i, o, s, !0), t.set(o, i, s, !0);
  }
  function nt(t, e, r) {
    let n = t.size, i = Lr.getEncodedBits(e, r), o, s;
    for (o = 0; o < 15; o++) {
      if (s = (i >> o & 1) === 1, o < 6) t.set(o, 8, s, !0); else if (o < 8) t.set(o + 1, 8, s, !0); else t.set(n - 15 + o, 8, s, !0);
      if (o < 8) t.set(8, n - o - 1, s, !0); else if (o < 9) t.set(8, 15 - o - 1 + 1, s, !0); else t.set(8, 15 - o - 1, s, !0);
    }
    t.set(n - 8, 8, 1, !0);
  }
  function To(t, e) {
    let r = t.size, n = -1, i = r - 1, o = 7, s = 0;
    for (let l = r - 1; l > 0; l -= 2) {
      if (l === 6) l--;
      while (!0) {
        for (let u = 0; u < 2; u++) if (!t.isReserved(i, l - u)) {
          let f = !1;
          if (s < e.length) f = (e[s] >>> o & 1) === 1;
          if (t.set(i, l - u, f), o--, o === -1) s++, o = 7;
        }
        if (i += n, i < 0 || r <= i) {
          i -= n, n = -n;
          break;
        }
      }
    }
  }
  function Co(t, e, r) {
    let n = new po;
    r.forEach(function(u) {
      n.put(u.mode.bit, 4), n.put(u.getLength(), Rr.getCharCountIndicator(u.mode, t)), 
      u.write(n);
    });
    let i = Y.getSymbolTotalCodewords(t), o = ie.getTotalCodewordsCount(t, e), s = (i - o) * 8;
    if (n.getLengthInBits() + 4 <= s) n.put(0, 4);
    while (n.getLengthInBits() % 8 !== 0) n.putBit(0);
    let l = (s - n.getLengthInBits()) / 8;
    for (let u = 0; u < l; u++) n.put(u % 2 ? 17 : 236, 8);
    return bo(n, t, e);
  }
  function bo(t, e, r) {
    let n = Y.getSymbolTotalCodewords(e), i = ie.getTotalCodewordsCount(e, r), o = n - i, s = ie.getBlocksCount(e, r), l = n % s, u = s - l, f = Math.floor(n / s), a = Math.floor(o / s), h = a + 1, c = f - a, p = new _o(c), _ = 0, w = Array(s), m = Array(s), E = 0, Oe = new Uint8Array(t.buffer);
    for (let V = 0; V < s; V++) {
      let qe = V < u ? a : h;
      w[V] = Oe.slice(_, _ + qe), m[V] = p.encode(w[V]), _ += qe, E = Math.max(E, qe);
    }
    let ce = new Uint8Array(n), I = 0, L, O;
    for (L = 0; L < E; L++) for (O = 0; O < s; O++) if (L < w[O].length) ce[I++] = w[O][L];
    for (L = 0; L < c; L++) for (O = 0; O < s; O++) ce[I++] = m[O][L];
    return ce;
  }
  function xo(t, e, r, n) {
    let i;
    if (Array.isArray(t)) i = re.fromArray(t); else if (typeof t === "string") {
      let f = e;
      if (!f) {
        let a = re.rawSplit(t);
        f = D.getBestVersionForData(a, r);
      }
      i = re.fromString(t, f || 40);
    } else throw Error("Invalid data");
    let o = D.getBestVersionForData(i, r);
    if (!o) throw Error("The amount of data is too big to be stored in a QR Code");
    if (!e) e = o; else if (e < o) throw Error(`\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ` + o + `.\n`);
    let s = Co(e, r, i), l = Y.getSymbolSize(e), u = new go(l);
    if (mo(u, e), yo(u), wo(u, e), nt(u, r, 0), e >= 7) Eo(u, e);
    if (To(u, s), isNaN(n)) n = ne.getBestMask(u, nt.bind(null, u, r));
    return ne.applyMask(n, u), nt(u, r, n), {
      modules: u,
      version: e,
      errorCorrectionLevel: r,
      maskPattern: n,
      segments: i
    };
  }
  Bo.create = function(e, r) {
    if (typeof e > "u" || e === "") throw Error("No input text");
    let n = te.M, i, o;
    if (typeof r < "u") {
      if (n = te.from(r.errorCorrectionLevel, te.M), i = D.from(r.version), o = ne.from(r.maskPattern), 
      r.toSJISFunc) Y.setToSJISFunction(r.toSJISFunc);
    }
    return xo(e, i, n, o);
  };
});

var st = C(function(Dl, Pr) {
  var Sr = Ne("util"), ot = Ne("stream"), S = Pr.exports = function() {
    ot.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, 
    this._encoding = "utf8", this.writable = !0;
  };
  Sr.inherits(S, ot);
  S.prototype.read = function(t, e) {
    this._reads.push({
      length: Math.abs(t),
      allowLess: t < 0,
      func: e
    }), process.nextTick(function() {
      if (this._process(), this._paused && this._reads && this._reads.length > 0) this._paused = !1, 
      this.emit("drain");
    }.bind(this));
  };
  S.prototype.write = function(t, e) {
    if (!this.writable) return this.emit("error", Error("Stream not writable")), !1;
    let r;
    if (Buffer.isBuffer(t)) r = t; else r = Buffer.from(t, e || this._encoding);
    if (this._buffers.push(r), this._buffered += r.length, this._process(), this._reads && this._reads.length === 0) this._paused = !0;
    return this.writable && !this._paused;
  };
  S.prototype.end = function(t, e) {
    if (t) this.write(t, e);
    if (this.writable = !1, !this._buffers) return;
    if (this._buffers.length === 0) this._end(); else this._buffers.push(null), this._process();
  };
  S.prototype.destroySoon = S.prototype.end;
  S.prototype._end = function() {
    if (this._reads.length > 0) this.emit("error", Error("Unexpected end of input"));
    this.destroy();
  };
  S.prototype.destroy = function() {
    if (!this._buffers) return;
    this.writable = !1, this._reads = null, this._buffers = null, this.emit("close");
  };
  S.prototype._processReadAllowingLess = function(t) {
    this._reads.shift();
    let e = this._buffers[0];
    if (e.length > t.length) this._buffered -= t.length, this._buffers[0] = e.slice(t.length), 
    t.func.call(this, e.slice(0, t.length)); else this._buffered -= e.length, this._buffers.shift(), 
    t.func.call(this, e);
  };
  S.prototype._processRead = function(t) {
    this._reads.shift();
    let e = 0, r = 0, n = Buffer.alloc(t.length);
    while (e < t.length) {
      let i = this._buffers[r++], o = Math.min(i.length, t.length - e);
      if (i.copy(n, e, 0, o), e += o, o !== i.length) this._buffers[--r] = i.slice(o);
    }
    if (r > 0) this._buffers.splice(0, r);
    this._buffered -= t.length, t.func.call(this, n);
  };
  S.prototype._process = function() {
    try {
      while (this._buffered > 0 && this._reads && this._reads.length > 0) {
        let t = this._reads[0];
        if (t.allowLess) this._processReadAllowingLess(t); else if (this._buffered >= t.length) this._processRead(t); else break;
      }
      if (this._buffers && !this.writable) this._end();
    } catch (t) {
      this.emit("error", t);
    }
  };
});

var lt = C(function(Ao) {
  var H = [ {
    x: [ 0 ],
    y: [ 0 ]
  }, {
    x: [ 4 ],
    y: [ 0 ]
  }, {
    x: [ 0, 4 ],
    y: [ 4 ]
  }, {
    x: [ 2, 6 ],
    y: [ 0, 4 ]
  }, {
    x: [ 0, 2, 4, 6 ],
    y: [ 2, 6 ]
  }, {
    x: [ 1, 3, 5, 7 ],
    y: [ 0, 2, 4, 6 ]
  }, {
    x: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
    y: [ 1, 3, 5, 7 ]
  } ];
  Ao.getImagePasses = function(t, e) {
    let r = [], n = t % 8, i = e % 8, o = (t - n) / 8, s = (e - i) / 8;
    for (let l = 0; l < H.length; l++) {
      let u = H[l], f = o * u.x.length, a = s * u.y.length;
      for (let h = 0; h < u.x.length; h++) if (u.x[h] < n) f++; else break;
      for (let h = 0; h < u.y.length; h++) if (u.y[h] < i) a++; else break;
      if (f > 0 && a > 0) r.push({
        width: f,
        height: a,
        index: l
      });
    }
    return r;
  };
  Ao.getInterlaceIterator = function(t) {
    return function(e, r, n) {
      let i = e % H[n].x.length, o = (e - i) / H[n].x.length * 8 + H[n].x[i], s = r % H[n].y.length, l = (r - s) / H[n].y.length * 8 + H[n].y[s];
      return o * 4 + l * t * 4;
    };
  };
});

var ut = C(function(Hl, kr) {
  kr.exports = function(e, r, n) {
    let i = e + r - n, o = Math.abs(i - e), s = Math.abs(i - r), l = Math.abs(i - n);
    if (o <= s && o <= l) return e;
    if (s <= l) return r;
    return n;
  };
});

var ft = C(function(zl, Nr) {
  var Or = lt(), So = ut();
  function Mr(t, e, r) {
    let n = t * e;
    if (r !== 8) n = Math.ceil(n / (8 / r));
    return n;
  }
  var oe = Nr.exports = function(t, e) {
    let {width: r, height: n, interlace: i, bpp: o, depth: s} = t;
    if (this.read = e.read, this.write = e.write, this.complete = e.complete, this._imageIndex = 0, 
    this._images = [], i) {
      let l = Or.getImagePasses(r, n);
      for (let u = 0; u < l.length; u++) this._images.push({
        byteWidth: Mr(l[u].width, o, s),
        height: l[u].height,
        lineIndex: 0
      });
    } else this._images.push({
      byteWidth: Mr(r, o, s),
      height: n,
      lineIndex: 0
    });
    if (s === 8) this._xComparison = o; else if (s === 16) this._xComparison = o * 2; else this._xComparison = 1;
  };
  oe.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  };
  oe.prototype._unFilterType1 = function(t, e, r) {
    let n = this._xComparison, i = n - 1;
    for (let o = 0; o < r; o++) {
      let s = t[1 + o], l = o > i ? e[o - n] : 0;
      e[o] = s + l;
    }
  };
  oe.prototype._unFilterType2 = function(t, e, r) {
    let n = this._lastLine;
    for (let i = 0; i < r; i++) {
      let o = t[1 + i], s = n ? n[i] : 0;
      e[i] = o + s;
    }
  };
  oe.prototype._unFilterType3 = function(t, e, r) {
    let n = this._xComparison, i = n - 1, o = this._lastLine;
    for (let s = 0; s < r; s++) {
      let l = t[1 + s], u = o ? o[s] : 0, f = s > i ? e[s - n] : 0, a = Math.floor((f + u) / 2);
      e[s] = l + a;
    }
  };
  oe.prototype._unFilterType4 = function(t, e, r) {
    let n = this._xComparison, i = n - 1, o = this._lastLine;
    for (let s = 0; s < r; s++) {
      let l = t[1 + s], u = o ? o[s] : 0, f = s > i ? e[s - n] : 0, a = s > i && o ? o[s - n] : 0, h = So(f, u, a);
      e[s] = l + h;
    }
  };
  oe.prototype._reverseFilterLine = function(t) {
    let e = t[0], r, n = this._images[this._imageIndex], i = n.byteWidth;
    if (e === 0) r = t.slice(1, i + 1); else switch (r = Buffer.alloc(i), e) {
     case 1:
      this._unFilterType1(t, r, i);
      break;

     case 2:
      this._unFilterType2(t, r, i);
      break;

     case 3:
      this._unFilterType3(t, r, i);
      break;

     case 4:
      this._unFilterType4(t, r, i);
      break;

     default:
      throw Error("Unrecognised filter type - " + e);
    }
    if (this.write(r), n.lineIndex++, n.lineIndex >= n.height) this._lastLine = null, 
    this._imageIndex++, n = this._images[this._imageIndex]; else this._lastLine = r;
    if (n) this.read(n.byteWidth + 1, this._reverseFilterLine.bind(this)); else this._lastLine = null, 
    this.complete();
  };
});

var Fr = C(function(Gl, Ur) {
  var qr = Ne("util"), at = st(), Po = ft(), ko = Ur.exports = function(t) {
    at.call(this);
    let e = [], r = this;
    this._filter = new Po(t, {
      read: this.read.bind(this),
      write: function(n) {
        e.push(n);
      },
      complete: function() {
        r.emit("complete", Buffer.concat(e));
      }
    }), this._filter.start();
  };
  qr.inherits(ko, at);
});

var se = C(function(vl, Dr) {
  Dr.exports = {
    PNG_SIGNATURE: [ 137, 80, 78, 71, 13, 10, 26, 10 ],
    TYPE_IHDR: 1229472850,
    TYPE_IEND: 1229278788,
    TYPE_IDAT: 1229209940,
    TYPE_PLTE: 1347179589,
    TYPE_tRNS: 1951551059,
    TYPE_gAMA: 1732332865,
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
      0: 1,
      2: 3,
      3: 1,
      4: 2,
      6: 4
    },
    GAMMA_DIVISION: 1e5
  };
});

var dt = C(function(Vl, Yr) {
  var ht = [];
  (function() {
    for (let t = 0; t < 256; t++) {
      let e = t;
      for (let r = 0; r < 8; r++) if (e & 1) e = 3988292384 ^ e >>> 1; else e = e >>> 1;
      ht[t] = e;
    }
  })();
  var ct = Yr.exports = function() {
    this._crc = -1;
  };
  ct.prototype.write = function(t) {
    for (let e = 0; e < t.length; e++) this._crc = ht[(this._crc ^ t[e]) & 255] ^ this._crc >>> 8;
    return !0;
  };
  ct.prototype.crc32 = function() {
    return this._crc ^ -1;
  };
  ct.crc32 = function(t) {
    let e = -1;
    for (let r = 0; r < t.length; r++) e = ht[(e ^ t[r]) & 255] ^ e >>> 8;
    return e ^ -1;
  };
});

var pt = C(function(Kl, Hr) {
  var g = se(), Mo = dt(), b = Hr.exports = function(t, e) {
    this._options = t, t.checkCRC = t.checkCRC !== !1, this._hasIHDR = !1, this._hasIEND = !1, 
    this._emittedHeadersFinished = !1, this._palette = [], this._colorType = 0, this._chunks = {}, 
    this._chunks[g.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[g.TYPE_IEND] = this._handleIEND.bind(this), 
    this._chunks[g.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[g.TYPE_PLTE] = this._handlePLTE.bind(this), 
    this._chunks[g.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[g.TYPE_gAMA] = this._handleGAMA.bind(this), 
    this.read = e.read, this.error = e.error, this.metadata = e.metadata, this.gamma = e.gamma, 
    this.transColor = e.transColor, this.palette = e.palette, this.parsed = e.parsed, 
    this.inflateData = e.inflateData, this.finished = e.finished, this.simpleTransparency = e.simpleTransparency, 
    this.headersFinished = e.headersFinished || function() {};
  };
  b.prototype.start = function() {
    this.read(g.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  };
  b.prototype._parseSignature = function(t) {
    let e = g.PNG_SIGNATURE;
    for (let r = 0; r < e.length; r++) if (t[r] !== e[r]) {
      this.error(Error("Invalid file signature"));
      return;
    }
    this.read(8, this._parseChunkBegin.bind(this));
  };
  b.prototype._parseChunkBegin = function(t) {
    let e = t.readUInt32BE(0), r = t.readUInt32BE(4), n = "";
    for (let o = 4; o < 8; o++) n += String.fromCharCode(t[o]);
    let i = Boolean(t[4] & 32);
    if (!this._hasIHDR && r !== g.TYPE_IHDR) {
      this.error(Error("Expected IHDR on beggining"));
      return;
    }
    if (this._crc = new Mo, this._crc.write(Buffer.from(n)), this._chunks[r]) return this._chunks[r](e);
    if (!i) {
      this.error(Error("Unsupported critical chunk type " + n));
      return;
    }
    this.read(e + 4, this._skipChunk.bind(this));
  };
  b.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
  };
  b.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
  };
  b.prototype._parseChunkEnd = function(t) {
    let e = t.readInt32BE(0), r = this._crc.crc32();
    if (this._options.checkCRC && r !== e) {
      this.error(Error("Crc error - " + e + " - " + r));
      return;
    }
    if (!this._hasIEND) this.read(8, this._parseChunkBegin.bind(this));
  };
  b.prototype._handleIHDR = function(t) {
    this.read(t, this._parseIHDR.bind(this));
  };
  b.prototype._parseIHDR = function(t) {
    this._crc.write(t);
    let e = t.readUInt32BE(0), r = t.readUInt32BE(4), n = t[8], i = t[9], o = t[10], s = t[11], l = t[12];
    if (n !== 8 && n !== 4 && n !== 2 && n !== 1 && n !== 16) {
      this.error(Error("Unsupported bit depth " + n));
      return;
    }
    if (!(i in g.COLORTYPE_TO_BPP_MAP)) {
      this.error(Error("Unsupported color type"));
      return;
    }
    if (o !== 0) {
      this.error(Error("Unsupported compression method"));
      return;
    }
    if (s !== 0) {
      this.error(Error("Unsupported filter method"));
      return;
    }
    if (l !== 0 && l !== 1) {
      this.error(Error("Unsupported interlace method"));
      return;
    }
    this._colorType = i;
    let u = g.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = !0, this.metadata({
      width: e,
      height: r,
      depth: n,
      interlace: Boolean(l),
      palette: Boolean(i & g.COLORTYPE_PALETTE),
      color: Boolean(i & g.COLORTYPE_COLOR),
      alpha: Boolean(i & g.COLORTYPE_ALPHA),
      bpp: u,
      colorType: i
    }), this._handleChunkEnd();
  };
  b.prototype._handlePLTE = function(t) {
    this.read(t, this._parsePLTE.bind(this));
  };
  b.prototype._parsePLTE = function(t) {
    this._crc.write(t);
    let e = Math.floor(t.length / 3);
    for (let r = 0; r < e; r++) this._palette.push([ t[r * 3], t[r * 3 + 1], t[r * 3 + 2], 255 ]);
    this.palette(this._palette), this._handleChunkEnd();
  };
  b.prototype._handleTRNS = function(t) {
    this.simpleTransparency(), this.read(t, this._parseTRNS.bind(this));
  };
  b.prototype._parseTRNS = function(t) {
    if (this._crc.write(t), this._colorType === g.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(Error("Transparency chunk must be after palette"));
        return;
      }
      if (t.length > this._palette.length) {
        this.error(Error("More transparent colors than palette size"));
        return;
      }
      for (let e = 0; e < t.length; e++) this._palette[e][3] = t[e];
      this.palette(this._palette);
    }
    if (this._colorType === g.COLORTYPE_GRAYSCALE) this.transColor([ t.readUInt16BE(0) ]);
    if (this._colorType === g.COLORTYPE_COLOR) this.transColor([ t.readUInt16BE(0), t.readUInt16BE(2), t.readUInt16BE(4) ]);
    this._handleChunkEnd();
  };
  b.prototype._handleGAMA = function(t) {
    this.read(t, this._parseGAMA.bind(this));
  };
  b.prototype._parseGAMA = function(t) {
    this._crc.write(t), this.gamma(t.readUInt32BE(0) / g.GAMMA_DIVISION), this._handleChunkEnd();
  };
  b.prototype._handleIDAT = function(t) {
    if (!this._emittedHeadersFinished) this._emittedHeadersFinished = !0, this.headersFinished();
    this.read(-t, this._parseIDAT.bind(this, t));
  };
  b.prototype._parseIDAT = function(t, e) {
    if (this._crc.write(e), this._colorType === g.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) throw Error("Expected palette not found");
    this.inflateData(e);
    let r = t - e.length;
    if (r > 0) this._handleIDAT(r); else this._handleChunkEnd();
  };
  b.prototype._handleIEND = function(t) {
    this.read(t, this._parseIEND.bind(this));
  };
  b.prototype._parseIEND = function(t) {
    if (this._crc.write(t), this._hasIEND = !0, this._handleChunkEnd(), this.finished) this.finished();
  };
});

var gt = C(function(Do) {
  var Re = lt(), Oo = [ function() {}, function(t, e, r, n) {
    if (n === e.length) throw Error("Ran out of data");
    let i = e[n];
    t[r] = i, t[r + 1] = i, t[r + 2] = i, t[r + 3] = 255;
  }, function(t, e, r, n) {
    if (n + 1 >= e.length) throw Error("Ran out of data");
    let i = e[n];
    t[r] = i, t[r + 1] = i, t[r + 2] = i, t[r + 3] = e[n + 1];
  }, function(t, e, r, n) {
    if (n + 2 >= e.length) throw Error("Ran out of data");
    t[r] = e[n], t[r + 1] = e[n + 1], t[r + 2] = e[n + 2], t[r + 3] = 255;
  }, function(t, e, r, n) {
    if (n + 3 >= e.length) throw Error("Ran out of data");
    t[r] = e[n], t[r + 1] = e[n + 1], t[r + 2] = e[n + 2], t[r + 3] = e[n + 3];
  } ], No = [ function() {}, function(t, e, r, n) {
    let i = e[0];
    t[r] = i, t[r + 1] = i, t[r + 2] = i, t[r + 3] = n;
  }, function(t, e, r) {
    let n = e[0];
    t[r] = n, t[r + 1] = n, t[r + 2] = n, t[r + 3] = e[1];
  }, function(t, e, r, n) {
    t[r] = e[0], t[r + 1] = e[1], t[r + 2] = e[2], t[r + 3] = n;
  }, function(t, e, r) {
    t[r] = e[0], t[r + 1] = e[1], t[r + 2] = e[2], t[r + 3] = e[3];
  } ];
  function qo(t, e) {
    let r = [], n = 0;
    function i() {
      if (n === t.length) throw Error("Ran out of data");
      let o = t[n];
      n++;
      let s, l, u, f, a, h, c, p;
      switch (e) {
       default:
        throw Error("unrecognised depth");

       case 16:
        c = t[n], n++, r.push((o << 8) + c);
        break;

       case 4:
        c = o & 15, p = o >> 4, r.push(p, c);
        break;

       case 2:
        a = o & 3, h = o >> 2 & 3, c = o >> 4 & 3, p = o >> 6 & 3, r.push(p, c, h, a);
        break;

       case 1:
        s = o & 1, l = o >> 1 & 1, u = o >> 2 & 1, f = o >> 3 & 1, a = o >> 4 & 1, h = o >> 5 & 1, 
        c = o >> 6 & 1, p = o >> 7 & 1, r.push(p, c, h, a, f, u, l, s);
        break;
      }
    }
    return {
      get: function(o) {
        while (r.length < o) i();
        let s = r.slice(0, o);
        return r = r.slice(o), s;
      },
      resetAfterLine: function() {
        r.length = 0;
      },
      end: function() {
        if (n !== t.length) throw Error("extra data found");
      }
    };
  }
  function Uo(t, e, r, n, i, o) {
    let {width: s, height: l, index: u} = t;
    for (let f = 0; f < l; f++) for (let a = 0; a < s; a++) {
      let h = r(a, f, u);
      Oo[n](e, i, h, o), o += n;
    }
    return o;
  }
  function Fo(t, e, r, n, i, o) {
    let {width: s, height: l, index: u} = t;
    for (let f = 0; f < l; f++) {
      for (let a = 0; a < s; a++) {
        let h = i.get(n), c = r(a, f, u);
        No[n](e, h, c, o);
      }
      i.resetAfterLine();
    }
  }
  Do.dataToBitMap = function(t, e) {
    let {width: r, height: n, depth: i, bpp: o, interlace: s} = e, l;
    if (i !== 8) l = qo(t, i);
    let u;
    if (i <= 8) u = Buffer.alloc(r * n * 4); else u = new Uint16Array(r * n * 4);
    let f = Math.pow(2, i) - 1, a = 0, h, c;
    if (s) h = Re.getImagePasses(r, n), c = Re.getInterlaceIterator(r, n); else {
      let p = 0;
      c = function() {
        let _ = p;
        return p += 4, _;
      }, h = [ {
        width: r,
        height: n
      } ];
    }
    for (let p = 0; p < h.length; p++) if (i === 8) a = Uo(h[p], u, c, o, t, a); else Fo(h[p], u, c, o, l, f);
    if (i === 8) {
      if (a !== t.length) throw Error("extra data found");
    } else l.end();
    return u;
  };
});

var _t = C(function(jl, zr) {
  function Ho(t, e, r, n, i) {
    let o = 0;
    for (let s = 0; s < n; s++) for (let l = 0; l < r; l++) {
      let u = i[t[o]];
      if (!u) throw Error("index " + t[o] + " not in palette");
      for (let f = 0; f < 4; f++) e[o + f] = u[f];
      o += 4;
    }
  }
  function zo(t, e, r, n, i) {
    let o = 0;
    for (let s = 0; s < n; s++) for (let l = 0; l < r; l++) {
      let u = !1;
      if (i.length === 1) {
        if (i[0] === t[o]) u = !0;
      } else if (i[0] === t[o] && i[1] === t[o + 1] && i[2] === t[o + 2]) u = !0;
      if (u) for (let f = 0; f < 4; f++) e[o + f] = 0;
      o += 4;
    }
  }
  function Go(t, e, r, n, i) {
    let o = 255, s = Math.pow(2, i) - 1, l = 0;
    for (let u = 0; u < n; u++) for (let f = 0; f < r; f++) {
      for (let a = 0; a < 4; a++) e[l + a] = Math.floor(t[l + a] * o / s + .5);
      l += 4;
    }
  }
  zr.exports = function(t, e) {
    let {depth: r, width: n, height: i, colorType: o, transColor: s, palette: l} = e, u = t;
    if (o === 3) Ho(t, u, n, i, l); else {
      if (s) zo(t, u, n, i, s);
      if (r !== 8) {
        if (r === 16) u = Buffer.alloc(n * i * 4);
        Go(t, u, n, i, r);
      }
    }
    return u;
  };
});

var Kr = C(function(Jl, Vr) {
  var Gr = Ne("util"), le = Ne("zlib"), mt = st(), vo = Fr(), Vo = pt(), vr = gt(), Ko = _t(), M = Vr.exports = function(t) {
    mt.call(this), this._parser = new Vo(t, {
      read: this.read.bind(this),
      error: this._handleError.bind(this),
      metadata: this._handleMetaData.bind(this),
      gamma: this.emit.bind(this, "gamma"),
      palette: this._handlePalette.bind(this),
      transColor: this._handleTransColor.bind(this),
      finished: this._finished.bind(this),
      inflateData: this._inflateData.bind(this),
      simpleTransparency: this._simpleTransparency.bind(this),
      headersFinished: this._headersFinished.bind(this)
    }), this._options = t, this.writable = !0, this._parser.start();
  };
  Gr.inherits(M, mt);
  M.prototype._handleError = function(t) {
    if (this.emit("error", t), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy) this._inflate.destroy();
    if (this._filter) this._filter.destroy(), this._filter.on("error", function() {});
    this.errord = !0;
  };
  M.prototype._inflateData = function(t) {
    if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = le.createInflate(), 
    this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), 
    this._inflate.pipe(this._filter); else {
      let r = ((this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1) * this._bitmapInfo.height, n = Math.max(r, le.Z_MIN_CHUNK);
      this._inflate = le.createInflate({
        chunkSize: n
      });
      let i = r, o = this.emit.bind(this, "error");
      this._inflate.on("error", function(l) {
        if (!i) return;
        o(l);
      }), this._filter.on("complete", this._complete.bind(this));
      let s = this._filter.write.bind(this._filter);
      this._inflate.on("data", function(l) {
        if (!i) return;
        if (l.length > i) l = l.slice(0, i);
        i -= l.length, s(l);
      }), this._inflate.on("end", this._filter.end.bind(this._filter));
    }
    this._inflate.write(t);
  };
  M.prototype._handleMetaData = function(t) {
    this._metaData = t, this._bitmapInfo = Object.create(t), this._filter = new vo(this._bitmapInfo);
  };
  M.prototype._handleTransColor = function(t) {
    this._bitmapInfo.transColor = t;
  };
  M.prototype._handlePalette = function(t) {
    this._bitmapInfo.palette = t;
  };
  M.prototype._simpleTransparency = function() {
    this._metaData.alpha = !0;
  };
  M.prototype._headersFinished = function() {
    this.emit("metadata", this._metaData);
  };
  M.prototype._finished = function() {
    if (this.errord) return;
    if (!this._inflate) this.emit("error", "No Inflate block"); else this._inflate.end();
  };
  M.prototype._complete = function(t) {
    if (this.errord) return;
    let e;
    try {
      let r = vr.dataToBitMap(t, this._bitmapInfo);
      e = Ko(r, this._bitmapInfo), r = null;
    } catch (r) {
      this._handleError(r);
      return;
    }
    this.emit("parsed", e);
  };
});

var jr = C(function(Ql, Wr) {
  var T = se();
  Wr.exports = function(t, e, r, n) {
    let i = [ T.COLORTYPE_COLOR_ALPHA, T.COLORTYPE_ALPHA ].indexOf(n.colorType) !== -1;
    if (n.colorType === n.inputColorType) {
      let _ = function() {
        let w = new ArrayBuffer(2);
        return new DataView(w).setInt16(0, 256, !0), new Int16Array(w)[0] !== 256;
      }();
      if (n.bitDepth === 8 || n.bitDepth === 16 && _) return t;
    }
    let o = n.bitDepth !== 16 ? t : new Uint16Array(t.buffer), s = 255, l = T.COLORTYPE_TO_BPP_MAP[n.inputColorType];
    if (l === 4 && !n.inputHasAlpha) l = 3;
    let u = T.COLORTYPE_TO_BPP_MAP[n.colorType];
    if (n.bitDepth === 16) s = 65535, u *= 2;
    let f = Buffer.alloc(e * r * u), a = 0, h = 0, c = n.bgColor || {};
    if (c.red === void 0) c.red = s;
    if (c.green === void 0) c.green = s;
    if (c.blue === void 0) c.blue = s;
    function p() {
      let _, w, m, E = s;
      switch (n.inputColorType) {
       case T.COLORTYPE_COLOR_ALPHA:
        E = o[a + 3], _ = o[a], w = o[a + 1], m = o[a + 2];
        break;

       case T.COLORTYPE_COLOR:
        _ = o[a], w = o[a + 1], m = o[a + 2];
        break;

       case T.COLORTYPE_ALPHA:
        E = o[a + 1], _ = o[a], w = _, m = _;
        break;

       case T.COLORTYPE_GRAYSCALE:
        _ = o[a], w = _, m = _;
        break;

       default:
        throw Error("input color type:" + n.inputColorType + " is not supported at present");
      }
      if (n.inputHasAlpha) {
        if (!i) E /= s, _ = Math.min(Math.max(Math.round((1 - E) * c.red + E * _), 0), s), 
        w = Math.min(Math.max(Math.round((1 - E) * c.green + E * w), 0), s), m = Math.min(Math.max(Math.round((1 - E) * c.blue + E * m), 0), s);
      }
      return {
        red: _,
        green: w,
        blue: m,
        alpha: E
      };
    }
    for (let _ = 0; _ < r; _++) for (let w = 0; w < e; w++) {
      let m = p(o, a);
      switch (n.colorType) {
       case T.COLORTYPE_COLOR_ALPHA:
       case T.COLORTYPE_COLOR:
        if (n.bitDepth === 8) {
          if (f[h] = m.red, f[h + 1] = m.green, f[h + 2] = m.blue, i) f[h + 3] = m.alpha;
        } else if (f.writeUInt16BE(m.red, h), f.writeUInt16BE(m.green, h + 2), f.writeUInt16BE(m.blue, h + 4), 
        i) f.writeUInt16BE(m.alpha, h + 6);
        break;

       case T.COLORTYPE_ALPHA:
       case T.COLORTYPE_GRAYSCALE:
        {
          let E = (m.red + m.green + m.blue) / 3;
          if (n.bitDepth === 8) {
            if (f[h] = E, i) f[h + 1] = m.alpha;
          } else if (f.writeUInt16BE(E, h), i) f.writeUInt16BE(m.alpha, h + 2);
          break;
        }

       default:
        throw Error("unrecognised color Type " + n.colorType);
      }
      a += l, h += u;
    }
    return f;
  };
});

var Zr = C(function(Zl, Qr) {
  var Jr = ut();
  function Wo(t, e, r, n, i) {
    for (let o = 0; o < r; o++) n[i + o] = t[e + o];
  }
  function jo(t, e, r) {
    let n = 0, i = e + r;
    for (let o = e; o < i; o++) n += Math.abs(t[o]);
    return n;
  }
  function Jo(t, e, r, n, i, o) {
    for (let s = 0; s < r; s++) {
      let l = s >= o ? t[e + s - o] : 0, u = t[e + s] - l;
      n[i + s] = u;
    }
  }
  function Qo(t, e, r, n) {
    let i = 0;
    for (let o = 0; o < r; o++) {
      let s = o >= n ? t[e + o - n] : 0, l = t[e + o] - s;
      i += Math.abs(l);
    }
    return i;
  }
  function Zo(t, e, r, n, i) {
    for (let o = 0; o < r; o++) {
      let s = e > 0 ? t[e + o - r] : 0, l = t[e + o] - s;
      n[i + o] = l;
    }
  }
  function $o(t, e, r) {
    let n = 0, i = e + r;
    for (let o = e; o < i; o++) {
      let s = e > 0 ? t[o - r] : 0, l = t[o] - s;
      n += Math.abs(l);
    }
    return n;
  }
  function Xo(t, e, r, n, i, o) {
    for (let s = 0; s < r; s++) {
      let l = s >= o ? t[e + s - o] : 0, u = e > 0 ? t[e + s - r] : 0, f = t[e + s] - (l + u >> 1);
      n[i + s] = f;
    }
  }
  function es(t, e, r, n) {
    let i = 0;
    for (let o = 0; o < r; o++) {
      let s = o >= n ? t[e + o - n] : 0, l = e > 0 ? t[e + o - r] : 0, u = t[e + o] - (s + l >> 1);
      i += Math.abs(u);
    }
    return i;
  }
  function ts(t, e, r, n, i, o) {
    for (let s = 0; s < r; s++) {
      let l = s >= o ? t[e + s - o] : 0, u = e > 0 ? t[e + s - r] : 0, f = e > 0 && s >= o ? t[e + s - (r + o)] : 0, a = t[e + s] - Jr(l, u, f);
      n[i + s] = a;
    }
  }
  function rs(t, e, r, n) {
    let i = 0;
    for (let o = 0; o < r; o++) {
      let s = o >= n ? t[e + o - n] : 0, l = e > 0 ? t[e + o - r] : 0, u = e > 0 && o >= n ? t[e + o - (r + n)] : 0, f = t[e + o] - Jr(s, l, u);
      i += Math.abs(f);
    }
    return i;
  }
  var ns = {
    0: Wo,
    1: Jo,
    2: Zo,
    3: Xo,
    4: ts
  }, is = {
    0: jo,
    1: Qo,
    2: $o,
    3: es,
    4: rs
  };
  Qr.exports = function(t, e, r, n, i) {
    let o;
    if (!("filterType" in n) || n.filterType === -1) o = [ 0, 1, 2, 3, 4 ]; else if (typeof n.filterType === "number") o = [ n.filterType ]; else throw Error("unrecognised filter types");
    if (n.bitDepth === 16) i *= 2;
    let s = e * i, l = 0, u = 0, f = Buffer.alloc((s + 1) * r), a = o[0];
    for (let h = 0; h < r; h++) {
      if (o.length > 1) {
        let c = 1 / 0;
        for (let p = 0; p < o.length; p++) {
          let _ = is[o[p]](t, u, s, i);
          if (_ < c) a = o[p], c = _;
        }
      }
      f[l] = a, l++, ns[a](t, u, s, f, l, i), l += s, u += s;
    }
    return f;
  };
});

var yt = C(function($l, en) {
  var y = se(), $r = dt(), os = jr(), ss = Zr(), Xr = Ne("zlib"), z = en.exports = function(t) {
    if (this._options = t, t.deflateChunkSize = t.deflateChunkSize || 32768, t.deflateLevel = t.deflateLevel != null ? t.deflateLevel : 9, 
    t.deflateStrategy = t.deflateStrategy != null ? t.deflateStrategy : 3, t.inputHasAlpha = t.inputHasAlpha != null ? t.inputHasAlpha : !0, 
    t.deflateFactory = t.deflateFactory || Xr.createDeflate, t.bitDepth = t.bitDepth || 8, 
    t.colorType = typeof t.colorType === "number" ? t.colorType : y.COLORTYPE_COLOR_ALPHA, 
    t.inputColorType = typeof t.inputColorType === "number" ? t.inputColorType : y.COLORTYPE_COLOR_ALPHA, 
    [ y.COLORTYPE_GRAYSCALE, y.COLORTYPE_COLOR, y.COLORTYPE_COLOR_ALPHA, y.COLORTYPE_ALPHA ].indexOf(t.colorType) === -1) throw Error("option color type:" + t.colorType + " is not supported at present");
    if ([ y.COLORTYPE_GRAYSCALE, y.COLORTYPE_COLOR, y.COLORTYPE_COLOR_ALPHA, y.COLORTYPE_ALPHA ].indexOf(t.inputColorType) === -1) throw Error("option input color type:" + t.inputColorType + " is not supported at present");
    if (t.bitDepth !== 8 && t.bitDepth !== 16) throw Error("option bit depth:" + t.bitDepth + " is not supported at present");
  };
  z.prototype.getDeflateOptions = function() {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  };
  z.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
  };
  z.prototype.filterData = function(t, e, r) {
    let n = os(t, e, r, this._options), i = y.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    return ss(n, e, r, this._options, i);
  };
  z.prototype._packChunk = function(t, e) {
    let r = e ? e.length : 0, n = Buffer.alloc(r + 12);
    if (n.writeUInt32BE(r, 0), n.writeUInt32BE(t, 4), e) e.copy(n, 8);
    return n.writeInt32BE($r.crc32(n.slice(4, n.length - 4)), n.length - 4), n;
  };
  z.prototype.packGAMA = function(t) {
    let e = Buffer.alloc(4);
    return e.writeUInt32BE(Math.floor(t * y.GAMMA_DIVISION), 0), this._packChunk(y.TYPE_gAMA, e);
  };
  z.prototype.packIHDR = function(t, e) {
    let r = Buffer.alloc(13);
    return r.writeUInt32BE(t, 0), r.writeUInt32BE(e, 4), r[8] = this._options.bitDepth, 
    r[9] = this._options.colorType, r[10] = 0, r[11] = 0, r[12] = 0, this._packChunk(y.TYPE_IHDR, r);
  };
  z.prototype.packIDAT = function(t) {
    return this._packChunk(y.TYPE_IDAT, t);
  };
  z.prototype.packIEND = function() {
    return this._packChunk(y.TYPE_IEND, null);
  };
});

var sn = C(function(Xl, on) {
  var tn = Ne("util"), wt = Ne("stream"), rn = se(), ls = yt(), nn = on.exports = function(t) {
    wt.call(this);
    let e = t || {};
    this._packer = new ls(e), this._deflate = this._packer.createDeflate(), this.readable = !0;
  };
  tn.inherits(nn, wt);
  nn.prototype.pack = function(t, e, r, n) {
    if (this.emit("data", Buffer.from(rn.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(e, r)), 
    n) this.emit("data", this._packer.packGAMA(n));
    let i = this._packer.filterData(t, e, r);
    this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", function(o) {
      this.emit("data", this._packer.packIDAT(o));
    }.bind(this)), this._deflate.on("end", function() {
      this.emit("data", this._packer.packIEND()), this.emit("end");
    }.bind(this)), this._deflate.end(i);
  };
});

var dn = C(function(ye, cn) {
  var ln = Ne("assert").ok, R = Ne("zlib"), an = Ne("util"), un = Ne("buffer").kMaxLength;
  function v(t) {
    if (!(this instanceof v)) return new v(t);
    if (t && t.chunkSize < R.Z_MIN_CHUNK) t.chunkSize = R.Z_MIN_CHUNK;
    if (R.Inflate.call(this, t), this._offset = this._offset === void 0 ? this._outOffset : this._offset, 
    this._buffer = this._buffer || this._outBuffer, t && t.maxLength != null) this._maxLength = t.maxLength;
  }
  function us(t) {
    return new v(t);
  }
  function fn(t, e) {
    if (e) process.nextTick(e);
    if (!t._handle) return;
    t._handle.close(), t._handle = null;
  }
  v.prototype._processChunk = function(t, e, r) {
    if (typeof r === "function") return R.Inflate._processChunk.call(this, t, e, r);
    let n = this, i = t && t.length, o = this._chunkSize - this._offset, s = this._maxLength, l = 0, u = [], f = 0, a;
    this.on("error", function(_) {
      a = _;
    });
    function h(_, w) {
      if (n._hadError) return;
      let m = o - w;
      if (ln(m >= 0, "have should not go down"), m > 0) {
        let E = n._buffer.slice(n._offset, n._offset + m);
        if (n._offset += m, E.length > s) E = E.slice(0, s);
        if (u.push(E), f += E.length, s -= E.length, s === 0) return !1;
      }
      if (w === 0 || n._offset >= n._chunkSize) o = n._chunkSize, n._offset = 0, n._buffer = Buffer.allocUnsafe(n._chunkSize);
      if (w === 0) return l += i - _, i = _, !0;
      return !1;
    }
    ln(this._handle, "zlib binding closed");
    let c;
    do {
      c = this._handle.writeSync(e, t, l, i, this._buffer, this._offset, o), c = c || this._writeState;
    } while (!this._hadError && h(c[0], c[1]));
    if (this._hadError) throw a;
    if (f >= un) throw fn(this), RangeError("Cannot create final Buffer. It would be larger than 0x" + un.toString(16) + " bytes");
    let p = Buffer.concat(u, f);
    return fn(this), p;
  };
  an.inherits(v, R.Inflate);
  function fs(t, e) {
    if (typeof e === "string") e = Buffer.from(e);
    if (!(e instanceof Buffer)) throw TypeError("Not a string or buffer");
    let r = t._finishFlushFlag;
    if (r == null) r = R.Z_FINISH;
    return t._processChunk(e, r);
  }
  function hn(t, e) {
    return fs(new v(e), t);
  }
  cn.exports = ye = hn;
  ye.Inflate = v;
  ye.createInflate = us;
  ye.inflateSync = hn;
});

var Et = C(function(eu, gn) {
  var pn = gn.exports = function(t) {
    this._buffer = t, this._reads = [];
  };
  pn.prototype.read = function(t, e) {
    this._reads.push({
      length: Math.abs(t),
      allowLess: t < 0,
      func: e
    });
  };
  pn.prototype.process = function() {
    while (this._reads.length > 0 && this._buffer.length) {
      let t = this._reads[0];
      if (this._buffer.length && (this._buffer.length >= t.length || t.allowLess)) {
        this._reads.shift();
        let e = this._buffer;
        this._buffer = e.slice(t.length), t.func.call(this, e.slice(0, t.length));
      } else break;
    }
    if (this._reads.length > 0) return Error("There are some read requests waitng on finished stream");
    if (this._buffer.length > 0) return Error("unrecognised content at end of stream");
  };
});

var _n = C(function(cs) {
  var as = Et(), hs = ft();
  cs.process = function(t, e) {
    let r = [], n = new as(t);
    return new hs(e, {
      read: n.read.bind(n),
      write: function(o) {
        r.push(o);
      },
      complete: function() {}
    }).start(), n.process(), Buffer.concat(r);
  };
});

var Tn = C(function(ru, En) {
  var mn = !0, Se = Ne("zlib"), ps = dn();
  if (!Se.deflateSync) mn = !1;
  var gs = Et(), yn = _n(), _s = pt(), wn = gt(), ms = _t();
  En.exports = function(t, e) {
    if (!mn) throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let r;
    function n(I) {
      r = I;
    }
    let i;
    function o(I) {
      i = I;
    }
    function s(I) {
      i.transColor = I;
    }
    function l(I) {
      i.palette = I;
    }
    function u() {
      i.alpha = !0;
    }
    let f;
    function a(I) {
      f = I;
    }
    let h = [];
    function c(I) {
      h.push(I);
    }
    let p = new gs(t);
    if (new _s(e, {
      read: p.read.bind(p),
      error: n,
      metadata: o,
      gamma: a,
      palette: l,
      transColor: s,
      inflateData: c,
      simpleTransparency: u
    }).start(), p.process(), r) throw r;
    let w = Buffer.concat(h);
    h.length = 0;
    let m;
    if (i.interlace) m = Se.inflateSync(w); else {
      let L = ((i.width * i.bpp * i.depth + 7 >> 3) + 1) * i.height;
      m = ps(w, {
        chunkSize: L,
        maxLength: L
      });
    }
    if (w = null, !m || !m.length) throw Error("bad png - invalid inflate data response");
    let E = yn.process(m, i);
    w = null;
    let Oe = wn.dataToBitMap(E, i);
    E = null;
    let ce = ms(Oe, i);
    return i.data = ce, i.gamma = f || 0, i;
  };
});

var Bn = C(function(nu, xn) {
  var Cn = !0, Pe = Ne("zlib");
  if (!Pe.deflateSync) Cn = !1;
  var bn = se(), ys = yt();
  xn.exports = function(t, e) {
    if (!Cn) throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let n = new ys(e || {}), i = [];
    if (i.push(Buffer.from(bn.PNG_SIGNATURE)), i.push(n.packIHDR(t.width, t.height)), 
    t.gamma) i.push(n.packGAMA(t.gamma));
    let o = n.filterData(t.data, t.width, t.height), s = Pe.deflateSync(o, n.getDeflateOptions());
    if (o = null, !s || !s.length) throw Error("bad png - invalid compressed data response");
    return i.push(n.packIDAT(s)), i.push(n.packIEND()), Buffer.concat(i);
  };
});

var In = C(function(Ts) {
  var ws = Tn(), Es = Bn();
  Ts.read = function(t, e) {
    return ws(t, e || {});
  };
  Ts.write = function(t, e) {
    return Es(t, e);
  };
});

var Ln = C(function(As) {
  var An = Ne("util"), Tt = Ne("stream"), xs = Kr(), Bs = sn(), Is = In(), A = As.PNG = function(t) {
    if (Tt.call(this), t = t || {}, this.width = t.width | 0, this.height = t.height | 0, 
    this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null, 
    t.fill && this.data) this.data.fill(0);
    this.gamma = 0, this.readable = this.writable = !0, this._parser = new xs(t), this._parser.on("error", this.emit.bind(this, "error")), 
    this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), 
    this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", function(e) {
      this.data = e, this.emit("parsed", e);
    }.bind(this)), this._packer = new Bs(t), this._packer.on("data", this.emit.bind(this, "data")), 
    this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), 
    this._packer.on("error", this.emit.bind(this, "error"));
  };
  An.inherits(A, Tt);
  A.sync = Is;
  A.prototype.pack = function() {
    if (!this.data || !this.data.length) return this.emit("error", "No data provided"), 
    this;
    return process.nextTick(function() {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this)), this;
  };
  A.prototype.parse = function(t, e) {
    if (e) {
      let r, n;
      r = function(i) {
        this.removeListener("error", n), this.data = i, e(null, this);
      }.bind(this), n = function(i) {
        this.removeListener("parsed", r), e(i, null);
      }.bind(this), this.once("parsed", r), this.once("error", n);
    }
    return this.end(t), this;
  };
  A.prototype.write = function(t) {
    return this._parser.write(t), !0;
  };
  A.prototype.end = function(t) {
    this._parser.end(t);
  };
  A.prototype._metadata = function(t) {
    this.width = t.width, this.height = t.height, this.emit("metadata", t);
  };
  A.prototype._gamma = function(t) {
    this.gamma = t;
  };
  A.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) this.emit("close");
  };
  A.bitblt = function(t, e, r, n, i, o, s, l) {
    if (r |= 0, n |= 0, i |= 0, o |= 0, s |= 0, l |= 0, r > t.width || n > t.height || r + i > t.width || n + o > t.height) throw Error("bitblt reading outside image");
    if (s > e.width || l > e.height || s + i > e.width || l + o > e.height) throw Error("bitblt writing outside image");
    for (let u = 0; u < o; u++) t.data.copy(e.data, (l + u) * e.width + s << 2, (n + u) * t.width + r << 2, (n + u) * t.width + r + i << 2);
  };
  A.prototype.bitblt = function(t, e, r, n, i, o, s) {
    return A.bitblt(this, t, e, r, n, i, o, s), this;
  };
  A.adjustGamma = function(t) {
    if (t.gamma) {
      for (let e = 0; e < t.height; e++) for (let r = 0; r < t.width; r++) {
        let n = t.width * e + r << 2;
        for (let i = 0; i < 3; i++) {
          let o = t.data[n + i] / 255;
          o = Math.pow(o, .45454545454545453 / t.gamma), t.data[n + i] = Math.round(o * 255);
        }
      }
      t.gamma = 0;
    }
  };
  A.prototype.adjustGamma = function() {
    A.adjustGamma(this);
  };
});

var we = C(function(Ls) {
  function Rn(t) {
    if (typeof t === "number") t = t.toString();
    if (typeof t !== "string") throw Error("Color should be defined as hex string");
    let e = t.slice().replace("#", "").split("");
    if (e.length < 3 || e.length === 5 || e.length > 8) throw Error("Invalid hex color: " + t);
    if (e.length === 3 || e.length === 4) e = Array.prototype.concat.apply([], e.map(function(n) {
      return [ n, n ];
    }));
    if (e.length === 6) e.push("F", "F");
    let r = parseInt(e.join(""), 16);
    return {
      r: r >> 24 & 255,
      g: r >> 16 & 255,
      b: r >> 8 & 255,
      a: r & 255,
      hex: "#" + e.slice(0, 6).join("")
    };
  }
  Ls.getOptions = function(e) {
    if (!e) e = {};
    if (!e.color) e.color = {};
    let r = typeof e.margin > "u" || e.margin === null || e.margin < 0 ? 4 : e.margin, n = e.width && e.width >= 21 ? e.width : void 0, i = e.scale || 4;
    return {
      width: n,
      scale: n ? 4 : i,
      margin: r,
      color: {
        dark: Rn(e.color.dark || "#000000ff"),
        light: Rn(e.color.light || "#ffffffff")
      },
      type: e.type,
      rendererOpts: e.rendererOpts || {}
    };
  };
  Ls.getScale = function(e, r) {
    return r.width && r.width >= e + r.margin * 2 ? r.width / (e + r.margin * 2) : r.scale;
  };
  Ls.getImageWidth = function(e, r) {
    let n = Ls.getScale(e, r);
    return Math.floor((e + r.margin * 2) * n);
  };
  Ls.qrToImageData = function(e, r, n) {
    let i = r.modules.size, o = r.modules.data, s = Ls.getScale(i, n), l = Math.floor((i + n.margin * 2) * s), u = n.margin * s, f = [ n.color.light, n.color.dark ];
    for (let a = 0; a < l; a++) for (let h = 0; h < l; h++) {
      let c = (a * l + h) * 4, p = n.color.light;
      if (a >= u && h >= u && a < l - u && h < l - u) {
        let _ = Math.floor((a - u) / s), w = Math.floor((h - u) / s);
        p = f[o[_ * i + w] ? 1 : 0];
      }
      e[c++] = p.r, e[c++] = p.g, e[c++] = p.b, e[c] = p.a;
    }
  };
});

var Pn = C(function(Ee) {
  var Sn = Ne("fs"), ks = Ln().PNG, ue = we();
  Ee.render = function(e, r) {
    let n = ue.getOptions(r), i = n.rendererOpts, o = ue.getImageWidth(e.modules.size, n);
    i.width = o, i.height = o;
    let s = new ks(i);
    return ue.qrToImageData(s.data, e, n), s;
  };
  Ee.renderToDataURL = function(e, r, n) {
    if (typeof n > "u") n = r, r = void 0;
    Ee.renderToBuffer(e, r, function(i, o) {
      if (i) n(i);
      let s = "data:image/png;base64,";
      s += o.toString("base64"), n(null, s);
    });
  };
  Ee.renderToBuffer = function(e, r, n) {
    if (typeof n > "u") n = r, r = void 0;
    let i = Ee.render(e, r), o = [];
    i.on("error", n), i.on("data", function(s) {
      o.push(s);
    }), i.on("end", function() {
      n(null, Buffer.concat(o));
    }), i.pack();
  };
  Ee.renderToFile = function(e, r, n, i) {
    if (typeof i > "u") i = n, n = void 0;
    let o = !1, s = (...u) => {
      if (o) return;
      o = !0, i.apply(null, u);
    }, l = Sn.createWriteStream(e);
    l.on("error", s), l.on("close", s), Ee.renderToFileStream(l, r, n);
  };
  Ee.renderToFileStream = function(e, r, n) {
    Ee.render(r, n).pack().pipe(e);
  };
});

var T1r = C(function(Ys) {
  var kn = we(), Us = {
    WW: " ",
    WB: "\u2584",
    BB: "\u2588",
    BW: "\u2580"
  }, Fs = {
    BB: " ",
    BW: "\u2584",
    WW: "\u2588",
    WB: "\u2580"
  };
  function Ds(t, e, r) {
    if (t && e) return r.BB;
    if (t && !e) return r.BW;
    if (!t && e) return r.WB;
    return r.WW;
  }
  Ys.render = function(t, e, r) {
    let n = kn.getOptions(e), i = Us;
    if (n.color.dark.hex === "#ffffff" || n.color.light.hex === "#000000") i = Fs;
    let o = t.modules.size, s = t.modules.data, l = "", u = Array(o + n.margin * 2 + 1).join(i.WW);
    u = Array(n.margin / 2 + 1).join(u + `\n`);
    let f = Array(n.margin + 1).join(i.WW);
    l += u;
    for (let a = 0; a < o; a += 2) {
      l += f;
      for (let h = 0; h < o; h++) {
        let c = s[a * o + h], p = s[(a + 1) * o + h];
        l += Ds(c, p, i);
      }
      l += f + `\n`;
    }
    if (l += u.slice(0, -1), typeof r === "function") r(null, l);
    return l;
  };
  Ys.renderToFile = function(e, r, n, i) {
    if (typeof i > "u") i = n, n = void 0;
    let o = Ne("fs"), s = Ys.render(r, n);
    o.writeFile(e, s, i);
  };
});

var On = C(function(zs) {
  zs.render = function(t, e, r) {
    let n = t.modules.size, i = t.modules.data, o = "\x1b[40m  \x1b[0m", s = "\x1b[47m  \x1b[0m", l = "", u = Array(n + 3).join("\x1b[47m  \x1b[0m"), f = Array(2).join("\x1b[47m  \x1b[0m");
    l += u + `\n`;
    for (let a = 0; a < n; ++a) {
      l += "\x1b[47m  \x1b[0m";
      for (let h = 0; h < n; h++) l += i[a * n + h] ? "\x1b[40m  \x1b[0m" : "\x1b[47m  \x1b[0m";
      l += f + `\n`;
    }
    if (l += u + `\n`, typeof r === "function") r(null, l);
    return l;
  };
});

var Un = C(function(Ws) {
  var vs = "\x1b[47m\x1b[30m", Vs = "\x1b[40m\x1b[37m", Ks = function(t, e, r) {
    return {
      "00": "\x1b[0m " + t,
      "01": "\x1b[0m" + e + "\u2584" + t,
      "02": "\x1b[0m" + r + "\u2584" + t,
      10: "\x1b[0m" + e + "\u2580" + t,
      11: " ",
      12: "\u2584",
      20: "\x1b[0m" + r + "\u2580" + t,
      21: "\u2580",
      22: "\u2588"
    };
  }, Nn = function(t, e, r, n) {
    let i = e + 1;
    if (r >= i || n >= i || n < -1 || r < -1) return "0";
    if (r >= e || n >= e || n < 0 || r < 0) return "1";
    let o = n * e + r;
    return t[o] ? "2" : "1";
  }, qn = function(t, e, r, n) {
    return Nn(t, e, r, n) + Nn(t, e, r, n + 1);
  };
  Ws.render = function(t, e, r) {
    let n = t.modules.size, i = t.modules.data, o = !!(e && e.inverse), s = e && e.inverse ? Vs : vs, f = Ks(s, o ? "\x1b[30m" : "\x1b[37m", o ? "\x1b[37m" : "\x1b[30m"), a = `\x1b[0m\n` + s, h = s;
    for (let c = -1; c < n + 1; c += 2) {
      for (let p = -1; p < n; p++) h += f[qn(i, n, p, c)];
      h += f[qn(i, n, n, c)] + a;
    }
    if (h += "\x1b[0m", typeof r === "function") r(null, h);
    return h;
  };
});

var Yn = C(function(Js) {
  var Fn = On(), Dn = Un();
  Js.render = function(t, e, r) {
    if (e && e.small) return Dn.render(t, e, r);
    return Fn.render(t, e, r);
  };
});

var Bt = C(function($s) {
  var zn = we();
  function Hn(t, e) {
    let r = t.a / 255, n = e + '="' + t.hex + '"';
    return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
  }
  function xt(t, e, r) {
    let n = t + e;
    if (typeof r < "u") n += " " + r;
    return n;
  }
  function Zs(t, e, r) {
    let n = "", i = 0, o = !1, s = 0;
    for (let l = 0; l < t.length; l++) {
      let u = Math.floor(l % e), f = Math.floor(l / e);
      if (!u && !o) o = !0;
      if (t[l]) {
        if (s++, !(l > 0 && u > 0 && t[l - 1])) n += o ? xt("M", u + r, .5 + f + r) : xt("m", i, 0), 
        i = 0, o = !1;
        if (!(u + 1 < e && t[l + 1])) n += xt("h", s), s = 0;
      } else i++;
    }
    return n;
  }
  $s.render = function(e, r, n) {
    let i = zn.getOptions(r), o = e.modules.size, s = e.modules.data, l = o + i.margin * 2, u = !i.color.light.a ? "" : "<path " + Hn(i.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>', f = "<path " + Hn(i.color.dark, "stroke") + ' d="' + Zs(s, o, i.margin) + '"/>', a = 'viewBox="0 0 ' + l + " " + l + '"', c = '<svg xmlns="http://www.w3.org/2000/svg" ' + (!i.width ? "" : 'width="' + i.width + '" height="' + i.width + '" ') + a + ' shape-rendering="crispEdges">' + u + f + `</svg>\n`;
    if (typeof n === "function") n(null, c);
    return c;
  };
});

var Kn = C(function(vn) {
  var Gn = Bt();
  vn.render = Gn.render;
  vn.renderToFile = function(e, r, n, i) {
    if (typeof i > "u") i = n, n = void 0;
    let o = Ne("fs"), l = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + vn.render(r, n);
    o.writeFile(e, l, i);
  };
});

var jn = C(function(nl) {
  var fe = we();
  function tl(t, e, r) {
    if (t.clearRect(0, 0, e.width, e.height), !e.style) e.style = {};
    e.height = r, e.width = r, e.style.height = r + "px", e.style.width = r + "px";
  }
  function rl() {
    try {
      return document.createElement("canvas");
    } catch (t) {
      throw Error("You need to specify a canvas element");
    }
  }
  nl.render = function(e, r, n) {
    let i = n, o = r;
    if (typeof i > "u" && (!r || !r.getContext)) i = r, r = void 0;
    if (!r) o = rl();
    i = fe.getOptions(i);
    let s = fe.getImageWidth(e.modules.size, i), l = o.getContext("2d"), u = l.createImageData(s, s);
    return fe.qrToImageData(u.data, e, i), tl(l, o, s), l.putImageData(u, 0, 0), o;
  };
  nl.renderToDataURL = function(e, r, n) {
    let i = n;
    if (typeof i > "u" && (!r || !r.getContext)) i = r, r = void 0;
    if (!i) i = {};
    let o = nl.render(e, r, i), s = i.type || "image/png", l = i.rendererOpts || {};
    return o.toDataURL(s, l.quality);
  };
});

var Qn = C(function(sl) {
  var ol = Ue(), ae = it(), ke = jn(), Jn = Bt();
  function It(t, e, r, n, i) {
    let o = [].slice.call(arguments, 1), s = o.length, l = typeof o[s - 1] === "function";
    if (!l && !ol()) throw Error("Callback required as last argument");
    if (l) {
      if (s < 2) throw Error("Too few arguments provided");
      if (s === 2) i = r, r = e, e = n = void 0; else if (s === 3) if (e.getContext && typeof i > "u") i = n, 
      n = void 0; else i = n, n = r, r = e, e = void 0;
    } else {
      if (s < 1) throw Error("Too few arguments provided");
      if (s === 1) r = e, e = n = void 0; else if (s === 2 && !e.getContext) n = r, r = e, 
      e = void 0;
      return new Promise(function(u, f) {
        try {
          let a = ae.create(r, n);
          u(t(a, e, n));
        } catch (a) {
          f(a);
        }
      });
    }
    try {
      let u = ae.create(r, n);
      i(null, t(u, e, n));
    } catch (u) {
      i(u);
    }
  }
  sl.create = ae.create;
  sl.toCanvas = It.bind(null, ke.render);
  sl.toDataURL = It.bind(null, ke.renderToDataURL);
  sl.toString = It.bind(null, function(t, e, r) {
    return Jn.render(t, r);
  });
});

var Zn = Ue(), he = it(), hl = Pn(), $n = T1r(), cl = Yn(), Xn = Kn();

function Te(t, e, r) {
  if (typeof t > "u") throw Error("String required as first argument");
  if (typeof r > "u") r = e, e = {};
  if (typeof r !== "function") if (!Zn()) throw Error("Callback required as last argument"); else e = r || {}, 
  r = null;
  return {
    opts: e,
    cb: r
  };
}

function dl(t) {
  return t.slice((t.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
}

function Me(t) {
  switch (t) {
   case "svg":
    return Xn;

   case "txt":
   case "utf8":
    return $n;

   case "png":
   case "image/png":
   default:
    return hl;
  }
}

function pl(t) {
  switch (t) {
   case "svg":
    return Xn;

   case "terminal":
    return cl;

   case "utf8":
   default:
    return $n;
  }
}

function Ce(t, e, r) {
  if (!r.cb) return new Promise(function(n, i) {
    try {
      let o = he.create(e, r.opts);
      return t(o, r.opts, function(s, l) {
        return s ? i(s) : n(l);
      });
    } catch (o) {
      i(o);
    }
  });
  try {
    let n = he.create(e, r.opts);
    return t(n, r.opts, r.cb);
  } catch (n) {
    r.cb(n);
  }
}

var bXn = he.create, r1s = Qn().toCanvas, Nge = function(e, r, n) {
  let i = Te(e, r, n), o = i.opts ? i.opts.type : void 0, s = pl(o);
  return Ce(s.render, e, i);
}, o1s = function(e, r, n) {
  let i = Te(e, r, n), o = Me(i.opts.type);
  return Ce(o.renderToDataURL, e, i);
}, s1s = function(e, r, n) {
  let i = Te(e, r, n), o = Me(i.opts.type);
  return Ce(o.renderToBuffer, e, i);
}, i1s = function(e, r, n, i) {
  if (typeof e !== "string" || !(typeof r === "string" || typeof r === "object")) throw Error("Invalid argument");
  if (arguments.length < 3 && !Zn()) throw Error("Too few arguments provided");
  let o = Te(r, n, i), s = o.opts.type || dl(e), u = Me(s).renderToFile.bind(null, e);
  return Ce(u, r, o);
}, a1s = function(e, r, n) {
  if (arguments.length < 2) throw Error("Too few arguments provided");
  let i = Te(r, n, e.emit.bind(e, "error")), s = Me("png").renderToFileStream.bind(null, e);
  Ce(s, r, i);
};

export { T1r, bXn, r1s, Nge, o1s, s1s, i1s, a1s };
