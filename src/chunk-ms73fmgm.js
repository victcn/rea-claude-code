// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { K } from "./chunk-3pqddg8f.js";

import { cn } from "./chunk-kawq2919.js";

import { Ii, Nt, BG } from "./chunk-5wbhf1bk.js";

import { ge } from "./chunk-07cck4g7.js";

import { n$e, $T, Zce, Um } from "./chunk-sqb9meyh.js";

import { dP } from "./chunk-2kzvcfy0.js";

import { pu, rPo, oPo } from "./chunk-q6wab2jw.js";

import { Yw } from "./chunk-52h8ta4x.js";

import { Kxr, vC } from "./chunk-f1zpf9me.js";

import { KOr } from "./chunk-0481pkch.js";

import { rr, KXe } from "./chunk-wptm3jf5.js";

import { ie, xXe } from "./chunk-yxennhe9.js";

import { hDn, Rao, Kgr, Pao } from "./chunk-xb4716r9.js";

import { Y4 } from "./chunk-84yp45y8.js";

import { RMn } from "./chunk-bkx9v5fh.js";

import { qw, v2r } from "./chunk-xz8q4brh.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { uI } from "./chunk-02g14ha5.js";

import { oc } from "./chunk-zx69jgxc.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var Ve = new Set([ "iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty" ]);

function Pmn() {
  if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let e = a.TERM;
  if (a.TERM_PROGRAM === "Apple_Terminal" || e === "linux") return !1;
  return Ve.has(a.TERM_PROGRAM ?? "") || dP.isGhostty() || dP.isMintty() || dP.isJetBrainsIdeTerminal() || a.LC_TERMINAL === "iTerm2" || !!e?.includes("kitty") || !!e?.includes("alacritty") || !!e?.startsWith("foot") || !!a.KITTY_WINDOW_ID || !!a.ALACRITTY_LOG || !!a.KONSOLE_VERSION || !!a.WT_SESSION || !!a.ZED_TERM || parseInt(a.VTE_VERSION ?? "", 10) >= 4400;
}

var A = 1e3, de = 16e3, me = 100, Ye = 4e3, Y = 100, Te = A * me, D = $T.rules.block.gfm, be = /\r\n?/g, Je = `x\n`, et = /^\n*/, tt = /\n*$/, J = new RegExp(`^(?:[^\\n]+\\n){1,${Y}}? {0,3}(?:=+|-+) *(?:\\n|$)`), ke = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;

function nt() {
  let e = 0;
  return {
    isHeld: () => e > 0,
    during: t => {
      e += 1;
      try {
        return t();
      } finally {
        e -= 1;
      }
    }
  };
}

var ee = nt();

function uWo(e, t) {
  let n = new $T(e.defaults);
  return t.includes("<") && n.lex(t), n.state.inLink || n.state.inRawBlock;
}

function $8n(e) {
  let t = e.replace(be, `\n`);
  return re(N([], t, A)).length === t.length && !U(t.slice(D.fences.exec(t)?.[0].length));
}

function k7e(e, t) {
  let n = !$8n(t);
  return {
    tokens: n ? ee.during(() => st(e, t)) : e.lexer(t),
    isWindowed: n
  };
}

function rt(e) {
  let t = "tokens" in e;
  return oe(e) ? e.items : X(e) ? [ ...e.header, ...e.rows.flat() ].flatMap(n => n.tokens) : t ? e.tokens ?? [] : [];
}

function st(e, t) {
  let n = [], r = N([], t.replace(be, `\n`), A);
  while (r.rest !== "") {
    r = {
      declining: r.declining,
      ...ot(e, r)
    };
    for (let s of r.taken) {
      let o = n.at(-1);
      o?.type === "space" && s.type === "space" ? o.raw += s.raw : n.push(s);
    }
  }
  return n;
}

function ot(e, t) {
  let n = re(t), {header: r = "", fromRow: s = t.rest} = t.declining ?? {}, o = n.length + s.length <= t.rest.length && n.startsWith(r);
  return it(e, n) ? q(t.rest) : o ? te(e, t.rest) : at(e, t, n);
}

function it(e, t) {
  let r = U(t) ? new $T(e.defaults).blockTokens(t) : [], s = !1;
  while (!s && r.length > 0) s = r.some(o => lt(o).some(U)), r = r.flatMap(rt);
  return s;
}

function lt(e) {
  let t = (se(e) || e.type === "heading" || e.type === "text") && "text" in e && typeof e.text === "string";
  return X(e) ? [ e.raw ] : t ? [ e.text ] : [];
}

function at(e, t, n) {
  let r = e.lexer(n), o = n.length === t.rest.length ? r.length : Tt(r, n), i = xe(r, o, n);
  return i > 0 ? N(r.slice(0, o), t.rest.slice(i), A) : ct(e, t, r);
}

