// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var n1n = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp"
};

function uh(n) {
  if (n.length < 4) return null;
  if (n[0] === 137 && n[1] === 80 && n[2] === 78 && n[3] === 71) return "image/png";
  if (n[0] === 255 && n[1] === 216 && n[2] === 255) return "image/jpeg";
  if (n.length >= 6 && n[0] === 71 && n[1] === 73 && n[2] === 70 && n[3] === 56 && (n[4] === 55 || n[4] === 57) && n[5] === 97) return "image/gif";
  if (n[0] === 82 && n[1] === 73 && n[2] === 70 && n[3] === 70 && n.length >= 12 && n[8] === 87 && n[9] === 69 && n[10] === 66 && n[11] === 80) return "image/webp";
  return null;
}

function n_o(n) {
  if (n.subarray(0, 4).toString("latin1").toLowerCase() === "%pdf") return "pdf";
  if (n[0] === 80 && n[1] === 75 && n[2] === 3 && n[3] === 4) return "zip";
  return null;
}

function Ten(n) {
  let e = n.subarray(0, 32), t = e.toString("latin1").replace(/[^\x20-\x7e]/g, "."), r = t.toLowerCase();
  if (r.includes("<!doctype") || r.includes("<html")) return `HTML document (starts with "${t.slice(0, 24)}")`;
  if (r.startsWith("<?xml") || r.startsWith("<svg")) return `XML/SVG document (starts with "${t.slice(0, 24)}")`;
  if (r.startsWith("{") || r.startsWith("[")) return `JSON/text (starts with "${t.slice(0, 24)}")`;
  let o = n_o(e);
  if (o === "pdf") return "PDF document";
  if (o === "zip") return "ZIP archive (Office documents such as .pptx/.docx/.xlsx are ZIPs)";
  return `unrecognized bytes (hex: ${e.subarray(0, 8).toString("hex").replace(/(..)/g, "$1 ").trim()})`;
}

function eZ(n) {
  return uh(n) ?? "image/png";
}

function dct(n) {
  try {
    let e = Buffer.from(n, "base64");
    return eZ(e);
  } catch {
    return "image/png";
  }
}

function Rz(n) {
  if (n.length < 10) return;
  if (n[0] === 137 && n[1] === 80 && n[2] === 78 && n[3] === 71 && n.length >= 24) return {
    width: n.readUInt32BE(16),
    height: n.readUInt32BE(20)
  };
  if (n[0] === 71 && n[1] === 73 && n[2] === 70) return {
    width: n.readUInt16LE(6),
    height: n.readUInt16LE(8)
  };
  let e = B(n);
  if (e !== void 0) return {
    height: n.readUInt16BE(e + 5),
    width: n.readUInt16BE(e + 7)
  };
  if (n[0] === 255 && n[1] === 216) return;
  if (n[0] === 82 && n[1] === 73 && n[2] === 70 && n[3] === 70 && n.length >= 30 && n[8] === 87 && n[9] === 69 && n[10] === 66 && n[11] === 80) {
    let t = n.toString("ascii", 12, 16);
    if (t === "VP8 ") return {
      width: n.readUInt16LE(26) & 16383,
      height: n.readUInt16LE(28) & 16383
    };
    if (t === "VP8L") {
      let r = n.readUInt32LE(21);
      return {
        width: (r & 16383) + 1,
        height: (r >> 14 & 16383) + 1
      };
    }
    if (t === "VP8X") return {
      width: n.readUIntLE(24, 3) + 1,
      height: n.readUIntLE(27, 3) + 1
    };
  }
  return;
}

function B(n) {
  if (n.length < 4 || n[0] !== 255 || n[1] !== 216) return;
  let e = 2;
  while (e + 9 < n.length) {
    if (n[e] !== 255) {
      e++;
      continue;
    }
    let t = n[e + 1];
    if (t === 255) {
      e++;
      continue;
    }
    if (t !== void 0 && t >= 192 && t <= 207 && t !== 196 && t !== 200 && t !== 204) return e;
    if (t === void 0 || t >= 208 && t <= 217 || t === 1) {
      e += 2;
      continue;
    }
    let r = n.readUInt16BE(e + 2);
    if (r < 2) return;
    e += 2 + r;
  }
  return;
}

function r_o(n) {
  let e = B(n);
  return e === void 0 ? void 0 : n[e + 9];
}

var y = 11e5, S = 64, C = Buffer.from([ 255, 218 ]), N = 8192;

function Xks(n, e) {
  if (n.length < 4 || n[0] !== 255 || n[1] !== 216) return 0;
  let t = e + n.length / N, r = 0;
  for (let c = n.indexOf(C); c !== -1; c = n.indexOf(C, c + 2)) if (++r > t) return e + 1;
  let o = y + n.length / S, s = 0, i = 2;
  for (let c = 0; s <= e; c++) {
    if (c > o) return e + 1;
    if (n[i] !== 255) i = n.indexOf(255, i);
    if (i === -1 || i + 3 >= n.length) break;
    let a = n[i + 1] ?? 0;
    if (a === 255) {
      i++;
      continue;
    }
    if (a === 217) break;
    if (a <= 1 || a >= 208 && a <= 216) {
      i += 2;
      continue;
    }
    let d = n.readUInt16BE(i + 2);
    if (a < 192 || d < 2) return e + 1;
    if (a >= 201 && a <= 207 && a !== 204) return e + 1;
    if (a === 218) s++;
    i += 2 + d;
  }
  return s;
}

var I = 1229472850, w = 1347179589, _ = 1951551059, P = 1229209940, U = 1229278788, A = 1700284774, F = new Set([ I, w, P, U ]), T = new Set([ _, 1732332865, 1665684045, 1934772034, 1933723988, 1665745744, 1766015824 ]), R = 4096, H = 1e5;

