// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { q } from "./chunk-3pqddg8f.js";

import { E, jt } from "./chunk-b0z4bv3v.js";

import { se } from "./chunk-kawq2919.js";

import { mI } from "./chunk-30n0xq4e.js";

import { ud } from "./chunk-rgd61mm3.js";

import { cS } from "./chunk-9yajep3y.js";

import { lstat as u, readdir as w, rmdir as g, unlink as y } from "fs/promises";

import { dirname as h, join as l } from "path";

var A6r = "images", C6r = /^(\d+)\.[a-z]+$/;

async function jJo(a, p) {
  let e = {
    removed: 0,
    errors: 0
  }, r = se(), n, i;
  try {
    n = await r.realpath(p ?? ud()), i = await r.readdir(n);
  } catch {
    return e;
  }
  let o = q();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = l(n, t.name), c;
    try {
      c = await r.readdir(s);
    } catch {
      continue;
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || Vt(m.name) === null) continue;
      let d = l(s, m.name, A6r);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++;
      } catch (f) {
        if (!jt(f)) e.errors++;
      }
    }
  }
  return e;
}

async function I(a, p) {
  let e = await cS(a, [ a ], {
    leaf: "replace"
  });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return !1;
    let n = l(a, "any"), i = await cS(n, [ n ], {
      leaf: "replace"
    });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."), c = s === -1 ? t : t.slice(0, s);
        if (!C6r.test(c) || s !== -1 && !mI(t, c)) continue;
        await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {});
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath);
    } catch (o) {
      let t = E(o);
      if (t === "ENOTEMPTY" || t === "EEXIST") return !1;
      throw o;
    }
    return !0;
  } finally {
    await e.close();
  }
}

export { A6r, C6r, jJo };
