// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E, tm } from "./chunk-b0z4bv3v.js";

import { le } from "./chunk-cqgvwwgb.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Cb } from "./chunk-9yajep3y.js";

import { pp } from "./chunk-r276nwd3.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { vMn, Qfr, v8t, Bst, k8t } from "./chunk-bkx9v5fh.js";

import { qe } from "./chunk-r8a304y3.js";

import { lstat as y, opendir as R } from "fs/promises";

import { join as g, sep as D } from "path";

async function QBt() {
  let o = await k8t();
  if (o !== null) return {
    root: o,
    nested: !1,
    followsShell: !1
  };
  let r = await b();
  return r === null ? null : {
    ...r,
    nested: !0
  };
}

var S = 256;

async function b() {
  try {
    if (!Jr() || qe.isSandboxingEnabled()) return null;
    let o = Bst();
    if (Cb(o) !== null) return null;
    let r = le(), i = vMn();
    if (i.size > 1) {
      let n = Qfr(r), e = n === void 0 ? void 0 : i.get(n), p = e !== void 0 && await f(e) === "directory" ? await u(e) : null;
      return p === null ? null : {
        root: p,
        followsShell: !0
      };
    }
    let [a] = i.values();
    if (a !== void 0) {
      let n = await f(a);
      if (n === "directory") {
        let e = await u(a);
        return e === null ? null : {
          root: e,
          followsShell: !1
        };
      }
      if (n === "other") return null;
    }
    let s = [], w = 0;
    for await (let n of await R(o)) {
      if (++w > S) return null;
      if (!n.isDirectory() || n.name.startsWith(".")) continue;
      let e = g(o, n.name);
      if (await f(e) !== "absent") s.push(e);
    }
    let c = pp(r), m = s.find(n => {
      let e = pp(n);
      return c === e || c.startsWith(e + D);
    }) ?? (s.length === 1 ? s[0] : void 0), h = m === void 0 ? null : await u(m);
    return h === null ? null : {
      root: h,
      followsShell: s.length > 1
    };
  } catch (o) {
    if (tm(o)) t(`workspace diff: nested repository scan failed: ${l(o)}`, {
      level: "warn"
    }); else d(o);
    return null;
  }
}

async function f(o) {
  try {
    return (await y(g(o, ".git"))).isDirectory() ? "directory" : "other";
  } catch (r) {
    let i = E(r);
    if (i === "ENOENT" || i === "ENOTDIR") return "absent";
    throw r;
  }
}

async function u(o) {
  return v8t(o) === null ? null : k8t(void 0, o);
}

export { QBt };
