// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { li } from "./chunk-zvghq5er.js";

import { E } from "./chunk-b0z4bv3v.js";

import { RYn, xYn } from "./chunk-ddr690nj.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Qfs } from "./chunk-sqb9meyh.js";

import { ll } from "./chunk-hmce8a0s.js";

import { vz } from "./chunk-2h2evctp.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { mz } from "./chunk-4v78v8fd.js";

import { oZt } from "./chunk-km6d4a9r.js";

import { Twn } from "./chunk-fn0z92f3.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as f } from "fs";

import { link as C, lstat as l, mkdir as L, open as g, readlink as x, realpath as h, stat as D, unlink as I } from "fs/promises";

import { posix as M } from "path";

import { pipeline as k } from "stream/promises";

var {basename: N, dirname: u, join: m, relative: b, sep: U} = M, G = new Set([ "claude.md", "claude.local.md", "agent.md" ]), X = new Set([ "head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__" ]), W = new Set([ "config", "config.worktree" ]), Y = new Set([ "sitecustomize", "usercustomize" ]), v = /^-|\s-\S|[^\P{ASCII}\w .()+,=@#%[\]-]/u, B = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u, Tyn = 255;

function z(e, t) {
  let n = ll(e);
  if (n.startsWith(".")) return "dot_name";
  if (G.has(n) || Twn.has(n)) return "instruction_file";
  if (X.has(n) || Y.has(nt(n, ".")) || t && (vz.has(n) || W.has(n))) return "unsafe_name";
  if (xYn(e) || RYn.test(e) || v.test(e) || B.test(e)) return "odd_spelling";
  return;
}

function Uke(e) {
  let t = e.split(U);
  for (let [n, r] of t.entries()) {
    let i = z(r, n === t.length - 1);
    if (i !== void 0) return i;
  }
  return;
}

async function y(e) {
  try {
    return await h(e);
  } catch (t) {
    if (E(t) !== "ENOENT" || u(e) === e) throw t;
    return m(await y(u(e)), N(e));
  }
}

function _(e, t, n) {
  if (!oZt(e, t)) return "outside_home";
  let r = m(t, N(n));
  return Uke(b(e, r)) ?? (mz(n, [ n, r ]).safe ? void 0 : "write_would_ask");
}

var J = new Set([ "EEXIST", "ENOTDIR", "ENOENT" ]);

async function A(e) {
  try {
    return {
      outcome: (await l(e)).isFile() ? "already_present" : "path_occupied"
    };
  } catch (t) {
    if (E(t) === "ENOENT") return;
    throw t;
  }
}

async function Bke(e, t) {
  let n = m(e, t), r = await h(e);
  try {
    let i = Uke(t) ?? _(r, await y(u(n)), n);
    return i === void 0 ? await A(n) : {
      outcome: "refused_name",
      refusal: i
    };
  } catch (i) {
    if (E(i) === "ENOTDIR") return {
      outcome: "path_occupied"
    };
    throw i;
  }
}

async function Z(e, t, n, r) {
  try {
    await C(e, n);
  } catch (s) {
    if (E(s) === "EEXIST") return;
    if (!Qfs(s) && E(s) !== "EXDEV") throw s;
    return await j(t, n, r);
  }
  let [i, o] = await Promise.all([ t.stat(), l(n) ]);
  if (w(o, i)) return i;
  let a = await R(l(e));
  if (w(a, i)) return;
  for (let s of [ a, await R(D(e)) ]) if (s !== void 0 && await EZe(n, s)) break;
  let c = Error("the source of a home file was exchanged while it was published");
  throw c.code = "HOME_SOURCE_EXCHANGED", c;
}

function w(e, t) {
  return e?.ino === t.ino && e.dev === t.dev;
}

async function R(e) {
  try {
    return await e;
  } catch (t) {
    if (E(t) === "ENOENT") return;
    throw t;
  }
}

async function EZe(e, t) {
  try {
    if (!w(await R(l(e)), t)) return !1;
    return await I(e), !0;
  } catch (n) {
    if (E(n) !== "ENOENT") d(n);
    return !1;
  }
}

async function j(e, t, n) {
  let r;
  try {
    r = await g(t, f.O_WRONLY | f.O_CREAT | f.O_EXCL | Zs, n);
  } catch (o) {
    if (E(o) === "EEXIST") return;
    throw o;
  }
  let i;
  try {
    return i = await r.stat(), await r.chmod(n), await k(e.createReadStream({
      start: 0,
      autoClose: !1
    }), r.createWriteStream()), w(await l(t), i) ? i : void 0;
  } catch (o) {
    throw await r.close().catch(() => {}), await (i === void 0 ? I(t).catch(() => {}) : EZe(t, i)), 
    o;
  }
}

async function K(e, t) {
  if (O() !== "linux") return t(e, () => h(e));
  let n = await g(e, f.O_RDONLY | f.O_DIRECTORY | Zs);
  try {
    let r = `/proc/self/fd/${n.fd}`;
    return await t(r, () => x(r));
  } finally {
    await n.close();
  }
}

var H = 420;

async function kZe(e, t, n) {
  let r = m(t, n), i = await h(t), o;
  try {
    let a = Uke(n) ?? _(i, await y(u(r)), r);
    if (a !== void 0) return {
      outcome: "refused_name",
      refusal: a
    };
    o = await L(u(r), {
      recursive: !0
    });
  } catch (a) {
    if (J.has(E(a))) return {
      outcome: "path_occupied"
    };
    throw a;
  }
  return await K(u(r), async (a, c) => {
    let s = _(i, await c(), r);
    if (s !== void 0) return {
      outcome: "refused_name",
      refusal: s
    };
    let p = await g(e, li | Zs);
    try {
      if (!(await p.stat()).isFile()) {
        let P = Error("the source of a home file is not a regular file");
        throw P.code = "HOME_SOURCE_NOT_REGULAR", P;
      }
      await p.chmod(H);
      let S = m(a, N(r)), T = await Z(e, p, S, H);
      if (T === void 0) return await A(S) ?? {
        outcome: "path_occupied"
      };
      let F = _(i, await c(), r);
      if (F !== void 0) return await EZe(S, T), {
        outcome: "refused_name",
        refusal: F
      };
      return {
        outcome: "placed",
        ...o !== void 0 && {
          madeDirectory: o
        }
      };
    } finally {
      await p.close();
    }
  });
}

export { Tyn, Uke, Bke, EZe, kZe };
