// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { In, k } from "./chunk-xywp7esx.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { a } from "./chunk-j016gcgm.js";

import { mh } from "./chunk-4mw3z9gg.js";

import { O } from "./chunk-1xnsr4dy.js";

function Ni() {
  if (mh().messagingBeyondOwnAgentsDisabled) return !1;
  let e = a.CLAUDE_CODE_HARBOR_KITE;
  if (e !== void 0) return Le(e);
  if (O() === "windows" && !k("tengu_harbor_kite_win", !0)) return !1;
  return k("tengu_harbor_kite", !0);
}

function fse(e) {
  if (e?.flagsSettled === !1 && In("tengu_cuddly_willow", !0).source === "fallback") return !1;
  return k("tengu_cuddly_willow", !0);
}

var Aen = "Cross-session messaging is not available in this session.";

export { Ni, fse, Aen };
