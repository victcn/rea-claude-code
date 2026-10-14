// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { z } from "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { a } from "./chunk-j016gcgm.js";

import { FOe, Hj } from "./chunk-5brm0azz.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { i } from "./chunk-hedpgw9m.js";

import { Rn, sI } from "./chunk-dd98x6x7.js";

import { k } from "./chunk-xywp7esx.js";

import { sZ } from "./chunk-gmq0qwep.js";

function BVt() {
  return sI("feedbackDrafts")[0] ?? "notify";
}

function a5r() {
  if (sZ() !== null) return !1;
  if (FOe()) return !1;
  if (Hj()) return !1;
  if (Oe() !== "firstParty") return !1;
  let e = a.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === !1) return !1;
  if (e === !0) return k("tengu_juniper_relay", !1);
  return k("tengu_juniper_relay", !1);
}

function M2() {
  return BVt() !== "off" && a5r();
}

function FEn(e, {storageV5: t, via: r}) {
  let n = z() && t !== void 0 ? Rn("userSettings", {
    feedbackDrafts: e
  }, void 0, t) : Rn("userSettings", {
    feedbackDrafts: e
  });
  return i("tengu_feedback_drafts_setting_changed", {
    value: c(e),
    via: c(r)
  }), n;
}

export { BVt, a5r, M2, FEn };
