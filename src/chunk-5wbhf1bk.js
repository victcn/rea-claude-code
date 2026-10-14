// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function Ii(t, n) {
  return t.repeat(Number.isFinite(n) && n > 0 ? n : 0);
}

function dl(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Ma(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function I(t, n, e = n + "s") {
  return t === 1 ? n : e;
}

function YOe(t) {
  let n = 0;
  for (let e = 0; e < t.length; e++) {
    let r = t.charCodeAt(e);
    if (r >= 55296 && r <= 56319 && e + 1 < t.length) {
      let i = t.charCodeAt(e + 1);
      if (i >= 56320 && i <= 57343) e++;
    }
    n++;
  }
  return n;
}

function $s(t, n) {
  if (t.length <= n) return t;
  let e = [];
  for (let r of t) {
    if (e.length >= n) break;
    e.push(r);
  }
  return e.join("");
}

function ne(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(0, n), r = e.charCodeAt(n - 1);
  return P$t(r >= 55296 && r <= 56319 ? e.slice(0, -1) : e);
}

function Ql(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(-n), r = e.charCodeAt(0);
  return P$t(r >= 56320 && r <= 57343 ? e.slice(1) : e);
}

function d6(t, n, e, r) {
  if (t.length <= n + e) return t;
  let i = n > 0 ? ne(t, n) : "", o = e > 0 ? Ql(t, e) : "";
  return `${i}${r(t.length - i.length - o.length)}${o}`;
}

function P$t(t) {
  if (typeof Buffer < "u") return Buffer.from(t, "utf16le").toString("utf16le");
  return x(t);
}

function x(t) {
  let e = [];
  for (let r = 0; r < t.length; r += 8192) {
    let i = Math.min(r + 8192, t.length), o = new Uint16Array(i - r);
    for (let u = r; u < i; u++) o[u - r] = t.charCodeAt(u);
    e.push(String.fromCharCode(...o));
  }
  return e.join("");
}

var m = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/, a = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, l = typeof String.prototype.isWellFormed === "function" ? Function.prototype.call.bind(String.prototype.isWellFormed) : void 0, g = typeof String.prototype.toWellFormed === "function" ? Function.prototype.call.bind(String.prototype.toWellFormed) : void 0;

function sc(t) {
  if (l) return l(t);
  return !m.test(t);
}

function xp(t) {
  if (g) return g(t);
  return t.replace(a, "\ufffd");
}

function Mv(t) {
  if (l && l(t)) return t;
  return t.replace(a, "");
}

function Dje(t) {
  let n = !1, e = [ t ];
  while (e.length > 0) {
    let r = e.pop();
    if (Array.isArray(r)) for (let i = 0; i < r.length; i++) {
      let o = r[i];
      if (typeof o === "string") {
        if (!sc(o)) r[i] = xp(o), n = !0;
      } else if (o !== null && typeof o === "object") e.push(o);
    } else if (r !== null && typeof r === "object") {
      let i = r;
      for (let o of Object.keys(i)) {
        let u = i[o];
        if (typeof u === "string") {
          if (!sc(u)) i[o] = xp(u), n = !0;
        } else if (u !== null && typeof u === "object") e.push(u);
      }
    }
  }
  return n;
}

function W4n(t) {
  let n = [ t ];
  while (n.length > 0) {
    let e = n.pop();
    if (Array.isArray(e)) for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (typeof i === "string") {
        if (!sc(i)) return !0;
      } else if (i !== null && typeof i === "object") n.push(i);
    } else if (e !== null && typeof e === "object") {
      let r = e;
      for (let i of Object.keys(r)) {
        let o = r[i];
        if (typeof o === "string") {
          if (!sc(o)) return !0;
        } else if (o !== null && typeof o === "object") n.push(o);
      }
    }
  }
  return !1;
}

function nt(t, n) {
  let e = t.indexOf(n);
  return e === -1 ? t : t.slice(0, e);
}

function I$t(t, n) {
  let e = t.length;
  while (e > 0 && n.includes(t[e - 1])) e--;
  return t.slice(0, e);
}

var f = /^[\x00-\x7f]*$/;

function XOe(t, n) {
  let e = f.test(t);
  if (e !== f.test(n)) return e ? -1 : 1;
  if (e) return t.localeCompare(n);
  if (t === n) return 0;
  return t < n ? -1 : 1;
}

function vr(t) {
  return nt(t, `\n`);
}

function Nt(t, n, e = 0) {
  let r = 0, i = t.indexOf(n, e);
  while (i !== -1) r++, i = t.indexOf(n, i + 1);
  return r;
}

function MX(t) {
  return t.replace(/[\uFF10-\uFF19]/g, n => String.fromCharCode(n.charCodeAt(0) - 65248));
}

function c6(t) {
  return t.replaceAll("\u3000", " ");
}

var p = 33554432;

function AHr(t, n = ",", e = p) {
  let i = "";
  for (let o of t) {
    let u = i ? n : "", c = u + o;
    if (i.length + c.length <= e) i += c; else {
      let s = e - i.length - u.length - 14;
      if (s > 0) i += u + o.slice(0, s) + "...[truncated]"; else i += "...[truncated]";
      return i;
    }
  }
  return i;
}

class rdn {
  maxSize;
  content="";
  isTruncated=!1;
  totalBytesReceived=0;
  constructor(t = p) {
    this.maxSize = t;
  }
  append(t) {
    let n = typeof t === "string" ? t : t.toString();
    if (this.totalBytesReceived += n.length, this.isTruncated && this.content.length >= this.maxSize) return;
    if (this.content.length + n.length > this.maxSize) {
      let e = this.maxSize - this.content.length;
      if (e > 0) this.content += n.slice(0, e);
      this.isTruncated = !0;
    } else this.content += n;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let t = this.totalBytesReceived - this.maxSize, n = Math.round(t / 1024);
    return this.content + `\n... [output truncated - ${n}KB removed]`;
  }
  clear() {
    this.content = "", this.isTruncated = !1, this.totalBytesReceived = 0;
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}

function odn(t, n) {
  let e = t.split(`\n`);
  if (e.length <= n) return t;
  return e.slice(0, n).join(`\n`) + "\u2026";
}

function xd(t, n) {
  if (t.length <= n) return t;
  let e = ne(t, n);
  return `${e}\u2026 [+${t.length - e.length} chars]`;
}

function mM(t, n) {
  if (t.length <= n) return t;
  let e = ne(t, n - 1), r = e.search(/\s\S*$/), i = r === -1 ? "" : e.slice(0, r).trimEnd();
  return `${i.length > n / 2 ? i : e.trimEnd()}\u2026`;
}

var gae = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g, BG = /[\x00-\x1F\x7F-\x9F]/;

function Br(t) {
  return t.replace(gae, "").replace(/\s+/g, " ").trim();
}

function wI(t) {
  return t.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu, "");
}

var d = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?(?:\u0007|\u001B\u005C|\u009C))|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g;