function ct(e, t, n) {
  let [r] = n, s = n.length === 1, o = s && se(r) && !Le(t.rest), i = s && X(r), l = we(r?.raw ?? ""), c = t.declining?.fromRow ?? t.rest, p = i && l.length + c.length <= t.rest.length && !ne(e, l + c.slice(0, M(c, 0, 1)));
  return o ? ye(e, t.rest) : p ? te(e, t.rest) : i ? dt(e, r, t.rest) : ut(t, n);
}

function ut(e, t) {
  let [n] = t, r = t.findLastIndex(Re) <= 0, s = r && t.some(Ie), o = e.lines < de && !(s && se(n)), i = r && oe(n), l = r && (n?.type === "code" || s && n?.type !== "html");
  return o ? N([], e.rest, de) : i ? pt(e, n) : l ? N(t, kt(e), e.lines) : q(e.rest);
}

function pt(e, t) {
  let n = t.items.slice(0, -1), r = W(n);
  return r !== "" && e.rest.startsWith(r) ? N([ xt(t, r, n) ], e.rest.slice(r.length), e.lines) : q(e.rest);
}

function ye(e, t) {
  let n = ft(t), r = M(n.text, 0, Ye) === n.text.length && !U(n.text);
  return N([ {
    ...n,
    tokens: r ? new $T(e.defaults).inlineTokens(n.text) : [ Se(n.text) ]
  } ], t.slice(n.raw.length), A);
}

var te = (e, t) => Le(t) ? q(t) : ye(e, t);

function Le(e) {
  return J.test(e) && D.lheading.test(e);
}

function ft(e) {
  let t = yt(), n = he(e, "");
  while (n.nextLines !== "") t.text += t.raw === "" ? n.nextLines : `\n${n.nextLines}`, 
  t.raw += n.nextLines + n.lineBreak, n = he(n.isOpen ? e.slice(t.raw.length) : "", Je);
  return t;
}

function he(e, t) {
  let n = M(e, 0, A), r = e[n - 1] === `\n` ? n - 1 : n, s = (D.paragraph.exec(t + e.slice(0, M(e, n, 1)))?.[0] ?? t).slice(t.length), o = s.slice(0, r), i = s.length > r, l = i || D.newline.exec(e.slice(o.length))?.[0] === `\n`;
  return {
    nextLines: o,
    lineBreak: l ? `\n` : "",
    isOpen: i
  };
}

function dt(e, t, n) {
  let r = we(t.raw), s = ht(r, n), o = Ee(n.slice(r.length, s), A), i = [], l = !1;
  while (!l && i.length < o.length) {
    let p = ne(e, r + (o[i.length] ?? ""));
    l = p === void 0, p && i.push(p);
  }
  let c = n.slice(0, s) + (et.exec(n.slice(s))?.[0] ?? "");
  return l ? gt(e, r, o.slice(0, i.length + 1), n) : N([ Et(t, c, i.flatMap(p => p.rows)) ], n.slice(c.length), A);
}

function gt(e, t, n, r) {
  let s = te(e, r), o = t.length + n.join("").length, i = r.length - s.rest.length < o, l = i ? Ee(n.at(-1) ?? "", 1) : [], c = Math.floor(Te / t.length), p = l.slice(0, c).findIndex(R => !ne(e, t + R)), d = p >= 0 ? p : c < l.length ? c : 0, b = r.slice(o - l.slice(d).join("").length);
  return {
    ...s,
    declining: i ? {
      header: t,
      fromRow: b
    } : void 0
  };
}

function ht(e, t) {
  let n = e.length, r = n < t.length;
  while (r) {
    let s = t.slice(n, M(t, n, A)), o = mt(e, s);
    n += o, r = o === s.length && n < t.length;
  }
  return n;
}

function mt(e, t) {
  let n = (D.table.exec(e + t)?.[0] ?? e).slice(e.length), r = n.replace(tt, "");
  return r !== "" && n.length > r.length ? r.length + 1 : r.length;
}

function ne(e, t) {
  let [n] = U(t) ? [] : e.lexer(t);
  return X(n) && n.raw.length === t.length ? n : void 0;
}

function Ee(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r = M(e, r, t)) n.push(e.slice(r, M(e, r, t)));
  return n;
}

function Tt(e, t) {
  let n = bt(e), r = e.findLastIndex((i, l) => l < n && Ie(i)) + 1, s = n, o = 0;
  for (let i = e.length - 1; i >= r && o <= Y; i--) o += Nt(e[i]?.raw ?? "", `\n`), 
  s = o <= Y ? Math.min(s, i) : s;
  return [ r, s ].find(i => xe(e, i, t) > 0) ?? 0;
}