function Jks(n) {
  if (uh(n) !== "image/png") return n;
  let e = new Set, t = [ [ 0, 8 ] ], r = 8;
  for (let s = 0; r + 12 <= n.length; s++) {
    if (s === H) return null;
    let i = n.readUInt32BE(r), c = n.readUInt32BE(r + 4), a = r + 12 + i;
    if (a > n.length) break;
    let d = T.has(c) && i <= R && !e.has(c);
    if (d) e.add(c);
    if (F.has(c) || d) {
      let x = t.at(-1);
      if (x !== void 0 && x[1] === r) x[1] = a; else t.push([ r, a ]);
    }
    if (r = a, c === U) break;
  }
  let o = t[0];
  if (t.length === 1 && o !== void 0 && o[1] === n.length) return n;
  return Buffer.concat(t.map(([s, i]) => n.subarray(s, i)));
}

function Qks(n) {
  if (uh(n) !== "image/png" || n.length < 26 || n.readUInt32BE(8) !== 13 || n.readUInt32BE(12) !== I) return !0;
  let e = n[25];
  if (e !== 0 && e !== 2 && e !== 3) return !0;
  let t = 8;
  for (let r = 0; r < 1e3 && t + 8 <= n.length; r++) {
    let o = n.readUInt32BE(t + 4);
    if (o === _) return !0;
    if (o === P) return !1;
    t += 12 + n.readUInt32BE(t);
  }
  return !0;
}

function Zks(n) {
  if (uh(n) !== "image/png") return !1;
  let e = 8;
  while (e + 8 <= n.length) {
    let t = n.readUInt32BE(e);
    if (n.readUInt32BE(e + 4) === A) {
      let r = n.subarray(e + 8, e + 8 + t);
      if (r.includes("\x01\x12", 0, "latin1") || r.includes("\x12\x01", 0, "latin1")) return !0;
    }
    e += 12 + t;
  }
  return !1;
}

var k = 2, L = 16, M = 32, G = 1e3;

function m(n, e) {
  let t = [], r = e;
  while (r + 8 <= n.length && t.length < G) {
    let o = n.readUInt32LE(r + 4), s = r + 8 + o;
    if (s > n.length) return null;
    t.push({
      fourCC: n.toString("latin1", r, r + 4),
      payload: n.subarray(r + 8, s)
    }), r = s + (o & 1);
  }
  return t;
}

function u(n, e) {
  let t = Buffer.alloc(8);
  t.write(n, 0, "ascii"), t.writeUInt32LE(e.length, 4);
  let r = Buffer.alloc(e.length & 1);
  return Buffer.concat([ t, e, r ]);
}

function E(n) {
  let e = Buffer.concat([ Buffer.from("WEBP", "ascii"), ...n ]), t = Buffer.alloc(8);
  return t.write("RIFF", 0, "ascii"), t.writeUInt32LE(e.length, 4), Buffer.concat([ t, e ]);
}

function lMt(n) {
  return n.length >= 30 && n.toString("latin1", 0, 4) === "RIFF" && n.toString("latin1", 8, 12) === "WEBP" && n.toString("latin1", 12, 16) === "VP8X" && ((n[20] ?? 0) & k) !== 0;
}

function o_o(n) {
  if (uh(n) !== "image/webp") return !1;
  return m(n, 12)?.find(t => t.fourCC === "VP8L" || t.fourCC === "VP8 " || t.fourCC === "ANMF")?.fourCC === "VP8L";
}

function eTs(n) {
  let e = m(n, 12);
  return e === null || e.some(({fourCC: t, payload: r}) => t === "VP8X" && ((r[0] ?? 0) & L) !== 0 || t === "VP8L" && ((r[4] ?? 0) & 16) !== 0);
}

function tTs(n) {
  if (!lMt(n)) return null;
  let e = Math.min(n.length, 8 + n.readUInt32LE(4)), t = m(n.subarray(0, e), 12), r = t?.[0], o = t?.find(l => l.fourCC === "ANMF");
  if (!r || r.payload.length < 10 || !o || o.payload.length < 16) return null;
  let s = r.payload.readUIntLE(4, 3) + 1, i = r.payload.readUIntLE(7, 3) + 1, c = o.payload;
  if (c.readUIntLE(0, 3) !== 0 || c.readUIntLE(3, 3) !== 0 || c.readUIntLE(6, 3) + 1 !== s || c.readUIntLE(9, 3) + 1 !== i) return null;
  let a = m(o.payload, 16), d = a?.find(l => l.fourCC === "VP8 " || l.fourCC === "VP8L");
  if (!d) return null;
  let x = E([ u(d.fourCC, d.payload) ]), f = Rz(x);
  if (f?.width !== s || f.height !== i) return null;
  let g = t?.find(l => l.fourCC === "ICCP"), h = d.fourCC === "VP8 " ? a?.find(l => l.fourCC === "ALPH") : void 0;
  if (!g && !h) return x;
  let p = Buffer.alloc(10);
  return p[0] = (g ? M : 0) | (h ? L : 0), p.writeUIntLE(s - 1, 4, 3), p.writeUIntLE(i - 1, 7, 3), 
  E([ u("VP8X", p), ...g ? [ u("ICCP", g.payload) ] : [], ...h ? [ u("ALPH", h.payload) ] : [], u(d.fourCC, d.payload) ]);
}

export { n1n, uh, n_o, Ten, eZ, dct, Rz, r_o, Xks, Jks, Qks, Zks, lMt, o_o, eTs, tTs };