function My(t) {
  return Mv(t).replace(d, "").replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}

function KU(t) {
  let n = /[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu;
  if (!n.test(t)) return t;
  let e = "";
  for (let {segment: r} of new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  }).segment(t)) {
    let i = /\p{Extended_Pictographic}|\p{Regional_Indicator}|^[#*0-9]\uFE0F?\u20E3$/u.test(r), o = /^\u{1F3F4}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,6}\u{E007F}$/u.test(r);
    n.lastIndex = 0, e += r.replace(n, (u, c) => {
      if (u === `\n` || u === "\t") return u;
      let s = u.codePointAt(0) ?? 0;
      if (i && (u === "\ufe0f" || u === "\ufe0e" || u === "\u20e3" || u === "\u200d" && c + u.length < r.length || o && s >= 917536 && s <= 917631)) return u;
      if (s === 27) return "\u241b";
      if (s < 32) return String.fromCodePoint(9216 + s);
      if (s === 127) return "\u2421";
      return `\\u{${s.toString(16).toUpperCase()}}`;
    });
  }
  return e;
}

function Vc(t) {
  return KU(t).replace(/\n/g, "\u2424").replace(/\t/g, "\u2409");
}

function cD(t) {
  let n = My(vr(t));
  return n.length > 200 ? `${ne(n, 200)}\u2026` : n;
}

function hq(t, n) {
  return ne(uD(t), n);
}

function uD(t) {
  return wI(Br(t.replace(d, ""))).trim();
}

var z4n = 500;

function Ame(t, n) {
  if (t.length * 3 <= n) return t;
  let e = new TextEncoder, r = new Uint8Array(Math.max(0, Math.min(n, 4194304))), i = 0, o = 0;
  while (o < t.length) {
    let u = n - i;
    if (u <= 0) break;
    let c = u < r.length ? r.subarray(0, u) : r, {read: s, written: h} = e.encodeInto(t.slice(o), c);
    if (s === 0) break;
    o += s, i += h;
  }
  return o >= t.length ? t : t.slice(0, o);
}

function G4n(t, n = "") {
  let e = (t.match(/`+/g) ?? []).reduce((i, o) => Math.max(i, o.length), 0), r = "`".repeat(Math.max(3, e + 1));
  return `${r}${n.replace(/[`\s].*$/s, "")}\n${t}\n${r}`;
}

export { Ii, dl, Ma, I, YOe, $s, ne, Ql, d6, P$t, sc, xp, Mv, Dje, W4n, nt, I$t, XOe, vr, Nt, MX, c6, AHr, rdn, odn, xd, mM, gae, BG, Br, wI, My, KU, Vc, cD, hq, uD, z4n, Ame, G4n };