function bt(e) {
  let t = e.findLastIndex(r => r.raw.trim() !== "");
  return oe(e[t]) ? t : Math.max(e.findLastIndex(Re), 0);
}

var pWo = (e, t) => W(e) === t;

function fWo(e, t, n) {
  let r = W(e.slice(0, t)), s = W(e.slice(t)), o = n.endsWith(s);
  return n.startsWith(r) ? r.length : o ? n.length - s.length : 0;
}

function xe(e, t, n) {
  let r = W(e.slice(0, t)), s = W(e.slice(t)), o = r.length + s.length === n.length || n.startsWith(r), i = n.endsWith(s);
  return o ? r.length : i ? n.length - s.length : 0;
}

function M(e, t, n) {
  let r = t;
  for (let s = 0; s < n && r < e.length && r - t < n * me; s++) {
    let o = e.indexOf(`\n`, r);
    r = o === -1 ? e.length : o + 1;
  }
  return r;
}

function U(e) {
  let t = 0, n = !1;
  while (!n && t < e.length) {
    let r = e.indexOf(`\n`, t), s = r === -1 ? e.length : r;
    n = s - t > Te, t = s + 1;
  }
  return n;
}

function re({rest: e, lines: t}) {
  return e.slice(0, M(e, D.fences.exec(e)?.[0].length ?? 0, t));
}

function kt(e) {
  return e.rest.slice(re(e).length);
}

function we(e) {
  return e.slice(0, e.indexOf(`\n`, e.indexOf(`\n`) + 1) + 1);
}

function N(e, t, n) {
  return {
    taken: e,
    rest: t,
    lines: n
  };
}

function q(e) {
  return N([ Lt(e) ], "", A);
}

function yt() {
  return {
    type: "paragraph",
    raw: "",
    text: "",
    tokens: []
  };
}

function Lt(e) {
  return {
    type: "paragraph",
    raw: e,
    text: e,
    tokens: [ Se(e) ]
  };
}

function Se(e) {
  return {
    type: "text",
    raw: e,
    text: e,
    escaped: !1
  };
}

function Et(e, t, n) {
  return {
    ...e,
    raw: t,
    rows: n
  };
}

function xt(e, t, n) {
  return {
    ...e,
    raw: t,
    items: n
  };
}

function Re(e) {
  return e.type !== "space";
}

function Ie(e) {
  return e.type === "space" || e.raw.endsWith(`\n\n`);
}

function se(e) {
  return e?.type === "paragraph";
}

function oe(e) {
  return e?.type === "list";
}

function X(e) {
  return e?.type === "table";
}

function W(e) {
  return e.map(t => t.raw).join("");
}

var wt = /^[ \t>]+/gm, St = /[ \t]+/g, Rt = /\n{3,}/g;

function It() {
  let e = new WeakMap, t = n => (e.get(n) ?? 0) >= 100;
  return {
    isAtMaxNesting: t,
    lexLevel: (n, r) => {
      if (t(n)) return;
      let o = e.get(n) ?? 0;
      e.set(n, o + 1);
      try {
        return r();
      } finally {
        e.set(n, o);
      }
    }
  };
}

var j = It(), _e = e => e.replace(wt, t => t.replace(St, " ").trimStart()).replace(Rt, `\n\n`).trimEnd();

var _t = 6, At = 16, H = `\n`, le = e => ({
  rows: e,
  isDone: !1
}), Oe = e => e === "" || e.endsWith(H) ? e : e + H, Ae = e => e === "" ? [] : [ le(e) ], Ce = e => cn(e).trim() !== "";

function Ot(e) {
  let t = ge.dim(oPo);
  return le(e.split(H).map(n => Ce(n) ? `${t} ${ge.italic(n)}` : n).join(H));
}

function Ne(e) {
  let t = `${oPo} `.repeat(Math.max(0, e)).trimEnd();
  return t === "" ? "" : `${ge.dim(t)} `;
}

function Ct(e, t, n) {
  let r = Math.min(t + 1, At) - n.around, s = n.around === 0, o = Ne(s ? 1 : r), i = Ne(s ? r - 1 : 0), l = s ? ge.italic : c => c;
  return {
    rows: Oe(e).split(H).map(c => Ce(c) ? o + l(i + c) : c).join(H),
    isDone: !0
  };
}

function Mt(e) {
  let t = [], n = "";
  for (let r of e) if (r.isDone) t.push(...Ae(Oe(n)), r), n = ""; else n += r.rows;
  return [ ...t, ...Ae(n) ];
}

function Me(e, t, n) {
  let s = t < _t ? Ot : o => Ct(o, t, n);
  return Mt(e.flatMap(o => o.type === "blockquote" ? Me(o.tokens ?? [], t + 1, n) : [ le(n.draw(o, t + 1)) ])).map(o => o.isDone ? o : s(o.rows));
}

