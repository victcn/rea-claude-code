// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { j } from "./chunk-b0z4bv3v.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Ce, FH, ce } from "./chunk-xywp7esx.js";

function uvt() {
  try {
    return !1;
  } catch (e) {
    return d(j(e)), !1;
  }
}

var i = 20, u = i + 1, _Xo = 10, _ = 12096e5, n5r = [ {
  text: "Showing fewer prompt suggestions"
}, {
  text: " \xb7 use one to bring them back",
  dim: !0
} ];

function Tnr() {
  let e = ce();
  if (r(e) < i) return !1;
  if (a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return !1;
  if (uvt()) return !1;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return !1;
  return !0;
}

function $Vt(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, !1);
    return;
  }
  if (!n || r(ce()) >= i) return;
  if (n.unusedInARow++, n.unusedInARow >= i) n.unusedInARow = 0, Ce(S, o);
}

function bXo(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, !0);
}

function r5r(e) {
  if (!p(ce()) || !Tnr()) return !1;
  return Ce(o => p(o) ? {
    ...o,
    promptSuggestionUnusedStreak: u
  } : o, e), g("prompt_suggestion_back_off_notice"), !0;
}

function m(e, o) {
  let n = r(ce());
  if (n === 0) return;
  if (!Tnr()) {
    Ce(c, e);
    return;
  }
  let l = {
    was_notice_claimed: n === u,
    via_config_toggle: o
  };
  FH(c, e).then(s => {
    if (s) g("prompt_suggestion_back_off_end", l); else f("prompt_suggestion_back_off_end", "reset_unconfirmed", l);
  }).catch(s => t(`Prompt suggestion back-off: could not log the end event: ${s}`, {
    level: "error"
  }));
}

function c(e) {
  return r(e) === 0 ? e : {
    ...e,
    promptSuggestionUnusedStreak: 0
  };
}

function S(e) {
  return r(e) >= i ? e : {
    ...e,
    promptSuggestionUnusedStreak: i
  };
}

function p(e) {
  let o = r(e);
  return o >= i && o !== u;
}

function r(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0;
}

export { uvt, _Xo, n5r, Tnr, $Vt, bXo, r5r };
