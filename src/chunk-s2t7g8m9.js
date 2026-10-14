// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { TYn } from "./chunk-bmq0vae0.js";

import { l, zj } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { lo } from "./chunk-ddr690nj.js";

import { En, t } from "./chunk-kawq2919.js";

import { zX } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { Ap } from "./chunk-y752zmas.js";

import { Cp, fS, cEe, wl, Cf, NG, Yu } from "./chunk-6ah1819r.js";

import { gl } from "./chunk-46phtgr7.js";

import { p } from "./chunk-jkzenvsk.js";

import { Oe, pj } from "./chunk-cjt10y7b.js";

import { X1e, J1e, dX } from "./chunk-w4hwgefc.js";

import { aae } from "./chunk-5brm0azz.js";

import { _h, yNt, ran, Jmt, sqn } from "./chunk-jnzpsr0d.js";

import { tL, m$ } from "./chunk-pvmwc6wy.js";

import { zO } from "./chunk-rzvcmswq.js";

import { AHs, CHs, RHs, xHs, PHs } from "./chunk-f1zpf9me.js";

import { tI } from "./chunk-3kb22va7.js";

import { o, v, M, lf, oe, T, u, De, _t, $e, Kr, ue, U, A, Tk, Sa } from "./chunk-cvcg6n1z.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var ct = C(function(A1, Fa) {
  var oR = Number.MAX_SAFE_INTEGER || 9007199254740991, aR = [ "major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease" ];
  Fa.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: oR,
    RELEASE_TYPES: aR,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});

var ut = C(function(y1, Ya) {
  var iR = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
  Ya.exports = iR;
});

var He = C(function(ce, Wa) {
  var {MAX_SAFE_COMPONENT_LENGTH: _r, MAX_SAFE_BUILD_LENGTH: lR, MAX_LENGTH: dR} = ct(), cR = ut();
  ce = Wa.exports = {};
  var hR = ce.re = [], uR = ce.safeRe = [], b = ce.src = [], pR = ce.safeSrc = [], E = ce.t = {}, _R = 0, mr = "[a-zA-Z0-9-]", mR = [ [ "\\s", 1 ], [ "\\d", dR ], [ mr, lR ] ], gR = e => {
    for (let [s, r] of mR) e = e.split(`${s}*`).join(`${s}{0,${r}}`).split(`${s}+`).join(`${s}{1,${r}}`);
    return e;
  }, R = (e, s, r) => {
    let n = gR(s), i = _R++;
    cR(e, i, s), E[e] = i, b[i] = s, pR[i] = n, hR[i] = new RegExp(s, r ? "g" : void 0), 
    uR[i] = new RegExp(n, r ? "g" : void 0);
  };
  R("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  R("NUMERICIDENTIFIERLOOSE", "\\d+");
  R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${mr}*`);
  R("MAINVERSION", `(${b[E.NUMERICIDENTIFIER]})\\.(${b[E.NUMERICIDENTIFIER]})\\.(${b[E.NUMERICIDENTIFIER]})`);
  R("MAINVERSIONLOOSE", `(${b[E.NUMERICIDENTIFIERLOOSE]})\\.(${b[E.NUMERICIDENTIFIERLOOSE]})\\.(${b[E.NUMERICIDENTIFIERLOOSE]})`);
  R("PRERELEASEIDENTIFIER", `(?:${b[E.NONNUMERICIDENTIFIER]}|${b[E.NUMERICIDENTIFIER]})`);
  R("PRERELEASEIDENTIFIERLOOSE", `(?:${b[E.NONNUMERICIDENTIFIER]}|${b[E.NUMERICIDENTIFIERLOOSE]})`);
  R("PRERELEASE", `(?:-(${b[E.PRERELEASEIDENTIFIER]}(?:\\.${b[E.PRERELEASEIDENTIFIER]})*))`);
  R("PRERELEASELOOSE", `(?:-?(${b[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${b[E.PRERELEASEIDENTIFIERLOOSE]})*))`);
  R("BUILDIDENTIFIER", `${mr}+`);
  R("BUILD", `(?:\\+(${b[E.BUILDIDENTIFIER]}(?:\\.${b[E.BUILDIDENTIFIER]})*))`);
  R("FULLPLAIN", `v?${b[E.MAINVERSION]}${b[E.PRERELEASE]}?${b[E.BUILD]}?`);
  R("FULL", `^${b[E.FULLPLAIN]}$`);
  R("LOOSEPLAIN", `[v=\\s]*${b[E.MAINVERSIONLOOSE]}${b[E.PRERELEASELOOSE]}?${b[E.BUILD]}?`);
  R("LOOSE", `^${b[E.LOOSEPLAIN]}$`);
  R("GTLT", "((?:<|>)?=?)");
  R("XRANGEIDENTIFIERLOOSE", `${b[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  R("XRANGEIDENTIFIER", `${b[E.NUMERICIDENTIFIER]}|x|X|\\*`);
  R("XRANGEPLAIN", `[v=\\s]*(${b[E.XRANGEIDENTIFIER]})(?:\\.(${b[E.XRANGEIDENTIFIER]})(?:\\.(${b[E.XRANGEIDENTIFIER]})(?:${b[E.PRERELEASE]})?${b[E.BUILD]}?)?)?`);
  R("XRANGEPLAINLOOSE", `[v=\\s]*(${b[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[E.XRANGEIDENTIFIERLOOSE]})(?:${b[E.PRERELEASELOOSE]})?${b[E.BUILD]}?)?)?`);
  R("XRANGE", `^${b[E.GTLT]}\\s*${b[E.XRANGEPLAIN]}$`);
  R("XRANGELOOSE", `^${b[E.GTLT]}\\s*${b[E.XRANGEPLAINLOOSE]}$`);
  R("COERCEPLAIN", `(^|[^\\d])(\\d{1,${_r}})(?:\\.(\\d{1,${_r}}))?(?:\\.(\\d{1,${_r}}))?`);
  R("COERCE", `${b[E.COERCEPLAIN]}(?:$|[^\\d])`);
  R("COERCEFULL", b[E.COERCEPLAIN] + `(?:${b[E.PRERELEASE]})?(?:${b[E.BUILD]})?(?:$|[^\\d])`);
  R("COERCERTL", b[E.COERCE], !0);
  R("COERCERTLFULL", b[E.COERCEFULL], !0);
  R("LONETILDE", "(?:~>?)");
  R("TILDETRIM", `(\\s*)${b[E.LONETILDE]}\\s+`, !0);
  ce.tildeTrimReplace = "$1~";
  R("TILDE", `^${b[E.LONETILDE]}${b[E.XRANGEPLAIN]}$`);
  R("TILDELOOSE", `^${b[E.LONETILDE]}${b[E.XRANGEPLAINLOOSE]}$`);
  R("LONECARET", "(?:\\^)");
  R("CARETTRIM", `(\\s*)${b[E.LONECARET]}\\s+`, !0);
  ce.caretTrimReplace = "$1^";
  R("CARET", `^${b[E.LONECARET]}${b[E.XRANGEPLAIN]}$`);
  R("CARETLOOSE", `^${b[E.LONECARET]}${b[E.XRANGEPLAINLOOSE]}$`);
  R("COMPARATORLOOSE", `^${b[E.GTLT]}\\s*(${b[E.LOOSEPLAIN]})$|^$`);
  R("COMPARATOR", `^${b[E.GTLT]}\\s*(${b[E.FULLPLAIN]})$|^$`);
  R("COMPARATORTRIM", `(\\s*)${b[E.GTLT]}\\s*(${b[E.LOOSEPLAIN]}|${b[E.XRANGEPLAIN]})`, !0);
  ce.comparatorTrimReplace = "$1$2$3";
  R("HYPHENRANGE", `^\\s*(${b[E.XRANGEPLAIN]})\\s+-\\s+(${b[E.XRANGEPLAIN]})\\s*$`);
  R("HYPHENRANGELOOSE", `^\\s*(${b[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${b[E.XRANGEPLAINLOOSE]})\\s*$`);
  R("STAR", "(<|>)?=?\\s*\\*");
  R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});

var Ft = C(function(R1, $a) {
  var fR = Object.freeze({
    loose: !0
  }), bR = Object.freeze({}), ER = e => {
    if (!e) return bR;
    if (typeof e !== "object") return fR;
    return e;
  };
  $a.exports = ER;
});

var gr = C(function(v1, Ja) {
  var Xa = /^[0-9]+$/, Qa = (e, s) => {
    if (typeof e === "number" && typeof s === "number") return e === s ? 0 : e < s ? -1 : 1;
    let r = Xa.test(e), n = Xa.test(s);
    if (r && n) e = +e, s = +s;
    return e === s ? 0 : r && !n ? -1 : n && !r ? 1 : e < s ? -1 : 1;
  }, SR = (e, s) => Qa(s, e);
  Ja.exports = {
    compareIdentifiers: Qa,
    rcompareIdentifiers: SR
  };
});

var q = C(function(C1, ei) {
  var Yt = ut(), {MAX_LENGTH: Za, MAX_SAFE_INTEGER: Wt} = ct(), {safeRe: $t, t: Xt} = He(), TR = Ft(), {compareIdentifiers: fr} = gr();
  class ie {
    constructor(e, s) {
      if (s = TR(s), e instanceof ie) if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) return e; else e = e.version; else if (typeof e !== "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > Za) throw TypeError(`version is longer than ${Za} characters`);
      Yt("SemVer", e, s), this.options = s, this.loose = !!s.loose, this.includePrerelease = !!s.includePrerelease;
      let r = e.trim().match(s.loose ? $t[Xt.LOOSE] : $t[Xt.FULL]);
      if (!r) throw TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Wt || this.major < 0) throw TypeError("Invalid major version");
      if (this.minor > Wt || this.minor < 0) throw TypeError("Invalid minor version");
      if (this.patch > Wt || this.patch < 0) throw TypeError("Invalid patch version");
      if (!r[4]) this.prerelease = []; else this.prerelease = r[4].split(".").map(n => {
        if (/^[0-9]+$/.test(n)) {
          let i = +n;
          if (i >= 0 && i < Wt) return i;
        }
        return n;
      });
      this.build = r[5] ? r[5].split(".") : [], this.format();
    }
    format() {
      if (this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (Yt("SemVer.compare", this.version, this.options, e), !(e instanceof ie)) {
        if (typeof e === "string" && e === this.version) return 0;
        e = new ie(e, this.options);
      }
      if (e.version === this.version) return 0;
      return this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      if (this.major < e.major) return -1;
      if (this.major > e.major) return 1;
      if (this.minor < e.minor) return -1;
      if (this.minor > e.minor) return 1;
      if (this.patch < e.patch) return -1;
      if (this.patch > e.patch) return 1;
      return 0;
    }
    comparePre(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      if (this.prerelease.length && !e.prerelease.length) return -1; else if (!this.prerelease.length && e.prerelease.length) return 1; else if (!this.prerelease.length && !e.prerelease.length) return 0;
      let s = 0;
      do {
        let r = this.prerelease[s], n = e.prerelease[s];
        if (Yt("prerelease compare", s, r, n), r === void 0 && n === void 0) return 0; else if (n === void 0) return 1; else if (r === void 0) return -1; else if (r === n) continue; else return fr(r, n);
      } while (++s);
    }
    compareBuild(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      let s = 0;
      do {
        let r = this.build[s], n = e.build[s];
        if (Yt("build compare", s, r, n), r === void 0 && n === void 0) return 0; else if (n === void 0) return 1; else if (r === void 0) return -1; else if (r === n) continue; else return fr(r, n);
      } while (++s);
    }
    inc(e, s, r) {
      if (e.startsWith("pre")) {
        if (!s && r === !1) throw Error("invalid increment argument: identifier is empty");
        if (s) {
          let n = `-${s}`.match(this.options.loose ? $t[Xt.PRERELEASELOOSE] : $t[Xt.PRERELEASE]);
          if (!n || n[1] !== s) throw Error(`invalid identifier: ${s}`);
        }
      }
      switch (e) {
       case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", s, r);
        break;

       case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", s, r);
        break;

       case "prepatch":
        this.prerelease.length = 0, this.inc("patch", s, r), this.inc("pre", s, r);
        break;

       case "prerelease":
        if (this.prerelease.length === 0) this.inc("patch", s, r);
        this.inc("pre", s, r);
        break;

       case "release":
        if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;

       case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
        this.minor = 0, this.patch = 0, this.prerelease = [];
        break;

       case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
        this.patch = 0, this.prerelease = [];
        break;

       case "patch":
        if (this.prerelease.length === 0) this.patch++;
        this.prerelease = [];
        break;

       case "pre":
        {
          let n = Number(r) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [ n ]; else {
            let i = this.prerelease.length;
            while (--i >= 0) if (typeof this.prerelease[i] === "number") this.prerelease[i]++, 
            i = -2;
            if (i === -1) {
              if (s === this.prerelease.join(".") && r === !1) throw Error("invalid increment argument: identifier already exists");
              this.prerelease.push(n);
            }
          }
          if (s) {
            let i = [ s, n ];
            if (r === !1) i = [ s ];
            if (fr(this.prerelease[0], s) === 0) {
              if (isNaN(this.prerelease[1])) this.prerelease = i;
            } else this.prerelease = i;
          }
          break;
        }

       default:
        throw Error(`invalid increment argument: ${e}`);
      }
      if (this.raw = this.format(), this.build.length) this.raw += `+${this.build.join(".")}`;
      return this;
    }
  }
  ei.exports = ie;
});

var ve = C(function(z1, si) {
  var ti = q(), wR = (e, s, r = !1) => {
    if (e instanceof ti) return e;
    try {
      return new ti(e, s);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
  si.exports = wR;
});

var ni = C(function(k1, ri) {
  var AR = ve(), yR = (e, s) => {
    let r = AR(e, s);
    return r ? r.version : null;
  };
  ri.exports = yR;
});

var ai = C(function(O1, oi) {
  var RR = ve(), vR = (e, s) => {
    let r = RR(e.trim().replace(/^[=v]+/, ""), s);
    return r ? r.version : null;
  };
  oi.exports = vR;
});

var di = C(function(N1, li) {
  var ii = q(), CR = (e, s, r, n, i) => {
    if (typeof r === "string") i = n, n = r, r = void 0;
    try {
      return new ii(e instanceof ii ? e.version : e, r).inc(s, n, i).version;
    } catch (d) {
      return null;
    }
  };
  li.exports = CR;
});

var ui = C(function(I1, hi) {
  var ci = ve(), kR = (e, s) => {
    let r = ci(e, null, !0), n = ci(s, null, !0), i = r.compare(n);
    if (i === 0) return null;
    let d = i > 0, c = d ? r : n, m = d ? n : r, h = !!c.prerelease.length;
    if (!!m.prerelease.length && !h) {
      if (!m.patch && !m.minor) return "major";
      if (m.compareMain(c) === 0) {
        if (m.minor && !m.patch) return "minor";
        return "patch";
      }
    }
    let S = h ? "pre" : "";
    if (r.major !== n.major) return S + "major";
    if (r.minor !== n.minor) return S + "minor";
    if (r.patch !== n.patch) return S + "patch";
    return "prerelease";
  };
  hi.exports = kR;
});

var mi = C(function(P1, _i) {
  var OR = q(), NR = (e, s) => new OR(e, s).major;
  _i.exports = NR;
});

var fi = C(function(M1, gi) {
  var IR = q(), PR = (e, s) => new IR(e, s).minor;
  gi.exports = PR;
});

var Ei = C(function(D1, bi) {
  var MR = q(), DR = (e, s) => new MR(e, s).patch;
  bi.exports = DR;
});

var Ti = C(function(x1, Si) {
  var xR = ve(), LR = (e, s) => {
    let r = xR(e, s);
    return r && r.prerelease.length ? r.prerelease : null;
  };
  Si.exports = LR;
});

var Z = C(function(L1, Ai) {
  var wi = q(), UR = (e, s, r) => new wi(e, r).compare(new wi(s, r));
  Ai.exports = UR;
});

var Ri = C(function(U1, yi) {
  var VR = Z(), qR = (e, s, r) => VR(s, e, r);
  yi.exports = qR;
});

var Ci = C(function(V1, vi) {
  var GR = Z(), BR = (e, s) => GR(e, s, !0);
  vi.exports = BR;
});

var Qt = C(function(j1, ki) {
  var zi = q(), HR = (e, s, r) => {
    let n = new zi(e, r), i = new zi(s, r);
    return n.compare(i) || n.compareBuild(i);
  };
  ki.exports = HR;
});

var Ni = C(function(q1, Oi) {
  var KR = Qt(), FR = (e, s) => e.sort((r, n) => KR(r, n, s));
  Oi.exports = FR;
});

var Pi = C(function(G1, Ii) {
  var YR = Qt(), $R = (e, s) => e.sort((r, n) => YR(n, r, s));
  Ii.exports = $R;
});

var pt = C(function(B1, Mi) {
  var XR = Z(), QR = (e, s, r) => XR(e, s, r) > 0;
  Mi.exports = QR;
});

var Jt = C(function(H1, Di) {
  var JR = Z(), ZR = (e, s, r) => JR(e, s, r) < 0;
  Di.exports = ZR;
});

var br = C(function(K1, xi) {
  var ev = Z(), tv = (e, s, r) => ev(e, s, r) === 0;
  xi.exports = tv;
});

var Er = C(function(F1, Li) {
  var sv = Z(), rv = (e, s, r) => sv(e, s, r) !== 0;
  Li.exports = rv;
});

var Zt = C(function(Y1, Ui) {
  var nv = Z(), ov = (e, s, r) => nv(e, s, r) >= 0;
  Ui.exports = ov;
});

var es = C(function(W1, Vi) {
  var av = Z(), iv = (e, s, r) => av(e, s, r) <= 0;
  Vi.exports = iv;
});

var Sr = C(function($1, ji) {
  var lv = br(), dv = Er(), cv = pt(), hv = Zt(), uv = Jt(), pv = es(), _v = (e, s, r, n) => {
    switch (s) {
     case "===":
      if (typeof e === "object") e = e.version;
      if (typeof r === "object") r = r.version;
      return e === r;

     case "!==":
      if (typeof e === "object") e = e.version;
      if (typeof r === "object") r = r.version;
      return e !== r;

     case "":
     case "=":
     case "==":
      return lv(e, r, n);

     case "!=":
      return dv(e, r, n);

     case ">":
      return cv(e, r, n);

     case ">=":
      return hv(e, r, n);

     case "<":
      return uv(e, r, n);

     case "<=":
      return pv(e, r, n);

     default:
      throw TypeError(`Invalid operator: ${s}`);
    }
  };
  ji.exports = _v;
});

var Gi = C(function(X1, qi) {
  var mv = q(), gv = ve(), {safeRe: ts, t: ss} = He(), fv = (e, s) => {
    if (e instanceof mv) return e;
    if (typeof e === "number") e = String(e);
    if (typeof e !== "string") return null;
    s = s || {};
    let r = null;
    if (!s.rtl) r = e.match(s.includePrerelease ? ts[ss.COERCEFULL] : ts[ss.COERCE]); else {
      let h = s.includePrerelease ? ts[ss.COERCERTLFULL] : ts[ss.COERCERTL], f;
      while ((f = h.exec(e)) && (!r || r.index + r[0].length !== e.length)) {
        if (!r || f.index + f[0].length !== r.index + r[0].length) r = f;
        h.lastIndex = f.index + f[1].length + f[2].length;
      }
      h.lastIndex = -1;
    }
    if (r === null) return null;
    let n = r[2], i = r[3] || "0", d = r[4] || "0", c = s.includePrerelease && r[5] ? `-${r[5]}` : "", m = s.includePrerelease && r[6] ? `+${r[6]}` : "";
    return gv(`${n}.${i}.${d}${c}${m}`, s);
  };
  qi.exports = fv;
});

var Fi = C(function(Q1, Ki) {
  class Hi {
    constructor() {
      this.max = 1e3, this.map = new Map;
    }
    get(e) {
      let s = this.map.get(e);
      if (s === void 0) return; else return this.map.delete(e), this.map.set(e, s), s;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, s) {
      if (!this.delete(e) && s !== void 0) {
        if (this.map.size >= this.max) {
          let n = this.map.keys().next().value;
          this.delete(n);
        }
        this.map.set(e, s);
      }
      return this;
    }
  }
  Ki.exports = Hi;
});

var ee = C(function(J1, Xi) {
  var bv = /\s+/g;
  class mt {
    constructor(e, s) {
      if (s = Sv(s), e instanceof mt) if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) return e; else return new mt(e.raw, s);
      if (e instanceof rs) return this.raw = e.value, this.set = [ [ e ] ], this.formatted = void 0, 
      this;
      if (this.options = s, this.loose = !!s.loose, this.includePrerelease = !!s.includePrerelease, 
      this.raw = e.trim().replace(bv, " "), this.set = this.raw.split("||").map(r => this.parseRange(r.trim())).filter(r => r.length), 
      !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter(n => !Wi(n[0])), this.set.length === 0) this.set = [ r ]; else if (this.set.length > 1) {
          for (let n of this.set) if (n.length === 1 && Cv(n[0])) {
            this.set = [ n ];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          if (e > 0) this.formatted += "||";
          let s = this.set[e];
          for (let r = 0; r < s.length; r++) {
            if (r > 0) this.formatted += " ";
            this.formatted += s[r].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      let r = ((this.options.includePrerelease && Rv) | (this.options.loose && vv)) + ":" + e, n = Yi.get(r);
      if (n) return n;
      let i = this.options.loose, d = i ? F[G.HYPHENRANGELOOSE] : F[G.HYPHENRANGE];
      e = e.replace(d, Lv(this.options.includePrerelease)), P("hyphen replace", e), e = e.replace(F[G.COMPARATORTRIM], wv), 
      P("comparator trim", e), e = e.replace(F[G.TILDETRIM], Av), P("tilde trim", e), 
      e = e.replace(F[G.CARETTRIM], yv), P("caret trim", e);
      let c = e.split(" ").map(S => zv(S, this.options)).join(" ").split(/\s+/).map(S => xv(S, this.options));
      if (i) c = c.filter(S => (P("loose invalid filter", S, this.options), !!S.match(F[G.COMPARATORLOOSE])));
      P("range list", c);
      let m = new Map, h = c.map(S => new rs(S, this.options));
      for (let S of h) {
        if (Wi(S)) return [ S ];
        m.set(S.value, S);
      }
      if (m.size > 1 && m.has("")) m.delete("");
      let f = [ ...m.values() ];
      return Yi.set(r, f), f;
    }
    intersects(e, s) {
      if (!(e instanceof mt)) throw TypeError("a Range is required");
      return this.set.some(r => $i(r, s) && e.set.some(n => $i(n, s) && r.every(i => n.every(d => i.intersects(d, s)))));
    }
    test(e) {
      if (!e) return !1;
      if (typeof e === "string") try {
        e = new Tv(e, this.options);
      } catch (s) {
        return !1;
      }
      for (let s = 0; s < this.set.length; s++) if (Uv(this.set[s], e, this.options)) return !0;
      return !1;
    }
  }
  Xi.exports = mt;
  var Ev = Fi(), Yi = new Ev, Sv = Ft(), rs = gt(), P = ut(), Tv = q(), {safeRe: F, t: G, comparatorTrimReplace: wv, tildeTrimReplace: Av, caretTrimReplace: yv} = He(), {FLAG_INCLUDE_PRERELEASE: Rv, FLAG_LOOSE: vv} = ct(), Wi = e => e.value === "<0.0.0-0", Cv = e => e.value === "", $i = (e, s) => {
    let r = !0, n = e.slice(), i = n.pop();
    while (r && n.length) r = n.every(d => i.intersects(d, s)), i = n.pop();
    return r;
  }, zv = (e, s) => (e = e.replace(F[G.BUILD], ""), P("comp", e, s), e = Nv(e, s), 
  P("caret", e), e = kv(e, s), P("tildes", e), e = Pv(e, s), P("xrange", e), e = Dv(e, s), 
  P("stars", e), e), Y = e => !e || e.toLowerCase() === "x" || e === "*", kv = (e, s) => e.trim().split(/\s+/).map(r => Ov(r, s)).join(" "), Ov = (e, s) => {
    let r = s.loose ? F[G.TILDELOOSE] : F[G.TILDE];
    return e.replace(r, (n, i, d, c, m) => {
      P("tilde", e, n, i, d, c, m);
      let h;
      if (Y(i)) h = ""; else if (Y(d)) h = `>=${i}.0.0 <${+i + 1}.0.0-0`; else if (Y(c)) h = `>=${i}.${d}.0 <${i}.${+d + 1}.0-0`; else if (m) P("replaceTilde pr", m), 
      h = `>=${i}.${d}.${c}-${m} <${i}.${+d + 1}.0-0`; else h = `>=${i}.${d}.${c} <${i}.${+d + 1}.0-0`;
      return P("tilde return", h), h;
    });
  }, Nv = (e, s) => e.trim().split(/\s+/).map(r => Iv(r, s)).join(" "), Iv = (e, s) => {
    P("caret", e, s);
    let r = s.loose ? F[G.CARETLOOSE] : F[G.CARET], n = s.includePrerelease ? "-0" : "";
    return e.replace(r, (i, d, c, m, h) => {
      P("caret", e, i, d, c, m, h);
      let f;
      if (Y(d)) f = ""; else if (Y(c)) f = `>=${d}.0.0${n} <${+d + 1}.0.0-0`; else if (Y(m)) if (d === "0") f = `>=${d}.${c}.0${n} <${d}.${+c + 1}.0-0`; else f = `>=${d}.${c}.0${n} <${+d + 1}.0.0-0`; else if (h) if (P("replaceCaret pr", h), 
      d === "0") if (c === "0") f = `>=${d}.${c}.${m}-${h} <${d}.${c}.${+m + 1}-0`; else f = `>=${d}.${c}.${m}-${h} <${d}.${+c + 1}.0-0`; else f = `>=${d}.${c}.${m}-${h} <${+d + 1}.0.0-0`; else if (P("no pr"), 
      d === "0") if (c === "0") f = `>=${d}.${c}.${m}${n} <${d}.${c}.${+m + 1}-0`; else f = `>=${d}.${c}.${m}${n} <${d}.${+c + 1}.0-0`; else f = `>=${d}.${c}.${m} <${+d + 1}.0.0-0`;
      return P("caret return", f), f;
    });
  }, Pv = (e, s) => (P("replaceXRanges", e, s), e.split(/\s+/).map(r => Mv(r, s)).join(" ")), Mv = (e, s) => {
    e = e.trim();
    let r = s.loose ? F[G.XRANGELOOSE] : F[G.XRANGE];
    return e.replace(r, (n, i, d, c, m, h) => {
      P("xRange", e, n, i, d, c, m, h);
      let f = Y(d), S = f || Y(c), k = S || Y(m), I = k;
      if (i === "=" && I) i = "";
      if (h = s.includePrerelease ? "-0" : "", f) if (i === ">" || i === "<") n = "<0.0.0-0"; else n = "*"; else if (i && I) {
        if (S) c = 0;
        if (m = 0, i === ">") if (i = ">=", S) d = +d + 1, c = 0, m = 0; else c = +c + 1, 
        m = 0; else if (i === "<=") if (i = "<", S) d = +d + 1; else c = +c + 1;
        if (i === "<") h = "-0";
        n = `${i + d}.${c}.${m}${h}`;
      } else if (S) n = `>=${d}.0.0${h} <${+d + 1}.0.0-0`; else if (k) n = `>=${d}.${c}.0${h} <${d}.${+c + 1}.0-0`;
      return P("xRange return", n), n;
    });
  }, Dv = (e, s) => (P("replaceStars", e, s), e.trim().replace(F[G.STAR], "")), xv = (e, s) => (P("replaceGTE0", e, s), 
  e.trim().replace(F[s.includePrerelease ? G.GTE0PRE : G.GTE0], "")), Lv = e => (s, r, n, i, d, c, m, h, f, S, k, I) => {
    if (Y(n)) r = ""; else if (Y(i)) r = `>=${n}.0.0${e ? "-0" : ""}`; else if (Y(d)) r = `>=${n}.${i}.0${e ? "-0" : ""}`; else if (c) r = `>=${r}`; else r = `>=${r}${e ? "-0" : ""}`;
    if (Y(f)) h = ""; else if (Y(S)) h = `<${+f + 1}.0.0-0`; else if (Y(k)) h = `<${f}.${+S + 1}.0-0`; else if (I) h = `<=${f}.${S}.${k}-${I}`; else if (e) h = `<${f}.${S}.${+k + 1}-0`; else h = `<=${h}`;
    return `${r} ${h}`.trim();
  }, Uv = (e, s, r) => {
    for (let n = 0; n < e.length; n++) if (!e[n].test(s)) return !1;
    if (s.prerelease.length && !r.includePrerelease) {
      for (let n = 0; n < e.length; n++) {
        if (P(e[n].semver), e[n].semver === rs.ANY) continue;
        if (e[n].semver.prerelease.length > 0) {
          let i = e[n].semver;
          if (i.major === s.major && i.minor === s.minor && i.patch === s.patch) return !0;
        }
      }
      return !1;
    }
    return !0;
  };
});

var gt = C(function(Z1, sl) {
  var ft = Symbol("SemVer ANY");
  class ns {
    static get ANY() {
      return ft;
    }
    constructor(e, s) {
      if (s = Qi(s), e instanceof ns) if (e.loose === !!s.loose) return e; else e = e.value;
      if (e = e.trim().split(/\s+/).join(" "), wr("comparator", e, s), this.options = s, 
      this.loose = !!s.loose, this.parse(e), this.semver === ft) this.value = ""; else this.value = this.operator + this.semver.version;
      wr("comp", this);
    }
    parse(e) {
      let s = this.options.loose ? Ji[Zi.COMPARATORLOOSE] : Ji[Zi.COMPARATOR], r = e.match(s);
      if (!r) throw TypeError(`Invalid comparator: ${e}`);
      if (this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=") this.operator = "";
      if (!r[2]) this.semver = ft; else this.semver = new el(r[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (wr("Comparator.test", e, this.options.loose), this.semver === ft || e === ft) return !0;
      if (typeof e === "string") try {
        e = new el(e, this.options);
      } catch (s) {
        return !1;
      }
      return Tr(e, this.operator, this.semver, this.options);
    }
    intersects(e, s) {
      if (!(e instanceof ns)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new tl(e.value, s).test(this.value);
      } else if (e.operator === "") {
        if (e.value === "") return !0;
        return new tl(this.value, s).test(e.semver);
      }
      if (s = Qi(s), s.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) return !1;
      if (!s.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) return !1;
      if (this.operator.startsWith(">") && e.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && e.operator.startsWith("<")) return !0;
      if (this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=")) return !0;
      if (Tr(this.semver, "<", e.semver, s) && this.operator.startsWith(">") && e.operator.startsWith("<")) return !0;
      if (Tr(this.semver, ">", e.semver, s) && this.operator.startsWith("<") && e.operator.startsWith(">")) return !0;
      return !1;
    }
  }
  sl.exports = ns;
  var Qi = Ft(), {safeRe: Ji, t: Zi} = He(), Tr = Sr(), wr = ut(), el = q(), tl = ee();
});

var bt = C(function(e$, rl) {
  var Vv = ee(), jv = (e, s, r) => {
    try {
      s = new Vv(s, r);
    } catch (n) {
      return !1;
    }
    return s.test(e);
  };
  rl.exports = jv;
});

var ol = C(function(s$, nl) {
  var qv = ee(), Gv = (e, s) => new qv(e, s).set.map(r => r.map(n => n.value).join(" ").trim().split(" "));
  nl.exports = Gv;
});

var il = C(function(r$, al) {
  var Bv = q(), Hv = ee(), Kv = (e, s, r) => {
    let n = null, i = null, d = null;
    try {
      d = new Hv(s, r);
    } catch (c) {
      return null;
    }
    return e.forEach(c => {
      if (d.test(c)) {
        if (!n || i.compare(c) === -1) n = c, i = new Bv(n, r);
      }
    }), n;
  };
  al.exports = Kv;
});

var dl = C(function(o$, ll) {
  var Fv = q(), Yv = ee(), Wv = (e, s, r) => {
    let n = null, i = null, d = null;
    try {
      d = new Yv(s, r);
    } catch (c) {
      return null;
    }
    return e.forEach(c => {
      if (d.test(c)) {
        if (!n || i.compare(c) === 1) n = c, i = new Fv(n, r);
      }
    }), n;
  };
  ll.exports = Wv;
});

var ul = C(function(a$, hl) {
  var Ar = q(), $v = ee(), cl = pt(), Xv = (e, s) => {
    e = new $v(e, s);
    let r = new Ar("0.0.0");
    if (e.test(r)) return r;
    if (r = new Ar("0.0.0-0"), e.test(r)) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      let i = e.set[n], d = null;
      if (i.forEach(c => {
        let m = new Ar(c.semver.version);
        switch (c.operator) {
         case ">":
          if (m.prerelease.length === 0) m.patch++; else m.prerelease.push(0);
          m.raw = m.format();

         case "":
         case ">=":
          if (!d || cl(m, d)) d = m;
          break;

         case "<":
         case "<=":
          break;

         default:
          throw Error(`Unexpected operation: ${c.operator}`);
        }
      }), d && (!r || cl(r, d))) r = d;
    }
    if (r && e.test(r)) return r;
    return null;
  };
  hl.exports = Xv;
});

var _l = C(function(i$, pl) {
  var Qv = ee(), Jv = (e, s) => {
    try {
      return new Qv(e, s).range || "*";
    } catch (r) {
      return null;
    }
  };
  pl.exports = Jv;
});

var os = C(function(l$, El) {
  var Zv = q(), bl = gt(), {ANY: eC} = bl, tC = ee(), sC = bt(), ml = pt(), fl = Jt(), rC = es(), nC = Zt(), oC = (e, s, r, n) => {
    e = new Zv(e, n), s = new tC(s, n);
    let i, d, c, m, h;
    switch (r) {
     case ">":
      i = ml, d = rC, c = fl, m = ">", h = ">=";
      break;

     case "<":
      i = fl, d = nC, c = ml, m = "<", h = "<=";
      break;

     default:
      throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (sC(e, s, n)) return !1;
    for (let f = 0; f < s.set.length; ++f) {
      let S = s.set[f], k = null, I = null;
      if (S.forEach(y => {
        if (y.semver === eC) y = new bl(">=0.0.0");
        if (k = k || y, I = I || y, i(y.semver, k.semver, n)) k = y; else if (c(y.semver, I.semver, n)) I = y;
      }), k.operator === m || k.operator === h) return !1;
      if ((!I.operator || I.operator === m) && d(e, I.semver)) return !1; else if (I.operator === h && c(e, I.semver)) return !1;
    }
    return !0;
  };
  El.exports = oC;
});

var Tl = C(function(d$, Sl) {
  var aC = os(), iC = (e, s, r) => aC(e, s, ">", r);
  Sl.exports = iC;
});

var yl = C(function(c$, Al) {
  var lC = os(), dC = (e, s, r) => lC(e, s, "<", r);
  Al.exports = dC;
});

var Cl = C(function(h$, vl) {
  var Rl = ee(), cC = (e, s, r) => (e = new Rl(e, r), s = new Rl(s, r), e.intersects(s, r));
  vl.exports = cC;
});

var kl = C(function(u$, zl) {
  var hC = bt(), uC = Z();
  zl.exports = (e, s, r) => {
    let n = [], i = null, d = null, c = e.sort((S, k) => uC(S, k, r));
    for (let S of c) if (hC(S, s, r)) {
      if (d = S, !i) i = S;
    } else {
      if (d) n.push([ i, d ]);
      d = null, i = null;
    }
    if (i) n.push([ i, null ]);
    let m = [];
    for (let [S, k] of n) if (S === k) m.push(S); else if (!k && S === c[0]) m.push("*"); else if (!k) m.push(`>=${S}`); else if (S === c[0]) m.push(`<=${k}`); else m.push(`${S} - ${k}`);
    let h = m.join(" || "), f = typeof s.raw === "string" ? s.raw : String(s);
    return h.length < f.length ? h : s;
  };
});

var Dl = C(function(p$, Ml) {
  var Ol = ee(), Rr = gt(), {ANY: yr} = Rr, Et = bt(), vr = Z(), pC = (e, s, r = {}) => {
    if (e === s) return !0;
    e = new Ol(e, r), s = new Ol(s, r);
    let n = !1;
    e: for (let i of e.set) {
      for (let d of s.set) {
        let c = mC(i, d, r);
        if (n = n || c !== null, c) continue e;
      }
      if (n) return !1;
    }
    return !0;
  }, _C = [ new Rr(">=0.0.0-0") ], Nl = [ new Rr(">=0.0.0") ], mC = (e, s, r) => {
    if (e === s) return !0;
    if (e.length === 1 && e[0].semver === yr) if (s.length === 1 && s[0].semver === yr) return !0; else if (r.includePrerelease) e = _C; else e = Nl;
    if (s.length === 1 && s[0].semver === yr) if (r.includePrerelease) return !0; else s = Nl;
    let n = new Set, i, d;
    for (let y of e) if (y.operator === ">" || y.operator === ">=") i = Il(i, y, r); else if (y.operator === "<" || y.operator === "<=") d = Pl(d, y, r); else n.add(y.semver);
    if (n.size > 1) return null;
    let c;
    if (i && d) {
      if (c = vr(i.semver, d.semver, r), c > 0) return null; else if (c === 0 && (i.operator !== ">=" || d.operator !== "<=")) return null;
    }
    for (let y of n) {
      if (i && !Et(y, String(i), r)) return null;
      if (d && !Et(y, String(d), r)) return null;
      for (let Fy of s) if (!Et(y, String(Fy), r)) return !1;
      return !0;
    }
    let m, h, f, S, k = d && !r.includePrerelease && d.semver.prerelease.length ? d.semver : !1, I = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    if (k && k.prerelease.length === 1 && d.operator === "<" && k.prerelease[0] === 0) k = !1;
    for (let y of s) {
      if (S = S || y.operator === ">" || y.operator === ">=", f = f || y.operator === "<" || y.operator === "<=", 
      i) {
        if (I) {
          if (y.semver.prerelease && y.semver.prerelease.length && y.semver.major === I.major && y.semver.minor === I.minor && y.semver.patch === I.patch) I = !1;
        }
        if (y.operator === ">" || y.operator === ">=") {
          if (m = Il(i, y, r), m === y && m !== i) return !1;
        } else if (i.operator === ">=" && !Et(i.semver, String(y), r)) return !1;
      }
      if (d) {
        if (k) {
          if (y.semver.prerelease && y.semver.prerelease.length && y.semver.major === k.major && y.semver.minor === k.minor && y.semver.patch === k.patch) k = !1;
        }
        if (y.operator === "<" || y.operator === "<=") {
          if (h = Pl(d, y, r), h === y && h !== d) return !1;
        } else if (d.operator === "<=" && !Et(d.semver, String(y), r)) return !1;
      }
      if (!y.operator && (d || i) && c !== 0) return !1;
    }
    if (i && f && !d && c !== 0) return !1;
    if (d && S && !i && c !== 0) return !1;
    if (I || k) return !1;
    return !0;
  }, Il = (e, s, r) => {
    if (!e) return s;
    let n = vr(e.semver, s.semver, r);
    return n > 0 ? e : n < 0 ? s : s.operator === ">" && e.operator === ">=" ? s : e;
  }, Pl = (e, s, r) => {
    if (!e) return s;
    let n = vr(e.semver, s.semver, r);
    return n < 0 ? e : n > 0 ? s : s.operator === "<" && e.operator === "<=" ? s : e;
  };
  Ml.exports = pC;
});

var vy = C(function(_$, xl) {
  var Ke = He(), as = ct(), gC = q(), is = gr(), fC = ve(), bC = ni(), EC = ai(), SC = di(), TC = ui(), AC = mi(), yC = fi(), RC = Ei(), vC = Ti(), CC = Z(), zC = Ri(), kC = Ci(), OC = Qt(), NC = Ni(), IC = Pi(), PC = pt(), MC = Jt(), DC = br(), xC = Er(), LC = Zt(), UC = es(), VC = Sr(), jC = Gi(), qC = gt(), GC = ee(), BC = bt(), HC = ol(), KC = il(), FC = dl(), YC = ul(), WC = _l(), $C = os(), XC = Tl(), QC = yl(), JC = Cl(), ZC = kl(), ez = Dl();
  xl.exports = {
    parse: fC,
    valid: bC,
    clean: EC,
    inc: SC,
    diff: TC,
    major: AC,
    minor: yC,
    patch: RC,
    prerelease: vC,
    compare: CC,
    rcompare: zC,
    compareLoose: kC,
    compareBuild: OC,
    sort: NC,
    rsort: IC,
    gt: PC,
    lt: MC,
    eq: DC,
    neq: xC,
    gte: LC,
    lte: UC,
    cmp: VC,
    coerce: jC,
    Comparator: qC,
    Range: GC,
    satisfies: BC,
    toComparators: HC,
    maxSatisfying: KC,
    minSatisfying: FC,
    minVersion: YC,
    validRange: WC,
    outside: $C,
    gtr: XC,
    ltr: QC,
    intersects: JC,
    simplifyRange: ZC,
    subset: ez,
    SemVer: gC,
    re: Ke.re,
    src: Ke.src,
    tokens: Ke.t,
    SEMVER_SPEC_VERSION: as.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: as.RELEASE_TYPES,
    compareIdentifiers: is.compareIdentifiers,
    rcompareIdentifiers: is.rcompareIdentifiers
  };
});

var Vl = C(function(Ll) {
  Object.defineProperty(Ll, "__esModule", {
    value: !0
  });
  Ll._globalThis = void 0;
  Ll._globalThis = typeof globalThis === "object" ? globalThis : global;
});

var jl = C(function(Ce) {
  var nz = Ce && Ce.__createBinding || (Object.create ? function(e, s, r, n) {
    if (n === void 0) n = r;
    Object.defineProperty(e, n, {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    });
  } : function(e, s, r, n) {
    if (n === void 0) n = r;
    e[n] = s[r];
  }), oz = Ce && Ce.__exportStar || function(e, s) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) nz(s, e, r);
  };
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  oz(Vl(), Ce);
});

var ql = C(function(ze) {
  var az = ze && ze.__createBinding || (Object.create ? function(e, s, r, n) {
    if (n === void 0) n = r;
    Object.defineProperty(e, n, {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    });
  } : function(e, s, r, n) {
    if (n === void 0) n = r;
    e[n] = s[r];
  }), iz = ze && ze.__exportStar || function(e, s) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) az(s, e, r);
  };
  Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  iz(jl(), ze);
});

var Cr = C(function(Gl) {
  Object.defineProperty(Gl, "__esModule", {
    value: !0
  });
  Gl.VERSION = void 0;
  Gl.VERSION = "1.9.0";
});

var $l = C(function(Yl) {
  Object.defineProperty(Yl, "__esModule", {
    value: !0
  });
  Yl.isCompatible = Yl._makeCompatibilityCheck = void 0;
  var Kl = Cr(), Hl = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function Fl(e) {
    let s = new Set([ e ]), r = new Set, n = e.match(Hl);
    if (!n) return () => !1;
    let i = {
      major: +n[1],
      minor: +n[2],
      patch: +n[3],
      prerelease: n[4]
    };
    if (i.prerelease != null) return function(h) {
      return h === e;
    };
    function d(m) {
      return r.add(m), !1;
    }
    function c(m) {
      return s.add(m), !0;
    }
    return function(h) {
      if (s.has(h)) return !0;
      if (r.has(h)) return !1;
      let f = h.match(Hl);
      if (!f) return d(h);
      let S = {
        major: +f[1],
        minor: +f[2],
        patch: +f[3],
        prerelease: f[4]
      };
      if (S.prerelease != null) return d(h);
      if (i.major !== S.major) return d(h);
      if (i.major === 0) {
        if (i.minor === S.minor && i.patch <= S.patch) return c(h);
        return d(h);
      }
      if (i.minor <= S.minor) return c(h);
      return d(h);
    };
  }
  Yl._makeCompatibilityCheck = Fl;
  Yl.isCompatible = Fl(Kl.VERSION);
});

var ke = C(function(Jl) {
  Object.defineProperty(Jl, "__esModule", {
    value: !0
  });
  Jl.unregisterGlobal = Jl.getGlobal = Jl.registerGlobal = void 0;
  var Xl = ql(), te = Cr(), Ql = $l(), dz = te.VERSION.split(".")[0], St = Symbol.for(`opentelemetry.js.api.${dz}`), Tt = Xl._globalThis;
  function cz(e, s, r, n = !1) {
    var i;
    let d = Tt[St] = (i = Tt[St]) !== null && i !== void 0 ? i : {
      version: te.VERSION
    };
    if (!n && d[e]) {
      let c = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
      return r.error(c.stack || c.message), !1;
    }
    if (d.version !== te.VERSION) {
      let c = Error(`@opentelemetry/api: Registration of version v${d.version} for ${e} does not match previously registered API v${te.VERSION}`);
      return r.error(c.stack || c.message), !1;
    }
    return d[e] = s, r.debug(`@opentelemetry/api: Registered a global for ${e} v${te.VERSION}.`), 
    !0;
  }
  Jl.registerGlobal = cz;
  function hz(e) {
    var s, r;
    let n = (s = Tt[St]) === null || s === void 0 ? void 0 : s.version;
    if (!n || !Ql.isCompatible(n)) return;
    return (r = Tt[St]) === null || r === void 0 ? void 0 : r[e];
  }
  Jl.getGlobal = hz;
  function uz(e, s) {
    s.debug(`@opentelemetry/api: Unregistering a global for ${e} v${te.VERSION}.`);
    let r = Tt[St];
    if (r) delete r[e];
  }
  Jl.unregisterGlobal = uz;
});

var nd = C(function(sd) {
  Object.defineProperty(sd, "__esModule", {
    value: !0
  });
  sd.DiagComponentLogger = void 0;
  var ed = ke();
  class td {
    constructor(e) {
      this._namespace = e.namespace || "DiagComponentLogger";
    }
    debug(...e) {
      return wt("debug", this._namespace, e);
    }
    error(...e) {
      return wt("error", this._namespace, e);
    }
    info(...e) {
      return wt("info", this._namespace, e);
    }
    warn(...e) {
      return wt("warn", this._namespace, e);
    }
    verbose(...e) {
      return wt("verbose", this._namespace, e);
    }
  }
  sd.DiagComponentLogger = td;
  function wt(e, s, r) {
    let n = ed.getGlobal("diag");
    if (!n) return;
    return r.unshift(s), n[e](...r);
  }
});

var ds = C(function(od) {
  Object.defineProperty(od, "__esModule", {
    value: !0
  });
  od.DiagLogLevel = void 0;
  var mz;
  (function(e) {
    e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", 
    e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
  })(mz = od.DiagLogLevel || (od.DiagLogLevel = {}));
});

var ld = C(function(ad) {
  Object.defineProperty(ad, "__esModule", {
    value: !0
  });
  ad.createLogLevelDiagLogger = void 0;
  var L = ds();
  function gz(e, s) {
    if (e < L.DiagLogLevel.NONE) e = L.DiagLogLevel.NONE; else if (e > L.DiagLogLevel.ALL) e = L.DiagLogLevel.ALL;
    s = s || {};
    function r(n, i) {
      let d = s[n];
      if (typeof d === "function" && e >= i) return d.bind(s);
      return function() {};
    }
    return {
      error: r("error", L.DiagLogLevel.ERROR),
      warn: r("warn", L.DiagLogLevel.WARN),
      info: r("info", L.DiagLogLevel.INFO),
      debug: r("debug", L.DiagLogLevel.DEBUG),
      verbose: r("verbose", L.DiagLogLevel.VERBOSE)
    };
  }
  ad.createLogLevelDiagLogger = gz;
});

var Ie = C(function(hd) {
  Object.defineProperty(hd, "__esModule", {
    value: !0
  });
  hd.DiagAPI = void 0;
  var dd = nd(), cd = ld(), cs = ds(), fe = ke(), fz = "diag";
  class kr {
    constructor() {
      function e(n) {
        return function(...i) {
          let d = fe.getGlobal("diag");
          if (!d) return;
          return d[n](...i);
        };
      }
      let s = this, r = (n, i = {
        logLevel: cs.DiagLogLevel.INFO
      }) => {
        var d, c, m;
        if (n === s) {
          let S = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return s.error((d = S.stack) !== null && d !== void 0 ? d : S.message), !1;
        }
        if (typeof i === "number") i = {
          logLevel: i
        };
        let h = fe.getGlobal("diag"), f = cd.createLogLevelDiagLogger((c = i.logLevel) !== null && c !== void 0 ? c : cs.DiagLogLevel.INFO, n);
        if (h && !i.suppressOverrideMessage) {
          let S = (m = Error().stack) !== null && m !== void 0 ? m : "<failed to generate stacktrace>";
          h.warn(`Current logger will be overwritten from ${S}`), f.warn(`Current logger will overwrite one already registered from ${S}`);
        }
        return fe.registerGlobal("diag", f, s, !0);
      };
      s.setLogger = r, s.disable = () => {
        fe.unregisterGlobal(fz, s);
      }, s.createComponentLogger = n => new dd.DiagComponentLogger(n), s.verbose = e("verbose"), 
      s.debug = e("debug"), s.info = e("info"), s.warn = e("warn"), s.error = e("error");
    }
    static instance() {
      if (!this._instance) this._instance = new kr;
      return this._instance;
    }
  }
  hd.DiagAPI = kr;
});

var md = C(function(pd) {
  Object.defineProperty(pd, "__esModule", {
    value: !0
  });
  pd.BaggageImpl = void 0;
  class Fe {
    constructor(e) {
      this._entries = e ? new Map(e) : new Map;
    }
    getEntry(e) {
      let s = this._entries.get(e);
      if (!s) return;
      return Object.assign({}, s);
    }
    getAllEntries() {
      return Array.from(this._entries.entries()).map(([e, s]) => [ e, s ]);
    }
    setEntry(e, s) {
      let r = new Fe(this._entries);
      return r._entries.set(e, s), r;
    }
    removeEntry(e) {
      let s = new Fe(this._entries);
      return s._entries.delete(e), s;
    }
    removeEntries(...e) {
      let s = new Fe(this._entries);
      for (let r of e) s._entries.delete(r);
      return s;
    }
    clear() {
      return new Fe;
    }
  }
  pd.BaggageImpl = Fe;
});

var bd = C(function(gd) {
  Object.defineProperty(gd, "__esModule", {
    value: !0
  });
  gd.baggageEntryMetadataSymbol = void 0;
  gd.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});

var Or = C(function(wd) {
  Object.defineProperty(wd, "__esModule", {
    value: !0
  });
  wd.baggageEntryMetadataFromString = wd.createBaggage = void 0;
  var Ed = Ie(), Sd = md(), Td = bd(), bz = Ed.DiagAPI.instance();
  function Ez(e = {}) {
    return new Sd.BaggageImpl(new Map(Object.entries(e)));
  }
  wd.createBaggage = Ez;
  function Sz(e) {
    if (typeof e !== "string") bz.error(`Cannot create baggage metadata from unknown type: ${typeof e}`), 
    e = "";
    return {
      __TYPE__: Td.baggageEntryMetadataSymbol,
      toString() {
        return e;
      }
    };
  }
  wd.baggageEntryMetadataFromString = Sz;
});

var At = C(function(yd) {
  Object.defineProperty(yd, "__esModule", {
    value: !0
  });
  yd.ROOT_CONTEXT = yd.createContextKey = void 0;
  function wz(e) {
    return Symbol.for(e);
  }
  yd.createContextKey = wz;
  class hs {
    constructor(e) {
      let s = this;
      s._currentContext = e ? new Map(e) : new Map, s.getValue = r => s._currentContext.get(r), 
      s.setValue = (r, n) => {
        let i = new hs(s._currentContext);
        return i._currentContext.set(r, n), i;
      }, s.deleteValue = r => {
        let n = new hs(s._currentContext);
        return n._currentContext.delete(r), n;
      };
    }
  }
  yd.ROOT_CONTEXT = new hs;
});

var kd = C(function(Cd) {
  Object.defineProperty(Cd, "__esModule", {
    value: !0
  });
  Cd.DiagConsoleLogger = void 0;
  var Nr = [ {
    n: "error",
    c: "error"
  }, {
    n: "warn",
    c: "warn"
  }, {
    n: "info",
    c: "info"
  }, {
    n: "debug",
    c: "debug"
  }, {
    n: "verbose",
    c: "trace"
  } ];
  class vd {
    constructor() {
      function e(s) {
        return function(...r) {
          if (console) {
            let n = console[s];
            if (typeof n !== "function") n = console.log;
            if (typeof n === "function") return n.apply(console, r);
          }
        };
      }
      for (let s = 0; s < Nr.length; s++) this[Nr[s].n] = e(Nr[s].c);
    }
  }
  Cd.DiagConsoleLogger = vd;
});

var jr = C(function(Od) {
  Object.defineProperty(Od, "__esModule", {
    value: !0
  });
  Od.createNoopMeter = Od.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = Od.NOOP_OBSERVABLE_GAUGE_METRIC = Od.NOOP_OBSERVABLE_COUNTER_METRIC = Od.NOOP_UP_DOWN_COUNTER_METRIC = Od.NOOP_HISTOGRAM_METRIC = Od.NOOP_GAUGE_METRIC = Od.NOOP_COUNTER_METRIC = Od.NOOP_METER = Od.NoopObservableUpDownCounterMetric = Od.NoopObservableGaugeMetric = Od.NoopObservableCounterMetric = Od.NoopObservableMetric = Od.NoopHistogramMetric = Od.NoopGaugeMetric = Od.NoopUpDownCounterMetric = Od.NoopCounterMetric = Od.NoopMetric = Od.NoopMeter = void 0;
  class Ir {
    constructor() {}
    createGauge(e, s) {
      return Od.NOOP_GAUGE_METRIC;
    }
    createHistogram(e, s) {
      return Od.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(e, s) {
      return Od.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(e, s) {
      return Od.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(e, s) {
      return Od.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(e, s) {
      return Od.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(e, s) {
      return Od.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(e, s) {}
    removeBatchObservableCallback(e) {}
  }
  Od.NoopMeter = Ir;
  class Ye {}
  Od.NoopMetric = Ye;
  class Pr extends Ye {
    add(e, s) {}
  }
  Od.NoopCounterMetric = Pr;
  class Mr extends Ye {
    add(e, s) {}
  }
  Od.NoopUpDownCounterMetric = Mr;
  class Dr extends Ye {
    record(e, s) {}
  }
  Od.NoopGaugeMetric = Dr;
  class xr extends Ye {
    record(e, s) {}
  }
  Od.NoopHistogramMetric = xr;
  class yt {
    addCallback(e) {}
    removeCallback(e) {}
  }
  Od.NoopObservableMetric = yt;
  class Lr extends yt {}
  Od.NoopObservableCounterMetric = Lr;
  class Ur extends yt {}
  Od.NoopObservableGaugeMetric = Ur;
  class Vr extends yt {}
  Od.NoopObservableUpDownCounterMetric = Vr;
  Od.NOOP_METER = new Ir;
  Od.NOOP_COUNTER_METRIC = new Pr;
  Od.NOOP_GAUGE_METRIC = new Dr;
  Od.NOOP_HISTOGRAM_METRIC = new xr;
  Od.NOOP_UP_DOWN_COUNTER_METRIC = new Mr;
  Od.NOOP_OBSERVABLE_COUNTER_METRIC = new Lr;
  Od.NOOP_OBSERVABLE_GAUGE_METRIC = new Ur;
  Od.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new Vr;
  function yz() {
    return Od.NOOP_METER;
  }
  Od.createNoopMeter = yz;
});

var qd = C(function(jd) {
  Object.defineProperty(jd, "__esModule", {
    value: !0
  });
  jd.ValueType = void 0;
  var Dz;
  (function(e) {
    e[e.INT = 0] = "INT", e[e.DOUBLE = 1] = "DOUBLE";
  })(Dz = jd.ValueType || (jd.ValueType = {}));
});

var Gr = C(function(Gd) {
  Object.defineProperty(Gd, "__esModule", {
    value: !0
  });
  Gd.defaultTextMapSetter = Gd.defaultTextMapGetter = void 0;
  Gd.defaultTextMapGetter = {
    get(e, s) {
      if (e == null) return;
      return e[s];
    },
    keys(e) {
      if (e == null) return [];
      return Object.keys(e);
    }
  };
  Gd.defaultTextMapSetter = {
    set(e, s, r) {
      if (e == null) return;
      e[s] = r;
    }
  };
});

var Wd = C(function(Fd) {
  Object.defineProperty(Fd, "__esModule", {
    value: !0
  });
  Fd.NoopContextManager = void 0;
  var Hd = At();
  class Kd {
    active() {
      return Hd.ROOT_CONTEXT;
    }
    with(e, s, r, ...n) {
      return s.call(r, ...n);
    }
    bind(e, s) {
      return s;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  }
  Fd.NoopContextManager = Kd;
});

var vt = C(function(Xd) {
  Object.defineProperty(Xd, "__esModule", {
    value: !0
  });
  Xd.ContextAPI = void 0;
  var $d = Wd(), We = ke(), us = Ie(), Br = "context", Lz = new $d.NoopContextManager;
  class Hr {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Hr;
      return this._instance;
    }
    setGlobalContextManager(e) {
      return We.registerGlobal(Br, e, us.DiagAPI.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with(e, s, r, ...n) {
      return this._getContextManager().with(e, s, r, ...n);
    }
    bind(e, s) {
      return this._getContextManager().bind(e, s);
    }
    _getContextManager() {
      return We.getGlobal(Br) || Lz;
    }
    disable() {
      this._getContextManager().disable(), We.unregisterGlobal(Br, us.DiagAPI.instance());
    }
  }
  Xd.ContextAPI = Hr;
});

var Yr = C(function(Jd) {
  Object.defineProperty(Jd, "__esModule", {
    value: !0
  });
  Jd.TraceFlags = void 0;
  var Uz;
  (function(e) {
    e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
  })(Uz = Jd.TraceFlags || (Jd.TraceFlags = {}));
});

var ps = C(function(ec) {
  Object.defineProperty(ec, "__esModule", {
    value: !0
  });
  ec.INVALID_SPAN_CONTEXT = ec.INVALID_TRACEID = ec.INVALID_SPANID = void 0;
  var Zd = Yr();
  ec.INVALID_SPANID = "0000000000000000";
  ec.INVALID_TRACEID = "00000000000000000000000000000000";
  ec.INVALID_SPAN_CONTEXT = {
    traceId: ec.INVALID_TRACEID,
    spanId: ec.INVALID_SPANID,
    traceFlags: Zd.TraceFlags.NONE
  };
});

var _s = C(function(ac) {
  Object.defineProperty(ac, "__esModule", {
    value: !0
  });
  ac.NonRecordingSpan = void 0;
  var nc = ps();
  class oc {
    constructor(e = nc.INVALID_SPAN_CONTEXT) {
      this._spanContext = e;
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(e, s) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    addEvent(e, s) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    end(e) {}
    isRecording() {
      return !1;
    }
    recordException(e, s) {}
  }
  ac.NonRecordingSpan = oc;
});

var Xr = C(function(uc) {
  Object.defineProperty(uc, "__esModule", {
    value: !0
  });
  uc.getSpanContext = uc.setSpanContext = uc.deleteSpan = uc.setSpan = uc.getActiveSpan = uc.getSpan = void 0;
  var lc = At(), dc = _s(), cc = vt(), Wr = lc.createContextKey("OpenTelemetry Context Key SPAN");
  function $r(e) {
    return e.getValue(Wr) || void 0;
  }
  uc.getSpan = $r;
  function Vz() {
    return $r(cc.ContextAPI.getInstance().active());
  }
  uc.getActiveSpan = Vz;
  function hc(e, s) {
    return e.setValue(Wr, s);
  }
  uc.setSpan = hc;
  function jz(e) {
    return e.deleteValue(Wr);
  }
  uc.deleteSpan = jz;
  function qz(e, s) {
    return hc(e, new dc.NonRecordingSpan(s));
  }
  uc.setSpanContext = qz;
  function Gz(e) {
    var s;
    return (s = $r(e)) === null || s === void 0 ? void 0 : s.spanContext();
  }
  uc.getSpanContext = Gz;
});

var gs = C(function(fc) {
  Object.defineProperty(fc, "__esModule", {
    value: !0
  });
  fc.wrapSpanContext = fc.isSpanContextValid = fc.isValidSpanId = fc.isValidTraceId = void 0;
  var ms = ps(), _c = _s(), Wz = /^([0-9a-f]{32})$/i, $z = /^[0-9a-f]{16}$/i;
  function mc(e) {
    return Wz.test(e) && e !== ms.INVALID_TRACEID;
  }
  fc.isValidTraceId = mc;
  function gc(e) {
    return $z.test(e) && e !== ms.INVALID_SPANID;
  }
  fc.isValidSpanId = gc;
  function Xz(e) {
    return mc(e.traceId) && gc(e.spanId);
  }
  fc.isSpanContextValid = Xz;
  function Qz(e) {
    return new _c.NonRecordingSpan(e);
  }
  fc.wrapSpanContext = Qz;
});

var Zr = C(function(wc) {
  Object.defineProperty(wc, "__esModule", {
    value: !0
  });
  wc.NoopTracer = void 0;
  var Ec = vt(), fs = Xr(), Xe = _s(), Sc = gs(), Qr = Ec.ContextAPI.getInstance();
  class Tc {
    startSpan(e, s, r = Qr.active()) {
      if (Boolean(s === null || s === void 0 ? void 0 : s.root)) return new Xe.NonRecordingSpan;
      let i = r && fs.getSpanContext(r);
      if (tk(i) && Sc.isSpanContextValid(i)) return new Xe.NonRecordingSpan(i); else return new Xe.NonRecordingSpan;
    }
    startActiveSpan(e, s, r, n) {
      let i, d, c;
      if (arguments.length < 2) return; else if (arguments.length === 2) c = s; else if (arguments.length === 3) i = s, 
      c = r; else i = s, d = r, c = n;
      let m = d !== null && d !== void 0 ? d : Qr.active(), h = this.startSpan(e, i, m), f = fs.setSpan(m, h);
      return Qr.with(f, c, void 0, h);
    }
  }
  wc.NoopTracer = Tc;
  function tk(e) {
    return typeof e === "object" && typeof e.spanId === "string" && typeof e.traceId === "string" && typeof e.traceFlags === "number";
  }
});

var en = C(function(Cc) {
  Object.defineProperty(Cc, "__esModule", {
    value: !0
  });
  Cc.ProxyTracer = void 0;
  var yc = Zr(), sk = new yc.NoopTracer;
  class vc {
    constructor(e, s, r, n) {
      this._provider = e, this.name = s, this.version = r, this.options = n;
    }
    startSpan(e, s, r) {
      return this._getTracer().startSpan(e, s, r);
    }
    startActiveSpan(e, s, r, n) {
      let i = this._getTracer();
      return Reflect.apply(i.startActiveSpan, i, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!e) return sk;
      return this._delegate = e, this._delegate;
    }
  }
  Cc.ProxyTracer = vc;
});

var Pc = C(function(Nc) {
  Object.defineProperty(Nc, "__esModule", {
    value: !0
  });
  Nc.NoopTracerProvider = void 0;
  var kc = Zr();
  class Oc {
    getTracer(e, s, r) {
      return new kc.NoopTracer;
    }
  }
  Nc.NoopTracerProvider = Oc;
});

var tn = C(function(Lc) {
  Object.defineProperty(Lc, "__esModule", {
    value: !0
  });
  Lc.ProxyTracerProvider = void 0;
  var Mc = en(), Dc = Pc(), rk = new Dc.NoopTracerProvider;
  class xc {
    getTracer(e, s, r) {
      var n;
      return (n = this.getDelegateTracer(e, s, r)) !== null && n !== void 0 ? n : new Mc.ProxyTracer(this, e, s, r);
    }
    getDelegate() {
      var e;
      return (e = this._delegate) !== null && e !== void 0 ? e : rk;
    }
    setDelegate(e) {
      this._delegate = e;
    }
    getDelegateTracer(e, s, r) {
      var n;
      return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, s, r);
    }
  }
  Lc.ProxyTracerProvider = xc;
});

var jc = C(function(Vc) {
  Object.defineProperty(Vc, "__esModule", {
    value: !0
  });
  Vc.SamplingDecision = void 0;
  var nk;
  (function(e) {
    e[e.NOT_RECORD = 0] = "NOT_RECORD", e[e.RECORD = 1] = "RECORD", e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
  })(nk = Vc.SamplingDecision || (Vc.SamplingDecision = {}));
});

var Gc = C(function(qc) {
  Object.defineProperty(qc, "__esModule", {
    value: !0
  });
  qc.SpanKind = void 0;
  var ok;
  (function(e) {
    e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", 
    e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
  })(ok = qc.SpanKind || (qc.SpanKind = {}));
});

var Hc = C(function(Bc) {
  Object.defineProperty(Bc, "__esModule", {
    value: !0
  });
  Bc.SpanStatusCode = void 0;
  var ak;
  (function(e) {
    e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
  })(ak = Bc.SpanStatusCode || (Bc.SpanStatusCode = {}));
});

var Yc = C(function(Kc) {
  Object.defineProperty(Kc, "__esModule", {
    value: !0
  });
  Kc.validateValue = Kc.validateKey = void 0;
  var on = "[_0-9a-z-*/]", ik = `[a-z]${on}{0,255}`, lk = `[a-z0-9]${on}{0,240}@[a-z]${on}{0,13}`, dk = new RegExp(`^(?:${ik}|${lk})$`), ck = /^[ -~]{0,255}[!-~]$/, hk = /,|=/;
  function uk(e) {
    return dk.test(e);
  }
  Kc.validateKey = uk;
  function pk(e) {
    return ck.test(e) && !hk.test(e);
  }
  Kc.validateValue = pk;
});

var Zc = C(function(Qc) {
  Object.defineProperty(Qc, "__esModule", {
    value: !0
  });
  Qc.TraceStateImpl = void 0;
  var bs = Yc(), Wc = 32, mk = 512, $c = ",", Xc = "=";
  class an {
    constructor(e) {
      if (this._internalState = new Map, e) this._parse(e);
    }
    set(e, s) {
      let r = this._clone();
      if (r._internalState.has(e)) r._internalState.delete(e);
      return r._internalState.set(e, s), r;
    }
    unset(e) {
      let s = this._clone();
      return s._internalState.delete(e), s;
    }
    get(e) {
      return this._internalState.get(e);
    }
    serialize() {
      return this._keys().reduce((e, s) => (e.push(s + Xc + this.get(s)), e), []).join($c);
    }
    _parse(e) {
      if (e.length > mk) return;
      if (this._internalState = e.split($c).reverse().reduce((s, r) => {
        let n = r.trim(), i = n.indexOf(Xc);
        if (i !== -1) {
          let d = n.slice(0, i), c = n.slice(i + 1, r.length);
          if (bs.validateKey(d) && bs.validateValue(c)) s.set(d, c);
        }
        return s;
      }, new Map), this._internalState.size > Wc) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Wc));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let e = new an;
      return e._internalState = new Map(this._internalState), e;
    }
  }
  Qc.TraceStateImpl = an;
});

var rh = C(function(th) {
  Object.defineProperty(th, "__esModule", {
    value: !0
  });
  th.createTraceState = void 0;
  var eh = Zc();
  function gk(e) {
    return new eh.TraceStateImpl(e);
  }
  th.createTraceState = gk;
});

var ih = C(function(oh) {
  Object.defineProperty(oh, "__esModule", {
    value: !0
  });
  oh.context = void 0;
  var nh = vt();
  oh.context = nh.ContextAPI.getInstance();
});

var hh = C(function(dh) {
  Object.defineProperty(dh, "__esModule", {
    value: !0
  });
  dh.diag = void 0;
  var lh = Ie();
  dh.diag = lh.DiagAPI.instance();
});

var gh = C(function(ph) {
  Object.defineProperty(ph, "__esModule", {
    value: !0
  });
  ph.NOOP_METER_PROVIDER = ph.NoopMeterProvider = void 0;
  var uh = jr();
  class ln {
    getMeter(e, s, r) {
      return uh.NOOP_METER;
    }
  }
  ph.NoopMeterProvider = ln;
  ph.NOOP_METER_PROVIDER = new ln;
});

var Sh = C(function(bh) {
  Object.defineProperty(bh, "__esModule", {
    value: !0
  });
  bh.MetricsAPI = void 0;
  var fh = gh(), Qe = ke(), Es = Ie(), dn = "metrics";
  class cn {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new cn;
      return this._instance;
    }
    setGlobalMeterProvider(e) {
      return Qe.registerGlobal(dn, e, Es.DiagAPI.instance());
    }
    getMeterProvider() {
      return Qe.getGlobal(dn) || fh.NOOP_METER_PROVIDER;
    }
    getMeter(e, s, r) {
      return this.getMeterProvider().getMeter(e, s, r);
    }
    disable() {
      Qe.unregisterGlobal(dn, Es.DiagAPI.instance());
    }
  }
  bh.MetricsAPI = cn;
});

var yh = C(function(wh) {
  Object.defineProperty(wh, "__esModule", {
    value: !0
  });
  wh.metrics = void 0;
  var Th = Sh();
  wh.metrics = Th.MetricsAPI.getInstance();
});

var zh = C(function(vh) {
  Object.defineProperty(vh, "__esModule", {
    value: !0
  });
  vh.NoopTextMapPropagator = void 0;
  class Rh {
    inject(e, s) {}
    extract(e, s) {
      return e;
    }
    fields() {
      return [];
    }
  }
  vh.NoopTextMapPropagator = Rh;
});

var Mh = C(function(Ih) {
  Object.defineProperty(Ih, "__esModule", {
    value: !0
  });
  Ih.deleteBaggage = Ih.setBaggage = Ih.getActiveBaggage = Ih.getBaggage = void 0;
  var kh = vt(), Oh = At(), hn = Oh.createContextKey("OpenTelemetry Baggage Key");
  function Nh(e) {
    return e.getValue(hn) || void 0;
  }
  Ih.getBaggage = Nh;
  function bk() {
    return Nh(kh.ContextAPI.getInstance().active());
  }
  Ih.getActiveBaggage = bk;
  function Ek(e, s) {
    return e.setValue(hn, s);
  }
  Ih.setBaggage = Ek;
  function Sk(e) {
    return e.deleteValue(hn);
  }
  Ih.deleteBaggage = Sk;
});

var Vh = C(function(Lh) {
  Object.defineProperty(Lh, "__esModule", {
    value: !0
  });
  Lh.PropagationAPI = void 0;
  var Je = ke(), Dh = zh(), Ss = Gr(), be = Mh(), xh = Or(), Ts = Ie(), un = "propagation", Rk = new Dh.NoopTextMapPropagator;
  class pn {
    constructor() {
      this.createBaggage = xh.createBaggage, this.getBaggage = be.getBaggage, this.getActiveBaggage = be.getActiveBaggage, 
      this.setBaggage = be.setBaggage, this.deleteBaggage = be.deleteBaggage;
    }
    static getInstance() {
      if (!this._instance) this._instance = new pn;
      return this._instance;
    }
    setGlobalPropagator(e) {
      return Je.registerGlobal(un, e, Ts.DiagAPI.instance());
    }
    inject(e, s, r = Ss.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject(e, s, r);
    }
    extract(e, s, r = Ss.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract(e, s, r);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      Je.unregisterGlobal(un, Ts.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return Je.getGlobal(un) || Rk;
    }
  }
  Lh.PropagationAPI = pn;
});

var Bh = C(function(qh) {
  Object.defineProperty(qh, "__esModule", {
    value: !0
  });
  qh.propagation = void 0;
  var jh = Vh();
  qh.propagation = jh.PropagationAPI.getInstance();
});

var Yh = C(function(Hh) {
  Object.defineProperty(Hh, "__esModule", {
    value: !0
  });
  Hh.TraceAPI = void 0;
  var Ze = ke(), ws = tn(), As = gs(), se = Xr(), ys = Ie(), _n = "trace";
  class mn {
    constructor() {
      this._proxyTracerProvider = new ws.ProxyTracerProvider, this.wrapSpanContext = As.wrapSpanContext, 
      this.isSpanContextValid = As.isSpanContextValid, this.deleteSpan = se.deleteSpan, 
      this.getSpan = se.getSpan, this.getActiveSpan = se.getActiveSpan, this.getSpanContext = se.getSpanContext, 
      this.setSpan = se.setSpan, this.setSpanContext = se.setSpanContext;
    }
    static getInstance() {
      if (!this._instance) this._instance = new mn;
      return this._instance;
    }
    setGlobalTracerProvider(e) {
      let s = Ze.registerGlobal(_n, this._proxyTracerProvider, ys.DiagAPI.instance());
      if (s) this._proxyTracerProvider.setDelegate(e);
      return s;
    }
    getTracerProvider() {
      return Ze.getGlobal(_n) || this._proxyTracerProvider;
    }
    getTracer(e, s) {
      return this.getTracerProvider().getTracer(e, s);
    }
    disable() {
      Ze.unregisterGlobal(_n, ys.DiagAPI.instance()), this._proxyTracerProvider = new ws.ProxyTracerProvider;
    }
  }
  Hh.TraceAPI = mn;
});

var Qh = C(function($h) {
  Object.defineProperty($h, "__esModule", {
    value: !0
  });
  $h.trace = void 0;
  var Wh = Yh();
  $h.trace = Wh.TraceAPI.getInstance();
});

var ja = C(function(N) {
  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.trace = N.propagation = N.metrics = N.diag = N.context = N.INVALID_SPAN_CONTEXT = N.INVALID_TRACEID = N.INVALID_SPANID = N.isValidSpanId = N.isValidTraceId = N.isSpanContextValid = N.createTraceState = N.TraceFlags = N.SpanStatusCode = N.SpanKind = N.SamplingDecision = N.ProxyTracerProvider = N.ProxyTracer = N.defaultTextMapSetter = N.defaultTextMapGetter = N.ValueType = N.createNoopMeter = N.DiagLogLevel = N.DiagConsoleLogger = N.ROOT_CONTEXT = N.createContextKey = N.baggageEntryMetadataFromString = void 0;
  var vk = Or();
  Object.defineProperty(N, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function() {
      return vk.baggageEntryMetadataFromString;
    }
  });
  var Jh = At();
  Object.defineProperty(N, "createContextKey", {
    enumerable: !0,
    get: function() {
      return Jh.createContextKey;
    }
  });
  Object.defineProperty(N, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function() {
      return Jh.ROOT_CONTEXT;
    }
  });
  var Ck = kd();
  Object.defineProperty(N, "DiagConsoleLogger", {
    enumerable: !0,
    get: function() {
      return Ck.DiagConsoleLogger;
    }
  });
  var zk = ds();
  Object.defineProperty(N, "DiagLogLevel", {
    enumerable: !0,
    get: function() {
      return zk.DiagLogLevel;
    }
  });
  var kk = jr();
  Object.defineProperty(N, "createNoopMeter", {
    enumerable: !0,
    get: function() {
      return kk.createNoopMeter;
    }
  });
  var Ok = qd();
  Object.defineProperty(N, "ValueType", {
    enumerable: !0,
    get: function() {
      return Ok.ValueType;
    }
  });
  var Zh = Gr();
  Object.defineProperty(N, "defaultTextMapGetter", {
    enumerable: !0,
    get: function() {
      return Zh.defaultTextMapGetter;
    }
  });
  Object.defineProperty(N, "defaultTextMapSetter", {
    enumerable: !0,
    get: function() {
      return Zh.defaultTextMapSetter;
    }
  });
  var Nk = en();
  Object.defineProperty(N, "ProxyTracer", {
    enumerable: !0,
    get: function() {
      return Nk.ProxyTracer;
    }
  });
  var Ik = tn();
  Object.defineProperty(N, "ProxyTracerProvider", {
    enumerable: !0,
    get: function() {
      return Ik.ProxyTracerProvider;
    }
  });
  var Pk = jc();
  Object.defineProperty(N, "SamplingDecision", {
    enumerable: !0,
    get: function() {
      return Pk.SamplingDecision;
    }
  });
  var Mk = Gc();
  Object.defineProperty(N, "SpanKind", {
    enumerable: !0,
    get: function() {
      return Mk.SpanKind;
    }
  });
  var Dk = Hc();
  Object.defineProperty(N, "SpanStatusCode", {
    enumerable: !0,
    get: function() {
      return Dk.SpanStatusCode;
    }
  });
  var xk = Yr();
  Object.defineProperty(N, "TraceFlags", {
    enumerable: !0,
    get: function() {
      return xk.TraceFlags;
    }
  });
  var Lk = rh();
  Object.defineProperty(N, "createTraceState", {
    enumerable: !0,
    get: function() {
      return Lk.createTraceState;
    }
  });
  var gn = gs();
  Object.defineProperty(N, "isSpanContextValid", {
    enumerable: !0,
    get: function() {
      return gn.isSpanContextValid;
    }
  });
  Object.defineProperty(N, "isValidTraceId", {
    enumerable: !0,
    get: function() {
      return gn.isValidTraceId;
    }
  });
  Object.defineProperty(N, "isValidSpanId", {
    enumerable: !0,
    get: function() {
      return gn.isValidSpanId;
    }
  });
  var fn = ps();
  Object.defineProperty(N, "INVALID_SPANID", {
    enumerable: !0,
    get: function() {
      return fn.INVALID_SPANID;
    }
  });
  Object.defineProperty(N, "INVALID_TRACEID", {
    enumerable: !0,
    get: function() {
      return fn.INVALID_TRACEID;
    }
  });
  Object.defineProperty(N, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function() {
      return fn.INVALID_SPAN_CONTEXT;
    }
  });
  var Rs = ih();
  Object.defineProperty(N, "context", {
    enumerable: !0,
    get: function() {
      return Rs.context;
    }
  });
  var vs = hh();
  Object.defineProperty(N, "diag", {
    enumerable: !0,
    get: function() {
      return vs.diag;
    }
  });
  var Cs = yh();
  Object.defineProperty(N, "metrics", {
    enumerable: !0,
    get: function() {
      return Cs.metrics;
    }
  });
  var zs = Bh();
  Object.defineProperty(N, "propagation", {
    enumerable: !0,
    get: function() {
      return zs.propagation;
    }
  });
  var ks = Qh();
  Object.defineProperty(N, "trace", {
    enumerable: !0,
    get: function() {
      return ks.trace;
    }
  });
  N.default = {
    context: Rs.context,
    diag: vs.diag,
    metrics: Cs.metrics,
    propagation: zs.propagation,
    trace: ks.trace
  };
});

var Ct = C(function(tu) {
  Object.defineProperty(tu, "__esModule", {
    value: !0
  });
  tu.isTracingSuppressed = tu.unsuppressTracing = tu.suppressTracing = void 0;
  var eu = ja(), bn = eu.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function jk(e) {
    return e.setValue(bn, !0);
  }
  tu.suppressTracing = jk;
  function qk(e) {
    return e.deleteValue(bn);
  }
  tu.unsuppressTracing = qk;
  function Gk(e) {
    return e.getValue(bn) === !0;
  }
  tu.isTracingSuppressed = Gk;
});

var Sn = C(function(ru) {
  Object.defineProperty(ru, "__esModule", {
    value: !0
  });
  ru.BAGGAGE_MAX_TOTAL_LENGTH = ru.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = ru.BAGGAGE_MAX_NAME_VALUE_PAIRS = ru.BAGGAGE_HEADER = ru.BAGGAGE_ITEMS_SEPARATOR = ru.BAGGAGE_PROPERTIES_SEPARATOR = ru.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
  ru.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  ru.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  ru.BAGGAGE_ITEMS_SEPARATOR = ",";
  ru.BAGGAGE_HEADER = "baggage";
  ru.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  ru.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  ru.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});

var Tn = C(function(iu) {
  Object.defineProperty(iu, "__esModule", {
    value: !0
  });
  iu.parseKeyPairsIntoRecord = iu.parsePairKeyValue = iu.getKeyPairs = iu.serializeKeyPairs = void 0;
  var ou = ja(), re = Sn();
  function Qk(e) {
    return e.reduce((s, r) => {
      let n = `${s}${s !== "" ? re.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return n.length > re.BAGGAGE_MAX_TOTAL_LENGTH ? s : n;
    }, "");
  }
  iu.serializeKeyPairs = Qk;
  function Jk(e) {
    return e.getAllEntries().map(([s, r]) => {
      let n = `${encodeURIComponent(s)}=${encodeURIComponent(r.value)}`;
      if (r.metadata !== void 0) n += re.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString();
      return n;
    });
  }
  iu.getKeyPairs = Jk;
  function au(e) {
    if (!e) return;
    let s = e.indexOf(re.BAGGAGE_PROPERTIES_SEPARATOR), r = s === -1 ? e : e.substring(0, s), n = r.indexOf(re.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (n <= 0) return;
    let i = r.substring(0, n).trim(), d = r.substring(n + 1).trim();
    if (!i || !d) return;
    let c, m;
    try {
      c = decodeURIComponent(i), m = decodeURIComponent(d);
    } catch {
      return;
    }
    let h;
    if (s !== -1 && s < e.length - 1) {
      let f = e.substring(s + 1);
      h = ou.baggageEntryMetadataFromString(f);
    }
    return {
      key: c,
      value: m,
      metadata: h
    };
  }
  iu.parsePairKeyValue = au;
  function Zk(e) {
    let s = {};
    if (typeof e === "string" && e.length > 0) e.split(re.BAGGAGE_ITEMS_SEPARATOR).forEach(r => {
      let n = au(r);
      if (n !== void 0 && n.value.length > 0) s[n.key] = n.value;
    });
    return s;
  }
  iu.parseKeyPairsIntoRecord = Zk;
});

var _u = C(function(hu) {
  Object.defineProperty(hu, "__esModule", {
    value: !0
  });
  hu.W3CBaggagePropagator = void 0;
  var et = ja(), du = Ct(), X = Sn(), tt = Tn();
  class cu {
    inject(e, s, r) {
      let n = et.propagation.getBaggage(e);
      if (!n || du.isTracingSuppressed(e)) return;
      let i = tt.getKeyPairs(n).filter(c => c.length <= X.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, X.BAGGAGE_MAX_NAME_VALUE_PAIRS), d = tt.serializeKeyPairs(i);
      if (d.length > 0) r.set(s, X.BAGGAGE_HEADER, d);
    }
    extract(e, s, r) {
      let n = r.get(s, X.BAGGAGE_HEADER), i = Array.isArray(n) ? n.join(X.BAGGAGE_ITEMS_SEPARATOR) : n;
      if (!i) return e;
      let d = {};
      if (i.length === 0) return e;
      if (i.split(X.BAGGAGE_ITEMS_SEPARATOR).forEach(m => {
        let h = tt.parsePairKeyValue(m);
        if (h) {
          let f = {
            value: h.value
          };
          if (h.metadata) f.metadata = h.metadata;
          d[h.key] = f;
        }
      }), Object.entries(d).length === 0) return e;
      return et.propagation.setBaggage(e, et.propagation.createBaggage(d));
    }
    fields() {
      return [ X.BAGGAGE_HEADER ];
    }
  }
  hu.W3CBaggagePropagator = cu;
});

var bu = C(function(gu) {
  Object.defineProperty(gu, "__esModule", {
    value: !0
  });
  gu.AnchoredClock = void 0;
  class mu {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, s) {
      this._monotonicClock = s, this._epochMillis = e.now(), this._performanceMillis = s.now();
    }
    now() {
      let e = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + e;
    }
  }
  gu.AnchoredClock = mu;
});

var yu = C(function(wu) {
  Object.defineProperty(wu, "__esModule", {
    value: !0
  });
  wu.isAttributeValue = wu.isAttributeKey = wu.sanitizeAttributes = void 0;
  var Os = ja();
  function rO(e) {
    let s = {};
    if (typeof e !== "object" || e == null) return s;
    for (let r in e) {
      if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
      if (!Eu(r)) {
        Os.diag.warn(`Invalid attribute key: ${r}`);
        continue;
      }
      let n = e[r];
      if (!Su(n)) {
        Os.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue;
      }
      if (Array.isArray(n)) s[r] = n.slice(); else s[r] = n;
    }
    return s;
  }
  wu.sanitizeAttributes = rO;
  function Eu(e) {
    return typeof e === "string" && e !== "";
  }
  wu.isAttributeKey = Eu;
  function Su(e) {
    if (e == null) return !0;
    if (Array.isArray(e)) return nO(e);
    return Tu(typeof e);
  }
  wu.isAttributeValue = Su;
  function nO(e) {
    let s;
    for (let r of e) {
      if (r == null) continue;
      let n = typeof r;
      if (n === s) continue;
      if (!s) {
        if (Tu(n)) {
          s = n;
          continue;
        }
        return !1;
      }
      return !1;
    }
    return !0;
  }
  function Tu(e) {
    switch (e) {
     case "number":
     case "boolean":
     case "string":
      return !0;
    }
    return !1;
  }
});

var An = C(function(vu) {
  Object.defineProperty(vu, "__esModule", {
    value: !0
  });
  vu.loggingErrorHandler = void 0;
  var Ru = ja();
  function iO() {
    return e => {
      Ru.diag.error(lO(e));
    };
  }
  vu.loggingErrorHandler = iO;
  function lO(e) {
    if (typeof e === "string") return e; else return JSON.stringify(dO(e));
  }
  function dO(e) {
    let s = {}, r = e;
    while (r !== null) Object.getOwnPropertyNames(r).forEach(n => {
      if (s[n]) return;
      let i = r[n];
      if (i) s[n] = String(i);
    }), r = Object.getPrototypeOf(r);
    return s;
  }
});

var Iu = C(function(Ou) {
  Object.defineProperty(Ou, "__esModule", {
    value: !0
  });
  Ou.globalErrorHandler = Ou.setGlobalErrorHandler = void 0;
  var zu = An(), ku = zu.loggingErrorHandler();
  function cO(e) {
    ku = e;
  }
  Ou.setGlobalErrorHandler = cO;
  function hO(e) {
    try {
      ku(e);
    } catch {}
  }
  Ou.globalErrorHandler = hO;
});

var xu = C(function(Mu) {
  Object.defineProperty(Mu, "__esModule", {
    value: !0
  });
  Mu.getStringListFromEnv = Mu.getBooleanFromEnv = Mu.getStringFromEnv = Mu.getNumberFromEnv = void 0;
  var Ns = ja(), Is = Ne("util");
  function pO(e) {
    let s = process.env[e];
    if (s == null || s.trim() === "") return;
    let r = Number(s);
    if (isNaN(r)) {
      Ns.diag.warn(`Unknown value ${Is.inspect(s)} for ${e}, expected a number, using defaults`);
      return;
    }
    return r;
  }
  Mu.getNumberFromEnv = pO;
  function Pu(e) {
    let s = process.env[e];
    if (s == null || s.trim() === "") return;
    return s;
  }
  Mu.getStringFromEnv = Pu;
  function _O(e) {
    let s = process.env[e]?.trim().toLowerCase();
    if (s == null || s === "") return !1;
    if (s === "true") return !0; else if (s === "false") return !1; else return Ns.diag.warn(`Unknown value ${Is.inspect(s)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`), 
    !1;
  }
  Mu.getBooleanFromEnv = _O;
  function mO(e) {
    return Pu(e)?.split(",").map(s => s.trim()).filter(s => s !== "");
  }
  Mu.getStringListFromEnv = mO;
});

var Vu = C(function(Lu) {
  Object.defineProperty(Lu, "__esModule", {
    value: !0
  });
  Lu._globalThis = void 0;
  Lu._globalThis = globalThis;
});

var Gu = C(function(ju) {
  Object.defineProperty(ju, "__esModule", {
    value: !0
  });
  ju.VERSION = void 0;
  ju.VERSION = "2.7.1";
});

var yn = C(function(Bu) {
  Object.defineProperty(Bu, "__esModule", {
    value: !0
  });
  Bu.createConstMap = void 0;
  function EO(e) {
    let s = {}, r = e.length;
    for (let n = 0; n < r; n++) {
      let i = e[n];
      if (i) s[String(i).toUpperCase().replace(/[-.]/g, "_")] = i;
    }
    return s;
  }
  Bu.createConstMap = EO;
});

var Xf = C(function(Bf) {
  Object.defineProperty(Bf, "__esModule", {
    value: !0
  });
  Bf.SEMATTRS_NET_HOST_CARRIER_ICC = Bf.SEMATTRS_NET_HOST_CARRIER_MNC = Bf.SEMATTRS_NET_HOST_CARRIER_MCC = Bf.SEMATTRS_NET_HOST_CARRIER_NAME = Bf.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = Bf.SEMATTRS_NET_HOST_CONNECTION_TYPE = Bf.SEMATTRS_NET_HOST_NAME = Bf.SEMATTRS_NET_HOST_PORT = Bf.SEMATTRS_NET_HOST_IP = Bf.SEMATTRS_NET_PEER_NAME = Bf.SEMATTRS_NET_PEER_PORT = Bf.SEMATTRS_NET_PEER_IP = Bf.SEMATTRS_NET_TRANSPORT = Bf.SEMATTRS_FAAS_INVOKED_REGION = Bf.SEMATTRS_FAAS_INVOKED_PROVIDER = Bf.SEMATTRS_FAAS_INVOKED_NAME = Bf.SEMATTRS_FAAS_COLDSTART = Bf.SEMATTRS_FAAS_CRON = Bf.SEMATTRS_FAAS_TIME = Bf.SEMATTRS_FAAS_DOCUMENT_NAME = Bf.SEMATTRS_FAAS_DOCUMENT_TIME = Bf.SEMATTRS_FAAS_DOCUMENT_OPERATION = Bf.SEMATTRS_FAAS_DOCUMENT_COLLECTION = Bf.SEMATTRS_FAAS_EXECUTION = Bf.SEMATTRS_FAAS_TRIGGER = Bf.SEMATTRS_EXCEPTION_ESCAPED = Bf.SEMATTRS_EXCEPTION_STACKTRACE = Bf.SEMATTRS_EXCEPTION_MESSAGE = Bf.SEMATTRS_EXCEPTION_TYPE = Bf.SEMATTRS_DB_SQL_TABLE = Bf.SEMATTRS_DB_MONGODB_COLLECTION = Bf.SEMATTRS_DB_REDIS_DATABASE_INDEX = Bf.SEMATTRS_DB_HBASE_NAMESPACE = Bf.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = Bf.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = Bf.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = Bf.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = Bf.SEMATTRS_DB_CASSANDRA_TABLE = Bf.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = Bf.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = Bf.SEMATTRS_DB_CASSANDRA_KEYSPACE = Bf.SEMATTRS_DB_MSSQL_INSTANCE_NAME = Bf.SEMATTRS_DB_OPERATION = Bf.SEMATTRS_DB_STATEMENT = Bf.SEMATTRS_DB_NAME = Bf.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = Bf.SEMATTRS_DB_USER = Bf.SEMATTRS_DB_CONNECTION_STRING = Bf.SEMATTRS_DB_SYSTEM = Bf.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = void 0;
  Bf.SEMATTRS_MESSAGING_DESTINATION_KIND = Bf.SEMATTRS_MESSAGING_DESTINATION = Bf.SEMATTRS_MESSAGING_SYSTEM = Bf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = Bf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = Bf.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = Bf.SEMATTRS_AWS_DYNAMODB_COUNT = Bf.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = Bf.SEMATTRS_AWS_DYNAMODB_SEGMENT = Bf.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = Bf.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = Bf.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = Bf.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = Bf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = Bf.SEMATTRS_AWS_DYNAMODB_SELECT = Bf.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = Bf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = Bf.SEMATTRS_AWS_DYNAMODB_LIMIT = Bf.SEMATTRS_AWS_DYNAMODB_PROJECTION = Bf.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Bf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = Bf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Bf.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = Bf.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = Bf.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Bf.SEMATTRS_HTTP_CLIENT_IP = Bf.SEMATTRS_HTTP_ROUTE = Bf.SEMATTRS_HTTP_SERVER_NAME = Bf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Bf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Bf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = Bf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = Bf.SEMATTRS_HTTP_USER_AGENT = Bf.SEMATTRS_HTTP_FLAVOR = Bf.SEMATTRS_HTTP_STATUS_CODE = Bf.SEMATTRS_HTTP_SCHEME = Bf.SEMATTRS_HTTP_HOST = Bf.SEMATTRS_HTTP_TARGET = Bf.SEMATTRS_HTTP_URL = Bf.SEMATTRS_HTTP_METHOD = Bf.SEMATTRS_CODE_LINENO = Bf.SEMATTRS_CODE_FILEPATH = Bf.SEMATTRS_CODE_NAMESPACE = Bf.SEMATTRS_CODE_FUNCTION = Bf.SEMATTRS_THREAD_NAME = Bf.SEMATTRS_THREAD_ID = Bf.SEMATTRS_ENDUSER_SCOPE = Bf.SEMATTRS_ENDUSER_ROLE = Bf.SEMATTRS_ENDUSER_ID = Bf.SEMATTRS_PEER_SERVICE = void 0;
  Bf.DBSYSTEMVALUES_FILEMAKER = Bf.DBSYSTEMVALUES_DERBY = Bf.DBSYSTEMVALUES_FIREBIRD = Bf.DBSYSTEMVALUES_ADABAS = Bf.DBSYSTEMVALUES_CACHE = Bf.DBSYSTEMVALUES_EDB = Bf.DBSYSTEMVALUES_FIRSTSQL = Bf.DBSYSTEMVALUES_INGRES = Bf.DBSYSTEMVALUES_HANADB = Bf.DBSYSTEMVALUES_MAXDB = Bf.DBSYSTEMVALUES_PROGRESS = Bf.DBSYSTEMVALUES_HSQLDB = Bf.DBSYSTEMVALUES_CLOUDSCAPE = Bf.DBSYSTEMVALUES_HIVE = Bf.DBSYSTEMVALUES_REDSHIFT = Bf.DBSYSTEMVALUES_POSTGRESQL = Bf.DBSYSTEMVALUES_DB2 = Bf.DBSYSTEMVALUES_ORACLE = Bf.DBSYSTEMVALUES_MYSQL = Bf.DBSYSTEMVALUES_MSSQL = Bf.DBSYSTEMVALUES_OTHER_SQL = Bf.SemanticAttributes = Bf.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = Bf.SEMATTRS_MESSAGE_COMPRESSED_SIZE = Bf.SEMATTRS_MESSAGE_ID = Bf.SEMATTRS_MESSAGE_TYPE = Bf.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = Bf.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Bf.SEMATTRS_RPC_JSONRPC_REQUEST_ID = Bf.SEMATTRS_RPC_JSONRPC_VERSION = Bf.SEMATTRS_RPC_GRPC_STATUS_CODE = Bf.SEMATTRS_RPC_METHOD = Bf.SEMATTRS_RPC_SERVICE = Bf.SEMATTRS_RPC_SYSTEM = Bf.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = Bf.SEMATTRS_MESSAGING_KAFKA_PARTITION = Bf.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Bf.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Bf.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = Bf.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Bf.SEMATTRS_MESSAGING_CONSUMER_ID = Bf.SEMATTRS_MESSAGING_OPERATION = Bf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = Bf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = Bf.SEMATTRS_MESSAGING_CONVERSATION_ID = Bf.SEMATTRS_MESSAGING_MESSAGE_ID = Bf.SEMATTRS_MESSAGING_URL = Bf.SEMATTRS_MESSAGING_PROTOCOL_VERSION = Bf.SEMATTRS_MESSAGING_PROTOCOL = Bf.SEMATTRS_MESSAGING_TEMP_DESTINATION = void 0;
  Bf.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = Bf.FaasDocumentOperationValues = Bf.FAASDOCUMENTOPERATIONVALUES_DELETE = Bf.FAASDOCUMENTOPERATIONVALUES_EDIT = Bf.FAASDOCUMENTOPERATIONVALUES_INSERT = Bf.FaasTriggerValues = Bf.FAASTRIGGERVALUES_OTHER = Bf.FAASTRIGGERVALUES_TIMER = Bf.FAASTRIGGERVALUES_PUBSUB = Bf.FAASTRIGGERVALUES_HTTP = Bf.FAASTRIGGERVALUES_DATASOURCE = Bf.DbCassandraConsistencyLevelValues = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = Bf.DbSystemValues = Bf.DBSYSTEMVALUES_COCKROACHDB = Bf.DBSYSTEMVALUES_MEMCACHED = Bf.DBSYSTEMVALUES_ELASTICSEARCH = Bf.DBSYSTEMVALUES_GEODE = Bf.DBSYSTEMVALUES_NEO4J = Bf.DBSYSTEMVALUES_DYNAMODB = Bf.DBSYSTEMVALUES_COSMOSDB = Bf.DBSYSTEMVALUES_COUCHDB = Bf.DBSYSTEMVALUES_COUCHBASE = Bf.DBSYSTEMVALUES_REDIS = Bf.DBSYSTEMVALUES_MONGODB = Bf.DBSYSTEMVALUES_HBASE = Bf.DBSYSTEMVALUES_CASSANDRA = Bf.DBSYSTEMVALUES_COLDFUSION = Bf.DBSYSTEMVALUES_H2 = Bf.DBSYSTEMVALUES_VERTICA = Bf.DBSYSTEMVALUES_TERADATA = Bf.DBSYSTEMVALUES_SYBASE = Bf.DBSYSTEMVALUES_SQLITE = Bf.DBSYSTEMVALUES_POINTBASE = Bf.DBSYSTEMVALUES_PERVASIVE = Bf.DBSYSTEMVALUES_NETEZZA = Bf.DBSYSTEMVALUES_MARIADB = Bf.DBSYSTEMVALUES_INTERBASE = Bf.DBSYSTEMVALUES_INSTANTDB = Bf.DBSYSTEMVALUES_INFORMIX = void 0;
  Bf.MESSAGINGOPERATIONVALUES_RECEIVE = Bf.MessagingDestinationKindValues = Bf.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Bf.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Bf.HttpFlavorValues = Bf.HTTPFLAVORVALUES_QUIC = Bf.HTTPFLAVORVALUES_SPDY = Bf.HTTPFLAVORVALUES_HTTP_2_0 = Bf.HTTPFLAVORVALUES_HTTP_1_1 = Bf.HTTPFLAVORVALUES_HTTP_1_0 = Bf.NetHostConnectionSubtypeValues = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = Bf.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = Bf.NetHostConnectionTypeValues = Bf.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = Bf.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = Bf.NETHOSTCONNECTIONTYPEVALUES_CELL = Bf.NETHOSTCONNECTIONTYPEVALUES_WIRED = Bf.NETHOSTCONNECTIONTYPEVALUES_WIFI = Bf.NetTransportValues = Bf.NETTRANSPORTVALUES_OTHER = Bf.NETTRANSPORTVALUES_INPROC = Bf.NETTRANSPORTVALUES_PIPE = Bf.NETTRANSPORTVALUES_UNIX = Bf.NETTRANSPORTVALUES_IP = Bf.NETTRANSPORTVALUES_IP_UDP = Bf.NETTRANSPORTVALUES_IP_TCP = Bf.FaasInvokedProviderValues = Bf.FAASINVOKEDPROVIDERVALUES_GCP = Bf.FAASINVOKEDPROVIDERVALUES_AZURE = Bf.FAASINVOKEDPROVIDERVALUES_AWS = void 0;
  Bf.MessageTypeValues = Bf.MESSAGETYPEVALUES_RECEIVED = Bf.MESSAGETYPEVALUES_SENT = Bf.RpcGrpcStatusCodeValues = Bf.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = Bf.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = Bf.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = Bf.RPCGRPCSTATUSCODEVALUES_INTERNAL = Bf.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = Bf.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = Bf.RPCGRPCSTATUSCODEVALUES_ABORTED = Bf.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = Bf.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = Bf.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = Bf.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = Bf.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Bf.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Bf.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Bf.RPCGRPCSTATUSCODEVALUES_UNKNOWN = Bf.RPCGRPCSTATUSCODEVALUES_CANCELLED = Bf.RPCGRPCSTATUSCODEVALUES_OK = Bf.MessagingOperationValues = Bf.MESSAGINGOPERATIONVALUES_PROCESS = void 0;
  var D = yn(), Ku = "aws.lambda.invoked_arn", Fu = "db.system", Wu = "db.connection_string", $u = "db.user", Xu = "db.jdbc.driver_classname", Qu = "db.name", Ju = "db.statement", Zu = "db.operation", ep = "db.mssql.instance_name", tp = "db.cassandra.keyspace", sp = "db.cassandra.page_size", rp = "db.cassandra.consistency_level", np = "db.cassandra.table", op = "db.cassandra.idempotence", ap = "db.cassandra.speculative_execution_count", ip = "db.cassandra.coordinator.id", dp = "db.cassandra.coordinator.dc", cp = "db.hbase.namespace", hp = "db.redis.database_index", up = "db.mongodb.collection", pp = "db.sql.table", _p = "exception.type", mp = "exception.message", gp = "exception.stacktrace", fp = "exception.escaped", bp = "faas.trigger", Ep = "faas.execution", Sp = "faas.document.collection", Tp = "faas.document.operation", wp = "faas.document.time", yp = "faas.document.name", Rp = "faas.time", vp = "faas.cron", zp = "faas.coldstart", kp = "faas.invoked_name", Op = "faas.invoked_provider", Np = "faas.invoked_region", Ip = "net.transport", Pp = "net.peer.ip", Mp = "net.peer.port", Dp = "net.peer.name", xp = "net.host.ip", Lp = "net.host.port", Up = "net.host.name", Vp = "net.host.connection.type", jp = "net.host.connection.subtype", qp = "net.host.carrier.name", Gp = "net.host.carrier.mcc", Bp = "net.host.carrier.mnc", Hp = "net.host.carrier.icc", Kp = "peer.service", Fp = "enduser.id", Yp = "enduser.role", Wp = "enduser.scope", $p = "thread.id", Xp = "thread.name", Qp = "code.function", Jp = "code.namespace", Zp = "code.filepath", e_ = "code.lineno", t_ = "http.method", s_ = "http.url", r_ = "http.target", n_ = "http.host", o_ = "http.scheme", a_ = "http.status_code", i_ = "http.flavor", l_ = "http.user_agent", d_ = "http.request_content_length", c_ = "http.request_content_length_uncompressed", h_ = "http.response_content_length", u_ = "http.response_content_length_uncompressed", p_ = "http.server_name", __ = "http.route", m_ = "http.client_ip", g_ = "aws.dynamodb.table_names", f_ = "aws.dynamodb.consumed_capacity", b_ = "aws.dynamodb.item_collection_metrics", E_ = "aws.dynamodb.provisioned_read_capacity", S_ = "aws.dynamodb.provisioned_write_capacity", T_ = "aws.dynamodb.consistent_read", w_ = "aws.dynamodb.projection", A_ = "aws.dynamodb.limit", y_ = "aws.dynamodb.attributes_to_get", R_ = "aws.dynamodb.index_name", v_ = "aws.dynamodb.select", C_ = "aws.dynamodb.global_secondary_indexes", z_ = "aws.dynamodb.local_secondary_indexes", k_ = "aws.dynamodb.exclusive_start_table", O_ = "aws.dynamodb.table_count", N_ = "aws.dynamodb.scan_forward", I_ = "aws.dynamodb.segment", P_ = "aws.dynamodb.total_segments", M_ = "aws.dynamodb.count", D_ = "aws.dynamodb.scanned_count", x_ = "aws.dynamodb.attribute_definitions", L_ = "aws.dynamodb.global_secondary_index_updates", U_ = "messaging.system", V_ = "messaging.destination", j_ = "messaging.destination_kind", q_ = "messaging.temp_destination", B_ = "messaging.protocol", H_ = "messaging.protocol_version", K_ = "messaging.url", F_ = "messaging.message_id", Y_ = "messaging.conversation_id", W_ = "messaging.message_payload_size_bytes", $_ = "messaging.message_payload_compressed_size_bytes", X_ = "messaging.operation", Q_ = "messaging.consumer_id", J_ = "messaging.rabbitmq.routing_key", Z_ = "messaging.kafka.message_key", em = "messaging.kafka.consumer_group", tm = "messaging.kafka.client_id", sm = "messaging.kafka.partition", rm = "messaging.kafka.tombstone", nm = "rpc.system", om = "rpc.service", am = "rpc.method", im = "rpc.grpc.status_code", lm = "rpc.jsonrpc.version", dm = "rpc.jsonrpc.request_id", cm = "rpc.jsonrpc.error_code", hm = "rpc.jsonrpc.error_message", um = "message.type", pm = "message.id", _m = "message.compressed_size", mm = "message.uncompressed_size";
  Bf.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = Ku;
  Bf.SEMATTRS_DB_SYSTEM = Fu;
  Bf.SEMATTRS_DB_CONNECTION_STRING = Wu;
  Bf.SEMATTRS_DB_USER = $u;
  Bf.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = Xu;
  Bf.SEMATTRS_DB_NAME = Qu;
  Bf.SEMATTRS_DB_STATEMENT = Ju;
  Bf.SEMATTRS_DB_OPERATION = Zu;
  Bf.SEMATTRS_DB_MSSQL_INSTANCE_NAME = ep;
  Bf.SEMATTRS_DB_CASSANDRA_KEYSPACE = tp;
  Bf.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = sp;
  Bf.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = rp;
  Bf.SEMATTRS_DB_CASSANDRA_TABLE = np;
  Bf.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = op;
  Bf.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = ap;
  Bf.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = ip;
  Bf.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = dp;
  Bf.SEMATTRS_DB_HBASE_NAMESPACE = cp;
  Bf.SEMATTRS_DB_REDIS_DATABASE_INDEX = hp;
  Bf.SEMATTRS_DB_MONGODB_COLLECTION = up;
  Bf.SEMATTRS_DB_SQL_TABLE = pp;
  Bf.SEMATTRS_EXCEPTION_TYPE = _p;
  Bf.SEMATTRS_EXCEPTION_MESSAGE = mp;
  Bf.SEMATTRS_EXCEPTION_STACKTRACE = gp;
  Bf.SEMATTRS_EXCEPTION_ESCAPED = fp;
  Bf.SEMATTRS_FAAS_TRIGGER = bp;
  Bf.SEMATTRS_FAAS_EXECUTION = Ep;
  Bf.SEMATTRS_FAAS_DOCUMENT_COLLECTION = Sp;
  Bf.SEMATTRS_FAAS_DOCUMENT_OPERATION = Tp;
  Bf.SEMATTRS_FAAS_DOCUMENT_TIME = wp;
  Bf.SEMATTRS_FAAS_DOCUMENT_NAME = yp;
  Bf.SEMATTRS_FAAS_TIME = Rp;
  Bf.SEMATTRS_FAAS_CRON = vp;
  Bf.SEMATTRS_FAAS_COLDSTART = zp;
  Bf.SEMATTRS_FAAS_INVOKED_NAME = kp;
  Bf.SEMATTRS_FAAS_INVOKED_PROVIDER = Op;
  Bf.SEMATTRS_FAAS_INVOKED_REGION = Np;
  Bf.SEMATTRS_NET_TRANSPORT = Ip;
  Bf.SEMATTRS_NET_PEER_IP = Pp;
  Bf.SEMATTRS_NET_PEER_PORT = Mp;
  Bf.SEMATTRS_NET_PEER_NAME = Dp;
  Bf.SEMATTRS_NET_HOST_IP = xp;
  Bf.SEMATTRS_NET_HOST_PORT = Lp;
  Bf.SEMATTRS_NET_HOST_NAME = Up;
  Bf.SEMATTRS_NET_HOST_CONNECTION_TYPE = Vp;
  Bf.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = jp;
  Bf.SEMATTRS_NET_HOST_CARRIER_NAME = qp;
  Bf.SEMATTRS_NET_HOST_CARRIER_MCC = Gp;
  Bf.SEMATTRS_NET_HOST_CARRIER_MNC = Bp;
  Bf.SEMATTRS_NET_HOST_CARRIER_ICC = Hp;
  Bf.SEMATTRS_PEER_SERVICE = Kp;
  Bf.SEMATTRS_ENDUSER_ID = Fp;
  Bf.SEMATTRS_ENDUSER_ROLE = Yp;
  Bf.SEMATTRS_ENDUSER_SCOPE = Wp;
  Bf.SEMATTRS_THREAD_ID = $p;
  Bf.SEMATTRS_THREAD_NAME = Xp;
  Bf.SEMATTRS_CODE_FUNCTION = Qp;
  Bf.SEMATTRS_CODE_NAMESPACE = Jp;
  Bf.SEMATTRS_CODE_FILEPATH = Zp;
  Bf.SEMATTRS_CODE_LINENO = e_;
  Bf.SEMATTRS_HTTP_METHOD = t_;
  Bf.SEMATTRS_HTTP_URL = s_;
  Bf.SEMATTRS_HTTP_TARGET = r_;
  Bf.SEMATTRS_HTTP_HOST = n_;
  Bf.SEMATTRS_HTTP_SCHEME = o_;
  Bf.SEMATTRS_HTTP_STATUS_CODE = a_;
  Bf.SEMATTRS_HTTP_FLAVOR = i_;
  Bf.SEMATTRS_HTTP_USER_AGENT = l_;
  Bf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = d_;
  Bf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = c_;
  Bf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = h_;
  Bf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = u_;
  Bf.SEMATTRS_HTTP_SERVER_NAME = p_;
  Bf.SEMATTRS_HTTP_ROUTE = __;
  Bf.SEMATTRS_HTTP_CLIENT_IP = m_;
  Bf.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = g_;
  Bf.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = f_;
  Bf.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = b_;
  Bf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = E_;
  Bf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = S_;
  Bf.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = T_;
  Bf.SEMATTRS_AWS_DYNAMODB_PROJECTION = w_;
  Bf.SEMATTRS_AWS_DYNAMODB_LIMIT = A_;
  Bf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = y_;
  Bf.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = R_;
  Bf.SEMATTRS_AWS_DYNAMODB_SELECT = v_;
  Bf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = C_;
  Bf.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = z_;
  Bf.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = k_;
  Bf.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = O_;
  Bf.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = N_;
  Bf.SEMATTRS_AWS_DYNAMODB_SEGMENT = I_;
  Bf.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = P_;
  Bf.SEMATTRS_AWS_DYNAMODB_COUNT = M_;
  Bf.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = D_;
  Bf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = x_;
  Bf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = L_;
  Bf.SEMATTRS_MESSAGING_SYSTEM = U_;
  Bf.SEMATTRS_MESSAGING_DESTINATION = V_;
  Bf.SEMATTRS_MESSAGING_DESTINATION_KIND = j_;
  Bf.SEMATTRS_MESSAGING_TEMP_DESTINATION = q_;
  Bf.SEMATTRS_MESSAGING_PROTOCOL = B_;
  Bf.SEMATTRS_MESSAGING_PROTOCOL_VERSION = H_;
  Bf.SEMATTRS_MESSAGING_URL = K_;
  Bf.SEMATTRS_MESSAGING_MESSAGE_ID = F_;
  Bf.SEMATTRS_MESSAGING_CONVERSATION_ID = Y_;
  Bf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = W_;
  Bf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = $_;
  Bf.SEMATTRS_MESSAGING_OPERATION = X_;
  Bf.SEMATTRS_MESSAGING_CONSUMER_ID = Q_;
  Bf.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = J_;
  Bf.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = Z_;
  Bf.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = em;
  Bf.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = tm;
  Bf.SEMATTRS_MESSAGING_KAFKA_PARTITION = sm;
  Bf.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = rm;
  Bf.SEMATTRS_RPC_SYSTEM = nm;
  Bf.SEMATTRS_RPC_SERVICE = om;
  Bf.SEMATTRS_RPC_METHOD = am;
  Bf.SEMATTRS_RPC_GRPC_STATUS_CODE = im;
  Bf.SEMATTRS_RPC_JSONRPC_VERSION = lm;
  Bf.SEMATTRS_RPC_JSONRPC_REQUEST_ID = dm;
  Bf.SEMATTRS_RPC_JSONRPC_ERROR_CODE = cm;
  Bf.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = hm;
  Bf.SEMATTRS_MESSAGE_TYPE = um;
  Bf.SEMATTRS_MESSAGE_ID = pm;
  Bf.SEMATTRS_MESSAGE_COMPRESSED_SIZE = _m;
  Bf.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = mm;
  Bf.SemanticAttributes = D.createConstMap([ Ku, Fu, Wu, $u, Xu, Qu, Ju, Zu, ep, tp, sp, rp, np, op, ap, ip, dp, cp, hp, up, pp, _p, mp, gp, fp, bp, Ep, Sp, Tp, wp, yp, Rp, vp, zp, kp, Op, Np, Ip, Pp, Mp, Dp, xp, Lp, Up, Vp, jp, qp, Gp, Bp, Hp, Kp, Fp, Yp, Wp, $p, Xp, Qp, Jp, Zp, e_, t_, s_, r_, n_, o_, a_, i_, l_, d_, c_, h_, u_, p_, __, m_, g_, f_, b_, E_, S_, T_, w_, A_, y_, R_, v_, C_, z_, k_, O_, N_, I_, P_, M_, D_, x_, L_, U_, V_, j_, q_, B_, H_, K_, F_, Y_, W_, $_, X_, Q_, J_, Z_, em, tm, sm, rm, nm, om, am, im, lm, dm, cm, hm, um, pm, _m, mm ]);
  var gm = "other_sql", fm = "mssql", bm = "mysql", Em = "oracle", Sm = "db2", Tm = "postgresql", wm = "redshift", Am = "hive", ym = "cloudscape", Rm = "hsqldb", vm = "progress", Cm = "maxdb", zm = "hanadb", km = "ingres", Om = "firstsql", Nm = "edb", Im = "cache", Pm = "adabas", Mm = "firebird", Dm = "derby", xm = "filemaker", Lm = "informix", Um = "instantdb", Vm = "interbase", jm = "mariadb", qm = "netezza", Gm = "pervasive", Bm = "pointbase", Hm = "sqlite", Km = "sybase", Fm = "teradata", Ym = "vertica", Wm = "h2", $m = "coldfusion", Xm = "cassandra", Qm = "hbase", Jm = "mongodb", Zm = "redis", eg = "couchbase", tg = "couchdb", sg = "cosmosdb", rg = "dynamodb", ng = "neo4j", og = "geode", ag = "elasticsearch", ig = "memcached", lg = "cockroachdb";
  Bf.DBSYSTEMVALUES_OTHER_SQL = gm;
  Bf.DBSYSTEMVALUES_MSSQL = fm;
  Bf.DBSYSTEMVALUES_MYSQL = bm;
  Bf.DBSYSTEMVALUES_ORACLE = Em;
  Bf.DBSYSTEMVALUES_DB2 = Sm;
  Bf.DBSYSTEMVALUES_POSTGRESQL = Tm;
  Bf.DBSYSTEMVALUES_REDSHIFT = wm;
  Bf.DBSYSTEMVALUES_HIVE = Am;
  Bf.DBSYSTEMVALUES_CLOUDSCAPE = ym;
  Bf.DBSYSTEMVALUES_HSQLDB = Rm;
  Bf.DBSYSTEMVALUES_PROGRESS = vm;
  Bf.DBSYSTEMVALUES_MAXDB = Cm;
  Bf.DBSYSTEMVALUES_HANADB = zm;
  Bf.DBSYSTEMVALUES_INGRES = km;
  Bf.DBSYSTEMVALUES_FIRSTSQL = Om;
  Bf.DBSYSTEMVALUES_EDB = Nm;
  Bf.DBSYSTEMVALUES_CACHE = Im;
  Bf.DBSYSTEMVALUES_ADABAS = Pm;
  Bf.DBSYSTEMVALUES_FIREBIRD = Mm;
  Bf.DBSYSTEMVALUES_DERBY = Dm;
  Bf.DBSYSTEMVALUES_FILEMAKER = xm;
  Bf.DBSYSTEMVALUES_INFORMIX = Lm;
  Bf.DBSYSTEMVALUES_INSTANTDB = Um;
  Bf.DBSYSTEMVALUES_INTERBASE = Vm;
  Bf.DBSYSTEMVALUES_MARIADB = jm;
  Bf.DBSYSTEMVALUES_NETEZZA = qm;
  Bf.DBSYSTEMVALUES_PERVASIVE = Gm;
  Bf.DBSYSTEMVALUES_POINTBASE = Bm;
  Bf.DBSYSTEMVALUES_SQLITE = Hm;
  Bf.DBSYSTEMVALUES_SYBASE = Km;
  Bf.DBSYSTEMVALUES_TERADATA = Fm;
  Bf.DBSYSTEMVALUES_VERTICA = Ym;
  Bf.DBSYSTEMVALUES_H2 = Wm;
  Bf.DBSYSTEMVALUES_COLDFUSION = $m;
  Bf.DBSYSTEMVALUES_CASSANDRA = Xm;
  Bf.DBSYSTEMVALUES_HBASE = Qm;
  Bf.DBSYSTEMVALUES_MONGODB = Jm;
  Bf.DBSYSTEMVALUES_REDIS = Zm;
  Bf.DBSYSTEMVALUES_COUCHBASE = eg;
  Bf.DBSYSTEMVALUES_COUCHDB = tg;
  Bf.DBSYSTEMVALUES_COSMOSDB = sg;
  Bf.DBSYSTEMVALUES_DYNAMODB = rg;
  Bf.DBSYSTEMVALUES_NEO4J = ng;
  Bf.DBSYSTEMVALUES_GEODE = og;
  Bf.DBSYSTEMVALUES_ELASTICSEARCH = ag;
  Bf.DBSYSTEMVALUES_MEMCACHED = ig;
  Bf.DBSYSTEMVALUES_COCKROACHDB = lg;
  Bf.DbSystemValues = D.createConstMap([ gm, fm, bm, Em, Sm, Tm, wm, Am, ym, Rm, vm, Cm, zm, km, Om, Nm, Im, Pm, Mm, Dm, xm, Lm, Um, Vm, jm, qm, Gm, Bm, Hm, Km, Fm, Ym, Wm, $m, Xm, Qm, Jm, Zm, eg, tg, sg, rg, ng, og, ag, ig, lg ]);
  var dg = "all", cg = "each_quorum", hg = "quorum", ug = "local_quorum", pg = "one", _g = "two", mg = "three", gg = "local_one", fg = "any", bg = "serial", Eg = "local_serial";
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = dg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = cg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = hg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = ug;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = pg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = _g;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = mg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = gg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = fg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = bg;
  Bf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Eg;
  Bf.DbCassandraConsistencyLevelValues = D.createConstMap([ dg, cg, hg, ug, pg, _g, mg, gg, fg, bg, Eg ]);
  var Sg = "datasource", Tg = "http", wg = "pubsub", Ag = "timer", yg = "other";
  Bf.FAASTRIGGERVALUES_DATASOURCE = Sg;
  Bf.FAASTRIGGERVALUES_HTTP = Tg;
  Bf.FAASTRIGGERVALUES_PUBSUB = wg;
  Bf.FAASTRIGGERVALUES_TIMER = Ag;
  Bf.FAASTRIGGERVALUES_OTHER = yg;
  Bf.FaasTriggerValues = D.createConstMap([ Sg, Tg, wg, Ag, yg ]);
  var Rg = "insert", vg = "edit", Cg = "delete";
  Bf.FAASDOCUMENTOPERATIONVALUES_INSERT = Rg;
  Bf.FAASDOCUMENTOPERATIONVALUES_EDIT = vg;
  Bf.FAASDOCUMENTOPERATIONVALUES_DELETE = Cg;
  Bf.FaasDocumentOperationValues = D.createConstMap([ Rg, vg, Cg ]);
  var zg = "alibaba_cloud", kg = "aws", Og = "azure", Ng = "gcp";
  Bf.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = zg;
  Bf.FAASINVOKEDPROVIDERVALUES_AWS = kg;
  Bf.FAASINVOKEDPROVIDERVALUES_AZURE = Og;
  Bf.FAASINVOKEDPROVIDERVALUES_GCP = Ng;
  Bf.FaasInvokedProviderValues = D.createConstMap([ zg, kg, Og, Ng ]);
  var Ig = "ip_tcp", Pg = "ip_udp", Mg = "ip", Dg = "unix", xg = "pipe", Lg = "inproc", Ug = "other";
  Bf.NETTRANSPORTVALUES_IP_TCP = Ig;
  Bf.NETTRANSPORTVALUES_IP_UDP = Pg;
  Bf.NETTRANSPORTVALUES_IP = Mg;
  Bf.NETTRANSPORTVALUES_UNIX = Dg;
  Bf.NETTRANSPORTVALUES_PIPE = xg;
  Bf.NETTRANSPORTVALUES_INPROC = Lg;
  Bf.NETTRANSPORTVALUES_OTHER = Ug;
  Bf.NetTransportValues = D.createConstMap([ Ig, Pg, Mg, Dg, xg, Lg, Ug ]);
  var Vg = "wifi", jg = "wired", qg = "cell", Gg = "unavailable", Bg = "unknown";
  Bf.NETHOSTCONNECTIONTYPEVALUES_WIFI = Vg;
  Bf.NETHOSTCONNECTIONTYPEVALUES_WIRED = jg;
  Bf.NETHOSTCONNECTIONTYPEVALUES_CELL = qg;
  Bf.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = Gg;
  Bf.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = Bg;
  Bf.NetHostConnectionTypeValues = D.createConstMap([ Vg, jg, qg, Gg, Bg ]);
  var Hg = "gprs", Kg = "edge", Fg = "umts", Yg = "cdma", Wg = "evdo_0", $g = "evdo_a", Xg = "cdma2000_1xrtt", Qg = "hsdpa", Jg = "hsupa", Zg = "hspa", ef = "iden", tf = "evdo_b", sf = "lte", rf = "ehrpd", nf = "hspap", of = "gsm", af = "td_scdma", df = "iwlan", cf = "nr", hf = "nrnsa", uf = "lte_ca";
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = Hg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = Kg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = Fg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = Yg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = Wg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = $g;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = Xg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Qg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Jg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Zg;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = ef;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = tf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = sf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = rf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = nf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = of;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = af;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = df;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_NR = cf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = hf;
  Bf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = uf;
  Bf.NetHostConnectionSubtypeValues = D.createConstMap([ Hg, Kg, Fg, Yg, Wg, $g, Xg, Qg, Jg, Zg, ef, tf, sf, rf, nf, of, af, df, cf, hf, uf ]);
  var pf = "1.0", _f = "1.1", mf = "2.0", gf = "SPDY", ff = "QUIC";
  Bf.HTTPFLAVORVALUES_HTTP_1_0 = pf;
  Bf.HTTPFLAVORVALUES_HTTP_1_1 = _f;
  Bf.HTTPFLAVORVALUES_HTTP_2_0 = mf;
  Bf.HTTPFLAVORVALUES_SPDY = gf;
  Bf.HTTPFLAVORVALUES_QUIC = ff;
  Bf.HttpFlavorValues = {
    HTTP_1_0: pf,
    HTTP_1_1: _f,
    HTTP_2_0: mf,
    SPDY: gf,
    QUIC: ff
  };
  var bf = "queue", Ef = "topic";
  Bf.MESSAGINGDESTINATIONKINDVALUES_QUEUE = bf;
  Bf.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Ef;
  Bf.MessagingDestinationKindValues = D.createConstMap([ bf, Ef ]);
  var Sf = "receive", Tf = "process";
  Bf.MESSAGINGOPERATIONVALUES_RECEIVE = Sf;
  Bf.MESSAGINGOPERATIONVALUES_PROCESS = Tf;
  Bf.MessagingOperationValues = D.createConstMap([ Sf, Tf ]);
  var wf = 0, Af = 1, yf = 2, Rf = 3, vf = 4, zf = 5, kf = 6, Of = 7, Nf = 8, If = 9, Pf = 10, Mf = 11, Df = 12, xf = 13, Lf = 14, Uf = 15, Vf = 16;
  Bf.RPCGRPCSTATUSCODEVALUES_OK = wf;
  Bf.RPCGRPCSTATUSCODEVALUES_CANCELLED = Af;
  Bf.RPCGRPCSTATUSCODEVALUES_UNKNOWN = yf;
  Bf.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Rf;
  Bf.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = vf;
  Bf.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = zf;
  Bf.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = kf;
  Bf.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = Of;
  Bf.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = Nf;
  Bf.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = If;
  Bf.RPCGRPCSTATUSCODEVALUES_ABORTED = Pf;
  Bf.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = Mf;
  Bf.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = Df;
  Bf.RPCGRPCSTATUSCODEVALUES_INTERNAL = xf;
  Bf.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = Lf;
  Bf.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = Uf;
  Bf.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = Vf;
  Bf.RpcGrpcStatusCodeValues = {
    OK: wf,
    CANCELLED: Af,
    UNKNOWN: yf,
    INVALID_ARGUMENT: Rf,
    DEADLINE_EXCEEDED: vf,
    NOT_FOUND: zf,
    ALREADY_EXISTS: kf,
    PERMISSION_DENIED: Of,
    RESOURCE_EXHAUSTED: Nf,
    FAILED_PRECONDITION: If,
    ABORTED: Pf,
    OUT_OF_RANGE: Mf,
    UNIMPLEMENTED: Df,
    INTERNAL: xf,
    UNAVAILABLE: Lf,
    DATA_LOSS: Uf,
    UNAUTHENTICATED: Vf
  };
  var jf = "SENT", Gf = "RECEIVED";
  Bf.MESSAGETYPEVALUES_SENT = jf;
  Bf.MESSAGETYPEVALUES_RECEIVED = Gf;
  Bf.MessageTypeValues = D.createConstMap([ jf, Gf ]);
});

var Qf = C(function(Pe) {
  var AD = Pe && Pe.__createBinding || (Object.create ? function(e, s, r, n) {
    if (n === void 0) n = r;
    var i = Object.getOwnPropertyDescriptor(s, r);
    if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) i = {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    };
    Object.defineProperty(e, n, i);
  } : function(e, s, r, n) {
    if (n === void 0) n = r;
    e[n] = s[r];
  }), yD = Pe && Pe.__exportStar || function(e, s) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) AD(s, e, r);
  };
  Object.defineProperty(Pe, "__esModule", {
    value: !0
  });
  yD(Xf(), Pe);
});

var OS = C(function(vS) {
  Object.defineProperty(vS, "__esModule", {
    value: !0
  });
  vS.SEMRESATTRS_K8S_STATEFULSET_NAME = vS.SEMRESATTRS_K8S_STATEFULSET_UID = vS.SEMRESATTRS_K8S_DEPLOYMENT_NAME = vS.SEMRESATTRS_K8S_DEPLOYMENT_UID = vS.SEMRESATTRS_K8S_REPLICASET_NAME = vS.SEMRESATTRS_K8S_REPLICASET_UID = vS.SEMRESATTRS_K8S_CONTAINER_NAME = vS.SEMRESATTRS_K8S_POD_NAME = vS.SEMRESATTRS_K8S_POD_UID = vS.SEMRESATTRS_K8S_NAMESPACE_NAME = vS.SEMRESATTRS_K8S_NODE_UID = vS.SEMRESATTRS_K8S_NODE_NAME = vS.SEMRESATTRS_K8S_CLUSTER_NAME = vS.SEMRESATTRS_HOST_IMAGE_VERSION = vS.SEMRESATTRS_HOST_IMAGE_ID = vS.SEMRESATTRS_HOST_IMAGE_NAME = vS.SEMRESATTRS_HOST_ARCH = vS.SEMRESATTRS_HOST_TYPE = vS.SEMRESATTRS_HOST_NAME = vS.SEMRESATTRS_HOST_ID = vS.SEMRESATTRS_FAAS_MAX_MEMORY = vS.SEMRESATTRS_FAAS_INSTANCE = vS.SEMRESATTRS_FAAS_VERSION = vS.SEMRESATTRS_FAAS_ID = vS.SEMRESATTRS_FAAS_NAME = vS.SEMRESATTRS_DEVICE_MODEL_NAME = vS.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = vS.SEMRESATTRS_DEVICE_ID = vS.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = vS.SEMRESATTRS_CONTAINER_IMAGE_TAG = vS.SEMRESATTRS_CONTAINER_IMAGE_NAME = vS.SEMRESATTRS_CONTAINER_RUNTIME = vS.SEMRESATTRS_CONTAINER_ID = vS.SEMRESATTRS_CONTAINER_NAME = vS.SEMRESATTRS_AWS_LOG_STREAM_ARNS = vS.SEMRESATTRS_AWS_LOG_STREAM_NAMES = vS.SEMRESATTRS_AWS_LOG_GROUP_ARNS = vS.SEMRESATTRS_AWS_LOG_GROUP_NAMES = vS.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = vS.SEMRESATTRS_AWS_ECS_TASK_REVISION = vS.SEMRESATTRS_AWS_ECS_TASK_FAMILY = vS.SEMRESATTRS_AWS_ECS_TASK_ARN = vS.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = vS.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = vS.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = vS.SEMRESATTRS_CLOUD_PLATFORM = vS.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = vS.SEMRESATTRS_CLOUD_REGION = vS.SEMRESATTRS_CLOUD_ACCOUNT_ID = vS.SEMRESATTRS_CLOUD_PROVIDER = void 0;
  vS.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = vS.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = vS.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = vS.CLOUDPLATFORMVALUES_AZURE_AKS = vS.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = vS.CLOUDPLATFORMVALUES_AZURE_VM = vS.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = vS.CLOUDPLATFORMVALUES_AWS_LAMBDA = vS.CLOUDPLATFORMVALUES_AWS_EKS = vS.CLOUDPLATFORMVALUES_AWS_ECS = vS.CLOUDPLATFORMVALUES_AWS_EC2 = vS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = vS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = vS.CloudProviderValues = vS.CLOUDPROVIDERVALUES_GCP = vS.CLOUDPROVIDERVALUES_AZURE = vS.CLOUDPROVIDERVALUES_AWS = vS.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = vS.SemanticResourceAttributes = vS.SEMRESATTRS_WEBENGINE_DESCRIPTION = vS.SEMRESATTRS_WEBENGINE_VERSION = vS.SEMRESATTRS_WEBENGINE_NAME = vS.SEMRESATTRS_TELEMETRY_AUTO_VERSION = vS.SEMRESATTRS_TELEMETRY_SDK_VERSION = vS.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = vS.SEMRESATTRS_TELEMETRY_SDK_NAME = vS.SEMRESATTRS_SERVICE_VERSION = vS.SEMRESATTRS_SERVICE_INSTANCE_ID = vS.SEMRESATTRS_SERVICE_NAMESPACE = vS.SEMRESATTRS_SERVICE_NAME = vS.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = vS.SEMRESATTRS_PROCESS_RUNTIME_VERSION = vS.SEMRESATTRS_PROCESS_RUNTIME_NAME = vS.SEMRESATTRS_PROCESS_OWNER = vS.SEMRESATTRS_PROCESS_COMMAND_ARGS = vS.SEMRESATTRS_PROCESS_COMMAND_LINE = vS.SEMRESATTRS_PROCESS_COMMAND = vS.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = vS.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = vS.SEMRESATTRS_PROCESS_PID = vS.SEMRESATTRS_OS_VERSION = vS.SEMRESATTRS_OS_NAME = vS.SEMRESATTRS_OS_DESCRIPTION = vS.SEMRESATTRS_OS_TYPE = vS.SEMRESATTRS_K8S_CRONJOB_NAME = vS.SEMRESATTRS_K8S_CRONJOB_UID = vS.SEMRESATTRS_K8S_JOB_NAME = vS.SEMRESATTRS_K8S_JOB_UID = vS.SEMRESATTRS_K8S_DAEMONSET_NAME = vS.SEMRESATTRS_K8S_DAEMONSET_UID = void 0;
  vS.TelemetrySdkLanguageValues = vS.TELEMETRYSDKLANGUAGEVALUES_WEBJS = vS.TELEMETRYSDKLANGUAGEVALUES_RUBY = vS.TELEMETRYSDKLANGUAGEVALUES_PYTHON = vS.TELEMETRYSDKLANGUAGEVALUES_PHP = vS.TELEMETRYSDKLANGUAGEVALUES_NODEJS = vS.TELEMETRYSDKLANGUAGEVALUES_JAVA = vS.TELEMETRYSDKLANGUAGEVALUES_GO = vS.TELEMETRYSDKLANGUAGEVALUES_ERLANG = vS.TELEMETRYSDKLANGUAGEVALUES_DOTNET = vS.TELEMETRYSDKLANGUAGEVALUES_CPP = vS.OsTypeValues = vS.OSTYPEVALUES_Z_OS = vS.OSTYPEVALUES_SOLARIS = vS.OSTYPEVALUES_AIX = vS.OSTYPEVALUES_HPUX = vS.OSTYPEVALUES_DRAGONFLYBSD = vS.OSTYPEVALUES_OPENBSD = vS.OSTYPEVALUES_NETBSD = vS.OSTYPEVALUES_FREEBSD = vS.OSTYPEVALUES_DARWIN = vS.OSTYPEVALUES_LINUX = vS.OSTYPEVALUES_WINDOWS = vS.HostArchValues = vS.HOSTARCHVALUES_X86 = vS.HOSTARCHVALUES_PPC64 = vS.HOSTARCHVALUES_PPC32 = vS.HOSTARCHVALUES_IA64 = vS.HOSTARCHVALUES_ARM64 = vS.HOSTARCHVALUES_ARM32 = vS.HOSTARCHVALUES_AMD64 = vS.AwsEcsLaunchtypeValues = vS.AWSECSLAUNCHTYPEVALUES_FARGATE = vS.AWSECSLAUNCHTYPEVALUES_EC2 = vS.CloudPlatformValues = vS.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = vS.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = vS.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = vS.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = void 0;
  var Q = yn(), Jf = "cloud.provider", Zf = "cloud.account.id", eb = "cloud.region", tb = "cloud.availability_zone", sb = "cloud.platform", rb = "aws.ecs.container.arn", nb = "aws.ecs.cluster.arn", ob = "aws.ecs.launchtype", ab = "aws.ecs.task.arn", ib = "aws.ecs.task.family", lb = "aws.ecs.task.revision", db = "aws.eks.cluster.arn", cb = "aws.log.group.names", hb = "aws.log.group.arns", ub = "aws.log.stream.names", pb = "aws.log.stream.arns", _b = "container.name", mb = "container.id", gb = "container.runtime", fb = "container.image.name", bb = "container.image.tag", Eb = "deployment.environment", Sb = "device.id", wb = "device.model.identifier", Ab = "device.model.name", yb = "faas.name", Rb = "faas.id", vb = "faas.version", Cb = "faas.instance", zb = "faas.max_memory", Ob = "host.id", Nb = "host.name", Ib = "host.type", Pb = "host.arch", Mb = "host.image.name", Db = "host.image.id", xb = "host.image.version", Lb = "k8s.cluster.name", Ub = "k8s.node.name", Vb = "k8s.node.uid", jb = "k8s.namespace.name", qb = "k8s.pod.uid", Gb = "k8s.pod.name", Bb = "k8s.container.name", Hb = "k8s.replicaset.uid", Kb = "k8s.replicaset.name", Fb = "k8s.deployment.uid", Yb = "k8s.deployment.name", Wb = "k8s.statefulset.uid", $b = "k8s.statefulset.name", Xb = "k8s.daemonset.uid", Qb = "k8s.daemonset.name", Jb = "k8s.job.uid", Zb = "k8s.job.name", eE = "k8s.cronjob.uid", tE = "k8s.cronjob.name", sE = "os.type", rE = "os.description", nE = "os.name", oE = "os.version", aE = "process.pid", iE = "process.executable.name", lE = "process.executable.path", dE = "process.command", cE = "process.command_line", hE = "process.command_args", uE = "process.owner", pE = "process.runtime.name", _E = "process.runtime.version", mE = "process.runtime.description", gE = "service.name", fE = "service.namespace", bE = "service.instance.id", EE = "service.version", SE = "telemetry.sdk.name", TE = "telemetry.sdk.language", wE = "telemetry.sdk.version", AE = "telemetry.auto.version", yE = "webengine.name", RE = "webengine.version", vE = "webengine.description";
  vS.SEMRESATTRS_CLOUD_PROVIDER = Jf;
  vS.SEMRESATTRS_CLOUD_ACCOUNT_ID = Zf;
  vS.SEMRESATTRS_CLOUD_REGION = eb;
  vS.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = tb;
  vS.SEMRESATTRS_CLOUD_PLATFORM = sb;
  vS.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = rb;
  vS.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = nb;
  vS.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = ob;
  vS.SEMRESATTRS_AWS_ECS_TASK_ARN = ab;
  vS.SEMRESATTRS_AWS_ECS_TASK_FAMILY = ib;
  vS.SEMRESATTRS_AWS_ECS_TASK_REVISION = lb;
  vS.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = db;
  vS.SEMRESATTRS_AWS_LOG_GROUP_NAMES = cb;
  vS.SEMRESATTRS_AWS_LOG_GROUP_ARNS = hb;
  vS.SEMRESATTRS_AWS_LOG_STREAM_NAMES = ub;
  vS.SEMRESATTRS_AWS_LOG_STREAM_ARNS = pb;
  vS.SEMRESATTRS_CONTAINER_NAME = _b;
  vS.SEMRESATTRS_CONTAINER_ID = mb;
  vS.SEMRESATTRS_CONTAINER_RUNTIME = gb;
  vS.SEMRESATTRS_CONTAINER_IMAGE_NAME = fb;
  vS.SEMRESATTRS_CONTAINER_IMAGE_TAG = bb;
  vS.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = Eb;
  vS.SEMRESATTRS_DEVICE_ID = Sb;
  vS.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = wb;
  vS.SEMRESATTRS_DEVICE_MODEL_NAME = Ab;
  vS.SEMRESATTRS_FAAS_NAME = yb;
  vS.SEMRESATTRS_FAAS_ID = Rb;
  vS.SEMRESATTRS_FAAS_VERSION = vb;
  vS.SEMRESATTRS_FAAS_INSTANCE = Cb;
  vS.SEMRESATTRS_FAAS_MAX_MEMORY = zb;
  vS.SEMRESATTRS_HOST_ID = Ob;
  vS.SEMRESATTRS_HOST_NAME = Nb;
  vS.SEMRESATTRS_HOST_TYPE = Ib;
  vS.SEMRESATTRS_HOST_ARCH = Pb;
  vS.SEMRESATTRS_HOST_IMAGE_NAME = Mb;
  vS.SEMRESATTRS_HOST_IMAGE_ID = Db;
  vS.SEMRESATTRS_HOST_IMAGE_VERSION = xb;
  vS.SEMRESATTRS_K8S_CLUSTER_NAME = Lb;
  vS.SEMRESATTRS_K8S_NODE_NAME = Ub;
  vS.SEMRESATTRS_K8S_NODE_UID = Vb;
  vS.SEMRESATTRS_K8S_NAMESPACE_NAME = jb;
  vS.SEMRESATTRS_K8S_POD_UID = qb;
  vS.SEMRESATTRS_K8S_POD_NAME = Gb;
  vS.SEMRESATTRS_K8S_CONTAINER_NAME = Bb;
  vS.SEMRESATTRS_K8S_REPLICASET_UID = Hb;
  vS.SEMRESATTRS_K8S_REPLICASET_NAME = Kb;
  vS.SEMRESATTRS_K8S_DEPLOYMENT_UID = Fb;
  vS.SEMRESATTRS_K8S_DEPLOYMENT_NAME = Yb;
  vS.SEMRESATTRS_K8S_STATEFULSET_UID = Wb;
  vS.SEMRESATTRS_K8S_STATEFULSET_NAME = $b;
  vS.SEMRESATTRS_K8S_DAEMONSET_UID = Xb;
  vS.SEMRESATTRS_K8S_DAEMONSET_NAME = Qb;
  vS.SEMRESATTRS_K8S_JOB_UID = Jb;
  vS.SEMRESATTRS_K8S_JOB_NAME = Zb;
  vS.SEMRESATTRS_K8S_CRONJOB_UID = eE;
  vS.SEMRESATTRS_K8S_CRONJOB_NAME = tE;
  vS.SEMRESATTRS_OS_TYPE = sE;
  vS.SEMRESATTRS_OS_DESCRIPTION = rE;
  vS.SEMRESATTRS_OS_NAME = nE;
  vS.SEMRESATTRS_OS_VERSION = oE;
  vS.SEMRESATTRS_PROCESS_PID = aE;
  vS.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = iE;
  vS.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = lE;
  vS.SEMRESATTRS_PROCESS_COMMAND = dE;
  vS.SEMRESATTRS_PROCESS_COMMAND_LINE = cE;
  vS.SEMRESATTRS_PROCESS_COMMAND_ARGS = hE;
  vS.SEMRESATTRS_PROCESS_OWNER = uE;
  vS.SEMRESATTRS_PROCESS_RUNTIME_NAME = pE;
  vS.SEMRESATTRS_PROCESS_RUNTIME_VERSION = _E;
  vS.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = mE;
  vS.SEMRESATTRS_SERVICE_NAME = gE;
  vS.SEMRESATTRS_SERVICE_NAMESPACE = fE;
  vS.SEMRESATTRS_SERVICE_INSTANCE_ID = bE;
  vS.SEMRESATTRS_SERVICE_VERSION = EE;
  vS.SEMRESATTRS_TELEMETRY_SDK_NAME = SE;
  vS.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TE;
  vS.SEMRESATTRS_TELEMETRY_SDK_VERSION = wE;
  vS.SEMRESATTRS_TELEMETRY_AUTO_VERSION = AE;
  vS.SEMRESATTRS_WEBENGINE_NAME = yE;
  vS.SEMRESATTRS_WEBENGINE_VERSION = RE;
  vS.SEMRESATTRS_WEBENGINE_DESCRIPTION = vE;
  vS.SemanticResourceAttributes = Q.createConstMap([ Jf, Zf, eb, tb, sb, rb, nb, ob, ab, ib, lb, db, cb, hb, ub, pb, _b, mb, gb, fb, bb, Eb, Sb, wb, Ab, yb, Rb, vb, Cb, zb, Ob, Nb, Ib, Pb, Mb, Db, xb, Lb, Ub, Vb, jb, qb, Gb, Bb, Hb, Kb, Fb, Yb, Wb, $b, Xb, Qb, Jb, Zb, eE, tE, sE, rE, nE, oE, aE, iE, lE, dE, cE, hE, uE, pE, _E, mE, gE, fE, bE, EE, SE, TE, wE, AE, yE, RE, vE ]);
  var CE = "alibaba_cloud", zE = "aws", kE = "azure", OE = "gcp";
  vS.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = CE;
  vS.CLOUDPROVIDERVALUES_AWS = zE;
  vS.CLOUDPROVIDERVALUES_AZURE = kE;
  vS.CLOUDPROVIDERVALUES_GCP = OE;
  vS.CloudProviderValues = Q.createConstMap([ CE, zE, kE, OE ]);
  var NE = "alibaba_cloud_ecs", IE = "alibaba_cloud_fc", PE = "aws_ec2", ME = "aws_ecs", DE = "aws_eks", xE = "aws_lambda", LE = "aws_elastic_beanstalk", UE = "azure_vm", VE = "azure_container_instances", jE = "azure_aks", qE = "azure_functions", GE = "azure_app_service", BE = "gcp_compute_engine", HE = "gcp_cloud_run", KE = "gcp_kubernetes_engine", FE = "gcp_cloud_functions", YE = "gcp_app_engine";
  vS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = NE;
  vS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = IE;
  vS.CLOUDPLATFORMVALUES_AWS_EC2 = PE;
  vS.CLOUDPLATFORMVALUES_AWS_ECS = ME;
  vS.CLOUDPLATFORMVALUES_AWS_EKS = DE;
  vS.CLOUDPLATFORMVALUES_AWS_LAMBDA = xE;
  vS.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = LE;
  vS.CLOUDPLATFORMVALUES_AZURE_VM = UE;
  vS.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = VE;
  vS.CLOUDPLATFORMVALUES_AZURE_AKS = jE;
  vS.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = qE;
  vS.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = GE;
  vS.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = BE;
  vS.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = HE;
  vS.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = KE;
  vS.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = FE;
  vS.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = YE;
  vS.CloudPlatformValues = Q.createConstMap([ NE, IE, PE, ME, DE, xE, LE, UE, VE, jE, qE, GE, BE, HE, KE, FE, YE ]);
  var WE = "ec2", $E = "fargate";
  vS.AWSECSLAUNCHTYPEVALUES_EC2 = WE;
  vS.AWSECSLAUNCHTYPEVALUES_FARGATE = $E;
  vS.AwsEcsLaunchtypeValues = Q.createConstMap([ WE, $E ]);
  var XE = "amd64", QE = "arm32", JE = "arm64", ZE = "ia64", eS = "ppc32", tS = "ppc64", sS = "x86";
  vS.HOSTARCHVALUES_AMD64 = XE;
  vS.HOSTARCHVALUES_ARM32 = QE;
  vS.HOSTARCHVALUES_ARM64 = JE;
  vS.HOSTARCHVALUES_IA64 = ZE;
  vS.HOSTARCHVALUES_PPC32 = eS;
  vS.HOSTARCHVALUES_PPC64 = tS;
  vS.HOSTARCHVALUES_X86 = sS;
  vS.HostArchValues = Q.createConstMap([ XE, QE, JE, ZE, eS, tS, sS ]);
  var rS = "windows", nS = "linux", oS = "darwin", aS = "freebsd", lS = "netbsd", dS = "openbsd", cS = "dragonflybsd", hS = "hpux", uS = "aix", pS = "solaris", _S = "z_os";
  vS.OSTYPEVALUES_WINDOWS = rS;
  vS.OSTYPEVALUES_LINUX = nS;
  vS.OSTYPEVALUES_DARWIN = oS;
  vS.OSTYPEVALUES_FREEBSD = aS;
  vS.OSTYPEVALUES_NETBSD = lS;
  vS.OSTYPEVALUES_OPENBSD = dS;
  vS.OSTYPEVALUES_DRAGONFLYBSD = cS;
  vS.OSTYPEVALUES_HPUX = hS;
  vS.OSTYPEVALUES_AIX = uS;
  vS.OSTYPEVALUES_SOLARIS = pS;
  vS.OSTYPEVALUES_Z_OS = _S;
  vS.OsTypeValues = Q.createConstMap([ rS, nS, oS, aS, lS, dS, cS, hS, uS, pS, _S ]);
  var mS = "cpp", gS = "dotnet", bS = "erlang", ES = "go", SS = "java", TS = "nodejs", wS = "php", AS = "python", yS = "ruby", RS = "webjs";
  vS.TELEMETRYSDKLANGUAGEVALUES_CPP = mS;
  vS.TELEMETRYSDKLANGUAGEVALUES_DOTNET = gS;
  vS.TELEMETRYSDKLANGUAGEVALUES_ERLANG = bS;
  vS.TELEMETRYSDKLANGUAGEVALUES_GO = ES;
  vS.TELEMETRYSDKLANGUAGEVALUES_JAVA = SS;
  vS.TELEMETRYSDKLANGUAGEVALUES_NODEJS = TS;
  vS.TELEMETRYSDKLANGUAGEVALUES_PHP = wS;
  vS.TELEMETRYSDKLANGUAGEVALUES_PYTHON = AS;
  vS.TELEMETRYSDKLANGUAGEVALUES_RUBY = yS;
  vS.TELEMETRYSDKLANGUAGEVALUES_WEBJS = RS;
  vS.TelemetrySdkLanguageValues = Q.createConstMap([ mS, gS, bS, ES, SS, TS, wS, AS, yS, RS ]);
});

var NS = C(function(Me) {
  var eU = Me && Me.__createBinding || (Object.create ? function(e, s, r, n) {
    if (n === void 0) n = r;
    var i = Object.getOwnPropertyDescriptor(s, r);
    if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) i = {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    };
    Object.defineProperty(e, n, i);
  } : function(e, s, r, n) {
    if (n === void 0) n = r;
    e[n] = s[r];
  }), tU = Me && Me.__exportStar || function(e, s) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) eU(s, e, r);
  };
  Object.defineProperty(Me, "__esModule", {
    value: !0
  });
  tU(OS(), Me);
});

var xS = C(function(IS) {
  Object.defineProperty(IS, "__esModule", {
    value: !0
  });
  IS.ATTR_EXCEPTION_TYPE = IS.ATTR_EXCEPTION_STACKTRACE = IS.ATTR_EXCEPTION_MESSAGE = IS.ATTR_EXCEPTION_ESCAPED = IS.ERROR_TYPE_VALUE_OTHER = IS.ATTR_ERROR_TYPE = IS.DOTNET_GC_HEAP_GENERATION_VALUE_POH = IS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = IS.ATTR_DOTNET_GC_HEAP_GENERATION = IS.DB_SYSTEM_NAME_VALUE_POSTGRESQL = IS.DB_SYSTEM_NAME_VALUE_MYSQL = IS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = IS.DB_SYSTEM_NAME_VALUE_MARIADB = IS.ATTR_DB_SYSTEM_NAME = IS.ATTR_DB_STORED_PROCEDURE_NAME = IS.ATTR_DB_RESPONSE_STATUS_CODE = IS.ATTR_DB_QUERY_TEXT = IS.ATTR_DB_QUERY_SUMMARY = IS.ATTR_DB_OPERATION_NAME = IS.ATTR_DB_OPERATION_BATCH_SIZE = IS.ATTR_DB_NAMESPACE = IS.ATTR_DB_COLLECTION_NAME = IS.ATTR_CODE_STACKTRACE = IS.ATTR_CODE_LINE_NUMBER = IS.ATTR_CODE_FUNCTION_NAME = IS.ATTR_CODE_FILE_PATH = IS.ATTR_CODE_COLUMN_NUMBER = IS.ATTR_CLIENT_PORT = IS.ATTR_CLIENT_ADDRESS = IS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = IS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = IS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = IS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = IS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = IS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = IS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = IS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = IS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = IS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = void 0;
  IS.OTEL_STATUS_CODE_VALUE_ERROR = IS.ATTR_OTEL_STATUS_CODE = IS.ATTR_OTEL_SCOPE_VERSION = IS.ATTR_OTEL_SCOPE_NAME = IS.NETWORK_TYPE_VALUE_IPV6 = IS.NETWORK_TYPE_VALUE_IPV4 = IS.ATTR_NETWORK_TYPE = IS.NETWORK_TRANSPORT_VALUE_UNIX = IS.NETWORK_TRANSPORT_VALUE_UDP = IS.NETWORK_TRANSPORT_VALUE_TCP = IS.NETWORK_TRANSPORT_VALUE_QUIC = IS.NETWORK_TRANSPORT_VALUE_PIPE = IS.ATTR_NETWORK_TRANSPORT = IS.ATTR_NETWORK_PROTOCOL_VERSION = IS.ATTR_NETWORK_PROTOCOL_NAME = IS.ATTR_NETWORK_PEER_PORT = IS.ATTR_NETWORK_PEER_ADDRESS = IS.ATTR_NETWORK_LOCAL_PORT = IS.ATTR_NETWORK_LOCAL_ADDRESS = IS.JVM_THREAD_STATE_VALUE_WAITING = IS.JVM_THREAD_STATE_VALUE_TIMED_WAITING = IS.JVM_THREAD_STATE_VALUE_TERMINATED = IS.JVM_THREAD_STATE_VALUE_RUNNABLE = IS.JVM_THREAD_STATE_VALUE_NEW = IS.JVM_THREAD_STATE_VALUE_BLOCKED = IS.ATTR_JVM_THREAD_STATE = IS.ATTR_JVM_THREAD_DAEMON = IS.JVM_MEMORY_TYPE_VALUE_NON_HEAP = IS.JVM_MEMORY_TYPE_VALUE_HEAP = IS.ATTR_JVM_MEMORY_TYPE = IS.ATTR_JVM_MEMORY_POOL_NAME = IS.ATTR_JVM_GC_NAME = IS.ATTR_JVM_GC_ACTION = IS.ATTR_HTTP_ROUTE = IS.ATTR_HTTP_RESPONSE_STATUS_CODE = IS.ATTR_HTTP_RESPONSE_HEADER = IS.ATTR_HTTP_REQUEST_RESEND_COUNT = IS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = IS.HTTP_REQUEST_METHOD_VALUE_TRACE = IS.HTTP_REQUEST_METHOD_VALUE_PUT = IS.HTTP_REQUEST_METHOD_VALUE_POST = IS.HTTP_REQUEST_METHOD_VALUE_PATCH = IS.HTTP_REQUEST_METHOD_VALUE_OPTIONS = IS.HTTP_REQUEST_METHOD_VALUE_HEAD = IS.HTTP_REQUEST_METHOD_VALUE_GET = IS.HTTP_REQUEST_METHOD_VALUE_DELETE = IS.HTTP_REQUEST_METHOD_VALUE_CONNECT = IS.HTTP_REQUEST_METHOD_VALUE_OTHER = IS.ATTR_HTTP_REQUEST_METHOD = IS.ATTR_HTTP_REQUEST_HEADER = void 0;
  IS.ATTR_USER_AGENT_ORIGINAL = IS.ATTR_URL_SCHEME = IS.ATTR_URL_QUERY = IS.ATTR_URL_PATH = IS.ATTR_URL_FULL = IS.ATTR_URL_FRAGMENT = IS.ATTR_TELEMETRY_SDK_VERSION = IS.ATTR_TELEMETRY_SDK_NAME = IS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = IS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = IS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = IS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = IS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = IS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = IS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = IS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = IS.TELEMETRY_SDK_LANGUAGE_VALUE_GO = IS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = IS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = IS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = IS.ATTR_TELEMETRY_SDK_LANGUAGE = IS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = IS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = IS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = IS.ATTR_SIGNALR_TRANSPORT = IS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = IS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = IS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = IS.ATTR_SIGNALR_CONNECTION_STATUS = IS.ATTR_SERVICE_VERSION = IS.ATTR_SERVICE_NAME = IS.ATTR_SERVER_PORT = IS.ATTR_SERVER_ADDRESS = IS.ATTR_OTEL_STATUS_DESCRIPTION = IS.OTEL_STATUS_CODE_VALUE_OK = void 0;
  IS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  IS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  IS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  IS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  IS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  IS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  IS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  IS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  IS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  IS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  IS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  IS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
  IS.ATTR_CLIENT_ADDRESS = "client.address";
  IS.ATTR_CLIENT_PORT = "client.port";
  IS.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
  IS.ATTR_CODE_FILE_PATH = "code.file.path";
  IS.ATTR_CODE_FUNCTION_NAME = "code.function.name";
  IS.ATTR_CODE_LINE_NUMBER = "code.line.number";
  IS.ATTR_CODE_STACKTRACE = "code.stacktrace";
  IS.ATTR_DB_COLLECTION_NAME = "db.collection.name";
  IS.ATTR_DB_NAMESPACE = "db.namespace";
  IS.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
  IS.ATTR_DB_OPERATION_NAME = "db.operation.name";
  IS.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
  IS.ATTR_DB_QUERY_TEXT = "db.query.text";
  IS.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
  IS.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
  IS.ATTR_DB_SYSTEM_NAME = "db.system.name";
  IS.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
  IS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
  IS.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
  IS.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
  IS.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
  IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
  IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
  IS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
  IS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
  IS.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
  IS.ATTR_ERROR_TYPE = "error.type";
  IS.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  IS.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  IS.ATTR_EXCEPTION_MESSAGE = "exception.message";
  IS.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  IS.ATTR_EXCEPTION_TYPE = "exception.type";
  var sU = e => `http.request.header.${e}`;
  IS.ATTR_HTTP_REQUEST_HEADER = sU;
  IS.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  IS.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  IS.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  IS.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  IS.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  IS.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  IS.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  IS.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  IS.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  IS.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  IS.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  IS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  IS.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var rU = e => `http.response.header.${e}`;
  IS.ATTR_HTTP_RESPONSE_HEADER = rU;
  IS.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  IS.ATTR_HTTP_ROUTE = "http.route";
  IS.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  IS.ATTR_JVM_GC_NAME = "jvm.gc.name";
  IS.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  IS.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  IS.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  IS.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  IS.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  IS.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  IS.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  IS.JVM_THREAD_STATE_VALUE_NEW = "new";
  IS.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  IS.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  IS.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  IS.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  IS.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  IS.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  IS.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  IS.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  IS.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  IS.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  IS.ATTR_NETWORK_TRANSPORT = "network.transport";
  IS.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  IS.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  IS.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  IS.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  IS.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  IS.ATTR_NETWORK_TYPE = "network.type";
  IS.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  IS.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  IS.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  IS.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  IS.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  IS.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  IS.OTEL_STATUS_CODE_VALUE_OK = "OK";
  IS.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  IS.ATTR_SERVER_ADDRESS = "server.address";
  IS.ATTR_SERVER_PORT = "server.port";
  IS.ATTR_SERVICE_NAME = "service.name";
  IS.ATTR_SERVICE_VERSION = "service.version";
  IS.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  IS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  IS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  IS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  IS.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  IS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  IS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  IS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  IS.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  IS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  IS.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  IS.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  IS.ATTR_URL_FRAGMENT = "url.fragment";
  IS.ATTR_URL_FULL = "url.full";
  IS.ATTR_URL_PATH = "url.path";
  IS.ATTR_URL_QUERY = "url.query";
  IS.ATTR_URL_SCHEME = "url.scheme";
  IS.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});

var jS = C(function(LS) {
  Object.defineProperty(LS, "__esModule", {
    value: !0
  });
  LS.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = LS.METRIC_KESTREL_UPGRADED_CONNECTIONS = LS.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = LS.METRIC_KESTREL_REJECTED_CONNECTIONS = LS.METRIC_KESTREL_QUEUED_REQUESTS = LS.METRIC_KESTREL_QUEUED_CONNECTIONS = LS.METRIC_KESTREL_CONNECTION_DURATION = LS.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = LS.METRIC_KESTREL_ACTIVE_CONNECTIONS = LS.METRIC_JVM_THREAD_COUNT = LS.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = LS.METRIC_JVM_MEMORY_USED = LS.METRIC_JVM_MEMORY_LIMIT = LS.METRIC_JVM_MEMORY_COMMITTED = LS.METRIC_JVM_GC_DURATION = LS.METRIC_JVM_CPU_TIME = LS.METRIC_JVM_CPU_RECENT_UTILIZATION = LS.METRIC_JVM_CPU_COUNT = LS.METRIC_JVM_CLASS_UNLOADED = LS.METRIC_JVM_CLASS_LOADED = LS.METRIC_JVM_CLASS_COUNT = LS.METRIC_HTTP_SERVER_REQUEST_DURATION = LS.METRIC_HTTP_CLIENT_REQUEST_DURATION = LS.METRIC_DOTNET_TIMER_COUNT = LS.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = LS.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = LS.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = LS.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = LS.METRIC_DOTNET_PROCESS_CPU_TIME = LS.METRIC_DOTNET_PROCESS_CPU_COUNT = LS.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = LS.METRIC_DOTNET_JIT_COMPILED_METHODS = LS.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = LS.METRIC_DOTNET_JIT_COMPILATION_TIME = LS.METRIC_DOTNET_GC_PAUSE_TIME = LS.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = LS.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = LS.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = LS.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = LS.METRIC_DOTNET_GC_COLLECTIONS = LS.METRIC_DOTNET_EXCEPTIONS = LS.METRIC_DOTNET_ASSEMBLY_COUNT = LS.METRIC_DB_CLIENT_OPERATION_DURATION = LS.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = LS.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = LS.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = LS.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = void 0;
  LS.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0;
  LS.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  LS.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
  LS.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
  LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
  LS.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  LS.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  LS.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
  LS.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
  LS.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
  LS.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
  LS.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
  LS.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
  LS.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
  LS.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
  LS.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
  LS.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
  LS.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
  LS.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
  LS.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
  LS.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
  LS.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
  LS.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
  LS.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
  LS.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
  LS.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
  LS.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
  LS.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  LS.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  LS.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  LS.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  LS.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  LS.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  LS.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  LS.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  LS.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  LS.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  LS.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  LS.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  LS.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  LS.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  LS.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  LS.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  LS.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  LS.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  LS.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  LS.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  LS.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  LS.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  LS.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  LS.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});

var BS = C(function(qS) {
  Object.defineProperty(qS, "__esModule", {
    value: !0
  });
  qS.EVENT_EXCEPTION = void 0;
  qS.EVENT_EXCEPTION = "exception";
});

var $Be = C(function(le) {
  var Dq = le && le.__createBinding || (Object.create ? function(e, s, r, n) {
    if (n === void 0) n = r;
    var i = Object.getOwnPropertyDescriptor(s, r);
    if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) i = {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    };
    Object.defineProperty(e, n, i);
  } : function(e, s, r, n) {
    if (n === void 0) n = r;
    e[n] = s[r];
  }), zt = le && le.__exportStar || function(e, s) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) Dq(s, e, r);
  };
  Object.defineProperty(le, "__esModule", {
    value: !0
  });
  zt(Qf(), le);
  zt(NS(), le);
  zt(xS(), le);
  zt(jS(), le);
  zt(BS(), le);
});

var FS = C(function(HS) {
  Object.defineProperty(HS, "__esModule", {
    value: !0
  });
  HS.ATTR_PROCESS_RUNTIME_NAME = void 0;
  HS.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
});

var QS = C(function($S) {
  Object.defineProperty($S, "__esModule", {
    value: !0
  });
  $S.SDK_INFO = void 0;
  var YS = Gu(), Ee = $Be(), WS = FS();
  $S.SDK_INFO = {
    [Ee.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
    [WS.ATTR_PROCESS_RUNTIME_NAME]: "node",
    [Ee.ATTR_TELEMETRY_SDK_LANGUAGE]: Ee.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    [Ee.ATTR_TELEMETRY_SDK_VERSION]: YS.VERSION
  };
});

var ZS = C(function(Se) {
  Object.defineProperty(Se, "__esModule", {
    value: !0
  });
  Se.otperformance = Se.SDK_INFO = Se._globalThis = Se.getStringListFromEnv = Se.getNumberFromEnv = Se.getBooleanFromEnv = Se.getStringFromEnv = void 0;
  var Ps = xu();
  Object.defineProperty(Se, "getStringFromEnv", {
    enumerable: !0,
    get: function() {
      return Ps.getStringFromEnv;
    }
  });
  Object.defineProperty(Se, "getBooleanFromEnv", {
    enumerable: !0,
    get: function() {
      return Ps.getBooleanFromEnv;
    }
  });
  Object.defineProperty(Se, "getNumberFromEnv", {
    enumerable: !0,
    get: function() {
      return Ps.getNumberFromEnv;
    }
  });
  Object.defineProperty(Se, "getStringListFromEnv", {
    enumerable: !0,
    get: function() {
      return Ps.getStringListFromEnv;
    }
  });
  var xq = Vu();
  Object.defineProperty(Se, "_globalThis", {
    enumerable: !0,
    get: function() {
      return xq._globalThis;
    }
  });
  var Lq = QS();
  Object.defineProperty(Se, "SDK_INFO", {
    enumerable: !0,
    get: function() {
      return Lq.SDK_INFO;
    }
  });
  Se.otperformance = performance;
});

var Rn = C(function(ge) {
  Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  ge.getStringListFromEnv = ge.getNumberFromEnv = ge.getStringFromEnv = ge.getBooleanFromEnv = ge.otperformance = ge._globalThis = ge.SDK_INFO = void 0;
  var xe = ZS();
  Object.defineProperty(ge, "SDK_INFO", {
    enumerable: !0,
    get: function() {
      return xe.SDK_INFO;
    }
  });
  Object.defineProperty(ge, "_globalThis", {
    enumerable: !0,
    get: function() {
      return xe._globalThis;
    }
  });
  Object.defineProperty(ge, "otperformance", {
    enumerable: !0,
    get: function() {
      return xe.otperformance;
    }
  });
  Object.defineProperty(ge, "getBooleanFromEnv", {
    enumerable: !0,
    get: function() {
      return xe.getBooleanFromEnv;
    }
  });
  Object.defineProperty(ge, "getStringFromEnv", {
    enumerable: !0,
    get: function() {
      return xe.getStringFromEnv;
    }
  });
  Object.defineProperty(ge, "getNumberFromEnv", {
    enumerable: !0,
    get: function() {
      return xe.getNumberFromEnv;
    }
  });
  Object.defineProperty(ge, "getStringListFromEnv", {
    enumerable: !0,
    get: function() {
      return xe.getStringListFromEnv;
    }
  });
});

var oT = C(function(rT) {
  Object.defineProperty(rT, "__esModule", {
    value: !0
  });
  rT.addHrTimes = rT.isTimeInput = rT.isTimeInputHrTime = rT.hrTimeToMicroseconds = rT.hrTimeToMilliseconds = rT.hrTimeToNanoseconds = rT.hrTimeToTimeStamp = rT.hrTimeDuration = rT.timeInputToHrTime = rT.hrTime = rT.getTimeOrigin = rT.millisToHrTime = void 0;
  var Te = Rn(), eT = 9, Vq = 6, jq = Math.pow(10, Vq), Ms = Math.pow(10, eT);
  function kt(e) {
    let s = e / 1e3, r = Math.trunc(s), n = Math.round(e % 1e3 * jq);
    return [ r, n ];
  }
  rT.millisToHrTime = kt;
  function qq() {
    return Te.otperformance.timeOrigin;
  }
  rT.getTimeOrigin = qq;
  function tT(e) {
    let s = kt(Te.otperformance.timeOrigin), r = kt(typeof e === "number" ? e : Te.otperformance.now());
    return sT(s, r);
  }
  rT.hrTime = tT;
  function Gq(e) {
    if (vn(e)) return e; else if (typeof e === "number") if (e < Te.otperformance.timeOrigin) return tT(e); else return kt(e); else if (e instanceof Date) return kt(e.getTime()); else throw TypeError("Invalid input type");
  }
  rT.timeInputToHrTime = Gq;
  function Bq(e, s) {
    let r = s[0] - e[0], n = s[1] - e[1];
    if (n < 0) r -= 1, n += Ms;
    return [ r, n ];
  }
  rT.hrTimeDuration = Bq;
  function Hq(e) {
    let s = eT, r = `${"0".repeat(s)}${e[1]}Z`, n = r.substring(r.length - s - 1);
    return new Date(e[0] * 1e3).toISOString().replace("000Z", n);
  }
  rT.hrTimeToTimeStamp = Hq;
  function Kq(e) {
    return e[0] * Ms + e[1];
  }
  rT.hrTimeToNanoseconds = Kq;
  function Fq(e) {
    return e[0] * 1e3 + e[1] / 1e6;
  }
  rT.hrTimeToMilliseconds = Fq;
  function Yq(e) {
    return e[0] * 1e6 + e[1] / 1e3;
  }
  rT.hrTimeToMicroseconds = Yq;
  function vn(e) {
    return Array.isArray(e) && e.length === 2 && typeof e[0] === "number" && typeof e[1] === "number";
  }
  rT.isTimeInputHrTime = vn;
  function Wq(e) {
    return vn(e) || typeof e === "number" || e instanceof Date;
  }
  rT.isTimeInput = Wq;
  function sT(e, s) {
    let r = [ e[0] + s[0], e[1] + s[1] ];
    if (r[1] >= Ms) r[1] -= Ms, r[0] += 1;
    return r;
  }
  rT.addHrTimes = sT;
});

var lT = C(function(aT) {
  Object.defineProperty(aT, "__esModule", {
    value: !0
  });
  aT.unrefTimer = void 0;
  function lG(e) {
    if (typeof e !== "number") e.unref();
  }
  aT.unrefTimer = lG;
});

var cT = C(function(dT) {
  Object.defineProperty(dT, "__esModule", {
    value: !0
  });
  dT.ExportResultCode = void 0;
  var dG;
  (function(e) {
    e[e.SUCCESS = 0] = "SUCCESS", e[e.FAILED = 1] = "FAILED";
  })(dG = dT.ExportResultCode || (dT.ExportResultCode = {}));
});

var _T = C(function(uT) {
  Object.defineProperty(uT, "__esModule", {
    value: !0
  });
  uT.CompositePropagator = void 0;
  var Ds = ja();
  class hT {
    _propagators;
    _fields;
    constructor(e = {}) {
      this._propagators = e.propagators ?? [];
      let s = new Set;
      for (let r of this._propagators) {
        let n = typeof r.fields === "function" ? r.fields() : [];
        for (let i of n) s.add(i);
      }
      this._fields = Array.from(s);
    }
    inject(e, s, r) {
      for (let n of this._propagators) try {
        n.inject(e, s, r);
      } catch (i) {
        Ds.diag.warn(`Failed to inject with ${n.constructor.name}. Err: ${i.message}`);
      }
    }
    extract(e, s, r) {
      return this._propagators.reduce((n, i) => {
        try {
          return i.extract(n, s, r);
        } catch (d) {
          Ds.diag.warn(`Failed to extract with ${i.constructor.name}. Err: ${d.message}`);
        }
        return n;
      }, e);
    }
    fields() {
      return this._fields.slice();
    }
  }
  uT.CompositePropagator = hT;
});

var fT = C(function(mT) {
  Object.defineProperty(mT, "__esModule", {
    value: !0
  });
  mT.validateValue = mT.validateKey = void 0;
  var zn = "[_0-9a-z-*/]", cG = `[a-z]${zn}{0,255}`, hG = `[a-z0-9]${zn}{0,240}@[a-z]${zn}{0,13}`, uG = new RegExp(`^(?:${cG}|${hG})$`), pG = /^[ -~]{0,255}[!-~]$/, _G = /,|=/;
  function mG(e) {
    return uG.test(e);
  }
  mT.validateKey = mG;
  function gG(e) {
    return pG.test(e) && !_G.test(e);
  }
  mT.validateValue = gG;
});

var On = C(function(TT) {
  Object.defineProperty(TT, "__esModule", {
    value: !0
  });
  TT.TraceState = void 0;
  var Ae = fT(), bG = 32, bT = 512, ET = ",", ST = "=";
  class kn {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
      this._rawTraceState = typeof e === "string" ? e : "", this._length = this._rawTraceState.length;
    }
    set(e, s) {
      if (!Ae.validateKey(e) || !Ae.validateValue(s)) return this;
      let r = this._getState(), n = r.get(e), i = this._length;
      if (typeof n === "string") i += s.length - n.length; else i += e.length + s.length + (r.size > 0 ? 2 : 1);
      if (i > bT) return this;
      let d = new Map(r);
      return d.delete(e), d.set(e, s), this._fromState(d, i);
    }
    unset(e) {
      let s = this._getState(), r = s.get(e);
      if (typeof r !== "string") return this;
      let n = this._length - (e.length + r.length + 1);
      if (s.size > 1) n = n - 1;
      let i = new Map(s);
      return i.delete(e), this._fromState(i, n);
    }
    get(e) {
      return this._getState().get(e);
    }
    serialize() {
      let e = "", s = 0;
      for (let r of this._getState()) {
        if (s > 0) e = ET + e;
        e = `${r[0]}${ST}${r[1]}` + e, s++;
      }
      return e;
    }
    _getState() {
      if (this._internalState) return this._internalState;
      let e = this._rawTraceState.split(ET), s = new Map, r = 0;
      for (let n of e) {
        let i = n.trim(), d = i.indexOf(ST);
        if (d === -1) continue;
        let c = i.slice(0, d), m = i.slice(d + 1);
        if (!Ae.validateKey(c) || !Ae.validateValue(m)) continue;
        let h = r + i.length + (s.size > 0 ? 1 : 0);
        if (h > bT) continue;
        if (s.set(c, m), r = h, s.size >= bG) break;
      }
      return this._length = r, this._internalState = new Map(Array.from(s.entries()).reverse()), 
      this._internalState;
    }
    _fromState(e, s) {
      let r = Object.create(kn.prototype);
      return r._internalState = e, r._length = s, r;
    }
  }
  TT.TraceState = kn;
});

var kT = C(function(CT) {
  Object.defineProperty(CT, "__esModule", {
    value: !0
  });
  CT.W3CTraceContextPropagator = CT.parseTraceParent = CT.TRACE_STATE_HEADER = CT.TRACE_PARENT_HEADER = void 0;
  var ye = ja(), AT = Ct(), yT = On();
  CT.TRACE_PARENT_HEADER = "traceparent";
  CT.TRACE_STATE_HEADER = "tracestate";
  var EG = "00", SG = "(?!ff)[\\da-f]{2}", TG = "(?![0]{32})[\\da-f]{32}", wG = "(?![0]{16})[\\da-f]{16}", AG = "[\\da-f]{2}", yG = new RegExp(`^\\s?(${SG})-(${TG})-(${wG})-(${AG})(-.*)?\\s?$`);
  function RT(e) {
    let s = yG.exec(e);
    if (!s) return null;
    if (s[1] === "00" && s[5]) return null;
    return {
      traceId: s[2],
      spanId: s[3],
      traceFlags: parseInt(s[4], 16)
    };
  }
  CT.parseTraceParent = RT;
  class vT {
    inject(e, s, r) {
      let n = ye.trace.getSpanContext(e);
      if (!n || AT.isTracingSuppressed(e) || !ye.isSpanContextValid(n)) return;
      let i = `${EG}-${n.traceId}-${n.spanId}-0${Number(n.traceFlags || ye.TraceFlags.NONE).toString(16)}`;
      if (r.set(s, CT.TRACE_PARENT_HEADER, i), n.traceState) r.set(s, CT.TRACE_STATE_HEADER, n.traceState.serialize());
    }
    extract(e, s, r) {
      let n = r.get(s, CT.TRACE_PARENT_HEADER);
      if (!n) return e;
      let i = Array.isArray(n) ? n[0] : n;
      if (typeof i !== "string") return e;
      let d = RT(i);
      if (!d) return e;
      d.isRemote = !0;
      let c = r.get(s, CT.TRACE_STATE_HEADER);
      if (c) {
        let m = Array.isArray(c) ? c.join(",") : c;
        d.traceState = new yT.TraceState(typeof m === "string" ? m : void 0);
      }
      return ye.trace.setSpanContext(e, d);
    }
    fields() {
      return [ CT.TRACE_PARENT_HEADER, CT.TRACE_STATE_HEADER ];
    }
  }
  CT.W3CTraceContextPropagator = vT;
});

var MT = C(function(IT) {
  Object.defineProperty(IT, "__esModule", {
    value: !0
  });
  IT.getRPCMetadata = IT.deleteRPCMetadata = IT.setRPCMetadata = IT.RPCType = void 0;
  var NT = ja(), Nn = NT.createContextKey("OpenTelemetry SDK Context Key RPC_METADATA"), vG;
  (function(e) {
    e.HTTP = "http";
  })(vG = IT.RPCType || (IT.RPCType = {}));
  function CG(e, s) {
    return e.setValue(Nn, s);
  }
  IT.setRPCMetadata = CG;
  function zG(e) {
    return e.deleteValue(Nn);
  }
  IT.deleteRPCMetadata = zG;
  function kG(e) {
    return e.getValue(Nn);
  }
  IT.getRPCMetadata = kG;
});

var qT = C(function(VT) {
  Object.defineProperty(VT, "__esModule", {
    value: !0
  });
  VT.isPlainObject = void 0;
  var PG = "[object Object]", MG = "[object Null]", DG = "[object Undefined]", xG = Function.prototype, DT = xG.toString, LG = DT.call(Object), {getPrototypeOf: UG, prototype: xT} = Object, LT = xT.hasOwnProperty, Le = Symbol ? Symbol.toStringTag : void 0, UT = xT.toString;
  function VG(e) {
    if (!jG(e) || qG(e) !== PG) return !1;
    let s = UG(e);
    if (s === null) return !0;
    let r = LT.call(s, "constructor") && s.constructor;
    return typeof r == "function" && r instanceof r && DT.call(r) === LG;
  }
  VT.isPlainObject = VG;
  function jG(e) {
    return e != null && typeof e == "object";
  }
  function qG(e) {
    if (e == null) return e === void 0 ? DG : MG;
    return Le && Le in Object(e) ? GG(e) : BG(e);
  }
  function GG(e) {
    let s = LT.call(e, Le), r = e[Le], n = !1;
    try {
      e[Le] = void 0, n = !0;
    } catch {}
    let i = UT.call(e);
    if (n) if (s) e[Le] = r; else delete e[Le];
    return i;
  }
  function BG(e) {
    return UT.call(e);
  }
});

var YT = C(function(KT) {
  Object.defineProperty(KT, "__esModule", {
    value: !0
  });
  KT.merge = void 0;
  var Vs = qT(), HG = 20;
  function KG(...e) {
    let s = e.shift(), r = new WeakMap;
    while (e.length > 0) s = BT(s, e.shift(), 0, r);
    return s;
  }
  KT.merge = KG;
  function In(e) {
    if (js(e)) return e.slice();
    return e;
  }
  function BT(e, s, r = 0, n) {
    let i;
    if (r > HG) return;
    if (r++, Us(e) || Us(s) || HT(s)) i = In(s); else if (js(e)) {
      if (i = e.slice(), js(s)) for (let d = 0, c = s.length; d < c; d++) i.push(In(s[d])); else if (Ot(s)) {
        let d = Object.keys(s);
        for (let c = 0, m = d.length; c < m; c++) {
          let h = d[c];
          if (h === "__proto__" || h === "constructor" || h === "prototype") continue;
          i[h] = In(s[h]);
        }
      }
    } else if (Ot(e)) if (Ot(s)) {
      if (!FG(e, s)) return s;
      i = Object.assign({}, e);
      let d = Object.keys(s);
      for (let c = 0, m = d.length; c < m; c++) {
        let h = d[c];
        if (h === "__proto__" || h === "constructor" || h === "prototype") continue;
        let f = s[h];
        if (Us(f)) if (typeof f > "u") delete i[h]; else i[h] = f; else {
          let S = i[h], k = f;
          if (GT(e, h, n) || GT(s, h, n)) delete i[h]; else {
            if (Ot(S) && Ot(k)) {
              let I = n.get(S) || [], y = n.get(k) || [];
              I.push({
                obj: e,
                key: h
              }), y.push({
                obj: s,
                key: h
              }), n.set(S, I), n.set(k, y);
            }
            i[h] = BT(i[h], f, r, n);
          }
        }
      }
    } else i = s;
    return i;
  }
  function GT(e, s, r) {
    let n = r.get(e[s]) || [];
    for (let i = 0, d = n.length; i < d; i++) {
      let c = n[i];
      if (c.key === s && c.obj === e) return !0;
    }
    return !1;
  }
  function js(e) {
    return Array.isArray(e);
  }
  function HT(e) {
    return typeof e === "function";
  }
  function Ot(e) {
    return !Us(e) && !js(e) && !HT(e) && typeof e === "object";
  }
  function Us(e) {
    return typeof e === "string" || typeof e === "number" || typeof e === "boolean" || typeof e > "u" || e instanceof Date || e instanceof RegExp || e === null;
  }
  function FG(e, s) {
    if (!Vs.isPlainObject(e) || !Vs.isPlainObject(s)) return !1;
    return !0;
  }
});

var XT = C(function(WT) {
  Object.defineProperty(WT, "__esModule", {
    value: !0
  });
  WT.callWithTimeout = WT.TimeoutError = void 0;
  class qs extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, qs.prototype);
    }
  }
  WT.TimeoutError = qs;
  function YG(e, s) {
    let r, n = new Promise(function(d, c) {
      r = setTimeout(function() {
        c(new qs("Operation timed out."));
      }, s);
    });
    return Promise.race([ e, n ]).then(i => (clearTimeout(r), i), i => {
      throw clearTimeout(r), i;
    });
  }
  WT.callWithTimeout = YG;
});

var ew = C(function(JT) {
  Object.defineProperty(JT, "__esModule", {
    value: !0
  });
  JT.isUrlIgnored = JT.urlMatches = void 0;
  function QT(e, s) {
    if (typeof s === "string") return e === s; else return !!e.match(s);
  }
  JT.urlMatches = QT;
  function $G(e, s) {
    if (!s) return !1;
    for (let r of s) if (QT(e, r)) return !0;
    return !1;
  }
  JT.isUrlIgnored = $G;
});

var nw = C(function(sw) {
  Object.defineProperty(sw, "__esModule", {
    value: !0
  });
  sw.Deferred = void 0;
  class tw {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((e, s) => {
        this._resolve = e, this._reject = s;
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(e) {
      this._resolve(e);
    }
    reject(e) {
      this._reject(e);
    }
  }
  sw.Deferred = tw;
});

var dw = C(function(iw) {
  Object.defineProperty(iw, "__esModule", {
    value: !0
  });
  iw.BindOnceFuture = void 0;
  var ow = nw();
  class aw {
    _isCalled=!1;
    _deferred=new ow.Deferred;
    _callback;
    _that;
    constructor(e, s) {
      this._callback = e, this._that = s;
    }
    get isCalled() {
      return this._isCalled;
    }
    get promise() {
      return this._deferred.promise;
    }
    call(...e) {
      if (!this._isCalled) {
        this._isCalled = !0;
        try {
          Promise.resolve(this._callback.call(this._that, ...e)).then(s => this._deferred.resolve(s), s => this._deferred.reject(s));
        } catch (s) {
          this._deferred.reject(s);
        }
      }
      return this._deferred.promise;
    }
  }
  iw.BindOnceFuture = aw;
});

var pw = C(function(hw) {
  Object.defineProperty(hw, "__esModule", {
    value: !0
  });
  hw.diagLogLevelFromString = void 0;
  var V = ja(), cw = {
    ALL: V.DiagLogLevel.ALL,
    VERBOSE: V.DiagLogLevel.VERBOSE,
    DEBUG: V.DiagLogLevel.DEBUG,
    INFO: V.DiagLogLevel.INFO,
    WARN: V.DiagLogLevel.WARN,
    ERROR: V.DiagLogLevel.ERROR,
    NONE: V.DiagLogLevel.NONE
  };
  function QG(e) {
    if (e == null) return;
    let s = cw[e.toUpperCase()];
    if (s == null) return V.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(cw)}, using default`), 
    V.DiagLogLevel.INFO;
    return s;
  }
  hw.diagLogLevelFromString = QG;
});

var fw = C(function(mw) {
  Object.defineProperty(mw, "__esModule", {
    value: !0
  });
  mw._export = void 0;
  var Gs = ja(), _w = Ct();
  function JG(e, s) {
    return new Promise(r => {
      Gs.context.with(_w.suppressTracing(Gs.context.active()), () => {
        e.export(s, r);
      });
    });
  }
  mw._export = JG;
});

var qf = C(function(w) {
  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.internal = w.diagLogLevelFromString = w.BindOnceFuture = w.urlMatches = w.isUrlIgnored = w.callWithTimeout = w.TimeoutError = w.merge = w.TraceState = w.unsuppressTracing = w.suppressTracing = w.isTracingSuppressed = w.setRPCMetadata = w.getRPCMetadata = w.deleteRPCMetadata = w.RPCType = w.parseTraceParent = w.W3CTraceContextPropagator = w.TRACE_STATE_HEADER = w.TRACE_PARENT_HEADER = w.CompositePropagator = w.otperformance = w.getStringListFromEnv = w.getNumberFromEnv = w.getBooleanFromEnv = w.getStringFromEnv = w._globalThis = w.SDK_INFO = w.parseKeyPairsIntoRecord = w.ExportResultCode = w.unrefTimer = w.timeInputToHrTime = w.millisToHrTime = w.isTimeInputHrTime = w.isTimeInput = w.hrTimeToTimeStamp = w.hrTimeToNanoseconds = w.hrTimeToMilliseconds = w.hrTimeToMicroseconds = w.hrTimeDuration = w.hrTime = w.getTimeOrigin = w.addHrTimes = w.loggingErrorHandler = w.setGlobalErrorHandler = w.globalErrorHandler = w.sanitizeAttributes = w.isAttributeValue = w.AnchoredClock = w.W3CBaggagePropagator = void 0;
  var ZG = _u();
  Object.defineProperty(w, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function() {
      return ZG.W3CBaggagePropagator;
    }
  });
  var eB = bu();
  Object.defineProperty(w, "AnchoredClock", {
    enumerable: !0,
    get: function() {
      return eB.AnchoredClock;
    }
  });
  var bw = yu();
  Object.defineProperty(w, "isAttributeValue", {
    enumerable: !0,
    get: function() {
      return bw.isAttributeValue;
    }
  });
  Object.defineProperty(w, "sanitizeAttributes", {
    enumerable: !0,
    get: function() {
      return bw.sanitizeAttributes;
    }
  });
  var Ew = Iu();
  Object.defineProperty(w, "globalErrorHandler", {
    enumerable: !0,
    get: function() {
      return Ew.globalErrorHandler;
    }
  });
  Object.defineProperty(w, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function() {
      return Ew.setGlobalErrorHandler;
    }
  });
  var tB = An();
  Object.defineProperty(w, "loggingErrorHandler", {
    enumerable: !0,
    get: function() {
      return tB.loggingErrorHandler;
    }
  });
  var ne = oT();
  Object.defineProperty(w, "addHrTimes", {
    enumerable: !0,
    get: function() {
      return ne.addHrTimes;
    }
  });
  Object.defineProperty(w, "getTimeOrigin", {
    enumerable: !0,
    get: function() {
      return ne.getTimeOrigin;
    }
  });
  Object.defineProperty(w, "hrTime", {
    enumerable: !0,
    get: function() {
      return ne.hrTime;
    }
  });
  Object.defineProperty(w, "hrTimeDuration", {
    enumerable: !0,
    get: function() {
      return ne.hrTimeDuration;
    }
  });
  Object.defineProperty(w, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function() {
      return ne.hrTimeToMicroseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function() {
      return ne.hrTimeToMilliseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function() {
      return ne.hrTimeToNanoseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function() {
      return ne.hrTimeToTimeStamp;
    }
  });
  Object.defineProperty(w, "isTimeInput", {
    enumerable: !0,
    get: function() {
      return ne.isTimeInput;
    }
  });
  Object.defineProperty(w, "isTimeInputHrTime", {
    enumerable: !0,
    get: function() {
      return ne.isTimeInputHrTime;
    }
  });
  Object.defineProperty(w, "millisToHrTime", {
    enumerable: !0,
    get: function() {
      return ne.millisToHrTime;
    }
  });
  Object.defineProperty(w, "timeInputToHrTime", {
    enumerable: !0,
    get: function() {
      return ne.timeInputToHrTime;
    }
  });
  var sB = lT();
  Object.defineProperty(w, "unrefTimer", {
    enumerable: !0,
    get: function() {
      return sB.unrefTimer;
    }
  });
  var rB = cT();
  Object.defineProperty(w, "ExportResultCode", {
    enumerable: !0,
    get: function() {
      return rB.ExportResultCode;
    }
  });
  var nB = Tn();
  Object.defineProperty(w, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function() {
      return nB.parseKeyPairsIntoRecord;
    }
  });
  var Ue = Rn();
  Object.defineProperty(w, "SDK_INFO", {
    enumerable: !0,
    get: function() {
      return Ue.SDK_INFO;
    }
  });
  Object.defineProperty(w, "_globalThis", {
    enumerable: !0,
    get: function() {
      return Ue._globalThis;
    }
  });
  Object.defineProperty(w, "getStringFromEnv", {
    enumerable: !0,
    get: function() {
      return Ue.getStringFromEnv;
    }
  });
  Object.defineProperty(w, "getBooleanFromEnv", {
    enumerable: !0,
    get: function() {
      return Ue.getBooleanFromEnv;
    }
  });
  Object.defineProperty(w, "getNumberFromEnv", {
    enumerable: !0,
    get: function() {
      return Ue.getNumberFromEnv;
    }
  });
  Object.defineProperty(w, "getStringListFromEnv", {
    enumerable: !0,
    get: function() {
      return Ue.getStringListFromEnv;
    }
  });
  Object.defineProperty(w, "otperformance", {
    enumerable: !0,
    get: function() {
      return Ue.otperformance;
    }
  });
  var oB = _T();
  Object.defineProperty(w, "CompositePropagator", {
    enumerable: !0,
    get: function() {
      return oB.CompositePropagator;
    }
  });
  var Bs = kT();
  Object.defineProperty(w, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function() {
      return Bs.TRACE_PARENT_HEADER;
    }
  });
  Object.defineProperty(w, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function() {
      return Bs.TRACE_STATE_HEADER;
    }
  });
  Object.defineProperty(w, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function() {
      return Bs.W3CTraceContextPropagator;
    }
  });
  Object.defineProperty(w, "parseTraceParent", {
    enumerable: !0,
    get: function() {
      return Bs.parseTraceParent;
    }
  });
  var Hs = MT();
  Object.defineProperty(w, "RPCType", {
    enumerable: !0,
    get: function() {
      return Hs.RPCType;
    }
  });
  Object.defineProperty(w, "deleteRPCMetadata", {
    enumerable: !0,
    get: function() {
      return Hs.deleteRPCMetadata;
    }
  });
  Object.defineProperty(w, "getRPCMetadata", {
    enumerable: !0,
    get: function() {
      return Hs.getRPCMetadata;
    }
  });
  Object.defineProperty(w, "setRPCMetadata", {
    enumerable: !0,
    get: function() {
      return Hs.setRPCMetadata;
    }
  });
  var Pn = Ct();
  Object.defineProperty(w, "isTracingSuppressed", {
    enumerable: !0,
    get: function() {
      return Pn.isTracingSuppressed;
    }
  });
  Object.defineProperty(w, "suppressTracing", {
    enumerable: !0,
    get: function() {
      return Pn.suppressTracing;
    }
  });
  Object.defineProperty(w, "unsuppressTracing", {
    enumerable: !0,
    get: function() {
      return Pn.unsuppressTracing;
    }
  });
  var aB = On();
  Object.defineProperty(w, "TraceState", {
    enumerable: !0,
    get: function() {
      return aB.TraceState;
    }
  });
  var iB = YT();
  Object.defineProperty(w, "merge", {
    enumerable: !0,
    get: function() {
      return iB.merge;
    }
  });
  var Sw = XT();
  Object.defineProperty(w, "TimeoutError", {
    enumerable: !0,
    get: function() {
      return Sw.TimeoutError;
    }
  });
  Object.defineProperty(w, "callWithTimeout", {
    enumerable: !0,
    get: function() {
      return Sw.callWithTimeout;
    }
  });
  var Tw = ew();
  Object.defineProperty(w, "isUrlIgnored", {
    enumerable: !0,
    get: function() {
      return Tw.isUrlIgnored;
    }
  });
  Object.defineProperty(w, "urlMatches", {
    enumerable: !0,
    get: function() {
      return Tw.urlMatches;
    }
  });
  var lB = dw();
  Object.defineProperty(w, "BindOnceFuture", {
    enumerable: !0,
    get: function() {
      return lB.BindOnceFuture;
    }
  });
  var dB = pw();
  Object.defineProperty(w, "diagLogLevelFromString", {
    enumerable: !0,
    get: function() {
      return dB.diagLogLevelFromString;
    }
  });
  var ww = fw();
  w.internal = {
    _export: ww._export
  };
});

var Mn = C(function(yw) {
  Object.defineProperty(yw, "__esModule", {
    value: !0
  });
  yw._clearDefaultServiceNameCache = yw.defaultServiceName = void 0;
  var Nt;
  function cB() {
    if (Nt === void 0) try {
      let e = globalThis.process.argv0;
      Nt = e ? `unknown_service:${e}` : "unknown_service";
    } catch {
      Nt = "unknown_service";
    }
    return Nt;
  }
  yw.defaultServiceName = cB;
  function hB() {
    Nt = void 0;
  }
  yw._clearDefaultServiceNameCache = hB;
});

var zw = C(function(vw) {
  Object.defineProperty(vw, "__esModule", {
    value: !0
  });
  vw.isPromiseLike = void 0;
  var pB = e => e !== null && typeof e === "object" && typeof e.then === "function";
  vw.isPromiseLike = pB;
});

var xn = C(function(Nw) {
  Object.defineProperty(Nw, "__esModule", {
    value: !0
  });
  Nw.defaultResource = Nw.emptyResource = Nw.resourceFromDetectedResource = Nw.resourceFromAttributes = void 0;
  var pe = ja(), st = qf(), J = $Be(), Ow = Mn(), he = zw();
  class It {
    _rawAttributes;
    _asyncAttributesPending=!1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(e, s) {
      let r = new It({}, s);
      return r._rawAttributes = kw(e), r._asyncAttributesPending = e.filter(([n, i]) => he.isPromiseLike(i)).length > 0, 
      r;
    }
    constructor(e, s) {
      let r = e.attributes ?? {};
      this._rawAttributes = Object.entries(r).map(([n, i]) => {
        if (he.isPromiseLike(i)) this._asyncAttributesPending = !0;
        return [ n, i ];
      }), this._rawAttributes = kw(this._rawAttributes), this._schemaUrl = fB(s?.schemaUrl);
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (!this.asyncAttributesPending) return;
      for (let e = 0; e < this._rawAttributes.length; e++) {
        let [s, r] = this._rawAttributes[e];
        this._rawAttributes[e] = [ s, he.isPromiseLike(r) ? await r : r ];
      }
      this._asyncAttributesPending = !1;
    }
    get attributes() {
      if (this.asyncAttributesPending) pe.diag.error("Accessing resource attributes before async attributes settled");
      if (this._memoizedAttributes) return this._memoizedAttributes;
      let e = {};
      for (let [s, r] of this._rawAttributes) {
        if (he.isPromiseLike(r)) {
          pe.diag.debug(`Unsettled resource attribute ${s} skipped`);
          continue;
        }
        if (r != null) e[s] ??= r;
      }
      if (!this._asyncAttributesPending) this._memoizedAttributes = e;
      return e;
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(e) {
      if (e == null) return this;
      let s = bB(this, e), r = s ? {
        schemaUrl: s
      } : void 0;
      return It.FromAttributeList([ ...e.getRawAttributes(), ...this.getRawAttributes() ], r);
    }
  }
  function Dn(e, s) {
    return It.FromAttributeList(Object.entries(e), s);
  }
  Nw.resourceFromAttributes = Dn;
  function _B(e, s) {
    return new It(e, s);
  }
  Nw.resourceFromDetectedResource = _B;
  function mB() {
    return Dn({});
  }
  Nw.emptyResource = mB;
  function gB() {
    return Dn({
      [J.ATTR_SERVICE_NAME]: Ow.defaultServiceName(),
      [J.ATTR_TELEMETRY_SDK_LANGUAGE]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_LANGUAGE],
      [J.ATTR_TELEMETRY_SDK_NAME]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_NAME],
      [J.ATTR_TELEMETRY_SDK_VERSION]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_VERSION]
    });
  }
  Nw.defaultResource = gB;
  function kw(e) {
    return e.map(([s, r]) => {
      if (he.isPromiseLike(r)) return [ s, r.catch(n => {
        pe.diag.debug("promise rejection for resource attribute: %s - %s", s, n);
        return;
      }) ];
      return [ s, r ];
    });
  }
  function fB(e) {
    if (typeof e === "string" || e === void 0) return e;
    pe.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e);
    return;
  }
  function bB(e, s) {
    let r = e?.schemaUrl, n = s?.schemaUrl, i = r === void 0 || r === "", d = n === void 0 || n === "";
    if (i) return n;
    if (d) return r;
    if (r === n) return r;
    pe.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', r, n);
    return;
  }
});

var xw = C(function(Mw) {
  Object.defineProperty(Mw, "__esModule", {
    value: !0
  });
  Mw.detectResources = void 0;
  var Ks = ja(), rt = xn(), wB = (e = {}) => (e.detectors || []).map(r => {
    try {
      let n = rt.resourceFromDetectedResource(r.detect(e));
      return Ks.diag.debug(`${r.constructor.name} found resource.`, n), n;
    } catch (n) {
      return Ks.diag.debug(`${r.constructor.name} failed: ${n.message}`), rt.emptyResource();
    }
  }).reduce((r, n) => r.merge(n), rt.emptyResource());
  Mw.detectResources = wB;
});

var Gw = C(function(jw) {
  Object.defineProperty(jw, "__esModule", {
    value: !0
  });
  jw.envDetector = void 0;
  var Lw = ja(), Uw = $Be(), Fs = qf();
  class Vw {
    _MAX_LENGTH=255;
    _COMMA_SEPARATOR=",";
    _LABEL_KEY_VALUE_SPLITTER="=";
    detect(e) {
      let s = {}, r = Fs.getStringFromEnv("OTEL_RESOURCE_ATTRIBUTES"), n = Fs.getStringFromEnv("OTEL_SERVICE_NAME");
      if (r) try {
        let i = this._parseResourceAttributes(r);
        Object.assign(s, i);
      } catch (i) {
        Lw.diag.debug(`EnvDetector failed: ${i instanceof Error ? i.message : i}`);
      }
      if (n) s[Uw.ATTR_SERVICE_NAME] = n;
      return {
        attributes: s
      };
    }
    _parseResourceAttributes(e) {
      if (!e) return {};
      let s = {}, r = e.split(this._COMMA_SEPARATOR).filter(n => n.trim() !== "");
      for (let n of r) {
        let i = n.split(this._LABEL_KEY_VALUE_SPLITTER);
        if (i.length !== 2) throw Error(`Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${n}". Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`);
        let [d, c] = i, m = d.trim(), h = c.trim();
        if (m.length === 0) throw Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${n}".`);
        let f, S;
        try {
          f = decodeURIComponent(m), S = decodeURIComponent(h);
        } catch (k) {
          throw Error(`Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${n}": ${k instanceof Error ? k.message : k}`);
        }
        if (f.length > this._MAX_LENGTH) throw Error(`Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${f}".`);
        if (S.length > this._MAX_LENGTH) throw Error(`Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${f}".`);
        s[f] = S;
      }
      return s;
    }
  }
  jw.envDetector = new Vw;
});

var Pt = C(function(Bw) {
  Object.defineProperty(Bw, "__esModule", {
    value: !0
  });
  Bw.ATTR_WEBENGINE_VERSION = Bw.ATTR_WEBENGINE_NAME = Bw.ATTR_WEBENGINE_DESCRIPTION = Bw.ATTR_SERVICE_NAMESPACE = Bw.ATTR_SERVICE_INSTANCE_ID = Bw.ATTR_PROCESS_RUNTIME_VERSION = Bw.ATTR_PROCESS_RUNTIME_NAME = Bw.ATTR_PROCESS_RUNTIME_DESCRIPTION = Bw.ATTR_PROCESS_PID = Bw.ATTR_PROCESS_OWNER = Bw.ATTR_PROCESS_EXECUTABLE_PATH = Bw.ATTR_PROCESS_EXECUTABLE_NAME = Bw.ATTR_PROCESS_COMMAND_ARGS = Bw.ATTR_PROCESS_COMMAND = Bw.ATTR_OS_VERSION = Bw.ATTR_OS_TYPE = Bw.ATTR_K8S_POD_NAME = Bw.ATTR_K8S_NAMESPACE_NAME = Bw.ATTR_K8S_DEPLOYMENT_NAME = Bw.ATTR_K8S_CLUSTER_NAME = Bw.ATTR_HOST_TYPE = Bw.ATTR_HOST_NAME = Bw.ATTR_HOST_IMAGE_VERSION = Bw.ATTR_HOST_IMAGE_NAME = Bw.ATTR_HOST_IMAGE_ID = Bw.ATTR_HOST_ID = Bw.ATTR_HOST_ARCH = Bw.ATTR_CONTAINER_NAME = Bw.ATTR_CONTAINER_IMAGE_TAGS = Bw.ATTR_CONTAINER_IMAGE_NAME = Bw.ATTR_CONTAINER_ID = Bw.ATTR_CLOUD_REGION = Bw.ATTR_CLOUD_PROVIDER = Bw.ATTR_CLOUD_AVAILABILITY_ZONE = Bw.ATTR_CLOUD_ACCOUNT_ID = void 0;
  Bw.ATTR_CLOUD_ACCOUNT_ID = "cloud.account.id";
  Bw.ATTR_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  Bw.ATTR_CLOUD_PROVIDER = "cloud.provider";
  Bw.ATTR_CLOUD_REGION = "cloud.region";
  Bw.ATTR_CONTAINER_ID = "container.id";
  Bw.ATTR_CONTAINER_IMAGE_NAME = "container.image.name";
  Bw.ATTR_CONTAINER_IMAGE_TAGS = "container.image.tags";
  Bw.ATTR_CONTAINER_NAME = "container.name";
  Bw.ATTR_HOST_ARCH = "host.arch";
  Bw.ATTR_HOST_ID = "host.id";
  Bw.ATTR_HOST_IMAGE_ID = "host.image.id";
  Bw.ATTR_HOST_IMAGE_NAME = "host.image.name";
  Bw.ATTR_HOST_IMAGE_VERSION = "host.image.version";
  Bw.ATTR_HOST_NAME = "host.name";
  Bw.ATTR_HOST_TYPE = "host.type";
  Bw.ATTR_K8S_CLUSTER_NAME = "k8s.cluster.name";
  Bw.ATTR_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  Bw.ATTR_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  Bw.ATTR_K8S_POD_NAME = "k8s.pod.name";
  Bw.ATTR_OS_TYPE = "os.type";
  Bw.ATTR_OS_VERSION = "os.version";
  Bw.ATTR_PROCESS_COMMAND = "process.command";
  Bw.ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
  Bw.ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  Bw.ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  Bw.ATTR_PROCESS_OWNER = "process.owner";
  Bw.ATTR_PROCESS_PID = "process.pid";
  Bw.ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  Bw.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
  Bw.ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  Bw.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
  Bw.ATTR_SERVICE_NAMESPACE = "service.namespace";
  Bw.ATTR_WEBENGINE_DESCRIPTION = "webengine.description";
  Bw.ATTR_WEBENGINE_NAME = "webengine.name";
  Bw.ATTR_WEBENGINE_VERSION = "webengine.version";
});

var Ww = C(function(Fw) {
  Object.defineProperty(Fw, "__esModule", {
    value: !0
  });
  Fw.getMachineId = void 0;
  var Kw = Ne("process"), Ve;
  async function rH() {
    if (!Ve) switch (Kw.platform) {
     case "darwin":
      Ve = (await import("./chunk-1bjvskr6.js").then(m => we(m.default))).getMachineId;
      break;

     case "linux":
      Ve = (await import("./chunk-0425r7b2.js").then(m => we(m.default))).getMachineId;
      break;

     case "freebsd":
      Ve = (await import("./chunk-m8d3kb6h.js").then(m => we(m.default))).getMachineId;
      break;

     case "win32":
      Ve = (await import("./chunk-eky74r29.js").then(m => we(m.default))).getMachineId;
      break;

     default:
      Ve = (await import("./chunk-exzcgfqf.js").then(m => we(m.default))).getMachineId;
      break;
    }
    return Ve();
  }
  Fw.getMachineId = rH;
});

var Ln = C(function($w) {
  Object.defineProperty($w, "__esModule", {
    value: !0
  });
  $w.normalizeType = $w.normalizeArch = void 0;
  var nH = e => {
    switch (e) {
     case "arm":
      return "arm32";

     case "ppc":
      return "ppc32";

     case "x64":
      return "amd64";

     default:
      return e;
    }
  };
  $w.normalizeArch = nH;
  var oH = e => {
    switch (e) {
     case "sunos":
      return "solaris";

     case "win32":
      return "windows";

     default:
      return e;
    }
  };
  $w.normalizeType = oH;
});

var sA = C(function(eA) {
  Object.defineProperty(eA, "__esModule", {
    value: !0
  });
  eA.hostDetector = void 0;
  var nt = Pt(), Ys = Ne("os"), Qw = Ww(), Jw = Ln();
  class Zw {
    detect(e) {
      return {
        attributes: {
          [nt.ATTR_HOST_NAME]: Ys.hostname(),
          [nt.ATTR_HOST_ARCH]: Jw.normalizeArch(Ys.arch()),
          [nt.ATTR_HOST_ID]: Qw.getMachineId()
        }
      };
    }
  }
  eA.hostDetector = new Zw;
});

var iA = C(function(oA) {
  Object.defineProperty(oA, "__esModule", {
    value: !0
  });
  oA.osDetector = void 0;
  var Ws = Pt(), $s = Ne("os"), rA = Ln();
  class nA {
    detect(e) {
      return {
        attributes: {
          [Ws.ATTR_OS_TYPE]: rA.normalizeType($s.platform()),
          [Ws.ATTR_OS_VERSION]: $s.release()
        }
      };
    }
  }
  oA.osDetector = new nA;
});

var pA = C(function(hA) {
  Object.defineProperty(hA, "__esModule", {
    value: !0
  });
  hA.processDetector = void 0;
  var lA = ja(), j = Pt(), dA = Ne("os");
  class cA {
    detect(e) {
      let s = {
        [j.ATTR_PROCESS_PID]: process.pid,
        [j.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
        [j.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
        [j.ATTR_PROCESS_COMMAND_ARGS]: [ process.argv[0], ...process.execArgv, ...process.argv.slice(1) ],
        [j.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
        [j.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
        [j.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
      };
      if (process.argv.length > 1) s[j.ATTR_PROCESS_COMMAND] = process.argv[1];
      try {
        let r = dA.userInfo();
        s[j.ATTR_PROCESS_OWNER] = r.username;
      } catch (r) {
        lA.diag.debug(`error obtaining process owner: ${r}`);
      }
      return {
        attributes: s
      };
    }
  }
  hA.processDetector = new cA;
});

var EA = C(function(fA) {
  Object.defineProperty(fA, "__esModule", {
    value: !0
  });
  fA.serviceInstanceIdDetector = void 0;
  var _A = Pt(), mA = Ne("crypto");
  class gA {
    detect(e) {
      return {
        attributes: {
          [_A.ATTR_SERVICE_INSTANCE_ID]: mA.randomUUID()
        }
      };
    }
  }
  fA.serviceInstanceIdDetector = new gA;
});

var SA = C(function(ot) {
  Object.defineProperty(ot, "__esModule", {
    value: !0
  });
  ot.serviceInstanceIdDetector = ot.processDetector = ot.osDetector = ot.hostDetector = void 0;
  var iH = sA();
  Object.defineProperty(ot, "hostDetector", {
    enumerable: !0,
    get: function() {
      return iH.hostDetector;
    }
  });
  var lH = iA();
  Object.defineProperty(ot, "osDetector", {
    enumerable: !0,
    get: function() {
      return lH.osDetector;
    }
  });
  var dH = pA();
  Object.defineProperty(ot, "processDetector", {
    enumerable: !0,
    get: function() {
      return dH.processDetector;
    }
  });
  var cH = EA();
  Object.defineProperty(ot, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function() {
      return cH.serviceInstanceIdDetector;
    }
  });
});

var TA = C(function(at) {
  Object.defineProperty(at, "__esModule", {
    value: !0
  });
  at.serviceInstanceIdDetector = at.processDetector = at.osDetector = at.hostDetector = void 0;
  var Xs = SA();
  Object.defineProperty(at, "hostDetector", {
    enumerable: !0,
    get: function() {
      return Xs.hostDetector;
    }
  });
  Object.defineProperty(at, "osDetector", {
    enumerable: !0,
    get: function() {
      return Xs.osDetector;
    }
  });
  Object.defineProperty(at, "processDetector", {
    enumerable: !0,
    get: function() {
      return Xs.processDetector;
    }
  });
  Object.defineProperty(at, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function() {
      return Xs.serviceInstanceIdDetector;
    }
  });
});

var yA = C(function(wA) {
  Object.defineProperty(wA, "__esModule", {
    value: !0
  });
  wA.noopDetector = wA.NoopDetector = void 0;
  class Un {
    detect() {
      return {
        attributes: {}
      };
    }
  }
  wA.NoopDetector = Un;
  wA.noopDetector = new Un;
});

var RA = C(function(Re) {
  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.noopDetector = Re.serviceInstanceIdDetector = Re.processDetector = Re.osDetector = Re.hostDetector = Re.envDetector = void 0;
  var _H = Gw();
  Object.defineProperty(Re, "envDetector", {
    enumerable: !0,
    get: function() {
      return _H.envDetector;
    }
  });
  var Js = TA();
  Object.defineProperty(Re, "hostDetector", {
    enumerable: !0,
    get: function() {
      return Js.hostDetector;
    }
  });
  Object.defineProperty(Re, "osDetector", {
    enumerable: !0,
    get: function() {
      return Js.osDetector;
    }
  });
  Object.defineProperty(Re, "processDetector", {
    enumerable: !0,
    get: function() {
      return Js.processDetector;
    }
  });
  Object.defineProperty(Re, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function() {
      return Js.serviceInstanceIdDetector;
    }
  });
  var mH = yA();
  Object.defineProperty(Re, "noopDetector", {
    enumerable: !0,
    get: function() {
      return mH.noopDetector;
    }
  });
});

var Qpt = C(function(ae) {
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.defaultServiceName = ae.emptyResource = ae.defaultResource = ae.resourceFromAttributes = ae.serviceInstanceIdDetector = ae.processDetector = ae.osDetector = ae.hostDetector = ae.envDetector = ae.detectResources = void 0;
  var fH = xw();
  Object.defineProperty(ae, "detectResources", {
    enumerable: !0,
    get: function() {
      return fH.detectResources;
    }
  });
  var Mt = RA();
  Object.defineProperty(ae, "envDetector", {
    enumerable: !0,
    get: function() {
      return Mt.envDetector;
    }
  });
  Object.defineProperty(ae, "hostDetector", {
    enumerable: !0,
    get: function() {
      return Mt.hostDetector;
    }
  });
  Object.defineProperty(ae, "osDetector", {
    enumerable: !0,
    get: function() {
      return Mt.osDetector;
    }
  });
  Object.defineProperty(ae, "processDetector", {
    enumerable: !0,
    get: function() {
      return Mt.processDetector;
    }
  });
  Object.defineProperty(ae, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function() {
      return Mt.serviceInstanceIdDetector;
    }
  });
  var Vn = xn();
  Object.defineProperty(ae, "resourceFromAttributes", {
    enumerable: !0,
    get: function() {
      return Vn.resourceFromAttributes;
    }
  });
  Object.defineProperty(ae, "defaultResource", {
    enumerable: !0,
    get: function() {
      return Vn.defaultResource;
    }
  });
  Object.defineProperty(ae, "emptyResource", {
    enumerable: !0,
    get: function() {
      return Vn.emptyResource;
    }
  });
  var bH = Mn();
  Object.defineProperty(ae, "defaultServiceName", {
    enumerable: !0,
    get: function() {
      return bH.defaultServiceName;
    }
  });
});

async function cHs(e, s, r) {
  return;
}

function cr() {
  return zX(a.AWS_REGION) || zX(a.AWS_DEFAULT_REGION);
}

function qpt() {
  return cr() || "us-east-1";
}

function dr() {
  return `${a.AWS_CONFIG_FILE ?? ""}|${a.AWS_SHARED_CREDENTIALS_FILE ?? ""}|${a.AWS_PROFILE ?? ""}`;
}

class Na {
  resolvedSharedConfigRegions=new Map;
  readAwsSharedConfigRegion=lo(async () => {
    let e = dr(), s;
    try {
      let [r, n] = await Promise.all([ import("./chunk-e5ae40cj.js").then(m => we(m.default, 1)), import("./chunk-hjq3chaw.js").then(m => we(m.default, 1)) ]), i = r.loadConfig ?? r.default?.loadConfig, d = n.NODE_REGION_CONFIG_FILE_OPTIONS ?? n.default?.NODE_REGION_CONFIG_FILE_OPTIONS, c = await i({
        environmentVariableSelector: () => {},
        configFileSelector: m => m.region,
        default: () => {}
      }, d)();
      s = zX(c?.trim());
    } catch {
      s = void 0;
    }
    return this.resolvedSharedConfigRegions.set(e, s), s;
  }, dr);
}

var Yy = new K(() => new Na);

function Ia() {
  return Yy.of(B().host);
}

async function WO() {
  let e = cr();
  if (e) return e;
  return await Ia().readAwsSharedConfigRegion() || qpt();
}

function k8e() {
  return DTo().region;
}

function DTo() {
  let e = cr();
  if (e) return {
    region: e,
    source: "env"
  };
  let s = Ia().resolvedSharedConfigRegions.get(dr());
  if (s) return {
    region: s,
    source: "shared-config"
  };
  let r = !!(a.AWS_REGION || a.AWS_DEFAULT_REGION);
  return {
    region: qpt(),
    source: r ? "env-invalid" : "default"
  };
}

function z(e, s) {
  return Object.freeze({
    name: e,
    header: s
  });
}

function Wy(e) {
  return Object.freeze({
    name: e,
    header: null
  });
}

var R0t = z("claude_code", "claude-code-20250219"), ove = z("oauth_auth", Ap), ion = z("interleaved_thinking", "interleaved-thinking-2025-05-14"), Iw = z("long_context", "context-1m-2025-08-07"), rIe = z("context_management", "context-management-2025-06-27"), _ie = z("structured_outputs", "structured-outputs-2025-12-15"), yxr = z("web_search", "web-search-2025-03-05"), LTo = z("tool_search", "advanced-tool-use-2025-11-20"), YGn = z("tool_search", "tool-search-tool-2025-10-19"), T8e = z("effort", "effort-2025-11-24"), _xr = z("task_budgets", "task-budgets-2026-03-13"), x0t = z("prompt_caching_scope", "prompt-caching-scope-2026-01-05"), A8e = z("prompt_caching_evict", "prompt-caching-evict-2026-05-12"), YP = z("cache_keepalive", "cache-keepalive-2026-09-03"), P0t = z("extended_cache_ttl", "extended-cache-ttl-2025-04-11"), aon = z("speed", "fast-mode-2026-02-01"), lon = z("redact_thinking", "redact-thinking-2026-02-12"), C8e = z("thinking_resumption", "thinking-resumption-2026-07-17"), WZ = z("thinking_token_count", "thinking-token-count-2026-05-13"), cU = z("afk_mode", "afk-mode-2026-01-31"), bxr = z("advisor_tool", "advisor-tool-2026-03-01"), sve = z("cache_diagnosis", "cache-diagnosis-2026-04-07"), NTo = z("context_hint", "context-hint-2026-04-09"), don = z("mcp_servers", "mcp-servers-2025-12-04"), $To = z("files_api", "files-api-2025-04-14"), FTo = z("environments", "environments-2025-11-01"), con = z("ccr_byoc", "ccr-byoc-2025-07-29"), jR = Wy("mid_conversation_system"), HBe = "mid-conversation-system-2026-04-07", ej = z("per_message_effort", "per-turn-control-2026-07-01"), IK = z("per_turn_timing", "timing-2026-09-09"), kb = z("mid_conv_tool_change", "mid-conversation-tool-changes-2026-07-01"), G_ = z("inline_tools", "inline-tools-2026-09-15"), uU = z("server_side_fallback", "server-side-fallback-2026-06-01"), iS = z("server_side_fallback_category", "server-side-fallback-2026-07-01"), oG = z("fallback_credit", "fallback-credit-2026-06-01"), XGn = z("mid_conv_cache_promotion_latch", "x-cc-internal-mid-conv-cache-promotion"), UTo = z("mid_conv_cache_promotion_ok_latch", "x-cc-internal-mid-conv-cache-promotion-ok"), uon = null, BTo = z("auto_mode_classifier", "auto-mode-classifier-2026-07-16"), wC = z("dangerous_tool_use", "dangerous-tool-use-2026-09-03"), $y = null, zZ = z("thinking_display_updates", "thinking-display-updates-2026-08-18"), tj = z("thinking_binding_controls", "thinking-binding-controls-2026-08-01"), nj = z("message_threads", "message-threads-2026-08-12"), sG = z("mid_conversation_system_clear_at", "mid-conversation-system-clear-at-2026-08-21"), Xy = Object.freeze([ R0t, ove, ion, Iw, rIe, _ie, yxr, LTo, YGn, T8e, _xr, x0t, A8e, YP, P0t, aon, lon, C8e, WZ, cU, bxr, sve, NTo, don, $To, FTo, con, jR, ej, IK, kb, G_, uU, iS, oG, uon, BTo, wC, $y, zZ, nj, sG, tj ].filter(e => e !== null)), Pa = new Map(Xy.filter(e => e.header !== null).map(e => [ e.header, e ]));

function Ypt(e) {
  return Pa.get(e);
}

function jTo(e) {
  return Pa.get(e) ?? Object.freeze({
    name: e,
    header: e
  });
}

function t$(e) {
  return e.filter(s => s.header !== null).map(s => s.header);
}

function oIe(e) {
  let s = t$(e);
  return s.length > 0 ? {
    betas: s
  } : {};
}

function I0t(e) {
  return e.toLowerCase().includes("afk-mode");
}

var pon = new Set([ ion, Iw, YGn ]), O0t = new Set([ R0t, ion, rIe, ove ]);

function OK() {
  let e = Oe();
  return e === "firstParty" || pj(e) || e === "foundry";
}

function pU() {
  return a.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS || fU();
}

function fU() {
  return gl("hipaa");
}

function Sxr(e) {
  return fU() ? void 0 : e;
}

function Kh() {
  return OK() && !pU();
}

function Xpt(e) {
  return zj(e, s => s.name === "CredentialsProviderError") !== void 0;
}

var Qy = /ExpiredToken|InvalidSignature|SignatureDoesNotMatch|UnrecognizedClient|InvalidClientTokenId|security token.*(invalid|expired)|signature we calculated does not match|Bearer Token has expired|Authentication failed.*API Key|Missing required parameters in the API Key/i;

function ive(e = a.ANTHROPIC_CUSTOM_HEADERS ?? "") {
  let s = [];
  for (let r of e.split(/\r?\n/)) {
    let n = r.indexOf(":"), i = n === -1 ? "" : r.slice(0, n).trim();
    if (i) s.push([ i, r.slice(n + 1).trim() ]);
  }
  return s;
}

function XP() {
  return Da("x-api-key");
}

function M0t(e = {}) {
  let s = a.ANTHROPIC_API_KEY;
  if (s === void 0 || XP() || Object.entries(e).some(([r, n]) => r.toLowerCase() === "x-api-key" && n !== void 0)) return;
  return {
    "X-Api-Key": s
  };
}

function VMs() {
  return Da("authorization");
}

function WTo() {
  return ive().map(([e]) => e);
}

function Da(e) {
  return WTo().some(s => s.toLowerCase() === e);
}

function Tb() {
  let e = {
    Authorization: void 0
  };
  for (let [s] of ive()) if (s.toLowerCase() === "authorization") e[s] = void 0;
  return e;
}

function n$() {
  let e = {}, s = fU();
  for (let [r, n] of ive()) {
    if (r.toLowerCase() !== "anthropic-beta") continue;
    let i = n.split(",").map(c => c.trim()).filter(Boolean), d = i.filter(c => !I0t(c));
    if (s) e[r] = void 0; else if (d.length !== i.length) e[r] = d.length > 0 ? d.join(",") : void 0; else delete e[r];
  }
  return e;
}

function DBe(e, s) {
  return Qy.test(`${e ?? ""} ${s ?? ""}`);
}

var JP = {
  __auth: {
    provider: null,
    tokenCache: null,
    resolution: null,
    error: null,
    extraHeaders: {}
  }
};

function sIe() {
  let e = a.ANTHROPIC_AUTH_TOKEN;
  if (e) return `Bearer ${e}`;
  let s, r = Object.fromEntries(ive());
  for (let [n, i] of Object.entries(r)) if (n.toLowerCase() === "authorization") s = i;
  return s || void 0;
}

function Ma(e) {
  if (!e || typeof e !== "object") return !1;
  let s = e;
  return typeof s.AccessKeyId === "string" && typeof s.SecretAccessKey === "string" && typeof s.SessionToken === "string" && s.AccessKeyId.length > 0 && s.SecretAccessKey.length > 0 && s.SessionToken.length > 0;
}

function KMs(e) {
  if (!e || typeof e !== "object") return null;
  let s = e;
  if (Ma(s.Credentials)) return s.Credentials;
  if (Ma(s)) return s;
  return null;
}

var xa = 3e4;

function JGn() {
  return a.CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS ?? 6e4;
}

async function zTo() {
  let {loadSharedConfigFiles: e} = await import("./chunk-z98tmv9w.js").then(m => we(m.default, 1));
  await e({
    ignoreCache: !0
  }).catch(() => {});
  let [{STSClient: s, GetCallerIdentityCommand: r}, n] = await Promise.all([ import("./chunk-vnmsj70h.js"), WO() ]), i = new s({
    region: n,
    ...await J1e({
      url: X1e(n),
      region: n,
      requestTimeoutMs: xa
    })
  });
  await Ht(i.send(new r({})), JGn(), "AWS STS");
}

async function qMs() {
  let {loadSharedConfigFiles: e} = await import("./chunk-z98tmv9w.js").then(m => we(m.default, 1)), s = await e().catch(() => {}), r = new Set, n = a.AWS_PROFILE || "default";
  while (s !== void 0 && !r.has(n)) {
    r.add(n);
    let i = {
      ...s.configFile[n],
      ...s.credentialsFile[n]
    };
    if (i.credential_process) return !0;
    if (!i.source_profile) return !1;
    n = i.source_profile;
  }
  return !1;
}

async function YMs() {
  try {
    t("Clearing AWS credential provider cache");
    let [{fromIni: e}, s] = await Promise.all([ import("./chunk-bjsm86dj.js"), WO() ]), r = await dX({
      url: X1e(s),
      requestTimeoutMs: xa
    }), n = e({
      ignoreCache: !0,
      ...r && {
        clientConfig: {
          requestHandler: r
        },
        parentClientConfig: {
          requestHandler: r,
          region: s
        }
      }
    });
    await Ht(n(), JGn(), "AWS ini cache refresh"), t("AWS credential provider cache refreshed");
  } catch (e) {
    t(`Failed to refresh AWS credential cache: ${l(e)}`);
  }
}

class La {
  committed=!1;
}

var Ua = new La;

function wn() {
  return Ua.committed;
}

function O9() {
  Ua.committed = !0;
}

var Jy = new Promise(() => {});

function uu() {
  return Jy;
}

function Jr() {
  return a.CLAUDE_CODE_REMOTE === !0 && a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}

function UH() {
  return a.CLAUDE_CODE_REMOTE === !0 && a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}

function M9() {
  return Jr() || UH();
}

function GTo() {
  return UH() && a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}

function XMs(e, s) {
  return !(e && GTo() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && !a.CLAUDE_CODE_DISABLE_WORKING_SYNC) ? "not_admitted" : s === TYn ? "admitted" : "moved_directory";
}

function WR() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}

function iIe() {
  return WR() && !aae();
}

function QGn(e) {
  return e.hostedWorker || WR() && e.transportPersists !== !1;
}

var Zy = /hooks\.slack\.com\/(?:services|workflows|triggers)\/[A-Za-z0-9/_-]+/gi;

var ur = {
  bearer: [ /\bBearer\s+(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%[0-9A-Fa-f]{2}){7})[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]+|%[0-9A-Fa-f]{2})*/gi, "Bearer <token>" ],
  basic: [ /(:\s*)Basic\s+[A-Za-z0-9+/=]{8,}/gi, "$1Basic <token>" ],
  sk: [ /\bsk-[A-Za-z0-9_-]{20,}/g, "<token>" ]
}, eR = [ /\bBearer\s{1,512}(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){15})(?:eyJ|(?=(?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){0,64}[0-9=]))/i, /:\s{0,512}Basic\s{1,512}(?=[A-Za-z0-9+/=]{16})(?=[A-Za-z0-9+/=]{0,64}[0-9=])/i, /\bsk-(?=[A-Za-z0-9_-]{20})(?=[A-Za-z0-9_-]{0,64}[0-9])/ ], JMs = 4096;

var T1 = new RegExp(`(?:\\b(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-${Be("[A-Za-z0-9+/=%_-]")}|\\bxox[cd]-|(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-(?=[0-9])|xox[cd]-${Be("[A-Za-z0-9+/=%_-]")}(?=[A-Za-z0-9+/=%_-]{16}))`, "i"), Va = [ [ dt("sk-ant-", "[A-Za-z0-9_-]", 8, pr(8)), "<token>" ], [ dt("sk-(?:proj|svcacct|admin)-", "[A-Za-z0-9_-]", 20, pr(20)), "<token>" ] ], qa = [ "AKIA", "ASIA", "ABIA", "ACCA", "A3T[A-Z0-9]" ], tR = `(?:${qa.join("|")})`, Ga = [ [ new RegExp(`(^|[^A-Za-z0-9+])${tR}[A-Z0-9]{16}(?![A-Za-z0-9+=])`, "g"), "$1<token>" ] ], Ba = [ [ dt("gh[opusr]_", "[A-Za-z0-9]", 20, Be("[A-Za-z0-9]")), "<token>" ], [ /github_pat_[A-Za-z0-9_]{82,}/g, "<token>" ], [ /sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}/g, "<token>" ], [ /(^|[^A-Za-z0-9+/])EAAA[A-Za-z0-9+/=%_-]{56,}/g, "$1<token>" ], [ dt("gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-", "[A-Za-z0-9_=-]", 20, Be("[A-Za-z0-9_=-]"), "(?:\\.[0-9a-z]{9})?"), "<token>" ], [ dt("(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-", "[A-Za-z0-9+/=%_-]", 10, "(?=[0-9])", "", Be("[A-Za-z0-9+/=%_-]"), "gi"), "<token>" ], [ new RegExp(`(?:\\bxox[cd]-[A-Za-z0-9+/=%_-]{10,}|xox[cd]-${Be("[A-Za-z0-9+/=%_-]")}[A-Za-z0-9+/=%_-]{16,})`, "gi"), "<token>" ], [ Zy, "hooks.slack.com/<redacted>" ] ];

var sR = [ new RegExp("(?<![A-Za-z0-9_-])(?=[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*)((?:[A-Za-z0-9_-]*?-)??)ey[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*", "g"), "$1<jwt>" ], rR = /\beyJ(?:[A-Za-z0-9_-]{256}|[A-Za-z0-9_-]{8,2048}\.[A-Za-z0-9_-]{10})/, Ha = [ [ /(^|[^A-Za-z0-9+_-])AIza[A-Za-z0-9_-]{35}(?![A-Za-z0-9+=_-])/g, "$1<token>" ], [ /(^|[^A-Za-z0-9+_-])GOCSPX-[A-Za-z0-9_-]{28}(?![A-Za-z0-9+=_-])/g, "$1<token>" ] ], Ka = [ [ /(^|[^A-Za-z0-9+_-])[sr]k_(?:live|test|prod)_(?=[A-Za-z0-9]{0,64}[0-9])[A-Za-z0-9]{24,}(?![A-Za-z0-9+=_-])/g, "$1<token>" ] ], VTo = [ ur.bearer, ur.basic, ...Va, ur.sk, ...Ga ], KTo = [ ...Ba, sR, ...Ha, ...Ka ], QMs = [ [ new RegExp(`sk-${pr(20)}[A-Za-z0-9_-]{20,}`, "g"), "<token>" ], ...qa.map(e => [ new RegExp(`${e}[A-Z2-7]{16}`, "g"), "<token>" ]), [ /AIza[\w-]{35}/g, "<token>" ], [ /GOCSPX-[\w-]{28,}/g, "<token>" ], [ /[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,}/g, "<token>" ] ];

function GZ(e) {
  return [ ...VTo, ...KTo ].reduce((s, [r, n]) => s.replace(r, n), String(e));
}

var nR = [ ...eR, ...[ ...Va, ...Ga, ...Ba, ...Ha, ...Ka ].map(([e]) => new RegExp(e.source, e.flags.replaceAll("g", ""))), rR ];

function ave(e) {
  return nR.some(s => s.test(e));
}

function dt(e, s, r, n, i = "", d = "", c = "g") {
  let m = `${s}{${r},}${i}`;
  return new RegExp(`(?:\\b${e}${d}${m}|${e}${n}${m})`, c);
}

function Be(e) {
  return `(?=${e}{0,64}[0-9])`;
}

function pr(e) {
  return `(?=[A-Za-z0-9_-]{0,64}?(?=[A-Za-z0-9]{${e}})(?=[A-Za-z0-9]{0,64}[0-9])(?=[A-Za-z0-9]{0,64}[A-Za-z]))`;
}

class ZMs {
  #e=!1;
  #t=!1;
  #s=!1;
  #r=null;
  #n=!1;
  #o=void 0;
  #a=!1;
  #i=void 0;
  #l=!1;
  #d=void 0;
  get active() {
    return this.#e;
  }
  get flagCli() {
    return this.#t;
  }
  get circuitBroken() {
    return this.#s;
  }
  get fastModeBreakerReason() {
    return this.#r;
  }
  get fromFallback() {
    return this.#n;
  }
  get provisionalStartupMode() {
    return this.#o;
  }
  get autoStartWithheldForHipaaTaint() {
    return this.#a;
  }
  setAutoStartWithheldForHipaaTaint(e) {
    this.#a = e;
  }
  get envOnboardingEligible() {
    return this.#i;
  }
  get envOnboardingShownLogged() {
    return this.#l;
  }
  get accountSetMode() {
    return this.#d;
  }
  setActive(e) {
    this.#e = e;
  }
  setFlagCli(e) {
    this.#t = e;
  }
  setCircuitBroken(e) {
    this.#s = e;
  }
  setFastModeBreakerReason(e) {
    this.#r = e;
  }
  setFromFallback(e) {
    this.#n = e;
  }
  setProvisionalStartupMode(e) {
    this.#o = e;
  }
  setEnvOnboardingEligible(e) {
    this.#i = e;
  }
  setEnvOnboardingShownLogged(e) {
    this.#l = e;
  }
  setAccountSetMode(e) {
    this.#d = e;
  }
  reset() {
    this.#e = !1, this.#t = !1, this.#s = !1, this.#r = null, this.#n = !1, this.#o = void 0, 
    this.#a = !1, this.#i = void 0, this.#l = !1, this.#d = void 0;
  }
}

var B2s = new K(() => new ZMs);

function rj() {
  return B2s.of(B().host);
}

function zR(e) {
  rj().setActive(e);
}

function lp() {
  return rj().active;
}

function LBe(e) {
  return e.mode === "auto" || e.mode === "plan" && e.servedCall !== !0 && lp() && !e.isBypassPermissionsModeAvailable;
}

function Qs(e, s = !1) {
  return e === "auto" || e === "plan" && !s && lp();
}

function qTo(e) {
  rj().setFlagCli(e);
}

function YTo() {
  return rj().flagCli;
}

function fon(e) {
  rj().setCircuitBroken(e);
}

function aIe() {
  return rj().circuitBroken;
}

function XTo(e) {
  rj().setFastModeBreakerReason(e);
}

function JTo() {
  return rj().fastModeBreakerReason;
}

function wxr(e) {
  rj().setFromFallback(e);
}

function MK() {
  return rj().fromFallback;
}

function NBe(e) {
  rj().setProvisionalStartupMode(e);
}

function w8s() {
  return rj().autoStartWithheldForHipaaTaint;
}

function vxr(e) {
  rj().setAutoStartWithheldForHipaaTaint(e);
}

function ZGn() {
  return rj().provisionalStartupMode;
}

function e2n() {
  return rj().envOnboardingEligible;
}

function Jpt(e) {
  rj().setEnvOnboardingEligible(e);
}

function Exr() {
  return rj().envOnboardingShownLogged;
}

function mon() {
  return rj().accountSetMode;
}

function R8e(e) {
  rj().setAccountSetMode(e);
}

function kxr(e) {
  rj().setEnvOnboardingShownLogged(e);
}

var tz = p(() => u({
  lineage: o().min(1),
  source: oe().optional()
}));

function gon(e) {
  let s = tz().safeParse(e);
  if (!s.success) return;
  let {lineage: r, source: n} = s.data;
  return {
    lineage: r,
    source: n === "typed" || n === "relay" || n === "owner" ? n : "unattributed"
  };
}

function bie(e) {
  return e.type === "queued_command" && gon(e.forwardedIntent) !== void 0;
}

var Rc = "(no content)", mU = "No response requested.", Bi = "<synthetic>", eHs = "Auto Mode Active", t2n = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read";

function gU(e) {
  return e.startsWith(`<${wl}>`) || e.startsWith(`<${Cf}>`) || sz(e) || e.startsWith(`<${cEe}>`) || e.startsWith(`<${Yu}>`);
}

function sz(e) {
  return e.startsWith(`<${fS}>`) || e.startsWith(`<${Cp}>`);
}

var rz = [ [ `<${Cp}>`, "record" ], [ `<${wl}>`, "output" ], [ `<${Cf}>`, "output" ], [ `<${NG}>`, "caveat" ] ];

function hon(e) {
  let s = e.message?.content, r = Array.isArray(s) ? s.findLast(n => n?.type === "text")?.text : typeof s === "string" ? s : void 0;
  if (typeof r !== "string") return;
  return rz.find(([n]) => r.startsWith(n))?.[1];
}

function tHs(e) {
  return hon(e) !== void 0;
}

var ht = "Edit", yon = "/.claude/**", _on = "~/.claude/**", bon = "File has not been read yet. Read it first before writing to it.", Son = "File is in a directory that is denied by your permission settings.", won = "File is covered by a Read deny rule in your permission settings and cannot be edited.", von = "File is covered by a Read deny rule in your permission settings and cannot be written.", H0t = "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.", vA = {
  not_utf8: "is not valid UTF-8: it uses a legacy encoding such as Windows-1252, Shift-JIS or GBK, or it is binary",
  nul: "has NUL bytes in its first 8 KB: binary data, UTF-16/UTF-32 without a byte-order mark, or text with embedded NULs",
  utf16be: "is UTF-16 big-endian (it starts FE FF), which these tools cannot write"
};

function Zpt(e) {
  return `File ${vA[e]}. These tools write UTF-8 (or UTF-16LE behind its byte-order mark) and never convert a file's encoding on their own, so nothing was written. If the file is text, make the change with a shell command that reads and writes it in its own encoding (iconv, or PowerShell Get-Content/Set-Content -Encoding), or ask the user whether to convert it to UTF-8 first. To replace the whole file with new UTF-8 text anyway, delete it first, then Write it.`;
}

function nHs(e) {
  let s = e === "not_utf8" ? " Its undecodable bytes show above as U+FFFD." : "";
  return `[This file ${vA[e]}.${s} Edit and Write will refuse it: change it with a shell command that keeps its encoding, or ask the user whether to convert it to UTF-8.]`;
}

class H9 extends Error {
  constructor(e) {
    super(e);
    this.name = "FileStateError";
  }
}

var qt = "Write";

var QTo = [ "invalid_request", "catalog_unknown", "restricted_by_org", "unavailable_for_account", "not_offered", "alias_1m_disabled", "alias_1m_unsupported", "blocked_by_hook", "check_failed", "auth_failed", "model_not_current" ], SH = [ "invalid_mode", "bypass_restricted", "bypass_disabled", "bypass_not_launched", "auto_mode_settings", "auto_mode_circuit_breaker", "auto_mode_fast_mode", "auto_mode_model", "auto_mode_unavailable" ], TH = [ "remote_control_auth", "remote_control_terminal", "remote_control_ended_elsewhere", "remote_control_policy_disabled" ];

function rHs(e) {
  switch (e) {
   case "auth":
    return "remote_control_auth";

   case "ended_elsewhere":
    return "remote_control_ended_elsewhere";

   case "terminal":
    return "remote_control_terminal";

   case "network":
    return;
  }
}

var wH = [ "workspace_diff_pending" ], AH = [ "stale_worker_epoch", "invalid_worker_epoch" ], CA = [ ...QTo, ...SH, ...TH, ...wH, ...AH ];

var jn = [ "signed_out", "identity_changed", "transient", "refresh_failed" ];

function oHs(e) {
  return jn.some(s => s === e);
}

var Zs = 0, qn;

function sHs(e) {
  Zs++, qn = {
    reason: e,
    generation: Zs
  };
}

function iHs() {
  Zs++, qn = void 0;
}

function ZTo() {
  return qn;
}

function n2n() {
  return Zs;
}

var x8e = [ "summarized", "omitted", "highlights" ];

function r2n(e) {
  return x8e.includes(e);
}

import { randomUUID as yH } from "crypto";

var Gn = [ "durable_post", "ephemeral_post", "retry_backoff", "hold", "none" ], zA = [ "orphaned_permission", "turn_handoff", "deferred_tool_use", "none" ];

function Eon(e, s) {
  if (e.type !== "result") return e;
  let r = s.subagentStats !== void 0 ? {
    subagent_stats: s.subagentStats
  } : {}, n = e.safety_stops !== void 0 ? {
    safety_stops: Math.max(e.safety_stops, s.safetyStops)
  } : {};
  if (e.total_cost_usd !== void 0 && s.totalCostUsd < e.total_cost_usd) return {
    ...e,
    ...r,
    ...n
  };
  return {
    ...e,
    total_cost_usd: s.totalCostUsd,
    duration_api_ms: e.duration_api_ms === 0 ? e.duration_api_ms : s.durationApiMs,
    modelUsage: s.modelUsage,
    ...s.usage !== void 0 && {
      usage: s.usage
    },
    ...r,
    ...n
  };
}

function aHs(e) {
  let s = e.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 64).replace(/_+$/, "");
  return s === "" ? "custom" : s;
}

function VZ({startedAt: e, common: s, variant: r}) {
  let n = {
    type: "result",
    duration_ms: Math.max(0, Math.round(performance.now() - e)),
    uuid: yH()
  };
  return {
    ...s,
    ...r,
    ...n
  };
}

var RH = [ "blocking_limit", "rapid_refill_breaker", "prompt_too_long", "image_error", "model_error", "api_error", "malformed_tool_use_exhausted", "aborted_streaming", "aborted_tools", "stop_hook_prevented", "hook_stopped", "tool_deferred", "max_turns", "background_requested", "completed" ], vH = [ "budget_exhausted", "structured_output_retry_exhausted", "tool_deferred_unavailable", "turn_setup_failed" ], kA = [ ...RH, ...vH ];

function BH(e) {
  return e === "aborted_streaming" || e === "aborted_tools";
}

function eft(e) {
  if (e === void 0) return !1;
  switch (e) {
   case "blocking_limit":
   case "rapid_refill_breaker":
   case "prompt_too_long":
   case "image_error":
   case "model_error":
   case "api_error":
   case "malformed_tool_use_exhausted":
   case "budget_exhausted":
   case "structured_output_retry_exhausted":
   case "tool_deferred_unavailable":
   case "turn_setup_failed":
    return !0;

   case "aborted_streaming":
   case "aborted_tools":
   case "stop_hook_prevented":
   case "hook_stopped":
   case "tool_deferred":
   case "max_turns":
   case "background_requested":
   case "completed":
    return !1;

   default:
    return !1;
  }
}

function lHs(e) {
  return e.reason === "api_error" ? `api_error_${e.errorKind ?? "unknown"}` : e.reason;
}

function o2n(e) {
  return BH(e) || eft(e);
}

var Bn = [ "unavailable_headless", "unknown", "failed", "restart_required" ];

function dHs(e) {
  return typeof e === "object" && e !== null && "kind" in e && Bn.some(s => s === e.kind);
}

var OA = [ "blocked_by_hook", "stopped_by_hook", "dropped_by_hook", "not_passed_on", "no_verdict" ], NA = [ "remote_run_failed", "remote_run_timed_out", "interrupted", "remote_runner_refused", "unsupported_in_cloud_session", "output_distrusted", "callback_timed_out", "hook_failed", "hook_timed_out", "hooks_never_ran", "personal_config_refused", "rewrite_unplaceable" ];

function D9(e, s) {
  if (e !== "UserPromptSubmit") return {};
  if ("noVerdict" in s) return {
    promptEnding: s
  };
  return s.reason ? {
    promptEnding: {
      reason: s.reason
    }
  } : {};
}

var Txr = [ "send", "flagged", "withheld" ], Axr = p(() => u({
  text: o().describe("The subagent's whole report, never truncated, with a backslash inserted into text that imitates harness markup, such as a system tag (`<system-reminder>`), a `[harness:` line or a turn marker (`Human:` at the start of a line)"),
  warning: o().optional().describe("Auto mode's warning to show above `text`: a SECURITY WARNING, or a note that the review could not run")
}));

var Cxr = [ "ios_app", "android_app" ], IA = [ "swift_edit", "uikit_import", "xcode_project", "ios_command", "kotlin_edit", "java_edit", "android_import", "android_manifest", "gradle_plugin", "android_command", "project_scan" ];

var PA = [ "server_tool_use", "web_search_tool_result", "web_fetch_tool_result", "advisor_tool_result", "code_execution_tool_result", "bash_code_execution_tool_result", "text_editor_code_execution_tool_result", "tool_search_tool_result", "mcp_tool_use", "mcp_tool_result", "container_upload", "compaction", "fallback" ], CH = [ ...PA, "mid_conv_system" ];

function MA(e) {
  return _t({
    type: A(e)
  });
}

var zH = p(() => u({
  type: A("ephemeral"),
  ttl: U([ "5m", "1h" ]).optional()
})), it = () => zH().nullable().optional().describe("Cache breakpoint at this block."), kH = p(() => u({
  type: A("base64"),
  media_type: o().describe("image/jpeg, image/png, image/gif or image/webp."),
  data: o()
})), OH = p(() => u({
  type: A("url"),
  url: o()
})), NH = p(() => u({
  type: A("file"),
  file_id: o()
}).describe("A Files API upload (beta surface).")), IH = p(() => $e([ kH(), OH(), NH() ]).describe("Where the image bytes come from (inline base64, a URL, or a file upload).")), Hn = p(() => u({
  type: A("image"),
  source: IH(),
  cache_control: it()
})), PH = p(() => u({
  type: A("base64"),
  media_type: o().describe("application/pdf."),
  data: o()
})), MH = p(() => u({
  type: A("text"),
  media_type: o().describe("text/plain."),
  data: o()
})), DH = p(() => u({
  type: A("url"),
  url: o()
})), xH = p(() => u({
  type: A("file"),
  file_id: o()
}).describe("A Files API upload (beta surface).")), LH = p(() => $e([ er(), Hn() ])), VH = p(() => T(LH())), jH = p(() => u({
  type: A("content"),
  content: $e([ o(), VH() ])
}).describe("Document content given inline as text and image blocks.")), qH = p(() => $e([ PH(), MH(), jH(), DH(), xH() ]).describe("Where the document comes from (inline base64 PDF, inline text, inline blocks, a URL, or a file upload).")), DA = p(() => u({
  enabled: M().optional()
})), xA = p(() => u({
  type: A("document"),
  source: qH(),
  title: o().nullable().optional(),
  context: o().nullable().optional(),
  citations: DA().nullable().optional(),
  cache_control: it()
})), er = p(() => u({
  type: A("text"),
  text: o(),
  citations: T(oe()).nullable().optional().describe("Citation locations (char_location, page_location, content_block_location, web_search_result_location, search_result_location), as the API defines them."),
  cache_control: it()
})), LA = p(() => u({
  type: A("search_result"),
  source: o(),
  title: o(),
  content: T(er()),
  citations: DA().optional(),
  cache_control: it()
})), GH = p(() => u({
  type: A("tool_use"),
  id: o(),
  name: o(),
  input: ue(o(), oe()).describe("The tool's input object; its shape is the named tool's input schema."),
  cache_control: it()
})), HH = p(() => u({
  type: A("tool_reference"),
  tool_name: o()
})), KH = p(() => $e([ er(), Hn(), LA(), xA(), HH() ])), FH = p(() => T(KH())), YH = p(() => u({
  type: A("tool_result"),
  tool_use_id: o(),
  content: $e([ o(), FH() ]).optional().describe("The tool output: a string, or text / image / search_result / document blocks."),
  is_error: M().optional(),
  cache_control: it()
})), WH = p(() => $e([ er(), Hn(), xA(), LA(), GH(), YH(), VA(), jA(), ...CH.map(MA) ]).describe("A request content block. text, image, document, search_result, tool_use, tool_result and thinking blocks are modelled; the other API block types are accepted by type tag only, and consumers must tolerate types newer than this list.")), $H = p(() => T(WH())), Kn = p(() => $e([ o(), $H() ]).describe("A bare string (shorthand for one text block) or a list of content blocks.")), UA = p(() => u({
  role: A("user"),
  content: Kn()
}).describe('A Messages API MessageParam with role "user", as SDK user messages carry it.')), XH = p(() => u({
  type: A("text"),
  text: o(),
  citations: T(oe()).nullable().optional().describe("Citation locations backing the text, as the API defines them.")
})), QH = p(() => u({
  type: A("tool_use"),
  id: o(),
  name: o(),
  input: ue(o(), oe()).describe("The tool's input object; its shape is the named tool's input schema."),
  caller: oe().optional().describe("Which caller invoked the tool (direct, or a server tool), when reported.")
})), VA = p(() => u({
  type: A("thinking"),
  thinking: o(),
  signature: o()
})), jA = p(() => u({
  type: A("redacted_thinking"),
  data: o()
})), JH = p(() => $e([ XH(), QH(), VA(), jA(), ...PA.map(MA) ]).describe("A response content block. text, tool_use and thinking blocks are modelled; the other API block types (server tool use and results, MCP tool blocks, container_upload, compaction, ...) are accepted by type tag only, and consumers must tolerate types newer than this list.")), ZH = p(() => u({
  ephemeral_1h_input_tokens: v().int(),
  ephemeral_5m_input_tokens: v().int()
})), eK = p(() => u({
  web_search_requests: v().int(),
  web_fetch_requests: v().int()
})), tK = p(() => u({
  thinking_tokens: v().int().optional()
})), Fn = p(() => u({
  input_tokens: v().int(),
  output_tokens: v().int(),
  cache_creation_input_tokens: v().int().nullable(),
  cache_read_input_tokens: v().int().nullable(),
  cache_creation: ZH().nullable().describe("Cache writes by TTL."),
  server_tool_use: eK().nullable(),
  service_tier: o().nullable().describe("standard, priority or batch."),
  inference_geo: o().nullable().optional(),
  speed: o().nullable().optional().describe("standard or fast."),
  iterations: oe().optional().describe("Per-iteration usage when the request ran several sampling iterations."),
  output_tokens_details: tK().nullable().optional(),
  fallback_credit: oe().optional().describe("Outcome of a fallback-credit token the request presented, or null.")
})), qA = p(() => u({
  id: o().optional(),
  type: A("message").optional(),
  role: A("assistant"),
  model: o(),
  content: T(JH()),
  stop_reason: o().nullable().describe("end_turn, max_tokens, stop_sequence, tool_use, pause_turn, refusal, ...; null while the message is still streaming."),
  stop_sequence: o().nullable().optional(),
  stop_details: oe().optional().describe("Structured refusal details, when stop_reason is refusal."),
  usage: Fn(),
  container: oe().optional().describe("The code-execution container used by the request, if any."),
  context_management: oe().optional().describe("Context-management edits applied during the request, if any.")
}).describe("A Messages API Message (a BetaMessage, possibly one streamed block of it), as SDK assistant messages carry it."));

var Yn = [ "CLAUDEAI_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "APPROVAL_REQUIRED" ];

function s2n(e) {
  if (e.type !== "failed") return;
  return Yn.find(s => s === e.errorCode);
}

var GA = [ "accept", "reject", "cancelled" ];

var D0t = [ "user-rejected", "permission-rule", "automode-blocked", "automode-unavailable", "automode-parsing-error", "interrupted", "cancelled" ];

function eAo(e) {
  switch (e) {
   case "automode-blocked":
   case "automode-unavailable":
   case "automode-parsing-error":
    return !0;

   case "user-rejected":
   case "permission-rule":
   case "interrupted":
   case "cancelled":
   case void 0:
    return !1;
  }
}

var Dt = p(() => u({
  inputTokens: v().int(),
  outputTokens: v().int(),
  thinkingTokens: v().int().optional().describe("Thinking tokens, already counted inside outputTokens. Counts only turns run on CLI versions that record this field: absent when none did, and partial for a resumed session that began on an older version."),
  cacheReadInputTokens: v().int(),
  cacheCreationInputTokens: v().int(),
  webSearchRequests: v().int(),
  costUSD: v(),
  contextWindow: v().int(),
  maxOutputTokens: v().int(),
  canonicalModel: o().optional().describe("Canonical model id used for the pricing lookup (e.g. 'claude-opus-4-7'). May differ from the raw model string this entry is keyed by (provider-specific ids, aliases)."),
  provider: o().optional().describe("API provider that served this model (e.g. 'firstParty', 'bedrock', 'vertex', 'foundry', 'anthropicAws', 'mantle', 'gateway')."),
  costBasis: U([ "list", "managed", "unknown" ]).optional().describe("Which price table the most recent request for this model was priced at: Claude Code's built-in list prices ('list'), the organization's managed-settings modelPricing rates or multiplier ('managed'), or neither ('unknown' \u2014 no pricing row and no built-in price matched the model ID, so costUSD is a guess at the default model's rate). Overwritten per request like canonicalModel, so a consumer that differences the cumulative costUSD per turn gets that turn's basis. Absent until this process has priced a request for the model (e.g. right after --resume) and on builds that predate the field; treat as 'list'.")
})), sK = p(() => A("json_schema")), eJ = p(() => u({
  type: sK()
})), rK = p(() => u({
  type: A("json_schema"),
  schema: ue(o(), oe())
})), tJ = p(() => rK()), nK = p(() => U([ "ANTHROPIC_API_KEY", "apiKeyHelper", "/login managed key", "none", "user", "project", "org", "temporary", "oauth" ]).describe("Where the credential used for API requests came from: 'ANTHROPIC_API_KEY' (environment variable), 'apiKeyHelper' (the configured helper command), '/login managed key' (an API key created and stored by /login with an Anthropic Console account), or 'none' (no API key in use - e.g. claude.ai OAuth login, a bearer token, or a third-party cloud provider). 'user' | 'project' | 'org' | 'temporary' | 'oauth' are legacy members that current CLIs never emit; they remain only so the type stays backward compatible.")), sJ = p(() => U([ "local", "user", "project" ]).describe("Config scope for settings.")), rJ = p(() => A("context-1m-2025-08-07")), oK = p(() => u({
  type: A("adaptive"),
  display: U([ "summarized", "omitted" ]).optional()
}).describe("Claude decides when and how much to think (Opus 4.6+).")), aK = p(() => u({
  type: A("enabled"),
  budgetTokens: v().optional(),
  display: U([ "summarized", "omitted" ]).optional()
}).describe("Fixed thinking token budget (older models)")), iK = p(() => u({
  type: A("disabled")
}).describe("No extended thinking")), nJ = p(() => $e([ oK(), aK(), iK() ]).describe("Controls Claude's thinking/reasoning behavior. When set, takes precedence over the deprecated maxThinkingTokens.")), Xn = p(() => A("comms").optional().catch(void 0).describe("@internal Coordinator-mode role for this MCP server. 'comms' marks the server the coordinator uses to address the user; the coordinator tool filter lets comms-roled servers' tools through. Claude Code extension to .mcp.json \u2014 host-side config, not part of the MCP wire protocol. Coordinator mode is activated via the CLAUDE_CODE_COORDINATOR_MODE environment variable; this field only takes effect when coordinator mode is active.")), KA = "Per-server tool-call timeout in milliseconds. Overrides the MCP_TOOL_TIMEOUT environment variable for this server. Hard wall-clock limit per call; progress notifications do not extend it. Values below 1000ms are ignored (falls through to MCP_TOOL_TIMEOUT or the default).", xt = p(() => v().int().positive().optional().describe(KA)), FA = p(() => v().int().positive().optional().describe("Per-server HTTP request timeout in milliseconds, set by the host on the mcp_set_servers control event. Raises the per-request fetch first-byte budget and the tool-call watchdog for this server. Capped at 5 minutes. Ignored when `timeout` is also set.\n@internal")), lK = p(() => u({
  type: A("stdio").optional(),
  command: o(),
  args: T(o()).optional(),
  env: ue(o(), o()).optional(),
  timeout: xt(),
  alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
  role: Xn()
})), YA = p(() => u({
  name: o(),
  permission_policy: U([ "always_allow", "always_ask", "always_deny" ]).optional(),
  org_max_permission: U([ "allow", "ask", "blocked" ]).optional().describe("Org admin's per-tool ceiling. Drives the auto-mode isOrgAskCeiling gate so an admin 'ask' cap forces a user prompt even in auto mode.")
}).describe("Per-tool permission policy carried on mcp_set_servers for remote servers.")), dK = p(() => u({
  type: A("sse"),
  url: o(),
  headers: ue(o(), o()).optional(),
  tools: T(YA()).optional(),
  timeout: xt(),
  request_timeout_ms: FA(),
  alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
  role: Xn()
})), cK = p(() => u({
  type: A("http"),
  url: o(),
  headers: ue(o(), o()).optional(),
  tools: T(YA()).optional(),
  timeout: xt(),
  request_timeout_ms: FA(),
  alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
  role: Xn()
})), Qn = p(() => u({
  type: A("sdk"),
  name: o(),
  timeout: xt().catch(void 0).describe(`${KA} Applies when the server is first registered; changing it for an already-registered server has no effect until it is removed and re-added.`),
  disableAutoBackground: M().optional().catch(void 0).describe("@internal When true, the CLI never moves a call to this server's tools to a background task on its own: not after the auto-background delay, and not early for a priority 'now' message, which instead interrupts the turn and so ends the call. Meant for a server whose calls wait on a person. The turn waits for the call's own result, up to the server's timeout, so set timeout too. A tool that advertises MCP task support can still run as a task. Any value but true counts as unset. Read when the server is first registered, from initialize, mcp_set_servers or --mcp-config.")
})), tr = p(() => $e([ lK(), dK(), cK(), Qn() ])), hK = p(() => u({
  type: A("claudeai-proxy"),
  url: o(),
  id: o(),
  timeout: xt()
})), uK = p(() => $e([ tr(), hK() ])), Jn = p(() => u({
  name: o().describe("Server name as configured"),
  status: U([ "connected", "failed", "needs-auth", "pending", "disabled" ]).describe("Current connection status"),
  serverInfo: u({
    name: o(),
    version: o()
  }).optional().describe("Server information (available when connected)"),
  error: o().optional().describe("Error message (available when status is 'failed')"),
  error_code: U(Yn).optional().describe("@internal Why a 'failed' row failed, for the causes a host can fix: CLAUDEAI_BEARER_REJECTED (a claude.ai connector rejected the claude.ai login \u2014 sign in again), FIRST_PARTY_AUTH_REJECTED (a first-party Anthropic server rejected its credential \u2014 the claude.ai login, or for the Claude Design server its /design-login authorization; the row's error names which sign-in fixes it), APPROVAL_REQUIRED (a project-scoped server awaiting the user's approval). Absent for every other failure; new values are additive."),
  config: uK().optional().describe("Server configuration (includes URL for HTTP/SSE servers)"),
  scope: o().optional().describe("Configuration scope (e.g., project, user, local, claudeai, managed)"),
  source: o().optional().describe("Where the server definition came from: sdk (an in-process server the SDK host registered \u2014 only the host can register one), plugin (a server a plugin ships or registers at runtime), or the config scope (user, project, local, dynamic, managed, enterprise, claudeai, agent). Key trust on this, not on the name. Absent on CLIs that predate the field."),
  tools: T(u({
    name: o(),
    description: o().optional(),
    annotations: u({
      readOnly: M().optional(),
      destructive: M().optional(),
      openWorld: M().optional()
    }).optional(),
    _meta: ue(o(), oe()).optional().describe("The MCP Apps (SEP-1865) members of the tool's `_meta`, for a host that renders the tool's `ui://` resource, under the keys the server used: `ui` (an object: `resourceUri`, a `ui://` string; `visibility`, an array of 'model' | 'app'; and any other member the server sent) and the deprecated flat `ui/resourceUri` (a `ui://` string). Validated and size-bounded; every other `_meta` key is withheld. Present only on a tool that declares one, from CLIs that advertise `mcp_tool_ui_meta_v1`.")
  })).optional().describe("Tools provided by this server (available when connected)"),
  capabilities: u({
    experimental: ue(o(), oe()).optional()
  }).optional().describe("@internal Server capabilities (available when connected). experimental['claude/channel'] is only present if the server's plugin is on the approved channels allowlist \u2014 use its presence to decide whether to show an Enable-channel prompt.")
}).describe("Status information for an MCP server connection.")), oJ = p(() => u({
  added: T(o()).describe("Names of servers that were added"),
  removed: T(o()).describe("Names of servers that were removed"),
  errors: ue(o(), o()).describe("Map of server names to error messages for servers that failed to connect")
}).describe("Result of a setMcpServers operation.")), lt = p(() => U([ "userSettings", "projectSettings", "localSettings", "session", "cliArg" ])), Wn = p(() => U([ "allow", "deny", "ask" ])), pK = p(() => U([ "allow", "deny", "ask", "defer" ])), $n = p(() => u({
  toolName: o(),
  ruleContent: o().optional()
})), Lt = p(() => Kr("type", [ u({
  type: A("addRules"),
  rules: T($n()),
  behavior: Wn(),
  destination: lt()
}), u({
  type: A("replaceRules"),
  rules: T($n()),
  behavior: Wn(),
  destination: lt()
}), u({
  type: A("removeRules"),
  rules: T($n()),
  behavior: Wn(),
  destination: lt()
}), u({
  type: A("setMode"),
  mode: Tk(() => de()),
  destination: lt()
}), u({
  type: A("addDirectories"),
  directories: T(o()),
  destination: lt()
}), u({
  type: A("removeDirectories"),
  directories: T(o()),
  destination: lt()
}) ])), BA = p(() => U([ "user_temporary", "user_permanent", "user_reject" ]).describe("Classification of this permission decision for telemetry. SDK hosts that prompt users (desktop apps, IDEs) should set this to reflect what actually happened: user_temporary for allow-once, user_permanent for always-allow (both the click and later cache hits), user_reject for deny. If unset, the CLI infers conservatively (temporary for allow, reject for deny). The vocabulary matches tool_decision OTel events (monitoring-usage docs).")), WA = p(() => $e([ u({
  behavior: A("allow"),
  updatedInput: ue(o(), oe()).optional(),
  updatedPermissions: T(Lt()).optional(),
  toolUseID: o().optional(),
  decisionClassification: BA().optional()
}), u({
  behavior: A("deny"),
  message: o(),
  interrupt: M().optional(),
  toolUseID: o().optional(),
  decisionClassification: BA().optional()
}) ])), de = p(() => Sa(_h, U([ "default", "acceptEdits", "bypassPermissions", "plan", "dontAsk", "auto" ])).describe("Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved. 'auto' - Use a model classifier to approve/deny permission prompts.")), _K = [ "PreToolUse", "PostToolUse", "PostToolUseFailure", "PostToolBatch", "Notification", "UserPromptSubmit", "UserPromptExpansion", "SessionStart", "SessionEnd", "Stop", "StopFailure", "SubagentStart", "SubagentStop", "PreCompact", "PostCompact", "PreModelSwitch", "PostModelSwitch", "PermissionRequest", "PermissionDenied", "Setup", "TeammateIdle", "TaskCreated", "TaskCompleted", "Elicitation", "ElicitationResult", "ConfigChange", "WorktreeCreate", "WorktreeRemove", "InstructionsLoaded", "CwdChanged", "FileChanged", "DirectoryAdded", "MessageDisplay" ], $A = p(() => U(_K));

var Ge = p(() => u({
  name: o(),
  source: o().describe("sdk | plugin | user | project | local | dynamic | managed | enterprise | claudeai | agent \u2014 an open set; treat unknown values as an unrecognized configured source, never as sdk.")
}).describe('The MCP server serving this tool, for `mcp__*` tools: `name` is the server\'s config key (for `source: "sdk"`, exactly the name the SDK host registered in `sdkMcpServers` / `mcp_set_servers`; for any other source, the key as authored in that configuration \u2014 untrusted text, the same value `mcp_status` and system/init report, to be escaped before display), `source` is where its definition came from \u2014 `sdk` (an in-process server the SDK host runs; only the host can register one, so a configured server of the same name never reads `sdk`), `plugin` (a server a plugin ships or registers at runtime), or a config scope (`user`, `project`, `local`, `dynamic` for --mcp-config / `mcp_set_servers` process servers, `managed`, `enterprise`, `claudeai`, `agent`). Key trust on `source`, not on the name or the tool-name prefix. Absent for non-MCP tools.')), O = p(() => u({
  session_id: o(),
  transcript_path: o(),
  cwd: o(),
  prompt_id: o().optional().describe("UUID correlating a user prompt with all subsequent events until the next prompt. Same value emitted on OpenTelemetry events as the `prompt.id` attribute, so hook output can be joined to OTel events at prompt grain. Absent until the first user input of the process lifetime."),
  permission_mode: o().optional(),
  agent_id: o().optional().describe("Subagent identifier. Present only when the hook fires from within a subagent (e.g., a tool called by an AgentTool worker). Absent for the main thread, even in --agent sessions. Use this field (not agent_type) to distinguish subagent calls from main-thread calls."),
  agent_type: o().optional().describe('Agent type name (e.g., "general-purpose", "code-reviewer"). Present when the hook fires from within a subagent (alongside agent_id), or on the main thread of a session started with --agent (without agent_id).'),
  effort: u({
    level: o().describe('Active effort level for the current turn (e.g., "low", "medium", "high", "xhigh", "max"), after any silent downgrade for the selected model. Also exposed to hook commands and Bash as the CLAUDE_EFFORT env var.')
  }).optional().describe("Reasoning effort applied to the current turn. Same shape as StatusLineCommandInput.effort. Present for hooks that fire within a tool-use context (PreToolUse, PostToolUse, Stop, SubagentStop, etc.) on a model that supports the effort parameter; absent for session-lifecycle hooks and models without effort support.")
})), mK = p(() => O().and(u({
  hook_event_name: A("PreToolUse"),
  tool_name: o(),
  tool_input: oe(),
  tool_use_id: o(),
  mcp_server: Ge().optional()
}))), gK = p(() => O().and(u({
  hook_event_name: A("PermissionRequest"),
  tool_name: o(),
  tool_input: oe(),
  permission_suggestions: T(Lt()).optional(),
  mcp_server: Ge().optional()
}))), fK = p(() => O().and(u({
  hook_event_name: A("PostToolUse"),
  tool_name: o(),
  tool_input: oe(),
  tool_response: oe(),
  tool_use_id: o(),
  duration_ms: v().optional().describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
  mcp_server: Ge().optional()
}))), bK = p(() => O().and(u({
  hook_event_name: A("PostToolUseFailure"),
  tool_name: o(),
  tool_input: oe(),
  tool_use_id: o(),
  error: o(),
  is_interrupt: M().optional(),
  duration_ms: v().optional().describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
  mcp_server: Ge().optional()
}))), EK = p(() => u({
  tool_name: o(),
  tool_input: oe(),
  tool_use_id: o(),
  tool_response: oe().optional()
})), SK = p(() => O().and(u({
  hook_event_name: A("PostToolBatch"),
  tool_calls: T(EK())
})).describe("Hook input for the PostToolBatch event. Fired once after every tool call in a batch has resolved, before the next model request. PostToolUse fires per-tool and may run concurrently for parallel tool calls; PostToolBatch fires exactly once with the full batch.")), TK = p(() => O().and(u({
  hook_event_name: A("PermissionDenied"),
  tool_name: o(),
  tool_input: oe(),
  tool_use_id: o(),
  reason: o(),
  mcp_server: Ge().optional()
}))), wK = p(() => O().and(u({
  hook_event_name: A("Notification"),
  message: o(),
  title: o().optional(),
  notification_type: o()
}))), AK = p(() => O().and(u({
  hook_event_name: A("UserPromptSubmit"),
  prompt: o(),
  source: U([ "user", "sdk", "system", "loop_wakeup", "schedule_wakeup", "poll_event" ]).optional().describe("Who authored/injected the prompt: `user` = submitted from the interactive composer, `sdk` = non-interactive entrypoint (`-p` / Agent SDK), `loop_wakeup` = dynamic /loop wakeup, `schedule_wakeup` = scheduled-task fire (CronCreate/routine), `system` = other machine-injected turns (peer/channel messages, task notifications, auto-continuation), `poll_event` = the poll-event channel enqueue-time pass (the hook fires when the host submits an event, before its delivery ack exists \u2014 a blocking verdict rejects the event). Payloads may omit it while the field rolls out."),
  session_title: o().optional()
}))), yK = p(() => O().and(u({
  hook_event_name: A("UserPromptExpansion"),
  expansion_type: U([ "slash_command", "mcp_prompt" ]),
  command_name: o(),
  command_args: o(),
  command_source: o().optional(),
  prompt: o()
}))), RK = p(() => O().and(u({
  hook_event_name: A("SessionStart"),
  source: U([ "startup", "resume", "clear", "compact", "fork" ]),
  agent_type: o().optional(),
  model: o().optional(),
  session_title: o().optional(),
  seconds_since_last_response: v().optional().describe("resume/fork: seconds since the resumed transcript's last assistant response"),
  context_tokens: v().optional().describe("resume/fork: the resumed transcript's last response input + cache_read + cache_creation + output tokens (for a server-side tool loop, its last iteration's window, not the summed totals)"),
  prompt_cache_likely_expired: M().optional().describe("resume/fork: seconds_since_last_response exceeds the prompt-cache TTL, so the first request re-caches context_tokens"),
  estimated_cache_write_usd: v().optional().describe("resume/fork: estimated cost of re-caching context_tokens on the session model \u2014 the managed modelPricing when set, otherwise list price; excludes the response")
}))), vK = p(() => O().and(u({
  hook_event_name: A("Setup"),
  trigger: U([ "init", "maintenance" ])
}))), XA = p(() => u({
  id: o(),
  type: o().describe("Friendly task-type label (e.g. 'shell', 'subagent', 'monitor', 'workflow'). Falls back to the raw discriminant for unknown types."),
  status: o(),
  description: o().describe("Free-text description. Capped at 1000 chars; clipped values append " + 'an in-string "\u2026 [+N chars]" marker.'),
  command: o().optional().describe("Shell command line. Only present for 'shell' tasks. Capped at 1000 " + 'chars with the same "\u2026 [+N chars]" marker.'),
  agent_type: o().optional().describe("Subagent type name. Only present for 'subagent' tasks."),
  server: o().optional().describe("MCP server name. Only present for 'monitor' / 'MCP task' tasks."),
  tool: o().optional().describe("MCP tool name. Only present for 'monitor' / 'MCP task' tasks."),
  name: o().optional().describe("Workflow name. Only present for 'workflow' tasks.")
})), QA = p(() => u({
  id: o(),
  schedule: o().describe('Cron expression, e.g. "0 9 * * 1-5".'),
  recurring: M().describe("False for one-shot wakeups whose cron field encodes a single fire time; true for tasks that re-fire on every match."),
  prompt: o().describe("Prompt text submitted when the cron fires. Capped at 1000 chars; " + 'clipped values append an in-string "\u2026 [+N chars]" marker.')
})), CK = p(() => O().and(u({
  hook_event_name: A("Stop"),
  stop_hook_active: M(),
  last_assistant_message: o().optional().describe("Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."),
  background_tasks: T(XA()).optional().describe('In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'),
  session_crons: T(QA()).optional().describe("Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.")
}))), zK = p(() => O().and(u({
  hook_event_name: A("StopFailure"),
  error: to(),
  error_details: o().optional(),
  last_assistant_message: o().optional()
}))), kK = p(() => O().and(u({
  hook_event_name: A("SubagentStart"),
  agent_id: o(),
  agent_type: o()
}))), NK = p(() => O().and(u({
  hook_event_name: A("SubagentStop"),
  stop_hook_active: M(),
  agent_id: o(),
  agent_transcript_path: o(),
  agent_type: o(),
  last_assistant_message: o().optional().describe("Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."),
  background_tasks: T(XA()).optional().describe('In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'),
  session_crons: T(QA()).optional().describe("Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.")
}))), PK = p(() => O().and(u({
  hook_event_name: A("PreCompact"),
  trigger: U([ "manual", "auto" ]),
  custom_instructions: o().nullable()
}))), DK = p(() => O().and(u({
  hook_event_name: A("PostCompact"),
  trigger: U([ "manual", "auto" ]),
  compact_summary: o().describe("The conversation summary produced by compaction")
}))), xK = {
  command: "command: /model <name>, the /config Model row, or enabling fast mode when that promotes the model",
  picker: "picker: an interactive model picker",
  sdk: "sdk: headless set_model (SDK, Remote Control, IDE)",
  auto: "auto: automatic fallback or other programmatic change",
  resume: "resume: model restored while resuming a session"
};

function JA(e) {
  return u({
    from_model: o().describe("Resolved model id the session was running before the switch"),
    to_model: o().describe("Resolved model id the session runs after the switch"),
    requested_model: o().nullable().describe('What was asked for (alias such as "opus", a full id, or null for "default")'),
    source: U(e).describe(e.map(s => xK[s]).join("; ")),
    context_tokens: v().describe("Prompt tokens the next request re-sends: the last main-thread response's input + cache_read + cache_creation + output tokens (0 before the first response; for a server-side tool loop, its last iteration's window, not the summed totals)"),
    prompt_cache_warm: M().describe("Whether the current model's prompt cache is likely still warm (a switch then forfeits it)"),
    cache_ttl: U([ "5m", "1h" ]),
    estimated_cache_write_usd: v().describe("Estimated cost of re-caching context_tokens on to_model at its cache-write rate \u2014 the managed modelPricing when set, otherwise list price; excludes the response"),
    pricing: U([ "configured", "catalog", "default" ]).describe("configured: priced at the managed modelPricing setting; catalog: list price; default: to_model unknown, the default tier was assumed")
  });
}

var LK = p(() => O().and(u({
  hook_event_name: A("PreModelSwitch")
})).and(JA([ "command", "picker", "sdk" ]))), UK = p(() => O().and(u({
  hook_event_name: A("PostModelSwitch")
})).and(JA([ "command", "picker", "sdk", "auto", "resume" ]))), VK = p(() => O().and(u({
  hook_event_name: A("TeammateIdle"),
  teammate_name: o(),
  team_name: o().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
}))), jK = p(() => O().and(u({
  hook_event_name: A("TaskCreated"),
  task_id: o(),
  task_subject: o(),
  task_description: o().optional(),
  teammate_name: o().optional(),
  team_name: o().optional().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
}))), qK = p(() => O().and(u({
  hook_event_name: A("TaskCompleted"),
  task_id: o(),
  task_subject: o(),
  task_description: o().optional(),
  teammate_name: o().optional(),
  team_name: o().optional().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
}))), GK = p(() => O().and(u({
  hook_event_name: A("Elicitation"),
  mcp_server_name: o(),
  message: o(),
  mode: U([ "form", "url" ]).optional(),
  url: o().optional(),
  elicitation_id: o().optional(),
  requested_schema: ue(o(), oe()).optional()
})).describe("Hook input for the Elicitation event. Fired when an MCP server requests user input. Hooks can auto-respond (accept/decline) instead of showing the dialog.")), BK = p(() => O().and(u({
  hook_event_name: A("ElicitationResult"),
  mcp_server_name: o(),
  elicitation_id: o().optional(),
  mode: U([ "form", "url" ]).optional(),
  action: U([ "accept", "decline", "cancel" ]),
  content: ue(o(), oe()).optional()
})).describe("Hook input for the ElicitationResult event. Fired after the user responds to an MCP elicitation. Hooks can observe or override the response before it is sent to the server.")), HK = [ "user_settings", "project_settings", "local_settings", "policy_settings", "skills" ], KK = p(() => O().and(u({
  hook_event_name: A("ConfigChange"),
  source: U(HK),
  file_path: o().optional()
}))), FK = [ "session_start", "nested_traversal", "path_glob_match", "include", "compact" ], YK = [ "User", "Project", "Local", "Managed" ], WK = p(() => O().and(u({
  hook_event_name: A("InstructionsLoaded"),
  file_path: o(),
  memory_type: U(YK),
  load_reason: U(FK),
  globs: T(o()).optional(),
  trigger_file_path: o().optional(),
  parent_file_path: o().optional()
}))), $K = p(() => O().and(u({
  hook_event_name: A("WorktreeCreate"),
  name: o()
}))), XK = p(() => O().and(u({
  hook_event_name: A("WorktreeRemove"),
  worktree_path: o()
}))), QK = p(() => O().and(u({
  hook_event_name: A("CwdChanged"),
  old_cwd: o(),
  new_cwd: o()
}))), JK = p(() => O().and(u({
  hook_event_name: A("FileChanged"),
  file_path: o(),
  event: U([ "change", "add", "unlink" ])
}))), ZK = p(() => O().and(u({
  hook_event_name: A("DirectoryAdded"),
  directory: o().describe("Absolute path of the directory that was added."),
  source: U([ "slash_command", "register_repo_root" ]).describe('How the directory was added: "slash_command" for /add-dir, "register_repo_root" for the SDK control_request.')
}))), e0 = p(() => O().and(u({
  hook_event_name: A("MessageDisplay"),
  turn_id: o().describe("UUID of the current turn."),
  message_id: o().describe("UUID of the assistant message being displayed. Stable across " + "every flush of the same message. Not the API msg_\u2026 id."),
  index: v().int().describe("Zero-based index of this delta within the message. Increments by one per flush."),
  final: M().describe("True on the message's last flush. Exactly one flush per message has it."),
  delta: o().describe("The newly completed lines since the prior flush. Always whole lines, except on the final flush which may end mid-line. The delta of the final flush is empty when the message ends on a newline; treat final as the end-of-message signal regardless.")
})).describe("Hook input for the MessageDisplay event. Fired with each batch of newly completed lines while an assistant message streams. Display-only: the stored message and what the model sees are untouched.")), t0 = [ "clear", "resume", "logout", "prompt_input_exit", "other" ], s0 = p(() => U(t0)), r0 = p(() => O().and(u({
  hook_event_name: A("SessionEnd"),
  reason: s0()
}))), P8e = p(() => $e([ mK(), fK(), bK(), SK(), TK(), wK(), AK(), yK(), RK(), r0(), CK(), zK(), kK(), NK(), PK(), DK(), LK(), UK(), gK(), vK(), VK(), jK(), qK(), GK(), BK(), KK(), WK(), $K(), XK(), QK(), JK(), ZK(), e0() ])), n0 = p(() => u({
  async: A(!0),
  asyncTimeout: v().optional()
}));

function HA(e) {
  return !e.includes(`\n`) && /\S/.test(e);
}

var tAo = p(() => u({
  title: o().max(200).refine(HA),
  description: o().max(2e3).regex(/\S/),
  displayName: o().max(64).refine(HA)
}).describe("@internal Desktop host only: the words an SDK host puts on an ask's permission card (PreToolUse permissionDisplay).")), o0 = p(() => u({
  hookEventName: A("PreToolUse"),
  permissionDecision: pK().optional(),
  permissionDecisionReason: o().optional(),
  updatedInput: ue(o(), oe()).optional(),
  additionalContext: o().optional(),
  permissionDisplay: tAo().optional().catch(void 0).describe("@internal Desktop host only: the words for this ask's permission card. Read only beside permissionDecision 'ask' from the hook the SDK host registered in its stdio initialize; send it only when the initialize response carried host_worded_asks. Only an answer on a card approves such an ask: no one-tap approve, allow rule, permission mode, PermissionRequest hook allow or plugin tool.check allow does. The CLI may send the ask without these words (another hook also asked, or the input changed), or refuse the call (its own permission check also asks or cannot run, or the ask reached a path with no card that can show the words, such as an in-process teammate). Ignored whole when malformed, blank, over length (title 200, description 2000, displayName 64 UTF-16 code units), or holding a control or invisible character other than a line feed in description.")
})), a0 = p(() => u({
  hookEventName: A("UserPromptSubmit"),
  additionalContext: o().optional(),
  sessionTitle: o().optional(),
  suppressOriginalPrompt: M().optional().describe('When decision is "block", omit the original prompt from the block message')
})), i0 = p(() => u({
  hookEventName: A("UserPromptExpansion"),
  additionalContext: o().optional(),
  suppressOriginalPrompt: M().optional().describe('When decision is "block", omit the original prompt from the block message')
})), l0 = p(() => u({
  hookEventName: A("SessionStart"),
  additionalContext: o().optional(),
  initialUserMessage: o().optional(),
  sessionTitle: o().optional(),
  watchPaths: T(o()).optional(),
  reloadSkills: M().optional().describe("Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session")
})), d0 = p(() => u({
  hookEventName: A("Setup"),
  additionalContext: o().optional()
})), c0 = p(() => u({
  hookEventName: A("PreModelSwitch"),
  permissionDecision: U([ "allow", "deny", "ask" ]).optional().describe("Same contract as PreToolUse: allow proceeds (skipping the interactive cache-miss confirm), deny cancels the switch, ask asks the user to confirm (a headless session refuses instead)"),
  permissionDecisionReason: o().optional()
})), h0 = p(() => u({
  hookEventName: A("PostModelSwitch"),
  additionalContext: o().optional().describe("Reaches the model with the next request the new model serves")
})), u0 = p(() => u({
  hookEventName: A("SubagentStart"),
  additionalContext: o().optional()
})), p0 = p(() => u({
  hookEventName: A("PostToolUse"),
  additionalContext: o().optional(),
  classifierContext: o().optional().describe("Host-asserted context shown to the auto-mode permission classifier alongside this tool call's result. In the live session the classifier may weigh a user statement relayed here as user intent (it can satisfy a consent bar a user turn would satisfy, never a hard boundary); values restored from saved session state are treated as unverified context only. Relay discipline is the host's obligation: put ONLY genuine user statements in intent-bearing positions \u2014 never tool output or model text dressed as one. Capped at 2000 UTF-16 code units, a budget shared across all hooks that contribute to one call (surrogate-pair-safe; emoji and other astral characters count as two). Honored on synchronous hook responses only: an async hook's late response arrives after the result message is frozen and this field in it is silently ignored. Security note: do not copy untrusted tool output or third-party text into it blindly \u2014 content placed here reaches the permission classifier with host-application framing. Applies only to calls the classifier transcript shows: read-only lookups the transcript omits (file reads, searches) and remote-engine shells produce no per-result line, and context attached to them is silently unused. Not a delivery channel: it is bound to a single call id and sized for a short assertion, not for relaying messages or events. Rewrite integrity: if this assertion describes output you are rewriting, return it in the SAME hook result as the rewrite \u2014 it is then dropped automatically if your rewrite is rejected or superseded by a later hook's rewrite; assertions returned without a rewrite are never invalidated by other hooks' rewrites, so a non-rewriting hook should assert only what holds regardless of other hooks' rewrites \u2014 hosts that need an assertion bound to exact output bytes should make it in the hook that produces those bytes. (Do NOT return an identity rewrite just to pair an assertion: hooks run in parallel on the ORIGINAL output, so an identity rewrite competes last-write-wins with sibling rewrites and can clobber a real redaction.)"),
  updatedToolOutput: oe().optional().describe("Replaces the tool output before it is sent to the model"),
  updatedMCPToolOutput: oe().optional().describe("Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools")
})), _0 = p(() => u({
  hookEventName: A("PostToolBatch"),
  additionalContext: o().optional()
})), m0 = p(() => u({
  hookEventName: A("PostToolUseFailure"),
  additionalContext: o().optional()
})), g0 = p(() => u({
  hookEventName: A("Stop"),
  additionalContext: o().optional()
}).describe("Hook-specific output for the Stop event. additionalContext is non-error feedback delivered to the model; the conversation continues so the model can act on it.")), f0 = p(() => u({
  hookEventName: A("SubagentStop"),
  additionalContext: o().optional()
}).describe("Hook-specific output for the SubagentStop event. additionalContext is non-error feedback delivered to the subagent; the subagent continues so it can act on it.")), b0 = p(() => u({
  hookEventName: A("PermissionDenied"),
  retry: M().optional()
})), E0 = p(() => u({
  hookEventName: A("Notification"),
  additionalContext: o().optional()
})), S0 = p(() => u({
  hookEventName: A("PermissionRequest"),
  decision: $e([ u({
    behavior: A("allow"),
    updatedInput: ue(o(), oe()).optional(),
    updatedPermissions: T(Lt()).optional()
  }), u({
    behavior: A("deny"),
    message: o().optional(),
    interrupt: M().optional()
  }) ])
})), T0 = p(() => u({
  hookEventName: A("CwdChanged"),
  watchPaths: T(o()).optional()
})), w0 = p(() => u({
  hookEventName: A("FileChanged"),
  watchPaths: T(o()).optional()
})), A0 = p(() => u({
  hookEventName: A("MessageDisplay"),
  displayContent: o().optional().describe("Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original.")
}).describe("Hook-specific output for the MessageDisplay event. Display-only: replaces the delta on screen without changing the stored message.")), y0 = p(() => u({
  continue: M().optional(),
  suppressOutput: M().optional(),
  stopReason: o().optional(),
  decision: U([ "approve", "block" ]).optional(),
  systemMessage: o().optional(),
  terminalSequence: o().optional().describe("A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped."),
  reason: o().optional(),
  hookSpecificOutput: $e([ o0(), a0(), i0(), l0(), d0(), c0(), h0(), u0(), p0(), m0(), _0(), g0(), f0(), b0(), E0(), S0(), R0(), v0(), T0(), w0(), C0(), A0() ]).optional()
})), R0 = p(() => u({
  hookEventName: A("Elicitation"),
  action: U([ "accept", "decline", "cancel" ]).optional(),
  content: ue(o(), oe()).optional()
}).describe("Hook-specific output for the Elicitation event. Return this to programmatically accept or decline an MCP elicitation request.")), v0 = p(() => u({
  hookEventName: A("ElicitationResult"),
  action: U([ "accept", "decline", "cancel" ]).optional(),
  content: ue(o(), oe()).optional()
}).describe("Hook-specific output for the ElicitationResult event. Return this to override the action or content before the response is sent to the MCP server.")), C0 = p(() => u({
  hookEventName: A("WorktreeCreate"),
  worktreePath: o()
}).describe("Hook-specific output for the WorktreeCreate event. Provides the absolute path to the created worktree directory. Command hooks print the path on stdout instead.")), ZA = p(() => $e([ n0(), y0() ])), Ut = p(() => u({
  name: o().describe("Skill name (without the leading slash)"),
  description: o().describe("Description of what the skill does"),
  argumentHint: o().describe('Hint for skill arguments (e.g., "<file>")'),
  aliases: T(o()).optional().describe("Alternate names that resolve to this command (e.g., /cost and /stats both resolve to /usage)"),
  builtin: M().optional().describe("True when the command is Claude Code's own; absent for a command defined by a user, project, plugin or MCP server. Rows can share a name: when a marked row carries it, /name runs that one, and an unmarked row is the one /name runs only when no marked row shares its name. The marker describes the row's name, not its aliases: a typed alias runs a command that has it as its name, when one exists, whatever this marker says."),
  plugin: o().optional().describe("@internal The plugin that registered the command through `$.command.register`, by name, so a client can say whose it is: the name and description are the plugin's own words. Absent for every other command, one a plugin the binary carries registered included. Untrusted text: escape it before display.")
}).describe("Information about an available skill (invoked via /command syntax).")), Zn = p(() => u({
  name: o().describe('Agent type identifier (e.g., "Explore")'),
  description: o().describe("Description of when to use this agent"),
  model: o().optional().describe("Model this agent uses: an alias or model ID, or 'inherit' for the parent's model. If omitted, uses the default subagent model when one is configured, else the parent's model")
}).describe("Information about an available subagent that can be invoked via the Task tool.")), sr = p(() => u({
  value: o().describe("Model identifier to use in API calls"),
  resolvedModel: o().optional().describe("Canonical wire model id this row's `value` resolves to (e.g. 'sonnet' \u2192 'claude-sonnet-5'). Lets hosts match a persisted explicit id against the alias row that covers it."),
  displayName: o().describe("Human-readable display name"),
  description: o().describe("Description of the model's capabilities"),
  supportsEffort: M().optional().describe("Whether this model supports effort levels"),
  supportedEffortLevels: T(U([ "low", "medium", "high", "xhigh", "max" ])).optional().describe("Available effort levels for this model"),
  supportsAdaptiveThinking: M().optional().describe("Whether this model supports adaptive thinking (Claude decides when and how much to think)"),
  supportsFastMode: M().optional().describe("Whether this model supports fast mode"),
  supportsAutoMode: M().optional().describe("Whether this model supports auto mode"),
  disabled: M().optional().describe("@internal Model is visible but not selectable (e.g. a model the org's Zero Data Retention setting excludes). The human-readable reason is folded into `description`; a structured disabledReason field is the extension point if a consumer ever needs the reason separately."),
  promoListPrice: o().optional().describe("@internal List price (e.g. `$3/$15`) for a model currently on a launch promo. `description` carries only the promo price so plain-text consumers read it unambiguously; rich pickers prepend this struck-through before the first `$X/$Y` in `description`. Absent when no promo is active.")
}).describe("Information about an available model.")), ey = p(() => u({
  email: o().optional(),
  organization: o().optional(),
  subscriptionType: o().optional(),
  tokenSource: o().optional(),
  apiKeySource: o().optional(),
  apiProvider: U([ "firstParty", "bedrock", "vertex", "foundry", "anthropicAws", "anthropicGoogleCloud", "mantle", "gateway" ]).optional().describe('Active API backend. Anthropic OAuth login only applies when "firstParty"; for 3P providers the other fields are absent and auth is external (AWS creds, gcloud ADC, etc.). "gateway" means the CLI is authenticated against an enterprise gateway.')
}).describe("Information about the logged in user's account.")), z0 = p(() => $e([ o(), ue(o(), tr()) ])), ty = p(() => u({
  description: o().describe("Natural language description of when to use this agent"),
  tools: T(o()).optional().describe("Array of allowed tool names. If omitted, inherits all tools from parent. Note: passing 'Skill' here is deprecated \u2014 use the `skills` field instead."),
  disallowedTools: T(o()).optional().describe("Array of tool names to explicitly disallow for this agent. MCP server-level specs (mcp__server, mcp__server__*, mcp__*) remove every tool from the named server (or all MCP tools)."),
  prompt: o().describe("The agent's system prompt"),
  model: o().optional().describe("Model alias (e.g. 'fable', 'opus', 'sonnet', 'haiku') or full model ID (e.g. 'claude-fable-5'). 'inherit' uses the main model; if omitted, uses the default subagent model when one is configured, else the main model"),
  mcpServers: T(z0()).optional(),
  criticalSystemReminder_EXPERIMENTAL: o().optional().describe("Experimental: Critical reminder added to system prompt"),
  skills: T(o()).optional().describe("Array of skill names to preload into the agent context"),
  initialPrompt: o().optional().describe("Auto-submitted as the first user turn when this agent is the main thread agent. Slash commands are processed. Prepended to any user-provided prompt."),
  maxTurns: v().int().positive().optional().describe("Maximum number of agentic turns (API round-trips) before stopping"),
  autoCompactWindow: v().int().min(tL).max(m$).optional().describe("Token count at which this agent compacts its own conversation when it runs as a subagent. It only lowers the window the subagent would otherwise inherit. No effect on the main session agent."),
  background: M().optional().describe("Run this agent as a background task (non-blocking, fire-and-forget) when invoked"),
  omitClaudeMd: M().optional().describe("Run this agent without the user, project and local CLAUDE.md instruction files when it runs as a subagent; managed policy files are kept. For agents that take everything they need from the delegation prompt. No effect on the main session agent."),
  memory: U([ "user", "project", "local" ]).optional().describe("Scope for auto-loading agent memory files. 'user' - ~/.claude/agent-memory/<agentType>/, 'project' - .claude/agent-memory/<agentType>/, 'local' - .claude/agent-memory-local/<agentType>/"),
  effort: $e([ U([ "low", "medium", "high", "xhigh", "max" ]), v().int() ]).optional().describe("Reasoning effort level for this agent. Either a named level or an integer"),
  permissionMode: de().optional().describe("Permission mode controlling how tool executions are handled"),
  observer: o().optional().describe("Agent type auto-spawned as a background observer whenever this agent runs. The observer receives read-only activity digests and reports via the ObserverReport tool; it never participates in the task."),
  observerMessage: o().optional().describe("Supplemental postamble appended (after the harness-owned default) to each activity digest sent to the observer. Blank values are ignored.")
}).describe("Definition for a custom subagent that can be invoked via the Agent tool.")), aJ = p(() => U([ "user", "project", "local" ]).describe("Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json).")), i2n = p(() => u({
  type: A("local").describe("Plugin type. Currently only 'local' is supported"),
  path: o().describe("Absolute or relative path to the plugin directory"),
  skipMcpDiscovery: M().optional().describe("When true, the engine loads skills/hooks/agents/commands from this plugin but does NOT read its .mcp.json or manifest mcpServers. Use when the SDK host owns this plugin's MCP connections.")
}).describe("Configuration for loading a plugin.")), eo = "Count of tracked files NOT restored or deleted because a symlink, hard link, or other non-regular file was detected at the tracked path, its parent directory no longer resolves to where it pointed when the checkpoint was taken, or its backup could not be safely read. Only populated by a real (non-dryRun) rewind \u2014 on a dryRun response the field is never set and the preview counts do not reflect link-safety refusals. Absent or 0 on a real rewind means no link-safety refusals occurred; other per-file failures (for example a missing backup file) are not counted here; they are reported in telemetry, and when every differing file fails to restore the rewind itself fails (canRewind: false).", iJ = p(() => u({
  canRewind: M(),
  error: o().optional(),
  filesChanged: T(o()).optional(),
  insertions: v().int().optional(),
  deletions: v().int().optional(),
  skippedLinks: v().optional().describe(eo)
}).describe("Result of a rewindFiles operation.")), k0 = p(() => UA().describe('An Anthropic Messages API user message: a MessageParam with role "user" whose content is a string or an array of content blocks (text, image, document, tool_result, ...). See the Messages API reference for the block types.')), O0 = p(() => Kn()), N0 = p(() => qA().describe('Shaped like an Anthropic Messages API Message object (role "assistant"): id, model, content blocks (text, thinking, tool_use, ...), stop_reason and usage. When streamed, content typically holds the single block this message delivers and stop_reason is still null \u2014 see SDKAssistantMessage. See the Messages API reference for the block types.')), I0 = p(() => oe().describe("One Anthropic Messages API streaming event (message_start, content_block_start, content_block_delta, content_block_stop, message_delta, message_stop) as defined for the streaming Messages API.")), _ = p(() => o()), sy = p(() => Fn().describe("MAIN AGENT LOOP ONLY \u2014 excludes Task subagent, sidechain, and auxiliary model calls, and is per-turn in streaming-input sessions. Prefer modelUsage for token/cost accounting.")), to = p(() => U([ "authentication_failed", "oauth_org_not_allowed", "account_on_hold", "verification_required", "billing_error", "rate_limit", "overloaded", "invalid_request", "model_not_found", "server_error", "unknown", "max_output_tokens", "cloud_credential_error" ])), P0 = p(() => $e([ A("compacting"), A("requesting"), lf() ])), ry = p(() => u({
  uri: o(),
  name: o(),
  title: o().optional(),
  description: o().optional(),
  mimeType: o().optional(),
  size: v().optional(),
  annotations: ue(o(), oe()).optional()
})), M0 = p(() => u({
  kind: U(AHs),
  servers: T(o()).optional().describe("mcp_needs_auth / mcp_disabled: the server names as configured. mcp_required_missing: the name patterns the agent definition requires that no connected server matches."),
  provider: U(CHs).optional().describe("auth_expired / auth_overridden / auth_missing_scope / design_needs_authorization: whose login the fix names \u2014 'claude_ai' (the claude.ai account, /login) or 'claude_design' (Claude Design's own authorization, /design login)."),
  path: o().optional().describe("outside_reads_blocked: the path the read block refused, when the refusal names one. staged_for_review: the settings file the write was held for."),
  managed: M().optional().describe("outside_reads_blocked: an organization policy sets the block, so the user cannot remove it. auth_overridden: the overriding credential was injected by the host environment, so nothing in this session can unset it."),
  feature: U(RHs).optional().describe("feature_disabled / policy_denied: the feature that is off."),
  cause: U(xHs).optional().describe("feature_disabled: why the feature is off \u2014 'managed_settings' (CLAUDE_CODE_DISABLE_WORKFLOWS, or disableWorkflows or enableWorkflows: false set by a layer above the user's own settings), 'org_policy', 'unavailable' (not launched for this account), or 'user_setting' (the user's /config setting is off, including a disableWorkflows in their own settings, and nothing the user cannot clear also keeps them off)."),
  policy_kind: U(PHs).optional().describe("policy_denied: the verdict \u2014 'org_denied' (the organization's policy turns the feature off) or 'latched' (a HIPAA-regulated organization signed in earlier in this process; restarting clears it).")
}).describe("@internal The fix a host can offer for a tool result, stamped from structured producer state (never parsed from the result text). Kinds: mcp_needs_auth, mcp_disabled, mcp_required_missing, auth_expired, auth_overridden, auth_missing_scope, design_needs_authorization, sandbox_violation, outside_reads_blocked, memory_paused, feature_disabled, policy_denied, spawn_arg_limit (the command's exec image exceeded the OS argument limit), staged_for_review (a settings-file write held for the machine owner's review). New kinds are additive; treat an unknown kind as absent.")), so = p(() => Kr("kind", [ u({
  kind: A("human")
}), u({
  kind: A("channel"),
  server: o()
}), u({
  kind: A("peer"),
  from: o(),
  fromMode: U([ "bypass", "prompting" ]).optional().describe("The SENDING session's permission class as declared by the host that injects this message on local stdin ('bypass' for sessions that run tools without asking, 'prompting' otherwise). Lets the recipient deliver a same-class message immediately while a cross-class or undeclared sender is still held at a recipient that runs without asking. Honored only from the injecting host on local stdin; absent when the host does not declare it."),
  name: o().optional().describe("Sender display name, normalized by the harness: Unicode control, format, surrogate, and line/paragraph-separator code points stripped (categories Cc/Cf/Cs/Zl/Zp \u2014 covers bidi controls, zero-width characters, and tag characters), trimmed, at most 64 code points (+ ellipsis, never splitting a surrogate pair). Sender-asserted display text (the addressable identity is `from`) \u2014 render it as reported speech, but no client-side character sanitization is needed. Absent when the wire is not exactly one harness-formed envelope and on messages from older senders."),
  fromSession: o().optional().describe("The sender's host-openable session id (the envelope's `from-session` attribute \u2014 e.g. a desktop `local_<uuid>` or a cloud session `session_`/`ses_` id), set by the sender's host so a receiving UI can link this message back to the sending session. Sender-asserted like `from`: a navigation target only, never authority. Absent when the sender's host provides none and on messages from older senders."),
  inbound_origin: o().optional().describe("@internal Server-asserted ingest path of the demoted delivery, copied at classification from the message-level `inbound_origin`."),
  senderTaskId: o().optional().describe("Task id of the in-process background subagent that sent this message, stamped by the harness from the sending loop (never from tool input). Absent for cross-session peers."),
  body: o().optional().describe("Decoded message body with the peer envelope stripped \u2014 byte-exact with what the model sees. Present only when the turn is exactly one harness-formed envelope (or an in-process agent message); render this instead of re-parsing the message text."),
  verifiedPeerPid: v().optional().describe("Kernel-verified pid of the process that connected to this session's cross-session messaging socket, read from the connection (SO_PEERCRED / LOCAL_PEERPID) \u2014 never from the payload. This identifies the CONNECTING process, which for relayed traffic (e.g. a daemon forwarding on another session's behalf) is the relay, not the message's author. Key sender identity on this, never on `from`: `from` is sender-authored and kept only for reply routing, so it is forgeable by any same-user process. Absent when unverifiable (Windows, non-UDS ingress) \u2014 never a wrong value. Pids are recyclable: provenance, not an authentication token."),
  handback: A(!0).optional().describe("@internal Present, and always true, when the message is a subagent's final report to the agent that launched it, delivered through the SubagentHandback tool. Stamped by the harness, never from tool input. `body` is then the hand-back frame line with the indented report under it, and any harness note above it; `handbackReportText` and `handbackNote` carry those two parts for display. A boolean mark: not the `handback` state string of a task notification or of an Agent tool result. On a prompt that joins several queued messages, this mark and `flagged` are the first message's alone."),
  flagged: A(!0).optional().describe("@internal Present, and always true, on a hand-back that auto mode's review blocked, or that it could not judge because a safety filter refused the review request: the report was delivered all the same, under the SECURITY WARNING that `handbackNote` carries. Never cap or fold such a message: show the note and the report in full. Absent on a hand-back that was not flagged, including one delivered under the note that the review was unavailable."),
  handbackNote: o().optional().describe("@internal On a hand-back: the harness's own words above the frame line in `body` (auto mode's SECURITY WARNING, or its note that the review could not run), without the indent. Never the sender's words; `handbackReportText` says how to draw the two. Absent when the harness wrote nothing there."),
  handbackReportText: o().optional().describe("@internal On a hand-back: the subagent's report under the frame line in `body`, without the indent. These are the sender's words, never the harness's, even where they read like a harness note. It is the text the receiving model reads, so for a report too large to deliver inline it is the same preview and saved-file note. Neither this field nor `handbackNote` carries an indent or a mark that tells one from the other: the two fields are the boundary. Draw them as two visually separate elements, the note as the harness's notice and the report in a container of its own, never as one continuous text, and read both instead of taking the frame off `body`. Absent, like `handbackNote`, wherever `body` is, on every message that is not a hand-back, and from CLIs that predate it.")
}), u({
  kind: A("task-notification"),
  subkind: U([ "scheduled-trigger", "peer-send-message", "projects-relay", "session-inbox" ]).optional().describe("Present when the delivery is the fired stored prompt of a scheduled task/routine ('scheduled-trigger', stamped from server-asserted provenance, or declared by a local host for its own scheduled runs; the schedule attests storage, not authorship) or a coordinator co-member SendMessage delivery ('peer-send-message': model-authored text from another of the same user's sessions, verified by the server-stamped receiver co-membership \u2014 task-notification for prompt authority, but distinguishable so the receive-side crossSessionInbound setting can apply to it). The harness frames a scheduled-trigger delivery as the session's assigned task instead of the generic background-notification frame. Absent on webhook, PR-steward, plugin, and background-event deliveries."),
  fireReason: o().optional().describe("On a 'scheduled-trigger' delivery, why it fired: a short lowercase token such as 'scheduled', 'manual', 'retry', 'catch_up' or 'api'. Set by the server for cloud routines, or declared by a local host for its own scheduled runs, which is honored only in a process the host started with CLAUDE_CODE_HOST_SCHEDULED_RUN=1 (a local host's value is kept only if it is 1 to 32 lowercase letters or underscores); absent when neither sent one."),
  producer: A("session-task").optional().describe("@internal Present ('session-task') when the notification reports on work this session itself launched: a background agent, shell command, workflow, monitor, MCP or remote task settling, a detached tool call, or a hook rewake or worker check-in following up on such work. Absent on webhook, artifact and other externally-authored deliveries."),
  runId: o().optional().describe("On a background task's own notification: the run_id its task_* events carried, as of when the notification was queued. Not part of the text the model reads.")
}), u({
  kind: A("coordinator")
}), u({
  kind: A("unclassified")
}).describe("Injected turn whose ingress classification found no provenance. Framed by the harness as a non-user source in both drains; never presumed human, never host-replayed."), u({
  kind: A("observer"),
  from: o(),
  senderTaskId: o()
}).describe("Report from a background observer agent to the agent it observes. One-way by construction \u2014 the observed agent must not reply."), u({
  kind: A("auto-continuation")
}), u({
  kind: A("observer-activity")
}).describe("Activity digest delivered to an observer agent. The message body is the self-framing digest (envelope + postamble); observed content is data, not instructions.") ]).describe("Provenance of a user-role message (peer session, team lead, channel). A host wrapping keyboard input must stamp {kind:'human'} explicitly \u2014 absent origin is treated as unattributed and fails closed at strict isHuman() trust gates.")), ny = p(() => u({
  type: A("user"),
  message: k0(),
  parent_tool_use_id: o().nullable(),
  isSynthetic: M().optional(),
  tool_use_result: oe().optional().describe("Structured tool output \u2014 the tool's full Output object, not the string content sent to the model. The shape is per-tool, keyed by the matching tool_use block's name (see the *Output types in toolTypes); MCP and dynamic tools carry their own shapes, so the field stays unknown-typed. For the Agent/Task tool the completed shape is the subagent's final report without the model-directed agentId/usage trailer, plus run totals \u2014 render from it instead of parsing the tool_result text. A call that stepped aside for a message the user sent (today a WebFetch or WebSearch call) carries `{ detachedToolCall: true }` in place of its Output: the call is still running, and its result reaches the model in a later turn."),
  priority: U([ "now", "next", "later" ]).optional(),
  origin: so().optional(),
  client_platform: o().optional().describe("@internal The `anthropic-client-platform` value of the client that sent this message (e.g. `ios`, `android`, `web_claude_ai`, `desktop_app`). Injected server-side by CCR ingress from the request header."),
  inbound_origin: o().optional().describe("@internal Server-asserted ingest path that produced this message. Not settable by clients."),
  server_received_wall_ms: v().optional().describe("@internal Epoch ms on the session server's clock when it received the HTTP request that delivered this message. Written by the session server; the CLI copies it to the turn's result as user_message_server_received_wall_ms."),
  historical: M().optional().describe("@internal Replayed history rather than a live message: the Remote Control bridge stamps it on the messages it flushes to the session server, which also stamps it on deliveries it replays."),
  shouldQuery: M().optional().describe("When false, the message is appended to the transcript without triggering an assistant turn. It will be merged into the next user message that does query."),
  timestamp: o().optional().describe("ISO timestamp when the message was created on the originating process. Older emitters omit it; consumers should fall back to receive time."),
  is_meta: A(!0).optional().describe("@internal True when the message was synthesized by the loop (not user keyboard input). From internal UserMessage.isMeta."),
  seeded_summon: A(!0).optional().describe("@internal Desktop host only: the host's own seeded summon."),
  client_composed: A(!0).optional().describe("The client composed this turn from content the user did not type; the CLI delivers its text as written, with no `@path` file-mention expansion and no slash-command dispatch. On current CLIs the turn-start attachment pass is skipped as a whole: `@server:resource` MCP mentions are not expanded either, and the prompt is sent without the context the CLI normally attaches alongside it (nested `CLAUDE.md` and rules files, skill and tool listings, reminders); the pass the CLI runs between tool calls is unaffected."),
  initiator: o().optional().describe("@internal The host's own label for what started this turn (e.g. the desktop app's `scheduled-task`, `sleep-auto-resume`); `user` or absent means a person sent it. Usage attribution only; it does not change how the turn runs."),
  is_visible_in_transcript_only: A(!0).optional().describe("@internal True when the message is stored in the transcript but not rendered in the live UI."),
  is_virtual: A(!0).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
  is_compact_summary: A(!0).optional().describe("@internal True when this user message is a compact-summary synthetic message."),
  summarize_metadata: u({
    messages_summarized: v().int(),
    user_context: o().optional(),
    direction: U([ "from", "up_to" ]).optional()
  }).optional().describe('@internal Metadata for "Summarize from here" / "Summarize up to here" summaries (from internal UserMessage.summarizeMetadata).'),
  mcp_meta: u({
    _meta: ue(o(), oe()).optional(),
    structured_content: ue(o(), oe()).optional(),
    resource_links: T(ry()).optional().describe("CLI-owned: the `resource_link` content blocks the MCP tool returned, collected from the raw result before the CLI rewrites each into the `[Resource link: NAME] URI` text line the model reads \u2014 so a host renders the files without parsing that line. At most 50 links and 64 KiB serialized; absent when the result had none, and absent on a subagent's tool results (parent_tool_use_id set), whose mcpMeta carries `_meta` only. On today's wire this rides the mcpMeta spread as `tool_use_result.resourceLinks`. A sibling of `_meta`, never inside it: a server cannot supply it, and server `_meta` keys under the CLI-reserved `com.anthropic/` prefix are dropped before this message.")
  }).optional().describe("@internal MCP protocol metadata passed through to SDK consumers, never sent to the model (from internal UserMessage.mcpMeta)."),
  tool_result_meta: T(u({
    id: o(),
    non_execution_kind: U(D0t).optional(),
    user_feedback: o().optional(),
    remedy: M0().optional(),
    permission_decision: u({
      decision: U(GA),
      source: o(),
      reason_type: U(Jmt).optional().catch(void 0)
    }).optional().catch(void 0)
  })).optional().describe("@internal Display metadata for this message's tool_result blocks, keyed by tool_use_id. non_execution_kind is the harness-stamped reason an is_error:true result did not carry the tool's own execution output (user-rejected / permission-rule / automode-* / interrupted / cancelled); absent means the tool ran to completion. remedy is the fix a host can offer for what the result reports (see SDKToolResultRemedy). An entry may carry a remedy alone, on a result that did run (a staged write, a sandbox violation on exit 0), so whether a call ran is read from non_execution_kind, never from an entry's presence. On a subagent's messages (parent_tool_use_id set), entries carry only permission_decision, so those messages do not say whether a call ran. permission_decision is how the call's permission check ended, as Claude Code's claude_code.tool.blocked_on_user trace span reports it. decision is accept, reject or cancelled. source names what decided: config, classifier, hook, user_temporary, user_permanent, user_reject, user_abort, or invalid_input, permission_updated_input_invalid or server_fallback_tombstone when bad input or the server ended the wait. Which label a rule gets depends on the session: in SDK sessions a rule for this session or in the user's own settings reports user_temporary, user_permanent or user_reject and other rules report config, while interactive sessions report every rule as config. reason_type is the kind of reason the check gave when it decided by itself, such as 'rule' whenever a rule decided, or 'classifier' for an auto-mode allow, which reports source config. reason_type is absent when a person or the SDK host answered the question, when the check's outcome was still a question, and for user_abort and the last three sources above. permission_decision is absent when the call ended before its permission check, and on some results built apart from the call's own run, such as a plugin hook's refusal, a hook's rewrite of a denied result, or the result the tool executor writes for a queued call that a stop cancelled. user_feedback is the deny comment a human typed at a permission prompt (the local dialog or a bridge client's deny UI), before the CLI's reject-message framing \u2014 absent when the deny was resolved by a coordinator, channel relay, or hook rather than a human. A deny answered through the SDK control protocol (can_use_tool / --permission-prompt-tool) currently reports as 'permission-rule' with no user_feedback, because that wire carries no human-provenance signal. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Clients read this instead of string-matching the result prose."),
  source_tool_use_id: o().optional().describe("@internal When this message was generated by a tool via newMessages, links it to that tool_use id."),
  source_tool_assistant_uuid: o().optional().describe("@internal For tool_result messages: UUID of the assistant message containing the matching tool_use block. Used for parentUuid assignment in transcript."),
  image_paste_ids: T(v().int()).optional().describe("@internal Paste IDs for images in this message, in order of appearance. REPL-local state \u2014 candidate for surface-side if daemon has no use for it."),
  plan_content: o().optional().describe("@internal Plan to implement (cleared-context flow). When set, the message is rendered with plan styling."),
  permission_mode: de().optional().describe("@internal Permission mode active when this message was sent (for rewind restoration)."),
  interrupted_message_id: o().optional().describe("@internal For [Request interrupted by user] markers only: the API msg_* id that Esc cancelled."),
  refused_message_id: o().optional().describe("@internal Only on the synthetic message that re-asks the same model after a refusal: the API msg_* id of the refused response. Absent when the CLI has no well-formed id for it.")
})), rr = p(() => ny().extend({
  uuid: _().optional(),
  pasted_content: T(O0()).optional().describe("Content the user pasted into the prompt rather than typed: each entry a string or an array of content blocks. The CLI appends the text of each entry after the typed text, in order, and may wrap it in `<pasted_content>` tags. Blocks other than text are ignored; send images and documents in `message.content`. A list of over 1,000 entries and blocks in all is ignored."),
  inline_pastes: T(o()).optional().describe("Text the user pasted that is still in `message.content` where they put it: each entry one paste. The prompt is not changed by the host; the CLI may wrap each entry in `<pasted_content>` tags where it still stands in the last text block. It looks for the first 100 entries that are not blank. For a paste the host took out of `message`, use `pasted_content` instead."),
  session_id: o().optional(),
  agent_id: o().optional().describe("ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."),
  subagent_type: o().optional().describe("Subagent type that produced this message."),
  task_description: o().optional().describe("Description of the subagent task that produced this message."),
  file_attachments: T(oe()).optional().describe("@internal Files a remote client attached to this prompt (each {file_uuid, file_name, is_image?, sha256?, file_size?}; src/bridge/inboundAttachmentSchema.ts reads them). Typed like SDKUserMessageReplay.file_attachments so the two message types stay assignable.")
}).describe("A user-role message. A client writes one to the CLI to submit a prompt (this starts a turn); the CLI emits them for user-role content it adds to the conversation itself, chiefly the tool_result blocks answering the assistant's tool_use blocks.")), D0 = p(() => ny().extend({
  uuid: _(),
  session_id: o(),
  isReplay: A(!0),
  file_attachments: T(oe()).optional()
})), oy = p(() => u({
  type: A("bash_command"),
  command: o().describe("Shell command to execute verbatim via a one-shot `/bin/sh -c` (or `pwsh`) subprocess, bypassing the model. Trust model matches the local TUI `!cmd` path (no sandbox, no per-command prompt); unlike `!cmd`, output is not appended to the conversation transcript and there is no persistent shell state across calls."),
  cwd: o().optional().describe("Working directory for the command. Falls back to the session cwd when omitted."),
  uuid: _().optional(),
  session_id: o().optional()
}).describe("@internal A user-initiated shell command dispatched to a one-shot shell subprocess with no model turn. Input-only \u2014 sent by CCR clients that surface a dedicated terminal UI; never emitted on stdout.")), Rxr = p(() => u({
  status: U([ "allowed", "allowed_warning", "rejected" ]),
  resetsAt: v().int().optional(),
  rateLimitType: U([ "five_hour", "seven_day", "seven_day_opus", "seven_day_sonnet", "seven_day_overage_included", "overage" ]).optional(),
  utilization: v().optional(),
  unifiedWindows: u({
    five_hour: u({
      utilization: v(),
      resetsAt: v().int()
    }).optional(),
    seven_day: u({
      utilization: v(),
      resetsAt: v().int()
    }).optional(),
    seven_day_overage_included: u({
      utilization: v(),
      resetsAt: v().int()
    }).optional()
  }).optional().describe("@internal Per-window usage for the session (5-hour), weekly (7-day), and overage-included weekly (per-model bucket; present only for accounts whose responses carry that window) subscription rate-limit windows, as read from the anthropic-ratelimit-unified-* response headers. utilization is the fraction of the window used (usually 0-1, same scale as the top-level utilization field; values above 1 occur when usage legitimately runs past a window's cap, e.g. lower-priority episodes past the 5-hour limit); resetsAt is unix epoch seconds. Unlike the top-level status/utilization fields, which describe the currently limiting window, both windows are tracked on every observation, and events are emitted when a window's rounded percentage or reset time moves, not only on status transitions. Windows absent from the account state are absent here. Absent until the first response carrying these headers is observed, and always absent for API-key, Bedrock, and Vertex sessions, whose responses do not carry them."),
  overageStatus: U([ "allowed", "allowed_warning", "rejected" ]).optional(),
  overageResetsAt: v().int().optional(),
  overageDisabledReason: U([ "overage_not_provisioned", "org_level_disabled", "org_level_disabled_until", "out_of_credits", "seat_tier_level_disabled", "member_level_disabled", "seat_tier_zero_credit_limit", "group_zero_credit_limit", "member_zero_credit_limit", "org_service_level_disabled", "no_limits_configured", "fetch_error", "unknown" ]).optional(),
  isUsingOverage: M().optional(),
  overageInUse: M().optional(),
  overageEnabled: M().optional(),
  surpassedThreshold: v().optional(),
  rateLimitGraceActive: M().optional().describe("@internal Usage-limit grace signal. Follows the latest served main-loop or subagent response: set when it reports grace-zone utilization > 0 (the server reports that only to a request that sent `anthropic-usage-limit: extended`, tengu_lantern_spool), cleared when a response the limiter ran on reports none or, if the latest in-zone response named the grace window's reset, once that reset passes on this machine's clock. Side calls, and responses with no `anthropic-ratelimit-unified-status` (the limiter did not run), are not read. A refused request's 429 is not read either, so while requests are refused the last value persists: still expire any UI derived from this field via resetsAt. While set, overageStatus allowed / allowed_warning means paid extra usage covers the overflow (nothing will be cut off). Stays true at hard exhaustion (status rejected); combine with status instead of reading this field alone as \"still usable\"."),
  overagePeriodMonthly: u({
    utilization: v()
  }).optional().describe("@internal Monthly service spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap."),
  overagePeriodChannel: u({
    utilization: v()
  }).optional().describe("@internal Per-Slack-channel spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap. Absent when the channel has no individual cap."),
  limitScope: U([ "service", "channel", "group_pool" ]).optional().describe("Which spend limit blocked the request when it is not the member's own cap: 'group_pool' means a pooled group budget shared by the member's team is used up (the denial otherwise looks like the member's own monthly cap). Absent on a plain member denial and from older CLIs."),
  errorCode: U([ "credits_required" ]).optional(),
  canUserPurchaseCredits: M().optional(),
  hasChargeableSavedPaymentMethod: M().optional()
}).describe("Rate limit information for claude.ai subscription users.")), qe = 128, x0 = 64, nAo = p(() => u({
  session: u({
    total_cost_usd: v(),
    total_api_duration_ms: v().int(),
    total_duration_ms: v().int(),
    total_lines_added: v().int(),
    total_lines_removed: v().int(),
    model_usage: ue(o(), Dt())
  }).describe("Cost and usage accumulated by the current session."),
  rate_limits: u({
    limits: T(u({
      kind: o().max(qe).describe("The server's meter kind, e.g. 'session', 'weekly_all' or 'weekly_scoped'. Classify a row on this, never on a label."),
      group: o().max(qe).describe("The server's row group, e.g. 'session' or 'weekly'; rows render grouped under it, in the server's order."),
      percent: v().describe("Share of the window used, 0-100."),
      resets_at: o().max(qe).nullable().describe("ISO 8601 timestamp when the window resets."),
      scope: u({
        model: u({
          display_name: o().max(qe)
        }).nullable().optional(),
        surface: u({
          display_name: o().max(qe)
        }).nullable().optional()
      }).nullable().optional().describe("What a scoped row is for, a model or a surface, with the server's display label."),
      severity: o().max(qe).describe("The server's reading of the row for a meter's colour, e.g. 'normal', 'warning' or 'critical'. Every row here is the server's, so a client never grades a row itself."),
      is_active: M().describe("The server's headline pick: the row a single-value indicator shows.")
    })).max(x0).nullable().describe("The server's usage rows (the usage endpoint's limits[]), as sent: which meters apply, their scope, labels, severity and order are the server's, so a client renders them verbatim and a new meter needs no client release. Empty when the server reported no meters; null when the body carried no rows at all (a server that predates them). Null too while the usage fetch is failing: the rows here are only ever the server's current reply, so neither the row the CLI builds from rate-limit response headers for its own screen nor its snapshot of an earlier reply appears here."),
    extra_usage: u({
      is_enabled: M(),
      monthly_limit: v().nullable(),
      used_credits: v().nullable(),
      utilization: v().nullable(),
      currency: o().max(qe).nullable().optional()
    }).nullable().optional().describe("Extra-usage (overage) spend for the billing period, when the plan has it. Amounts are in minor units of `currency` (cents for USD); is_enabled is false while extra usage cannot cover sends.")
  }).nullable().describe("The plan's usage rows and extra-usage spend from the claude.ai usage endpoint; null when the CLI could not fetch them (no plan on this lane, or a token without the profile scope).")
}).describe("Structured twin of a /usage result, carried beside its text: the session's totals, the plan's usage rows as the server sent them and the extra-usage spend, and nothing else from the usage body (the get_usage control reply carries the rest). Experimental \u2014 the shape may change.")), a2n = [ "used", "free", "buffer", "deferred" ], L0 = p(() => u({
  name: o().describe('Display name of the row as the CLI renders it, e.g. "Messages" or "MCP tools (deferred)". Use `kind` (not this name) to classify the row.'),
  tokens: v().int(),
  kind: U(a2n).describe("What the row is: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve (autocompact or manual); 'deferred' rows are out-of-window tool schemas \u2014 listed for awareness, excluded from usage math.")
}).describe("One row of the /context usage-by-category breakdown. Rows may carry zero tokens; renderers typically hide those.")), U0 = p(() => u({
  model: o().describe("Main-loop model the usage was computed for."),
  total_tokens: v().int().describe("Estimated tokens in use, unclamped \u2014 may exceed raw_max_tokens when over limit."),
  raw_max_tokens: v().int().describe("The window usage is measured against: the resolved autocompact window \u2014 the model's believed limit, or a smaller compaction-policy window (a configured value, or e.g. the 200K boundary on 1M-window models)."),
  percentage: v().int().describe("Rounded total_tokens / raw_max_tokens, 0-100+."),
  over_limit: u({
    tokens_over: v().int(),
    kind: U([ "hard_limit", "compaction_window" ])
  }).optional().describe("Present when total_tokens exceeds raw_max_tokens. kind says how the window was resolved, not whether the API will accept the next request: 'hard_limit' means the window is the model's believed limit (the API will refuse past it); 'compaction_window' means a compaction-policy window, which may or may not coincide with the model's hard limit."),
  categories: T(L0()),
  mcp_tools: T(u({
    name: o().describe('Wire name, e.g. "mcp__linear__create_issue".'),
    server_name: o(),
    tokens: v().int()
  })),
  memory_files: T(u({
    path: o(),
    type: o().describe('Display label of the memory-file source, e.g. "Project" or "User".'),
    tokens: v().int()
  })),
  agents: T(u({
    agent_type: o(),
    source: o().describe("Raw source identifier, e.g. 'projectSettings', 'userSettings', 'plugin'. Built-in agents are excluded by the producer. Display labels are the renderer's concern."),
    tokens: v().int()
  })),
  skills: T(u({
    name: o(),
    source: o().describe("Raw source identifier, e.g. 'userSettings', 'plugin', 'syncedSkills'."),
    plugin_name: o().optional(),
    tokens: v().int()
  })).optional().describe("Omitted when no skills contribute tokens.")
}).describe("Structured twin of the /context report \u2014 the data a client needs to render the context-usage card without parsing the markdown table. Evolves additively (new optional fields); a breaking reshape would ship as a sibling field, so consumers can trust the fields they know.")), nr = p(() => u({
  type: A("assistant"),
  message: N0(),
  parent_tool_use_id: o().nullable(),
  error: to().optional(),
  uuid: _(),
  historical: M().optional().describe("@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server)."),
  session_id: o(),
  request_id: o().optional(),
  user_message_uuid: o().optional().describe("Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on an assistant message each time that send changes \u2014 the turn's FIRST top-level assistant message (which may carry only a thinking block, or be a synthetic API-error message), and then, for a turn started by a synthetic (meta) prompt, the first assistant message after each queued user message folded in mid-turn (the fold takes the echo over); with --include-partial-messages the turn's first non-ping stream event is stamped too, independently (see SDKPartialAssistantMessage), so the same uuid may appear on both \u2014 either binds the reply to the send it answers without waiting for the result; the server keeps the first stamp it sees per uuid. A turn started by a typed prompt keeps that uuid for its whole turn, so it stamps once per frame kind. A meta turn's own uuid is stamped only when the host vouches it is the client event's own (on a hosted session, the uuid the session server persisted: delivered content such as a Slack owner ping, a Slack-bot observation or a client-injected synthetic turn), never for a prompt the CLI minted itself \u2014 except that a turn carrying resume_reason, such as the boot-time rescue turn re-running a turn a worker restart interrupted mid-way, stamps the interrupted turn's own last user prompt, the send it answers, where that can be vouched for (a turn that goes on from a permission answer or from in-flight tool calls may first re-send, unstamped, the assistant message that made those calls); either way a user message folded into a meta turn takes the echo over from it (the rescue turn absorbing messages sent while the session was down; a bot-observation turn absorbing a human's post), and the first reply frame of each kind after that fold carries the folded message's uuid \u2014 the first reply that message got. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Absent on every other frame of the turn, on subagent frames (parent_tool_use_id set), on turns that neither had a client uuid nor folded a user message in, and from older producers."),
  user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn has consumed so far, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame \u2014 so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."),
  resume_reason: o().optional().describe("Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers."),
  resumed_from_incomplete_thinking: A(!0).optional().describe("This turn continued the preceding truncated assistant turn inside its trailing signed thinking block (max-output-tokens recovery). Its thinking signatures are cumulative over that preceding thinking-only turn, so a history replayed through the bridge must carry this flag back for the normalizer to keep the run's prefix on the wire. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  supersedes: T(_()).optional().describe("Wire uuids of previously-delivered messages that this message replaces (refusal-fallback supersede). The list can include tombstoned tool_result frames from the refused leg, not only assistant frames. Evict the named messages on arrival and treat this frame as their canonical replacement. Idempotent with the end-of-turn model_refusal_fallback notice, whose retracted_message_uuids remains the complete audit record for the turn."),
  aborted: A(!0).optional().describe("True when this assistant message was truncated by an interrupt/abort before the stream completed: stop_reason was never received and the content may end mid-word. Absent on normally completed messages."),
  agent_id: o().optional().describe("ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."),
  subagent_type: o().optional().describe("Subagent type that produced this message."),
  task_description: o().optional().describe("Description of the subagent task that produced this message."),
  tool_use_meta: T(u({
    id: o(),
    display_name: o(),
    server_display_name: o().optional(),
    icon_url: o().optional(),
    server_id: o().optional(),
    server_id_stamp: o().optional(),
    tool_name: o().optional()
  })).optional().describe("@internal Display metadata for this message's tool_use blocks, keyed by block id. display_name is the MCP server's `tool.annotations.title` when provided, otherwise a readable transform of the wire name; server_display_name is the MCP server's own display name; icon_url is the MCP server's directory icon URL (claude.ai connectors only); server_id is the mcpsrv_ connector id of a server provisioned by claude.ai, set by the CLI from claude.ai's own connector listing, so a client may show the call as that connector's. server_id_stamp is the X-MCP-Server-ID header value, lower-cased, of an http entry in the dynamic scope (passed in at launch or by a later mcp_set_servers push). Claude Code Remote writes the connector's uuid there when the session has one, otherwise an id it generates; the CLI checks only its shape (at most 128 characters of letters, digits, '.', '_', ':' and '-'; anything else yields no stamp), not whose it is, since a --mcp-config or SDK-host entry can write anything. A client may look it up in its own server list, treat a miss as a server it does not know (never as an error), and show a hit as the entry's claim to be that server, not as proof. They are separate fields: a server provisioned by claude.ai carries server_id, a dynamic-scope http entry server_id_stamp. Both absent for a plugin's, a repo's, a settings or an agent entry. Neither is a permission grant. tool_name is the tool's name as its server lists it, without the mcp__<server>__ prefix. Omitted for blocks whose display label equals the wire name (built-in tools). Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  narration_block_indexes: T(v().int().nonnegative()).optional().describe("@internal Ascending zero-based indexes into this frame's `message.content` of the thinking blocks whose signature the server tagged block_kind 'narration' (server summaries of the prose between tool calls, not the model's own reasoning), so a renderer can label them as summaries without decoding the signature envelope. Fail-closed: an unparseable or legacy signature is not listed. A listed block can have empty thinking text when the request returned no thinking text; give those ordinary thinking treatment. Omitted when the frame has no such block, and by CLI versions before this field existed; treat unlisted thinking blocks as ordinary thinking. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  narration_hint: U([ "hidden", "faint" ]).optional().describe("@internal Display-only, for this frame's narration_block_indexes blocks: how to draw their trailing ' \xb7 summarized' hint, by the same rule Claude Code's terminal UI uses for the model that produced the frame. 'hidden': draw no hint. 'faint': draw ' \xb7 summary'. Omitted: draw ' \xb7 summarized'. Sent only to the VS Code extension and only on frames that have such a block; older CLI versions never send it. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  thinking_duration_ms: v().int().positive().optional().catch(void 0).describe("@internal How long the thinking block in this frame took to stream, in whole milliseconds (at least 1): from its content_block_start to its content_block_stop, so the wait for the response's first token is not counted. For display only. Sent only on a frame whose one content block is a thinking block that was streamed. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history, so be ready to show the block without a duration. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  thinking_display: o().optional().catch(void 0).describe("@internal The thinking.display that Claude Code put in the API request body for the response that streamed this frame's thinking block. It has the same source and meaning as `thinking_display` on a stream event. Sent only on a frame whose one content block is a thinking block that was streamed, and only when the body had a display. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history. An absent key states nothing. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  timestamp: o().optional().describe("ISO timestamp of when this content block finished on the originating process. One API assistant turn may produce several assistant messages sharing a message.id, each with its own timestamp. Uses the originating host's clock, so it's for display only; do not order messages by this field. Older emitters omit it; consumers should fall back to receive time."),
  is_meta: A(!0).optional().describe("@internal True when the message was synthesized by the loop (not a model response)."),
  context_usage: U0().optional().describe("Structured twin of the /context report, carried on the synthetic assistant message that delivers the markdown table. Present only on /context results from CLIs new enough to attach it; the markdown in message.content remains the canonical fallback. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  usage_report: nAo().optional().describe("Structured twin of the /usage report, carried on the synthetic assistant message that delivers its text: the session totals, the plan's usage rows and extra-usage spend, for remote clients that render a card from data. Present only on /usage results from CLIs new enough to attach it and from claude.ai-subscriber sessions; the text in message.content remains the canonical fallback. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  local_command_source: o().optional().describe("@internal The originating system local_command row's wire-form content (escaped frames), carried on the loop-synthesized local-command twin. Round-tripped so toInternalMessages rebuilds the internal system row on a bridge/SDK history replay \u2014 replay then matches the live session, where that row is model-visible \u2014 instead of dropping the output or replaying the twin's decoded display text. Wrapper-level sibling \u2014 never inside `message.content`."),
  local_command_run: u({
    command: o(),
    args: o(),
    plugin: o().optional()
  }).optional().describe("@internal On the local-command twin, the run that printed the row: the command's name as `command.run` carried it (no slash), its arguments as the echo shows them (`***` when the command marks them sensitive) and, for a command a plugin registered, that plugin's name, or, for a row whose text plugins' `command.run` hooks answered or retold, the names the text is led by (untrusted text; absent for the binary's own command in its own words). Present when a `local` command's dispatch printed the row or a `command.run` hook answered it, absent on a never-ran notice. A surface that draws the hooks engine's `CommandOutput` site asks ui_render with these, the twin's text and its uuid as instance_id; toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling \u2014 never inside `message.content`."),
  local_command_outcome: u({
    kind: U(Bn),
    suggestion: o().optional().describe("unknown: the registered command closest to the typed name, no slash.")
  }).optional().catch(void 0).describe("@internal On the local-command twin, what the row reports, so a host can offer a fix instead of relaying the text: 'unavailable_headless' (an interactive-panel command this session cannot open), 'unknown' (no command has the typed name), 'failed' (the command ran and failed), 'restart_required' (the change applies after Claude Code restarts). Absent when the row reports none of these; new kinds are additive, so treat an unknown one as absent. toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling \u2014 never inside `message.content`."),
  is_virtual: A(!0).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
  batch_tool_uses: T(De({
    id: o(),
    name: o()
  })).optional().describe("@internal `{id, name}` of the original Batch* tool_use block(s) for a message whose content was decomposed into synthetic v1 tool_use blocks. Round-tripped so a replayed history reassembles the batch block on the wire (not N synthetics). Input is reassembled from the synthetics in `message.content` \u2014 never carried here. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."),
  wire_tool_inputs: ue(o(), oe()).optional().describe("@internal `tool_use.input` exactly as the API produced it, keyed by tool_use id, for a message whose `message.content` carries the client-normalized input. Round-tripped so a replayed history echoes each earlier tool call back to the API as the API emitted it (the server may hold its own copy of the turn). Wrapper-level sibling \u2014 never inside `message.content`."),
  wire_ingest_context: ue(o(), oe()).optional().describe("@internal What the client-side input normalization read from process state (the working directory a leading `cd` was stripped against, the stamp applied to a Slack send) for the inputs in `wire_tool_inputs`, keyed by the same tool_use ids. Round-tripped with `wire_tool_inputs` so a replayed history can verify each recorded input against the normalized one exactly. Wrapper-level sibling \u2014 never inside `message.content`."),
  is_api_error_message: M().optional().describe("@internal True when this assistant message wraps an API error (from internal AssistantMessage.isApiErrorMessage)."),
  api_error_status: v().int().optional().describe("@internal HTTP status code of the API error when is_api_error_message is true."),
  api_error: U([ "max_output_tokens", "dlp_request_denied", "claude_code_version_too_old", "safety_monitor_blocked", "effort_requires_thinking", "advisor_incompatible", "tool_history_mismatch", "autocompact_thrashing", "pdf_too_large", "pdf_password_protected", "media_removed", "no_response", "tls_untrusted_ca", "gateway_content_type", "provider_credentials", "gateway_signin_required", "gateway_session_expired", "api_key_auth_disabled", "org_disabled_credential", "invalid_credential_header", "model_requires_usage_credits", "long_context_credits_required", "consent_unanswered", "no_allowed_fallback", "model_substitution_disabled", "field_not_granted", "usage_limit_reached" ]).optional().catch(void 0).describe("@internal Typed kind of the API error when is_api_error_message is true, for consumers that key on the cause instead of the message text (the text stays the fallback and may change). Absent when the error has no typed kind; new values are added over time, so treat an unknown value as absent. dlp_request_denied: the request was refused by the organization's data-loss-prevention policy \u2014 terminal for that request body; a consumer replaying history must not re-send it. claude_code_version_too_old: the API refused the request because this Claude Code build is below a required minimum version \u2014 the selected model's minimum, or an organization-policy floor; only the message text says which and names the versions, and the remedy is updating Claude Code. safety_monitor_blocked: a server-side safety monitor blocked the model's response for this turn; terminal for the turn, so a consumer replaying history must not re-send the prompt that led to it. effort_requires_thinking: the model refuses the requested effort level while thinking is off; api_error_params.effort names the level. advisor_incompatible: the configured advisor model cannot be paired with this request's model. tool_history_mismatch: the API rejected the conversation's tool_use/tool_result pairing (a tool_use without its result, an orphaned tool_result, a duplicate tool_use id); re-sending the same history fails the same way, and rewinding the conversation is the remedy. autocompact_thrashing: the context refilled to the limit right after each automatic compaction, repeatedly, so the turn stopped; something in context is too large for the window. pdf_too_large: a PDF is over the API's page or size limit. pdf_password_protected: a PDF is encrypted. media_removed: the API refused an image or a document in the conversation, so Claude Code leaves it out of the requests that follow. The frame comes either before the answer of a retry that already left it out, or as the error that ended the turn (the result then repeats this value). api_error_params.media_reason says why, and api_error_params.media which kind of block. Other kinds (pdf_too_large, pdf_password_protected) and some untyped errors also leave the block out, so the absence of this value does not mean that nothing was left out. no_response: no response arrived before the first-byte deadline on any attempt, usually a proxy or gateway that holds responses until they complete. tls_untrusted_ca: the API's TLS certificate comes from an authority this process does not trust, usually a TLS-inspecting proxy or a gateway signed by a private CA. gateway_content_type: a proxy between Claude Code and Amazon Bedrock rewrote Bedrock's event-stream response. provider_credentials: a third-party cloud provider (api_error_params.provider) refused the request's credentials or access; api_error_params.remedy says what fixes it. gateway_signin_required: the Cloud gateway provider is configured and nobody is signed in to it; no request was sent. gateway_session_expired: the Cloud gateway session expired; no request was sent; api_error_params.remedy is gateway_token when the token came from the environment, which signing in does not replace. api_key_auth_disabled: the organization turned off API key authentication and the active credential is an API key. org_disabled_credential: the ANTHROPIC_API_KEY environment variable belongs to a disabled organization and overrides the account sign-in. invalid_credential_header: a credential or header value (from the environment, a helper, or the saved sign-in) cannot be sent as an HTTP header; caught before the request was sent. model_requires_usage_credits: the model runs on usage credits for this account, and credits are off or the included allowance is used up. long_context_credits_required: a request over the 200K-token context boundary needs usage credits. consent_unanswered: the model now uses usage credits and the prompt to confirm went unanswered; nothing was sent. no_allowed_fallback: switching off the model was needed (the usage-credits prompt was declined) and the model policy allows no other model. model_substitution_disabled: switching off the model was needed and CLAUDE_CODE_NO_MODEL_FALLBACK forbids it. field_not_granted: the organization is not allowed to send a field in the request, and the message text says what to do. usage_limit_reached: the request was refused by the account's own usage limit, a plan limit (session, weekly or per-model) or a spend cap on usage credits; api_error_params.rate_limit_info says which and when it resets. The other refusals that share error rate_limit never carry it: an organization policy that turned the service off (no limit was reached, and no reset clears it), a temporary server throttle, a capacity switch-off, an entitlement refusal shown in the server's own words, or a 429 on an API key or a third-party cloud provider."),
  api_error_params: u({
    effort: o().optional(),
    provider: U([ "bedrock", "anthropicAws", "mantle", "anthropicGoogleCloud", "vertex", "foundry", "gateway" ]).optional(),
    remedy: U([ "refresh_command", "refresh_credentials", "adc", "gateway_token", "host_managed", "model_access" ]).optional(),
    media: U([ "image", "document" ]).optional().catch(void 0),
    media_reason: U([ "unprocessable", "unsupported_by_model", "media_budget" ]).optional().catch(void 0),
    rate_limit_info: Rxr().optional().catch(void 0)
  }).optional().describe("@internal Parameters of api_error, present only for the kinds that have any. effort: the effort level the API refused (effort_requires_thinking). media (media_removed): the kind of block the API refused; absent for media_budget. media_reason (media_removed): unsupported_by_model \u2014 the API said that the model does not accept PDF documents; media_budget \u2014 the request's images and documents together exceed the API's limit, and the requests that follow may leave out blocks of either kind; unprocessable \u2014 every other refusal, a gateway's report of a model's refusal among them. provider: the API provider whose credentials failed (provider_credentials, gateway_session_expired). remedy (provider_credentials, gateway_session_expired): refresh_command \u2014 a configured refresh command (awsAuthRefresh / gcpAuthRefresh) refreshes the credentials; refresh_credentials \u2014 refresh the provider's credentials by hand, no command is configured; adc \u2014 refresh the Google application default credentials or the GOOGLE_APPLICATION_CREDENTIALS key file; gateway_token \u2014 replace the gateway token supplied through ANTHROPIC_AUTH_TOKEN or ANTHROPIC_CUSTOM_HEADERS; host_managed \u2014 the host application owns these credentials; model_access \u2014 the credentials work but the model is not enabled for this account and region (Amazon Bedrock). rate_limit_info (usage_limit_reached): what the refused request's own response said about the limit, in the shape rate_limit_event carries. It is read from the same values as the message text, so its status, limit and reset are the text's: status is rejected and isUsingOverage false, rateLimitType names the limit, resetsAt is when it resets, and overageStatus, overageResetsAt, overageDisabledReason and limitScope say whose spend cap it is (the person's own cap arrives as org_level_disabled_until, as on rate_limit_event); no other member is sent. It is that refusal's record and is never updated, so compare resetsAt with the clock before calling the limit current."),
  api_error_code: o().optional().describe("@internal The server's error.details.error_code for this API error, copied through when it is an identifier (^[a-z][a-z0-9_]{0,63}$) and dropped otherwise. Carries server gate codes this build has no api_error value for, so a host can key on a new gate without a Claude Code release. Absent when the response carried no code."),
  api_error_origin: U([ "first_party" ]).optional().catch(void 0).describe("@internal first_party when this API error was built from a response Anthropic's own API sent: the request used the firstParty provider, went to https://api.anthropic.com on the default port and was answered from there, not redirected, over TLS verified with no added CA (NODE_EXTRA_CA_CERTS), no verification override and no unix-socket tunnel. Absent in every other case: an ANTHROPIC_BASE_URL or WIF base_url override, a gateway, a third-party provider, a connection error, an error Claude Code raised itself, and any frame replayed from the transcript, SDK input or a remote session. Treat absence as unknown origin. It says which endpoint answered, not that the message text is the server's verbatim, and a CA installed in the system trust store can still intercept. An invalid-request message (400 or 422) can quote request values, so it is stamped only when it is one of the known Anthropic wordings, and no message is stamped that quotes the request's model id; render stamped text as plain text. New values may be added; treat an unknown value as absent."),
  error_details: o().optional().describe("@internal Raw API error message \u2014 preserves details (e.g. prompt-too-long token counts) that user-facing content discards."),
  advisor_model: o().optional().describe("@internal Advisor model that produced this message, when applicable."),
  attribution_agent: o().optional().describe("@internal Attribution stamp: agent name parsed from querySource (see messageAttribution.ts). May overlap with subagent_type."),
  attribution_skill: o().optional().describe("@internal Skill that produced this message."),
  attribution_plugin: o().optional().describe("@internal Plugin that produced this message."),
  attribution_mcp_server: o().optional().describe("@internal MCP server that produced this message."),
  attribution_mcp_tool: o().optional().describe("@internal MCP tool that produced this message.")
}).describe("An assistant message. While a response streams the CLI emits one assistant message per completed content block, so several consecutive assistant messages can share message.id and each carries just that block in message.content; on those, message.stop_reason is null and message.usage is not final \u2014 the turn's stop reason and total usage arrive on the result message. parent_tool_use_id is non-null when the message was produced inside a subagent started by that tool_use."));

var V0 = p(() => u({
  type: A("rate_limit_event"),
  rate_limit_info: Rxr(),
  uuid: _(),
  session_id: o()
}).describe("Rate limit event emitted when rate limit info changes.")), ay = p(() => u({
  tool_name: o(),
  tool_use_id: o(),
  tool_input: ue(o(), oe())
})), j0 = p(() => u({
  id: o(),
  name: o(),
  input: ue(o(), oe())
})), iy = p(() => U(kA).describe("Why the query loop terminated. Unset when the loop was bypassed (local slash command).")), ly = p(() => u({
  spawned: v().int().describe("Subagents actually started (one tengu_agent_tool_selected each); a refused or failed launch is not counted."),
  requested: u({
    background: v().int(),
    foreground: v().int(),
    unset: v().int()
  }).describe("Spawns by the run_in_background value the model passed; all count as unset while the parameter is not offered (background tasks disabled, or the fork gate on)."),
  started_in_background: v().int().describe("Spawns that started in the background after defaults and session settings (tengu_agent_tool_selected.is_async); the rest blocked the spawning tool call."),
  by_type: ue(o(), v().int()).describe("Spawns by agent type."),
  max_depth: v().int().describe("Deepest spawn: 1 = started by the main thread, 2 = by a depth-1 subagent."),
  spawned_by_subagents: v().int().describe("Spawns made from inside another subagent (depth > 1)."),
  completed: v().int(),
  failed: v().int(),
  killed: u({
    parent: v().int(),
    user: v().int(),
    system: v().int()
  }).describe("Stopped before finishing: parent = by another agent through TaskStop; system = by Claude Code itself (the --max-budget-usd halt, the sweep of background subagents when an SDK or IDE client interrupts, or -p giving up on a background subagent still running at its wait ceiling); user = any other stop, including a foreground subagent cancelled just as it finished (counted here, not as completed)."),
  refused: u({
    depth_limit: v().int(),
    concurrency_limit: v().int(),
    budget: v().int()
  }).describe("Agent tool calls turned down because one of these limits was reached (other denials, such as an unknown agent type, are not counted). depth_limit stays near zero in practice: a subagent at the nesting limit is normally not offered the tool at all.")
}).describe("@internal Subagents started through the Agent tool in this session, as running totals (forked skills, workflows, teammates and other internal agents are not counted; two sessions in one process keep separate counts). Cumulative like modelUsage: read the latest result rather than summing across results; a resumed session starts fresh and a mid-session /clear zeroes it, though a background subagent that outlives the /clear still records its outcome, so completed, failed and killed can then exceed spawned. A result that was held back while background subagents finished carries the counts as of when it is written to the stream, as do its total_cost_usd, duration_api_ms and modelUsage (and usage where that is a running total; a per-turn main-loop usage keeps its turn-end value). Omitted by hosts without a local Agent tool and on crash/startup-error results; all zeros until the Agent tool starts or refuses a subagent. A remote (isolation: remote) launch counts as spawned but never reports an outcome. Per-subagent detail is on the task_started / task_notification events.")), dy = "Per-model totals for every model call made through the query pipeline during this query() call \u2014 main loop, Task subagents, sidechains, and internal calls such as compaction and Workflow agents. Cumulative across turns in streaming-input sessions: each result carries the running total so far, so read the latest result rather than summing across results. Internal helper calls outside the query pipeline (e.g. the permission classifier, token-count probes) are excluded; crash/startup-error results may carry zeroed usage, a resumed or forked session continues from the totals its transcript saved, when it has them (so the first result already carries the earlier turns), and a mid-session /clear resets the running total. The correct field for token/cost accounting; treat it as an estimate, not a billing statement.", cy = "@internal Running totals of the subagents the Agent tool started this session; see SDKSubagentStats.", hy = "@internal How many times a safety system has stopped one of this session's model calls made through the query pipeline (main loop, subagents, forked skills, compaction and other internal calls), as a running total since the session started in this process; two sessions in one process keep separate counts. Counted: a response that ends on stop_reason refusal, whether Claude Code then shows it, retries it or re-sends it to another model; a refusal that the API itself answered on a fallback model; output that the API's content filter stopped for good (the stop ends the call); and, where the build can recognise it (public builds cannot), a server-side safety monitor's block (api_error safety_monitor_blocked). It counts these events, not calls: one call can add a refusal answered on a fallback model and then that model's own refusal. 0 means that none of these was seen; a kind of stop that this version does not know is not counted. Never sum across results. It is never saved, so a resumed session starts at 0 again, and a mid-session /clear zeroes it: over a stored log that spans a restart, a resume or a /clear, any result above 0 means a stop happened, and a later 0 does not cancel it. Present, 0 included, on every result that carries a turn's measured totals. Absent on the zeroed results that stand in for a crashed, cut or never-started turn, on Remote Control's results and from older producers, where it says nothing: absent is not 0. A call still running when a result is written (a background subagent's) shows on the next result; a result held back while background subagents finished carries the count as of when it is written to the stream, never less than it was built with. Not counted inside the pipeline: a stop of the API's content filter that Claude Code answers by streaming the request again (so 0 does not rule one out), an organization's data-loss-prevention denial (api_error dlp_request_denied), a block by a cloud provider's own guardrail, an advisor's refusal inside a reply that ends normally. Not counted at all: model calls outside the query pipeline (e.g. the permission classifier, token-count probes) and work in other processes.", uy = "User-initiated sends still waiting in the command queue when this result was produced. Greater than 0 means at least one more user turn (and result) follows without further input, barring cancellation; 0 means none is pending, or the session is ending (end_session or a shutdown latched mid-turn discards the backlog). Queued sends may coalesce into fewer turns, so this counts pending sends, not remaining results. System-generated queue entries are not counted. Absent on fatal startup results and on surfaces without a command queue.", py = "Cumulative estimated cost in USD for this query() call, covering the same query-pipeline calls as modelUsage and sharing its lifecycle: cumulative across turns in streaming-input sessions \u2014 each result carries the running total so far, so read the latest result rather than summing across results. Crash/startup-error results may carry zeroed values, a resumed or forked session continues from the total its transcript saved, when it has one (so the first result already carries the earlier turns; maxBudgetUsd counts only the spend since this query() call started or last /clear), and a mid-session /clear resets the running total. An estimate, not a billing statement.", _y = "Delivery sequence of this result within the run: how many results the run numbered before this one, starting at 0, in the order the process writes them. A result held back while background work finishes is numbered when it is finally written, not when its text was produced; a result whose write fails still consumes its number, so a gap in a stream-json sequence means a result was lost. Distinct from num_turns, which counts model round-trips within one turn. Numbered by the process that hosts the run (`claude -p`, stream-json): a local client relaying a cloud session passes the cloud session's numbering through and its own locally built error results carry none; the in-process engine surface does not number yet. Absent from older producers.", my = "@internal The host of a multi-tenant worker shut the worker down while this turn ran. The shutdown was the first thing to abort the turn, and the turn is left for the session's next worker. The other frames of the ending, and terminal_reason, are the same as for a Stop from a client. Read this member to tell the two apart. A success result can have it, when the shutdown falls in a Stop hook. A result without it can also be the result of a shutdown. A shutdown that makes the turn write no interrupt marker does not set it, and older producers never set it.", q0 = p(() => u({
  phase: U([ "setup", "run" ]).describe("@internal 'setup' when the session process never started, 'run' when it exited."),
  exit_code: v().int().nullable().optional(),
  signal: o().nullable().optional()
}).describe("@internal How a self-hosted runner's session process ended, on the result the runner synthesizes for it.")), G0 = p(() => U([ "org_pin_api_key_conflict", "provider_not_allowed", "org_verify_failed", "org_pin_mismatch", "managed_settings_invalid", "remote_settings_required_unavailable", "gateway_signin_required", "gateway_access_denied", "proxy_invalid", "temp_dir_unusable", "cwd_unavailable", "shell_tool_missing", "session_held_by_background", "worktree_resume_refused", "worktree_unverified", "cli_version_too_old", "bypass_root", "org_config_required_unavailable", "org_config_refused" ]).describe("Why Claude Code refused to start, so a host can offer the fix instead of a retry. org_pin_api_key_conflict: managed settings pin a first-party or Cloud gateway sign-in, and an Anthropic API key or auth token is configured instead. provider_not_allowed: managed settings list the API providers this machine may use (allowedProviders), and the session is set up for one that is not listed. org_verify_failed: the sign-in's organization could not be verified against the pin (network, or a revoked token). org_pin_mismatch: the sign-in belongs to an organization the pin does not allow. managed_settings_invalid: managed policy settings could not be read, the pin names no organization, or managed model settings (deniedModels, or an availableModels list matched exactly) block the default model and leave no allowed model to use instead. remote_settings_required_unavailable: managed settings the organization requires could not be loaded. gateway_signin_required: the Cloud gateway ended this sign-in. gateway_access_denied: the Cloud gateway refused managed settings for this account. proxy_invalid: a proxy setting is not a complete URL. temp_dir_unusable: the per-user temp directory is unsafe or could not be created. cwd_unavailable: the working directory was deleted, moved or cannot be read. shell_tool_missing: Windows has no shell tool: Git Bash is missing, and PowerShell is missing or turned off by CLAUDE_CODE_USE_POWERSHELL_TOOL. session_held_by_background: the conversation to resume or continue is running as a background session. worktree_resume_refused: the resume was refused because the session's worktree failed its safety checks or the resume was launched from inside it; errors says whether a re-run continues without the worktree. worktree_unverified: the session's worktree could not be verified right now; retrying may succeed. cli_version_too_old: this Claude Code version is below the minimum Anthropic requires. bypass_root: bypass permissions mode was requested while running as root. org_config_required_unavailable: the organization requires its policy limits and managed settings before a session starts, and they could not be loaded (network, proxy, or an Anthropic error); retrying may succeed. org_config_refused: the organization requires its policy limits and managed settings, and Anthropic refused them for this sign-in (expired or revoked session, or the organization does not allow Claude Code for this account); signing in again or an admin's change is the fix, not a retry.")), B0 = p(() => u({
  type: A("result"),
  subtype: A("success"),
  duration_ms: v().int(),
  duration_api_ms: v().int(),
  ttft_ms: v().int().optional(),
  ttft_stream_ms: v().int().optional(),
  time_to_request_ms: v().int().optional(),
  time_to_request_phases_ms: ue(o(), v().int()).optional().describe("@internal How time_to_request_ms was spent, in integer ms per phase, summing to it exactly: system_prompt, resume_other (settling, before the turn's own prompt, tool calls that an earlier run left open or the session's client handed over, see turn_start_resume_kind; excluding four parts of it that have keys of their own: resume_store_confirm, writing a handed-over turn's lines to the transcript and waiting for the store to confirm them; resume_staged_files_wait, that turn's wait for files its client is still staging; resume_connector_wait, an orphaned permission's wait for its tool's MCP server to connect; turn_start_tool_run, the calls' permission checks, a person's time at a prompt included, and their runs, which are work the user asked for, not preparation; older producers report these five as one key, turn_start_resume), process_user_input (excluding four parts of it that have keys of their own: input_images, input_attachments, input_command, input_hooks), transcript_persist, tool_pool_refresh, system_prompt_rebuild (a second assembly of the system prompt, run when the tool pool re-read after the message was handled differs from the turn-start pool; older producers report it inside system_prompt), init_message, engine_pickup, memory_recall_wait, memory_context_wait, message_prep, model_config_wait, autocompact, query_setup, auto_mode_context_wait (the wait at dispatch for the auto-mode context, on a request that started one), model_gates, tool_schema_build, message_normalization, client_creation, request_build, then at most one of redrive_reactive_compact, redrive_fallback_model, redrive_non_streaming and redrive_other (present when the first model request of the turn never began streaming, or was answered without streaming, so time_to_request_ms runs to the send time of a later request: the time between the two sends, named for the reason; after a reply without streaming it includes that reply and any tool calls), and other (the remainder no phase covers). A phase that did not run on the turn is absent; other is always present. Present where time_to_request_ms is, on CLAUDE_CODE_REMOTE sessions and hosts that set CLAUDE_CODE_EMIT_STARTUP_TIMING; absent elsewhere and from older producers. See src/utils/turnRequestTiming.ts."),
  turn_start_resume_kind: U(zA).optional().describe("@internal What the turn was given to settle before its own prompt (the resume_ phases and turn_start_tool_run in time_to_request_phases_ms say how long that took): orphaned_permission (a permission answer whose pending request was lost, as when a worker restarts, so the tool call is settled with that answer), turn_handoff (a turn in progress that the session's client handed over), deferred_tool_use (a call a PreToolUse hook deferred), or none (resume_other is still reported, at about 0). A turn given more than one reports the first in that order. Present where time_to_request_phases_ms is."),
  handoff_intake_phases_ms: ue(o(), v().int()).optional().describe("@internal On a turn that the session's client handed over (turn_start_resume_kind is turn_handoff), how long its turn_handoff control request waited from its arrival on the session server's SSE stream (--sdk-url) until the input loop read it, in integer ms on the monotonic clock, split into parts that frame_intake_phases_ms explains: startup_wait, control_requests_ahead and user_frames_ahead, each absent when 0, and before_read (the rest), always present. The values sum to the wait. Present only on results that carry turn_start_resume_kind. Absent on a claude-code-server tenant, when the host had handled too much since the arrival to say what the request waited behind, and from older producers."),
  process_turn_index: v().int().optional().describe("@internal Number of earlier turns of this CLI process that sent a main-conversation model request: 0 is the process's first turn to reach the model, not the conversation's first. Turns stopped or failed after sending count but carry no value, so values can skip. Where one process hosts several sessions, each has its own count, from 0 each time the process starts hosting it. Present where time_to_request_phases_ms is."),
  time_to_request_cpu_ms: v().int().optional().describe("@internal CPU time (user plus system) the CLI process used from turn start until it sent the turn's first main-conversation model request. Normally that is the time_to_request_ms window; if that request was abandoned for a new call (not an ordinary retry), time_to_request_ms runs on to the new one and this does not. Near time_to_request_ms, the window was mostly computing; near 0, mostly waiting. It adds up all threads, so it can exceed the window, and leaves out child processes, such as a command a tool runs. Unrelated work counts, such as the request that names the session (usually in its first turn). On a virtual machine, time the host spends restoring memory can count as CPU time, so a high value alone does not mean JavaScript work. Present where time_to_request_phases_ms is, unless the runtime reports no resource usage or the process hosts other sessions too."),
  time_to_request_loop_lag_ms: v().int().optional().describe("@internal The longest single stall of the session's thread between turn start and the turn's first main-conversation model request, measured as how late a 50 ms timer fired: the real stall can be up to 50 ms longer, so one under 50 ms can read 0, and a few ms is timer noise. JavaScript ran without a break, or the thread waited inside a blocking call (a synchronous file read or child process), or the whole process was paused; time_to_request_cpu_ms below this value means one of the last two, though on a virtual machine a pause while the host restores memory can look like CPU time. Any work on the thread counts: the request that names the session (usually in its first turn), or another session's where several share the thread. Only the first two minutes are measured. Present where time_to_request_phases_ms is."),
  time_to_request_major_faults: v().int().optional().describe("@internal Major page faults (waits for memory to be read from disk) by the process in the time_to_request_cpu_ms window; Windows also counts faults needing no disk read. On a virtual machine, memory the host restores is not counted: the machine never sees those faults. Present where time_to_request_cpu_ms is."),
  process_rss_mib_turn_start: v().int().optional().describe("@internal Resident memory of the CLI process at turn start, in whole MiB, as its kernel counts it (VmRSS in /proc/self/status). From the process's second turn on, it shows what stayed resident through the idle time since the turn before. Child processes, such as a command a tool runs or an MCP server, are left out. On a virtual machine it is the guest kernel's count, not what the host holds for the machine. Sent only by a worker that Anthropic hosts (never by a self-hosted runner, a BYOC environment, a session that Claude Desktop starts or a local run), and only with telemetry on. On such a worker it is present, always with process_rss_mib_result, where process_turn_index is, on Linux (not WSL), unless /proc/self/status cannot be read or lacks VmRSS, or the process hosts other sessions too."),
  process_anon_mib_turn_start: v().int().optional().describe("@internal The anonymous part of process_rss_mib_turn_start (RssAnon): memory with no file behind it, such as heaps, stacks and code the JavaScript engine compiles while running. Mapped files, such as the executable, are left out. Present where process_rss_mib_turn_start is, if the kernel gives it."),
  process_rss_mib_result: v().int().optional().describe("@internal As process_rss_mib_turn_start, read again after the turn, just before this result is built: the level the turn leaves behind."),
  process_anon_mib_result: v().int().optional().describe("@internal The anonymous part of process_rss_mib_result; see process_anon_mib_turn_start. Present where process_rss_mib_result is, if the kernel gives it."),
  process_peak_rss_mib: v().int().optional().describe("@internal The most memory the process has had resident from its start until this result (VmHWM), in whole MiB. It is not the peak of this turn alone: a later turn repeats an earlier peak unless it went higher. Present where process_rss_mib_result is, if the kernel gives it."),
  process_cpu_ms_between_turns: v().int().optional().describe("@internal CPU time (user plus system, all threads, without child processes) the CLI process used from the end of its previous turn to this turn's start: mostly what it costs while no turn runs. A turn ends after its last frame and its turn-end hooks. Work it left running in the background counts here, as do this turn's steps ahead of turn start, such as re-reading the tool list. To get CPU time per second, add these up over many results and divide by the sum of their process_wall_ms_between_turns, which always comes with it. Present where process_cpu_ms_turn is, from the process's second turn of any kind on (process_turn_index can still be 0), unless the previous turn was abandoned midway and so never ended."),
  process_wall_ms_between_turns: v().int().optional().describe("@internal The time that passed in the process_cpu_ms_between_turns stretch, by a clock that never runs backward. Time while the process is stopped counts; time while its virtual machine is paused may not."),
  process_cpu_ms_turn: v().int().optional().describe("@internal CPU time, counted as in process_cpu_ms_between_turns, from this turn's start until just before this result is built, so what the turn does after that is in neither stretch. The stretch includes the waits for the model and for tools. It always comes with process_wall_ms_turn. Sent only by the workers named under process_rss_mib_turn_start. On them it is present where process_turn_index is, unless the runtime reports no resource usage or the process hosts other sessions too."),
  process_wall_ms_turn: v().int().optional().describe("@internal The time that passed in the process_cpu_ms_turn stretch, by the same clock as process_wall_ms_between_turns."),
  input_attachments_detail: u({
    slowest_producer: o().optional(),
    slowest_producer_ms: v().int().optional(),
    cpu_ms: v().int().optional(),
    major_faults: v().int().optional(),
    changed_files_reread: v().int().optional()
  }).optional().describe("@internal What the input_attachments phase of time_to_request_phases_ms did on the turn, to tell a wait inside one attachment producer from a process that was busy. The producers are the calls of maybe() in getAttachments; their labels are a closed list, and a producer's time includes the computing of the others that run beside it. slowest_producer is the label of the one that took longest from its start to its result, among those that began within the phase, and slowest_producer_ms is that time; a background agent's pass that begins within the phase is timed with the turn's own (a new process's first turn has none), and its re-reads are not counted. Where slowest_producer_ms is well above cpu_ms that producer most likely waited (on a file, the network or a child process); a time_to_request_loop_lag_ms near slowest_producer_ms says instead that the thread itself stood still about that long (a blocking call, or a paused process). Where it is not well above cpu_ms the label tells little. cpu_ms and major_faults are time_to_request_cpu_ms's and time_to_request_major_faults's counters over this phase alone and are read the same way: cpu_ms far below the phase's time means the process was not computing; at or above it means computing, without saying whose. Where cpu_ms is absent, the phase's own time is what there is to compare slowest_producer_ms with. changed_files_reread is how many files the changed_files producer set out to read again in full because their modification time was later than the one recorded when the conversation last wrote or edited them (0 when it read none again, whether or not any file was a candidate; absent when the conversation's record of files was empty or the producer did not run). Present on turns where the input_attachments phase started, unless nothing of it is known. cpu_ms and major_faults are absent wherever time_to_request_cpu_ms is absent, and when the turn's first model request went out before the phase ended."),
  resume_store_confirm_detail: u({
    write_ms: v().int(),
    ahead_ms: v().int(),
    post_ms: v().int(),
    other_ms: v().int(),
    posts: v().int(),
    failed_posts: v().int(),
    rows_ahead: v().int(),
    rows: v().int()
  }).optional().describe("@internal How the resume_store_confirm phase of time_to_request_phases_ms was spent. Present where that phase is, in a session whose transcript goes to a hosted store: on the result of a handed-off turn whose lines were confirmed and that went on to a model request. A wait that ends its turn (the lines not stored, or the turn stopped meanwhile) is therefore not in the measure. The four _ms values sum to that phase exactly. write_ms: the transcript write, until the carried lines are in the queue of the lane that uploads transcript rows (POST /worker/internal-events, one POST out at a time); a POST that is out during the write is counted in posts and rows, but that part of its time is in write_ms only. The other three split the wait for that lane to empty. ahead_ms: a POST was out that held only rows queued before the hand-off's write began, one already out at that moment included. post_ms: any other POST was out, timed by the client from before the body is encoded to the response, each retry included. other_ms: no POST was out (a backoff between retries, picking and sizing the next batch, a busy event loop), plus rounding, any POST still out when the wait was cut short, and the time of POSTs after the 64th. posts: POST attempts that ended between the start of the write and the end of the wait; failed_posts: those that did not go through. rows_ahead: rows the lane had accepted and the store had not yet confirmed when the write began, queued or in a POST already out; rows written earlier but kept back for a compaction's summary count from when they are queued. rows: rows queued since then that a POST delivered, the carried lines among them."),
  user_message_uuid: o().optional(),
  user_message_uuids: T(o()).optional(),
  resume_reason: o().optional(),
  local_command: o().optional(),
  request_sent_wall_ms: v().optional(),
  first_request_input_tokens: v().int().optional().describe("@internal Input tokens of the model call whose send time is request_sent_wall_ms: input_tokens + cache_read_input_tokens + cache_creation_input_tokens from that call's message_start. Lets a consumer group turn latency by prompt size. Present only with request_sent_wall_ms, and only when the sum is above zero; absent from older producers."),
  user_message_server_received_wall_ms: v().optional().describe("@internal The server_received_wall_ms of the user message that user_message_uuid names, copied unchanged, so the session server can measure from its own receipt to request_sent_wall_ms (two machines' clocks) without keeping the receipt time. Present only with request_sent_wall_ms, and only when that message carried a positive finite number there; absent from older producers."),
  first_content_frame_ms: v().int().optional(),
  first_stream_post_ms: v().int().optional(),
  first_stream_post_ack_ms: v().int().optional(),
  first_stream_post_queue_wait_ms: v().int().optional(),
  first_stream_post_queued_behind: U(Gn).optional(),
  first_stream_post_wall_ms: v().optional(),
  frame_received_wall_ms: v().optional().describe("@internal Date.now() (epoch ms) when the triggering send's frame arrived on a session reading its input from the session server's SSE stream (--sdk-url), before the input loop read it. With frame_enqueued_wall_ms and turn_started_wall_ms it splits the stretch between the server's persist and request_sent_wall_ms into transit, the input loop's handling of the frame, its wait on the command queue, and the turn's own work. Present only together with request_sent_wall_ms, and only when the transport recorded the receipt; absent on a local stdin host and from older producers."),
  frame_enqueued_wall_ms: v().optional().describe("@internal Date.now() (epoch ms) when the input loop put the triggering send's frame on the command queue. Present exactly when frame_received_wall_ms is."),
  turn_started_wall_ms: v().optional().describe("@internal Date.now() (epoch ms) when the turn's clock started: the anchor duration_ms, ttft_ms, ttft_stream_ms, time_to_request_ms, first_content_frame_ms, first_stream_post_ms and first_stream_post_ack_ms are measured from. Present exactly when frame_received_wall_ms is."),
  frame_intake_phases_ms: ue(o(), v().int()).optional().describe("@internal How the triggering send's frame spent the time from frame_received_wall_ms to frame_enqueued_wall_ms, in integer ms per step: before_read (until the input loop read the frame; a frame received more than once counts from the earliest receipt no earlier copy already took), and, carved out of before_read where the loop could tell them apart, startup_wait (the part before the input loop existed, the worker still starting), control_requests_ahead (the part the loop spent handling control requests before it read the frame) and user_frames_ahead (the part it spent on earlier user frames, each from its read until the loop moved on, at its delivery or its parking), so that before_read keeps only the rest (frames handled without being noted, and everything when no split could be made); then dedup, flag_settle, receive_hook, attachments, admission_wait (held behind a pending model switch, a pending MCP server-set change, start-up work the worker still owed its first turn, or an earlier held frame), admit_check (the host's decision whether to queue the frame, when it had to be awaited), and other (the rest). Steps that did not run are absent; before_read and other are always present. The values sum to frame_enqueued_wall_ms minus frame_received_wall_ms, unless other or before_read came out negative and was set to 0. Present exactly when frame_received_wall_ms is, except from older producers."),
  turn_start_phases_ms: ue(o(), v().int()).optional().describe("@internal How the time from frame_enqueued_wall_ms to turn_started_wall_ms was spent, in integer ms per step of the host's work through its message queue. Each step is where the host was at the time, which for part of the stretch may be an earlier message's turn. The steps: idle (the host was not working through its queue), earlier_turn (an earlier turn still running, including its work after its result), after_turn (the host's work after an earlier turn ended and before it took the next message: recording the outcome, writing the transcript and acknowledgements, and releasing the queue; also its handling of a crash), background_wait (waiting on background tasks before looking at the queue again), entry_joins (other waits when the host starts on its queue, before it may take a message), sdk_mcp_update (the claude -p host updating its SDK MCP servers when it starts on its queue), loop_top (reloading plugins that changed, at the start of each pass over the queue), session_start_wait (waiting for the plugins' first session.start hook, and taking the message off the queue), first_command (the claude -p host's waits for its plugin registry and a Projects mount before the first message it takes each time it starts on its queue), mcp_prewait (waiting for MCP servers still connecting, before that same first message), repo_wait (a claude-code-server session waiting for its repository before a turn), turn_joins (before every turn: starting the memory re-check, and waiting for a Projects mount and for SDK or newly added MCP servers), tool_pool (building the turn's tools), commit (marking the message taken and setting up its turn), after_arm (waiting for a cleared permission prompt's record to be written, and the host's other work once the turn is set up), turn_gate (work the host requires before every turn), turn_open (the host's turn-start hook and other turn setup), engine_setup (getting the engine for the turn; on the claude -p host's first turn, building its session), tool_reread (re-reading tools, MCP clients and settings for the turn), cwd (switching to the turn's working directory), and other (the rest: rounding, and the wall clock running ahead of the monotonic one). Values are rounded so that they add up: each is within 1 ms of its step's time, a step that comes out as 0 is absent, and other is always present. The values sum to turn_started_wall_ms minus frame_enqueued_wall_ms, except that they can exceed it, usually by 1 ms from rounding and by more if the wall clock stepped back. Present only when frame_received_wall_ms is, and absent from older producers."),
  turn_start_control_requests_ms: v().int().optional().describe("@internal Of the time from frame_enqueued_wall_ms to turn_started_wall_ms, the integer ms in which the claude -p host's message reader was held by control requests (such as mcp_set_servers or set_permission_mode) instead of reading the next message; for a request handled in the background, only its start counts. The host can keep working toward the turn meanwhile, so this overlaps turn_start_phases_ms and is not part of its sum. Absent when 0. A claude-code-server tenant does not time control requests, so its results never have this field."),
  first_text_post_ms: v().int().optional(),
  first_text_post_queue_wait_ms: v().int().optional(),
  first_text_post_queued_behind: U(Gn).optional(),
  first_text_post_wall_ms: v().optional(),
  time_to_request_from_spawn_ms: v().int().optional(),
  warm_spare_claimed: M().optional(),
  flag_fetch_kick: o().optional().describe("@internal One of FLAG_FETCH_KICKS, a string here so that list can change: whether this process started its start-up feature-flag fetch before the wait for it, or why not: the same value as system:init's startup_timing.flag_fetch_kick. started_in_init_* and started_after_init_*: it did, inside init() or right after. not_asked_warm: the flag cache was warm and nothing asked for an early start. settings_pending_*: settings that could change the fetch were still to be applied. launch_excluded: not a launch that starts it early. not_eligible: interactive, or no wait is budgeted. An _empty or _warm ending is the flag cache at that moment. Present only where time_to_request_from_spawn_ms is, and only when start-up judged it."),
  time_origin_ms: v().optional(),
  is_error: M(),
  api_error_status: v().int().nullable().optional(),
  api_error_code: o().optional().describe("@internal The api_error_code of the API error that ended the turn (see SDKAssistantMessage.api_error_code): the server's error.details.error_code when it is an identifier. Absent when the turn did not end on an API error or the response carried no code."),
  api_error_origin: U([ "first_party" ]).optional().catch(void 0).describe("@internal The api_error_origin of the API error that ended the turn (see SDKAssistantMessage.api_error_origin): first_party when Anthropic's own API sent the response. Absent when the turn did not end on an API error or the origin is anything else; treat an unknown value as absent."),
  api_error: nr().shape.api_error.describe("@internal The api_error of the API error that ended the turn (see SDKAssistantMessage.api_error). Absent when the turn did not end on an API error or the error has no typed kind; treat an unknown value as absent."),
  num_turns: v().int(),
  result: o(),
  stop_reason: o().nullable(),
  total_cost_usd: v().describe(py),
  usage: sy(),
  modelUsage: ue(o(), Dt()).describe(dy),
  subagent_stats: ly().optional().describe(cy),
  safety_stops: v().int().nonnegative().optional().describe(hy),
  permission_denials: T(ay()),
  queued_turn_count: v().int().optional().describe(uy),
  structured_output: oe().optional(),
  deferred_tool_use: j0().optional(),
  terminal_reason: iy().optional(),
  interrupted_by_shutdown: A(!0).optional().describe(my),
  result_index: v().int().nonnegative().optional().describe(_y),
  fast_mode_state: jt().optional(),
  fast_mode_disabled_reason: Gt().optional(),
  origin: so().optional(),
  uuid: _(),
  session_id: o()
})), H0 = p(() => u({
  type: A("result"),
  subtype: U([ "error_during_execution", "error_max_turns", "error_max_budget_usd", "error_max_structured_output_retries" ]),
  duration_ms: v().int(),
  duration_api_ms: v().int(),
  is_error: M(),
  num_turns: v().int(),
  stop_reason: o().nullable(),
  total_cost_usd: v().describe(py),
  usage: sy(),
  modelUsage: ue(o(), Dt()).describe(dy),
  subagent_stats: ly().optional().describe(cy),
  safety_stops: v().int().nonnegative().optional().describe(hy),
  permission_denials: T(ay()),
  queued_turn_count: v().int().optional().describe(uy),
  errors: T(o()),
  runner_exit: q0().optional().describe("@internal Set by the self-hosted runner on the result it synthesizes when the session process fails to start or exits abnormally (src/self-hosted-runner/sessionHandler.ts buildFailureEvents)."),
  startup_failure_reason: G0().optional().describe("Set on the zeroed error_during_execution result a stream-json run writes before exiting on a known startup failure; errors carries the same text as stderr. Failures that used to end with stderr alone write that result only when the host sets CLAUDE_CODE_STARTUP_FAILURE_RESULTS. Absent on every other result, on startup failures without a known cause, and from older producers."),
  user_message_uuid: o().optional().describe("Client uuid of the user message that triggered this turn (submitMessage options.uuid), echoed back so a consumer can link this error result to the send it answers \u2014 the same join key the success variant echoes, carried alone (error turns have no request_sent_wall_ms to report). A delivery-failure result from the remote-session client echoes the failed send's queue key, which is client-minted when the host sent no uuid of its own. A synthetic/scheduled (meta) turn's own uuid is echoed only when the host vouches it is the client event's own (delivered content such as a Slack owner ping or a Slack-bot observation); a meta turn that folded queued user messages in mid-turn, vouched or not, echoes the LAST of them. Absent on turns that neither had a client uuid nor folded a user message in, on session-scoped failures with no single triggering send (a crashed worker's zeroed result), and from older producers."),
  user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn consumed, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any queued user message folded into the running turn between tool rounds, once taken off the queue \u2014 so a consumer that sent any of them can bind this result to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries; can be longer than the list on the turn's first reply frame. Present when a headless turn that ran echoes user_message_uuid; absent on delivery-failure and zeroed results and from older producers (fall back to user_message_uuid)."),
  resume_reason: o().optional().describe("Why this turn continued one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Present on such a headless turn's result, success or error, with or without an echo (a turn whose opening user prompt could not be vouched for still carries the reason); absent on every other turn (also one that goes on from the answer to any other permission prompt), on the Remote Control bridge's per-turn synthetic results, and from older producers."),
  terminal_reason: iy().optional(),
  interrupted_by_shutdown: A(!0).optional().describe(my),
  result_index: v().int().nonnegative().optional().describe(_y),
  fast_mode_state: jt().optional(),
  fast_mode_disabled_reason: Gt().optional(),
  origin: so().optional(),
  uuid: _(),
  session_id: o()
})), K0 = p(() => $e([ B0(), H0() ]).describe(`The outcome of a turn. The CLI emits exactly one result message per turn, after that turn's assistant, user and stream_event messages; treat it as the turn-complete signal (informational system messages such as task notifications, session state changes or prompt suggestions may still follow it). subtype "success" carries the final assistant text in result \u2014 or, with is_error true, the error text when the turn ended on an API error; the error subtypes say why the turn stopped early. In single-prompt (non-streaming-input) mode the process exits after the turn.`)), or = p(() => u({
  file: o().optional().describe("Path to the settings file that failed to parse or validate."),
  path: o().describe("Dot-notation path to the field with the error, or empty string for whole-file errors."),
  message: o().describe("Human-readable error message.")
}).describe("A settings file parse or validation error. When a settings.json file fails to parse (invalid JSON, JSON comments, schema mismatch), the file is skipped and any rules it contained \u2014 including permission allow/deny lists \u2014 are not applied.")), ro = "The plugin's version as declared in its plugin.json manifest, emitted verbatim (plugin-author-controlled \u2014 validate before trusting). Omitted when the manifest declares no version.";

function gy() {
  return u({
    id: o(),
    view_url: o(),
    device: Kr("status", [ u({
      status: A("bound"),
      device_id: o(),
      display_name: o().optional()
    }), u({
      status: A("unbound"),
      reason: o(),
      message: o()
    }) ]),
    directory_sync: u({
      state: U([ "off", "seeding", "armed", "stopped" ]),
      reason: o().optional(),
      message: o().optional(),
      first_upload: o().optional(),
      synced_files: v().int().nonnegative().optional(),
      other_window: M().optional(),
      muted: M().optional(),
      started_from_upload: M().optional(),
      direction: U([ "two_way", "upload_only" ]).optional().catch(void 0),
      file_mode: U([ "container_sync", "device_tools", "unspecified" ]),
      file_mode_source: U([ "stored" ])
    }),
    client_version: A(1),
    not_applied: T(u({
      name: o(),
      kind: U([ "lost", "kept", "preference" ])
    })).optional(),
    host: u({
      handle: o(),
      working_dir: o(),
      platform: o(),
      cli_version: o().optional()
    }).optional(),
    serving: u({
      state: U([ "on", "off", "pending", "revoked" ]).catch("off"),
      reason: o().optional().catch(void 0),
      policy: U([ "parity", "interim" ]).catch("interim"),
      channel: U([ "session", "bridge_only" ]).catch("bridge_only")
    }).optional(),
    connection: U([ "connecting", "live", "reconnecting" ]).optional().catch(void 0),
    calls: u({
      live: T(u({
        call_id: o(),
        tool: o(),
        state: U([ "running", "asked" ]).catch("running"),
        since: v(),
        ask_id: o().optional(),
        lapses_at: v().optional()
      })),
      recent: T(u({
        call_id: o(),
        tool: o(),
        ended: U([ "completed", "denied", "withdrawn", "refused", "failed" ]).catch("failed"),
        code: o().optional(),
        at: v()
      }))
    }).optional(),
    notices: T(u({
      key: o(),
      text: o()
    })).optional().catch(void 0)
  });
}

var F0 = p(() => u({
  type: A("system"),
  subtype: A("init"),
  agents: T(o()).optional(),
  apiKeySource: nK(),
  startup_timing: ue(o(), oe()).optional().describe("@internal Cold-start telemetry for hosted (CCR) sessions: named startup phases and resume-hydration counters (StartupTiming in src/utils/startupTiming.ts). Absent elsewhere."),
  betas: T(o()).optional(),
  claude_code_version: o(),
  cwd: o(),
  tools: T(o()),
  mcp_servers: T(u({
    name: o(),
    status: o(),
    source: o().optional().describe("Where the server definition came from \u2014 same values as McpServerStatus.source (sdk | plugin | a config scope). Absent on CLIs that predate the field.")
  })),
  model: o(),
  permissionMode: de(),
  slash_commands: T(o()),
  terminal_slash_commands: T(o()).optional().describe("Subset of slash_commands whose UX is bound to the local terminal (e.g. exit, statusline). Phone/remote UIs should hide these from command menus; desktop surfaces may keep them. Present only when non-empty; absent on CLIs that predate the field, and on sessions where no advertised command carries the tag."),
  output_style: o(),
  skills: T(o()),
  plugins: T(u({
    name: o(),
    path: o(),
    source: o().optional().describe('@internal Plugin source identifier in "name\\@marketplace" format. Sentinels: "name\\@inline" for --plugin-dir, "name\\@skills-dir" for .claude/skills plugins, "name\\@synced" for plugins synced from claude.ai, "name\\@builtin" for built-in plugins.'),
    version: o().optional().describe(ro)
  })),
  plugin_errors: T(u({
    plugin: o(),
    type: o(),
    message: o(),
    path: o().optional().describe("Present only when a --plugin-dir, SDK `plugins` or synced directory entry did not load at all: the path of that entry, resolved against the cwd (for a directory, the value its `plugins[]` row would have carried; for a .zip, the archive; a --plugin-url entry carries none). `plugin` is then the positional `inline[N]` / `synced[N]` tag, so a host that mounts several directories pairs the error to its own by this path.")
  })).optional().describe("Plugin load-time errors. A plugin that did not load (an unmet dependency, a --plugin-dir entry that failed) is absent from `plugins[]`; a plugin that loaded without one of its components keeps its row and gets an entry here too. `plugin` is `name@marketplace`, or the positional `inline[N]` / `synced[N]` tag for a directory entry that failed before it had a name; `type` is a category from an open set (path-not-found, generic-error, manifest-validation-error, dependency-unsatisfied, hook-load-failed, \u2026) \u2014 treat a value you do not recognize as a generic failure; `message` is display text. The key is omitted when there are no errors; CI can fail on `(plugin_errors?.length ?? 0) > 0`. A session whose frames are persisted server-side (a Remote Control worker) always omits this key \u2014 plugin diagnostics stay in the local log there, so an omitted key does not assert a clean load."),
  plugin_warnings: T(u({
    plugin: o(),
    type: o(),
    message: o()
  })).optional().describe("@internal Plugin authoring feedback (e.g., a default folder shadowed by a manifest key). When `plugin` matches an entry in `plugins[]`, that plugin loaded and the warning is advisory; warnings with a synthetic `plugin` source (no matching `plugins[]` entry, e.g. workspace-level suppression notices) describe content that did NOT load. The key is omitted when there are no warnings. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 plugin diagnostics stay in the local log, so an omitted key there does NOT assert a clean load."),
  mcp_server_errors: T(u({
    name: o(),
    type: o(),
    message: o()
  })).optional().describe("@internal MCP server config entries from --mcp-config that failed validation and were skipped (e.g. a `url` entry with no `type`). Affected servers are absent from `mcp_servers[]`. `type` is a stable category from an open set \u2014 currently unknown_type, url_missing_type, invalid_config, reserved_name, or (Remote Control child only) bridge_carrier_foreign_entry, bridge_carrier_not_http, bridge_carrier_url_mismatch, bridge_carrier_no_ingress_origin, bridge_carrier_no_session_id; treat values you do not recognize as a generic skip. The key is omitted when there are no errors; CI can fail on `(mcp_server_errors?.length ?? 0) > 0`. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 the skipped-entry detail stays in the local log, so an omitted key there does NOT assert every entry validated."),
  fast_mode_state: jt().optional(),
  fast_mode_disabled_reason: Gt().optional(),
  footer_indicator: mo().optional().describe(`@internal The terminal's configured "\u25c6 <text>" footer pill \u2014 see SDKFooterIndicator. Absent when nothing is configured.`),
  effort: U([ "low", "medium", "high", "xhigh", "max" ]).nullable().optional().describe("The effort level the session will send on its next request \u2014 after env overrides, session state, org caps and model-support downgrades; the same value get_settings reports as applied.effort. null when no effort parameter will be sent (a model without effort, CLAUDE_CODE_EFFORT_LEVEL=unset, or an internal numeric budget). Present on Remote Control bridge init frames (terminal- and Desktop/VS Code-hosted sessions); absent on hosts that do not publish it and on CLIs that predate the field. Re-emitted inits carry the current value \u2014 the newest frame wins."),
  per_turn_effort_active: M().optional().describe("@internal Whether per-turn effort is active for this frame's `model`. true: an effort change keeps the prompt cache, because the effort is sent inside the conversation, at the turn where it changes. false: the effort is sent only as the top-level parameter, so a change rewrites the cached prefix. Mid-session the CLI reports only a change to false (system/per_turn_effort_changed), and true comes only from an init. After a fresh process, or after the conversation's refusals are cleared (for example by /clear or a compaction), a true is provisional: a refusal on any later request sends system/per_turn_effort_changed before the retry, so a host keeps listening for it all session. Absent means unknown. Sent by the stream-json (Agent SDK) host."),
  view_mode: U([ "focus", "default" ]).optional().describe("Whether the session's transcript is in focus view ('focus': the model is told the user sees only its final message per turn, so clients may collapse each turn to the prompt and the final response; 'default' otherwise). Toggled by /focus, including over Remote Control. Present on Remote Control bridge init frames and on the per-turn init of headless stream-json runs (`claude rc` workers, -p, the SDK's subprocess transport); absent on hosts that do not publish it (the in-process engine) and on CLIs that predate the field. Re-emitted inits carry the current value \u2014 the newest frame wins."),
  capabilities: T(o()).optional().describe("Protocol capabilities this CLI supports, so SDK consumers can feature-detect instead of version-sniffing. Open set \u2014 ignore unknown values; check each capability for exactly the behavior you use. 'interrupt_receipt_v1' = the interrupt control_response success payload carries still_queued (uuids of async user messages that survive the interrupt). 'interrupt_cancel_queued_v1' = the interrupt control_request honors cancel_queued:true (queued and pending-dispatch commands are cancelled alongside the abort, listed on the response's cancelled field; still_queued is then empty \u2014 including any uuid that was mid-fold at the interrupt instant, since this request also aborts and the fold never delivers it \u2014 except that a client driving a hosted session lists there what it can no longer recall: a send already in flight to that session, or the first prompt the session was created with). 'queued_notifications' = the CLI accepts inbound queued_notification stream messages and drains them via ReadNotifications (the cloud session backend reads this from the persisted init event to decide whether it may send them). Absent on older CLIs."),
  analytics_disabled: M().optional().describe("@internal True when the CLI has analytics/telemetry disabled (privacy level, DO_NOT_TRACK, or 3P provider). IDE clients use this to hide per-message thumbs feedback UI since the rating event would be a no-op."),
  product_feedback_disabled: M().optional().describe("@internal True when the org's allow_product_feedback policy is false (ZDR/HIPAA). IDE clients use this to hide feedback surfaces (thumbs, session survey) whose events the CLI would drop at the proxy boundary anyway."),
  memory_paths: u({
    auto: o().optional(),
    team: o().optional()
  }).optional().describe("@internal Absolute directory paths for the auto-memory and team-memory stores. Lets SDK renderers classify Read/Write/Edit tool calls on these paths as memory operations without re-implementing CLI path detection."),
  scratchpad_path: o().optional().describe("@internal Absolute path of this session's scratchpad directory, for clients that read files from the session. Omitted when the scratchpad is disabled, and from the redacted init sent over the Remote Control bridge and by the hosted worker."),
  worker_epoch: v().int().min(1).optional().describe("@internal This cloud worker's life (CLAUDE_CODE_WORKER_EPOCH): a new number each time the session's worker is started. A claude --cloud client that latched an acknowledged epoch (remote_tools_announce) re-registers only when this differs. Emitted on workers where the account's remote-tools gate (tengu_violin_wood) is on, and by every claude-code-server worker whatever that gate reads; absent outside cloud workers and on CLIs that predate the field."),
  powershell_path: o().nullable().optional().describe("@internal Windows only: the absolute path of the PowerShell binary this session runs PowerShell commands with (PowerShell 7 when installed, including Microsoft Store installs, else Windows PowerShell 5.1), or null when none was found. Lets a desktop host open its own terminal with the same shell instead of re-implementing the detection. Present on stream-json (Agent SDK) init frames; absent on other platforms, wherever the init ambient is redacted (the Remote Control bridge), and on CLIs that predate the field."),
  cloud_session: gy().optional().describe("@internal Only on init frames written by the headless stream-json client of a cloud-hosted session (agent loop in the cloud container; this machine may be bound to it as a device): a snapshot per frame, absent in every other mode; no user, assistant or result frame precedes the first such init (informational system frames may; so may a worker's result that no init preceded, after all that was held ahead of it; on a re-attach so may frames of a turn already in progress, other clients' prompts, and the echo of this host's own prompt when the session already had it or it joins a turn in progress). `id` is the cloud session id, always in its `session_\u2026` spelling (the producer normalizes the service's `cse_\u2026` spelling of the same session); hosts store it and pass it back verbatim to re-attach. The frame-level `session_id` is instead the cloud worker's id, a uuidv5 of the session id in its `cse_` form: the same for the life of the cloud session across worker restarts and re-attaches until a /clear in the session, and passed through by the client unchanged. When `device.status` is `unbound`, `reason` is one of the client's unbound-reason keys and `message` its phrase: one line, at most 200 characters, no ANSI or trailing newline, worded to follow `Laptop tools unavailable: `. `directory_sync`: see docs/cloud-session-block.md. `not_applied`, when present, lists what the host passed that this session does not apply \u2014 `name` is a flag as `--flag`, a key inside --settings / --managed-settings as `settings.<key>` / `managed-settings.<key>`, or a field of the opening initialize as `initialize.<field>` (at most 40, lost first, each one line of about 64 characters at most); `kind` says what it costs: `lost` (the session does without something this invocation asked for \u2014 the informational warning names these), `kept` (an attach: the existing session keeps what it was created with) or `preference` (a display or host preference nobody would miss \u2014 the informational notice names these two), so a host may show them itself once or never; absent when nothing was left unapplied. `host`, when present, is what this machine announces as to the session: `handle` is the name the model addresses it by (and a client shows), `working_dir` the absolute directory served calls run in (that machine's separators), `platform` its platform word, `cli_version` its Claude Code version; each one line of at most 200 characters; present once this machine has built an announce for the session (bound, with something or an explicit nothing to serve), absent otherwise and on clients that predate it. `serving`, when present, says whether this machine serves its tools (Bash, Read, Write, Edit) to the session over the session's channel: `state` is `pending` while bound and about to announce, `on` once the session holds this machine's tools, `off` when it serves nothing, `revoked` when it stopped mid-session; `reason` (present when `state` is not `on` and the cause is known) is one of the client's serving-off keys \u2014 `not_bound` (see `device.reason`), `external_build`, `windows`, `muted` (Anthropic's emergency switch turned serving off; it comes back when the switch does), `switch_off`, `launched_from_home`, `channel_off`, `egress`, `policy_org` (the organization does not allow remote sessions), `flag_off`, `flag_stale`, `announce_refused`, `announce_unverified`, `superseded` \u2014 an open set: render an unrecognized value as a generic not-serving state; `policy` is the serving policy in effect (`parity`, or the stricter `interim` fallback); `channel` is `session`, or `bridge_only` when the session channel is switched off on this machine and served calls (if any) ride only the legacy device bridge, whose state this block does not describe. Absent on clients that predate it: feature-detect the key. `connection`, when present, is this client's stream to the session: `connecting` before it first connects, `live` while it is up, `reconnecting` while it is lost and being re-dialled (this machine is offline to the session meanwhile). `calls`, when present (once this machine has served a call this attach), is what it serves right now and how its last calls ended, by id and tool name only \u2014 never a call's input or output: `live` lists, oldest first, each call admitted here and not yet ended, `state` `running` while this machine executes it or `asked` while it waits on the session's approval (`ask_id` names the question; `since` is when it entered that state and `lapses_at` about when the session gives an unanswered question up, both epoch milliseconds on this machine's clock \u2014 the session's own timer decides); `recent` lists, newest last, at most 20 calls that ended here, `ended` being `completed`, `denied` (the session said no), `withdrawn` (the session took the question back unanswered \u2014 its patience ran out or the turn moved on), `refused` or `failed`, with `code` the result's disposition, refusal or failure word when it has one, and `at` when. `notices`, when present, is what this machine's serving has told the person during this attach that a host should show, at most 8: `key` is the notice's stable name (an open set \u2014 `device-mcp-consent`: this machine has MCP servers a cloud session could use and none are offered until the person allows it; `device-mcp-reconsent`: a server it offers changed the tools it lists and is withheld until re-approved, or this machine's record of what its servers list could not be read and none are offered \u2014 `text` says which; `device-mcp-dropped`; `served-hooks-not-run`; `served-hook-errors`; `served-bash-launched-from-home`; `served-tools-muted` / `served-tools-unmuted`; `announce_unverified`) and `text` its one line (at most 200 characters, no ANSI or newline) \u2014 this machine's own words with names from its own configuration, to be shown as plain text; written only by a serve-only helper (`--attach-serve`) and absent when nothing was said. `calls`, `connection` and `notices` are pushed between inits on `cloud_session_delta` frames. `client_version` rises only on a breaking change to this block \u2014 warn and continue on a higher value, never refuse; `not_applied[].kind`, `serving.state`, `connection`, `calls[].state` / `ended` and reason keys may gain values without it changing, so treat unrecognized values neutrally (an unrecognized `serving.state` as not serving \u2014 this schema itself parses an unrecognized `serving.state` as `off`, `policy` as `interim`, `channel` as `bridge_only`)."),
  uuid: _(),
  session_id: o()
}).describe("Session metadata the CLI emits at the start of each turn, normally ahead of every other message of that turn: session_id, model, working directory, tools, MCP servers, slash commands, permission mode, and the capabilities list for feature detection.")), Y0 = p(() => u({
  type: A("stream_event"),
  event: I0(),
  parent_tool_use_id: o().nullable(),
  uuid: _(),
  session_id: o(),
  ttft_ms: v().int().optional(),
  thinking_display: o().optional().describe("@internal The thinking.display Claude Code put in the API request body for the response this event belongs to. If anything rewrites the request on its way to the API, this value still states what Claude Code sent, not what the API received. Two responses of one turn can differ. Set on `message_start`, on a thinking block's `content_block_start` and on `thinking_delta` events when the body had a display; absent on every other event, on Remote Control (interactive terminal) sessions and from older producers. An event that the API did not send as it stands can lack the key. The key states which display the text was requested with, and nothing about how to show it. An absent key states nothing: neither which display was requested, nor that none was."),
  api_message_id: o().optional().describe("@internal The API's id (`msg_\u2026`) of the response this event belongs to: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Set on every event from a response's `message_start` to its `message_stop`, so that a consumer that missed the `message_start` can still tell responses apart. Two responses can share an id, as when a `message_start` is replayed; the key does not tell those apart. Absent on pings, when the `message_start` had no id or an empty one, on Remote Control (interactive terminal) sessions and from older producers. The events that Claude Code produces itself to close a response cut short carry it too. Events that a plugin produced or rewrote, and those that Claude Code builds in their place or to close them, can lack it. An absent key states nothing about which response the event belongs to."),
  abandoned_blocks: u({
    api_message_id: o().describe("The API's id (`msg_\u2026`) of the response that was cut short: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Should two responses share an id, the one meant is the one this `message_stop` closes."),
    from_block_index: v().int().nonnegative().describe("Blocks of the response at this index and above have no assistant message and never will. It is an `event.index` as on the response's `content_block_*` events, not a count of assistant messages. 0 means the whole response. Can be higher than every index the consumer has seen, and then there is nothing to remove.")
  }).optional().describe("@internal Set on a `message_stop` that Claude Code produced itself, after it stopped reading the response that `message_stop` closes because the API's stream failed, stalled or ended early. That response's content blocks at index `from_block_index` and above have no assistant message and will never get one, so a consumer that drew or stored them from stream events, and holds no assistant message for them, can remove them, even a block that has had its `content_block_stop`. Nothing is stated about lower blocks: some may have no assistant message, and what follows may repeat or replace them. What follows can be, among others, a retry (a new `message_start`), the same request without streaming (assistant messages under another id, with no `message_start` before them), an assistant message that reports the error, or nothing. A plugin can add content blocks of its own to a response, and those do get assistant messages under the same id, emitted before this event. Absent on every other `message_stop` (the API's own, one produced for a response that had arrived whole, one where Claude Code cannot be sure), on Remote Control (interactive terminal) sessions and from older producers. An absent key states nothing: a block with no assistant message yet may still get one."),
  text_runs_joined: A(!0).optional().describe("@internal Set on the `message_start` of a response when CLAUDE_CODE_WEBSEARCH_CITATIONS is on in a non-interactive session. Each run of adjacent text blocks of that response gets one assistant message with one text block, which holds the joined text. Each entry of its `citations`, except a `web_search_result_location`, has `span_start` and `span_end`: the place of the cited block in the joined text, in Unicode code points, end exclusive. The `content_block_*` events still show each block of the run by its own index. A response that came without streaming has no `message_start`, and it is joined too."),
  user_message_uuid: o().optional().describe("Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on a non-ping stream event each time that send changes: the turn's FIRST non-ping stream event (normally the frame that triggers the turn's initial ack), and, for a turn started by a synthetic (meta) prompt, the first non-ping stream event after each queued user message folded in mid-turn takes the echo over (see SDKAssistantMessage.user_message_uuid for the rule) \u2014 so a consumer can bind the reply stream to the send it answers without waiting for the result. A turn started by a typed prompt stamps only its first non-ping stream event; independently, its first complete assistant message is stamped as well (see SDKAssistantMessage.user_message_uuid), so the same uuid may appear on both. Absent on every other stream event of the turn, on turns that neither had a client uuid nor folded a user message in, and from older producers."),
  user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn has consumed so far, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame \u2014 so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."),
  resume_reason: o().optional().describe("Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers.")
}).describe("An incremental streaming event for the assistant message being generated, emitted only when partial messages are requested (--include-partial-messages). The complete assistant message still follows as its own message.")), W0 = p(() => u({
  type: A("system"),
  subtype: A("compact_boundary"),
  compact_metadata: u({
    trigger: U([ "manual", "auto" ]),
    pre_tokens: v().int(),
    post_tokens: v().int().optional(),
    cumulative_dropped_tokens: v().int().optional().describe("@internal Running total of context tokens compaction has removed so far, across this and every earlier compaction. " + "Each contribution is approximately pre_tokens \u2212 post_tokens."),
    duration_ms: v().int().optional(),
    user_context: o().optional().describe('@internal User-provided focus text for manual "summarize from here".'),
    messages_summarized: v().int().optional().describe("@internal Count of messages the compaction summarized."),
    precomputed: M().optional().describe("@internal The summary was generated in the background at the autocompact threshold and swapped in when prompt-too-long fired; duration_ms measures user-wait from that point."),
    pre_compact_discovered_tools: T(o()).optional().describe("@internal Deferred-tool names discovered before this compaction. extractDiscoveredToolNames reads this back on the next turn so the tool-schema filter keeps including them after the tool_reference-carrying messages were summarized away."),
    pre_compact_artifact_read_versions: T(u({
      slug: o(),
      ver: o()
    })).optional().describe("@internal The artifact versions the conversation held before this compaction (slug is the artifact id, ver the version read or published), most recently changed first; empty when it held none. A resumed session replays these so it can update those artifacts without reading them again."),
    preserved_segment: u({
      head_uuid: _(),
      anchor_uuid: _(),
      tail_uuid: _()
    }).optional().describe("Relink info for messagesToKeep. Loaders splice the preserved segment at anchor_uuid (summary for suffix-preserving, boundary for prefix-preserving partial compact) so resume includes preserved content. Unset when compaction summarizes everything (no messagesToKeep)."),
    preserved_messages: u({
      anchor_uuid: _(),
      uuids: T(_()),
      all_uuids: T(_()).optional().describe("@internal Unfiltered messagesToKeep UUIDs. uuids is the on-disk subset (messages recordTranscript writes); all_uuids is the in-memory superset including non-loggable messages an in-process surface still holds for the next turn's API input. Absent from older producers.")
    }).optional().describe("Ordered messagesToKeep UUIDs. Supersedes preserved_segment \u2014 " + "readers look up each UUID directly and relink uuids[i] to uuids[i-1] (uuids[0] to anchor_uuid) instead of walking the parentUuid chain. Unset when compaction summarizes everything.")
  }),
  logical_parent_uuid: _().nullable().optional().describe("@internal uuid of the last pre-compact message \u2014 the backpointer " + "forkSession follows across the compaction break. Distinct from the session-file chain parent (which is the post-compact summary). Absent from older producers."),
  uuid: _(),
  session_id: o(),
  historical: M().optional().describe("@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server).")
})), $0 = p(() => u({
  type: A("system"),
  subtype: A("status"),
  status: P0(),
  permissionMode: de().optional(),
  compact_result: U([ "success", "failed" ]).optional(),
  compact_error: o().optional(),
  compact_output_chars: v().int().optional().describe("@internal On the 'compacting' statuses of an automatic compaction (absent on a typed /compact): characters of the summary streamed so far (text and tool-input deltas, not thinking). Returns to 0 at each new attempt at the summary (a request retried inside an attempt adds to what the dropped try streamed), and stays 0 while waiting for a summary written in the background. A rising count shows that the summary is being written; a still one proves nothing, and it is not a share of the final length, which is not known in advance."),
  uuid: _(),
  session_id: o()
})), no = p(() => u({
  type: A("system"),
  subtype: A("post_turn_summary"),
  summarizes_uuid: o(),
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Background post-turn summary emitted after each assistant turn. summarizes_uuid points to the assistant message this summarizes.")), oo = p(() => u({
  type: A("system"),
  subtype: A("task_summary"),
  detail: o().nullable(),
  uuid: _(),
  session_id: o()
}).describe("@internal Mid-turn progress line from the debounced classifier. Mirrors external_metadata.task_summary so non-CCR consumers (desktop LocalSessionManager) see the same live phrase. detail is null on the idle clear.")), ao = p(() => u({
  type: A("system"),
  subtype: A("session_metadata"),
  metadata: u({
    artifacts: T(u({
      url: o(),
      title: o().optional(),
      favicon: o().optional(),
      kind: A("frame"),
      updated_at: o()
    })).nullable().optional()
  }),
  uuid: _(),
  session_id: o()
}).describe("@internal The same external_metadata patch a cloud worker sends the session server, for the keys a local host needs: today `artifacts` (the session's published-artifact list, whole list on each change, null once empty). Lets an SDK host keep the per-session summary a cloud session gets, without reading transcript rows.")), X0 = p(() => u({
  type: A("system"),
  subtype: A("informational"),
  content: o(),
  level: U([ "info", "notice", "suggestion", "warning" ]).describe("Render level. 'info' shows only in transcript mode; 'notice' renders in inactive gray; 'suggestion' and 'warning' are more prominent."),
  tool_use_id: o().optional().describe("Dedupes progress messages for the same tool use."),
  prevent_continuation: M().optional().describe("When true, execution stops after this message (e.g. a Stop hook denied continuation)."),
  tag: o().optional().describe("Opaque feature tag on a line a host may treat specially; absent on ordinary lines. Hosts ignore values they do not know."),
  prompt_submit_outcome: u({
    kind: U(OA).optional().catch(void 0),
    no_verdict_kind: U(NA).optional().catch(void 0).describe("Sent with kind 'no_verdict', and says why: 'remote_run_failed' (the hook runs on another machine, and the run failed or gave no usable answer), 'remote_run_timed_out' (the wait for that run timed out; the hook may never have been sent), 'interrupted' (the turn was aborted during that wait), 'remote_runner_refused' (Claude Code does not send this hook to that machine; a retry does not help), 'unsupported_in_cloud_session' (a cloud session cannot run this type of hook), 'output_distrusted' (Claude Code could not prove that it read all of the hook's output), 'callback_timed_out' (a callback hook did not answer in time), 'hook_failed' and 'hook_timed_out' (for this hook a failure blocks), 'hooks_never_ran' (an internal fault: the hooks did not run over the submitted text), 'personal_config_refused' (the session restricts personal config, and part of the person's own settings did not load or is off), 'rewrite_unplaceable' (a plugin's code module changed the prompt's text, and Claude Code has no place to put the change)."),
    prompt_kept: M(),
    reason: o().optional()
  }).optional().catch(void 0).describe("@internal Present on the line that ends a submitted prompt before a model call. It says how the prompt ended, so a host can write its own message or count endings and does not match `content`. kind: 'blocked_by_hook' (a hook answered with a block), 'stopped_by_hook' (a hook answered continue:false), 'dropped_by_hook' (a plugin's code module dropped the prompt), 'not_passed_on' (a plugin's code module answered and did not pass the prompt on), 'no_verdict' (no hook gave a verdict, and Claude Code ended the prompt itself). prompt_kept: true when the prompt stays in the conversation, where the model reads it on the next turn. Do not infer it from kind. reason: the hook's text as Claude Code got it, with nothing added here; a model writes it for a prompt or agent hook. It is never sent with no_verdict. It is absent when Claude Code got no text, and for a plugin's code module that blocks on the UserPromptSubmit hook event. ANSI codes are removed, control and invisible characters are replaced, line feeds stay, and long text is cut. It is untrusted and can quote the prompt, so render it as plain text. A cloud session can run the hook on another machine: its tool container, where any program can write reason, or the person's own machine. reason is then what that machine sent, for a block and for a stop. The person's own machine puts a label before the stderr of an exit 2, or before 'No stderr output' when there is none. Either machine makes the block itself when it could not read all of the hook's output, and the person's own machine can do so when its timeout fires. Each reads 'blocked_by_hook', with that machine's sentence as reason. Claude Code's own block for an SDK host that reconnected before its hook answered reads the same way, with Claude Code's sentence as reason. New values can appear: treat an unknown value as absent, and ignore reason beside an unknown kind. A slash command that runs as a fork does not send this key when a hook ends it. A follow-up that a hook blocks while a turn runs carries this key too, so read it as the end of a turn only when the next result has num_turns 0."),
  uuid: _(),
  session_id: o()
}).describe("Generic text banner emitted by the loop \u2014 non-error status lines, hook feedback (e.g. a UserPromptSubmit hook's block reason), slash-command output. Hosts render `content` as plaintext at the given level.")), lJ = p(() => u({
  type: A("system"),
  subtype: A("permission_retry"),
  content: o(),
  commands: T(o()).describe("Display names of the commands that were allowed."),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when tool execution retries after a permission-mode change allowed previously-denied commands. REPL renders a 'retrying with <commands>' banner. From internal SystemMessage 'permission_retry'.")), dJ = p(() => u({
  type: A("system"),
  subtype: A("stop_hook_summary"),
  hook_count: v().int(),
  hook_infos: T(u({
    command: o(),
    prompt_text: o().optional(),
    duration_ms: v().int().optional()
  })),
  hook_errors: T(o()),
  hook_additional_context: T(o()).optional().describe("Non-error feedback from hookSpecificOutput.additionalContext \u2014 kept separate from hook_errors so the sanctioned feedback channel is not labeled an error. Absent in sessions persisted before this field existed."),
  prevented_continuation: M(),
  stop_reason: o().optional(),
  has_output: M(),
  level: U([ "info", "notice", "suggestion", "warning" ]),
  tool_use_id: o().optional(),
  hook_label: o().optional(),
  total_duration_ms: v().int().optional(),
  uuid: _(),
  session_id: o()
}).describe("@internal Summary of Stop/SubagentStop hook execution at turn end \u2014 which hooks ran, their output, and whether any prevented continuation. From internal SystemMessage 'stop_hook_summary'.")), cJ = p(() => u({
  type: A("system"),
  subtype: A("memory_saved"),
  written_paths: T(o()),
  team_count: v().int().optional(),
  verb: o().optional().describe('Renders as "<verb> N memories". Defaults to "Saved".'),
  uuid: _(),
  session_id: o()
}).describe("@internal Confirmation that the memory subsystem wrote to the listed paths. REPL renders a '<verb> N memories' banner. From internal SystemMessage 'memory_saved'.")), hJ = p(() => u({
  type: A("system"),
  subtype: A("agents_killed"),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when background agents are terminated (e.g. on interrupt). REPL renders an 'agents killed' banner. From internal SystemMessage 'agents_killed'.")), Q0 = p(() => u({
  type: A("system"),
  subtype: A("instruction_size_warning"),
  total_chars: v().int().describe("Combined length, in characters, of the instruction files in the session prompt: CLAUDE.md files, rules files and the files they import. Always over total_limit_chars."),
  total_limit_chars: v().int().describe("The recommended limit for total_chars on the turn's model, in characters."),
  file_count: v().int().describe("Number of files counted in total_chars. When it is 1, word the warning for a single file rather than a total."),
  largest_chars: v().int().optional().describe("Length of the largest file, in characters. Present only when the warning should mention it: there are several files and this one by itself is over total_limit_chars."),
  uuid: _(),
  session_id: o()
}).describe("@internal The session's instruction files add up to more than the recommended limit. Numbers only: the host words the warning in the person's language. Sent to Claude Desktop's Code tab alone, at most once per process, on a conversation's first turn after system/init; never stored in the transcript. Safe to ignore: a host that does not recognize this subtype shows nothing.")), uJ = p(() => u({
  type: A("system"),
  subtype: A("away_summary"),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Summary of what happened while the user was away (background tasks completed, notifications accumulated). From internal SystemMessage 'away_summary'.")), pJ = p(() => u({
  type: A("system"),
  subtype: A("thinking"),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Rendered thinking content (the text itself, not the running token estimate \u2014 that is SDKThinkingTokensMessage). From internal SystemMessage 'thinking'.")), io = p(() => u({
  type: A("transcript_mirror"),
  filePath: o(),
  entries: T(oe())
}).describe("@internal Emitted after each successful local transcript write. The parent peels these off the stdout stream and batches them to the SessionStore adapter. Not exposed to public SDK consumers.")), J0 = p(() => u({
  type: A("system"),
  subtype: A("mirror_error"),
  error: o(),
  key: u({
    projectKey: o(),
    sessionId: o(),
    subpath: o().optional()
  }),
  uuid: _(),
  session_id: o()
}).describe("Emitted when SessionStore.append() rejects or times out for a transcript-mirror batch after bounded retry (3 attempts with short backoff; timeouts are not retried). The batch is then dropped; this surfaces the failure so consumers are not silent on data loss.")), Z0 = p(() => u({
  type: A("system"),
  subtype: A("api_retry"),
  attempt: v().int(),
  max_retries: v().int(),
  retry_delay_ms: v().int(),
  error_status: v().int().nullable(),
  error: to(),
  no_response: u({
    waited_ms: v().int(),
    retry_wait_ms: v().int()
  }).optional().describe("Present only when the API sent no response headers within the first-byte window (CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS): waited_ms is how long the failed attempt waited for headers, retry_wait_ms how long the retry will wait for them. For this cause max_retries is its own cap (normally one retry), not the session budget."),
  uuid: _(),
  session_id: o()
}).describe("Emitted when an API request fails with a retryable error and will be retried after a delay. error_status is null for connection errors (e.g. timeouts) that had no HTTP response.")), eF = p(() => u({
  type: A("system"),
  subtype: A("control_request_progress"),
  request_id: o().describe("request_id of the in-flight control_request this progress belongs to."),
  status: U([ "started", "api_retry" ]),
  attempt: v().int().optional(),
  max_retries: v().int().optional(),
  retry_delay_ms: v().int().optional(),
  error_status: v().int().nullable().optional(),
  uuid: _(),
  session_id: o()
}).describe("Progress for a long-running client-originated control_request (currently only side_question), correlated by request_id. status 'started' means the worker accepted the request and launched the work; 'api_retry' carries the same retry counters as SDKAPIRetryMessage and is present only for that status.")), tF = p(() => u({
  type: A("system"),
  subtype: A("model_refusal_fallback"),
  trigger: A("refusal"),
  direction: U([ "retry", "revert", "sticky" ]),
  scope: U([ "session", "local" ]).optional().describe("'session': the main thread fell back and the session model is swapped. 'local': a subagent / side-question (/btw) / background fork fell back \u2014 only that response came from the fallback model and the session model is unchanged. Absent from older CLIs (treat as 'session')."),
  original_model: o(),
  fallback_model: o(),
  request_id: o().nullable(),
  api_refusal_category: o().nullable().optional().describe("The refusal category ('cyber', 'bio', \u2026): stop_details.category from the refused API response (client lane), or the fallback block's server-gated trigger.category (server lane). Open string \u2014 new categories ship on the wire ahead of schema updates. null when neither source carried a category (normal, not an error). Absent when emitted by an older CLI."),
  saw_cyber_refusal: A(!0).optional().describe("@internal Present when ANY hop of this banner's multi-hop episode was a cyber refusal \u2014 not only the origin hop that api_refusal_category describes (the banner keeps first-hop category semantics for display). Re-arm evidence for the CLI's cyber-exclusion header on session restore; never rendered, not part of the public SDK contract. Absent on cyber-free episodes and when emitted by an older CLI."),
  api_refusal_explanation: o().nullable().optional().describe("stop_details.explanation from the refused API response (client lane only \u2014 the server-lane trigger carries no explanation). Unstable human prose \u2014 display only, never parse. null/absent when the response carried none, and always null on server-lane banners."),
  retracted_message_uuids: T(o()).optional().describe("Wire uuids of the messages this fallback retracted \u2014 the refused partial as the consumer received it (one uuid per normalized SDK message; multi-block messages carry per-block derived uuids) plus any tombstoned tool_results. Emitted AFTER the retraction, so this is a resolution-time eviction signal: remove these messages from transcript state on receipt. Eviction is idempotent \u2014 unknown or already-removed uuids are a no-op. Absent when emitted by an older CLI."),
  refused_user_message_uuid: o().nullable().optional().describe("UUID of the user message the refused request was for \u2014 the rewind target and composer prefill for edit-and-retry. This is the message's own uuid as delivered on the replay ack (not a per-block normalized uuid). null when the refused turn was not human-authored (e.g. a background task notification or auto-continuation \u2014 nothing to edit-and-retry) or otherwise cannot be identified; absent from older CLIs."),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe('Emitted when the primary model ends the stream with stop_reason "refusal" and the turn is retried once on a fallback model (direction: "retry"). When `scope` is "session" (or absent \u2014 older CLIs), the swap is made persistent for the session; when `scope` is "local", only that subagent/side-question response came from the fallback model and the session model is unchanged. "revert" and "sticky" are retained in the enum for SDK-consumer compat and are no longer emitted.')), sF = p(() => u({
  type: A("system"),
  subtype: A("model_refusal_no_fallback"),
  original_model: o(),
  request_id: o().nullable(),
  api_refusal_category: o().nullable().optional(),
  api_refusal_explanation: o().nullable().optional(),
  refused_user_message_uuid: o().nullable().optional(),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe('Emitted when the model ends the stream with stop_reason "refusal" and no retry runs: no fallback model is configured, or per-category routing declined the retry (the mapped fallback target is unresolvable, or CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL is explicitly disabled and the refusal category has no fallback map entry). The structured counterpart to detecting stop_reason "refusal" on the assistant error frame. Not emitted when the retry ran or the user declined the retry dialog (model_refusal_fallback covers the retry case). Absent from older CLIs.')), _J = p(() => u({
  type: A("system"),
  subtype: A("model_fallback"),
  trigger: U([ "model_not_found", "permission_denied", "overloaded", "server_error", "last_resort", "model_blocked" ]),
  original_model: o(),
  fallback_model: o(),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe('@internal Emitted when the current turn is switched to the configured fallback model because the primary model failed (trigger "model_not_found": model retired/unknown; "permission_denied": org lacks access; "overloaded": repeated 529s; "server_error": retryable 5xx pivot; "last_resort": non-retryable error on the primary; "model_blocked": primary disabled by the per-model kill switch). Turn-scoped \u2014 the primary is re-tried on the next user turn. Not yet in the public SDKMessage union.')), mJ = p(() => u({
  type: A("system"),
  subtype: A("model_consent_fallback"),
  choice: U([ "consent", "switch_default", "cancelled" ]).describe("The consent-prompt answer (or no-dialog collapse) that produced the swap. 'consent' appears here only when the gate could not honor it (e.g. usage credits did not end up provisioned \u2014 the loop never enables billing from a bare wire reply)."),
  original_model: o(),
  original_model_name: o().optional().describe(`The name the CLI's usage-credit copy uses for original_model ("Fable 5"), for a host that renders its own notice; "Fable" when absent.`),
  fallback_model: o(),
  persisted_as_default: M().describe("True when the decline also rewrote the saved default model (explicit switch_default with the consent-gated model as the saved default)."),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when a pre-send model consent gate swaps the session off the requested model (consent declined, dismissed, or given without the required entitlement ending up provisioned). Currently emitted by the Fable 5 usage-credit gate (`fable_overage_consent_prompt`). Session-scoped \u2014 the swap persists for the session, and additionally as the saved default when persisted_as_default is true. Absence of this message after the consent dialog resolves means the session stayed on the requested model. Not yet in the public SDKMessage union.")), gJ = p(() => u({
  type: A("system"),
  subtype: A("file_snapshot"),
  content: o(),
  snapshot_files: T(u({
    key: o().describe("Identifier for the file type (e.g. 'plan', 'todo')."),
    path: o().describe("Original file path (for debugging)."),
    content: o()
  })),
  uuid: _(),
  session_id: o()
}).describe("@internal Snapshot of session files (plan, todo) captured for rewind. From internal SystemMessage 'file_snapshot'.")), fJ = p(() => u({
  type: A("system"),
  subtype: A("scheduled_task_fire"),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when a scheduled task (cron) fires. content is the render text. From internal SystemMessage 'scheduled_task_fire'.")), rF = p(() => u({
  type: A("system"),
  subtype: A("peer_message_hold"),
  state: U([ "held", "released", "dropped" ]).describe("'held' when the receive-side policy parks the message instead of queueing it (once per message per hold cause \u2014 a re-announcement under a different cause emits again); then at most one of 'released' (the policy now accepts it: it enters the queue \u2014 its command_lifecycle 'queued' and, when it drains, its user replay echo follow under message_uuid) or 'dropped' (it will never reach the model in this session; see outcome)."),
  message_uuid: o().optional().describe("The parked command's uuid \u2014 the value its later command_lifecycle frames and user replay echo carry. For lane 'bridge'/'stdin' it is the id the host (or its bridge) supplied on the inbound message; for lane 'socket' it was chosen by the SENDING session, so a host must correlate it only within peer_message_hold / peer replay frames, never against its own prompts' lifecycle."),
  lane: U([ "bridge", "stdin", "socket" ]).describe("Which ingress delivered it: the Remote Control bridge, the host's own stdin stream, or the local cross-session socket."),
  from: o().describe("The sender's address as the envelope will show it (the cross-session-message `from`) \u2014 an address-shaped token with control and invisible code points scrubbed; empty when the sender supplied none or an unshaped one. Sender-asserted on the socket lane: a label, not an identity proof."),
  from_name: o().optional().describe("The sender's display name when it supplied one, normalized and scrubbed the same way. A claim, like `from`."),
  cause: U([ "explicit-setting", "managed-setting", "repo-setting", "invalid-setting", "bypass-default", "mode-unknown", "mode-mismatch", "no-mode-asserted" ]).optional().describe("state 'held' only: why the policy parked it. 'mode-mismatch' / 'no-mode-asserted' are the permission-mode parity holds (the sender runs in a different permission class, or asserted none while this session bypasses permissions); the *-setting causes are a standing crossSessionInbound:'hold'."),
  outcome: U([ "expired", "refused", "dropped", "discarded" ]).optional().describe("state 'dropped' only: 'expired' \u2014 no one approved it before the approval deadline (a headless host has no approval surface, so every parity hold ends this way unless the mode changes first); 'refused' \u2014 the policy turned to refuse while it waited; 'dropped' \u2014 released or approved but the ingress guard (rate limit, duplicate, queue cap) discarded it; 'discarded' \u2014 the session ended with it still parked."),
  uuid: _(),
  session_id: o()
}).describe("@internal A cross-session (peer) message this session's receive-side policy HELD rather than queued, and how that hold resolved. Lets a host show the human that a message arrived but has not reached the model (and may never) instead of nothing at all; the sending session is told separately over its own transport where one exists. Informational only \u2014 there is no host-side approval through this frame. Emitted on the stdout stream in -p/SDK sessions.")), bJ = p(() => u({
  type: A("system"),
  subtype: A("turn_duration"),
  duration_ms: v().int(),
  budget_tokens: v().int().optional().describe("Output tokens spent this turn toward the token budget."),
  budget_limit: v().int().optional().describe("Turn token-budget ceiling."),
  budget_nudges: v().int().optional().describe("Budget-nudge count this turn."),
  message_count: v().int().optional().describe("In-memory message count at turn end; used by resume-consistency telemetry to detect write\u2192load round-trip drift."),
  pending_background_agent_count: v().int().optional().describe("Background Agent-tool runs still in flight when the turn finished."),
  pending_workflow_count: v().int().optional().describe("Workflow-tool runs still in flight when the turn finished."),
  uuid: _(),
  session_id: o()
}).describe("@internal Per-turn wall-clock duration plus budget and pending-background-work counts. REPL renders the 'Done in Ns' / 'Waiting for N agents' line. From internal SystemMessage 'turn_duration'.")), EJ = p(() => u({
  type: A("system"),
  subtype: A("api_error"),
  error: u({
    message: o(),
    status: v().int().optional(),
    request_id: o().optional(),
    formatted: o().describe("Human-readable display string for the error."),
    connection: u({
      code: o(),
      message: o(),
      is_ssl_error: M()
    }).nullable().describe("errno/SSL code extracted from the cause chain; null when absent."),
    is_network_down: M(),
    rate_limits: u({
      resets_at: v().int().optional(),
      rate_limit_type: o().optional()
    }).nullable().describe("Quota-429 headers surfaced by the retry banner; null when not a quota 429.")
  }).describe("Plain-data snapshot of the APIError \u2014 the class instance cannot cross the wire."),
  retry_in_ms: v().int(),
  retry_attempt: v().int(),
  max_retries: v().int(),
  uuid: _(),
  session_id: o()
}).describe("@internal Retryable-API-error frame carrying the plain-data error snapshot and retry counters. REPL renders the retry banner from this. Wire twin is SDKAPIRetryMessage ('api_retry'). From internal SystemMessage 'api_error'.")), nF = p(() => u({
  type: A("system"),
  subtype: A("local_command_output"),
  content: o(),
  uuid: _(),
  session_id: o()
}).describe("Output from a local slash command (e.g. /voice, /usage). Displayed as assistant-style text in the transcript.")), oF = p(() => u({
  type: A("system"),
  subtype: A("hook_started"),
  hook_id: o(),
  hook_name: o(),
  hook_event: o(),
  uuid: _(),
  session_id: o()
})), aF = p(() => u({
  type: A("system"),
  subtype: A("hook_progress"),
  hook_id: o(),
  hook_name: o(),
  hook_event: o(),
  stdout: o(),
  stderr: o(),
  output: o(),
  uuid: _(),
  session_id: o()
})), iF = p(() => u({
  type: A("system"),
  subtype: A("hook_response"),
  hook_id: o(),
  hook_name: o(),
  hook_event: o(),
  output: o(),
  stdout: o(),
  stderr: o(),
  exit_code: v().int().optional(),
  outcome: U([ "success", "error", "cancelled" ]),
  uuid: _(),
  session_id: o()
})), lF = p(() => u({
  type: A("system"),
  subtype: A("plugin_install"),
  status: U([ "started", "installed", "failed", "completed" ]),
  name: o().optional(),
  error: o().optional(),
  uuid: _(),
  session_id: o()
}).describe("Headless plugin installation progress (CLAUDE_CODE_SYNC_PLUGIN_INSTALL). started/completed bracket the whole install; installed/failed carry a per-marketplace name.")), dF = p(() => u({
  type: A("tool_progress"),
  tool_use_id: o(),
  tool_name: o(),
  parent_tool_use_id: o().nullable(),
  elapsed_time_seconds: v().int(),
  task_id: o().optional(),
  uuid: _(),
  session_id: o(),
  heartbeat: M().optional(),
  subagent_type: o().optional(),
  subagent_retry: u({
    agent_id: o(),
    attempt: v().int(),
    max_retries: v().int(),
    retry_delay_ms: v().int(),
    error_status: v().int().nullable(),
    error_category: o()
  }).optional()
}));

var cF = p(() => u({
  type: A("auth_status"),
  isAuthenticating: M(),
  output: T(o()),
  error: o().optional(),
  uuid: _(),
  session_id: o()
})), hF = p(() => u({
  type: A("system"),
  subtype: A("files_persisted"),
  files: T(u({
    filename: o(),
    file_id: o()
  })),
  failed: T(u({
    filename: o(),
    error: o()
  })),
  processed_at: o(),
  uuid: _(),
  session_id: o()
})), co = "True for tasks that are not activity (every skip_transcript task, plus every live-update watcher, requested or auto-started); hosts should exclude them from activity indicators.", fy = "@internal True for a run of a resumed subagent (local_agent) that the tool call which resumed it waits for, as SendMessage does when background tasks are disabled; its task_started, if one is sent, names that call in tool_use_id. The run has ended by the time that call returns or throws, even when the wait is aborted. Its report goes into that call's result, so expect no follow-up turn when it ends. A later resume that nothing waits for starts a new run without the field.", by = "task_id of the subagent (local_agent) task whose agent launched this subagent, shell, monitor or workflow task. Absent when the launcher is the main thread, has no task_id of its own (a teammate, an agent inside a workflow), or is no longer tracked. A resumed subagent keeps its original parent. The parent may be a foreground or already-ended task, so treat an unknown id as no parent.", Vt = "Id of one run of the task: equal on every task_* event, background_tasks_changed entry and saved notification (its origin.runId) of that run. A resumed task keeps its task_id and gets a new one. The run ids of one task sort, by plain string comparison, in the order the runs opened; a frame that names a run sorting before the one a reader shows is late. Nothing else about the format is promised. Absent for a task this process did not register, and from CLIs that predate it.", uF = p(() => u({
  type: A("system"),
  subtype: A("task_notification"),
  task_id: o(),
  run_id: o().optional().describe(Vt),
  tool_use_id: o().optional(),
  status: U([ "completed", "failed", "stopped" ]),
  reason: U([ "worker_restart" ]).optional().describe("Machine-readable cause, set only when the task did not end through an ordinary completion, failure, or stop. 'worker_restart': the worker process restarted and the resumed process found the task orphaned (always with status 'stopped')."),
  output_file: o(),
  summary: o(),
  usage: u({
    total_tokens: v().int(),
    tool_uses: v().int(),
    duration_ms: v().int()
  }).optional(),
  resource_links: T(ry()).optional().describe("CLI-owned: for a backgrounded MCP task (task_type mcp_task) that completed, the `resource_link` content blocks of its final result \u2014 the files it returned by reference \u2014 collected from the raw result before the CLI renders it as the text the model reads. A backgrounded task's tool_result is the placeholder text and its real result arrives as this notification, so this is where a host learns which files that tool call produced; join to the originating call via tool_use_id. Same fields and caps as tool_use_result.resourceLinks (at most 50 links, 64 KiB serialized), absent when the result had none or the task is any other type. Never populated from the server's _meta."),
  handback: U(Txr).optional().describe("@internal Present on a 'completed' notification of a subagent that reports through the SubagentHandback tool: how its report reached its caller, with the values and meaning of `handback` on AgentToolCompletedOutput. Left out when the subagent failed, was stopped, is waiting on agents it started, or is waiting on its own background work with nothing delivered yet; for such a subagent, `summary` is then not a report. When present, `summary` holds harness notes written for the model. Any notification can be followed by a later one for the same task_id when the agent is resumed or finishes its wait; the later one replaces what the earlier one showed."),
  handback_report: Axr().optional().describe("@internal The report a 'send' or 'flagged' hand-back delivered, the same shape as `handbackReport` on AgentToolCompletedOutput: when present, render it instead of `summary`, with its `warning`, if it has one, above its `text`. Absent for 'withheld'; if it is absent for another value too, show `summary`."),
  skip_transcript: M().optional(),
  ambient: M().optional().describe(co),
  uuid: _(),
  session_id: o()
})), pF = p(() => u({
  type: A("system"),
  subtype: A("task_started"),
  task_id: o(),
  run_id: o().optional().describe(Vt),
  tool_use_id: o().optional(),
  description: o(),
  subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
  is_backgrounded: M().optional().describe("Whether the task was registered in the background (true) or in the foreground with the spawning tool call blocking on it (false). A resumed subagent is always registered in the background. A later move to the background arrives as task_updated patch.is_backgrounded. Set for local_agent and local_bash tasks."),
  awaited: M().optional().describe(fy),
  spawn_depth: v().int().optional().describe("Nesting depth of a spawned subagent (local_agent) task: 1 for a top-level spawn, N+1 when spawned from inside a depth-N agent. Not set on other tasks."),
  parent_task_id: o().optional().describe(by),
  task_type: o().optional(),
  workflow_name: o().optional().describe("meta.name from the workflow script (e.g. 'spec'). Only set when task_type is 'local_workflow'."),
  prompt: o().optional(),
  skip_transcript: M().optional().describe("Ambient/housekeeping task. Consumers should hide this from the inline transcript; it may still appear in a tasks panel."),
  ambient: M().optional().describe(co),
  uuid: _(),
  session_id: o()
})), _F = p(() => u({
  type: A("system"),
  subtype: A("task_updated"),
  task_id: o(),
  run_id: o().optional().describe(Vt),
  patch: u({
    status: U([ "pending", "running", "completed", "failed", "killed", "paused" ]).optional(),
    description: o().optional(),
    end_time: v().int().optional(),
    total_paused_ms: v().int().optional(),
    error: o().optional(),
    is_backgrounded: M().optional()
  }).describe("Wire-safe subset of TaskState fields that changed. Excludes abortController, messages, result. Clients merge into their local task map."),
  uuid: _(),
  session_id: o()
})), mF = p(() => u({
  type: A("system"),
  subtype: A("background_tasks_changed"),
  tasks: T(u({
    task_id: o(),
    run_id: o().optional().describe(Vt),
    task_type: o(),
    subagent_type: o().optional().describe(`Agent type of a local_agent task, such as "general-purpose" or a custom agent's name; "main-session" for a backgrounded main session. Not set on other tasks.`),
    description: o(),
    parent_task_id: o().optional().describe(by),
    ambient: M().optional().describe(co),
    awaited: M().optional().describe(fy)
  })).describe("Every live background task after the change. REPLACE semantics: swap your set for this payload."),
  uuid: _(),
  session_id: o()
}).describe("The full set of live background tasks, emitted whenever membership changes (start, completion, kill, a foreground agent being backgrounded) or an entry's `ambient` flag or `parent_task_id` changes. A level signal, unlike the task_started/task_notification edge bookends: consumers that only need 'is background work running' should replace their set with each payload rather than pairing edges, so a missed bookend cannot wedge a stale running indicator. Ordering relative to the bookends for the same transition is unspecified (in practice a task that starts in the background joins the level before its task_started, and a finishing task leaves it after its task_updated and task_notification), so do not correlate it with the edge stream. The level is per-process: nothing is emitted at startup, so consumers must reset to the empty set whenever the session's CLI process (re)starts and let the next membership change repopulate it. A host that re-initializes an already-running process (a repeated `initialize` control request, e.g. after reconnecting) is sent a snapshot of the current set right behind the success response to that request, even when it is empty, so it need not wait for a change; CLIs that predate this send nothing there.")), gF = p(() => u({
  type: A("system"),
  subtype: A("feedback_draft_queued"),
  draft_id: o().describe("UUID of the on-disk draft file under ~/.claude/feedback/drafts/ \u2014 the identity for discard and submit."),
  draft_type: U([ "bug", "idea", "missing_capability" ]),
  title: o().describe("Sanitized one-line summary from the SendFeedback tool call."),
  details_preview: o().describe("First ~200 chars of the sanitized details, for the host UI's three-line card preview. The full draft stays on disk and is read when the user opens the review form."),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted by the SendFeedback tool after it writes a local draft to ~/.claude/feedback/drafts/, so a connected host UI can surface a review card without polling the filesystem. Carries only the card's display fields; nothing is sent anywhere without the user's explicit action on the review form.")), fF = p(() => u({
  type: A("system"),
  subtype: A("session_state_changed"),
  state: U([ "idle", "running", "requires_action" ]),
  uuid: _(),
  session_id: o()
}).describe("Mirrors notifySessionStateChanged. 'idle' fires after heldBackResult flushes and the bg-agent do-while exits \u2014 authoritative turn-over signal.")), bF = p(() => u({
  type: A("system"),
  subtype: A("session_title_changed"),
  title: o().describe("The session's current name. Control, bidirectional and zero-width characters are replaced with single spaces, the ends are trimmed, and the name is at most 200 Unicode code points. When another session already has the name, a suffix can make it unique."),
  uuid: _(),
  session_id: o()
}).describe("@internal The session's name, for a host that shows it, such as an IDE editor tab. A headless (print mode) session sends it at startup when the session already has a name, and again after each change to the name (not an AI-generated title), including a rename the host itself sent with `rename_session`. A name that another process writes to the transcript arrives when this process next reads the end of its transcript: after about 32 KB of its own transcript writes, or at a compaction. A cleared name is not sent. The same name can arrive more than once, for example when it is set again, so a host should treat a repeated name as no change. The frame can arrive before the system/init message that first names its session_id, for example at startup or after /clear. A host that learns the session id from system/init can hold the name until then.")), EF = p(() => u({
  type: A("system"),
  subtype: A("worker_shutting_down"),
  reason: o().describe("Short snake_case reason set by the host CLI (not user input), e.g. 'host_exit', 'remote_control_disabled'."),
  uuid: _(),
  session_id: o()
}).describe("Emitted by the bridge on opt-in graceful worker teardown (only when the teardown caller supplied a reason), before the heartbeat stops, so remote clients can show why the worker went away instead of waiting for heartbeat timeout. Absence is NOT a dead-host signal: handoffs (/update, /teleport, respawn), auto-disable, mode transitions, and internal fatal-error paths emit nothing by design. A dead host (battery, OOM, kill -9) never reaches teardown and never sends this either. NOTE: this event lands in the durable per-session event stream \u2014 a session that is later resumed may carry historical instances mid-stream. Clients MUST treat it as a live-tail signal only (honored when no further activity follows), not a one-shot session-lifetime fact.")), SF = p(() => u({
  type: A("system"),
  subtype: A("turn_handoff_available"),
  v: A(1),
  tools: T(o()),
  worker_epoch: v(),
  uuid: _(),
  session_id: o(),
  staged_files: A(!0).optional().describe("@internal Present, and true, when this worker starts a handed-off turn's calls only after every stage_file control request it received earlier has finished or failed, or a wait limit has passed; a worker that omits it may start them while files are still downloading. Exception: a request with filestore_path set (a synced file) is not waited for, so a call that names that file may start before it is synced."),
  no_query_first: A(!0).optional().describe("@internal True when user messages with shouldQuery false that reach this worker before a turn_handoff request are appended, and acknowledged, before the handed-off turn produces any output. Exception: a request that continues a turn whose leading lines an earlier request appended; that turn goes first. A worker that omits it may run the turn first."),
  shared_message_id: A(!0).optional().describe("@internal True when this worker accepts a turn_handoff request in which an assistant message repeats the message id of the assistant message before it, as the messages member of that request describes. A worker that omits it refuses such a request (invalid_handoff), so a client gives each message an id of its own there."),
  relay_marker: A(!0).optional().describe("@internal Present, and true, only when this worker uses the relay_marker member of a turn_handoff request; a client sends that member to no other worker."),
  home_files: A(!0).optional().describe("@internal Present, and true, only on a worker that takes a stage_file control request whose mount_path is /uploads/.home/<path> as a file for /home/claude/<path>: it writes the file there, answers ok with a noop (already_present, path_occupied, refused_name, home_files_off, unchecked_announcement, resent_announcement) and writes nothing, or answers an error. Any other worker treats that path as an ordinary upload."),
  file_names: A(!0).optional().describe("@internal Present, and true, only when this worker uses the file_names member of a turn_handoff request; a client sends that member to no other worker."),
  carried_writes: A(!0).optional().describe(`@internal Present, and true, only on a worker that writes the files of the Write calls a turn_handoff request brings already answered, where their paths are under /home/claude. Before it appends a turn that has calls to run, it writes each such call's content to its path, replacing nothing. If it cannot write them all, it appends and runs nothing: the request is refused with an error that starts "invalid_handoff: carried_writes_", or it is accepted and the turn ends in a result with num_turns 0. Any other worker writes no file for these calls.`),
  hydrates_carried_lines: A(!0).optional().describe(`@internal Present, and true, only on a worker that rebuilt the conversation from the session's stored transcript before it read any request, and would not have started without it. A client may send this worker again a turn_handoff request that an earlier worker accepted, if the request names no calls (tool_use_ids empty), is not stopped, and its messages hold no tool call. A request whose turn had not ended when an earlier worker with this key stopped is left unacknowledged, so the session service sends it to this worker by itself; a second request for the same turn is answered "duplicate" while the first waits or runs. The worker appends only the messages of the turn that its conversation lacks and, once the store has confirmed every message of the turn, sends the turn's last message back as an assistant event (the echo); a turn it already holds whole is echoed on the same condition. The request can still be accepted, or refused ("invalid_handoff:"), with no echo, and the turn may then not be stored. That happens, for example, when the conversation has moved on past the part of the turn it holds, when a rewind has removed the turn, when a compaction has summarised part of it (or all of it, if the compaction was this worker's own), when a Stop clears the queue first, or when the store does not confirm the messages. A request sent again waits again for messages not yet confirmed. When a delivery finds that the store refused a message of the turn, it sends no echo and removes the turn from the conversation, and the same request sent again to that worker gets no echo. If another row has followed the turn, the turn stays, also with no echo. Exception: after 512 later refused rows the worker forgets a refusal and reads the message as confirmed. Confirmed means that the store answered the upload with success. A turn that an earlier worker's compaction summarised whole is appended a second time. The key promises nothing for a turn that holds a tool call, or whose first message is stored with no answer but with another row behind it (a hook's output, say): the worker may already have continued such a turn itself when it started. A worker without the key may have started with none of the turn's messages.`)
}).describe("@internal Emitted once by a cloud worker that accepts the turn_handoff control request, after it registers, carrying what it wrote to external_metadata.turn_handoff: the version, the tools whose calls it would accept, the worker life (worker_epoch) announcing it, whether handed-off calls wait for files still being staged (staged_files), whether user messages that make no model call are appended before a handed-off turn (no_query_first), whether two assistant messages of a turn may share a message id (shared_message_id), and relay_marker, home_files, file_names, carried_writes and hydrates_carried_lines when set. Lets a session client learn the capability from the event stream instead of reading worker state. Durable in the stream: a reader keeps the entry with the newest worker_epoch it has seen and ignores older ones; a worker life that does not accept turn_handoff emits nothing (its registration writes turn_handoff: null).")), TF = p(() => u({
  type: A("system"),
  subtype: A("ui_invalidate"),
  event: A("ui.render").describe("@internal The render event whose version moved; the engine versions `ui.render` as one event, so no component or instance is named."),
  prompts_screened: A(!0).optional().describe("@internal Present while a mod is hooked on `prompt.submit`: what the `prompts_screened_v1` capability says on `system/init`, said as soon as a plugin load or reload makes it so. Absent says nothing: the next `system/init` does."),
  instances: T(u({
    surface: o().describe("@internal The surface that drew the instance."),
    component: o().describe("@internal The component of the instance."),
    instance_id: o().describe("@internal The engine's requestId of the instance, as the ui_render that drew it named it.")
  })).optional().describe("@internal Present when a plugin wrote state (`$.state.set`) that these instances read while they were drawn, or a `Client` drawn in them failed and its plugin heard it (`ui.fault`), and nothing else moved: only they are stale, and the surface may re-ask them alone. Absent, every mounted instance may be stale, as before. A surface that ignores the field re-asks everything and stays correct."),
  uuid: _(),
  session_id: o()
}).describe('@internal Fire-and-forget push from the hooks engine when a plugin called `$.ui.invalidate("ui.render")` or a plugin loaded or reloaded: every tree a remote surface drew through ui_render may be stale. The surface re-asks each mounted instance; the engine dedups the evaluations. Bumps from one plugin fold to at most one per 100 ms. With `instances`, a state write or a `Client` that failed made only those stale.')), wF = p(() => u({
  type: A("system"),
  subtype: A("ui_log"),
  plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."),
  text: o().describe("@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push from a headless session for one `$.ui.log(text)` line: what the REPL appends to its transcript as a dim notice under the plugin's name. Not sent to the model. Lines are not counted across the session: a plugin's lines are the plugin's to write, however long the session runs; ones logged before the stream opened are delivered first, in order.")), AF = p(() => u({
  type: A("system"),
  subtype: A("ui_toast"),
  plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."),
  text: o().describe("@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
  timeout_ms: v().int().describe("@internal How long the REPL would keep it on the notification bar: the plugin's `timeoutMs`, or the engine's default (4000)."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push from a headless session for one `$.ui.toast(text)`: what the REPL shows on the notification bar under the prompt for a few seconds, under the plugin's name. Be ready for a plugin's toasts at no fixed rate; nothing counts how many a plugin has shown.")), yF = p(() => u({
  type: A("system"),
  subtype: A("ui_status"),
  plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable). One status line per plugin."),
  text: o().nullable().describe("@internal The plugin's pinned line, replacing its previous one; null removes it. Be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push from a headless session for one `$.ui.status(text)`: the line the REPL pins under the prompt beside the engine's own notices until the plugin's next call replaces or clears it.")), RF = /^[A-Za-z0-9_-]{1,64}$/, _e = p(() => o().regex(RF).describe("@internal A pane's id as the plugin opened it (`$.ui.open({ id })`): 1 to 64 of letters, digits, `_`, `-`. What a ui_render for `Pane` carries as `instance_id`.")), vF = p(() => u({
  id: _e(),
  title: o().describe("@internal The pane's tab label: the `title` its latest open gave, else its id. Plugin-authored text the engine bounded and freed of control characters: draw it as a text node, never as markup."),
  plugin: o().describe("@internal The registry name of the plugin that opened it, as the engine knows it; a `$.ui.scroll` or `$.ui.focus` of the pane is that plugin's alone."),
  close_on_escape: A(!0).optional().describe("@internal Escape while the pane holds the keyboard, or at an idle empty composer, closes it as the person's close does (send ui_close); absent, Escape only returns the keyboard."),
  hold_toasts: A(!0).optional().describe("@internal The surface holds its transient toasts while this pane is the one shown, and shows them once it closes."),
  rows: v().int().optional().describe("@internal The body rows its content asked for while seated inline; a request the person's own sizing overrides."),
  columns: v().int().optional().describe("@internal The body columns its content asked for while docked; a request the person's own sizing overrides.")
}).describe("@internal One placed pane as the engine holds it (plugins/functionHooks/panes/): which, its tab, its opener, and the manners and size its latest open asked for.")), ho = p(() => u({
  panes: T(vF()).describe("@internal The placed open panes in open order (an open appends, a close removes); a pane waiting unplaced is not listed. The surface draws one container for them: tabs when several, the shown one visible."),
  shown_id: _e().nullable().describe("@internal The pane the surface shows: the last opened or focused, never displacing one the person holds; null with none open."),
  focused_id: _e().nullable().describe("@internal The pane the person gave the keyboard (ui_pane_focus); null while the composer has it."),
  focus_requested_id: _e().nullable().describe("@internal A standing `$.ui.open({ focus: true })` the surface has yet to judge: honour it (focus the pane, send ui_pane_focus with its id) only while the composer is empty and idle and no dialog is up, else refuse it (ui_pane_focus with null).")
}).describe("@internal The session's panes as a remote surface draws them: what ui_panes answers and the ui_panes push carries.")), CF = p(() => ho().extend({
  type: A("system"),
  subtype: A("ui_panes"),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push from a headless session whenever the pane roster a remote surface draws changes: a plugin opened, retitled or closed a pane, the person showed, focused or closed one, a placing client attached. Deduplicated: an unchanged roster is not pushed. A pane opened before the stream armed produces none; read the roster with ui_panes on mount.")), zF = p(() => u({
  type: A("system"),
  subtype: A("ui_scroll"),
  client_id: o().describe("@internal The client drawing the site, as it attached."),
  component: U([ "Pane", "AbovePrompt" ]).describe("@internal Which site: a pane's body or the band."),
  instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
  offset: v().int().describe("@internal The first content row the window is to show, 0 at the top, clamped to the tree as the surface last reported it."),
  follow_end: M().optional().describe("@internal True: keep the window on the tree's last rows through the draws to come, until the person or a plugin next moves it."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push when a plugin's `$.ui.scroll` (through the `ui.scroll` chain) moved the window of a site a remote surface draws: the surface scrolls the site's body there. The person's own scrolls (ui_scroll requests) are never pushed back.")), kF = p(() => u({
  type: A("system"),
  subtype: A("ui_focus"),
  client_id: o().describe("@internal The client drawing the site, as it attached."),
  component: U([ "Pane", "AbovePrompt" ]).describe("@internal Which site: a pane's body or the band."),
  instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
  plugin: o().describe("@internal Whose element takes the ring: its `press.plugin`."),
  key: o().describe("@internal The element's `props.key`, as ui.press names it."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fire-and-forget push when a plugin's `$.ui.focus` (through the `ui.focus` chain) moved the focus ring of a site a remote surface draws onto one of its Buttons, Inputs or Selects: the surface focuses that element if it still draws it. The person's own moves (ui_focus requests) are never pushed back.")), OF = p(() => u({
  type: A("system"),
  subtype: A("commands_changed"),
  commands: T(Ut()),
  uuid: _(),
  session_id: o()
}).describe("Fire-and-forget push of the full slash-command list after a mid-session change (e.g. skills discovered dynamically as the agent works in a subdirectory). Clients should REPLACE their cached command list with this payload; supportedCommands() tracks the latest push, so a re-fetch returns the same fresh list.")), NF = p(() => u({
  type: A("system"),
  subtype: A("notification"),
  key: o(),
  text: o(),
  priority: U([ "low", "medium", "high", "immediate" ]),
  color: o().optional(),
  timeout_ms: v().int().optional(),
  uuid: _(),
  session_id: o()
}).describe("Loop-side text notification. Mirrors the interactive REPL notification queue (key/priority/timeout). JSX notifications are not emitted on this channel.")), IF = p(() => u({
  type: A("system"),
  subtype: A("task_progress"),
  task_id: o(),
  run_id: o().optional().describe(Vt),
  tool_use_id: o().optional(),
  description: o(),
  subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
  usage: u({
    total_tokens: v().int(),
    tool_uses: v().int(),
    duration_ms: v().int()
  }),
  last_tool_name: o().optional(),
  summary: o().optional().describe("A one-line status for the task's row. For a local_agent task it is the model-generated progress summary (only when the agentProgressSummaries option is on); for a backgrounded mcp_task it is the MCP server's own bounded status message, emitted once per change without any option. Render it when present regardless of task type."),
  uuid: _(),
  session_id: o()
})), PF = p(() => u({
  type: A("system"),
  subtype: A("thinking_tokens"),
  estimated_tokens: v().int(),
  estimated_tokens_delta: v().int(),
  user_message_uuid: o().optional().describe("Client uuid of the user message that triggered this turn (submitMessage options.uuid), stamped on every thinking_tokens frame of a headless (stream-json / Agent SDK) turn so a consumer can attribute thinking progress to the send it answers before any reply frame arrives. On a synthetic/scheduled (meta) turn it names the last user message folded into the turn so far once one has been, else the turn's own uuid when the host vouches it is the client event's own (delivered content such as a Slack owner ping). Absent on turns that neither had a client uuid nor folded a user message in, on Remote Control (interactive terminal) sessions, and from older producers."),
  uuid: _(),
  session_id: o()
}).describe("Live thinking-token estimate, digested from thinking_delta.estimated_tokens during the redacted-thinking phase (where the API otherwise streams only pings). estimated_tokens is the running total for the current thinking block; estimated_tokens_delta is the increment carried by this frame. Approximate progress for spinners/pills, not the authoritative billed output_tokens.")), MF = p(() => u({
  type: A("tool_use_summary"),
  summary: o(),
  preceding_tool_use_ids: T(o()),
  uuid: _(),
  session_id: o(),
  timestamp: o().optional().describe("@internal ISO timestamp when the summary was created on the originating process. From internal ToolUseSummaryMessage.timestamp.")
})), DF = p(() => u({
  type: A("system"),
  subtype: A("memory_recall"),
  mode: U([ "select", "synthesize" ]).describe("How memories were surfaced: 'select' returns full file bodies chosen by the parallel selector; 'synthesize' returns a Sonnet-authored paragraph distilled from many tiny memories."),
  memories: T(u({
    path: o().describe("Absolute path to the memory file, a synthesis sentinel of the form `<synthesis:DIR>` when mode is 'synthesize', or an https URL when scope is 'organization'."),
    scope: U([ "personal", "team", "organization" ]),
    content: o().optional().describe("The surfaced memory body. Always present for 'synthesize' mode and 'organization' scope (neither has an on-disk path to lazy-load from); absent for file-backed 'select' entries (renderers lazy-load from path).")
  })),
  uuid: _(),
  session_id: o()
}).describe('Emitted when the memory recall supervisor surfaces relevant memories into the turn. Mirrors the CLI relevant_memories attachment so SDK renderers can show "Recalled from memory" inline.')), xF = p(() => u({
  type: A("system"),
  subtype: A("elicitation_complete"),
  mcp_server_name: o(),
  elicitation_id: o(),
  uuid: _(),
  session_id: o()
}).describe("Emitted when an MCP server confirms that a URL-mode elicitation is complete.")), LF = p(() => u({
  type: A("system"),
  subtype: A("permission_denied"),
  tool_name: o(),
  tool_use_id: o(),
  agent_id: o().optional().describe("Subagent ID when the denied tool call originated inside a subagent. Mirrors can_use_tool for host-side routing."),
  decision_reason_type: o().optional().describe("Discriminator from PermissionDecisionReason (e.g. 'classifier', 'asyncAgent', 'mode', 'rule')."),
  decision_reason_code: U(sqn).optional().describe("@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged): 'outside_reads_blocked' (permissions.blockReadsOutsideWorkingDirectories refused the path), 'memory_paused' (memory is paused for the session), 'classifier_transcript_too_long' (the auto-mode classifier's transcript exceeded its context window). Absent for every other reason; new values are additive."),
  decision_reason: o().optional().describe("Human-readable reason from the deciding component, when available."),
  message: o().describe("The rejection message returned to the model in the tool_result."),
  uuid: _(),
  session_id: o()
}).describe("Emitted when a tool call is auto-denied without an interactive permission prompt (e.g. auto-mode classifier, dontAsk mode, headless-agent auto-deny, or a deny rule). With a permission prompt surface (stdio/SDK canUseTool), the 'ask' path surfaces via a can_use_tool control_request and this event covers the 'deny' short-circuit. Without one (bare -p / SDK query() with no canUseTool), 'ask' decisions are terminal, so this event also covers those implicit denials. Best-effort advisory: in rare races a denial can book without a frame or a frame can lack a booking twin \u2014 result.permission_denials is the authoritative record. Denials that resolve before canUseTool runs \u2014 PreToolUse hook denies, deny-rule overrides of hook allow/ask decisions, and file-tool calls (Read, Edit, Write) refused by a path-scoped deny rule \u2014 are not covered here, and neither is the MCP --permission-prompt-tool surface (the prompt tool is the host there).")), UF = p(() => u({
  type: A("system"),
  subtype: A("permission_check_status"),
  tool_use_id: o(),
  agent_id: o().optional().describe("Subagent ID when the tool call originated inside a subagent, as on permission_denied."),
  status: U([ "checking", "done" ]).describe("'checking': the call has waited about four seconds on its check and is still waiting. 'done': that wait is over."),
  uuid: _(),
  session_id: o()
}).describe("@internal A tool call has been waiting on its automatic permission check (the auto-mode classifier) for longer than usual. It lets a host say that the step is being checked, where it would otherwise show a silent pause that looks like a running tool. Most checks answer within about four seconds and send nothing. The wait can include the rest of the model's streaming reply, or a dialog the host is showing about the check: prefer those indicators. Every 'checking' is followed by a 'done' for the same tool_use_id. 'done' does not say whether the call was allowed: the tool's result, permission_denied or a can_use_tool request does. One call can send more than one pair. Display-only and best-effort: a frame can be lost, so also stop showing it at any other frame for this tool_use_id or at the end of the turn. Emitted on the output stream of -p/SDK sessions.")), VF = p(() => u({
  type: A("prompt_suggestion"),
  suggestion: o(),
  uuid: _(),
  session_id: o()
}).describe("Predicted next user prompt, emitted after each turn when promptSuggestions is enabled.")), SJ = p(() => u({
  type: A("attachment"),
  attachment: oe().describe("Internal Attachment discriminated union (at-mentioned files, IDE selections, pasted images, structured output, deferred tool-use). Wire shape pending a dedicated SDKAttachment schema."),
  timestamp: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when the engine yields an AttachmentMessage into the turn stream. Carries user-attached content (at-mentioned files, IDE selections, pasted media) and loop-attached data (structured output, deferred tool-use payloads). SDKResultMessage.structured_output and .deferred_tool_use are derived from these frames. From internal QueryEvent 'attachment'.")), TJ = p(() => u({
  type: A("tombstone"),
  message: oe().describe("The internal Message being tombstoned. Wire shape pending a dedicated schema."),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when a previously-yielded message is superseded or removed from the transcript (e.g., streaming\u2192non-streaming fallback removes a partial orphan). Consumers that render or persist the stream should remove the referenced message. From internal QueryEvent 'tombstone'.")), jF = p(() => u({
  type: A("conversation_reset"),
  new_conversation_id: _(),
  uuid: _(),
  session_id: o(),
  trigger: U([ "clear", "plan_mode_exit", "fresh_session", "onboarding" ]).optional().describe("What discarded the conversation: 'clear' is the /clear command (or its /reset and /new aliases), 'plan_mode_exit' is leaving plan mode with the clear-context option, 'fresh_session' is a flow that starts a fresh session to implement an approved plan, 'onboarding' is an onboarding flow re-run inside an existing session. Informational: a consumer should reset on every conversation_reset frame whatever this says, and treat an absent (older emitter) or unrecognized value as an unspecified reset."),
  user_message_uuid: o().optional().describe("Only with trigger 'clear': the uuid of the user message whose /clear was executed (the client's own uuid for that message when it came from a Remote Control or stream-json client, otherwise the uuid the CLI assigned to the typed command). Lets a consumer match this frame to a /clear message it has already seen, wiping once whichever arrives first, instead of relying on arrival order. Absent for the other triggers, when that uuid is not a canonical UUID, and from older emitters."),
  timestamp: o().optional().describe('When the reset happened, as an ISO 8601 string in UTC read from the clock of the process that performed it. Meant for display, such as the time on a "conversation cleared" row, not for ordering frames. Absent from older emitters; a consumer can fall back to the time it received the frame.')
}).describe("Emitted by /clear, plan-mode exit, fresh-session, and onboarding flows. The surface should mount a fresh transcript under new_conversation_id and reset any cached session title. From internal QueryEvent 'conversation_reset'.")), wJ = p(() => u({
  type: A("api_metrics"),
  event: Kr("type", [ u({
    type: A("start"),
    ttft_ms: v().int(),
    id: o().optional(),
    message_id: o().optional()
  }), u({
    type: A("end"),
    output_tokens: v().int(),
    id: o().optional()
  }), u({
    type: A("content_block_start"),
    id: o().optional()
  }), u({
    type: A("thinking_progress"),
    estimated_tokens_delta: v().int(),
    id: o().optional()
  }), u({
    type: A("thinking_signature"),
    chars: v().int(),
    id: o().optional()
  }) ]).describe("Per-API-call OTPS/TTFT lifecycle event. Optional id correlates parallel subagent start/end; serial callers omit it."),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when a subagent's API call reports TTFT or output_tokens for OTPS (output-tokens-per-second) metering. From internal QueryEvent 'api_metrics' (ApiMetricsLifecycleEvent).")), AJ = p(() => u({
  type: A("os_notification"),
  message: o(),
  notification_type: o(),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when a tool (PushNotificationTool, the Computer Use wrapper) or turn-end cleanup requests a native OS notification. The surface dispatches to its platform notification channel (iTerm2/Kitty/Ghostty/bell in the terminal; native IPC for desktop/IDE). From internal QueryEvent 'os_notification'.")), yJ = p(() => u({
  type: A("apply_flag_settings"),
  settings: ue(o(), oe()).describe("Shallow-merge flag-settings patch \u2014 same shape as SDKControlApplyFlagSettingsRequest.settings."),
  uuid: _(),
  session_id: o()
}).describe("@internal Output-direction counterpart to SDKControlApplyFlagSettingsRequest. Emitted when slash commands that toggle flag settings request a batched write that the surface applies to its AppState. From internal QueryEvent 'apply_flag_settings'.")), qF = p(() => u({
  type: A("command_lifecycle"),
  command_uuid: o().describe("The queued command's uuid \u2014 the client-supplied uuid on the inbound message. Commands enqueued without a uuid (e.g. the one-shot `-p \"prompt\"` string path) emit no lifecycle events. Renamed from Engine 'uuid' to avoid collision with the universal message uuid field."),
  state: U([ "queued", "started", "completed", "cancelled", "discarded", "refused" ]),
  ran_ahead: A(!0).optional().describe("@internal Only on a repeated 'queued' frame, written only to the VS Code panel: the plugin hooks of this `immediate` command, typed during a turn, have run and answered ahead of its turn. The command is still queued, and its own turn prints the answer."),
  uuid: _(),
  session_id: o()
}).describe("@internal Fate of a queued command (slash command or queued user prompt). 'queued' when the inbound message enters the command queue; 'started' when it drains into a turn; then exactly one terminal state: 'completed' \u2014 the turn that consumed it ended cleanly; 'cancelled' \u2014 removed by cancel_async_message (the host's own, or \u2014 with Remote Control enabled (remote_control) \u2014 a remote client withdrawing a prompt that a remote client queued: such a uuid was never sent by the host, so there is nothing to resend and the frame is informational), swept by an interrupt with cancel_queued:true, caught by a pending cancel just before dispatch, or consumed into a turn that was aborted (interrupt) or died on a hard failure (model_error, prompt_too_long, ...) \u2014 cancelled-over-completed is deliberate dup-over-loss for exactly-once resenders, so a fold answered earlier in a failed turn may be re-sent (a per-fold ledger refinement is tracked separately) \u2014 but resenders must not blindly resend on 'cancelled': user-requested removals arrive as the same state, so correlate against your own cancel_async_message responses AND against any interrupt receipt's `cancelled` list (interrupt_cancel_queued_v1) and resend only cancels neither source accounts for; 'discarded' \u2014 the session ended (end_session) with the command still queued, or with a peer message still held by the receive-side policy (not preceded by 'queued' then); 'refused' \u2014 declined by the session's receive-side policy before entering the queue (outright, or after being held): not preceded by 'queued', and it will not run in this session. Known gap: folds consumed by turns ending via max_turns / hook_stopped / tool_deferred / background_requested report 'completed' even though their content may only be answered on continuation/resume. 'completed' means the consuming turn ended, not that the result frame was delivered. Ordering relative to the result frame is per-path: a command that starts a fresh turn emits 'completed' AFTER that turn's result frame (later still when the result is held back for background tasks); a command folded into an already-in-flight turn emits 'completed' BEFORE that turn's result frame. Not a strict pairing: a terminal state may arrive for a command_uuid that never emitted 'started' (control-request ACKs, duplicate deliveries); internally-enqueued commands (cron triggers, teammate shutdown prompts, deferred-turn resume) mint a fresh uuid at enqueue and emit started/terminal without 'queued'; a turn that fails by throwing can leave 'started' without a terminal state; and a peer message the queue's own admission guard drops after acceptance (rate limit, duplicate collapse, loop guard, queued-peer cap) currently leaves 'queued' without a terminal state \u2014 on process exit a wrapper should synthesize 'discarded' for uuids it has not seen reach a terminal state. The exactly-one-terminal guarantee is per worker process, not per uuid lifetime: after CCR redelivery a 'discarded' uuid legitimately re-emits queued\u2192\u2026\u2192terminal on the next worker. Emitted on the stdout stream in -p/SDK sessions; remote transports (mobile/desktop bridge) receive the equivalent signal via delivery ACKs instead. A host driving a cloud-hosted session through the headless `--cloud` client also receives 'cancelled' (and only that state) after its interrupt with cancel_queued:true, synthesized from the session's receipt: for a uuid the host sent and did not cancel itself it means the cloud session dropped that command \u2014 it will not run; do not resend it; the frames follow the interrupt's success response, are not ordered against the interrupted turn's result, and unknown uuids (another client's prompt) may appear. From internal QueryEvent 'command_lifecycle'.")), rAo = p(() => u({
  type: A("system"),
  subtype: A("code_change_published"),
  provider: o().describe("Forge classification derived from the URL's shape: 'github', 'github-enterprise', 'gitlab', or 'bitbucket' for pull/merge requests, 'gerrit' for a change on a googlesource.com Gerrit host, and other values for other review systems in internal builds. A naming hint, not host trust \u2014 an unrecognized host with a PR-shaped path classifies as 'github-enterprise'. Open set; treat an unknown value as a valid provider you don't recognize, never as an error."),
  url: o().describe("Web URL of the published change, as printed in the command output. Unverified \u2014 do not route authenticated requests to this host without your own validation."),
  repo: o().describe("Repository path from the URL (owner/name on GitHub; may carry more segments on GitLab). Shape-validated (forge path segments only; exactly owner/name except on GitLab) but not verified against any forge \u2014 on GitLab a leading segment can be a nested group, so never interpret it as a host."),
  identifier: o().describe("Provider-native change identifier \u2014 the PR/MR (or other change) number as a string."),
  action: U([ "created", "edited", "merged", "commented", "closed", "reopened", "ready", "draft", "auto-merge-enabled", "auto-merge-disabled", "pushed", "checked-out", "started" ]).optional().describe("What the session did that produced this announcement: the flag-aware gh pr verb it ran ('created', 'closed', 'auto-merge-enabled', \u2026), 'pushed' for a push to a branch that has a PR (or a push that opened or updated a Gerrit change), 'checked-out' for gh pr checkout, or 'started' for the open change on the branch the session's working directory was on when a Claude Desktop session started or resumed (sent once, at the first initialize) \u2014 always sent by current producers, absent only from older ones."),
  branch: o().optional().describe("The session's working branch when it produced the change. Sent for providers whose changes have no head branch of their own ('gerrit'), so a host can place the change on that checkout, and with 'created' on any provider: the branch the create was opened from (its --head / --source-branch flag, else the working branch), so a host can show the new change before its own forge lookup answers. Absent otherwise."),
  uuid: _(),
  session_id: o()
}).describe("@internal A code change from this session went out for review (a pull/merge request, or another provider's change in internal builds). Fires when the harness sees the change published or links the session to a PR \u2014 on creation, and also when the session contributes to an existing one (gh pr edit/close/ready, gh pr checkout, a push to a branch that has an open PR) \u2014 so bind on every event, not just the first; re-emission for the same URL is possible and idempotent. Provenance: values are scraped from the command's captured output (the last PR-shaped URL printed) or a gh pr view lookup. Captured output is not only the forge CLI's own text \u2014 hook output or files printed by the same command can contribute \u2014 so treat the fields as a binding hint: display them, but verify against the forge with your own credential-scoped lookup before routing authenticated requests or trusting the host. Best-effort, not exhaustive: a crash before the link, gh printing no URL to a piped capture (gh pr merge), or an unrecognized forge means no event \u2014 keep your provider-API lookup as the source of truth and treat this as the trigger.")), oAo = p(() => u({
  type: A("system"),
  subtype: A("vcs_state_changed"),
  kind: U([ "commit", "push", "merge", "rebase" ]).describe("What class of mutation was observed. New kinds may be added \u2014 treat an unrecognized kind exactly like a recognized one (something changed, go look)."),
  cwd: o().describe("The directory the shell was in when the command finished (so an inner cd is reflected; a git -C target is not) \u2014 a hint about where to look, never proof of what moved: confirm against the repository itself."),
  branch: o().optional().describe("The branch a commit landed on (from the commit summary line git prints per commit) or a push updated (from the ref-update line git prints per pushed ref, e.g. `HEAD -> other`). Commit and push events carry it; a command that pushed several branches emits one push event per branch. A best-effort hint: absent whenever attribution is uncertain (a push whose output was redirected still emits, with no branch; a push that also updated a ref whose name could not be carried emits a nameless event beside the named ones), and never a required key."),
  uuid: _(),
  session_id: o()
}).describe("@internal A harness-observed shell command mutated repository state (git commit/cherry-pick, push, merge, rebase \u2014 dry runs excluded). A cache-invalidation signal with a deliberately minimal payload: beyond classification it carries the branch acted on and the directory the shell finished in, both hints about where to look, so consumers still re-read state (head, PR status) from the repository instead of decoding the event. Derived from the same detection as the tool result's structured gitOperation data, so the two agree on what happened; only a push's `branch` is attributed more strictly here (from the push's own output section) than in that data. A compound command can emit more than one kind (a merge and a rebase in one command collapse to the latter), and a push of several branches emits one push event per branch; coalesce freely. Best-effort, not exhaustive: only foreground mutations run through the Bash/PowerShell tools are observed \u2014 a backgrounded command whose confirming output had not printed at capture time emits nothing. A foreground push whose ref lines were redirected or silenced still emits, on the invoking command's zero exit code alone (so a compound that swallows a failed push's code also emits; the event is a prompt to look, never a claim).")), GF = p(() => u({
  type: A("system"),
  subtype: A("dev_intent"),
  kind: U(Cxr).describe("What kind of development the evidence shows. 'ios_app' from the conversation (in the main thread or a subagent): Claude ran one of Apple's tools for an iOS SDK, an iOS destination or the Simulator (xcodebuild, xcrun or swift for an iOS SDK, destination or target, simctl, devicectl), wrote iOS source into a Swift or Objective-C file (import UIKit, an import of a UIKit header, or an .iOS platform in a package manifest), or wrote or read build settings that name an iOS SDK or target iPhone or iPad; no Swift edit is needed for these. A command counts only where the shell would run it, so one that is quoted, in a here-document or in a comment does not. Weaker evidence (an iOS deployment target, any other TARGETED_DEVICE_FAMILY setting, iOS source written into another kind of file, an iOS tool named inside a quoted script) counts only beside a .swift file that Claude wrote or edited. A macOS-only app or server-side Swift package never qualifies. 'ios_app' from the project scan: the session's git repository has an Xcode project, at its root or in its ios/, iosApp/, macos/ or apple/ folder, whose build settings name an iOS SDK or target iPhone or iPad. 'android_app' from the conversation: Claude wrote or edited a .kt, .kts or .java file and something it wrote, read, or ran is Android-specific (a manifest, the Android Gradle plugin, an android.* import, adb, a Gradle variant task such as assembleDebug, the emulator), so a Kotlin server or a multiplatform module with no Android target never qualifies. 'android_app' from the project scan: the session's git repository has an AndroidManifest.xml, or the Android Gradle plugin in a build script or version catalog, at its root or in its android/ folder. More kinds will be added; ignore a kind you do not recognize."),
  trigger: U(IA).optional().describe("The evidence the detection fired on, for a host's own analytics. From the conversation, it is the first platform-specific evidence seen, whichever order it and a file edit the rule required arrived in; an 'ios_app' detection with no Swift edit names the first evidence that is enough alone. 'ios_app': 'uikit_import' (import UIKit or .iOS( in text Claude wrote), 'xcode_project' (iOS build settings written, or seen in a tool result such as a pbxproj or xcconfig read), 'ios_command' (an iOS SDK, an iOS destination or target, or the Simulator's tools, in a command Claude ran). 'android_app': 'android_import' (import android. in text Claude wrote), 'android_manifest' (a manifest path or body written, or seen in a tool result), 'gradle_plugin' (the Android Gradle plugin written, or seen in a tool result), 'android_command' (adb, the emulator, sdkmanager, avdmanager, react-native run-android or a Gradle variant task). The edit values 'swift_edit', 'kotlin_edit' and 'java_edit' are reserved for rules that need no other evidence; no rule sends them yet. 'project_scan', for any kind: a scan of the session's git repository. The CLI scans when the process starts and sends the result. After each conversation_reset, it sends the latest scan's result again. A conversation whose scan did not find every kind scans again, uncached, when its first message arrives, so a kind that scan missed can come after that message. A client that needs to tell project evidence from conversation evidence checks for 'project_scan'. More values will be added; ignore one you do not recognize. Absent from CLI versions that predate the field, which send only conversation evidence."),
  uuid: _(),
  session_id: o()
}).describe("@internal The conversation, or the git repository it runs in, shows a known kind of development work, for hosts that key tooling on it (Claude Code Desktop opens its iOS Simulator entry point on ios_app). Sent with trigger as its only other payload. Per conversation per process, each kind is sent at most once from conversation evidence and at most once from the project scan. Conversation evidence is sent when it first completes, or at startup when a resumed conversation already has it. Project evidence comes from a CLI process in print mode (-p), which is how the Agent SDK and Claude Code Desktop start it. It is sent at startup, after each conversation_reset, and at the first message of a conversation whose earlier scan did not find every kind. Either can arrive before system/init. A rewind or compaction never retracts it and only a conversation_reset starts over. Treat each kind as a sticky fact about the conversation: a client that needs only the kind can ignore repeats, and one that needs to know what set it off reads trigger.")), BF = p(() => u({
  type: A("system"),
  subtype: A("turn_preempted"),
  reason: o().describe("Why the turn was stopped. 'rapid_followup': the user's next message arrived before the running turn showed any output. More reasons may be added; treat an unknown one the same way."),
  preempted_by_uuid: o().describe("The client-supplied uuid of the queued user message the turn was stopped for. It runs next, together with any messages queued behind it."),
  preempted_message_uuids: T(o()).describe("The client-supplied uuids of the user messages the stopped turn was running (uuid-less members omitted; may be empty)."),
  uuid: _(),
  session_id: o()
}).describe("@internal The CLI itself stopped the running turn so a user's rapid follow-up message is answered at once, exactly as a priority 'now' message would have (running shell commands are backgrounded, not killed). Sent at the moment of the stop, so it precedes the stopped turn's result frame (terminal_reason aborted_streaming or aborted_tools) and its members' 'cancelled' command_lifecycle frames (it can also precede the follow-up's own 'queued' command_lifecycle frame): a host renders that turn as superseded by the follow-up rather than as interrupted, does not resend its messages, and treats only preempted_by_uuid as picked up. At most one per burst: the turn the follow-up starts is never preempted this way. Emitted on the stdout stream in -p/SDK sessions only, and only to a consumer that declared rapidFollowupPreempt on its initialize request, while the feature's rollout flag is on: without both, the turn is not stopped at all. Explicit 'now' and 'later' priorities never produce it.")), HF = p(() => u({
  type: A("system"),
  subtype: A("per_turn_effort_changed"),
  per_turn_effort_active: M().describe("Always false: a change to true is reported only by system/init."),
  uuid: _(),
  session_id: o()
}).describe(`@internal The conversation stopped sending effort per turn, because the server refused its per-turn effort message or a role:"system" message. From the retried request on, an effort change rewrites the cached prefix, for every model, until a later system/init says otherwise. Sent once, when the conversation first turns per-turn effort off, before the retried request's output, on the output stream of -p/SDK sessions; sent again only if the server refuses again after the conversation's refusals are cleared (for example by /clear or a compaction). It can repeat a false the host already holds. Pairs with system/init's per_turn_effort_active.`)), KF = p(() => u({
  type: A("system"),
  subtype: A("file_attachments_missing"),
  message_uuid: o().describe("The uuid of the inbound user message whose file_attachments named the files."),
  sent_count: v().int().describe("How many well-formed file_attachments entries that message had."),
  missing: T(u({
    file_uuid: o().describe("The file_uuid of the message's file_attachments entry."),
    reason: o().describe("Why, as a short code. 'download': it could not be downloaded. 'too_large': the file is over the size a session accepts, so sending it again cannot help. 'not_found': the files route answered 404 or 410: the file is most likely deleted, or is not this session's to read, so sending it again rarely helps. 'write': it was downloaded and could not be saved. 'no_token': the session had no credential to download with. 'not_finished': the step that fetches a message's files was cut short or threw, so all its files are listed, though some may have been saved. 'count_cap': the message named more files than a session fetches, and this one was over the limit. More codes may be added; read an unknown one as 'did not arrive'.")
  })).describe("The files Claude was told did not arrive, each once. Never empty."),
  uuid: _(),
  session_id: o()
}).describe("@internal Some files a user message sent by reference (file_attachments) did not arrive where Claude can read them, and Claude was told so in that message's text or in a later note; the turn runs on without them. A host can use it to tell the person who sent them; a session with Remote Control on also sends it to its Remote Control clients itself. Sent once the message is queued, or later when a download or a save that runs beside its turn fails, or both; only for a message that reached the session through Claude Code Remote or over Remote Control, never for input a local host writes; whenever Claude is told, and for the same files. Queued counts as told: a message that a Stop then clears from the queue, or that a UserPromptSubmit hook then blocks, still sends it, though Claude never reads that message. Nothing is sent when every file arrives, when the message is refused or has no uuid (over Remote Control, one not in UUID form counts as none), for another session's message that was first held for approval, when the only files lost are those over the count limit, or for a picture that reached Claude inside the message and whose saved copy alone was lost. A file whose entry carries a sha256 (another session's transfer) is reported to Claude by name instead, and is listed here only under 'not_finished'. Each event states the whole list for its message: a save lost after the message was queued, or a delivery to a new worker, states it again, so keep the last one per message_uuid. If its files all arrive that time nothing is sent, and the earlier event stands. One exception: a worker that takes over a turn already begun may fetch and save the message's files again, except pictures and files with a sha256. Its event lists only those it could not fetch or save, so it can leave out a picture an earlier event listed, and can list a file the earlier worker did save.")), FF = p(() => u({
  type: A("system"),
  subtype: A("cloud_session_delta"),
  seq: v().int().positive().describe("Rises by one with each of these frames this client writes (1 for the first); never reset by an init. A reader keeps the highest it has applied and drops a lower one."),
  changed: T(o()).describe('The top-level keys of `cloud_session` whose value differs from the last block this client wrote (on an init or one of these frames), e.g. ["serving"] or ["calls", "connection"]; never empty. A hint for what to redraw: the block below is complete either way.'),
  cloud_session: gy().describe("The whole block exactly as the next init would carry it (see SDKSystemMessage.cloud_session): replace the held copy, do not merge."),
  uuid: _(),
  session_id: o()
}).describe("@internal Written by the headless stream-json client of a cloud-hosted session (the same client that puts `cloud_session` on its init frames), and by nothing else: the session's status changed between two inits \u2014 for instance this machine's serving word or its reason, its stream to the session (`connection`), a call it serves starting, waiting on the session's approval or ending (`calls`), a serving notice said (`notices`). Only after the first init \u2014 except from a serve-only helper (`--attach-serve`), whose stream to the session carries no init: it writes these from the start, its first (`seq` 1) listing every key of the block in `changed`, so a host that has read no init takes that frame's block as its first snapshot. At most a few per second (changes within a quarter second are written as one frame carrying the latest block); none when nothing differs. An init is always a complete snapshot, so a host that (re)attaches resynchronises from the first init it reads and applies these on top. Display-only; ignore it if you do not draw session status.")), RJ = p(() => u({
  type: A("set_expanded_view"),
  expanded_view: U([ "none", "tasks", "teammates" ]),
  uuid: _(),
  session_id: o()
}).describe("@internal Hint to expand a side panel. Enum is a superset of AppState.expandedView for back-compat; do not narrow.")), uo = p(() => u({
  type: A("active_goal"),
  value: u({
    condition: o(),
    iterations: v().int(),
    set_at: v().int(),
    tokens_at_start: v().int(),
    last_reason: o().optional()
  }).nullable(),
  uuid: _(),
  session_id: o()
}).describe("Emitted when the user's /goal Stop hook reports met (clears) or not-yet-met (bumps iterations + last_reason). Any surface with a goal indicator re-renders from this. value is null when the goal is cleared. From internal QueryEvent 'active_goal'.")), po = p(() => u({
  type: A("autocompact_state"),
  value: u({
    enabled: M().describe("Whether auto-compact is enabled on the worker (autoCompactEnabled setting + DISABLE_AUTO_COMPACT / DISABLE_COMPACT env; DISABLE_COMPACT also disables manual /compact)."),
    effective_window: v().int().describe("The worker's resolved auto-compact window in tokens \u2014 resolveAutoCompactWindow output clamped to the model window, honoring /autocompact, CLAUDE_CODE_AUTO_COMPACT_WINDOW, clientdata and experiment overrides."),
    threshold: v().int().describe("The token count where threshold-triggered compaction fires on the worker \u2014 effective_window minus the summary buffer, lowered further by CLAUDE_AUTOCOMPACT_PCT_OVERRIDE when set."),
    enforced: M().describe("Whether threshold-triggered compaction will actually fire at `threshold`. False when the worker defers to the API's prompt-too-long (reactive mode) or context collapse owns headroom \u2014 clients then show % of window used instead of a countdown to a compaction that won't happen."),
    source: U([ "env", "settings", "clientdata", "experiment", "model-default", "unknown-model", "auto" ]).describe("Which input decided the window (resolveAutoCompactWindow precedence order).")
  }),
  uuid: _(),
  session_id: o()
}).describe(`@internal Worker-resolved auto-compact state, emitted by CCR workers at boot, whenever the resolved state changes (/autocompact, model switch, settings change), re-checked at each turn start, and re-emitted after a conversation reset. Thin clients adopt it so the "% until auto-compact" indicator counts down to the worker's real compaction trigger instead of re-resolving against client-local state. Turn-scoped divergence is accepted: a turn running under a skill/command frontmatter model override compacts against that model's window while the frame keeps the resting model's (the local indicator shares this limitation). From sessionState.onAutocompactInputsChanged.`)), vJ = p(() => u({
  type: A("set_in_progress_tool_use_ids"),
  op: u({
    action: U([ "add", "remove" ]),
    ids: T(o())
  }),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when tool execution adds/removes tool_use ids from the mid-execution set (after permission grant, before result). Surfaces use this to show which tools are running. From internal QueryEvent 'set_in_progress_tool_use_ids'.")), CJ = p(() => u({
  type: A("hint_clears"),
  ids: T(o()),
  content_by_id: ue(o(), o()),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when the server-side context-hint reject path reports cleared tool_use ids after a retry/fallback. The surface re-runs clearToolResultsById on its message list so subsequent turns match the API's view. From internal QueryEvent 'hint_clears'.")), zJ = p(() => u({
  type: A("open_message_selector"),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted by /rewind to open the message-selector overlay. Fire-and-forget \u2014 the user's selection returns through a separate channel. From internal QueryEvent 'open_message_selector'.")), kJ = p(() => u({
  type: A("compact_progress"),
  event: Kr("type", [ u({
    type: A("hooks_start"),
    hook_type: U([ "pre_compact", "post_compact", "session_start" ])
  }), u({
    type: A("compact_start"),
    hint_text: o().nullable().optional()
  }), u({
    type: A("compact_end")
  }) ]).describe("In-progress compaction lifecycle event."),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted while compaction is running (hook phase, compact start, compact end). Distinct from system/compact_boundary, which reports the post-compaction transcript boundary after completion. From internal QueryEvent 'compact_progress' (CompactEvent Delta-track arm).")), OJ = p(() => u({
  type: A("stream_mode"),
  mode: U([ "tool-input", "tool-use", "requesting", "responding", "thinking" ]),
  uuid: _(),
  session_id: o()
}).describe("@internal Emitted when the engine's spinner phase changes during compaction. From internal QueryEvent 'stream_mode' (CompactEvent Delta-track arm).")), NJ = p(() => Kr("op", [ u({
  type: A("response_length"),
  op: A("add"),
  delta: v().int(),
  uuid: _(),
  session_id: o()
}), u({
  type: A("response_length"),
  op: A("reset"),
  uuid: _(),
  session_id: o()
}) ]).describe("@internal Emitted to drive the streaming-output character counter in the spinner ('add' accumulates, 'reset' zeroes on compaction-boundary swap). From internal QueryEvent 'response_length' (Delta-track).")), IJ = p(() => Kr("phase", [ u({
  type: A("refusal_continuation"),
  phase: A("begin"),
  salvage_text: o(),
  uuid: _(),
  session_id: o()
}), u({
  type: A("refusal_continuation"),
  phase: A("end"),
  uuid: _(),
  session_id: o()
}) ]).describe("@internal Emitted when a silent refusal-continuation retry begins ('begin' with salvage_text to keep visible in the streaming preview) or ends ('end'). From internal QueryEvent 'refusal_continuation'.")), PJ = p(() => u({
  sessionId: o().describe("Unique session identifier (UUID)."),
  summary: o().describe("Display title for the session: custom title, auto-generated summary, or first prompt."),
  lastModified: v().int().describe("Last modified time in integer milliseconds since epoch."),
  fileSize: v().int().optional().describe("File size in bytes. Only populated for local JSONL storage."),
  customTitle: o().optional().describe("User-set session title via /rename."),
  firstPrompt: o().optional().describe("First meaningful user prompt in the session."),
  gitBranch: o().optional().describe("Git branch at the end of the session."),
  cwd: o().optional().describe("Working directory for the session."),
  tag: o().optional().describe("User-set session tag."),
  createdAt: v().int().optional().describe("Creation time in integer milliseconds since epoch, extracted from the first entry's timestamp.")
}).describe("Session metadata returned by listSessions and getSessionInfo.")), _o = p(() => $e([ nr(), rr(), D0(), K0(), F0(), Y0(), W0(), $0(), Z0(), eF(), tF(), sF(), nF(), oF(), aF(), iF(), lF(), dF(), cF(), uF(), pF(), _F(), IF(), mF(), PF(), fF(), EF(), OF(), NF(), hF(), MF(), DF(), V0(), xF(), LF(), VF(), J0(), X0(), jF(), qF(), rAo(), oAo(), gF(), TF(), wF(), AF(), yF(), FF(), GF(), bF(), SF(), BF(), rF(), HF(), UF(), CF(), zF(), kF(), Q0(), KF() ]).describe("Every conversational and informational message the CLI emits on its output stream, discriminated by type (and subtype for system/result messages). Consumers should ignore types and subtypes they do not recognize: the set grows over time.")), jt = p(() => U([ "off", "cooldown", "on" ]).describe("Fast mode state: off, in cooldown after rate limit, or actively enabled.")), Gt = p(() => U([ "free", "preference", "extra_usage_disabled", "network_error", "unknown", "not_first_party", "disabled_by_env", "model_not_allowed", "sdk_opt_in_required", "pending" ]).describe("Why fast mode can't serve right now. Absent when nothing blocks it (a request may still choose standard speed). A paused-after-rate-limit run is not here; it rides fast_mode_state as 'cooldown'.")), mo = p(() => u({
  text: o().describe("The label to show \u2014 already sanitized to a single line of plain text and capped at 6 columns, exactly as the terminal footer renders it after its \u25c6 glyph.")
}).describe('@internal The session indicator (the CLAUDE_CODE_FOOTER_INDICATOR environment variable, else the footer_indicator_<text> capability of the main model, else bootstrap client_data.footer_indicator) that the terminal renders as a "\u25c6 <text>" pill in the prompt footer \u2014 an opaque status note operators set per cohort (e.g. to prove a test config reached the session). Carried on `system/init` and the `initialize` response so a host UI (Claude Desktop, IDE webviews) can render the same pill. Absent when nothing is configured; hosts should then render nothing. The client_data source is read from the CLI\'s cached bootstrap data, so a label configured there after that cache was last written first appears on a later `system/init`.'));

var zy = p(() => oe().describe("A JSON-RPC 2.0 message as defined by the Model Context Protocol (request, notification, or response object).")), YF = p(() => u({
  matcher: o().optional(),
  hookCallbackIds: T(o()).describe("Opaque ids chosen by the client, one per hook function it registered for this matcher. When the hook fires the CLI sends a hook_callback control request carrying one of these ids as callback_id; the client maps it back to its function."),
  timeout: v().optional()
}).describe("Configuration for matching and routing hook callbacks.")), l2n = p(() => u({
  subtype: A("initialize"),
  hooks: ue($A(), T(YF())).optional(),
  sdkMcpServers: T(o()).optional(),
  sdkMcpServerConfigs: ue(o(), Qn().omit({
    type: !0,
    name: !0
  })).optional().describe("Settings for the SDK-hosted MCP servers named in sdkMcpServers, keyed by server name. Sent as a separate field so a CLI that predates it ignores it; entries whose name is not in sdkMcpServers, and values that do not match this shape, are ignored rather than rejected. Applied when the server is first registered."),
  sdkMcpServerManifests: ue(o(), u({
    initializeResult: ue(o(), oe()).describe("The server's verbatim JSON-RPC `initialize` result object (protocolVersion, capabilities, serverInfo, instructions, ...), exactly as the in-process server produced it when the host initialized it with no client capabilities \u2014 not re-serialized or schema-parsed by the host."),
    toolsListResult: ue(o(), oe()).optional().describe("The server's verbatim JSON-RPC `tools/list` result object. Omit when the initialize result does not advertise the tools capability, when the listing is paginated (nextCursor present), or when it could not be captured \u2014 the CLI then lists over the control channel as before.")
  })).optional().describe("Optional, keyed by sdk server name (each key should also appear in sdkMcpServers; other keys are ignored). Unlike sdkMcpServerConfigs \u2014 host-declared settings the CLI keeps for the server's lifetime, same shape inline on mcp_set_servers \u2014 this is a one-shot cache of the servers' own handshake output: sent on initialize only, consumed by the connect that follows it, never retained. MCP handshake results the host already obtained from its in-process servers by delivering initialize + notifications/initialized (+ tools/list) to them itself before writing this request. For each such server the CLI answers its own MCP client's initialize and first tools/list from these results and skips the notifications/initialized round trip, so registering N in-process servers costs no mcp_message control round trips before the first turn; tools/call and everything after the handshake still flow as mcp_message exactly as before. The host MUST keep answering mcp_message for every server as if this field were absent: a CLI that predates the field ignores it and performs the full per-server handshake over the control channel, and a newer CLI does the same for any server whose entry is missing or malformed, whose initializeResult.protocolVersion differs from the MCP protocol version the CLI's client requests, or that the CLI had already connected. Entries apply only to the connect that follows this initialize; they are never retained for later reconnects. Over a remote session transport the CLI uses the field only when sdkMcpServerManifestsOrigin is set (see that field); a host on the CLI's own stream-json stdio transport needs no marker. sdk_mcp_manifests_parked in the response reports what became of each entry. Absent (older hosts, the Python SDK, browser clients): unchanged behaviour."),
  sdkMcpServerManifestsOrigin: U([ "host_per_send" ]).optional().describe("The host's statement that it composed this request's sdkMcpServerManifests for this very send, from its servers' current state. Needed only by a host that reaches the CLI over a remote session transport, where an unmarked sdkMcpServerManifests is not used (a recorded registration could be handed to a later worker). The CLI also refuses a marked manifest whose session-stream frame is more than five minutes old, so capture the manifests when writing the request, not earlier; and it may still decline them when remote manifests are switched off in that CLI, or on any session where the session service has not told the CLI in the last five minutes that only the account owning the session can send events to it. sdk_mcp_manifests_parked in the response says what became of each entry. A value this CLI does not know counts as no marker. A host on the CLI's own stream-json stdio transport may omit this field; a host writing to the stdin of a remote-session worker cannot use manifests at all."),
  jsonSchema: ue(o(), oe()).optional(),
  systemPrompt: T(o()).optional(),
  appendSystemPrompt: o().optional(),
  systemPromptSnapshot: M().optional().describe("Record the conversation's system prompt once and reuse it verbatim on every later request and resume. Omitted or true (the default): the prompt is rendered on the first request, systemPrompt or appendSystemPrompt included, and the record is sent as-is afterwards \u2014 even when a later launch passes different text \u2014 until compaction. false: never record; the prompt is rendered fresh every request. No effect where system-prompt recording is not yet enabled."),
  planModeInstructions: o().optional().describe("Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer."),
  appendSubagentSystemPrompt: o().optional().describe("@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT."),
  toolAliases: ue(o(), o()).optional().describe("Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases."),
  excludeDynamicSections: M().optional().describe("When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use."),
  agents: ue(o(), ty()).optional(),
  title: o().optional().describe("Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session."),
  skills: T(o()).optional().describe('When provided, only skills whose names match an entry are loaded into the main session system prompt, matching the exact canonical name (e.g. "my-plugin:my-skill") or a ":name" suffix of it. Display names and aliases do not match. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills, which additionally resolves display names and aliases.'),
  webSearchIsolationExemptMcpServers: T(o()).optional().describe("@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list."),
  promptSuggestions: M().optional(),
  agentProgressSummaries: M().optional(),
  forwardSubagentText: M().optional(),
  supportedDialogKinds: T(o()).optional().describe("Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
  rendersChromeSetupOffer: M().optional().describe("@internal A client capability: this consumer renders the OfferChromeSetup tool's permission request as a Claude in Chrome setup card and answers it with updatedInput.outcome 'connected' or 'not_now'. It lets that tool join the tool list once a Claude in Chrome tool call has reported the browser extension is not connected and the session's experiment flag is on. On, never off: a later initialize may be another client's; absence leaves it as it was. Kept across worker restarts."),
  perTaskStopAffordance: M().optional().describe("Declares that this consumer renders a per-task stop control wired to the `stop_task` control request, so the user can stop an individual background task. When declared, an interrupt on an open-input (interactive stream-json) session spares running background agents/workflows (Stop only aborts the turn). Closed-input exception: a one-shot run (string prompt / -p closes stdin) still kills hold-back tasks at the held-result release regardless of the declaration \u2014 with stdin closed, a stop_task control could never be delivered, so the fail-closed kill stands. ABSENCE also fails closed: the interrupt kills background tasks, since the user would otherwise have no way to stop a runaway one. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
  forwardNestedSubagentToolCalls: M().optional().describe("@internal Asks Claude Code to also send the tool_use and tool_result messages of sub-agents that other sub-agents start, and of skills a sub-agent forks, each with `parent_tool_use_id` set to the call that started it. That call is itself a tool_use in the messages of the parent sub-agent, so a consumer can place every sub-agent under the one that started it and list its tool calls. Their text and thinking stay unsent unless `forwardSubagentText` is set, which already sends all of it. ABSENCE sends none of them, as before. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
  rapidFollowupPreempt: M().optional().describe("@internal Declares that this consumer renders the `system/turn_preempted` frame and expects Claude Code to stop a turn on its own: when a person's follow-up message arrives while the running turn has shown nothing yet, the turn is stopped as an interrupt would stop it (its messages get `command_lifecycle` 'cancelled' and its result is an aborted one) and the follow-up runs next, announced by `turn_preempted`. Honored only while the rollout flag is on. ABSENCE fails closed: the follow-up waits its turn exactly as before, because a consumer that does not know the frame would see a message it never withdrew reported cancelled. Messages arriving over the Remote Control bridge never stop a turn, whatever was declared here. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
  plugins: T(i2n()).optional().describe("Plugins to load for the session, in the same shape as the SDK `plugins` option: the stdin form of one --plugin-dir flag per entry (--plugin-dir-no-mcp when skipMcpDiscovery is set), so the launch command line does not grow with the plugin count. Loaded only by a CLI launched with --await-initialize, which reads this request during startup before any plugin work. Without that flag, on a repeated initialize, or over a remote session transport the field loads nothing; plugins_applied in the response reports whether the listed plugins are in fact loaded."),
  workspaceTrust: u({
    accepted: M().describe("Only send true after showing the user a trust dialog for `directory` \u2014 the same attestation set_cwd carries as trust_accepted."),
    directory: o().describe("Absolute path of the directory the user accepted, as it exists on the machine the CLI runs on. Honored only when it resolves to the trust key of the session working directory (the canonical git root when inside a repository, so a repository root and its linked worktrees agree); a network or obfuscated spelling, a path that is not a directory here, or one that resolves elsewhere records nothing. The grant covers that whole repository, exactly as the terminal trust dialog and set_cwd do, so a host whose folder sits inside a repository should name the repository root in its dialog.")
  }).optional().describe("@internal Host attestation that the user explicitly accepted a trust dialog for the session's working directory before launching it \u2014 the launch-time twin of set_cwd's trust_accepted/trusted_directory, for hosts whose dialog runs before the CLI is spawned and possibly on another machine than the ~/.claude.json this process reads (Claude Desktop's Code tab over SSH or WSL). Honored once, on the session's first initialize from the process that owns the CLI's stdin: the CLI records the working directory as trusted in the same store the interactive trust dialog writes (the home directory is trusted for the session only and never persisted), so the persisted-trust gates read the same answer they do in a checkout the user trusted at a terminal \u2014 project permission rules and hooks re-derive in the running process, the open-change announcement that follows this initialize already sees it, and readers evaluated at launch (project .mcp.json approval, project plugins, agent-frontmatter hooks and MCP servers) see it from the next launch on. A re-sent initialize, one arriving over a remote session transport, or one sent to a parked spare (--await-claim; send workspace_trust with claim_session instead) records nothing. workspace_trust_recorded in the response reports the outcome."),
  attachServeRequest: u({
    workId: o(),
    environmentId: o()
  }).optional().describe("@internal Claude Desktop's serve-only helper launch (`--attach-serve`) only: the tool-use work item the helper was started for and the served folder's environment id, exactly as the host polled them. Read from the opening `initialize` on the helper's own stdin and nowhere else; the helper signs its link to the session over both. Every other launch ignores it.")
}).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration.")), WF = p(() => u({
  minTimeBeforeFeedbackMs: v(),
  minTimeBetweenFeedbackMs: v(),
  minTimeBetweenGlobalFeedbackMs: v(),
  minUserTurnsBeforeFeedback: v(),
  minUserTurnsBetweenFeedback: v(),
  hideThanksAfterMs: v(),
  onForModels: T(o()),
  probability: v(),
  lastSurveyShownTime: v().nullable()
}).describe("@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications.")), $F = p(() => u({
  kind: U([ "post", "bundle", "share", "disabled" ]).describe("How a submit_feedback report from this session is handled: 'post' sends it to Anthropic; 'bundle' writes it, redacted, to a zip on this machine for the user to pass on (a third-party provider or gateway, or no Anthropic credentials) and the response carries its path; 'share' is the internal-build upload; 'disabled' refuses it for a static cause (an environment variable or the nonessential-traffic setting). An org-policy refusal is not reported here: it is read late and can flip, and the per-turn system/init product_feedback_disabled carries it.")
}).describe("@internal The resolved feedback mode (getFeedbackMode) for host UIs that offer a feedback dialog, so they can say up front that a report is refused or saved on this machine, instead of learning either only after the user has written and sent it.")), XF = p(() => u({
  commands: T(Ut()),
  agents: T(Zn()),
  output_style: o(),
  available_output_styles: T(o()),
  user_output_styles_dir: o().optional().describe("@internal Absolute path of the user-level output-styles directory this CLI lists styles from: the output-styles folder of the config home as the CLI resolves it after the settings env blocks are applied, so a CLAUDE_CONFIG_DIR set in user or managed settings is honored. A host that writes a user-level style file writes it here; absent on older CLIs, where the host falls back to its own reading of CLAUDE_CONFIG_DIR."),
  models: T(sr()),
  unavailable_models: T(sr()).optional().describe("@internal Models the account can see but not select (disabled: true, reason folded into description \u2014 e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension \u2014 UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty."),
  account: ey(),
  current_model: o().optional().describe("@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default \u2014 without it, connecting from a phone silently switches the terminal's model (CC-2659)."),
  current_permission_mode: de().optional().describe("@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model."),
  inbound_read_receipts: M().optional().describe("@internal Remote Control hosts only: true when this host reports a client message read when it leaves the command queue for a turn \u2014 the message's `processing` delivery status \u2014 and finished when the turn ends (`processed`). Absent (an older CLI, or a host that acks at receipt): a delivery status means the host received the message, not that it read it. Read per initialize; the kill switch can turn it off for a session already answered."),
  session_state: U([ "idle", "running", "requires_action" ]).optional().describe("@internal Session state at connect time (same values as the session_state_changed message). Lets a host that attaches to an already-running CLI tell whether a turn is in progress without having seen the transition. Absent (older CLI) \u2192 unknown."),
  hooks_applied: M().optional().describe("Whether the `hooks` this initialize carried were registered: true on a session's first initialize, and on a repeated initialize from the process that owns the CLI's stdin (its set replaces the one registered earlier); false when a repeated initialize's hooks were ignored (a client joining a remote session another client configured). Absent when the request carried no hooks, and on CLIs that predate the field \u2014 those ignored `hooks` on every repeated initialize."),
  plugins_applied: M().optional().describe("Whether every plugin this initialize listed is loaded: true when each one is among the plugins the process loaded at launch (from `plugins` under --await-initialize, or from --plugin-dir), so a re-sent initialize naming the launch set also reads true; false otherwise. The `plugins` field never loads anything after launch. Absent when the request listed no plugins, and on CLIs that predate the field (those never read `plugins`)."),
  host_worded_asks: M().optional().describe("@internal Desktop host only: true when this session reads permissionDisplay on a PreToolUse hook's ask (coreSchemas.ts HookPermissionDisplaySchema) and sends its asks to the host as can_use_tool requests. Absent otherwise. Send permissionDisplay only when this is true, and check each can_use_tool request for the words: the CLI may send an ask without them."),
  workspace_trust_recorded: M().optional().describe("@internal Outcome of this initialize's `workspaceTrust` attestation: true when the attested directory resolved to the session working directory's trust key and that key is now persisted as trusted (or already was); false when nothing durable was recorded \u2014 the directory was a network or obfuscated spelling, is not a directory on this machine, resolved to another key, the grant could not be written durably, or the working directory is the home directory (trusted for this session only); false too, whatever is already persisted, when the directory, the working directory or that key carries an invisible or format character (refused as set_cwd refuses such a spelling). Absent when the request carried no accepted attestation, on a repeated or remote-transport initialize, on a parked spare's initialize (--await-claim), and on CLIs that predate the field."),
  sdk_mcp_manifests_parked: ue(o(), U([ "parked", "already_connected", "protocol_version_mismatch", "malformed", "not_honoured" ])).optional().describe("What became of each entry of this initialize's sdkMcpServerManifests, keyed by sdk server name, for the entries whose name is in sdkMcpServers. 'parked': kept for the connect that follows this reply, which answers the server's MCP initialize and first tools/list from it (a later failure to replay shows up as live mcp_message frames, as when no entry was sent). 'already_connected': this CLI already had a live client for the server. 'protocol_version_mismatch': initializeResult.protocolVersion is not the version this CLI's client requests. 'malformed': the entry is not of the documented shape, reported whether or not manifests were honoured (every name in sdkMcpServers gets this when the field itself is not an object); or an honoured entry is past the limits this CLI sets on a live answer. 'not_honoured': the CLI did not use the entry: manifests or remote manifests are switched off in this CLI, the session service has not told this remote-session worker in the last five minutes that only the account owning the session can send events to it, or the request reached such a worker other than over its session stream (nothing for the host to change in any of these cases); or this CLI had read as many tool lists as it allows in a minute (send it again later); or it came over the session stream without sdkMcpServerManifestsOrigin or on a frame too old to trust (the host's to fix). Absent when the request carried no sdkMcpServerManifests or named no sdkMcpServers, and on CLIs that predate the field."),
  permission_mode_from_default_fallback: M().optional().describe('@internal True when current_permission_mode is auto because no settings source configured a mode and the gated auto default applied. IDE hosts only; drives the one-time "auto mode is now the default" disclosure.'),
  auto_default_nudge: de().optional().describe("@internal The user-settings defaultMode the one-shot auto-default nudge should offer to replace with auto. IDE hosts only; absent when the user isn't eligible."),
  pid: v().optional().describe("@internal CLI process PID for tmux socket isolation"),
  claude_code_version: o().optional().describe("Claude Code version of the process that runs this session's turns (the same value its system/init carries). Absent on CLIs that predate the field, and when the responder is not that process and does not know its version."),
  fast_mode_state: jt().optional(),
  fast_mode_disabled_reason: Gt().optional(),
  footer_indicator: mo().optional().describe(`@internal The terminal's configured "\u25c6 <text>" footer pill at connect time \u2014 see SDKFooterIndicator. Absent when nothing is configured.`),
  feedback_survey_config: WF().optional().describe("@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey."),
  feedback_mode: $F().optional().describe("@internal How this session handles a submit_feedback report (see SDKFeedbackMode), read once at init like the other host gates here; the org-policy half of 'disabled' stays on the per-turn system/init product_feedback_disabled boolean. Absent on an older CLI, and when the only refusal is the org policy \u2192 the host behaves as it does without the field."),
  analytics_disabled: M().optional().describe("@internal True when the CLI has analytics/telemetry disabled for this session (privacy level, DISABLE_TELEMETRY / DO_NOT_TRACK from any settings tier, third-party provider, gateway) \u2014 the same verdict the system/init message carries. IDE hosts fold it into the gate for their own direct telemetry. Absent (older CLI) \u2192 unknown."),
  remote_control_auto_enable: M().optional().describe("@internal Whether the CLI resolver says Remote Control should auto-enable at session start (explicit setting \u2192 policy default \u2192 GB rollout), so IDE hosts can mirror TUI behavior. Absent (older CLI) \u2192 treat as false."),
  remote_control_auto_on_by_default: M().optional().describe("@internal True when remote_control_auto_enable is true because of the org/GB default rather than an explicit remoteControlAtStartup setting \u2014 mirrors replBridgeAutoOnByDefault so IDE hosts can render the same disclosure notice."),
  remote_control_auto_connect_default: M().optional().describe('@internal The org/GB auto-connect default alone (getCcrAutoConnectDefault, under the same remote-environment guard as remote_control_auto_enable), with every explicit copy of remoteControlAtStartup left out. IDE hosts show it for their toggle only once they have seen the settings key cleared while the session runs (/config "default" clears the legacy ~/.claude.json copy in the same step); at rest they show remote_control_auto_enable. Absent (older CLI) \u2192 hosts keep their previous display behavior.'),
  claude_in_chrome_at_startup: M().optional().describe(`@internal Whether an IDE host that connects Claude in Chrome itself should connect it when the session starts. True when the "Enabled by default" setting (claudeInChromeDefaultEnabled) is on, this session did not connect the server itself, and the gates the terminal applies to the setting at startup pass (claudeInChromeDefaultForHost). Sent only to a host that owns the session's startup (isVscodeHostOwnedStartupSession). Absent (older CLI, other hosts) \u2192 treat as false.`),
  remote_control_available: M().optional().describe("@internal Whether Remote Control can be offered at all in this deployment (isRemoteControlDeploymentAvailable: not hard-disabled by managed settings, not nested in a remote environment, first-party provider). Only host-lifetime-stable conditions; transient ones (auth state, the GrowthBook rollout gate, the async org-compliance verdict) are deliberately excluded since hosts latch this from one initialize response \u2014 see the helper docstring. Lets IDE hosts hide their Remote Control affordance where it can never work. Absent (older CLI) \u2192 treat as available."),
  ide_rc_auto_enable_gate: M().optional().describe("@internal IDE-side rollout kill-switch for RC auto-enable (tengu_ide_rc_auto_enable), independent of remote_control_auto_enable. Carried on the init response (not experimentGates) because the host reads it at init time, before the first-prompt-triggered gate refresh. Absent (older CLI) \u2192 treat as false."),
  capabilities: T(o()).optional().describe("@internal Members of system/init.capabilities that are already settled at connect time, said here so a host need not wait for the first turn to read them. The same literals under the same conditions; a subset, so a member missing here may still arrive on init. Absent when there is none to say, and on older CLIs.")
}).describe("Response from session initialization with available commands, models, and account info.")), Eo = p(() => u({
  subtype: A("interrupt"),
  reason: o().optional().describe("@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set \u2014 consumers must treat unknown values as a generic abort."),
  cancel_queued: M().optional().describe("When true, the interrupt also cancels every uuid-stamped main-thread command still in the queue or already dequeued for the imminent turn but not yet reachable by the abort (the first-command prewait window) \u2014 the same set the response would otherwise list under `still_queued`. Each is closed with a terminal 'cancelled' lifecycle and listed on the response's `cancelled` field. `still_queued` is then empty, except that a client driving a hosted session lists there what it can no longer recall (a send already in flight to that session, or the first prompt the session was created with) and, when the session's own sweep then cancels one of those or a send it had already delivered, follows up with a command_lifecycle 'cancelled' frame for it. (The isFoldInFlight guard cancel_async_message uses does not apply here: this request also aborts the running turn, so a fold-in-flight uuid is never delivered and is swept with the rest. A fold-in-flight uuid's queued_command attachment may already appear in the aborted turn's transcript if the abort landed after the fold's attachment yield \u2014 pre-existing leave-queued semantics; it never runs as its own turn.) Uuid-less commands (task notifications) still in the queue are also dequeued but cannot be listed; a uuid-less command already in the prewait window is unreachable by either cancel leg \u2014 the first-command prewait latch covers it (this request latches exactly like a plain interrupt; see still_queued): its turn starts aborted. When false or absent, queued commands survive the interrupt and are listed under `still_queued` \u2014 the interrupt_receipt_v1 contract is unchanged. A Stop-means-stop-everything client (a remote UI's Stop button) sets this true so one round-trip halts the session; a wrapper that wants per-uuid control leaves it false and follows up with cancel_async_message. Advertised by the `interrupt_cancel_queued_v1` capability on system/init; older CLIs ignore the field and behave as if false."),
  send_now: M().optional().describe("@internal True when the request is a client's Send now on a message that is waiting, not its Stop: it asks that the waiting messages reach the model now, as the terminal's send-now key does. It is not a Stop: it makes no later turn start aborted, cancels nothing that is queued, and ends no background task, subscription or other thing outside the running turn that a Stop ends. What it does depends on what the CLI holds when it reads the request, and the response's send_now says which. Without message_uuid every waiting user message counts, which may be another than the one pressed. With no user message waiting at the CLI it does nothing: a message the running turn has already taken in, or was started for, is being answered. With one waiting that is not in the queue yet (received and still being admitted, or already taken for the next turn), that the running turn is taking in at that moment, or with no turn under way, it also does nothing: the message runs when its place comes. With a person's message in the queue behind a turn under way, the CLI chooses how that turn makes way: it moves what the turn waits on to the background so that the turn takes the message in (and, if that fails, stops the turn later as a priority 'now' message does, without a marker), or it aborts that turn at once as a plain interrupt does (running tools are ended, the interruption marker is written, the result is an error_during_execution); what was queued ahead of the message still runs before it. Either way a sender learns that the turn has ended from the turn's result, not from this response. The message must already be at the CLI, or the request finds nothing waiting: a sender that still holds it delivers it first, or sends it with priority 'now', or sends a plain interrupt instead. Only the boolean true counts, and with cancel_queued:true the request is a Stop. Advertised by interrupt_send_now_v1 on system/init; a CLI without it handles the request as a plain interrupt."),
  message_uuid: o().optional().describe("@internal Read only beside send_now:true: the uuid of the user message that Send now was pressed on, in the very form in which that message reached the CLI (a session service may deliver it in lower case): it is compared as an exact string, as cancel_async_message compares. With it only that message counts as waiting. If the running turn has already taken it in or was started for it, or the CLI does not know it or does not count it as a person's, the request does nothing and answers 'nothing_waiting', whatever else waits. Once the request acts, it acts as without the name: everything queued decides between the move to the background and the abort, and goes along with the named message. An empty string is read as no name, and so is a null, which this schema does not admit but an encoder may write; any other value that is no string names nothing."),
  for_user_message_uuids: T(o()).optional().describe("@internal One to eight uuids (case ignored) of user messages whose turn this Stop is for; any other value is read as absent. The current turn is the latest one dequeued for a client's message (it may be over, or not yet started), with every turn started and message taken in since. A Stop that names one of its messages is handled as a plain interrupt (if latched, see still_queued, only for pending work that it names or that answers no client's message), and so is any Stop while the CLI knows of no current turn. Other Stops do nothing and get turn: 'spared', except a few that name queued work (sparesCurrentTurn). Always include the message that opened the turn (user_message_uuid on its first frames, before any re-run): after a restart the CLI knows no other. A turn handed over by turn_handoff has no name: any Stop may stop it, so send a plain one. The uuids are only compared: never stored, logged, sent back or shown to the model. Not read beside cancel_queued:true or send_now:true, nor by older CLIs, which answer without turn."),
  worker_epoch: v().int().min(1).optional().describe("@internal The worker life (system/init's worker_epoch) that this interrupt is for, as a JSON number. Written only on an interrupt that a service sends by itself and that must not outlive the worker it was meant for. Never written on a person's Stop, not even as a null or a 0 for 'unset': a Stop must hold across a restart. Read by a claude-code-server tenant alone, before every other member and whatever they say. A worker of another life takes none of an interrupt's steps (it still counts as a person's presence, as every interrupt does), marks the request processed, so that no later worker is served it, and answers with a stale_worker_epoch error; take the new number from the next system/init, not from the error's text. Any other value that is present (a null, a 0, a fraction, a string such as '7') is refused the same way with an invalid_worker_epoch error, never read as absent. Both errors carry the token as error_code and list no still_queued: they are no receipt. The worker of the stated life, every other host that handles an interrupt, and an older tenant handle the request as if the member were absent, and no capability says which a worker is; a client that relays its host's Stop to a hosted session drops the member.")
}).describe("Interrupts the currently running conversation turn.")), QF = p(() => u({
  still_queued: T(o()).describe('Uuids of async user messages that survive this interrupt: commands still in the queue, plus any batch already dequeued for the imminent turn but not yet reachable by the abort. An interrupt \u2014 plain or cancel_queued:true \u2014 that lands during the FIRST-command prewait window (before the first turn of the session has armed a controller) is additionally LATCHED, scoped to the user-intent work pending at that instant \u2014 the batch already dequeued and parked for the imminent turn, plus the user-intent main-thread commands then in the queue (the work this list enumerates): the first turn to arm that carries any of that doomed work starts already aborted, exactly once, so the listed prewait batch is delivered into an immediately-aborted turn, its frames and result flowing through the normal abort path, instead of running to completion. A turn carrying none of it arms live and leaves the latch waiting: a system delivery turn (for example a replayed host event), or a prompt enqueued after the interrupt \u2014 post-interrupt work is never coalesced with the doomed work and never dies to the latch, so the Stop kills exactly what this receipt listed. The latch is released when the doomed work is retired without arming: if a parked prewait batch is entirely cancelled, the latch is released even when other queued commands remain (those arm and run normally); with nothing parked, it is released once none of the doomed commands remains queued \u2014 work enqueued after the interrupt neither holds it up nor is aborted by it. Survivors that ride any later turn run normally. These WILL run (subject to that latch) unless cancelled first (or unless the request set cancel_queued:true, in which case every uuid-stamped survivor this process holds is removed, emitted a terminal `cancelled` synchronously, and listed under `cancelled` instead \u2014 leaving here only what a client driving a hosted session can no longer recall: a send already in flight to that session, or the first prompt the session was created with; a send that client still holds on its own machine behind a send gate (it waits there until that session is ready to take it) has not gone out, so it is withdrawn and listed under `cancelled` like a queued one, and cancel_async_message can withdraw it too, while a plain interrupt leaves it held and lists it here). Cancellation granularity: uuids still in the queue are individually cancellable via cancel_async_message (the re-run of an interrupted turn that also answers for other client messages only if this interrupt was for it; see the response to that request); once a batch is dequeued and coalesced into one turn, cancelling a NON-representative member uuid is a no-op (its content still runs), while cancelling the batch-representative uuid drops the WHOLE coalesced batch \u2014 in both cases the cancel response reports cancelled:false because the message was no longer in the queue. Coverage caveats: only uuid-STAMPED messages appear (a message enqueued without a uuid still runs but is never listed, so [] does not mean "nothing will run"); only main-thread messages are listed (subagent-addressed messages are out of scope); and the list may include internally-enqueued uuids the client never sent (cron triggers, auto-resume continuations) \u2014 ignore unknown uuids rather than treating them as an error. Ordering: on a clean interrupt this receipt is written before the interrupted turn result; a turn that crashes during interrupt handling emits its error result on a direct-write path that may precede the receipt. Snapshot is taken synchronously with abort processing \u2014 probing the queue after the interrupted result instead always loses the race against the drain loop, which starts the next queued turn immediately.'),
  send_now: U([ "stopped", "delivering", "nothing_waiting" ]).optional().describe("@internal Present only when a CLI that advertises interrupt_send_now_v1 itself answers a send_now (a client that relays to a hosted session answers without it). 'nothing_waiting': no user message waited (with message_uuid, the named one did not), and nothing was done. 'delivering': one waits and this request stopped no turn, for one of these reasons: no turn is under way and the message runs when its place comes; the message is not in the queue yet, or the running turn is just taking it in; the CLI is moving what the turn waits on to the background, and may still stop the turn later if that fails; the turn is already being stopped; or the process is on its way out, and the message will not run in it. 'stopped': the running turn was aborted for what waits, and its result follows."),
  turn: U([ "stopped", "idle", "spared" ]).optional().describe("@internal Present only when the answering CLI read the request's for_user_message_uuids. 'stopped': handled; the turn under way was aborted, or the interrupt was latched for pending work. 'idle': handled; no turn was under way and it latched for nothing. 'spared': it named no message of the current turn, so nothing was done. A named message listed in still_queued still waits, whatever the value."),
  cancelled: T(o()).optional().describe("Present only when the request set cancel_queued:true \u2014 uuids of main-thread commands cancelled by this interrupt: every survivor that would otherwise have appeared under `still_queued`, including any uuid that was mid-fold at the interrupt instant (this request also aborts, so the fold never delivers it). Each listed uuid has been removed (queue-resident) or marked cancel-pending (the first-command prewait window, closed by the drain loop's backstop) and emits a terminal 'cancelled' lifecycle synchronously at the first such interrupt (a repeat interrupt over the same parked batch re-lists the uuid idempotently without re-emitting); none will run. Where one of them is the re-run of an interrupted turn that also answered for other client messages whose re-sent copies had been set aside for it, those messages' uuids are listed behind the commands' too: they were in no queue and never under `still_queued`, each has its terminal 'cancelled' lifecycle, and a repeat interrupt does not list them again. Same coverage caveats as `still_queued` (uuid-stamped main-thread only; internally-enqueued uuids may appear). Advertised by the `interrupt_cancel_queued_v1` capability.")
}).describe("Result of an interrupt operation. Advertised by the interrupt_receipt_v1 capability on system/init; older CLIs send an empty success response with no still_queued field.")), So = p(() => u({
  subtype: A("can_use_tool"),
  tool_name: o(),
  mcp_server: Ge().optional(),
  input: ue(o(), oe()),
  permission_suggestions: T(Lt()).optional(),
  blocked_path: o().optional(),
  decision_reason: o().optional().describe(`Human-readable reason the ask escalated, for the consent line of the host's dialog. For decision_reason_type "subcommandResults" (compound bash), this is the NESTED safety check's warning text \u2014 the wrapper itself has no text \u2014 preferring a check that requires manual approval (classifier_approvable false); treat it with the same display/policy care as a "safetyCheck" reason. May carry ANSI escapes; sanitize before rendering.`),
  decision_reason_type: U(Jmt).optional().describe(`Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case, and see decision_reason: for this variant it carries the nested safety check's warning text.`),
  decision_reason_code: U([ ...sqn, "org_ask_ceiling" ]).optional().describe("@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged, so type-keyed host policy decides as before): 'outside_reads_blocked', 'memory_paused', 'classifier_transcript_too_long', 'org_ask_ceiling' (the MCP tool's ceiling, toolPermissions, is 'ask', and an ask rule or the ceiling itself raised the ask: type 'rule' or 'other'). Absent for every other reason; new values are additive."),
  decision_reason_rule_source: o().optional().describe("@internal With decision_reason_type 'rule': the source of the rule in the decision reason (a PermissionRuleSource word). It names the first rule that matched, not the strongest, and says nothing of what that rule hides. For the host's logs: a host should not decide by it."),
  server_policy_ask_only: M().optional().describe("@internal Sent with decision_reason_type 'rule', and for an MCP tool's ask that has none. true = when the frame was built, nothing asked for a person on this call but the default prompt for a tool that no rule allows and, at most, a tool policy that the host itself pushed (permission_policy 'always_ask'): no other ask rule that the permission check applies to the call, no hook's or plugin's ask, no PermissionRequest hook, no organization ceiling, no plan-mode floor, no safety check, no ask or veto on a standing grant of the tool's own, no auto-mode classifier active for the call. false = something else did, or may have. It says nothing of WHY the host pushed that policy, which only the host knows; nothing of whose server the tool is (see mcp_server), so a host answers only for a tool that it holds a person's grant for; and nothing of what changes after the frame is sent. Absent on other reason types, on another tool's ask without a reason type, wherever a request is listed, mirrored or passed on again (pending_permission_requests), and from older versions."),
  classifier_approvable: M().optional().describe("Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved."),
  suppress_always_allow_rule: M().optional().describe(`True when the dialog must not offer the persistent "don't ask again" row for this ask: accepting it would write a whole-tool allow rule broader than the ask's own verb (PermissionAskDecision.suppressAlwaysAllowRule). Hosts rendering approve options should omit any persistent-rule affordance when set.`),
  default_to_no: M().optional().describe("True when the ask must not be approvable by a single stray keystroke (PermissionAskDecision.defaultToNo): a terminal-style prompt opens on its decline option and takes no digit shortcut. Hosts rendering approve options should not pre-select approve when set."),
  matched_ask_rule: u({
    source: o(),
    tool_name: o(),
    rule_content: o().optional()
  }).optional().describe("Set when a user-configured ask RULE (permissions.ask) forced this prompt but the ask carries the tool's own decision_reason \u2014 the ask-rule substitution keeps the richer tool-minted ask, so the rule rides here instead of decision_reason_type 'rule'. Hosts making policy on decision_reason_type (e.g. auto-deny safetyCheck) or running host-side auto-approval should treat asks carrying this field as rule-forced: the user's stated intent is a human prompt. Values are producer-authored but render-unsafe like decision_reason; sanitize before display."),
  title: o().optional(),
  display_name: o().optional(),
  tool_use_id: o(),
  agent_id: o().optional(),
  plugin: o().optional().describe("@internal The plugin whose `$` call (`$.ui.ask`, `$.tool.call`, `$.agent.spawn`) started the run this ask belongs to, by the name it is loaded under: who the terminal's dialog says the ask is from. The engine's word, which no plugin sets. Empty on a run resumed from an agent a plugin steered, whose name was not kept (the terminal says `from a plugin`). Absent for the model's own calls. Untrusted text; escape before display."),
  description: o().optional(),
  requires_user_interaction: M().optional().describe("True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction surface (Tool.requiresUserInteraction(): the user responds on the card itself), OR the pending ask is localDisplayOnly (its consent disclosure cannot ride this wire and only the local dialog renders it), OR the auto-mode classifier blocked the call and it was handed to a person (decision_reason_type 'classifier' on a person-only ask), which no stored grant or automatic approval may answer, OR the SDK host worded the ask (title and description are its consent copy, which a push cannot carry whole). In each case the user has to open the session to answer."),
  server_prompt: o().optional().describe("@internal A marker the session service puts on an ask it worded itself, naming which of its prompts this is (an open set). Nothing on this frame proves who wrote it: the marker is the service's word only on a stream served by the service, which removes the key from anything a session's own container wrote; anywhere else it is a claim. A host keeps showing the tool name and input whatever it says."),
  computer_folder: u({
    path: o(),
    computer_name: o()
  }).optional().describe("@internal Beside server_prompt, and as trustworthy as it is: a folder on one of the person's computers and that computer's name. Untrusted text; escape before display."),
  provenance_prompt_line: U([ "one_at_a_time", "all_at_once" ]).optional().describe("@internal Only on the URL prompt that WebFetch raises mid-call, when the session's web-fetch proxy refuses an address. Says whether the session's line of such prompts was on for this call. 'one_at_a_time' = on: the call took a turn in the line, so no other prompt of that line was up when this one was raised. 'all_at_once' = off: the call joined no line, and its prompt was raised without waiting. For the host's logs: nothing in the CLI decides by it, and a host should not either."),
  tool_kind: U([ "browser" ]).optional().describe("@internal Structured tool category so SDK hosts can route to a specialized permission UI without name-matching tool_name. 'browser' = a Claude-in-Chrome MCP tool under any of its registered server names: the mcp__claude-in-chrome__* extension server, the mcp__Claude_in_Chrome__* Cowork desktop server, the Claude Desktop pane under mcp__Claude_Preview__* / mcp__Claude_Browser__* (both pane names are live during its rename rollout), or the mcp__remote-devices__* spellings bridged through Claude Code Remote (the bridged forms of the current names; the retiring Claude_Preview name has no bridged form). Open for future kinds.")
}).describe("Requests permission to use a tool with the given input.")), To = p(() => u({
  subtype: A("set_permission_mode"),
  mode: de(),
  ultraplan: M().optional().describe("@internal CCR ultraplan session marker.")
}).describe("Sets the permission mode for tool execution handling.")), JF = p(() => u({
  mode: de().optional().describe("The permission mode now in effect. Headless CLIs echo it; other hosts may acknowledge with an empty object.")
}).describe("Success payload answering set_permission_mode.")), wo = p(() => u({
  subtype: A("set_model"),
  model: o().nullable().optional().describe("Model to switch to. Omitted, null, or 'default' resets to the session default model."),
  system_prompt: o().min(1).optional().describe("@internal Replaces the custom system prompt (the --system-prompt / initialize systemPrompt slot). The session keeps sending the system prompt it has recorded, so the new text is first sent after the next compaction; under systemPromptSnapshot: false it is sent from the next turn on. The tool definitions already sent do not change. Applied only when the model request is accepted; must be non-empty (there is no revert-to-built-in form); re-send the current model for a prompt-only update; sending the text already in effect changes nothing. The CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE per-turn read, where configured, still wins. Transports that do not implement it, and older builds, ack success without applying it."),
  only_if_model_is_current: M().optional().describe("@internal When true, the request does not change the model. `model` must name a model: if it is absent, null, empty or 'default', the request fails with error_code 'invalid_request'. `system_prompt` is required: without it the request fails the same way. If `model` names the session's model, the request succeeds, and `system_prompt` replaces the custom system prompt as that member describes. The request makes no server check of the model, runs no PreModelSwitch hook, and sends no model report to the host. For a model id that this build knows, two names are one model if they resolve to one model id: an alias resolves to the id that it stands for, every dated id of a version resolves to the undated id, and a [1m] tag is ignored. An id that a behaves_as mapping points at another model is a different model. If the session's model is another model, the request fails with error_code 'model_not_current' and changes nothing. The request also fails that way while the session's records of its model disagree. A fallback that changes the session's model can cause that state until its turn ends, or longer. A session whose model setting is 'opusplan', 'opusplan[1m]' or 'haiku' runs a different model in plan mode. For such a session the request always fails with 'model_not_current'. A value that is not a boolean fails with 'invalid_request'. `claude -p` and a claude-code-server worker implement this member. Remote Control refuses every value but false. A build without this member ignores it and applies the request as a plain set_model.")
}).describe("Sets the model to use for subsequent conversation turns.")), Ao = p(() => u({
  subtype: A("set_max_thinking_tokens"),
  max_thinking_tokens: v().int().nullable().optional(),
  thinking_display: U(x8e).nullable().optional()
}).describe("Sets the maximum number of thinking tokens for extended thinking. When max_thinking_tokens is null, thinking resets to the session default: any mid-session budget override is cleared (back to the spawn-time budget, if one was set), and thinking stays off for sessions that have it disabled. When max_thinking_tokens is omitted, the budget is left as it is, so a request that only changes thinking_display can leave the field out. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears that override so Claude Code's default display handling applies again, and when omitted the display mode from session start (--thinking-display) is kept. 'highlights' returns one short title per stretch of thinking instead of a prose summary. The API accepts it only from Claude Code sessions that Anthropic hosts; if the API rejects it, the session sends 'omitted' (no thinking text) in its place from then on. A request for 'highlights' gets an error reply after such a rejection, on Amazon Bedrock, Google Vertex AI or another provider to which Claude Code sends no first-party-only beta features, when experimental betas are off (CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS or organization policy), or on a Claude 3 model (except on Microsoft Foundry). The error names which of these it was; the display stays as it was, and max_thinking_tokens still applies when the request has it.")), yo = p(() => u({
  subtype: A("rename_session"),
  title: o(),
  source: U([ "remote", "host" ]).optional().describe("Who chose the title: 'remote' (the default) for a rename made on claude.ai and relayed to this process, 'host' for one the user made in the hosting application (an IDE), which the CLI counts as a user rename."),
  session_id: o().optional().describe("The session the title is for. When given and this process has since moved to another session (/clear, an in-session resume), the request is refused instead of naming the new session.")
}).describe("Sets the user-facing title for the current session.")), Ro = p(() => u({
  subtype: A("set_color"),
  color: o()
}).describe('Sets the session accent color. Accepts an agent color name or "default" to reset.')), vo = p(() => u({
  subtype: A("mcp_status")
}).describe("Requests the current status of all MCP server connections.")), ZF = p(() => u({
  mcpServers: T(Jn())
}).describe("Response containing the current status of all MCP server connections.")), Co = p(() => u({
  subtype: A("file_suggestions"),
  query: o()
}).describe("Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows.")), eY = p(() => u({
  suggestions: T(u({
    path: o().describe("Relative to `cwd`, or absolute (e.g. files under the Claude config directory). A directory ends with a path separator."),
    score: v().optional()
  })),
  cwd: o().optional().describe("Absolute directory the relative suggestion paths are relative to: the working directory the file index was built for, which can lag the current one briefly after a directory change. Omitted by older CLIs and on transports that withhold local paths; resolve against the system/init cwd then.")
}).describe("Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead).")), zo = p(() => u({
  subtype: A("get_context_usage"),
  detail: U([ "summary", "full" ]).optional().describe("'full' counts each category with the token-count API; 'summary' answers from the last response's usage and local estimates without the per-category token-count calls. Defaults to 'full'.")
}).describe("Requests a breakdown of current context window usage by category.")), ko = p(() => u({
  subtype: A("get_session_cost")
}).describe("Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00.")), tY = p(() => u({
  text: o()
}).describe("Formatted session cost text, ANSI-stripped.")), Oo = p(() => u({
  subtype: A("list_models")
}).describe("Requests the worker's selectable model catalog. Fulfills the caps.modelCatalog capability: in a remote thin-client session the worker's provider, settings cascade, and enforcement policy decide which models the session can run, so the thin client must ask rather than read its own getModelOptions().")), sY = p(() => u({
  models: T(sr())
}).describe("The worker's model options serialized via toModelInfos() \u2014 the same ModelInfo shape the initialize response carries. Includes disabled rows (visible but not selectable) so the thin-client picker renders them greyed-out like the local one.")), No = p(() => u({
  subtype: A("get_usage"),
  skip_behaviors: M().optional().describe("Skip the scan of local transcripts that produces the response's behaviors section (it is null in the answer). For callers that need only the plan rate limits, such as a usage meter; the scan reads every transcript touched in the last seven days.")
}).describe("Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental \u2014 the response shape may change.")), Bt = p(() => u({
  utilization: v().nullable().describe("Percentage of the window used, 0-100."),
  resets_at: o().nullable().describe("ISO 8601 timestamp when the window resets.")
})), ar = p(() => u({
  name: o(),
  pct: v().describe("Share of the weighted local usage attributed to this item, 0-100.")
})), Ey = p(() => u({
  request_count: v().describe("API requests found in local transcripts for this window."),
  session_count: v().describe("Distinct sessions observed in this window."),
  behaviors: T(u({
    key: U([ "cache_miss", "long_context", "subagent_heavy", "high_parallel", "cron", "max_effort", "workflow", "always_on_context", "large_tool_results" ]),
    pct: v().describe("Share of the weighted local usage attributed to this behavior, 0-100."),
    count: v().describe("Requests in this window exhibiting the behavior.")
  })).describe("Behavioral characteristics of local usage. Categories overlap \u2014 this is not a partition, so percentages do not sum to 100."),
  agents: T(ar()),
  skills: T(ar()),
  plugins: T(ar()),
  mcp_servers: T(ar())
})), rY = p(() => u({
  session: u({
    total_cost_usd: v(),
    total_api_duration_ms: v().int(),
    total_duration_ms: v().int(),
    total_lines_added: v().int(),
    total_lines_removed: v().int(),
    model_usage: ue(o(), Dt())
  }).describe("Cost and usage accumulated by the current session."),
  subscription_type: o().nullable().describe("Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions."),
  rate_limits_available: M().describe("False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) \u2014 rate_limits will be null."),
  rate_limits: u({
    five_hour: Bt().nullable().optional(),
    seven_day: Bt().nullable().optional(),
    seven_day_oauth_apps: Bt().nullable().optional(),
    seven_day_opus: Bt().nullable().optional(),
    seven_day_sonnet: Bt().nullable().optional(),
    model_scoped: T(u({
      display_name: o().describe("Server-supplied label for the model bucket (e.g. 'Fable')."),
      utilization: v().nullable(),
      resets_at: o().nullable()
    })).optional().describe("Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive: absent when nothing is known about them (an answer served from cached data, or rows the allowlist hides); an empty array means the endpoint itself answered and listed no per-model weekly window at all for this account, before the allowlist was applied."),
    extra_usage: u({
      is_enabled: M(),
      monthly_limit: v().nullable(),
      used_credits: v().nullable(),
      utilization: v().nullable(),
      currency: o().nullable().optional()
    }).nullable().optional()
  }).nullable().describe("Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable."),
  behaviors: u({
    day: Ey().describe("Last 24 hours."),
    week: Ey().describe("Last 7 days.")
  }).nullable().describe("What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails.")
}).describe("Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental \u2014 the shape may change.")), Io = p(() => u({
  subtype: A("get_status")
}).describe("@internal Requests the rows of the terminal's /status screen (version, session, account, provider, model, servers, settings), every value already rendered as text, for a host that shows them with its own widgets.")), nY = p(() => u({
  label: o().optional().describe("The row's name; absent for a row that is a sentence on its own."),
  value: o().describe("The row's value as the terminal shows it.")
})), oY = p(() => u({
  sections: T(u({
    title: o(),
    rows: T(nY())
  })).describe("The /status screen's sections in its order, each with the rows it shows.")
}).describe("@internal The terminal's /status rows as text.")), Po = p(() => u({
  subtype: A("export_conversation")
}).describe("@internal Requests the conversation as the plain text the terminal's /export writes, with the file name that command would offer, for a host that copies or saves it with its own widgets.")), aY = p(() => u({
  text: o().describe("The whole conversation as plain text, as /export renders it."),
  default_filename: o().describe("The file name /export would offer: the time and the first prompt, ending in .txt.")
}).describe("@internal The conversation text /export would write.")), Mo = p(() => u({
  subtype: A("get_memory_dialog")
}).describe("@internal Requests the rows and toggle states of the session's /memory dialog, for a host that draws the dialog with its own widgets and opens the files and folders itself. Clears the session's memory-file cache first, as the terminal /memory does.")), iY = p(() => u({
  kind: U([ "user", "project", "project-alt", "local", "other" ]).describe("The user instructions file, the project instructions file (./CLAUDE.md), the alternate project file (./.claude/CLAUDE.md), the local file (./CLAUDE.local.md), or any other loaded instruction file. Only the user and project rows are listed while missing (exists false), so a host may create exactly those two."),
  path: o().describe("Absolute path on the session filesystem."),
  label: o().describe("The row label as the terminal dialog shows it."),
  description: o().describe("The row's secondary text; may be empty."),
  exists: M()
})), lY = p(() => u({
  kind: U([ "auto", "team", "agent" ]).describe("The auto-memory folder, the team memory folder, or one agent's memory folder."),
  path: o().describe("Absolute directory path on the session filesystem; may not exist yet."),
  label: o(),
  description: o()
})), dY = p(() => u({
  name: o().describe("The memory's path relative to the auto-memory folder ('MEMORY.md' for the index), as the CLI's memory scan names it."),
  path: o().describe("Absolute path on the session filesystem, inside the auto-memory folder reported in folders."),
  description: o().nullable().describe("The memory's frontmatter description; null when it has none."),
  type: U([ "user", "feedback", "project", "reference" ]).nullable().describe("The memory's frontmatter type; null when absent or not one of the CLI's types."),
  modified_ms: v().describe("When the memory was last modified, in epoch milliseconds: the frontmatter 'modified' stamp when it parses, else the file's mtime.")
})), cY = p(() => u({
  files: T(iY()),
  folders: T(lY()).describe("Empty when the terminal dialog would show no folder rows."),
  memories: T(dY()).optional().describe("The saved memories in the auto-memory folder, as the CLI's own memory scan lists them (the same listing the memory recall uses, so it follows the CLI's storage and visibility rules): the MEMORY.md index first when it exists on disk, then the memories ordered by file modification time, newest first (modified_ms may carry a frontmatter stamp instead), capped at the scan's limit of 200. Present exactly when folders is non-empty; absent while auto-memory is off, and absent from a CLI that predates this field."),
  auto_memory: u({
    enabled: M().describe("Whether auto-memory is on for every session: on in settings and not turned off by an environment variable, a launch flag, safe mode or the per-model switch."),
    toggleable: M().describe("False where the terminal dialog ignores the toggle (safe mode, or the per-model kill switch)."),
    status: o().describe("The state text beside 'Auto-memory:' in the terminal dialog.")
  }),
  auto_dream: u({
    shown: M().describe("Whether the terminal dialog shows the Auto-dream row."),
    enabled: M(),
    toggleable: M().describe("False while auto-memory is off for every session or held off for this session, or, when off, in a session a tool call or a background runner started."),
    status: o().describe("The state text beside 'Auto-dream:'."),
    detail: o().describe("The dimmed detail ('running', 'never', 'last ran \u2026'), or empty.")
  })
}).describe("@internal The session's /memory dialog: file rows, folder rows, and the two toggle rows, in dialog order. Org (synced project memory) rows are not included.")), Do = p(() => u({
  subtype: A("get_skills_dialog")
}).describe("@internal Requests the rows of the terminal's /skills menu, for a host that draws the menu with its own widgets: each skill with its source, its token estimate, its effective state, and what locks it. Read-only; a host writes a state through the CLI's edit-skill-overrides subcommand.")), hY = p(() => u({
  name: o().describe("The skill's full name (the settings key; 'server:skill' for an MCP skill)."),
  display_name: o().describe("The name the menu shows, as the slash-command list names it."),
  description: o(),
  source: o().describe("The source label the menu shows ('user', 'project', 'plugin', 'built-in', \u2026)."),
  tokens: v().describe("The menu's token estimate for the skill's listing in the system prompt, for the active model."),
  state: U([ "on", "name-only", "user-invocable-only", "off" ]).describe("The effective state (the locked value, else the local setting, else the project or user setting, else 'on')."),
  locked_by: U([ "author", "plugin", "policy", "flag", "reserved-name" ]).optional().describe("Present when a local setting cannot change the state: the skill disables model invocation itself, it comes from a plugin, a managed or flag setting names it, or settings cannot store an entry under its name (reserved-name: a skill named __proto__; rename it to configure it). When one of several skills sharing a name is locked, every row of that name carries the lock, as the menu treats the name."),
  advertised: M().describe("Whether the session lists the skill as a slash command (a skill that is off, or not user-invocable, is not): a host joins a row to its command only when true."),
  handles: u({
    unqualified_name: o().optional(),
    aliases: T(o()).optional(),
    bare_name_reserved: M().optional()
  }).describe("The other names the settings files may hold the skill's state under (its unqualified name, its aliases), as the menu resolves them; a host sends these back with an edit of a skill only the session loaded, so the edit reads the same entries.")
})), uY = p(() => u({
  skills: T(hY()).describe("The menu's rows, in its default order (by source, then name).")
}).describe("@internal The terminal's /skills menu as rows.")), xo = p(() => u({
  subtype: A("get_chrome_dialog")
}).describe("@internal Requests the state the terminal's /chrome dialog shows (Claude in Chrome: whether it is allowed, the extension's install and connection state, the enabled-by-default setting, and the pages its rows open), for a host that draws the dialog with its own widgets. Read-only; a host writes the setting through the CLI's edit-chrome-settings subcommand.")), pY = p(() => u({
  allowed: M().describe("Whether Claude in Chrome may be used at all (the organization policy allows the browser extension)."),
  subscriber: M().describe("Whether the account is a claude.ai subscription, which Claude in Chrome requires."),
  wsl: M().describe("Whether the session runs under WSL, where Claude in Chrome is not supported."),
  installed: M().describe("Whether the Chrome extension was detected on this machine."),
  connected: M().describe("Whether the session's Claude in Chrome server is connected."),
  paired_browser: o().optional().describe("The paired browser's name, when connected and paired."),
  enabled_by_default: M().describe('The "Enabled by default" setting (claudeInChromeDefaultEnabled in the global config).'),
  at_startup: M().optional().describe('@internal The same answer as claude_in_chrome_at_startup, computed when asked. Any host can read it; a host uses it to decide whether to connect open sessions when "Enabled by default" is turned on. Absent (older CLI) \u2192 treat as false.'),
  urls: u({
    install: o().describe("The page that installs the extension."),
    reconnect: o().describe("The page that reconnects the extension."),
    permissions: o().describe("The extension's site permissions page.")
  }).describe("The pages the terminal dialog's rows open, so a host holds no copy of them.")
}).describe("@internal The terminal's /chrome dialog state.")), Lo = p(() => u({
  subtype: A("get_chrome_browsers")
}).describe("@internal Requests the browsers connected to the session's Claude in Chrome server, as the terminal's /chrome browser picker lists them. Fails when the server is not connected.")), _Y = p(() => u({
  browsers: T(u({
    device_id: o(),
    name: o(),
    os_platform: o().optional(),
    current: M().describe("Whether this is the browser Chrome actions use now.")
  }))
}).describe("@internal The connected browsers.")), Uo = p(() => u({
  subtype: A("select_chrome_browser"),
  device_id: o().describe("The browser to use for Chrome actions, from get_chrome_browsers.")
}).describe("@internal Switches the session's Claude in Chrome server to the given browser, as the terminal's picker does. Fails when the server is not connected.")), mY = p(() => u({
  name: o().optional().describe("The chosen browser's name, when known.")
}).describe("@internal The browser is now in use.")), Vo = p(() => u({
  subtype: A("get_sandbox_dialog")
}).describe("@internal Requests the state the terminal's /sandbox dialog shows, for a host that draws the dialog with its own widgets: platform support, the policy lock, the mode and its choices, the unsandboxed-fallback override, the dependency check, the excluded commands and the configured restrictions. Read-only; a host writes through the CLI's edit-sandbox-settings subcommand.")), gY = p(() => u({
  supported: M().describe("Whether sandboxing can be configured on this platform (macOS, Linux, WSL2, or Windows where enabled) and the enterprise enabledPlatforms setting includes it."),
  unsupported_reason: U([ "wsl1", "platform", "excluded_platform" ]).optional().describe("Why not, when supported is false: WSL1; another unsupported platform; or a platform the enabledPlatforms setting leaves out."),
  locked: M().describe("Whether a higher-priority settings source sets the sandbox settings, so the mode cannot be changed locally."),
  overrides_locked: M().describe("Whether the unsandboxed-fallback override cannot be changed from the project: set by policy (locked, or unsandboxed commands forbidden), or held closed (allowUnsandboxedCommands: false) by a --settings file or user settings."),
  enabled: M().describe("Whether sandboxing is running in this session: on in the settings, and the sandbox started."),
  enabled_in_settings: M().describe("Whether the settings files turn sandboxing on."),
  unavailable_reason: o().optional().describe("Why the sandbox cannot run although the settings turn it on (a missing dependency, an unsupported platform), when that is so; absent when it runs, or when it is off in the settings. When absent while enabled is false and enabled_in_settings true, the sandbox failed to start in this session."),
  mode: U([ "auto-allow", "regular", "disabled" ]).describe("The terminal picker's current row, from the settings: sandboxed commands auto-allowed, sandboxed with regular permissions, or no sandbox."),
  auto_allow_available: M().describe("Whether the auto-allow mode is offered on this platform."),
  no_sandbox_allowed: M().describe('False when sandboxing is forced on, so the "No sandbox" choice is not offered.'),
  unsandboxed_fallback: M().describe("Whether a command that fails under the sandbox may be retried outside it."),
  dependencies: u({
    errors: T(o()).describe("Missing required dependencies; the sandbox cannot run with any."),
    warnings: T(o()).describe("Missing optional dependencies; the sandbox runs with less isolation.")
  }).describe("The sandbox runtime's dependency check, as the terminal's Dependencies tab lists it."),
  excluded_commands: T(o()).describe("Command patterns excluded from the sandbox (the excludedCommands setting)."),
  restrictions: u({
    fs_deny_read: T(o()),
    fs_allow_read: T(o()).describe("Paths re-allowed for reading (filesystem.allowRead), as enforced: while managed settings mandate the sandbox, or managed or --settings deny reads, project settings contribute none; under filesystem.allowManagedReadPathsOnly, managed settings only."),
    fs_allow_write: T(o()).describe("Extra writable paths (filesystem.allowWrite), as enforced: while managed settings mandate the sandbox, project settings contribute none."),
    fs_deny_write: T(o()),
    network_allowed_domains: T(o()),
    network_denied_domains: T(o()),
    network_managed: M().describe("Whether the network allow list is managed by policy."),
    unix_sockets: T(o()).describe("Unix socket paths allowed (allowUnixSockets), as enforced: while managed settings mandate the sandbox, from managed, --settings and user settings only."),
    allow_all_unix_sockets: M().describe("Whether every Unix socket is allowed (allowAllUnixSockets, as enforced), so socket blocking is off and a missing socket-filter dependency costs nothing; the terminal shows its socket warning only when this is false."),
    ignored_glob_patterns: T(o()).describe("Patterns the Linux sandbox ignores (globs it does not support).")
  }).describe("The restrictions configured in the sandbox settings (the settings' filesystem, network and socket lists, not the runtime's built-in defaults), as the settings files merge them; the grant fields (fs_allow_read, fs_allow_write, unix_sockets, allow_all_unix_sockets) as enforced.")
}).describe("@internal The session's /sandbox dialog state, for a host on the same machine (the sandbox governs the commands Claude runs there).")), jo = p(() => u({
  subtype: A("get_binary_version")
}).describe("Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version.")), fY = p(() => u({
  version: o(),
  buildTime: o().optional()
})), bY = p(() => u({
  name: o(),
  tokens: v().int(),
  color: o(),
  isDeferred: M().optional(),
  kind: U(a2n).describe("What the row is, the same classification the /context result's context_usage rows carry: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve; 'deferred' rows are out-of-window tool schemas. Classify on this, never on the English name.")
})), EY = p(() => u({
  color: o(),
  isFilled: M(),
  categoryName: o(),
  tokens: v().int(),
  percentage: v(),
  squareFullness: v()
})), SY = p(() => u({
  categories: T(bY()),
  totalTokens: v().int(),
  maxTokens: v().int(),
  rawMaxTokens: v().int(),
  percentage: v(),
  gridRows: T(T(EY())),
  model: o(),
  memoryFiles: T(u({
    path: o(),
    type: o(),
    tokens: v().int()
  })),
  mcpTools: T(u({
    name: o(),
    serverName: o(),
    tokens: v().int(),
    isLoaded: M().optional()
  })),
  deferredBuiltinTools: T(u({
    name: o(),
    tokens: v().int(),
    isLoaded: M()
  })).optional(),
  systemTools: T(u({
    name: o(),
    tokens: v().int()
  })).optional(),
  systemPromptSections: T(u({
    name: o(),
    tokens: v().int()
  })).optional(),
  agents: T(u({
    agentType: o(),
    source: o(),
    tokens: v().int()
  })),
  slashCommands: u({
    totalCommands: v().int(),
    includedCommands: v().int(),
    tokens: v().int()
  }).optional(),
  skills: u({
    totalSkills: v().int(),
    includedSkills: v().int(),
    tokens: v().int(),
    skillFrontmatter: T(u({
      name: o(),
      source: o(),
      tokens: v().int()
    }))
  }).optional(),
  autoCompactThreshold: v().int().optional(),
  isAutoCompactEnabled: M(),
  messageBreakdown: u({
    toolCallTokens: v().int(),
    toolResultTokens: v().int(),
    attachmentTokens: v().int(),
    assistantMessageTokens: v().int(),
    userMessageTokens: v().int(),
    redirectedContextTokens: v().int(),
    unattributedTokens: v().int(),
    toolCallsByType: T(u({
      name: o(),
      callTokens: v().int(),
      resultTokens: v().int()
    })),
    attachmentsByType: T(u({
      name: o(),
      tokens: v().int()
    }))
  }).optional(),
  apiUsage: u({
    input_tokens: v().int(),
    output_tokens: v().int(),
    cache_creation_input_tokens: v().int(),
    cache_read_input_tokens: v().int()
  }).nullable()
}).describe("Breakdown of current context window usage by category (system prompt, tools, messages, etc.).")), d2n = p(() => u({
  subtype: A("mcp_call"),
  tool: o().describe("Fully-qualified MCP tool name, e.g. mcp__server__tool_name. Plugin-hosted servers are ordinary MCP servers here \u2014 e.g. mcp__plugin_documents_docs__doc_export (server names are normalized: non-[a-zA-Z0-9_-] becomes _)."),
  arguments: ue(o(), oe()).optional().describe(`Tool arguments. When input_files/output_files are declared, any string VALUE that exactly equals "{{in:NAME}}" or "{{out:NAME}}" (whole string, not a substring) is replaced with the worker-chosen absolute path of that named staged file before the call; a token naming no declared file fails the request with staging error_code=tool_error, and every declared output's "{{out:NAME}}" token must appear in arguments (the substituted path is the only way the tool learns where to write, so an unreferenced output fails the request before the tool runs). With no files declared \u2014 including expires_at/timeout_ms-only staged calls \u2014 passed through unchanged.`),
  expires_at: o().optional().describe("RFC3339 deadline, REQUIRED when output_files are declared (a stale buffered drain must not overwrite rows written since). Sending expires_at routes the call through the staging engine, same as timeout_ms \u2014 the response gains a staging result. UNDELIVERED requests buffer durably and drain after reattach; a drain past this instant is dropped with staging error_code=expired instead of executing stale. Once delivered to a live worker the request is acked immediately and never redelivered \u2014 a worker killed mid-run surfaces as a missing response (apply your own deadline), not a later drain. An unparseable value is treated as already expired (fail closed)."),
  timeout_ms: v().optional().describe("Tool-execution timeout (staging and collection have their own transport timeouts). Clamped to [1000, 600000]; default 120000. Sending timeout_ms routes the call through the staging engine \u2014 so it is always enforced when present and the response carries a staging result; omit it for a plain call. Staged calls are POSIX-worker-only: on a Windows worker any staged-field call fails with a typed staging refusal."),
  input_files: T(u({
    name: o().regex(/^[A-Za-z0-9_-]{1,64}$/).describe('Handle referenced from arguments as "{{in:NAME}}". Unique within the request.'),
    lane_path: o().describe("Synced-file lane row to stage, e.g. /working/.cowork/originals/a.docx. A missing row fails with staging error_code=input_missing; the etag actually staged is echoed back in staging.inputs_used.")
  })).max(64).optional().describe("Declaring input_files or output_files makes this a STAGED call: rows are fetched from the synced-file lane into a private per-request temp dir the WORKER chooses (random, per-UID \u2014 the caller never sees or computes paths; it references files via tokens in arguments), the tool runs, and declared outputs are written back as lane rows (durable-at-ack PUT). The response then carries a `staging` result the caller switches on."),
  output_files: T(u({
    name: o().regex(/^[A-Za-z0-9_-]{1,64}$/).describe('Handle referenced from arguments as "{{out:NAME}}" \u2014 the tool is told (via the substituted path) where to write; the worker collects from exactly that path. Unique within the request.'),
    lane_path: o().describe("Synced-file lane row to write, e.g. /working/report.cd. Unique within the request (two outputs on one row would self-conflict under CAS). Outputs over the 25 MiB lane cap fail with staging error_code=output_too_large."),
    if_match: o().min(1).optional().describe("Opaque lane etag the output row must still carry for the write to land (CAS). Omitted = unconditional last-writer-wins (an empty string is rejected, not treated as unconditional). A row that moved since fails that output with staging error_code=output_conflict and the requested bytes are not written. Redelivery of a completed CAS write re-runs and conflicts with its own prior write \u2014 treat output_conflict on a retry as possible-prior-success and reconcile by etag.")
  })).max(64).optional()
}).describe("Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " + 'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected \u2014 ' + "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " + "resolves, the call errors with the URL in the message \u2014 open it " + "out-of-band, then retry mcp_call. " + 'STAGED calls (input_files/output_files declared) additionally stage lane rows in/out around the call \u2014 see the input_files describe. Staged failures come back as a success-subtype response whose staging field carries a typed error_code; subtype:error is emitted only when the call could not be attempted at all (server not connected, kill switch, dispatch failure) and means nothing ran. A target server that is not yet connected is brought up on demand: dispatch runs the deferred plugin/MCP startup resolution (the work a first model turn would have done) and waits up to 30s \u2014 shortened by expires_at when that is sooner \u2014 for the server to connect before answering "MCP server not connected", so a dispatch that races plugin startup (e.g. after an idle-wake reattach) succeeds instead of failing until a turn runs. Standard RPC semantics: a redelivered request_id supersedes the in-flight run (it is aborted and its response suppressed \u2014 exactly one response per request_id); conversion is idempotent, so re-running is safe. Cancellable via control_cancel_request.')), TY = p(() => u({
  content: oe(),
  structuredContent: ue(o(), oe()).optional(),
  _meta: ue(o(), oe()).optional().describe("The result's own `_meta`, minus the server's keys under the CLI-reserved `com.anthropic/` prefix. Absent when nothing is left. The `_meta` of a block inside `content` is not filtered."),
  staging: $e([ u({
    ok: A(!0),
    outputs: T(u({
      lane_path: o(),
      etag: o().describe("Opaque lane etag returned by the durable-at-ack PUT."),
      bytes: v().int()
    })),
    inputs_used: T(u({
      lane_path: o(),
      etag: o()
    })).describe("Lane etag each staged input actually carried.")
  }), u({
    ok: A(!1),
    error_code: U([ "expired", "input_missing", "output_too_large", "output_conflict", "timeout", "tool_error" ]),
    detail: o().describe("Plain-text detail for the requesting client. May carry user-document content (tool output, lane paths) \u2014 surface it to the user where helpful, but do not log it verbatim or feed it to analytics."),
    retryable: M().optional().describe("Present when the failure class is known (lane transport verdict, CAS rejection): true = safe to re-drive with the same request_id, false = deterministic. Absent = unknown; treat as non-retryable and switch on error_code.")
  }) ]).optional().describe("Present exactly when the request used any staged-call field (input_files, output_files, expires_at, timeout_ms) \u2014 such calls run through the staging engine even with no files, so expires_at is always honored. The error_code set is a stable cross-repo contract \u2014 extend it, never rename or repurpose members. A failure makes no guarantee about partial effects: earlier outputs may already have landed; retry with the same request_id is safe for outputs without if_match (unconditional PUTs re-land the same bytes), while if_match outputs surface output_conflict against their own prior write \u2014 reconcile by etag. On staged failures the tool may never have run, so content/structuredContent may be absent.")
}).describe("MCP tool result \u2014 the content array, structuredContent, and _meta " + "from CallToolResult. Content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets. Staged calls additionally carry a `staging` result.")), qo = p(() => u({
  subtype: A("rewind_files"),
  user_message_id: o(),
  dry_run: M().optional()
}).describe("Rewinds file changes made since a specific user message.")), wY = p(() => u({
  canRewind: M(),
  error: o().optional(),
  filesChanged: T(o()).optional(),
  insertions: v().int().optional(),
  deletions: v().int().optional(),
  skippedLinks: v().optional().describe(eo)
}).describe("Result of a rewindFiles operation.")), Go = p(() => u({
  subtype: A("cancel_async_message"),
  message_uuid: o()
}).describe("Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution. Also a no-op, on a worker that recognises held messages, for the queued re-run of an interrupted turn while that re-run also answers for other client messages, which cancelling it would close though nobody withdrew them; see the response.")), AY = p(() => u({
  cancelled: M()
}).describe("Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued), or that the request was declined: the uuid is that of the re-run of an interrupted turn which has still to end and also answers for other client messages. The re-run then goes on, and its result names the message. It is not declined once an interrupt that was for that re-run (one without for_user_message_uuids, or one that names a message that the re-run carries; not a send_now, and not the interrupt that a session service sends by itself when a computer is linked) has listed the uuid under still_queued: the re-run is then cancelled, and those other messages with it, each with a terminal cancelled lifecycle.")), sAo = p(() => Kr("kind", [ u({
  kind: A("workspace_root")
}), u({
  kind: A("diff_root")
}), u({
  kind: A("repo"),
  repo: o().describe("A repository, as owner/name.")
}) ]).describe("@internal A directory read_file resolves a relative path against.")), Bo = p(() => u({
  subtype: A("read_file"),
  path: o(),
  max_bytes: v().optional(),
  encoding: U([ "utf-8", "base64" ]).optional().describe("How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images."),
  anchor: sAo().optional().describe("@internal Resolve `path` against a directory the session looks up on each request, instead of the live cwd, which a `cd` in the shell moves. workspace_root is the root list_directory lists from. diff_root is the repository get_workspace_diff diffs, so a path taken from that diff opens the file the diff shows. It is refused in a session whose diff follows the shell's cwd between several repositories; a client that knows the repository should send `repo`. repo is the checkout the session declares for that repository or, failing that, diff_root when its origin remote ends in that owner/name. `path` must stay inside that directory as written (the check follows no symlink), and the read is gated as any other read_file is. A path that is `~`, starts with `~/` or leaves that directory, or an anchor the session cannot resolve, is refused with the error `read denied: <path>`. Leave the field out when there is no anchor: null is refused. A CLI that predates this field ignores it and reads against the live cwd; the response's `anchor` tells the two apart.")
}).describe("Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd by default and gated by the same read-permission rules as the Read tool.")), yY = p(() => u({
  contents: o(),
  absPath: o(),
  truncated: M().optional(),
  encoding: A("base64").optional().describe("Set when the request asked for base64. Absent means utf-8 \u2014 including when an older CLI ignored the request's encoding field."),
  anchor: U([ "workspace_root", "diff_root", "repo" ]).optional().describe("@internal The kind of the request's `anchor`, set when `path` was resolved against it. Absent when the request sent no anchor, or when an older CLI ignored it and read against the live cwd.")
}).describe("File contents for the remote sidebar viewer.")), Ho = p(() => u({
  subtype: A("list_directory"),
  path: o().describe('Directory to list, relative to the workspace root: the project root of the session, which is the directory the session was started in or, for a worker started ahead of its session, claimed for. A `cd` in the shell, entering a worktree, or a set_cwd after the first turn does not move it. "" or "." lists the root itself. "/" is the only separator and 1024 UTF-16 code units the most. Absolute, drive, UNC and ".." paths are refused as invalid_path, and so is a path with a backslash: a name that contains one cannot be listed. Some other names are refused as unsupported_name, for example one that ends in a dot or a space.')
}).describe('@internal List the direct children (names and kinds) of one directory below the workspace root of a remote session on Linux (every cloud session; a self-hosted runner on Linux). One level per request, no file contents. No symlink is followed: a path through or to a symlink is refused. A directory that a Read deny rule or a Read ask rule covers is refused, and such children are left out: the request cannot ask anyone. A directory whose every child is left out answers an empty listing, as an empty directory does. A refusal is the control error `list denied: <code>`, with code one of invalid_path, unsupported_name, symlink_in_path (a symlink at the workspace root or below it), path_not_canonical (a symlink above it, or a directory of the path was moved or removed while it was read; after either of these two codes the same request can succeed when it is sent again, if the tree changed), read_rule, not_found, not_a_directory, os_permission_denied, workspace_moved (the session works in a worktree or another directory now; this can last until the worker is restarted), unexpected_error. A rule for the whole Read tool refuses every listing as read_rule. Any other error text means the request was not served at all: the unsupported-subtype error below, `not_claimed` from a worker that is started but not yet claimed for a session, or the refusal of a client in between that does not know the request. Any other session, and a remote session on macOS, on Windows or under WSL, refuses the request as an unsupported subtype, as an older CLI does (the wording differs between a headless session and the Remote Control bridge). A remote session on Linux answers the same way while the request is switched off remotely; the switch is read for each request, so that answer can change within a session. To open a listed entry, send read_file the listed path, "/" and the entry name (the name alone when the listed path is ""), with `anchor` workspace_root. A response without `anchor` comes from a CLI that predates it, which read that relative path against the live cwd (a `cd` in the shell moves it), so it may be another file; for such a CLI, send an absolute path: the `cwd` of the first system/init message of the session, then the listed path, then the entry name. When the `absPath` of the listing starts with "/", that `absPath`, then "/", then the entry name is such a path too. Every later system/init carries the live cwd, not the root. A session whose system/init carries an empty `cwd` names no root to build that path from.')), RY = p(() => u({
  absPath: o().describe('The directory that was listed, as an absolute path: the workspace root, then the request path, so "" gives the root itself. A `cd` in the shell does not move it. Exception: a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) gets the request path as it was sent, which is never absolute. An older CLI that answers list_directory leaves the field out: the path is then built as the request text says, from the `cwd` of the first system/init message and the request path.'),
  entries: T(u({
    name: o(),
    isDirectory: M().describe("False for a symlink, whatever it points to: a symlink is a leaf of the tree and cannot be listed. False for a special entry too."),
    isSymlink: M().optional().describe("Present and true only for a symlink. The target is never read or returned."),
    isSpecial: M().optional().describe("Present and true only for an entry that is not a file, a directory or a symlink: a FIFO, a socket or a device. read_file does not open it. The kind is the one the directory records: for a name that something is mounted over, that is the kind of what lies underneath.")
  })),
  truncated: M().describe("True when entries were left out for their number. The listing is cut at the cap of 5000 entries for one response, after the sort by name, so the ones kept are the first in that order. In a directory with more than 50000 children the rest is dropped before the sort and before the Read rules hide any, so fewer than 5000 entries can come with it. False when no entry is returned, whatever the number of children: a listing of nothing but hidden children is the listing of an empty directory.")
}).describe("@internal The direct children of the requested directory, sorted by name with plain string comparison (uppercase before lowercase), not by locale.")), vY = p(() => u({
  oldStart: v().int(),
  oldLines: v().int(),
  newStart: v().int(),
  newLines: v().int(),
  lines: T(o())
}).describe("@internal One unified-diff hunk of the get_workspace_diff response.")), Ko = p(() => u({
  subtype: A("get_workspace_diff")
}).describe("@internal Requests the workspace git diff for the thin-client /diff dialog. The worker resolves one base ref for both stats and hunks (the merge-base with the base branch the session names, else the default branch, when HEAD is on another branch with commits beyond it, so committed and uncommitted changes show together, uncommitted rows first; otherwise working tree vs HEAD) and applies the standard caps (5s git timeout, 50 files, 1MB/file).")), CY = p(() => u({
  diff: u({
    stats: u({
      filesCount: v().int(),
      linesAdded: v().int(),
      linesRemoved: v().int()
    }),
    perFileStats: T(u({
      path: o(),
      added: v().int(),
      removed: v().int(),
      isBinary: M(),
      isUntracked: M(),
      status: U([ "added", "modified", "removed", "renamed", "copied" ]).optional().describe("How the file changed, in the same comparison as this row's added and removed counts: added, removed, renamed, copied, or modified (anything else, mode changes included). A move git's rename detection misses, such as one to a file not yet added to git, arrives as removed plus added. Absent from Claude Code versions that predate it, and on the rare reply whose git status lines don't line up with its counts; treat an unknown or absent value as modified."),
      previousPath: o().optional().describe("Renamed and copied rows: the old path as plain text, for display only. Absent, with newPath, when either name holds a character the CLI's path display refuses (controls, bidi and format characters, default-ignorables, non-ASCII spaces, U+FFFD) or could be read as another path (a backslash, a drive prefix or leading slash, a '..' part, ' => ')."),
      newPath: o().optional().describe("The path as plain text where it differs from path: the new path of a renamed or copied row (whose path is git's rename form), or the name of a row git quoted (a name with non-ASCII or special characters); for display only, never to join to a directory. Absent otherwise, and for the names previousPath lists.")
    })),
    hunks: T(u({
      path: o(),
      hunks: T(vY())
    })).describe("Diff text by path. A perFileStats row can have no entry here and be in neither skippedLarge nor restricted; it keeps its stats. Such rows include: a binary or untracked file; a symlink in the base commit; a submodule; a file under a git filter or working-tree-encoding; an index entry marked skip-worktree or assume-unchanged whose file on disk is not what the entry holds; and a file whose path on disk cannot be proven to be the one git listed, which is one reached through a link or junction, or, on a volume blind to letter case or Unicode form (macOS and Windows by default), one whose name or folder is spelled otherwise on disk than in git's index."),
    skippedLarge: T(o()).describe("Paths whose diff text exceeded the per-file or aggregate size cap, so they have stats but no hunks."),
    restricted: T(o()).describe("Paths whose hunk content was withheld by the diff surface's content-provenance gate: read-permission rules (same gate as read_file) plus this surface's stricter file-identity checks (symlink and hardlinked worktree files are refused here even where read_file serves them; so is a path that git diff lists as changed but that git holds in neither the diff's base commit nor the index). Stats remain visible."),
    source: $e([ u({
      kind: A("working-tree")
    }), u({
      kind: A("branch"),
      baseBranch: o(),
      baseRef: o()
    }) ])
  }).nullable()
}).describe("@internal Workspace git diff for the thin-client /diff dialog. diff is null when the workspace is not a git repo or is in a transient git state (merge/rebase/cherry-pick). Paths in skippedLarge carry no hunks entry at all \u2014 membership alone marks them as too large. An entirely empty hunks array with non-empty perFileStats is not by itself a failure signal: it is the normal shape when all changes are untracked (stats only \u2014 git diff emits no hunks for untracked files) or every file was withheld, and can also occur when the hunks fetch transiently failed and only stats are available.")), Fo = p(() => u({
  subtype: A("get_plan")
}).describe("@internal Read the session's current plan-mode plan. Unlike read_file, the caller does not need to know the plan file's path \u2014 the worker resolves its own plan slug. Never creates a plan slug or file.")), zY = p(() => u({
  exists: M(),
  content: o().optional().describe("Plan markdown. Present iff exists is true."),
  path: o().optional().describe("Absolute plan-file path on the session filesystem. Present when exists is true, except on connections that persist frames server-side (the local bridge-worker lane omits it; the plan content still ships).")
}).describe("@internal The current plan, or exists:false when none has been written.")), Yo = p(() => u({
  subtype: A("seed_read_state"),
  path: o(),
  mtime: v()
}).describe("Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path.")), Wo = p(() => u({
  subtype: A("hook_callback"),
  callback_id: o(),
  input: P8e(),
  tool_use_id: o().optional(),
  issued_at: v().int().nonnegative().optional().describe("@internal Epoch milliseconds on the sender's clock when this request was issued \u2014 informational only: a device client judges staleness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by this value against its own clock, and answers a stale delivery fail-safe (a guard answers 'retry') rather than leaving it unanswered. Optional and additive on the public hook_callback wire; hosts that do not know it ignore it."),
  deadline_ms: v().int().positive().optional().describe("@internal How long after issued_at, in milliseconds, the sender waits before proceeding without an answer. Lets a device client skip or stop work whose answer can no longer be heard. Absent = no deadline known. Optional and additive on the public hook_callback wire.")
}).describe("Delivers a hook callback with its input data.")), ky = "[A-Za-z0-9][A-Za-z0-9._-]{0,63}", Oy = "[A-Za-z]{1,64}", me = new RegExp(`^${ky}$`), Ny = new RegExp(`^${Oy}$`), bo = new RegExp(`^${ky}/${Oy}/\\d{1,4}$`), $o = /^[0-9a-f]{64}$/, iAo = /^[A-Za-z0-9+/]*={0,2}$/, kY = /^[^\p{Cc}\p{Cf}\u2028\u2029]+$/u, Sy = 4096, OY = p(() => u({
  id: o().regex(bo).describe(`@internal "<instance_id>/<event>/<index>", index being the entry's position within that event's forwarded list at capture. The schema checks the shape only; matching the instance_id prefix to the request is the receiver's job. Echoed back verbatim as hook_callback.callback_id; never reused for a different hook within one instance.`),
  event: o().regex(Ny).describe("@internal Hook event name. A plain string rather than the HookEvent enum so an older worker tolerates an event it does not know: it ignores that entry instead of rejecting the whole registration."),
  matcher: o().max(512).optional().describe("@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."),
  kind: U([ "command", "http" ]).describe("@internal Hook kind on the device. prompt, agent and mcp_tool hooks are never forwarded; a new kind is a deliberate schema change."),
  timeout_s: v().positive().max(600).optional().describe("@internal The hook's own timeout in seconds, when configured; the worker derives its deadline from it."),
  source: U([ "user", "local", "flag" ]).describe("@internal Settings source on the device: user settings, the checkout's settings.local.json, or a --settings file."),
  has_condition: M().optional().describe("@internal The entry carries an if-condition, evaluated on the device; the condition text never leaves it."),
  target_pinned: M().optional().describe("@internal The device digested the hook's script at start-up and re-verifies those bytes before each run; the digest itself is not sent."),
  author_opt_in: M().optional().describe("@internal Runs at the hook author's explicit request (cloud: 'device' in its settings entry): it starts in the project folder, and its command may not be pinned to a script the session cannot change.")
}).describe("@internal One forwarded device hook: identity and routing data only \u2014 never a command line, URL, path, header or condition text."));

var NY = p(() => u({
  template: o().regex(me).describe("@internal Built-in template id, looked up in the worker's own table."),
  digest: o().regex($o).describe("@internal Lowercase hex sha256 of the template script version enabled on the device; the worker installs the template only when this equals its table's digest."),
  event: o().regex(Ny).describe("@internal Hook event name, as for inventory entries."),
  matcher: o().max(512).optional().describe("@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."),
  timeout_s: v().positive().max(600).optional().describe("@internal Timeout in seconds, when configured.")
}).describe("@internal A vetted template the device has enabled, to run IN the container. Carries nothing executable: the worker derives the file and the command line from its own table.")), IY = p(() => u({
  after_edit: v().int().nonnegative().optional().describe("@internal PostToolUse / PostToolUseFailure hooks whose matcher can only match file-writing tools. The worker never forwards after-edit events for those tools (the device copy of the file is stale or absent), so such a hook could never fire and is not sent."),
  kind_unsupported: v().int().nonnegative().optional().describe("@internal Hooks of a kind that is never forwarded: prompt, agent, mcp_tool."),
  plugin: v().int().nonnegative().optional().describe("@internal Hooks contributed by plugins, which this version does not forward."),
  managed: v().int().nonnegative().optional().describe("@internal Hooks from managed (policy) settings, which this version does not forward."),
  other: v().int().nonnegative().optional().describe("@internal Every other hook not sent: on an event that is not forwarded, a duplicate of one already listed, or beyond a cap.")
}).describe("@internal Counts of this device's hooks that were not forwarded, for the session line. Each such hook is counted in exactly one field, the first that applies in this order: plugin or managed (by its source); other, when its event is not forwarded at all; kind_unsupported; after_edit; other again for anything else, such as a duplicate or an entry beyond a cap. Absent fields mean zero.")), c2n = p(() => u({
  subtype: A("register_device_hooks"),
  instance_id: o().regex(me).describe("@internal Minted once per device client process and stable across its reconnects and re-registrations; the owner key in the worker's store and the first segment of every hook id."),
  display_name: o().min(1).max(64).regex(kY).optional().describe("@internal What the session line calls the device: no control, format or line-separator characters (receivers still sanitize before display); the worker falls back to instance_id when absent."),
  lease_s: v().int().min(60).max(3600).optional().describe("@internal Requested lease in seconds (default 600); the worker caps it and returns the effective expiry. Re-send the request to renew; a repeat from the same instance replaces its entries."),
  worker_epoch: v().int().min(1).optional().describe("@internal The worker life the device believes it addresses; a mismatch is answered with a stale_worker_epoch error."),
  hooks: T(OY()).max(128).describe("@internal The forwarded inventory. An empty array together with an empty templates array unregisters this instance; both keys are required so an omission is a parse error, not an unregister."),
  templates: T(NY()).max(8).describe("@internal Vetted templates enabled on the device, to run in the container."),
  held: IY().optional().describe("@internal How many of its hooks the device did not forward and why; informational, absent = none reported.")
}).describe("@internal Registers this device's hooks with the worker \u2014 unrelated to device registration or bind. Sent by a claude --cloud device client after it attaches to a cloud session (never as an initial event of the create): names, by opaque id, which of the user's own hooks the worker should ask this device to run over hook_callback, and which vetted templates to run in the container. The worker rejects requests over 64 KiB with invalid_registration. Error replies use the standard error response with a message that starts with a code token and a colon: hook_forwarding_disabled (off for this session; not retryable, nothing stored), hook_forwarding_not_ready (retry after a short backoff), invalid_registration, or stale_worker_epoch (re-read the worker epoch and re-send). A worker that predates the request answers with the usual unsupported-subtype error.")), Ty = p(() => u({
  template: o().regex(me),
  status: U([ "installed", "awaiting_upload", "interpreter_unavailable", "install_failed", "unknown_template", "version_mismatch", "event_not_allowed", "disabled" ])
}).describe("@internal Outcome for one requested template.")), wy = String.raw`(?!\.\.?(?:\/|$))[^/\\\p{Cc}\p{Cf}\u2028\u2029]+`, Ay = new RegExp(`^\\/(?:${wy}(?:\\/${wy})*\\/?)?$`, "u"), yy = p(() => ({
  project_dir: o().max(Sy).regex(Ay).describe("@internal The container's project root, for path translation on the device: absolute, no '.' or '..' segments, no backslash, no control or format characters. Untrusted by the device all the same, which must containment-check every translated path."),
  cwd: o().max(Sy).regex(Ay).describe("@internal The container's working directory at registration time, same shape as project_dir; may differ from it."),
  worker_epoch: v().int().min(1).describe("@internal The worker life that answered.")
})), tft = p(() => Kr("status", [ u({
  status: A("registered"),
  ...yy(),
  lease_s: v().int().min(1).max(3600).describe("@internal Effective lease in seconds after capping."),
  lease_expires_at: zO().describe("@internal ISO 8601 UTC instant the lease expires (no offset), as Date.prototype.toISOString renders it."),
  accepted: v().int().nonnegative().describe("@internal Forwarded entries installed as callbacks."),
  ignored: v().int().nonnegative().describe("@internal Entries not installed: event not forwarded by this worker, unknown kind, malformed, or duplicate id."),
  ignored_ids: T(o().regex(bo)).max(128).optional().describe("@internal Ids of the ignored entries."),
  templates: T(Ty()).max(8).describe("@internal One row per requested template."),
  replaced_owner: o().regex(me).optional().describe("@internal instance_id of a different device client this registration displaced, if any."),
  away_since: zO().optional().describe("@internal Present when THIS instance was being skipped as away (two forwarded runs went unanswered in a row) until this registration cleared it: the ISO 8601 UTC instant the worker stopped asking it. Absent for a first registration, a device that was never away, and a registration that displaces a different device.")
}), u({
  status: A("unregistered"),
  ...yy(),
  ignored_ids: T(o().regex(bo)).max(128).optional().describe("@internal Ids of the ignored entries."),
  templates: T(Ty()).max(8).optional().describe("@internal One row per requested template.")
}) ]).describe("@internal Success payload answering register_device_hooks: 'registered' while this instance holds entries and a lease; 'unregistered' when an empty inventory removed them, or when nothing it sent could be held (every entry ignored, no template stored or installed) \u2014 then ignored_ids and templates say why.")), u2n = p(() => u({
  subtype: A("upload_device_hook_template"),
  template: o().regex(me).describe("@internal Built-in template id."),
  digest: o().regex($o).describe("@internal Lowercase hex sha256 of the decoded content; must be one of the worker's own table digests for this template."),
  content_base64: o().max(36e4).regex(iAo).describe("@internal The template script bytes, base64; decoded size must not exceed the template's cap (at most 256 KiB)."),
  worker_epoch: v().int().min(1).optional().describe("@internal The worker epoch the sender believes it is talking to; a mismatch is refused so the device starts over against the new worker.")
}).describe("@internal Sent by a claude --cloud device client BEFORE register_device_hooks for each vetted template it wants run in the container; a register that arrives first reports awaiting_upload and the device registers again after uploading. The worker keeps the bytes for its own life only after hashing them against its own table; nothing executable is taken from the wire. Idempotent. Errors: hook_forwarding_disabled | hook_forwarding_not_ready (retryable) | stale_worker_epoch | invalid_upload | template_refused: unknown_template, version_mismatch, too_large or digest_mismatch.")), PY = p(() => u({
  template: o().regex(me),
  digest: o().regex($o),
  status: U([ "stored", "already_stored" ])
}).describe("@internal Success payload answering upload_device_hook_template.")), p2n = p(() => u({
  subtype: A("remote_tools_announce"),
  instance_id: o().regex(me).describe("@internal Minted once per client process, stable across reconnects and re-announces: the owner key on the worker, which addresses its remote_tool_call requests to it. Same alphabet as register_device_hooks.instance_id."),
  worker_epoch: v().int().min(1).optional().describe("@internal The worker life the client believes it addresses; a mismatch is answered with a stale_worker_epoch error."),
  host: ue(o(), oe()).describe("@internal The machine's description in the remote-tool protocol's HostDescription shape (name, kind, platform, working_dir, project_sync, limits, claude_code_version, epoch \u2014 epoch is required on this channel); parsed by that protocol, not here."),
  tools: T(ue(o(), oe())).max(16).describe("@internal The native tools the machine serves, one entry each: {name (Bash, Read, Write, Edit), refused_input_fields, protocol_versions, description?, input_schema?} in the remote-tool protocol's AnnouncedTool shape. Entries are validated one by one by that protocol (a bad one is reported back in ignored_tools, the rest stand), so they are not typed here."),
  passthrough: T(ue(o(), oe())).max(1024).describe("@internal The machine's own MCP tools ('<server>__<tool>'), one entry each: {name, local_name, description?, input_schema, annotations?, hints?} in the protocol's AnnouncedPassthrough shape, validated one by one like tools (an entry the worker cannot present as announced, or one beyond the most it keeps, is reported back in ignored_tools; a list longer than 1024 entries is an invalid announce); a worker that adopts them presents them to the model and forwards their calls to the machine over this channel."),
  plumbing: T(o().min(1).max(64)).max(8).describe("@internal Plumbing tools the machine answers over remote_plumbing_call for the session's own machinery; never model-facing.")
}).describe("@internal Sent by a claude --cloud client that serves tools for this session: which machine it is and which tools it serves, replacing the device-bridge tools/list announcement. Re-sent on reconnect, on worker init and when what it serves changes; all three lists empty withdraws the machine (the keys are required so an omission is a parse error, not a withdrawal) \u2014 and from an instance the worker has not heard of, says the machine serves nothing. A first-party cloud worker acts on it only when the session service stamped the event as coming from a verified device of the account (device_attestation_status VERIFIED_BY_GATE or better); an announce below that floor is dropped unanswered. Errors (message starts with the code and a colon): remote_tools_disabled, remote_tools_not_ready (retryable), stale_worker_epoch, invalid_announce.")), MY = p(() => u({
  status: U([ "announced", "withdrawn" ]),
  worker_epoch: v().int().min(1).optional(),
  protocol_version: v().int().positive().nullable().describe("@internal The wire version the worker will speak with this machine, or null when they have none in common: the machine stays listed and nothing is forwarded to it."),
  passthrough_adopted: v().int().nonnegative().optional().describe("@internal Present on every acknowledgement from a worker that adopts the machine's MCP tools over this channel: how many it kept from this announce (0 when it kept none \u2014 none carried, or none it could present; those are named in ignored_tools). Absent from a worker that does not adopt them (an older one, or one with adoption switched off) and while the worker cannot read the organisation's policy yet (passthrough_declined 'pending'): the machine keeps serving them over the device bridge."),
  passthrough_declined: U([ "policy", "pending", "unavailable" ]).optional().describe("@internal Why the worker adopted none of the machine's MCP tools this announce carried: 'policy' \u2014 the organisation's MCP server policy keeps the device bridge's server out of the session (passthrough_adopted is 0); 'pending' \u2014 that policy, or the server it is read against, is not known to the worker yet, so the MCP tools are left for the machine's next announce (passthrough_adopted is absent: the machine keeps the bridge for them meanwhile); 'unavailable' \u2014 this worker has no route to judge them (CCR injected no remote-devices server into the session), so it adopts none (passthrough_adopted is 0) and the machine need not re-announce for them. Absent otherwise."),
  ignored_tools: T(o()).optional().describe("@internal Announced entries the worker did not adopt, at most 32 named: an unknown native name, a malformed or duplicate entry, or an MCP tool beyond the most it keeps, whose name it could not present as announced, whose name the session service keeps for itself, or whose input schema the API cannot take."),
  worker_capabilities: T(o()).max(32).optional().describe("@internal Optional protocol features this worker reads, named only to a machine whose announce lists the matching host capability: 'still_here' \u2014 an announce marked 'still_here' is noted and nothing is taken from it. Absent from a worker that reads none of what the machine listed; the machine then sends none.")
}).describe("@internal Success payload answering remote_tools_announce.")), Iy = p(() => _t({
  content: T(oe()),
  isError: M().optional(),
  structuredContent: ue(o(), oe()).optional(),
  _meta: ue(o(), oe()).optional()
})), Xo = p(() => u({
  subtype: A("remote_tool_call"),
  instance_id: o().regex(me).describe("@internal The announcement this call is addressed to (remote_tools_announce.instance_id). A client that did not announce under this id stays silent: another attached client may own it."),
  host: o().max(64).describe("@internal The machine's announced name; informational twin of instance_id."),
  name: o().min(1).max(256).describe("@internal The announced tool to run."),
  input: ue(o(), oe()).describe("@internal The tool's own input, without the machine argument and without the envelope; {} for an outcome query."),
  envelope: ue(o(), oe()).describe("@internal The remote-tool protocol's request envelope, exactly what rides under the reserved arguments key on the device bridge: a call (call id = tool_use id, the session's permission mode, expiry, and on a second leg the session's answer to the machine's question) or an outcome query by its op. call_id is the serving side's run-at-most-once key across legs, redeliveries and queries; request_id is per leg. Parsed strictly by that protocol on the client."),
  tool_use_id: o(),
  issued_at: v().int().nonnegative().describe("@internal Epoch milliseconds on the sender's clock \u2014 kept on the wire but informational only: the serving client judges lateness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by issued_at on its own clock, and answers a late or undatable leg refused 'stale' \u2014 nothing runs \u2014 instead of leaving it unanswered. A durable catch-up into a fresh client still never runs an old call; the age check refuses it."),
  deadline_ms: v().int().positive().describe("@internal How long after issued_at the worker waits for the answer before proceeding without it.")
}).describe("@internal One leg of a tool call this session forwards to the attached machine that announced it serves the tool: the first leg, the approval leg (envelope.approval), a detached decline, or an outcome query (envelope.op = 'outcome_of'). Answered with a control_response whose success payload is the served CallToolResult; cancelled with control_cancel_request. An error-shaped control_response is not an answer (an older attached client error-replies subtypes it does not know); the worker keeps waiting.")), DY = p(() => u({
  result: Iy().describe("@internal The served CallToolResult for this leg, verbatim as the machine's serving code produced it; structuredContent['anthropic/remoteToolExecution'] is the remote-tool protocol's ResultEnvelope (completed, refused, failed, needs_approval, acknowledged, in_progress), parsed by the worker with that protocol.")
}).describe("@internal Success payload answering remote_tool_call: the result under one fixed key, never spread at the top level.")), Qo = p(() => u({
  subtype: A("remote_plumbing_call"),
  instance_id: o().regex(me).describe("@internal The announcement this call is addressed to; a client that did not announce under this id stays silent."),
  host: o().max(64).describe("@internal The machine's announced name; informational."),
  name: o().min(1).max(64).describe("@internal An announced plumbing tool."),
  args: ue(o(), oe()).describe("@internal The plumbing tool's arguments; no envelope rides with them."),
  issued_at: v().int().nonnegative(),
  deadline_ms: v().int().positive()
}).describe("@internal One call of a plumbing tool on the attached machine, made by this session's own machinery rather than the model: no envelope and no tool_use id. Answered with a control_response whose success payload carries that tool's CallToolResult; cancelled with control_cancel_request.")), xY = p(() => u({
  result: Iy().describe("@internal The plumbing tool's CallToolResult, verbatim.")
}).describe("@internal Success payload answering remote_plumbing_call.")), Jo = p(() => u({
  subtype: A("remote_tools_probe"),
  instance_id: o().regex(me).describe("@internal The announcement being probed; other clients stay silent."),
  issued_at: v().int().nonnegative(),
  deadline_ms: v().int().positive()
}).describe("@internal The worker's liveness check for an announced machine, sent only inside a live turn after minutes without hearing from it; a miss within deadline_ms marks the machine offline until it announces again or answers anything.")), LY = p(() => u({
  result: u({
    epoch: o().describe("@internal The machine's current serving epoch (its announced host.epoch).")
  })
}).describe("@internal Success payload answering remote_tools_probe.")), f2n = p(() => u({
  subtype: A("remote_tools_reannounce"),
  worker_epoch: v().int().min(1).describe("@internal The asking worker's life, as the worker states it. A client ignores an ask below the newest worker epoch it has heard and never addresses its announce by this value: the announce goes to the epoch last heard, and the worker's stale_worker_epoch answer teaches the client the current one."),
  deadline_ms: v().int().positive().describe("@internal How long the worker waits for an announcement; a client that receives the request later than this after the session service stored it does nothing.")
}).describe("@internal A replacement worker asks the attached client that serves this session's tools to announce it, when a call names a machine its roster lacks. Not addressed to an instance: the worker knows none. A client that serves the machine announces, overriding once what it believes the worker already holds; it honours one ask per epoch, another only when the announce that one made failed or went unanswered, and at most one per ten seconds, and does nothing for an ask it cannot date or read, or whose sender it would refuse a tool call from. Any other client, and a client that predates the request, does nothing or error-replies, and the worker reads no reply: it withdraws the request with control_cancel_request when its wait ends.")), lIe = p(() => u({
  subtype: A("turn_handoff"),
  messages: T($e([ rr(), nr() ])).min(1).max(200).describe("@internal The turn so far, in conversation order: the user's message, any [assistant, tool_result] rounds already answered elsewhere, and last an assistant message (thinking blocks with their signatures, text, and the tool_use blocks to run). Every message carries a uuid, kept as the transcript line's; none of the messages, and none of the tool_use ids they hold, may already be in the conversation \u2014 the turn is appended once, whole, never merged with lines already there (except as tool_use_ids describes for a turn that runs nothing). No two assistant messages share a message id, among these or with the conversation, with one exception, for a worker whose turn_handoff entry has shared_message_id: an assistant message that holds tool_use blocks only may repeat the id of the assistant message before it where every message between them, at least one, holds only tool_result blocks for that earlier message's calls. The two are then sent to the model as one message, its calls followed by their results, so a client does this only for calls of one Messages API response that it ran one after another. A request that names calls to run is refused (invalid_handoff) unless its first message is a user message, not empty and not a tool_result."),
  tool_use_ids: T(o()).max(16).describe("@internal The tool_use blocks of the last message to run, each of a tool named in the turn_handoff entry of the worker external_metadata; all run in one batch, then the model continues once. May be empty, and then nothing runs and no model turn follows: with every call the turn carries answered within it (the last message holding none), the worker appends the turn as history and, once the lines are stored, echoes the last assistant message that holds a call; with stopped, the user stopped the turn before its calls ran. In both cases, when a leading part of the turn is already in the conversation from an earlier delivery, only the rest is appended; where its first assistant message repeats the id of the last one already there, as messages allows, the two are sent to the model as one message."),
  stopped: A(!0).optional().describe("@internal Only true, and only with an empty tool_use_ids: the user stopped this turn while its last message, an assistant message holding calls that have not run, was being handed over. The worker appends the turn, closes those calls and marks the turn exactly as when a turn of its own is stopped before a call runs, and ends it with the result a stopped turn ends with; when an earlier delivery already appended the turn, the calls are closed in place."),
  relay_marker: u({
    type: A("system"),
    subtype: A("upgrade_relay_marker"),
    uuid: o(),
    content: o()
  }).optional().describe("@internal The system line that starts the prompt-cache relay for this conversation: uuid is the line's uuid, and content is the marker, a JSON string whose anchor_line_uuid is the uuid of the first of messages; other fields of the line are ignored. Only a worker that advertises relay_marker: true in turn_handoff_available uses it, on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet. It is never a reason to refuse the turn: when the member is not such a line, or the worker does not use the marker, the request is answered as without it."),
  memory_context: u({
    uuid: o(),
    version: o().nullable(),
    content: o().nullable()
  }).optional().describe("@internal The snapshot of the user's claude.ai memory that the client showed its model with the turn's user message. Used on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet: the worker writes it ahead of the first of messages, with uuid as the line's uuid, as a cowork_memory_context attachment line like those it writes for snapshots it fetches itself, and then adds no copy of that version. version and content are both strings for a snapshot, both null to withdraw an earlier one. The member is never a reason to refuse the request: one that is malformed, that has a version without content or the reverse, or whose uuid is also that of one of messages, of relay_marker or of a line the session's transcript holds, is ignored, and the turn goes on without the line."),
  message_client_platform: o().optional().describe("@internal The `anthropic-client-platform` value of the app a person sent the first of messages from. Left out when no person sent that message, as in a scheduled run. When it names one of the Remote Control apps (isRemoteControlAppPlatform) and that message is not one from another session, the worker marks the message as sent by a person, as it marks a user message that arrives with that value, so the turn counts as started by a person for the calls it runs and for those the model makes afterwards, and the turn the worker runs carries that value as its client platform, as a turn for such a user message does (per-turn telemetry, and tools that read which app the person is on). The member is never a reason to refuse the request: without it, or with any other value, the message is appended unmarked and the turn carries no platform."),
  file_names: T(u({
    file_uuid: o(),
    name: o()
  })).max(16).optional().describe("@internal Files a person attached to the conversation, each with the name the client showed its model for it, the most wanted first; at most 16. file_uuid is that of a file_attachments entry on a user message sent to this worker before the request. Only a worker that advertises file_names: true in turn_handoff_available uses the member, only on a request that names calls to run, and only when those calls run in the session's home directory: before they run, it copies each listed file it has downloaded into that directory, under that name, until a limit on time or on total size is reached, taking first the names that occur in the calls' own input. It replaces nothing then, skips a name it refuses or that the list holds twice, and, within one request, skips the further names of a file once it has found or placed one of them. If a person later sends another file under a name it placed, it puts that file's bytes in the copy's place, or removes the copy if it cannot, and only while the copy is still the file it placed, unchanged. The member is never a reason to refuse the request: a malformed one (a longer list included) is ignored whole, and the calls run whatever became of the copies."),
  safeguard_results: T(ue(o(), oe())).optional().describe("@internal The safeguard_results of the Messages API response that produced the last of messages, as its final frame gave them, when the client's request asked for the dangerous_tool_use safeguard. Used only on a request that names exactly one call to run, in a session whose tool calls the server-side classifier alone decides, and only where the worker's remote switch for it is on; a worker does not say whether it is. When the member holds a verdict on that call (a status of type evaluated), the verdict decides the call as it does a call of the worker's own request; where the last of messages repeats the message id of an earlier one, only a verdict that flags the call is used. Otherwise it is as if the member had not been sent, a malformed one included. The worker finds the verdict by the call's id, and takes it only where safeguard_tool_use, which must come with it, equals that call in the last of messages. A repeated message id apart, it cannot tell whether the call was that response's first, so that is for the client to answer for: a client sends a verdict that clears a call only for a response's first call. A hook of the worker's that changes the call's input voids the verdict. Of a flagged call's explanation the worker keeps only the name in brackets of a block rule that its own build knows, when that is the whole of it, and shows it to the model, in that build's spelling, in the denial, which is stored; anything else is dropped. Once the member holds a verdict and safeguard_tool_use equals the call, a worker whose flags have not loaded may hold the call up to 3 s for them, whatever its switch says. The member itself is never appended to the conversation and never a reason to refuse the request."),
  safeguard_tool_use: u({
    name: o(),
    input: ue(o(), oe())
  }).optional().describe(`@internal Read only with safeguard_results, whose verdict is not taken without it. The name and the input object of the tool_use block that the verdict is on, as the Messages API response gave them and before any change of the client's: from a stream, the input is what the block's input_json_delta parts parse to once joined, {} if there were none. The worker takes the verdict only where the name is the same string as that of the named call in the last of messages, and the input equals that call's. The inputs are compared as parsed JSON: the order of keys and the way a number or a string is written (1 and 1.0, an escape) do not count; the order of a list, the type of a value (1 and "1"), and a key that holds null against no key do. Without the member, where it is malformed, where it holds over 20,000 values, over 1,048,576 characters of strings and keys, or over 64 levels, itself counted, or where the two calls differ, by a change the client meant included, it is as if safeguard_results had not been sent. The member is never appended to the conversation and never a reason to refuse the request.`)
}).describe('@internal Sent by the session client to a worker that advertises turn_handoff in its external_metadata: hand over a turn whose final assistant message holds tool calls that have not run. The worker answers at once \u2014 success {status: "accepted"} (validated and queued; the messages are appended at the start of the turn that runs the calls, the last one echoed back as an assistant event before any call runs; a request that runs nothing (see tool_use_ids) for the same turn as one still queued to run replaces it), success {status: "duplicate"} (every named call is already taken by an earlier delivery or answered; nothing runs \u2014 taken, not necessarily ran; or, for a turn that runs nothing, its calls are already answered by other lines, or the same turn is already pending in that shape or running), or an error whose message starts with its code and a colon: turn_handoff_disabled, invalid_handoff, unsupported_tool, unknown_tool, recovered_by_restart (this worker restarted after the turn was appended and its recovery set the turn\'s unrun calls aside; this request will not run or close them), expired (the request names calls to run and the session service has held it for over 30 minutes, by the created_at of the frame that delivered it: the service hands a request that no worker answered to every later worker of the session; nothing is appended or taken, and a request that runs nothing is never refused for its age). Accepted calls get the permission evaluation of the worker (rules, the permission mode, can_use_tool to the client); their tool_result messages and the model continuation follow on the event stream as in any turn.')), UY = p(() => u({
  status: U([ "accepted", "duplicate" ]),
  tool_use_ids: T(o()).optional().describe("@internal The calls queued to run (status accepted).")
}).describe("@internal Success payload answering turn_handoff.")), Zo = p(() => u({
  subtype: A("mcp_message"),
  server_name: o(),
  message: zy()
}).describe("Carries one MCP JSON-RPC message for an SDK-hosted MCP server (one named in initialize.sdkMcpServers or added later with mcp_set_servers). Flows in both directions: the CLI sends it to the client to reach the in-process server, and the client sends it to the CLI to deliver that server's own messages. When the client answers, the success response carries the server's JSON-RPC reply under mcp_response; the CLI acknowledges a client-sent one with an empty success.")), VY = p(() => u({
  mcp_response: zy().optional().describe("The JSON-RPC response the SDK-hosted server produced for the delivered message (for a JSON-RPC notification, a response with an empty result). Present when the client answers a CLI-sent mcp_message; absent when the CLI acknowledges a client-sent one.")
}).describe("Success payload answering an mcp_message request.")), ea = p(() => u({
  subtype: A("mcp_set_servers"),
  servers: ue(o(), tr())
}).describe("Replaces the set of dynamically managed MCP servers.")), jY = p(() => u({
  added: T(o()),
  removed: T(o()),
  errors: ue(o(), o())
}).describe("Result of replacing the set of dynamically managed MCP servers.")), ta = p(() => u({
  subtype: A("reload_plugins"),
  hold_on_cache_impact: M().optional().describe("When true, the reload is not applied if applying it would change the session's tool list while the conversation's prompt cache depends on that list (the same check the interactive /reload-plugins makes before it asks for --force): the response then carries held: true and cache_impact, and the session keeps its current plugins. Default false: apply unconditionally.")
}).describe("Reloads plugins from disk and returns the refreshed session components.")), qY = p(() => u({
  commands: T(Ut()),
  agents: T(Zn()),
  plugins: T(u({
    name: o(),
    path: o(),
    source: o().optional(),
    version: o().optional().describe(ro)
  })),
  mcpServers: T(Jn()),
  error_count: v().int(),
  held: M().optional().describe("Present only when the request asked to hold on cache impact and this CLI ran the check. True: the reload was not applied, the lists above describe the session as it still is, and cache_impact says what applying would change. False: the check found no impact and the reload was applied. Absent: the request did not ask, or the CLI predates the option and applied the reload unchecked."),
  cache_impact: u({
    mcp_servers_added: T(o()),
    mcp_servers_removed: T(o()),
    lsp_tool_change: U([ "adds", "may-add", "removes", "may-remove" ]).nullable()
  }).optional().describe("What applying the held reload would change in the session's tool list: plugin MCP servers it would register or drop (scoped plugin:<plugin>:<server> names, plugin-authored \u2014 validate before showing) and whether it would add or remove the LSP tool (the may- forms mean the preview could not fully see the pending plugin set). Present only with held: true.")
}).describe("Refreshed commands, agents, plugins, and MCP server status after reload.")), sa = p(() => u({
  subtype: A("reload_skills")
}).describe("Reloads skills from disk and returns the refreshed skill list.")), GY = p(() => u({
  skills: T(Ut())
}).describe("Refreshed skill commands after reload.")), ra = p(() => u({
  subtype: A("reload_output_styles")
}).describe("Re-reads the output-style directories from disk (a style file written mid-session is otherwise invisible until the next session) and returns the refreshed style names. Also drops the shared markdown-file scan cache, so agents, skills and routines re-read their directories on their next use.")), BY = p(() => u({
  available_output_styles: T(o())
}).describe("Refreshed output style names after reload, built-in and custom, in the order the initialize response lists them.")), na = p(() => u({
  subtype: A("register_repo_root"),
  directory: o(),
  reload_claude_md: M().optional(),
  reload_plugins: M().optional(),
  reload_skills: M().optional()
}).describe("Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a strict subdirectory of cwd, or of a directory passed at launch via --add-dir / the SDK additionalDirectories option. A directory that is already a registered working directory (including a duplicate of an earlier request) is denied with an error; the registration pipeline and DirectoryAdded hooks do not re-run.")), HY = p(() => u({
  directory: o().describe("The registered root. A resolved absolute path \u2014 except on connections that persist frames server-side (the local bridge-worker lane echoes the request directory verbatim; the registration is still keyed on the resolved path locally).")
}).describe("Success payload answering register_repo_root.")), oa = p(() => u({
  subtype: A("set_cwd"),
  path: o().describe("Target directory. Tilde-expanded and realpath-canonicalized by the CLI, exactly like an interactive /cd argument."),
  trust_accepted: M().optional().describe("Host attestation that the user explicitly accepted a trust dialog for this directory. Only send true after showing one \u2014 the CLI records the directory as trusted (the same latch /cd's own prompt writes) before relocating. Requires trusted_directory."),
  trusted_directory: o().optional().describe("Required whenever trust_accepted is true: the exact directory string from the needs_trust response being answered. This pins the attestation to the canonical path the user was shown \u2014 if the raw path canonicalizes differently by the time the re-send arrives (e.g. a symlink component changed during the dialog), nothing is latched and a fresh needs_trust carries the new canonical directory.")
}).describe("@internal Moves the session to a new working directory \u2014 the headless twin of /cd, for SDK hosts like Claude Desktop. Runs the same validation, Cd(...) permission rules, and relocation path as the interactive command, with the trust prompt delegated to the host via the needs_trust response arm. Before the first turn the move re-anchors start-of-session state (the first request is built as for a start in the new directory, no move notice); after a turn the prefix is preserved and the move arrives as an appended notice. SessionStart hooks are never re-run by set_cwd (those of the launch directory already ran and their output stays in the session); a host that starts the process before its directory is known should use --await-claim and claim_session, which run them in the bound directory instead. Rejected while a turn is in flight.")), KY = p(() => Kr("status", [ u({
  status: A("ok"),
  cwd: o().describe("Canonical (realpath) working directory the session now runs in."),
  changed: M().describe("False when the target already was the working directory \u2014 a successful no-op with no side effects."),
  transcript_relocated: M().describe("True when the transcript lives in the project slot derived from cwd (the normal case, and the no-op case). False only on the documented edge where the move completed but the transcript move failed AND the rollback chdir failed \u2014 a cwd-derived resume lookup will then miss the session.")
}), u({
  status: A("needs_trust"),
  trust_root: o().optional().describe("Present when `directory` sits inside a git repository whose canonical root differs from it (a subdirectory or a linked worktree). Accepting trust grants that whole repository \u2014 every subdirectory and linked worktree of the root \u2014 so the trust dialog should name this root alongside `directory`. Informational only: the attestation echo still pins `trusted_directory` to `directory`. Vetted by the same visible-glyph rule as `directory`; a canonical root that fails it is omitted rather than carried."),
  directory: o().describe("Canonical target directory. Nothing changed; show a trust dialog for exactly this string and, on accept, re-send with trust_accepted: true and trusted_directory echoing it verbatim. Safe to render verbatim in the dialog, by construction: every character is a visible, space-distinguishable glyph. Targets whose canonical path contains control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points are rejected (reason: unsafe_path) before this arm can carry them.")
}), u({
  status: A("rejected"),
  reason: U([ "not_found", "not_a_directory", "blocked_by_rule", "busy", "unsafe_path" ]).describe("unsafe_path: the target's canonical path contains characters that do not render as visible, space-distinguishable glyphs \u2014 control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points; rejected fail-closed before the trust round-trip, and the offending path is never echoed back."),
  message: o().describe("Human-readable, ANSI-free explanation.")
}) ]).describe("@internal Result of a set_cwd request. Every non-ok outcome leaves the working directory unchanged \u2014 but trust may already have been durably recorded when the request carried a valid attestation (a busy rejection or relocation failure after the latch does not unlatch it; the consent was for the directory, not the attempt). Internal failures (e.g. the transcript move failed and was rolled back) arrive as a control_response error instead.")), m2n = p(() => u({
  subtype: A("claim_session"),
  cwd: o().describe("The session's working directory. Tilde-expanded and realpath-canonicalized; treated exactly like the cwd a process is spawned in (no trust prompt, no Cd(...) rule check) \u2014 the host chose it, as it chooses a spawn cwd."),
  env: ue(o(), o()).optional().describe("Per-session environment additions. Only keys on the claim allow-list are accepted (keys the process has already consumed \u2014 config dir, base URL, proxy/TLS, provider, telemetry, entrypoint \u2014 must be part of the spare's spawn env); any other key rejects the claim and leaves the spare parked."),
  additional_directories: T(o()).optional().describe("Extra directories the session may access, as --add-dir."),
  permission_mode: o().optional().describe("Session permission mode, as --permission-mode. Part of the claim (not a follow-up set_permission_mode) so that a mode the process cannot take \u2014 bypassPermissions on a spare spawned without --allow-dangerously-skip-permissions, a mode this build does not know, one the claimed directory's settings disable \u2014 refuses or fails the claim instead of letting the first turn run under the spare's mode."),
  system_prompt: T(o()).optional().describe("As initialize.systemPrompt."),
  append_system_prompt: o().optional().describe("As initialize.appendSystemPrompt."),
  agents: ue(o(), oe()).optional().describe("As initialize.agents."),
  title: o().optional().describe("As initialize.title."),
  sdk_mcp_servers: T(o()).optional().describe("The session's final set of in-process SDK MCP server names. Diffed against the set registered while parked: new names are connected, missing ones disconnected. Omitted: the parked set stays."),
  include_initialize: M().optional().describe("When true the ok response also carries the payload an initialize response would (commands, agents, models, account \u2026) computed for the claimed directory, for hosts that render them."),
  workspace_trust: u({
    accepted: M(),
    directory: o()
  }).optional().describe("As initialize.workspaceTrust, for a claimed spare: the host's attestation that the user accepted a trust dialog for the session's folder, judged against the claimed cwd once the spare has moved there, by the same rule (honored only from the process that owns the CLI's stdin, and only when `directory` resolves to that folder's trust key). A spare's own initialize arrives in its parking directory and records nothing, so a host that attests sends it here. workspace_trust_recorded in the response (and in the returned initialize payload) reports the outcome.")
}).describe("@internal Binds a parked spare (a process started with --await-claim in a neutral directory with the host-level options) to its session: relocates it to cwd as if it had been spawned there, applies the per-session prompt options and in-process MCP server set, starts the SessionStart hooks, and registers the session. Model, thinking budget and flag-settings overlays are not claim fields: send set_model / set_max_thinking_tokens / apply_flag_settings right behind the claim; the control loop applies them in order before it reads the first message. A set_model that arrives before the first message is applied the way --model is at start-up: it writes no /model entries to the transcript and makes no extra API call to confirm a model id the local checks accept. Accepted once, only on a parked spare, only before any turn. A request that fails validation is refused before anything is touched and leaves the spare parked; a failure after that point leaves the spare unusable (discard it).")), FY = p(() => u({
  status: A("ok"),
  cwd: o().optional().describe("Canonical working directory the session now runs in (omitted when the canonical path carries invisible or non-printing characters, which are never echoed)."),
  session_id: o(),
  parked_ms: v().optional().describe("How long the spare was parked before this claim."),
  sdk_mcp_settled: M().describe("Whether the in-process SDK MCP handshakes registered while parked had completed when the claim arrived (false: the first turn still waits for them)."),
  initialize: ue(o(), oe()).optional().describe("Present when include_initialize was true: the initialize-shaped payload for the claimed session."),
  workspace_trust_recorded: M().optional().describe("As initialize's workspace_trust_recorded: present when the claim came from the process that owns the CLI's stdin and carried workspace_trust with accepted true and an absolute directory; true when the claimed folder is now recorded as trusted (or already was), false when the attestation was not honored.")
}).describe("@internal Result of a successful claim_session. Failures arrive as a control_response error whose message starts with a reason token (not_a_spare, already_claimed, busy, turn_started, env_key_not_claimable:<KEY>, cwd_not_found, cwd_not_a_directory, \u2026); the spare stays parked after any of them.")), aa = p(() => u({
  subtype: A("mcp_reconnect"),
  serverName: o()
}).describe("Reconnects a disconnected or failed MCP server.")), ia = p(() => u({
  subtype: A("mcp_toggle"),
  serverName: o(),
  enabled: M()
}).describe("Enables or disables an MCP server.")), la = p(() => u({
  subtype: A("mcp_read_resource"),
  serverName: o().describe("Server name, as mcp_status reports it (not normalized)."),
  uri: o().describe("The resource to read. Must use the ui:// scheme; any other URI is refused.")
}).describe('Reads one MCP Apps (SEP-1865) UI resource \u2014 a `ui://` URI, typically the `_meta.ui.resourceUri` a tool declares \u2014 from a connected MCP server the CLI itself dialed, with `resources/read`, for a host that renders it. Read-only and no model turn. The reply is untrusted third-party content (HTML): render it sandboxed. SDK-type MCP servers (config.type === "sdk") are rejected \u2014 they are caller-provided, so the caller can read them directly. Errors name the cause: a non-ui:// URI, an unknown server, a server that managed policy blocks, that is disabled or that the project has not approved (the refusals mcp_reconnect gives), a server that is not connected (failed, pending or needs-auth: send mcp_reconnect; a connected server, or one still listed from the discovery cache, is read through the same connect path a tool call takes), a response over the size limit, or the server\'s own resources/read error. Refused on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) and by the client of a cloud-hosted session. Advertised as `mcp_read_resource_v1` in system/init.capabilities.')), YY = p(() => u({
  contents: T(u({
    uri: o(),
    mimeType: o().optional(),
    text: o().optional(),
    blob: o().optional().describe("Base64, for a binary item."),
    _meta: ue(o(), oe()).optional().describe("The content item's own `_meta` as the server sent it (MCP Apps puts the resource's `ui.csp` and `ui.permissions` here), minus keys under the CLI-reserved `com.anthropic/` prefix.")
  }))
}).describe("The server's resources/read result for an mcp_read_resource request.")), da = p(() => u({
  subtype: A("set_mcp_permission_mode_override"),
  serverName: o(),
  mode: de().nullable(),
  askForTools: T(u({
    name: o().regex(ran)
  })).max(yNt).nullish().describe("@internal With mode 'default': tools of this server, named without the mcp__<server>__ prefix (a name sent with it is stored without it; the 64-character limit applies to the name as sent), that must ask even where the tool would otherwise allow itself (today only Claude in Chrome's safe permissionless tools, e.g. tabs_context_mcp). Held beside the pin: a clear, an 'auto' pin, or a pin sent without this member (or with null or an empty list) removes the list, silently. A list of the wrong shape is refused and changes nothing.")
}).describe("@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) \u2014 and only when the session mode would already auto-allow \u2014 so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions.")), Ry = () => o().regex(/^[A-Za-z0-9-]{1,64}$/), g2n = p(() => u({
  subtype: A("set_chrome_browser_hints"),
  preferredDeviceId: Ry().nullable().optional(),
  localDeviceIds: T(Ry()).max(32),
  hostPlatform: U([ "darwin", "win32", "linux" ]).optional()
}).describe("@internal The host's view of which Claude in Chrome browser this session should use when several are connected to the account: `preferredDeviceId` is the browser its user picked last on that computer, `localDeviceIds` the relay device ids it knows to be running on that computer right now, `hostPlatform` that computer's OS (for the weaker same-OS label). Session memory only, never persisted; the built-in claude-in-chrome server reads them as its persisted pick and its on-this-computer set, so it defaults to that browser instead of asking. Hints only: nothing is selected unless it is in the live relay roster, and an empty list clears them.")), h2n = p(() => u({
  subtype: A("set_prompt_suggestions_paused"),
  paused: M()
}).describe("@internal Pauses (true) or un-pauses (false) the session's prompt suggestions at runtime, for a host whose composer is not on screen: while paused, no turn end starts a suggestion, and the first turn end after paused is set back to false does. The state is one boolean in this CLI process, on top of the initialize request's promptSuggestions option and the user's own setting, neither of which it changes: a respawned or resumed session starts unpaused, so the host must send it again, and with two clients attached one client's pause applies to both. Acknowledged with an empty success; a CLI build where this is not yet enabled acknowledges and keeps generating, and an older CLI answers an unknown-subtype error.")), ca = p(() => u({
  subtype: A("stop_task"),
  task_id: o()
}).describe("Stops a running task.")), ha = p(() => u({
  subtype: A("background_tasks"),
  tool_use_id: o().optional().describe("When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics).")
}).describe('Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks \u2014 the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.')), WY = p(() => u({
  backgrounded: M().optional().describe("Present only when the request named a tool_use_id: whether a matching foreground task was found and backgrounded. Empty object when all foreground tasks were backgrounded.")
}).describe("Success payload answering background_tasks.")), ua = p(() => u({
  subtype: A("get_task_output"),
  task_id: o().describe("A shell or Monitor task of this session, running or ended: the task_id from task_started or background_tasks_changed.")
}).describe("Reads the end of one background shell or Monitor task's output: at most the last 8 KiB the command wrote, the same tail the terminal's /tasks detail view reads. Read-only and no model turn; a host polls it while the task runs, and can read it once more after the task ends. The output is whatever the command printed, escape sequences included: render it as plain text. Refused for a task_id that is neither a shell or Monitor task of this session nor shaped like one (an ended task's id whose file is gone reads as empty), and on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker).")), $Y = p(() => u({
  output: o().describe("The end of the output, decoded as UTF-8; empty when the command has written nothing yet."),
  total_bytes: v().describe("The size of the whole output in bytes."),
  truncated: M().describe("Whether output holds only the end of a longer output (the last 8 KiB).")
}).describe("Success payload answering get_task_output.")), pa = p(() => u({
  subtype: A("apply_flag_settings"),
  settings: ue(o(), oe())
}).describe("Merges the provided settings into the flag settings layer, updating the active configuration.")), _a = p(() => u({
  subtype: A("get_settings")
}).describe("Returns the effective merged settings and the raw per-source settings.")), ma = p(() => u({
  subtype: A("update_settings"),
  source: U([ "localSettings", "userSettings" ]).describe("Which settings file to write: the project's local settings file, where /config's writes land, or the user's settings file, which takes effortLevel only."),
  settings: ue(o(), oe())
}).describe("Writes settings through the CLI's own writer. For localSettings, merges the given keys into the project's local settings file (canonical store root, gitignore upkeep, hardened write) and live-applies them \u2014 the same path /config uses; allowlist: outputStyle. For userSettings, takes effortLevel only and saves it as the default for the session's current model, under modelSettings as /effort saves it ('max' is session-only and is not written; the running session's level is not set here \u2014 send apply_flag_settings for that). Unlike apply_flag_settings, which only touches the session-scoped flag layer. Each file feeds hook and permission-rule loading, so each allowed key is a security decision. String values only (key deletion is not supported); refused on remote transports and in sessions whose --setting-sources exclude the target source.")), XY = p(() => u({
  effective: ue(o(), oe()),
  sources: T(u({
    source: U([ "userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings" ]),
    settings: ue(o(), oe())
  })).describe("Ordered low-to-high priority \u2014 later entries override earlier ones."),
  applied: u({
    model: o(),
    effort: U([ "low", "medium", "high", "xhigh", "max" ]).nullable(),
    advisor: o().nullable().optional().describe("Advisor model that will be attached to API requests, after enablement, allowlist, and pairing validation. Null when none will be attached; absent on workers that predate the field."),
    ultracode: M().optional().describe("Whether ultracode (standing dynamic-workflow orchestration, at any effort level) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings)."),
    ultracodeRequested: M().optional().describe("Whether ultracode is requested for the session (the `ultracode` settings key or /effort ultracode), whether or not it can take effect (see `ultracodeAvailable`). `ultracode` reports whether it is in effect."),
    ultracodeAvailable: M().optional().describe("Whether ultracode can be turned on for the session: dynamic workflows are enabled and the model supports it. Hosts should offer an Ultracode control only while this is true.")
  }).optional().describe("Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API."),
  errors: T(or()).optional().describe("Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above \u2014 their settings are not reflected in `effective` or `sources`."),
  remote_control_policy_lock_reason: o().optional().describe("@internal Why org policy or managed settings lock `remoteControlAtStartup`; absent when allowed. Fails closed while the policy is unverified.")
}).describe("Effective merged settings plus raw per-source settings in merge order.")), ga = p(() => u({
  subtype: A("get_hooks_listing")
}).describe("Returns the hooks listing the CLI's read-only /hooks menu renders: settings-file, session, and plugin hooks grouped by event and matcher, with display-ready strings (control characters revealed) and the policy and safe-mode state the menu banners on. A snapshot at request time; hosts re-request when their surface opens.")), QY = p(() => u({
  events: T(u({
    name: o().describe("Hook event name."),
    summary: o().describe("One-line summary, as the /hooks event list shows."),
    supportsMatcher: M().describe("Whether hooks on this event can carry a matcher."),
    hookCount: v().describe("Number of listed hooks.")
  })).describe("Events that have at least one listed hook, in the /hooks menu\u2019s lifecycle order."),
  hooks: T(u({
    event: o(),
    matcher: o().describe("Matcher with control characters revealed; '' when the entry has none."),
    source: o().describe("Raw source name (userSettings, sessionHook, pluginHook, \u2026)."),
    sourceLabel: o().describe("User-facing source description."),
    pluginName: o().optional(),
    type: o().describe("Hook type (command, prompt, agent, http, mcp_tool, \u2026)."),
    displayText: o().describe("List-row label: statusMessage when set, else the identity text; one line, control characters revealed."),
    commandText: o().describe("Identity text \u2014 the literal command/prompt/URL that runs, control characters revealed."),
    contentLabel: o().describe("Label for commandText (Command, Prompt, URL, \u2026)."),
    condition: o().optional().describe("If-condition, revealed, when set."),
    timeout: v().optional().describe("Timeout in seconds."),
    statusMessage: o().optional(),
    runsOnce: M().optional(),
    runsInBackground: M().optional(),
    disabled: A(!0).optional().describe("True when the session's mode or policy keeps this hook from running (the policy block and safeMode/bareMode say why); absent on rows that run."),
    editable: u({
      matcher: o(),
      config: ue(o(), oe()),
      headersRedacted: A(!0).optional()
    }).optional().describe("The entry as stored (raw matcher, '' when none, and raw hook object; no display escaping) for a host's edit form and as the target it names to `claude edit-hook`. Only on rows from a settings file this session reads and may write. HTTP header values are blanked (headersRedacted); a replace that sends no headers keeps the stored ones.")
  })).describe("One row per listed hook: events in lifecycle order, matchers in the menu\u2019s priority order."),
  eventCatalog: T(u({
    name: o(),
    summary: o(),
    supportsMatcher: M()
  })).describe("Every hook event in lifecycle order (name, the /hooks summary, whether its hooks take a matcher), for an add-hook form."),
  policy: u({
    disabledByPolicy: M().describe("Managed disableAllHooks \u2014 nothing runs at all."),
    managedOnly: M().describe("Managed allowManagedHooksOnly \u2014 non-managed hooks are blocked and managed hooks are intentionally not listed."),
    pluginOnly: M().describe("Managed strictPluginOnlyCustomization locks the hooks surface."),
    allDisabled: M().describe("Effective disableAllHooks, whatever source set it."),
    policyHookCount: v().describe("Hooks configured in managed settings (they run even under a non-managed disableAllHooks)."),
    policyUnreadable: A(!0).optional().describe("Present when a managed settings source exists but could not be read: what the organization configured is unknown, so edit_hook refuses every edit (fail-closed) and a host locks its editing controls, as it does under the three locks above.")
  }),
  safeMode: u({
    managedHooksStillApply: M(),
    exitHint: o().describe("How to leave safe mode, per its activation source.")
  }).optional().describe("Present only when the session runs under --safe-mode."),
  bareMode: u({
    exitHint: o().describe("How to leave bare mode, per its activation source.")
  }).optional().describe("Present only under --bare / CLAUDE_CODE_SIMPLE with the hooks surface gated off: settings-file, flag, policy, and plugin hooks never fire there; session hooks still run."),
  errors: T(or()).optional().describe("Settings files skipped by the merge \u2014 their hooks are neither listed nor running.")
}).describe("The hooks listing the CLI's /hooks menu renders, with display-ready strings.")), fa = p(() => u({
  subtype: A("list_permission_rules")
}).describe("Requests the session's live permission rules and workspace directories \u2014 the same data /permissions lists in the terminal: rules from settings files plus session-only approvals, slash-command grants, and --allowedTools flag rules, each with its source.")), JY = p(() => u({
  prefix: o(),
  emphasis: o().optional(),
  suffix: o().optional()
}).describe(`The CLI's plain-language reading of a rule (e.g. "Any Bash command starting with npm run"), split into parts so hosts can render the rule-derived fragment the way the terminal does (bold). prefix and suffix are fixed words; emphasis is rule content \u2014 apply display hygiene (invisible-character escaping) before rendering it.`)), ZY = p(() => u({
  behavior: U([ "allow", "deny", "ask" ]),
  source: U([ "userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings", "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy", "hostCredential" ]).describe("Where the rule comes from. Mirrors PermissionRuleSource (permissionRuleLookup.ts PERMISSION_RULE_SOURCES); the parity test in test/cli/headlessControl/listPermissionRules.test.ts keeps the two aligned."),
  rule: o().describe("The stored rule string VERBATIM, exactly as the session holds it. Two stored spellings that parse identically each get their own entry. Can carry invisible or control characters by design \u2014 escape at display."),
  description: JY().optional().describe("Plain-language reading of the rule; absent where the terminal shows no subtitle either."),
  editability: U([ "persistent", "session", "readonly" ]).describe("Where the rule lives: 'persistent' (userSettings/projectSettings/localSettings \u2014 saved in a settings file), 'session' (cliArg/session \u2014 in memory only, for the rest of this session), or 'readonly' (policySettings/flagSettings/command and every other source \u2014 the set the terminal's /permissions treats as read-only). Informational for hosts; this request never changes rules."),
  notInEffect: M().optional().describe("Present (true) when enterprise managed settings pin allowManagedPermissionRulesOnly and this rule, read from a non-policy settings file, is ignored by the session. Such rows are readonly.")
}).describe("One permission rule with its provenance and where it lives.")), eW = p(() => u({
  path: o(),
  source: o().describe("Where the directory grant came from: a settings source (e.g. 'localSettings'), 'cliArg' (--add-dir), or 'session' (/add-dir, IDE workspace folders).")
}).describe("One additional working directory in the permission scope.")), tW = p(() => u({
  rules: T(ZY()),
  workspaceDirectories: T(eW()),
  originalCwd: o().describe("The session's original working directory."),
  managedOnly: M().describe("True when enterprise managed settings pin allowManagedPermissionRulesOnly: the session applies policy rules only, and rules from other settings files appear with notInEffect set."),
  errors: T(or()).optional().describe("Settings parse and validation errors, as get_settings reports them. When non-empty, the listed files were skipped \u2014 their rules are not in the session and not listed above.")
}).describe("The session's live permission rules state, as list_permission_rules reports it.")), sW = p(() => u({
  state: tW()
}).describe("Success payload of list_permission_rules.")), ba = p(() => u({
  subtype: A("elicitation"),
  mcp_server_name: o(),
  message: o(),
  mode: U([ "form", "url" ]).optional(),
  url: o().optional(),
  elicitation_id: o().optional(),
  requested_schema: ue(o(), oe()).optional(),
  property_order: T(o()).optional().describe(`requested_schema.properties' top-level keys in the order the MCP server listed them; absent for URL mode and when the schema has no properties object. For a host whose transport keeps no JSON object key order (a protobuf Struct, say). Names that look like array indices ("0", "1", \u2026) come first, in JavaScript's object key order.`),
  title: o().optional().describe("Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`."),
  display_name: o().optional().describe("Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name."),
  description: o().optional().describe("Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description.")
}).describe("Requests the SDK consumer to handle an MCP elicitation (user input request).")), aAo = p(() => u({
  action: U([ "accept", "decline", "cancel" ]),
  content: ue(o(), oe()).optional()
}).describe("Response from the SDK consumer for an elicitation request.")), Ea = p(() => u({
  subtype: A("request_user_dialog"),
  dialog_kind: o().describe('Identifier for the dialog the host should render. Open string union \u2014 new kinds may be added without bumping the protocol. A kind is only sent in sessions where some attached client declared it in initialize.supportedDialogKinds (declare exactly the kinds you can render); on multi-client transports the request still reaches every attached client. A host that receives a kind it did not declare must not answer it (an error-subtype response is discarded and the dialog stays pending) \u2014 never with {behavior: "cancelled"}, which is a real settlement treated as the user dismissing the dialog. An unanswered dialog is cancelled by the CLI after its dialog deadline.'),
  payload: ue(o(), oe()).describe("Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely."),
  tool_use_id: o().optional()
}).describe("Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback.")), kon = p(() => u({
  behavior: U([ "completed", "cancelled" ]),
  result: oe().optional().describe("Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind.")
}).describe("Response from the SDK consumer for a request_user_dialog request.")), Ta = p(() => u({
  subtype: A("submit_feedback"),
  description: o(),
  surface: U([ "cli", "ccd", "ccr", "ide", "sdk", "cowork" ]).optional().describe("Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'."),
  draft_id: o().optional().describe("UUID of a local SendFeedback draft under ~/.claude/feedback/drafts/. When set, the handler reads the stored draft, rebuilds the description via buildDraftDescription() (so the upload matches the consent form the user reviewed; the cwd is neither uploaded nor named on the form's consent line \u2014 it never uploads as metadata, though a transcript attachment, separately consented, still carries real paths), bundles the draft's own transcript per attach_transcript, and deletes the draft file on success. The caller's description/type/title/area override the stored draft when provided (user edits on the review form)."),
  type: U([ "bug", "idea", "missing_capability" ]).optional(),
  title: o().optional(),
  area: o().optional(),
  attach_transcript: M().optional().describe("Whether to bundle the draft's source-session transcript with the upload. Only meaningful alongside draft_id \u2014 the non-draft path always bundles the current session (unchanged). Defaults to true."),
  save_locally: M().optional().describe("The host told the user this report is saved on this machine and nothing is sent (feedback_mode 'bundle' when it read the mode). Honored even if the mode has since become 'post' or 'share' (a mid-session sign-in): the report is bundled, never sent; a mode of 'disabled' still refuses it. Ignored with draft_id.")
}).describe("@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command \u2014 when feedback is disabled (org policy, env kill-switch) or cannot be sent (3P provider, no Anthropic credentials) the response carries unavailable_reason instead of an error. A request carrying save_locally gets the terminal's local save instead: the report is written to a redacted zip on this machine and the response carries bundle_path, nothing sent \u2014 except where feedback is disabled, which still refuses.")), rW = p(() => u({
  feedback_id: o().nullable(),
  unavailable_reason: o().optional().describe("Human-readable reason /feedback is disabled in this session (3P provider, org policy, env var). When set, no submission was attempted."),
  is_zdr_org: M().optional(),
  failure_reason: o().optional(),
  status_code: v().int().optional(),
  ccshare_url: o().optional().describe("Internal share URL for the conversation. Only set in internal builds, when the upload succeeded or was handed to the host machine to finish (the page then appears once the person confirms the upload there); absent otherwise."),
  bundle_path: o().optional().describe("In 'bundle' feedback mode (SDKFeedbackMode): the absolute path of the redacted zip the report was written to on this machine, instead of being sent; feedback_id is then the bundle id. Absent in every other mode.")
}).describe("@internal Result of a submit_feedback request. feedback_id is set on success (a sent report, or a bundle written to bundle_path); otherwise one of unavailable_reason / failure_reason explains why.")), wa = p(() => u({
  subtype: A("remote_control_work_secret"),
  session_id: o().describe("The attached claude.ai session whose worker token needs renewing.")
}).describe("@internal Request from the CLI subprocess to the SDK host for the session's re-dispatched work secret, sent when a bridge attached with `remote_control {work_secret}` needs a fresh worker token (before expiry, or during auth recovery). The host re-queues the session on its bridge environment and answers with the secret its next work poll delivers, or null when it has none yet \u2014 the CLI asks again on its own retry cadence.")), lAo = p(() => u({
  work_secret: o().nullable()
}).describe("@internal The re-dispatched base64url work secret for the requested session, or null when the host has none available yet.")), Aa = p(() => u({
  subtype: A("oauth_token_refresh")
}).describe("@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token.")), dAo = p(() => u({
  accessToken: o().nullable(),
  reason: U(jn).optional().catch(void 0).describe("Why the host returned no token (only meaningful when accessToken is null). Absent from hosts that do not say. Null, unknown or malformed values degrade to undefined at parse time (the enum carries `.catch`), so a reason can never cost a delivered token and values can be added without a version bump.")
}).describe("@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available.")), ya = p(() => u({
  subtype: A("host_auth_token_refresh")
}).describe("@internal Request from the CLI subprocess to the SDK host for a fresh provider credential after a 401 or an AWS / Google Cloud credential failure when the host owns the credential (Cowork 3P).")), cAo = p(() => u({
  authToken: o().nullable(),
  materialUnchanged: M().optional()
}).describe("@internal Fresh provider bearer token returned by the SDK host getHostAuthToken callback, or null if the credential was refreshed out-of-band. materialUnchanged is only consulted when authToken is null (out-of-band delivery) \u2014 true tells the CLI to fast-fail instead of backing off. A local AWS / Google Cloud credential-chain failure in the CLI is capped at two retries whatever the reply.")), y2n = p(() => u({
  subtype: A("message_rated"),
  messageUuid: o().describe("UUID of the assistant message being rated."),
  sentiment: U([ "positive", "negative" ]).describe("User rating: positive (thumbs up) or negative (thumbs down)."),
  surface: U([ "tool_use", "assistant_text" ]).optional().describe("Which in-conversation surface the rating came from. If omitted, logged as tool_use."),
  cleared: M().optional().describe("True when the caller is un-rating a message (clicking the same control a second time).")
}).describe("@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI.")), nW = p(() => u({}).describe("@internal Empty response for message_rated.")), Ton = p(() => U([ "AskUserQuestion", "UserMessage", "AssistantMessage", "ToolUse", "ToolResult", "ToolGroup", "ToolProgress", "CommandOutput", "Spinner", "TurnDuration", "InfoNotice", "SessionMode", "PromptHint", "AbovePrompt", "Pane" ]).describe("@internal A component a plugin may draw through `ui.render`: one name per render site of the hooks engine (src/plugins/functionHooks/types/render/render-component.ts).")), go = p(() => $e([ o(), Tk(() => Py()) ]).describe("@internal One child of a render element: a string inside Text (or Box, where the engine wraps it in a Text), or a nested element.")), Cy = p(() => ue(o(), $e([ o(), v(), M() ])).describe("@internal Style overrides the surface applies while the pointer is over the nearest keyed Box above the element, or over any member of the hover group `scope` names (a string of the drawing plugin's; two plugins never share a group): a Box's `borderStyle`, `borderColor`, `borderDimColor`, `backgroundColor`, `display` (\"flex\", revealing a Box drawn \"none\") and the offsets of a placed Box; a Text's or a Button label's colors and styles. Plain data the engine validated; nothing that moves a sibling.")), fo = p(() => u({
  plugin: o(),
  handle: v().int()
}).describe("@internal Where the element's handler lives: the plugin whose hook drew it and the handle its environment keeps the closure under, stamped by the engine as the tree left that hook. What a ui_press, ui_input or ui_select names the element by; a redraw hands out new handles.")), Py = p(() => $e([ u({
  type: U([ "Box", "Text", "div", "span", "b" ]),
  props: ue(o(), $e([ o(), v(), M() ])).optional().describe('@internal Layout props on Box (`key` makes it a hover scope; `position` "absolute" with integer `top`/`left`/`right`/`bottom` cell offsets places it over its surroundings, out of the flow), color and style props on Text (with `size`, `weight`, `mono` and `tabular`, which each surface draws its own way; `bold` is true for a `semibold` or `bold` weight, and a `bold: true` with no weight also carries `weight: "semibold"`), spacing on Box in cells (on `desktop` and `mobile` also a step name, `xs` to `xl`), a `style` declaration string on div/span/b; the allowlisted subset the engine validated before the tree crossed.'),
  hover: Cy().optional(),
  group: u({
    plugin: o()
  }).optional().describe("@internal Whose hover group `hover.scope` names: the plugin whose hook drew the element; present only with a `scope`."),
  part: u({
    plugin: o()
  }).optional().describe("@internal Whose part of the drawing starts at this Box or Text: set by the engine on each ui.render hook's returned root, so a surface can tell one mod's drawing from another's. A hook's own mark is kept, another plugin's at most as often as next(e) handed it, and an engine node (core's drawing) carries none. A hook above may change what a part holds, so the mark does not prove who wrote it."),
  children: T(Tk(() => go())).optional()
}), u({
  type: A("Button"),
  props: u({
    key: o(),
    label: o(),
    hotkey: o().optional(),
    action: o().optional(),
    plain: A(!0).optional(),
    dimColor: M().optional(),
    variant: U([ "primary", "secondary" ]).optional(),
    role: U([ "dismiss" ]).optional(),
    autoFocus: A(!0).optional()
  }).describe("@internal A button: `label` its text, `key` its address (what `ui.press` carries as `element`). `hotkey` (one digit or lowercase letter) presses it while the plugin's site holds the keyboard; `action` names an engine keybinding action whose chord presses it from the prompt; `plain` draws it without chrome (`hotkey: label`, or the label alone); `dimColor` dims the label at rest; `variant` `primary` marks the main action of several, drawn as the surface draws the one to press, while `secondary` and absent are the default look (carried as the plugin wrote it, never filled in; `plain` wins over it); `role` `dismiss` marks the Button that closes its site, a drawing hint only (the terminal draws it as without; a desktop its native close control, the label its accessible name; carried as written, never filled in); `autoFocus` starts the site's focus ring here. A press is a ui_press naming `press.plugin` and `press.handle`. `children`, when present and not empty, are drawn in the label's place, all of them one pressable: strings and Text elements only; `label` then names the control, and is what a surface that draws no children draws."),
  press: fo(),
  hover: Cy().optional(),
  children: T(Tk(() => go())).optional()
}), u({
  type: A("Input"),
  props: u({
    key: o(),
    label: o().optional(),
    placeholder: o().optional(),
    value: o().optional(),
    submitLabel: o().optional(),
    autoFocus: A(!0).optional()
  }).describe("@internal A one-line text field: `label` before it, `placeholder` dim while empty, `value` the text it holds when drawn, `submitLabel` what Enter does, `autoFocus` as a Button's. The surface keeps the text the person types; each change is a ui_input of kind `change`, Enter one of kind `submit`, naming `press.plugin` and `press.handle`; no children."),
  press: fo()
}), u({
  type: A("Select"),
  props: u({
    key: o(),
    label: o().optional(),
    options: T(u({
      value: o(),
      label: o().optional()
    })),
    value: o().optional(),
    autoFocus: A(!0).optional()
  }).describe("@internal A one-of-several picker: `options` in the order drawn (at least one, values unique, each drawn as its `label`, else its `value`), `value` the one selected when drawn, `label` before it, `autoFocus` as a Button's. A pick is a ui_select carrying the option's `value` and naming `press.plugin` and `press.handle`; no children."),
  press: fo()
}), u({
  type: A("Link"),
  props: u({
    href: o(),
    label: o().optional()
  }).describe("@internal A hyperlink: `href` is https (or http://localhost), bounded and free of control characters as the engine validated it; the children are the text drawn (absent them the label, absent both the URL). A remote surface draws an anchor that opens outside the app."),
  children: T(Tk(() => go())).optional()
}), u({
  type: A("Code"),
  props: u({
    source: o(),
    language: o().optional(),
    path: o().optional(),
    startLine: v().int().optional(),
    format: U([ "source", "diff" ]).optional(),
    wrap: U([ "wrap", "truncate-end" ]).optional()
  }).describe('@internal Source code the surface draws with its own highlighter: `language` a highlight.js id or alias, else inferred from `path` (never read); `startLine` numbers a line gutter; under `format: "diff"` `source` is unified-diff hunks the engine checked parse; `wrap` is `wrap` (the default) or `truncate-end`, which cuts long lines with an ellipsis. `source` is bounded and free of control characters as the engine validated it; no children.')
}), u({
  type: A("Markdown"),
  props: u({
    key: o().optional(),
    text: o(),
    dimColor: M().optional(),
    pressableLinks: T(o()).optional()
  }).describe("@internal A block of markdown the surface draws as it draws an assistant reply (its own renderer, links, tables, code fences), dim when `dimColor`; `text` is bounded and free of control characters as the engine validated it; no children. A link whose URL scheme is not https, http or file is drawn as text, never clickable (the plugin must not choose the URL handler a click reaches). With `press` the plugin answers its links: a plain click on one (any, or one `pressableLinks` names) is a ui_press carrying `href`, and the surface does not open it; `key` is then present, the address `ui.press` carries as `element`."),
  press: u({
    plugin: o(),
    handle: v().int()
  }).optional()
}), u({
  type: A("Client"),
  props: u({
    key: o(),
    module: o(),
    props: oe().optional(),
    width: $e([ v(), o() ]).optional(),
    height: $e([ v(), o() ]).optional(),
    flexGrow: v().optional()
  }).describe("@internal A region one of the plugin's surface modules draws locally: `module` is that module's path under the plugin's folder (`hooks/board.tsx`, what ui_client_module lists it by), `key` addresses the instance (what `ui.message` carries as `element`), `props` is plain data the engine bounded, `width`/`height`/`flexGrow` size it as a Box. `client.plugin` says whose surface module. Carried as data: a surface without a surface-module runtime draws nothing for it; no children."),
  client: u({
    plugin: o()
  })
}), u({
  type: A("Svg"),
  props: u({
    source: o(),
    alt: o(),
    width: v().optional(),
    height: v().optional(),
    isInteractive: M().optional()
  }).describe("@internal A vector leaf of the desktop and mobile surfaces: `source` is SVG markup the surface draws in an isolated box (the desktop an image, or a sandboxed frame when `isInteractive`; the mobile app a sandboxed web view), `alt` what it says. Bounded by the engine (128 KiB of source, 4096 px) before it crossed; no children.")
}), u({
  type: A("engine"),
  ref: v().int().describe("@internal Which drawing of the engine-owned component sits here: 0 draws the original props; any other ref names the props the ui_render response carries.")
}) ]).describe("@internal A plain-data tree a `ui.render` hook returned, as the hooks engine validated it: Box, Text, div, span or b with children, a Button, Input or Select leaf carrying the `press` that names its handler, a Link with its text, a Code leaf, a Markdown leaf, a Client leaf (a surface-module region, carried as data; never on mobile), an Svg leaf (desktop and mobile; never the terminal), or an engine node the surface draws itself (src/plugins/functionHooks/types/element/render-element.ts).")), My = p(() => u({
  seq: v().int(),
  t0: v()
}).describe("@internal Timing marks a benchmarking client attaches to a ui_render request; the response echoes them unchanged so the client can join its own marks to the CLI debug log lines keyed `instance_id#seq`.")), Dy = p(() => u({
  columns: v().int().positive(),
  rows: v().int().positive(),
  isFullscreen: M().optional().describe("@internal Whether this surface docks a pane beside the transcript, so a pane a plugin opens unasked is a sidebar and not a takeover; the hooks read it as `e.viewport.isFullscreen`. Leave it out until the surface can say (absent is unknown, not false); a surface with no dock at all says false. A change re-runs the hooked sites as a change of columns does.")
}).describe("@internal The size of the pane the surface draws the component in, in character cells of the surface's monospace font (its width and height over the code font's advance and line height), and whether its layout docks a pane; the hooks reached see it as `e.viewport` (src/plugins/functionHooks/types/render/render-viewport).")), oW = p(() => u({
  first: v().int().nonnegative(),
  last: v().int().nonnegative(),
  of: v().int().positive()
}).refine(e => e.first <= e.last && e.last < e.of).describe("@internal The part of a transcript message the asking surface has in its viewport: units `first` to `last` (inclusive, `first <= last < of`) of the message's whole extent `of`, in whatever the surface lays out with (lines, pixels), counted from the message's start. The hooks reached see it as `e.props.onScreen`.")), H = p(() => U([ "desktop", "mobile", "vscode" ]).describe("@internal A surface that draws over the wire: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code). What the client declared, a rendering fact and not a trust signal.")), xy = p(() => U([ "terminal", "desktop", "mobile", "vscode" ]).describe("@internal Where the engine draws: the terminal (Ink) or a remote surface (src/plugins/functionHooks/types/render/render-surface).")), aW = /^[A-Za-z0-9._-]{1,64}$/, x = p(() => o().regex(aW).describe("@internal The asking client's id on the session's roster of attached surfaces: 1 to 64 of letters, digits, `.`, `_`, `-`. Two phones are two ids on one surface; a client that never attaches is the engine's `<surface>:default`, which no wire id can spell.")), _2n = p(() => u({
  subtype: A("ui_attach"),
  surface: H(),
  client_id: x(),
  viewport: Dy().optional(),
  answers: T(Tk(() => Aon())).max(AW).optional().describe("@internal The engine's requests this client answers on a plugin's behalf: `ui_copy` (its clipboard), `ui_prompt_read` / `ui_prompt_fill` / `ui_prompt_suggest` (its composer), `ui_read_selection` (what the person has selected in its page). The engine sends each only to a client that named it; a client that never names any (or names `[]`) is never asked, so `$.ui.copy` to its surface answers `no-clipboard`, the prompt calls the empty box / false and `$.ui.selection` nothing, as before. On a repeated ui_attach a given list (including `[]`) replaces the earlier one and an absent field keeps it: send `[]` to stop answering.")
}).describe("@internal A remote surface joins the session: the engine adds the client to its roster of attached surfaces and raises `session.attach` for it (`$.session.surfaces()` then lists the surface). Idempotent per client_id. A client that never sends it is attached by its first ui_render, under `<surface>:default`; every client still attached detaches when the session ends.")), iW = p(() => u({
  surfaces: T(xy()).describe("@internal The surfaces the session draws on after the attach, each once: `terminal` first when bound, then the remote surfaces in attach order.")
}).describe("@internal The roster of surfaces after a ui_attach.")), b2n = p(() => u({
  subtype: A("ui_detach"),
  client_id: x()
}).describe("@internal A remote surface leaves the session: the engine drops the client from its roster and raises `session.detach` with reason `detach`. A client_id not on the roster changes nothing.")), lW = p(() => u({
  detached: M().describe("@internal Whether the client_id was on the roster."),
  surfaces: T(xy()).describe("@internal The surfaces the session draws on after the detach.")
}).describe("@internal The roster of surfaces after a ui_detach.")), S2n = p(() => u({
  subtype: A("ui_render"),
  surface: H().describe("@internal The surface asking: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code); the hooks reached see it as `e.surface` and answer from that surface's element table."),
  client_id: x().optional().describe("@internal The asking client, as its ui_attach named it. The ask puts it on the roster when it is not there: the id given, else `<surface>:default`."),
  component: Ton(),
  instance_id: o().describe("@internal The engine's requestId for this instance: the tool_use_id of a tool row or dialog, the message id of a message, the uuid of a command's output row (its twin's), 'session-mode' for the session chip. Two drawings of one component are two instances."),
  props: ue(o(), oe()).describe("@internal The component's plain-data props as the asking surface holds them; the `ui.render` site rule validates their shape per component. `output` on a ToolUse is capped at 64 KB before the chain sees it."),
  viewport: Dy().optional(),
  on_screen: oW().nullable().optional().describe("@internal What of this instance the asking surface's viewport shows now, for a transcript message (UserMessage, AssistantMessage, ToolUse, ToolResult, ToolGroup, CommandOutput, TurnDuration, InfoNotice): the extent, or null while the surface draws it outside its viewport. The engine hands it to the hooks as `e.props.onScreen` for this surface's ask alone (a rewrite of it is refused) and never carries one surface's report to another; leave it out when the surface does not track visibility, and ask again, coalesced to the surface's frame, when it changes, so the hooks re-run for the messages crossing the viewport's edges."),
  content_rows: v().int().nonnegative().optional().describe("@internal For a `Pane` or `AbovePrompt` ask: the rows the instance's whole tree lays out to as the surface last drew it (the window itself rides `props.scroll`), so a plugin's `$.ui.scroll` to `end` knows the last offset. Leave it out before the first layout."),
  keyed: T(Tk(() => Uy())).max(Vy).optional().describe("@internal For a `Pane` or `AbovePrompt` ask: where the keyed elements of the tree last drawn sit, so a plugin's `$.ui.scroll({ to: { key } })` lands; without it that call is denied."),
  bench: My().optional()
}).describe('@internal Ask the hooks engine to draw one component instance for a remote surface: runs the `ui.render` chain (every plugin hooked on it, then core) with the surface asked and answers the tree plus the props core was handed. A session with no hooks module loaded answers `{tree: {type: "engine", ref: 0}, hooked: false}` without running anything. Re-ask every mounted instance on each `ui_invalidate` system message, and an instance whose `on_screen` changed.')), dW = p(() => u({
  tree: Py(),
  props: ue(o(), oe()).describe("@internal What to draw the first engine node with: the chain's rewrite of the props, or the input's own. Props under any later engine node do not cross (the ledger holding them is process-local)."),
  rewritten: M().describe("@internal True when `props` is not the object the request carried."),
  hooked: M().describe("@internal Whether any loaded plugin hooks `ui.render` for this component; false means the surface may stop asking for it until the next ui_invalidate."),
  client_modules: ue(o(), o()).optional().describe("@internal For each plugin whose `Client` nodes the tree carries, the hash of its surface modules as ui_client_module serves them; the surface loads a plugin's modules once per hash and remounts its Clients when it changes. A plugin absent here has no surface module loaded: its Clients draw a fault line."),
  drawn_by: T(o()).optional().describe("@internal The plugins something of `tree` or `props` may be owed to, by the name each is loaded under, in chain order: those whose `ui.render` hook ran for this ask and did more than hand on (told one by one for the vscode surface; elsewhere neighbours that share the sandbox are told together), or every plugin hooked on the instance where that is not known. Plugins the binary carries are left out, so an empty list says the drawing is Claude Code's own. The engine's word, which no hook can set: what a surface marks a drawing with. Absent from a CLI that predates the field: whose the drawing is, is then not known."),
  bench: My().optional()
}).describe("@internal What one remote-surface evaluation of `ui.render` produced, plus whether a plugin is hooked on the component at all.")), L0t = p(() => u({
  subtype: A("ui_press"),
  plugin: o().describe("@internal The plugin whose hook drew the pressed element, as the tree carried it."),
  handle: v().int().describe("@internal The handle the element carried (`press.handle`), naming the onPress closure held in that plugin's environment."),
  key: o().optional().describe("@internal The element's own key as the tree carried it. When sent and not empty, a handle held under another key answers `{handled: false}` and nothing runs: the page's tree is not this process's."),
  surface: H().default("desktop").describe("@internal The surface the press came from, as the ui_render that drew the element named it; absent means `desktop`. The `ui.press` hooks reached see it as `e.surface`."),
  href: o().max(2048).optional().describe("@internal For a press on a link inside a `Markdown` element that carries a `press` (its plugin answers its links): the link's target as the tree's text wrote it, one `pressableLinks` names when that list is present. The `ui.press` hooks reached see it as `e.link.href`. Absent for a Button; a Markdown handle without it runs nothing."),
  client_id: x().optional().describe("@internal The pressing client, as its ui_attach named it; optional, and the press runs the same with or without it.")
}).describe("@internal A press on an element a plugin drew for a remote surface: a Button, or a link inside a Markdown whose plugin answers its links (with `href`). Runs the `ui.press` chain with the element's closure at the bottom. A CLI whose engine has no press site answers `{handled: false}`.")), cW = p(() => u({
  handled: M().describe("@internal False when the engine has no press site, the handle named no held element, or it named one held under another key than the request sent; nothing ran, and the tree the surface holds is stale: it asks ui_render again."),
  element: o().optional().describe("@internal The element whose handler the press reached, when one did.")
}).describe("@internal Whether a ui_press reached a handler, and which.")), W = 256, ir = 16384, Ra = p(() => u({
  plugin: o().max(W).describe("@internal Whose surface module the Client runs, as the node carried it (`client.plugin`)."),
  component: Ton(),
  instance_id: o().max(W).describe("@internal The engine's requestId of the instance the Client was drawn in: what the ui_render that carried it named."),
  client: o().max(W).describe("@internal The Client node's own `key`."),
  module: o().max(W).describe("@internal The Client node's `module`: which of the plugin's surface modules runs there, its path under the plugin's folder.")
}).describe("@internal Where a Client node a remote surface drew sits: what a ui_client_press, ui_message or ui_client_fault names before anything runs.")), w2n = p(() => u({
  subtype: A("ui_client_module"),
  plugin: o().describe("@internal The plugin whose surface modules the surface wants, as a Client node and `client_modules` named it.")
}).describe("@internal Ask for a plugin's surface modules as a desktop `Client` frame loads them: every file the host read when the hooks module loaded (only those: the paths its `Client`s name by literal), compiled to JavaScript, its own imports rewritten to import-map keys, each module's entry and component, and the hash ui_render announced. Errors when the plugin is not loaded or loaded no surface module.")), hW = p(() => u({
  plugin: o(),
  hash: o().describe("@internal sha256 over the keyed files and limits, hex: what `client_modules` carries for the plugin while this text and these bounds are served."),
  modules: T(u({
    module: o().describe("@internal The module's path under the plugin's folder, POSIX-separated (`hooks/board.tsx`): what a Client node's `module` carries."),
    entry: o().describe("@internal The entry file's import-map key (`surface:///<path under the plugin>`): what the frame imports for a Client naming this module, once the runtime is in."),
    component: o().describe("@internal Which export of the entry draws: `default` when it has one, else its one PascalCase export; settled by the host at load.")
  })).describe("@internal One per surface module the plugin's Clients name, in the order the host read them."),
  runtime: o().describe("@internal The runtime module's key (`claude:surface-runtime`): exports `h` and `Fragment`, the JSX factory the plugin's files are compiled against, and `install(host, limits)`, the surface driver the terminal runs the same modules with. The frame sets `globalThis.h`/`Fragment` from it and installs before importing an entry."),
  limits: u({
    nodes: v().int(),
    depth: v().int(),
    chars: v().int(),
    values: v().int(),
    dataDepth: v().int()
  }).describe("@internal The bounds `install` takes: a tree of at most `nodes` elements `depth` deep serializing to `chars` characters, each props payload at most `values` values `dataDepth` deep; the terminal's own."),
  files: T(u({
    key: o(),
    source: o()
  })).describe("@internal Every file of every module, each once: the runtime first, then each entry and what it links: its key and its JavaScript, own imports keyed. Each module's files are bounded by the hooks-module limits (1 MiB a file, 8 MiB in all, 512 files) before they loaded.")
}).describe("@internal A plugin's surface modules as the desktop frame links them.")), N0t = p(() => Ra().extend({
  subtype: A("ui_client_press"),
  element: o().max(W).describe("@internal The pressed element's own `key` inside the Client's tree; the hooks reached see `e.element`."),
  event: Kr("type", [ u({
    type: A("press")
  }), u({
    type: A("input"),
    kind: U([ "change", "submit" ]),
    value: o().max(ir)
  }), u({
    type: A("select"),
    value: o().max(ir)
  }) ]).describe("@internal What happened: a Button pressed, an Input changed or submitted with its text, a Select picked with its value.")
}).describe("@internal A press, input or pick on a Button, Input or Select a surface module drew inside a `Client` the desktop drew: runs the `ui.press`, `ui.input` or `ui.select` chain over every hooked plugin with `surface: \"desktop\"`. The element's closure lives in the surface's frame, so the answer says whether the chain reached it and with what argument, and the surface runs it. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`."));

var uW = p(() => u({
  handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran."),
  reached: ue(o(), oe()).optional().describe("@internal The chain's argument as it reached the element's own handler (`plugin`, `element`, `component`, `requestId`, `surface`, and `kind`/`value` for an input or pick, as hooks above left them): the surface runs the frame's closure with it. Absent when a hook withheld the press; the closure does not run.")
}).describe("@internal Whether a ui_client_press found its Client, and what reached the bottom of the chain.")), $0t = p(() => Ra().extend({
  subtype: A("ui_message"),
  data: oe().describe("@internal What the instance posted (`surface.post(data)`): plain JSON, bounded as a Client post is (2000 values, depth 32, 100 000 characters); the hooks reached see `e.data`.")
}).describe('@internal A post from a `Client` instance the desktop drew: runs the owning plugin\'s `ui.message` chain alone (origin `client`) with `surface: "desktop"`. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`; data past the bounds errors.')), pW = p(() => u({
  handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran."),
  props: oe().optional().describe("@internal The instance's next props when a hook answered `{ props }`: the surface hands them to the frame, local state kept; absent leaves them.")
}).describe("@internal What the owning plugin's ui.message hooks answered a Client's post.")), _W = 200, F0t = p(() => Ra().extend({
  subtype: A("ui_client_fault"),
  phase: U([ "load", "render", "run" ]).describe("@internal When the Client failed: `load` is before the module ran (its frame refused, the module not fetched, a throw at mount); `render` is a throw while drawing, an undrawable tree, or a render that never answered; `run` is a listener, timer or held closure, a loop, a flood. The hooks reached see it as `e.phase`."),
  reason: o().max(_W).describe("@internal Why, in the surface's words: one line of at most 200 characters, control characters and line separators sent as spaces; empty for a failure that gave no message. Untrusted text (it may quote what the plugin's module threw): to show or log, never to act on. The hooks reached see it as `e.reason`, scrubbed again and with the plugin's name and the module's taken off its front, and never empty: one with nothing in it reads `the module failed without a message`.")
}).describe('@internal A `Client` the desktop drew failed in its frame: runs the owning plugin\'s `ui.fault` chain alone with `surface: "desktop"`, so the plugin can draw another view. The address is the five flat fields ui_client_press and ui_message carry, and no `surface`. One request per fault line the surface draws; an instance started again that fails again is told again. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`. A CLI that predates the request answers the error "Unsupported control request subtype: ui_client_fault".')), mW = p(() => u({
  handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran. True once the owning plugin's hooks have run, whether or not it has any.")
}).describe("@internal Whether a ui_client_fault found its Client and reached the owning plugin's ui.fault hooks.")), U0t = p(() => u({
  subtype: A("ui_input"),
  plugin: o().max(W).describe("@internal The plugin whose hook drew the Input, as its `press.plugin` carried it."),
  handle: v().int().describe("@internal The handle the Input carried (`press.handle`), naming the onInput and onSubmit closures held in that plugin's environment."),
  kind: U([ "change", "submit" ]).describe("@internal Which of the two: `change` on an edit of the field, `submit` on Enter. The `ui.input` hooks reached see it as `e.kind`."),
  value: o().max(ir).describe("@internal The field's whole text as the surface holds it now; the hooks reached see it as `e.value` and may rewrite it before the closure."),
  key: o().optional().describe("@internal The Input's own `key`, as the tree carried it (the engine puts no length on a key): with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Input that plugin holds under this key there, so typing across a re-render is not lost."),
  component: Ton().optional().describe("@internal The render site the Input was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."),
  instance_id: o().max(W).optional().describe("@internal The instance the Input was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one field among several instances that draw the same key (one per transcript row). Without it a retired handle re-resolves only when a single instance holds the key."),
  surface: H().default("desktop").describe("@internal The surface the field is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.input` hooks reached see it as `e.surface`."),
  client_id: x().optional().describe("@internal The typing client, as its ui_attach named it; optional, and the input runs the same with or without it.")
}).describe("@internal A change of, or Enter in, an `Input` a plugin drew for a remote surface: runs the `ui.input` chain over every hooked plugin with the element's own onInput (kind `change`) or onSubmit (kind `submit`) closure at the bottom, one at a time per plugin so typing arrives in order. A handle no Input is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one.")), gW = p(() => u({
  handled: M().describe("@internal False when no Input is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded); nothing ran."),
  element: o().optional().describe("@internal The `key` of the Input whose handler the input reached, when one did."),
  value: o().optional().describe("@internal The text the handler received: the value as the hooks above left it.")
}).describe("@internal Whether a ui_input reached a handler, which, and with what text.")), B0t = p(() => u({
  subtype: A("ui_select"),
  plugin: o().max(W).describe("@internal The plugin whose hook drew the Select, as its `press.plugin` carried it."),
  handle: v().int().describe("@internal The handle the Select carried (`press.handle`), naming the onSelect closure held in that plugin's environment."),
  value: o().max(ir).describe("@internal The picked option's `value`, one of the Select's `options` as the tree last drew them (any other value answers `handled: false` and runs nothing); the hooks reached see it as `e.value` and may rewrite it before the closure."),
  key: o().optional().describe("@internal The Select's own `key`, as the tree carried it: with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Select that plugin holds under this key there."),
  component: Ton().optional().describe("@internal The render site the Select was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."),
  instance_id: o().max(W).optional().describe("@internal The instance the Select was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one picker among several instances that draw the same key."),
  surface: H().default("desktop").describe("@internal The surface the picker is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.select` hooks reached see it as `e.surface`."),
  client_id: x().optional().describe("@internal The picking client, as its ui_attach named it; optional, and the pick runs the same with or without it.")
}).describe("@internal A pick in a `Select` a plugin drew for a remote surface: runs the `ui.select` chain over every hooked plugin with the element's own onSelect closure at the bottom, one at a time per plugin. A handle no Select is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one.")), fW = p(() => u({
  handled: M().describe("@internal False when no Select is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded), or `value` is none of its options as drawn; nothing ran."),
  element: o().optional().describe("@internal The `key` of the Select whose handler the pick reached, when one did."),
  value: o().optional().describe("@internal What the handler received: the option's value as the hooks above left it.")
}).describe("@internal Whether a ui_select reached a handler, which, and with what value.")), Ly = p(() => U([ "Pane", "AbovePrompt" ]).describe("@internal A scrolling, focusable site a remote surface draws for the hooks engine: a pane's body (`instance_id` the pane's id) or the band above the composer (`instance_id` `above-prompt`).")), Uy = p(() => u({
  plugin: o().max(W),
  key: o().max(W),
  top: v().int().nonnegative(),
  bottom: v().int().nonnegative()
}).describe("@internal Where an element a plugin drew under `key` (a keyed Box, a Button, Input or Select) sits in the site's content as the surface laid it out: its first row and the row past its last, in the rows `offset` counts. What lets that plugin's `$.ui.scroll({ to: { key } })` land.")), Vy = 512, j0t = p(() => u({
  subtype: A("ui_panes"),
  client_id: x().optional()
}).describe("@internal Ask for the pane roster as the engine holds it now: what a surface that places panes reads on mount, before any ui_panes push (a pane opened before the stream armed pushes nothing).")), W0t = p(() => u({
  subtype: A("ui_pane_show"),
  id: _e().describe("@internal The pane the person picked (a click on its tab): shown at once, the keyboard following if a pane held it. An id not open changes nothing."),
  surface: H().default("desktop").describe("@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."),
  client_id: x().optional()
}).describe("@internal The person chose which open pane the surface shows; answers the roster's `shown_id` afterwards. A ui_panes push follows when it changed.")), bW = p(() => u({
  shown_id: _e().nullable()
}).describe("@internal The pane shown after a ui_pane_show.")), z0t = p(() => u({
  subtype: A("ui_pane_focus"),
  id: _e().nullable().describe("@internal The pane the person gave the keyboard (a click into its body, honouring a focus request), or null when the keyboard went back to the composer (Escape, a click there, a refused focus request). Settles a standing focus request either way."),
  surface: H().default("desktop").describe("@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."),
  client_id: x().optional()
}).describe("@internal The keyboard moved between the composer and a pane on a remote surface; answers the roster's `focused_id` afterwards, and the pane's Pane site then holds the keyboard for `$.ui.focus`. A ui_panes push follows when it changed.")), EW = p(() => u({
  focused_id: _e().nullable()
}).describe("@internal The pane holding the keyboard after a ui_pane_focus.")), G0t = p(() => u({
  subtype: A("ui_close"),
  id: _e().describe("@internal The pane the person closed (its close control, or Escape under `close_on_escape`)."),
  client_id: x().optional()
}).describe("@internal The person's close of a pane on a remote surface: runs the `ui.close` chain with origin `person` (a hook may keep the pane open) and answers whether it closed. The surface removes the pane only on `closed: true`; the ui_panes push that follows drops it too.")), SW = p(() => u({
  closed: M().describe("@internal True when no pane has that id after the call: it closed, or none had it (no chain ran). False when a `ui.close` hook kept it open, or a close of it was already being decided (the ui_panes push says how that one ended).")
}).describe("@internal Whether a ui_close closed the pane.")), V0t = p(() => u({
  subtype: A("ui_scroll"),
  component: Ly(),
  instance_id: o().max(W),
  offset: v().int().nonnegative().describe("@internal The first content row the window shows after the move, 0 at the top, in rows of the surface's monospace line height."),
  by: v().int().describe("@internal The rows the move covered, signed, negative toward the top; what the `ui.scroll` hooks see as `e.by`."),
  body_rows: v().int().nonnegative().describe("@internal The rows the window shows at once."),
  content_rows: v().int().nonnegative().describe("@internal The rows the site's whole tree lays out to; the last offset is `content_rows - body_rows`."),
  pointer: u({
    column: v().int(),
    row: v().int()
  }).optional().describe("@internal The body cell the wheel or trackpad was over, 0/0 at the body's top left; absent for scroll keys and the scrollbar."),
  keyed: T(Uy()).max(Vy).optional(),
  surface: H().default("desktop").describe("@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given, so the site is that client's."),
  client_id: x().optional()
}).describe("@internal The person scrolled a site a remote surface draws (a pane's body, the band): the engine records the layout reported, moves its own window by `by` (clamped to the layout) and raises `ui.scroll` with origin `person` over that; a hook may rewrite or deny it, and the answer carries the offset the surface should show. Send it throttled to the surface's frame; reports arriving while one is in flight for the instance are folded (`by` summed) into one that follows and answered alike, in order.")), TW = p(() => u({
  moved: M().describe("@internal False when the chain denied the move (a plugin's own scroll landed meanwhile and stays), or the instance is no open pane nor the band (`deny: 'no such site'`; nothing recorded)."),
  offset: v().int().describe("@internal The offset the engine holds for the window now, which the surface should show: its own window moved by `by` (or a hook's rewrite) when allowed, the offset before the move when denied, a plugin's offset when its move landed meanwhile; the reported offset only for `no such site`."),
  deny: o().optional().describe("@internal Why the move was denied, when it was."),
  follow_end: M().optional().describe("@internal Present when the site still follows its end after this report (a plugin's followed `end` move that no move took the window off: a wheel landing on the end, a denied wheel): keep the body pinned to the bottom as it grows, as after a ui_scroll push with follow_end.")
}).describe("@internal Where a ui_scroll left the window.")), jy = p(() => u({
  plugin: o().max(W),
  key: o().max(W)
}).describe("@internal A Button, Input or Select a plugin drew, by its `press.plugin` and `props.key`.")), K0t = p(() => u({
  subtype: A("ui_focus"),
  component: Ly(),
  instance_id: o().max(W),
  is_held: M().describe("@internal Whether the site holds the keyboard now (DOM focus is inside its container)."),
  element: jy().nullable().optional().describe("@internal The element that took the focus ring: one the site draws, or null for the container itself; absent reports `is_held` alone and moves nothing."),
  by: U([ "person", "auto" ]).default("person").describe("@internal Who moved it: the person (Tab, a click), or an `autoFocus` element taking the ring as the site mounted (`auto`, raised as that plugin's move)."),
  surface: H().default("desktop").describe("@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given."),
  client_id: x().optional()
}).describe("@internal The keyboard moved in a site a remote surface draws: the engine records the hold and raises `ui.focus` for the element (origin `person`, or the element's plugin under `auto`); a hook may redirect it, which the answer then carries for the surface to follow.")), wW = p(() => u({
  moved: M().describe("@internal False when the chain denied the move."),
  element: jy().nullable().describe("@internal The element holding the ring as the engine records it now: the reported one, a hook's redirect the surface should focus, or null on the container."),
  deny: o().optional().describe("@internal Why the move was denied, when it was.")
}).describe("@internal Where a ui_focus left the ring.")), qy = [ "ui_copy", "ui_prompt_read", "ui_prompt_fill", "ui_prompt_suggest", "ui_read_selection" ], AW = qy.length, Aon = p(() => U(qy).describe("@internal A request the engine may send a remote client on a plugin's behalf, which the client says it answers when it attaches.")), Kt = 1e6, va = p(() => u({
  subtype: A("ui_copy"),
  surface: H(),
  client_id: x(),
  plugin: o().describe("@internal Whose `$.ui.copy` it is, for the app to show or log."),
  text: o().max(Kt).describe("@internal What the person pastes afterwards, verbatim, as the `ui.copy` hooks left it.")
}).describe("@internal Agent-originated: a plugin's `$.ui.copy({ text, surface })` naming a remote surface reached the bottom of the `ui.copy` chain; the app writes `text` to its clipboard and answers `{copied}`. `client_id` is the first client attached on that surface that answers `ui_copy`. Sent only to a client whose ui_attach named `ui_copy` under `answers`; unanswered within 5 s, or an unparsable answer, resolves the plugin `{isCopied: false, reason: 'no-clipboard'}`; an error-shaped reply is another client's refusal and does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it.")), uAo = p(() => u({
  copied: M().describe("@internal Whether the app wrote the text to its clipboard.")
}).describe("@internal The answer to ui_copy.")), Ca = p(() => u({
  subtype: A("ui_prompt_read"),
  surface: H(),
  client_id: x()
}).describe("@internal Agent-originated: `prompt.read` reached its core in a headless session (a plugin's `$.prompt.read`, or the read that completes a `$.prompt.fill`); the app answers its composer's draft and cursor. Sent only to a client whose ui_attach named `ui_prompt_read`; unanswered within 5 s, or unparsable, resolves the empty box; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it.")), pAo = p(() => u({
  text: o().describe("@internal The composer's whole draft."),
  cursor: v().int().nonnegative().describe("@internal The caret as a code-unit offset into `text` (0..text.length); the end when the app does not track one.")
}).describe("@internal The answer to ui_prompt_read: the composer as it stands.")), Gy = p(() => De({
  start: v().int().nonnegative().describe("@internal Where the run starts, in UTF-16 code units into this frame's `text`."),
  end: v().int().describe("@internal Where the run ends, exclusive: past `start`, at most `text.length`."),
  color: o().optional().describe("@internal The text color."),
  backgroundColor: o().optional().describe("@internal The color behind the text."),
  dimColor: M().optional().describe("@internal Drawn dim."),
  bold: M().optional().describe("@internal Drawn bold."),
  italic: M().optional().describe("@internal Drawn italic."),
  underline: M().optional().describe("@internal Underlined."),
  strikethrough: M().optional().describe("@internal Struck through.")
}).describe("@internal One painted run over the text a ui_prompt_fill carries, normalized by the engine: clamped to the text, grapheme-aligned, never empty.")), za = p(() => u({
  subtype: A("ui_prompt_fill"),
  surface: H(),
  client_id: x(),
  text: o().max(Kt).describe("@internal The text to place, as the `prompt.fill` hooks left it."),
  mode: U([ "replace", "append", "insert" ]).describe("@internal Where it goes: `replace` the whole draft, `append` after it, `insert` at the caret. The caret ends after the placed text."),
  decorations: T(Gy()).optional().describe("@internal Runs to paint over `text`, disjoint and ascending by `start`; the app paints them as given, with no range logic of its own. Omitted when there are none, never empty.")
}).describe("@internal Agent-originated: `prompt.fill` reached its core in a headless session (a plugin's `$.prompt.fill`); the app places the text in its composer as the person's draft and answers `{filled}` (false while a dialog holds the keys or the composer is unavailable). Sent only to a client whose ui_attach named `ui_prompt_fill`; unanswered within 5 s, or unparsable, resolves `{isFilled: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it.")), fAo = p(() => u({
  filled: M().describe("@internal Whether the composer now holds the text.")
}).describe("@internal The answer to ui_prompt_fill.")), ka = p(() => u({
  subtype: A("ui_prompt_suggest"),
  surface: H(),
  client_id: x(),
  text: o().max(Kt).describe("@internal The suggestion to show dim in the empty composer for Tab to take, as the `prompt.suggest` hooks left it.")
}).describe("@internal Agent-originated: `prompt.suggest` reached its core in a headless session (a plugin's `$.prompt.suggest`, or the engine's own guess after a turn); the app shows the text as a placeholder the person accepts with Tab and answers `{shown}` (false while the composer holds text or a turn runs). Sent only to a client whose ui_attach named `ui_prompt_suggest`; unanswered within 5 s, or unparsable, resolves `{isShown: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it.")), mAo = p(() => u({
  shown: M().describe("@internal Whether the composer now shows the suggestion.")
}).describe("@internal The answer to ui_prompt_suggest.")), Oa = p(() => u({
  subtype: A("ui_read_selection"),
  surface: H(),
  client_id: x()
}).describe("@internal Agent-originated: `ui.selection` reached its core in a headless session (a plugin's `$.ui.selection`); the app answers what the person has selected in its page, and keeps answering a selection its own click or key took down for as long as it sees fit (the terminal keeps one until the person's next prompt or command has run). A selection lies in one page, so every attached client whose ui_attach named `ui_read_selection` under `answers` is sent the ask at once, each under its own `client_id` and request id: the first selection to arrive that is not empty is what the plugin reads (of two windows that both hold one, the first to answer wins), an answer that arrives after that is dropped, and when every client answers nothing or stays silent the plugin reads nothing at the one bound. Sent only over the pipes of the host that spawned the process, never over the remote transport nor on a lane whose frames a service persists: the selection is the person's own text. Unanswered by all within 5 s, or unparsable, resolves the plugin `undefined`, as nothing selected does; an error-shaped reply does not settle it.")), gAo = p(() => u({
  text: o().optional().describe("@internal The selected text as the person sees it: what a copy would put on the clipboard. Left out, or empty, when nothing is selected."),
  instance_id: o().optional().describe("@internal The transcript row the whole selection lies in, by the `instance_id` that row was drawn under (the engine's requestId for it). Left out when the selection spans several rows or lies outside the transcript; ignored without `text`.")
}).describe("@internal The answer to ui_read_selection: the selection, or an empty object for nothing selected.")), yW = 32, RW = p(() => u({
  key: o().min(1).max(yW),
  ctrl: A(!0).optional(),
  shift: A(!0).optional(),
  meta: A(!0).optional()
}).describe("@internal The one key that made an edit, in a `Client`'s `onKey` spelling: a special key's name (`backspace`, `left`, `return`) or the character typed (`space` for a space), each modifier present only when held. The `prompt.edit` hooks reached see it as `e.key`, as for the same key in the terminal.")), q0t = p(() => u({
  subtype: A("ui_prompt_edit"),
  text: o().max(Kt).describe("@internal The Composer's whole draft after the edit, as the surface holds it."),
  cursor: v().int().nonnegative().describe("@internal The caret after the edit, in UTF-16 code units into `text`; one past the end is clamped to it."),
  key: RW().optional().describe("@internal The one key that made the edit; absent for a paste, a drop, or text that came with no single key."),
  by: U([ "person", "app" ]).default("person").describe("@internal Who changed the box: the person's own edit (`person`, raised as `prompt.edit`), or the app itself when it was not the person typing (`app`: a submit emptied it, a fill landed, a history recall, a draft restore), which the engine adopts as the box before the next edit without raising anything, answering the box with no runs. `app` carries no key."),
  surface: H().default("desktop").describe("@internal The surface the Composer is on; absent means `desktop`."),
  client_id: x().optional().describe("@internal The editing client, as its ui_attach named it; absent names the surface's default client.")
}).describe("@internal An edit in a remote surface's own Composer: the engine raises `prompt.edit` (origin `composer`) over the box before it (the box this client sent last, or the rewrite answered to it when the edit follows from that), as the terminal's editor does for a key, and answers what the Composer is to show. One dispatch per client at a time; of the edits that arrive meanwhile only the newest is raised, the older ones answering `superseded`, and an edit folded that way carries no key. A chain that fails answers the request's own box.")), vW = p(() => u({
  text: o().describe("@internal The draft the Composer is to show: the request's own, or a hook's rewrite of it."),
  cursor: v().int().describe("@internal The caret in `text`, clamped into it."),
  decorations: T(Gy()).optional().describe("@internal The runs to paint over `text`, disjoint and ascending; absent when none paint."),
  superseded: A(!0).optional().describe("@internal Present when a newer edit from the same client came in first: this one was never raised, and its own box is echoed with no runs.")
}).describe("@internal What a ui_prompt_edit's `prompt.edit` chain answered for the Composer.")), Y0t = p(() => u({
  subtype: A("ui_prompt_autocomplete"),
  text: o().max(Kt).describe("@internal The Composer's whole draft, as the surface holds it."),
  cursor: v().int().nonnegative().describe("@internal The caret, in UTF-16 code units into `text`; one past the end is clamped to it."),
  surface: H().default("desktop").describe("@internal The surface the Composer is on; absent means `desktop`."),
  client_id: x().optional().describe("@internal The asking client, as its ui_attach named it; absent names the surface's default client.")
}).describe("@internal A remote surface's own Composer asks what the plugins add to its autocomplete list: the engine raises `prompt.autocomplete` for the token that ends at the caret (the run of characters that are not whitespace), as the terminal's composer does while the person types, and answers the rows for the surface to draw beneath its own. With no token at the caret nothing is raised and no row is answered. One dispatch per client at a time; of the asks that arrive meanwhile only the newest is raised next, and every ask a newer one overtook answers `superseded` with no row. A chain that fails answers no row.")), CW = p(() => u({
  suggestions: T(u({
    text: o().describe("@internal What taking the row writes over the token, the caret after it; never empty."),
    label: o().optional().describe("@internal What the row shows; absent, the `text`."),
    description: o().optional().describe("@internal The dim line beside the label.")
  })).describe("@internal The rows the `prompt.autocomplete` hooks answered, in the order to draw them beneath the surface's own."),
  start: v().int().optional().describe("@internal Where the token begins in `text`: a taken row replaces `text` from here to the caret. Absent when no token ends at the caret."),
  superseded: A(!0).optional().describe("@internal Present when a newer ask from the same client overtook this one: it carries no row.")
}).describe("@internal What a ui_prompt_autocomplete answers the Composer.")), GJ = p(() => $e([ So(), Wo(), Zo(), Aa(), ya(), ba(), Ea(), Xo(), Qo(), Jo(), f2n(), wa(), va(), Ca(), za(), ka(), Oa() ]).describe("Control requests the agent loop originates and needs a reply to \u2014 the loop\u2192client RPC slice of SDKControlRequestInner. The remaining members are client\u2192loop commands (set/get/mcp/auth/etc).")), BJ = p(() => $e([ Eo(), l2n(), To(), wo(), Ao(), yo(), Ro(), vo(), zo(), ko(), Oo(), No(), Mo(), Do(), xo(), Lo(), Uo(), Vo(), Io(), Po(), jo(), d2n(), Co(), qo(), Go(), Bo(), Ho(), Ko(), Fo(), Yo(), ea(), na(), ta(), sa(), ra(), aa(), ia(), da(), g2n(), h2n(), oa(), m2n(), c2n(), u2n(), y2n(), ca(), ha(), ua(), pa(), _a(), ga(), ma(), Ta(), p2n(), lIe(), _2n(), b2n(), S2n(), L0t(), w2n(), N0t(), $0t(), F0t(), fa(), la(), U0t(), B0t(), j0t(), W0t(), z0t(), G0t(), V0t(), K0t(), q0t(), Y0t() ]).describe("Control requests a client sends to drive the loop \u2014 the client\u2192loop command slice of SDKControlRequestInner. The remaining members are loop\u2192client RPCs that block on a reply (see AgentOriginatedControlRequest).")), zW = p(() => $e([ Eo(), So(), l2n(), To(), wo(), Ao(), yo(), Ro(), vo(), zo(), ko(), Oo(), No(), Mo(), Do(), xo(), Lo(), Uo(), Vo(), Io(), Po(), jo(), d2n(), Co(), Wo(), Zo(), qo(), Go(), Bo(), Ho(), Ko(), Fo(), Yo(), ea(), na(), ta(), sa(), ra(), aa(), ia(), da(), g2n(), h2n(), oa(), m2n(), c2n(), u2n(), y2n(), Aa(), ya(), ca(), ha(), ua(), pa(), _a(), ga(), ma(), ba(), Ea(), Ta(), p2n(), Xo(), Qo(), Jo(), f2n(), _2n(), b2n(), S2n(), L0t(), w2n(), N0t(), $0t(), F0t(), wa(), lIe(), fa(), la(), U0t(), B0t(), j0t(), W0t(), z0t(), G0t(), V0t(), K0t(), q0t(), Y0t(), va(), Ca(), za(), ka(), Oa() ]));

function g(e, s, r) {
  return {
    request: e,
    originator: s,
    response: r
  };
}

var HJ = p(() => [ g(Eo(), "client", QF()), g(So(), "agent", WA()), g(l2n(), "client", XF()), g(To(), "client", JF()), g(wo(), "client", null), g(Ao(), "client", null), g(yo(), "client", null), g(Ro(), "client", void 0), g(vo(), "client", ZF()), g(zo(), "client", SY()), g(ko(), "client", tY()), g(Oo(), "client", sY()), g(No(), "client", rY()), g(Mo(), "client", cY()), g(Do(), "client", uY()), g(xo(), "client", pY()), g(Lo(), "client", _Y()), g(Uo(), "client", mY()), g(Vo(), "client", gY()), g(Io(), "client", oY()), g(Po(), "client", aY()), g(jo(), "client", fY()), g(d2n(), "client", TY()), g(Co(), "client", eY()), g(Wo(), "agent", ZA()), g(Zo(), "both", VY()), g(qo(), "client", wY()), g(Go(), "client", AY()), g(Bo(), "client", yY()), g(Ho(), "client", RY()), g(Ko(), "client", CY()), g(Fo(), "client", zY()), g(Yo(), "client", null), g(ea(), "client", jY()), g(na(), "client", HY()), g(ta(), "client", qY()), g(sa(), "client", GY()), g(ra(), "client", BY()), g(aa(), "client", null), g(ia(), "client", null), g(da(), "client", void 0), g(g2n(), "client", null), g(h2n(), "client", null), g(oa(), "client", KY()), g(m2n(), "client", FY()), g(c2n(), "client", tft()), g(u2n(), "client", PY()), g(y2n(), "client", nW()), g(Aa(), "agent", dAo()), g(ya(), "agent", cAo()), g(ca(), "client", null), g(ha(), "client", WY()), g(ua(), "client", $Y()), g(pa(), "client", null), g(_a(), "client", XY()), g(ga(), "client", QY()), g(ma(), "client", null), g(ba(), "agent", aAo()), g(Ea(), "agent", kon()), g(Ta(), "client", rW()), g(p2n(), "client", MY()), g(Xo(), "agent", DY()), g(Qo(), "agent", xY()), g(Jo(), "agent", LY()), g(f2n(), "agent", null), g(_2n(), "client", iW()), g(b2n(), "client", lW()), g(S2n(), "client", dW()), g(L0t(), "client", cW()), g(w2n(), "client", hW()), g(N0t(), "client", uW()), g($0t(), "client", pW()), g(F0t(), "client", mW()), g(wa(), "agent", lAo()), g(lIe(), "client", UY()), g(fa(), "client", sW()), g(la(), "client", YY()), g(U0t(), "client", gW()), g(B0t(), "client", fW()), g(j0t(), "client", ho()), g(W0t(), "client", bW()), g(z0t(), "client", EW()), g(G0t(), "client", SW()), g(V0t(), "client", TW()), g(K0t(), "client", wW()), g(q0t(), "client", vW()), g(Y0t(), "client", CW()), g(va(), "agent", uAo()), g(Ca(), "agent", pAo()), g(za(), "agent", fAo()), g(ka(), "agent", mAo()), g(Oa(), "agent", gAo()) ]), lr = p(() => u({
  type: A("control_request"),
  request_id: o().describe("Chosen by the sender, unique among its in-flight requests; the control_response (and any control_cancel_request) for this request echoes it."),
  request: zW()
}).describe("Envelope for a control-protocol request, sent by either side on the same stream as the messages. The receiver normally answers with exactly one control_response carrying the same request_id (a few request types document when no answer is sent), and a requester ignores responses for request_ids it is not waiting on. Each request type's own documentation says which side sends it and what its success response carries.")), By = p(() => T(Tk(() => lr())).optional().describe('can_use_tool requests this CLI process has issued and not yet resolved, so a client joining an already-initialized session learns about in-flight prompts. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". A prompt inherited from a previous worker of the same session can remain answerable without appearing here and without a control_cancel_request; session_state "requires_action" on the same reply signals one the CLI is holding, but not every inherited prompt is signalled.')), Hy = p(() => T(Tk(() => lr())).optional().describe('request_user_dialog requests this CLI process has issued and not yet resolved (sibling of pending_permission_requests, with the same inherited-prompt caveat), so a client joining an already-initialized session can re-arm in-flight dialogs. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.')), kW = p(() => u({
  subtype: A("success"),
  request_id: o().describe("The request_id of the control_request this answers."),
  response: ue(o(), oe()).optional().describe("The success payload, shaped as documented for the answered request's subtype; absent or {} for requests that are merely acknowledged."),
  pending_permission_requests: By(),
  pending_user_dialog_requests: Hy()
}).describe("The request was handled.")), OW = p(() => u({
  subtype: A("error"),
  request_id: o().describe("The request_id of the control_request this answers."),
  error: o().describe("Human-readable failure description."),
  error_code: U(CA).optional().catch(void 0).describe("@internal Why the request failed, for the errors a host or client can act on, stamped from the state the handler branched on (never parsed from `error`). set_model: invalid_request, catalog_unknown, restricted_by_org, unavailable_for_account, not_offered (a newer Claude Code may offer it), alias_1m_disabled (CLAUDE_CODE_DISABLE_1M_CONTEXT), alias_1m_unsupported, blocked_by_hook, check_failed (a retry may pass), model_not_current. set_permission_mode: invalid_mode, bypass_restricted, bypass_disabled, bypass_not_launched, and for auto auto_mode_settings, auto_mode_circuit_breaker, auto_mode_fast_mode, auto_mode_model or auto_mode_unavailable. remote_control (a failed enable whose cause the bridge reported): remote_control_auth (sign in again), remote_control_terminal, remote_control_ended_elsewhere, remote_control_policy_disabled. get_workspace_diff: workspace_diff_pending (the diff was not ready when the reply was due; ask again shortly, since a diff that finishes in the meantime is returned to the next request that comes within a minute). interrupt (a claude-code-server tenant, by worker_epoch): stale_worker_epoch (it is for another worker life; no turn was stopped), invalid_worker_epoch (it is no whole number of 1 or more; likewise). Absent on every other error; new values are additive, so treat an unknown one as absent."),
  pending_permission_requests: By(),
  pending_user_dialog_requests: Hy()
}).describe("The request failed or was rejected (unknown subtype, invalid arguments, or an error while handling it).")), xxr = p(() => u({
  type: A("control_response"),
  response: $e([ kW(), OW() ])
}).describe("Envelope for the single reply to a control_request, sent by whichever side received the request.")), X0t = p(() => u({
  type: A("control_cancel_request"),
  request_id: o().describe("The request_id of the control_request being withdrawn.")
}).describe("Tells the other side that the sender no longer needs the answer to one of its own in-flight control_requests (for example a pending can_use_tool prompt after the turn was interrupted, or one that another client already answered). Either side may send it for a request it originated. The sender stops waiting at once and ignores any control_response that still arrives for that request_id; a receiver that can abort the work does so and may still reply (typically with an error), otherwise it simply completes the request. There is no reply to the cancel itself.")), Ky = p(() => u({
  type: A("keep_alive")
}).describe("Liveness heartbeat with no payload. Either side may send it at any time (the CLI emits it periodically, for example while a long-running control request is in progress); receivers must ignore it.")), NW = p(() => u({
  type: A("update_environment_variables"),
  variables: ue(o(), o()),
  request_id: o().optional()
}).describe("Updates environment variables at runtime.")), IW = p(() => u({
  type: A("session_notice"),
  uuid: o(),
  notice_class: o().describe('Server-chosen notice class: "peer_notice" | "helper_lifecycle" | "handoff" (open snake_case set; unknown tokens are carried verbatim).'),
  from_session_id: o().describe("Server-verified sender session id."),
  content: o(),
  isSynthetic: A(!0).describe("Server-asserted synthetic stamp \u2014 stripped from inbound copies at CCR ingress and re-stamped only by the notice composer."),
  inbound_origin: A("mcp_session_notice").describe("Server-asserted ingest-path marker, same strip-and-restamp discipline as isSynthetic."),
  session_id: o().optional()
}).describe("@internal Backend\u2192CLI: a server-composed coordination notice for a sealed helper session, delivered to the model over the Poll event channel as a provenance-attributed <event> envelope (never a user turn, never a synthetic message). The CLI acks processed only when the Poll delivery settles into the transcript; undelivered notices redeliver.")), PW = p(() => u({
  type: A("queued_notification"),
  notification: u({
    notification_id: o().describe("Server-assigned stable id \u2014 the dedup key across redeliveries."),
    origin: o().describe('Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown values render verbatim).'),
    content: o().describe("Exactly the text that would previously have been injected as a user turn, framing included."),
    priority: U([ "now", "next", "later" ]),
    queued_at: o().describe("RFC3339 timestamp of when the backend queued it.")
  }),
  uuid: o().optional(),
  session_id: o().optional()
}).describe("@internal Backend\u2192CLI: a trigger delivery (webhook activity, scheduled trigger, agent message) queued server-side instead of injected as a user turn. The CLI buffers it, nudges the model to call the ReadNotifications tool, and acks the event processed only when drained \u2014 an undrained event redelivers on resume.")), KJ = p(() => $e([ _o(), no(), oo(), ao(), io(), uo(), po() ]).describe("Observational messages the agent loop emits \u2014 fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise.")), hAo = p(() => $e([ _o(), no(), oo(), ao(), io(), uo(), xxr(), lr(), X0t(), Ky(), po() ]).describe("Everything the CLI writes to its output stream (stdout in stream-json mode): exactly one StdoutMessage per line, as a single JSON object. Besides the SDKMessage members this includes the control protocol - control requests the CLI originates, control responses to the client's requests, cancellations and keep-alives.")), FJ = p(() => $e([ rr(), oy(), lr(), xxr(), X0t(), Ky(), NW(), PW(), IW() ]).describe("Everything a client may write to the CLI's input stream (stdin in stream-json input mode): exactly one StdinMessage per line, as a single JSON object - user messages that start turns, control requests the client originates, control responses answering the CLI's requests, cancellations and keep-alives. initialize is optional and normally the first line; the first user message initializes with defaults. An initialize that arrives later (e.g. from a client joining the session) is answered with the current state: the one-time session setup (e.g. system prompt, agents, skills, supportedDialogKinds) is not re-applied, but title, sdkMcpServers and agentProgressSummaries are still processed on every initialize, and hooks sent by the process that owns this stream replace the earlier set (see hooks_applied on the response). Closing the stream tells the CLI to finish the current turn and exit."));

function MW(e) {
  return [ ...e.replace(/[\x00-\x1f\x7f-\x9f]/g, "") ].slice(0, tI).join("");
}

function pi(e) {
  return MW(En(e.trim())).trim();
}

var je = "Bash";

var Rt = "PowerShell";

export { qpt, WO, k8e, DTo, R0t, ove, ion, Iw, rIe, _ie, yxr, LTo, YGn, T8e, _xr, x0t, A8e, YP, P0t, aon, lon, C8e, WZ, cU, bxr, sve, NTo, don, $To, FTo, con, jR, HBe, ej, IK, kb, G_, uU, iS, oG, XGn, UTo, uon, BTo, wC, zZ, tj, nj, sG, Ypt, jTo, t$, oIe, I0t, pon, O0t, OK, pU, fU, Sxr, Kh, Xpt, ive, XP, M0t, VMs, WTo, Tb, n$, DBe, JP, sIe, KMs, JGn, zTo, qMs, YMs, wn, O9, uu, Jr, UH, M9, GTo, XMs, WR, iIe, QGn, JMs, VTo, KTo, QMs, GZ, ave, vy, ZMs, B2s, rj, zR, lp, LBe, Qs, qTo, YTo, fon, aIe, XTo, JTo, wxr, MK, NBe, w8s, vxr, ZGn, e2n, Jpt, Exr, mon, R8e, kxr, gon, bie, Rc, mU, Bi, eHs, t2n, gU, hon, tHs, ja, $Be, qf, Qpt, ht, yon, _on, bon, Son, won, von, H0t, Zpt, nHs, H9, qt, QTo, rHs, oHs, sHs, iHs, ZTo, n2n, x8e, r2n, Eon, aHs, VZ, BH, eft, lHs, o2n, dHs, D9, Txr, Axr, Cxr, s2n, D0t, eAo, P8e, tAo, i2n, Rxr, nAo, a2n, rAo, oAo, l2n, d2n, sAo, iAo, c2n, tft, u2n, p2n, f2n, lIe, m2n, g2n, h2n, aAo, kon, lAo, dAo, cAo, y2n, Ton, _2n, b2n, S2n, L0t, w2n, N0t, $0t, F0t, U0t, B0t, j0t, W0t, z0t, G0t, V0t, K0t, Aon, uAo, pAo, fAo, mAo, gAo, q0t, Y0t, xxr, X0t, hAo, pi, je, Rt, cHs };
