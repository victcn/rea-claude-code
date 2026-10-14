// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Je, j } from "./chunk-b0z4bv3v.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { r_, _zn, BP, Nzn } from "./chunk-xywp7esx.js";

import { xr } from "./chunk-yxennhe9.js";

import { Jc, Jw } from "./chunk-84yp45y8.js";

var kjr = "https://code.claude.com/docs/en/model-config", Tjr = `${kjr}#correct-the-window-for-a-gateway-or-custom-model-id`;

function nVo(o, e) {
  if (t(`[autocompact] ${o.detail}`, {
    level: "warn"
  }), e.interactive) return o;
  return e.headless(o.text), null;
}

function rVo(o, e, n) {
  try {
    return u(o, e, n);
  } catch (s) {
    return d(Je(j(s), "unknown-model notice failed")), null;
  }
}

function u(o, e, n) {
  let {source: s, window: i} = Jw(Jc(o, n), e, n);
  if (s !== "unknown-model") return null;
  let l = Nzn(o), m = a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (l && m !== void 0 && m > 0) return null;
  let w = i < 1e6, r = [];
  if (!BP() && w) r.push("append [1m] to the model name for 1M");
  if (l) r.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let c = r.length > 0 ? `; if the model accepts ${w ? "more" : "less"}, ${r.join(", or ")}` : "";
  return {
    model: o,
    window: i,
    text: `Claude Code doesn't recognize the model "${r_(o)}", so it assumes a context window of ${xr(i)} tokens. Update Claude Code, or see ${Tjr} to set the window.`,
    detail: `${_zn(o)} Until then auto-compact keeps this session within ${xr(i)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`
  };
}

export { kjr, Tjr, nVo, rVo };
