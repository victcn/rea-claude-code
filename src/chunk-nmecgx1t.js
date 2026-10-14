// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class L {
  diff(n, e, t = {}) {
    let i;
    if (typeof t === "function") i = t, t = {}; else if ("callback" in t) i = t.callback;
    let l = this.castInput(n, t), r = this.castInput(e, t), s = this.removeEmpty(this.tokenize(l, t)), o = this.removeEmpty(this.tokenize(r, t));
    return this.diffWithOptionsObj(s, o, t, i);
  }
  diffWithOptionsObj(n, e, t, i) {
    var l;
    let r = d => {
      if (d = this.postProcess(d, t), i) {
        setTimeout(function() {
          i(d);
        }, 0);
        return;
      } else return d;
    }, s = e.length, o = n.length, f = 1, u = s + o;
    if (t.maxEditLength != null) u = Math.min(u, t.maxEditLength);
    let h = (l = t.timeout) !== null && l !== void 0 ? l : 1 / 0, c = Date.now() + h, a = [ {
      oldPos: -1,
      lastComponent: void 0
    } ], g = this.extractCommon(a[0], e, n, 0, t);
    if (a[0].oldPos + 1 >= o && g + 1 >= s) return r(this.buildValues(a[0].lastComponent, e, n));
    let w = -1 / 0, P = 1 / 0, C = () => {
      for (let d = Math.max(w, -f); d <= Math.min(P, f); d += 2) {
        let p, m = a[d - 1], x = a[d + 1];
        if (m) a[d - 1] = void 0;
        let v = !1;
        if (x) {
          let D = x.oldPos - d;
          v = x && 0 <= D && D < s;
        }
        let S = m && m.oldPos + 1 < o;
        if (!v && !S) {
          a[d] = void 0;
          continue;
        }
        if (!S || v && m.oldPos < x.oldPos) p = this.addToPath(x, !0, !1, 0, t); else p = this.addToPath(m, !1, !0, 1, t);
        if (g = this.extractCommon(p, e, n, d, t), p.oldPos + 1 >= o && g + 1 >= s) return r(this.buildValues(p.lastComponent, e, n)) || !0; else {
          if (a[d] = p, p.oldPos + 1 >= o) P = Math.min(P, d - 1);
          if (g + 1 >= s) w = Math.max(w, d + 1);
        }
      }
      f++;
    };
    if (i) (function d() {
      setTimeout(function() {
        if (f > u || Date.now() > c) return i(void 0);
        if (!C()) d();
      }, 0);
    })(); else while (f <= u && Date.now() <= c) {
      let d = C();
      if (d) return d;
    }
  }
  addToPath(n, e, t, i, l) {
    let r = n.lastComponent;
    if (r && !l.oneChangePerToken && r.added === e && r.removed === t) return {
      oldPos: n.oldPos + i,
      lastComponent: {
        count: r.count + 1,
        added: e,
        removed: t,
        previousComponent: r.previousComponent
      }
    }; else return {
      oldPos: n.oldPos + i,
      lastComponent: {
        count: 1,
        added: e,
        removed: t,
        previousComponent: r
      }
    };
  }
  extractCommon(n, e, t, i, l) {
    let r = e.length, s = t.length, o = n.oldPos, f = o - i, u = 0;
    while (f + 1 < r && o + 1 < s && this.equals(t[o + 1], e[f + 1], l)) if (f++, o++, 
    u++, l.oneChangePerToken) n.lastComponent = {
      count: 1,
      previousComponent: n.lastComponent,
      added: !1,
      removed: !1
    };
    if (u && !l.oneChangePerToken) n.lastComponent = {
      count: u,
      previousComponent: n.lastComponent,
      added: !1,
      removed: !1
    };
    return n.oldPos = o, f;
  }
  equals(n, e, t) {
    if (t.comparator) return t.comparator(n, e); else return n === e || !!t.ignoreCase && n.toLowerCase() === e.toLowerCase();
  }
  removeEmpty(n) {
    let e = [];
    for (let t = 0; t < n.length; t++) if (n[t]) e.push(n[t]);
    return e;
  }
  castInput(n, e) {
    return n;
  }
  tokenize(n, e) {
    return Array.from(n);
  }
  join(n) {
    return n.join("");
  }
  postProcess(n, e) {
    return n;
  }
  get useLongestToken() {
    return !1;
  }
  buildValues(n, e, t) {
    let i = [], l;
    while (n) i.push(n), l = n.previousComponent, delete n.previousComponent, n = l;
    i.reverse();
    let r = i.length, s = 0, o = 0, f = 0;
    for (;s < r; s++) {
      let u = i[s];
      if (!u.removed) {
        if (!u.added && this.useLongestToken) {
          let h = e.slice(o, o + u.count);
          h = h.map(function(c, a) {
            let g = t[f + a];
            return g.length > c.length ? g : c;
          }), u.value = this.join(h);
        } else u.value = this.join(e.slice(o, o + u.count));
        if (o += u.count, !u.added) f += u.count;
      } else u.value = this.join(t.slice(f, f + u.count)), f += u.count;
    }
    return i;
  }
}