var Pe = (e, t, n) => Me(e, t, {
  around: t,
  draw: n
}).map(r => r.rows).join("");

var ae = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/, Pt = new RegExp(`(?!${xXe(";:")})${ae.source}`, "g"), F8n = e => e.replace(/\r\n?/g, `\n`).replace(Pt, "");

function U8n(e) {
  let n = e.some(o => ae.test(o.raw)) ? [ e ] : [];
  for (let o of n) for (let [i, l] of Object.entries(o)) {
    let c = typeof l === "string" && i !== "href";
    if (typeof l === "object" && l !== null) n.push(l); else if (c) Reflect.set(o, i, F8n(l));
  }
  let r = n.some(o => Object.entries(o).some(([i, l]) => i !== "href" && typeof l === "string" && l.includes("\x1b"))), s = n.filter(o => "type" in o && (o.type === "link" || o.type === "image"));
  for (let o of r ? s : []) Object.assign(o, {
    afterStyle: !0
  });
  return e;
}

var m = `\n`, je = new RegExp(`^[${hDn}]+`, "u"), Dt = new RegExp(`(?:^|[^${hDn}])([${hDn}]*)$`, "u");

function ce(e) {
  let t = Dt.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}

var Fe = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g, Wt = /\x9d|\x1b(?!\[)/, $t = /\x9d/g, Ht = /\x1b(?!\[)/g, B = e => Array.from(e).filter(t => {
  let n = t.codePointAt(0) ?? 0;
  return n !== 10697 && !vC(n);
}).join(""), Ge = "\x1b[28m\x1b[39m\x1b[49m", z = e => "afterStyle" in e && e.afterStyle === !0 ? Ge : "", De = (e, t) => `${t}${B(e)}`, pe = (e, t, n = "") => `${t} (${B(e)}${n})`, fe = e => pe(e, Ge);

function l1t(e) {
  if (!e.includes("\x1b]8;")) return e;
  let t = [], n = null;
  for (let l of e.matchAll(Fe)) {
    let c = l.index + l[0].length;
    if (n !== null) t.push({
      href: n.href,
      openEnd: n.openEnd,
      closeStart: l.index,
      closeEnd: c
    }), n = null;
    let p = l[1] ?? "";
    if (p !== "") n = {
      href: p,
      openEnd: c
    };
  }
  if (n !== null) t.push({
    href: n.href,
    openEnd: n.openEnd,
    closeStart: e.length,
    closeEnd: e.length
  });
  let r = "", s = 0, o = 0, i = !1;
  for (let l of t) {
    let c = e.lastIndexOf("\x1b]8;", l.openEnd - 1), p = ce(cn(e.slice(0, c))), d = o;
    o = l.closeStart;
    let b = Kxr(l.href), R = i;
    if (i = b, !b) {
      let f = cn(e.slice(d, c)), h = f.includes(pu), T = R && ce(f) === "";
      if (!h && !p.endsWith(pu) && !T) continue;
    } else if (!p.endsWith(pu)) continue;
    if (b) {
      let f = e.slice(l.openEnd, l.closeStart), h = cn(f).startsWith(`${pu} `) ? f.indexOf(`${pu} `) : -1;
      if (h !== -1) r += e.slice(s, l.openEnd), r += f.slice(0, h), r += f.slice(h + pu.length + 1), 
      s = l.closeStart; else {
        let T = e.slice(s, c), k = `${pu} `;
        if (T.endsWith(k)) {
          let g = T.slice(0, -k.length);
          if (ce(cn(r + g)).endsWith(pu)) r += g, s = c;
        }
      }
      continue;
    }
    let y = fe(l.href), u = l.closeEnd;
    if (e.startsWith(y, u)) continue;
    r += e.slice(s, u) + y, s = u;
  }
  return r + e.slice(s);
}

class Qe {
  #e=!1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    this.#e = !1, Um.setOptions(Um.getDefaults());
  }
}

var We = Ue(new Qe, e => e.reset());

class Ke {
  #e=new oc({
    max: 200,
    ttl: 3e4
  });
  get(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
}

