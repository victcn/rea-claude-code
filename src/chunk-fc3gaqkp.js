// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $jn, Fjn } from "./chunk-0xf5tvmq.js";

import { PHt, Wtn } from "./chunk-r36nxycs.js";

var s = 64, y = 32, m = new Uint32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]), g = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], L = Math.pow(2, 53) - 1;

var c = function() {
  function h() {
    this.state = Int32Array.from(g), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), 
    this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
  }
  return h.prototype.update = function(r) {
    if (this.finished) throw Error("Attempted to update an already finished hash.");
    var a = 0, t = r.byteLength;
    if (this.bytesHashed += t, this.bytesHashed * 8 > L) throw Error("Cannot hash more than 2^53 - 1 bits");
    while (t > 0) if (this.buffer[this.bufferLength++] = r[a++], t--, this.bufferLength === s) this.hashBuffer(), 
    this.bufferLength = 0;
  }, h.prototype.digest = function() {
    if (!this.finished) {
      var r = this.bytesHashed * 8, a = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), t = this.bufferLength;
      if (a.setUint8(this.bufferLength++, 128), t % s >= s - 8) {
        for (var e = this.bufferLength; e < s; e++) a.setUint8(e, 0);
        this.hashBuffer(), this.bufferLength = 0;
      }
      for (var e = this.bufferLength; e < s - 8; e++) a.setUint8(e, 0);
      a.setUint32(s - 8, Math.floor(r / 4294967296), !0), a.setUint32(s - 4, r), this.hashBuffer(), 
      this.finished = !0;
    }
    var i = new Uint8Array(y);
    for (var e = 0; e < 8; e++) i[e * 4] = this.state[e] >>> 24 & 255, i[e * 4 + 1] = this.state[e] >>> 16 & 255, 
    i[e * 4 + 2] = this.state[e] >>> 8 & 255, i[e * 4 + 3] = this.state[e] >>> 0 & 255;
    return i;
  }, h.prototype.hashBuffer = function() {
    var r = this, {buffer: a, state: t} = r, e = t[0], i = t[1], o = t[2], u = t[3], x = t[4], b = t[5], d = t[6], p = t[7];
    for (var f = 0; f < s; f++) {
      if (f < 16) this.temp[f] = (a[f * 4] & 255) << 24 | (a[f * 4 + 1] & 255) << 16 | (a[f * 4 + 2] & 255) << 8 | a[f * 4 + 3] & 255; else {
        var n = this.temp[f - 2], w = (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10;
        n = this.temp[f - 15];
        var E = (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3;
        this.temp[f] = (w + this.temp[f - 7] | 0) + (E + this.temp[f - 16] | 0);
      }
      var v = (((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)) + (x & b ^ ~x & d) | 0) + (p + (m[f] + this.temp[f] | 0) | 0) | 0, S = ((e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)) + (e & i ^ e & o ^ i & o) | 0;
      p = d, d = b, b = x, x = u + v | 0, u = o, o = i, i = e, e = v + S | 0;
    }
    t[0] += e, t[1] += i, t[2] += o, t[3] += u, t[4] += x, t[5] += b, t[6] += d, t[7] += p;
  }, h;
}();

var PMt = function() {
  function h(r) {
    this.secret = r, this.hash = new c, this.reset();
  }
  return h.prototype.update = function(r) {
    if (Wtn(r) || this.error) return;
    try {
      this.hash.update(PHt(r));
    } catch (a) {
      this.error = a;
    }
  }, h.prototype.digestSync = function() {
    if (this.error) throw this.error;
    if (this.outer) {
      if (!this.outer.finished) this.outer.update(this.hash.digest());
      return this.outer.digest();
    }
    return this.hash.digest();
  }, h.prototype.digest = function() {
    return $jn(this, void 0, void 0, function() {
      return Fjn(this, function(r) {
        return [ 2, this.digestSync() ];
      });
    });
  }, h.prototype.reset = function() {
    if (this.hash = new c, this.secret) {
      this.outer = new c;
      var r = _(this.secret), a = new Uint8Array(s);
      a.set(r);
      for (var t = 0; t < s; t++) r[t] ^= 54, a[t] ^= 92;
      this.hash.update(r), this.outer.update(a);
      for (var t = 0; t < r.byteLength; t++) r[t] = 0;
    }
  }, h;
}();

function _(h) {
  var r = PHt(h);
  if (r.byteLength > s) {
    var a = new c;
    a.update(r), r = a.digest();
  }
  var t = new Uint8Array(s);
  return t.set(r), t;
}

export { PMt };
