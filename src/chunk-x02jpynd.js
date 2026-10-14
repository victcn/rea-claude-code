// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, Qr, BC, Ww, he, Eae, fc } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { Ve, E } from "./chunk-b0z4bv3v.js";

import { Un, jC, va, za, Cs } from "./chunk-ddr690nj.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { _, SI, Vgt, wo, se, En, t } from "./chunk-kawq2919.js";

import { I, sc, nt, Nt } from "./chunk-5wbhf1bk.js";

import { ot, Os } from "./chunk-fvcjfcfm.js";

import { ar, ws, jo, dn, zp } from "./chunk-nnrb0acr.js";

import { I5, OBe } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { pp } from "./chunk-r276nwd3.js";

import { ll } from "./chunk-hmce8a0s.js";

import { ZR } from "./chunk-q6wab2jw.js";

import { TE, ngt } from "./chunk-1z2heevg.js";

import { hn, SE, Ty, fe, xm } from "./chunk-dd98x6x7.js";

import { jN, L1 } from "./chunk-xmqqa853.js";

import { SDn, yY, $T } from "./chunk-sqb9meyh.js";

import { ZIt } from "./chunk-4v78v8fd.js";

import { sk } from "./chunk-f4r8hspx.js";

import { Cu, Mi, Hi, fr } from "./chunk-8drhysk2.js";

import { S1 } from "./chunk-t70vnbgq.js";

import { Tar, DB, Tde, $xn, tdr, S5t, pot, BAe, Jto, Qto, I_e } from "./chunk-84yp45y8.js";

import { Sr, UT } from "./chunk-3x03pnz9.js";

import { Bu } from "./chunk-wbxkeemq.js";

import { YJo, XJo, Vvt, Jhe, tTn, $6r } from "./chunk-hrweermn.js";

import { bW, Ule } from "./chunk-j85j5j0r.js";

import { iVe, Ine, kKt, XJ, WTe, aVe, TKt, zTe, Wtt } from "./chunk-0wrzh62m.js";

import { HM } from "./chunk-a2fgh1gk.js";

import { L } from "./chunk-vh1p9t2h.js";

import { at } from "./chunk-0bq6eb61.js";

import { en } from "./chunk-0qwx38yy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { lstat as Oe, readdir as De, readlink as Hn, realpath as Ln, stat as Ne } from "fs/promises";

import { dirname as vt, extname as ue, join as ne, posix as te, relative as K, resolve as Pn, sep as j, win32 as ge } from "path";

import { lstat as Zt, open as Qt, realpath as tn } from "fs/promises";

import { isAbsolute as nn, join as rn, relative as on, sep as sn } from "path";

function Qe(e, n = bW) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null;
}

function an(e) {
  return e === "" || e === ".." || e.startsWith(`..${sn}`) || nn(e);
}

async function ln(e, n) {
  let r = Buffer.allocUnsafe(n), o = 0;
  while (o < n) {
    let {bytesRead: s} = await e.read(r, o, n - o, o);
    if (s === 0) break;
    o += s;
  }
  return r.subarray(0, o);
}

async function et(e, n, r) {
  let o = await ln(e, Number(n.size));
  if (BigInt(o.length) < n.size) return t(`working file ${r}: ${o.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`), 
  {
    kind: "skip",
    skipped: {
      path: r,
      reason: "changed"
    }
  };
  return {
    kind: "read",
    content: o,
    mode: Number(n.mode) & 511,
    dev: n.dev,
    ino: n.ino,
    mtimeMs: Number(n.mtimeNs) / 1e6,
    ctimeMs: Number(n.ctimeNs) / 1e6
  };
}

async function tt(e, n, r, o = null, s = bW) {
  try {
    if (o !== null) return await un(o, r, s);
    let a = rn(e, r), l = await Zt(a, {
      bigint: !0
    }), u = Qe(l, s);
    if (u !== null) return {
      kind: "skip",
      skipped: {
        path: r,
        reason: u
      }
    };
    if (jC(a)) return {
      kind: "skip",
      skipped: {
        path: r,
        reason: "unreadable"
      }
    };
    if (an(on(n, await tn(a)))) return {
      kind: "skip",
      skipped: {
        path: r,
        reason: "outside_root"
      }
    };
    let f = await Qt(a, Bu());
    try {
      let p = await f.stat({
        bigint: !0
      });
      if (p.dev !== l.dev || p.ino !== l.ino) return {
        kind: "skip",
        skipped: {
          path: r,
          reason: "changed"
        }
      };
      if (p.size > s) return {
        kind: "skip",
        skipped: {
          path: r,
          reason: "too_large"
        }
      };
      return await et(f, p, r);
    } finally {
      await f.close();
    }
  } catch (a) {
    let l = E(a), u = l === "ELOOP" || l === "EMLINK" || l === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable";
    return {
      kind: "skip",
      skipped: {
        path: r,
        reason: u
      },
      ...u === "unreadable" && l !== void 0 && {
        errnoCode: l
      }
    };
  }
}

async function un(e, n, r) {
  let o = await e.open(n, Bu());
  try {
    let s = await o.stat({
      bigint: !0
    }), a = Qe(s, r);
    if (a !== null) return {
      kind: "skip",
      skipped: {
        path: n,
        reason: a
      }
    };
    return await et(o, s, n);
  } finally {
    await o.close();
  }
}

var He = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;

function Le(e, n = re, r) {
  let o = e.replace(/\r\n?/g, `\n`), s = r === void 0 ? n : l => {
    let u = n(l);
    if (!u) r.push(l);
    return u;
  }, a = lt(o, new $T({
    gfm: !1
  }).lex(o), ut, s);
  return Te(a, n) ? ee(a) : a;
}

var re = () => !1;

function cn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return fn(e.raw, n);
  let r = [ ...e.tokens ?? [], ...e.items ?? [] ];
  if (r.length === 0) return e.type === "text" ? rt(e.raw, n) : e.raw;
  let o = lt(e.raw, r, s => s, n);
  return e.type === "text" ? rt(o, n) : o;
}

function lt(e, n, r, o) {
  let s = "", a = 0;
  for (let l of n) {
    let u = e.indexOf(l.raw, a);
    if (u === -1) return s + ut(e.slice(a));
    s += r(e.slice(a, u)) + cn(l, o), a = u + l.raw.length;
  }
  return s + r(e.slice(a));
}

function rt(e, n) {
  return e.replace(He, (r, o, s) => n(pe(s)) ? r : `${o}\\@`);
}

function pe(e) {
  return nt(e, "#").replaceAll("\\ ", " ");
}

function fn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("\x3c!--") && r.includes("--\x3e"))) return e;
  let o = [], s = "", a = 0;
  for (let u of e.matchAll(/<!--[\s\S]*?-->/g)) o.push({
    rawStart: a,
    residueStart: s.length
  }), s += e.slice(a, u.index), a = u.index + u[0].length;
  return o.push({
    rawStart: a,
    residueStart: s.length
  }), s += e.slice(a), [ ...s.matchAll(He) ].filter(u => !n(pe(u[2] ?? ""))).map(u => {
    let f = u.index + (u[1] ?? "").length, {rawStart: p, residueStart: g} = o.findLast(y => y.residueStart <= f) ?? {
      rawStart: 0,
      residueStart: 0
    };
    return p + (f - g);
  }).reduceRight((u, f) => `${u.slice(0, f)}\\${u.slice(f)}`, e);
}

