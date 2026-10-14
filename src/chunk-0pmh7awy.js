// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { DYn } from "./chunk-ddr690nj.js";

import { AYn } from "./chunk-z52kmxx4.js";

import { execFileSync as p } from "child_process";

import { lstatSync as g } from "fs";

import { join as m } from "path";

function E() {
  return !1;
}

class f {
  resolved=new Map;
  lookup(e) {
    return this.resolved.get(e);
  }
  remember(e, t) {
    this.resolved.set(e, t);
  }
  forget(e) {
    this.resolved.delete(e);
  }
}

var w = new K(() => new f), h = 5e3;

function u(e) {
  try {
    return g(e, {
      throwIfNoEntry: !1
    }) === void 0;
  } catch {
    return !1;
  }
}

var S = new Set([ ".com", ".exe", ".bat", ".cmd" ]);

function b(e) {
  let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, ""), n = t.lastIndexOf(".");
  return n > 0 && S.has(t.slice(n));
}

function YMr(e, t = !1) {
  let n = w.of(B().host), o = n.lookup(e);
  if (o !== void 0) if (o !== null) {
    if (!u(o)) return o;
    n.forget(e);
  } else {
    if (!t) return o;
    n.forget(e);
  }
  let c = AYn("SYSTEMROOT") || "C:\\Windows", d = m(c, "System32", "where.exe");
  try {
    let i = p(d, [ e ], {
      stdio: "pipe",
      encoding: "utf8",
      timeout: h,
      windowsHide: !0,
      env: process.env
    }).trim().split(/\r?\n/).filter(Boolean), a = process.cwd(), l = !1;
    for (let r of i) {
      if (u(r)) continue;
      if (DYn(r, a)) {
        l = !0;
        continue;
      }
      if (!b(r)) continue;
      return n.remember(e, r), r;
    }
    if (i.length > 0 && !l) n.remember(e, null);
    return null;
  } catch (s) {
    if (v(s)) n.remember(e, null);
    return null;
  }
}

function v(e) {
  if (e === null || typeof e !== "object") return !1;
  let t = "status" in e ? e.status : void 0, n = "signal" in e ? e.signal : void 0, o = "code" in e ? e.code : void 0;
  return t === 1 && !n && !o;
}

function Pj(e, t = !1) {
  if (!E()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return YMr(e, t);
}

export { YMr, Pj };
