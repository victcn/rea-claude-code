// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { j, l } from "./chunk-b0z4bv3v.js";

import { tc, km, zDt, ip, LZ, W_, yGn, eTo, dU, Ig, In, k } from "./chunk-xywp7esx.js";

import { gr, Pr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { Ic, t } from "./chunk-kawq2919.js";

import { er } from "./chunk-dd98x6x7.js";

import { dd, dRo, y0s, _0s, Xn } from "./chunk-x35dw27e.js";

import { Z2n } from "./chunk-qqd24q2y.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { jg, e_ } from "./chunk-h36n2zxz.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { gu } from "./chunk-53fww9mk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var aP = !0;

var m = () => gr() || tc() || Boolean(a.ANTHROPIC_API_KEY) || Boolean(er()?.env?.ANTHROPIC_API_KEY) || zDt() !== null || Boolean(km()) || ip() || Z2n() || !LZ({
  envBearerFallbackFor: yGn()
}).error;

function x(e) {
  return dRo(e) ?? [ e ];
}

async function c(e, o, r) {
  let u = [];
  for (let [h, i] of x(e).entries()) {
    let f = F(e, h, r), n;
    try {
      i.invalidateCache?.(), n = await (i.readAsyncStrict?.(f, {
        inaccessibleAs: "failure",
        unreadableFileAs: "failure",
        unparsableEntryAs: "failure"
      }) ?? i.readAsync(f));
    } catch (L) {
      t(`[secureStorage] strict read of ${i.name} rejected: ${l(L)}`, {
        level: "warn"
      }), n = dd;
    }
    if (n !== dd && n != null && !Kn(n)) n = dd;
    u.push({
      name: i.name,
      value: n === dd ? dd : o(Ic((i.osGuarded === !0 ? n : y0s(n ?? null)) ?? {}))
    });
  }
  return u;
}

function F(e, o, r) {
  return dRo(e) === void 0 || o > 0 ? r : void 0;
}

async function p() {
  if (m()) return !1;
  let [e, o] = await Promise.all([ c(Xn(), r => r.claudeAiOauth !== void 0), O() !== "macos" || _0s() ]);
  return o && e.every(r => r.value === !1);
}

var s = Ue({
  isLifted: !1,
  lifting: void 0
}, e => {
  e.isLifted = !1, e.lifting = void 0;
});

function S() {
  return s.lifting ??= p().then(e => {
    s.isLifted = e;
  }, e => {
    t(`credential stores not read strictly: ${l(e)}`);
  }), s.lifting;
}

var g9t = Ue({
  isFollowed: !1
}, e => {
  e.isFollowed = !1;
});

var d = new Set([ "disk", "payload" ]);

async function v4e() {
  let e = In(W_, aP);
  return !g9t.isFollowed && Ig() && e.value !== aP && d.has(e.source) ? S() : void 0;
}

var g = () => !s.isLifted || m();

function Vmr() {
  try {
    return eTo() || g();
  } catch (e) {
    return t(`GrowthBook: credential sources not read (${j(e).name})`), !0;
  }
}

var D = () => !g9t.isFollowed && Ig() && d.has(In(W_, aP).source) && !Vmr();

function Kmr() {
  let e = k(W_, aP), o = e !== aP, r = o && (dU() || D());
  if (o) v4e();
  return r ? aP : e;
}

var E = () => gu();

var PS = () => !he() && !E() && Kmr();

var h9t = () => PS() && !Sr("hooks") && !Pr();

var qmr = () => h9t() && !e_() && !jg();

export { aP, g9t, v4e, Vmr, Kmr, PS, h9t, qmr };