function ut(e) {
  let n = null;
  return e.split(`\n`).map(r => {
    let o = /^[\s>]*(`{3,}|~{3,})/.exec(r)?.[1] ?? null;
    if (n === null) {
      if (o === null) return pn(r);
      return n = o, r;
    }
    if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(r)) n = null;
    return r;
  }).join(`\n`);
}

function pn(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@");
}

function dt(e) {
  return Object.keys(new $T({
    gfm: !1
  }).lex(e).links).length > 0;
}

function ee(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) ? n : "\\@");
}

function Pe(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1;
}

var Re = {
  vettable: !1
};

function Fe(e, n) {
  let r = new $T({
    gfm: !1
  }).lex(n), s = [ ...D(D([ n, e ]).flatMap(l => [ l, l.replace(/\\([[\]])/g, "$1") ])).map(l => it(l, "as_loader")), ...mn(r).map(l => it(l, "every_at")) ], a = D([ ...ft(r), ...s.flatMap(l => l.vettable ? l.spellings : []) ]);
  return s.every(l => l.vettable) && a.length <= yn ? {
    vettable: !0,
    spellings: a
  } : Re;
}

function mn(e) {
  let n = r => r.flatMap(o => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("\x3c!--") && s.includes("--\x3e") ? [ o.raw.replace(/<!--[\s\S]*?-->/g, "") ] : [];
    }
    return n([ ...o.tokens ?? [], ...o.items ?? [] ]);
  });
  return n(e);
}

var ct = 4096, gn = 64, yn = 4096, Sn = 1048576, _n = /@(?!@)(?=[^\s\\]|\\ )/g, bn = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${ct + 1}}`, "y"), ve = /[\p{L}\p{N}]/u, kn = /[*_[\]!<`]/g;

function it(e, n) {
  let r = [], o = 0, s = new RegExp(bn);
  for (let a of e.matchAll(_n)) {
    if (n === "as_loader" && (ve.test(e[a.index - 1] ?? "") || Pe(e, a.index))) continue;
    s.lastIndex = a.index + 1;
    let l = s.exec(e)?.[0] ?? "";
    if (o += l.length, l.length > ct || o > Sn) return Re;
    let u = wn(l);
    if (u.length > gn) return Re;
    r.push({
      run: l,
      closers: u
    });
  }
  return {
    vettable: !0,
    spellings: r.flatMap(({run: a, closers: l}) => D([ a, ...l.map(u => a.slice(0, u)) ]).flatMap(u => {
      let f = pe(u);
      return f === "" || f.startsWith("@") ? [] : [ f ];
    }))
  };
}

function wn(e) {
  return [ ...e.matchAll(kn) ].filter(n => n.index > 0 && !Rn(e, n)).map(n => n.index);
}

function Rn(e, n) {
  return n[0] === "_" && ve.test(e[n.index - 1] ?? "") && ve.test(e[n.index + 1] ?? "");
}

function Te(e, n = re) {
  return Ie(e).some(r => !n(r));
}

function Ie(e) {
  return ft(new $T({
    gfm: !1
  }).lex(e));
}

function ft(e) {
  let n = r => r.flatMap(o => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("\x3c!--") && s.includes("--\x3e") ? st(o.raw.replace(/<!--[\s\S]*?-->/g, "")) : [];
    }
    return [ ...o.type === "text" ? st(o.text ?? o.raw) : [], ...n([ ...o.tokens ?? [], ...o.items ?? [] ]) ];
  });
  return n(e);
}

function st(e) {
  return [ ...e.matchAll(He) ].flatMap(n => {
    let r = pe(n[2] ?? "");
    return r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r) ? [ r ] : [];
  });
}

function xe(e) {
  let o = new $T({
    gfm: !1
  }).lex(`${e}\n\n\x3c!-- ccr-home-probe --\x3e\n`).findLast(s => s.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "\x3c!-- ccr-home-probe --\x3e");
}

function pt(e) {
  return `\n\n\x3c!-- inlined import: ${encodeURI(e)} --\x3e\n\n`;
}

import { join as mt } from "path";

var gt = 4096, me = !0;

async function ht(e, n) {
  if (he()) return t("home inventory: memory files not read in a diskless session; nothing is sent"), 
  null;
  let r = {
    reads: 0
  }, o = await vn(e, r, n);
  if (o === null) return null;
  let s = new Map;
  for (let a = o.pop(); a !== void 0; a = o.pop()) {
    let l = `${a.type}\0${pp(a.path)}`;
    if (s.has(l)) continue;
    if (n?.aborted) return null;
    s.set(l, a);
    let u = await DB(a.path, a.type, new Set, me, Tar - 2);
    if (r.reads += u.length, r.reads > gt) return null;
    o.push(...u.filter(f => f.path !== a.path));
  }
  return [ ...s.values() ];
}

async function vn(e, n, r) {
  let o = (u, f) => () => DB(u, f, new Set, me, f === "User" ? 0 : Tar - 1), s = (u, f) => async () => [ ...await Tde({
    rulesDir: u,
    type: f,
    processedPaths: new Set,
    includeExternal: me,
    conditionalRule: !1
  }), ...await Tde({
    rulesDir: u,
    type: f,
    processedPaths: new Set,
    includeExternal: me,
    conditionalRule: !0
  }) ], a = [ o(I5("Managed"), "Managed"), s(OBe(), "Managed"), o(mt(e, XJ), "User"), s(mt(e, WTe), "User") ], l = [];
  for (let u of a) {
    if (r?.aborted) return null;
    let f = await u();
    if (n.reads += f.length, n.reads > gt) return null;
    l.push(...f);
  }
  return l;
}

var oe = ".md", Fn = 5e4, Ht = j === ge.sep ? ge : te, Tn = j === ge.sep ? /[\\/]+/ : /\/+/;

function de(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC");
}

function G(e, n = Ht) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}

function In(e, n, r = Ht) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let s = r.resolve(e, o), a = r.resolve(n);
  return (r === ge ? s.toLowerCase() === a.toLowerCase() : s === a) ? o : null;
}

async function W(e) {
  if (jC(e)) throw Error("realpath would misread a backslash in the path");
  return Ln(e);
}

function yt(e) {
  return jC(e) ? {
    resolvedPath: e,
    isSymlink: !1,
    isCanonical: !1
  } : wo(se(), e);
}

var xn = 4096;

async function $e(e, n, r, o) {
  let s;
  try {
    s = await W(n);
  } catch {
    return "unresolvable";
  }
  let a = K(e.realConfigHome, s);
  if (a === "" || G(a)) return "outside";
  let l = de(a, j);
  return {
    realPath: s,
    nativeRel: a,
    rel: l,
    lexicalRel: r ?? l,
    rawRels: D([ Lt(a), ...o === null ? [] : [ o ] ])
  };
}

async function An(e, n) {
  try {
    let r = await W(n);
    return Se(e, r) || !G(K(e.realConfigHome, r));
  } catch {
    return !0;
  }
}

function Se(e, n) {
  return !G(K(n, e.realConfigHome));
}

function Lt(e) {
  return j === "/" ? e : e.split(j).join("/");
}

function Pt(e, n) {
  let r = [ e.configHome, e.realConfigHome ].map(o => K(o, n)).find(o => o !== "" && !G(o));
  return r === void 0 ? null : {
    rel: de(r, j),
    raw: Lt(r)
  };
}

function Ke(e) {
  let n = ll(nt(e, "/"));
  return sc(e) && e.includes("/") && ue(e).toLowerCase() === oe && !Ule(e) && !Cn.test(e) && !$xn.has(n) && !n.startsWith("agent-memory") && !Mn(e) && !Et(e);
}

function Et(e) {
  let n = ll(nt(e, "/"));
  return n === ll(WTe) || n === ll(aVe);
}

function Mn(e) {
  let [n, r] = e.split("/");
  return ll(n ?? "") === "skills" && ll(r ?? "") === S1;
}

var Cn = /~\d/, Bn = 32;

async function On(e) {
  let n = e, r = new Set;
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return !1;
    r.add(n);
    let s;
    try {
      s = await Hn(n);
    } catch (l) {
      return St(l);
    }
    if (s.includes("\ufffd")) throw Error("link body is not valid UTF-8");
    let a;
    try {
      a = Pn(await W(vt(n)), s);
    } catch (l) {
      if (E(l) === "ENAMETOOLONG") throw l;
      return St(l);
    }
    if ($n(s)) throw Error("link body climbs out of a directory it entered");
    if (Cs(s) || SI(a)) return !0;
    try {
      if (!(await Oe(a)).isSymbolicLink()) return !1;
    } catch (l) {
      if (!B(l) || E(l) === "ENAMETOOLONG" && !Dn(s)) throw l;
      return !1;
    }
    n = a;
  }
  throw Error("link chain too long to vet");
}

function St(e) {
  if (B(e) || E(e) === "EINVAL") return !0;
  throw e;
}

function B(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG";
}

function Dn(e) {
  return e.split(/[\\/]/).some(n => [ ...n ].length > 255);
}

async function Ft(e) {
  try {
    return await Ne(e), !1;
  } catch (n) {
    return B(n);
  }
}

async function Nn(e) {
  try {
    return !(await Ne(e)).isDirectory();
  } catch (n) {
    return B(n);
  }
}

function $n(e) {
  let n = !1;
  for (let r of e.split(Tn)) if (r === "..") {
    if (n) return !0;
  } else if (r !== "" && r !== ".") n = !0;
  return !1;
}

var le = {
  ok: !1,
  reason: "aborted"
};

async function Tt({configHome: e, isUserSettingsFileSendable: n, readRules: r, createFilter: o, signal: s, aliasDirectories: a = xn, settingsToCloud: l = jN}) {
  if (he()) return {
    ok: !1,
    reason: "diskless"
  };
  if (!await l().catch(() => !1)) return {
    ok: !1,
    reason: "flag_off"
  };
  try {
    if (!n || !r.complete) return Ae({
      rulesUnreadable: !0
    });
    if (!dn("userSettings")) return Ae({
      rulesUnreadable: !1
    });
    let u;
    try {
      u = await W(e);
    } catch (R) {
      if (B(R) && await Ft(e)) return Ae({
        rulesUnreadable: !1
      });
      return {
        ok: !1,
        reason: "alias_unreadable"
      };
    }
    let f = {
      configHome: e,
      realConfigHome: u,
      aliasBudget: {
        left: a
      },
      giveUp: null,
      topLevelLinks: []
    };
    f.topLevelLinks = await Gn(f);
    let p = o(e, {
      realRoot: u,
      readRules: r
    }), g = {
      held: new Map
    }, y = new Set, S = new Set, P = new Map, v = new Map, H = UT() ? {
      files: [],
      leftBehind: []
    } : await jn(f);
    if (f.giveUp === null) {
      let R = await ht(e, s);
      if (HM(s)) return le;
      if (R === null) return {
        ok: !1,
        reason: "too_many_links"
      };
      for (let F of R) {
        if (HM(s)) return le;
        await We(f, p, F, v);
      }
    }
    let x = await Vn(f, p, H.files, g, y, S, P, v, s);
    if (x === null) return le;
    let T = Sr("outputStyles") ? {
      files: [],
      leftBehind: []
    } : await xt(f, aVe), h = await Jn(f, p, T.files, g, y, S, v);
    if (f.giveUp !== null) return {
      ok: !1,
      reason: f.giveUp
    };
    let m = [ ...g.held.values() ], C = new Set, k = new Map;
    for (let R of [ ...m.filter(F => F.kind === "output_style"), ...m.filter(F => F.kind !== "output_style") ]) {
      if (HM(s)) return le;
      let F = await qn(f, p, R, v, C, S);
      if (F.entry === null) C.add(R.location.realPath);
      k.set(R, F);
    }
    let w = m.flatMap(R => k.get(R) ?? []), {kept: M, droppedOverCap: U} = XJo(w.flatMap(({entry: R, foldedIncludes: F}) => R === null ? [] : [ {
      content: R.content,
      entry: R,
      foldedIncludes: F
    } ]).toSorted((R, F) => Kn(R.entry, F.entry))), O = [ ...P ].filter(([R]) => !y.has(R) && !S.has(R)).map(([R, F]) => v.get(R) ?? F), X = [ ...H.leftBehind, ...x, ...O, ...T.leftBehind, ...h, ...w.flatMap(R => R.leftBehind), ...U.flatMap(({entry: R, foldedIncludes: F}) => [ {
      path: R.path,
      reason: "over_cap"
    }, ...F.map(ae => ({
      path: ae,
      reason: "include_not_sent"
    })) ]) ], A = M.map(({entry: R}) => R);
    return {
      ok: !0,
      inventory: {
        entries: A,
        summary: It(A, X),
        leftBehind: X
      }
    };
  } catch (u) {
    if (HM(s)) return le;
    return t(`home inventory: gave the run up \u2014 ${u instanceof Error ? u.message : String(u)}`), 
    {
      ok: !1,
      reason: "alias_unreadable"
    };
  }
}

function Ae({rulesUnreadable: e}) {
  return {
    ok: !0,
    inventory: {
      entries: [],
      summary: {
        ...It([], []),
        rulesUnreadable: e
      },
      leftBehind: []
    }
  };
}

function It(e, n) {
  return {
    withheldSensitive: Y(n, "sensitive"),
    withheldReadDenied: Y(n, "read_denied"),
    rulesUnreadable: !1,
    includesNotSent: Y(n, "include_not_sent"),
    symlinksNotSent: Y(n, "symlink_not_sent"),
    notDestinations: Y(n, "not_destination"),
    unreadable: Y(n, "unreadable"),
    overCap: Y(n, "over_cap"),
    undefusable: Y(n, "undefusable"),
    inlinedImports: e.reduce((r, o) => r + o.folded.length, 0),
    defusedImports: e.reduce((r, o) => r + o.defused, 0)
  };
}

function Y(e, n) {
  return N(e, r => r.reason === n);
}

var _t = {
  claude_md: 0,
  rule: 1,
  output_style: 2
};

function Kn(e, n) {
  return _t[e.kind] - _t[n.kind] || e.content.length - n.content.length || (e.path < n.path ? -1 : e.path > n.path ? 1 : 0);
}

async function jn(e) {
  let n = ne(e.configHome, XJ), r = await At(e, n), o = await xt(e, WTe);
  if (r === null) return o;
  let s = r.isSymlink ? await ce(e, n) : void 0;
  if (s?.isDirectory() === !0 && await An(e, n)) e.giveUp ??= "alias_unreadable";
  if (s === null || s !== void 0 && !s.isFile()) return {
    files: o.files,
    leftBehind: [ {
      path: XJ,
      reason: "symlink_not_sent"
    }, ...o.leftBehind ]
  };
  return {
    files: [ {
      path: n,
      lexicalRel: XJ,
      rawLexicalRel: XJ,
      viaSymlink: r.isSymlink,
      aliasOnly: !1
    }, ...o.files ],
    leftBehind: o.leftBehind
  };
}

async function xt(e, n) {
  let r = ne(e.configHome, n), o = await At(e, r);
  if (o === null) return {
    files: [],
    leftBehind: []
  };
  if (o.isSymlink) {
    let s = await ce(e, r);
    if (s === null || !s.isDirectory()) return {
      files: s !== null && s.isFile() ? [ {
        path: r,
        lexicalRel: n,
        rawLexicalRel: n,
        viaSymlink: !0,
        aliasOnly: !0
      } ] : [],
      leftBehind: [ {
        path: n,
        reason: "symlink_not_sent"
      } ]
    };
  }
  return Mt(e, r, [ n ], o.isSymlink, new Set);
}

async function Gn(e) {
  let n;
  try {
    n = await De(e.configHome, {
      withFileTypes: !0
    });
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return [];
  }
  let r = [];
  for (let o of n) {
    let s = ne(e.configHome, o.name), a = await je(e, s, o);
    if (a === null || !a.isSymbolicLink()) continue;
    if (await ce(e, s) === null) continue;
    let l;
    try {
      l = await W(s);
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (Se(e, l)) {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    let u = K(e.realConfigHome, l);
    if (!G(u)) r.push({
      name: o.name.normalize("NFC"),
      targetRel: de(u, j)
    });
  }
  return r;
}

function Wn(e, n) {
  return e.topLevelLinks.flatMap(({name: r, targetRel: o}) => n === o ? [ r ] : n.startsWith(`${o}/`) ? [ `${r}/${n.slice(o.length + 1)}` ] : []);
}

async function At(e, n) {
  try {
    return {
      isSymlink: (await Oe(n)).isSymbolicLink()
    };
  } catch (r) {
    if (!B(r)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}

async function Mt(e, n, r, o, s) {
  let a = r.join("/").normalize("NFC"), l = {
    files: [],
    leftBehind: [ {
      path: a,
      reason: "symlink_not_sent"
    } ]
  }, u;
  try {
    let g = await W(n);
    if (s.has(g)) return {
      files: await Ue(e, n, r, new Set([ g ])),
      leftBehind: []
    };
    let y = K(e.realConfigHome, g);
    if (Se(e, g)) return e.giveUp ??= "alias_unreadable", l;
    if (G(y)) return l;
    let S = `${de(y, j)}/x.md`;
    if (o && zTe(S) === null) return {
      files: Ke(S) ? await Ue(e, n, r, new Set([ g ])) : [],
      leftBehind: l.leftBehind
    };
    s.add(g), u = await De(n, {
      withFileTypes: !0
    });
  } catch (g) {
    if (o || !B(g) || !await Nn(n)) e.giveUp ??= "alias_unreadable";
    return {
      files: [],
      leftBehind: []
    };
  }
  let f = [], p = [];
  for (let g of u.toSorted(Ct)) {
    let y = ne(n, g.name), S = [ ...r, g.name ].join("/"), P = S.normalize("NFC"), v = await je(e, y, g);
    if (v === null) continue;
    let H = v.isSymbolicLink(), x = g.name.endsWith(oe), T = H ? await ce(e, y) : v;
    if (T === null) {
      if (ue(g.name).toLowerCase() === oe) p.push({
        path: P,
        reason: "symlink_not_sent"
      });
    } else if (T.isDirectory()) {
      let h = await Mt(e, y, [ ...r, g.name ], o || H, s);
      f.push(...h.files), p.push(...h.leftBehind);
    } else if (T.isFile() && (x || H || o && ue(g.name).toLowerCase() === oe)) f.push({
      path: y,
      lexicalRel: P,
      rawLexicalRel: S,
      viaSymlink: o || H,
      aliasOnly: !x
    });
  }
  return {
    files: f,
    leftBehind: p
  };
}

async function Ue(e, n, r, o) {
  let s;
  try {
    s = await De(n, {
      withFileTypes: !0
    });
  } catch {
    return e.giveUp ??= "alias_unreadable", [];
  }
  let a = [];
  for (let l of s.toSorted(Ct)) {
    let u = ne(n, l.name), f = [ ...r, l.name ].join("/"), p = await je(e, u, l);
    if (p === null) continue;
    let g = p.isSymbolicLink(), y = g ? await ce(e, u) : p;
    if (y === null) continue;
    if (y.isDirectory()) {
      let S = await zn(e, u, o);
      if (S !== null) a.push(...await Ue(e, u, [ ...r, l.name ], new Set([ ...o, S ])));
    } else if (y.isFile() && (g || ue(l.name).toLowerCase() === oe)) a.push({
      path: u,
      lexicalRel: f.normalize("NFC"),
      rawLexicalRel: f,
      viaSymlink: g,
      aliasOnly: !0
    });
  }
  return a;
}

async function zn(e, n, r) {
  let o;
  try {
    o = await W(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  let s = K(e.realConfigHome, o);
  if (Se(e, o)) return e.giveUp ??= "alias_unreadable", null;
  if (r.has(o) || G(s)) return null;
  let a = `${de(s, j)}/x.md`;
  if (zTe(a) === null && !Ke(a)) return null;
  if (e.aliasBudget.left <= 0) return e.giveUp ??= "too_many_links", null;
  return e.aliasBudget.left -= 1, o;
}

async function je(e, n, r) {
  if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) return r;
  try {
    return await Oe(n);
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}

async function ce(e, n) {
  let r;
  try {
    r = await On(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  if (r) return null;
  try {
    return await Ne(n);
  } catch (o) {
    if (!B(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}

function Ct(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
}

function q(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r);
}

async function Ut(e, n, r, o, s, a) {
  let l = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (l === "unresolvable") e.giveUp ??= "alias_unreadable"; else if (l !== "outside") {
      let p = Z(e, n, l, r.lexicalRel);
      if (p !== null) q(a, l.realPath, p);
    }
    return {
      kind: "attributed"
    };
  }
  if (l === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Me(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
  }
  if (l === "outside") return Me(r, "symlink_not_sent");
  let u = r.viaSymlink ? l.rel : r.lexicalRel, f = Wtt(u);
  if (f === null) {
    let p = r.viaSymlink ? Z(e, n, l, r.lexicalRel) : null;
    if (!r.viaSymlink || p !== null) q(a, l.realPath, p);
    if (s.has(l.realPath)) return {
      kind: "attributed"
    };
    return s.add(l.realPath), p === null ? Me(r, r.viaSymlink ? "symlink_not_sent" : "not_destination") : {
      kind: "refused",
      left: p
    };
  }
  if (o.has(l.realPath)) {
    let p = Z(e, n, l, r.lexicalRel);
    if (p !== null) q(a, l.realPath, p);
    return {
      kind: "attributed"
    };
  }
  return {
    kind: "candidate",
    candidate: {
      ...f,
      location: l,
      imports: [],
      styleVia: new Map
    }
  };
}

function Me(e, n) {
  return {
    kind: "refused",
    left: {
      path: e.lexicalRel,
      reason: n
    }
  };
}

function Ge(e, n) {
  let r = TKt(n.destination);
  if (e.held.has(r)) return null;
  return e.held.set(r, n), n;
}

async function Vn(e, n, r, o, s, a, l, u, f) {
  let p = [];
  for (let g of r) {
    if (HM(f)) return null;
    let y = await Ut(e, n, g, s, a, u);
    if (y.kind === "refused") p.push(y.left);
    if (y.kind !== "candidate") continue;
    let {candidate: S} = y, P = g.lexicalRel === XJ ? g.path : S.location.realPath, v = await DB(P, "User", new Set, !0);
    if (v.length === 0) {
      let H = await Be(e, S.location);
      if (H.kind === "read" && H.content.includes(0)) p.push({
        path: g.lexicalRel,
        reason: "unreadable"
      });
      continue;
    }
    if (Ge(o, S) === null) {
      for (let H of v) await We(e, n, H, u);
      p.push({
        path: g.lexicalRel,
        reason: "not_destination"
      });
      continue;
    }
    s.add(S.location.realPath), p.push(...await Xn(e, n, S, v, o, s, a, l, u));
  }
  return p;
}

function Ce(e) {
  return e.globs === void 0 ? "" : _(e.globs.toSorted());
}

async function Xn(e, n, r, o, s, a, l, u, f) {
  let p = [], g = o.find(h => h.parent === void 0), y = o.filter(h => h !== g), S = new Map, P = (h, m) => ({
    candidate: h,
    isStyle: h.kind === "output_style",
    withheld: bt(e, n, h.location) !== null || f.get(h.location.realPath) != null,
    scope: Ce(m)
  }), v = new Map(g === void 0 ? [] : [ [ g.path, P(r, g) ] ]), H = new Map, x = (h, m) => {
    if (!l.has(h)) l.add(h), H.set(h, p.push(m) - 1);
  }, T = (h, m) => {
    let C = H.get(h);
    if (C === void 0) x(h, m); else p[C] = m;
  };
  for (let h of o) await We(e, n, h, f);
  for (let h of y) {
    let m = v.get(h.parent ?? "");
    if (m === void 0) continue;
    let C = Pt(e, h.path), k = await $e(e, h.path, C?.rel ?? null, C?.raw ?? null);
    if (k === "outside" || k === "unresolvable") {
      x(h.path, {
        path: C?.rel ?? h.path,
        reason: "include_not_sent"
      });
      continue;
    }
    if (a.has(k.realPath) || f.has(k.realPath)) {
      let A = f.get(k.realPath) ?? Z(e, n, k, k.lexicalRel);
      if (A !== null) q(f, k.realPath, A), T(k.realPath, A);
      continue;
    }
    let w = Wtt(k.rel);
    if (w !== null) {
      let A = Ge(s, {
        ...w,
        location: k,
        imports: [],
        styleVia: new Map
      });
      if (A === null) {
        x(k.realPath, {
          path: k.lexicalRel,
          reason: "not_destination"
        });
        continue;
      }
      if (a.add(k.realPath), A.kind === "output_style") {
        S.set(h.path, k.realPath);
        let R = h.parent === void 0 ? void 0 : S.get(h.parent);
        if (R !== void 0) m.candidate.styleVia.set(k.realPath, R);
        if (!m.withheld && !m.isStyle && m.scope === Ce(h)) m.candidate.imports.push({
          location: k,
          via: R ?? null,
          asStyle: !0
        });
      }
      v.set(h.path, A.kind === "output_style" ? {
        ...m,
        withheld: m.withheld || bt(e, n, A.location) !== null
      } : P(A, h));
      continue;
    }
    if (m.withheld) continue;
    let M = D([ k.rel, k.lexicalRel, ...k.rawRels ]).every(Ke), U = M ? Z(e, n, k, k.lexicalRel) : null, O = U?.reason ?? null, X = Et(k.rel) && ue(k.rel).toLowerCase() === oe;
    if (U !== null || X) q(f, k.realPath, U);
    if (!M || O !== null) {
      x(k.realPath, {
        path: k.lexicalRel,
        reason: O ?? (X ? "not_destination" : "include_not_sent")
      });
      continue;
    }
    if (m.isStyle || m.scope !== Ce(h)) {
      u.set(k.realPath, {
        path: k.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    m.candidate.imports.push({
      location: k,
      via: h.parent === void 0 ? null : S.get(h.parent) ?? null
    }), S.set(h.path, k.realPath), a.add(k.realPath), v.set(h.path, m);
  }
  return p;
}

async function We(e, n, r, o) {
  if (jC(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  let s = vt(yt(r.path).resolvedPath), a = Fe(r.content, Q(r.rawContent ?? r.content).body);
  if (!a.vettable) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  for (let l of a.spellings) {
    if (l.includes("\0")) continue;
    let u = ot(l, s);
    if ((Un(l) || Un(u)) && G(K(e.configHome, u))) continue;
    let f = yt(u);
    if (!f.isCanonical) {
      if (!f.isSymlink && !await Yn(u)) e.giveUp ??= "alias_unreadable";
      continue;
    }
    let p = Pt(e, u);
    if (p === null) {
      let S = f.resolvedPath;
      if (o.get(S) != null || G(K(e.realConfigHome, S))) continue;
      let P = In(e.configHome, u);
      if (P === null) {
        e.giveUp ??= "alias_unreadable";
        continue;
      }
      switch (SDn(u) || SDn(S) ? "sensitive" : n(P, !0)) {
       case "sensitive":
       case "sensitive_tracked":
       case "host_config":
        q(o, S, {
          path: l,
          reason: "sensitive"
        });
        break;

       case "read_denied":
       case "rules_unreadable":
        q(o, S, {
          path: l,
          reason: "read_denied"
        });
        break;

       case "content_filter":
       case null:
        break;
      }
      continue;
    }
    let g = await $e(e, u, p.rel, p.raw);
    if (g === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (g === "outside" || o.get(g.realPath) != null) continue;
    let y = Z(e, n, g, g.lexicalRel);
    if (y !== null) q(o, g.realPath, y);
  }
}

async function Yn(e) {
  if (Un(e) && !za(e) || va(e)) return !0;
  try {
    return await W(e), !1;
  } catch (n) {
    return B(n) && await Ft(e);
  }
}

async function Jn(e, n, r, o, s, a, l) {
  let u = [];
  for (let f of r) {
    let p = await Ut(e, n, f, s, a, l);
    if (p.kind === "refused") u.push(p.left); else if (p.kind === "candidate") if (p.candidate.kind !== "output_style") u.push({
      path: f.lexicalRel,
      reason: "symlink_not_sent"
    }); else if (Ge(o, p.candidate) === null) u.push({
      path: f.lexicalRel,
      reason: "not_destination"
    }); else s.add(p.candidate.location.realPath);
  }
  return u;
}

function bt(e, n, r) {
  return Bt(e, n, r)?.reason ?? null;
}

function Z(e, n, r, o) {
  let s = Bt(e, n, r);
  return s === null ? null : {
    path: s.alias ?? o,
    reason: s.reason
  };
}

function Bt(e, n, r) {
  let o = D([ r.lexicalRel, r.rel, ...r.rawRels ]), s = D(o.flatMap(u => Wn(e, u))).filter(u => !o.includes(u)), a = [ ...o, ...s ];
  if ([ ...a, ...a.map(u => ne(e.configHome, ...u.split("/"))), r.realPath ].some(u => SDn(u))) return {
    reason: "sensitive",
    alias: null
  };
  for (let u of a) {
    let f = s.includes(u) ? u : null;
    switch (n(u, !1)) {
     case "sensitive":
     case "sensitive_tracked":
     case "host_config":
      return {
        reason: "sensitive",
        alias: f
      };

     case "read_denied":
     case "rules_unreadable":
      return {
        reason: "read_denied",
        alias: f
      };

     case "content_filter":
     case null:
      break;
    }
  }
  return null;
}

async function qn(e, n, r, o, s, a) {
  let l = Z(e, n, r.location, r.destination), u = o.get(r.location.realPath) ?? null;
  if (l !== null) return J(r, l.reason, a, l.path);
  if (u !== null) return J(r, u.reason, a, u.path);
  if (!await wt(e, r.location)) return J(r, "unreadable", a);
  let f = await Be(e, r.location);
  if (f.kind === "skip") return J(r, nr(f.skipped.reason), a);
  if (f.content.length > Ine) return J(r, "over_cap", a);
  let p = f.content.toString("utf8");
  if (Jhe(p)) {
    let w = J(r, "credential", a);
    return {
      ...w,
      leftBehind: w.leftBehind.map(M => M.reason === "credential" ? {
        ...M,
        ...Rt(p, 0)
      } : M)
    };
  }
  let g = r.kind === "output_style" ? {
    content: f.content,
    defusedPaths: []
  } : Zn(r.destination, f.content, r.imports.length > 0), y = [ g.content ], S = [], P = [], v = g.content.length, H = [], x = r.imports.length > 0 && xe(Q(g.content.toString("utf8")).body), T = new Set(s);
  for (let {location: w, via: M, asStyle: U} of r.imports) {
    let O = qt => {
      if (!U) H.push(qt);
    }, X = Z(e, n, w, w.lexicalRel);
    if (X !== null || o.has(w.realPath) || T.has(w.realPath) || M !== null && tr(M, T, r.styleVia) || x) {
      if (T.add(w.realPath), !a.has(w.realPath)) a.add(w.realPath), O(X ?? o.get(w.realPath) ?? {
        path: w.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let A = await wt(e, w) ? await Be(e, w) : null;
    if (A === null || A.kind === "skip") {
      T.add(w.realPath), O({
        path: w.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let {head: R, body: F} = Q(A.content.toString("utf8"));
    if (xe(F) || dt(F)) {
      T.add(w.realPath), O({
        path: w.lexicalRel,
        reason: "include_not_sent"
      });
      continue;
    }
    let ae = Buffer.from(pt(w.rel) + Le(F));
    if (v + ae.length > Ine) {
      T.add(w.realPath), O({
        path: w.lexicalRel,
        reason: "over_cap"
      });
      continue;
    }
    if (Jhe(F)) {
      T.add(w.realPath), O({
        path: w.lexicalRel,
        reason: "credential",
        ...Rt(F, Nt(R, `\n`))
      });
      continue;
    }
    if (y.push(ae), S.push(w.lexicalRel), !U) P.push(w.lexicalRel);
    v += ae.length;
  }
  let h = Buffer.concat(y), m = r.kind !== "output_style" && y.length > 1 && Qn(g.content, h, r.destination) ? er(h) : h;
  if (r.kind !== "output_style" && m !== h && ye(m, re)) return J(r, "undefusable", a);
  if (!m.equals(f.content) && Jhe(m.toString("utf8"))) {
    let w = J(r, "credential", a), M = new Set(H.map(U => U.path));
    return {
      ...w,
      leftBehind: [ ...w.leftBehind.filter(U => !M.has(U.path)), ...H ]
    };
  }
  let C = new Set(S), k = N(g.defusedPaths, w => !C.has(te.normalize(te.join(te.dirname(r.destination), w)).normalize("NFC")));
  return {
    entry: {
      path: r.destination,
      kind: r.kind,
      content: m,
      sha256: at(m),
      folded: S,
      defused: k
    },
    foldedIncludes: P,
    leftBehind: H
  };
}

function Zn(e, n, r) {
  let o = x => Ot(e, x), s = n.toString("utf8").replace(/\r\n?/g, `\n`), a = Q(s), l = a.head, u = l !== "" && s.startsWith("\ufeff") ? "\ufeff" : "", f = r && l === "" && /^\uFEFF?---\s*\n/.test(s) ? `\n` : "", p = f + u + l, g = a.body, y = [], S = Le(g, o, y), P = S === g && f === "" ? {
    content: n,
    defusedPaths: []
  } : {
    content: Buffer.from(p + S),
    defusedPaths: y
  };
  if (P.content !== n && Q(n.toString("utf8")).head === "" !== (l === "")) return {
    content: Buffer.from(ee(s)),
    defusedPaths: kt(g, o)
  };
  if (!ye(P.content, o)) return P;
  let v = kt(g, o), H = Buffer.from(p + ee(g));
  return ye(H, re) ? {
    content: Buffer.from(f + ee(s)),
    defusedPaths: v
  } : {
    content: H,
    defusedPaths: v
  };
}

function kt(e, n) {
  let r = Fe(e, e);
  return r.vettable ? r.spellings.filter(o => !n(o)) : [];
}

function Qn(e, n, r) {
  let o = l => Ot(r, l), s = l => Ie(Q(l.toString("utf8")).body), a = s(n);
  return a.some(l => !o(l)) || N(a, o) > N(s(e), o);
}

function er(e) {
  let n = e.toString("utf8"), {head: r, body: o} = Q(n), s = r !== "" && n.startsWith("\ufeff") ? "\ufeff" : "", a = Buffer.from(s + r + ee(o));
  return ye(a, re) ? Buffer.from(ee(n)) : a;
}

function ye(e, n) {
  return Te(Q(e.toString("utf8")).body, n);
}

function Q(e) {
  let n = e.startsWith("\ufeff") ? e.slice(1) : e, r = sk.exec(n)?.[0];
  return r === void 0 ? {
    head: "",
    body: e
  } : {
    head: r,
    body: n.slice(r.length)
  };
}

function Ot(e, n) {
  if (n.startsWith("/") || n.startsWith("~")) return !1;
  let r = te.normalize(te.join(te.dirname(e), n)), o = r.startsWith("../") ? null : zTe(r);
  return o === "claude_md" || o === "rule";
}

function tr(e, n, r) {
  let o = new Set;
  for (let s = e; s !== void 0 && !o.has(s); s = r.get(s)) {
    if (n.has(s)) return !0;
    o.add(s);
  }
  return !1;
}

async function wt(e, n) {
  try {
    return await W(ne(e.realConfigHome, n.nativeRel)) === n.realPath;
  } catch {
    return !1;
  }
}

function Rt(e, n) {
  let r = e.split(`\n`), o = r.length > Fn ? -1 : r.findIndex(s => Jhe(s));
  return o === -1 ? {} : {
    line: n + o + 1
  };
}

function J(e, n, r, o = e.destination) {
  let s = [ {
    realPath: e.location.realPath,
    row: {
      path: o,
      reason: n
    }
  }, ...e.imports.filter(l => !l.asStyle).map(({location: l}) => ({
    realPath: l.realPath,
    row: {
      path: l.lexicalRel,
      reason: "include_not_sent"
    }
  })) ], a = [];
  for (let {realPath: l, row: u} of s) if (!r.has(l)) r.add(l), a.push(u);
  return {
    entry: null,
    foldedIncludes: [],
    leftBehind: a
  };
}

function Be(e, n) {
  return tt(e.realConfigHome, e.realConfigHome, n.nativeRel);
}

function nr(e) {
  switch (e) {
   case "symlink":
   case "hard_link":
    return "symlink_not_sent";

   case "too_large":
    return "over_cap";

   case "sensitive":
   case "sensitive_tracked":
   case "host_config":
    return "sensitive";

   case "read_denied":
   case "rules_unreadable":
    return "read_denied";

   case "content_filter":
   case "filtered":
   case "dependency_dir":
   case "outside_root":
   case "changed":
   case "not_regular_file":
   case "lane_path":
   case "over_budget":
   case "left_behind":
   case "unreadable":
   case "upload_failed":
   case "unpushed_only":
   case "ignored":
    return "unreadable";
  }
}

import { readdir as rr } from "fs/promises";

import { isAbsolute as or, join as ie, relative as ir, sep as sr } from "path";

var z = {
  covers: "all"
};

function _e(e) {
  if (!$6r(e)) return {
    covers: "matchers",
    matchers: []
  };
  let n = jt(e);
  if (!Array.isArray(n)) return z;
  let r = [];
  for (let o of n) {
    let s = L(o) ? o.matcher : void 0;
    if (typeof s !== "string") return z;
    if (s.trim() === "" || s === "*" || s === ".*") return z;
    r.push(s);
  }
  return {
    covers: "matchers",
    matchers: r
  };
}

function Kt(e) {
  if (e.covers === "all") return !0;
  let n = e.matchers;
  if (n.length === 0) return !1;
  return r => TE(r) ? n.some(o => {
    let s = Qto(o);
    return s === void 0 || s.some(a => ngt(r, a));
  }) : n.some(o => Jto(o, r));
}

function lr(e) {
  let n = e.filter($6r);
  if (n.length === 0) return;
  let r = n.map(jt);
  return n.find((s, a) => !Array.isArray(r[a])) ?? {
    PreToolUse: r.flatMap(s => Array.isArray(s) ? s : [])
  };
}

function jt(e) {
  return L(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0;
}

function Gt(e, n) {
  return e.covers === "all" || n.covers === "all" ? z : {
    covers: "matchers",
    matchers: D([ ...e.matchers, ...n.matchers ])
  };
}

function ur({sources: e, sourcesIncomplete: n, processGuard: r, plugins: o, repoEnabledPluginKeys: s}) {
  if (n || e.some(u => !u.read) || o === null || o.errors.length > 0 || o.warnings.some(u => u.type === "project-scope-suppressed-untrusted") || o.warnings.some(u => u.type === "plugin-renamed" && (s === void 0 || s.has(fr(u.source)))) || o === null) return z;
  let l = o.enabled.filter(u => u.scope === "project" || Hi(u.source) === Mi || u.scope !== "user" && (s === void 0 || s.has(fr(u.source))));
  if (l.some(u => u.hooksConfig === void 0 && u.manifest.hooks !== void 0)) return z;
  return [ r, ...e.map(u => u.read ? _e(u.hooks) : z), ...l.map(u => _e(u.hooksConfig)) ].reduce(Gt, {
    covers: "matchers",
    matchers: []
  });
}

function ze(e) {
  return e.some(n => n.severity !== "warning" || n.path === "hooks" || n.path.startsWith("hooks."));
}

function Wt(e, n, r = jN) {
  return {
    sources: ws,
    hooksOf: o => {
      if (o === "userSettings" || o === "flagSettings") return;
      if (o === "policySettings") return fe(o)?.hooks;
      let s = Je(o).map(we);
      return lr([ ...s.map(a => a?.hooks), fe(o)?.hooks ]);
    },
    sourcesIncomplete: () => ze(xm().errors) || Xe().some(o => ze(zt(o).errors)) || be.some(o => !dn(o)) && cr(),
    processGuard: () => {
      let o = pr(), s = (n() ?? []).filter(a => a.hooks.length > 0 && !mr(a.skillRoot, o));
      return Gt(_e(Eae()), _e({
        PreToolUse: s
      }));
    },
    loadPlugins: async () => {
      if ((await Promise.all(Xe().map(Vgt))).some(Boolean)) throw Error("an --add-dir settings file names another host");
      let [o, s] = await Promise.all([ I_e(e), dn("projectSettings") ? 0 : dr() ]), a = s === 0 ? o : {
        ...o,
        warnings: [ ...o.warnings, {
          type: "project-scope-suppressed-untrusted",
          source: `(unlisted)@${Cu}`,
          count: s,
          warning: "project skill directories on disk were not loaded: the project settings source is off for this process"
        } ]
      }, l = new Set(Ye({
        enabledPlugins: {
          ...yY(),
          ...xm().settings?.enabledPlugins ?? {}
        }
      })), u = $t().filter(p => !l.has(p)), f = be.some(p => !dn(p)) ? a.enabled.filter(p => p.settings?.agent !== void 0) : [];
      return u.length === 0 && f.length === 0 ? a : {
        ...a,
        errors: [ ...a.errors, ...u.map(p => ({
          type: "generic-error",
          source: p,
          error: "enabled in a settings file this process did not load"
        })), ...f.map(p => ({
          type: "generic-error",
          source: p.source,
          error: "names a main-thread agent this process did not resolve"
        })) ]
      };
    },
    repoEnabledPluginKeys: () => new Set([ ...$t(), ...Ye(fe("policySettings")) ].map(fr)),
    settingsToCloud: r
  };
}

async function dr() {
  let e = ie(Qr() ?? ke(), ".claude", "skills");
  if (e === ie(Ee(), "skills")) return 0;
  if (await Vgt(e)) return 1;
  return rr(e, {
    withFileTypes: !0
  }).then(n => N(n, r => r.isDirectory() || r.isSymbolicLink()), n => [ "ENOENT", "ENOTDIR" ].includes(E(n) ?? "") ? 0 : 1);
}

function cr() {
  return xm().settings?.agent !== void 0 || be.flatMap(e => Je(e).map(we)).some(e => e?.agent !== void 0);
}

var be = ws.filter(e => e !== "policySettings" && zp.has(e));

function pr() {
  let e = ie(Ee(), "skills");
  return {
    own: [ e, ie(Ee(), "commands"), ZIt() ],
    synced: ie(e, S1)
  };
}

function mr(e, n) {
  return e !== void 0 && !Dt(n.synced, e) && n.own.some(r => Dt(r, e));
}

function Dt(e, n) {
  let r = ir(e, n);
  return r !== "" && r.split(sr)[0] !== ".." && !or(r);
}

function Je(e) {
  return [ hn(e), e === "localSettings" ? Ty() : void 0 ].filter(n => n !== void 0);
}

function Xe() {
  return fc().flatMap(e => [ "settings.json", "settings.local.json" ].map(n => ie(e, ".claude", n)));
}

function we(e) {
  let {settings: n, errors: r} = zt(e);
  if (ze(r)) throw Error("a settings file could not be read");
  return n;
}

function zt(e) {
  if (SI(e)) throw Error("a settings file names another host");
  return ZR(e);
}

function $t() {
  return [ ...be.flatMap(n => Je(n).map(we)), ...Xe().map(we) ].flatMap(Ye);
}

function Ye(e) {
  return Object.entries(e?.enabledPlugins ?? {}).filter(([, n]) => n !== !1).map(([n]) => n);
}

async function Vt(e) {
  if (!await Promise.resolve().then(e.settingsToCloud).catch(() => !1)) return z;
  let n = e.sources.map(l => {
    try {
      return {
        read: !0,
        hooks: e.hooksOf(l)
      };
    } catch {
      return {
        read: !1
      };
    }
  }), r;
  try {
    r = e.sourcesIncomplete();
  } catch {
    r = !0;
  }
  let o;
  try {
    o = e.processGuard();
  } catch {
    o = z;
  }
  let s;
  try {
    s = await e.loadPlugins();
  } catch {
    s = null;
  }
  let a;
  try {
    a = e.repoEnabledPluginKeys?.();
  } catch {
    a = void 0;
  }
  return ur({
    sources: n,
    sourcesIncomplete: r,
    processGuard: o,
    plugins: s,
    repoEnabledPluginKeys: a
  });
}

async function Xt() {
  ar();
  let e = SE("userSettings"), n = fe("userSettings");
  return e.some(gr) || n === null && await hr(hn("userSettings")) ? {
    kind: "broken"
  } : {
    kind: "sendable",
    settings: n ?? {},
    hasLostAnAllowEntry: e.some(Yt)
  };
}

function gr(e) {
  return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !Yt(e);
}

function Yt({path: e}) {
  return e.startsWith("permissions.allow");
}

async function hr(e) {
  try {
    return e !== void 0 && (await se().lstat(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}

var yr = 3, _r = 0;

async function H6r({signal: e, storageV5: n, sessionPreToolUse: r = () => {}, launchConsent: o, now: s = Date.now, hookGuardHere: a = () => Vt(Wt(n, r, pot(o).enabled))} = {}) {
  let l = pot(o);
  if (!L1(l.enabledNow())) return {
    kind: "none",
    reason: "flag_off"
  };
  let u = s(), f = await br(e, a, o, l).catch(p => {
    if (Ve(p) || HM(e)) return {
      kind: "none",
      reason: "aborted"
    };
    return d(p), {
      kind: "none",
      reason: "failed"
    };
  });
  return Hr(f, s() - u), f;
}

async function br(e, n, r, o) {
  if (!BAe(r)) return {
    kind: "none",
    reason: "no_consent"
  };
  if (!jo().includes("userSettings")) return {
    kind: "none",
    reason: "user_settings_disabled"
  };
  let s = Ee(), a = await Xt(), l = a.kind === "sendable" ? a : null, u = S5t(), [f, p] = await Promise.all([ Tt({
    configHome: s,
    isUserSettingsFileSendable: l !== null,
    readRules: u,
    createFilter: tdr,
    signal: e,
    settingsToCloud: o.enabled
  }), n().catch(() => ({
    covers: "all"
  })) ]);
  if (i("tengu_home_seed_hook_guard", {
    kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
    matcher_count: p.covers === "all" ? 0 : p.matchers.length,
    allow_entry_lost_at_parse: l?.hasLostAnAllowEntry ?? !1
  }), HM(e) || !f.ok && f.reason === "aborted") return {
    kind: "none",
    reason: "aborted"
  };
  if (!f.ok) return f.reason === "flag_off" ? {
    kind: "none",
    reason: "flag_off"
  } : {
    kind: "none",
    reason: "home_unvettable",
    cause: f.reason === "too_many_links" ? f.reason : "alias_unreadable",
    configHome: s
  };
  let g = tTn(l?.settings ?? null, {
    preToolUseHookActiveHere: Kt(p),
    hasLostAnAllowEntryAtParse: l?.hasLostAnAllowEntry ?? !1,
    settingsToCloud: o.enabledNow
  });
  return kr({
    inventory: f.inventory,
    settings: g,
    configHome: s,
    unreadableSettingsFiles: (u.unreadableSettingsFiles ?? []).map(y => Ww() !== void 0 && y === BC() ? "--settings (inline JSON)" : y),
    writtenAtMs: _r
  });
}

function kr({inventory: e, settings: n, configHome: r, unreadableSettingsFiles: o, writtenAtMs: s}) {
  let a = n.document, l = vr(e, n), u = {
    summary: l,
    leftBehind: e.leftBehind,
    unreadable: e.summary.unreadable,
    settings: a === null ? n.reason : "sent",
    configHome: r
  };
  if (e.summary.rulesUnreadable) return {
    kind: "empty",
    reason: "rules_unreadable",
    unreadableSettingsFiles: o,
    ...u,
    settings: a === null ? n.reason : "nothing_to_send"
  };
  if (e.entries.length === 0 && a === null) return {
    kind: "empty",
    reason: "nothing_to_send",
    ...u
  };
  return {
    kind: "ready",
    pack: Vvt({
      generation: 1,
      writtenAtMs: s,
      files: e.entries.map(p => YJo(p.path, p.content)),
      settings: a,
      summary: l
    }),
    description: wr(e, a),
    ...u
  };
}

function wr(e, n) {
  return {
    claudeMd: e.entries.some(r => r.kind === "claude_md"),
    rules: N(e.entries, r => r.kind === "rule"),
    outputStyles: N(e.entries, r => r.kind === "output_style"),
    inlinedImports: e.summary.inlinedImports,
    settingsKeys: n === null ? [] : Rr(n),
    permissionRules: (n?.permissions?.allow?.length ?? 0) + (n?.permissions?.deny?.length ?? 0) + (n?.permissions?.ask?.length ?? 0)
  };
}

function Rr(e) {
  return Object.keys(Jt).filter(n => e[n] !== void 0);
}

function vr(e, n) {
  let {counts: r} = n;
  return {
    withheldSensitive: e.summary.withheldSensitive,
    withheldReadDenied: e.summary.withheldReadDenied,
    rulesUnreadable: e.summary.rulesUnreadable,
    includesNotSent: e.summary.includesNotSent,
    symlinksNotSent: e.summary.symlinksNotSent,
    notDestinations: e.summary.notDestinations,
    overCap: e.summary.overCap,
    unreadable: e.summary.unreadable,
    settingsKeysWithheld: r.withheldKeys,
    credentialTextsWithheld: r.withheldCredentialTexts,
    rulesCoveringDeviceTools: r.rules.coveringDeviceTools,
    droppedRules: {
      rooted: r.rules.droppedRooted,
      device: r.rules.droppedDevice,
      invalid: r.rules.droppedInvalid,
      guarded: r.rules.droppedGuarded,
      overCap: r.rules.droppedOverCap,
      credential: r.rules.droppedCredential,
      credentialRestrictions: r.rules.droppedCredentialRestrictions
    }
  };
}

function Hr(e, n) {
  if (e.kind === "none") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      cause: e.reason === "home_unvettable" ? c(e.cause) : void 0,
      duration_ms: n
    });
    return;
  }
  let {summary: r} = e, o = Srr(e.leftBehind), s = {
    settings_keys_withheld: r.settingsKeysWithheld,
    credential_texts_withheld: r.credentialTextsWithheld,
    rules_dropped_rooted: r.droppedRules.rooted,
    rules_dropped_device: r.droppedRules.device,
    rules_dropped_invalid: r.droppedRules.invalid,
    rules_dropped_over_cap: r.droppedRules.overCap,
    rules_dropped_credential: r.droppedRules.credential,
    restrictions_dropped_credential: r.droppedRules.credentialRestrictions,
    rules_dropped_guarded: r.droppedRules.guarded,
    rules_covering_device_tools: r.rulesCoveringDeviceTools,
    withheld_sensitive: r.withheldSensitive,
    withheld_read_denied: r.withheldReadDenied,
    withheld_credential: o.others + (o.claudeMd ? 1 : 0),
    claude_md_withheld_credential: o.claudeMd,
    includes_not_sent: r.includesNotSent,
    symlinks_not_sent: r.symlinksNotSent,
    claude_md_link_not_sent: e.leftBehind.some(l => l.reason === "symlink_not_sent" && l.path === XJ),
    not_destinations: r.notDestinations,
    over_cap: r.overCap,
    unreadable: e.unreadable,
    duration_ms: n
  };
  if (e.kind === "empty") {
    i("tengu_home_seed_plan", {
      outcome: c(e.reason),
      settings: c(e.settings),
      settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0,
      ...s
    });
    return;
  }
  let {description: a} = e;
  i("tengu_home_seed_plan", {
    outcome: b("ready"),
    settings: c(e.settings),
    files: a.rules + a.outputStyles + (a.claudeMd ? 1 : 0),
    pack_bytes: e.pack.length,
    settings_keys: a.settingsKeys.length,
    rules_kept: a.permissionRules,
    includes_inlined: a.inlinedImports,
    ...s
  });
}

var Jt = {
  language: "language",
  outputStyle: "output style",
  attribution: "attribution",
  includeCoAuthoredBy: "co-author preference",
  includeGitInstructions: "git-instructions preference",
  alwaysThinkingEnabled: "thinking preference",
  showThinkingSummaries: "thinking-summary preference",
  permissions: "permission rules"
};

function D6r(e) {
  let n = [ ...e.claudeMd ? [ "CLAUDE.md" ] : [], ...qe(e.rules, "rules file"), ...qe(e.outputStyles, "output-style file"), ...qe(e.permissionRules, "permission rule"), ...e.settingsKeys.flatMap(r => r === "permissions" ? [] : [ Jt[r] ]), ...e.inlinedImports > 0 ? [ `${e.inlinedImports} @${I(e.inlinedImports, "import")} folded in` ] : [] ];
  return n.length === 0 ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list" : `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}

function qe(e, n) {
  return e > 0 ? [ `${e} ${I(e, n)}` ] : [];
}

var Jkn = "Your deny and ask rules are not in force in the cloud session", Qkn = "The cloud session's settings stay as they were", Zkn = "Your deny and ask rules may not be in force in the cloud session";

function brr({summary: e, leftBehind: n, unreadable: r, settings: o, configHome: s}, {launch: a, settingsFile: l}) {
  let u = Os(s), f = [ V(n, "symlink_not_sent", e.symlinksNotSent, m => `${m} linked ${I(m, "file")} (links are not followed)`), V(n, "include_not_sent", e.includesNotSent, m => `${m} @${I(m, "import")} outside ${u} or not markdown`), V(n, "sensitive", e.withheldSensitive, m => `${m} ${I(m, "file")} named like credentials`), V(n, "read_denied", e.withheldReadDenied, m => `${m} ${I(m, "file")} your Read rules or sandbox settings cover`), V(n, "not_destination", e.notDestinations, m => `${m} ${I(m, "file")} with ${I(m, "a name", "names")} the cloud session cannot create`), V(n, "over_cap", e.overCap, m => `${m} ${I(m, "file")} over a limit of ${iVe} files, ${en(Ine)} per file or ${en(kKt)} in total`), V(n, "unreadable", r, m => `${m} ${I(m, "file")} that changed while being read`), V(n, "undefusable", N(n, m => m.reason === "undefusable"), m => `${m} ${I(m, "file")} whose @imports could not be made safe`), V(n, "credential", N(n, m => m.reason === "credential"), m => `${m} ${I(m, "file")} ${Ze(m)}`) ].flatMap(m => m === null ? [] : [ m ]), p = e.droppedRules.rooted + e.droppedRules.device + e.droppedRules.invalid + e.droppedRules.overCap, g = e.droppedRules.credentialRestrictions, y = e.droppedRules.credential - g, S = e.credentialTextsWithheld, P = e.droppedRules.guarded, v = o === "schema_rejected" ? "failed validation" : o === "settings_too_large" ? "is over the size limit" : o === "settings_unreadable" ? "could not be read" : null, H = [ ...e.settingsKeysWithheld > 0 ? [ `${e.settingsKeysWithheld} ${I(e.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)` ] : [], ...p > 0 ? [ `${p} permission ${I(p, "rule")} that ${I(p, "names", "name")} a path or device tool on this machine or could not be read` ] : [], ...y > 0 ? [ `${y} allow ${I(y, "rule")} ${Ze(y)}` ] : [], ...S > 0 ? [ `${S} ${I(S, "text")} (attribution, language, output style) ${Ze(S)}` ] : [], ...P > 0 ? [ `${P} allow ${I(P, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${I(P, "it", "them")}` ] : [] ], x = f.length > 0 ? [ `Not sent from ${u}: ${f.join("; ")}` ] : [];
  if (v !== null) return [ a === "reopen_sent_nothing" ? `${Qkn}: ${l} ${v}` : `${Jkn}: ${l} ${v}; ${o === "settings_too_large" ? "make it smaller" : "fix it"} and ${a === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`, ...x ].join(". ");
  let T = H.length > 0 ? [ `Settings kept on this machine: ${H.join("; ")}` ] : [], h = g > 0 ? [ `${g} deny or ask ${I(g, "rule is", "rules are")} not in force in the cloud session: ${I(g, "it looks like it holds", "they look like they hold")} a credential (reword ${I(g, "it", "them")} in ${l})`, ...T, ...x ] : [ ...x, ...T ];
  return h.length === 0 ? null : h.join(". ");
}

function Srr(e) {
  let n = e.filter(r => r.reason === "credential").map(r => r.path);
  return {
    claudeMd: n.includes(XJ),
    others: N(n, r => r !== XJ)
  };
}

function L6r(e) {
  let n = e.filter(o => o.reason === "symlink_not_sent").map(o => o.path), r = [ ...n.filter(o => o === XJ), ...n.filter(o => o !== XJ) ].slice(0, 2).map(o => o === WTe || o === aVe ? `${o}/` : En(o));
  return {
    names: r,
    more: n.length - r.length
  };
}

function Ze(e) {
  return `that ${I(e, "looks", "look")} like ${I(e, "it holds", "they hold")} a credential`;
}

function V(e, n, r, o) {
  if (r === 0) return null;
  let s = e.filter(f => f.reason === n).map(f => En(f.path) + (f.line === void 0 ? "" : `:${f.line}`)), a = s.slice(0, yr), l = s.length - a.length, u = a.length === 0 ? "" : ` (${a.join(", ")}${l > 0 ? ` and ${l} more` : ""})`;
  return o(r) + u;
}

export { H6r, D6r, Jkn, Qkn, Zkn, brr, Srr, L6r };
