// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { So } from "./chunk-wptm3jf5.js";

function a_o(n, {maxLines: i = 2e3} = {}) {
  let e = [];
  return dMt(n, {
    entry(c, l, s) {
      if (s !== void 0 && s !== "" && c !== null && x(c) && (l === "url" || l === "pushurl")) e.push(s);
    }
  }, {
    maxLines: i
  }), e;
}

function x({name: n, quoted: i}) {
  if (i) return n === "remote" || n.startsWith("remote.");
  let e = n.indexOf(".");
  return e !== -1 && n.slice(0, e) === "remote";
}

function dMt(n, i, {maxLines: e = 2e3, keepsBlanksAsWritten: c = !1} = {}) {
  let s = (n.codePointAt(0) === 65279 ? n.slice(1) : n).split(/\r\n|\n/).slice(0, e), t = null, u = () => {
    t = null, i.malformed?.();
  }, f = 0;
  while (f < s.length) {
    let r = s[f] ?? "";
    f++;
    let o = h(r, 0), p = !1;
    while (r[o] === "[") {
      let v = S(r, o);
      if (v === null) {
        u(), p = !0;
        break;
      }
      let {end: N, ...y} = v;
      t = y, i.header?.(t), o = h(r, N);
    }
    if (p) continue;
    let a = r[o];
    if (a === void 0 || a === "#" || a === ";") continue;
    if (!O(a)) {
      u();
      continue;
    }
    let d = o;
    while (o < r.length && R(r[o] ?? "")) o++;
    let b = r.slice(d, o).toLowerCase();
    while (o < r.length && (r[o] === " " || r[o] === "\t")) o++;
    if (o >= r.length) {
      i.entry?.(t, b, void 0);
      continue;
    }
    if (r[o] !== "=") {
      u();
      continue;
    }
    let g = M(r, o + 1, s, f, c);
    if (f = g.nextLineIndex, g.value === null) {
      u();
      continue;
    }
    i.entry?.(t, b, g.value);
  }
}

function S(n, i) {
  let e = i + 1, c = e;
  while (e < n.length) {
    let t = n[e];
    if (t === void 0 || !(R(t) || t === ".")) break;
    e++;
  }
  let l = n.slice(c, e);
  if (n[e] === "]") {
    if (l === "") return null;
    return {
      name: l.toLowerCase(),
      quoted: !1,
      end: e + 1
    };
  }
  if (n[e] !== " " && n[e] !== "\t" && n[e] !== "\r") return null;
  if (e = h(n, e), n[e] !== '"') return null;
  e++;
  let s = "";
  while (!0) {
    if (e >= n.length) return null;
    let t = n[e];
    if (t === "\\") {
      s += n[e + 1] ?? "", e += 2;
      continue;
    }
    if (e++, t === '"') break;
    s += t ?? "";
  }
  if (n[e] !== "]") return null;
  return {
    name: l.toLowerCase(),
    quoted: !0,
    subsection: s,
    end: e + 1
  };
}

function M(n, i, e, c, l) {
  let s = n, t = c, u = "", f = "", r = !1, o = i;
  while (!0) {
    if (o >= s.length) {
      if (r) return {
        value: null,
        nextLineIndex: t
      };
      break;
    }
    let a = s[o];
    if (!r && (a === " " || a === "\t" || a === "\r")) {
      if (u !== "") f += l ? a : " ";
      o++;
      continue;
    }
    if (!r && (a === ";" || a === "#")) break;
    if (u += f, f = "", a === "\\") {
      if (o + 1 >= s.length) {
        if (t >= e.length) return {
          value: null,
          nextLineIndex: t
        };
        s = e[t] ?? "", t++, o = 0;
        continue;
      }
      let d;
      switch (s[o + 1]) {
       case "\\":
        d = "\\";
        break;

       case '"':
        d = '"';
        break;

       case "n":
        d = `\n`;
        break;

       case "t":
        d = "\t";
        break;

       case "b":
        d = "\b";
        break;

       default:
        return {
          value: null,
          nextLineIndex: t
        };
      }
      u += d, o += 2;
      continue;
    }
    if (a === '"') {
      r = !r, o++;
      continue;
    }
    u += a, o++;
  }
  let p = u.indexOf("\0");
  return {
    value: p === -1 ? u : u.slice(0, p),
    nextLineIndex: t
  };
}

function h(n, i) {
  while (i < n.length && (n[i] === " " || n[i] === "\t" || n[i] === "\r")) i++;
  return i;
}

function O(n) {
  return n >= "a" && n <= "z" || n >= "A" && n <= "Z";
}

function R(n) {
  return O(n) || n >= "0" && n <= "9" || n === "-";
}

var _ = "anthropics", m = "anthropic", ln = `github.com/${_}/${m}`;

var fn = new RegExp(`${_}[^]*${m}`), cn = new RegExp(`^${m}(?:\\.git)*$`);

function oTs() {
  return;
}

function r1n(n) {
  return So(n.host) && n.owner.toLowerCase() === _ && n.name.toLowerCase() === m;
}

export { a_o, dMt, oTs, r1n };
