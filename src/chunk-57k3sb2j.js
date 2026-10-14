// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { d_, Ul } from "./chunk-znhtg8e4.js";

import { p } from "./chunk-jkzenvsk.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { o, v, u, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { randomBytes as g, timingSafeEqual as y } from "crypto";

import { unlinkSync as h } from "fs";

import { mkdir as S, open as w, readdir as R, unlink as d } from "fs/promises";

import { homedir as b } from "os";

import { dirname as P, join as f } from "path";

var x = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/, c = 4096, z = p(() => u({
  version: A(1),
  pid: v().int().positive(),
  procStart: o().min(1),
  nonceSha256: o()
}));

function m() {
  return f(b(), ".claude", "state", "unattended-serving-runs");
}

function a(n) {
  return f(m(), `${n}.json`);
}

async function PYs() {
  try {
    let n = await d_();
    if (n === void 0) return;
    let e = g(32).toString("hex"), r = a(process.pid);
    return await S(P(r), {
      recursive: !0,
      mode: 448
    }), await Tn(r, `${_({
      version: 1,
      pid: process.pid,
      procStart: n,
      nonceSha256: at(e)
    })}\n`, 384), await B(), process.once("exit", () => {
      try {
        h(r);
      } catch {}
    }), {
      token: `${process.pid}.${e}`,
      remove: async () => {
        try {
          await d(r);
        } catch {}
      }
    };
  } catch (n) {
    t(`unattended run grant: not recorded (${l(n)})`, {
      level: "warn"
    });
    return;
  }
}

async function i5r(n) {
  try {
    let e = n === void 0 ? null : x.exec(n);
    if (!e) return !1;
    let r = Number(e[1]), i = await T(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, at(e[2])) || !Aa(r)) return !1;
    return await Ul(r, {
      skipCache: !0
    }) === i.procStart;
  } catch {
    return !1;
  }
}

async function T(n) {
  let e;
  try {
    e = await w(n, "r");
    let r = Buffer.alloc(c + 1), {bytesRead: i} = await e.read(r, 0, r.length, 0);
    if (i > c) return;
    let s = z().safeParse(Y(r.subarray(0, i).toString("utf8")));
    return s.success ? s.data : void 0;
  } catch {
    return;
  } finally {
    await (e?.close().catch(() => {}));
  }
}

function j(n, e) {
  let r = Buffer.from(n), i = Buffer.from(e);
  return r.length === i.length && y(r, i);
}

async function B() {
  try {
    for (let n of await R(m())) {
      let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(n)?.[1]);
      if (Number.isInteger(e) && !Aa(e)) await d(a(e)).catch(() => {});
    }
  } catch {}
}

export { PYs, i5r };