function H(n, e) {
  let t;
  for (t = 0; t < n.length && t < e.length; t++) if (n[t] != e[t]) return n.slice(0, t);
  return n.slice(0, t);
}

function b(n, e) {
  let t;
  if (!n || !e || n[n.length - 1] != e[e.length - 1]) return "";
  for (t = 0; t < n.length && t < e.length; t++) if (n[n.length - (t + 1)] != e[e.length - (t + 1)]) return n.slice(-t);
  return n.slice(-t);
}

function I(n, e, t) {
  if (n.slice(0, e.length) != e) throw Error(`string ${JSON.stringify(n)} doesn't start with prefix ${JSON.stringify(e)}; this is a bug`);
  return t + n.slice(e.length);
}

function T(n, e, t) {
  if (!e) return n + t;
  if (n.slice(-e.length) != e) throw Error(`string ${JSON.stringify(n)} doesn't end with suffix ${JSON.stringify(e)}; this is a bug`);
  return n.slice(0, -e.length) + t;
}

function W(n, e) {
  return I(n, e, "");
}

function y(n, e) {
  return T(n, e, "");
}

function A(n, e) {
  return e.slice(0, V(n, e));
}

function V(n, e) {
  let t = 0;
  if (n.length > e.length) t = n.length - e.length;
  let i = e.length;
  if (n.length < e.length) i = n.length;
  let l = Array(i), r = 0;
  l[0] = 0;
  for (let s = 1; s < i; s++) {
    if (e[s] == e[r]) l[s] = l[r]; else l[s] = r;
    while (r > 0 && e[s] != e[r]) r = l[r];
    if (e[s] == e[r]) r++;
  }
  r = 0;
  for (let s = t; s < n.length; s++) {
    while (r > 0 && n[s] != e[r]) r = l[r];
    if (n[s] == e[r]) r++;
  }
  return r;
}

function j(n, e) {
  let t = [];
  for (let i of Array.from(e.segment(n))) {
    let l = i.segment;
    if (t.length && /\s/.test(t[t.length - 1]) && /\s/.test(l)) t[t.length - 1] += l; else t.push(l);
  }
  return t;
}

function O(n, e) {
  if (e) return k(n, e)[1];
  let t;
  for (t = n.length - 1; t >= 0; t--) if (!n[t].match(/\s/)) break;
  return n.substring(t + 1);
}

function E(n, e) {
  if (e) return k(n, e)[0];
  let t = n.match(/^\s*/);
  return t ? t[0] : "";
}

