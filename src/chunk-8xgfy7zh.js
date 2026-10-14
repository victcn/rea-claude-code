// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J, Ht } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { it } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import { QY } from "./chunk-gmq0qwep.js";

import { Ige, Gze, KBr } from "./chunk-rffd6d4a.js";

import { dPo, KLs, qLs } from "./chunk-q6wab2jw.js";

import "./chunk-p35rdtee.js";

import "./chunk-1xnsr4dy.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var U = C(function(Fe, M) {
  var Le = Ne("path");
  M.exports = {
    isSupported: !1
  };
});

var h = {
  pxPerToken: 28,
  maxTargetPx: 1568,
  maxTargetTokens: 1568
};

function I(o, r) {
  return Math.floor((o - 1) / r) + 1;
}

function R(o, r, i) {
  return I(o, i) * I(r, i);
}

function P(o, r, i) {
  let {pxPerToken: d, maxTargetPx: p, maxTargetTokens: f} = i;
  if (o <= p && r <= p && R(o, r, d) <= f) return [ o, r ];
  if (r > o) {
    let [n, s] = P(r, o, i);
    return [ s, n ];
  }
  let g = o / r, b = o, e = 1;
  for (;;) {
    if (e + 1 === b) return [ e, Math.max(Math.round(e / g), 1) ];
    let n = Math.floor((e + b) / 2), s = Math.max(Math.round(n / g), 1);
    if (n <= p && R(n, s, d) <= f) e = n; else b = n;
  }
}

var v = .1, D = 1;

var B = `Scale factor in [${v}, ${D}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;

function c() {
  let o = QY();
  if (o.inputModule) return o.inputModule;
  let r = U();
  if (!r.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return o.inputModule = r;
}

var E = .75, L = 5e3;

function w(o, r, i) {
  let d = Math.round(o * i), p = Math.round(r * i);
  return P(d, p, h);
}

async function T() {
  let {stdout: o, code: r} = await it("pbpaste", [], {
    useCwd: !1
  });
  if (r !== 0) throw Error(`pbpaste exited with code ${r}`);
  return o;
}

async function x(o) {
  let {code: r} = await it("pbcopy", [], {
    input: o,
    useCwd: !1
  });
  if (r !== 0) throw Error(`pbcopy exited with code ${r}`);
}

function F(o) {
  if (o.length !== 1) return !1;
  let r = o[0].toLowerCase();
  return r === "escape" || r === "esc";
}

var _ = 50, N = 50;

async function A(o, r, i) {
  await o.moveMouse(r, i, !1), await J(_);
}

async function k(o, r) {
  let i;
  while ((i = r.pop()) !== void 0) try {
    await o.key(i, "release");
  } catch {}
}

async function O(o, r, i) {
  let d = [];
  try {
    for (let p of r) await o.key(p, "press"), d.push(p);
    return await i();
  } finally {
    await k(o, d);
  }
}

async function H(o, r) {
  let i;
  try {
    i = await T();
  } catch {
    t("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if (await x(r), await T() !== r) throw Error("Clipboard write did not round-trip.");
    await o.keys([ "command", "v" ]), await J(100);
  } finally {
    if (typeof i === "string") try {
      await x(i);
    } catch {
      t("[computer-use] clipboard restore after paste failed");
    }
  }
}

async function z(o, r, i, d) {
  if (!d) {
    await A(o, r, i);
    return;
  }
  let p = await o.mouseLocation(), f = r - p.x, g = i - p.y, b = Math.hypot(f, g);
  if (b < 1) return;
  let e = Math.min(b / 2e3, .5);
  if (e < .03) {
    await A(o, r, i);
    return;
  }
  let n = 60, s = 1e3 / n, a = Math.floor(e * n);
  for (let u = 1; u <= a; u++) {
    let m = u / a, y = 1 - Math.pow(1 - m, 3);
    if (await o.moveMouse(Math.round(p.x + f * y), Math.round(p.y + g * y), !1), u < a) await J(s);
  }
  await J(_);
}

function Ke(o) {
  throw Error("createCliExecutor called on linux. Computer control is macOS-only.");
}

async function Qe(o) {
  if (o.length === 0) return;
  await Ige().apps.unhide([ ...o ]);
}

export { Ke as createCliExecutor, Qe as unhideComputerUseApps };