var cr = new K(() => new Ke), $e = n$e.prototype.table, Bt = n$e.prototype.blockquote, vt = n$e.prototype.list, Ut = n$e.prototype.emStrong, qe = {
  tokenizer: {
    del(e) {
      let t = /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(e), n = t?.[1];
      if (!t || n === void 0) return;
      return {
        type: "del",
        raw: t[0],
        text: n,
        tokens: this.lexer.inlineTokens(n)
      };
    },
    blockquote(e) {
      return this.rules.other.blockquoteStart.test(e) ? j.lexLevel(this.lexer, () => Bt.call(this, e)) : void 0;
    },
    list(e) {
      return this.rules.block.list.test(e) ? j.lexLevel(this.lexer, () => vt.call(this, e)) : void 0;
    },
    emStrong(e, t, n) {
      return this.rules.inline.emStrongLDelim.test(e) ? j.lexLevel(this.lexer, () => Ut.call(this, e, t, n)) : void 0;
    },
    paragraph(e) {
      let t = He(this, e);
      return t ? {
        type: "paragraph",
        ...t
      } : !1;
    },
    text(e) {
      let t = He(this, e);
      return t ? {
        type: "text",
        ...t
      } : !1;
    },
    def() {
      return;
    },
    lheading(e) {
      return (ee.isHeld() ? J.test(e) : ke.test(e)) ? !1 : void 0;
    },
    table(e) {
      let t = this.rules.block.table.exec(e);
      if (!t) return;
      let n = t[0], r = n.split(`\n`).map(zt), s = r.join(`\n`), o = s === n ? $e.call(this, e) : $e.call(this, s + e.slice(n.length));
      if (o) {
        if (Zt(r, o.header.length)) return;
        if (s !== n) o.raw = n;
      }
      return o;
    }
  }
};

function He(e, t) {
  if (!j.isAtMaxNesting(e.lexer) || !(e.rules.block.list.test(t) || e.rules.other.blockquoteStart.test(t))) return;
  let n = _e(t);
  return {
    raw: t,
    text: n,
    tokens: e.lexer.inline(n)
  };
}

function l_t() {
  if (We.configured) return;
  We.set(), Um.use(qe);
}

var mWo = new Zce(qe, {
  tokenizer: {
    emStrong(e) {
      return e.startsWith("_") ? void 0 : !1;
    },
    table() {
      return;
    },
    blockquote() {
      return;
    },
    hr() {
      return;
    },
    lheading() {
      return;
    },
    link() {
      return;
    },
    autolink() {
      return;
    },
    url() {
      return;
    },
    escape() {
      return;
    },
    br() {
      return;
    }
  }
});

function d1t(e, t, n = null) {
  l_t();
  let {tokens: r, isWindowed: s} = k7e(Um, Y4(e)), o = !s && Yw();
  return U8n(r).map(i => wD(i, t, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: n,
    linkCap: o,
    windowed: s
  })).join("").trim();
}

var jt = /\s/, Ft = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g, fUr = 32;

function Imn(e) {
  if (!e.endsWith(`\n`)) return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (n === `\n`) return !0;
    if (!jt.test(n)) return !1;
  }
  return !1;
}

function wD(e, t, n) {
  let r = Gt(e, t, n);
  return n.windowed && Wt.test(r) ? r.replace(Fe, "").replace($t, "").replace(Ht, "") : r;
}

