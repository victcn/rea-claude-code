// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ai } from "./chunk-f4r8hspx.js";

import { g } from "./chunk-3ykz5st8.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { TQo } from "./chunk-633pbbb4.js";

import { Uvt } from "./chunk-fw01syjs.js";

var i = "\x3c!-- dataviz-callout --\x3e", n = () => "", o;

function h4o(t) {
  n = t;
}

async function fzt() {
  let {SKILL_MD: t} = await import("./chunk-pew29s3x.js");
  return o = TQo(ai(t).content.trimStart().replace(i, () => n())), o;
}

function y4o() {
  return o;
}

function p(t) {
  return {
    arm() {
      ee().templateLanes[t] = !0;
    },
    take() {
      let e = ee().templateLanes, a = e[t];
      return e[t] = !1, a;
    },
    giveBack() {
      ee().templateLanes[t] = !0;
    }
  };
}

var r = p("prototypeArmed");

function _4o() {
  r.arm(), g("prototype_started", {});
}

function b4o() {
  return r.take();
}

function mzt() {
  r.giveBack();
}

function s(t, e) {
  ee().templateLanes.boundSlugs.set(t, e);
}

function S4o(t) {
  return ee().templateLanes.boundSlugs.get(t);
}

function w4o(t, e) {
  s(t, "prototype"), g("prototype_publish", {
    artifact_slug: Uvt(t),
    is_first_publish: e
  });
}

export { h4o, fzt, y4o, _4o, b4o, mzt, S4o, w4o };
