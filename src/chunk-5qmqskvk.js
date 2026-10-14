// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { createRequire as kr } from "module";

var Hr = kr("/"), Lr;

try {
  Lr = Hr("worker_threads").Worker;
} catch (n) {}

var z = Uint8Array, q = Uint16Array, vr = Int32Array, cr = new z([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), pr = new z([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), zr = new z([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), Dr = function(n, r) {
  var t = new q(31);
  for (var e = 0; e < 31; ++e) t[e] = r += 1 << n[e - 1];
  var a = new vr(t[30]);
  for (var e = 1; e < 30; ++e) for (var i = t[e]; i < t[e + 1]; ++i) a[i] = i - t[e] << 5 | e;
  return {
    b: t,
    r: a
  };
}, Tr = Dr(cr, 2), {b: Wr, r: hr} = Tr;

Wr[28] = 258, hr[258] = 28;

var Ur = Dr(pr, 0), {b: rn, r: Ar} = Ur, ur = new q(32768);

for (v = 0; v < 32768; ++v) W = (v & 43690) >> 1 | (v & 21845) << 1, W = (W & 52428) >> 2 | (W & 13107) << 2, 
W = (W & 61680) >> 4 | (W & 3855) << 4, ur[v] = ((W & 65280) >> 8 | (W & 255) << 8) >> 1;

var W, v, rr = function(n, r, t) {
  var e = n.length, a = 0, i = new q(r);
  for (;a < e; ++a) if (n[a]) ++i[n[a] - 1];
  var o = new q(r);
  for (a = 1; a < r; ++a) o[a] = o[a - 1] + i[a - 1] << 1;
  var f;
  if (t) {
    f = new q(1 << r);
    var l = 15 - r;
    for (a = 0; a < e; ++a) if (n[a]) {
      var h = a << 4 | n[a], s = r - n[a], u = o[n[a] - 1]++ << s;
      for (var p = u | (1 << s) - 1; u <= p; ++u) f[ur[u] >> l] = h;
    }
  } else {
    f = new q(e);
    for (a = 0; a < e; ++a) if (n[a]) f[a] = ur[o[n[a] - 1]++] >> 15 - n[a];
  }
  return f;
}, J = new z(288);

for (v = 0; v < 144; ++v) J[v] = 8;

var v;

for (v = 144; v < 256; ++v) J[v] = 9;

var v;

for (v = 256; v < 280; ++v) J[v] = 7;

var v;

for (v = 280; v < 288; ++v) J[v] = 8;

var v, nr = new z(32);

for (v = 0; v < 32; ++v) nr[v] = 5;

var v, Rr = rr(J, 9, 0);

var Yr = rr(nr, 5, 0);

var Ir = function(n) {
  return (n + 7) / 8 | 0;
}, Zr = function(n, r, t) {
  if (r == null || r < 0) r = 0;
  if (t == null || t > n.length) t = n.length;
  return new z(n.subarray(r, t));
};

var Jr = [ "unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data" ], G = function(n, r, t) {
  var e = Error(r || Jr[n]);
  if (e.code = n, Error.captureStackTrace) Error.captureStackTrace(e, G);
  if (!t) throw e;
  return e;
};

var R = function(n, r, t) {
  t <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= t, n[e + 1] |= t >> 8;
}, b = function(n, r, t) {
  t <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= t, n[e + 1] |= t >> 8, n[e + 2] |= t >> 16;
}, fr = function(n, r) {
  var t = [];
  for (var e = 0; e < n.length; ++e) if (n[e]) t.push({
    s: e,
    f: n[e]
  });
  var a = t.length, i = t.slice();
  if (!a) return {
    t: Er,
    l: 0
  };
  if (a == 1) {
    var o = new z(t[0].s + 1);
    return o[t[0].s] = 1, {
      t: o,
      l: 1
    };
  }
  t.sort(function(I, Z) {
    return I.f - Z.f;
  }), t.push({
    s: -1,
    f: 25001
  });
  var f = t[0], l = t[1], h = 0, s = 1, u = 2;
  t[0] = {
    s: -1,
    f: f.f + l.f,
    l: f,
    r: l
  };
  while (s != a - 1) f = t[t[h].f < t[u].f ? h++ : u++], l = t[h != s && t[h].f < t[u].f ? h++ : u++], 
  t[s++] = {
    s: -1,
    f: f.f + l.f,
    l: f,
    r: l
  };
  var p = i[0].s;
  for (var e = 1; e < a; ++e) if (i[e].s > p) p = i[e].s;
  var m = new q(p + 1), w = lr(t[s - 1], m, 0);
  if (w > r) {
    var e = 0, y = 0, x = w - r, S = 1 << x;
    i.sort(function(Z, M) {
      return m[M.s] - m[Z.s] || Z.f - M.f;
    });
    for (;e < a; ++e) {
      var F = i[e].s;
      if (m[F] > r) y += S - (1 << w - m[F]), m[F] = r; else break;
    }
    y >>= x;
    while (y > 0) {
      var T = i[e].s;
      if (m[T] < r) y -= 1 << r - m[T]++ - 1; else ++e;
    }
    for (;e >= 0 && y; --e) {
      var C = i[e].s;
      if (m[C] == r) --m[C], ++y;
    }
    w = r;
  }
  return {
    t: new z(m),
    l: w
  };
}, lr = function(n, r, t) {
  return n.s == -1 ? Math.max(lr(n.l, r, t + 1), lr(n.r, r, t + 1)) : r[n.s] = t;
}, Mr = function(n) {
  var r = n.length;
  while (r && !n[--r]) ;
  var t = new q(++r), e = 0, a = n[0], i = 1, o = function(l) {
    t[e++] = l;
  };
  for (var f = 1; f <= r; ++f) if (n[f] == a && f != r) ++i; else {
    if (!a && i > 2) {
      for (;i > 138; i -= 138) o(32754);
      if (i > 2) o(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0;
    } else if (i > 3) {
      o(a), --i;
      for (;i > 6; i -= 6) o(8304);
      if (i > 2) o(i - 3 << 5 | 8208), i = 0;
    }
    while (i--) o(a);
    i = 1, a = n[f];
  }
  return {
    c: t.subarray(0, e),
    n: r
  };
}, _ = function(n, r) {
  var t = 0;
  for (var e = 0; e < r.length; ++e) t += n[e] * r[e];
  return t;
}, Br = function(n, r, t) {
  var e = t.length, a = Ir(r + 2);
  n[a] = e & 255, n[a + 1] = e >> 8, n[a + 2] = n[a] ^ 255, n[a + 3] = n[a + 1] ^ 255;
  for (var i = 0; i < e; ++i) n[a + i + 4] = t[i];
  return (a + 4 + e) * 8;
}, Sr = function(n, r, t, e, a, i, o, f, l, h, s) {
  R(r, s++, t), ++a[256];
  var u = fr(a, 15), {t: p, l: m} = u, w = fr(i, 15), {t: y, l: x} = w, S = Mr(p), {c: F, n: T} = S, C = Mr(y), {c: I, n: Z} = C, M = new q(19);
  for (var g = 0; g < F.length; ++g) ++M[F[g] & 31];
  for (var g = 0; g < I.length; ++g) ++M[I[g] & 31];
  var c = fr(M, 7), {t: B, l: K} = c, E = 19;
  for (;E > 4 && !B[zr[E - 1]]; --E) ;
  var Q = h + 5 << 3, O = _(a, J) + _(i, nr) + o, P = _(a, p) + _(i, y) + o + 14 + 3 * E + _(M, B) + 2 * M[16] + 3 * M[17] + 7 * M[18];
  if (l >= 0 && Q <= O && Q <= P) return Br(r, s, n.subarray(l, l + h));
  var k, D, N, Y;
  if (R(r, s, 1 + (P < O)), s += 2, P < O) {
    k = rr(p, m, 0), D = p, N = rr(y, x, 0), Y = y;
    var ir = rr(B, K, 0);
    R(r, s, T - 257), R(r, s + 5, Z - 1), R(r, s + 10, E - 4), s += 14;
    for (var g = 0; g < E; ++g) R(r, s + 3 * g, B[zr[g]]);
    s += 3 * E;
    var H = [ F, I ];
    for (var j = 0; j < 2; ++j) {
      var V = H[j];
      for (var g = 0; g < V.length; ++g) {
        var L = V[g] & 31;
        if (R(r, s, ir[L]), s += B[L], L > 15) R(r, s, V[g] >> 5 & 127), s += V[g] >> 12;
      }
    }
  } else k = Rr, D = J, N = Yr, Y = nr;
  for (var g = 0; g < f; ++g) {
    var U = e[g];
    if (U > 255) {
      var L = U >> 18 & 31;
      if (b(r, s, k[L + 257]), s += D[L + 257], L > 7) R(r, s, U >> 23 & 31), s += cr[L];
      var X = U & 31;
      if (b(r, s, N[X]), s += Y[X], X > 3) b(r, s, U >> 5 & 8191), s += pr[X];
    } else b(r, s, k[U]), s += D[U];
  }
  return b(r, s, k[256]), s + D[256];
}, Kr = new vr([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), Er = new z(0), Qr = function(n, r, t, e, a, i) {
  var o = i.z || n.length, f = new z(e + o + 5 * (1 + Math.ceil(o / 7e3)) + a), l = f.subarray(e, f.length - a), h = i.l, s = (i.r || 0) & 7;
  if (r) {
    if (s) l[0] = i.r >> 3;
    var u = Kr[r - 1], p = u >> 13, m = u & 8191, w = (1 << t) - 1, y = i.p || new q(32768), x = i.h || new q(w + 1), S = Math.ceil(t / 3), F = 2 * S, T = function(sr) {
      return (n[sr] ^ n[sr + 1] << S ^ n[sr + 2] << F) & w;
    }, C = new vr(25e3), I = new q(288), Z = new q(32), M = 0, g = 0, c = i.i || 0, B = 0, K = i.w || 0, E = 0;
    for (;c + 2 < o; ++c) {
      var Q = T(c), O = c & 32767, P = x[Q];
      if (y[O] = P, x[Q] = O, K <= c) {
        var k = o - c;
        if ((M > 7e3 || B > 24576) && (k > 423 || !h)) {
          s = Sr(n, l, 0, C, I, Z, g, B, E, c - E, s), B = M = g = 0, E = c;
          for (var D = 0; D < 286; ++D) I[D] = 0;
          for (var D = 0; D < 30; ++D) Z[D] = 0;
        }
        var N = 2, Y = 0, ir = m, H = O - P & 32767;
        if (k > 2 && Q == T(c - H)) {
          var j = Math.min(p, k) - 1, V = Math.min(32767, c), L = Math.min(258, k);
          while (H <= V && --ir && O != P) {
            if (n[c + N] == n[c + N - H]) {
              var U = 0;
              for (;U < L && n[c + U] == n[c + U - H]; ++U) ;
              if (U > N) {
                if (N = U, Y = H, U > j) break;
                var X = Math.min(H, U - 2), yr = 0;
                for (var D = 0; D < X; ++D) {
                  var ar = c - H + D & 32767, Nr = y[ar], wr = ar - Nr & 32767;
                  if (wr > yr) yr = wr, P = ar;
                }
              }
            }
            O = P, P = y[O], H += O - P & 32767;
          }
        }
        if (Y) {
          C[B++] = 268435456 | hr[N] << 18 | Ar[Y];
          var mr = hr[N] & 31, xr = Ar[Y] & 31;
          g += cr[mr] + pr[xr], ++I[257 + mr], ++Z[xr], K = c + N, ++M;
        } else C[B++] = n[c], ++I[n[c]];
      }
    }
    for (c = Math.max(c, K); c < o; ++c) C[B++] = n[c], ++I[n[c]];
    if (s = Sr(n, l, h, C, I, Z, g, B, E, c - E, s), !h) i.r = s & 7 | l[s / 8 | 0] << 3, 
    s -= 7, i.h = x, i.p = y, i.i = c, i.w = K;
  } else {
    for (var c = i.w || 0; c < o + h; c += 65535) {
      var or = c + 65535;
      if (or >= o) l[s / 8 | 0] = h, or = o;
      s = Br(l, s + 1, n.subarray(c, or));
    }
    i.i = o;
  }
  return Zr(f, 0, e + Ir(s) + a);
}, Vr = function() {
  var n = new Int32Array(256);
  for (var r = 0; r < 256; ++r) {
    var t = r, e = 9;
    while (--e) t = (t & 1 && -306674912) ^ t >>> 1;
    n[r] = t;
  }
  return n;
}(), qr = function() {
  var n = -1;
  return {
    p: function(r) {
      var t = n;
      for (var e = 0; e < r.length; ++e) t = Vr[t & 255 ^ r[e]] ^ t >>> 8;
      n = t;
    },
    d: function() {
      return ~n;
    }
  };
};

var Gr = function(n, r, t, e, a) {
  if (!a) {
    if (a = {
      l: 1
    }, r.dictionary) {
      var i = r.dictionary.subarray(-32768), o = new z(i.length + n.length);
      o.set(i), o.set(n, i.length), n = o, a.w = i.length;
    }
  }
  return Qr(n, r.level == null ? 6 : r.level, r.mem == null ? a.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + r.mem, t, e, a);
}, gr = function(n, r) {
  var t = {};
  for (var e in n) t[e] = n[e];
  for (var e in r) t[e] = r[e];
  return t;
};

var A = function(n, r, t) {
  for (;t; ++r) n[r] = t, t >>>= 8;
};

var Xr = function() {
  function n(r, t) {
    if (typeof r == "function") t = r, r = {};
    if (this.ondata = t, this.o = r || {}, this.s = {
      l: 0,
      i: 32768,
      w: 32768,
      z: 32768
    }, this.b = new z(98304), this.o.dictionary) {
      var e = this.o.dictionary.subarray(-32768);
      this.b.set(e, 32768 - e.length), this.s.i = 32768 - e.length;
    }
  }
  return n.prototype.p = function(r, t) {
    this.ondata(Gr(r, this.o, 0, 0, this.s), t);
  }, n.prototype.push = function(r, t) {
    if (!this.ondata) G(5);
    if (this.s.l) G(4);
    var e = r.length + this.s.z;
    if (e > this.b.length) {
      if (e > 2 * this.b.length - 32768) {
        var a = new z(e & -32768);
        a.set(this.b.subarray(0, this.s.z)), this.b = a;
      }
      var i = this.b.length - this.s.z;
      this.b.set(r.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), 
      this.b.set(this.b.subarray(-32768)), this.b.set(r.subarray(i), 32768), this.s.z = r.length - i + 32768, 
      this.s.i = 32766, this.s.w = 32768;
    } else this.b.set(r, this.s.z), this.s.z += r.length;
    if (this.s.l = t & 1, this.s.z > this.s.w + 8191 || t) this.p(this.b, t || !1), 
    this.s.w = this.s.i, this.s.i -= 2;
  }, n.prototype.flush = function() {
    if (!this.ondata) G(5);
    if (this.s.l) G(4);
    this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2;
  }, n;
}();

function $r(n, r) {
  return Gr(n, r || {}, 0, 0);
}

var Or = function(n, r, t, e) {
  for (var a in n) {
    var i = n[a], o = r + a, f = e;
    if (Array.isArray(i)) f = gr(e, i[1]), i = i[0];
    if (i instanceof z) t[o] = [ i, f ]; else t[o += "/"] = [ new z(0), f ], Or(i, o, t, e);
  }
}, Fr = typeof TextEncoder < "u" && new TextEncoder, dr = typeof TextDecoder < "u" && new TextDecoder, jr = 0;

try {
  dr.decode(Er, {
    stream: !0
  }), jr = 1;
} catch (n) {}

function tr(n, r) {
  if (r) {
    var t = new z(n.length);
    for (var e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
    return t;
  }
  if (Fr) return Fr.encode(n);
  var a = n.length, i = new z(n.length + (n.length >> 1)), o = 0, f = function(s) {
    i[o++] = s;
  };
  for (var e = 0; e < a; ++e) {
    if (o + 5 > i.length) {
      var l = new z(o + 8 + (a - e << 1));
      l.set(i), i = l;
    }
    var h = n.charCodeAt(e);
    if (h < 128 || r) f(h); else if (h < 2048) f(192 | h >> 6), f(128 | h & 63); else if (h > 55295 && h < 57344) h = 65536 + (h & 1047552) | n.charCodeAt(++e) & 1023, 
    f(240 | h >> 18), f(128 | h >> 12 & 63), f(128 | h >> 6 & 63), f(128 | h & 63); else f(224 | h >> 12), 
    f(128 | h >> 6 & 63), f(128 | h & 63);
  }
  return Zr(i, 0, o);
}

var br = function(n) {
  return n == 1 ? 3 : n < 6 ? 2 : n == 9 ? 1 : 0;
};

var d = function(n) {
  var r = 0;
  if (n) for (var t in n) {
    var e = n[t].length;
    if (e > 65535) G(9);
    r += e + 4;
  }
  return r;
}, er = function(n, r, t, e, a, i, o, f) {
  var l = e.length, h = t.extra, s = f && f.length, u = d(h);
  if (A(n, r, o != null ? 33639248 : 67324752), r += 4, o != null) n[r++] = 20, n[r++] = t.os;
  n[r] = 20, r += 2, n[r++] = t.flag << 1 | (i < 0 && 8), n[r++] = a && 8, n[r++] = t.compression & 255, 
  n[r++] = t.compression >> 8;
  var p = new Date(t.mtime == null ? Date.now() : t.mtime), m = p.getFullYear() - 1980;
  if (m < 0 || m > 119) G(10);
  if (A(n, r, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), 
  r += 4, i != -1) A(n, r, t.crc), A(n, r + 4, i < 0 ? -i - 2 : i), A(n, r + 8, t.size);
  if (A(n, r + 12, l), A(n, r + 14, u), r += 16, o != null) A(n, r, s), A(n, r + 6, t.attrs), 
  A(n, r + 10, o), r += 14;
  if (n.set(e, r), r += l, u) for (var w in h) {
    var y = h[w], x = y.length;
    A(n, r, +w), A(n, r + 2, x), n.set(y, r + 4), r += 4 + x;
  }
  if (s) n.set(f, r), r += s;
  return r;
}, Pr = function(n, r, t, e, a) {
  A(n, r, 101010256), A(n, r + 8, t), A(n, r + 10, t), A(n, r + 12, e), A(n, r + 16, a);
}, Cr = function() {
  function n(r) {
    this.filename = r, this.c = qr(), this.size = 0, this.compression = 0;
  }
  return n.prototype.process = function(r, t) {
    this.ondata(null, r, t);
  }, n.prototype.push = function(r, t) {
    if (!this.ondata) G(5);
    if (this.c.p(r), this.size += r.length, t) this.crc = this.c.d();
    this.process(r, t || !1);
  }, n;
}();

var nn = function() {
  function n(r, t) {
    var e = this;
    if (!t) t = {};
    Cr.call(this, r), this.d = new Xr(t, function(a, i) {
      e.ondata(null, a, i);
    }), this.compression = 8, this.flag = br(t.level);
  }
  return n.prototype.process = function(r, t) {
    try {
      this.d.push(r, t);
    } catch (e) {
      this.ondata(e, null, t);
    }
  }, n.prototype.push = function(r, t) {
    Cr.prototype.push.call(this, r, t);
  }, n;
}();

var tn = function() {
  function n(r) {
    this.ondata = r, this.u = [], this.d = 1;
  }
  return n.prototype.add = function(r) {
    var t = this;
    if (!this.ondata) G(5);
    if (this.d & 2) this.ondata(G(4 + (this.d & 1) * 8, 0, 1), null, !1); else {
      var e = tr(r.filename), a = e.length, i = r.comment, o = i && tr(i), f = a != r.filename.length || o && i.length != o.length, l = a + d(r.extra) + 30;
      if (a > 65535) this.ondata(G(11, 0, 1), null, !1);
      var h = new z(l);
      er(h, 0, r, e, f, -1);
      var s = [ h ], u = function() {
        for (var x = 0, S = s; x < S.length; x++) {
          var F = S[x];
          t.ondata(null, F, !1);
        }
        s = [];
      }, p = this.d;
      this.d = 0;
      var m = this.u.length, w = gr(r, {
        f: e,
        u: f,
        o,
        t: function() {
          if (r.terminate) r.terminate();
        },
        r: function() {
          if (u(), p) {
            var x = t.u[m + 1];
            if (x) x.r(); else t.d = 1;
          }
          p = 1;
        }
      }), y = 0;
      r.ondata = function(x, S, F) {
        if (x) t.ondata(x, S, F), t.terminate(); else if (y += S.length, s.push(S), F) {
          var T = new z(16);
          if (A(T, 0, 134695760), A(T, 4, r.crc), A(T, 8, y), A(T, 12, r.size), s.push(T), 
          w.c = y, w.b = l + y + 16, w.crc = r.crc, w.size = r.size, p) w.r();
          p = 1;
        } else if (p) u();
      }, this.u.push(w);
    }
  }, n.prototype.end = function() {
    var r = this;
    if (this.d & 2) {
      this.ondata(G(4 + (this.d & 1) * 8, 0, 1), null, !0);
      return;
    }
    if (this.d) this.e(); else this.u.push({
      r: function() {
        if (!(r.d & 1)) return;
        r.u.splice(-1, 1), r.e();
      },
      t: function() {}
    });
    this.d = 3;
  }, n.prototype.e = function() {
    var r = 0, t = 0, e = 0;
    for (var a = 0, i = this.u; a < i.length; a++) {
      var o = i[a];
      e += 46 + o.f.length + d(o.extra) + (o.o ? o.o.length : 0);
    }
    var f = new z(e + 22);
    for (var l = 0, h = this.u; l < h.length; l++) {
      var o = h[l];
      er(f, r, o, o.f, o.u, -o.c - 2, t, o.o), r += 46 + o.f.length + d(o.extra) + (o.o ? o.o.length : 0), 
      t += o.b;
    }
    Pr(f, r, this.u.length, e, t), this.ondata(null, f, !0), this.d = 2;
  }, n.prototype.terminate = function() {
    for (var r = 0, t = this.u; r < t.length; r++) {
      var e = t[r];
      e.t();
    }
    this.d = 2;
  }, n;
}();

function en(n, r) {
  if (!r) r = {};
  var t = {}, e = [];
  Or(n, "", t, r);
  var a = 0, i = 0;
  for (var o in t) {
    var f = t[o], l = f[0], h = f[1], s = h.level == 0 ? 0 : 8, u = tr(o), p = u.length, m = h.comment, w = m && tr(m), y = w && w.length, x = d(h.extra);
    if (p > 65535) G(11);
    var S = s ? $r(l, h) : l, F = S.length, T = qr();
    T.p(l), e.push(gr(h, {
      size: l.length,
      crc: T.d(),
      c: S,
      f: u,
      m: w,
      u: p != o.length || w && m.length != y,
      o: a,
      compression: s
    })), a += 30 + p + x + F, i += 76 + 2 * (p + x) + (y || 0) + F;
  }
  var C = new z(i + 22), I = a, Z = i - a;
  for (var M = 0; M < e.length; ++M) {
    var u = e[M];
    er(C, u.o, u, u.f, u.u, u.c.length);
    var g = 30 + u.f.length + d(u.extra);
    C.set(u.c, u.o + g), er(C, a, u, u.f, u.u, u.c.length, u.o, u.m), a += 16 + g + (u.m ? u.m.length : 0);
  }
  return Pr(C, a, e.length, Z, I), C;
}

export { tn as Zip, nn as ZipDeflate, en as zipSync };