function Gt(e, t, n) {
  let {listDepth: r = 0, orderedListNumber: s = null, parent: o = null, highlight: i = null, glueProse: l = !1, screenReader: c = !1, listIndent: p = "", promptMode: d = !1, windowed: b, quotesAround: R = 0} = n, y = !b && (n.linkCap ?? Yw());
  switch (e.type) {
   case "blockquote":
    return Pe(e.tokens ?? [], R, (u, f) => wD(u, t, {
      listDepth: 0,
      orderedListNumber: null,
      parent: null,
      highlight: i,
      glueProse: !1,
      linkCap: y,
      windowed: b,
      screenReader: c,
      promptMode: d,
      quotesAround: f
    }));

   case "code":
    {
      let u = e.lang ?? "";
      if (!u && e.codeBlockStyle !== "indented") return e.text.replace(/\S(?:.*\S)?/g, Gn("permission", t)) + m;
      let f = u.match(/^[\w.+#-]+/)?.[0] ?? "", h = i && u && i.supportsLanguage(u) ? u : i && f && i.supportsLanguage(f) ? f : "plaintext", T = u && !i?.supportsLanguage(u) ? ge.dim(u) + m : "";
      if (!i) return T + e.text + m;
      return T + i.highlight(e.text, {
        language: h
      }) + m;
    }

   case "codespan":
    return Gn("permission", t)(e.text);

   case "em":
    return ge.italic((e.tokens ?? []).map(u => wD(u, t, {
      listDepth: 0,
      orderedListNumber: null,
      parent: o,
      highlight: i,
      glueProse: l,
      linkCap: y,
      windowed: b,
      promptMode: d
    })).join(""));

   case "strong":
    return ge.bold((e.tokens ?? []).map(u => wD(u, t, {
      listDepth: 0,
      orderedListNumber: null,
      parent: o,
      highlight: i,
      glueProse: l,
      linkCap: y,
      windowed: b,
      promptMode: d
    })).join(""));

   case "del":
    {
      let u = (e.tokens ?? []).map(f => wD(f, t, {
        listDepth: 0,
        orderedListNumber: null,
        parent: o,
        highlight: i,
        glueProse: l,
        linkCap: y,
        windowed: b,
        promptMode: d
      })).join("");
      return Pmn() && ge.level > 0 ? ge.strikethrough(u) : `~~${u}~~`;
    }

   case "heading":
    {
      let u = (e.tokens ?? []).map(h => wD(h, t, {
        listDepth: 0,
        orderedListNumber: null,
        parent: null,
        highlight: i,
        glueProse: !1,
        linkCap: y,
        windowed: b,
        promptMode: d
      })).join("");
      return (e.depth === 1 ? ge.bold.italic.underline : ge.bold)(l1t(u)) + m + m;
    }

   case "hr":
    return "---" + m;

   case "image":
    {
      if (!e.text && !e.title) return De(e.href, z(e));
      let u = e.title ? ` "${e.title}"` : "", f = pe(e.href, z(e), u);
      return e.text ? `${e.text}${f}` : f.replace(" (", "(");
    }

   case "link":
    {
      let u = e.title ? ` ("${e.title}")` : "";
      if (/^mailto:/i.test(e.href)) {
        let _ = e.href.replace(/^mailto:/i, ""), G = z(e);
        return (e.text && e.text !== B(_) ? `${e.text}${pe(_, G)}` : De(_, G)) + u;
      }
      let f = y ? Xt(e.href) : null, h = "defanged" in e && e.defanged === !0, T = f !== null && !h, k = z(e), g = T ? f : B(f ?? e.href), L = (e.tokens ?? []).map(_ => wD(_, t, {
        listDepth: 0,
        orderedListNumber: null,
        parent: e,
        highlight: i,
        glueProse: !1,
        linkCap: y,
        windowed: b,
        promptMode: d
      })).join(""), E = cn(L), w = Kxr(e.href), S = Boolean(E && E !== e.href), I = _ => _.replace(je, "").startsWith(pu), P = I(E) || I(e.text ?? ""), x = E.includes(pu) || (e.text ?? "").includes(pu);
      if (w && S) {
        let _ = Array.from(E).filter(Ze => {
          let Q = Ze.codePointAt(0) ?? 0;
          if (Q === 8205 || Q >= 65024 && Q <= 65039) return !0;
          return !vC(Q);
        }).join(""), G = P ? _ : rPo(_);
        return qw(g, G, {
          themeName: t,
          supportsHyperlinks: T,
          shownUrlStart: k
        }) + (T && e.title ? fe(g) : "") + u;
      }
      let F = !S || v2r(g, E), O = T && F ? k : "", Z = O === "" ? L : B(E), v = S ? Z : T ? B(e.href) : g, C = qw(g, v, {
        themeName: t,
        supportsHyperlinks: T,
        shownUrlStart: k
      }), V = !w && x || Boolean(e.title);
      if (T && S && V) return O + C + fe(g) + u;
      return O + (w ? rPo(C) : C) + u;
    }

   case "list":
    return e.items.map((u, f) => wD(u, t, {
      listDepth: r,
      orderedListNumber: e.ordered ? e.start + f : null,
      parent: e,
      highlight: i,
      glueProse: !1,
      linkCap: y,
      windowed: b,
      screenReader: c,
      listIndent: p,
      promptMode: d,
      quotesAround: R
    })).join("");

   case "list_item":
    {
      let f = (d && s !== null ? /^ *(\d+[.)])/.exec(e.raw)?.[1] : void 0) ?? gUr(r, s !== null && o?.type === "list" ? {
        number: s,
        ...mUr(o)
      } : null), h = p + Ii(" ", ie(f) + 1), T = Ii(" ", Math.min(h.length, fUr)), k = e.tokens ? B8n(e) : e, g = k.tokens ?? [], L = g.findIndex(x => x.type !== "space"), E = L === -1 ? [] : g.slice(L), w = E[0], S = w !== void 0 && (w.type === "code" || w.type === "blockquote" || w.type === "hr" || w.type === "table" || w.type === "list"), I = !S, P = E.map(x => {
        let F = x.type === "blockquote" ? ze(x) : void 0, O = wD(F ?? x, t, {
          listDepth: r + 1,
          orderedListNumber: s,
          parent: k,
          highlight: i,
          glueProse: !1,
          linkCap: y,
          windowed: b,
          screenReader: c,
          listIndent: T,
          promptMode: d,
          quotesAround: R
        });
        if (x.type === "code" && O === m) return "";
        if (x.type === "code" || x.type === "blockquote" || x.type === "hr" || x.type === "table" || x.type === "list" || x.type === "space") return x.type === "blockquote" && F === void 0 || x.type === "hr" || x.type === "table" ? O.replace(/^\n+/, "") : O;
        let Z = I ? `${p}${f} ` : h;
        I = !1;
        let v = O.split(m).map((C, V) => V === 0 ? Z + C : C === "" ? C : h + C).join(m);
        return x.type === "html" && !v.endsWith(m) ? v + m : v;
      }).join("");
      return I || S ? `${p}${f}${m}${P}` : P;
    }

   case "paragraph":
    return l1t((e.tokens ?? []).map(u => wD(u, t, {
      listDepth: 0,
      orderedListNumber: null,
      parent: null,
      highlight: i,
      glueProse: !1,
      linkCap: y,
      windowed: b,
      promptMode: d
    })).join("")) + m;

   case "space":
    return m;

   case "br":
    return m;

   case "text":
    {
      if (o?.type === "link") return e.text;
      let u = !d && e.escaped === !1 ? e.text.replace(Ft, " ") : e.text;
      if (o?.type === "list_item") {
        let h = e.tokens ? l1t(e.tokens.map(g => wD(g, t, {
          listDepth: r,
          orderedListNumber: s,
          parent: e,
          highlight: i,
          glueProse: !0,
          linkCap: y,
          windowed: b,
          promptMode: d
        })).join("")) : ve(Be(u, t, y, o, d)), T = o.tokens?.[0] === e;
        return `${o.task && T ? `[${o.checked ? "x" : " "}] ` : ""}${h}${m}`;
      }
      let f = Be(u, t, y, o, d);
      return l ? ve(f) : f;
    }

   case "table":
    {
      let f = function(g) {
        return l1t(g?.map(L => wD(L, t, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: i,
          glueProse: !1,
          linkCap: y,
          windowed: b,
          promptMode: d
        })).join("") ?? "");
      }, h = function(g) {
        return cn(f(g));
      }, u = e;
      if (c) return hUr(u.header.map(g => h(g.tokens)), u.rows.map(g => g.map(L => h(L.tokens)))) + m + m;
      let T = u.header.map((g, L) => {
        let E = ie(h(g.tokens));
        for (let w of u.rows) {
          let S = ie(h(w[L]?.tokens));
          E = Math.max(E, S);
        }
        return Math.max(E, 3);
      }), k = "| ";
      return u.header.forEach((g, L) => {
        let E = f(g.tokens), w = h(g.tokens), S = T[L], I = u.align?.[L];
        k += j8n(E, ie(w), S, I) + " | ";
      }), k = k.trimEnd() + m, k += "|", T.forEach(g => {
        let L = "-".repeat(g + 2);
        k += L + "|";
      }), k += m, u.rows.forEach(g => {
        k += "| ", g.forEach((L, E) => {
          let w = f(L.tokens), S = h(L.tokens), I = T[E], P = u.align?.[E];
          k += j8n(w, ie(S), I, P) + " | ";
        }), k = k.trimEnd() + m;
      }), k + m;
    }

   case "escape":
    return e.text;

   case "html":
    return e.text;

   case "def":
    return "";
  }
  return e.raw;
}