function k(n, e) {
  if (!e) return [ E(n), O(n) ];
  if (e.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
  let t = j(n, e), i = t[0], l = t[t.length - 1], r = /\s/.test(i) ? i : "", s = /\s/.test(l) ? l : "";
  return [ r, s ];
}

var F = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Y = new RegExp(`[${F}]+|\\s+|[^${F}]`, "ug");

class R extends L {
  equals(n, e, t) {
    if (t.ignoreCase) n = n.toLowerCase(), e = e.toLowerCase();
    return n.trim() === e.trim();
  }
  tokenize(n, e = {}) {
    let t;
    if (e.intlSegmenter) {
      let r = e.intlSegmenter;
      if (r.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
      t = j(n, r);
    } else t = n.match(Y) || [];
    let i = [], l = null;
    return t.forEach(r => {
      if (/\s/.test(r)) if (l == null) i.push(r); else i.push(i.pop() + r); else if (l != null && /\s/.test(l)) if (i[i.length - 1] == l) i.push(i.pop() + r); else i.push(l + r); else i.push(r);
      l = r;
    }), i;
  }
  join(n) {
    return n.map((e, t) => {
      if (t == 0) return e; else return e.replace(/^\s+/, "");
    }).join("");
  }
  postProcess(n, e) {
    if (!n || e.oneChangePerToken) return n;
    let t = null, i = null, l = null;
    if (n.forEach(r => {
      if (r.added) i = r; else if (r.removed) l = r; else {
        if (i || l) N(t, l, i, r, e.intlSegmenter);
        t = r, i = null, l = null;
      }
    }), i || l) N(t, l, i, null, e.intlSegmenter);
    return n;
  }
}

var B = new R;

function N(n, e, t, i, l) {
  if (e && t) {
    let [r, s] = k(e.value, l), [o, f] = k(t.value, l);
    if (n) {
      let u = H(r, o);
      n.value = T(n.value, o, u), e.value = W(e.value, u), t.value = W(t.value, u);
    }
    if (i) {
      let u = b(s, f);
      i.value = I(i.value, f, u), e.value = y(e.value, u), t.value = y(t.value, u);
    }
  } else if (t) {
    if (n) {
      let r = E(t.value, l);
      t.value = t.value.substring(r.length);
    }
    if (i) {
      let r = E(i.value, l);
      i.value = i.value.substring(r.length);
    }
  } else if (n && i) {
    let r = E(i.value, l), [s, o] = k(e.value, l), f = H(r, s);
    e.value = W(e.value, f);
    let u = b(W(r, f), o);
    e.value = y(e.value, u), i.value = I(i.value, r, u), n.value = T(n.value, r, r.slice(0, r.length - u.length));
  } else if (i) {
    let r = E(i.value, l), s = O(e.value, l), o = A(s, r);
    e.value = y(e.value, o);
  } else if (n) {
    let r = O(n.value, l), s = E(e.value, l), o = A(r, s);
    e.value = W(e.value, o);
  }
}

class z extends L {
  tokenize(n) {
    let e = new RegExp(`(\\r?\\n)|[${F}]+|[^\\S\\n\\r]+|[^${F}]`, "ug");
    return n.match(e) || [];
  }
}

var M = new z;

function Yco(n, e, t) {
  return M.diff(n, e, t);
}

class _ extends L {
  constructor() {
    super(...arguments);
    this.tokenize = X;
  }
  equals(n, e, t) {
    if (t.ignoreWhitespace) {
      if (!t.newlineIsToken || !n.includes(`\n`)) n = n.trim();
      if (!t.newlineIsToken || !e.includes(`\n`)) e = e.trim();
    } else if (t.ignoreNewlineAtEof && !t.newlineIsToken) {
      if (n.endsWith(`\n`)) n = n.slice(0, -1);
      if (e.endsWith(`\n`)) e = e.slice(0, -1);
    }
    return super.equals(n, e, t);
  }
}

var U = new _;

function BYe(n, e, t) {
  return U.diff(n, e, t);
}

function X(n, e) {
  if (e.stripTrailingCr) n = n.replace(/\r\n/g, `\n`);
  let t = [], i = n.split(/(\n|\r\n)/);
  if (!i[i.length - 1]) i.pop();
  for (let l = 0; l < i.length; l++) {
    let r = i[l];
    if (l % 2 && !e.newlineIsToken) t[t.length - 1] += r; else t.push(r);
  }
  return t;
}

class J extends L {
  tokenize(n) {
    return n.slice();
  }
  join(n) {
    return n;
  }
  removeEmpty(n) {
    return n;
  }
}

var q = new J;

function Xco(n, e, t) {
  return q.diff(n, e, t);
}

function Jco(n) {
  let e = n.split(/\n/), t = [], i = 0;
  function l() {
    let o = {};
    t.push(o);
    while (i < e.length) {
      let f = e[i];
      if (/^(---|\+\+\+|@@)\s/.test(f)) break;
      let u = /^(?:Index:|diff(?: -r \w+)+)\s+/.exec(f);
      if (u) o.index = f.substring(u[0].length).trim();
      i++;
    }
    r(o), r(o), o.hunks = [];
    while (i < e.length) {
      let f = e[i];
      if (/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(f)) break; else if (/^@@/.test(f)) o.hunks.push(s()); else if (f) throw Error("Unknown line " + (i + 1) + " " + JSON.stringify(f)); else i++;
    }
  }
  function r(o) {
    let f = /^(---|\+\+\+)\s+/.exec(e[i]);
    if (f) {
      let u = f[1], h = e[i].substring(3).trim().split("\t", 2), c = (h[1] || "").trim(), a = h[0].replace(/\\\\/g, "\\");
      if (a.startsWith('"') && a.endsWith('"')) a = a.substr(1, a.length - 2);
      if (u === "---") o.oldFileName = a, o.oldHeader = c; else o.newFileName = a, o.newHeader = c;
      i++;
    }
  }
  function s() {
    var o;
    let f = i, u = e[i++], h = u.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), c = {
      oldStart: +h[1],
      oldLines: typeof h[2] > "u" ? 1 : +h[2],
      newStart: +h[3],
      newLines: typeof h[4] > "u" ? 1 : +h[4],
      lines: []
    };
    if (c.oldLines === 0) c.oldStart += 1;
    if (c.newLines === 0) c.newStart += 1;
    let a = 0, g = 0;
    for (;i < e.length && (g < c.oldLines || a < c.newLines || ((o = e[i]) === null || o === void 0 ? void 0 : o.startsWith("\\"))); i++) {
      let w = e[i].length == 0 && i != e.length - 1 ? " " : e[i][0];
      if (w === "+" || w === "-" || w === " " || w === "\\") {
        if (c.lines.push(e[i]), w === "+") a++; else if (w === "-") g++; else if (w === " ") a++, 
        g++;
      } else throw Error(`Hunk at line ${f + 1} contained invalid line ${e[i]}`);
    }
    if (!a && c.newLines === 1) c.newLines = 0;
    if (!g && c.oldLines === 1) c.oldLines = 0;
    if (a !== c.newLines) throw Error("Added line count did not match for hunk at line " + (f + 1));
    if (g !== c.oldLines) throw Error("Removed line count did not match for hunk at line " + (f + 1));
    return c;
  }
  while (i < e.length) l();
  return t;
}

function MV(n, e, t, i, l, r, s) {
  let o;
  if (!s) o = {}; else if (typeof s === "function") o = {
    callback: s
  }; else o = s;
  if (typeof o.context > "u") o.context = 4;
  let f = o.context;
  if (o.newlineIsToken) throw Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  if (!o.callback) return u(BYe(t, i, o)); else {
    let {callback: h} = o;
    BYe(t, i, Object.assign(Object.assign({}, o), {
      callback: c => {
        let a = u(c);
        h(a);
      }
    }));
  }
  function u(h) {
    if (!h) return;
    h.push({
      value: "",
      lines: []
    });
    function c(p) {
      return p.map(function(m) {
        return " " + m;
      });
    }
    let a = [], g = 0, w = 0, P = [], C = 1, d = 1;
    for (let p = 0; p < h.length; p++) {
      let m = h[p], x = m.lines || Z(m.value);
      if (m.lines = x, m.added || m.removed) {
        if (!g) {
          let v = h[p - 1];
          if (g = C, w = d, v) P = f > 0 ? c(v.lines.slice(-f)) : [], g -= P.length, w -= P.length;
        }
        for (let v of x) P.push((m.added ? "+" : "-") + v);
        if (m.added) d += x.length; else C += x.length;
      } else {
        if (g) if (x.length <= f * 2 && p < h.length - 2) for (let v of c(x)) P.push(v); else {
          let v = Math.min(x.length, f);
          for (let D of c(x.slice(0, v))) P.push(D);
          let S = {
            oldStart: g,
            oldLines: C - g + v,
            newStart: w,
            newLines: d - w + v,
            lines: P
          };
          a.push(S), g = 0, w = 0, P = [];
        }
        C += x.length, d += x.length;
      }
    }
    for (let p of a) for (let m = 0; m < p.lines.length; m++) if (p.lines[m].endsWith(`\n`)) p.lines[m] = p.lines[m].slice(0, -1); else p.lines.splice(m + 1, 0, "\\ No newline at end of file"), 
    m++;
    return {
      oldFileName: n,
      newFileName: e,
      oldHeader: l,
      newHeader: r,
      hunks: a
    };
  }
}

function Z(n) {
  let e = n.endsWith(`\n`), t = n.split(`\n`).map(i => i + `\n`);
  if (e) t.pop(); else t.push(t.pop().slice(0, -1));
  return t;
}

export { Yco, BYe, Xco, Jco, MV };