var Qt = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g, Kt = new Set([ "gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com" ]), Xe = /^[a-z][a-z0-9+.-]*:/i;

function qt(e, t) {
  let n = Xe.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}

function Omn(e, t) {
  for (let n of e) {
    if (n.type === "link" && qt(n.href, t)) n.defanged = !0;
    if (n.type === "table") {
      let r = n;
      for (let s of [ ...r.header, ...r.rows.flat() ]) Omn(s.tokens, t);
    } else if (n.type === "list") for (let r of n.items) Omn(r.tokens, t); else if ("tokens" in n && Array.isArray(n.tokens)) Omn(n.tokens, t);
  }
}

function Xt(e) {
  let t = RMn(e);
  if (t === null || BG.test(t) || je.test(t) || t !== t.trimEnd()) return null;
  if (Xe.test(t)) return t;
  let n = Pao(t), r = n.some(s => /^file:/i.test(Rao(s)));
  return Kgr(t, n) || r ? null : t;
}

function zt(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [], n = [];
  for (let c = 0; c < e.length; ) {
    if (e[c] !== "`") {
      c++;
      continue;
    }
    let p = 0;
    while (e[c + p] === "`") p++;
    t.push(c), n.push(p), c += p;
  }
  let r = Array(t.length).fill(-1), s = new Map;
  for (let c = t.length - 1; c >= 0; c--) {
    let p = s.get(n[c]);
    if (p !== void 0) r[c] = p;
    s.set(n[c], c);
  }
  let o = "", i = 0, l = 0;
  while (i < e.length) {
    if (e[i] !== "`") {
      o += e[i++];
      continue;
    }
    let c = n[l], p = e.slice(i, i + c), d = r[l];
    if (d === -1) {
      o += p, i += c, l++;
      continue;
    }
    let b = t[d];
    o += p;
    let R = 0;
    for (let y = i + c; y < b; y++) {
      let u = e[y];
      if (u === "\\") {
        R++, o += u;
        continue;
      }
      if (u === "|") o += R % 2 === 0 ? "\\|" : "|"; else o += u;
      R = 0;
    }
    o += p, i = b + c, l = d + 1;
  }
  return o;
}

function Zt(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = Vt(e[n]);
    for (let s = t; s < r.length; s++) if (r[s].trim()) return !0;
  }
  return !1;
}

function Vt(e) {
  let n = e.replace(/\|/g, (r, s, o) => {
    let i = !1, l = s;
    while (--l >= 0 && o[l] === "\\") i = !i;
    return i ? "|" : " |";
  }).split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}

function Be(e, t, n, r, s) {
  if (s) return e;
  return Yt(Jt(e, t, n), t, n, r);
}

function Yt(e, t, n = Yw(), r) {
  return e;
}

function Jt(e, t, n = Yw()) {
  if (!n) return e;
  if (!e.includes("#")) return e;
  let r = KOr(), s = r !== null && uI(r) === "gitlab";
  if (!s && r !== null && Kt.has(KXe(r))) return e;
  let o = r ?? rr, i = s ? "/-/issues/" : "/issues/";
  return e.replace(Qt, (l, c, p, d) => c + qw(`https://${o}/${p}${i}${d}`, `${p}#${d}`, {
    themeName: t,
    supportsHyperlinks: n
  }));
}

function en(e) {
  let t = "";
  while (e > 0) e--, t = String.fromCharCode(97 + e % 26) + t, e = Math.floor(e / 26);
  return t;
}

var tn = [ [ 1e3, "m" ], [ 900, "cm" ], [ 500, "d" ], [ 400, "cd" ], [ 100, "c" ], [ 90, "xc" ], [ 50, "l" ], [ 40, "xl" ], [ 10, "x" ], [ 9, "ix" ], [ 5, "v" ], [ 4, "iv" ], [ 1, "i" ] ];

function nn(e) {
  let t = "";
  for (let [n, r] of tn) while (e >= n) t += r, e -= n;
  return t;
}

function ve(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xa0$1");
}

function mUr(e) {
  let t = e.start === "" ? 1 : e.start;
  return {
    first: t,
    last: t + e.items.length - 1
  };
}

function B8n(e) {
  let t = e.tokens.map(n => {
    if (n.type !== "list" || !n.ordered) return n;
    let r = [];
    for (let o of n.items) {
      let i = /^ *(\d{1,9}[.)])/.exec(o.raw)?.[1];
      if (o.tokens.length > 0 || i === void 0) return n;
      r.push(i);
    }
    let s = r.join(`\n`);
    return {
      type: "text",
      raw: s,
      text: s
    };
  });
  return t.every((n, r) => n === e.tokens[r]) ? e : {
    ...e,
    tokens: t
  };
}

function ze(e) {
  let t = e.tokens.findIndex(s => s.type !== "space" && !(s.type === "code" && s.text === "" && !s.lang)), n = e.tokens[t], r = n?.type === "blockquote" ? ze(n) : n?.type === "code" && n.text !== "" ? n : void 0;
  return r && {
    ...e,
    tokens: [ r, ...e.tokens.slice(t + 1) ]
  };
}

function gUr(e, t) {
  return t === null ? "-" : `${rn(e + 1, t)}.`;
}

function rn(e, {number: t, first: n, last: r}) {
  switch (e) {
   case 2:
    return n >= 1 ? en(t) : t.toString();

   case 3:
    return n >= 1 && r <= 3999 ? nn(t) : t.toString();

   default:
    return t.toString();
  }
}

function j8n(e, t, n, r) {
  let s = Math.max(0, n - t);
  if (r === "center") {
    let o = Math.floor(s / 2);
    return " ".repeat(o) + e + Ii(" ", s - o);
  }
  if (r === "right") return " ".repeat(s) + e;
  return e + " ".repeat(s);
}

function hUr(e, t) {
  function n(i) {
    return i.replace(/\s+/g, " ").trim();
  }
  function r(i) {
    return /[.!?\u2026]["')\]]*$/.test(i) ? i : `${i}.`;
  }
  function s(i) {
    return i.map((l, c) => {
      let p = n(e[c] ?? ""), d = n(l);
      if (!p && !d) return null;
      return r(p ? `${p}: ${d}` : d);
    }).filter(l => l !== null).join(" ");
  }
  return (t.length > 0 ? t.map(s) : [ e.map(n).filter(Boolean).map(r).join(" ") ]).filter(i => i.length > 0).join(m);
}

export { Pmn, uWo, $8n, k7e, pWo, fWo, F8n, U8n, l1t, l_t, mWo, d1t, fUr, Imn, wD, Omn, mUr, B8n, gUr, j8n, hUr };
